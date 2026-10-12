import { notFound, permanentRedirect } from "next/navigation";
import { creditCardBanks } from "@/data/creditCardBanks";
import Tier1Template from "./Tier1Template";
import Tier2Template from "./Tier2Template";
import Tier3Template from "./Tier3Template";
import type { Metadata } from "next";
import banksData from "@/app/loan-settlement-by-bank/banks.json";
import { getMetaTitlePixelWidth, getMetaDescPixelWidth, getShortBankName } from "@/lib/seo-utils";

const ccAliasMap: Record<string, string> = {
  "hdfc-bank-credit-card": "/credit-card-settlement/hdfc",
  "icici-bank-credit-card": "/credit-card-settlement/icici",
  "sbi-card": "/credit-card-settlement/sbi",
  "sbicap-securities": "/credit-card-settlement/sbi",
  "pnb-housing-finance": "/credit-card-settlement/pnb",
};

const loanAliasMap: Record<string, string> = {
  "gichf": "/loan-settlement-by-bank/gic-housing-finance",
  "branch-international": "/loan-settlement-by-bank/branch",
  "faircent": "/loan-settlement-by-bank/faircent-technologies-india-pvt-ltd",
  "fibe-early-salary": "/loan-settlement-by-bank/fibe",
  "freo-save": "/loan-settlement-by-bank/freopay",
  "iifl-home-finance": "/loan-settlement-by-bank/iifl",
  "incred-financial-services": "/loan-settlement-by-bank/incred",
  "jupiter-edge": "/loan-settlement-by-bank/jupiter-money",
  "lazypay": "/loan-settlement-by-bank/lazy-pay",
  "loantap-financial": "/loan-settlement-by-bank/loantap",
  "muthoot-fincorp": "/loan-settlement-by-bank/muthoot-finance",
  "onecard-metal": "/loan-settlement-by-bank/onecard",
  "paytm-postpaid": "/loan-settlement-by-bank/paytm",
  "poonawalla-fincorp-limited": "/loan-settlement-by-bank/poonawala-fin",
  "ring-app": "/loan-settlement-by-bank/si-creva",
  "rupeeredee": "/loan-settlement-by-bank/rupee-redee",
  "slice-card": "/loan-settlement-by-bank/slice",
  "stashfin-credit": "/loan-settlement-by-bank/stashfin",
  "tata-motor-finance": "/loan-settlement-by-bank/tata-capital",
  "ugro-capital-ltd": "/loan-settlement-by-bank/ugro-capital",
  "uni-cards": "/loan-settlement-by-bank/uni-card",
  "vivriti-capital": "/loan-settlement-by-bank/vivriti",
  "zestmoney": "/loan-settlement-by-bank/zest-money",
};

function getBankCanonicalSlug(company: string) {
  return company.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}

function formatSlugToBankName(slug: string): string {
  return slug
    .replace(/-co-op-/gi, "-co-operative-")
    .replace(/-co-op$/gi, "-co-operative")
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ")
    .replace(/\bCo Operative\b/gi, "Co-operative")
    .replace(/\bCo Op\b/gi, "Co-op")
    .replace(/\bP2p\b/gi, "P2P")
    .replace(/\bEmi\b/gi, "EMI")
    .replace(/\bFsc\b/gi, "FSC")
    .replace(/\bBankbazaar\b/gi, "BankBazaar")
    .replace(/\bMymoneymantra\b/gi, "MyMoneyMantra");
}

export async function generateStaticParams() {
  return creditCardBanks.map((bank) => ({
    slug: bank.slug,
  }));
}

