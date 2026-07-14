---
title: 00 — Index (MOC)
tags: [locksmith, architecture, moc]
created: 2026-07-13
---

# {Brand} — Locksmith Website Architecture (Lisbon, Portugal)

Production-ready architecture for the leading locksmith website in Portugal: SEO-first, mobile-first, conversion-focused, multilingual (PT/EN/ES/FR). Based on live competitive research of top-ranking locksmith sites in Portugal, the UK, US, Germany, and Australia (July 2026).

**The strategy in one line:** win on the five things no Portuguese competitor does — published fixed prices, real WhatsApp integration, full schema markup, freguesia-level local content, and multilingual service for tourists/expats — while matching the best global patterns for call-first emergency UX.

## Documents

| Note | Contents |
|---|---|
| [[01-strategy-and-research]] | Competitive research digest (5 markets), market gaps, positioning pillars, audience → CTA mapping, user journeys, conversion funnel + KPI targets, GA4/GTM event schema, CRO playbook, WhatsApp architecture |
| [[02-information-architecture]] | Complete sitemap (~95 PT pages / ~380 with locales), URL inventory, navigation architecture (header/mobile/footer/breadcrumbs), wireframes for all 10 templates, component hierarchy, mobile-first requirements |
| [[03-seo-architecture]] | Technical SEO spec, meta title/description templates, JSON-LD plan (Locksmith, Service, FAQ, Breadcrumb, Review), local SEO + anti-doorway programmatic model, GBP strategy, keyword clusters, topical authority plan, hreflang/i18n, internal-linking rules, CWV targets |
| [[04-technical-architecture]] | Recommended stack (Next.js 15 + Payload CMS 3 + Postgres + Vercel EU + Cloudflare), system diagram, full ERD + entity definitions, API endpoints, integrations map (WhatsApp Cloud API, GBP, Stripe/MB Way, CRM, AI chatbot), performance plan, security checklist (incl. RGPD), WCAG 2.2 AA checklist |
| [[05-roadmap-and-features]] | Phased delivery plan (Gantt), extra-feature specs with priorities (estimator, booking, AI assistant, review automation…), CRO experimentation program, scalability roadmap (Porto → national) |

## Deliverables cross-reference

1. Sitemap → [[02-information-architecture#1. Complete sitemap]]
2. Information architecture → [[02-information-architecture]]
3. User journeys → [[01-strategy-and-research#3. User journeys]]
4. Conversion funnel → [[01-strategy-and-research#4. Conversion funnel & measurement]]
5. Wireframes → [[02-information-architecture#3. Wireframes (section stacks, mobile-first)]]
6. Component hierarchy → [[02-information-architecture#4. Component hierarchy]]
7. Navigation → [[02-information-architecture#2. Navigation architecture]]
8. Mobile-first recommendations → [[02-information-architecture#5. Mobile-first design requirements]]
9. SEO architecture → [[03-seo-architecture]]
10. Database entities → [[04-technical-architecture#3. Database entities (ERD)]]
11. API architecture → [[04-technical-architecture#4. API architecture]]
12. Technology stack → [[04-technical-architecture#1. Recommended technology stack]]
13. Performance plan → [[04-technical-architecture#6. Performance optimization plan]]
14. Security checklist → [[04-technical-architecture#7. Security checklist]]
15. Accessibility checklist → [[04-technical-architecture#8. Accessibility checklist (WCAG 2.2 AA)]]
16. Scalability roadmap → [[05-roadmap-and-features#4. Future scalability roadmap]]

## Open decisions (need owner input)

- [ ] Brand name + domain
- [ ] Final price table (transparency pillar depends on it)
- [ ] Physical address vs service-area-only business (affects GBP + schema + contact page)
- [ ] Phone/WhatsApp numbers (recommend: one primary + WhatsApp Business on a second)
- [ ] Which certifications/insurance can legitimately be displayed (never overstate — trust pillar)
