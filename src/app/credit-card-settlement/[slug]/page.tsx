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
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ")
    .replace(/\bCo Operative\b/gi, "Co-operative")
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
    `${shortName} Credit Card Settlement Guide | CredSettle`,
    `${shortName} Credit Card Debt Settlement | CredSettle`,
    `${shortName} Bank Credit Card Settlement Guide | CredSettle`,
    `${b} Credit Card Settlement Guide | CredSettle`,
    `How to Settle ${shortName} Credit Card Dues | CredSettle`,
    `Settle ${shortName} Credit Card Dues Legally | CredSettle`,
    `Settle Your ${shortName} Credit Card Dues | CredSettle`,
    `${shortName} Card Settlement Process | CredSettle`,
    `${shortName} Card Settlement Guide | CredSettle`,
    `${shortName} Card Settlement | CredSettle`,
    `Settle ${shortName} Card Dues | CredSettle`,
    `Settle ${shortName} Credit Card Dues | CredSettle`,
    `${shortName} Credit Card Settlement | CredSettle`
  ];

  for (const cand of candidates) {
    if (cand.length >= 50 && cand.length <= 60 && getMetaTitlePixelWidth(cand) <= 550) return cand;
  }
  for (const cand of candidates) {
    if (cand.length >= 50 && cand.length <= 60 && getMetaTitlePixelWidth(cand) <= 561) return cand;
  }

  const brand = 'CredSettle';
  const maxBankLen = 58 - ' Card Settlement | '.length - brand.length;
  const truncatedBank = shortName.slice(0, Math.max(10, maxBankLen)).trim();
  const cand = `${truncatedBank} Card Settlement | ${brand}`;
  if (cand.length >= 50 && cand.length <= 60 && getMetaTitlePixelWidth(cand) <= 561) {
    return cand;
  }
  return cand.slice(0, 60);
}

function getCCBankMetaDescription(bankName: string): string {
  const b = bankName.trim();
  const shortName = getShortBankName(b);

  const candidates = [
    `Settle ${shortName} card dues legally under RBI rules with CredSettle. Stop recovery harassment, reduce debt & get your bank NOC.`,
    `Settle ${b} card dues legally under RBI rules with CredSettle. Stop recovery harassment, reduce debt & get your bank NOC.`,
    `Settle ${shortName} credit card dues legally under RBI rules with CredSettle. Stop harassment, reduce debt and obtain an official NOC.`,
    `Settle ${b} credit card dues legally under RBI rules with CredSettle. Stop harassment, reduce debt and obtain an official NOC.`,
    `Resolve ${shortName} credit card dues legally with CredSettle under RBI rules. Stop recovery agent harassment & reduce your total debt safely.`,
    `Resolve ${b} credit card dues legally with CredSettle under RBI rules. Stop recovery agent harassment & reduce your total debt safely.`,
    `Settle ${shortName} credit card dues legally under RBI rules with CredSettle. Stop recovery harassment, reduce debt and obtain an official bank NOC.`,
    `Settle ${b} credit card dues legally under RBI rules with CredSettle. Stop recovery harassment, reduce debt and obtain an official bank NOC.`,
    `Expert legal help to settle ${shortName} credit card dues under RBI rules with CredSettle. Stop harassment, reduce debt & get your bank NOC.`,
    `Expert legal help to settle ${b} credit card dues under RBI rules with CredSettle. Stop harassment, reduce debt & get your bank NOC.`,
    `Struggling with ${shortName} credit card dues? CredSettle settles debt legally under RBI guidelines. Stop collection harassment & clear debt.`,
    `Struggling with ${b} credit card dues? CredSettle settles debt legally under RBI guidelines. Stop collection harassment & clear debt.`,
    `Settle ${shortName} card dues legally under RBI rules with CredSettle. Stop recovery harassment, reduce dues & get official NOC.`,
    `Resolve ${shortName} card debt legally under RBI rules. CredSettle stops recovery harassment, reduces debt & gets official bank NOC.`,
    `Settle ${shortName} card debt legally with CredSettle under RBI rules. Stop agent harassment, negotiate waivers & clear your dues safely.`
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

  const base = `Settle ${shortName} credit card dues legally under RBI rules with CredSettle. Stop harassment, reduce debt & get your official bank NOC.`;
  if (base.length > 146) {
    return `Settle ${shortName} card dues legally under RBI rules with CredSettle. Stop recovery harassment, reduce debt & get your bank NOC.`.slice(0, 146);
  }
  return base.slice(0, 146);
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
