import type { MetadataRoute } from "next";
import { site } from "@/lib/config";
import { services } from "@/lib/services";
import { freguesias, cities } from "@/lib/locations";
import { posts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entry = (path: string, priority: number, changeFrequency: "daily" | "weekly" | "monthly" = "weekly") => ({
    url: `${site.domain}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  });

  return [
    entry("/", 1.0, "daily"),
    entry("/chaveiro-24-horas/", 1.0, "daily"),
    entry("/precos/", 0.9),
    entry("/servicos/", 0.8),
    ...services.map((s) => entry(`/servicos/${s.slug}/`, 0.8)),
    entry("/chaveiro-lisboa/", 0.9),
    ...freguesias.map((f) => entry(`/chaveiro-lisboa/${f.slug}/`, 0.7)),
    ...cities.map((c) => entry(`/chaveiro-${c.slug}/`, 0.7)),
    entry("/orcamento/", 0.8),
    entry("/contactos/", 0.8),
    entry("/avaliacoes/", 0.7),
    entry("/sobre/", 0.6, "monthly"),
    entry("/sobre/equipa/", 0.5, "monthly"),
    entry("/sobre/porque-nos-escolher/", 0.6, "monthly"),
    entry("/sobre/certificacoes-e-seguros/", 0.5, "monthly"),
    entry("/faq/", 0.6, "monthly"),
    entry("/blog/", 0.6),
    ...posts.map((p) => entry(`/blog/${p.slug}/`, 0.6, "monthly")),
  ];
}
