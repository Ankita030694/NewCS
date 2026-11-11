import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import OverLimitLateFeeClient from './OverLimitLateFeeClient';

export const metadata: Metadata = {
  title: 'Credit Card Over-Limit & Late Fees Before OTS | CredSettle',
  description:
    'Why do credit card over-limit fees, late charges, and 18% GST double your bill before settlement? Learn RBI fee rules and fee waiver strategies.',
  keywords: [
    'credit card over limit and late fee before settlement',
    'rbi rules on credit card over limit charges',
    'credit card late payment fee waiver settlement',
    'why credit card bill doubled in 6 months',
    '18 percent gst on credit card late fees',
  ],
  alternates: {
    canonical: 'https://www.credsettle.com/credit-card-over-limit-and-late-fee-before-settlement',
  },
  openGraph: {
    title: 'Credit Card Over-Limit & Late Fees Before OTS | CredSettle',
    description:
      'Why do credit card over-limit fees, late charges, and 18% GST double your bill before settlement? Learn RBI fee rules and fee waiver strategies.',
    type: 'article',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://www.credsettle.com/credit-card-over-limit-and-late-fee-before-settlement',
    images: [
      {
        url: 'https://www.credsettle.com/credsettle-logo-black.png',
        width: 1200,
        height: 630,
        alt: 'Credit Card Over-Limit and Late Fees Before Settlement Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Credit Card Over-Limit & Late Fees Before OTS | CredSettle',
    description:
      'Why do credit card over-limit fees, late charges, and 18% GST double your bill before settlement? Learn RBI fee rules and fee waiver strategies.',
    images: ['https://www.credsettle.com/credsettle-logo-black.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function CreditCardOverLimitLateFeePage() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id':
          'https://www.credsettle.com/credit-card-over-limit-and-late-fee-before-settlement#article',
        headline: 'Credit Card Over-Limit & Late Fees Before Settlement: RBI Rules & Waiver Math',
        description:
          'Why do credit card over-limit fees, late charges, and 18% GST double your bill before settlement? Learn RBI fee rules and fee waiver strategies.',
        inLanguage: 'en-IN',
        mainEntityOfPage:
          'https://www.credsettle.com/credit-card-over-limit-and-late-fee-before-settlement',
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
          'https://www.credsettle.com/credit-card-over-limit-and-late-fee-before-settlement#breadcrumb',
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
            name: 'Over-Limit & Late Fees Before Settlement',
            item: 'https://www.credsettle.com/credit-card-over-limit-and-late-fee-before-settlement',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id':
          'https://www.credsettle.com/credit-card-over-limit-and-late-fee-before-settlement#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Can an Indian bank charge a credit card over-limit fee without my consent?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. Under the RBI Credit Card Master Direction (updated March 7, 2024), banks cannot enable over-limit facility or charge over-limit fees unless the cardholder gave explicit opt-in consent, and never merely because bank interest or fees pushed the balance past the limit.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can banks charge compounding interest on unpaid late payment fees?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. Under RBI rules on penal charges and the Credit Card Master Direction, late payment fees and penal charges cannot be capitalized to charge further compounding interest.',
            },
          },
          {
            '@type': 'Question',
            name: 'Why did my ₹1.5 Lakh credit card balance become ₹2.4 Lakh in six months?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Six months of non-payment stacks 3.5% to 3.99% monthly finance fees on principal, ₹1,000 to ₹1,300 monthly late fees, NACH bounce fees, EMI foreclosure fees, and 18% GST on every fee line.',
            },
          },
          {
            '@type': 'Question',
            name: 'Do banks waive late fees and over-limit charges during One-Time Settlement?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'In most NPA credit card settlements past 90 to 180 days overdue, banks waive accrued penal fees and uncollected finance charges first, negotiating around your verified principal spend, subject to bank policy.',
            },
          },
          {
            '@type': 'Question',
            name: 'Should I download my past statements before my card app gets locked?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Saving your last active statement before default proves your true principal spend versus six months of added fees, which strengthens settlement talks.',
            },
          },
          {
            '@type': 'Question',
            name: 'Where do I complain if a bank charged illegal over-limit fees without opt-in?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Write to the bank Grievance Officer and Principal Nodal Officer citing the RBI Credit Card Master Direction. If unresolved in 30 days, file a free complaint on cms.rbi.org.in.',
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
      <OverLimitLateFeeClient />
      <Footer hideFunnel />
    </div>
  );
}