function getCCBankMetaTitle(bankName: string): string {
  const b = bankName.trim();
  const shortName = getShortBankName(b);

  const candidates = [
    `Settle Your ${shortName} Credit Card Dues Online | CredSettle`,
    `Settle Your ${shortName} Credit Card Dues Legally | CredSettle`,
    `How to Settle Your ${shortName} Credit Card Dues | CredSettle`,
    `${shortName} Bank Credit Card Settlement Guide | CredSettle`,
    `${shortName} Credit Card Debt Settlement Guide | CredSettle`,
    `${shortName} Credit Card Settlement Process Guide | CredSettle`,
    `How to Settle ${shortName} Credit Card Dues | CredSettle`,
    `${shortName} Credit Card Settlement Guide | CredSettle`,
    `${shortName} Credit Card Debt Settlement | CredSettle`,
    `${b} Credit Card Settlement Guide | CredSettle`,
    `Settle Your ${shortName} Credit Card Dues | CredSettle`,
    `Settle ${shortName} Credit Card Dues | CredSettle`,
    `${shortName} Card Settlement Process | CredSettle`,
    `${shortName} Card Settlement Guide | CredSettle`,
    `Settle Your ${shortName} Card Dues Legally | CredSettle`,
    `Settle Your ${shortName} Card Dues | CredSettle`,
    `Settle ${shortName} Card Dues | CredSettle`,
    `Settle ${shortName} Card Debt | CredSettle`,
    `How to Settle ${shortName} Card | CredSettle`,
    `${shortName} Card Dues Relief | CredSettle`,
    `Settle ${shortName} Card | CredSettle`
  ];

  for (const cand of candidates) {
    if (cand.length >= 50 && cand.length <= 58 && getMetaTitlePixelWidth(cand) <= 550) return cand;
  }
  for (const cand of candidates) {
    if (cand.length >= 50 && cand.length <= 60 && getMetaTitlePixelWidth(cand) <= 560) return cand;
  }

  const brand = 'CredSettle';
  const maxBankLen = 58 - ' Settle  Card Dues | '.length - brand.length;
  const sub = shortName.slice(0, Math.max(10, maxBankLen));
  const lastSpace = sub.lastIndexOf(' ');
  const truncatedBank = (lastSpace >= 8 ? sub.slice(0, lastSpace) : sub).replace(/[-–—,&]+$/, '').trim();
  const cand = `Settle ${truncatedBank} Card Dues | ${brand}`;
  if (cand.length >= 50 && cand.length <= 60 && getMetaTitlePixelWidth(cand) <= 560) {
    return cand;
  }
  return cand.slice(0, 60);
}

