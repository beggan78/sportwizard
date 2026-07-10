# Privacy Policy

**Last updated: 2026-05-29**

Sport Wizard ("**Sport Wizard**", "**we**", "**us**", "**our**") is a coaching tool that helps adult youth-soccer coaches plan player rotations, playing time, and fair substitutions. This Privacy Policy explains what personal data we process, why, and the rights you have under the EU General Data Protection Regulation (GDPR).

This is a free tool. We do not sell personal data, and we do not use it for advertising.

## 1. Data controller

The data controller responsible for the processing described here is:

- **Niclas Berggren AB** (Org. nr. 559212-3623)
- Contact: **niclas.berggren.ab@gmail.com**

For any question about this policy or to exercise your rights (Section 8), email the address above.

## 2. Who uses Sport Wizard, and whose data is processed

Sport Wizard is used by **adult coaches and team administrators**. **The app is not designed for, or used directly by, minors.** A coach signs in and enters information about the players they coach — many of whom are children.

This means we process **minors' personal data on behalf of the coach**, for the sole purpose of running the coaching features the coach asked for (rotations, playing time, attendance, match records). We do not contact players, do not let players sign in, and do not use players' data for any purpose other than providing the coaching tool to the responsible adult.

See Section 9 for the children-specific details.

## 3. What we collect

**Coach / administrator account**

- Email address.
- Name (supplied directly, or from your Google or Apple sign-in).
- Authentication identifiers from your chosen sign-in provider.

**Player records** (entered by the coach)

- Player name.
- Playing position(s) and role.
- Attendance and participation.

**Match and team data**

- Match events (goals, substitutions, playing time, period data).
- Team metadata (team name, squad configuration, coaching roles).

**Technical / usage data**

- Anonymous, aggregated usage analytics via Google Analytics — **only if you consent** (Section 7).
- Standard server logs and security data from our hosting and database providers.

## 4. What we do **not** collect

We do **not** collect or request:

- Location data.
- Contacts.
- Microphone or camera access.
- Photos.
- Advertising identifiers (IDFA / AAID).
- Any special-category data (health, medical, etc.) — see the Terms of Service; the app must not be used to store medical data.

> We do collect player data entered by the coach. We never claim "no data collected."

## 5. Why we process data, and the legal basis

| Purpose | Legal basis (GDPR Art. 6) |
| --- | --- |
| Create and secure your coach account | Contract (Art. 6(1)(b)) |
| Provide coaching features (rotations, playing time, attendance, match records) | Contract / legitimate interest of the coach in managing their team (Art. 6(1)(b)/(f)) |
| Keep the service secure and prevent abuse | Legitimate interest (Art. 6(1)(f)) |
| Optional usage analytics | Consent (Art. 6(1)(a)) — see Section 7 |

For minors' data, the coach is responsible for having a lawful basis to enter it (see Section 9); we process it as part of providing the tool.

## 6. Storage, location, and security

- Data is stored with **Supabase**, hosted in the **EU region `eu-north-1` (Stockholm, Sweden)**. Player and match data does not leave the EU in normal operation.
- Data is **encrypted in transit** (HTTPS/TLS).
- Access is **isolated per team** using Postgres Row-Level Security (RLS): a coach can only read and write data for teams they belong to.
- Credentials for optional external integrations are encrypted at rest (AES-256-GCM) before storage.

## 7. Cookies, local storage, and analytics

Sport Wizard is a single-page web app. It uses:

- **Essential local storage / device preferences** — to keep you signed in, remember your settings (sound, theme, language), and hold in-progress match state. This is required for the app to function and is not used for tracking.
- **Google Analytics 4** (measurement ID `G-5L2PXD4CBR`) with **Google Consent Mode v2** — to understand anonymous, aggregated usage. **Analytics storage is denied by default.** It is only enabled if you click "Accept" on our cookie-consent banner. You can decline, and the app works fully either way. We do not enable advertising storage, ad personalization, or ad-user-data.

We do **not** use third-party advertising or cross-site tracking cookies. Because consent is collected explicitly through the in-app banner and only essential storage is used otherwise, a separate full-screen cookie wall is not required under GDPR/ePrivacy; the banner is the consent mechanism.

## 8. Your GDPR rights

You have the right to:

- **Access** the personal data we hold about you.
- **Rectify** inaccurate data.
- **Erase** your data ("right to be forgotten").
- **Export / data portability** — receive your data in a portable form.
- **Restrict** processing.
- **Object** to processing based on legitimate interest.
- **Withdraw consent** for analytics at any time (change your choice in the app's Preferences).

To exercise any of these, email **niclas.berggren.ab@gmail.com**. We will respond within the time required by law (normally one month). You also have the right to lodge a complaint with the Swedish supervisory authority, **Integritetsskyddsmyndigheten (IMY)**.

## 9. Children's data

Most players whose data a coach enters are children. We take this seriously:

- The **Swedish age of digital consent is 13** (Sweden's lower limit under GDPR Article 8(1)), not the GDPR default of 16.
- Sport Wizard is **operated by and for adult coaches**. Children do not have accounts and do not interact with the app.
- A coach who enters a player's data is responsible for having the appropriate authority or consent to do so. **Parents and legal guardians** of a player may, through the coach or by contacting us directly, request access to, correction of, or deletion of that player's data.
- We process minors' data only to provide the coaching features and never for profiling, marketing, or any unrelated purpose.

Parents/guardians can contact **niclas.berggren.ab@gmail.com** with any request concerning a child's data.

## 10. Sharing and sub-processors

We do **not** share personal data with third parties for marketing, and we do not sell data.

We rely on the following sub-processors to run the service:

| Sub-processor | Purpose | Data involved |
| --- | --- | --- |
| **Supabase** (EU, Stockholm) | Database, authentication, hosting of app data | All account, player, and match data |
| **Google** (Google Sign-In) | Optional OAuth sign-in | Email, name, auth identifier |
| **Apple** (Sign in with Apple) | Optional OAuth sign-in (required on iOS) | Email (or relay address), name, auth identifier |
| **Google Analytics** | Optional, consent-gated usage analytics | Anonymous/aggregated usage events |
| **GitHub Pages** | Static web hosting of the app shell | Standard request logs |

If a coach connects an **optional external team platform** (e.g. SportAdmin), data such as attendance and upcoming matches is retrieved from that platform at the coach's instruction. Those platforms are independent controllers of the data you hold with them; their own privacy policies apply.

## 11. Retention

- **Coach account and the data you create** are retained while your account is active.
- **When a coach leaves a team**, their access to that team's data ends.
- **On account deletion or on request**, we delete your personal data and the player/match records you control, except where we must retain limited data to meet a legal obligation. You can delete your account at any time directly in the app, under **Profile → Danger zone → Delete account**. You may also request deletion via **niclas.berggren.ab@gmail.com**.

## 12. Changes to this policy

We may update this policy. When we do, we will revise the "Last updated" date above. The current version is always available in the app (Preferences → Legal) and at our public policy URL, and for material changes we will take reasonable steps to bring the update to your attention. Continued use after the revised date means you accept the updated policy.

## 13. Contact

Questions, requests, or complaints:

**Niclas Berggren AB** (Org. nr. 559212-3623) — **niclas.berggren.ab@gmail.com**
