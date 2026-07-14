import { site } from "@/lib/config";
import { pageMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/Sections";

export const metadata = pageMetadata({
  title: "Política de Privacidade",
  description: "Como tratamos os seus dados pessoais: finalidades, prazos de conservação e os seus direitos ao abrigo do RGPD.",
  path: "/politica-de-privacidade/",
});

// DRAFT template — must be reviewed by legal counsel before launch (docs/04 §7 GDPR).
export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-6 px-4 py-10 text-sm leading-relaxed text-slate-700">
      <Breadcrumbs items={[{ name: "Política de Privacidade", path: "/politica-de-privacidade/" }]} />
      <h1 className="text-3xl font-extrabold text-navy-900">Política de Privacidade</h1>
      <p className="rounded-lg bg-accent-500/10 p-3 text-xs font-semibold text-navy-900">
        ⚠️ MINUTA — rever com apoio jurídico antes do lançamento.
      </p>
      <section>
        <h2 className="text-lg font-extrabold text-navy-900">1. Responsável pelo tratamento</h2>
        <p>{site.brandLong}, NIF {site.nif}, {site.address.street}, {site.address.postalCode} {site.address.locality}. Contacto: {site.email}.</p>
      </section>
      <section>
        <h2 className="text-lg font-extrabold text-navy-900">2. Dados que recolhemos e porquê</h2>
        <p>Pedidos de orçamento e contacto (nome, telefone, zona, descrição do problema): tratados para responder ao seu pedido e prestar o serviço (execução de contrato / diligências pré-contratuais). Dados de faturação: obrigação legal. Dados de navegação/analítica: apenas com o seu consentimento (Consent Mode v2).</p>
      </section>
      <section>
        <h2 className="text-lg font-extrabold text-navy-900">3. Prazos de conservação</h2>
        <p>Pedidos não convertidos: 24 meses, depois anonimizados. Documentos de faturação: prazos legais aplicáveis. Consentimentos: registados com data e origem.</p>
      </section>
      <section>
        <h2 className="text-lg font-extrabold text-navy-900">4. Partilha de dados</h2>
        <p>Subcontratantes estritamente necessários (alojamento do site na UE, software de faturação certificado, comunicações). Não vendemos dados a terceiros.</p>
      </section>
      <section>
        <h2 className="text-lg font-extrabold text-navy-900">5. Os seus direitos</h2>
        <p>Acesso, retificação, apagamento, limitação, portabilidade e oposição — escreva para {site.email}. Pode ainda reclamar junto da CNPD (www.cnpd.pt).</p>
      </section>
      <section>
        <h2 className="text-lg font-extrabold text-navy-900">6. Cookies</h2>
        <p>Cookies de analítica e marketing só são ativados após consentimento no banner. Os botões de contacto (telefone/WhatsApp) funcionam sem qualquer cookie.</p>
      </section>
    </div>
  );
}
