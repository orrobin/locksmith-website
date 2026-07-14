import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { freguesias, getFreguesia } from "@/lib/locations";
import { services } from "@/lib/services";
import { testimonials } from "@/lib/reviews";
import { pageMetadata, faqSchema, breadcrumbSchema, locationTitle, locationDescription } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import { CallButton, WhatsAppButton } from "@/components/CtaButtons";
import { Breadcrumbs, AvailabilityIndicator, ServicesGrid, ReviewsSection, FaqAccordion, CtaBand } from "@/components/Sections";

export const dynamicParams = false;

export function generateStaticParams() {
  return freguesias.map((f) => ({ freguesia: f.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ freguesia: string }> }): Promise<Metadata> {
  const { freguesia } = await params;
  const loc = getFreguesia(freguesia);
  if (!loc) return {};
  return pageMetadata({
    title: locationTitle(loc),
    description: locationDescription(loc),
    path: `/chaveiro-lisboa/${loc.slug}/`,
  });
}

export default async function FreguesiaPage({ params }: { params: Promise<{ freguesia: string }> }) {
  const { freguesia } = await params;
  const loc = getFreguesia(freguesia);
  if (!loc) notFound();

  const siblings = freguesias.filter((f) => f.slug !== loc.slug).slice(0, 3);
  const localReviews = testimonials.filter((t) => t.area === loc.name).slice(0, 3);
  const breadcrumb = [
    { name: "Chaveiro Lisboa", path: "/chaveiro-lisboa/" },
    { name: loc.name, path: `/chaveiro-lisboa/${loc.slug}/` },
  ];

  return (
    <>
      <JsonLd data={[faqSchema(loc.faqs), breadcrumbSchema(breadcrumb)]} />

      <section className="bg-navy-900 px-4 py-12 text-white">
        <div className="mx-auto max-w-6xl">
          <Breadcrumbs items={breadcrumb} />
          <h1 className="mt-4 text-3xl font-extrabold sm:text-4xl">Chaveiro em {loc.name}, Lisboa — 24h</h1>
          <div className="mt-4">
            <AvailabilityIndicator eta={loc.eta} area={loc.name} />
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <CallButton ctaLocation="hero" size="lg" pulse />
            <WhatsAppButton ctaLocation="hero" size="lg" context={{ kind: "location", area: `${loc.name}, Lisboa` }} />
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
            <ServicesGrid items={services.slice(0, 4)} city={loc.name} />
          </div>
          <p className="mt-4 text-sm">
            <Link href="/servicos/" className="font-semibold text-navy-700 underline">Todos os serviços →</Link>
          </p>
        </section>

        {localReviews.length > 0 && <ReviewsSection items={localReviews} title={`Clientes em ${loc.name}`} />}
        <FaqAccordion faqs={loc.faqs} title={`Perguntas frequentes — ${loc.name}`} />

        <section>
          <h2 className="text-xl font-extrabold text-navy-900">Freguesias vizinhas</h2>
          <ul className="mt-4 flex flex-wrap gap-2 text-sm">
            <li>
              <Link href="/chaveiro-lisboa/" className="rounded-full border border-navy-200 px-3 py-1 font-semibold hover:bg-navy-50">
                ← Toda a Lisboa
              </Link>
            </li>
            {siblings.map((s) => (
              <li key={s.slug}>
                <Link href={`/chaveiro-lisboa/${s.slug}/`} className="rounded-full border border-navy-200 px-3 py-1 hover:bg-navy-50">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <CtaBand title={`Precisa de um chaveiro em ${loc.name}?`} waContext={{ kind: "location", area: `${loc.name}, Lisboa` }} />
      </div>
    </>
  );
}
