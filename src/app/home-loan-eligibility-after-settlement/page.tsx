import { Metadata } from 'next';
import HomeLoanAfterSettlementClient from './HomeLoanAfterSettlementClient';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Home Loan Eligibility After Loan Settlement: Rebuild & Scale 2025',
  description: 'Can you get a home loan after a loan settlement? Learn how to improve your CIBIL score, the credit cleanup strategy, and which banks provide home loans post-settlement.',
  keywords: 'home loan eligibility after settlement, CIBIL score after loan settlement, get home loan with settled status, credit cleanup strategy, SBI home loan after settlement',
  alternates: {
    canonical: 'https://www.credsettle.com/home-loan-eligibility-after-settlement',
  },
};

export default function HomeLoanAfterSettlementPage() {
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
        'name': 'Home Loan Eligibility After Settlement',
        'item': 'https://www.credsettle.com/home-loan-eligibility-after-settlement',
      },
    ],
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'Home Loan Eligibility After Loan Settlement: A Step-by-Step Recovery Guide',
    'description': 'An authoritative guide for borrowers looking to secure a home loan in India after having a "Settled" status on their credit report.',
    'image': 'https://www.credsettle.com/images/home-loan-after-settlement.jpg',
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
    'datePublished': '2025-02-10',
    'dateModified': '2026-03-27',
  };

  return (
    <>
    <Navbar/>
      <Script
        id="breadcrumb-schema-hl"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="article-schema-hl"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <HomeLoanAfterSettlementClient />
      <Footer/>
    </>
  );
}
