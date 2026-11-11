import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BobCardSettlementPctClient from './BobCardSettlementPctClient';

export const metadata: Metadata = {
  title: 'Bank of Baroda Credit Card Settlement % (BoB) | CredSettle',
  description:
    'Check indicative Bank of Baroda (BOBCARD) credit card settlement percentage ranges for Eterna, Premier, IRCTC & Snapdeal cards with RBI caveats.',
  keywords: [
    'bank of baroda credit card settlement percentage',
    'bobcard settlement percentage india',
    'bob financial credit card ots waiver',
    'bank of baroda eterna premier card settlement',
    'bob credit card npa settlement rules',
  ],
  alternates: {
    canonical: 'https://www.credsettle.com/bank-of-baroda-credit-card-settlement-percentage',
  },
  openGraph: {
    title: 'Bank of Baroda Credit Card Settlement % (BoB) | CredSettle',
    description:
      'Check indicative Bank of Baroda (BOBCARD) credit card settlement percentage ranges for Eterna, Premier, IRCTC & Snapdeal cards with RBI caveats.',
    type: 'article',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://www.credsettle.com/bank-of-baroda-credit-card-settlement-percentage',
    images: [
      {
        url: 'https://www.credsettle.com/credsettle-logo-black.png',
        width: 1200,
        height: 630,
        alt: 'Bank of Baroda BOBCARD Credit Card Settlement Percentage Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bank of Baroda Credit Card Settlement % (BoB) | CredSettle',
    description:
      'Check indicative Bank of Baroda (BOBCARD) credit card settlement percentage ranges for Eterna, Premier, IRCTC & Snapdeal cards with RBI caveats.',
    images: ['https://www.credsettle.com/credsettle-logo-black.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function BankOfBarodaCardSettlementPercentagePage() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id':
          'https://www.credsettle.com/bank-of-baroda-credit-card-settlement-percentage#article',
        headline: 'Bank of Baroda (BOBCARD) Credit Card Settlement Percentage Ranges & Rules',
        description:
          'Check indicative Bank of Baroda (BOBCARD) credit card settlement percentage ranges for Eterna, Premier, IRCTC & Snapdeal cards with RBI caveats.',
        inLanguage: 'en-IN',
        mainEntityOfPage:
          'https://www.credsettle.com/bank-of-baroda-credit-card-settlement-percentage',
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
        '@id':
          'https://www.credsettle.com/bank-of-baroda-credit-card-settlement-percentage#breadcrumb',
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
            name: 'Bank of Baroda Settlement',
            item: 'https://www.credsettle.com/loan-settlement/bank-of-baroda',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'BoB Credit Card Settlement %',
            item: 'https://www.credsettle.com/bank-of-baroda-credit-card-settlement-percentage',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://www.credsettle.com/bank-of-baroda-credit-card-settlement-percentage#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Who issues Bank of Baroda credit cards and approves settlement offers?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Bank of Baroda cards are issued by BOBCARD Limited (formerly BOB Financial), a separate NBFC unit. Your OTS letter and No Dues Certificate must come from BOBCARD Limited.',
            },
          },
          {
            '@type': 'Question',
            name: 'What is the typical BOBCARD settlement percentage in India?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'On unsecured NPA BOBCARD bills past 90 to 180 days late, past OTS deals often land at 40% to 65% of total dues. Final terms depend on real spends vs fees and are never assured.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can I settle my BoB credit card at a local Bank of Baroda branch OTS camp?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Most often no. Local Bank of Baroda branch OTS camps cover shop, farm, and home loans. Credit card OTS deals are run centrally by BOBCARD Limited.',
            },
          },
          {
            '@type': 'Question',
            name: 'Are FD-backed Bank of Baroda Prime cards eligible for OTS waivers?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. Secured BoB Prime cards backed by a fixed deposit close by breaking that FD rather than giving an unsecured OTS cut.',
            },
          },
          {
            '@type': 'Question',
            name: 'What happens to Smart EMI plans on Eterna, Premier, or Snapdeal BoB cards?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Once a BOBCARD crosses 90 days late into NPA stage, open store EMIs and Smart EMI plans stop and merge into one card bill.',
            },
          },
          {
            '@type': 'Question',
            name: 'How do I pay an approved BOBCARD One-Time Settlement safely?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Check your BOBCARD OTS letter first. Then pay straight into your 16-digit BOBCARD number via bobcard.co.in, BillDesk, BBPS, or NEFT.',
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
      <BobCardSettlementPctClient />
      <Footer hideFunnel />
    </div>
  );
}
