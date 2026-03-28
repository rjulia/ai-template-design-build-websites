# Web App (`apps/web`)

React + Vite + TypeScript frontend with Redux Toolkit, unit tests, and E2E tests.

## Stack

- React 18
- Vite
- TypeScript
- Redux Toolkit + RTK Query
- Vitest + Testing Library
- Playwright
- Storybook

## Commands

Run from repo root:

```bash
npm run dev:web
npm run build --filter=@apps/web
npm run test:unit
npm run test:e2e
```

Run from this folder:

```bash
npm run dev
npm run build
npm run storybook
npm run build-storybook
npm run test
npm run test:e2e
```

## Architecture

- `src/app/store.ts`: global Redux store config.
- `src/features/*`: domain slices.
- `src/services/*`: RTK Query API layer.
- `e2e/*`: Playwright user-flow tests.

## CMS Integration

Set `VITE_CMS_BASE_URL` if your Strapi API is not on default:

```bash
VITE_CMS_BASE_URL=http://localhost:1337/api
```

Default endpoint used now: `GET /api/health`.

## Definition of Done for a Frontend Story

1. Figma section translated to responsive components.
2. Data connected to Strapi API via RTK Query.
3. Unit tests added for critical logic.
4. E2E path updated or added.
5. `lint`, `typecheck`, `test`, and `test:e2e` pass.
