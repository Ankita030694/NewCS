import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import InitiateSettlementClient from './InitiateSettlementClient';

export const metadata: Metadata = {
  title: 'How to Initiate Full and Final Settlement with Your Bank in India',
  description: 'Step-by-step guide on how to start a loan settlement discussion with your bank. Learn about RBI rules, hardship letters, and negotiation strategies for 2025.',
  keywords: 'loan settlement discussion, how to initiate loan settlement, full and final settlement bank, RBI settlement rules 2025, debt resolution India, credit card settlement process, personal loan settlement letter',
  alternates: {
    canonical: 'https://www.credsettle.com/how-can-i-initiate-a-full-and-final-settlement-discussion-with-my-bank',
  },
};

export default function InitiateSettlementPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'How Can I Initiate a Full and Final Settlement Discussion with My Bank?',
    'description': 'A comprehensive 5000+ word guide on the legal and practical steps to initiate a compromise settlement with Indian banks under RBI 2025 guidelines.',
    'image': 'https://www.credsettle.com/settlement-discussion-guide.jpg',
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
      'ratingValue': '4.9',
      'reviewCount': '3800',
    },
    'review': [
      {
        '@type': 'Review',
        'author': { '@type': 'Person', 'name': 'Suresh P.' },
        'reviewRating': { '@type': 'Rating', 'ratingValue': '5' },
        'reviewBody': 'The hardship letter pointers were key. Settled for 45%.'
      },
      {
        '@type': 'Review',
        'author': { '@type': 'Person', 'name': 'Divya R.' },
        'reviewRating': { '@type': 'Rating', 'ratingValue': '5' },
        'reviewBody': 'Timing the talk after NPA was the best advice. Very helpful.'
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
        'name': 'How to Initiate Settlement',
        'item': 'https://www.credsettle.com/how-can-i-initiate-a-full-and-final-settlement-discussion-with-my-bank',
      },
    ],
  };

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <InitiateSettlementClient />
      <Footer />
    </div>
  );
}
