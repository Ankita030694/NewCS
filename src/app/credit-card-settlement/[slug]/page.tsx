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
  const candidate1 = `${bankName} Credit Card Settlement | CredSettle`;
  if (candidate1.length <= 58) return candidate1;

  const candidate2 = `${bankName} Credit Card Settlement`;
  if (candidate2.length <= 58) return candidate2;

  const shortName = bankName.replace('Small Finance Bank', 'SFB').replace('Bank', '').trim();
  const candidate3 = `${shortName} Card Settlement | CredSettle`;
  if (candidate3.length <= 58) return candidate3;

  const candidate4 = `${shortName} Card Settlement`;
  if (candidate4.length <= 58) return candidate4;

  return `${shortName} Card Settlement`.slice(0, 58);
}

function getCCBankMetaDescription(bankName: string): string {
  let desc = `Settle ${bankName} credit card dues legally with CredSettle. Stop recovery harassment & reduce debt under RBI rules.`;
  if (desc.length <= 150) return desc;

  const shortName = bankName.replace('Small Finance Bank', 'SFB');
  desc = `Settle ${shortName} credit card dues legally with CredSettle. Stop recovery harassment & reduce debt under RBI rules.`;
  if (desc.length <= 150) return desc;

  return `Settle ${shortName} card dues legally with CredSettle. Stop harassment & reduce debt.`.slice(0, 150);
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
