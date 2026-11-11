import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PnbCardSettlementPctClient from './PnbCardSettlementPctClient';

export const metadata: Metadata = {
  title: 'PNB Credit Card Settlement Percentage in India | CredSettle',
  description:
    'Check realistic Punjab National Bank (PNB) credit card settlement percentage ranges across RuPay, Visa & Rakshak cards under RBI OTS guidelines.',
  keywords: [
    'pnb credit card settlement percentage',
    'punjab national bank credit card ots',
    'pnb rupay credit card settlement',
    'pnb credit card npa waiver rules',
    'pnb genie credit card default settlement',
  ],
  alternates: {
    canonical: 'https://www.credsettle.com/pnb-credit-card-settlement-percentage',
  },
  openGraph: {
    title: 'PNB Credit Card Settlement Percentage in India | CredSettle',
    description:
      'Check realistic Punjab National Bank (PNB) credit card settlement percentage ranges across RuPay, Visa & Rakshak cards under RBI OTS guidelines.',
    type: 'article',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://www.credsettle.com/pnb-credit-card-settlement-percentage',
    images: [
      {
        url: 'https://www.credsettle.com/credsettle-logo-black.png',
        width: 1200,
        height: 630,
        alt: 'PNB Credit Card Settlement Percentage Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PNB Credit Card Settlement Percentage in India | CredSettle',
    description:
      'Check realistic Punjab National Bank (PNB) credit card settlement percentage ranges across RuPay, Visa & Rakshak cards under RBI OTS guidelines.',
    images: ['https://www.credsettle.com/credsettle-logo-black.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PnbCardSettlementPercentagePage() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': 'https://www.credsettle.com/pnb-credit-card-settlement-percentage#article',
        headline: 'Punjab National Bank (PNB) Credit Card Settlement Percentage & PSU OTS Rules',
        description:
          'Check realistic Punjab National Bank (PNB) credit card settlement percentage ranges across RuPay, Visa & Rakshak cards under RBI OTS guidelines.',
        inLanguage: 'en-IN',
        mainEntityOfPage: 'https://www.credsettle.com/pnb-credit-card-settlement-percentage',
        datePublished: '2026-11-11T10:00:00+05:30',
        dateModified: '2026-11-11T10:00:00+05:30',
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
        '@id': 'https://www.credsettle.com/pnb-credit-card-settlement-percentage#breadcrumb',
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
            name: 'PNB Credit Card Settlement %',
            item: 'https://www.credsettle.com/pnb-credit-card-settlement-percentage',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://www.credsettle.com/pnb-credit-card-settlement-percentage#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What settlement percentage does PNB accept on overdue credit cards?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'On unsecured NPA PNB cards past 90 to 180+ days late, past OTS deals often land at 45% to 70% of the full bill. PSU panels guard core spend closely while cutting late interest.',
            },
          },
          {
            '@type': 'Question',
            name: 'Why can PNB card settlement percentages look higher than 48% APR private cards?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Many PNB cards charge lower monthly rates (about 2.95% per month or 35.4% p.a.) than private cards. Because less fee bloat piles up, real spends form a bigger slice of your bill.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can PNB recover unpaid credit card bills from my PNB savings or pension account?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. PNB issues cards straight from its own Credit Card Wing. That gives PNB a direct lien and set-off right on linked PNB bank accounts under Section 171.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can FD-backed PNB Global credit cards be settled with a principal haircut?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. When a PNB card sits against a fixed deposit, PNB breaks that FD to clear unpaid card dues rather than giving an unsecured OTS cut.',
            },
          },
          {
            '@type': 'Question',
            name: 'Do Lok Adalat or PSU Rin Samadhan drives cover PNB credit card NPAs?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Aged unsecured PNB card NPAs often go to Lok Adalats or special PSU OTS drives where fees and interest can be waived in writing.',
            },
          },
          {
            '@type': 'Question',
            name: 'How do I verify an official PNB credit card OTS letter?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Check that the letter comes from PNB Credit Card Wing or a real @pnb.co.in mail or branch seal. Confirm the code on PNB Genie or care, then pay your 16-digit PNB card.',
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
      <PnbCardSettlementPctClient />
      <Footer hideFunnel />
    </div>
  );
}
