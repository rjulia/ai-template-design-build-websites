---
name: react-component-reuse-standards
description: Enforce reusable component-first UI development in React. Use when building or refactoring UI so repeated patterns like Button, Card, Text, and Headline are implemented once and composed everywhere.
---

# React Component Reuse Standards

## Goal

Build UI from reusable primitives and composed blocks instead of duplicating markup.

## Apply Reuse-First Rule

Search existing components before creating new ones.
Reuse primitives in `apps/web/src/components/ui` for base UI atoms.
Reuse composites in `apps/web/src/components/composite` for common sections and card layouts.
Create new component variants only when existing API cannot express the requirement.

## Use Component Layers

Keep primitives generic and design-system aligned:
- `Button`
- `Text`
- `Headline`
- `Card`

Keep composites business-agnostic but layout-aware:
- Cards with nested headline, text, and action rows
- Reusable sections used by multiple routes

Keep feature-specific wrappers in `apps/web/src/features/<feature>` and compose them from reusable layers.

## Prevent Duplicate UI Patterns

Avoid re-implementing button styles inside feature components.
Avoid hardcoding card shell styles in route pages when `Card` exists.
Avoid repeated headline and text spacing logic when `Headline` and `Text` can carry it.

## Define Component API Clearly

Use explicit props and variants (`size`, `tone`, `intent`, `as`) where useful.
Keep defaults safe and accessible.
Prefer composition with `children` for flexible card content.
Expose only the minimum API required to support known use cases.

## Keep Accessibility Baseline

Use semantic HTML by default (`button`, `h1`-`h6`, `p`, `section`, `article`).
Keep focus states visible.
Keep disabled and loading states accessible to keyboard and screen readers.

## Definition of Done

Confirm UI changes:
- Reuse existing primitives and composites first
- Avoid duplicate visual implementations of button, card, text, and headline
- Keep new shared components documented with Storybook stories

