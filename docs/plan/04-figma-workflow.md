# Figma to Code Workflow

## Goal

Translate Figma designs into production-ready UI with high fidelity, reusable components, and CMS-driven content.

## Workflow

### 1. Intake and Scope

1. Select target page/section in Figma.
2. Capture requirements:
   - layout behavior (desktop/tablet/mobile)
   - typography and spacing
   - interaction states
   - content ownership (static vs CMS)

### 2. Component Decomposition

1. Break section into reusable primitives and composites.
2. Reuse existing components first (`src/components/ui`).
3. Add new components only when reuse is not reasonable.

### 3. Storybook-first Implementation

1. Build or update component in `src/components/ui`.
2. Add stories for all required visual states.
3. Validate visual behavior in Storybook before page wiring.

### 4. CMS Modeling

1. Map dynamic content to Strapi fields/content types.
2. Keep model names and fields predictable and versionable.
3. Confirm required/optional constraints with stakeholders.

### 5. Integration Layer

1. Add/update shared types in `packages/shared`.
2. Add/update RTK Query endpoints in `src/services`.
3. Connect data to page components.

### 6. Validation

1. Pixel and spacing checks against Figma.
2. Responsive behavior checks at major breakpoints.
3. Run unit + E2E tests.

## Design Decisions Rules

1. Prefer composable variants over one-off custom styles.
2. Use tokens/patterns consistently (colors, radius, spacing).
3. Keep naming aligned with design semantics where practical.

## Completion Checklist

1. Storybook stories added/updated.
2. Component tested and integrated.
3. CMS content model updated if needed.
4. Data contract updated in shared package.
5. QA evidence captured in PR.
