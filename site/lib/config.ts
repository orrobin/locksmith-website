// Site-wide settings (Phase 2: migrate to Payload CMS `SiteSettings` global).
// All contact details are placeholders — replace before launch (see docs/00-index.md "Open decisions").

export const site = {
  brand: "Chaveiro Express",
  brandLong: "Chaveiro Express Lisboa",
  domain: "https://www.chaveiroexpress.pt",
  phone: "+351963000000",
  phoneDisplay: "963 000 000",
  whatsapp: "351963000000",
  email: "info@chaveiroexpress.pt",
  nif: "PT500000000",
  address: {
    street: "Av. da República 50",
    locality: "Lisboa",
    postalCode: "1050-196",
    country: "PT",
  },
  geo: { lat: 38.7369, lng: -9.1461 },
  hours: "24 horas, todos os dias",
  etaDefault: "20–30 min",
  rating: { value: 4.9, count: 180 }, // placeholder until Places API sync (Phase 2)
  social: {
    facebook: "https://www.facebook.com/chaveiroexpress",
    instagram: "https://www.instagram.com/chaveiroexpress",
    gbp: "https://g.page/chaveiroexpress",
  },
  reviewUrl: "https://g.page/r/chaveiroexpress/review",
  livroReclamacoes: "https://www.livroreclamacoes.pt/Inicio/",
} as const;

/** True between 08:00 and 22:00 Lisbon time — drives time-aware emergency copy. */
export function isDaytime(date = new Date()): boolean {
  const hour = Number(
    new Intl.DateTimeFormat("pt-PT", { hour: "numeric", hour12: false, timeZone: "Europe/Lisbon" }).format(date)
  );
  return hour >= 8 && hour < 22;
}
