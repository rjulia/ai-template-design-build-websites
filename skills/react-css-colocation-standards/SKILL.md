---
name: react-css-colocation-standards
description: Enforce CSS co-location in React. Use when creating or refactoring UI so each component/page owns its own CSS file and global styles stay in styles.css only.
---

# React CSS Co-location Standards

## Goal

Keep styling maintainable by locating styles next to the component/page that uses them.

## Core Rule

Co-locate CSS with each component/page:
- `Component.tsx` -> `Component.css`
- `Page.tsx` -> `Page.css`

Use `apps/web/src/styles.css` only for truly global, cross-cutting styles:
- root tokens and base typography
- reset/normalization
- app-wide utility classes used by many unrelated files

## Required Pattern

Every component/page with custom styles must import its own CSS file:

```ts
import './Component.css';
```

## What Not To Do

Do not put page-specific layout styles in `styles.css`.
Do not put component-specific styles in `styles.css`.
Do not duplicate class definitions across multiple CSS files.

## Refactor Rule

When touching a component/page that currently depends on monolithic CSS:
1. Move its styles to a local CSS file.
2. Import that file in the component/page.
3. Remove migrated classes from `styles.css`.
4. Re-run lint, typecheck, tests, and build.

## CSS Scope Guidance

Keep selectors class-based and local to the component namespace.
Prefer predictable prefixes per component block (e.g., `shop-*`, `home-*`, `blog-*`).
Avoid element-only selectors unless they are inside a local class block.

## Definition of Done

Confirm after each UI change:
- Styles are co-located with the component/page.
- `styles.css` only contains global/shared styles.
- No duplicated CSS blocks between local files and `styles.css`.
- Lint, typecheck, tests, and build pass.
