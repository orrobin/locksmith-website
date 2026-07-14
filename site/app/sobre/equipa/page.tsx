import { pageMetadata, breadcrumbSchema } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import { Breadcrumbs, CtaBand } from "@/components/Sections";

export const metadata = pageMetadata({
  title: "A Nossa Equipa · Técnicos Certificados",
  description: "Conheça os técnicos que vão a sua casa: certificados, segurados e identificados. Saiba quem lhe abre a porta.",
  path: "/sobre/equipa/",
});

// PLACEHOLDER team — replace with real technicians (photo, name, certifications) before launch.
const team = [
  { name: "[Técnico 1]", role: "Técnico principal · 12 anos", areas: "Lisboa centro", certs: "Aberturas finas, portas blindadas" },
  { name: "[Técnico 2]", role: "Técnico · 8 anos", areas: "Lisboa norte, Loures, Odivelas", certs: "Fechaduras inteligentes, automóvel" },
  { name: "[Técnico 3]", role: "Técnico · 6 anos", areas: "Linha de Cascais, Oeiras", certs: "Alta segurança, cofres" },
];

export default function TeamPage() {
  const breadcrumb = [
    { name: "Sobre", path: "/sobre/" },
    { name: "Equipa", path: "/sobre/equipa/" },
  ];
  return (
    <div className="mx-auto max-w-6xl space-y-12 px-4 py-10">
      <JsonLd data={breadcrumbSchema(breadcrumb)} />
      <div>
        <Breadcrumbs items={breadcrumb} />
        <h1 className="mt-4 text-3xl font-extrabold text-navy-900 sm:text-4xl">Saiba quem lhe abre a porta</h1>
        <p className="mt-3 max-w-2xl text-slate-600">
          Todos os nossos técnicos são certificados, segurados e apresentam-se identificados. Quando liga, dizemos-lhe o nome
          de quem vai a caminho.
        </p>
      </div>

      <ul className="grid gap-6 sm:grid-cols-3">
        {team.map((t) => (
          <li key={t.name} className="rounded-xl border border-navy-100 p-6 text-center">
            <div aria-hidden className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-navy-100 text-5xl">👤</div>
            <p className="mt-3 font-bold text-navy-900">{t.name}</p>
            <p className="text-sm text-slate-600">{t.role}</p>
            <p className="mt-2 text-xs text-slate-500">Zonas: {t.areas}</p>
            <p className="text-xs text-slate-500">Especialidade: {t.certs}</p>
            <p className="mt-2 inline-block rounded-full bg-navy-50 px-3 py-1 text-xs font-semibold text-navy-800">✔ Verificado e segurado</p>
          </li>
        ))}
      </ul>

      <CtaBand />
    </div>
  );
}
