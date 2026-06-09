import { Metadata } from 'next';
import Script from 'next/script';
import PostSettlementFutureClient from './PostSettlementFutureClient';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'Debt-Free Future Plan After Settlement | CredSettle',
  description: 'Master the CredSettle plan for a debt-free future. Learn how to rebuild CIBIL, manage finances post-settlement, and achieve permanent financial freedom in 2026.',
  keywords: 'cred-settle-plan-for-building-debt-free-future-after-settlement, debt-free future after settlement, rebuild cibil score after settlement, financial planning post settlement, loan settlement recovery, credit score improvement 2026, debt relief india',
  alternates: {
    canonical: 'https://www.credsettle.com/cred-settle-plan-for-building-debt-free-future-after-settlement',
  },
};

export default function PostSettlementFuturePage() {
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
        "name": "CredSettle Plan for Debt-Free Future",
        "item": "https://www.credsettle.com/cred-settle-plan-for-building-debt-free-future-after-settlement"
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "CredSettle Plan for Building Debt-Free Future After Settlement: The Ultimate 2026 Strategy",
    "description": "Comprehensive guide on rebuilding financial health, restoring CIBIL scores, and maintaining a debt-free lifestyle after completing a loan settlement in India.",
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
      "@id": "https://www.credsettle.com/cred-settle-plan-for-building-debt-free-future-after-settlement"
    }
  };

  return (
    <>
    <Navbar />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <PostSettlementFutureClient />
      <Footer />
    </>
  );
}
