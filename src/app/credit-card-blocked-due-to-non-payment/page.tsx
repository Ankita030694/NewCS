import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CreditCardBlockedClient from './CreditCardBlockedClient';

export const metadata: Metadata = {
  title: 'Credit Card Blocked Due to Non-Payment Guide | CredSettle',
  description:
    'Is your credit card blocked due to non-payment? Learn temporary vs permanent block rules, RBI cardholder rights, unblock steps, and OTS options.',
  keywords: [
    'credit card blocked due to non payment',
    'how to unblock credit card after non payment',
    'temporary vs permanent credit card block india',
    'credit card npa 90 days block',
    'settle blocked credit card dues',
    'rbi credit card non payment rules',
  ],
  alternates: {
    canonical: 'https://www.credsettle.com/credit-card-blocked-due-to-non-payment',
  },
  openGraph: {
    title: 'Credit Card Blocked Due to Non-Payment Guide | CredSettle',
    description:
      'Is your credit card blocked due to non-payment? Learn temporary vs permanent block rules, RBI cardholder rights, unblock steps, and OTS options.',
    type: 'article',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://www.credsettle.com/credit-card-blocked-due-to-non-payment',
    images: [
      {
        url: 'https://www.credsettle.com/credsettle-logo-black.png',
        width: 1200,
        height: 630,
        alt: 'Credit Card Blocked Due to Non-Payment Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Credit Card Blocked Due to Non-Payment Guide | CredSettle',
    description:
      'Is your credit card blocked due to non-payment? Learn temporary vs permanent block rules, RBI cardholder rights, unblock steps, and OTS options.',
    images: ['https://www.credsettle.com/credsettle-logo-black.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function CreditCardBlockedDueToNonPaymentPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': 'https://www.credsettle.com/credit-card-blocked-due-to-non-payment#article',
        headline: 'Credit Card Blocked Due to Non-Payment: Temporary Block, NPA Rules & Settlement',
        description:
          'Is your credit card blocked due to non-payment? Learn temporary vs permanent block rules, RBI cardholder rights, unblock steps, and OTS options.',
        inLanguage: 'en-IN',
        mainEntityOfPage: 'https://www.credsettle.com/credit-card-blocked-due-to-non-payment',
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
        '@id': 'https://www.credsettle.com/credit-card-blocked-due-to-non-payment#breadcrumb',
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
            name: 'Credit Card Settlement',
            item: 'https://www.credsettle.com/services/credit-card-settlement',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Credit Card Blocked Due to Non-Payment',
            item: 'https://www.credsettle.com/credit-card-blocked-due-to-non-payment',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://www.credsettle.com/credit-card-blocked-due-to-non-payment#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'After how many missed bills does a bank block a credit card in India?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Most Indian banks place a temporary swipe block within 7 to 30 days after you miss the Minimum Amount Due. If the card stays unpaid past 90 days into NPA stage, the bank usually blocks and cancels the card permanently.',
            },
          },
          {
            '@type': 'Question',
            name: 'Does interest keep growing even after my credit card is blocked?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Blocking your card only stops fresh swipes and cash withdrawals. Monthly finance charges of 3.5% to 3.99% plus 18% GST keep adding to your unpaid balance until you clear or settle the account.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can I unblock my credit card by paying only the overdue minimum due?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'If your card has a temporary block under 60 days past due, paying all overdue minimums usually lifts the hold in 24 to 48 hours. Once a card is permanently cancelled after 90+ days, banks rarely reopen the credit line.',
            },
          },
          {
            '@type': 'Question',
            name: 'Should I pay a small token amount to recovery callers to unblock my card?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. Never pay random token sums without checking your statement status in the official bank app. Small token payments on a permanently cancelled NPA card only go toward late fees and do not reactivate your card.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can I settle a permanently blocked credit card for a reduced lump sum?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Under the June 8, 2023 RBI settlement framework, banks review One-Time Settlement requests on NPA cards when you face real hardship. Indicative payouts often range from 35% to 60% of the total bill, subject to bank approval.',
            },
          },
          {
            '@type': 'Question',
            name: 'What happens to reward points when my credit card is blocked for non-payment?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'During a temporary block, banks freeze reward redemption until overdue minimums are paid. If your card enters permanent block or settlement, most card agreements forfeit unredeemed reward points.',
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
      <CreditCardBlockedClient />
      <Footer hideFunnel />
    </div>
  );
}
