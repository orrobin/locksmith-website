import Link from "next/link";
import { site } from "@/lib/config";
import { services } from "@/lib/services";
import { freguesias, cities } from "@/lib/locations";
import { paymentMethods } from "@/lib/prices";

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-navy-100">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:grid-cols-2 lg:grid-cols-5">
        <div>
          <p className="mb-3 text-lg font-extrabold text-white">
            <span aria-hidden>🔑</span> {site.brandLong}
          </p>
          <address className="not-italic text-sm leading-relaxed">
            {site.address.street}
            <br />
            {site.address.postalCode} {site.address.locality}
            <br />
            NIF: {site.nif}
          </address>
          <p className="mt-3 text-sm">Licenciado e segurado · Fatura certificada</p>
          <p className="mt-3 text-xs text-navy-200">Pagamentos: {paymentMethods.join(" · ")}</p>
          <a href={site.livroReclamacoes} target="_blank" rel="noopener" className="mt-3 inline-block text-xs underline">
            Livro de Reclamações
          </a>
        </div>

        <nav aria-label="serviços no rodapé">
          <p className="mb-3 font-bold text-white">Serviços</p>
          <ul className="space-y-2 text-sm">
            {services.slice(0, 8).map((s) => (
              <li key={s.slug}>
                <Link href={`/servicos/${s.slug}/`} className="hover:text-white">
                  {s.shortName}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/servicos/" className="font-semibold text-accent-400 hover:text-accent-500">
                Ver todos →
              </Link>
            </li>
          </ul>
        </nav>

        <nav aria-label="zonas no rodapé">
          <p className="mb-3 font-bold text-white">Zonas</p>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/chaveiro-lisboa/" className="hover:text-white">
                Lisboa
              </Link>
            </li>
            {freguesias.slice(0, 4).map((f) => (
              <li key={f.slug}>
                <Link href={`/chaveiro-lisboa/${f.slug}/`} className="hover:text-white">
                  {f.name}
                </Link>
              </li>
            ))}
            {cities.map((c) => (
              <li key={c.slug}>
                <Link href={`/chaveiro-${c.slug}/`} className="hover:text-white">
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="empresa no rodapé">
          <p className="mb-3 font-bold text-white">Empresa</p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/sobre/" className="hover:text-white">Sobre nós</Link></li>
            <li><Link href="/sobre/equipa/" className="hover:text-white">A nossa equipa</Link></li>
            <li><Link href="/sobre/porque-nos-escolher/" className="hover:text-white">Porquê escolher-nos</Link></li>
            <li><Link href="/sobre/certificacoes-e-seguros/" className="hover:text-white">Certificações e seguros</Link></li>
            <li><Link href="/avaliacoes/" className="hover:text-white">Avaliações</Link></li>
            <li><Link href="/precos/" className="hover:text-white">Preços</Link></li>
            <li><Link href="/blog/" className="hover:text-white">Blog</Link></li>
            <li><Link href="/faq/" className="hover:text-white">Perguntas frequentes</Link></li>
          </ul>
        </nav>

        <div>
          <p className="mb-3 font-bold text-white">Contacto 24h</p>
          <p className="text-sm">Aberto agora — {site.hours}</p>
          <a href={`tel:${site.phone}`} className="mt-2 block text-xl font-extrabold text-accent-400">
            {site.phoneDisplay}
          </a>
          <a href={`mailto:${site.email}`} className="mt-2 block text-sm underline">
            {site.email}
          </a>
          <div className="mt-4 flex gap-4 text-sm">
            <a href={site.social.facebook} target="_blank" rel="noopener" className="hover:text-white">Facebook</a>
            <a href={site.social.instagram} target="_blank" rel="noopener" className="hover:text-white">Instagram</a>
            <a href={site.social.gbp} target="_blank" rel="noopener" className="hover:text-white">Google</a>
          </div>
        </div>
      </div>

      <div className="border-t border-navy-800 px-4 py-4 text-center text-xs text-navy-200">
        © {new Date().getFullYear()} {site.brandLong} ·{" "}
        <Link href="/politica-de-privacidade/" className="underline">Política de Privacidade</Link> ·{" "}
        <Link href="/termos-e-condicoes/" className="underline">Termos e Condições</Link>
      </div>
    </footer>
  );
}
