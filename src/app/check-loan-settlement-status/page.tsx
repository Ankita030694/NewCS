import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CheckLoanSettlementStatusClient from './CheckLoanSettlementStatusClient';

export const metadata: Metadata = {
  title: "How to Check Your Loan Settlement Status Online",
  description: "Learn how to verify your loan settlement status internally with the bank and through CIBIL tracking. Ensure you receive your NOC safely.",
  keywords: [
      "check loan settlement status online",
      "loan settlement status check CIBIL",
      "NOC after settlement tracking"
  ],
  alternates: {
    canonical: 'https://www.credsettle.com/check-loan-settlement-status',
  },
};

export default function CheckLoanSettlementStatusPage() {
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "How to Check Your Loan Settlement Status Online",
    "description": "Learn how to verify your loan settlement status internally with the bank and through CIBIL tracking. Ensure you receive your NOC safely.",
    "image": "https://www.credsettle.com/images/check-loan-settlement-status.jpg",
    "author": {
      "@type": "Organization",
      "name": "CredSettle"
    },
    "publisher": {
      "@type": "Organization",
      "name": "CredSettle",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.credsettle.com/logo.png"
      }
    },
    "datePublished": "2026-07-23",
    "dateModified": "2026-07-23"
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.credsettle.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Loan Settlement Status",
        "item": "https://www.credsettle.com/check-loan-settlement-status"
      }
    ]
  };

  const organizationLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "CredSettle",
    "url": "https://www.credsettle.com",
    "logo": "https://www.credsettle.com/logo.png",
    "sameAs": [
        "https://www.facebook.com/credsettle",
        "https://www.twitter.com/credsettle",
        "https://www.linkedin.com/company/credsettle"
    ]
  };

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <Script
        id="article-schema-status"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />
      <Script
        id="breadcrumb-schema-status"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <Script
        id="org-schema-status"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
      />
      <CheckLoanSettlementStatusClient />
      <Footer />
    </div>
  );
}
