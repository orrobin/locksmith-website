import Link from "next/link";
import { site } from "@/lib/config";
import { services } from "@/lib/services";
import { freguesias, cities, lisbon } from "@/lib/locations";
import { testimonials } from "@/lib/reviews";
import { priceRows } from "@/lib/prices";
import { faqSchema } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import PriceTable from "@/components/PriceTable";
import { CallButton, WhatsAppButton } from "@/components/CtaButtons";
import {
  TrustBar,
  AvailabilityIndicator,
  ServicesGrid,
  StepsProcess,
  GuaranteeBlock,
  ReviewsSection,
  FaqAccordion,
  CtaBand,
} from "@/components/Sections";

const homeFaqs = [
  { q: "Quanto tempo demoram a chegar?", a: "Em Lisboa, 20–30 minutos em média, 24 horas por dia. Nos concelhos limítrofes, 25–50 minutos. Dizemos-lhe sempre o tempo real quando ligar." },
  { q: "Quanto custa abrir uma porta?", a: "Uma abertura de porta comum custa desde 59€ durante o dia (79€ à noite/fim-de-semana). Todos os preços estão publicados na nossa tabela — o valor é confirmado antes de começarmos." },
  { q: "Abrem sem danificar a fechadura?", a: "Sim, na grande maioria dos casos usamos técnicas de abertura fina sem danos. Se for necessário substituir alguma peça, informamos antes." },
  { q: "Que formas de pagamento aceitam?", a: "MB Way, Multibanco, cartão (Visa/Mastercard), dinheiro e transferência. Emitimos sempre fatura certificada." },
  { q: "Trabalham à noite e aos fins-de-semana?", a: "Sim, 24h/365. Fora do horário diurno (8h–21h) aplica-se a taxa indicada na tabela de preços — sem surpresas no final." },
  { q: "Como sei que não vou ser enganado no preço?", a: "É a nossa bandeira: preços fixos publicados no site, valor confirmado por telefone e novamente no local antes de tocar na porta. Se não cumprirmos o preço anunciado, não paga a abertura." },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema(homeFaqs)} />

      {/* HERO */}
      <section className="bg-navy-900 px-4 py-14 text-white sm:py-20">
        <div className="mx-auto max-w-6xl">
          <AvailabilityIndicator />
          <h1 className="mt-4 max-w-3xl text-3xl font-extrabold leading-tight sm:text-5xl">
            Chaveiro em Lisboa 24h — Abertura de Portas em 20–30 minutos
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-navy-100">
            Preço fixo publicado · Abertura sem danos · Técnicos certificados e segurados
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <CallButton ctaLocation="hero" size="lg" pulse />
            <WhatsAppButton ctaLocation="hero" size="lg" />
          </div>
          <p className="mt-4 text-sm text-navy-200">
            ⭐ {site.rating.value} no Google · {site.rating.count}+ avaliações · Lisboa, Cascais, Sintra, Oeiras e mais
          </p>
        </div>
      </section>

      <TrustBar />

      {/* SERVICES */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-2xl font-extrabold text-navy-900 sm:text-3xl">Os nossos serviços</h2>
        <p className="mt-2 max-w-2xl text-slate-600">
          Da emergência à instalação planeada — todos os serviços com preço fixo confirmado antes de começar.
        </p>
        <div className="mt-8">
          <ServicesGrid items={services.slice(0, 8)} />
        </div>
        <p className="mt-6">
          <Link href="/servicos/" className="font-bold text-navy-700 underline">
            Ver todos os {services.length} serviços →
          </Link>
        </p>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-navy-50 px-4 py-14">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-extrabold text-navy-900 sm:text-3xl">Como funciona</h2>
          <div className="mt-8">
            <StepsProcess />
          </div>
        </div>
      </section>

      {/* GUARANTEES */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-2xl font-extrabold text-navy-900 sm:text-3xl">As nossas garantias</h2>
        <div className="mt-8">
          <GuaranteeBlock />
        </div>
      </section>

      {/* REVIEWS */}
      <section className="bg-navy-50 px-4 py-14">
        <div className="mx-auto max-w-6xl">
          <ReviewsSection items={testimonials.slice(0, 3)} />
        </div>
      </section>

      {/* COVERAGE */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-2xl font-extrabold text-navy-900 sm:text-3xl">Zonas que servimos</h2>
        <p className="mt-2 max-w-2xl text-slate-600">
          Cobrimos toda a área metropolitana de Lisboa, 24 horas por dia.
        </p>
        <div className="mt-6 grid gap-8 sm:grid-cols-2">
          <div>
            <h3 className="font-bold text-navy-900">
              <Link href="/chaveiro-lisboa/" className="underline">Lisboa</Link> — {lisbon.eta}
            </h3>
            <ul className="mt-3 flex flex-wrap gap-2 text-sm">
              {freguesias.map((f) => (
                <li key={f.slug}>
                  <Link
                    href={`/chaveiro-lisboa/${f.slug}/`}
                    className="rounded-full border border-navy-200 px-3 py-1 text-navy-800 hover:bg-navy-50"
                  >
                    {f.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-navy-900">Concelhos limítrofes</h3>
            <ul className="mt-3 flex flex-wrap gap-2 text-sm">
              {cities.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/chaveiro-${c.slug}/`}
                    className="rounded-full border border-navy-200 px-3 py-1 text-navy-800 hover:bg-navy-50"
                  >
                    {c.name} · {c.eta}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* PRICE TEASER */}
      <section className="bg-navy-50 px-4 py-14">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-extrabold text-navy-900 sm:text-3xl">Preços transparentes</h2>
          <p className="mt-2 max-w-2xl text-slate-600">
            Somos o único chaveiro em Lisboa com a tabela de preços completa publicada. Sem letras pequenas.
          </p>
          <div className="mt-6">
            <PriceTable rows={priceRows.slice(0, 4)} compact />
          </div>
          <p className="mt-4">
            <Link href="/precos/" className="font-bold text-navy-700 underline">
              Ver tabela de preços completa →
            </Link>
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <FaqAccordion faqs={homeFaqs} />
      </section>

      {/* FINAL CTA */}
      <div className="mx-auto max-w-6xl px-4 pb-14">
        <CtaBand />
      </div>
    </>
  );
}
