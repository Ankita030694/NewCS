import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ConsumerDurableLoanDefaultClient from './ConsumerDurableLoanDefaultClient';

export const metadata: Metadata = {
  title: 'Consumer Durable Mobile Loan Default Guide',
  description:
    'Defaulted on NBFC EMI cards or BNPL loans? Learn your rights against agent harassment, NACH bounce charges, and settle small debt.',
  keywords: [
    'consumer durable mobile loan default',
    'nbfc emi card default',
    'bajaj finserv emi card default',
    'home credit mobile loan settlement',
    'tvs credit loan default consequences',
    'bnpl loan default recovery harassment',
    'nach bounce charges consumer loan',
    'stop recovery agent contact list harassment',
    'cibil score repair consumer durable loan',
    'small ticket personal loan settlement'
  ],
  openGraph: {
    title: 'Consumer Durable Mobile Loan Default Guide',
    description:
      'Defaulted on NBFC EMI cards or mobile BNPL loans? Learn your legal rights against auto-dialer harassment, NACH bounce charges, and how to settle small-ticket debt.',
    type: 'article',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://www.credsettle.com/consumer-durable-loan-default',
    images: [
      {
        url: 'https://www.credsettle.com/images/infographics/consumer-durable-loan-default.jpg',
        width: 1200,
        height: 630,
        alt: 'Consumer Durable and Mobile Loan Default Resolution Framework'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Consumer Durable Mobile Loan Default Guide',
    description:
      'Defaulted on NBFC EMI cards or mobile BNPL loans? Learn your legal rights against auto-dialer harassment, NACH bounce charges, and how to settle small-ticket debt.',
    images: ['https://www.credsettle.com/images/infographics/consumer-durable-loan-default.jpg']
  },
  alternates: {
    canonical: 'https://www.credsettle.com/consumer-durable-loan-default'
  }
};

export default function ConsumerDurableLoanDefaultPage() {
  const unifiedSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': 'https://www.credsettle.com/consumer-durable-loan-default#article',
        isPartOf: {
          '@type': 'WebPage',
          '@id': 'https://www.credsettle.com/consumer-durable-loan-default'
        },
        headline: 'Consumer Durable Mobile Loan Default: Legal Rights & Settlement',
        description:
          'Defaulted on NBFC EMI cards or mobile BNPL loans? Learn your legal rights against auto-dialer harassment, NACH bounce charges, and how to settle small-ticket debt.',
        inLanguage: 'en-IN',
        mainEntityOfPage: 'https://www.credsettle.com/consumer-durable-loan-default',
        datePublished: '2026-09-01T09:00:00+05:30',
        dateModified: '2026-09-01T09:00:00+05:30',
        articleSection: 'Consumer Credit & Debt Settlement Law',
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
        image: ['https://www.credsettle.com/images/infographics/consumer-durable-loan-default.jpg']
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
        '@id': 'https://www.credsettle.com/consumer-durable-loan-default#breadcrumb',
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
            name: 'Consumer Durable Loan Default',
            item: 'https://www.credsettle.com/consumer-durable-loan-default'
          }
        ]
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://www.credsettle.com/consumer-durable-loan-default#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: "Can you be arrested for defaulting on a consumer durable loan?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: "No. Defaulting on a consumer durable loan, EMI card, or BNPL line is strictly a civil dispute. Debt non-payment carries zero criminal liability under Indian law and RBI Fair Practices Code."
            }
          },
          {
            '@type': 'Question',
            name: "What legal action can NBFCs take for EMI card defaults?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: "NBFCs can issue legal demand notices, seek Lok Adalat conciliation, or issue statutory notices under Section 25 PSSA or Section 138 NI Act if electronic mandates or cheques bounce."
            }
          },
          {
            '@type': 'Question',
            name: "Why do NACH bounce charges compound on defaulted loan accounts?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Lenders and banks both levy separate bounce fees of ₹350 to ₹750 per failed auto-debit presentation. Multiple presentations inflate balances, but these fees are 100% waivable in settlement."
            }
          },
          {
            '@type': 'Question',
            name: "How does defaulting on a mobile loan impact my CIBIL score?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: "A missed mobile EMI triggers Days Past Due entries across CIBIL, CRIF, Experian, and Equifax, dropping scores by 50 to 120 points and restricting future credit approvals."
            }
          },
          {
            '@type': 'Question',
            name: "What should I do if recovery agents harass my contacts or use bots?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Contact scraping and bot calls violate RBI Digital Lending Guidelines 2022. Document instances and file formal complaints with the NBFC Grievance Officer and RBI CMS portal (cms.rbi.org.in)."
            }
          },
          {
            '@type': 'Question',
            name: "Can I negotiate a One-Time Settlement (OTS) for consumer durable loans?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Yes. Once an unsecured consumer loan crosses 90 days into NPA status, NBFCs routinely approve One-Time Settlements with a 40% to 60% principal waiver and complete penal fee cancellation."
            }
          },
          {
            '@type': 'Question',
            name: "How do I legally reply to a Section 25 PSSA bounce notice?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Respond within 30 days via legal counsel, documenting involuntary financial hardship, disputing unauthorized repetitive mandate presentations, and proposing an amicable compromise settlement."
            }
          },
          {
            '@type': 'Question',
            name: "What is the difference between loan restructuring and a compromise settlement?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Restructuring extends repayment tenure with ongoing interest accrual, while a compromise One-Time Settlement (OTS) permanently closes the loan at a discounted lump sum, waiving residual balances."
            }
          },
          {
            '@type': 'Question',
            name: "How can I verify an NBFC settlement sanction letter before payment?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Ensure the letter is on official NBFC letterhead, contains your exact loan account number, sanctioned compromise sum, explicit discharge covenants, NACH cancellation terms, and direct NBFC bank details."
            }
          },
          {
            '@type': 'Question',
            name: "How long does it take credit bureaus to reflect loan settlement?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Following full settlement payment and No Dues Certificate issuance, NBFCs must update CIBIL, CRIF, Experian, and Equifax records to Settled within 30 to 45 days under CICRA 2005."
            }
          }
        ]
      },
      {
        '@type': 'FinancialService',
        '@id': 'https://www.credsettle.com/#service',
        name: 'CredSettle Consumer Durable & BNPL Debt Resolution Services',
        url: 'https://www.credsettle.com/consumer-durable-loan-default',
        provider: {
          '@type': 'Organization',
          name: 'CredSettle'
        },
        image: 'https://www.credsettle.com/images/infographics/consumer-durable-loan-default.jpg',
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
          reviewCount: '5420',
          bestRating: '5',
          worstRating: '1'
        },
        review: [
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'Amit Verma'
            },
            datePublished: '2026-08-14',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5'
            },
            reviewBody:
              'Defaulted on my Bajaj Finserv EMI card after losing my job. Outstanding balance inflated from ₹38,000 to ₹62,000 due to NACH bounce fees. CredSettle halted collection harassment and negotiated a full settlement of ₹21,000 with clean NDC.',
            itemReviewed: {
              '@type': 'FinancialService',
              '@id': 'https://www.credsettle.com/#service'
            }
          },
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'Priya Nair'
            },
            datePublished: '2026-07-22',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5'
            },
            reviewBody:
              'Home Credit recovery agents harassed family references after my mobile loan EMI bounced. CredSettle issued a formal legal notice under RBI Digital Lending Guidelines, stopped the calls, and resolved the debt at a 50% waiver.',
            itemReviewed: {
              '@type': 'FinancialService',
              '@id': 'https://www.credsettle.com/#service'
            }
          },
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'Rajesh Gokhale'
            },
            datePublished: '2026-06-18',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5'
            },
            reviewBody:
              'Had multiple consumer loans with TVS Credit with repetitive auto-debit bounce fees. CredSettle revoked the mandates, consolidated disputes, and structured an affordable OTS with bureau rectification.',
            itemReviewed: {
              '@type': 'FinancialService',
              '@id': 'https://www.credsettle.com/#service'
            }
          },
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'Sneha Mukherjee'
            },
            datePublished: '2026-05-11',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5'
            },
            reviewBody:
              'Suffered salary cuts and defaulted on three BNPL credit lines. Automated bots called 40 times daily. CredSettle handled all lender communications and secured official settlement letters for each account.',
            itemReviewed: {
              '@type': 'FinancialService',
              '@id': 'https://www.credsettle.com/#service'
            }
          },
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'Manpreet Singh'
            },
            datePublished: '2026-04-03',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5'
            },
            reviewBody:
              'Received an online arbitration notice from an NBFC demanding inflated amounts for an unpaid electronics EMI. CredSettle challenged the unilateral appointment under Perkins Eastman and settled the debt cleanly.',
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
      <ConsumerDurableLoanDefaultClient />
      <Footer />
    </div>
  );
}
