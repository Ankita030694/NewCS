import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AddOnCardLiabilityClient from './AddOnCardLiabilityClient';

export const metadata: Metadata = {
  title: 'Add-On Credit Card Default: Who Is Liable? | CredSettle',
  description:
    'Who pays when an add-on credit card defaults in India? Learn RBI primary cardholder liability rules, CIBIL impact on family, and OTS solutions.',
  keywords: [
    'add on credit card default who is liable',
    'supplementary credit card default india',
    'does add on credit card affect cibil score',
    'who pays add on credit card bill after default',
    'rbi rules on add on credit card liability',
  ],
  alternates: {
    canonical: 'https://www.credsettle.com/add-on-credit-card-default-who-is-liable',
  },
  openGraph: {
    title: 'Add-On Credit Card Default: Who Is Liable? | CredSettle',
    description:
      'Who pays when an add-on credit card defaults in India? Learn RBI primary cardholder liability rules, CIBIL impact on family, and OTS solutions.',
    type: 'article',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://www.credsettle.com/add-on-credit-card-default-who-is-liable',
    images: [
      {
        url: 'https://www.credsettle.com/credsettle-logo-black.png',
        width: 1200,
        height: 630,
        alt: 'Add-On Credit Card Default Liability Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Add-On Credit Card Default: Who Is Liable? | CredSettle',
    description:
      'Who pays when an add-on credit card defaults in India? Learn RBI primary cardholder liability rules, CIBIL impact on family, and OTS solutions.',
    images: ['https://www.credsettle.com/credsettle-logo-black.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AddOnCreditCardDefaultPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': 'https://www.credsettle.com/add-on-credit-card-default-who-is-liable#article',
        headline: 'Add-On Credit Card Default in India: Primary vs Supplementary Liability Rules',
        description:
          'Who pays when an add-on credit card defaults in India? Learn RBI primary cardholder liability rules, CIBIL impact on family, and OTS solutions.',
        inLanguage: 'en-IN',
        mainEntityOfPage: 'https://www.credsettle.com/add-on-credit-card-default-who-is-liable',
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
        '@id': 'https://www.credsettle.com/add-on-credit-card-default-who-is-liable#breadcrumb',
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
            name: 'Add-On Credit Card Default Liability',
            item: 'https://www.credsettle.com/add-on-credit-card-default-who-is-liable',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://www.credsettle.com/add-on-credit-card-default-who-is-liable#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Who is legally liable to pay if an add-on credit card holder defaults in India?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'The main card owner owes 100% of all spends, fees, and interest on add-on cards. Banks grant the limit based only on the main owner income and KYC.',
            },
          },
          {
            '@type': 'Question',
            name: 'Does an add-on credit card default hurt the supplementary holder CIBIL score?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'On most personal cards, bills and CIBIL trades link only to the main owner PAN. Late bills or settlement drop the main owner CIBIL score.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can recovery agents harass my spouse or parents who hold an add-on card?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. Under the RBI Fair Practices Code and new RBI rules from 1 January 2027, agents cannot harass family or share debt facts to shame you.',
            },
          },
          {
            '@type': 'Question',
            name: 'What happens to add-on card dues if the primary cardholder passes away?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'An add-on user does not pay from their own pay unless they signed as co-borrower. Under Indian law, bank claims apply only to assets left by the late main owner.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can I block an add-on card immediately if a family member overspent on it?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. The main card owner can set the add-on spend cap to zero or block that card in the bank app right away. That stops new charges at once.',
            },
          },
          {
            '@type': 'Question',
            name: 'Does One-Time Settlement on the primary card cover add-on card spends too?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Add-on swipes bill into the main card account. One valid OTS letter on the main card closes both main and add-on dues at the same time.',
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
      <AddOnCardLiabilityClient />
      <Footer hideFunnel />
    </div>
  );
}
