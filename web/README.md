This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Environment variables

Create `web/.env.local` (gitignored) with the following keys.
Only `FAL_API_KEY` is needed to run the image generation scripts;
the others enable the production lead pipeline.

```env
# Image generation (scripts/gen-images-fal.mjs, gen-images-round2.mjs)
FAL_API_KEY=...
FAL_KEY=...   # alias accepted by the script

# Lead pipeline (web/src/app/api/leads/route.ts) — optional but recommended
# When missing, lead is logged + saved to /tmp/leads.jsonl and the side-effect
# is skipped without erroring.
TELEGRAM_BOT_TOKEN=...   # Hermes bot reused
TELEGRAM_CHAT_ID=...     # Mateus chat_id
NEXT_PUBLIC_SUPABASE_URL=...
SUPABASE_SERVICE_ROLE_KEY=...
```

**TODO Mateus:** add the four lead-pipeline vars to the Vercel project before
publishing the site to the client. Until then, leads land only in Vercel logs
+ /tmp (which Vercel rotates).

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
