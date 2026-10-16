import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DematMutualFundSeizureClient from './DematMutualFundSeizureClient';

export const metadata: Metadata = {
  title: 'Can Bank Seize Demat Account & Mutual Funds? | CredSettle',
  description:
    'Can a bank seize Demat account shares or mutual funds for loan default? Learn court decree rules, Section 171 limits and protect your investments.',
  keywords: [
    'can bank seize demat account shares',
    'can bank freeze mutual funds for loan default',
    'can bank attach shares under section 60 cpc',
    'order 21 rule 46 cpc attachment of shares',
    'banker lien on demat account section 171',
    'can recovery agents touch zerodha groww portfolio',
    'loan default demat account 3 in 1 freeze',
    'drt attachment order on mutual fund units',
    'loan against shares default pledge invocation',
    'credsettle demat mutual fund loan settlement'
  ],
  openGraph: {
    title: 'Can Bank Seize Demat Account & Mutual Funds? | CredSettle',
    description:
      'Can a bank seize Demat account shares or mutual funds for loan default? Learn court decree rules, Section 171 limits and protect your investments.',
    type: 'article',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://www.credsettle.com/can-bank-seize-demat-account-shares-mutual-funds-loan-default',
    images: [
      {
        url: 'https://www.credsettle.com/images/infographics/can-bank-seize-demat-account-shares-mutual-funds-loan-default.jpg',
        width: 1200,
        height: 675,
        alt: 'Demat Account and Mutual Funds Protection Against Bank Loan Default Law'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Can Bank Seize Demat Account & Mutual Funds? | CredSettle',
    description:
      'Can a bank seize Demat account shares or mutual funds for loan default? Learn court decree rules, Section 171 limits and protect your investments.',
    images: [
      'https://www.credsettle.com/images/infographics/can-bank-seize-demat-account-shares-mutual-funds-loan-default.jpg'
    ]
  },
  alternates: {
    canonical: 'https://www.credsettle.com/can-bank-seize-demat-account-shares-mutual-funds-loan-default'
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function CanBankSeizeDematSharesPage() {
  const unifiedSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': 'https://www.credsettle.com/can-bank-seize-demat-account-shares-mutual-funds-loan-default#article',
        isPartOf: {
          '@type': 'WebPage',
          '@id': 'https://www.credsettle.com/can-bank-seize-demat-account-shares-mutual-funds-loan-default'
        },
        headline: 'Can Bank Seize Demat Account & Mutual Funds? | CredSettle',
        description:
          'Can a bank seize Demat account shares or mutual funds for loan default? Learn court decree rules, Section 171 limits and protect your investments.',
        inLanguage: 'en-IN',
        mainEntityOfPage: 'https://www.credsettle.com/can-bank-seize-demat-account-shares-mutual-funds-loan-default',
        datePublished: '2026-10-16T10:00:00+05:30',
        dateModified: '2026-10-16T10:00:00+05:30',
        articleSection: 'Banking Law & Securities Asset Protection',
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
          'https://www.credsettle.com/images/infographics/can-bank-seize-demat-account-shares-mutual-funds-loan-default.jpg'
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
        '@id': 'https://www.credsettle.com/can-bank-seize-demat-account-shares-mutual-funds-loan-default#breadcrumb',
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
            name: 'Demat & Mutual Fund Loan Seizure Rules',
            item: 'https://www.credsettle.com/can-bank-seize-demat-account-shares-mutual-funds-loan-default'
          }
        ]
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://www.credsettle.com/can-bank-seize-demat-account-shares-mutual-funds-loan-default#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Can a bank directly freeze my Demat account or stop me from selling shares?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. A lending bank cannot directly freeze your Demat account or stop you from trading. Demat accounts are maintained by Depository Participants registered with NSDL or CDSL under SEBI rules. A bank has no direct technical or legal access to freeze your shares without a formal court decree or DRT order.'
            }
          },
          {
            '@type': 'Question',
            name: 'Can a recovery agent contact Zerodha, Groww, or my broker to seize shares?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. Third-party collection agents have zero legal standing, regulatory access, or power to contact your stockbroker. Any threat by a recovery agent to raid your Demat account or liquidate your equity portfolio is illegal intimidation under Section 351 of BNS 2023 and violates the RBI Fair Practices Code.'
            }
          },
          {
            '@type': 'Question',
            name: 'Can a bank seize my mutual fund investments for an unsecured loan default?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. Mutual funds are held in trust by SEBI-registered Asset Management Companies (AMCs) and RTAs like CAMS and KFintech. A lender cannot unilaterally debit, pledge, or liquidate your mutual fund units for an unsecured personal loan or credit card default without a court judgment.'
            }
          },
          {
            '@type': 'Question',
            name: 'What happens if my Demat account is with the same bank where I defaulted?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Even within 3-in-1 banking accounts, the banking arm and broking subsidiary are separate corporate legal entities. The bank cannot automatically liquidate your stocks. However, dividend payouts or stock sale proceeds credited into the linked savings account can be debited via right of set-off. You should switch your linked bank account to a neutral bank.'
            }
          },
          {
            '@type': 'Question',
            name: 'Can a civil court or DRT attach my Demat shares to recover a loan?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes, but only after formal judicial proceedings. Under Order 21 Rule 46 of the Code of Civil Procedure (CPC) or Section 19 of the RDB Act, a civil court or Debt Recovery Tribunal (for debts above ₹20 Lakhs) can issue a garnishee order prohibiting share transfers after a full trial and decree.'
            }
          },
          {
            '@type': 'Question',
            name: 'Can a bank exercise a banker lien on my shares under Section 171?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. Under Section 171 of the Indian Contract Act, a banker general lien applies only to securities bailed directly to the bank in the ordinary course of banking. Shares held in a Demat account with a depository or independent broker are not bailed to the bank, so no banker lien can apply.'
            }
          },
          {
            '@type': 'Question',
            name: 'What is the risk of having mutual fund dividends credited into my loan bank?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'If dividend payouts or redemption proceeds land in a savings account with the bank where your loan is overdue, the bank software may instantly debit those funds using the contractual right of set-off. You can eliminate this risk by updating your AMC bank mandate to a neutral bank.'
            }
          },
          {
            '@type': 'Question',
            name: 'Can a bank attach shares in a joint Demat account if only one holder defaulted?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. A creditor can only proceed against the proportionate beneficial interest of the specific borrower who defaulted. The independent financial property of a non-borrowing joint holder or spouse cannot be attached or liquidated to satisfy another person individual loan default.'
            }
          },
          {
            '@type': 'Question',
            name: 'How is a Loan Against Shares (LAS) different from an unsecured loan default?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'In a Loan Against Shares (LAS) or Mutual Funds (LAMF), you explicitly create a legal pledge in favor of the lender under SEBI regulations. If you default or breach margin maintenance thresholds, the lender has statutory power under Section 176 of the Contract Act to sell the pledged securities after notice.'
            }
          },
          {
            '@type': 'Question',
            name: 'How does CredSettle help borrowers protect their investments during loan default?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'CredSettle stops illegal recovery agent harassment, insulates your financial assets through account segregation, responds to bank legal notices, and negotiates directly with bank credit committees for a structured One-Time Settlement (OTS) with up to 50% to 75% waivers.'
            }
          }
        ]
      },
      {
        '@type': 'FinancialService',
        '@id': 'https://www.credsettle.com/#service',
        name: 'CredSettle Debt Settlement & Loan Resolution Services',
        url: 'https://www.credsettle.com',
        telephone: '+91-8800226635',
        priceRange: '₹₹',
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.8',
          reviewCount: '5240',
          bestRating: '5',
          worstRating: '1'
        },
        review: [
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'Vikramaditya Rathore'
            },
            datePublished: '2026-10-02',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5'
            },
            reviewBody:
              'A collection agency threatened to freeze my Zerodha Demat portfolio worth ₹9 Lakhs for an overdue credit card. CredSettle issued a sharp legal notice citing depository regulations, halted the harassment, and helped me settle the card dues for a 65% discount.',
            itemReviewed: {
              '@type': 'FinancialService',
              '@id': 'https://www.credsettle.com/#service'
            }
          },
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'Meenakshi Sundaram'
            },
            datePublished: '2026-09-18',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5'
            },
            reviewBody:
              'My bank attempted to freeze my 3-in-1 broking account after I defaulted on an unsecured personal loan. CredSettle guided me to delink the accounts, move my mutual fund folios, and negotiated a clean One-Time Settlement directly with the bank zonal committee.',
            itemReviewed: {
              '@type': 'FinancialService',
              '@id': 'https://www.credsettle.com/#service'
            }
          },
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'Gaurav Khandelwal'
            },
            datePublished: '2026-09-04',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '4.8'
            },
            reviewBody:
              'Recovery agents claimed they had obtained an order to liquidate my SIP investments of ₹6 Lakhs. CredSettle explained my legal rights under CPC Section 60 and proved the claim was fraudulent. They closed my loan account with an official No Dues Certificate.',
            itemReviewed: {
              '@type': 'FinancialService',
              '@id': 'https://www.credsettle.com/#service'
            }
          },
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'Harpreet Singh Bedi'
            },
            datePublished: '2026-08-21',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5'
            },
            reviewBody:
              'When my business took a downturn, a private bank threatened to attach my joint Demat account held with my wife. CredSettle stepped in to prove spousal asset immunity and resolved my ₹18 Lakhs personal loan under RBI compromise guidelines.',
            itemReviewed: {
              '@type': 'FinancialService',
              '@id': 'https://www.credsettle.com/#service'
            }
          },
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'Pradeep Chawla'
            },
            datePublished: '2026-08-08',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5'
            },
            reviewBody:
              'CredSettle provided complete peace of mind during a tough financial crisis. They stopped recovery calls at my workplace, protected my equity mutual fund savings, and achieved a 70% waiver on accumulated interest and penalties.',
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
      <DematMutualFundSeizureClient />
      <Footer />
    </div>
  );
}
