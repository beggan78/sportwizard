/* Sport Wizard service worker
 *
 * Goals (M1):
 *   - Make the app installable (Lighthouse PWA criteria).
 *   - Boot the app shell when offline so the UI renders even without network.
 *   - Stay out of the way of Supabase API/auth calls and the OAuth callback.
 *
 * Anything dynamic (DB queries, edge functions, auth) MUST hit the network.
 * We never cache cross-origin requests or anything pointing at *.supabase.co.
 */

// Bump CACHE_VERSION when SHELL_ASSETS changes or SW logic changes materially.
// CRA static/* files are content-hashed and self-invalidating — no bump needed for JS/CSS updates.
const CACHE_VERSION = 'v2';
const CACHE_NAME = `sport-wizard-shell-${CACHE_VERSION}`;

const SHELL_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/favicon.png',
  '/icons/icon-48.png',
  '/icons/icon-192.png',
  '/icons/icon-512.png',
  '/icons/icon-512-maskable.png',
  '/icons/apple-touch-icon-180.png',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => cache.addAll(SHELL_ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((key) => key.startsWith('sport-wizard-shell-') && key !== CACHE_NAME)
            .map((key) => caches.delete(key))
        )
      )
      .then(() => self.clients.claim())
  );
});

function isStaticAsset(url) {
  return (
    url.pathname.startsWith('/static/') ||
    url.pathname.startsWith('/icons/') ||
    url.pathname === '/manifest.json' ||
    url.pathname === '/favicon.png'
  );
}

self.addEventListener('fetch', (event) => {
  const { request } = event;

  if (request.method !== 'GET') return;

  const url = new URL(request.url);

  // Same-origin only — let Supabase, Google Fonts, analytics, etc. flow normally.
  if (url.origin !== self.location.origin) return;

  // Defensive bypass even on same-origin in case something is proxied.
  if (url.hostname.endsWith('.supabase.co')) return;

  if (request.mode === 'navigate') {
    // Network-first for navigations: keeps auth callbacks and routing fresh,
    // falls back to the cached shell when offline.
    event.respondWith(
      fetch(request).catch(() =>
        caches.match('/index.html', { cacheName: CACHE_NAME }).then((cached) => cached || Response.error())
      )
    );
    return;
  }

  if (isStaticAsset(url)) {
    // Cache-first with background revalidation.
    event.respondWith(
      caches.match(request).then((cached) => {
        const fetchPromise = fetch(request)
          .then((response) => {
            // Only cache complete 200 responses. The Cache API rejects partial
            // (206) responses, which the browser returns for range requests.
            if (response && response.status === 200) {
              const clone = response.clone();
              caches.open(CACHE_NAME).then((cache) => cache.put(request, clone));
            }
            return response;
          })
          .catch(() => cached || Response.error());
        return cached || fetchPromise;
      })
    );
  }
});
