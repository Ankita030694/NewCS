import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import DebtRepaymentPlannerClient from './DebtRepaymentPlannerClient';

export const metadata: Metadata = {
  title: 'Debt Repayment Planner: Avalanche vs Snowball | CredSettle',
  description:
    'Simulate your debt payoff timeline with avalanche and snowball strategies. Calculate total interest savings, monthly schedules, and debt-free dates.',
  keywords: [
    'debt repayment planner',
    'debt avalanche vs snowball india',
    'debt payoff timeline calculator',
    'repayment schedule calculator',
    'credit card payoff calculator india',
    'debt snowball calculator',
    'credsettle debt management',
  ],
  alternates: {
    canonical: 'https://www.credsettle.com/tools/debt-repayment-planner',
  },
  openGraph: {
    title: 'Debt Repayment Planner: Avalanche vs Snowball | CredSettle',
    description:
      'Simulate your debt payoff timeline with avalanche and snowball strategies. Calculate total interest savings, monthly schedules, and debt-free dates.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://www.credsettle.com/tools/debt-repayment-planner',
    images: [
      {
        url: 'https://www.credsettle.com/credsettle-logo-black.png',
        width: 1200,
        height: 630,
        alt: 'CredSettle Debt Repayment Planner',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Debt Repayment Planner: Avalanche vs Snowball | CredSettle',
    description:
      'Simulate your debt payoff timeline with avalanche and snowball strategies. Calculate total interest savings, monthly schedules, and debt-free dates.',
    images: ['https://www.credsettle.com/credsettle-logo-black.png'],
  },
};

export default function DebtRepaymentPlannerPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareApplication',
        name: 'CredSettle Debt Repayment Planner',
        applicationCategory: 'FinanceApplication',
        operatingSystem: 'Any',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'INR',
        },
        description:
          'Free online debt repayment simulator comparing debt avalanche and debt snowball strategies with month-by-month schedules, rollover acceleration, and payoff milestones.',
        url: 'https://www.credsettle.com/tools/debt-repayment-planner',
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
            name: 'Debt Repayment Planner',
            item: 'https://www.credsettle.com/tools/debt-repayment-planner',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What is the key difference between Debt Avalanche and Debt Snowball in India?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'The Debt Avalanche method prioritizes paying off debts with the highest annual interest rate first (such as revolving credit cards at 36-42%), mathematically minimizing total interest paid. The Debt Snowball method prioritizes debts with the smallest outstanding balance first, providing quick psychological wins.',
            },
          },
          {
            '@type': 'Question',
            name: 'How does minimum payment rollover accelerate debt payoff?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'When you eliminate a loan or credit card, its minimum monthly installment is not absorbed back into general spending. Instead, it is rolled over into the extra payment pool for the next priority debt, compounding your payment velocity over time.',
            },
          },
          {
            '@type': 'Question',
            name: 'How does the calculator handle interest accrual and payment timing?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Our simulation applies interest on the opening balance of each month based on annual percentage rate (APR / 1200). Payments are then applied first toward accrued monthly interest, with the remainder directly reducing principal balance.',
            },
          },
          {
            '@type': 'Question',
            name: 'What does "Cannot be paid off under these assumptions" mean?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'This warning triggers when your scheduled monthly payments are less than or equal to the monthly interest accrued across your debts. Under this negative amortization trap, debt balances will expand or remain stagnant indefinitely.',
            },
          },
          {
            '@type': 'Question',
            name: 'What should I do if my debts cannot be paid off with current monthly cashflow?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'When monthly debt obligations exceed 50-60% of income or interest outpaces payments, borrowers can explore formal debt restructuring, tenure extensions, or legal compromise settlement under RBI guidelines through CredSettle.',
            },
          },
        ],
      },
    ],
  };

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Tools Hub', url: '/tools' },
    { name: 'Debt Repayment Planner', url: '/tools/debt-repayment-planner' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between print:bg-white print:min-h-0">
      <div className="print:hidden">
        <Navbar />
      </div>

      <Script
        id="debt-repayment-planner-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="flex-grow pt-24 pb-16 print:pt-0 print:pb-0 print:m-0">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 print:max-w-none print:p-0 print:m-0">
          <div className="print:hidden">
            <Breadcrumbs items={breadcrumbs} align="left" className="mb-6" />
          </div>
          <DebtRepaymentPlannerClient />
        </div>
      </main>

      <div className="print:hidden">
        <Footer />
      </div>
    </div>
  );
}
