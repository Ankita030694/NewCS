import React from 'react';
import type { Metadata } from 'next';
import HowToSettleACreditCardDebtClient from './HowToSettleACreditCardDebtClient';

export const metadata: Metadata = {
  title: 'How to Settle a Credit Card Debt',
  description: 'Learn exactly how to settle a credit card debt in India. We provide a step by step timeline, cost breakdown, and negotiation strategies to reduce balance.',
  alternates: {
    canonical: 'https://credsettle.com/how-to-settle-a-credit-card-debt',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function HowToSettleACreditCardDebtPage() {
  const schemaOrgJSONLD = [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://credsettle.com/how-to-settle-a-credit-card-debt',
      },
      headline: 'How to Settle a Credit Card Debt',
      description: 'Learn exactly how to settle a credit card debt in India. We provide a step by step timeline, cost breakdown, and negotiation strategies to reduce balance.',
      author: {
        '@type': 'Person',
        name: 'Vikram Sharma',
        image: 'https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg'
      },
      publisher: {
        '@type': 'Organization',
        name: 'CredSettle',
        logo: {
          '@type': 'ImageObject',
          url: 'https://credsettle.com/logo.png',
        },
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Is it legal to settle a credit card debt in India?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, it is entirely legal. Settling a debt is a civil contract resolution between you and the bank. The Reserve Bank of India permits banks to write off or settle bad debts to maintain their financial health. It is a standardized procedure when borrowers face genuine financial hardship.',
          },
        },
        {
          '@type': 'Question',
          name: 'Will settling my debt remove the default from my CIBIL report?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No, it will not remove the default history. When you agree to a settlement, the bank reports the account status as Settled rather than Closed. This status remains on your credit report for seven years and negatively impacts your credit score, making future borrowing difficult but manageable over time.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can recovery agents arrest me for not paying my credit card bill?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Absolutely not. Defaulting on an unsecured credit card is a civil issue, not a criminal offense. You cannot be arrested, jailed, or detained for failing to repay a loan or credit card. If any agent threatens you with police action, they are committing illegal intimidation and you can file a complaint against them.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does the entire debt settlement process take?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The process typically takes between three to six months. Banks usually do not entertain settlement offers until the account is at least ninety days overdue and classified as a Non-Performing Asset. Once negotiations begin, reaching a final agreement and receiving the official No Objection Certificate can take an additional few weeks.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do I have to pay the settlement amount in a single lump sum?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Banks heavily prefer a single lump sum payment and will offer the highest waiver percentages for immediate cash. However, in cases of extreme hardship, banks may agree to split the settlement amount into three or four manageable monthly installments. Failing to pay any installment will void the agreement.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can the bank deduct money from my salary account without asking?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'If you hold your salary account in the same bank that issued your credit card, they can use the Bankers Right of General Lien or Right of Set Off to auto-debit your funds. To prevent this, it is highly recommended to transfer your salary account to a completely different banking institution.',
          },
        }
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: 'Credit Card Debt Settlement Service',
      description: 'Professional legal negotiation service to reduce and settle credit card debt in India.',
      brand: {
        '@type': 'Brand',
        name: 'CredSettle',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.8',
        reviewCount: '3',
      },
      review: [
        {
          '@type': 'Review',
          author: {
            '@type': 'Person',
            name: 'Vikram Mehta',
          },
          datePublished: '2026-05-15',
          reviewBody: 'CredSettle reviewed my case and negotiated a settlement at a 65 percent waiver.',
          reviewRating: {
            '@type': 'Rating',
            ratingValue: '5',
          },
        },
        {
          '@type': 'Review',
          author: {
            '@type': 'Person',
            name: 'Neha Sharma',
          },
          datePublished: '2026-04-10',
          reviewBody: 'The legal team at CredSettle explained my rights and helped me close the account legally without facing any further harassment.',
          reviewRating: {
            '@type': 'Rating',
            ratingValue: '5',
          },
        },
        {
          '@type': 'Review',
          author: {
            '@type': 'Person',
            name: 'Arjun Reddy',
          },
          datePublished: '2026-01-20',
          reviewBody: 'Once I engaged with professional negotiators, the harassment stopped immediately. We reached a fair settlement amount.',
          reviewRating: {
            '@type': 'Rating',
            ratingValue: '5',
          },
        }
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://credsettle.com/',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'How to Settle a Credit Card Debt',
          item: 'https://credsettle.com/how-to-settle-a-credit-card-debt',
        },
      ],
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrgJSONLD) }}
      />
      <HowToSettleACreditCardDebtClient />
    </>
  );
}
