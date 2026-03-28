---
name: storybook-controls-best-practices
description: Standardize Storybook controls so component states are explorable through dropdowns, toggles, and text inputs instead of duplicated stories. Use when creating or refactoring `*.stories.tsx` files.
---

# Storybook Controls Best Practices

## Goal

Make reusable component stories faster to explore and easier to maintain by using controls-first stories.

## Default Story Pattern

For each reusable component story:
1. Set realistic default `args`.
2. Define `argTypes` with explicit control types.
3. Add a single interactive story (for example `Playground`) that uses those controls.
4. Keep only a few named presets when they add documentation value.

## Controls Guidance

Use `select` for discrete variants such as `primary`, `secondary`, `ghost`.
Prefer importing variant option arrays from the component module (single source of truth) instead of duplicating strings in stories.
Use `boolean` for flags like `disabled`, `loading`, `fullWidth`.
Use `text` for labels and copy props.
Use `number` or `range` only when numeric tuning is meaningful.
Hide non-interactive props from controls to reduce noise.

## Variant Dropdown Example

```tsx
import { Button } from './Button';
import { buttonVariants } from './Button.variants';

const meta = {
  component: Button,
  args: {
    variant: 'primary',
    disabled: false,
    children: 'Action',
  },
  argTypes: {
    variant: {
      options: buttonVariants,
      control: { type: 'select' },
    },
    disabled: { control: { type: 'boolean' } },
    children: { control: { type: 'text' } },
  },
} satisfies Meta<typeof Button>;
```

## Review Checklist

Confirm the default story opens with sensible args.
Confirm every public variant can be reached via control options.
Confirm controls are typed and not inferred ambiguously.
Confirm stories remain deterministic and avoid runtime API dependencies.
