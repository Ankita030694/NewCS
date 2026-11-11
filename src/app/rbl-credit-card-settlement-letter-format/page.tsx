import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import RblSettlementLetterClient from './RblSettlementLetterClient';

export const metadata: Metadata = {
  title: 'RBL Credit Card Settlement Letter Format | CredSettle',
  description:
    'Check the official RBL Bank credit card settlement letter format, mandatory OTS clauses, Bajaj SuperCard notes, and fake letter checks in India.',
  keywords: [
    'rbl credit card settlement letter format',
    'rbl bank ots sanction letter sample',
    'rbl bajaj finserv supercard settlement letter',
    'how to verify rbl credit card settlement letter',
    'rbl credit card request letter for settlement',
  ],
  alternates: {
    canonical: 'https://www.credsettle.com/rbl-credit-card-settlement-letter-format',
  },
  openGraph: {
    title: 'RBL Credit Card Settlement Letter Format | CredSettle',
    description:
      'Check the official RBL Bank credit card settlement letter format, mandatory OTS clauses, Bajaj SuperCard notes, and fake letter checks in India.',
    type: 'article',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://www.credsettle.com/rbl-credit-card-settlement-letter-format',
    images: [
      {
        url: 'https://www.credsettle.com/credsettle-logo-black.png',
        width: 1200,
        height: 630,
        alt: 'RBL Credit Card Settlement Letter Format Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RBL Credit Card Settlement Letter Format | CredSettle',
    description:
      'Check the official RBL Bank credit card settlement letter format, mandatory OTS clauses, Bajaj SuperCard notes, and fake letter checks in India.',
    images: ['https://www.credsettle.com/credsettle-logo-black.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RblCreditCardSettlementLetterPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': 'https://www.credsettle.com/rbl-credit-card-settlement-letter-format#article',
        headline: 'RBL Credit Card Settlement Letter Format: Request Template & Sanction Checks',
        description:
          'Check the official RBL Bank credit card settlement letter format, mandatory OTS clauses, Bajaj SuperCard notes, and fake letter checks in India.',
        inLanguage: 'en-IN',
        mainEntityOfPage: 'https://www.credsettle.com/rbl-credit-card-settlement-letter-format',
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
        '@id': 'https://www.credsettle.com/rbl-credit-card-settlement-letter-format#breadcrumb',
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
            name: 'RBL Bank Settlement',
            item: 'https://www.credsettle.com/loan-settlement/rbl-bank',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'RBL Card Settlement Letter Format',
            item: 'https://www.credsettle.com/rbl-credit-card-settlement-letter-format',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://www.credsettle.com/rbl-credit-card-settlement-letter-format#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What are the two types of RBL credit card settlement letters?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'First is the hardship settlement request letter you send to RBL Bank explaining why you cannot pay in full. Second is the official OTS sanction letter RBL Bank issues to you before you pay the agreed settlement sum.',
            },
          },
          {
            '@type': 'Question',
            name: 'Who issues the settlement letter for a Bajaj Finserv RBL Bank SuperCard?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Even on co-branded Bajaj Finserv RBL SuperCards, RBL Bank Limited is the licensed card issuer. Your official OTS sanction letter and No Dues Certificate must come from RBL Bank.',
            },
          },
          {
            '@type': 'Question',
            name: 'What mandatory clauses must appear on a genuine RBL Bank OTS letter?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'A valid RBL OTS letter must show an RBL reference number, masked 16-digit card number, total outstanding including unbilled EMIs, exact settlement amount, tranche due dates, full waiver of remaining dues, and NDC issuance timeline.',
            },
          },
          {
            '@type': 'Question',
            name: 'What happens if I miss one instalment date in a 3-part RBL settlement letter?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'RBL OTS letters carry a strict null-and-void clause. Missing even one tranche deadline cancels the entire waiver and adjusts what you already paid against interest and fees.',
            },
          },
          {
            '@type': 'Question',
            name: 'How do I verify an RBL credit card settlement letter before paying?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Check that the email arrived from an official @rblbank.com address and confirm the reference number directly with RBL Bank card customer service before paying into your 16-digit RBL card account.',
            },
          },
          {
            '@type': 'Question',
            name: 'How will RBL Bank report my credit card to CIBIL after settlement?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Once all tranches in the RBL OTS letter are paid, RBL Bank closes the card with zero balance due and reports the status as Settled to CIBIL and other credit bureaus.',
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
      <RblSettlementLetterClient />
      <Footer hideFunnel />
    </div>
  );
}
