import { notFound } from "next/navigation";
import { creditCardBanks } from "@/data/creditCardBanks";
import Tier1Template from "./Tier1Template";
import Tier2Template from "./Tier2Template";
import Tier3Template from "./Tier3Template";
import { Metadata } from "next";

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
  const candidates = [
    `Comprehensive guide to settle ${b} credit card dues legally in India. Stop recovery harassment, reduce debt under RBI rules, and get an NOC.`,
    `Settle ${b} credit card dues legally with CredSettle. Stop recovery harassment, reduce principal debt, and secure NOC under RBI guidelines.`,
    `Settle ${b} credit card dues legally with CredSettle. Stop recovery harassment & reduce debt under RBI rules. Get a free consultation today.`
  ];
  for (const c of candidates) {
    if (c.length >= 140 && c.length <= 155) return c;
  }
  for (const c of candidates) {
    if (c.length >= 100 && c.length <= 155) return c;
  }
  return candidates[0].slice(0, 155);
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
    notFound();
  }

  if (bank.tier === 1) {
    return <Tier1Template bankName={bank.name} slug={bank.slug} />;
  } else if (bank.tier === 2) {
    return <Tier2Template bankName={bank.name} slug={bank.slug} />;
  } else {
    return <Tier3Template bankName={bank.name} slug={bank.slug} />;
  }
}
