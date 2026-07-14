# {Brand} — Locksmith Website (Phase 1)

Production-ready Phase 1 build of the architecture in [`../docs/`](../docs/00-index.md): Next.js (App Router, TypeScript, Tailwind v4), fully static (61 pages) + one API route, SEO-first and mobile-first.

## Run

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # static production build (61 pages)
npm start
```

## Environment variables

| Var | Purpose |
|---|---|
| `NEXT_PUBLIC_GTM_ID` | Enables GTM with Consent Mode v2 defaults (denied). Omit in dev. |
| `LEADS_WEBHOOK_URL` | Where `/api/leads/` forwards submissions (CRM / Slack / Make / n8n). Falls back to server logs. |

## Where things live

- `lib/config.ts` — **all business settings** (brand, phone, WhatsApp, NAP, NIF, rating). ⚠️ Placeholders — replace before launch.
- `lib/services.ts` — 20 service pages content · `lib/locations.ts` — Lisbon + 8 freguesias + 8 cities · `lib/prices.ts` — price table (⚠️ placeholder values) · `lib/blog.ts` — seed posts · `lib/reviews.ts` — ⚠️ placeholder testimonials (Review schema intentionally not emitted until real ones exist).
- `lib/seo.ts` — meta templates + JSON-LD builders (Locksmith, Service, FAQPage, BreadcrumbList).
- `components/` — conversion components (StickyCtaBar, CtaButtons with GA4 tracking, EmergencyBanner time-aware, QuoteForm with honeypot) and shared sections.
- `app/[citySlug]/` — generates `/chaveiro-{cidade}/` pages (no partial dynamic segments in Next.js).

## Before launch checklist

1. Replace every placeholder in `lib/config.ts` (phone, WhatsApp, NIF, address, domain, social URLs).
2. Confirm the real price table in `lib/prices.ts` with the owner.
3. Replace placeholder testimonials and team members with real ones; add real photos (no stock).
4. Legal review of `/politica-de-privacidade/` and `/termos-e-condicoes/` (marked as drafts in-page).
5. Set `NEXT_PUBLIC_GTM_ID`, configure GA4 key events (`click_call`, `click_whatsapp`, `form_submit`) and a CMP banner.
6. Set `LEADS_WEBHOOK_URL` and test the full lead path end-to-end.
7. Point the domain, deploy behind Cloudflare (WAF + rate limit on `/api/`), submit sitemap in Search Console.

## Phase 2+ (see ../docs/05)

Payload CMS migration (data modules are shaped for it), WhatsApp Cloud API, review sync via Places API, EN/ES/FR locales, blog expansion, booking/estimator/AI assistant.
