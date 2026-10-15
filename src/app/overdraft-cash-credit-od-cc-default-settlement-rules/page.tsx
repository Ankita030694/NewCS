import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import OdCcDefaultSettlementClient from './OdCcDefaultSettlementClient';

export const metadata: Metadata = {
  title: 'Overdraft and Cash Credit (OD/CC) Default Settlement Rules',
  description:
    'Facing OD/CC default? Learn Overdraft and Cash Credit settlement rules under RBI norms, stop SARFAESI, release assets, and negotiate 50% OTS.',
  keywords: [
    'overdraft default settlement rules',
    'cash credit default settlement rules',
    'od cc default settlement rbi guidelines',
    'drawing power deficit npa settlement',
    'rbi compromise settlement for working capital',
    'sarfaesi act cash credit default defense',
    'stock audit discrepancy criminal breach of trust',
    'cgtmse loan default settlement guidelines',
    'one time settlement for overdraft account',
    'credsettle od cc debt relief'
  ],
  openGraph: {
    title: 'Overdraft and Cash Credit (OD/CC) Default Settlement Rules',
    description:
      'Facing OD/CC default? Learn Overdraft and Cash Credit settlement rules under RBI norms, stop SARFAESI, release assets, and negotiate 50% OTS.',
    type: 'article',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://www.credsettle.com/overdraft-cash-credit-od-cc-default-settlement-rules',
    images: [
      {
        url: 'https://www.credsettle.com/images/infographics/overdraft-cash-credit-od-cc-default-settlement-rules.jpg',
        width: 1200,
        height: 675,
        alt: 'OD CC Default Settlement Rules and RBI NPA Resolution Guide'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Overdraft and Cash Credit (OD/CC) Default Settlement Rules',
    description:
      'Facing OD/CC default? Learn Overdraft and Cash Credit settlement rules under RBI norms, stop SARFAESI, release assets, and negotiate 50% OTS.',
    images: [
      'https://www.credsettle.com/images/infographics/overdraft-cash-credit-od-cc-default-settlement-rules.jpg'
    ]
  },
  alternates: {
    canonical: 'https://www.credsettle.com/overdraft-cash-credit-od-cc-default-settlement-rules'
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function OverdraftCashCreditSettlementPage() {
  const unifiedSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': 'https://www.credsettle.com/overdraft-cash-credit-od-cc-default-settlement-rules#article',
        isPartOf: {
          '@type': 'WebPage',
          '@id': 'https://www.credsettle.com/overdraft-cash-credit-od-cc-default-settlement-rules'
        },
        headline: 'Overdraft and Cash Credit (OD/CC) Default Settlement Rules',
        description:
          'Facing OD/CC default? Learn Overdraft and Cash Credit settlement rules under RBI norms, stop SARFAESI, release assets, and negotiate 50% OTS.',
        inLanguage: 'en-IN',
        mainEntityOfPage: 'https://www.credsettle.com/overdraft-cash-credit-od-cc-default-settlement-rules',
        datePublished: '2026-10-15T09:00:00+05:30',
        dateModified: '2026-10-15T09:00:00+05:30',
        articleSection: 'Commercial Banking Law & Working Capital Debt Resolution',
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
          'https://www.credsettle.com/images/infographics/overdraft-cash-credit-od-cc-default-settlement-rules.jpg'
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
        '@id': 'https://www.credsettle.com/overdraft-cash-credit-od-cc-default-settlement-rules#breadcrumb',
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
            name: 'OD & CC Default Settlement Rules',
            item: 'https://www.credsettle.com/overdraft-cash-credit-od-cc-default-settlement-rules'
          }
        ]
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://www.credsettle.com/overdraft-cash-credit-od-cc-default-settlement-rules#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'When is an Overdraft or Cash Credit (OD/CC) account officially declared an NPA?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Under RBI Prudential Norms on Income Recognition and Asset Classification (IRACP), an OD/CC account is classified as an NPA if it remains out of order for 90 days. An account is out of order when the balance continuously exceeds the sanctioned limit or drawing power, or when credits are insufficient to service interest debited during the previous 90-day window.'
            }
          },
          {
            '@type': 'Question',
            name: 'Can a bank file criminal charges if there is a shortfall in hypothecated stock during audit?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'A stock discrepancy caused by price fluctuations, business losses, or expired inventory is a civil commercial matter, not a criminal offence. The Supreme Court in multiple rulings has held that criminal breach of trust under BNS Section 316 or cheating under Section 318 requires fraudulent intention at the inception of the loan. Absent deliberate asset siphoning, banks cannot convert civil debt into criminal prosecution.'
            }
          },
          {
            '@type': 'Question',
            name: 'How does Drawing Power (DP) affect default status in Cash Credit facilities?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Drawing Power is calculated monthly from eligible paid inventory and valid debtors less unpaid sundry creditors, factoring in agreed bank margins. If the outstanding CC balance exceeds the calculated DP for 90 consecutive days, the account is tagged out of order and classified as an NPA, even if the balance remains within the overall sanctioned limit.'
            }
          },
          {
            '@type': 'Question',
            name: 'Can a bank issue a SARFAESI notice against primary stock or mortgaged collateral?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Once an OD/CC account is classified as an NPA, the lender can issue a statutory 60-day demand notice under Section 13(2) of the SARFAESI Act, 2002. If unresolved, the bank may issue a possession notice under Section 13(4) against mortgaged collateral properties or hypothecated business equipment.'
            }
          },
          {
            '@type': 'Question',
            name: 'Can borrowers legally challenge a SARFAESI Section 13(2) demand notice?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Borrowers have the statutory right under Section 13(3A) of the SARFAESI Act to submit a detailed representation or objection within 60 days. The bank is legally mandated to examine the objections and communicate its decision within 15 days. A failure to provide reasoned disposal renders subsequent SARFAESI measures void.'
            }
          },
          {
            '@type': 'Question',
            name: 'What settlement discount or haircut can be expected in an OD/CC One-Time Settlement (OTS)?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Settlement haircuts depend heavily on collateral coverage and liquidity. Where primary stock has eroded and collateral is unmarketable, disputed, or absent, banks regularly accept settlements with 40% to 75% waivers on penal interest, unapplied interest, and principal. For secured facilities with liquid properties, banks typically waive 100% of penal charges and negotiate nominal principal reductions.'
            }
          },
          {
            '@type': 'Question',
            name: 'Are personal guarantors and directors personally liable for company OD/CC defaults?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Under Section 128 of the Indian Contract Act, 1872, the liability of a personal guarantor is co-extensive with that of the principal debtor. Banks can proceed against guarantors in the Debt Recovery Tribunal (DRT) or initiate personal insolvency under Section 95 of the Insolvency and Bankruptcy Code (IBC). A comprehensive OTS agreement must include explicit release of all personal guarantees.'
            }
          },
          {
            '@type': 'Question',
            name: 'How does CGTMSE coverage impact default settlement in MSME working capital loans?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'For collateral-free MSME OD/CC facilities covered by the Credit Guarantee Fund Trust for Micro and Small Enterprises (CGTMSE), the trust covers 75% to 85% of the default. However, banks must still follow standard recovery procedures and can enter compromise settlements. Once settled under an approved OTS, the bank files a final claim with CGTMSE, releasing the borrower from further recovery.'
            }
          },
          {
            '@type': 'Question',
            name: 'Can a bank exercise a right of set-off by debiting funds from our separate current accounts?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes, if the separate current account is held with the same banking institution under the exact same entity name and capacity. To prevent unauthorized set-off debits or liquidity freezes, businesses facing distress must immediately move daily vendor receipts and operating capital to a neutral bank with zero debt exposure.'
            }
          },
          {
            '@type': 'Question',
            name: 'What documents are essential to obtain after paying an agreed OD/CC settlement amount?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Upon completing settlement payments, borrowers must demand an official No Dues Certificate (NDC), return of original title deeds with canceled equitable mortgage receipts, Satisfaction of Charge filing on MCA (Form CHG-4) for corporate entities, charge removal on CERSAI, and an update of the CIBIL commercial records.'
            }
          }
        ]
      },
      {
        '@type': 'FinancialService',
        '@id': 'https://www.credsettle.com/#service',
        name: 'CredSettle Working Capital & OD/CC Debt Settlement Services',
        url: 'https://www.credsettle.com',
        telephone: '+91-8800226635',
        priceRange: '₹₹',
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.8',
          reviewCount: '4890',
          bestRating: '5',
          worstRating: '1'
        },
        review: [
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'Virendra Singhania'
            },
            datePublished: '2026-09-18',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5'
            },
            reviewBody:
              'Our engineering manufacturing unit faced a severe cash crunch when major buyers defaulted. Our bank slapped a SARFAESI Section 13(2) notice on our ₹1.8 Crore Cash Credit facility and threatened criminal action over a stock deficit. CredSettle intervened, submitted a detailed Section 13(3A) objection, and negotiated a 55% OTS waiver, saving our factory from auction.',
            itemReviewed: {
              '@type': 'FinancialService',
              '@id': 'https://www.credsettle.com/#service'
            }
          },
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'Sunil Chhabra'
            },
            datePublished: '2026-09-02',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5'
            },
            reviewBody:
              'My textile trading firm held a ₹65 Lakh overdraft limit. Post-pandemic margin compression led to an out of order account and a stock audit deficit. The bank branch manager was intimidating me with cheating notices. CredSettle structured an affordable compromise proposal with the Zonal Committee and settled the entire debt at 42% of the book claim.',
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
            datePublished: '2026-08-19',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '4.9'
            },
            reviewBody:
              'We had an MSME CC facility of ₹40 Lakhs covered under CGTMSE. After supply chain disruptions caused payment defaults, the bank was harassing our personal guarantors. CredSettle defended our rights under RBI MSME guidelines, halted recovery harassment, and secured a clean settlement with an official No Dues Certificate.',
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
            datePublished: '2026-08-04',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5'
            },
            reviewBody:
              'A private bank filed a DRT Section 19 application against our commercial transport firm for an overdue OD limit of ₹1.2 Crores. CredSettle conducted a forensic ledger audit that revealed over ₹28 Lakhs in unlawful compound penal interest. Armed with this, they negotiated a comprehensive settlement that saved our family business.',
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
            datePublished: '2026-07-21',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5'
            },
            reviewBody:
              'When our pharmaceutical distribution firm defaulted on its CC account due to uncollectible hospital receivables, the bank threatened to attach our residential property. CredSettle stepped in, challenged the bank arbitrary valuation, and negotiated a structured 3-month OTS payout. Truly exceptional legal acumen.',
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
      <OdCcDefaultSettlementClient />
      <Footer />
    </div>
  );
}
