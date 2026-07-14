import { services } from "@/lib/services";
import { lisbon } from "@/lib/locations";
import { pageMetadata, faqSchema, breadcrumbSchema } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import { Breadcrumbs, FaqAccordion, CtaBand } from "@/components/Sections";

export const metadata = pageMetadata({
  title: "Perguntas Frequentes · Chaveiro Lisboa",
  description:
    "Todas as respostas sobre preços, tempos de chegada, aberturas sem danos, pagamentos e garantias do nosso serviço de chaveiro em Lisboa.",
  path: "/faq/",
});

const general = [
  { q: "Quanto tempo demoram a chegar?", a: "Em Lisboa, 20–30 minutos em média, 24 horas por dia. Nos concelhos limítrofes, 25–50 minutos — dizemos-lhe sempre o tempo real ao telefone." },
  { q: "Os preços do site são reais?", a: "Sim — e é essa a nossa diferença. O valor 'desde' corresponde ao caso padrão e o preço final é fixado antes de começarmos. Sem taxas escondidas." },
  { q: "Pedem comprovativo de morada antes de abrir?", a: "Sim, por segurança pedimos identificação e prova razoável de que o imóvel ou veículo é seu. É um sinal de seriedade — desconfie de quem abre portas sem perguntar nada." },
  { q: "Que garantia dão?", a: "12 meses em peças e mão-de-obra, por escrito na fatura." },
  { q: "Trabalham com empresas e condomínios?", a: "Sim — contratos de manutenção, mestragem de chaves e resposta prioritária. Peça uma proposta pelo formulário de orçamento." },
  { q: "Falam inglês?", a: "Yes! We serve Lisbon's international community and tourists in English, Spanish and French — call or message us on WhatsApp." },
];

export default function FaqPage() {
  const serviceFaqs = services.slice(0, 6).flatMap((s) => s.faqs.slice(0, 1));
  const all = [...general, ...serviceFaqs, ...lisbon.faqs.slice(0, 2)];
  return (
    <div className="mx-auto max-w-4xl space-y-12 px-4 py-10">
      <JsonLd data={[faqSchema(all), breadcrumbSchema([{ name: "FAQ", path: "/faq/" }])]} />
      <div>
        <Breadcrumbs items={[{ name: "FAQ", path: "/faq/" }]} />
        <h1 className="mt-4 text-3xl font-extrabold text-navy-900 sm:text-4xl">Perguntas frequentes</h1>
      </div>
      <FaqAccordion faqs={general} title="Geral" />
      <FaqAccordion faqs={serviceFaqs} title="Serviços" />
      <FaqAccordion faqs={lisbon.faqs} title="Zonas e deslocações" />
      <CtaBand title="Não encontrou a resposta?" />
    </div>
  );
}
