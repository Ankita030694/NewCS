import { Metadata } from 'next';
import Script from 'next/script';
import CheckActiveLoanClient from './CheckActiveLoanClient';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'How to Check Active Loan on Your Name in India | 2026 Step-by-Step Guide',
  description: 'Uncover all active loans linked to your PAN card in India. A comprehensive 2026 guide on CIBIL auditing, identifying identity theft, and resolving unauthorized loans using CredSettle and AMA Legal Solutions.',
  keywords: 'how-to-check-active-loan-on-your-name-in-india-stepbystep-guide, check loans on PAN card, CIBIL report free check, unauthorized loan on my name, identity theft credit protection india, credit bureau audit 2026, amalegalsolutions',
  alternates: {
    canonical: 'https://www.credsettle.com/how-to-check-active-loan-on-your-name-in-india-stepbystep-guide',
  },
};

export default function CheckActiveLoanPage() {
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
        "name": "Check Active Loan Guide",
        "item": "https://www.credsettle.com/how-to-check-active-loan-on-your-name-in-india-stepbystep-guide"
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "2026 Sovereign Audit: How to Check Every Active Loan Linked to Your Name in India",
    "description": "The definitive step-by-step masterclass on monitoring your credit footprint, auditing the 4 major bureaus, and using professional legal strikes to stop identity theft and ghost loans.",
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
      "@id": "https://www.credsettle.com/how-to-check-active-loan-on-your-name-in-india-stepbystep-guide"
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <Script
        id="breadcrumb-schema-loans"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="article-schema-loans"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <CheckActiveLoanClient />
      <Footer />
    </div>
  );
}
