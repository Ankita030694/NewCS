import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import IciciCardBlockedClient from './IciciCardBlockedClient';

export const metadata: Metadata = {
  title: 'ICICI Credit Card Blocked Due to Non-Payment | CredSettle',
  description:
    'ICICI credit card blocked due to non-payment? Check iMobile Pay block rules, reactivation steps, linked bank hold risks, and legal OTS options.',
  keywords: [
    'icici credit card blocked due to non payment',
    'how to unblock icici credit card after overdue',
    'icici imobile pay credit card blocked',
    'icici amazon pay card blocked non payment',
    'icici credit card permanent block settlement',
  ],
  alternates: {
    canonical: 'https://www.credsettle.com/icici-credit-card-blocked-due-to-non-payment',
  },
  openGraph: {
    title: 'ICICI Credit Card Blocked Due to Non-Payment | CredSettle',
    description:
      'ICICI credit card blocked due to non-payment? Check iMobile Pay block rules, reactivation steps, linked bank hold risks, and legal OTS options.',
    type: 'article',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://www.credsettle.com/icici-credit-card-blocked-due-to-non-payment',
    images: [
      {
        url: 'https://www.credsettle.com/credsettle-logo-black.png',
        width: 1200,
        height: 630,
        alt: 'ICICI Credit Card Blocked Due to Non-Payment Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ICICI Credit Card Blocked Due to Non-Payment | CredSettle',
    description:
      'ICICI credit card blocked due to non-payment? Check iMobile Pay block rules, reactivation steps, linked bank hold risks, and legal OTS options.',
    images: ['https://www.credsettle.com/credsettle-logo-black.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function IciciCreditCardBlockedPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': 'https://www.credsettle.com/icici-credit-card-blocked-due-to-non-payment#article',
        headline: 'ICICI Credit Card Blocked Due to Non-Payment: iMobile Rules, Holds & OTS',
        description:
          'ICICI credit card blocked due to non-payment? Check iMobile Pay block rules, reactivation steps, linked bank hold risks, and legal OTS options.',
        inLanguage: 'en-IN',
        mainEntityOfPage: 'https://www.credsettle.com/icici-credit-card-blocked-due-to-non-payment',
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
        '@id': 'https://www.credsettle.com/icici-credit-card-blocked-due-to-non-payment#breadcrumb',
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
            name: 'Credit Card Blocked Guide',
            item: 'https://www.credsettle.com/credit-card-blocked-due-to-non-payment',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'ICICI Credit Card Blocked',
            item: 'https://www.credsettle.com/icici-credit-card-blocked-due-to-non-payment',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://www.credsettle.com/icici-credit-card-blocked-due-to-non-payment#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'When does ICICI Bank block a credit card for non-payment?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'After the mandatory RBI three-day grace window past your payment due date, ICICI Bank can place a temporary spend hold within 7 to 30 days of missing Minimum Amount Due. Past 90 days overdue, ICICI closes the card permanently as NPA.',
            },
          },
          {
            '@type': 'Question',
            name: 'Does an overdue block on Amazon Pay ICICI Card also block Coral or Rubyx cards?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. ICICI Bank links multiple cards held by one customer under a shared customer ID and credit limit. Missing bills on one ICICI card usually freezes spending across all linked ICICI cards.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can I unblock my ICICI credit card on iMobile Pay after paying overdue dues?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'If your card is under 60 days past due in a temporary hold, paying the full overdue minimum via iMobile Pay, UPI, or BBPS usually restores card access within 24 to 48 hours. Permanently closed NPA cards cannot reopen.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can ICICI Bank hold money in my ICICI savings account for unpaid card bills?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Because ICICI Bank issues credit cards directly, its card agreement includes a banker lien and set-off right under Section 171 of the Indian Contract Act over linked ICICI deposit accounts.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can I settle a permanently blocked ICICI credit card during financial hardship?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Once an ICICI card crosses 90+ days overdue into NPA status and you face real hardship, ICICI reviews One-Time Settlement offers. Past settlements often range between 40% and 60% of total dues, subject to bank approval.',
            },
          },
          {
            '@type': 'Question',
            name: 'How should I pay an approved ICICI credit card settlement safely?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Verify your official ICICI OTS sanction letter first, then pay directly to your 16-digit ICICI card number via NEFT, ICICI NetBanking, or official BillDesk channels. Never send cash to private UPI IDs.',
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
      <IciciCardBlockedClient />
      <Footer hideFunnel />
    </div>
  );
}
