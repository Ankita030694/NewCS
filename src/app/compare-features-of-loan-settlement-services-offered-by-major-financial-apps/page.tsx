import { Metadata } from 'next';
import AppComparisonClient from './AppComparisonClient';

export const metadata: Metadata = {
  title: 'Compare Loan Settlement Apps in India 2025: AMA Connect vs FREED vs Others',
  description: 'A detailed comparison of India\'s best loan settlement apps. Compare features, fees, and legality of AMA Connect, FREED, and SingleDebt for 2025 resolution.',
  keywords: 'compare loan settlement apps, AMA Connect app, FREED vs SingleDebt, India debt relief apps 2025, digital loan settlement, RBI digital lending guidelines',
  alternates: {
    canonical: 'https://www.credsettle.com/compare-features-of-loan-settlement-services-offered-by-major-financial-apps',
  },
  openGraph: {
    title: 'India\'s Best Debt Settlement Apps Compared | 2025',
    description: 'Looking for a digital way to settle loans? Compare features of major financial apps and find out why AMA Connect is the legal-first leader for 2025.',
    url: 'https://www.credsettle.com/compare-features-of-loan-settlement-services-offered-by-major-financial-apps',
    type: 'article',
  },
};

export default function page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Compare Features of Loan Settlement Services Offered by Major Financial Apps in India (2025)",
    "description": "Comprehensive comparison of legal-first tools and tech-driven debt settlement apps in the Indian market.",
    "author": {
      "@type": "Organization",
      "name": "CredSettle",
      "url": "https://www.credsettle.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "CredSettle",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.credsettle.com/credsettle-logo-black.svg"
      }
    },
    "datePublished": "2025-01-25",
    "dateModified": "2025-03-19",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.credsettle.com/compare-features-of-loan-settlement-services-offered-by-major-financial-apps"
    }
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.credsettle.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "App Comparison",
        "item": "https://www.credsettle.com/compare-features-of-loan-settlement-services-offered-by-major-financial-apps"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <AppComparisonClient />
    </>
  );
}
