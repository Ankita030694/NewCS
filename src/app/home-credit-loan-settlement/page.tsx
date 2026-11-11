import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HomeCreditLoanSettlementClient from './HomeCreditLoanSettlementClient';

export const metadata: Metadata = {
  title: 'Home Credit Loan Settlement: OTS & NOC | CredSettle',
  description:
    'Unable to pay Home Credit India personal or phone EMI loans with ₹3L+ total debt? Check NBFC OTS rules, RBI 2027 agent laws, and NOC steps now.',
  keywords: [
    'home credit loan settlement',
    'home credit india ots',
    'home credit personal loan settlement',
    'home credit recovery agent home visit',
    'home credit ujjwal card settlement',
    'settle home credit and credit card debt'
  ],
  openGraph: {
    title: 'Home Credit Loan Settlement: OTS & NOC | CredSettle',
    description:
      'Unable to pay Home Credit India personal or phone EMI loans with ₹3L+ total debt? Check NBFC OTS rules, RBI 2027 agent laws, and NOC steps now.',
    type: 'article',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://www.credsettle.com/home-credit-loan-settlement'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Home Credit Loan Settlement: OTS & NOC | CredSettle',
    description:
      'Unable to pay Home Credit India personal or phone EMI loans with ₹3L+ total debt? Check NBFC OTS rules, RBI 2027 agent laws, and NOC steps now.'
  },
  alternates: {
    canonical: 'https://www.credsettle.com/home-credit-loan-settlement'
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function HomeCreditLoanSettlementPage() {
  const unifiedSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://www.credsettle.com/home-credit-loan-settlement#article",
        "isPartOf": {
          "@type": "WebPage",
          "@id": "https://www.credsettle.com/home-credit-loan-settlement"
        },
        "headline": "Home Credit India Personal Loan & OTS Settlement Guide",
        "description":
          "Unable to pay Home Credit India personal or phone EMI loans with ₹3L+ total debt? Check NBFC OTS rules, RBI 2027 agent laws, and NOC steps now.",
        "inLanguage": "en_IN",
        "mainEntityOfPage": "https://www.credsettle.com/home-credit-loan-settlement",
        "datePublished": "2026-11-11T10:00:00+05:30",
        "dateModified": "2026-11-11T10:00:00+05:30",
        "author": {
          "@type": "Person",
          "@id": "https://www.credsettle.com/author/ashish-jhangra#author",
          "name": "Ashish Jhangra",
          "url": "https://www.credsettle.com/author/ashish-jhangra",
          "jobTitle": "Legal & Debt Resolution Professional",
          "worksFor": {
            "@type": "Organization",
            "name": "CredSettle"
          }
        },
        "publisher": {
          "@type": "Organization",
          "name": "CredSettle",
          "url": "https://www.credsettle.com",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.credsettle.com/credsettle-logo-black.png"
          }
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.credsettle.com/home-credit-loan-settlement#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.credsettle.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Loan Settlement",
            "item": "https://www.credsettle.com/loan-settlement"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Home Credit Loan Settlement",
            "item": "https://www.credsettle.com/home-credit-loan-settlement"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.credsettle.com/home-credit-loan-settlement#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Is Home Credit India an RBI-registered NBFC?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Home Credit India Finance Private Limited is an RBI-registered Non-Banking Financial Company. Its personal loans, Ujjwal EMI card dues, and consumer durable loans are regulated under RBI Fair Practices and compromise settlement rules."
            }
          },
          {
            "@type": "Question",
            "name": "Can a Home Credit personal loan be settled via One-Time Settlement?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Once an unsecured Home Credit personal loan crosses 90 days past due into NPA status and you show documented hardship like job loss or medical bills, Home Credit India reviews lump-sum OTS offers under RBI Circular RBI/2023-24/40."
            }
          },
          {
            "@type": "Question",
            "name": "Why is my Home Credit loan balance still high after paying many EMIs?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Home Credit cash personal loans carry high unsecured APR (often 24% to 42%+) plus optional bundled Safe Pay or insurance add-ons, so early EMIs go heavily toward interest rather than principal."
            }
          },
          {
            "@type": "Question",
            "name": "Should I hire a firm for a Rs 18,000 Home Credit mobile phone loan?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No! Small store-financed mobile phone or appliance loans should be closed directly via the Home Credit app or customer care without paying settlement fees. CredSettle strictly assists borrowers holding Rs 3,00,000 or more in combined unsecured debt across Home Credit personal loans, credit cards, bank PLs, and loan apps."
            }
          },
          {
            "@type": "Question",
            "name": "Can Home Credit recovery agents lock my phone or take household items?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Agents have zero right to enter your house by force or seize household goods. Note that some store-financed smartphone EMI contracts come with pre-disclosed device-lock software until device dues are cleared, whereas cash personal loans have no asset tie."
            }
          },
          {
            "@type": "Question",
            "name": "What RBI rules govern Home Credit field visits from 1 January 2027?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Under the RBI Fair Practices Code and updated RBI recovery conduct rules effective 1 January 2027, calls and field visits are allowed strictly from 8:00 AM to 7:00 PM, agents must show Home Credit authorization IDs, and shaming before neighbours or coworkers is prohibited."
            }
          },
          {
            "@type": "Question",
            "name": "What waiver range is realistic in a Home Credit personal loan OTS?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No waiver is fixed in advance. On unsecured cash personal loans aged past 90 to 180+ days in NPA status with hardship proof, dropping late fees and unapplied interest often yields indicative savings of 35% to 60% off total claimed balances."
            }
          },
          {
            "@type": "Question",
            "name": "How fast does Home Credit issue a No Dues Certificate?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "After you pay 100% of the sanctioned OTS sum before the deadline, Home Credit India issues a No Dues Certificate within 30 days and updates CIBIL to Settled with zero balance."
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
      <HomeCreditLoanSettlementClient />
      <Footer />
    </div>
  );
}
