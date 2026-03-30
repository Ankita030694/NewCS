import { Metadata } from 'next';
import LegalNoticeHarassmentClient from './LegalNoticeHarassmentClient';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Legal Notice for Loan Settlement Harassment: Expert Guide 2025',
  description: 'Facing harassment from loan recovery agents? Learn how to send a legal notice for loan settlement harassment, your rights under RBI, and how to claim damages.',
  keywords: 'legal notice for loan settlement harassment, RBI recovery guidelines, debt collection harassment India, stop recovery agent calls, loan settlement legal help',
  alternates: {
    canonical: 'https://www.credsettle.com/legal-notice-for-loan-settlement-harassment',
  },
};

export default function LegalNoticeHarassmentPage() {
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
        'name': 'Legal Notice for Loan Settlement Harassment',
        'item': 'https://www.credsettle.com/legal-notice-for-loan-settlement-harassment',
      },
    ],
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'Legal Notice for Loan Settlement Harassment: How to Stop Recovery Abuse in 2025',
    'description': 'A comprehensive guide on sending a legal notice to banks and recovery agents to stop illegal harassment and initiate a fair loan settlement.',
    'image': 'https://www.credsettle.com/images/legal-notice-harassment.jpg',
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
    'datePublished': '2025-01-15',
    'dateModified': '2026-03-27',
  };

  return (
    <>
      <Navbar />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <LegalNoticeHarassmentClient />
      <Footer />
    </>
  );
}
