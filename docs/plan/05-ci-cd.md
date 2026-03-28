# CI/CD and Deployment

## Objectives

1. Prevent regressions through automated checks.
2. Keep deployment predictable and repeatable.
3. Support rapid iteration with preview environments.

## CI Pipeline (per PR)

Run in order:

1. Install dependencies.
2. `npm run lint`
3. `npm run typecheck`
4. `npm run test:unit`
5. `npm run build`
6. `npm run test:e2e` (on preview/staging URL or controlled env)

Any failure blocks merge.

## CD Strategy

### Frontend (Vercel)

1. PR creates preview deployment.
2. Merge to `master` deploys production.

### CMS (Render or Railway)

1. Staging service auto-deploys from staging branch.
2. Production service deploys from `master` after checks.

### Database (Managed PostgreSQL)

1. Separate staging and production instances.
2. Schema changes applied through controlled migration process.
3. Backups enabled and restore procedure documented.

## Environment Variables

### Frontend

1. `VITE_CMS_BASE_URL`

### CMS

1. App keys and salts (`APP_KEYS`, `API_TOKEN_SALT`, `ADMIN_JWT_SECRET`, `TRANSFER_TOKEN_SALT`)
2. Database connection vars (`DATABASE_*`)

Rule: every new required variable must be reflected in `.env.example`.

## Release Process

1. Merge approved PR into `master`.
2. Verify production deployment health endpoints.
3. Run smoke checks on critical paths.
4. Monitor logs and errors for first 30-60 minutes.

## Rollback Strategy

1. Frontend: redeploy previous stable Vercel deployment.
2. CMS: rollback to previous image/release in hosting provider.
3. DB: restore from backup only when necessary and approved.

## Observability Minimum

1. Error tracking for frontend and CMS.
2. Application logs for CMS requests/errors.
3. Basic uptime checks for:
   - frontend URL
   - `GET /api/health` on CMS
