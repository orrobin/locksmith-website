"use client";

// GA4/GTM dataLayer helpers — event schema from docs/01 §4.2.
// Events fire even before GTM loads (dataLayer queues them).

type EventParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export function track(event: string, params: EventParams = {}): void {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push({ event, ...params });
}

export const trackCall = (ctaLocation: string, params: EventParams = {}) =>
  track("click_call", { cta_location: ctaLocation, ...params });

export const trackWhatsApp = (ctaLocation: string, params: EventParams = {}) =>
  track("click_whatsapp", { cta_location: ctaLocation, ...params });
