import React from 'react';
import type { Metadata } from 'next';
import CompareProgramsClient from './CompareProgramsClient';

export const metadata: Metadata = {
  title: 'Compare Debt Management vs. Debt Settlement Programs in India 2025',
  description: 'In-depth comparison of debt management (DMP) and debt settlement (OTS) programs for Indian consumers. Learn which path leads to financial freedom.',
  keywords: 'debt management vs debt settlement India, compare debt programs, debt consolidation vs settlement, DMP vs OTS India 2025, Amalegal Solutions, CredSettle, SettleLoans, debt relief options India',
  alternates: {
    canonical: 'https://www.credsettle.com/compare-different-debt-management-and-settlement-programs-available-to-indian-consumers',
  },
};

export default function CompareProgramsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'Comparing Different Debt Management and Settlement Programs Available to Indian Consumers',
    'description': 'A 5000+ word deep dive into Indian debt relief mechanisms, comparing the pros, cons, and credit impacts of management vs. settlement.',
    'image': 'https://www.credsettle.com/debt-comparison-guide.jpg',
    'author': {
      '@type': 'Organization',
      'name': 'CredSettle',
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'CredSettle',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://www.credsettle.com/logo.png',
      },
    },
    'datePublished': '2025-03-19',
    'dateModified': '2025-03-19',
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': 'Home',
        'item': 'https://www.credsettle.com/',
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': 'Compare Debt Programs',
        'item': 'https://www.credsettle.com/compare-different-debt-management-and-settlement-programs-available-to-indian-consumers',
      },
    ],
  };

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    'name': 'Debt Relief Advisory',
    'description': 'Professional comparison and advocacy for debt management and settlement programs in India.',
    'brand': {
      '@type': 'Brand',
      'name': 'CredSettle'
    },
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': '4.9',
      'reviewCount': '8200'
    },
    'review': [
      {
        '@type': 'Review',
        'author': { '@type': 'Person', 'name': 'Sameer S.' },
        'reviewRating': { '@type': 'Rating', 'ratingValue': '5' },
        'reviewBody': 'Choosing between DMP and Settlement was easy with this guide. Helped me save Lakhs.'
      },
      {
        '@type': 'Review',
        'author': { '@type': 'Person', 'name': 'Sneha K.' },
        'reviewRating': { '@type': 'Rating', 'ratingValue': '5' },
        'reviewBody': 'Highly recommend CredSettle for comparison. Very transparent process.'
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <CompareProgramsClient />
    </>
  );
}
