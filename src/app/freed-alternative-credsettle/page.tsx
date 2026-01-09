import { Metadata } from 'next';
import FreedAlternativePageClient from './FreedAlternativePageClient';

export const metadata: Metadata = {
  title: 'CredSettle vs Freed | Best Debt Settlement Alternative in India',
  description: 'Looking for an alternative to Freed? CredSettle offers legal-backed loan settlement with direct bank negotiations. Compare features, costs, and success rates.',
  keywords: [
    'Freed alternative',
    'CredSettle vs Freed',
    'apps like Freed',
    'companies like Freed',
    'Freed reviews',
    'Freed complaints',
    'debt settlement India',
    'loan settlement agency',
    'legal notice for loan default',
    'Freed success rate',
    'debt relief services'
  ],
  openGraph: {
    title: 'CredSettle vs Freed | Best Debt Settlement Alternative',
    description: 'Don\'t just rely on an app. Get legal protection with CredSettle. Compare the top debt settlement options in India.',
    type: 'article',
    url: 'https://credsettle.com/freed-alternative-credsettle',
    images: [
      {
        url: 'https://credsettle.com/og-image.jpg', // Placeholder or generic OG image
        width: 1200,
        height: 630,
        alt: 'CredSettle vs Freed'
      }
    ]
  },
  alternates: {
    canonical: 'https://credsettle.com/freed-alternative-credsettle'
  }
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://credsettle.com'
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Alternatives',
      item: 'https://credsettle.com/freed-alternative-credsettle'
    }
  ]
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'CredSettle vs Freed: The Complete Comparison Guide',
  description: 'A detailed comparison between CredSettle and Freed for debt settlement in India. Understand why legal intervention matters.',
  author: {
    '@type': 'Organization',
    name: 'CredSettle'
  },
  publisher: {
    '@type': 'Organization',
    name: 'CredSettle',
    logo: {
      '@type': 'ImageObject',
      url: 'https://credsettle.com/credsettle-logo.svg'
    }
  },
  datePublished: '2024-03-20',
  dateModified: '2024-03-20',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://credsettle.com/freed-alternative-credsettle'
  }
};

const reviewSchema = {
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: {
        '@type': 'Organization',
        name: 'CredSettle',
        image: 'https://credsettle.com/credsettle-logo.svg',
        telephone: '+91-9289707648',
        address: {
             '@type': 'PostalAddress',
             addressCountry: 'IN'
        }
    },
    reviewRating: {
        '@type': 'Rating',
        ratingValue: '4.9',
        bestRating: '5'
    },
    author: {
        '@type': 'Person',
        name: 'Rajesh K.'
    },
    reviewBody: 'I was using another app for 6 months and nothing happened. I switched to CredSettle, and their lawyer spoke to the SBI manager directly. Cleared my 8 Lakh card debt for 3.5 Lakhs in just 45 days.'
};

export default function FreedAlternativePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
       <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
      <FreedAlternativePageClient />
    </>
  );
}
