import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import UnionBankCardSettlementPctClient from './UnionBankCardSettlementPctClient';

export const metadata: Metadata = {
  title: 'Union Bank Credit Card Settlement Percentage | CredSettle',
  description:
    'Understand realistic Union Bank of India credit card settlement percentage ranges for RuPay & Visa cards, PSU NPA rules, and RBI OTS caveats.',
  keywords: [
    'union bank credit card settlement percentage',
    'union bank of india credit card ots',
    'union bank rupay credit card settlement',
    'union vyom credit card default settlement',
    'union bank credit card npa waiver',
  ],
  alternates: {
    canonical: 'https://www.credsettle.com/union-bank-credit-card-settlement-percentage',
  },
  openGraph: {
    title: 'Union Bank Credit Card Settlement Percentage | CredSettle',
    description:
      'Understand realistic Union Bank of India credit card settlement percentage ranges for RuPay & Visa cards, PSU NPA rules, and RBI OTS caveats.',
    type: 'article',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://www.credsettle.com/union-bank-credit-card-settlement-percentage',
    images: [
      {
        url: 'https://www.credsettle.com/credsettle-logo-black.png',
        width: 1200,
        height: 630,
        alt: 'Union Bank of India Credit Card Settlement Percentage Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Union Bank Credit Card Settlement Percentage | CredSettle',
    description:
      'Understand realistic Union Bank of India credit card settlement percentage ranges for RuPay & Visa cards, PSU NPA rules, and RBI OTS caveats.',
    images: ['https://www.credsettle.com/credsettle-logo-black.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function UnionBankCardSettlementPercentagePage() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id':
          'https://www.credsettle.com/union-bank-credit-card-settlement-percentage#article',
        headline: 'Union Bank of India Credit Card Settlement Percentage Ranges & PSU OTS Rules',
        description:
          'Understand realistic Union Bank of India credit card settlement percentage ranges for RuPay & Visa cards, PSU NPA rules, and RBI OTS caveats.',
        inLanguage: 'en-IN',
        mainEntityOfPage:
          'https://www.credsettle.com/union-bank-credit-card-settlement-percentage',
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
          'https://www.credsettle.com/union-bank-credit-card-settlement-percentage#breadcrumb',
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
            name: 'Union Bank Settlement',
            item: 'https://www.credsettle.com/loan-settlement/union-bank',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Union Bank Credit Card Settlement %',
            item: 'https://www.credsettle.com/union-bank-credit-card-settlement-percentage',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://www.credsettle.com/union-bank-credit-card-settlement-percentage#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What is the indicative Union Bank of India credit card settlement percentage?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'On unsecured NPA Union Bank cards past 90 to 180+ days late, past OTS deals often land at 45% to 70% of the full bill. PSU sign-off depends on NPA age and core spend ratio, and is never assured.',
            },
          },
          {
            '@type': 'Question',
            name: 'Are Union Bank credit cards issued by a separate subsidiary or the bank itself?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Union Bank of India issues its RuPay, Visa, and JCB cards straight from its own Card & Digital Wing (seen inside the Vyom app).',
            },
          },
          {
            '@type': 'Question',
            name: 'Can Union Bank recover overdue card bills from my Union Bank savings account?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Because Union Bank issues the card itself, Section 171 of the Contract Act lets the bank place a lien or pull cash from linked Union Bank accounts.',
            },
          },
          {
            '@type': 'Question',
            name: 'How does Union Bank card settlement differ from agricultural or MSME OTS schemes?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Fixed PSU OTS schemes cover set shop or farm loans. Unsecured credit cards go through case-by-case review aimed at getting back core spend while cutting fee bloat.',
            },
          },
          {
            '@type': 'Question',
            name: 'Are FD-backed Union Bank credit cards eligible for OTS haircuts?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. When a Union Bank card sits against a fixed deposit lien, late dues clear straight from that pledged FD.',
            },
          },
          {
            '@type': 'Question',
            name: 'How do I close a Union Bank credit card cleanly after OTS approval?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Get a signed OTS letter with a bank code, pay straight into your 16-digit Union Bank card before the due date, and collect your No Dues Certificate in 30 to 45 days.',
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
      <UnionBankCardSettlementPctClient />
      <Footer hideFunnel />
    </div>
  );
}
