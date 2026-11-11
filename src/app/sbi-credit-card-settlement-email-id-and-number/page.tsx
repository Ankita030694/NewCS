import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SbiCardSettlementContactClient from './SbiCardSettlementContactClient';

export const metadata: Metadata = {
  title: 'SBI Credit Card Settlement Email ID & Number | CredSettle',
  description:
    'Verified SBI Card settlement email ID, helpline numbers, and SBICPSL nodal officer contacts from sbicard.com. Spot fake OTS letters safely now.',
  keywords: [
    'sbi credit card settlement email id',
    'sbi credit card settlement contact number',
    'sbi card nodal officer email id',
    'sbicpsl settlement letter verification',
    'customercare sbicard com settlement',
  ],
  alternates: {
    canonical: 'https://www.credsettle.com/sbi-credit-card-settlement-email-id-and-number',
  },
  openGraph: {
    title: 'SBI Credit Card Settlement Email ID & Number | CredSettle',
    description:
      'Verified SBI Card settlement email ID, helpline numbers, and SBICPSL nodal officer contacts from sbicard.com. Spot fake OTS letters safely now.',
    type: 'article',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://www.credsettle.com/sbi-credit-card-settlement-email-id-and-number',
    images: [
      {
        url: 'https://www.credsettle.com/credsettle-logo-black.png',
        width: 1200,
        height: 630,
        alt: 'Official SBI Credit Card Settlement Email ID and Helpline Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SBI Credit Card Settlement Email ID & Number | CredSettle',
    description:
      'Verified SBI Card settlement email ID, helpline numbers, and SBICPSL nodal officer contacts from sbicard.com. Spot fake OTS letters safely now.',
    images: ['https://www.credsettle.com/credsettle-logo-black.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function SbiCreditCardSettlementEmailNumberPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': 'https://www.credsettle.com/sbi-credit-card-settlement-email-id-and-number#article',
        headline: 'Official SBI Credit Card Settlement Email ID, Helpline & Nodal Escalation',
        description:
          'Verified SBI Card settlement email ID, helpline numbers, and SBICPSL nodal officer contacts from sbicard.com. Spot fake OTS letters safely now.',
        inLanguage: 'en-IN',
        mainEntityOfPage:
          'https://www.credsettle.com/sbi-credit-card-settlement-email-id-and-number',
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
          'https://www.credsettle.com/sbi-credit-card-settlement-email-id-and-number#breadcrumb',
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
            name: 'SBI Credit Card Blocked Guide',
            item: 'https://www.credsettle.com/sbi-credit-card-blocked-due-to-non-payment',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'SBI Card Settlement Email & Number',
            item: 'https://www.credsettle.com/sbi-credit-card-settlement-email-id-and-number',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://www.credsettle.com/sbi-credit-card-settlement-email-id-and-number#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Does SBI Card publish a separate public settlement email ID on sbicard.com?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'SBI Card (SBICPSL) routes cardholder requests through its official support email customercare@sbicard.com, the logged-in sbicard.com web mailbox, and its three-level grievance escalation matrix.',
            },
          },
          {
            '@type': 'Question',
            name: 'What are the official SBI Card customer care helpline numbers?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Per sbicard.com (checked 11 November 2026), official SBI Card helplines are 1800 180 1290 (toll-free), 1860 500 1290, 1860 180 1290, and (STD Code) 39 02 02 02, plus grievance line 1860 180 7777.',
            },
          },
          {
            '@type': 'Question',
            name: 'How do I check if an SBI Card settlement letter sent on WhatsApp is genuine?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Never rely on WhatsApp PDFs or emails from @gmail.com or @yahoo.com. Genuine SBI Card OTS letters originate from @sbicard.com and can be verified by calling 1800 180 1290 or checking your SBI Card app.',
            },
          },
          {
            '@type': 'Question',
            name: 'What are the official SBICPSL Nodal Officer email IDs for unresolved disputes?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Per sbicard.com (checked 11 November 2026), Level 1 is CustomerServiceHead@sbicard.com, Level 2 is nodalofficer@sbicard.com, and Level 3 is PrincipalNodalOfficer@sbicard.com.',
            },
          },
          {
            '@type': 'Question',
            name: 'Should I email State Bank of India (@sbi.co.in) for SBI credit card settlement?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. Retail bank @sbi.co.in desks handle State Bank of India savings and loan accounts. Credit cards are managed by SBI Cards and Payment Services Limited at @sbicard.com.',
            },
          },
          {
            '@type': 'Question',
            name: 'Where should I make payment after verifying my SBI Card settlement letter?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Pay only into your 16-digit SBI Card number using official SBI Card PayNet, BBPS, NEFT, or the SBI Card mobile app. Never pay personal UPI IDs or third-party bank accounts.',
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
      <SbiCardSettlementContactClient />
      <Footer hideFunnel />
    </div>
  );
}