function getCCBankMetaDescription(bankName: string): string {
  const b = bankName.trim();
  const shortName = getShortBankName(b);

  const candidates = [
    `Facing ${shortName} credit card dues? Settle legally under RBI rules with CredSettle. Stop recovery calls & reduce debt up to 50%.`,
    `Get expert legal relief for ${shortName} card debt under RBI rules with CredSettle. Stop recovery harassment & clear dues with NOC.`,
    `Resolve outstanding ${shortName} credit card debt legally with CredSettle. Stop harassment & settle dues up to 50% under RBI rules.`,
    `Clear your ${shortName} credit card debt legally under RBI rules with CredSettle. Stop agent calls, reduce dues & get official NOC.`,
    `Facing ${shortName} card debt? Settle legally under RBI rules with CredSettle. Stop recovery harassment, cut dues & get official NOC.`,
    `Legal debt resolution for ${shortName} credit card dues with CredSettle. Stop collection calls & settle up to 50% under RBI rules.`,
    `Struggling with ${shortName} card debt? Settle legally under RBI rules with CredSettle. Stop agent calls & reduce debt up to 50%.`,
    `Settle ${shortName} card dues legally under RBI rules with CredSettle. Stop recovery harassment, negotiate waivers & clear debt safely.`,
    `Settle ${shortName} credit card dues legally under RBI rules with CredSettle. Stop recovery harassment & cut debt up to 50% today.`,
    `Settle ${shortName} card debt legally under RBI rules with CredSettle. Stop recovery calls, reduce total dues & get an official NOC.`,
    `Resolve ${shortName} card dues legally under RBI rules with CredSettle. Stop agent calls, reduce debt up to 50% & get your bank NOC.`,
    `Facing ${shortName} card debt? Settle legally under RBI rules with CredSettle. Stop collection calls & reduce total dues up to 50%.`
  ];

  // Level 1: Strict sweet spot (140-146 chars, <= 960px)
  for (const c of candidates) {
    if (c.length >= 140 && c.length <= 146 && getMetaDescPixelWidth(c) <= 960) return c;
  }
  // Level 2: Target (140-150 chars, <= 960px)
  for (const c of candidates) {
    if (c.length >= 140 && c.length <= 150 && getMetaDescPixelWidth(c) <= 960) return c;
  }
  // Level 3: Target (140-152 chars, <= 970px)
  for (const c of candidates) {
    if (c.length >= 140 && c.length <= 152 && getMetaDescPixelWidth(c) <= 970) return c;
  }
  // Level 4: Absolute compliance limit (140-155 chars, <= 980px)
  for (const c of candidates) {
    if (c.length >= 140 && c.length <= 155 && getMetaDescPixelWidth(c) <= 980) return c;
  }

  // Fallback with compact bank name if shortName is too long
  const compactName = shortName.length > 20 ? shortName.slice(0, 18).trim() : shortName;
  const compactCandidates = [
    `Facing ${compactName} credit card dues? Settle legally under RBI rules with CredSettle. Stop recovery calls & reduce debt up to 50%.`,
    `Settle ${compactName} card dues legally under RBI rules with CredSettle. Stop recovery harassment, negotiate waivers & clear debt safely.`,
    `Get expert legal relief for ${compactName} card debt under RBI rules with CredSettle. Stop recovery harassment & clear dues with NOC.`,
    `Facing ${compactName} card debt? Settle legally under RBI rules with CredSettle. Stop recovery harassment, cut dues & get official NOC.`
  ];
  for (const c of compactCandidates) {
    if (c.length >= 140 && c.length <= 146 && getMetaDescPixelWidth(c) <= 960) return c;
    if (c.length >= 140 && c.length <= 150 && getMetaDescPixelWidth(c) <= 960) return c;
  }

  const guaranteed = `Facing credit card dues from ${compactName}? Settle legally under RBI rules with CredSettle. Stop recovery calls & reduce debt up to 50%.`;
  if (guaranteed.length >= 140 && guaranteed.length <= 155 && getMetaDescPixelWidth(guaranteed) <= 960) {
    return guaranteed;
  }
  return guaranteed.slice(0, 146);
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const normalized = slug.toLowerCase().trim();
  const bank = creditCardBanks.find((b) => b.slug === normalized);
  const bankName = bank ? bank.name : formatSlugToBankName(slug);

  const metaTitle = getCCBankMetaTitle(bankName);
  const metaDescription = getCCBankMetaDescription(bankName);

  return {
    title: metaTitle,
    description: metaDescription,
    alternates: {
      canonical: `https://www.credsettle.com/credit-card-settlement/${normalized}`,
    },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: `https://www.credsettle.com/credit-card-settlement/${normalized}`,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: metaDescription,
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export default async function BankCreditCardSettlementPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const normalized = slug.toLowerCase().trim();

  if (ccAliasMap[normalized]) {
    permanentRedirect(ccAliasMap[normalized]);
  }
  if (loanAliasMap[normalized]) {
    permanentRedirect(loanAliasMap[normalized]);
  }
  const matchingLoanBank = banksData.find(
    (b: { company: string }) => getBankCanonicalSlug(b.company) === normalized
  );
  if (matchingLoanBank) {
    permanentRedirect(`/loan-settlement-by-bank/${getBankCanonicalSlug(matchingLoanBank.company)}`);
  }

  const bank = creditCardBanks.find((b) => b.slug === normalized);

  if (bank) {
    if (bank.tier === 1) {
      return <Tier1Template bankName={bank.name} slug={bank.slug} />;
    } else if (bank.tier === 2) {
      return <Tier2Template bankName={bank.name} slug={bank.slug} />;
    } else {
      return <Tier3Template bankName={bank.name} slug={bank.slug} />;
    }
  }

  // Fallback for valid bank/fintech/cooperative slugs: serve Tier3Template directly (HTTP 200 OK)
  const dynamicBankName = formatSlugToBankName(slug);
  return <Tier3Template bankName={dynamicBankName} slug={normalized} />;
}
