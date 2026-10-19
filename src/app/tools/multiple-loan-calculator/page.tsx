import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import MultipleLoanCalculatorClient from './MultipleLoanCalculatorClient';

export const metadata: Metadata = {
  title: 'Multiple Loan Debt Calculator: Consolidate Debt Portfolio | CredSettle',
  description:
    'Combine multiple personal loans, credit card balances, and monthly EMIs in one view. Calculate total debt, combined payments, and weighted average interest rate.',
  keywords: [
    'multiple loan debt calculator',
    'debt consolidation calculator india',
    'combine multiple loans',
    'weighted average interest rate calculator',
    'total monthly emi calculator',
    'debt avalanche vs snowball india',
    'credsettle tools',
  ],
  alternates: {
    canonical: 'https://www.credsettle.com/tools/multiple-loan-calculator',
  },
  openGraph: {
    title: 'Multiple Loan Debt Calculator: Consolidate Debt Portfolio | CredSettle',
    description:
      'Combine multiple personal loans, credit card balances, and monthly EMIs in one view. Calculate total debt, combined payments, and weighted average interest rate.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://www.credsettle.com/tools/multiple-loan-calculator',
    images: [
      {
        url: 'https://www.credsettle.com/credsettle-logo-black.png',
        width: 1200,
        height: 630,
        alt: 'CredSettle Multiple Loan Debt Calculator',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Multiple Loan Debt Calculator: Consolidate Debt Portfolio | CredSettle',
    description:
      'Combine multiple personal loans, credit card balances, and monthly EMIs in one view. Calculate total debt, combined payments, and weighted average interest rate.',
    images: ['https://www.credsettle.com/credsettle-logo-black.png'],
  },
};

export default function MultipleLoanCalculatorPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareApplication',
        name: 'CredSettle Multiple Loan Debt Calculator',
        applicationCategory: 'FinanceApplication',
        operatingSystem: 'Any',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'INR',
        },
        description:
          'Free online tool to combine several debts, personal loans, and credit card balances into a single dashboard with weighted average interest rate and avalanche/snowball payoff insights.',
        url: 'https://www.credsettle.com/tools/multiple-loan-calculator',
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
            name: 'Multiple Loan Debt Calculator',
            item: 'https://www.credsettle.com/tools/multiple-loan-calculator',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'How does the multiple loan debt calculator calculate weighted average interest rate?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'The weighted average interest rate reflects the true cost of your overall debt by weighting each loan rate by its outstanding principal balance. The formula multiplies each loan balance by its interest rate, sums these products, and divides by the total principal of loans with known rates.',
            },
          },
          {
            '@type': 'Question',
            name: 'What is the difference between the Debt Avalanche and Debt Snowball repayment strategies?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'The Debt Avalanche method focuses on repaying the debt with the highest interest rate first while paying minimums on others, mathematically minimizing total interest paid. The Debt Snowball method prioritizes repaying the debt with the smallest balance first for quick psychological momentum.',
            },
          },
          {
            '@type': 'Question',
            name: 'Should I consolidate multiple credit cards and personal loans into a single loan?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Debt consolidation into a single personal loan, gold loan, or loan against property can reduce your monthly EMI and simplify payments if the new interest rate is lower than your current weighted average rate, factoring in processing fees and tenure changes.',
            },
          },
          {
            '@type': 'Question',
            name: 'Why does the tool warn me about partial monthly payments or missing interest rates?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Under CredSettle transparent calculation standards, we never silently assume that an omitted field is 0% or ₹0. If you do not enter a monthly payment for one loan, the calculator highlights partial totals to prevent understating your true financial burden.',
            },
          },
          {
            '@type': 'Question',
            name: 'What should I do if my total monthly EMIs exceed 50% of my net income?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'A debt-to-income ratio exceeding 50% indicates debt stress. Options include debt restructuring with lenders under RBI guidelines, tenure extension, balance transfer to lower-rate facilities, or formal compromise debt settlement if facing genuine financial hardship.',
            },
          },
        ],
      },
    ],
  };

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Tools Hub', url: '/tools' },
    { name: 'Multiple Loan Debt Calculator', url: '/tools/multiple-loan-calculator' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between print:bg-white print:min-h-0">
      <div className="print:hidden">
        <Navbar />
      </div>

      <Script
        id="multiple-loan-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="flex-grow pt-24 pb-16 print:pt-0 print:pb-0 print:m-0">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 print:max-w-none print:p-0 print:m-0">
          <div className="print:hidden">
            <Breadcrumbs items={breadcrumbs} align="left" className="mb-6" />
          </div>
          <MultipleLoanCalculatorClient />
        </div>
      </main>

      <div className="print:hidden">
        <Footer />
      </div>
    </div>
  );
}
