import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { posts, getPost } from "@/lib/blog";
import { getService } from "@/lib/services";
import { site } from "@/lib/config";
import { pageMetadata, breadcrumbSchema } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import { CallButton, WhatsAppButton } from "@/components/CtaButtons";
import { Breadcrumbs, CtaBand } from "@/components/Sections";

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return pageMetadata({ title: post.title, description: post.excerpt, path: `/blog/${post.slug}/` });
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = post.relatedServices.map(getService).filter((s) => s !== undefined);
  const breadcrumb = [
    { name: "Blog", path: "/blog/" },
    { name: post.title, path: `/blog/${post.slug}/` },
  ];
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { "@type": "Organization", name: post.author },
    publisher: { "@id": `${site.domain}/#organization` },
    mainEntityOfPage: `${site.domain}/blog/${post.slug}/`,
  };

  return (
    <article className="mx-auto max-w-3xl px-4 py-10">
      <JsonLd data={[articleSchema, breadcrumbSchema(breadcrumb)]} />
      <Breadcrumbs items={[breadcrumb[0], { name: post.category, path: "/blog/" }]} />
      <h1 className="mt-4 text-3xl font-extrabold leading-tight text-navy-900 sm:text-4xl">{post.title}</h1>
      <p className="mt-3 text-sm text-slate-500">
        <time dateTime={post.date}>{new Date(post.date).toLocaleDateString("pt-PT", { day: "numeric", month: "long", year: "numeric" })}</time> · {post.author}
      </p>

      <div className="prose-navy mt-8 space-y-6">
        {post.body.map((section, i) => (
          <section key={i}>
            {section.heading && <h2 className="text-xl font-extrabold text-navy-900">{section.heading}</h2>}
            {section.paragraphs.map((p) => (
              <p key={p.slice(0, 30)} className="mt-3 leading-relaxed text-slate-700">{p}</p>
            ))}
          </section>
        ))}
      </div>

      {/* Inline CTA card (docs/02 §3.7) */}
      <aside className="mt-10 rounded-xl bg-navy-50 p-6">
        <p className="font-extrabold text-navy-900">Precisa de ajuda com isto?</p>
        <p className="mt-1 text-sm text-slate-700">Fale com um técnico agora — preço fixo confirmado antes de qualquer trabalho.</p>
        <div className="mt-4 flex flex-wrap gap-3">
          <CallButton ctaLocation="blog_inline" />
          <WhatsAppButton ctaLocation="blog_inline" context={{ kind: "quote" }} />
        </div>
      </aside>

      {related.length > 0 && (
        <section className="mt-10">
          <h2 className="text-lg font-extrabold text-navy-900">Serviços relacionados</h2>
          <ul className="mt-3 space-y-2">
            {related.map((r) => (
              <li key={r.slug}>
                <Link href={`/servicos/${r.slug}/`} className="font-semibold text-navy-700 underline">
                  {r.icon} {r.name} — desde {r.priceFrom}€ →
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      <div className="mt-12">
        <CtaBand />
      </div>
    </article>
  );
}
