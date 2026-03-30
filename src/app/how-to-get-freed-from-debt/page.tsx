import { Metadata } from 'next';
import FreedAlternativePageClient from './FreedAlternativePageClient';

export const metadata: Metadata = {
  title: 'How to Get Freed from Debt | Legal Debt Settlement Guide',
  description: 'Looking to get freed from debt? Discover the legal way to settle loans and credit cards. Avoid harassment and regain financial freedom with CredSettle.',
  keywords: [
    'freed from debt',
    'how to get freed from loans',
    'debt settlement India',
    'loan settlement agency',
    'legal notice for loan default',
    'debt relief service reviews',
    'stop recovery agents'
  ],
  openGraph: {
    title: 'How to Get Freed from Debt Legally',
    description: 'Don’t let debt trap you. Learn how to legally settle your loans and get freed from financial stress.',
    type: 'article',
    url: 'https://credsettle.com/how-to-get-freed-from-debt',
    images: [
      {
        url: 'https://credsettle.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Get Freed from Debt'
      }
    ]
  },
  alternates: {
    canonical: 'https://credsettle.com/how-to-get-freed-from-debt'
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
      name: 'Resources',
      item: 'https://credsettle.com/resources'
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'How to Get Freed from Debt',
      item: 'https://credsettle.com/how-to-get-freed-from-debt'
    }
  ]
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How to Get Freed from Debt: The Legal Guide',
  description: 'A comprehensive guide on how to get freed from debt obligations illegally and safely in India.',
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
  dateModified: '2024-03-24',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://credsettle.com/how-to-get-freed-from-debt'
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
    reviewBody: 'I desperately wanted to be freed from my credit card dues. CredSettle helped me close it for 40% of the value.'
};

export default function FreedDebtPage() {
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
