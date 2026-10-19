import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import CreditCardInterestCalculatorClient from './CreditCardInterestCalculatorClient';

export const metadata: Metadata = {
  title: 'Credit Card Interest Calculator: Payoff Plan | CredSettle',
  description:
    'Calculate credit card interest charges, payoff timelines & total cost under Indian APR rates. Model monthly payments and avoid the debt trap.',
  keywords: [
    'credit card interest calculator india',
    'credit card payoff calculator',
    'credit card apr calculator',
    'minimum amount due trap',
    'credit card debt payoff schedule',
    'credit card interest monthly formula',
    'credsettle tools',
  ],
  alternates: {
    canonical: 'https://www.credsettle.com/tools/credit-card-interest-calculator',
  },
  openGraph: {
    title: 'Credit Card Interest Calculator: Payoff Plan | CredSettle',
    description:
      'Calculate credit card interest charges, payoff timelines & total cost under Indian APR rates. Model monthly payments and avoid the debt trap.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://www.credsettle.com/tools/credit-card-interest-calculator',
    images: [
      {
        url: 'https://www.credsettle.com/credsettle-logo-black.png',
        width: 1200,
        height: 630,
        alt: 'CredSettle Credit Card Interest Calculator',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Credit Card Interest Calculator: Payoff Plan | CredSettle',
    description:
      'Calculate credit card interest charges, payoff timelines & total cost under Indian APR rates. Model monthly payments and avoid the debt trap.',
    images: ['https://www.credsettle.com/credsettle-logo-black.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function CreditCardInterestCalculatorPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareApplication',
        name: 'CredSettle Credit Card Interest Calculator',
        applicationCategory: 'FinanceApplication',
        operatingSystem: 'Any',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'INR',
        },
        description:
          'Free financial calculator to model revolving credit card interest accrual, monthly payments, debt trap warnings, and payoff schedules under Indian APR norms.',
        url: 'https://www.credsettle.com/tools/credit-card-interest-calculator',
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
            name: 'Credit Card Interest Calculator',
            item: 'https://www.credsettle.com/tools/credit-card-interest-calculator',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Why is credit card interest so high in India compared to personal loans?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Credit card debt is unsecured revolving credit with no fixed repayment tenure. In India, most major banks (such as HDFC, SBI Card, ICICI, Axis, and Kotak) charge finance charges ranging between 3.0% and 3.75% per month, which compounds to an Annualized Percentage Rate (APR) of 36% to 45%. In addition, an 18% statutory Goods & Services Tax (GST) is levied on all accrued finance charges, making revolving credit card debt one of the most expensive financial liabilities in India.',
            },
          },
          {
            '@type': 'Question',
            name: 'What is the "Minimum Amount Due" (MAD) trap?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'The Minimum Amount Due is typically calculated as 5% of your total outstanding balance (or 100% of unpaid finance charges + GST + fees + 1-2% of principal). Paying only the minimum due merely avoids late payment penalties and prevents immediate NPA default reporting. However, because nearly the entire payment is consumed by finance charges and taxes, your principal balance barely decreases, trapping you in repayment cycles that can last 15 to 30 years.',
            },
          },
          {
            '@type': 'Question',
            name: 'How does this simplified monthly model differ from actual bank statements?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'This calculator applies standard monthly compounding: interest is calculated as (APR / 12 / 100) applied to the opening ledger balance of each cycle. In actual banking practice, Indian credit card issuers compute interest on an Average Daily Balance (ADB) basis from the date of each purchase until the statement generation date. Furthermore, banks charge 18% GST on all finance charges and cancel the interest-free grace period on fresh purchases whenever an unpaid balance is carried forward.',
            },
          },
          {
            '@type': 'Question',
            name: 'What should I do if my payment does not cover monthly interest charges?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'If your monthly payment is less than or equal to monthly interest plus fees, you are in negative amortization—your debt will grow every single month even if you make your payment on time. In this situation, you must either dramatically increase your payment, secure a lower-interest personal loan for debt consolidation, or contact CredSettle to negotiate a structured legal compromise settlement under RBI guidelines to halt compounding interest.',
            },
          },
        ],
      },
    ],
  };

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Tools Hub', url: '/tools' },
    { name: 'Credit Card Interest Calculator', url: '/tools/credit-card-interest-calculator' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between print:bg-white print:min-h-0">
      <div className="print:hidden">
        <Navbar />
      </div>

      <Script
        id="credit-card-interest-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="flex-grow pt-24 pb-16 print:pt-0 print:pb-0 print:m-0">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 print:max-w-none print:p-0 print:m-0">
          <div className="print:hidden">
            <Breadcrumbs items={breadcrumbs} align="left" className="mb-6" />
          </div>
          <CreditCardInterestCalculatorClient />
        </div>
      </main>

      <div className="print:hidden">
        <Footer />
      </div>
    </div>
  );
}
