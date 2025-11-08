import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources - CredSettle | Debt Settlement Guides, Articles & Legal Information",
  description: "Access free resources on loan settlement, debt resolution, RBI guidelines, and legal information. Expert guides, articles, and FAQs to help you understand debt settlement in India.",
  keywords: [
    "loan settlement guides",
    "debt settlement articles",
    "RBI guidelines",
    "loan settlement information",
    "debt resolution resources",
    "loan settlement FAQs",
    "debt settlement legal information"
  ],
  openGraph: {
    title: "Resources - CredSettle | Debt Settlement Guides, Articles & Legal Information",
    description: "Access free resources on loan settlement, debt resolution, RBI guidelines, and legal information. Expert guides and articles.",
    url: "https://www.credsettle.com/resources",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Resources - CredSettle | Debt Settlement Guides, Articles & Legal Information",
    description: "Access free resources on loan settlement, debt resolution, RBI guidelines, and legal information.",
  },
  alternates: {
    canonical: "https://www.credsettle.com/resources",
  },
};

export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}





