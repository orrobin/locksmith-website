"use client";

import { site } from "@/lib/config";
import { waLink, type WaContext } from "@/lib/whatsapp";
import { trackCall, trackWhatsApp } from "@/lib/analytics";

interface CtaProps {
  ctaLocation: string; // hero | sticky | header | footer | band | contact
  size?: "md" | "lg";
  pulse?: boolean;
  className?: string;
}

const sizes = { md: "px-5 py-3 text-base", lg: "px-7 py-4 text-lg" };

export function CallButton({ ctaLocation, size = "md", pulse = false, className = "", label }: CtaProps & { label?: string }) {
  return (
    <a
      href={`tel:${site.phone}`}
      onClick={() => trackCall(ctaLocation)}
      className={`inline-flex items-center justify-center gap-2 rounded-lg bg-accent-500 font-bold text-navy-950 shadow-md transition hover:bg-accent-400 ${sizes[size]} ${pulse ? "animate-pulse-cta" : ""} ${className}`}
    >
      <span aria-hidden>📞</span>
      {label ?? `Ligar ${site.phoneDisplay}`}
    </a>
  );
}

export function WhatsAppButton({ ctaLocation, size = "md", className = "", context, label }: CtaProps & { context?: WaContext; label?: string }) {
  return (
    <a
      href={waLink(context)}
      target="_blank"
      rel="noopener"
      onClick={() => trackWhatsApp(ctaLocation)}
      className={`inline-flex items-center justify-center gap-2 rounded-lg bg-wa-600 font-bold text-white shadow-md transition hover:bg-wa-700 ${sizes[size]} ${className}`}
    >
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden>
        <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.6-6.1c-.3-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.3-.6.8-.8 1-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.4-3c-.3-.4 0-.6.2-.8l.4-.5c.1-.2.2-.3.3-.5s0-.4 0-.5l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.2s.9 2.5 1 2.7c.1.2 1.8 2.8 4.4 3.9.6.3 1.1.4 1.5.6.6.2 1.2.2 1.6.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2 0-.1-.2-.2-.5-.3Z" />
      </svg>
      {label ?? "WhatsApp"}
    </a>
  );
}
