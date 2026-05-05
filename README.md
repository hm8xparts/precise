# Precise Components & Tool Design — Marketing Site

Production marketing site for **Precise Components & Tool Design** (Clifton, NJ). ISO 13485:2016 + ISO 9001:2015 certified precision CNC manufacturer specializing in medical devices.

Built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and shadcn-style components. Optimized for Vercel deployment and Google search ranking on medical-device contract-machining queries.

## Tech stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** with a brand-locked palette (`precise-navy`, `precise-blue`, `precise-gray`, `precise-green`)
- **lucide-react** for iconography (no machine/facility/personnel photography anywhere)
- **react-hook-form** + **zod** for the RFQ form
- **framer-motion** available for subtle motion (scroll/fade only)
- **`@next/third-parties`** for GA4, **`@vercel/analytics`** for Vercel Analytics

## Local development

```bash
npm install
npm run dev   # http://localhost:3000
npm run build # production build
npm run start # serve the production build
npm run lint
```

Node 20.x recommended.

## Project structure

```
src/
  app/                  # App Router routes
    page.tsx            # /            home
    capabilities/       # /capabilities
    medical/            # /medical
    materials/          # /materials
    quality/            # /quality
    equipment/          # /equipment
    portfolio/          # /portfolio
    contact/            # /contact
    api/og/route.tsx    # dynamic OG-image generator
    api/rfq/route.ts    # RFQ form handler (placeholder — wire to Resend)
    sitemap.ts          # sitemap.xml
    robots.ts           # robots.txt
    manifest.ts         # PWA manifest
    icon.tsx            # favicon
    apple-icon.tsx      # apple-touch-icon
    layout.tsx          # root layout, metadata, GA, Vercel Analytics
    globals.css         # Tailwind base + minor CSS
  components/           # shared React components (NavBar, Footer, RFQ, …)
  content/              # all on-site copy lives here for future CMS migration
    site.ts             # canonical contact info, nav, certs
    capabilities.ts     # core/secondary/extended capabilities
    materials.ts        # 3-column materials taxonomy
    equipment.ts        # equipment roster
    medical.ts          # medical-specialization sections
    portfolio.ts        # 12 part photos with captions
    _source-extract.md  # PDF source-of-truth extract
  lib/
    cn.ts               # tailwind-merge helper
    seo.ts              # buildMetadata() helper
public/
  logo/                 # PNG fallbacks (PreciseLogo SVG component is the runtime logo)
  parts/                # 12 part photographs (only photography on the site)
  precise-capabilities.pdf
```

## Brand & copy rules (enforced)

- Three visual elements only: the **Precise crosshair logo** (rebuilt as inline SVG in `src/components/PreciseLogo.tsx`), the **twelve part photographs** in `public/parts/`, and **lucide-react icons**.
- **No** facility, machine, team, founder, inspection-room, cleanroom, or stock photography — anywhere, ever.
- **No** personnel names. The PDF lists a founder; the site uses institutional language only.
- Canonical contact info — keep these in sync via `src/content/site.ts`:
  - `sales@precisecomponents.com`
  - `(973) 928-2928`
  - `10 Clifton Blvd #A4, Clifton, NJ 07011`
  - Mon–Fri, 8 AM – 5 PM ET

## SEO checklist (already implemented)

- Per-page `metadata` exports with `title`, `description`, `keywords`, `openGraph`, `twitter`, `canonical`, and explicit `robots`.
- Dynamic OG image generator at `/api/og?title=…` (1200×630, navy grid background).
- `sitemap.xml` and `robots.txt` auto-generated at build time.
- JSON-LD structured data on every page: `Organization`, `WebPage`, plus `LocalBusiness` + `WebSite` (with `SearchAction`) on the home page, and `BreadcrumbList` on inner pages.
- PWA `manifest.webmanifest` so Google understands the brand.
- `metadataBase` set from `NEXT_PUBLIC_SITE_URL` so absolute URLs work in Vercel previews and production.
- Skip-link, semantic landmarks, single `<h1>` per page, accessible form labels, `lang="en"`.

## Deployment to Vercel

1. **Push to GitHub** (or connect via the Vercel CLI).
2. **Import the repo** at https://vercel.com/new. Vercel auto-detects Next.js — no overrides needed.
3. **Custom domain.** Vercel → Project → Settings → Domains → add `precisecomponents.com` and `www.precisecomponents.com`. Point your DNS as instructed (typically `A` to Vercel's IP and a `CNAME` for `www`). The `vercel.json` redirects `www.` → apex; flip it if you prefer the inverse — just update the `vercel.json` rule.
4. **Set environment variables** (Settings → Environment Variables). See `.env.example` for the full list:
   - `NEXT_PUBLIC_SITE_URL=https://precisecomponents.com`
   - `NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX` (once GA4 property exists)
   - `GOOGLE_SITE_VERIFICATION=…` (once you start Search Console verification, see below)
   - `BING_SITE_VERIFICATION=…`
   - `RESEND_API_KEY=…` and the two Resend email vars (once form is wired)
5. **Redeploy** after setting env vars so they take effect.

The `vercel.json` already configures security headers (HSTS, X-Frame-Options DENY, no-sniff, strict-origin-when-cross-origin Referrer-Policy, restrictive Permissions-Policy) and the `www → apex` redirect.

## Google Search Console verification

1. Open https://search.google.com/search-console and add `precisecomponents.com` as a **Domain property** (preferred — covers all subdomains via DNS) or as a **URL prefix** property.
2. **Domain property** → use the DNS TXT verification record with your domain registrar.
3. **URL prefix property** → choose the "HTML tag" method, copy the `content="…"` value out of the `<meta name="google-site-verification" content="…">` snippet.
4. Paste that value into `GOOGLE_SITE_VERIFICATION` in Vercel's env vars and redeploy. The `metadata.verification.google` field in `src/app/layout.tsx` reads from that env var.
5. Click **Verify** in Search Console.
6. Submit `https://precisecomponents.com/sitemap.xml` from the Sitemaps section.
7. (Optional) Same flow for **Bing Webmaster Tools** — paste the `msvalidate.01` value into `BING_SITE_VERIFICATION`.

## RFQ form integration (TODO)

`src/app/api/rfq/route.ts` is a placeholder that validates the payload, logs it server-side in dev, and returns `200 OK`. To go live:

1. Sign up for Resend at https://resend.com and verify a sending domain.
2. `npm install resend`.
3. In the route handler, build an HTML email body from the form fields, attach the uploaded files, and call:
   ```ts
   import { Resend } from "resend";
   const resend = new Resend(process.env.RESEND_API_KEY!);
   await resend.emails.send({
     from: process.env.RESEND_FROM_EMAIL!,
     to: process.env.RESEND_TO_EMAIL!,
     subject: `RFQ — ${payload.company}`,
     html,
     attachments,
   });
   ```
4. Add a honeypot field (or hCaptcha) for spam control before going live publicly.

## Quality bar

- `npm run build` is clean.
- All 8 pages prerender as static; OG and RFQ are dynamic edge/Node routes.
- All 12 part photos live at `/portfolio` and as accents on `/medical` and `/`.
- Lighthouse target: ≥ 95 across Performance / Accessibility / Best Practices / SEO. Verify after each significant change.
- Test viewports: 375 px, 768 px, 1280 px, 1920 px.

## Updating content

All on-site copy lives under `src/content/*.ts` so a future CMS migration only needs to swap the data source, not the components. PDF source-of-truth extract is at `src/content/_source-extract.md`.
