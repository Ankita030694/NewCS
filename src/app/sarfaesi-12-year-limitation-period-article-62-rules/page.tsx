import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SarfaesiLimitationClient from './SarfaesiLimitationClient';

export const metadata: Metadata = {
  title: 'SARFAESI 12-Year Limitation: Article 62 Mortgage Rules',
  description:
    'Learn SARFAESI 12-year limitation rules under Article 62. Know when bank mortgage claims expire and how to challenge time-barred action in DRT.',
  keywords: [
    'SARFAESI 12-Year Limitation Period: Article 62 Limitation Act Rules',
    'sarfaesi 12 year limitation period',
    'article 62 limitation act mortgage recovery',
    'section 36 sarfaesi act limitation period',
    'limitation period for bank loan recovery in india',
    'drt limitation period challenge section 17',
    'section 18 limitation act balance sheet acknowledgment',
    'bank mortgage recovery time barred after 12 years',
    'can bank auction property after 12 years sarfaesi',
    'credsettle sarfaesi legal defense'
  ],
  openGraph: {
    title: 'SARFAESI 12-Year Limitation: Article 62 Mortgage Rules',
    description:
      'Learn SARFAESI 12-year limitation rules under Article 62. Know when bank mortgage claims expire and how to challenge time-barred action in DRT.',
    type: 'article',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://www.credsettle.com/sarfaesi-12-year-limitation-period-article-62-rules',
    images: [
      {
        url: 'https://www.credsettle.com/images/infographics/sarfaesi-12-year-limitation-period-article-62-rules.jpg',
        width: 1200,
        height: 675,
        alt: 'SARFAESI 12-Year Limitation Period and Article 62 Rules'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SARFAESI 12-Year Limitation: Article 62 Mortgage Rules',
    description:
      'Learn SARFAESI 12-year limitation rules under Article 62. Know when bank mortgage claims expire and how to challenge time-barred action in DRT.',
    images: [
      'https://www.credsettle.com/images/infographics/sarfaesi-12-year-limitation-period-article-62-rules.jpg'
    ]
  },
  alternates: {
    canonical: 'https://www.credsettle.com/sarfaesi-12-year-limitation-period-article-62-rules'
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function SarfaesiLimitationPage() {
  const unifiedSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': 'https://www.credsettle.com/sarfaesi-12-year-limitation-period-article-62-rules#article',
        isPartOf: {
          '@type': 'WebPage',
          '@id': 'https://www.credsettle.com/sarfaesi-12-year-limitation-period-article-62-rules'
        },
        headline: 'SARFAESI 12-Year Limitation: Article 62 Mortgage Rules',
        description:
          'Learn SARFAESI 12-year limitation rules under Article 62. Know when bank mortgage claims expire and how to challenge time-barred action in DRT.',
        inLanguage: 'en-IN',
        mainEntityOfPage: 'https://www.credsettle.com/sarfaesi-12-year-limitation-period-article-62-rules',
        datePublished: '2026-10-16T10:00:00+05:30',
        dateModified: '2026-10-16T10:00:00+05:30',
        articleSection: 'Banking Law & Debt Recovery Tribunal Litigation',
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
          'https://www.credsettle.com/images/infographics/sarfaesi-12-year-limitation-period-article-62-rules.jpg'
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
        '@id': 'https://www.credsettle.com/sarfaesi-12-year-limitation-period-article-62-rules#breadcrumb',
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
            name: 'SARFAESI 12-Year Limitation Rules',
            item: 'https://www.credsettle.com/sarfaesi-12-year-limitation-period-article-62-rules'
          }
        ]
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://www.credsettle.com/sarfaesi-12-year-limitation-period-article-62-rules#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What is the limitation period for a bank to initiate SARFAESI action against mortgaged property?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Under Section 36 of the SARFAESI Act read with Article 62 of the Limitation Act, 1963, the limitation period for enforcing a mortgage against immovable property is 12 years. The clock starts when the secured money legally becomes due.'
            }
          },
          {
            '@type': 'Question',
            name: 'When does the 12-year limitation clock begin to run under Article 62?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Under Article 62, time starts when the money becomes due. Courts hold that this happens upon default and expiry of the demand notice, such as the 60-day period following a Section 13(2) demand notice under the SARFAESI Act.'
            }
          },
          {
            '@type': 'Question',
            name: 'Does the 12-year limitation period apply to personal recovery against the borrower?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. The 12-year period under Article 62 applies only to the sale of mortgaged immovable property. Personal remedies against the borrower or guarantor for any shortfall expire after 3 years under Article 55 or Article 113 of the Limitation Act.'
            }
          },
          {
            '@type': 'Question',
            name: 'Can an entry in a company balance sheet restart the 12-year limitation clock?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. The Supreme Court in Asset Reconstruction Company v. Bishal Jaiswal confirmed that an unqualified admission of liability in a balance sheet constitutes an acknowledgment under Section 18 of the Limitation Act, resetting the limitation period.'
            }
          },
          {
            '@type': 'Question',
            name: 'What happens if a bank issues a Section 13(4) possession notice after 12 years?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Any Section 13(4) measure taken after 12 years without valid acknowledgment is barred by Section 36 of the SARFAESI Act. The borrower can file an application under Section 17 before the DRT to quash the notice and restore possession.'
            }
          },
          {
            '@type': 'Question',
            name: 'Does a partial loan repayment reset the limitation clock under Section 19?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Under Section 19 of the Limitation Act, if a borrower makes a payment toward principal or interest before the 12-year period expires, a fresh 12-year limitation period begins from the date of that payment.'
            }
          },
          {
            '@type': 'Question',
            name: 'Can an Asset Reconstruction Company (ARC) enforce a loan if 12 years have passed?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. An ARC steps into the shoes of the assigning lender. If the debt was already time-barred prior to assignment or reaches 12 years without acknowledgment, the ARC cannot take measures under Section 13(4) of the SARFAESI Act.'
            }
          },
          {
            '@type': 'Question',
            name: 'How can a borrower legally challenge a time-barred SARFAESI auction notice?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'The borrower must submit a formal Section 13(3A) objection pointing out the time bar under Section 36. If the bank proceeds under Section 13(4), the borrower should file a Securitisation Application within 45 days before the Debt Recovery Tribunal.'
            }
          },
          {
            '@type': 'Question',
            name: 'What relief can the Debt Recovery Tribunal grant in a time-barred SARFAESI proceeding?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Under Section 17(3) of the SARFAESI Act, the DRT has the authority to declare the bank measures invalid, quash possession notices, order physical restoration of the property to the borrower, and direct the return of title deeds.'
            }
          },
          {
            '@type': 'Question',
            name: 'How does CredSettle assist borrowers facing time-barred mortgage recovery action?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'CredSettle conducts a forensic ledger audit, identifies expired limitation periods under Article 62, files strong DRT applications, stops illegal auctions, and negotiates deep debt waivers directly with bank credit committees.'
            }
          }
        ]
      },
      {
        '@type': 'FinancialService',
        '@id': 'https://www.credsettle.com/#service',
        name: 'CredSettle Debt Settlement & Legal Defense Services',
        url: 'https://www.credsettle.com',
        telephone: '+91-8800226635',
        priceRange: '₹₹',
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
              name: 'Gaurav Khandelwal'
            },
            datePublished: '2026-10-11',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5'
            },
            reviewBody:
              'A nationalized bank issued a Section 13(4) possession notice on our commercial unit 13 years after loan recall. CredSettle audited the loan documents, proved that no Section 18 acknowledgment existed, and got the DRT to stay the auction. We subsequently settled the matter with a 75% waiver.',
            itemReviewed: {
              '@type': 'FinancialService',
              '@id': 'https://www.credsettle.com/#service'
            }
          },
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'Naveen Chhabra'
            },
            datePublished: '2026-09-24',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5'
            },
            reviewBody:
              'An asset reconstruction company tried to auction our residential plot on a 14-year-old home loan default. CredSettle established that Article 62 limitation had expired and that the bank had no valid mortgage revival. The DRT quashed the sale notice completely.',
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
            datePublished: '2026-09-08',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5'
            },
            reviewBody:
              'The bank attempted to recover an unsecured shortfall 6 years after auctioning our warehouse. CredSettle demonstrated that while mortgage action has 12 years, the personal remedy under Article 55 is strictly limited to 3 years. The bank dropped all personal recovery claims.',
            itemReviewed: {
              '@type': 'FinancialService',
              '@id': 'https://www.credsettle.com/#service'
            }
          },
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'Harishankar Vyas'
            },
            datePublished: '2026-08-19',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '4.8'
            },
            reviewBody:
              'We were served an illegal Section 14 magistrate order for a decade-old factory loan. CredSettle filed a Securitisation Application citing Section 36 of the SARFAESI Act, stopped physical possession, and negotiated an affordable one-time settlement.',
            itemReviewed: {
              '@type': 'FinancialService',
              '@id': 'https://www.credsettle.com/#service'
            }
          },
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'Ritu Rajan'
            },
            datePublished: '2026-07-30',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5'
            },
            reviewBody:
              'CredSettle provided outstanding legal representation before the DRT. Their team dissected the bank ledger and proved that the 12-year limitation period under Article 62 had expired. The bank returned our original title deeds and issued a clean No Dues Certificate.',
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
      <SarfaesiLimitationClient />
      <Footer />
    </div>
  );
}
