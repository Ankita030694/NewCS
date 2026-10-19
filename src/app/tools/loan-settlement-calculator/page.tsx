import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import LoanSettlementCalculatorClient from './LoanSettlementCalculatorClient';

export const metadata: Metadata = {
  title: 'Loan Settlement Calculator: Estimate Payout | CredSettle',
  description:
    'Calculate your estimated loan settlement payout, hypothetical bank haircut, and potential savings using CredSettle free loan settlement calculator in India.',
  keywords: [
    'loan settlement calculator',
    'personal loan settlement calculator',
    'bank loan settlement percentage',
    'debt settlement calculator india',
    'credit card settlement calculator',
    'one time settlement ots calculator',
    'credsettle tools',
  ],
  alternates: {
    canonical: 'https://www.credsettle.com/tools/loan-settlement-calculator',
  },
  openGraph: {
    title: 'Loan Settlement Calculator: Estimate Payout | CredSettle',
    description:
      'Calculate your estimated loan settlement payout, hypothetical bank haircut, and potential savings using CredSettle free loan settlement calculator in India.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://www.credsettle.com/tools/loan-settlement-calculator',
    images: [
      {
        url: 'https://www.credsettle.com/credsettle-logo-black.png',
        width: 1200,
        height: 630,
        alt: 'CredSettle Loan Settlement Calculator',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Loan Settlement Calculator: Estimate Payout | CredSettle',
    description:
      'Calculate your estimated loan settlement payout, hypothetical bank haircut, and potential savings using CredSettle free loan settlement calculator in India.',
    images: ['https://www.credsettle.com/credsettle-logo-black.png'],
  },
};

export default function LoanSettlementCalculatorPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareApplication',
        name: 'CredSettle Loan Settlement Calculator',
        applicationCategory: 'FinanceApplication',
        operatingSystem: 'Any',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'INR',
        },
        description:
          'Free online financial calculator to model hypothetical loan settlement percentages, lender haircuts, and estimated cashflow differences in India.',
        url: 'https://www.credsettle.com/tools/loan-settlement-calculator',
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'How does the loan settlement calculator work?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'The calculator estimates your one-time settlement payout by applying a hypothetical settlement percentage to your outstanding loan balance, factoring in any additional legal or processing fees to determine your net difference.',
            },
          },
          {
            '@type': 'Question',
            name: 'Is the calculated settlement amount guaranteed by my bank?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. The calculation is an illustrative scenario simulator. Actual settlement offers depend entirely on your lender credit policies, delinquency vintage, hardship documentation, and bilateral negotiation.',
            },
          },
          {
            '@type': 'Question',
            name: 'What settlement percentage do banks in India usually accept?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Under RBI compromise settlement frameworks, banks typically evaluate settlements between 30% and 60% of the total ledger balance depending on whether the loan is unsecured, vintage of NPA, and documented borrower hardship.',
            },
          },
        ],
      },
    ],
  };

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Tools Hub', url: '/tools' },
    { name: 'Loan Settlement Calculator', url: '/tools/loan-settlement-calculator' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between print:bg-white print:min-h-0">
      <div className="print:hidden">
        <Navbar />
      </div>

      <Script
        id="loan-settlement-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="flex-grow pt-24 pb-16 print:pt-0 print:pb-0 print:m-0">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 print:max-w-none print:p-0 print:m-0">
          <div className="print:hidden">
            <Breadcrumbs items={breadcrumbs} align="left" className="mb-6" />
          </div>
          <LoanSettlementCalculatorClient />
        </div>
      </main>

      <div className="print:hidden">
        <Footer />
      </div>
    </div>
  );
}
