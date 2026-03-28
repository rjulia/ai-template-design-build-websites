---
name: storybook-component-workflow
description: Use Storybook as the source of truth for reusable React components. Use when creating, changing, or reviewing shared UI components to verify states, interactions, and visual consistency before merge.
---

# Storybook Component Workflow

## Goal

Validate reusable components in isolation before integrating into feature screens.

## Configure Storybook in apps/web

Initialize Storybook in `apps/web` when it is missing.
Add scripts to `apps/web/package.json`:
- `storybook` for local component development
- `build-storybook` for CI-friendly static validation

Keep Storybook config and stories in the web app where components live.

## Write Stories for Reusable Components

Create stories for every shared primitive (`Button`, `Text`, `Headline`, `Card`).
Create stories for shared composite components with nested content.
Cover meaningful states:
- Default
- Hover and active-like visual intent where relevant
- Disabled
- Loading
- Error or warning presentation where applicable
- Long-content and responsive layout scenarios

## Keep Story Args and Controls Useful

Use realistic labels, copy, and props in stories.
Expose variant props in controls for quick validation.
Keep stories deterministic and free of unstable external dependencies.
Use controls-first stories by default:
- Define `meta.args`
- Define `meta.argTypes`
- Provide `export const Playground`

## Verify Before Feature Merge

Run Storybook locally while building reusable components.
Run `npm run build-storybook` before merge after Storybook scripts exist.
Run `npm run storybook:check-controls` to enforce controls-first stories for `apps/web/src/components/ui/*.stories.tsx`.
Run `npm run qa` for the full gate sequence.
Treat broken stories as blockers for shared UI changes.

## Use Storybook Together with Tests

Keep Storybook for visual and state coverage.
Keep Vitest for logic and behavior assertions.
Keep Playwright for integrated journey validation.
Use all three layers for high-confidence UI changes.
