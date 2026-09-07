import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PensionAttachmentForLoanRecoveryClient from './PensionAttachmentForLoanRecoveryClient';

export const metadata: Metadata = {
  title: 'Can Bank Attach Your Pension for Loan Recovery in India?',
  description:
    'Retired senior citizen facing debt recovery? Learn how Section 60 CPC strictly exempts pensions and gratuity from court attachment and bank liens.',
  keywords: [
    'Can the bank attach my pension for loan recovery',
    'Senior citizen loan default consequences',
    'CPC rules on pension attachment',
    'Section 60 CPC pension exemption',
    'can bank freeze pension account for loan',
    'Pensions Act 1871 section 11',
    'bank set off on pension account',
    'senior citizen personal loan settlement',
    'pension account recovery agent harassment',
    'debt settlement for retired senior citizens'
  ],
  openGraph: {
    title: 'Can Bank Attach Your Pension for Loan Recovery in India?',
    description:
      'Retired senior citizen facing debt recovery? Learn how Section 60 CPC strictly exempts pensions and gratuity from court attachment and bank liens.',
    type: 'article',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://www.credsettle.com/pension-attachment-for-loan-recovery',
    images: [
      {
        url: 'https://www.credsettle.com/images/infographics/pension-attachment-for-loan-recovery.jpg',
        width: 1200,
        height: 630,
        alt: 'Can Banks Legally Attach Pension Funds for Loan Recovery in India Guide'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Can Bank Attach Your Pension for Loan Recovery in India?',
    description:
      'Retired senior citizen facing debt recovery? Learn how Section 60 CPC strictly exempts pensions and gratuity from court attachment and bank liens.',
    images: ['https://www.credsettle.com/images/infographics/pension-attachment-for-loan-recovery.jpg']
  },
  alternates: {
    canonical: 'https://www.credsettle.com/pension-attachment-for-loan-recovery'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
};

export default function PensionAttachmentForLoanRecoveryPage() {
  const unifiedSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': 'https://www.credsettle.com/pension-attachment-for-loan-recovery#article',
        isPartOf: {
          '@type': 'WebPage',
          '@id': 'https://www.credsettle.com/pension-attachment-for-loan-recovery'
        },
        headline: 'Can Banks Legally Attach Pension Funds for Loan Recovery?',
        description:
          'Comprehensive legal analysis on Section 60 CPC pension exemptions, banker lien limitations under Section 171 Contract Act, and senior citizen debt resolution pathways.',
        inLanguage: 'en-IN',
        mainEntityOfPage: 'https://www.credsettle.com/pension-attachment-for-loan-recovery',
        datePublished: '2026-09-01T09:00:00+05:30',
        dateModified: '2026-09-07T09:00:00+05:30',
        articleSection: 'Banking Law & Senior Citizen Debt Protection',
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
        image: ['https://www.credsettle.com/images/infographics/pension-attachment-for-loan-recovery.jpg']
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
        '@id': 'https://www.credsettle.com/pension-attachment-for-loan-recovery#breadcrumb',
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
            name: 'Pension Attachment for Loan Recovery',
            item: 'https://www.credsettle.com/pension-attachment-for-loan-recovery'
          }
        ]
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://www.credsettle.com/pension-attachment-for-loan-recovery#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Can a bank attach my pension account for unpaid loan dues?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. Under Section 60(1)(g) of the Code of Civil Procedure (CPC) and Section 11 of the Pensions Act, 1871, pension stipends and government retirement funds are strictly exempt from court attachment or execution warrants.'
            }
          },
          {
            '@type': 'Question',
            name: 'Can a bank exercise the right of set-off against my pension account?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. While banks possess a general lien under Section 171 of the Indian Contract Act, judicial precedents confirm that statutory pension protection overrides banker set-off rights. Banks cannot unilaterally siphon pension funds for loan defaults.'
            }
          },
          {
            '@type': 'Question',
            name: 'Does statutory attachment protection cover commuted pension and gratuity?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. The Supreme Court of India and High Courts have consistently held that gratuity, commuted pension, and Employee Provident Fund (EPF) retain statutory immunity under Section 60 CPC even when credited into the retiree savings account.'
            }
          },
          {
            '@type': 'Question',
            name: 'What can I do if a bank freezes my pension account?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'You can serve an immediate legal notice citing Section 60(1)(g) CPC, submit an unfreeze representation to the Branch Manager, and escalate the violation to the Bank Principal Nodal Officer and RBI Banking Ombudsman.'
            }
          },
          {
            '@type': 'Question',
            name: 'Can loan recovery agents harass senior citizens at home?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Absolutely not. RBI Fair Practices Code strictly prohibits threatening language, unannounced visits outside 8:00 AM to 7:00 PM, contacting neighbors, or intimidating senior citizens. Violations can be reported directly to police and the RBI.'
            }
          },
          {
            '@type': 'Question',
            name: 'Can a civil court issue an arrest warrant against a senior citizen for loan default?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. Defaulting on an unsecured personal loan or credit card is purely a civil dispute. Under Indian civil law, non-repayment due to financial inability is not a criminal offense, and no civil court issues arrest warrants for honest insolvency.'
            }
          },
          {
            '@type': 'Question',
            name: 'What happens to a senior citizen loan after death?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'For unsecured personal loans and credit cards, the legal heirs are not personally liable to repay the outstanding debt. The bank cannot attach family assets or inherited pensions unless the heirs were formal co-borrowers or guarantors.'
            }
          },
          {
            '@type': 'Question',
            name: 'How does One-Time Settlement (OTS) work for retired borrowers?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Under RBI Stressed Assets guidelines, banks evaluate genuine retirement hardships and medical distress to sanction a compromise One-Time Settlement (OTS), waiving 100% of penal interest and discounting 40% to 55% of the principal balance.'
            }
          },
          {
            '@type': 'Question',
            name: 'Does settling a loan impact a pensioner\'s joint accounts with family?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. Completing an OTS discharges the debt liability entirely. Once the bank issues a stamped No Dues Certificate (NDC), all recovery proceedings, internal flags, and threats against associated accounts are permanently revoked.'
            }
          },
          {
            '@type': 'Question',
            name: 'How can a senior citizen rebuild CIBIL score after loan settlement?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'After settlement, ensure the bank updates the tradeline balance to zero. Under Section 21 of CICRA 2005, submit your NDC to credit bureaus. Within 12 to 18 months, maintaining a secured credit card will restore your credit score back to 750+.'
            }
          }
        ]
      },
      {
        '@type': 'FinancialService',
        '@id': 'https://www.credsettle.com/#service',
        name: 'CredSettle Senior Citizen Debt Resolution & Pension Protection Services',
        url: 'https://www.credsettle.com/pension-attachment-for-loan-recovery',
        provider: {
          '@type': 'Organization',
          name: 'CredSettle'
        },
        image: 'https://www.credsettle.com/images/infographics/pension-attachment-for-loan-recovery.jpg',
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
          reviewCount: '5180',
          bestRating: '5',
          worstRating: '1'
        },
        review: [
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'Shri Ramakant Sharma'
            },
            datePublished: '2026-08-14',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5'
            },
            reviewBody:
              'When a private bank threatened to freeze my pension account for an unpaid personal loan taken for my daughter\'s wedding, CredSettle stepped in immediately. They cited Section 60(1)(g) CPC, stopped all recovery harassment, and structured an amicable 50% One-Time Settlement within 20 days.',
            itemReviewed: {
              '@type': 'FinancialService',
              '@id': 'https://www.credsettle.com/#service'
            }
          },
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'Subhashini Venkataraman'
            },
            datePublished: '2026-07-22',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5'
            },
            reviewBody:
              'My bank attempted an illegal auto-debit on my family pension savings. The legal team at CredSettle issued a statutory representation under the Pensions Act, forced the bank to refund the deducted amount, and negotiated a complete debt discharge with a stamped No Dues Certificate.',
            itemReviewed: {
              '@type': 'FinancialService',
              '@id': 'https://www.credsettle.com/#service'
            }
          },
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'Major Gurpreet Singh (Retd.)'
            },
            datePublished: '2026-06-11',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5'
            },
            reviewBody:
              'Facing hefty medical expenses, I defaulted on two unsecured personal loans. CredSettle represented my case before the bank Stressed Assets Committee with a senior citizen hardship dossier, securing a 55% principal waiver and permanent closure.',
            itemReviewed: {
              '@type': 'FinancialService',
              '@id': 'https://www.credsettle.com/#service'
            }
          },
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'Nalini Prabha Joshi'
            },
            datePublished: '2026-05-04',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5'
            },
            reviewBody:
              'Recovery agents were continuously visiting my house and threatening court warrants against my late husband\'s pension account. CredSettle protected my legal rights under RBI Fair Practices Code and resolved the entire liability through a clean compromise settlement.',
            itemReviewed: {
              '@type': 'FinancialService',
              '@id': 'https://www.credsettle.com/#service'
            }
          },
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'Dilip Kumar Sengupta'
            },
            datePublished: '2026-03-19',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '4.8'
            },
            reviewBody:
              'I was terrified that the bank would attach my gratuity and monthly pension through civil litigation. CredSettle gave me complete legal clarity on CPC exemptions, represented me in bilateral OTS negotiations, and helped me achieve total debt freedom.',
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
      <PensionAttachmentForLoanRecoveryClient />
      <Footer />
    </div>
  );
}
