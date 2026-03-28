---
name: react-redux-architecture-standards
description: Define and enforce architecture conventions for this monorepo React + Redux Toolkit project. Use when planning features, placing files, refactoring modules, or reviewing boundaries between apps/web, apps/cms, and packages/shared.
---

# React Redux Architecture Standards

## Goal

Keep project structure predictable, feature-oriented, and safe to scale.

## Use This Project Layout

Keep web UI code in `apps/web/src`.
Keep Strapi CMS code in `apps/cms/src`.
Keep cross-app contracts and shared types in `packages/shared/src`.

## Place Files by Responsibility

Place app-level wiring in `apps/web/src/app`:
- `store.ts` for store setup and middleware wiring
- `hooks.ts` for typed hooks (`useAppDispatch`, `useAppSelector`)

Place reusable UI primitives in `apps/web/src/components/ui`:
- `Button`
- `Text`
- `Headline`
- `Card`

Place composed reusable blocks in `apps/web/src/components/composite`:
- Cards that combine headline, text, and button variants
- Reusable sections shared across routes or features

Place domain state in `apps/web/src/features/<feature-name>`:
- `<feature>Slice.ts` for reducers and actions
- `<feature>Slice.test.ts` for reducer tests

Place backend API clients in `apps/web/src/services`:
- One API service file per backend surface when practical
- Use RTK Query `createApi` in this folder

Place reusable backend-to-frontend types in `packages/shared/src/index.ts` and export them from there.

## Apply State Ownership Rules

Keep ephemeral UI-only state in local component state.
Move state to Redux only when at least one of these is true:
- Multiple routes or distant components share it
- The state must survive navigation
- The state is backend-derived and normalized through RTK Query
- Time travel, replay, or centralized debugging adds value

Keep async server state in RTK Query caches, not duplicated in regular slices.

## Enforce Import Boundaries

Import from `@workspace/shared` for cross-app contracts.
Import feature code through stable exports when a feature grows.
Avoid deep cross-feature imports that couple feature internals.
Avoid importing from `apps/cms` into `apps/web`.

## Follow Naming Conventions

Use `camelCase` for variables and functions.
Use `PascalCase` for React component names and type aliases where appropriate.
Use `kebab-case` for folder names.
Use `*Slice.ts` naming for Redux slices.
Use `*Api.ts` naming for RTK Query service modules.

## Keep Files Focused

Keep each file single-purpose.
Split files when a module handles multiple unrelated responsibilities.
Prefer small selectors and pure helpers over inline complex logic in components.
Favor composition of reusable components over feature-level duplicate markup.

## Definition of Done

Confirm new code:
- Matches folder placement rules
- Uses shared contracts where cross-app data exists
- Avoids cross-feature and cross-app coupling
- Leaves store wiring and service wiring explicit and readable
- Reuses existing primitive and composite components before introducing new markup
