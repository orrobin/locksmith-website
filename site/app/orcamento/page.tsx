import { site } from "@/lib/config";
import { pageMetadata, breadcrumbSchema } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import QuoteForm from "@/components/QuoteForm";
import { Breadcrumbs, GuaranteeBlock } from "@/components/Sections";

export const metadata = pageMetadata({
  title: "Orçamento Grátis em 30 Segundos · Resposta em 15 min",
  description:
    "Peça um orçamento grátis para qualquer serviço de chaveiro em Lisboa. 4 campos, resposta em menos de 15 minutos por telefone ou WhatsApp.",
  path: "/orcamento/",
});

export default function QuotePage() {
  return (
    <div className="mx-auto max-w-3xl space-y-10 px-4 py-10">
      <JsonLd data={breadcrumbSchema([{ name: "Orçamento", path: "/orcamento/" }])} />
      <div>
        <Breadcrumbs items={[{ name: "Orçamento", path: "/orcamento/" }]} />
        <h1 className="mt-4 text-3xl font-extrabold text-navy-900 sm:text-4xl">Orçamento grátis em 30 segundos</h1>
        <p className="mt-3 text-slate-600">
          Preencha 4 campos e respondemos em menos de 15 minutos com o preço fixo. Emergência? Ligue já{" "}
          <a href={`tel:${site.phone}`} className="font-bold text-navy-700 underline">{site.phoneDisplay}</a>.
        </p>
      </div>

      <QuoteForm formType="quote" />

      <GuaranteeBlock />
    </div>
  );
}
