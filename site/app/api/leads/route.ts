import { NextResponse } from "next/server";

// Lead intake (docs/04 §4). Phase 1: validate + log + forward to a webhook (CRM/Slack/email
// service) configured via LEADS_WEBHOOK_URL. Phase 2: persist to Postgres via Payload + notify
// ops via WhatsApp/SMS. Rate limiting is expected at the edge (Cloudflare) per docs/04 §7.

interface LeadPayload {
  service?: string;
  urgency?: string;
  phone?: string;
  location?: string;
  name?: string;
  message?: string;
  consent?: string;
  formType?: string;
  website?: string; // honeypot
}

function isValid(body: LeadPayload): string | null {
  if (body.website) return "spam"; // honeypot filled → silently accept
  if (!body.phone || body.phone.replace(/\D/g, "").length < 9) return "Telefone inválido";
  if (!body.service) return "Serviço em falta";
  if (!body.urgency) return "Urgência em falta";
  if (!body.consent) return "Consentimento em falta";
  return null;
}

export async function POST(request: Request) {
  let body: LeadPayload;
  try {
    body = (await request.json()) as LeadPayload;
  } catch {
    return NextResponse.json({ error: "JSON inválido" }, { status: 400 });
  }

  const error = isValid(body);
  if (error === "spam") return NextResponse.json({ ok: true }); // don't tip off bots
  if (error) return NextResponse.json({ error }, { status: 422 });

  const lead = {
    receivedAt: new Date().toISOString(),
    formType: body.formType ?? "quote",
    service: body.service,
    urgency: body.urgency,
    phone: body.phone,
    location: body.location ?? "",
    name: body.name ?? "",
    message: (body.message ?? "").slice(0, 2000),
    consentAt: new Date().toISOString(),
  };

  // Forward to ops webhook (CRM / Slack / Make / n8n). Failing forward must not lose the lead
  // silently — log it so it's recoverable from server logs.
  const webhook = process.env.LEADS_WEBHOOK_URL;
  if (webhook) {
    try {
      await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(lead),
      });
    } catch (err) {
      console.error("[leads] webhook forward failed — LEAD DATA:", JSON.stringify(lead), err);
    }
  } else {
    console.log("[leads] new lead (no LEADS_WEBHOOK_URL configured):", JSON.stringify(lead));
  }

  return NextResponse.json({ ok: true });
}
