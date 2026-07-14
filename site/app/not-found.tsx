import Link from "next/link";
import { CallButton, WhatsAppButton } from "@/components/CtaButtons";

// 404 with emergency CTA — a lost visitor may still be locked out (docs/02 §1.1).
export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-20 text-center">
      <p className="text-6xl" aria-hidden>🔍🔑</p>
      <h1 className="mt-4 text-3xl font-extrabold text-navy-900">Página não encontrada</h1>
      <p className="mt-3 text-slate-600">
        Esta página não existe — mas se está trancado fora de casa, nós existimos e estamos abertos.
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <CallButton ctaLocation="404" size="lg" />
        <WhatsAppButton ctaLocation="404" size="lg" />
      </div>
      <nav aria-label="ligações úteis" className="mt-10 text-sm">
        <ul className="flex flex-wrap justify-center gap-4">
          <li><Link href="/" className="font-semibold text-navy-700 underline">Início</Link></li>
          <li><Link href="/servicos/" className="font-semibold text-navy-700 underline">Serviços</Link></li>
          <li><Link href="/precos/" className="font-semibold text-navy-700 underline">Preços</Link></li>
          <li><Link href="/chaveiro-24-horas/" className="font-semibold text-navy-700 underline">Emergências 24h</Link></li>
          <li><Link href="/contactos/" className="font-semibold text-navy-700 underline">Contactos</Link></li>
        </ul>
      </nav>
    </div>
  );
}
