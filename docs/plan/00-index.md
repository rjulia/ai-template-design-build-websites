# Plan Index

This folder is the source of truth for product and engineering execution.

## Documents

1. [Roadmap](./01-roadmap.md)
2. [Architecture](./02-architecture.md)
3. [Engineering Standards](./03-standards.md)
4. [Figma Workflow](./04-figma-workflow.md)
5. [CI/CD and Deployment](./05-ci-cd.md)

## Ownership

### Tech Lead / Project Owner

1. Owns roadmap priorities and milestone sequencing.
2. Approves architecture changes affecting multiple layers.
3. Owns deployment/environment decisions.

### Frontend Owner

1. Owns component system and Storybook quality.
2. Maintains frontend coding/testing standards.
3. Updates Figma workflow implementation details.

### CMS/Backend Owner

1. Owns Strapi modeling conventions and permissions.
2. Maintains integration contracts with frontend.
3. Owns data and migration reliability practices.

### QA / Quality Owner

1. Owns E2E critical-path coverage definitions.
2. Maintains release smoke check criteria.
3. Verifies Definition of Done enforcement.

## Update Rules

1. Any architecture-impacting PR must update relevant doc(s) in this folder.
2. If a decision changes deployment, update `05-ci-cd.md` in the same PR.
3. If a component process changes, update `04-figma-workflow.md`.
4. If standards or gates change, update `03-standards.md`.
5. Link plan updates in PR descriptions under a "Plan updates" section.

## Cadence

1. Weekly: quick roadmap review (`01-roadmap.md`).
2. Bi-weekly: architecture and standards check.
3. Before each release: CI/CD and rollout checklist review.
