import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import DebtToIncomeCalculatorClient from './DebtToIncomeCalculatorClient';

export const metadata: Metadata = {
  title: 'Debt-to-Income (DTI) Ratio Calculator | Check FOIR Free | CredSettle',
  description:
    'Calculate your debt-to-income ratio (DTI / FOIR) in India. Free online financial tool to evaluate gross income, housing EMIs, debt burden, and banking risk bands.',
  keywords: [
    'debt to income ratio calculator',
    'dti calculator india',
    'foir calculator sbi hdfc',
    'loan eligibility dti ratio',
    'fixed obligation to income ratio',
    'front end dti vs back end dti',
    'debt burden calculator',
    'credsettle tools',
  ],
  alternates: {
    canonical: 'https://www.credsettle.com/tools/debt-to-income-calculator',
  },
  openGraph: {
    title: 'Debt-to-Income (DTI) Ratio Calculator | Check FOIR Free | CredSettle',
    description:
      'Calculate your debt-to-income ratio (DTI / FOIR) in India. Free online financial tool to evaluate gross income, housing EMIs, debt burden, and banking risk bands.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://www.credsettle.com/tools/debt-to-income-calculator',
    images: [
      {
        url: 'https://www.credsettle.com/credsettle-logo-black.png',
        width: 1200,
        height: 630,
        alt: 'CredSettle Debt-to-Income Ratio Calculator',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Debt-to-Income (DTI) Ratio Calculator | Check FOIR Free | CredSettle',
    description:
      'Calculate your debt-to-income ratio (DTI / FOIR) in India. Free online financial tool to evaluate gross income, housing EMIs, debt burden, and banking risk bands.',
    images: ['https://www.credsettle.com/credsettle-logo-black.png'],
  },
};

export default function DebtToIncomeCalculatorPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareApplication',
        name: 'CredSettle Debt-to-Income Ratio Calculator',
        applicationCategory: 'FinanceApplication',
        operatingSystem: 'Any',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'INR',
        },
        description:
          'Free online financial calculator to calculate debt-to-income (DTI) ratio, front-end housing ratio, and Fixed Obligation to Income Ratio (FOIR) aligned with Indian banking standards.',
        url: 'https://www.credsettle.com/tools/debt-to-income-calculator',
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What is a Debt-to-Income (DTI) ratio and how is it calculated?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'DTI is the percentage of your gross monthly income (before tax deductions) that goes toward paying recurring monthly debts (such as personal loan EMIs, credit card minimum payments, auto loans, and housing costs). Formula: (Total Monthly Debt Payments / Gross Monthly Income) × 100.',
            },
          },
          {
            '@type': 'Question',
            name: 'What is the difference between Front-End DTI and Back-End DTI?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Front-End DTI measures solely your housing obligations (home loan EMI or monthly rent) against gross income (recommended under 28-30%). Back-End DTI (commonly known in India as FOIR) includes all monthly debts: housing, credit cards, auto loans, and personal loans (typically capped at 40-50% by Indian banks).',
            },
          },
          {
            '@type': 'Question',
            name: 'Does a low DTI percentage guarantee loan approval in India?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. While a DTI below 36% indicates manageable debt, Indian lenders evaluate multiple factors including your CIBIL credit score (750+ preferred), employment stability, employer profile, collateral value, and existing banking relationship. Lender underwriting criteria vary.',
            },
          },
          {
            '@type': 'Question',
            name: 'Should I enter gross income or net take-home salary?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Standard DTI calculations strictly use gross monthly income (total salary before income tax, Provident Fund, professional tax, and payroll deductions). Entering your net take-home salary will artificially inflate your DTI percentage.',
            },
          },
        ],
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
            name: 'Debt-to-Income Ratio Calculator',
            item: 'https://www.credsettle.com/tools/debt-to-income-calculator',
          },
        ],
      },
    ],
  };

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Tools Hub', url: '/tools' },
    { name: 'Debt-to-Income Ratio Calculator', url: '/tools/debt-to-income-calculator' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between print:bg-white print:min-h-0">
      <div className="print:hidden">
        <Navbar />
      </div>

      <Script
        id="dti-calculator-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="flex-grow pt-24 pb-16 print:pt-0 print:pb-0 print:m-0">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 print:max-w-none print:p-0 print:m-0">
          <div className="print:hidden">
            <Breadcrumbs items={breadcrumbs} align="left" className="mb-6" />
          </div>
          <DebtToIncomeCalculatorClient />
        </div>
      </main>

      <div className="print:hidden">
        <Footer />
      </div>
    </div>
  );
}
