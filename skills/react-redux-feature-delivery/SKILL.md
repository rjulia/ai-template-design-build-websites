---
name: react-redux-feature-delivery
description: Implement new React + Redux features in apps/web with consistent slice structure, typed hooks, routing integration, and tests. Use when adding or extending a feature from requirement to merged code.
---

# React Redux Feature Delivery

## Goal

Ship features with consistent architecture and low regression risk.

## Follow This Delivery Flow

1. Define feature scope and decide state ownership.
2. Add or update shared contracts in `packages/shared` when backend data crosses app boundaries.
3. Reuse existing UI primitives and composite components before creating new UI markup.
4. Create or update slice state in `apps/web/src/features/<feature>/<feature>Slice.ts`.
5. Register reducers and middleware wiring in `apps/web/src/app/store.ts` when needed.
6. Consume state via typed hooks from `apps/web/src/app/hooks.ts`.
7. Implement UI and route integration in components.
8. Add tests for reducers and behavior.
9. Add or update Storybook stories for changed reusable components.
10. Run quality gates before marking complete.

## Implement Slice Logic Consistently

Define an explicit `State` type and `initialState`.
Keep reducers focused and deterministic.
Use action payload types (`PayloadAction<T>`) for non-trivial updates.
Export actions and reducer from the same slice module.

Keep selectors close to feature logic when selector complexity grows.
Prefer deriving computed values in selectors over recomputing in JSX.

## Wire Store Changes Explicitly

Register each reducer under a clear state key in `store.ts`.
Add middleware only when required by the feature.
Keep `RootState` and `AppDispatch` inferred from store exports.

## Build Components with Typed Hooks

Use `useAppSelector` for state reads.
Use `useAppDispatch` for dispatching actions.
Avoid `useDispatch` and `useSelector` directly in app code.

Keep components focused on rendering and event handling.
Move complex branching logic to helpers or selectors.
Compose screens from reusable primitives (`Button`, `Text`, `Headline`, `Card`) and reusable composite blocks.
Avoid repeating the same button, card, and headline markup inside feature pages.

## Handle UI States Explicitly

Render loading, error, empty, and success states when relevant.
Avoid hidden implicit fallbacks that mask failures.
Keep user-facing messages actionable.

## Add Tests with Feature Changes

Add or update reducer tests in `*Slice.test.ts`.
Add component behavior tests when UI logic changed.
Add route-level E2E coverage for critical user paths.
Add Storybook stories that capture base, loading, empty, and error states for reusable components.

## Complete with Quality Gates

Run from repo root:
- `npm run lint`
- `npm run typecheck`
- `npm run test:unit`
- `npm run test:e2e`

Fix failing checks before finalizing.
