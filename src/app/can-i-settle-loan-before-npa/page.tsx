import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CanISettleLoanBeforeNpaClient from './CanISettleLoanBeforeNpaClient';

export const metadata: Metadata = {
  title: 'Can I Settle Loan Before NPA? (SMA Stages & Settlement Rules)',
  description:
    'Wondering if you can settle your loan before it becomes an NPA? Learn how pre-NPA compromise settlements work during SMA-1 and SMA-2 stages, RBI rules, and negotiation steps.',
  keywords: [
    'can i settle loan before npa',
    'settle loan before 90 days default',
    'sma stage loan settlement',
    'pre npa settlement rbi rules',
    'can bank settle standard asset loan',
    'loan compromise settlement before npa',
    'pre npa loan restructuring vs settlement',
    'cibil impact pre npa settlement',
    'one time settlement before npa',
    'settling loan in sma 2 stage'
  ],
  openGraph: {
    title: 'Can I Settle Loan Before NPA? (SMA Stages & Settlement Rules) | CredSettle',
    description:
      'Wondering if you can settle your loan before it becomes an NPA? Learn how pre-NPA compromise settlements work during SMA-1 and SMA-2 stages, RBI rules, and negotiation steps.',
    type: 'article',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://www.credsettle.com/can-i-settle-loan-before-npa',
    images: [
      {
        url: 'https://www.credsettle.com/images/infographics/can-i-settle-loan-before-npa.jpg',
        width: 1200,
        height: 630,
        alt: 'Can I Settle Loan Before NPA Resolution Guide'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Can I Settle Loan Before NPA? (SMA Stages & Settlement Rules)',
    description:
      'Wondering if you can settle your loan before it becomes an NPA? Learn how pre-NPA compromise settlements work during SMA-1 and SMA-2 stages, RBI rules, and negotiation steps.',
    images: ['https://www.credsettle.com/images/infographics/can-i-settle-loan-before-npa.jpg']
  },
  alternates: {
    canonical: 'https://www.credsettle.com/can-i-settle-loan-before-npa'
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function CanISettleLoanBeforeNpaPage() {
  const unifiedSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': 'https://www.credsettle.com/can-i-settle-loan-before-npa#article',
        isPartOf: {
          '@type': 'WebPage',
          '@id': 'https://www.credsettle.com/can-i-settle-loan-before-npa'
        },
        headline: 'Can I Settle Loan Before NPA? (SMA Stages & Settlement Rules)',
        description:
          'Wondering if you can settle your loan before it becomes an NPA? Learn how pre-NPA compromise settlements work during SMA-1 and SMA-2 stages, RBI rules, and negotiation steps.',
        inLanguage: 'en-IN',
        mainEntityOfPage: 'https://www.credsettle.com/can-i-settle-loan-before-npa',
        datePublished: '2026-09-01T09:00:00+05:30',
        dateModified: '2026-09-01T09:00:00+05:30',
        articleSection: 'Credit Dispute & Banking Law',
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
        image: ['https://www.credsettle.com/images/infographics/can-i-settle-loan-before-npa.jpg']
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
        '@id': 'https://www.credsettle.com/can-i-settle-loan-before-npa#breadcrumb',
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
            name: 'Can I Settle Loan Before NPA',
            item: 'https://www.credsettle.com/can-i-settle-loan-before-npa'
          }
        ]
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://www.credsettle.com/can-i-settle-loan-before-npa#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Can I settle my loan before it officially becomes a Non-Performing Asset (NPA)?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes, borrowers can negotiate a pre-NPA compromise settlement during the SMA-1 or SMA-2 stages (30 to 89 days overdue), provided they can substantiate exceptional financial hardship such as job loss, critical illness, or business failure.'
            }
          },
          {
            '@type': 'Question',
            name: 'Why are banks generally reluctant to offer a One-Time Settlement (OTS) before 90 days?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Prior to 90 days, the loan is classified as a Standard Asset, meaning the bank has not allocated loan loss provisions. Approving an OTS forces an immediate write-off and provisioning hit on their profit and loss statement.'
            }
          },
          {
            '@type': 'Question',
            name: 'What is the difference between loan restructuring and pre-NPA settlement?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Loan restructuring modifies repayment terms, such as extending the loan tenure or reducing EMIs without debt forgiveness, whereas pre-NPA settlement forgives a portion of the principal and waives penal charges for a lump-sum payoff.'
            }
          },
          {
            '@type': 'Question',
            name: 'Will a pre-NPA settlement damage my CIBIL score?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. When a loan is settled before or after NPA, credit bureaus report the account status as Settled rather than Closed, which lowers your CIBIL score. However, it halts compounding default penalties and sets the outstanding balance to zero.'
            }
          },
          {
            '@type': 'Question',
            name: 'What documents are required to prove eligibility for a pre-NPA compromise settlement?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Lenders require formal hardship documentation, including termination letters, medical treatment records, bank statements demonstrating severe liquidity shortfalls, audited profit and loss statements for businesses, and an itemized financial distress affidavit.'
            }
          },
          {
            '@type': 'Question',
            name: 'Can I negotiate a waiver of penal interest during the SMA-1 and SMA-2 stages?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Under RBI Fair Lending Practices directives, banks have the discretion to waive accumulated penal charges, bounce fees, and late payment penalties when executing a pre-NPA resolution.'
            }
          },
          {
            '@type': 'Question',
            name: 'How much haircut or discount can I expect during a pre-NPA loan settlement?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Pre-NPA settlements typically yield a 25% to 45% discount on the principal balance along with a 100% penal interest waiver. Deeper haircuts (50%+) are generally easier to secure once the loan crosses 90 days into NPA.'
            }
          },
          {
            '@type': 'Question',
            name: 'Can a bank file legal cases under Section 138 or Section 25 PSSA before 90 days?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. If an EMI cheque or NACH auto-debit mandate bounces at any point, the bank can issue statutory legal notices under Section 138 of the NI Act or Section 25 of the PSSA, even while the account is in SMA status.'
            }
          },
          {
            '@type': 'Question',
            name: 'What should I check in the Pre-NPA Settlement Sanction Letter before paying?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Ensure the letter is on official bank letterhead, explicitly details the exact compromise settlement amount, payment deadlines, a covenant confirming full and final debt discharge, and a commitment to issue a No Dues Certificate.'
            }
          },
          {
            '@type': 'Question',
            name: 'How can I rebuild my CIBIL score after completing a pre-NPA settlement?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Obtain the stamped No Dues Certificate, verify that the lender updates the bureau balance to zero under Section 21 of CICRA, maintain clean payment records on remaining credit, and use a secured fixed-deposit credit card to restore your score above 750 within 12 to 24 months.'
            }
          }
        ]
      },
      {
        '@type': 'FinancialService',
        '@id': 'https://www.credsettle.com/#service',
        name: 'CredSettle Pre-NPA Loan Dispute Resolution & Compromise Settlement Services',
        url: 'https://www.credsettle.com/can-i-settle-loan-before-npa',
        provider: {
          '@type': 'Organization',
          name: 'CredSettle'
        },
        image: 'https://www.credsettle.com/images/infographics/can-i-settle-loan-before-npa.jpg',
        telephone: '+91-8800226635',
        priceRange: '₹₹',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Barakhamba Road, Connaught Place',
          addressLocality: 'New Delhi',
          addressRegion: 'Delhi',
          postalCode: '110001',
          addressCountry: 'IN'
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.8',
          reviewCount: '5280',
          bestRating: '5',
          worstRating: '1'
        },
        review: [
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'Siddharth Mukherjee'
            },
            datePublished: '2026-08-28',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5'
            },
            reviewBody:
              'When my tech startup folded, I had an outstanding ₹9.5 Lakh personal loan that reached SMA-2 stage (65 days overdue). The branch initially insisted that settlement is impossible before NPA. CredSettle presented my documented business distress dossier directly to the Circle Credit Committee, obtaining an official pre-NPA OTS at ₹5.2 Lakhs and avoiding aggressive recovery litigation.',
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
            datePublished: '2026-08-14',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5'
            },
            reviewBody:
              'Following severe medical complications in my family, I could not afford my ₹6.8 Lakh loan installments. At 45 days overdue (SMA-1), CredSettle intervened, halted recovery agent calls, and structured a pre-NPA compromise settlement with the bank for ₹3.8 Lakhs along with a 100% waiver of penal charges.',
            itemReviewed: {
              '@type': 'FinancialService',
              '@id': 'https://www.credsettle.com/#service'
            }
          },
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'Vikramaditya Rao'
            },
            datePublished: '2026-07-29',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5'
            },
            reviewBody:
              'I was laid off abruptly and faced impending NPA classification on a ₹14 Lakh unsecured loan. CredSettle conducted a forensic ledger audit, removed illegal compounding charges, and negotiated a pre-NPA settlement with the private bank leadership before any legal notices were issued.',
            itemReviewed: {
              '@type': 'FinancialService',
              '@id': 'https://www.credsettle.com/#service'
            }
          },
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'Ananya Deshmukh'
            },
            datePublished: '2026-07-05',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5'
            },
            reviewBody:
              'I was terrified of receiving Section 138 cheque bounce notices when my loan crossed 60 days overdue. CredSettle guided me on legal protections, represented my financial hardship, and secured a formal settlement approval letter on bank letterhead within three weeks.',
            itemReviewed: {
              '@type': 'FinancialService',
              '@id': 'https://www.credsettle.com/#service'
            }
          },
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'Harpreet Singh Walia'
            },
            datePublished: '2026-06-20',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '4.8'
            },
            reviewBody:
              'CredSettle helped me resolve a complex multi-lender debt situation during the SMA stage. Their team explained the trade-offs between restructuring and pre-NPA settlement, helped me choose the right path, and ensured my stamped No Dues Certificate was issued promptly.',
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
      <CanISettleLoanBeforeNpaClient />
      <Footer />
    </div>
  );
}
