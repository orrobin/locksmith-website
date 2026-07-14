import Link from "next/link";
import { site } from "@/lib/config";
import { emergencyServices } from "@/lib/services";
import { freguesias, cities } from "@/lib/locations";
import { priceRows } from "@/lib/prices";
import { pageMetadata, faqSchema, breadcrumbSchema } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import PriceTable from "@/components/PriceTable";
import { CallButton, WhatsAppButton } from "@/components/CtaButtons";
import { Breadcrumbs, AvailabilityIndicator, ServicesGrid, GuaranteeBlock, FaqAccordion } from "@/components/Sections";

export const metadata = pageMetadata({
  title: "Chaveiro 24 Horas em Lisboa · Emergências em 20–30 min",
  description:
    "Chaveiro de emergência 24h em Lisboa: abertura de portas, carro trancado, chave partida. Chegada em 20–30 min, preço fixo confirmado antes. Ligue agora.",
  path: "/chaveiro-24-horas/",
});

const faqs = [
  { q: "Estão mesmo abertos agora?", a: "Sim — funcionamos 24 horas por dia, 365 dias por ano, com técnicos de serviço permanente. O telefone é atendido por um técnico, não por um call center." },
  { q: "Quanto custa uma emergência à noite?", a: "A abertura de porta comum custa desde 79€ entre as 21h e as 8h e ao fim-de-semana. O valor exato é confirmado ao telefone antes de sairmos — nunca terá surpresas no final." },
  { q: "Em quanto tempo chegam de madrugada?", a: "De madrugada normalmente até mais depressa do que de dia: 15–25 minutos em Lisboa, sem trânsito." },
  { q: "O que devo fazer enquanto espero?", a: "Mantenha-se num local seguro e iluminado. Não tente forçar a porta — pode transformar uma abertura simples num estrago caro. Se cheira a gás ou há uma criança sozinha lá dentro, ligue primeiro ao 112." },
  { q: "Como evito burlas de chaveiros?", a: "Desconfie de anúncios 'desde 9€' — é a isca clássica. Um profissional sério diz-lhe o preço fixo ao telefone, aceita cartão/MB Way, tem NIF e emite fatura. Nós cumprimos os quatro." },
];

export default function EmergencyPage() {
  const emergencyRows = priceRows.filter((r) =>
    ["abertura-de-portas", "carro-trancado", "extracao-de-chave-partida"].includes(r.service)
  );
  return (
    <>
      <JsonLd data={[faqSchema(faqs), breadcrumbSchema([{ name: "Chaveiro 24 Horas", path: "/chaveiro-24-horas/" }])]} />

      {/* HERO — urgent accent */}
      <section className="bg-danger-700 px-4 py-12 text-white">
        <div className="mx-auto max-w-6xl">
          <Breadcrumbs items={[{ name: "Chaveiro 24 Horas", path: "/chaveiro-24-horas/" }]} />
          <div className="mt-4">
            <AvailabilityIndicator />
          </div>
          <h1 className="mt-4 max-w-3xl text-3xl font-extrabold leading-tight sm:text-5xl">
            Chaveiro 24 Horas em Lisboa — atendemos em 3 toques
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-red-100">
            Porta trancada, carro fechado, chave partida — chegamos em 20–30 minutos, a qualquer hora.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <CallButton ctaLocation="hero" size="lg" pulse label={`LIGAR AGORA ${site.phoneDisplay}`} />
            <WhatsAppButton ctaLocation="hero" size="lg" context={{ kind: "emergency" }} />
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl space-y-14 px-4 py-12">
        <section>
          <h2 className="text-2xl font-extrabold text-navy-900">Preços de emergência — sem surpresas</h2>
          <p className="mt-2 max-w-2xl text-slate-600">
            O valor é fixado ao telefone e confirmado no local <strong>antes</strong> de tocarmos na porta.
          </p>
          <div className="mt-6">
            <PriceTable rows={emergencyRows} />
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-extrabold text-navy-900">Serviços de emergência</h2>
          <div className="mt-6">
            <ServicesGrid items={emergencyServices} />
          </div>
        </section>

        <section className="rounded-xl bg-navy-50 p-6">
          <h2 className="text-xl font-extrabold text-navy-900">O que fazer enquanto espera</h2>
          <ul className="mt-3 space-y-2 text-sm text-slate-700">
            <li>✔ Mantenha-se num local seguro e iluminado — diga-nos onde está exatamente (partilhe localização por WhatsApp).</li>
            <li>✔ Tenha à mão um documento de identificação: pedimos sempre prova de que a casa/carro é seu.</li>
            <li>✘ Não tente abrir com cartões, arames ou força — na maioria dos casos só agrava o custo da reparação.</li>
            <li>🚨 Criança sozinha lá dentro, cheiro a gás ou fogão ligado? Ligue primeiro ao 112 e depois a nós.</li>
          </ul>
        </section>

        <section className="rounded-xl border-2 border-danger-600 p-6">
          <h2 className="text-xl font-extrabold text-navy-900">⚠️ Como evitar burlas de chaveiros</h2>
          <p className="mt-2 text-sm text-slate-700">
            Anúncios &quot;abertura desde 9€&quot; são a isca clássica: no final aparecem faturas de centenas de euros. Antes de
            contratar qualquer chaveiro (mesmo que não sejamos nós), verifique:
          </p>
          <ul className="mt-3 grid gap-2 text-sm text-slate-700 sm:grid-cols-2">
            <li>✔ Preço fixo dito ao telefone, antes da deslocação</li>
            <li>✔ Aceita MB Way/cartão (burlões exigem dinheiro)</li>
            <li>✔ NIF e fatura certificada</li>
            <li>✔ Avaliações reais no Google</li>
          </ul>
          <p className="mt-3 text-sm font-semibold text-navy-900">
            Os nossos preços estão <Link href="/precos/" className="underline">publicados aqui</Link> — compare à vontade.
          </p>
        </section>

        <GuaranteeBlock />
        <FaqAccordion faqs={faqs} title="Perguntas frequentes — emergências" />

        <section>
          <h2 className="text-xl font-extrabold text-navy-900">Emergências em toda a área de Lisboa</h2>
          <ul className="mt-4 flex flex-wrap gap-2 text-sm">
            {[...freguesias.map((f) => ({ name: f.name, href: `/chaveiro-lisboa/${f.slug}/` })), ...cities.map((c) => ({ name: c.name, href: `/chaveiro-${c.slug}/` }))].map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="rounded-full border border-navy-200 px-3 py-1 hover:bg-navy-50">
                  {l.name}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}
