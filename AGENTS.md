# AGENTS.md

## Cursor Cloud specific instructions

This repo is a single Vite + React 19 SPA living in `sisonke-website/` (a township-business
marketing site with a Firestore-backed "Businesses" carousel). All commands run from
`sisonke-website/`. Standard scripts are defined in `sisonke-website/package.json`
(`dev`, `build`, `lint`, `test`, `preview`) and documented in `sisonke-website/README.md`.

- Node 22 is available and satisfies the README's "Node 18+" requirement.
- Run the dev server with `npm run dev` (Vite, default port 5173). Use `-- --host` to expose it.
- Run unit tests non-interactively with `npm run test -- --run` (plain `npm run test` starts
  Vitest in watch mode and will not exit on its own).
- Lint with `npm run lint`; smoke-test the production bundle with `npm run build`.

### Firebase env vars (non-obvious gotcha)
`src/firebaseClient.js` throws at import time if any `VITE_FIREBASE_*` variable is unset, which
crashes the whole app on boot (white screen), not just the Businesses section. To run the dev
server locally you must provide all six `VITE_FIREBASE_*` vars (see `.env.example`). For local
dev without real credentials, create a gitignored `.env.local` with placeholder values — the
app boots fully and the Businesses section degrades gracefully (Firestore calls just don't
return live data). The unit tests mock Firestore and do not need any env vars.
