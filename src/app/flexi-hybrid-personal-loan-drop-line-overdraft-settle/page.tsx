import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FlexiDropLineSettlementClient from './FlexiDropLineSettlementClient';

export const metadata: Metadata = {
  title: 'Flexi Personal Loan & Drop-Line Overdraft Settlement',
  description:
    'Trapped in a flexi personal loan or drop-line overdraft? Learn RBI OTS rules, challenge illegal penal fees, protect CIBIL, and settle with CredSettle.',
  keywords: [
    'flexi personal loan settlement india',
    'drop line overdraft settlement rbi rules',
    'salaried flexi hybrid personal loan default',
    'interest only personal loan emi jump trap',
    'drop line overdraft out of order npa 90 days',
    'flexi loan annual maintenance charge amc dispute',
    'rbi compromise settlement nbfc personal loan',
    'rbi penal charges circular capitalization ban',
    'flexi hybrid loan foreclosure charges kfs',
    'credsettle flexi personal loan ots help'
  ],
  openGraph: {
    title: 'Flexi Personal Loan & Drop-Line Overdraft Settlement',
    description:
      'Trapped in a flexi personal loan or drop-line overdraft? Learn RBI OTS rules, challenge illegal penal fees, protect CIBIL, and settle with CredSettle.',
    type: 'article',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://www.credsettle.com/flexi-hybrid-personal-loan-drop-line-overdraft-settle',
    images: [
      {
        url: 'https://www.credsettle.com/images/infographics/flexi-hybrid-personal-loan-drop-line-overdraft-settle.jpg',
        width: 1200,
        height: 675,
        alt: 'Flexi Hybrid Personal Loan and Drop-Line Overdraft Settlement RBI Guide'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Flexi Personal Loan & Drop-Line Overdraft Settlement',
    description:
      'Trapped in a flexi personal loan or drop-line overdraft? Learn RBI OTS rules, challenge illegal penal fees, protect CIBIL, and settle with CredSettle.',
    images: [
      'https://www.credsettle.com/images/infographics/flexi-hybrid-personal-loan-drop-line-overdraft-settle.jpg'
    ]
  },
  alternates: {
    canonical: 'https://www.credsettle.com/flexi-hybrid-personal-loan-drop-line-overdraft-settle'
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function FlexiDropLineSettlementPage() {
  const unifiedSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id':
          'https://www.credsettle.com/flexi-hybrid-personal-loan-drop-line-overdraft-settle#article',
        isPartOf: {
          '@type': 'WebPage',
          '@id':
            'https://www.credsettle.com/flexi-hybrid-personal-loan-drop-line-overdraft-settle'
        },
        headline: 'Flexi Personal Loan & Drop-Line Overdraft Settlement',
        description:
          'Trapped in a flexi personal loan or drop-line overdraft? Learn RBI OTS rules, challenge illegal penal fees, protect CIBIL, and settle with CredSettle.',
        inLanguage: 'en-IN',
        mainEntityOfPage:
          'https://www.credsettle.com/flexi-hybrid-personal-loan-drop-line-overdraft-settle',
        datePublished: '2026-11-23T14:50:00+05:30',
        dateModified: '2026-11-23T14:50:00+05:30',
        articleSection: 'Personal Loan Settlement & Banking Regulation',
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
          'https://www.credsettle.com/images/infographics/flexi-hybrid-personal-loan-drop-line-overdraft-settle.jpg'
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
        '@id':
          'https://www.credsettle.com/flexi-hybrid-personal-loan-drop-line-overdraft-settle#breadcrumb',
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
            name: 'Flexi Personal Loan & Drop-Line Overdraft Settlement',
            item: 'https://www.credsettle.com/flexi-hybrid-personal-loan-drop-line-overdraft-settle'
          }
        ]
      },
      {
        '@type': 'FAQPage',
        '@id':
          'https://www.credsettle.com/flexi-hybrid-personal-loan-drop-line-overdraft-settle#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Can I settle a Flexi Loan or Drop-Line Overdraft via OTS?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Banks and NBFCs can settle Flexi Personal Loans and Drop-Line Overdrafts through a One-Time Settlement (OTS). Under RBI Circular RBI/2023-24/40 dated June 8, 2023, each lender must follow a board-approved policy. You need to show real money hardship, such as a job loss or medical crisis.'
            }
          },
          {
            '@type': 'Question',
            name: 'Why did my Flexi Hybrid Loan EMI jump after two years?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'In a Flexi Hybrid Loan, you pay only interest during the first block of months. Your main loan balance does not go down at all in that time. Once that phase ends, the whole balance gets packed into fewer months left, so your monthly EMI jumps sharply.'
            }
          },
          {
            '@type': 'Question',
            name: 'When does a Drop-Line Overdraft turn into an NPA?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Under RBI Circular RBI/2021-22/125, an overdraft becomes out of order and turns into an NPA after 90 days in three cases. First, your used sum stays above the new lower limit for 90 days. Second, no money comes in for 90 days. Third, your credits do not cover the interest billed over 90 days.'
            }
          },
          {
            '@type': 'Question',
            name: 'Can an NBFC charge a yearly AMC if I owe zero rupees?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Many NBFCs bill a yearly AMC on the whole active drop-line limit even when you owe zero rupees. Yet they can only charge it if your Key Facts Statement (KFS) listed it up front. Under RBI Circular RBI/2024-25/18, a lender cannot collect any fee left out of your KFS.'
            }
          },
          {
            '@type': 'Question',
            name: 'Can a lender charge interest on top of late fees?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. Under RBI Circular RBI/2023-24/53 on Penal Charges, lenders cannot add penal rates onto your base loan rate. They also cannot charge interest on late fees or over-limit fees. The Supreme Court banned this practice in Central Bank of India v. Ravindra (2002).'
            }
          },
          {
            '@type': 'Question',
            name: 'What happens if I pay my used balance but leave the line open?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Paying off only the money you drew keeps your credit line open. The lender will keep taking yearly AMC fees from your active limit. If you miss that fee, it creates a new default on CIBIL. Always get written proof that the full limit is cut to Rs 0.'
            }
          },
          {
            '@type': 'Question',
            name: 'Do I have to pay foreclosure fees on a Flexi Loan in 2026?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Under the RBI Pre-payment Charges Directions, 2025 (effective January 1, 2026), floating-rate personal loans for personal use have zero foreclosure fees if issued or renewed on or after January 1, 2026. Fixed-rate flexi loans may still charge a KFS-listed fee to close early.'
            }
          },
          {
            '@type': 'Question',
            name: 'Will a Flexi Loan settlement lower my CIBIL score?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. A settlement tags the loan as Settled instead of Closed on CIBIL, Experian, Equifax, and CRIF High Mark. Your score drops in the short run. Under RBI Circular RBI/2024-25/60, lenders must send updates every 15 days so your zero balance shows up fast.'
            }
          },
          {
            '@type': 'Question',
            name: 'Can recovery agents call my office or threaten me?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. Under RBI Circular RBI/2022-23/108, agents can only call between 8:00 AM and 7:00 PM. They cannot threaten you, shame you, or contact your boss, coworkers, or family. You can report them to the Nodal Officer and the RBI Ombudsman at cms.rbi.org.in.'
            }
          },
          {
            '@type': 'Question',
            name: 'How does CredSettle help close Flexi and Drop-Line Loans?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'CredSettle checks your KFS and loan ledger to spot unfair AMC fees and added penal interest. Our team stops illegal agent calls, negotiates a written OTS offer, ensures full line closure to zero, and helps you get your No Dues Certificate.'
            }
          }
        ]
      },
      {
        '@type': 'FinancialService',
        '@id': 'https://www.credsettle.com/#service',
        name: 'CredSettle Debt Settlement & Banking Legal Advisory Services',
        url: 'https://www.credsettle.com',
        telephone: '+91-8800226635',
        priceRange: '₹₹',
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          reviewCount: '6180',
          bestRating: '5',
          worstRating: '1'
        },
        review: [
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'Prashant Deshmukh'
            },
            datePublished: '2026-10-28',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5'
            },
            reviewBody:
              'My NBFC Flexi Hybrid Loan EMI jumped from Rs 11,200 to Rs 29,800 after two years of interest-only bills. CredSettle checked the hidden AMC and penal fees, stopped harsh calls, and got a clean OTS with full line closure and NDC.',
            itemReviewed: {
              '@type': 'FinancialService',
              '@id': 'https://www.credsettle.com/#service'
            }
          },
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'Neha Verma'
            },
            datePublished: '2026-10-05',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5'
            },
            reviewBody:
              'My salaried drop-line overdraft went over limit each month during my medical leave. CredSettle used RBI penal rules to remove extra fees and secured a written settlement letter closing the whole Rs 6.5 Lakh line.',
            itemReviewed: {
              '@type': 'FinancialService',
              '@id': 'https://www.credsettle.com/#service'
            }
          },
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'Sandeep Nair'
            },
            datePublished: '2026-09-14',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5'
            },
            reviewBody:
              'Even after I paid my flexi balance down, the lender kept billing yearly AMC fees on the full drop-line limit and marked CIBIL late. CredSettle took the KFS error to the Nodal Officer and closed the line cleanly.',
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
      <FlexiDropLineSettlementClient />
      <Footer />
    </div>
  );
}
