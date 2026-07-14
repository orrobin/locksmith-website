import { site } from "@/lib/config";
import { pageMetadata, breadcrumbSchema } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import QuoteForm from "@/components/QuoteForm";
import { CallButton, WhatsAppButton } from "@/components/CtaButtons";
import { Breadcrumbs } from "@/components/Sections";

export const metadata = pageMetadata({
  title: "Contactos · Chaveiro 24h em Lisboa",
  description: `Fale connosco: ${site.phoneDisplay} (24h), WhatsApp com resposta em minutos, email e formulário. Emergências atendidas de imediato.`,
  path: "/contactos/",
});

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-12 px-4 py-10">
      <JsonLd data={breadcrumbSchema([{ name: "Contactos", path: "/contactos/" }])} />
      <div>
        <Breadcrumbs items={[{ name: "Contactos", path: "/contactos/" }]} />
        <h1 className="mt-4 text-3xl font-extrabold text-navy-900 sm:text-4xl">Fale connosco — 24 horas</h1>
      </div>

      <div className="grid gap-10 lg:grid-cols-2">
        {/* Instant channels */}
        <section className="space-y-6">
          <div>
            <h2 className="text-xl font-extrabold text-navy-900">🚨 É uma emergência?</h2>
            <p className="mt-1 text-sm text-slate-600">Ligue diretamente — atendemos em 3 toques, a qualquer hora.</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <CallButton ctaLocation="contact" size="lg" pulse />
              <WhatsAppButton ctaLocation="contact" size="lg" context={{ kind: "emergency" }} />
            </div>
          </div>

          <dl className="space-y-4 rounded-xl border border-navy-100 p-6 text-sm">
            <div>
              <dt className="font-bold text-navy-900">Telefone (24h)</dt>
              <dd><a href={`tel:${site.phone}`} className="text-lg font-extrabold text-navy-700">{site.phoneDisplay}</a></dd>
            </div>
            <div>
              <dt className="font-bold text-navy-900">Email</dt>
              <dd><a href={`mailto:${site.email}`} className="underline">{site.email}</a> — resposta no próprio dia</dd>
            </div>
            <div>
              <dt className="font-bold text-navy-900">Horário</dt>
              <dd>{site.hours} — emergências sempre; serviços agendados das 8h às 21h</dd>
            </div>
            <div>
              <dt className="font-bold text-navy-900">Morada</dt>
              <dd>
                <address className="not-italic">
                  {site.address.street}, {site.address.postalCode} {site.address.locality} · NIF {site.nif}
                </address>
              </dd>
            </div>
            <div>
              <dt className="font-bold text-navy-900">Redes sociais</dt>
              <dd className="flex gap-3">
                <a href={site.social.facebook} target="_blank" rel="noopener" className="underline">Facebook</a>
                <a href={site.social.instagram} target="_blank" rel="noopener" className="underline">Instagram</a>
                <a href={site.social.gbp} target="_blank" rel="noopener" className="underline">Google</a>
              </dd>
            </div>
          </dl>

          {/* Map facade — click loads Google Maps (CWV, docs/03 §7) */}
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${site.brandLong} ${site.address.street} ${site.address.locality}`)}`}
            target="_blank"
            rel="noopener"
            className="flex h-48 items-center justify-center rounded-xl border border-navy-100 bg-navy-50 font-semibold text-navy-700 hover:bg-navy-100"
          >
            📍 Abrir localização no Google Maps →
          </a>
        </section>

        {/* Form */}
        <section>
          <h2 className="text-xl font-extrabold text-navy-900">Pedido não urgente? Escreva-nos</h2>
          <p className="mb-4 mt-1 text-sm text-slate-600">Respondemos em menos de 15 minutos (8h–21h).</p>
          <QuoteForm formType="contact" />
        </section>
      </div>
    </div>
  );
}
