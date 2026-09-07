import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DrtNoticeForPersonalLoanDefaultClient from './DrtNoticeForPersonalLoanDefaultClient';

export const metadata: Metadata = {
  title: 'Received a DRT Notice for Loan Default? How to File Reply',
  description:
    'Received a DRT summons for loan default above ₹20 Lakhs? Learn the 30-day timeline to reply, Debt Recovery Tribunal rules, and defense with CredSettle.',
  keywords: [
    'DRT notice for personal loan default',
    'Minimum amount for DRT',
    'DRT summons reply format',
    'DRT lawyers in India',
    'Section 19 RDB Act reply',
    'DRT personal loan threshold',
    'Debt Recovery Tribunal summons procedure',
    'Written Statement in DRT timeline',
    'DRT loan settlement compromise OTS',
    'DRAT appeal Section 20 RDB Act'
  ],
  openGraph: {
    title: 'Received a DRT Notice for Loan Default? How to File Reply | CredSettle',
    description:
      'Received a DRT summons for loan default above ₹20 Lakhs? Learn the 30-day timeline to reply, Debt Recovery Tribunal rules, and defense with CredSettle.',
    type: 'article',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://www.credsettle.com/drt-notice-for-personal-loan-default',
    images: [
      {
        url: 'https://www.credsettle.com/images/infographics/drt-notice-for-personal-loan-default.jpg',
        width: 1200,
        height: 630,
        alt: 'DRT Notice for Personal Loan Default Legal Defense Guide'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Received a DRT Notice for Loan Default? How to File Reply',
    description:
      'Received a DRT summons for loan default above ₹20 Lakhs? Learn the 30-day timeline to reply, Debt Recovery Tribunal rules, and defense with CredSettle.',
    images: ['https://www.credsettle.com/images/infographics/drt-notice-for-personal-loan-default.jpg']
  },
  alternates: {
    canonical: 'https://www.credsettle.com/drt-notice-for-personal-loan-default'
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function DrtNoticeForPersonalLoanPage() {
  const unifiedSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': 'https://www.credsettle.com/drt-notice-for-personal-loan-default#article',
        isPartOf: {
          '@type': 'WebPage',
          '@id': 'https://www.credsettle.com/drt-notice-for-personal-loan-default'
        },
        headline: 'Received a DRT Notice for Personal Loan Default? Legal Defense',
        description:
          'Received a DRT summons for loan default above ₹20 Lakhs? Learn the 30-day timeline to reply, Debt Recovery Tribunal rules, and defense with CredSettle.',
        inLanguage: 'en-IN',
        mainEntityOfPage: 'https://www.credsettle.com/drt-notice-for-personal-loan-default',
        datePublished: '2026-09-07T09:00:00+05:30',
        dateModified: '2026-09-07T09:00:00+05:30',
        articleSection: 'Banking Law & Debt Recovery Defense',
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
        image: ['https://www.credsettle.com/images/infographics/drt-notice-for-personal-loan-default.jpg']
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
        '@id': 'https://www.credsettle.com/drt-notice-for-personal-loan-default#breadcrumb',
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
            name: 'Received a DRT Notice for Personal Loan Default',
            item: 'https://www.credsettle.com/drt-notice-for-personal-loan-default'
          }
        ]
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://www.credsettle.com/drt-notice-for-personal-loan-default#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What is a DRT notice for a personal loan default?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'A DRT notice is a formal judicial summons issued under Section 19 of the Recovery of Debts and Bankruptcy (RDB) Act, 1993. It informs the borrower that a bank or financial institution has instituted an Original Application (OA) before the Debt Recovery Tribunal to recover an unpaid loan amount exceeding the statutory pecuniary threshold of ₹20 Lakhs.'
            }
          },
          {
            '@type': 'Question',
            name: 'What is the minimum loan default amount for a bank to file in DRT?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Under Section 1(4) of the RDB Act, 1993, the statutory pecuniary jurisdiction threshold for Debt Recovery Tribunals is strictly ₹20 Lakhs and above. If your total outstanding default is below ₹20 Lakhs, the bank cannot approach the DRT and must utilize alternative avenues such as civil suits, Lok Adalat, or arbitration.'
            }
          },
          {
            '@type': 'Question',
            name: 'How much time do I have to file a reply to a DRT summons?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Under Section 19(5) of the RDB Act, a borrower has strictly 30 days from the date of service of the DRT summons to file a Written Statement (WS) with supporting documentary evidence. The Presiding Officer may grant a limited extension of up to 15 additional days only under exceptional and recorded circumstances.'
            }
          },
          {
            '@type': 'Question',
            name: 'Can you go to jail or face arrest for a personal loan default in DRT?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. A personal loan default is strictly a civil dispute arising from contractual debt. The DRT cannot issue criminal arrest warrants or imprison borrowers for inability to pay an unsecured loan. Arrest provisions during execution under Section 19(18) apply only in extreme circumstances involving proven fraudulent asset dissipation or contempt of explicit judicial restraint orders.'
            }
          },
          {
            '@type': 'Question',
            name: 'What happens if I ignore a DRT notice and do not appear?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'If you fail to file a Written Statement or appear through an advocate within the stipulated timeline, the DRT will proceed ex-parte under Section 19(5B). The tribunal will accept the bank\'s claims as uncontested and issue an ex-parte Recovery Certificate under Section 19(22), enabling the Recovery Officer to attach bank accounts and unencumbered assets.'
            }
          },
          {
            '@type': 'Question',
            name: 'Can an unsecured personal loan be settled under OTS after a DRT case is filed?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Receiving a DRT notice is one of the most effective stages to negotiate a compromise One-Time Settlement (OTS). When borrowers file strong written statements challenging compound interest and procedural flaws, banks frequently prefer bilateral out-of-court settlements with 40% to 60% waivers to avoid protracted litigation.'
            }
          },
          {
            '@type': 'Question',
            name: 'What is a Written Statement (WS) in DRT and what should it contain?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'A Written Statement is the defendant borrower\'s formal legal response to the bank\'s Original Application. It must contain specific parawise denials, challenge excessive compound penal interest, object to incorrect account statements, plead financial hardship, and present valid counterclaims or set-offs under Section 19(6) to 19(8) of the RDB Act.'
            }
          },
          {
            '@type': 'Question',
            name: 'How does the Supreme Court ruling in Central Bank of India v. Ravindra protect borrowers in DRT?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'The Constitution Bench of the Supreme Court in Central Bank of India v. Ravindra (2002) held that banks cannot charge compound interest on penal interest or capitalize penal levies into the principal sum. Borrowers can cite this precedent in DRT to dispute inflated loan statements and force re-computation of actual contractual dues.'
            }
          },
          {
            '@type': 'Question',
            name: 'Can DRT orders be appealed, and what is the pre-deposit requirement?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes, any final order or interim direction passed by a DRT can be appealed before the Debt Recovery Appellate Tribunal (DRAT) under Section 20 of the RDB Act within 30 days. However, Section 21 mandates a pre-deposit of 50% of the debt determined by the DRT, which the Appellate Tribunal may reduce to a minimum of 25% on sufficient grounds.'
            }
          },
          {
            '@type': 'Question',
            name: 'How does a DRT settlement impact my CIBIL credit score?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Once a settlement is executed and approved by the DRT through a consent order, the bank files a withdrawal memo and issues a No Dues Certificate. The lender reports the account status as "Settled" or "Post-Settlement Closed" to CIBIL, CRIF, Experian, and Equifax under Section 21 of the Credit Information Companies (Regulation) Act.'
            }
          }
        ]
      },
      {
        '@type': 'FinancialService',
        '@id': 'https://www.credsettle.com/#service',
        name: 'CredSettle DRT Notice Defense & High-Value Debt Resolution Services',
        url: 'https://www.credsettle.com/drt-notice-for-personal-loan-default',
        provider: {
          '@type': 'Organization',
          name: 'CredSettle'
        },
        image: 'https://www.credsettle.com/images/infographics/drt-notice-for-personal-loan-default.jpg',
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
              name: 'Rajeshwar Kulkarni'
            },
            datePublished: '2026-08-14',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5'
            },
            reviewBody:
              'Received a DRT summons from a major private bank demanding ₹34 Lakhs on an unsecured loan with exorbitant penal compounding. CredSettle team filed our 30-day Written Statement citing Supreme Court interest precedents. The bank came forward for a compromise OTS at ₹16.2 Lakhs and withdrew the DRT proceedings!',
            itemReviewed: {
              '@type': 'FinancialService',
              '@id': 'https://www.credsettle.com/#service'
            }
          },
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'Sunita Nambiar'
            },
            datePublished: '2026-07-29',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5'
            },
            reviewBody:
              'A fintech NBFC instituted a Section 19 Original Application against me in DRT Bengaluru for ₹26 Lakhs. CredSettle handled my legal appearance, countered their inflated interest calculations, and facilitated a structured One-Time Settlement with a complete No Dues Certificate.',
            itemReviewed: {
              '@type': 'FinancialService',
              '@id': 'https://www.credsettle.com/#service'
            }
          },
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'Harshavardhan Mehta'
            },
            datePublished: '2026-06-18',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5'
            },
            reviewBody:
              'When my business failed, my unsecured credit exposure exceeded ₹48 Lakhs and the bank moved DRT-1 Mumbai. CredSettle legal professionals drafted a formidable defense highlighting procedural non-compliance and negotiated a 55% waiver under formal compromise terms.',
            itemReviewed: {
              '@type': 'FinancialService',
              '@id': 'https://www.credsettle.com/#service'
            }
          },
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'Tanmay Banerjee'
            },
            datePublished: '2026-05-11',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '4.8'
            },
            reviewBody:
              'After suffering a medical crisis, I defaulted on a ₹22 Lakhs personal loan and received a DRT Kolkata summons. CredSettle guided me through the 30-day response window, prevented an ex-parte Recovery Certificate, and concluded an affordable settlement.',
            itemReviewed: {
              '@type': 'FinancialService',
              '@id': 'https://www.credsettle.com/#service'
            }
          },
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'Amiteshwar Sharma'
            },
            datePublished: '2026-04-03',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5'
            },
            reviewBody:
              'A nationalized bank initiated DRT Delhi recovery demanding ₹31 Lakhs with compounded penal surcharges. CredSettle audited the loan account under the Bankers Books Evidence Act, cited the Ravindra ruling, and helped me resolve the debt smoothly with CIBIL updated to Closed.',
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
      <DrtNoticeForPersonalLoanDefaultClient />
      <Footer />
    </div>
  );
}
