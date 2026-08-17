import type { Metadata } from "next";
import Script from "next/script";
import Settle15LakhClient from "./Settle15LakhClient";

// SEO Metadata
export const metadata: Metadata = {
  title: "How to Settle a ₹15 Lakh Personal Loan in India",
  description:
    "Defaulting on a ₹15 Lakh personal loan? Discover how much discount you can get, the negotiation timeline, and the legal steps required to settle it.",
  alternates: {
    canonical: "https://www.credsettle.com/settle-15-lakh-personal-loan/",
  },
  openGraph: {
    title: "How to Settle a ₹15 Lakh Personal Loan in India",
    description:
      "Defaulting on a ₹15 Lakh personal loan? Discover how much discount you can get, the negotiation timeline, and the legal steps required to settle it.",
    url: "https://www.credsettle.com/settle-15-lakh-personal-loan/",
    type: "article",
    siteName: "CredSettle",
  },
};

export default function Settle15LakhPage() {
  // JSON-LD Schemas
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.credsettle.com",
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Personal Loan Settlement",
        "item": "https://www.credsettle.com/personal-loan-settlement/",
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Settle ₹15 Lakh Personal Loan",
        "item": "https://www.credsettle.com/settle-15-lakh-personal-loan/",
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "How to Settle a ₹15 Lakh Personal Loan in India",
    "description":
      "Defaulting on a ₹15 Lakh personal loan? Discover how much discount you can get, the negotiation timeline, and the legal steps required to settle it.",
    "author": {
      "@type": "Person",
      "name": "Ashish Sharma",
      "url": "https://www.credsettle.com/authors/ashish",
    },
    "publisher": {
      "@type": "Organization",
      "name": "CredSettle",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.credsettle.com/logo.png",
      },
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.credsettle.com/settle-15-lakh-personal-loan/",
    },
  };

  return (
    <>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        strategy="beforeInteractive"
      />
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        strategy="beforeInteractive"
      />
      <Settle15LakhClient />
    </>
  );
}
