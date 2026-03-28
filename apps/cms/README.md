# CMS App (`apps/cms`)

Strapi CMS configured for PostgreSQL and prepared for frontend consumption.

## What Is Included

- Strapi runtime package and scripts
- PostgreSQL database configuration
- Public `GET /api/health` endpoint for app connectivity checks
- Starter `Page` content type

## Setup

1. Create environment file:

```bash
cp .env.example .env
```

2. Ensure PostgreSQL is running (from repo root):

```bash
docker compose -f ../../infra/docker-compose.postgres.yml up -d
```

3. Install dependencies from repo root:

```bash
npm install
```

4. Start CMS from repo root:

```bash
npm run dev:cms
```

## Key Files

- `config/database.ts`: PostgreSQL settings and connection timeout.
- `config/server.ts`: host/port and application keys.
- `src/api/health/*`: health endpoint used by web app.
- `src/api/page/content-types/page/schema.json`: first page model.

## Next CMS Steps

1. Add reusable section components (hero, feature-grid, FAQ, CTA).
2. Configure roles and permissions for public read access where needed.
3. Add media strategy (S3-compatible storage for production).
4. Add migration/seed strategy for staging and production consistency.
