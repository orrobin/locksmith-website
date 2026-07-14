import { site } from "@/lib/config";
import { pageMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/Sections";

export const metadata = pageMetadata({
  title: "Termos e Condições",
  description: "Condições de prestação de serviços: preços, garantias, verificação de identidade e responsabilidade.",
  path: "/termos-e-condicoes/",
});

// DRAFT template — must be reviewed by legal counsel before launch.
export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-6 px-4 py-10 text-sm leading-relaxed text-slate-700">
      <Breadcrumbs items={[{ name: "Termos e Condições", path: "/termos-e-condicoes/" }]} />
      <h1 className="text-3xl font-extrabold text-navy-900">Termos e Condições</h1>
      <p className="rounded-lg bg-accent-500/10 p-3 text-xs font-semibold text-navy-900">
        ⚠️ MINUTA — rever com apoio jurídico antes do lançamento.
      </p>
      <section>
        <h2 className="text-lg font-extrabold text-navy-900">1. Preços e orçamentos</h2>
        <p>Os preços publicados em {site.domain}/precos/ referem-se ao caso padrão de cada serviço. O preço final é comunicado por telefone/WhatsApp antes da deslocação e confirmado no local antes do início do trabalho. Se o cliente desistir após a chegada, é devida apenas a taxa de deslocação (20€).</p>
      </section>
      <section>
        <h2 className="text-lg font-extrabold text-navy-900">2. Verificação de identidade</h2>
        <p>Por razões de segurança, a abertura de imóveis, veículos ou cofres exige documento de identificação e prova razoável de legitimidade (comprovativo de morada, documento do veículo, etc.). Reservamo-nos o direito de recusar o serviço na sua ausência.</p>
      </section>
      <section>
        <h2 className="text-lg font-extrabold text-navy-900">3. Garantia</h2>
        <p>Os serviços têm garantia de 12 meses sobre peças e mão-de-obra, salvo desgaste normal, má utilização ou intervenção posterior de terceiros. A garantia consta da fatura.</p>
      </section>
      <section>
        <h2 className="text-lg font-extrabold text-navy-900">4. Pagamento e faturação</h2>
        <p>Aceitamos MB Way, Multibanco, cartão, dinheiro e transferência. É emitida fatura certificada em todos os serviços. Serviços noturnos (21h–8h), fins-de-semana e feriados têm os agravamentos indicados na tabela de preços.</p>
      </section>
      <section>
        <h2 className="text-lg font-extrabold text-navy-900">5. Resolução de litígios</h2>
        <p>Livro de Reclamações físico e eletrónico disponível. Em caso de litígio de consumo, o consumidor pode recorrer às entidades de resolução alternativa de litígios competentes.</p>
      </section>
    </div>
  );
}
