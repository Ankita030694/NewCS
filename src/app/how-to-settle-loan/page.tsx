import { Metadata } from 'next';
import SettleLoanPageClient from './SettleLoanPageClient';

export const metadata: Metadata = {
  title: 'How to Settle Loan Online | Best Loan Settlement Services India',
  description: 'Learn how to settle loan accounts legally. Avoid harassment, reduce debt by up to 50%, and get legal protection. Expert guide to loan settlement.',
  keywords: [
    'how to settle loan',
    'settle loan online',
    'loan settlement process',
    'debt settlement services',
    'settle personal loan',
    'credit card settlement India',
    'stop recovery harassment',
    'legal notice reply'
  ],
  openGraph: {
    title: 'How to Settle Loan Legally in India',
    description: 'Don’t panic. Learn the step-by-step process to settle your loan and become debt-free legally.',
    type: 'article',
    url: 'https://www.credsettle.com/how-to-settle-loan',
    images: [
      {
        url: 'https://www.credsettle.com/og-image-settle.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Settle Loan'
      }
    ]
  },
  alternates: {
    canonical: 'https://www.credsettle.com/how-to-settle-loan'
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
      item: 'https://www.credsettle.com'
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Resources',
      item: 'https://www.credsettle.com/resources'
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'How to Settle Loan',
      item: 'https://www.credsettle.com/how-to-settle-loan'
    }
  ]
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How to Settle Loan in India: A Comprehensive Guide',
  description: 'Complete guide on how to settle personal loans and credit card debts legally in India.',
  author: {
    '@type': 'Organization',
    name: 'CredSettle'
  },
  publisher: {
    '@type': 'Organization',
    name: 'CredSettle',
    logo: {
      '@type': 'ImageObject',
      url: 'https://www.credsettle.com/credsettle-logo.svg'
    }
  },
  datePublished: '2024-03-24',
  dateModified: '2024-03-24',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.credsettle.com/how-to-settle-loan'
  }
};

const reviewSchema = {
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: {
        '@type': 'Organization',
        name: 'CredSettle',
        image: 'https://www.credsettle.com/credsettle-logo.svg',
        telephone: '+91-8800226635',
        address: {
             '@type': 'PostalAddress',
             addressCountry: 'IN'
        }
    },
    reviewRating: {
        '@type': 'Rating',
        ratingValue: '4.8',
        bestRating: '5'
    },
    author: {
        '@type': 'Person',
        name: 'Amit S.'
    },
    reviewBody: 'I was actively searching for how to settle loan without harassment. CredSettle handled everything professionally.'
};

export default function SettleLoanPage() {
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
      <SettleLoanPageClient />
    </>
  );
}
