# Sisonke Website

Community-first landing page powered by React, Vite, Tailwind, and Firebase for dynamic partner showcases.

## Quick start
1. `cp .env.example .env`
2. Fill in the Firebase credentials from the Firebase console (Project settings → General → Your apps).
3. `npm install`
4. `npm run dev`

## Firebase configuration
- Enable **Firestore** in Firebase console and create a collection named `businesses`.
- Each document should follow this schema (adapt to your real fields):
  - `name` (string) – business name used on the card header.
  - `community` (string) – e.g. Soweto, Umlazi; shown as the badge.
  - `summary` (string) – one sentence impact blurb.
  - `focusArea` (string) – short descriptor of the operating focus.
  - `impact` (string) – highlight measurable traction.
  - `retention` (string, optional) – note on customer retention/support cycles.
  - `contact` (string, optional) – public-facing contact (no sensitive data).
- Populate Firestore with public/consented data only. The component automatically fetches the collection on mount.

## Verification & rollback
- Confirm the Firebase SDK is present with `npm ls firebase`.
- If you need to undo the latest deployment: `git revert HEAD` restores the previous working tree.

## Testing
- Run unit tests: `npm run test`

## POPIA data flow – Businesses carousel
- **Data map**: Firebase Firestore (source) → client fetch via `Businesses.jsx` (processing) → renders in browser (storage is transient in memory) → cached in-session only (retention: cleared on refresh or tab close).
- **Lawful basis & consent**: rely on explicit written consent from each featured business to publish their public profile data; honour access/erasure requests within 5 business days via support@sisonke.co.za.
- **Controls**: enforce Firebase security rules (read-only for public data), restrict writes to authenticated CMS users, enable encryption at rest/in transit (default in Firebase), audit changes via Firebase audit logs, and apply RBAC in Firebase console.
- **Breach playbook**: detect (Firebase alerts + Vercel monitoring) → contain (revoke compromised keys, lock writes, rotate env vars) → notify (affected businesses + SA Information Regulator within 72 hours) → document and improve (post-mortem, rule updates).
