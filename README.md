# Avanzato - Premium Digital Agency

Monorepo for a futuristic agency website.

- `apps/web`: Next.js 15, TypeScript, Tailwind CSS, Framer Motion
- `apps/api`: Node.js, Express, TypeScript

## Getting Started

Install dependencies from the repo root:

```bash
pnpm install
```

Run the web app and API in separate terminals:

```bash
pnpm dev:web
pnpm dev:api
```

Open http://localhost:3000.

The web app expects `NEXT_PUBLIC_API_URL=http://localhost:4000/api`. Copy `apps/web/.env.local.example` to `apps/web/.env.local` if needed.

## Production Build

```bash
pnpm build
```

Or build one app at a time:

```bash
pnpm build:web
pnpm build:api
```
