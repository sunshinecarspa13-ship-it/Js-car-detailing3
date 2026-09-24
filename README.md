# JS Car Detailing Colchester

Marketing site for JS Car Detailing Colchester — a mobile car detailing
business. Next.js 16 (App Router), TypeScript, Tailwind CSS v4.

## Deployment

- **Live:** https://jsdetailingcolchester.co.uk (canonical domain).
  `www.` and `js-car-detailing-2b36.vercel.app` 308-redirect to it
  (`next.config.ts`).
- **Vercel project:** `js-car-detailing-2b36` (team `js-car-detailing`)
- **Repo:** https://github.com/sunshinecarspa13-ship-it/Js-car-detailing3 (public)
- Connected for auto-deploy: pushes to `master` deploy to production
  automatically; other branches/PRs get preview deployments.
- Git commits must be authored as `sunshinecarspa13-ship-it` (or with the
  `@users.noreply.github.com` email for that account) or Vercel blocks the
  deployment — see "Committers without a Vercel account" in Vercel's docs.

## SEO & indexing

- Canonicals, sitemap, robots and JSON-LD all derive from `SITE_URL` in
  `lib/data/site.ts` (defaults to `https://jsdetailingcolchester.co.uk`).
- Per-page titles/descriptions/Open Graph go through `pageMetadata()` in
  `lib/seo.ts`. Keep descriptions ≤160 characters.
- **IndexNow** (Bing, Yandex, Seznam, Naver — not Google): after a deploy
  that adds or changes pages, run `npm run indexnow` (all sitemap URLs) or
  `npm run indexnow -- /faq /book` (specific paths). Key file:
  `public/f35ab2a852e4359d9f0be682bd73d9b7.txt`.
- **Google:** submit `https://jsdetailingcolchester.co.uk/sitemap.xml` in
  Search Console and use URL Inspection → Request indexing for key pages.

## Admin dashboard

- **URL:** `/admin` (redirects to `/admin/login` if not authenticated)
- Password is stored in the `ADMIN_PASSWORD` Vercel env var (all
  environments) — not in the codebase. Change it any time via
  `vercel env rm ADMIN_PASSWORD <env>` then `vercel env add`.
- Session is a signed, expiring cookie (12h), HMAC'd with
  `ADMIN_SESSION_SECRET`. No user accounts/database — single shared
  password, intended for the business owner only.
- Bookings submitted at `/book` are stored in Vercel Blob
  (`lib/booking/store.ts`) as one JSON object per booking. The admin
  dashboard lists them and can update status or delete.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

`npm run build && npm run start` runs a production build.

## Where things live

- `lib/data/business.ts` — single source of truth for every verified
  business fact (name, address, phone, rating, hours, service area). Every
  other file reads from here rather than re-typing facts.
- `lib/data/services.ts`, `lib/data/areas.ts`, `lib/data/reviews.ts`,
  `lib/data/faq.ts` — typed content for the five services, four service
  areas, all 15 Google reviews (verbatim), and FAQ copy.
- `lib/data/site.ts` — technical config (site URL). Not a business fact.
- `components/schema/*` — JSON-LD structured data (LocalBusiness/
  AutoDetailing, Service, FAQPage, BreadcrumbList).
- `app/llms.txt/route.ts` — machine-readable summary for AI
  crawlers/agents, generated from the same data files.
- `app/(marketing)/` — all public pages, wrapped in
  `app/(marketing)/layout.tsx` (header, footer, sticky mobile CTA bar).
- `app/admin/` — password-protected bookings dashboard, guarded by
  `proxy.ts`. Has its own minimal layout (no marketing chrome).
- `lib/booking/` — booking types + Vercel Blob storage functions.
- `lib/auth/admin-session.ts` — signed-cookie session helpers for admin.

## Before launch — outstanding items for the client

Everything below was left as a clearly marked placeholder rather than
guessed, per the brief. Search the codebase for `{{PLACEHOLDER` to find
every instance.

- **Closing time** — hours are shown as "opens 8am, 7 days a week" only;
  closing time was never confirmed. Update `business.hours.closes` in
  `lib/data/business.ts` once known, and add `openingHoursSpecification`
  back into `components/schema/LocalBusinessSchema.tsx` (deliberately
  omitted until then).
- **Instagram handle** — `business.social.instagram` is `null`. No social
  link currently appears on the site.
- **Business email** — not supplied; the contact form currently only logs
  submissions server-side (see `app/api/contact/route.ts`). Wire it to a
  real email/webhook/CRM before launch.
- **Pricing** — no price list was supplied. Every service page says "get a
  quote" instead of a number.
- **Real photography** — the hero, gallery, and OG image are placeholder
  gradients/text, not stock photos standing in as the business's own work.
  Swap in real before/after photos via `next/image` once supplied
  (`components/ui/SheenPanel.tsx`, `app/gallery/page.tsx`).
- **4 reviews with no captured text** (Diego Rodrigues, Farliane Vieira,
  Leidiane Bento, Josiane Promotora, Rhaonny Paiva — 5 total) — these
  count toward the 5.0★/15 rating but aren't quoted anywhere, since no
  text was captured from Google. Add their text in `lib/data/reviews.ts`
  if it becomes available.
- **Truncated reviews** (Remerson, Falcon, Robert M) — shown exactly as
  truncated on Google ("…"). Fill in the rest in `lib/data/reviews.ts` if
  the full text is obtained.
- **Business registration/insurance number** — not supplied; not shown
  anywhere on the site currently.
- **Schema validation** — JSON-LD blocks were built to spec but should be
  run through Google's Rich Results Test against the live, deployed URL
  before launch.

## Notes on a couple of deliberate choices

- No CMS — content lives in typed files under `lib/data/`. Structured so
  a headless CMS could be swapped in later without touching components.
- No `next/image` usage yet — there are no real photos to serve. Once
  photography is supplied, use `next/image` for it (don't add stock
  photography in the meantime).
