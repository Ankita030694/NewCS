import { Metadata } from 'next';
import SecuredVsUnsecuredClient from './SecuredVsUnsecuredClient';

export const metadata: Metadata = {
  title: 'Can I Settle a Secured Loan (Home/Car) in India? 2025 Guide',
  description: 'Understand the legal process, SARFAESI Act, and settlement percentages for secured loans vs unsecured loans in India. Learn how to negotiate home loan waivers.',
  keywords: 'secured loan settlement, home loan settlement, car loan settlement, SARFAESI act 2002, OTS home loan, secured vs unsecured debt recovery india',
  alternates: {
    canonical: 'https://www.credsettle.com/can-i-settle-a-secured-loan-like-a-home-loan-or-only-unsecured-ones',
  },
  openGraph: {
    title: 'Safe Path to Secured Loan Settlement in India | SARFAESI Guide',
    description: 'Protect your property and learn how to negotiate a One Time Settlement (OTS) for secured debts under Indian law.',
    url: 'https://www.credsettle.com/can-i-settle-a-secured-loan-like-a-home-loan-or-only-unsecured-ones',
    type: 'article',
  },
};

export default function page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Can I Settle a Secured Loan Like a Home Loan, or Only Unsecured Ones? A Comprehensive 2025 Guide",
    "description": "A detailed analysis of secured vs unsecured loan settlement in India, focusing on home loans, the SARFAESI Act, and negotiation strategies for 2025.",
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
    "datePublished": "2025-01-15",
    "dateModified": "2025-03-19",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.credsettle.com/can-i-settle-a-secured-loan-like-a-home-loan-or-only-unsecured-ones"
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
        "name": "Secured vs Unsecured Loan Settlement",
        "item": "https://www.credsettle.com/can-i-settle-a-secured-loan-like-a-home-loan-or-only-unsecured-ones"
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
      <SecuredVsUnsecuredClient />
    </>
  );
}
