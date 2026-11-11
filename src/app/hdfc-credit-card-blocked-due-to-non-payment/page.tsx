import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HdfcCardBlockedClient from './HdfcCardBlockedClient';

export const metadata: Metadata = {
  title: 'HDFC Credit Card Blocked Due to Non-Payment | CredSettle',
  description:
    'HDFC credit card blocked due to non-payment? Check MyCards block codes, reactivation rules, HDFC account set-off risks, and legal OTS relief.',
  keywords: [
    'hdfc credit card blocked due to non payment',
    'how to unblock hdfc credit card after overdue payment',
    'hdfc mycards card blocked non payment',
    'hdfc credit card permanent block settlement',
    'hdfc savings account hold for credit card dues',
  ],
  alternates: {
    canonical: 'https://www.credsettle.com/hdfc-credit-card-blocked-due-to-non-payment',
  },
  openGraph: {
    title: 'HDFC Credit Card Blocked Due to Non-Payment | CredSettle',
    description:
      'HDFC credit card blocked due to non-payment? Check MyCards block codes, reactivation rules, HDFC account set-off risks, and legal OTS relief.',
    type: 'article',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://www.credsettle.com/hdfc-credit-card-blocked-due-to-non-payment',
    images: [
      {
        url: 'https://www.credsettle.com/credsettle-logo-black.png',
        width: 1200,
        height: 630,
        alt: 'HDFC Credit Card Blocked Due to Non-Payment Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HDFC Credit Card Blocked Due to Non-Payment | CredSettle',
    description:
      'HDFC credit card blocked due to non-payment? Check MyCards block codes, reactivation rules, HDFC account set-off risks, and legal OTS relief.',
    images: ['https://www.credsettle.com/credsettle-logo-black.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function HdfcCreditCardBlockedPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': 'https://www.credsettle.com/hdfc-credit-card-blocked-due-to-non-payment#article',
        headline: 'HDFC Credit Card Blocked Due to Non-Payment: MyCards Holds, Lien & Settlement',
        description:
          'HDFC credit card blocked due to non-payment? Check MyCards block codes, reactivation rules, HDFC account set-off risks, and legal OTS relief.',
        inLanguage: 'en-IN',
        mainEntityOfPage: 'https://www.credsettle.com/hdfc-credit-card-blocked-due-to-non-payment',
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
        '@id': 'https://www.credsettle.com/hdfc-credit-card-blocked-due-to-non-payment#breadcrumb',
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
            name: 'HDFC Credit Card Blocked',
            item: 'https://www.credsettle.com/hdfc-credit-card-blocked-due-to-non-payment',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://www.credsettle.com/hdfc-credit-card-blocked-due-to-non-payment#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'How long after missing an HDFC credit card bill does the card get blocked?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'HDFC Bank allows the mandatory RBI three-day grace window past your payment due date. If Minimum Amount Due stays unpaid past those three days, a temporary spend block can start within 7 to 30 days, while 90+ days overdue leads to permanent NPA block.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can I reactivate my HDFC credit card on MyCards after paying overdue dues?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'If your HDFC card is in a temporary overdue hold under 60 days past due, clearing the full overdue minimum via BillDesk, UPI, or HDFC NetBanking usually restores active status within 24 to 48 hours. Permanently closed NPA cards cannot be reopened on MyCards.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can HDFC Bank place a hold on my HDFC savings account for unpaid card bills?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Because HDFC Bank issues its credit cards directly on its own bank balance sheet, card agreements include a banker lien and set-off clause under Section 171 of the Indian Contract Act. Unpaid card dues can trigger holds on linked HDFC bank accounts.',
            },
          },
          {
            '@type': 'Question',
            name: 'What happens to shared limits if I hold two HDFC credit cards and miss one bill?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Many HDFC Bank secondary cards, such as Tata Neu or Rupay UPI cards, share a combined credit limit with your primary HDFC card. When one card is blocked for overdue dues, HDFC usually freezes swipes across all linked cards.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can a permanently blocked HDFC credit card be settled via One-Time Settlement?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Once an HDFC card crosses 90+ days past due into NPA stage and you have verifiable financial hardship, HDFC reviews compromise OTS proposals. Indicative settlements often fall between 40% and 60% of the total bill, subject to bank approval.',
            },
          },
          {
            '@type': 'Question',
            name: 'How do I pay a blocked HDFC credit card safely during settlement?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Always pay directly into your 16-digit HDFC credit card account via NEFT, HDFC NetBanking, or official BillDesk channels only after verifying your written HDFC OTS sanction letter. Never transfer funds to personal UPI IDs.',
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
      <HdfcCardBlockedClient />
      <Footer hideFunnel />
    </div>
  );
}
