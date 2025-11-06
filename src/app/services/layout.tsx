import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services - CredSettle | Loan Settlement Services for All Debt Types",
  description: "Get comprehensive loan settlement services from CredSettle. Settle credit cards, personal loans, business loans, car loans, app loans & NBFC loans. RBI-compliant settlements with harassment protection.",
  keywords: [
    "loan settlement services",
    "debt settlement services",
    "credit card settlement",
    "personal loan settlement",
    "business loan settlement",
    "car loan settlement",
    "app loan settlement",
    "NBFC loan settlement",
    "loan settlement company"
  ],
  openGraph: {
    title: "Services - CredSettle | Loan Settlement Services for All Debt Types",
    description: "Get comprehensive loan settlement services from CredSettle. Settle credit cards, personal loans, business loans & more. RBI-compliant settlements.",
    url: "https://www.credsettle.com/services",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Services - CredSettle | Loan Settlement Services for All Debt Types",
    description: "Get comprehensive loan settlement services from CredSettle. Settle credit cards, personal loans, business loans & more.",
  },
  alternates: {
    canonical: "https://www.credsettle.com/services",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}


