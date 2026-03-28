---
name: react-redux-testing-standards
description: Apply consistent testing strategy for React + Redux features using Vitest, Testing Library, and Playwright in this monorepo. Use when adding tests, reviewing coverage gaps, or validating feature changes before merge.
---

# React Redux Testing Standards

## Goal

Protect behavior with fast feedback and focused coverage.

## Follow Test Layers

Use reducer and selector tests for state transition logic.
Use component tests for rendering and interaction behavior.
Use Storybook stories to validate reusable component states.
Use E2E tests for critical user journeys and routing behavior.

## Write Reducer Tests First for State Changes

Test reducers as pure functions with explicit input state and actions.
Cover positive path and edge path updates.
Keep test setup minimal and deterministic.

## Keep Store-Coupled Tests Isolated

Prefer fresh test store instances for store integration tests.
Avoid relying on mutable singleton store state across tests.
Reset mocked state between tests when using shared fixtures.

## Test UI Behavior, Not Implementation Details

Use Testing Library queries by role, label, and visible text.
Assert user-visible outcomes after events.
Avoid assertions on internal component state or private functions.

## Cover RTK Query UI States

Test loading, success, and error rendering paths when API-backed components change.
Mock network behavior at boundaries instead of mocking deep internals.
Keep fallback and error messages explicit and assertable.

## Maintain Practical E2E Coverage

Use Playwright tests in `apps/web/e2e` for route and workflow confidence.
Cover navigation and one core scenario per major feature.
Keep E2E tests resilient by selecting semantic roles and text, not brittle CSS selectors.

## Keep Storybook Coverage for Reusable Components

Create stories for reusable primitives and composite components.
Cover default, disabled, loading, error, and high-content states when applicable.
Keep story args realistic and aligned with production usage.
Treat missing stories for changed reusable components as a testing gap.

## Keep Test Files Consistent

Place tests near source files (`*.test.ts` and `*.test.tsx` in `src`).
Name tests by behavior outcome.
Keep one behavior focus per test case.

## Run Verification Commands

Run from repo root:
- `npm run test:unit`
- `npm run test:e2e`

Run `npm run lint` and `npm run typecheck` when test files or production files changed.
