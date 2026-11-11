import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CardEmiDefaultClient from './CardEmiDefaultClient';

export const metadata: Metadata = {
  title: 'Credit Card EMI Conversion Default Settlement | CredSettle',
  description:
    'Defaulted on credit card merchant EMIs or jumbo loans? Learn how banks foreclose unbilled EMIs at 90 DPD and how One-Time Settlement works now.',
  keywords: [
    'credit card emi conversion default settlement',
    'what happens if i miss credit card emi payment',
    'smartemi flexipay default foreclosure',
    'jumbo loan on credit card settlement',
    'unbilled credit card emi in settlement',
  ],
  alternates: {
    canonical: 'https://www.credsettle.com/credit-card-emi-conversion-default-settlement',
  },
  openGraph: {
    title: 'Credit Card EMI Conversion Default Settlement | CredSettle',
    description:
      'Defaulted on credit card merchant EMIs or jumbo loans? Learn how banks foreclose unbilled EMIs at 90 DPD and how One-Time Settlement works now.',
    type: 'article',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://www.credsettle.com/credit-card-emi-conversion-default-settlement',
    images: [
      {
        url: 'https://www.credsettle.com/credsettle-logo-black.png',
        width: 1200,
        height: 630,
        alt: 'Credit Card EMI Conversion Default Settlement Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Credit Card EMI Conversion Default Settlement | CredSettle',
    description:
      'Defaulted on credit card merchant EMIs or jumbo loans? Learn how banks foreclose unbilled EMIs at 90 DPD and how One-Time Settlement works now.',
    images: ['https://www.credsettle.com/credsettle-logo-black.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function CreditCardEmiConversionDefaultPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': 'https://www.credsettle.com/credit-card-emi-conversion-default-settlement#article',
        headline: 'Credit Card EMI Conversion Default: Unbilled Foreclosure & Settlement Rules',
        description:
          'Defaulted on credit card merchant EMIs or jumbo loans? Learn how banks foreclose unbilled EMIs at 90 DPD and how One-Time Settlement works now.',
        inLanguage: 'en-IN',
        mainEntityOfPage:
          'https://www.credsettle.com/credit-card-emi-conversion-default-settlement',
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
          'https://www.credsettle.com/credit-card-emi-conversion-default-settlement#breadcrumb',
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
            name: 'Card EMI Conversion Default',
            item: 'https://www.credsettle.com/credit-card-emi-conversion-default-settlement',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://www.credsettle.com/credit-card-emi-conversion-default-settlement#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Are credit card EMI instalments included inside the 5% Minimum Amount Due?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'In most Indian banks, 100% of your monthly card EMI instalment plus GST is added directly into Minimum Amount Due. You cannot pay just 5% of a monthly EMI instalment.',
            },
          },
          {
            '@type': 'Question',
            name: 'What happens when I miss two or three monthly credit card EMI bills?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Unpaid EMI instalments roll into your revolving card balance and start attracting 42% to 48% card APR instead of the lower 16% to 20% EMI rate, along with late payment fees.',
            },
          },
          {
            '@type': 'Question',
            name: 'Why did my card balance suddenly jump at 90 days overdue?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'At 90 days past due (NPA stage), banks automatically cancel active SmartEMI, Flexipay, or merchant EMI plans and dump all remaining unbilled principal plus foreclosure fees into your statement.',
            },
          },
          {
            '@type': 'Question',
            name: 'Does a Jumbo Loan or Encash loan on a credit card need a separate settlement?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Check whether the bank issued a separate loan account number on CIBIL. Linked limit loans merge into the card bill, whereas standalone Insta/Jumbo Loan accounts require explicit mention in your OTS letter.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can foreclosed credit card EMIs be settled under One-Time Settlement?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Once unbilled EMIs merge into an NPA credit card account, the entire combined card debt is eligible for compromise settlement review under RBI rules, subject to bank approval and real hardship.',
            },
          },
          {
            '@type': 'Question',
            name: 'Should I verify that unbilled EMIs are zeroed out before paying an OTS offer?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Always. If an OTS letter settles only billed dues while leaving unbilled EMIs active, future EMI instalments will bill next month and ruin your settlement closure.',
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
      <CardEmiDefaultClient />
      <Footer hideFunnel />
    </div>
  );
}
