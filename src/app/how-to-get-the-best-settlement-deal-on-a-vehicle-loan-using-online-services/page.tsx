import { Metadata } from 'next';
import VehicleSettlementClient from './VehicleSettlementClient';

export const metadata: Metadata = {
  title: 'How to Get the Best Vehicle Loan Settlement Deal Online 2025',
  description: 'Master the process of car and bike loan settlement in India for 2025. Learn about RBI repossession rules, penal interest waivers, and RTO de-hypothecation.',
  keywords: 'vehicle loan settlement online, car loan OTS India 2025, RBI vehicle repossession rules, settle car loan NBFC, car loan foreclosure charges 2025, vehicle de-hypothecation guide',
  alternates: {
    canonical: 'https://www.credsettle.com/how-to-get-the-best-settlement-deal-on-a-vehicle-loan-using-online-services',
  },
  openGraph: {
    title: 'Vehicle Loan Settlement Guide India | 2025 Online Strategy',
    description: 'Looking to settle your car or bike loan? Discover how to negotiate with NBFCs, understand new RBI 2025 guidelines, and protect your vehicle from repossession.',
    url: 'https://www.credsettle.com/how-to-get-the-best-settlement-deal-on-a-vehicle-loan-using-online-services',
    type: 'article',
  },
};

export default function page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "How to Get the Best Settlement Deal on a Vehicle Loan Using Online Services (2025)",
    "description": "Expert guide to navigating vehicle debt resolution in India, focusing on One-Time Settlements (OTS) and legal protection for 2025.",
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
      "@id": "https://www.credsettle.com/how-to-get-the-best-settlement-deal-on-a-vehicle-loan-using-online-services"
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
        "name": "Vehicle Loan Settlement",
        "item": "https://www.credsettle.com/how-to-get-the-best-settlement-deal-on-a-vehicle-loan-using-online-services"
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
      <VehicleSettlementClient />
    </>
  );
}
