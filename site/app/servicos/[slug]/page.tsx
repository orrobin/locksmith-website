import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { services, getService } from "@/lib/services";
import { freguesias, cities } from "@/lib/locations";
import { testimonials } from "@/lib/reviews";
import { priceRows } from "@/lib/prices";
import { pageMetadata, serviceSchema, faqSchema, breadcrumbSchema } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import PriceTable from "@/components/PriceTable";
import { CallButton, WhatsAppButton } from "@/components/CtaButtons";
import { Breadcrumbs, StepsProcess, GuaranteeBlock, ReviewsSection, FaqAccordion, CtaBand, AvailabilityIndicator } from "@/components/Sections";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return pageMetadata({
    title: `${service.name} em Lisboa desde ${service.priceFrom}€ · 24h`,
    description: `${service.excerpt} Preço fixo desde ${service.priceFrom}€, confirmado antes de começar. Garantia de 12 meses. Ligue ou envie WhatsApp.`,
    path: `/servicos/${service.slug}/`,
  });
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const related = service.related.map(getService).filter((s) => s !== undefined);
  const serviceRows = priceRows.filter((r) => r.service === service.slug);
  const serviceReviews = testimonials.filter((t) => t.service === service.slug).slice(0, 3);
  const breadcrumb = [
    { name: "Serviços", path: "/servicos/" },
    { name: service.shortName, path: `/servicos/${service.slug}/` },
  ];

  return (
    <>
      <JsonLd data={[serviceSchema(service), faqSchema(service.faqs), breadcrumbSchema(breadcrumb)]} />

      {/* HERO */}
      <section className="bg-navy-900 px-4 py-12 text-white">
        <div className="mx-auto max-w-6xl">
          <Breadcrumbs items={breadcrumb} />
          <div className="mt-4 flex items-start gap-4">
            <span aria-hidden className="text-5xl">{service.icon}</span>
            <div>
              <h1 className="text-3xl font-extrabold sm:text-4xl">{service.name} em Lisboa</h1>
              <p className="mt-2 max-w-2xl text-navy-100">{service.excerpt}</p>
            </div>
          </div>
          <div className="mt-5">
            <AvailabilityIndicator />
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <CallButton ctaLocation="hero" size="lg" pulse />
            <WhatsAppButton
              ctaLocation="hero"
              size="lg"
              context={{ kind: "service", service: service.shortName }}
            />
          </div>
          <p className="mt-4 text-sm font-semibold text-accent-400">
            Desde {service.priceFrom}€ — preço confirmado antes de começar ·{" "}
            <Link href="/precos/" className="underline">ver tabela completa</Link>
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl space-y-14 px-4 py-12">
        {/* INTRO + SITUATIONS */}
        <section className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-4 text-slate-700">
            {service.intro.map((p) => (
              <p key={p.slice(0, 30)}>{p}</p>
            ))}
          </div>
          <div className="rounded-xl bg-navy-50 p-6">
            <h2 className="font-extrabold text-navy-900">Quando nos chamar</h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              {service.situations.map((s) => (
                <li key={s} className="flex gap-2">
                  <span aria-hidden className="text-navy-700">✔</span> {s}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* PROCESS */}
        <section>
          <h2 className="text-2xl font-extrabold text-navy-900">Como funciona</h2>
          <div className="mt-6">
            <StepsProcess />
          </div>
        </section>

        {/* PRICE */}
        {serviceRows.length > 0 && (
          <section>
            <h2 className="text-2xl font-extrabold text-navy-900">Preços deste serviço</h2>
            <div className="mt-6">
              <PriceTable rows={serviceRows} />
            </div>
            <p className="mt-3 text-sm text-slate-600">
              Valores com IVA, deslocação em Lisboa incluída.{" "}
              <Link href="/precos/" className="font-semibold underline">Tabela de preços completa →</Link>
            </p>
          </section>
        )}

        {/* GUARANTEES */}
        <section>
          <h2 className="text-2xl font-extrabold text-navy-900">As nossas garantias</h2>
          <div className="mt-6">
            <GuaranteeBlock />
          </div>
        </section>

        {/* REVIEWS */}
        {serviceReviews.length > 0 && <ReviewsSection items={serviceReviews} title="Clientes deste serviço" />}

        {/* RELATED + AREAS */}
        <section className="grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-xl font-extrabold text-navy-900">Serviços relacionados</h2>
            <ul className="mt-4 space-y-2">
              {related.map((r) => (
                <li key={r.slug}>
                  <Link href={`/servicos/${r.slug}/`} className="font-semibold text-navy-700 underline">
                    {r.icon} {r.name} →
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-extrabold text-navy-900">Zonas que servimos</h2>
            <ul className="mt-4 flex flex-wrap gap-2 text-sm">
              <li>
                <Link href="/chaveiro-lisboa/" className="rounded-full border border-navy-200 px-3 py-1 hover:bg-navy-50">
                  Lisboa
                </Link>
              </li>
              {freguesias.slice(0, 4).map((f) => (
                <li key={f.slug}>
                  <Link href={`/chaveiro-lisboa/${f.slug}/`} className="rounded-full border border-navy-200 px-3 py-1 hover:bg-navy-50">
                    {f.name}
                  </Link>
                </li>
              ))}
              {cities.slice(0, 4).map((c) => (
                <li key={c.slug}>
                  <Link href={`/chaveiro-${c.slug}/`} className="rounded-full border border-navy-200 px-3 py-1 hover:bg-navy-50">
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <FaqAccordion faqs={service.faqs} title={`Perguntas frequentes — ${service.shortName}`} />

        <CtaBand
          title={`Precisa de ${service.shortName.toLowerCase()}?`}
          waContext={{ kind: "service", service: service.shortName }}
        />
      </div>
    </>
  );
}
