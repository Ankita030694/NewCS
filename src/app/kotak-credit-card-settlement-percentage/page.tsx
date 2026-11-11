import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import KotakCardSettlementPctClient from './KotakCardSettlementPctClient';

export const metadata: Metadata = {
  title: 'Kotak Credit Card Settlement Percentage Guide | CredSettle',
  description:
    'Explore realistic Kotak Mahindra Bank credit card settlement percentage ranges across League, Zen, Mojo & Myntra cards, plus RBI OTS caveats now.',
  keywords: [
    'kotak credit card settlement percentage',
    'kotak mahindra bank credit card ots discount',
    'kotak league card settlement',
    'kotak 811 credit card default settlement',
    'kotak credit card npa waiver range',
  ],
  alternates: {
    canonical: 'https://www.credsettle.com/kotak-credit-card-settlement-percentage',
  },
  openGraph: {
    title: 'Kotak Credit Card Settlement Percentage Guide | CredSettle',
    description:
      'Explore realistic Kotak Mahindra Bank credit card settlement percentage ranges across League, Zen, Mojo & Myntra cards, plus RBI OTS caveats now.',
    type: 'article',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://www.credsettle.com/kotak-credit-card-settlement-percentage',
    images: [
      {
        url: 'https://www.credsettle.com/credsettle-logo-black.png',
        width: 1200,
        height: 630,
        alt: 'Kotak Credit Card Settlement Percentage Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kotak Credit Card Settlement Percentage Guide | CredSettle',
    description:
      'Explore realistic Kotak Mahindra Bank credit card settlement percentage ranges across League, Zen, Mojo & Myntra cards, plus RBI OTS caveats now.',
    images: ['https://www.credsettle.com/credsettle-logo-black.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function KotakCardSettlementPercentagePage() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': 'https://www.credsettle.com/kotak-credit-card-settlement-percentage#article',
        headline: 'Kotak Mahindra Credit Card Settlement Percentage Ranges & OTS Rules',
        description:
          'Explore realistic Kotak Mahindra Bank credit card settlement percentage ranges across League, Zen, Mojo & Myntra cards, plus RBI OTS caveats now.',
        inLanguage: 'en-IN',
        mainEntityOfPage: 'https://www.credsettle.com/kotak-credit-card-settlement-percentage',
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
        '@id': 'https://www.credsettle.com/kotak-credit-card-settlement-percentage#breadcrumb',
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
            name: 'Kotak Bank Settlement',
            item: 'https://www.credsettle.com/loan-settlement/kotak',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Kotak Credit Card Settlement %',
            item: 'https://www.credsettle.com/kotak-credit-card-settlement-percentage',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://www.credsettle.com/kotak-credit-card-settlement-percentage#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What settlement percentage does Kotak Mahindra Bank accept on credit cards?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'On unsecured NPA Kotak cards past 90 to 180 days overdue, historical One-Time Settlements often fall between 40% and 60% of the total statement balance. Approval depends on hardship proof and fee share, and is never guaranteed.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can an FD-backed Kotak 811 Dream Different card be settled for 50%?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. On FD-backed secured cards like Kotak 811 Dream Different, the bank holds a fixed deposit pledge and recovers unpaid dues directly by liquidating your FD.',
            },
          },
          {
            '@type': 'Question',
            name: 'How do Kotak SmartEMI or Loan on Credit Card plans affect settlement math?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'At 90 days past due, Kotak cancels open merchant EMIs and SmartEMI plans and adds all unbilled principal into one card bill. Your OTS offer is then calculated on that full merged balance.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can Kotak Mahindra Bank hold money in my Kotak 811 savings account?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Kotak card terms allow a banker lien and set-off right over linked Kotak savings or salary accounts under Section 171 of the Contract Act.',
            },
          },
          {
            '@type': 'Question',
            name: 'How do I verify a genuine Kotak credit card OTS letter before paying?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Ensure the sanction letter arrives from an official @kotak.com domain, check the reference ID with Kotak customer care, and pay straight to your 16-digit Kotak card number.',
            },
          },
          {
            '@type': 'Question',
            name: 'When does Kotak issue the No Dues Certificate after settlement?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'After all agreed OTS instalments clear on time, Kotak closes the card account and typically issues a No Dues Certificate within 30 to 45 working days.',
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
      <KotakCardSettlementPctClient />
      <Footer hideFunnel />
    </div>
  );
}
