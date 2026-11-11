import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SbiCardBlockedClient from './SbiCardBlockedClient';

export const metadata: Metadata = {
  title: 'SBI Credit Card Blocked Due to Non-Payment | CredSettle',
  description:
    'SBI credit card blocked due to non-payment? Learn SBICPSL block stages, SBI Card app reactivation steps, NACH rules, and OTS settlement options.',
  keywords: [
    'sbi credit card blocked due to non payment',
    'how to unblock sbi credit card after non payment',
    'sbicpsl card blocked overdue',
    'sbi card permanently blocked settlement',
    'sbi card reactivation after payment',
  ],
  alternates: {
    canonical: 'https://www.credsettle.com/sbi-credit-card-blocked-due-to-non-payment',
  },
  openGraph: {
    title: 'SBI Credit Card Blocked Due to Non-Payment | CredSettle',
    description:
      'SBI credit card blocked due to non-payment? Learn SBICPSL block stages, SBI Card app reactivation steps, NACH rules, and OTS settlement options.',
    type: 'article',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://www.credsettle.com/sbi-credit-card-blocked-due-to-non-payment',
    images: [
      {
        url: 'https://www.credsettle.com/credsettle-logo-black.png',
        width: 1200,
        height: 630,
        alt: 'SBI Credit Card Blocked Due to Non-Payment Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SBI Credit Card Blocked Due to Non-Payment | CredSettle',
    description:
      'SBI credit card blocked due to non-payment? Learn SBICPSL block stages, SBI Card app reactivation steps, NACH rules, and OTS settlement options.',
    images: ['https://www.credsettle.com/credsettle-logo-black.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function SbiCreditCardBlockedPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': 'https://www.credsettle.com/sbi-credit-card-blocked-due-to-non-payment#article',
        headline: 'SBI Credit Card Blocked Due to Non-Payment: SBICPSL Rules, Reactivation & OTS',
        description:
          'SBI credit card blocked due to non-payment? Learn SBICPSL block stages, SBI Card app reactivation steps, NACH rules, and OTS settlement options.',
        inLanguage: 'en-IN',
        mainEntityOfPage: 'https://www.credsettle.com/sbi-credit-card-blocked-due-to-non-payment',
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
        '@id': 'https://www.credsettle.com/sbi-credit-card-blocked-due-to-non-payment#breadcrumb',
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
            name: 'SBI Credit Card Blocked',
            item: 'https://www.credsettle.com/sbi-credit-card-blocked-due-to-non-payment',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://www.credsettle.com/sbi-credit-card-blocked-due-to-non-payment#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Can my local State Bank of India branch unblock or settle my SBI credit card?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. SBI credit cards are issued by SBI Cards and Payment Services Limited (SBICPSL), a separate RBI-registered NBFC subsidiary. Retail SBI bank branches cannot unblock cards or approve credit card settlements.',
            },
          },
          {
            '@type': 'Question',
            name: 'When does SBI Card block a credit card for non-payment?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'After the three-day RBI grace period past your payment due date, SBI Card can place a temporary spend hold within 7 to 30 days of missing Minimum Amount Due. Past 90 days overdue, SBICPSL permanently closes the card as NPA.',
            },
          },
          {
            '@type': 'Question',
            name: 'How long does SBI Card take to unblock a temporarily suspended card?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'If your SBI Card is under 60 days overdue and only temporarily blocked, paying the full overdue balance via the SBI Card mobile app, PayNet, or BBPS normally lifts the hold in 24 to 48 hours.',
            },
          },
          {
            '@type': 'Question',
            name: 'What happens to Flexipay EMIs when an SBI credit card is permanently blocked?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'When an SBI Card enters permanent NPA block after 90 days of non-payment, SBICPSL forecloses active Flexipay and Encash plans, adding remaining principal and foreclosure fees into the total card balance.',
            },
          },
          {
            '@type': 'Question',
            name: 'Does SBI Rinn Samadhan PSU bank OTS apply to SBI credit cards?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. SBI Rinn Samadhan schemes cover State Bank of India retail and MSME bank loans. SBI Card (SBICPSL) runs its own separate board-approved compromise settlement process for overdue credit cards.',
            },
          },
          {
            '@type': 'Question',
            name: 'What is a realistic settlement range on a permanently blocked SBI credit card?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'On NPA accounts past 90 to 180 days overdue with documented hardship, indicative SBICPSL settlements often fall between 40% and 60% of the total billed balance, though waivers are discretionary and never guaranteed.',
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
      <SbiCardBlockedClient />
      <Footer hideFunnel />
    </div>
  );
}
