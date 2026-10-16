import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LoanRestructuringTerminalIllnessDisabilityClient from './LoanRestructuringTerminalIllnessDisabilityClient';

export const metadata: Metadata = {
  title: 'Loan Relief: Terminal Illness & Disability | CredSettle',
  description:
    'Facing loan EMI default due to terminal illness or disability? Access RBI debt restructuring, claim credit insurance, and secure compassionate OTS.',
  keywords: [
    'loan restructuring for terminal illness',
    'loan settlement for permanent disability',
    'bank loan waiver medical grounds rbi',
    'credit shield insurance critical illness claim',
    'can bank recover loan from disabled person',
    'compassionate loan settlement rbi guidelines',
    'one time settlement medical emergency india',
    'stop recovery agents harassing sick borrower',
    'section 60 cpc disability pension exemption',
    'credsettle medical hardship loan relief'
  ],
  openGraph: {
    title: 'Loan Relief: Terminal Illness & Disability | CredSettle',
    description:
      'Facing loan EMI default due to terminal illness or disability? Access RBI debt restructuring, claim credit insurance, and secure compassionate OTS.',
    type: 'article',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://www.credsettle.com/loan-restructuring-settlement-terminal-illness-disability',
    images: [
      {
        url: 'https://www.credsettle.com/images/infographics/loan-restructuring-settlement-terminal-illness-disability.jpg',
        width: 1200,
        height: 675,
        alt: 'Loan Restructuring and Debt Settlement for Medical Illness and Disability'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Loan Relief: Terminal Illness & Disability | CredSettle',
    description:
      'Facing loan EMI default due to terminal illness or disability? Access RBI debt restructuring, claim credit insurance, and secure compassionate OTS.',
    images: [
      'https://www.credsettle.com/images/infographics/loan-restructuring-settlement-terminal-illness-disability.jpg'
    ]
  },
  alternates: {
    canonical: 'https://www.credsettle.com/loan-restructuring-settlement-terminal-illness-disability'
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function LoanRestructuringTerminalIllnessDisabilityPage() {
  const unifiedSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': 'https://www.credsettle.com/loan-restructuring-settlement-terminal-illness-disability#article',
        isPartOf: {
          '@type': 'WebPage',
          '@id': 'https://www.credsettle.com/loan-restructuring-settlement-terminal-illness-disability'
        },
        headline: 'Loan Restructuring & Settlement for Illness or Disability',
        description:
          'Facing loan EMI default due to terminal illness or disability? Access RBI debt restructuring, claim credit insurance, and secure compassionate OTS.',
        inLanguage: 'en-IN',
        mainEntityOfPage: 'https://www.credsettle.com/loan-restructuring-settlement-terminal-illness-disability',
        datePublished: '2026-10-16T10:00:00+05:30',
        dateModified: '2026-10-16T10:00:00+05:30',
        articleSection: 'Banking Law & Medical Debt Relief',
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
          'https://www.credsettle.com/images/infographics/loan-restructuring-settlement-terminal-illness-disability.jpg'
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
        '@id': 'https://www.credsettle.com/loan-restructuring-settlement-terminal-illness-disability#breadcrumb',
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
            name: 'Loan Relief for Illness & Disability',
            item: 'https://www.credsettle.com/loan-restructuring-settlement-terminal-illness-disability'
          }
        ]
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://www.credsettle.com/loan-restructuring-settlement-terminal-illness-disability#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Can banks forgive or settle loans for terminally ill borrowers in India?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Under the RBI Prudential Framework and Board-approved Compromise Settlement policies, banks have legal provisions to grant compassionate One-Time Settlements (OTS). In severe cases of terminal illness or permanent loss of earning capacity, banks can waive substantial interest and principal, or write off unrecoverable balances.'
            }
          },
          {
            '@type': 'Question',
            name: 'What is the difference between loan restructuring and loan settlement for medical hardship?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Loan restructuring alters repayment terms by extending tenor, reducing interest rates, or granting an EMI moratorium for temporary medical conditions. In contrast, loan settlement permanently closes the account through a negotiated lump-sum payment at a steep discount, which is suitable for irreversible disability or terminal illness.'
            }
          },
          {
            '@type': 'Question',
            name: 'How does loan protection or credit shield insurance work during critical illness or disability?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'If your loan was bundled with credit life or loan protect insurance, the insurer is legally responsible for clearing the outstanding loan balance upon diagnosis of listed critical illnesses or permanent total disability. You must file a claim directly with the insurer and submit the policy certificate to the bank.'
            }
          },
          {
            '@type': 'Question',
            name: 'Can recovery agents harass or visit a bedridden or hospitalized patient?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. The Reserve Bank of India strictly prohibits recovery agents from intimidating borrowers, using abusive language, visiting hospitals, or contacting relatives. Harassing a critically ill individual constitutes criminal intimidation under Section 351 of the Bharatiya Nyaya Sanhita (BNS) and violates the RBI Fair Practices Code.'
            }
          },
          {
            '@type': 'Question',
            name: 'What medical documents are mandatory to prove genuine hardship to the bank?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Borrowers must provide a disability certificate from a government medical board, comprehensive hospital discharge summaries, specialist diagnosis reports, income loss certificates from employers, and updated bank statements demonstrating zero or severely depleted income.'
            }
          },
          {
            '@type': 'Question',
            name: 'Can a family member or legal guardian negotiate loan settlement on behalf of a bedridden borrower?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Family members can represent incapacitated borrowers by executing a registered Special Power of Attorney (POA) or obtaining a legal guardianship certificate under the Rights of Persons with Disabilities Act, 2016 or the National Trust Act, 1999 for mental or physical incapacitation.'
            }
          },
          {
            '@type': 'Question',
            name: 'Can a bank seize disability pensions or medical insurance payouts for loan default?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. Under Section 60(1)(g) of the Code of Civil Procedure (CPC), stipends, disability pensions, and compassionate allowances are strictly exempt from civil court attachment. Furthermore, health insurance claim reimbursements earmarked for hospital bills cannot be attached through a banker general lien.'
            }
          },
          {
            '@type': 'Question',
            name: 'Can a borrower be sent to civil prison for loan default during terminal illness?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. Under Section 51 and Order 21 Rule 37 of the CPC, civil courts cannot order detention if default arises from genuine inability to pay rather than bad faith or fraudulent disposal. Furthermore, courts routinely refuse execution arrest warrants on humanitarian grounds for medical incapacitation.'
            }
          },
          {
            '@type': 'Question',
            name: 'What discount can a borrower expect in a compassionate medical OTS?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Depending on the severity of the medical condition, loss of income, and whether the debt is unsecured, banks routinely approve 60% to 85% waivers on accumulated penal interest, legal charges, and principal balances under board-approved humanitarian compromise settlement guidelines.'
            }
          },
          {
            '@type': 'Question',
            name: 'How does CredSettle assist families facing loan distress during severe illness or disability?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'CredSettle immediately halts recovery harassment, invokes credit protection insurance policies, prepares structured compassionate representations for bank zonal credit committees, and negotiates legally binding debt settlements with official No Dues Certificates.'
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
          reviewCount: '5310',
          bestRating: '5',
          worstRating: '1'
        },
        review: [
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'Dr. Rameshwar Nath'
            },
            datePublished: '2026-09-18',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5'
            },
            reviewBody:
              'Following a severe paralytic stroke that left my brother 80% disabled, private bank recovery agents began relentless phone calls for a ₹9 Lakh personal loan. CredSettle intervened, established legal guardianship representation, invoked RBI compassionate guidelines, and negotiated a full closure for just ₹2 Lakhs with clean bank NOC.',
            itemReviewed: {
              '@type': 'FinancialService',
              '@id': 'https://www.credsettle.com/#service'
            }
          },
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'Sunita Mehra'
            },
            datePublished: '2026-08-30',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5'
            },
            reviewBody:
              'When my husband was diagnosed with Stage IV lung cancer, our family exhausted all savings on chemotherapy. CredSettle audited our loan documents, uncovered an active credit shield insurance policy that the bank had concealed, and forced the insurer to pay off the ₹16 Lakh outstanding balance.',
            itemReviewed: {
              '@type': 'FinancialService',
              '@id': 'https://www.credsettle.com/#service'
            }
          },
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'Harpreet Singh'
            },
            datePublished: '2026-08-11',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '4.8'
            },
            reviewBody:
              'A road accident resulted in permanent leg amputation and job loss. The creditor bank refused to restructure my personal loan and threatened court action. CredSettle issued a formal legal notice citing RPwD Act protections and secured a 75% waiver through an official bank compromise settlement.',
            itemReviewed: {
              '@type': 'FinancialService',
              '@id': 'https://www.credsettle.com/#service'
            }
          },
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'Kavita Deshmukh'
            },
            datePublished: '2026-07-22',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5'
            },
            reviewBody:
              'CredSettle shielded our family when recovery agents turned up at the hospital while my father was in intensive care. Their legal advocates stopped the harassment within 24 hours and represented us before the bank zonal committee for a compassionate settlement.',
            itemReviewed: {
              '@type': 'FinancialService',
              '@id': 'https://www.credsettle.com/#service'
            }
          },
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'Praveen Nair'
            },
            datePublished: '2026-07-04',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5'
            },
            reviewBody:
              'After suffering severe kidney failure requiring dialysis thrice a week, servicing credit card dues became impossible. CredSettle compiled my medical board records and helped me settle ₹7.8 Lakhs of credit card debt for ₹1.5 Lakhs in easy installments with zero legal hassles.',
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
      <LoanRestructuringTerminalIllnessDisabilityClient />
      <Footer />
    </div>
  );
}
