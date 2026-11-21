import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import RupayCreditCardUpiDefaultClient from './RupayCreditCardUpiDefaultClient';

export const metadata: Metadata = {
  title: 'RuPay Credit Card UPI Debt Default: Settlement Rules',
  description:
    'Defaulted on a RuPay credit card linked to UPI? Learn RBI settlement rules, protect your savings UPI, stop harassment & settle with CredSettle.',
  keywords: [
    'rupay credit card upi debt default settlement rules india',
    'rupay credit card upi default',
    'does rupay credit card default block upi',
    'rupay credit card settlement rbi rules',
    'can bank block savings upi for credit card default',
    'rupay upi credit card section 25 pss act',
    'settle rupay credit card debt india',
    'npci rupay credit card on upi rules',
    'section 171 banker lien savings account upi',
    'credsettle rupay credit card settlement'
  ],
  openGraph: {
    title: 'RuPay Credit Card UPI Debt Default: Settlement Rules',
    description:
      'Defaulted on a RuPay credit card linked to UPI? Learn RBI settlement rules, protect your savings UPI, stop harassment & settle with CredSettle.',
    type: 'article',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://www.credsettle.com/rupay-credit-card-upi-debt-default-settlement-rules',
    images: [
      {
        url: 'https://www.credsettle.com/images/infographics/rupay-credit-card-upi-debt-default-settlement-rules.jpg',
        width: 1200,
        height: 675,
        alt: 'RuPay Credit Card UPI Debt Default and RBI Settlement Rules Blueprint'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RuPay Credit Card UPI Debt Default: Settlement Rules',
    description:
      'Defaulted on a RuPay credit card linked to UPI? Learn RBI settlement rules, protect your savings UPI, stop harassment & settle with CredSettle.',
    images: [
      'https://www.credsettle.com/images/infographics/rupay-credit-card-upi-debt-default-settlement-rules.jpg'
    ]
  },
  alternates: {
    canonical: 'https://www.credsettle.com/rupay-credit-card-upi-debt-default-settlement-rules'
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RupayCreditCardUpiDefaultPage() {
  const unifiedSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': 'https://www.credsettle.com/rupay-credit-card-upi-debt-default-settlement-rules#article',
        isPartOf: {
          '@type': 'WebPage',
          '@id': 'https://www.credsettle.com/rupay-credit-card-upi-debt-default-settlement-rules'
        },
        headline: 'RuPay Credit Card UPI Debt Default: Settlement Rules',
        description:
          'Defaulted on a RuPay credit card linked to UPI? Learn RBI settlement rules, protect your savings UPI, stop harassment & settle with CredSettle.',
        inLanguage: 'en-IN',
        mainEntityOfPage: 'https://www.credsettle.com/rupay-credit-card-upi-debt-default-settlement-rules',
        datePublished: '2026-11-21T09:30:00+05:30',
        dateModified: '2026-11-21T09:30:00+05:30',
        articleSection: 'Credit Card Regulation & Debt Settlement',
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
        },
        image: [
          'https://www.credsettle.com/images/infographics/rupay-credit-card-upi-debt-default-settlement-rules.jpg'
        ]
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
        '@id': 'https://www.credsettle.com/rupay-credit-card-upi-debt-default-settlement-rules#breadcrumb',
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
            name: 'RuPay Credit Card UPI Debt Default Settlement Rules',
            item: 'https://www.credsettle.com/rupay-credit-card-upi-debt-default-settlement-rules'
          }
        ]
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://www.credsettle.com/rupay-credit-card-upi-debt-default-settlement-rules#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Does defaulting on a RuPay credit card block my normal savings bank UPI?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. On the NPCI network, your RuPay card and your savings account use separate links and separate UPI PINs. If the card is blocked for unpaid bills, UPI transfers from savings accounts in other banks keep working.'
            }
          },
          {
            '@type': 'Question',
            name: 'Can the card-issuing bank freeze my savings account in the same bank?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. If your savings or salary account is in the same bank that issued your RuPay card, the bank can claim a general lien under Section 171 of the Indian Contract Act, 1872. Keep daily funds in a different bank to prevent holds.'
            }
          },
          {
            '@type': 'Question',
            name: 'Is unpaid RuPay UPI credit card debt a crime under Section 25 of the PSS Act?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. Shop QR spends on a RuPay card are already paid to the shop by the bank. Unpaid card bills are a civil debt. Section 25 of the PSS Act, 2007 applies only if an e-NACH or AutoPay debit bounces for low funds.'
            }
          },
          {
            '@type': 'Question',
            name: 'When can I apply for a One-Time Settlement (OTS) on a RuPay credit card?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Banks usually open One-Time Settlement talks after your card crosses 90 days of non-payment and turns into an NPA. Under the RBI circular dated June 8, 2023, every bank follows a board-approved policy to settle stressed dues.'
            }
          },
          {
            '@type': 'Question',
            name: 'How much waiver do banks give in a RuPay credit card settlement?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'In genuine hardship cases like job loss or illness, banks often waive 100% of late fees, added interest, and GST. Final lump-sum payouts often land between 35% and 55% of the total inflated bill.'
            }
          },
          {
            '@type': 'Question',
            name: 'What happens to active UPI EMIs when a RuPay credit card defaults?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'When a RuPay card enters NPA stage, the bank cancels all unbilled shop or UPI EMIs. The left-over principal of those EMIs merges into one card balance. You can settle the full merged balance under one OTS letter.'
            }
          },
          {
            '@type': 'Question',
            name: 'How fast must the bank update CIBIL after I pay the RuPay card settlement?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Under RBI circular RBI/2024-25/60 effective January 1, 2025, banks must update credit bureaus every 15 days on the 15th and last day of each month. Unresolved credit report disputes past 30 days carry ₹100 per day pay.'
            }
          },
          {
            '@type': 'Question',
            name: 'Can recovery agents call my contacts or visit at night for RuPay UPI card dues?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. Under RBI circular DOR.ORG.REC.65/21.04.158/2022-23, agents cannot call before 8:00 AM or after 7:00 PM. They cannot shame you, call your family, or threaten police arrest for civil credit card debt.'
            }
          },
          {
            '@type': 'Question',
            name: 'How is a RuPay Credit Card on UPI different from a Credit Line on UPI?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'A RuPay card runs on the RuPay card network and gives a normal interest-free grace period under RBI Card Rules. A Credit Line on UPI is a direct bank loan line mapped to UPI without a card network.'
            }
          },
          {
            '@type': 'Question',
            name: 'How does CredSettle help settle RuPay UPI credit card defaults safely?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'CredSettle stops rogue recovery calls, checks your bills for unfair fees, checks official bank OTS letters, cuts inflated card dues, and helps you get a valid No Dues Certificate and clean CIBIL update.'
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
              name: 'Karthik Subramanian'
            },
            datePublished: '2026-10-28',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5'
            },
            reviewBody:
              'Daily QR scans on my RuPay credit card snowballed into ₹2.4 Lakhs after I lost my IT job. Agents threatened to block all my UPI apps. CredSettle protected my salary account, stopped the calls, and settled the entire card through an official bank OTS letter for ₹92,000.',
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
            datePublished: '2026-10-09',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5'
            },
            reviewBody:
              'My bank placed a hold on my savings UPI balance for an overdue RuPay card without prior notice. CredSettle escalated the violation under RBI rules, helped negotiate a clean lump-sum settlement, and got my No Dues Certificate and CIBIL update within three weeks.',
            itemReviewed: {
              '@type': 'FinancialService',
              '@id': 'https://www.credsettle.com/#service'
            }
          },
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'Rohan Deshmukh'
            },
            datePublished: '2026-09-19',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5'
            },
            reviewBody:
              'I had three converted UPI EMIs on my RuPay card when medical bills drained my savings. CredSettle handled the post-NPA merger of all unbilled EMIs and negotiated a 58% waiver directly with the bank nodal team.',
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
      <RupayCreditCardUpiDefaultClient />
      <Footer />
    </div>
  );
}
