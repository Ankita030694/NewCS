import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - CredSettle | India's Leader in Dignified Debt Resolution",
  description: "Learn about CredSettle - India's leading legal loan settlement company. We specialize in RBI-compliant debt resolution, stopping harassment, and helping clients achieve financial freedom through ethical settlements.",
  keywords: [
    "about CredSettle",
    "loan settlement company India",
    "debt resolution company",
    "RBI compliant settlement",
    "debt settlement services",
    "loan settlement company"
  ],
  openGraph: {
    title: "About Us - CredSettle | India's Leader in Dignified Debt Resolution",
    description: "Learn about CredSettle - India's leading legal loan settlement company. We specialize in RBI-compliant debt resolution and helping clients achieve financial freedom.",
    url: "https://www.credsettle.com/about",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us - CredSettle | India's Leader in Dignified Debt Resolution",
    description: "Learn about CredSettle - India's leading legal loan settlement company. We specialize in RBI-compliant debt resolution.",
  },
  alternates: {
    canonical: "https://www.credsettle.com/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}


