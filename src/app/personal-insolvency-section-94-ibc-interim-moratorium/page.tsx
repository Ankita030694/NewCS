import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PersonalInsolvencyIbcClient from './PersonalInsolvencyIbcClient';

export const metadata: Metadata = {
  title: 'Personal Insolvency Section 94 IBC: Interim Moratorium',
  description:
    'Understand Section 94 IBC personal insolvency and how Section 96 interim moratorium immediately stays bank recovery, DRT actions, and lawsuits.',
  keywords: [
    'personal insolvency under section 94 ibc interim moratorium',
    'section 94 ibc debtor application',
    'section 96 ibc interim moratorium',
    'stay on sarfaesi under section 96 ibc',
    'drt stay interim moratorium ibc',
    'dilip b jiwrajka supreme court judgment ibc',
    'personal guarantor insolvency resolution process',
    'section 101 moratorium ibc individual',
    'stop bank debt recovery section 94 ibc',
    'credsettle personal insolvency debt settlement'
  ],
  openGraph: {
    title: 'Personal Insolvency Section 94 IBC: Interim Moratorium',
    description:
      'Understand Section 94 IBC personal insolvency and how Section 96 interim moratorium immediately stays bank recovery, DRT actions, and lawsuits.',
    type: 'article',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://www.credsettle.com/personal-insolvency-section-94-ibc-interim-moratorium',
    images: [
      {
        url: 'https://www.credsettle.com/images/infographics/personal-insolvency-section-94-ibc-interim-moratorium.jpg',
        width: 1200,
        height: 675,
        alt: 'Section 94 IBC Personal Insolvency Interim Moratorium Workflow'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Personal Insolvency Section 94 IBC: Interim Moratorium',
    description:
      'Understand Section 94 IBC personal insolvency and how Section 96 interim moratorium immediately stays bank recovery, DRT actions, and lawsuits.',
    images: [
      'https://www.credsettle.com/images/infographics/personal-insolvency-section-94-ibc-interim-moratorium.jpg'
    ]
  },
  alternates: {
    canonical: 'https://www.credsettle.com/personal-insolvency-section-94-ibc-interim-moratorium'
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function PersonalInsolvencyPage() {
  const unifiedSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': 'https://www.credsettle.com/personal-insolvency-section-94-ibc-interim-moratorium#article',
        isPartOf: {
          '@type': 'WebPage',
          '@id': 'https://www.credsettle.com/personal-insolvency-section-94-ibc-interim-moratorium'
        },
        headline: 'Personal Insolvency Section 94 IBC: Interim Moratorium',
        description:
          'Understand Section 94 IBC personal insolvency and how Section 96 interim moratorium immediately stays bank recovery, DRT actions, and lawsuits.',
        inLanguage: 'en-IN',
        mainEntityOfPage: 'https://www.credsettle.com/personal-insolvency-section-94-ibc-interim-moratorium',
        datePublished: '2026-10-15T09:00:00+05:30',
        dateModified: '2026-10-15T09:00:00+05:30',
        articleSection: 'Insolvency Law & Debt Resolution',
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
          'https://www.credsettle.com/images/infographics/personal-insolvency-section-94-ibc-interim-moratorium.jpg'
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
        '@id': 'https://www.credsettle.com/personal-insolvency-section-94-ibc-interim-moratorium#breadcrumb',
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
            name: 'Section 94 IBC Personal Insolvency',
            item: 'https://www.credsettle.com/personal-insolvency-section-94-ibc-interim-moratorium'
          }
        ]
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://www.credsettle.com/personal-insolvency-section-94-ibc-interim-moratorium#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What is Section 94 under the Insolvency and Bankruptcy Code (IBC)?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Section 94 of the IBC enables an individual debtor or personal guarantor who has defaulted on qualifying debts to apply for an insolvency resolution process before the adjudicating authority.'
            }
          },
          {
            '@type': 'Question',
            name: 'What is an interim moratorium under Section 96 of the IBC?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Under Section 96, an interim moratorium commences immediately on the date of filing an application under Section 94. It automatically stays all pending legal actions and bars creditors from filing fresh suits for any debt.'
            }
          },
          {
            '@type': 'Question',
            name: 'Does the interim moratorium under Section 96 require a formal court order?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. As affirmed by the Supreme Court in Dilip B. Jiwrajka, the interim moratorium operates automatically by operation of law from the moment the application is filed, without needing prior judicial admission.'
            }
          },
          {
            '@type': 'Question',
            name: 'Does Section 96 interim moratorium stay SARFAESI property auctions?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. National Company Law Appellate Tribunal rulings confirm that the interim moratorium stays recovery proceedings in respect of the debt, including SARFAESI notices, physical possession orders, and pending property auctions.'
            }
          },
          {
            '@type': 'Question',
            name: 'Which forum has jurisdiction over Section 94 personal insolvency applications?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'The Debt Recovery Tribunal (DRT) has territorial jurisdiction over individuals and partnerships. However, if the debtor is a personal guarantor to a corporate debtor in CIRP, the National Company Law Tribunal (NCLT) has jurisdiction.'
            }
          },
          {
            '@type': 'Question',
            name: 'Does Section 96 stay Section 138 cheque bounce criminal cases?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Section 96 stays legal proceedings in respect of the debt. While debt recovery execution is stayed, courts have held that criminal trial proceedings under Section 138 of the Negotiable Instruments Act against individuals may continue unless specifically stayed by a competent high court.'
            }
          },
          {
            '@type': 'Question',
            name: 'What are excluded debts under Section 79(15) of the IBC?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Excluded debts cannot be resolved or discharged under the IBC. These include court fines, child maintenance or alimony, student education loans, and damages for negligence or breach of statutory duty.'
            }
          },
          {
            '@type': 'Question',
            name: 'What restrictions apply to a debtor during the interim moratorium?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'During the moratorium, the debtor cannot dispose of, transfer, or encumber any assets without the approval of the resolution professional or the tribunal, and cannot incur substantial fresh debt without disclosure.'
            }
          },
          {
            '@type': 'Question',
            name: 'What happens after the interim moratorium expires?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'The interim moratorium ceases when the adjudicating authority admits or rejects the application under Section 100. If admitted, a full statutory moratorium under Section 101 begins for 180 days to implement a repayment plan.'
            }
          },
          {
            '@type': 'Question',
            name: 'How does CredSettle assist borrowers facing severe debt distress?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'CredSettle guides borrowers through legal debt defense, halts recovery agent harassment, evaluates statutory IBC relief options, and negotiates direct One-Time Settlements (OTS) with banks for significant debt waivers.'
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
          '@id': 'https://www.credsettle.com/#aggregateRating',
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
              name: 'Vikramaditya Singhania'
            },
            datePublished: '2026-09-18',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5'
            },
            reviewBody:
              'As a personal guarantor to an MSME company loan, multiple lenders filed DRT and SARFAESI actions against my private residence. CredSettle guided our legal strategy around Section 94 IBC and Section 96 interim moratorium, halting the auction and negotiating a structured OTS settlement.',
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
            datePublished: '2026-08-30',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5'
            },
            reviewBody:
              'Recovery agents were harassing our family daily over unsecured credit card and business loan defaults. CredSettle evaluated our insolvency resolution rights, shielded us from unlawful harassment, and secured a 65% debt reduction through formal bank compromise channels.',
            itemReviewed: {
              '@type': 'FinancialService',
              '@id': 'https://www.credsettle.com/#service'
            }
          },
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'Rohit Khandelwal'
            },
            datePublished: '2026-08-16',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5'
            },
            reviewBody:
              'CredSettle provided complete clarity on Section 94 IBC debtor applications and Section 96 interim stay rules. Their legal team stopped aggressive bank recovery proceedings and helped us execute a successful One-Time Settlement with official No Dues Certificates.',
            itemReviewed: {
              '@type': 'FinancialService',
              '@id': 'https://www.credsettle.com/#service'
            }
          },
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'Suresh Nambiar'
            },
            datePublished: '2026-07-28',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '4.8'
            },
            reviewBody:
              'When our partnership business defaulted on working capital loans, banks threatened immediate asset attachment. CredSettle explained our statutory rights under the IBC and helped us restructure our debts peacefully without losing our family home.',
            itemReviewed: {
              '@type': 'FinancialService',
              '@id': 'https://www.credsettle.com/#service'
            }
          },
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'Pooja Deshmukh'
            },
            datePublished: '2026-07-12',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5'
            },
            reviewBody:
              'The team at CredSettle gave us professional legal support when facing multiple simultaneous recovery lawsuits. Their knowledge of personal insolvency and interim moratorium laws gave us immediate peace of mind and protection.',
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
      <PersonalInsolvencyIbcClient />
      <Footer />
    </div>
  );
}
