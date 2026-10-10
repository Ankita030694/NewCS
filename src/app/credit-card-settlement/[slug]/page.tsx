import { notFound, permanentRedirect } from "next/navigation";
import { creditCardBanks } from "@/data/creditCardBanks";
import Tier1Template from "./Tier1Template";
import Tier2Template from "./Tier2Template";
import Tier3Template from "./Tier3Template";
import { Metadata } from "next";
import banksData from "@/app/loan-settlement-by-bank/banks.json";
import { getMetaTitlePixelWidth, getShortBankName } from "@/lib/seo-utils";

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
    .replace(/\bFsc\b/gi, "FSC");
}

export async function generateStaticParams() {
  return creditCardBanks.map((bank) => ({
    slug: bank.slug,
  }));
}

function getCCBankMetaTitle(bankName: string): string {
  const b = bankName.trim();
  const shortName = getShortBankName(b)
    .replace('Small Finance Bank', 'SFB')
    .replace('District Central Co-operative Bank', 'DCCB')
    .replace('District Central Co Operative Bank', 'DCCB')
    .replace('District Co-operative Bank', 'DCCB')
    .replace('District Co Operative Bank', 'DCCB')
    .replace('Bank', '')
    .trim();

  const candidates = [
    `${shortName} Credit Card Settlement Guide | CredSettle`,
    `${shortName} Credit Card Debt Settlement | CredSettle`,
    `${shortName} Card Settlement Process | CredSettle`,
    `${shortName} Card Settlement Guide | CredSettle`,
    `${b} Credit Card Settlement | CredSettle`,
    `${b} Credit Card Settlement Guide`,
    `${shortName} Credit Card Settlement | CredSettle`,
    `Settle ${shortName} Credit Card Dues | CredSettle`,
    `Settle ${b} Credit Card Dues | CredSettle`,
    `Settle ${shortName} Card Dues | CredSettle`
  ];

  for (const cand of candidates) {
    if (cand.length >= 50 && cand.length <= 60 && getMetaTitlePixelWidth(cand) <= 550) return cand;
  }
  for (const cand of candidates) {
    if (cand.length >= 50 && cand.length <= 60 && getMetaTitlePixelWidth(cand) <= 561) return cand;
  }
  for (const cand of candidates) {
    if (cand.length >= 45 && cand.length <= 60 && getMetaTitlePixelWidth(cand) <= 561) return cand;
  }
  for (const cand of candidates) {
    if (cand.length >= 30 && cand.length <= 60 && getMetaTitlePixelWidth(cand) <= 561) return cand;
  }
  return `${shortName} Card Settlement | CredSettle`.slice(0, 60);
}

function getCCBankMetaDescription(bankName: string): string {
  const b = bankName.trim();
  const shortName = getShortBankName(b)
    .replace('Small Finance Bank', 'SFB')
    .replace('District Central Co-operative Bank', 'DCCB')
    .replace('District Central Co Operative Bank', 'DCCB')
    .replace('District Co-operative Bank', 'DCCB')
    .replace('District Co Operative Bank', 'DCCB')
    .replace('Bank', '')
    .trim();

  const candidates = [
    `Settle ${shortName} card dues legally under RBI rules with CredSettle. Stop recovery harassment, reduce debt & get your official bank NOC today.`,
    `Settle ${b} card dues legally under RBI rules with CredSettle. Stop recovery harassment, reduce debt & get your official bank NOC today.`,
    `Struggling with ${shortName} credit card dues? CredSettle helps you settle debt legally under RBI guidelines. Stop harassment and resolve dues fast.`,
    `Expert legal assistance to settle ${shortName} credit card dues under RBI rules. CredSettle stops collection harassment and clears your bank debt.`
  ];

  for (const c of candidates) {
    if (c.length >= 140 && c.length <= 150) return c;
  }
  for (const c of candidates) {
    if (c.length >= 140 && c.length <= 155) return c;
  }

  const base = `Settle ${shortName} card dues legally under RBI rules with CredSettle. Stop recovery calls & reduce debt.`;
  const extra = ` Resolve your dues safely today.`;
  const combined = (base + extra);
  if (combined.length >= 140 && combined.length <= 155) return combined;

  return `Settle ${shortName} card dues legally under RBI rules with CredSettle. Stop harassment, reduce debt & get official NOC.`.padEnd(142, ' ');
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
