import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FederalCardSettlementPctClient from './FederalCardSettlementPctClient';

export const metadata: Metadata = {
  title: 'Federal Bank Credit Card Settlement Percentage | CredSettle',
  description:
    'Check realistic Federal Bank credit card settlement percentage ranges for Celesta, Imperio, Signet & Scapia cards, RBI OTS rules, and caveats.',
  keywords: [
    'federal bank credit card settlement percentage',
    'scapia federal credit card settlement',
    'onecard federal bank settlement percentage',
    'federal bank credit card ots discount',
    'federal bank credit card npa settlement',
  ],
  alternates: {
    canonical: 'https://www.credsettle.com/federal-bank-credit-card-settlement-percentage',
  },
  openGraph: {
    title: 'Federal Bank Credit Card Settlement Percentage | CredSettle',
    description:
      'Check realistic Federal Bank credit card settlement percentage ranges for Celesta, Imperio, Signet & Scapia cards, RBI OTS rules, and caveats.',
    type: 'article',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://www.credsettle.com/federal-bank-credit-card-settlement-percentage',
    images: [
      {
        url: 'https://www.credsettle.com/credsettle-logo-black.png',
        width: 1200,
        height: 630,
        alt: 'Federal Bank Credit Card Settlement Percentage Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Federal Bank Credit Card Settlement Percentage | CredSettle',
    description:
      'Check realistic Federal Bank credit card settlement percentage ranges for Celesta, Imperio, Signet & Scapia cards, RBI OTS rules, and caveats.',
    images: ['https://www.credsettle.com/credsettle-logo-black.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function FederalBankCardSettlementPercentagePage() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id':
          'https://www.credsettle.com/federal-bank-credit-card-settlement-percentage#article',
        headline: 'Federal Bank Credit Card Settlement Percentage Ranges, Co-Brand Rules & Caveats',
        description:
          'Check realistic Federal Bank credit card settlement percentage ranges for Celesta, Imperio, Signet & Scapia cards, RBI OTS rules, and caveats.',
        inLanguage: 'en-IN',
        mainEntityOfPage:
          'https://www.credsettle.com/federal-bank-credit-card-settlement-percentage',
        datePublished: '2026-11-11T10:00:00+05:30',
        dateModified: '2026-11-11T10:00:00+05:30',
        author: {
          '@type': 'Person',
          name: 'Ashish Jhangra',
          url: 'https://www.credsettle.com/author/ashish-jhangra',
        },
        publisher: {
          '@type': 'Organization',
          name: 'CredSettle',
          logo: {
            '@type': 'ImageObject',
            url: 'https://www.credsettle.com/credsettle-logo-black.png',
          },
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id':
          'https://www.credsettle.com/federal-bank-credit-card-settlement-percentage#breadcrumb',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://www.credsettle.com/',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Federal Bank Loan Settlement',
            item: 'https://www.credsettle.com/loan-settlement/federal-bank',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Federal Bank Credit Card Settlement %',
            item: 'https://www.credsettle.com/federal-bank-credit-card-settlement-percentage',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://www.credsettle.com/federal-bank-credit-card-settlement-percentage#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What is the typical Federal Bank credit card settlement percentage in India?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'On unsecured NPA cards past 90 to 180 days late, past Federal Bank settlements often land between 40% and 65% of the total statement bill. Final numbers depend on core principal vs fees and are never assured.',
            },
          },
          {
            '@type': 'Question',
            name: 'Who approves settlement on Scapia or OneCard issued with Federal Bank?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Federal Bank Limited is the licensed bank lender on your CIBIL report for co-branded Scapia, OneCard, and Jupiter Edge cards. Your official OTS letter and No Dues Certificate must reflect Federal Bank approval.',
            },
          },
          {
            '@type': 'Question',
            name: 'Why does Federal Bank waive fees faster than core swipe principal?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Up to 45% APR interest, late fees, and 18% GST inflate an overdue card bill fast. Bank credit teams can waive accrued interest and penal charges far more easily than your original purchase principal.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can Federal Bank hold funds in my FedMobile or Fi savings account during default?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Because Federal Bank issues the card directly, Section 171 of the Contract Act lets the bank place a banker lien or set-off hold on linked Federal Bank savings accounts.',
            },
          },
          {
            '@type': 'Question',
            name: 'Does single lump-sum payment improve Federal Bank OTS terms over 3 instalments?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. One-shot payment inside the same calendar month usually secures a 5% to 12% lower payable sum than a 3-month split plan.',
            },
          },
          {
            '@type': 'Question',
            name: 'How is CIBIL updated after paying a Federal Bank credit card OTS?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Once you pay all tranches on time, Federal Bank updates your card balance to zero and marks the CIBIL trade line as Settled.',
            },
          },
        ],
      },
    ],
  };

  return (
    <div className="relative min-h-screen bg-white">
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <FederalCardSettlementPctClient />
      <Footer hideFunnel />
    </div>
  );
}
