import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MultipleCardPayoffVsSettlementClient from './MultipleCardPayoffVsSettlementClient';

export const metadata: Metadata = {
  title: 'Multiple Credit Card Payoff vs Settlement | CredSettle',
  description:
    'Compare Debt Avalanche, Debt Snowball, and One-Time Settlement across multiple Indian credit cards. Plan monthly payoff budgets and savings now.',
  keywords: [
    'multiple credit card payoff calculator',
    'debt avalanche vs snowball india',
    'settle multiple credit cards calculator',
    'credit card payoff vs settlement planner',
    'multi card debt relief india',
    'credsettle tools',
  ],
  alternates: {
    canonical:
      'https://www.credsettle.com/tools/multiple-credit-card-payoff-vs-settlement-calculator',
  },
  openGraph: {
    title: 'Multiple Credit Card Payoff vs Settlement | CredSettle',
    description:
      'Compare Debt Avalanche, Debt Snowball, and One-Time Settlement across multiple Indian credit cards. Plan monthly payoff budgets and savings now.',
    type: 'article',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://www.credsettle.com/tools/multiple-credit-card-payoff-vs-settlement-calculator',
    images: [
      {
        url: 'https://www.credsettle.com/credsettle-logo-black.png',
        width: 1200,
        height: 630,
        alt: 'CredSettle Multiple Credit Card Payoff vs Settlement Planner',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Multiple Credit Card Payoff vs Settlement | CredSettle',
    description:
      'Compare Debt Avalanche, Debt Snowball, and One-Time Settlement across multiple Indian credit cards. Plan monthly payoff budgets and savings now.',
    images: ['https://www.credsettle.com/credsettle-logo-black.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function MultipleCardPayoffVsSettlementPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id':
          'https://www.credsettle.com/tools/multiple-credit-card-payoff-vs-settlement-calculator#article',
        headline: 'Multiple Credit Card Payoff (Avalanche & Snowball) vs Settlement Planner',
        description:
          'Compare Debt Avalanche, Debt Snowball, and One-Time Settlement across multiple Indian credit cards. Plan monthly payoff budgets and savings now.',
        inLanguage: 'en-IN',
        mainEntityOfPage:
          'https://www.credsettle.com/tools/multiple-credit-card-payoff-vs-settlement-calculator',
        datePublished: '2026-11-11T09:00:00+05:30',
        dateModified: '2026-11-11T09:00:00+05:30',
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
          'https://www.credsettle.com/tools/multiple-credit-card-payoff-vs-settlement-calculator#breadcrumb',
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
            name: 'Multiple Credit Card Payoff vs Settlement Planner',
            item: 'https://www.credsettle.com/tools/multiple-credit-card-payoff-vs-settlement-calculator',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id':
          'https://www.credsettle.com/tools/multiple-credit-card-payoff-vs-settlement-calculator#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What is the difference between Debt Avalanche and Debt Snowball for credit cards?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Debt Avalanche puts your extra monthly budget toward the card with the highest APR first, saving the most interest. Debt Snowball clears your smallest balance card first so you close one card fast and stay motivated.',
            },
          },
          {
            '@type': 'Question',
            name: 'What happens if my monthly budget is lower than all card minimum dues?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'If your monthly cash budget cannot cover even the 5% minimum due across all cards, late fees and 42% to 48% APR will push your debt up every month. At ₹3 Lakh or more in total dues, review formal settlement options.',
            },
          },
          {
            '@type': 'Question',
            name: 'Does Debt Avalanche or Debt Snowball hurt my CIBIL score?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. Both payoff plans pay every card on time each month and clear 100% of the balance. Each bank reports your card as Closed, which raises your CIBIL score as card use drops below 30%.',
            },
          },
          {
            '@type': 'Question',
            name: 'How does settling multiple credit cards work in India?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'When real hardship makes full payoff impossible on ₹3 Lakh+ debt, each card is negotiated one by one or in stages after 90+ days past due under the June 8, 2023 RBI circular. Each bank issues its own OTS letter and No Dues note.',
            },
          },
          {
            '@type': 'Question',
            name: 'Should I use one credit card to pay the minimum due of another card?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Never rotate cash or wallet loads from one card to pay another. Wallet transfer fees of 2% to 3% plus immediate interest make your multi-card hole deeper within months.',
            },
          },
          {
            '@type': 'Question',
            name: 'Are the settlement figures in this planner guaranteed by banks?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. Settlement ranges are rough past estimates, not bank offers. Each card issuer reviews your NPA stage, fee share, and hardship proof before giving a written OTS offer.',
            },
          },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between print:bg-white print:min-h-0">
      <div className="print:hidden">
        <Navbar />
      </div>

      <Script
        id="multi-cc-payoff-settlement-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="flex-grow pt-24 pb-16 print:pt-0 print:pb-0 print:m-0">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 print:max-w-none print:p-0 print:m-0">
          <nav aria-label="Breadcrumb" className="mb-6 print:hidden">
            <ol className="flex flex-wrap items-center justify-start gap-1.5 md:gap-2 text-[13px] md:text-sm text-slate-600">
              <li className="flex items-center">
                <Link href="/" className="hover:text-[#007AFF] transition-colors">
                  Home
                </Link>
              </li>
              <li className="flex items-center">
                <span className="mx-1.5 md:mx-2 text-slate-400">/</span>
                <Link href="/tools" className="hover:text-[#007AFF] transition-colors">
                  Tools Hub
                </Link>
              </li>
              <li className="flex items-center">
                <span className="mx-1.5 md:mx-2 text-slate-400">/</span>
                <span className="font-medium text-[#0C2756]">
                  Multiple Credit Card Payoff vs Settlement Planner
                </span>
              </li>
            </ol>
          </nav>

          <MultipleCardPayoffVsSettlementClient />
        </div>
      </main>

      <div className="print:hidden">
        <Footer hideFunnel />
      </div>
    </div>
  );
}
