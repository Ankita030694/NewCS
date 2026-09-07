import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AgriculturalLoanDefaultSarfaesiActClient from './AgriculturalLoanDefaultSarfaesiActClient';

export const metadata: Metadata = {
  title: 'Agricultural Loan Default: Can Banks Auction Farm Land?',
  description:
    'Defaulted on a KCC or tractor loan? Learn why Section 31(i) SARFAESI Act strictly prohibits auctioning agricultural land and protects farmers.',
  keywords: [
    'Agricultural loan default can bank use SARFAESI',
    'KCC loan default consequences',
    'auction of agricultural land for loan',
    'section 31i sarfaesi act agricultural land',
    'can bank seize agricultural land in india',
    'kisan credit card settlement rules',
    'kcc loan recovery procedure rbi',
    'supreme court ruling on agricultural land sarfaesi',
    'drt agricultural land auction stay',
    'agricultural one time settlement scheme'
  ],
  openGraph: {
    title: 'Agricultural Loan Default: Can Banks Auction Farm Land? | CredSettle',
    description:
      'Defaulted on a KCC or tractor loan? Learn why Section 31(i) SARFAESI Act strictly prohibits auctioning agricultural land and protects farmers.',
    type: 'article',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://www.credsettle.com/agricultural-loan-default-sarfaesi-act',
    images: [
      {
        url: 'https://www.credsettle.com/images/infographics/agricultural-loan-default-sarfaesi-act.jpg',
        width: 1200,
        height: 630,
        alt: 'Agricultural Loan Default and SARFAESI Act Exemption Guide'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agricultural Loan Default: Can Banks Auction Farm Land?',
    description:
      'Defaulted on a KCC or tractor loan? Learn why Section 31(i) SARFAESI Act strictly prohibits auctioning agricultural land and protects farmers.',
    images: ['https://www.credsettle.com/images/infographics/agricultural-loan-default-sarfaesi-act.jpg']
  },
  alternates: {
    canonical: 'https://www.credsettle.com/agricultural-loan-default-sarfaesi-act'
  }
};

export default function AgriculturalLoanDefaultSarfaesiActPage() {
  const unifiedSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': 'https://www.credsettle.com/agricultural-loan-default-sarfaesi-act#article',
        isPartOf: {
          '@type': 'WebPage',
          '@id': 'https://www.credsettle.com/agricultural-loan-default-sarfaesi-act'
        },
        headline: 'Can Banks Auction Agricultural Land Under the SARFAESI Act?',
        description:
          'Defaulted on a KCC or tractor loan? Learn why Section 31(i) SARFAESI Act strictly prohibits auctioning agricultural land and protects farmers.',
        inLanguage: 'en-IN',
        mainEntityOfPage: 'https://www.credsettle.com/agricultural-loan-default-sarfaesi-act',
        datePublished: '2026-09-07T09:00:00+05:30',
        dateModified: '2026-09-07T09:00:00+05:30',
        articleSection: 'Banking Law & Agricultural Debt Resolution',
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
        image: ['https://www.credsettle.com/images/infographics/agricultural-loan-default-sarfaesi-act.jpg']
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
        '@id': 'https://www.credsettle.com/agricultural-loan-default-sarfaesi-act#breadcrumb',
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
            name: 'Agricultural Loan Default & SARFAESI Act',
            item: 'https://www.credsettle.com/agricultural-loan-default-sarfaesi-act'
          }
        ]
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://www.credsettle.com/agricultural-loan-default-sarfaesi-act#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Can a bank seize and auction agricultural land under the SARFAESI Act?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. Section 31(i) of the SARFAESI Act, 2002 creates an absolute statutory exemption prohibiting banks from taking symbolic possession, physical possession, or conducting an auction of any agricultural land for recovering unpaid loans without civil court intervention.'
            }
          },
          {
            '@type': 'Question',
            name: 'What does Section 31(i) of the SARFAESI Act state about farm land?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Section 31(i) explicitly mandates that the provisions of the SARFAESI Act shall not apply to any security interest created in agricultural land. Any possession notice under Section 13(4) or auction notice issued against agricultural land is illegal and void ab initio.'
            }
          },
          {
            '@type': 'Question',
            name: 'Can a bank auction agricultural land for Kisan Credit Card (KCC) loan default?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. KCC loans secured against agricultural land cannot be recovered through SARFAESI proceedings. If a bank issues SARFAESI notices for KCC defaults, farmers can challenge the action before the Debt Recovery Tribunal under Section 17 or High Court under Article 226.'
            }
          },
          {
            '@type': 'Question',
            name: 'How does the Supreme Court determine whether a land is truly agricultural?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'In landmark judgments like ITC Ltd. v. Blue Coast Hotels and Indian Bank v. K. Pappireddiyar, the Supreme Court held that agricultural classification depends on revenue records (Khasra/Khatauni), actual agricultural usage, and the purpose of the security interest at the time of mortgage creation.'
            }
          },
          {
            '@type': 'Question',
            name: 'What legal recourse can a bank take if it cannot use the SARFAESI Act?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'If SARFAESI is barred under Section 31(i), banks must file a standard civil recovery suit in Civil Court or file an Original Application (OA) before the Debt Recovery Tribunal (DRT) under Section 19 of the RDB Act if debt exceeds ₹20 Lakhs.'
            }
          },
          {
            '@type': 'Question',
            name: 'Can banks auction farm tractors, harvesters, or agricultural equipment?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. The Section 31(i) exemption strictly protects agricultural land. Movable assets like tractors, harvesters, or irrigation equipment are hypothecated chattels, allowing lenders to seize them under standard hypothecation contract clauses, subject to RBI Fair Practices Code guidelines against physical coercion.'
            }
          },
          {
            '@type': 'Question',
            name: 'Can a farmer go to jail or face arrest for defaulting on an agricultural loan?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. Defaulting on a Kisan Credit Card, crop loan, or farm equipment loan is strictly a civil dispute. Commercial banks cannot arrest farmers or file criminal FIRs for loan default unless there is documented evidence of forged revenue records or deliberate fraud.'
            }
          },
          {
            '@type': 'Question',
            name: 'What happens if a bank issues a Section 13(2) demand notice for farm land?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'The borrower should immediately file a formal written representation and objection under Section 13(3A) within 60 days. The objection must highlight the statutory bar under Section 31(i), enclose certified revenue extract records, and demand withdrawal of SARFAESI proceedings.'
            }
          },
          {
            '@type': 'Question',
            name: 'Can agricultural loans and KCC dues be settled through a One-Time Settlement (OTS)?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. All public sector and scheduled commercial banks offer specialized Agricultural One-Time Settlement (OTS) schemes approved by their boards. Distressed farmers facing crop failure or financial hardship can negotiate significant waivers on accumulated compound interest and penal charges.'
            }
          },
          {
            '@type': 'Question',
            name: 'How does an agricultural loan default affect CIBIL scores and future credit access?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'When an agricultural loan defaults past 90 days, it is classified as a Non-Performing Asset (NPA) and reported to CIBIL, causing a score drop of 80 to 140 points. Completing an official OTS and obtaining a No Dues Certificate updates credit records to Settled or Closed.'
            }
          }
        ]
      },
      {
        '@type': 'FinancialService',
        '@id': 'https://www.credsettle.com/#service',
        name: 'CredSettle Agricultural Debt Defense & Loan Settlement Services',
        url: 'https://www.credsettle.com/agricultural-loan-default-sarfaesi-act',
        provider: {
          '@type': 'Organization',
          name: 'CredSettle'
        },
        image: 'https://www.credsettle.com/images/infographics/agricultural-loan-default-sarfaesi-act.jpg',
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
          reviewCount: '5120',
          bestRating: '5',
          worstRating: '1'
        },
        review: [
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'Gurpreet Singh Dhillon'
            },
            datePublished: '2026-08-14',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5'
            },
            reviewBody:
              'A nationalized bank issued a Section 13(4) possession notice against my 8-acre ancestral farmland for a defaulted Kisan Credit Card loan. CredSettle team filed a Section 13(3A) statutory objection and DRT petition invoking Section 31(i). The bank withdrew the auction and agreed to a 50% waiver under OTS!',
            itemReviewed: {
              '@type': 'FinancialService',
              '@id': 'https://www.credsettle.com/#service'
            }
          },
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'Rameshwar Patil'
            },
            datePublished: '2026-07-22',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5'
            },
            reviewBody:
              'Recovery agents were threatening to seize our agricultural land in Maharashtra following two consecutive years of drought and crop failure. CredSettle protected us under RBI agricultural guidelines, stopped field visits, and structured an affordable settlement with full No Dues Certificate.',
            itemReviewed: {
              '@type': 'FinancialService',
              '@id': 'https://www.credsettle.com/#service'
            }
          },
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'Venkatesh Naidu'
            },
            datePublished: '2026-06-11',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5'
            },
            reviewBody:
              'We had a tractor loan and an allied poultry loan that turned NPA. CredSettle clearly differentiated between hypothecated farm machinery and protected farm land, preventing illegal land attachment while negotiating an honest compromise settlement.',
            itemReviewed: {
              '@type': 'FinancialService',
              '@id': 'https://www.credsettle.com/#service'
            }
          },
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'Bhupendra Chaudhary'
            },
            datePublished: '2026-05-04',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '4.8'
            },
            reviewBody:
              'The legal clarity provided by Ashish Jhangra and the CredSettle panel regarding Supreme Court precedents on Section 31(i) was outstanding. They forced the bank legal desk to drop their illegal SARFAESI action and accept our settlement proposal.',
            itemReviewed: {
              '@type': 'FinancialService',
              '@id': 'https://www.credsettle.com/#service'
            }
          },
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'Sardar Manjit Sandhu'
            },
            datePublished: '2026-03-29',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5'
            },
            reviewBody:
              'When our cooperative bank account was frozen and legal notices started arriving for an agricultural term loan, CredSettle stepped in with statutory representations that protected our livelihood and resolved the entire liability cleanly.',
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
      <AgriculturalLoanDefaultSarfaesiActClient />
      <Footer />
    </div>
  );
}
