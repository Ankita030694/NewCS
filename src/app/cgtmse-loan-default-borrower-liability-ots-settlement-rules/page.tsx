import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CgtmseLoanDefaultClient from './CgtmseLoanDefaultClient';

export const metadata: Metadata = {
  title: 'CGTMSE Loan Default: Borrower Liability & OTS Rules',
  description:
    'Facing CGTMSE loan default? Learn borrower liability, personal guarantee rules, bank recovery limits, and how to negotiate an OTS with CredSettle.',
  keywords: [
    'cgtmse loan default borrower liability',
    'cgtmse loan ots settlement rules',
    'what happens if cgtmse loan defaults',
    'can bank seize property for cgtmse loan default',
    'cgtmse personal guarantee liability',
    'cgtmse claim settlement recovery from borrower',
    'section 60 cpc assets exempt from bank attachment',
    'cgtmse loan recovery process in india',
    'one time settlement for cgtmse business loan',
    'credsettle msme cgtmse loan settlement legal help'
  ],
  openGraph: {
    title: 'CGTMSE Loan Default: Borrower Liability & OTS Rules',
    description:
      'Facing CGTMSE loan default? Learn borrower liability, personal guarantee rules, bank recovery limits, and how to negotiate an OTS with CredSettle.',
    type: 'article',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://www.credsettle.com/cgtmse-loan-default-borrower-liability-ots-settlement-rules',
    images: [
      {
        url: 'https://www.credsettle.com/images/infographics/cgtmse-loan-default-borrower-liability-ots-settlement-rules.jpg',
        width: 1200,
        height: 675,
        alt: 'CGTMSE Loan Default Borrower Liability and OTS Settlement Legal Guide'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CGTMSE Loan Default: Borrower Liability & OTS Rules',
    description:
      'Facing CGTMSE loan default? Learn borrower liability, personal guarantee rules, bank recovery limits, and how to negotiate an OTS with CredSettle.',
    images: [
      'https://www.credsettle.com/images/infographics/cgtmse-loan-default-borrower-liability-ots-settlement-rules.jpg'
    ]
  },
  alternates: {
    canonical: 'https://www.credsettle.com/cgtmse-loan-default-borrower-liability-ots-settlement-rules'
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function CgtmseLoanDefaultPage() {
  const unifiedSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': 'https://www.credsettle.com/cgtmse-loan-default-borrower-liability-ots-settlement-rules#article',
        isPartOf: {
          '@type': 'WebPage',
          '@id': 'https://www.credsettle.com/cgtmse-loan-default-borrower-liability-ots-settlement-rules'
        },
        headline: 'CGTMSE Loan Default Guide: Borrower Rights & OTS Settlement',
        description:
          'Facing CGTMSE loan default? Learn borrower liability, personal guarantee rules, bank recovery limits, and how to negotiate an OTS with CredSettle.',
        inLanguage: 'en-IN',
        mainEntityOfPage: 'https://www.credsettle.com/cgtmse-loan-default-borrower-liability-ots-settlement-rules',
        datePublished: '2026-10-15T09:00:00+05:30',
        dateModified: '2026-10-15T09:00:00+05:30',
        articleSection: 'MSME Banking Law & Debt Settlement',
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
          'https://www.credsettle.com/images/infographics/cgtmse-loan-default-borrower-liability-ots-settlement-rules.jpg'
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
        '@id': 'https://www.credsettle.com/cgtmse-loan-default-borrower-liability-ots-settlement-rules#breadcrumb',
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
            name: 'CGTMSE Loan Default & OTS Rules',
            item: 'https://www.credsettle.com/cgtmse-loan-default-borrower-liability-ots-settlement-rules'
          }
        ]
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://www.credsettle.com/cgtmse-loan-default-borrower-liability-ots-settlement-rules#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Does CGTMSE guarantee mean the borrower is free from loan liability after default?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. The CGTMSE guarantee is an indemnity for the lending bank, not insurance for the borrower. When an MSME defaults, the bank can claim 75% to 85% of the defaulted sum from the CGTMSE Trust. However, the borrower remains 100% legally liable for the entire debt. The bank is legally mandated by CGTMSE rules to pursue recovery against the borrower.'
            }
          },
          {
            '@type': 'Question',
            name: 'Can a bank initiate SARFAESI action against personal property for a CGTMSE loan?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No, unless that property was lawfully charged. CGTMSE scheme rules explicitly prohibit lenders from accepting third-party guarantees or collateral security on covered credit facilities up to ₹2 Crore or ₹5 Crore. Because no mortgage is created over personal residential property, the bank cannot invoke SARFAESI Section 13(4) against your home. They can only repossess hypothecated business assets such as stock and machinery.'
            }
          },
          {
            '@type': 'Question',
            name: 'Can a CGTMSE loan account be settled through a One-Time Settlement (OTS)?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. CGTMSE operational guidelines explicitly permit Member Lending Institutions (MLIs) to enter into compromise settlements and OTS under their internal board-approved policies. The bank can grant substantial waivers on penal charges, compound interest, and even principal haircuts, subsequently sharing the net recovered amount with CGTMSE.'
            }
          },
          {
            '@type': 'Question',
            name: 'What happens if the bank has already received a claim payout from CGTMSE?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Even if the bank has received its first or second tranche claim payout from CGTMSE, the bank retains full legal authority to settle the account via OTS. The bank is required to report the settlement to CGTMSE and remit the trust\'s proportionate share of the recovered funds. Upon paying the agreed OTS sum, you receive a full No Dues Certificate and legal case closure.'
            }
          },
          {
            '@type': 'Question',
            name: 'Can a bank attach personal assets exempt under Section 60 of the CPC for a CGTMSE loan default?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. If a bank files a recovery suit in a civil court or Debt Recovery Tribunal (DRT) to execute a decree against personal property, Section 60(1) of the Code of Civil Procedure (CPC) strictly protects exempt assets. Your personal residential house (if an agriculturist), necessary clothing, cooking utensils, tools of trade, EPF balance, gratuity, and salary limits cannot be attached.'
            }
          },
          {
            '@type': 'Question',
            name: 'Is the promoter\'s personal guarantee enforceable in a CGTMSE loan default?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. While CGTMSE prohibits third-party collateral and external guarantors, lending institutions routinely secure personal guarantees from promoters, proprietors, and primary directors. If the borrower entity defaults, the bank can proceed against the personal guarantor through civil suits, DRT recovery proceedings, or personal insolvency under the Insolvency and Bankruptcy Code (IBC).'
            }
          },
          {
            '@type': 'Question',
            name: 'Can recovery agents visit an MSME borrower\'s residence or threaten police action?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. The RBI Master Circular on Fair Practices Code strictly prohibits recovery agents from visiting borrowers outside permissible hours (8:00 AM to 7:00 PM), intimidating family members, or threatening false criminal action. Defaulting on a business loan due to commercial distress is a civil dispute, not a criminal offence, unless fraud or diversion of funds is proven.'
            }
          },
          {
            '@type': 'Question',
            name: 'What documents are required to apply for an OTS settlement on a defaulted CGTMSE loan?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'To propose an OTS, submit a formal commercial hardship letter, audited financial statements proving business closure or severe turnover contraction, bank account statements across all active accounts, an asset-liability affidavit, GST cancellation or surrender receipts (if applicable), and a realistic lump-sum settlement offer backed by third-party family assistance.'
            }
          },
          {
            '@type': 'Question',
            name: 'How does a CGTMSE loan default affect the promoter\'s CIBIL score and commercial CMR rank?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Upon 90 days of non-payment, the loan is reported as a Non-Performing Asset (NPA) to credit bureaus, significantly impairing both the entity\'s CIBIL MSME Rank (CMR) and the promoters\' personal credit scores. However, negotiating an OTS and securing a formal No Dues Certificate stops further legal reporting and allows you to initiate credit score rehabilitation.'
            }
          },
          {
            '@type': 'Question',
            name: 'How does CredSettle help MSME borrowers resolve defaulted CGTMSE loans?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'CredSettle provides comprehensive legal and financial defense. Our senior advocates stop unlawful recovery harassment, challenge inflated penal ledgers, enforce statutory asset immunities under Section 60 CPC and MSMED Act, and negotiate directly with bank zonal credit committees to achieve deep debt waivers and official No Dues Certificates.'
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
              name: 'Vikram Malhotra'
            },
            datePublished: '2026-09-18',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5'
            },
            reviewBody:
              'My manufacturing unit faced heavy export order cancellations, leading to a default on our ₹35 Lakhs CGTMSE loan. The bank threatened to auction my residential home. CredSettle demonstrated that the scheme bars collateral on our home, proved the loan was covered by CGTMSE, and negotiated a 60% OTS waiver with an official bank NDC.',
            itemReviewed: {
              '@type': 'FinancialService',
              '@id': 'https://www.credsettle.com/#service'
            }
          },
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'Sunil Rathi'
            },
            datePublished: '2026-09-02',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5'
            },
            reviewBody:
              'I assumed the bank would not pursue me after taking the 75% CGTMSE claim payout. When recovery agents started calling my vendors and family, CredSettle intervened immediately. They halted the harassment under RBI Fair Practices rules and structured an affordable compromise settlement that permanently closed the account.',
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
            datePublished: '2026-08-20',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5'
            },
            reviewBody:
              'After closing down our wholesale textile business due to supply chain disruption, our bank filed a DRT case for a ₹48 Lakhs collateral-free credit facility. CredSettle represented us before the bank zonal stressed assets committee, successfully waiving unapplied interest and settling the principal for ₹16 Lakhs.',
            itemReviewed: {
              '@type': 'FinancialService',
              '@id': 'https://www.credsettle.com/#service'
            }
          },
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'Gurpreet Singh'
            },
            datePublished: '2026-08-05',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '4.9'
            },
            reviewBody:
              'CredSettle gave me complete legal clarity when our auto ancillary unit defaulted. Their team explained my rights as a personal guarantor, shielded my exempt personal assets under Section 60 CPC, and finalized a clean One-Time Settlement approved by the bank board.',
            itemReviewed: {
              '@type': 'FinancialService',
              '@id': 'https://www.credsettle.com/#service'
            }
          },
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'Prashant Kulkarni'
            },
            datePublished: '2026-07-22',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5'
            },
            reviewBody:
              'Our engineering startup collapsed post-pandemic with a ₹22 Lakhs CGTMSE loan default. Recovery agents threatened police arrest under Section 420. CredSettle issued a legal notice warning them against criminal intimidation and achieved a full and final OTS release for ₹7.5 Lakhs.',
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
      <CgtmseLoanDefaultClient />
      <Footer />
    </div>
  );
}
