import { site } from "./config";

// Contextual pre-filled WhatsApp messages per page type (docs/01 §6).

export type WaContext =
  | { kind: "generic" }
  | { kind: "service"; service: string; city?: string }
  | { kind: "location"; area: string }
  | { kind: "emergency" }
  | { kind: "quote" };

export function waMessage(ctx: WaContext): string {
  switch (ctx.kind) {
    case "service":
      return `Olá! Preciso de ${ctx.service.toLowerCase()} em ${ctx.city ?? "Lisboa"}. Podem ajudar?`;
    case "location":
      return `Olá! Preciso de um chaveiro em ${ctx.area}. Podem ajudar?`;
    case "emergency":
      return "🚨 URGENTE: estou com uma emergência (porta/carro trancado). A minha localização é: ";
    case "quote":
      return "Olá! Gostaria de pedir um orçamento para: ";
    default:
      return "Olá! Preciso de um chaveiro. Podem ajudar?";
  }
}

export function waLink(ctx: WaContext = { kind: "generic" }): string {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(waMessage(ctx))}`;
}
