import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { cities, getCity } from "@/lib/locations";
import { services } from "@/lib/services";
import { testimonials } from "@/lib/reviews";
import { pageMetadata, faqSchema, breadcrumbSchema, locationTitle, locationDescription } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import { CallButton, WhatsAppButton } from "@/components/CtaButtons";
import { Breadcrumbs, AvailabilityIndicator, ServicesGrid, ReviewsSection, FaqAccordion, CtaBand } from "@/components/Sections";

// City pages live at /chaveiro-{cidade}/ (docs/02 §1.1). Next.js has no partial dynamic
// segments, so this root-level dynamic route statically generates exactly those slugs.
export const dynamicParams = false;

export function generateStaticParams() {
  return cities.map((c) => ({ citySlug: `chaveiro-${c.slug}` }));
}

function resolveCity(citySlug: string) {
  return citySlug.startsWith("chaveiro-") ? getCity(citySlug.slice("chaveiro-".length)) : undefined;
}

export async function generateMetadata({ params }: { params: Promise<{ citySlug: string }> }): Promise<Metadata> {
  const { citySlug } = await params;
  const loc = resolveCity(citySlug);
  if (!loc) return {};
  return pageMetadata({
    title: locationTitle(loc),
    description: locationDescription(loc),
    path: `/chaveiro-${loc.slug}/`,
  });
}

export default async function CityPage({ params }: { params: Promise<{ citySlug: string }> }) {
  const { citySlug } = await params;
  const loc = resolveCity(citySlug);
  if (!loc) notFound();

  const siblings = cities.filter((c) => c.slug !== loc.slug).slice(0, 4);
  const localReviews = testimonials.filter((t) => t.area === loc.name).slice(0, 3);
  const breadcrumb = [{ name: `Chaveiro ${loc.name}`, path: `/chaveiro-${loc.slug}/` }];

  return (
    <>
      <JsonLd data={[faqSchema(loc.faqs), breadcrumbSchema(breadcrumb)]} />

      <section className="bg-navy-900 px-4 py-12 text-white">
        <div className="mx-auto max-w-6xl">
          <Breadcrumbs items={breadcrumb} />
          <h1 className="mt-4 text-3xl font-extrabold sm:text-4xl">Chaveiro em {loc.name} — 24 horas</h1>
          <div className="mt-4">
            <AvailabilityIndicator eta={loc.eta} area={loc.name} />
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <CallButton ctaLocation="hero" size="lg" pulse />
            <WhatsAppButton ctaLocation="hero" size="lg" context={{ kind: "location", area: loc.name }} />
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl space-y-14 px-4 py-12">
        <section className="max-w-3xl space-y-4 text-slate-700">
          {loc.intro.map((p) => (
            <p key={p.slice(0, 30)}>{p}</p>
          ))}
          <p className="text-sm text-slate-600">
            Atendemos junto a {loc.landmarks.slice(0, -1).join(", ")} e {loc.landmarks.at(-1)}.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-extrabold text-navy-900">Serviços em {loc.name}</h2>
          <div className="mt-6">
            <ServicesGrid items={services.slice(0, 8)} city={loc.name} />
          </div>
        </section>

        {localReviews.length > 0 && <ReviewsSection items={localReviews} title={`Clientes em ${loc.name}`} />}
        <FaqAccordion faqs={loc.faqs} title={`Perguntas frequentes — ${loc.name}`} />

        <section>
          <h2 className="text-xl font-extrabold text-navy-900">Zonas próximas</h2>
          <ul className="mt-4 flex flex-wrap gap-2 text-sm">
            <li>
              <Link href="/chaveiro-lisboa/" className="rounded-full border border-navy-200 px-3 py-1 font-semibold hover:bg-navy-50">
                Chaveiro Lisboa
              </Link>
            </li>
            {siblings.map((s) => (
              <li key={s.slug}>
                <Link href={`/chaveiro-${s.slug}/`} className="rounded-full border border-navy-200 px-3 py-1 hover:bg-navy-50">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <CtaBand title={`Precisa de um chaveiro em ${loc.name}?`} waContext={{ kind: "location", area: loc.name }} />
      </div>
    </>
  );
}
