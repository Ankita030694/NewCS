import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import IciciBankPersonalLoanSettlementClient from './IciciBankPersonalLoanSettlementClient';

export const metadata: Metadata = {
  title: 'ICICI Bank Personal Loan Settlement Process | CredSettle',
  description:
    'Settle your defaulted ICICI Bank personal loan legally. Learn how to stop recovery harassment, respond to Section 25 notices.',
  keywords: [
    'icici bank personal loan settlement',
    'icici loan settlement process',
    'icici personal loan one time settlement',
    'icici bank ots scheme',
    'icici personal loan legal notice reply',
    'icici loan default section 25 pssa',
    'icici bank recovery agent harassment rbi',
    'icici loan settlement discount percentage',
    'icici bank stressed assets samg',
    'icici personal loan no dues certificate'
  ],
  openGraph: {
    title: 'ICICI Bank Personal Loan Settlement: Legal Process, Waivers & OTS | CredSettle',
    description:
      'Settle your defaulted ICICI Bank personal loan legally. Learn how to stop recovery harassment, respond to Section 25 notices, and negotiate 45%-65% OTS waivers directly.',
    type: 'article',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://www.credsettle.com/icici-bank-personal-loan-settlement',
    images: [
      {
        url: 'https://www.credsettle.com/images/infographics/icici-bank-personal-loan-settlement.jpg',
        width: 1200,
        height: 630,
        alt: 'ICICI Bank Personal Loan Settlement Policy and Procedure Blueprint'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ICICI Bank Personal Loan Settlement: Legal Process, Waivers & OTS',
    description:
      'Settle your defaulted ICICI Bank personal loan legally. Learn how to stop recovery harassment, respond to Section 25 notices, and negotiate 45%-65% OTS waivers directly.',
    images: ['https://www.credsettle.com/images/infographics/icici-bank-personal-loan-settlement.jpg']
  },
  alternates: {
    canonical: 'https://www.credsettle.com/icici-bank-personal-loan-settlement'
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function IciciBankPersonalLoanSettlementPage() {
  const unifiedSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': 'https://www.credsettle.com/icici-bank-personal-loan-settlement#article',
        isPartOf: {
          '@type': 'WebPage',
          '@id': 'https://www.credsettle.com/icici-bank-personal-loan-settlement'
        },
        headline: 'ICICI Bank Personal Loan Settlement: Legal Process, Waivers & OTS',
        description:
          'Settle your defaulted ICICI Bank personal loan legally. Learn how to stop recovery harassment, respond to Section 25 notices, and negotiate 45%-65% OTS waivers directly.',
        inLanguage: 'en-IN',
        mainEntityOfPage: 'https://www.credsettle.com/icici-bank-personal-loan-settlement',
        datePublished: '2026-08-25T09:00:00+05:30',
        dateModified: '2026-08-25T09:00:00+05:30',
        articleSection: 'Banking Law & Debt Resolution',
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
        image: ['https://www.credsettle.com/images/infographics/icici-bank-personal-loan-settlement.jpg']
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
        '@id': 'https://www.credsettle.com/icici-bank-personal-loan-settlement#breadcrumb',
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
            name: 'ICICI Bank Personal Loan Settlement',
            item: 'https://www.credsettle.com/icici-bank-personal-loan-settlement'
          }
        ]
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://www.credsettle.com/icici-bank-personal-loan-settlement#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What is the official ICICI Bank personal loan settlement policy?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: "ICICI Bank's personal loan settlement policy is a structured compromise framework administered through its Stressed Assets Management Group (SAMG). It enables severely distressed borrowers facing verified insolvency, prolonged job loss, or medical catastrophe to settle unsecured personal loan liabilities by paying a negotiated lump sum or short-term installments, securing waivers on penal charges and principal."
            }
          },
          {
            '@type': 'Question',
            name: 'When does ICICI Bank consider a personal loan eligible for One-Time Settlement (OTS)?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: "ICICI Bank classifies personal loans for settlement consideration after the account crosses 90 consecutive days of non-payment and turns into a Non-Performing Asset (NPA). At this juncture, regulatory Tier-1 capital provisioning requirements incentivize the bank's credit committees to consider compromise proposals rather than pursuing costly, uncertain civil litigation."
            }
          },
          {
            '@type': 'Question',
            name: 'How much waiver or discount can I negotiate on an ICICI personal loan settlement?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Borrowers routinely secure a 100% waiver on accrued penal interest, late payment fees, and NACH bounce charges. On the core unamortized principal, ICICI Bank's credit committees typically sanction haircuts between 45% and 65%, contingent on default vintage, loan age, and the strength of the documented hardship dossier."
            }
          },
          {
            '@type': 'Question',
            name: 'How should I handle aggressive ICICI Bank recovery agents visiting my home or office?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Under the RBI Fair Practices Code, recovery agents are strictly prohibited from visiting before 8:00 AM or after 7:00 PM, using abusive language, or discussing debt with employers or neighbors. Demand the agent's ICICI employee identity card, agency authorization letter, and Business Correspondent code. Record any violation and report it immediately to ICICI's Principal Nodal Officer."
            }
          },
          {
            '@type': 'Question',
            name: 'How do I bypass third-party collection agencies and deal directly with ICICI Bank officials?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: "You can bypass external collection vendors by issuing a formal legal representation through a debt resolution professional directly to ICICI Bank's Regional Nodal Officer and Stressed Assets Management Group. This legal communication places financial hardship on record, invokes RBI anti-harassment safeguards, and mandates that negotiations proceed exclusively through authorized bank officers."
            }
          },
          {
            '@type': 'Question',
            name: 'What is the legal defense against Section 25 PSSA and Section 138 notices from ICICI Bank?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Notices issued under Section 25 of the Payment and Settlement Systems Act or Section 138 of the Negotiable Instruments Act require a structured legal response within 15 to 30 days. Counsel establishes the lack of mens rea or fraudulent intent, proves genuine financial incapacity, and converts the adversarial summons into a platform for mutual compromise settlement.'
            }
          },
          {
            '@type': 'Question',
            name: 'Can ICICI Bank initiate police action or have a borrower arrested for loan default?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Defaulting on an unsecured personal loan is strictly a civil contractual breach, not a criminal offense under Indian jurisprudence. Police cannot register an FIR, detain, or arrest a borrower for genuine non-payment of loan EMIs. While electronic mandate dishonour triggers statutory notices, these are bailable, compoundable matters routinely resolved via settlement.'
            }
          },
          {
            '@type': 'Question',
            name: 'What must be verified before paying the settlement amount to ICICI Bank?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Never make payment without an authentic Settlement Sanction Letter issued on official ICICI Bank letterhead with a verifiable reference number and authorized signatory stamp, originating from an official @icicibank.com email. The letter must state the exact discounted settlement sum, installment deadlines, full waiver terms, and a commitment to issue a No Dues Certificate.'
            }
          },
          {
            '@type': 'Question',
            name: 'How does an ICICI personal loan settlement affect CIBIL and how can I restore my score?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: "ICICI Bank updates credit bureaus with a 'Settled' or 'Post-Write-off Settled' status and a zero balance. While this initially reduces your CIBIL score, it permanently halts recurring 30-day delinquency reporting. Borrowers can restore a 750+ score within 18 to 24 months using secured credit cards, and can later convert the status to 'Closed' under Section 21 of CICRA."
            }
          },
          {
            '@type': 'Question',
            name: 'When will ICICI Bank issue the official No Dues Certificate (NDC) after payment?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Upon receiving the agreed settlement funds in full within the stipulated sanction timeframe, ICICI Bank updates its Core Banking Solution (Finacle) and writes off the settled balance. The bank is mandated under RBI guidelines to issue the official No Dues Certificate or Closure Letter within 30 to 45 calendar days.'
            }
          }
        ]
      },
      {
        '@type': 'FinancialService',
        '@id': 'https://www.credsettle.com/#service',
        name: 'CredSettle ICICI Personal Loan Settlement & Legal Defense Services',
        url: 'https://www.credsettle.com/icici-bank-personal-loan-settlement',
        provider: {
          '@type': 'Organization',
          name: 'CredSettle'
        },
        image: 'https://www.credsettle.com/images/infographics/icici-bank-personal-loan-settlement.jpg',
        telephone: '+91-8800226635',
        priceRange: '₹₹',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Barakhamba Road, Connaught Place',
          addressLocality: 'New Delhi',
          addressRegion: 'Delhi',
          postalCode: '110001',
          addressCountry: 'IN'
        }
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
      <IciciBankPersonalLoanSettlementClient />
      <Footer />
    </div>
  );
}
