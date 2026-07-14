import { pageMetadata, faqSchema, breadcrumbSchema } from "@/lib/seo";
import { priceIncludes, paymentMethods } from "@/lib/prices";
import JsonLd from "@/components/JsonLd";
import PriceTable from "@/components/PriceTable";
import { Breadcrumbs, GuaranteeBlock, FaqAccordion, CtaBand } from "@/components/Sections";

export const metadata = pageMetadata({
  title: "Preços de Chaveiro em Lisboa 2026 · Tabela Completa",
  description:
    "Tabela de preços transparente: abertura de portas desde 59€, mudança de canhão desde 39€. Dia, noite e fim-de-semana. Sem taxas escondidas — o único chaveiro de Lisboa com preços publicados.",
  path: "/precos/",
});

const faqs = [
  { q: "O preço anunciado é mesmo o preço final?", a: "Sim. O valor 'desde' corresponde ao caso padrão; situações especiais (porta blindada, fechadura de alta segurança) têm preço superior, mas é sempre fixado ao telefone e confirmado no local antes de começarmos. Se não cumprirmos o preço combinado, não paga a abertura." },
  { q: "Porque é que outros anunciam 'desde 9€'?", a: "É uma isca. Nenhum profissional consegue deslocar-se e abrir uma porta por 9€. Esses anúncios acabam habitualmente em faturas de centenas de euros exigidas em dinheiro. Publicar a tabela completa é a nossa forma de combater essa prática." },
  { q: "A deslocação paga-se à parte?", a: "Não — em Lisboa e concelhos limítrofes a deslocação está incluída no preço. Se o serviço não se realizar por decisão sua após a chegada, cobramos apenas a deslocação (20€)." },
  { q: "O material está incluído?", a: "A mão-de-obra e o material são apresentados separadamente para poder escolher: por exemplo, num canhão pode optar por um modelo básico (desde 15€) ou de alta segurança (desde 80€). Mostramos as opções e os preços antes de instalar." },
];

export default function PricesPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-12 px-4 py-10">
      <JsonLd data={[faqSchema(faqs), breadcrumbSchema([{ name: "Preços", path: "/precos/" }])]} />
      <div>
        <Breadcrumbs items={[{ name: "Preços", path: "/precos/" }]} />
        <h1 className="mt-4 text-3xl font-extrabold text-navy-900 sm:text-4xl">Preços fixos, sem surpresas</h1>
        <p className="mt-3 max-w-2xl text-slate-600">
          Somos o único chaveiro em Lisboa que publica a tabela de preços completa. O valor é confirmado ao telefone e
          novamente no local, <strong>antes</strong> de começarmos o trabalho.
        </p>
      </div>

      <PriceTable />

      <section className="grid gap-6 sm:grid-cols-2">
        <div className="rounded-xl bg-navy-50 p-6">
          <h2 className="font-extrabold text-navy-900">O preço inclui</h2>
          <ul className="mt-3 space-y-2 text-sm text-slate-700">
            {priceIncludes.map((i) => (
              <li key={i}>✔ {i}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl bg-navy-50 p-6">
          <h2 className="font-extrabold text-navy-900">Formas de pagamento</h2>
          <ul className="mt-3 space-y-2 text-sm text-slate-700">
            {paymentMethods.map((m) => (
              <li key={m}>💳 {m}</li>
            ))}
          </ul>
          <p className="mt-3 text-xs text-slate-500">
            Aceitar cartão e MB Way é também um sinal de confiança — desconfie de quem só aceita dinheiro.
          </p>
        </div>
      </section>

      <GuaranteeBlock />
      <FaqAccordion faqs={faqs} title="Perguntas frequentes sobre preços" />
      <CtaBand title="Quer o preço exato para o seu caso?" waContext={{ kind: "quote" }} />
    </div>
  );
}
