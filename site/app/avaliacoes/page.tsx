import { site } from "@/lib/config";
import { testimonials } from "@/lib/reviews";
import { pageMetadata, breadcrumbSchema } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import { Breadcrumbs, ReviewsSection, CtaBand } from "@/components/Sections";

export const metadata = pageMetadata({
  title: `Avaliações de Clientes · ${site.rating.value}★ no Google`,
  description:
    "Avaliações reais de clientes do nosso serviço de chaveiro em Lisboa: aberturas de emergência, fechaduras e segurança. Leia antes de escolher.",
  path: "/avaliacoes/",
});

export default function ReviewsPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-12 px-4 py-10">
      <JsonLd data={breadcrumbSchema([{ name: "Avaliações", path: "/avaliacoes/" }])} />
      <div>
        <Breadcrumbs items={[{ name: "Avaliações", path: "/avaliacoes/" }]} />
        <h1 className="mt-4 text-3xl font-extrabold text-navy-900 sm:text-4xl">O que dizem os nossos clientes</h1>
        <p className="mt-3 flex items-center gap-2 text-lg">
          <span className="text-accent-500" aria-hidden>★★★★★</span>
          <strong>{site.rating.value}</strong> em {site.rating.count}+ avaliações no Google
        </p>
        <a href={site.social.gbp} target="_blank" rel="noopener" className="mt-2 inline-block text-sm font-semibold text-navy-700 underline">
          Ver todas no Google →
        </a>
      </div>

      <ReviewsSection items={testimonials} title="Avaliações recentes" />

      <section className="rounded-xl bg-navy-50 p-6 text-center">
        <h2 className="text-xl font-extrabold text-navy-900">Já foi nosso cliente?</h2>
        <p className="mt-2 text-sm text-slate-700">A sua avaliação ajuda os vizinhos a escolher com confiança.</p>
        <a
          href={site.reviewUrl}
          target="_blank"
          rel="noopener"
          className="mt-4 inline-block rounded-lg bg-navy-900 px-6 py-3 font-bold text-white hover:bg-navy-800"
        >
          Deixar avaliação no Google
        </a>
      </section>

      <CtaBand />
    </div>
  );
}
