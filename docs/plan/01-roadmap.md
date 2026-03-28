# Roadmap

## Purpose

This roadmap defines how we deliver Figma-driven websites using:

- React + Redux + TypeScript + Vite (frontend)
- Strapi + PostgreSQL (CMS/backend)
- Turborepo (monorepo orchestration)
- Vitest + Playwright (quality gates)

## Milestones

### Milestone 1: Foundation (done/in progress)

1. Monorepo scaffold with `apps/web`, `apps/cms`, `packages/shared`.
2. Tooling baseline: ESLint, Prettier, TypeScript strict mode.
3. Test baseline: unit tests (Vitest) + E2E (Playwright).
4. Storybook introduced for component-driven development.
5. Local PostgreSQL via Docker compose for CMS development.

### Milestone 2: First Production Page

1. Pick first target page from Figma.
2. Define required section components (Hero, FeatureGrid, CTA, etc.).
3. Model CMS content types for that page in Strapi.
4. Connect frontend via RTK Query with typed contracts.
5. Ship the page with responsive + accessibility QA.

### Milestone 3: Systemization

1. Expand reusable component library in Storybook.
2. Add design token strategy (colors, spacing, typography).
3. Add content governance and editor guidelines in CMS.
4. Add visual regression and richer E2E coverage for key flows.

### Milestone 4: Production Ops

1. CI pipeline enforcement for lint/typecheck/test/build.
2. Staging and production deployment hardening.
3. Error monitoring + logging + backup strategy.
4. Security review (headers, role permissions, secrets).

## Deployment Targets

### Staging

1. Frontend: Vercel preview + staging domain.
2. CMS: Render (or Railway) staging service.
3. DB: managed PostgreSQL staging instance.

### Production

1. Frontend: Vercel production deployment.
2. CMS: Render (or Railway) production service.
3. DB: managed PostgreSQL production instance.
4. Media: S3-compatible object storage.

## Definition of Ready (before starting a feature)

1. Figma section(s) selected and scoped.
2. Required CMS fields understood.
3. Acceptance criteria written (functional + responsive).
4. Test scope identified (unit + E2E).

## Definition of Done (before merge)

1. `npm run lint` passes.
2. `npm run typecheck` passes.
3. `npm run test:unit` passes.
4. `npm run test:e2e` passes for critical path.
5. Storybook story exists/updated for new reusable component.
