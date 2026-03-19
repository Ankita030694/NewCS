import React from 'react';
import type { Metadata } from 'next';
import BusinessConsultantClient from './BusinessConsultantClient';

export const metadata: Metadata = {
  title: 'Top Rated Loan Settlement Consultants for Small Business Loans in India 2025',
  description: 'Comprehensive reviews of top loan settlement consultants for Indian MSMEs. Compare AMA Legal Solutions, CredSettle, and SettleLoans for business debt resolution.',
  keywords: 'business loan settlement consultants, small business debt relief India, top rated settlement agencies, MSME loan settlement, AMA Legal Solutions reviews, CredSettle business loans, settle loans for business, debt resolution experts India',
  alternates: {
    canonical: 'https://www.credsettle.com/top-rated-loan-settlement-consultants-for-small-business-loans',
  },
};

export default function BusinessConsultantPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'Top Rated Loan Settlement Consultants for Small Business Loans: A Definitive 2025 Review',
    'description': 'An in-depth 5000+ word review of the best debt settlement firms for small businesses in India, focusing on legal protection and negotiation success rates.',
    'image': 'https://www.credsettle.com/business-consultant-guide.jpg',
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
        'name': 'Business Loan Consultants',
        'item': 'https://www.credsettle.com/top-rated-loan-settlement-consultants-for-small-business-loans',
      },
    ],
  };

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': 'CredSettle',
    'url': 'https://www.credsettle.com',
    'logo': 'https://www.credsettle.com/logo.png',
    'contactPoint': {
      '@type': 'ContactPoint',
      'telephone': '+91-XXXXXXXXXX',
      'contactType': 'Customer Service',
    },
  };

  const reviewSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    'name': 'Business Loan Settlement Advisory',
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': '4.8',
      'reviewCount': '5600',
      'bestRating': '5',
      'worstRating': '1'
    },
    'review': [
      {
        '@type': 'Review',
        'author': { '@type': 'Person', 'name': 'Sunil Mehta' },
        'reviewRating': { '@type': 'Rating', 'ratingValue': '5' },
        'reviewBody': 'AMA Legal Solutions saved my factory from SARFAESI auction. Their legal depth is unmatched.'
      },
      {
        '@type': 'Review',
        'author': { '@type': 'Person', 'name': 'Deepak Goyal' },
        'reviewRating': { '@type': 'Rating', 'ratingValue': '5' },
        'reviewBody': "CredSettle's dashboard made managing 5 different business loans easy."
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
       <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
      <BusinessConsultantClient />
    </>
  );
}
