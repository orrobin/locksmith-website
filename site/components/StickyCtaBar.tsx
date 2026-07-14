"use client";

import { site } from "@/lib/config";
import { waLink } from "@/lib/whatsapp";
import { trackCall, trackWhatsApp } from "@/lib/analytics";

/** Mobile-only sticky bottom CTA bar (docs/01 §5.1) — the primary navigation for 80% of users. */
export default function StickyCtaBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 md:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <a
        href={`tel:${site.phone}`}
        onClick={() => trackCall("sticky")}
        className="flex h-16 items-center justify-center gap-2 bg-accent-500 text-lg font-bold text-navy-950"
      >
        <span aria-hidden>📞</span> Ligar Agora
      </a>
      <a
        href={waLink({ kind: "generic" })}
        target="_blank"
        rel="noopener"
        onClick={() => trackWhatsApp("sticky")}
        className="flex h-16 items-center justify-center gap-2 bg-wa-600 text-lg font-bold text-white"
      >
        <span aria-hidden>💬</span> WhatsApp
      </a>
    </div>
  );
}
