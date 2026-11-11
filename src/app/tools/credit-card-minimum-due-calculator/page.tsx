import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CreditCardMinimumDueCalculatorClient from './CreditCardMinimumDueCalculatorClient';

export const metadata: Metadata = {
  title: 'Credit Card Minimum Due Calculator India | CredSettle',
  description:
    'Calculate how long 5% minimum due takes to clear Indian credit cards, total APR + GST interest, and indicative issuer settlement ranges today.',
  keywords: [
    'credit card minimum due calculator',
    'credit card minimum amount due calculator india',
    'minimum due interest trap calculator',
    'credit card settlement calculator by bank',
    'multi card minimum due payoff',
    'credit card apr and 18 gst calculator',
    'credsettle tools',
  ],
  alternates: {
    canonical: 'https://www.credsettle.com/tools/credit-card-minimum-due-calculator',
  },
  openGraph: {
    title: 'Credit Card Minimum Due Calculator India | CredSettle',
    description:
      'Calculate how long 5% minimum due takes to clear Indian credit cards, total APR + GST interest, and indicative issuer settlement ranges today.',
    type: 'article',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://www.credsettle.com/tools/credit-card-minimum-due-calculator',
    images: [
      {
        url: 'https://www.credsettle.com/credsettle-logo-black.png',
        width: 1200,
        height: 630,
        alt: 'CredSettle Credit Card Minimum Due Calculator',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Credit Card Minimum Due Calculator India | CredSettle',
    description:
      'Calculate how long 5% minimum due takes to clear Indian credit cards, total APR + GST interest, and indicative issuer settlement ranges today.',
    images: ['https://www.credsettle.com/credsettle-logo-black.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function CreditCardMinimumDueCalculatorPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': 'https://www.credsettle.com/tools/credit-card-minimum-due-calculator#article',
        headline: 'Credit Card Minimum Due & Settlement Calculator for Indian Cardholders',
        description:
          'Calculate how long 5% minimum due takes to clear Indian credit cards, total APR + GST interest, and indicative issuer settlement ranges today.',
        inLanguage: 'en-IN',
        mainEntityOfPage: 'https://www.credsettle.com/tools/credit-card-minimum-due-calculator',
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
        '@id': 'https://www.credsettle.com/tools/credit-card-minimum-due-calculator#breadcrumb',
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
            name: 'Credit Card Minimum Due Calculator',
            item: 'https://www.credsettle.com/tools/credit-card-minimum-due-calculator',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://www.credsettle.com/tools/credit-card-minimum-due-calculator#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What does Minimum Amount Due mean on an Indian credit card bill?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Minimum Amount Due is usually 5% of your closing card bill, with a ₹200 to ₹500 floor. Paying it skips late fees for one month. However, the unpaid 95% balance attracts 36% to 48% yearly interest plus 18% GST.',
            },
          },
          {
            '@type': 'Question',
            name: 'Why does paying 5% minimum due take over 15 years to clear?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Most banks charge 3.5% to 3.75% monthly interest plus 18% GST. Over 4% of your bill goes to interest and tax each month. A 5% payment cuts your main balance by less than 1%, so payoff takes 15 to 22 years.',
            },
          },
          {
            '@type': 'Question',
            name: 'Do I lose my interest-free period if I pay only the minimum due?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Under RBI card rules, rolling over even one rupee cancels your 45-day grace window. Every fresh card swipe starts adding daily interest from day one.',
            },
          },
          {
            '@type': 'Question',
            name: 'How accurate are the indicative settlement ranges in this calculator?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'These figures are rough past ranges, never a promise. Under the June 8, 2023 RBI settlement circular, each bank reviews NPA age, fee build-up, and real hardship before approving any waiver.',
            },
          },
          {
            '@type': 'Question',
            name: 'Why does legal debt settlement require at least ₹3 Lakh total debt?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Below ₹3 Lakh across all cards and loans, self-help payoff or a low-rate EMI plan saves money and protects your CIBIL score. Above ₹3 Lakh, formal legal talks make practical sense.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can I combine multiple credit cards and app loans for assessment?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. You should solve all card and loan dues together. Add each credit card in the tool and enter your personal loan and app loan dues to check your full plan.',
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
        id="cc-min-due-calculator-schema"
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
                  Credit Card Minimum Due Calculator
                </span>
              </li>
            </ol>
          </nav>

          <CreditCardMinimumDueCalculatorClient />
        </div>
      </main>

      <div className="print:hidden">
        <Footer hideFunnel />
      </div>
    </div>
  );
}
