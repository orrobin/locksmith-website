"use client";

import Link from "next/link";
import { useState } from "react";
import { site } from "@/lib/config";
import { trackCall } from "@/lib/analytics";

const nav = [
  { href: "/servicos/", label: "Serviços" },
  { href: "/chaveiro-lisboa/", label: "Zonas" },
  { href: "/precos/", label: "Preços" },
  { href: "/avaliacoes/", label: "Avaliações" },
  { href: "/blog/", label: "Blog" },
  { href: "/sobre/", label: "Sobre" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-navy-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4">
        <Link href="/" className="flex items-center gap-2 text-lg font-extrabold text-navy-900" onClick={() => setOpen(false)}>
          <span aria-hidden>🔑</span> {site.brand}
          <span className="hidden rounded bg-navy-900 px-1.5 py-0.5 text-xs font-bold text-accent-400 sm:inline">24h</span>
        </Link>

        <nav aria-label="principal" className="hidden items-center gap-6 lg:flex">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-semibold text-navy-800 hover:text-navy-950">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${site.phone}`}
            onClick={() => trackCall("header")}
            className="inline-flex items-center gap-2 rounded-lg bg-accent-500 px-4 py-2 text-sm font-bold text-navy-950 hover:bg-accent-400"
          >
            <span aria-hidden>📞</span>
            <span className="hidden sm:inline">{site.phoneDisplay}</span>
            <span className="sm:hidden">Ligar</span>
          </a>
          <button
            type="button"
            aria-expanded={open}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            onClick={() => setOpen(!open)}
            className="rounded-lg border border-navy-200 p-2 text-navy-900 lg:hidden"
          >
            <span aria-hidden>{open ? "✕" : "☰"}</span>
          </button>
        </div>
      </div>

      {open && (
        <nav aria-label="principal móvel" className="border-t border-navy-100 bg-white px-4 pb-6 pt-2 lg:hidden">
          <p className="mb-2 rounded-lg bg-danger-600 px-3 py-2 text-sm font-bold text-white">
            🚨 Emergência?{" "}
            <a href={`tel:${site.phone}`} className="underline" onClick={() => trackCall("mobile_menu")}>
              Ligue já {site.phoneDisplay}
            </a>
          </p>
          <ul>
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-navy-50 py-3 font-semibold text-navy-900"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/contactos/" onClick={() => setOpen(false)} className="block py-3 font-semibold text-navy-900">
                Contactos
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
