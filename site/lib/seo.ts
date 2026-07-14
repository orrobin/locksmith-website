import type { Metadata } from "next";
import { site } from "./config";
import type { Service } from "./services";
import type { Location } from "./locations";

// Meta templates (docs/03 §2) + JSON-LD builders (docs/03 §3).

export function pageMetadata(opts: { title: string; description: string; path: string }): Metadata {
  const url = `${site.domain}${opts.path}`;
  return {
    title: opts.title,
    description: opts.description,
    alternates: { canonical: url },
    openGraph: {
      title: opts.title,
      description: opts.description,
      url,
      siteName: site.brandLong,
      locale: "pt_PT",
      type: "website",
    },
    twitter: { card: "summary_large_image", title: opts.title, description: opts.description },
  };
}

const orgId = `${site.domain}/#organization`;

/** Site-wide Locksmith (LocalBusiness) schema — emitted once in the root layout. */
export function locksmithSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Locksmith",
    "@id": orgId,
    name: site.brandLong,
    url: site.domain,
    telephone: site.phone,
    email: site.email,
    vatID: site.nif,
    priceRange: "€€",
    paymentAccepted: "Cash, Credit Card, MB Way, Multibanco",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.locality,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    geo: { "@type": "GeoCoordinates", latitude: site.geo.lat, longitude: site.geo.lng },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
    areaServed: ["Lisboa", "Cascais", "Sintra", "Oeiras", "Amadora", "Almada", "Loures", "Odivelas", "Setúbal"].map(
      (name) => ({ "@type": "City", name })
    ),
    sameAs: [site.social.facebook, site.social.instagram, site.social.gbp],
  };
}

export function serviceSchema(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.name,
    name: `${service.name} em Lisboa`,
    description: service.excerpt,
    provider: { "@id": orgId },
    areaServed: { "@type": "City", name: "Lisboa" },
    offers: {
      "@type": "Offer",
      priceCurrency: "EUR",
      price: service.priceFrom,
      description: `Desde ${service.priceFrom}€ — preço fixo confirmado antes de iniciar`,
    },
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${site.domain}${item.path}`,
    })),
  };
}

export function locationTitle(loc: Location): string {
  return loc.type === "freguesia"
    ? `Chaveiro ${loc.name}, Lisboa · 24h em ${loc.eta} · ${site.brand}`
    : `Chaveiro em ${loc.name} 24 Horas · Chegada ${loc.eta} · ${site.brand}`;
}

export function locationDescription(loc: Location): string {
  return `Chaveiro em ${loc.name}: abertura de portas, fechaduras e emergências 24h. Chegada média ${loc.eta}. Preços fixos publicados. Ligue ${site.phoneDisplay} ou envie WhatsApp.`;
}
