import Link from "next/link";
import { site } from "@/lib/config";
import type { Service } from "@/lib/services";
import type { Testimonial } from "@/lib/reviews";
import { CallButton, WhatsAppButton } from "./CtaButtons";
import type { WaContext } from "@/lib/whatsapp";

/* Shared server-rendered sections used across templates (docs/02 §4). */

export function TrustBar() {
  const items = [
    { icon: "⭐", text: `${site.rating.value} no Google (${site.rating.count}+ avaliações)` },
    { icon: "💶", text: "Preço fixo, sem surpresas" },
    { icon: "🛡️", text: "Técnicos certificados e segurados" },
    { icon: "💳", text: "MB Way · Multibanco · Cartão" },
  ];
  return (
    <ul className="grid grid-cols-2 gap-3 border-y border-navy-100 bg-navy-50 px-4 py-4 text-sm font-semibold text-navy-900 sm:grid-cols-4 sm:text-center">
      {items.map((item) => (
        <li key={item.text} className="flex items-center gap-2 sm:flex-col sm:gap-1">
          <span aria-hidden className="text-xl">{item.icon}</span>
          {item.text}
        </li>
      ))}
    </ul>
  );
}

export function AvailabilityIndicator({ eta = site.etaDefault, area }: { eta?: string; area?: string }) {
  return (
    <p className="inline-flex items-center gap-2 rounded-full bg-navy-800/80 px-4 py-1.5 text-sm font-semibold text-white">
      <span className="h-2.5 w-2.5 rounded-full bg-green-400" aria-hidden />
      Disponível agora · Chegada{area ? ` em ${area}` : ""}: {eta}
    </p>
  );
}

export function ServicesGrid({ items, city }: { items: Service[]; city?: string }) {
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((s) => (
        <li key={s.slug}>
          <Link
            href={`/servicos/${s.slug}/`}
            className="flex h-full flex-col rounded-xl border border-navy-100 bg-white p-5 shadow-sm transition hover:border-navy-200 hover:shadow-md"
          >
            <span aria-hidden className="text-3xl">{s.icon}</span>
            <span className="mt-2 font-bold text-navy-900">{s.shortName}{city ? ` em ${city}` : ""}</span>
            <span className="mt-1 flex-1 text-sm text-slate-600">{s.excerpt}</span>
            <span className="mt-3 text-sm font-bold text-navy-700">
              Desde {s.priceFrom}€ <span aria-hidden>→</span>
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function StepsProcess({ steps }: { steps?: { title: string; text: string }[] }) {
  const items = steps ?? [
    { title: "1. Contacte-nos", text: `Ligue ${site.phoneDisplay} ou envie WhatsApp. Dizemos-lhe o preço fixo e o tempo real de chegada.` },
    { title: "2. Chegamos em 20–30 min", text: "O técnico confirma o preço no local antes de tocar na porta. Sem começar, sem surpresas." },
    { title: "3. Problema resolvido", text: "Trabalho com garantia de 12 meses, pagamento por MB Way ou cartão e fatura na hora." },
  ];
  return (
    <ol className="grid gap-6 sm:grid-cols-3">
      {items.map((s) => (
        <li key={s.title} className="rounded-xl bg-navy-50 p-6">
          <p className="font-extrabold text-navy-900">{s.title}</p>
          <p className="mt-2 text-sm text-slate-700">{s.text}</p>
        </li>
      ))}
    </ol>
  );
}

export function GuaranteeBlock() {
  const items = [
    { icon: "✅", title: "Garantia de 12 meses", text: "Em peças e mão-de-obra, por escrito na fatura." },
    { icon: "🚪", title: "Abertura sem danos", text: "Técnicas de abertura fina — na grande maioria dos casos a fechadura fica intacta." },
    { icon: "💶", title: "Preço confirmado antes", text: "O valor é fixado por telefone/WhatsApp e confirmado no local antes de começar." },
  ];
  return (
    <ul className="grid gap-4 sm:grid-cols-3">
      {items.map((g) => (
        <li key={g.title} className="rounded-xl border border-navy-100 p-5">
          <p className="font-bold text-navy-900">
            <span aria-hidden>{g.icon}</span> {g.title}
          </p>
          <p className="mt-1 text-sm text-slate-600">{g.text}</p>
        </li>
      ))}
    </ul>
  );
}

export function ReviewsSection({ items, title = "O que dizem os nossos clientes" }: { items: Testimonial[]; title?: string }) {
  return (
    <section aria-label="avaliações de clientes">
      <h2 className="text-2xl font-extrabold text-navy-900">{title}</h2>
      <ul className="mt-6 grid gap-4 md:grid-cols-3">
        {items.map((t) => (
          <li key={t.name + t.area}>
            <article className="flex h-full flex-col rounded-xl border border-navy-100 bg-white p-5 shadow-sm">
              <p aria-label={`${t.rating} de 5 estrelas`} className="text-accent-500">
                {"★".repeat(t.rating)}
              </p>
              <p className="mt-2 flex-1 text-sm text-slate-700">“{t.text}”</p>
              <footer className="mt-3 text-sm font-semibold text-navy-900">
                {t.name} · {t.area}
              </footer>
            </article>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-sm">
        <Link href="/avaliacoes/" className="font-semibold text-navy-700 underline">
          Ver todas as avaliações →
        </Link>
      </p>
    </section>
  );
}

export function FaqAccordion({ faqs, title = "Perguntas frequentes" }: { faqs: { q: string; a: string }[]; title?: string }) {
  return (
    <section aria-label={title}>
      <h2 className="text-2xl font-extrabold text-navy-900">{title}</h2>
      <div className="mt-4 divide-y divide-navy-100 rounded-xl border border-navy-100">
        {faqs.map((f) => (
          <details key={f.q} className="faq p-4">
            <summary className="font-semibold text-navy-900">{f.q}</summary>
            <p className="mt-2 text-sm text-slate-700">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export function CtaBand({ title, waContext }: { title?: string; waContext?: WaContext }) {
  return (
    <section className="rounded-2xl bg-navy-900 p-8 text-center text-white">
      <h2 className="text-2xl font-extrabold">{title ?? "Precisa de um chaveiro agora?"}</h2>
      <p className="mt-2 text-navy-100">
        Atendemos 24h, todos os dias. Preço fixo confirmado antes de começar.
      </p>
      <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
        <CallButton ctaLocation="band" size="lg" pulse />
        <WhatsAppButton ctaLocation="band" size="lg" context={waContext} />
      </div>
    </section>
  );
}

export function Breadcrumbs({ items }: { items: { name: string; path: string }[] }) {
  return (
    <nav aria-label="caminho de navegação" className="text-sm text-slate-500">
      <ol className="flex flex-wrap gap-1">
        <li>
          <Link href="/" className="hover:underline">Início</Link>
        </li>
        {items.map((item, i) => (
          <li key={item.path} className="flex gap-1">
            <span aria-hidden>›</span>
            {i === items.length - 1 ? (
              <span aria-current="page" className="text-navy-900">{item.name}</span>
            ) : (
              <Link href={item.path} className="hover:underline">{item.name}</Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
