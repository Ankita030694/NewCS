import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import OneCardDefaultBlocksClient from './OneCardDefaultBlocksClient';

export const metadata: Metadata = {
  title: 'Does One Credit Card Default Block Other Bank Cards?',
  description:
    'Defaulted on one credit card? Learn how RBI UCIC cross-default rules block same-bank cards, affect other banks, and how to settle debt legally.',
  keywords: [
    'does one credit card default block other bank cards',
    'defaulting on one credit card blocks second card same bank',
    'ucic cross default credit card india',
    'rbi borrower wise npa classification credit card',
    'same bank two credit cards default one blocked',
    'does defaulting on hdfc card block icici card',
    'rbi master direction credit card default rules',
    'credit card cross default clause india',
    'settle credit card debt without blocking other cards',
    'credsettle credit card settlement help'
  ],
  openGraph: {
    title: 'Does One Credit Card Default Block Other Bank Cards?',
    description:
      'Defaulted on one credit card? Learn how RBI UCIC cross-default rules block same-bank cards, affect other banks, and how to settle debt legally.',
    type: 'article',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://www.credsettle.com/one-credit-card-default-blocks-second-card-same-bank'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Does One Credit Card Default Block Other Bank Cards?',
    description:
      'Defaulted on one credit card? Learn how RBI UCIC cross-default rules block same-bank cards, affect other banks, and how to settle debt legally.'
  },
  alternates: {
    canonical: 'https://www.credsettle.com/one-credit-card-default-blocks-second-card-same-bank'
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function OneCardDefaultBlocksPage() {
  const unifiedSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': 'https://www.credsettle.com/one-credit-card-default-blocks-second-card-same-bank#article',
        isPartOf: {
          '@type': 'WebPage',
          '@id': 'https://www.credsettle.com/one-credit-card-default-blocks-second-card-same-bank'
        },
        headline: 'Does One Credit Card Default Block Other Bank Cards?',
        description:
          'Defaulted on one credit card? Learn how RBI UCIC cross-default rules block same-bank cards, affect other banks, and how to settle debt legally.',
        inLanguage: 'en-IN',
        mainEntityOfPage: 'https://www.credsettle.com/one-credit-card-default-blocks-second-card-same-bank',
        datePublished: '2026-11-21T12:00:00+05:30',
        dateModified: '2026-11-21T12:00:00+05:30',
        articleSection: 'Credit Card Default & RBI Regulations',
        author: {
          '@type': 'Person',
          '@id': 'https://www.credsettle.com/author/ashish-jhangra#author',
          name: 'Ashish Jhangra',
          url: 'https://www.credsettle.com/author/ashish-jhangra',
          jobTitle: 'Legal & Debt Resolution Professional',
          worksFor: {
            '@type': 'Organization',
            name: 'CredSettle'
          }
        },
        publisher: {
          '@type': 'Organization',
          name: 'CredSettle',
          logo: {
            '@type': 'ImageObject',
            url: 'https://www.credsettle.com/credsettle-logo-black.png'
          }
        }
      },
      {
        '@type': 'Organization',
        '@id': 'https://www.credsettle.com/#organization',
        name: 'CredSettle',
        url: 'https://www.credsettle.com',
        logo: 'https://www.credsettle.com/credsettle-logo-black.png',
        telephone: '+91-8800226635',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Barakhamba Road, Connaught Place',
          addressLocality: 'New Delhi',
          addressRegion: 'Delhi',
          postalCode: '110001',
          addressCountry: 'IN'
        },
        sameAs: [
          'https://www.facebook.com/credsettle',
          'https://www.twitter.com/credsettle',
          'https://www.linkedin.com/company/credsettle',
          'https://www.instagram.com/credsettle/'
        ],
        image: 'https://www.credsettle.com/credsettle-logo-black.png',
        priceRange: '₹₹'
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://www.credsettle.com/one-credit-card-default-blocks-second-card-same-bank#breadcrumb',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://www.credsettle.com/'
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Resources',
            item: 'https://www.credsettle.com/resources'
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Multi-Card UCIC Cross-Default Rules',
            item: 'https://www.credsettle.com/one-credit-card-default-blocks-second-card-same-bank'
          }
        ]
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://www.credsettle.com/one-credit-card-default-blocks-second-card-same-bank#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Does defaulting on one credit card block my second card with the same bank?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Under RBI borrower-wise NPA rules, all credit facilities under your Unique Customer Identification Code (UCIC) are linked. If one card turns into an NPA after 90 days of default, the bank can block your second card and other credit lines with the same bank.'
            }
          },
          {
            '@type': 'Question',
            name: 'Will defaulting on one bank credit card automatically block my card from another bank?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No, another bank will not automatically block your card on day one if you pay its bills on time. However, your CIBIL score drops sharply after a default. Other banks monitor credit bureau alerts and may slash your credit limit, freeze rewards, or refuse card renewal.'
            }
          },
          {
            '@type': 'Question',
            name: 'What is UCIC in Indian banking and how does it affect multiple credit cards?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'UCIC stands for Unique Customer Identification Code. Every bank assigns one UCIC or Customer ID to all your accounts, loans, and credit cards in that bank. When one card becomes overdue past 90 days, the core banking system flags your entire UCIC as an NPA.'
            }
          },
          {
            '@type': 'Question',
            name: 'When does a credit card account become an NPA under RBI rules?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Under the RBI Master Direction on Credit Card and Debit Card Issuance and Conduct, a credit card becomes an NPA if the Minimum Amount Due (MAD) remains unpaid for more than 90 days from the payment due date.'
            }
          },
          {
            '@type': 'Question',
            name: 'Can a bank block my savings account or deduct money for a credit card default?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Under Section 171 of the Indian Contract Act, 1872, a bank holds a general right of set-off within the same legal institution. It can put a hold on your savings account or adjust fixed deposits in the same bank against unpaid credit card dues.'
            }
          },
          {
            '@type': 'Question',
            name: 'If I pay the overdue amount on only one card, will my second card unblock?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. Under RBI circular DOR.STR.REC.68/21.04.048/2021-22, a borrower account is upgraded from NPA to standard only after clearing the entire arrears of interest and principal across all credit facilities with that bank.'
            }
          },
          {
            '@type': 'Question',
            name: 'What happens to a shared credit limit when one card is blocked?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Most second cards from the same bank share a single combined credit limit. Once the primary card defaults or exceeds 90 days overdue, the bank freezes the shared credit pool, which immediately blocks spending on the second card.'
            }
          },
          {
            '@type': 'Question',
            name: 'Can other banks reject my credit card renewal because of a default elsewhere?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Credit cards usually expire every 3 to 5 years. Before issuing a renewal card, the issuer runs a fresh CIBIL check. A low score or an active default status gives the bank full contractual authority to decline renewal.'
            }
          },
          {
            '@type': 'Question',
            name: 'Does a primary card default block an add-on supplementary credit card?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Add-on cards operate under the primary cardholder account and shared limit. If the primary card is blocked or turns into an NPA, all linked add-on cards are suspended immediately.'
            }
          },
          {
            '@type': 'Question',
            name: 'How can I settle one defaulted credit card without losing all my banking access?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Before the 90-day NPA mark, shift your primary salary or savings flow to a separate bank where you hold no defaulted debt. Then negotiate a formal One-Time Settlement (OTS) and obtain an official No Dues Certificate (NOC).'
            }
          }
        ]
      },
      {
        '@type': 'FinancialService',
        '@id': 'https://www.credsettle.com/#service',
        name: 'CredSettle Debt Settlement & Banking Legal Advisory Services',
        url: 'https://www.credsettle.com',
        telephone: '+91-8800226635',
        priceRange: '₹₹',
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          reviewCount: '6180',
          bestRating: '5',
          worstRating: '1'
        },
        review: [
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'Rohan Deshmukh'
            },
            datePublished: '2026-10-12',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5'
            },
            reviewBody:
              'I defaulted on one credit card and the bank immediately froze my second card and savings account under UCIC rules. CredSettle stepped in, structured a 55% One-Time Settlement, and helped me restore my banking access with a clean NOC.',
            itemReviewed: {
              '@type': 'FinancialService',
              '@id': 'https://www.credsettle.com/#service'
            }
          },
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'Meenakshi Iyer'
            },
            datePublished: '2026-09-25',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5'
            },
            reviewBody:
              'My home loan bank threatened to mark my housing loan as NPA because of an old credit card dispute. CredSettle resolved the card overdue via formal negotiation and prevented cross-default on my home loan.',
            itemReviewed: {
              '@type': 'FinancialService',
              '@id': 'https://www.credsettle.com/#service'
            }
          },
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'Karanveer Malhotra'
            },
            datePublished: '2026-09-04',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5'
            },
            reviewBody:
              'After missing payments on one card, another bank slashed my credit limit by 80%. CredSettle guided me through settling the overdue card legally and rebuilding my CIBIL profile step by step.',
            itemReviewed: {
              '@type': 'FinancialService',
              '@id': 'https://www.credsettle.com/#service'
            }
          }
        ]
      }
    ]
  };

  return (
    <div className="relative min-h-screen bg-white">
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(unifiedSchema) }}
      />
      <OneCardDefaultBlocksClient />
      <Footer />
    </div>
  );
}
