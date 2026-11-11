import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HsbcCardSettlementPctClient from './HsbcCardSettlementPctClient';

export const metadata: Metadata = {
  title: 'HSBC Credit Card Settlement Percentage India | CredSettle',
  description:
    'Review indicative HSBC India credit card settlement percentage ranges for Visa Platinum, Live+, TravelOne & Premier cards under RBI OTS rules.',
  keywords: [
    'hsbc credit card settlement percentage',
    'hsbc india credit card ots waiver',
    'hsbc visa platinum credit card settlement',
    'hsbc live plus credit card default settlement',
    'hsbc credit card settlement process india',
  ],
  alternates: {
    canonical: 'https://www.credsettle.com/hsbc-credit-card-settlement-percentage',
  },
  openGraph: {
    title: 'HSBC Credit Card Settlement Percentage India | CredSettle',
    description:
      'Review indicative HSBC India credit card settlement percentage ranges for Visa Platinum, Live+, TravelOne & Premier cards under RBI OTS rules.',
    type: 'article',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://www.credsettle.com/hsbc-credit-card-settlement-percentage',
    images: [
      {
        url: 'https://www.credsettle.com/credsettle-logo-black.png',
        width: 1200,
        height: 630,
        alt: 'HSBC Credit Card Settlement Percentage India Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HSBC Credit Card Settlement Percentage India | CredSettle',
    description:
      'Review indicative HSBC India credit card settlement percentage ranges for Visa Platinum, Live+, TravelOne & Premier cards under RBI OTS rules.',
    images: ['https://www.credsettle.com/credsettle-logo-black.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function HsbcCardSettlementPercentagePage() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': 'https://www.credsettle.com/hsbc-credit-card-settlement-percentage#article',
        headline: 'HSBC India Credit Card Settlement Percentage Ranges, Compliance & OTS Rules',
        description:
          'Review indicative HSBC India credit card settlement percentage ranges for Visa Platinum, Live+, TravelOne & Premier cards under RBI OTS rules.',
        inLanguage: 'en-IN',
        mainEntityOfPage: 'https://www.credsettle.com/hsbc-credit-card-settlement-percentage',
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
        '@id': 'https://www.credsettle.com/hsbc-credit-card-settlement-percentage#breadcrumb',
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
            name: 'HSBC Credit Card Settlement %',
            item: 'https://www.credsettle.com/hsbc-credit-card-settlement-percentage',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://www.credsettle.com/hsbc-credit-card-settlement-percentage#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What is the realistic HSBC credit card settlement percentage in India?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'On aged HSBC India NPA cards past 120 to 180 days late, past settlements often land at 45% to 65% of the full bill. HSBC checks proof closely and never promises a fixed cut.',
            },
          },
          {
            '@type': 'Question',
            name: 'Why are HSBC India credit card OTS audits stricter than app lenders?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'HSBC gives cards mostly to metro salaried users with strong profiles. Its global rules need clear proof of job loss, pay cuts, or hospital bills before cutting dues.',
            },
          },
          {
            '@type': 'Question',
            name: 'What happens to HSBC Loan on Phone or Cash on Card plans in default?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Past 90 days late, HSBC stops open Loan on Phone and store EMI plans. All left-over principal drops straight into your main card bill.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can HSBC hold money in my HSBC salary or Premier account?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. If your pay or savings sit in HSBC India, your card deal lets HSBC place a direct lien and pull cash from that account.',
            },
          },
          {
            '@type': 'Question',
            name: 'How should I pay an approved HSBC credit card settlement?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'First check your HSBC OTS letter with HSBC phone banking. Then pay straight to your 16-digit HSBC card number via NEFT or BillDesk.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can NRIs settle an overdue HSBC India credit card from abroad?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. NRIs hit by job loss abroad or visa issues can ask for a written OTS deal and pay their 16-digit HSBC card via NRO or NEFT.',
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
      <HsbcCardSettlementPctClient />
      <Footer hideFunnel />
    </div>
  );
}
