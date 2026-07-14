import { services } from "@/lib/services";
import { pageMetadata, breadcrumbSchema } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import { Breadcrumbs, ServicesGrid, CtaBand } from "@/components/Sections";

export const metadata = pageMetadata({
  title: "Serviços de Chaveiro em Lisboa · Preço Fixo · 24h",
  description:
    "Todos os serviços de chaveiro em Lisboa: abertura de portas, mudança de canhão, fechaduras inteligentes, cofres e mais. Preços fixos publicados, 24h por dia.",
  path: "/servicos/",
});

export default function ServicesHubPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <JsonLd data={breadcrumbSchema([{ name: "Serviços", path: "/servicos/" }])} />
      <Breadcrumbs items={[{ name: "Serviços", path: "/servicos/" }]} />
      <h1 className="mt-4 text-3xl font-extrabold text-navy-900 sm:text-4xl">Serviços de chaveiro em Lisboa</h1>
      <p className="mt-3 max-w-2xl text-slate-600">
        {services.length} serviços, um padrão: preço fixo confirmado antes de começar, garantia de 12 meses e fatura
        certificada. Emergências atendidas 24h por dia.
      </p>
      <div className="mt-10">
        <ServicesGrid items={services} />
      </div>
      <div className="mt-14">
        <CtaBand title="Não encontra o que procura?" />
      </div>
    </div>
  );
}
