import { NextResponse } from "next/server";
import crypto from "crypto";
import { adminDb } from "@/lib/firebaseAdmin";
import { WEBSITE_TAG_RE } from "@/lib/whatsapp";

/**
 * Saves WhatsApp chats started on credsettle.com as CredSettle leads.
 *
 * Every WhatsApp link on the site opens the shared WATI number (+91 92896 22596) with a message ending in
 * "(Ref: credsettle.com/<page>)". WATI posts incoming messages to the CRM's Cloud Functions, which forward
 * messages carrying this site's tag here. We save them to `Form` in the same shape as the site's
 * own lead form plus source "CredSettle WhatsApp", so the CRM sync reads them as the CREDSETTLE_WHATSAPP source
 * (counted inside CredSettle's totals).
 *
 * Only messages with this exact tag create a lead (the WATI number is shared with AMA, WillDrafting,
 * LegalRecovery and the other brands). A number that already sent a CredSettle lead in the last 7 days is not
 * saved again, and the same WhatsApp message never creates two leads (both CRM webhooks forward it).
 *
 * Auth: ?token=<WHATSAPP_INBOUND_TOKEN> (same value as CREDSETTLE_WHATSAPP_INBOUND_TOKEN in the CRM functions config).
 */

const SITE = "https://www.credsettle.com";
const COLLECTION = "Form";
const PHONE_FIELD = "number";
const SOURCE = "CredSettle WhatsApp";
const DUPLICATE_WINDOW_MS = 7 * 24 * 60 * 60 * 1000;

interface WatiInbound {
  id?: string;
  whatsappMessageId?: string;
  waId?: string;
  senderName?: string;
  text?: string;
  owner?: boolean;
  eventType?: string;
  event_type?: string;
  timestamp?: string | number;
  [key: string]: unknown;
}

function tokenMatches(given: string | null): boolean {
  const expected = process.env.WHATSAPP_INBOUND_TOKEN;
  if (!expected || !given) return false;
  const a = Buffer.from(given);
  const b = Buffer.from(expected);
  return a.length === b.length && crypto.timingSafeEqual(a, b);
}

// Same record shape as the site's contact form (src/app/api/contact/route.ts), so the CRM reads it unchanged
function buildLead(phone: string, name: string, text: string, page: string): Record<string, unknown> {
  const created = Date.now();
  const date = new Date(created)
    .toLocaleDateString("en-GB", { day: "2-digit", month: "2-digit", year: "numeric" })
    .replace(/\//g, "-");
  return {
    canPay: "",
    city: "",
    state: "",
    created,
    creditCardDues: "",
    date,
    email: "",
    employmentStatus: "",
    harassment: "",
    monthlyIncome: "",
    name,
    number: phone,
    personalLoanDues: "",
    queries: text,
    message: text,
    submissionUrl: `${SITE}${page}`,
    utmParams: {},
    source: SOURCE,
    verified: true, // the number comes from WhatsApp itself
  };
}

async function recentLeadExists(phone: string): Promise<boolean> {
  const snap = await adminDb.collection(COLLECTION).where(PHONE_FIELD, "==", phone).get();
  const since = Date.now() - DUPLICATE_WINDOW_MS;
  return snap.docs.some((doc) => Number(doc.data().created) > since);
}

// Stable id per WhatsApp message, so a message forwarded twice (or retried) maps to the same doc
function leadDocId(msg: WatiInbound, phone: string, text: string): string {
  const raw = String(msg.whatsappMessageId || msg.id || "");
  const key = raw || `${phone}|${msg.timestamp || ""}|${text}`;
  return `wa_${crypto.createHash("sha1").update(key).digest("hex").slice(0, 24)}`;
}

async function handleMessage(msg: WatiInbound): Promise<string> {
  if (!msg || typeof msg !== "object") return "invalid";
  if (msg.owner === true) return "outgoing"; // sent from our side
  const eventType = msg.eventType || msg.event_type;
  if (eventType && eventType !== "message") return "not-a-message";

  const text = typeof msg.text === "string" ? msg.text : "";
  const tag = text.match(WEBSITE_TAG_RE);
  if (!tag) return "no-site-tag";

  const digits = String(msg.waId || "").replace(/\D/g, "");
  if (!(digits.length === 12 && digits.startsWith("91"))) return "non-indian-number";
  const phone = digits.slice(-10);

  const docRef = adminDb.collection(COLLECTION).doc(leadDocId(msg, phone, text));
  if ((await docRef.get()).exists) return "already-saved";
  if (await recentLeadExists(phone)) return "duplicate";

  const name = (msg.senderName || "").toString().trim() || "WhatsApp user";
  try {
    // create() fails if the doc exists, so two forwards of the same message never make two leads
    await docRef.create(buildLead(phone, name, text.slice(0, 2000), tag[1]));
  } catch (err: unknown) {
    const code = (err as { code?: number | string })?.code;
    if (code === 6 || code === "already-exists") return "already-saved";
    throw err;
  }
  return "saved";
}

export async function POST(request: Request) {
  if (!process.env.WHATSAPP_INBOUND_TOKEN) {
    console.error("[whatsapp-inbound] WHATSAPP_INBOUND_TOKEN is not set");
    return NextResponse.json({ error: "Not configured" }, { status: 500 });
  }
  if (!tokenMatches(new URL(request.url).searchParams.get("token"))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const messages = (Array.isArray(body) ? body : [body]) as WatiInbound[];
  const results: string[] = [];
  for (const msg of messages) {
    try {
      results.push(await handleMessage(msg));
    } catch (err) {
      console.error("[whatsapp-inbound] Failed to save message:", err);
      results.push("error");
    }
  }

  // 500 only when saving failed, so the caller can retry (a retried message cannot create a second lead)
  if (results.includes("error")) return NextResponse.json({ ok: false, results }, { status: 500 });
  return NextResponse.json({ ok: true, results });
}
