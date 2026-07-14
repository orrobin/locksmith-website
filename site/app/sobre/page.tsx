import Link from "next/link";
import { site } from "@/lib/config";
import { pageMetadata, breadcrumbSchema } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import { Breadcrumbs, GuaranteeBlock, CtaBand } from "@/components/Sections";

export const metadata = pageMetadata({
  title: "Sobre Nós · Chaveiros de Confiança em Lisboa",
  description:
    "Conheça a equipa por trás do chaveiro mais transparente de Lisboa: técnicos certificados, preços publicados e milhares de portas abertas sem danos.",
  path: "/sobre/",
});

const stats = [
  { value: "10+", label: "anos de experiência" },
  { value: "8.500+", label: "aberturas realizadas" },
  { value: "20–30", label: "minutos de chegada média" },
  { value: `${site.rating.value}★`, label: "no Google" },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-14 px-4 py-10">
      <JsonLd data={breadcrumbSchema([{ name: "Sobre", path: "/sobre/" }])} />
      <div>
        <Breadcrumbs items={[{ name: "Sobre", path: "/sobre/" }]} />
        <h1 className="mt-4 text-3xl font-extrabold text-navy-900 sm:text-4xl">O chaveiro mais transparente de Lisboa</h1>
        <div className="mt-6 grid gap-8 lg:grid-cols-3">
          <div className="space-y-4 text-slate-700 lg:col-span-2">
            <p>
              A {site.brandLong} nasceu de uma frustração simples: num setor cheio de anúncios &quot;desde 9€&quot; que acabam em
              faturas de centenas de euros, decidimos fazer o contrário — publicar todos os preços, confirmar o valor antes de
              tocar na porta e aceitar cartão e MB Way em todos os serviços.
            </p>
            <p>
              Hoje somos uma equipa de técnicos certificados que serve toda a área metropolitana de Lisboa, 24 horas por dia.
              Da porta histórica de Alfama à fechadura inteligente do Parque das Nações, tratamos cada porta como se fosse a
              nossa.
            </p>
            <p>
              O nosso compromisso está por escrito em cada fatura: garantia de 12 meses, abertura sem danos na grande maioria
              dos casos e o preço combinado — sem exceções.
            </p>
          </div>
          <div className="rounded-xl bg-navy-50 p-6 text-center">
            <div aria-hidden className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-navy-200 text-5xl">👤</div>
            <p className="mt-3 font-bold text-navy-900">[Nome do fundador]</p>
            <p className="text-sm text-slate-600">Fundador e técnico principal</p>
            <p className="mt-2 text-xs text-slate-500">Substituir por fotografia real — rostos reais vendem confiança (docs/01 §1.1).</p>
          </div>
        </div>
      </div>

      <section aria-label="números da empresa">
        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((s) => (
            <li key={s.label} className="rounded-xl border border-navy-100 p-5 text-center">
              <p className="text-3xl font-extrabold text-navy-900">{s.value}</p>
              <p className="mt-1 text-sm text-slate-600">{s.label}</p>
            </li>
          ))}
        </ul>
      </section>

      <GuaranteeBlock />

      <section className="grid gap-4 sm:grid-cols-3">
        <Link href="/sobre/equipa/" className="rounded-xl border border-navy-100 p-5 font-bold text-navy-900 hover:shadow-md">
          👥 A nossa equipa →
        </Link>
        <Link href="/sobre/porque-nos-escolher/" className="rounded-xl border border-navy-100 p-5 font-bold text-navy-900 hover:shadow-md">
          ⭐ Porquê escolher-nos →
        </Link>
        <Link href="/sobre/certificacoes-e-seguros/" className="rounded-xl border border-navy-100 p-5 font-bold text-navy-900 hover:shadow-md">
          📜 Certificações e seguros →
        </Link>
      </section>

      <CtaBand />
    </div>
  );
}
