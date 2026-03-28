---
name: rtk-query-cms-integration
description: Implement and evolve RTK Query services for the Strapi CMS integration in apps/web. Use when creating API slices, adding endpoints, handling cache invalidation, or aligning frontend data models with packages/shared contracts.
---

# RTK Query CMS Integration

## Goal

Keep CMS data access type-safe, centralized, and cache-aware.

## Define Contracts First

Define or update shared response types in `packages/shared/src/index.ts` before wiring new endpoints.
Reuse shared types in RTK Query endpoint signatures.
Avoid duplicating response types inside `apps/web`.

## Keep Service Modules Centralized

Define `createApi` services in `apps/web/src/services`.
Keep one service module per backend domain when service size grows.
Use stable `reducerPath` names and register reducer and middleware in `store.ts`.

## Configure Base URL Safely

Read CMS base URL from `import.meta.env.VITE_CMS_BASE_URL`.
Provide a local fallback for development environments.
Avoid hardcoding production URLs in endpoint logic.

## Define Endpoints Predictably

Use `builder.query` for read operations.
Use `builder.mutation` for write operations.
Name endpoints with action-style names (`getPage`, `updatePage`, `publishPage`).
Return typed hooks from the API module and use those hooks in components.

## Handle Caching Deliberately

Define tags when introducing mutating endpoints.
Use `providesTags` and `invalidatesTags` to avoid stale UI.
Prefer invalidation over manual cache mutation unless performance requires manual updates.

## Normalize UI State Handling

Read `isLoading`, `isFetching`, `isError`, and data states explicitly in components.
Render fallback messages and retry affordances for error states.
Keep formatting and fallback logic in helper functions for readability.

## Test Service Behavior

Add reducer-level or hook-level tests when endpoint behavior changes.
Validate error handling paths and cache invalidation paths for mutations.
Cover at least one happy-path API flow in Playwright when user behavior depends on remote data.

## Definition of Done

Confirm each endpoint change:
- Uses shared contracts from `@workspace/shared`
- Registers correctly in store wiring
- Handles loading and error states in UI
- Includes tests proportionate to the change

