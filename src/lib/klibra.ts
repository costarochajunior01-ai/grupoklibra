/**
 * Configuração central da K-Libra.
 * Substitua o placeholder abaixo pelo número real (formato internacional, só dígitos).
 * Ex.: "5571999999999"
 */
export const WHATSAPP_NUMBER = "[INSERIR_NUMERO_WHATSAPP]";

export const COMPANY = {
  name: "K-Libra Artefatos de Borracha",
  short: "K-Libra",
  regions: "Bahia",
  year: 2026,
};

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

type EventPayload = Record<string, string | number | boolean | undefined>;

/**
 * Camada de eventos pronta para Google Analytics (gtag/dataLayer) e Meta Pixel (fbq).
 * Basta inserir os scripts do GA4/Pixel no HTML para os eventos começarem a ser enviados.
 */
export function trackEvent(name: string, payload: EventPayload = {}) {
  if (typeof window === "undefined") return;
  const w = window as unknown as {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  };

  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({ event: name, ...payload });
  w.gtag?.("event", name, payload);
  w.fbq?.("trackCustom", name, payload);
}

export function openWhatsApp(message: string, source: string) {
  trackEvent("whatsapp_click", { source });
  if (typeof window !== "undefined") {
    window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
  }
}
