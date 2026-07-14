import { site } from "@/lib/config";
import { pageMetadata, breadcrumbSchema } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import { Breadcrumbs, CtaBand } from "@/components/Sections";

export const metadata = pageMetadata({
  title: "Certificações, Licenças e Seguros",
  description:
    "Empresa registada com NIF público, seguro de responsabilidade civil e técnicos certificados. Verifique as nossas credenciais antes de nos contratar.",
  path: "/sobre/certificacoes-e-seguros/",
});

// IMPORTANT: only display credentials the business genuinely holds (docs/00 open decisions).
const credentials = [
  { title: "Empresa registada em Portugal", detail: `NIF ${site.nif} — verifique no Portal das Finanças.` },
  { title: "Seguro de responsabilidade civil", detail: "[Seguradora e n.º de apólice] — cobre eventuais danos durante o serviço." },
  { title: "Técnicos com formação certificada", detail: "[Entidade formadora / certificados] — formação em aberturas finas e fechaduras de segurança." },
  { title: "Fatura certificada", detail: "Software de faturação certificado pela AT em todos os serviços." },
  { title: "Livro de Reclamações", detail: "Físico e eletrónico, como exige a lei portuguesa." },
];

export default function CredentialsPage() {
  const breadcrumb = [
    { name: "Sobre", path: "/sobre/" },
    { name: "Certificações e seguros", path: "/sobre/certificacoes-e-seguros/" },
  ];
  return (
    <div className="mx-auto max-w-6xl space-y-12 px-4 py-10">
      <JsonLd data={breadcrumbSchema(breadcrumb)} />
      <div>
        <Breadcrumbs items={breadcrumb} />
        <h1 className="mt-4 text-3xl font-extrabold text-navy-900 sm:text-4xl">Certificações, licenças e seguros</h1>
        <p className="mt-3 max-w-2xl text-slate-600">
          Não peça confiança de cor — verifique. Estas são as nossas credenciais e onde as pode confirmar.
        </p>
      </div>

      <ul className="space-y-4">
        {credentials.map((c) => (
          <li key={c.title} className="rounded-xl border border-navy-100 p-6">
            <h2 className="font-extrabold text-navy-900">📜 {c.title}</h2>
            <p className="mt-1 text-sm text-slate-700">{c.detail}</p>
          </li>
        ))}
      </ul>

      <section className="rounded-xl bg-navy-50 p-6 text-sm text-slate-700">
        <h2 className="font-extrabold text-navy-900">Marcas com que trabalhamos</h2>
        <p className="mt-2">Yale · TESA · CISA · Mul-T-Lock · MCM · DOM · Nuki · Tedee — instalação segundo as especificações do fabricante, mantendo as garantias de marca.</p>
      </section>

      <CtaBand />
    </div>
  );
}
