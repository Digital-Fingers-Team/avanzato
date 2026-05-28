# Avanzato - Premium Digital Agency

Monorepo for the Avanzato agency website.

- `apps/web`: Next.js 15, TypeScript, Tailwind CSS, Framer Motion
- `apps/api`: Node.js, Express, TypeScript, Nodemailer

## Getting Started

Install dependencies from the repo root:

```bash
pnpm install
```

Create local environment files:

```bash
cp apps/web/.env.local.example apps/web/.env.local
cp apps/api/.env.example apps/api/.env
```

On Windows PowerShell:

```powershell
Copy-Item apps\web\.env.local.example apps\web\.env.local
Copy-Item apps\api\.env.example apps\api\.env
```

Run the web app and API in separate terminals:

```bash
pnpm dev:web
pnpm dev:api
```

Open `http://localhost:3000`.

## Environment

Web environment:

```env
NEXT_PUBLIC_API_URL=http://localhost:4000/api
```

API environment:

```env
PORT=4000
CLIENT_URL=http://localhost:3000
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-google-app-password
CONTACT_RECEIVER=your-email@gmail.com
```

Local `.env` files are ignored by git. Do not commit real SMTP passwords or app passwords.

## Contact Form

The contact form posts from the web app to:

```text
NEXT_PUBLIC_API_URL/contact
```

The API sends the message with Nodemailer using the SMTP values in `apps/api/.env`.

For Gmail, use a Google App Password, not your normal account password.

## Projects

Project cards are loaded from:

```text
apps/web/public/projects/
```

Each project has its own folder. The folder name is used as the project title:

```text
apps/web/public/projects/Nebula AI/
  project.json
  cover.webp
  demo.mp4
```

Example `project.json`:

```json
{
  "order": 1,
  "description": "AI-powered analytics dashboard for enterprise decision-making.",
  "stack": ["Next.js", "OpenAI API", "Cloudflare"],
  "imageSrc": "cover.webp",
  "videoSrc": "demo.mp4"
}
```

Use file names relative to the same project folder. Leave `videoSrc` empty if the project only has an image.

Recommended media:

- Images: `.webp` or `.avif`
- Videos: compressed `.mp4`
- Use an image as the video poster by setting `imageSrc`

## SEO

The web app includes:

- Metadata and canonical URL in `apps/web/src/app/layout.tsx`
- JSON-LD structured data in `apps/web/src/app/page.tsx`
- `robots.txt` from `apps/web/src/app/robots.ts`
- `sitemap.xml` from `apps/web/src/app/sitemap.ts`
- Manifest and generated social images/icons from the app routes

Set the production site URL with:

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

If it is not set, the app uses `https://avanzato.agency`.

## Production Build

Build everything:

```bash
pnpm build
```

Build one app at a time:

```bash
pnpm build:web
pnpm build:api
```

Start the built web app:

```bash
pnpm start:web
```

Start the built API:

```bash
pnpm start:api
```
