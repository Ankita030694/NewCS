import { Metadata } from 'next';
import ChennaiCounselingClient from './ChennaiCounselingClient';

export const metadata: Metadata = {
  title: 'Government-Approved Consumer Credit Counseling in Chennai 2025',
  description: 'Locate RBI-recognized and government-approved consumer credit counseling services in Chennai. Find free help from Disha Trust, Indian Bank FLCC, and more.',
  keywords: 'credit counseling Chennai, RBI recognized debt counseling, Disha Trust Chennai, Indian Bank FLCC, government debt relief Chennai, free credit counseling India',
  alternates: {
    canonical: 'https://www.credsettle.com/where-can-i-locate-government-approved-consumer-credit-counseling-services-in-chennai',
  },
  openGraph: {
    title: 'RBI-Approved Credit Counseling Centers in Chennai | 2025 Guide',
    description: 'Struggling with debt in Chennai? Find verified, free counseling centers recognized by the RBI to help you manage loans and stop harassment.',
    url: 'https://www.credsettle.com/where-can-i-locate-government-approved-consumer-credit-counseling-services-in-chennai',
    type: 'article',
  },
};

export default function page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Where Can I Locate Government-Approved Consumer Credit Counseling Services in Chennai? (2025)",
    "description": "A comprehensive directory and guide to RBI-recognized financial literacy and debt counseling centers in Chennai, Tamil Nadu.",
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
      "@id": "https://www.credsettle.com/where-can-i-locate-government-approved-consumer-credit-counseling-services-in-chennai"
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
        "name": "Chennai Credit Counseling",
        "item": "https://www.credsettle.com/where-can-i-locate-government-approved-consumer-credit-counseling-services-in-chennai"
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
      <ChennaiCounselingClient />
    </>
  );
}
