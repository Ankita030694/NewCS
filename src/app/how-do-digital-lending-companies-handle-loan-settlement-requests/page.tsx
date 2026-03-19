import React from 'react';
import type { Metadata } from 'next';
import DigitalLendingClient from './DigitalLendingClient';

export const metadata: Metadata = {
  title: 'How Digital Lending Apps Handle Loan Settlement Requests in India 2025',
  description: 'Learn the official RBI 2025 process for digital loan settlements. Guidance on KFS, grievance redressal, and negotiation with fintech lenders.',
  keywords: 'digital lending settlement, fintech loan settlement India, RBI digital lending guidelines 2025, how to settle app loans, credit card app settlement, instant loan relief India',
  alternates: {
    canonical: 'https://www.credsettle.com/how-do-digital-lending-companies-handle-loan-settlement-requests',
  },
};

export default function DigitalLendingPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'How Do Digital Lending Companies Handle Loan Settlement Requests?',
    'description': 'A comprehensive 5000+ word guide on the internal processes, regulatory frameworks, and borrower rights for digital loan settlements in the Indian fintech ecosystem.',
    'image': 'https://www.credsettle.com/digital-lending-settlement.jpg',
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
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': '4.8',
      'reviewCount': '3400',
    },
    'review': [
      {
        '@type': 'Review',
        'author': { '@type': 'Person', 'name': 'Amit Verma' },
        'reviewRating': { '@type': 'Rating', 'ratingValue': '5' },
        'reviewBody': 'Settled my 50k app loan for 22k. Automated calls stopped in 4 days.'
      },
      {
        '@type': 'Review',
        'author': { '@type': 'Person', 'name': 'Priya S.' },
        'reviewRating': { '@type': 'Rating', 'ratingValue': '5' },
        'reviewBody': 'Professional help for fintech debt is real. Highly recommend CredSettle.'
      }
    ]
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
        'name': 'Digital Lending Settlements',
        'item': 'https://www.credsettle.com/how-do-digital-lending-companies-handle-loan-settlement-requests',
      },
    ],
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
      <DigitalLendingClient />
    </>
  );
}
