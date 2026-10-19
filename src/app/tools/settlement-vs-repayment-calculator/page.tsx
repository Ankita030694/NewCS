import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import SettlementVsRepaymentClient from './SettlementVsRepaymentClient';

export const metadata: Metadata = {
  title: 'Settlement vs Full Repayment Calculator | CredSettle',
  description:
    'Compare loan settlement payouts against full repayment. Calculate nominal cash differences, CIBIL credit score impact, tax risks, and EMI timelines with CredSettle.',
  keywords: [
    'settlement vs repayment calculator',
    'loan settlement vs full repayment',
    'debt settlement comparison india',
    'cibil score settled vs closed',
    'loan compromise calculator',
    'ots vs emi comparison',
    'one time settlement vs repayment',
    'credsettle tools',
  ],
  alternates: {
    canonical: 'https://www.credsettle.com/tools/settlement-vs-repayment-calculator',
  },
  openGraph: {
    title: 'Settlement vs Full Repayment Calculator | CredSettle',
    description:
      'Compare loan settlement payouts against full repayment. Calculate nominal cash differences, CIBIL credit score impact, tax risks, and EMI timelines with CredSettle.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://www.credsettle.com/tools/settlement-vs-repayment-calculator',
    images: [
      {
        url: 'https://www.credsettle.com/credsettle-logo-black.png',
        width: 1200,
        height: 630,
        alt: 'CredSettle Settlement vs Full Repayment Calculator',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Settlement vs Full Repayment Calculator | CredSettle',
    description:
      'Compare loan settlement payouts against full repayment. Calculate nominal cash differences, CIBIL credit score impact, tax risks, and EMI timelines with CredSettle.',
    images: ['https://www.credsettle.com/credsettle-logo-black.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function SettlementVsRepaymentPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareApplication',
        name: 'CredSettle Settlement vs Full Repayment Calculator',
        applicationCategory: 'FinanceApplication',
        operatingSystem: 'Any',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'INR',
        },
        description:
          'Free financial comparison calculator to evaluate hypothetical loan settlement costs against structured full repayment schedules, CIBIL remarks, and tax implications in India.',
        url: 'https://www.credsettle.com/tools/settlement-vs-repayment-calculator',
      },
      {
        '@type': 'BreadcrumbList',
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
            name: 'Tools Hub',
            item: 'https://www.credsettle.com/tools',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Settlement vs Full Repayment Calculator',
            item: 'https://www.credsettle.com/tools/settlement-vs-repayment-calculator',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Why does settlement appear so much cheaper in nominal cash than full repayment?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'In a compromise settlement, the lender agrees to forfeit a substantial portion of the ledger balance (the "haircut," typically 30% to 60%) to recover immediate liquidity from an account at risk of NPA. In contrast, full repayment includes the entire principal plus compounding interest accrued across the remaining tenure. However, nominal cash is only one part of the equation: settlement permanently damages your CIBIL score, while repayment preserves your financial creditworthiness.',
            },
          },
          {
            '@type': 'Question',
            name: 'How does an account marked as "Settled" differ from "Closed" on CIBIL and Experian?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'When you repay 100% of your loan dues, the bank submits an account status of "Closed" or "Paid in Full" to credit bureaus with no adverse history. In a settlement, the bank reports the account as "Settled" or "Post-Write-off Settled." Credit underwriting algorithms and loan officers treat "Settled" as a default where the lender suffered a loss, drastically depressing your score (70–120 points) and rendering you virtually ineligible for unsecured loans or prime mortgages for 2 to 5 years.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can a bank refuse my request for a compromise loan settlement?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Loan settlement is not a statutory or consumer right—it is entirely at the lender\'s commercial discretion under RBI\'s Framework on Compromise Settlements. Banks evaluate whether the borrower suffers from genuine, verifiable distress (e.g., job loss, severe medical emergency, permanent disability). If the bank discovers assets, verifiable income, or signs of wilful default, they will reject settlement and initiate legal recovery via Section 138 NI Act or SARFAESI.',
            },
          },
          {
            '@type': 'Question',
            name: 'Are there income tax implications if a portion of my loan is waived off?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes, particularly for business, commercial, or sole proprietorship loans. Under Section 41(1) and Section 28(iv) of the Indian Income Tax Act, the waiver of a trading liability or debt remission can be treated as taxable business income in the assessment year. While non-business personal loan waivers generally carry lower direct tax risks for individuals, borrowers should always obtain written advice from a qualified Chartered Accountant regarding their specific tax jurisdiction.',
            },
          },
        ],
      },
    ],
  };

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Tools Hub', url: '/tools' },
    { name: 'Settlement vs Repayment Calculator', url: '/tools/settlement-vs-repayment-calculator' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between print:bg-white print:min-h-0">
      <div className="print:hidden">
        <Navbar />
      </div>

      <Script
        id="settlement-vs-repayment-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="flex-grow pt-24 pb-16 print:pt-0 print:pb-0 print:m-0">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 print:max-w-none print:p-0 print:m-0">
          <div className="print:hidden">
            <Breadcrumbs items={breadcrumbs} align="left" className="mb-6" />
          </div>
          <SettlementVsRepaymentClient />
        </div>
      </main>

      <div className="print:hidden">
        <Footer />
      </div>
    </div>
  );
}
