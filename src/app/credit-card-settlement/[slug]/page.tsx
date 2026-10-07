import { notFound, permanentRedirect } from "next/navigation";
import { creditCardBanks } from "@/data/creditCardBanks";
import Tier1Template from "./Tier1Template";
import Tier2Template from "./Tier2Template";
import Tier3Template from "./Tier3Template";
import { Metadata } from "next";
import banksData from "@/app/loan-settlement-by-bank/banks.json";

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

export async function generateStaticParams() {
  return creditCardBanks.map((bank) => ({
    slug: bank.slug,
  }));
}

function getCCBankMetaTitle(bankName: string): string {
  const b = bankName.trim();
  const shortName = b
    .replace('Small Finance Bank', 'SFB')
    .replace('Bank', '')
    .trim();

  const candidates = [
    `${b} Credit Card Settlement Guide | CredSettle`,
    `${b} Credit Card Debt Settlement | CredSettle`,
    `${b} Credit Card Settlement Process (2026)`,
    `${b} Credit Card Settlement (2026 Guide)`,
    `${shortName} Credit Card Settlement Guide | CredSettle`,
    `${shortName} Card Debt Settlement | CredSettle`,
    `${shortName} Card Settlement Process (2026)`,
    `${b} Credit Card Settlement | CredSettle`
  ];

  for (const cand of candidates) {
    if (cand.length >= 45 && cand.length <= 58) return cand;
  }
  for (const cand of candidates) {
    if (cand.length >= 30 && cand.length <= 60) return cand;
  }
  return `${b} Credit Card Settlement`.slice(0, 58);
}

function getCCBankMetaDescription(bankName: string): string {
  const b = bankName.trim();
  const shortName = b
    .replace('Small Finance Bank', 'SFB')
    .replace('Bank', '')
    .trim();

  const candidates = [
    `Settle ${b} credit card dues legally with CredSettle. Stop recovery harassment & reduce debt under RBI rules.`,
    `Settle ${b} credit card debt legally with CredSettle. Stop recovery calls & resolve dues under RBI rules.`,
    `Settle ${b} card dues legally under RBI rules with CredSettle. Stop recovery harassment & get an NOC.`,
    `Comprehensive guide to settle ${b} credit card dues legally. Stop recovery harassment under RBI rules.`,
    `Settle ${shortName} card dues legally under RBI rules with CredSettle. Stop harassment & reduce debt.`
  ];

  for (const c of candidates) {
    if (c.length >= 110 && c.length <= 135) return c;
  }
  for (const c of candidates) {
    if (c.length >= 80 && c.length <= 138) return c;
  }

  const sub = candidates[0].slice(0, 135);
  const lastSpace = sub.lastIndexOf(' ');
  let truncated = lastSpace > 50 ? sub.slice(0, lastSpace) : sub;
  truncated = truncated.replace(/[,;:\-–—|&.]+$/, '').trim();
  return `${truncated}.`;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const bank = creditCardBanks.find((b) => b.slug === slug);
  
  if (!bank) {
    return {
      title: "Credit Card Settlement | CredSettle",
      description: "Expert legal assistance for credit card settlement.",
    };
  }

  const metaTitle = getCCBankMetaTitle(bank.name);
  const metaDescription = getCCBankMetaDescription(bank.name);

  return {
    title: metaTitle,
    description: metaDescription,
    alternates: {
      canonical: `https://www.credsettle.com/credit-card-settlement/${bank.slug}`,
    },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: `https://www.credsettle.com/credit-card-settlement/${bank.slug}`,
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
  const bank = creditCardBanks.find((b) => b.slug === slug);

  if (!bank) {
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
    permanentRedirect("/credit-card-settlement");
  }

  if (bank.tier === 1) {
    return <Tier1Template bankName={bank.name} slug={bank.slug} />;
  } else if (bank.tier === 2) {
    return <Tier2Template bankName={bank.name} slug={bank.slug} />;
  } else {
    return <Tier3Template bankName={bank.name} slug={bank.slug} />;
  }
}
