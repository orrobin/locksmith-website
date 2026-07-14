"use client";

import { useSyncExternalStore } from "react";
import { site, isDaytime } from "@/lib/config";
import { trackCall } from "@/lib/analytics";

const subscribe = () => () => {};

/** Time-aware emergency strip (docs/01 §5.3). Server snapshot assumes daytime so static
 *  pages stay static; the client corrects it on hydration. */
export default function EmergencyBanner() {
  const day = useSyncExternalStore(subscribe, isDaytime, () => true);
  return (
    <div className="bg-danger-600 px-4 py-2 text-center text-sm font-semibold text-white">
      <span aria-hidden>🚨</span> Emergência?{" "}
      {day ? "Estamos abertos agora — chegada em 20–30 min." : "Serviço noturno ativo — aplica-se taxa noturna."}{" "}
      <a
        href={`tel:${site.phone}`}
        onClick={() => trackCall("emergency_banner")}
        className="whitespace-nowrap underline underline-offset-2"
      >
        Ligue {site.phoneDisplay}
      </a>
    </div>
  );
}
