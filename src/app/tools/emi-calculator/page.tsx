import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import EmiCalculatorClient from './EmiCalculatorClient';

export const metadata: Metadata = {
  title: 'Loan EMI Calculator: Estimate Monthly Payments | CredSettle',
  description:
    'Calculate monthly loan EMIs, total interest, and amortization schedules with CredSettle free EMI calculator for personal, home and auto loans.',
  keywords: [
    'loan emi calculator',
    'personal loan emi calculator',
    'home loan emi calculator',
    'car loan emi calculator',
    'loan amortization schedule india',
    'reducing balance emi calculator',
    'credsettle tools',
  ],
  alternates: {
    canonical: 'https://www.credsettle.com/tools/emi-calculator',
  },
  openGraph: {
    title: 'Loan EMI Calculator: Estimate Monthly Payments | CredSettle',
    description:
      'Calculate monthly loan EMIs, total interest, and amortization schedules with CredSettle free EMI calculator for personal, home and auto loans.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://www.credsettle.com/tools/emi-calculator',
    images: [
      {
        url: 'https://www.credsettle.com/credsettle-logo-black.png',
        width: 1200,
        height: 630,
        alt: 'CredSettle Loan EMI Calculator',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Loan EMI Calculator: Estimate Monthly Payments | CredSettle',
    description:
      'Calculate monthly loan EMIs, total interest, and amortization schedules with CredSettle free EMI calculator for personal, home and auto loans.',
    images: ['https://www.credsettle.com/credsettle-logo-black.png'],
  },
};

export default function EmiCalculatorPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareApplication',
        name: 'CredSettle Loan EMI Calculator',
        applicationCategory: 'FinanceApplication',
        operatingSystem: 'Any',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'INR',
        },
        description:
          'Free online loan EMI calculator and amortization schedule generator using reducing balance compounding for personal, home, and auto loans in India.',
        url: 'https://www.credsettle.com/tools/emi-calculator',
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
            name: 'Loan EMI Calculator',
            item: 'https://www.credsettle.com/tools/emi-calculator',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'How is loan EMI calculated in India?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'In Indian banking, standard amortizing loans use the reducing balance formula: EMI = [P x r x (1+r)^n] / [(1+r)^n - 1], where P is principal, r is monthly interest (annual rate / 1200), and n is tenure in months.',
            },
          },
          {
            '@type': 'Question',
            name: 'What is the difference between reducing balance and flat rate EMI?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Under a flat rate loan, interest is charged on the full principal throughout the tenure, whereas under reducing balance, interest decreases as the principal is repaid month after month.',
            },
          },
          {
            '@type': 'Question',
            name: 'Are processing fees and GST included in the monthly EMI?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. Processing fees and associated GST are upfront one-time deductions charged by the lender at loan sanction and are displayed separately from the monthly installment.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can floating rate benchmark resets change my loan EMI?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. For floating-rate loans linked to the RBI Repo Rate or external benchmark EBLR, changes in policy rates typically cause lenders to adjust either loan tenure or monthly EMI.',
            },
          },
          {
            '@type': 'Question',
            name: 'How does making loan prepayments reduce total interest?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Any prepayment goes directly toward reducing your outstanding principal balance, thereby reducing subsequent interest accrual and allowing you to lower EMIs or shorten loan tenure.',
            },
          },
        ],
      },
    ],
  };

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Tools Hub', url: '/tools' },
    { name: 'Loan EMI Calculator', url: '/tools/emi-calculator' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between print:bg-white print:min-h-0">
      <div className="print:hidden">
        <Navbar />
      </div>

      <Script
        id="emi-calculator-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="flex-grow pt-24 pb-16 print:pt-0 print:pb-0 print:m-0">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 print:max-w-none print:p-0 print:m-0">
          <div className="print:hidden">
            <Breadcrumbs items={breadcrumbs} align="left" className="mb-6" />
          </div>
          <EmiCalculatorClient />
        </div>
      </main>

      <div className="print:hidden">
        <Footer />
      </div>
    </div>
  );
}
