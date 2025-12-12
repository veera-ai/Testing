# Testing

This repository currently contains a minimal Node.js scaffolding for static analysis, formatting, and security checks.

## Getting started

1. Install Node.js 18+.
2. Install dependencies:
   - npm install

## Scripts

- npm run start — runs the minimal entrypoint
- npm run lint — run ESLint across the repo
- npm run lint:fix — auto-fix ESLint issues
- npm run format — check formatting with Prettier
- npm run format:fix — auto-format with Prettier
- npm run security:audit — run npm audit
- npm run deps:check — check for outdated dependencies
- npm test — placeholder tests (none yet)

## Notes

- Replace `src/index.js` with your actual backend implementation (Express, Fastify, etc.).
- Adjust `.eslintrc.json` and `.prettierrc.json` to match your team conventions.
- Consider adding CI to run lint, format, and audit on push and PR.