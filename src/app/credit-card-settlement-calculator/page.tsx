import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CreditCardSettlementCalculatorClient from './CreditCardSettlementCalculatorClient';

export const metadata: Metadata = {
  title: 'Credit Card Settlement Calculator in India',
  description:
    'Use our credit card settlement calculator to estimate your settlement payout in India. Unbundle 42% APR finance charges, calculate principal waivers, and explore RBI compromise settlement norms.',
  keywords: [
    'credit card settlement calculator',
    'credit card debt settlement calculator india',
    'calculate credit card settlement amount',
    'credit card one time settlement calculator',
    'credit card waiver percentage calculator',
    'credit card principal haircut calculation',
    'rbi credit card settlement rules',
    'credit card finance charge waiver',
    'credit card lump sum vs installment settlement',
    'credit card no dues certificate settlement'
  ],
  openGraph: {
    title: 'Credit Card Settlement Calculator in India',
    description:
      'Use our credit card settlement calculator to estimate your settlement payout in India. Unbundle 42% APR finance charges, calculate principal waivers, and explore RBI compromise settlement norms.',
    type: 'article',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://www.credsettle.com/credit-card-settlement-calculator',
    images: [
      {
        url: 'https://www.credsettle.com/images/infographics/credit-card-settlement-calculator.jpg',
        width: 1200,
        height: 630,
        alt: 'Credit Card Settlement Calculator and Waiver Estimation Framework'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Credit Card Settlement Calculator in India',
    description:
      'Use our credit card settlement calculator to estimate your settlement payout in India. Unbundle 42% APR finance charges, calculate principal waivers, and explore RBI compromise settlement norms.',
    images: ['https://www.credsettle.com/images/infographics/credit-card-settlement-calculator.jpg']
  },
  alternates: {
    canonical: 'https://www.credsettle.com/credit-card-settlement-calculator'
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function CreditCardSettlementCalculatorPage() {
  const unifiedSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': 'https://www.credsettle.com/credit-card-settlement-calculator#article',
        isPartOf: {
          '@type': 'WebPage',
          '@id': 'https://www.credsettle.com/credit-card-settlement-calculator'
        },
        headline: 'Credit Card Settlement Calculator: Estimate Waiver & Payout in India',
        description:
          'Comprehensive financial guide and calculator methodology for estimating credit card debt settlement payouts, unbundling 42% APR charges, and negotiating RBI-compliant principal waivers in India.',
        inLanguage: 'en-IN',
        mainEntityOfPage: 'https://www.credsettle.com/credit-card-settlement-calculator',
        datePublished: '2026-09-02T09:00:00+05:30',
        dateModified: '2026-09-02T09:00:00+05:30',
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
        image: ['https://www.credsettle.com/images/infographics/credit-card-settlement-calculator.jpg']
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
        '@id': 'https://www.credsettle.com/credit-card-settlement-calculator#breadcrumb',
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
            name: 'Credit Card Settlement Calculator',
            item: 'https://www.credsettle.com/credit-card-settlement-calculator'
          }
        ]
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://www.credsettle.com/credit-card-settlement-calculator#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: "How does a credit card settlement calculator estimate the payout?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: "The calculator isolates core swipe principal from 42% APR finance charges, waives 100% of penal fees, and models a 40% to 65% principal haircut based on account aging and documented hardship."
            }
          },
          {
            '@type': 'Question',
            name: "What discount percentage can I negotiate on credit card settlement in India?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Cardholders typically negotiate 50% to 75% gross balance waivers. Against core principal spends, banks generally approve 40% to 60% compromise payouts depending on delinquency vintage and insolvency proof."
            }
          },
          {
            '@type': 'Question',
            name: "How are penal interest and finance charges treated during settlement?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Banks treat uncollected 42% APR finance interest and late fees as accounting additions. Under RBI compromise settlement norms, banks grant a complete 100% write-off on all penal charges."
            }
          },
          {
            '@type': 'Question',
            name: "Can I get a settlement discount on original principal card spends?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Yes. Once an account reaches 90 to 180 days in NPA status, banks provision 100% capital reserves, allowing credit committees to approve 25% to 50% principal haircuts for distressed borrowers."
            }
          },
          {
            '@type': 'Question',
            name: "Is a lump-sum settlement cheaper than monthly installment plans?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Yes. Single lump-sum settlements yield higher waivers of 55% to 70% because banks receive immediate cash. Structured installment settlements across two to four tranches yield waivers of 45% to 55%."
            }
          },
          {
            '@type': 'Question',
            name: "Will credit card debt settlement damage my CIBIL credit score?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: "The lender reports the account as Settled, causing an initial 75 to 150 point reduction. Disciplined credit habits and secured cards rebuild credit scores above 750 within 18 to 24 months."
            }
          },
          {
            '@type': 'Question',
            name: "What documents are required to prove financial hardship for card settlement?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Borrowers must provide termination letters, salary reduction slips, audited business financial statements, medical discharge summaries, and bank statements demonstrating severe cash flow depletion and genuine inability to pay."
            }
          },
          {
            '@type': 'Question',
            name: "Can a bank file criminal charges or arrest me for credit card default?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: "No. Unsecured credit card default is strictly a civil matter. The Supreme Court has ruled that inability to pay debt due to financial distress is not a crime; arrest cannot occur."
            }
          },
          {
            '@type': 'Question',
            name: "How can I verify that my settlement sanction letter is genuine?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Verify that the letter is issued on official bank letterhead with an authorized signatory stamp, lists exact card numbers, defines payment amounts, and explicitly confirms full liability discharge."
            }
          },
          {
            '@type': 'Question',
            name: "Can I convert a Settled credit card status to Closed in CIBIL?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Yes. Under Section 21 of CICRA 2005, you can repay the previously waived differential balance later, obtain an official No Dues Certificate, and update your bureau record to Closed."
            }
          }
        ]
      },
      {
        '@type': 'FinancialService',
        '@id': 'https://www.credsettle.com/#service',
        name: 'CredSettle Credit Card Debt Settlement & Legal Dispute Resolution Services',
        url: 'https://www.credsettle.com/credit-card-settlement-calculator',
        provider: {
          '@type': 'Organization',
          name: 'CredSettle'
        },
        image: 'https://www.credsettle.com/images/infographics/credit-card-settlement-calculator.jpg',
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
          reviewCount: '5240',
          bestRating: '5',
          worstRating: '1'
        },
        review: [
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'Abhinav Saxena'
            },
            datePublished: '2026-08-11',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5'
            },
            reviewBody:
              'My credit card dues had snowballed from ₹3.8 Lakhs to ₹7.6 Lakhs across two years of job instability. Using CredSettle calculator estimations and legal negotiation panel, we unbundled ₹3.9 Lakhs of penal interest and settled the remaining principal for ₹1.95 Lakhs with an authentic bank No Dues Certificate.',
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
            datePublished: '2026-07-19',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5'
            },
            reviewBody:
              'After my retail business faced severe liquidity constraints, recovery agents were relentlessly calling my family. CredSettle stopped the harassment immediately through formal legal notices, audited my three cards, and secured an aggregate 64% waiver on the total claimed debt.',
            itemReviewed: {
              '@type': 'FinancialService',
              '@id': 'https://www.credsettle.com/#service'
            }
          },
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'Rajeev Singhania'
            },
            datePublished: '2026-06-25',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5'
            },
            reviewBody:
              'Received a legal demand notice under Section 25 PSSA for an auto-debit bounce on my premium credit card. Ashish Jhangra and the CredSettle team drafted an authoritative defense petition citing bona fide hardship, negotiating a lump-sum OTS that saved me over ₹4.2 Lakhs.',
            itemReviewed: {
              '@type': 'FinancialService',
              '@id': 'https://www.credsettle.com/#service'
            }
          },
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'Pooja Bhattacharya'
            },
            datePublished: '2026-05-14',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '4.8'
            },
            reviewBody:
              'CredSettle vetted my settlement sanction letter before I deposited any funds into the bank settlement pool account. They ensured all future legal claim waivers were explicitly recorded and helped me obtain my official NDC within 25 days.',
            itemReviewed: {
              '@type': 'FinancialService',
              '@id': 'https://www.credsettle.com/#service'
            }
          },
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'Karthik Ramanathan'
            },
            datePublished: '2026-04-03',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5'
            },
            reviewBody:
              'The calculator framework provided total clarity on how much principal vs finance fees made up my total outstanding balance. CredSettle negotiated directly with the bank credit committee to achieve a 58% overall discount payable across three easy installments.',
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
      <CreditCardSettlementCalculatorClient />
      <Footer />
    </div>
  );
}
