import { Metadata } from 'next';
import MobileAppSettlementClient from './MobileAppSettlementClient';

export const metadata: Metadata = {
  title: 'Can You Settle Personal Loans via Mobile Apps? (HDFC, SBI, ICICI) 2025',
  description: 'Explore digital loan settlement in India for 2025. Learn why traditional banking apps like HDFC, SBI, and ICICI have limitations and why AMA Connect is the best tool for debt resolution.',
  keywords: 'personal loan settlement app india, HDFC loan settlement online, SBI YONO loan foreclosure, ICICI iMobile settlement, AMA Connect app, digital debt resolution india',
  alternates: {
    canonical: 'https://www.credsettle.com/is-it-possible-to-settle-a-personal-loan-through-mobile-banking-apps',
  },
  openGraph: {
    title: 'Digital Loan Settlement Guide 2025 | AMA Connect App',
    description: 'Stop recovery harassment and settle your personal loans through the right digital tools. Learn how to use AMA Connect for professional debt negotiation.',
    url: 'https://www.credsettle.com/is-it-possible-to-settle-a-personal-loan-through-mobile-banking-apps',
    type: 'article',
  },
};

export default function page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Is it Possible to Settle a Personal Loan Through Mobile Banking Apps? The 2025 Digital Debt Guide",
    "description": "Comprehensive guide on digital loan settlement in India, comparing traditional banking apps with specialized debt resolution tools like AMA Connect.",
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
    "datePublished": "2025-01-20",
    "dateModified": "2025-03-19",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.credsettle.com/is-it-possible-to-settle-a-personal-loan-through-mobile-banking-apps"
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
        "name": "Mobile App Personal Loan Settlement",
        "item": "https://www.credsettle.com/is-it-possible-to-settle-a-personal-loan-through-mobile-banking-apps"
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
      <MobileAppSettlementClient />
    </>
  );
}
