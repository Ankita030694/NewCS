import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CreditCardSettlementBeforeFyEndClient from './CreditCardSettlementBeforeFyEndClient';

export const metadata: Metadata = {
  title: 'Credit Card FY-End Settlement by Issuer | CredSettle',
  description:
    'Compare Q4 NPA write-off cycles and FY-end settlement rules across SBI Card, HDFC, ICICI, Axis, RBL, Kotak, and BoBCard for ₹3L+ card debt now.',
  keywords: [
    'credit card settlement before financial year end by issuer',
    'q4 credit card settlement india',
    'sbi card march settlement cutoff',
    'hdfc icici axis credit card write off cycle',
    '180 days charge off credit card india',
    'settle multiple credit cards before march 31'
  ],
  openGraph: {
    title: 'Credit Card FY-End Settlement by Issuer | CredSettle',
    description:
      'Compare Q4 NPA write-off cycles and FY-end settlement rules across SBI Card, HDFC, ICICI, Axis, RBL, Kotak, and BoBCard for ₹3L+ card debt now.',
    type: 'article',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://www.credsettle.com/credit-card-settlement-before-financial-year-end-by-issuer'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Credit Card FY-End Settlement by Issuer | CredSettle',
    description:
      'Compare Q4 NPA write-off cycles and FY-end settlement rules across SBI Card, HDFC, ICICI, Axis, RBL, Kotak, and BoBCard for ₹3L+ card debt now.'
  },
  alternates: {
    canonical: 'https://www.credsettle.com/credit-card-settlement-before-financial-year-end-by-issuer'
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function CreditCardSettlementBeforeFyEndPage() {
  const unifiedSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://www.credsettle.com/credit-card-settlement-before-financial-year-end-by-issuer#article",
        "isPartOf": {
          "@type": "WebPage",
          "@id": "https://www.credsettle.com/credit-card-settlement-before-financial-year-end-by-issuer"
        },
        "headline": "Credit Card Settlement Before FY-End: Issuer Q4 Guide",
        "description":
          "Compare Q4 NPA write-off cycles and FY-end settlement rules across SBI Card, HDFC, ICICI, Axis, RBL, Kotak, and BoBCard for ₹3L+ card debt now.",
        "inLanguage": "en_IN",
        "mainEntityOfPage": "https://www.credsettle.com/credit-card-settlement-before-financial-year-end-by-issuer",
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
        "@id": "https://www.credsettle.com/credit-card-settlement-before-financial-year-end-by-issuer#breadcrumb",
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
            "name": "Credit Card Settlement",
            "item": "https://www.credsettle.com/credit-card-settlement"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Credit Card FY-End Settlement by Issuer",
            "item": "https://www.credsettle.com/credit-card-settlement-before-financial-year-end-by-issuer"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.credsettle.com/credit-card-settlement-before-financial-year-end-by-issuer#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How do credit card issuers treat 90-day NPA vs 180-day charge-off in Q4?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Under RBI asset norms, an unpaid credit card bill turns into an NPA at 90 days past the Minimum Amount Due date. Around 180 days past due, major card issuers move unsecured card balances into internal charge-off / write-off pools requiring 100% provisioning, where Q4 lump-sum waivers are most actively approved."
            }
          },
          {
            "@type": "Question",
            "name": "Why is SBI Card (SBICPSL) structured differently from SBI Bank in Q4?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "SBI Card is operated by SBI Cards and Payment Services Ltd (a listed NBFC), not State Bank of India branches. SBICPSL runs dedicated quarterly and FY-end write-off recovery targets completely separate from SBI Rinn Samadhan bank schemes."
            }
          },
          {
            "@type": "Question",
            "name": "Can a Q4 split-instalment card settlement cross past March 31?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Most Q4 FY-end card settlement offers require all 2 or 3 instalments (for example January, February, and March) to clear strictly before March 25 to March 31 so the recovery books inside the same financial year. Missing the final March instalment revokes the entire waiver."
            }
          },
          {
            "@type": "Question",
            "name": "Will a card that is only 30 days overdue get a deep FY-end settlement?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. Even in March, card issuers do not grant deep principal waivers on fresh 30-day SMA-0 accounts. FY-end write-off concessions apply primarily to cards already aged past 90 to 180+ days overdue with documented hardship."
            }
          },
          {
            "@type": "Question",
            "name": "What is the salary account set-off risk at HDFC, ICICI, Axis, or Kotak?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "If your defaulted credit card and your active salary account sit inside the exact same private bank (such as HDFC, ICICI, Axis, or Kotak), the bank can invoke a banker's lien or hold on incoming salary credits before approving an OTS."
            }
          },
          {
            "@type": "Question",
            "name": "Which card should I settle first in Q4 if I hold 4 defaulted cards?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Prioritise cards already sitting in the 180+ day write-off bucket where the issuer grants the steepest single-shot Q4 fee and interest cut, or any card linked to an aggressive arbitration notice."
            }
          },
          {
            "@type": "Question",
            "name": "What RBI recovery rules govern Q4 card collection drives in 2027?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Under the RBI Master Direction on Credit Cards and updated recovery conduct rules effective 1 January 2027, card recovery calls and visits are strictly capped between 8:00 AM and 7:00 PM, agents must carry bank/NBFC IDs, and workplace or family shaming is illegal."
            }
          },
          {
            "@type": "Question",
            "name": "Does CredSettle handle single small credit card bills under Rs 3 Lakhs?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "CredSettle represents cardholders whose combined unsecured debt across credit cards, personal loans, and loan apps is Rs 3,00,000 or higher. Single sub-Rs 3L cardholders can use our issuer rules below to request settlement directly with their card nodal desk."
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
      <CreditCardSettlementBeforeFyEndClient />
      <Footer />
    </div>
  );
}
