import Link from "next/link";
import { pageMetadata, breadcrumbSchema } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import { Breadcrumbs, GuaranteeBlock, CtaBand } from "@/components/Sections";

export const metadata = pageMetadata({
  title: "Porquê Escolher-nos · 5 Compromissos",
  description:
    "Preços publicados, chegada em 20-30 min, técnicos identificados, pagamento por MB Way/cartão e garantia de 12 meses. Compare antes de escolher o seu chaveiro.",
  path: "/sobre/porque-nos-escolher/",
});

const reasons = [
  { icon: "💶", title: "Preços publicados — únicos em Lisboa", text: "A tabela completa está no site, com valores de dia, noite e fim-de-semana. O preço é confirmado antes de começarmos. Compare com quem esconde os preços." },
  { icon: "⏱️", title: "Chegada em 20–30 minutos, 24h/365", text: "Técnicos posicionados em vários pontos da cidade. Dizemos-lhe o tempo real de chegada ao telefone — e cumprimos." },
  { icon: "🪪", title: "Sabe quem vai a sua casa", text: "Técnicos certificados, segurados e identificados. Quando liga, sabe o nome de quem está a caminho." },
  { icon: "💳", title: "MB Way, Multibanco e cartão", text: "Aceitar pagamentos eletrónicos é também um sinal de seriedade: burlões exigem dinheiro. Fatura certificada em todos os serviços." },
  { icon: "🛡️", title: "Garantia de 12 meses por escrito", text: "Peças e mão-de-obra garantidas na fatura. Se algo falhar, voltamos sem custos." },
];

export default function WhyUsPage() {
  const breadcrumb = [
    { name: "Sobre", path: "/sobre/" },
    { name: "Porquê escolher-nos", path: "/sobre/porque-nos-escolher/" },
  ];
  return (
    <div className="mx-auto max-w-6xl space-y-12 px-4 py-10">
      <JsonLd data={breadcrumbSchema(breadcrumb)} />
      <div>
        <Breadcrumbs items={breadcrumb} />
        <h1 className="mt-4 text-3xl font-extrabold text-navy-900 sm:text-4xl">Porquê escolher-nos</h1>
        <p className="mt-3 max-w-2xl text-slate-600">
          Num setor com má fama, ganhamos confiança com factos verificáveis — não com promessas.
        </p>
      </div>

      <ul className="space-y-4">
        {reasons.map((r, i) => (
          <li key={r.title} className="flex gap-4 rounded-xl border border-navy-100 p-6">
            <span aria-hidden className="text-3xl">{r.icon}</span>
            <div>
              <h2 className="font-extrabold text-navy-900">
                {i + 1}. {r.title}
              </h2>
              <p className="mt-1 text-sm text-slate-700">{r.text}</p>
            </div>
          </li>
        ))}
      </ul>

      <p className="text-sm text-slate-600">
        Veja também: <Link href="/precos/" className="font-semibold underline">a nossa tabela de preços</Link> ·{" "}
        <Link href="/avaliacoes/" className="font-semibold underline">avaliações de clientes</Link> ·{" "}
        <Link href="/chaveiro-24-horas/" className="font-semibold underline">como evitar burlas de chaveiros</Link>
      </p>

      <GuaranteeBlock />
      <CtaBand />
    </div>
  );
}
