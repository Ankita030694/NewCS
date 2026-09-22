import type { Metadata } from "next";
import Script from "next/script";
import NBFCLoanSettlementPageClient from "./NBFCLoanSettlementPageClient";

export const metadata: Metadata = {
  title: "NBFC Loan Settlement | Close Debt Legally | CredSettle",
  description: "Expert NBFC loan settlement services in India. Navigate complex NBFC policies, stop harassment, and secure RBI-compliant OTS with legal protection.",
  alternates: {
    canonical: "https://www.credsettle.com/services/nbfc-loan-settlement",
  },
  openGraph: {
    title: "NBFC Loan Settlement | Close Debt Legally | CredSettle",
    description: "Expert NBFC loan settlement services. Stop harassment & settle legally.",
    url: "https://www.credsettle.com/services/nbfc-loan-settlement",
    type: "website",
    images: [{ url: "/nbfc_hero.png" }],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function NBFCLoanSettlementPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    "name": "NBFC Loan Settlement Services",
    "description": "Expert NBFC loan settlement services. Navigate complex NBFC policies, stop harassment, and secure RBI-compliant OTS with legal protection.",
    "url": "https://www.credsettle.com/services/nbfc-loan-settlement",
    "provider": {
      "@type": "Organization",
      "name": "CredSettle",
      "url": "https://www.credsettle.com"
    },
    "author": {
      "@type": "Person",
      "name": "Ashish Jhangra",
      "jobTitle": "Legal & Debt Resolution Professional",
      "url": "https://www.credsettle.com/author/ashish-jhangra",
      "sameAs": [
        "https://www.linkedin.com/in/ashish-jhangra-ab1a54127/"
      ],
      "worksFor": {
        "@type": "Organization",
        "name": "CredSettle",
        "url": "https://www.credsettle.com"
      }
    }
  };

  return (
    <>
      <Script
        id="nbfc-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <NBFCLoanSettlementPageClient />
    </>
  );
}
