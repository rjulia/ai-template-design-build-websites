# Figma-to-Web Monorepo Starter

This repository is the execution-ready foundation for building websites from Figma designs with:

- React + Vite + TypeScript
- Redux Toolkit (including RTK Query)
- Strapi CMS + PostgreSQL
- Turborepo for monorepo task orchestration and caching
- ESLint + Prettier
- Vitest (unit tests) + Playwright (E2E)

## Workspace Layout

```text
apps/
  web/      # React frontend
  cms/      # Strapi CMS
packages/
  shared/   # Shared TypeScript contracts and helpers
infra/
  docker-compose.postgres.yml
```

## Why Turborepo Here

- It runs only the tasks impacted by your changes.
- It caches task outputs, so repeated CI and local runs are faster.
- It gives us one command surface for `dev`, `build`, `test`, `lint`, and `typecheck` across apps.

## Quick Start

1. Install dependencies:

```bash
npm install
```

2. Start PostgreSQL locally (Docker):

```bash
docker compose -f infra/docker-compose.postgres.yml up -d
```

3. Create CMS environment file:

```bash
cp apps/cms/.env.example apps/cms/.env
```

4. Run frontend + CMS in parallel:

```bash
npm run dev
```

5. Run quality gates:

```bash
npm run lint
npm run typecheck
npm run test:unit
npm run test:e2e
```

## Deployment Targets (From the Plan)

- Frontend (`apps/web`): Vercel
- CMS (`apps/cms`): Render (or Railway)
- Database: Neon PostgreSQL
- Asset storage: S3-compatible bucket

## Learning Path for Agentic Workflow

1. Build one Figma section at a time and review in browser.
2. Keep shared contracts in `packages/shared`.
3. Ensure every feature ships with:
   - lint clean
   - typecheck clean
   - unit tests for logic
   - one E2E path for behavior
4. Let agents accelerate implementation, but keep human review as final quality gate.
