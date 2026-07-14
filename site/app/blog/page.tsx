import Link from "next/link";
import { posts, categories } from "@/lib/blog";
import { pageMetadata, breadcrumbSchema } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import { Breadcrumbs, CtaBand } from "@/components/Sections";

export const metadata = pageMetadata({
  title: "Blog · Segurança, Fechaduras e Dicas de Emergência",
  description:
    "Guias práticos de segurança doméstica, manutenção de fechaduras e dicas de emergência, escritos pelos técnicos que abrem portas em Lisboa todos os dias.",
  path: "/blog/",
});

export default function BlogIndexPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-12 px-4 py-10">
      <JsonLd data={breadcrumbSchema([{ name: "Blog", path: "/blog/" }])} />
      <div>
        <Breadcrumbs items={[{ name: "Blog", path: "/blog/" }]} />
        <h1 className="mt-4 text-3xl font-extrabold text-navy-900 sm:text-4xl">Blog de segurança</h1>
        <p className="mt-3 max-w-2xl text-slate-600">
          Escrito por quem abre portas todos os dias — sem alarmismo, com preços reais e conselhos que usaria na nossa
          própria casa.
        </p>
      </div>

      <ul className="flex flex-wrap gap-2 text-sm" aria-label="categorias">
        {categories.map((c) => (
          <li key={c.slug} className="rounded-full border border-navy-200 px-3 py-1 text-navy-800">
            {c.name}
          </li>
        ))}
      </ul>

      <ul className="grid gap-6 md:grid-cols-3">
        {posts.map((p) => (
          <li key={p.slug}>
            <article className="flex h-full flex-col rounded-xl border border-navy-100 p-6 shadow-sm transition hover:shadow-md">
              <p className="text-xs font-bold uppercase tracking-wide text-navy-700">{p.category}</p>
              <h2 className="mt-2 flex-none text-lg font-extrabold text-navy-900">
                <Link href={`/blog/${p.slug}/`} className="hover:underline">
                  {p.title}
                </Link>
              </h2>
              <p className="mt-2 flex-1 text-sm text-slate-600">{p.excerpt}</p>
              <p className="mt-4 text-xs text-slate-500">
                <time dateTime={p.date}>{new Date(p.date).toLocaleDateString("pt-PT", { day: "numeric", month: "long", year: "numeric" })}</time> · {p.author}
              </p>
            </article>
          </li>
        ))}
      </ul>

      <CtaBand />
    </div>
  );
}
