import { Metadata } from 'next';
import EffectiveNegotiationClient from './EffectiveNegotiationClient';

export const metadata: Metadata = {
  title: 'Effective Debt Settlement Negotiation Services in India 2025',
  description: 'Find the best debt settlement services known for effective negotiation in India. Learn expert techniques to settle loans for 40-75% less and stop harassment.',
  keywords: 'debt settlement negotiation India, best debt relief services 2025, SingleDebt reviews, FREED debt settlement, professional loan negotiators, RBI guidelines debt settlement',
  alternates: {
    canonical: 'https://www.credsettle.com/find-debt-settlement-services-known-for-effective-negotiation',
  },
  openGraph: {
    title: 'Expert Debt Negotiation Services India | 2025 Guide',
    description: 'Master the art of debt settlement. Review top services like SingleDebt and FREED, and learn how professional negotiators achieve massive debt waivers.',
    url: 'https://www.credsettle.com/find-debt-settlement-services-known-for-effective-negotiation',
    type: 'article',
  },
};

export default function page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Find the Best Debt Settlement Services Known for Effective Negotiation in India (2025)",
    "description": "Comprehensive guide to professional debt resolution in India, reviewing top negotiation services and expert settlement techniques.",
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
      "@id": "https://www.credsettle.com/find-debt-settlement-services-known-for-effective-negotiation"
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
        "name": "Effective Negotiation Services",
        "item": "https://www.credsettle.com/find-debt-settlement-services-known-for-effective-negotiation"
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
      <EffectiveNegotiationClient />
    </>
  );
}
