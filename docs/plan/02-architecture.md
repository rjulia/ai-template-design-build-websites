# Architecture

## Monorepo Structure

```text
apps/
  web/          React app (Vite + Redux + RTK Query)
  cms/          Strapi CMS
packages/
  shared/       Shared contracts/types
infra/
  docker-compose.postgres.yml
docs/
  plan/
```

## Frontend (`apps/web`)

### Responsibilities

1. Render UI from reusable components and CMS content.
2. Manage client state with Redux Toolkit.
3. Fetch CMS data with RTK Query.
4. Provide tested, responsive, accessible user experience.

### Key layers

1. `src/components/ui/*`: reusable presentational components.
2. `src/features/*`: domain/state slices.
3. `src/services/*`: API adapters (RTK Query).
4. `src/app/*`: store setup and typed hooks.

## CMS (`apps/cms`)

### Responsibilities

1. Content modeling and publishing.
2. Public API exposure for frontend consumption.
3. Role and permission management.
4. Media handling and content governance.

### Runtime notes

1. Strapi v5 runtime config is in `config/*.js`.
2. Health endpoint available at `GET /api/health`.
3. Local uploads path: `apps/cms/public/uploads`.
4. Local DB uses PostgreSQL on host port `5433`.

## Shared Contracts (`packages/shared`)

### Purpose

1. Avoid API type drift between frontend and CMS.
2. Keep endpoint payload types centralized and reusable.

### Rule

Any public API shape consumed by frontend should have a shared type in this package.

## Environment Model

### Local

1. Web on `5173`.
2. CMS on `1337`.
3. PostgreSQL via Docker on host `5433`.

### Staging

1. Preview frontend + staging CMS + staging DB.
2. Mirrors production schema and permissions.

### Production

1. Public frontend + hardened CMS + managed DB.
2. Locked-down secrets and stricter permissions.

## Data Flow (high level)

1. Editor updates content in Strapi.
2. Strapi persists in PostgreSQL and serves API.
3. Frontend queries Strapi through RTK Query.
4. Components render data using shared typed contracts.

## Architectural Principles

1. Component-first UI (Storybook-driven).
2. Contract-first integration (shared types).
3. Automated quality gates before merge.
4. Prefer explicit, composable modules over large ad hoc pages.
