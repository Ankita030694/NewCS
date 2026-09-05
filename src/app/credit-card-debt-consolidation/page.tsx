import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CreditCardDebtConsolidationClient from './CreditCardDebtConsolidationClient';

export const metadata: Metadata = {
  title: 'Credit Card Debt Consolidation in India',
  description:
    'Compare credit card debt consolidation in India. Evaluate consolidation personal loans, balance transfer cards, and legal one-time settlement (OTS).',
  keywords: [
    'credit card debt consolidation in india',
    'credit card debt consolidation loans',
    'balance transfer credit card india',
    'settle credit card debt vs consolidation',
    'credit card debt to income ratio india',
    'credit card minimum due vs consolidation',
    'unsecured debt consolidation personal loan',
    'how to consolidate credit card debt with bad credit',
    'one time settlement credit card rbi',
    'stop credit card recovery harassment'
  ],
  openGraph: {
    title: 'Credit Card Debt Consolidation in India',
    description:
      'Explore objective comparative analysis: Debt Consolidation Personal Loans vs Balance Transfer Cards vs Legal Debt Settlement under RBI frameworks.',
    type: 'article',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://www.credsettle.com/credit-card-debt-consolidation',
    images: [
      {
        url: 'https://www.credsettle.com/images/infographics/credit-card-debt-consolidation.jpg',
        width: 1200,
        height: 630,
        alt: 'Credit Card Debt Consolidation in India Infographic and Decision Matrix'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Credit Card Debt Consolidation in India',
    description:
      'Compare debt consolidation personal loans, balance transfer cards, and legal settlement to escape high APR credit card debt in India.',
    images: ['https://www.credsettle.com/images/infographics/credit-card-debt-consolidation.jpg']
  },
  alternates: {
    canonical: 'https://www.credsettle.com/credit-card-debt-consolidation'
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function CreditCardDebtConsolidationPage() {
  const unifiedSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': 'https://www.credsettle.com/credit-card-debt-consolidation#article',
        isPartOf: {
          '@type': 'WebPage',
          '@id': 'https://www.credsettle.com/credit-card-debt-consolidation'
        },
        headline: 'Credit Card Debt Consolidation in India: Personal Loans vs. Balance Transfers vs. Legal Settlement',
        description:
          'Comprehensive comparative analysis of debt consolidation personal loans, balance transfer credit cards, and legal debt settlement (OTS) under RBI guidelines.',
        inLanguage: 'en-IN',
        mainEntityOfPage: 'https://www.credsettle.com/credit-card-debt-consolidation',
        datePublished: '2026-09-02T09:00:00+05:30',
        dateModified: '2026-09-02T09:00:00+05:30',
        articleSection: 'Credit Management & Debt Resolution',
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
        image: ['https://www.credsettle.com/images/infographics/credit-card-debt-consolidation.jpg']
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
        '@id': 'https://www.credsettle.com/credit-card-debt-consolidation#breadcrumb',
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
            name: 'Credit Card Debt Consolidation',
            item: 'https://www.credsettle.com/credit-card-debt-consolidation'
          }
        ]
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://www.credsettle.com/credit-card-debt-consolidation#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What is credit card debt consolidation in India?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'It combines multiple card dues into one structured channel via personal loans, balance transfers, or legal settlement to stop compounding 42% APR interest.'
            }
          },
          {
            '@type': 'Question',
            name: 'When should I choose a personal loan over a balance transfer?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'A personal loan is ideal with a 720+ CIBIL score, replacing 42% card APR with a fixed 11.5%-16% reducing interest rate.'
            }
          },
          {
            '@type': 'Question',
            name: 'What are the risks of credit card balance transfers in India?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Promotional 0%-3% rates last 3-6 months. Unpaid balances revert to 42% APR plus 1%-2.5% non-refundable processing fees.'
            }
          },
          {
            '@type': 'Question',
            name: 'How does legal debt settlement differ from loan consolidation?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Consolidation borrows new funds, whereas legal settlement (OTS) negotiates formal waivers, reducing principal balances by 40%-60% without new loans.'
            }
          },
          {
            '@type': 'Question',
            name: 'Does a debt consolidation loan improve my CIBIL score?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'After a minor inquiry dip, clearing maxed-out cards drops credit utilization below 30%, boosting CIBIL scores within 6-12 months.'
            }
          },
          {
            '@type': 'Question',
            name: 'Can I consolidate credit card debt with a CIBIL score below 600?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Banks reject consolidation loans below 650 CIBIL. Distressed cardholders resolve debt through structured One-Time Settlements without fresh borrowing.'
            }
          },
          {
            '@type': 'Question',
            name: 'Can banks file criminal cases for credit card consolidation defaults?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Credit card debt is an unsecured civil liability. Lenders cannot arrest borrowers, but can issue Section 25 PSSA notices for bounced auto-debits.'
            }
          },
          {
            '@type': 'Question',
            name: 'What are RBI rules regarding recovery agent conduct for credit cards?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'The RBI Fair Practices Code strictly bans calls before 8:00 AM or after 7:00 PM, contacting employers, and intimidation tactics.'
            }
          },
          {
            '@type': 'Question',
            name: 'How can I stop auto-debits from deducting my salary for credit cards?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Under RBI guidelines, cardholders can submit a formal NACH cancellation notice to their bank branch, halting automatic salary deductions.'
            }
          },
          {
            '@type': 'Question',
            name: 'How does CredSettle assist cardholders trapped in credit card debt?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'CredSettle audits statements, halts harassment, and negotiates One-Time Settlements with bank committees, securing unconditional No Dues Certificates.'
            }
          }
        ]
      },
      {
        '@type': 'FinancialService',
        '@id': 'https://www.credsettle.com/#service',
        name: 'CredSettle Credit Card Debt Consolidation & Legal Resolution Services',
        url: 'https://www.credsettle.com/credit-card-debt-consolidation',
        provider: {
          '@type': 'Organization',
          name: 'CredSettle'
        },
        image: 'https://www.credsettle.com/images/infographics/credit-card-debt-consolidation.jpg',
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
          reviewCount: '5140',
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
            datePublished: '2026-08-19',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5'
            },
            reviewBody: 'I was managing four maxed-out credit cards with a total outstanding of ₹8.6 Lakhs and paying over ₹42,000 every month in minimum dues. My DTI was above 75%, making personal loans impossible. CredSettle stopped the aggressive recovery calls and negotiated a clean compromise OTS of ₹3.75 Lakhs directly with the banks.',
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
            datePublished: '2026-07-28',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5'
            },
            reviewBody: 'I initially considered a balance transfer card, but realized the interest jumped back to 45% APR after 90 days. CredSettle audited my predatory finance charges, revoked my salary auto-debits legally, and helped me resolve ₹6.2 Lakhs in card debt with an official No Dues Certificate.',
            itemReviewed: {
              '@type': 'FinancialService',
              '@id': 'https://www.credsettle.com/#service'
            }
          },
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'Rohit Kulkarni'
            },
            datePublished: '2026-06-14',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5'
            },
            reviewBody: 'After a sudden job transition in Bengaluru, I could not service my credit card consolidation loan. CredSettle drafted a solid hardship dossier and represented my case before the credit committee, securing a 55% principal waiver without court litigation.',
            itemReviewed: {
              '@type': 'FinancialService',
              '@id': 'https://www.credsettle.com/#service'
            }
          },
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'Siddharth Mehta'
            },
            datePublished: '2026-05-20',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5'
            },
            reviewBody: 'I used multiple credit cards to fund working capital for my proprietorship firm during a supply chain crisis. CredSettle separated my commercial stress from personal liability, structured a 3-tranche settlement, and saved me over ₹5.4 Lakhs.',
            itemReviewed: {
              '@type': 'FinancialService',
              '@id': 'https://www.credsettle.com/#service'
            }
          },
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'Meenakshi Iyer'
            },
            datePublished: '2026-04-11',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5'
            },
            reviewBody: 'The legal protection provided by CredSettle against recovery agents citing the RBI Fair Practices Code gave me immense peace of mind. Their legal team negotiated an unconditional debt discharge and guided my CIBIL score rehabilitation.',
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
      <CreditCardDebtConsolidationClient />
      <Footer />
    </div>
  );
}
