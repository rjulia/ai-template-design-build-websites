# Engineering Standards

## Code Quality

1. TypeScript strict mode is required.
2. ESLint errors block merge.
3. Prettier formatting is mandatory.
4. No dead code or commented-out blocks in PRs.

## Branching and PR

1. Branch from `master` using feature branches.
2. Keep PR scope focused and reviewable.
3. PR description must include:
   - business/context goal
   - technical summary
   - test evidence
   - screenshots or Storybook links for UI changes

## Testing Strategy

### Unit tests (Vitest)

1. Test reducers, selectors, helpers, and key component logic.
2. Cover edge cases for state transitions and API transforms.

### E2E tests (Playwright)

1. Cover critical user journeys.
2. At minimum:
   - homepage load
   - key navigation flow
   - one CMS-driven rendering assertion

### Storybook

1. Every reusable UI component must have at least one story.
2. New component variants must be represented in stories.

## Accessibility and Responsive

1. Keyboard navigation must work for interactive elements.
2. Color contrast should be acceptable for text/actions.
3. Layout must be validated on mobile and desktop.

## Security and Config

1. Never commit real production secrets.
2. Keep `.env.example` updated when new env vars are introduced.
3. Public API permissions in Strapi must be explicit and minimal.

## Definition of Done (feature level)

1. Implementation complete and aligned with Figma.
2. Storybook stories added or updated.
3. Lint + typecheck + unit tests pass.
4. E2E updated if feature affects critical flow.
5. Documentation updated when architecture/behavior changes.
