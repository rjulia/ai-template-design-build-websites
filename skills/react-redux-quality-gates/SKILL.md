---
name: react-redux-quality-gates
description: Enforce final quality checks and consistency gates for React + Redux changes in this monorepo. Use before finishing tasks, opening PRs, or reviewing whether a change is ready to merge.
---

# React Redux Quality Gates

## Goal

Make every change shippable, predictable, and easy to review.

## Run Mandatory Gates

Run from repository root:
- `npm run lint`
- `npm run typecheck`
- `npm run test:unit`
- `npm run test:e2e`
- `npm run build-storybook` after Storybook is configured

Treat failing gates as blockers.
Fix root causes instead of muting warnings or skipping tests.

## Enforce Type and Lint Discipline

Keep TypeScript strict compliance.
Avoid `any` unless there is a documented temporary exception.
Respect ESLint import ordering:
- Builtin and external imports first
- Internal imports second
- Parent, sibling, and index imports last

Keep React Hook dependency handling explicit and lint-clean.

## Review Architecture Consistency

Confirm new files are placed in the correct folders (`app`, `features`, `services`, `packages/shared`).
Confirm state ownership decisions match project rules.
Confirm async backend state remains in RTK Query and not duplicated in ad-hoc local caches.
Confirm UI is composed from reusable primitives and shared composite components.

## Review UX Reliability

Confirm loading, error, empty, and success states are handled for user-facing async flows.
Confirm fallback messages help users recover.
Confirm navigation paths still work after route or feature changes.

## Keep PR Scope Healthy

Keep changes focused on one feature set when possible.
Split unrelated refactors from feature behavior changes.
Write clear commit and PR messages that describe user-visible impact.

## Final Readiness Checklist

Confirm before merge:
- Gates are green
- Architecture conventions are respected
- Tests cover meaningful behavior
- No obvious regressions in main flows
- Updated reusable components have Storybook stories
