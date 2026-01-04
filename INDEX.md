# Repository Index

## Table of Contents
- [Repository Overview](#repository-overview)
- [Directory Structure](#directory-structure)
- [Key Files](#key-files)
- [Modules and Components](#modules-and-components)
- [Entry Points and Main Workflows](#entry-points-and-main-workflows)
- [Dependencies and Tech Stack](#dependencies-and-tech-stack)
- [Navigation](#navigation)

## Repository Overview
Sisonke-Website-Comparison contains a Vite + React single-page application that highlights the Sisonke community impact platform. The repository is structured with a project root that provides quick-start commands, while the primary application lives in `sisonke-website/` with components, styling, and Firebase integration for live data.

## Directory Structure
```
.
├── README.md
├── INDEX.md
└── sisonke-website/
    ├── README.md
    ├── eslint.config.js
    ├── index.html
    ├── package.json
    ├── package-lock.json
    ├── postcss.config.js
    ├── public/
    ├── src/
    │   ├── App.jsx
    │   ├── App.css
    │   ├── assets/
    │   ├── components/
    │   ├── firebaseClient.js
    │   ├── index.css
    │   ├── main.jsx
    │   └── test/
    ├── tailwind.config.js
    └── vite.config.js
```

### Major folders
- **sisonke-website/**: The Vite + React application source, configuration, and tests.
- **sisonke-website/public/**: Static assets served directly by Vite.
- **sisonke-website/src/**: Application source code and styles.
- **sisonke-website/src/components/**: React UI sections and corresponding tests.
- **sisonke-website/src/test/**: Shared test setup for Vitest and Testing Library.

## Key Files
- **README.md**: Top-level quick commands for running the site.
- **INDEX.md**: This repository index.
- **sisonke-website/README.md**: Detailed project overview, setup, Firebase data model, and deployment guidance.
- **sisonke-website/package.json**: Defines scripts, dependencies, and deployment targets.
- **sisonke-website/index.html**: HTML shell that Vite injects into (root mount point).
- **sisonke-website/src/main.jsx**: React entry that mounts the app and global styles.
- **sisonke-website/src/App.jsx**: App layout and section ordering with scroll animations.
- **sisonke-website/src/firebaseClient.js**: Firebase initialization and Firestore connection (requires VITE_ env vars).
- **sisonke-website/src/index.css / App.css**: Tailwind directives and additional global styles.
- **sisonke-website/vite.config.js**: Vite build/dev configuration.
- **sisonke-website/tailwind.config.js**: Tailwind theme and build setup.
- **sisonke-website/eslint.config.js**: ESLint configuration for code quality.

## Modules and Components
### Application root
- **App.jsx**: Composes the main sections and ties scroll progress to animated elements.

### UI sections (`src/components`)
- **Hero.jsx**: Animated hero header with CTA.
- **Features.jsx**: Feature cards describing key platform benefits.
- **HowItWorks.jsx**: Step-by-step process section.
- **Businesses.jsx**: Firestore-driven carousel of community businesses with loading/error states.

### Testing (`src/components/__tests__`)
- **Businesses.test.jsx**: Mocks Firestore and verifies loading/error/success states.
- **Features.test.jsx**: Validates feature card rendering.
- **HowItWorks.test.jsx**: Confirms the three-step layout.
- **src/test/setup.js**: Testing Library + Vitest DOM matchers.

## Entry Points and Main Workflows
- **Dev server**: `npm run dev` (Vite starts the local server).
- **Production build**: `npm run build` (outputs `dist/`).
- **Preview build**: `npm run preview` (serve the build locally).
- **Unit tests**: `npm run test` (Vitest).
- **App runtime**: `index.html` → `src/main.jsx` → `src/App.jsx` → section components.
- **Data flow**: `Businesses.jsx` reads from Firestore via `firebaseClient.js` and the `businesses` collection.

## Dependencies and Tech Stack
- **Framework**: React 19 with Vite 7.
- **Styling**: Tailwind CSS 3 + PostCSS/Autoprefixer.
- **Animation**: Framer Motion.
- **Data**: Firebase Firestore.
- **Testing**: Vitest + Testing Library + JSDOM.
- **Linting**: ESLint 9.
- **Deployment**: GitHub Pages via `gh-pages`.

## Navigation
- [Top-level README](README.md)
- [App README](sisonke-website/README.md)
- [Source directory](sisonke-website/src/)
- [Components](sisonke-website/src/components/)
- [Tests](sisonke-website/src/components/__tests__/)
- [Firebase client](sisonke-website/src/firebaseClient.js)
- [Vite config](sisonke-website/vite.config.js)
- [Tailwind config](sisonke-website/tailwind.config.js)
