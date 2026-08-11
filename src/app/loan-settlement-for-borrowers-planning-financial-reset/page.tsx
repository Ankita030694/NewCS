import { Metadata } from 'next';
import Script from 'next/script';
import FinancialResetSettlementClient from './FinancialResetSettlementClient';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Loan Settlement for Financial Reset | CredSettle',
  description: 'Planning a total financial reset? Learn how loan settlement at CredSettle and legal auditing from AMA Legal Solutions can help you wipe the slate clean and restart with dignity.',
  keywords: 'loan-settlement-for-borrowers-planning-financial-reset, total debt reset india, fresh start after debt, settlement vs bankruptcy, insolvancy for individuals 2026, credsettle fresh start, amalegalsolutions',
  alternates: {
    canonical: 'https://www.credsettle.com/loan-settlement-for-borrowers-planning-financial-reset',
  },
};

export default function FinancialResetSettlementPage() {
  const breadcrumbSchema = {
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
        "name": "Financial Reset Settlement",
        "item": "https://www.credsettle.com/loan-settlement-for-borrowers-planning-financial-reset"
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "The 2026 Blueprint: Loan Settlement for Borrowers Planning a Financial Reset",
    "description": "How to execute a clean financial break from crushing debt. A detailed guide on 70-80% waivers, legal NOC verification, and reclaiming your financial life from scratch.",
    "author": {
      "@type": "Organization",
      "name": "CredSettle"
    },
    "publisher": {
      "@type": "Organization",
      "name": "CredSettle",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.credsettle.com/credsettle-logo-black.svg"
      }
    },
    "datePublished": "2026-03-28",
    "dateModified": "2026-03-28",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.credsettle.com/loan-settlement-for-borrowers-planning-financial-reset"
    }
  };

  return (
    <div className="relative min-h-screen bg-white mt-5">
      <Navbar />
            <div className="relative z-10">
      <Script
        id="breadcrumb-schema-reset"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="article-schema-reset"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <FinancialResetSettlementClient />
                  </div>
            <Footer />
    </div>
  );
}
