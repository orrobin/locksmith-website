"use client";

import Link from "next/link";
import { useState } from "react";
import { services } from "@/lib/services";
import { allLocations } from "@/lib/locations";
import { site } from "@/lib/config";
import { track } from "@/lib/analytics";

type Status = "idle" | "sending" | "done" | "error";

/** Fast quote form (docs/01 §5.8): 4 visible fields + optional details, posts to /api/leads. */
export default function QuoteForm({ formType = "quote" }: { formType?: "quote" | "contact" }) {
  const [status, setStatus] = useState<Status>("idle");
  const [started, setStarted] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("sending");
    try {
      const res = await fetch("/api/leads/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, formType }),
      });
      if (!res.ok) throw new Error(String(res.status));
      track("form_submit", { form_type: formType, service: String(data.service ?? "") });
      setStatus("done");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div role="status" className="rounded-xl border border-wa-600 bg-green-50 p-6 text-center">
        <p className="text-lg font-bold text-navy-900">✅ Pedido recebido!</p>
        <p className="mt-2 text-sm text-slate-700">
          Respondemos em menos de 15 minutos por telefone ou WhatsApp. Se for uma emergência, ligue já{" "}
          <a href={`tel:${site.phone}`} className="font-bold underline">{site.phoneDisplay}</a>.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      onFocus={() => {
        if (!started) {
          setStarted(true);
          track("form_start", { form_type: formType });
        }
      }}
      className="space-y-4 rounded-xl border border-navy-100 bg-white p-6 shadow-sm"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="service" className="mb-1 block text-sm font-semibold text-navy-900">
            Serviço *
          </label>
          <select id="service" name="service" required className="w-full rounded-lg border border-navy-200 p-3">
            <option value="">Escolha o serviço…</option>
            {services.map((s) => (
              <option key={s.slug} value={s.slug}>{s.shortName}</option>
            ))}
            <option value="outro">Outro / não sei</option>
          </select>
        </div>
        <div>
          <label htmlFor="urgency" className="mb-1 block text-sm font-semibold text-navy-900">
            Urgência *
          </label>
          <select id="urgency" name="urgency" required className="w-full rounded-lg border border-navy-200 p-3">
            <option value="emergencia">🚨 Emergência — preciso agora</option>
            <option value="hoje">Hoje</option>
            <option value="esta-semana">Esta semana</option>
            <option value="orcamento">Só quero orçamento</option>
          </select>
        </div>
        <div>
          <label htmlFor="phone" className="mb-1 block text-sm font-semibold text-navy-900">
            Telemóvel *
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            required
            minLength={9}
            placeholder="9xx xxx xxx"
            className="w-full rounded-lg border border-navy-200 p-3"
          />
        </div>
        <div>
          <label htmlFor="location" className="mb-1 block text-sm font-semibold text-navy-900">
            Zona *
          </label>
          <select id="location" name="location" required className="w-full rounded-lg border border-navy-200 p-3">
            <option value="">Escolha a zona…</option>
            {allLocations.map((l) => (
              <option key={l.slug} value={l.slug}>
                {l.type === "freguesia" ? `Lisboa — ${l.name}` : l.name}
              </option>
            ))}
            <option value="outra">Outra zona</option>
          </select>
        </div>
      </div>

      <details>
        <summary className="cursor-pointer text-sm font-semibold text-navy-700">+ Adicionar detalhes (opcional)</summary>
        <div className="mt-3 space-y-3">
          <div>
            <label htmlFor="name" className="mb-1 block text-sm font-semibold text-navy-900">Nome</label>
            <input id="name" name="name" autoComplete="name" className="w-full rounded-lg border border-navy-200 p-3" />
          </div>
          <div>
            <label htmlFor="message" className="mb-1 block text-sm font-semibold text-navy-900">Descreva o problema</label>
            <textarea id="message" name="message" rows={3} className="w-full rounded-lg border border-navy-200 p-3" />
          </div>
          <p className="text-xs text-slate-500">
            💡 Dica: uma foto da fechadura/porta acelera o orçamento — envie-a por WhatsApp após submeter.
          </p>
        </div>
      </details>

      {/* Honeypot (anti-spam, docs/04 §7) */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

      <label className="flex items-start gap-2 text-xs text-slate-600">
        <input type="checkbox" name="consent" required className="mt-0.5" />
        Aceito ser contactado sobre este pedido e li a{" "}
        <Link href="/politica-de-privacidade/" className="underline">política de privacidade</Link>. *
      </label>

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-lg bg-accent-500 px-6 py-4 text-lg font-bold text-navy-950 transition hover:bg-accent-400 disabled:opacity-60"
      >
        {status === "sending" ? "A enviar…" : "Pedir orçamento grátis →"}
      </button>
      <p aria-live="polite" className="text-center text-sm text-danger-600">
        {status === "error" && "Não foi possível enviar. Tente novamente ou ligue-nos diretamente."}
      </p>
      <p className="text-center text-xs text-slate-500">Resposta em menos de 15 minutos · Sem compromisso</p>
    </form>
  );
}
