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

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const bank = creditCardBanks.find((b) => b.slug === slug);
  
  if (!bank) {
    return {
      title: "Credit Card Settlement | CredSettle",
      description: "Expert legal assistance for credit card settlement.",
    };
  }

  const metaTitle = `${bank.name} Credit Card Settlement | CredSettle`;
  const metaDescription = `Settle ${bank.name} credit card dues legally with CredSettle. Stop recovery agent harassment, reduce debt & get NOC closure. Free consultation.`;

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
        noimageindex: false,
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
