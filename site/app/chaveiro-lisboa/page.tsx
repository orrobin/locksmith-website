import Link from "next/link";
import { lisbon, freguesias, cities } from "@/lib/locations";
import { services } from "@/lib/services";
import { testimonials } from "@/lib/reviews";
import { pageMetadata, faqSchema, breadcrumbSchema, locationTitle, locationDescription } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import { CallButton, WhatsAppButton } from "@/components/CtaButtons";
import { Breadcrumbs, AvailabilityIndicator, ServicesGrid, ReviewsSection, FaqAccordion, CtaBand } from "@/components/Sections";

export const metadata = pageMetadata({
  title: locationTitle(lisbon),
  description: locationDescription(lisbon),
  path: "/chaveiro-lisboa/",
});

export default function LisbonHubPage() {
  const breadcrumb = [{ name: "Chaveiro Lisboa", path: "/chaveiro-lisboa/" }];
  return (
    <>
      <JsonLd data={[faqSchema(lisbon.faqs), breadcrumbSchema(breadcrumb)]} />

      <section className="bg-navy-900 px-4 py-12 text-white">
        <div className="mx-auto max-w-6xl">
          <Breadcrumbs items={breadcrumb} />
          <h1 className="mt-4 text-3xl font-extrabold sm:text-4xl">Chaveiro em Lisboa — 24 horas</h1>
          <div className="mt-4">
            <AvailabilityIndicator eta={lisbon.eta} area="Lisboa" />
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <CallButton ctaLocation="hero" size="lg" pulse />
            <WhatsAppButton ctaLocation="hero" size="lg" context={{ kind: "location", area: "Lisboa" }} />
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl space-y-14 px-4 py-12">
        <section className="max-w-3xl space-y-4 text-slate-700">
          {lisbon.intro.map((p) => (
            <p key={p.slice(0, 30)}>{p}</p>
          ))}
        </section>

        <section>
          <h2 className="text-2xl font-extrabold text-navy-900">Freguesias que servimos em Lisboa</h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {freguesias.map((f) => (
              <li key={f.slug}>
                <Link
                  href={`/chaveiro-lisboa/${f.slug}/`}
                  className="block rounded-xl border border-navy-100 p-4 transition hover:border-navy-200 hover:shadow-md"
                >
                  <span className="font-bold text-navy-900">{f.name}</span>
                  <span className="mt-1 block text-sm text-slate-600">Chegada: {f.eta}</span>
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-slate-600">
            Não vê a sua freguesia? Servimos toda a cidade — <Link href="/contactos/" className="font-semibold underline">contacte-nos</Link>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-extrabold text-navy-900">Serviços em Lisboa</h2>
          <div className="mt-6">
            <ServicesGrid items={services.slice(0, 8)} city="Lisboa" />
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-extrabold text-navy-900">Junto aos pontos de referência</h2>
          <p className="mt-2 max-w-2xl text-slate-600">
            Atendemos diariamente junto a {lisbon.landmarks.slice(0, -1).join(", ")} e {lisbon.landmarks.at(-1)} — em toda
            a cidade, do centro histórico às zonas modernas.
          </p>
        </section>

        <ReviewsSection items={testimonials.filter((t) => freguesias.some((f) => f.name === t.area)).slice(0, 3)} title="Clientes em Lisboa" />
        <FaqAccordion faqs={lisbon.faqs} title="Perguntas frequentes — Lisboa" />

        <section>
          <h2 className="text-xl font-extrabold text-navy-900">Também servimos</h2>
          <ul className="mt-4 flex flex-wrap gap-2 text-sm">
            {cities.map((c) => (
              <li key={c.slug}>
                <Link href={`/chaveiro-${c.slug}/`} className="rounded-full border border-navy-200 px-3 py-1 hover:bg-navy-50">
                  Chaveiro {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <CtaBand title="Precisa de um chaveiro em Lisboa?" waContext={{ kind: "location", area: "Lisboa" }} />
      </div>
    </>
  );
}
