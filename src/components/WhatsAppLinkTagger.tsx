"use client";

import { useEffect } from "react";
import { track } from "@vercel/analytics";
import { LEGACY_WHATSAPP_NUMBERS, WHATSAPP_NUMBER, pageTag } from "@/lib/whatsapp";

const DEFAULT_TEXT = "I want to settle my loans";
const TAG_AT_END = /\n?\(Ref: [^)]*\)$/;

const isOurNumber = (value: string | null) => {
  const digits = (value || "").replace(/\D/g, "");
  return digits === WHATSAPP_NUMBER || LEGACY_WHATSAPP_NUMBERS.includes(digits);
};

/**
 * Rewrites a WhatsApp link to the WATI number with this page's tag at the end of the message.
 * Returns null for anything that is not a chat with one of our numbers (share links have no phone).
 */
function retagWhatsAppUrl(href: string): string | null {
  let url: URL;
  try {
    url = new URL(href, window.location.href);
  } catch {
    return null;
  }
  const isWaMe = url.hostname === "wa.me" && isOurNumber(url.pathname);
  const isApi = /(^|\.)whatsapp\.com$/.test(url.hostname) && isOurNumber(url.searchParams.get("phone"));
  if (!isWaMe && !isApi) return null;

  const text = (url.searchParams.get("text") || DEFAULT_TEXT).replace(TAG_AT_END, "");
  // Build the query by hand: URLSearchParams writes spaces as "+", which WhatsApp can show literally
  const params = [...url.searchParams.entries()]
    .filter(([k]) => k !== "text" && k !== "phone")
    .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`);
  if (isApi) params.unshift(`phone=${WHATSAPP_NUMBER}`);
  params.push(`text=${encodeURIComponent(`${text}\n${pageTag(window.location.pathname)}`)}`);
  const path = isWaMe ? `/${WHATSAPP_NUMBER}` : url.pathname;
  return `${url.origin}${path}?${params.join("&")}`;
}

/**
 * Site-wide: every WhatsApp chat opened from this site (links and window.open buttons) goes to the WATI
 * number with the page tag, and is counted as the whatsapp_click Vercel Analytics event.
 */
export default function WhatsAppLinkTagger() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const link = (e.target as Element | null)?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!link) return;
      const next = retagWhatsAppUrl(link.href);
      if (!next) return;
      track("whatsapp_click", { page: window.location.pathname });
      link.href = next;
    };

    const originalOpen = window.open;
    window.open = function (url?: string | URL, target?: string, features?: string) {
      const next = url ? retagWhatsAppUrl(String(url)) : null;
      if (next) track("whatsapp_click", { page: window.location.pathname });
      return originalOpen.call(window, next || url, target, features);
    } as typeof window.open;

    document.addEventListener("click", onClick, true);
    return () => {
      document.removeEventListener("click", onClick, true);
      window.open = originalOpen;
    };
  }, []);

  return null;
}
