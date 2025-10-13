# Sisonke - City Branding Website

## Overview
Sisonke spotlights township and peri-urban businesses through a React + Vite single-page experience, pairing Tailwind-styled storytelling with live data fetched from Firebase. The goal: give municipalities a shareable, high-trust snapshot of community impact partners while keeping operating costs low for a small South African team.

## Prerequisites
- Node.js 18 LTS or newer (`node -v` to confirm).
- npm 9+ (bundled with recent Node.js releases).
- Firebase project with Firestore enabled for the **Businesses** collection.

## Local setup
1. Duplicate the environment template and populate Firebase credentials:
   ```bash
   cp .env.example .env
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Launch the dev server with hot reload:
   ```bash
   npm run dev
   ```
4. Build an optimized bundle (for smoke-testing before deploys):
   ```bash
   npm run build
   ```

## GitHub Pages deployment
1. Add the GitHub Pages helper:
   ```bash
   npm install --save-dev gh-pages
   ```
2. Configure Vite to emit relative asset paths so the site serves correctly from `<username>.github.io/<repo>/` by adding the `base` setting in `vite.config.js`:
   ```js
   // vite.config.js
   export default defineConfig({
     base: './',
     plugins: [react()],
     // ...
   })
   ```
3. Update `package.json` with the GitHub Pages homepage and deployment scripts (replace `<github-username>` with your account name if different):
   ```json
   {
     "homepage": "https://<github-username>.github.io/Sisonke-Website-Comparison/",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```
   Keep existing scripts such as `dev`, `build`, and `test` intact—only extend the block as shown.
4. Commit the changes, then publish the static bundle:
   ```bash
   npm run deploy
   ```
5. GitHub Pages will host the compiled `dist` directory on the `gh-pages` branch. Re-run `npm run deploy` whenever content or data integrations change.

## Firebase data model – Businesses feature
- **Collection**: `businesses`
- **Fields**: `name`, `community`, `summary`, `focusArea`, `impact`, plus optional `retention` and `contact` strings for public-facing info.
- Populate Firestore with data that has explicit, revocable consent from each participant and no confidential details.

## POPIA compliance note
The **Businesses** carousel processes business profiles sourced from Firestore. Ensure consent records cover purpose (public promotion), retention (until withdrawal), and subject rights. Enforce Firebase security rules for RBAC, log access, and be ready to action access/erasure requests within 5 business days to stay aligned with POPIA obligations for municipal partnerships.

## Verification & rollback
- Validate dependencies: `npm ls firebase` and `npm ls gh-pages`.
- Revert a problematic release quickly: `git revert HEAD` and redeploy.

## Quality checks
- Unit tests:
  ```bash
  npm run test
  ```
- Preview the production build locally:
  ```bash
  npm run preview
  ```
