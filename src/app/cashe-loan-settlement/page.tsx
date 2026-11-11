import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CasheLoanSettlementClient from './CasheLoanSettlementClient';

export const metadata: Metadata = {
  title: 'CASHe Loan Settlement: Bhanix Finance OTS | CredSettle',
  description:
    'Defaulted on a CASHe loan inside ₹3L+ total debt? Read Bhanix Finance NBFC OTS steps, RBI 2027 recovery rules, and safe NOC closure tips now.',
  keywords: [
    'cashe loan settlement',
    'bhanix finance settlement',
    'cashe personal loan ots',
    'cashe arbitration notice reply',
    'cashe recovery harassment complaint',
    'settle cashe and credit card debt'
  ],
  openGraph: {
    title: 'CASHe Loan Settlement: Bhanix Finance OTS | CredSettle',
    description:
      'Defaulted on a CASHe loan inside ₹3L+ total debt? Read Bhanix Finance NBFC OTS steps, RBI 2027 recovery rules, and safe NOC closure tips now.',
    type: 'article',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://www.credsettle.com/cashe-loan-settlement'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CASHe Loan Settlement: Bhanix Finance OTS | CredSettle',
    description:
      'Defaulted on a CASHe loan inside ₹3L+ total debt? Read Bhanix Finance NBFC OTS steps, RBI 2027 recovery rules, and safe NOC closure tips now.'
  },
  alternates: {
    canonical: 'https://www.credsettle.com/cashe-loan-settlement'
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function CasheLoanSettlementPage() {
  const unifiedSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://www.credsettle.com/cashe-loan-settlement#article",
        "isPartOf": {
          "@type": "WebPage",
          "@id": "https://www.credsettle.com/cashe-loan-settlement"
        },
        "headline": "CASHe Personal Loan & Bhanix Finance Settlement Guide",
        "description":
          "Defaulted on a CASHe loan inside ₹3L+ total debt? Read Bhanix Finance NBFC OTS steps, RBI 2027 recovery rules, and safe NOC closure tips now.",
        "inLanguage": "en_IN",
        "mainEntityOfPage": "https://www.credsettle.com/cashe-loan-settlement",
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
        "@id": "https://www.credsettle.com/cashe-loan-settlement#breadcrumb",
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
            "name": "CASHe Loan Settlement",
            "item": "https://www.credsettle.com/cashe-loan-settlement"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.credsettle.com/cashe-loan-settlement#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Which NBFC owns my CASHe personal loan?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "CASHe is a digital Lending Service Provider backed primarily by its group RBI-registered NBFC, Bhanix Finance and Investment Limited, alongside co-lending NBFC partners such as Vivriti Capital or PayU Finance shown on your Key Fact Statement."
            }
          },
          {
            "@type": "Question",
            "name": "When can I apply for a CASHe One-Time Settlement?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Once missed EMIs push your CASHe loan past 90 days overdue into NPA status and you show documented hardship like job loss, pay cuts, or medical emergencies, Bhanix Finance or your KFS lender evaluates OTS offers under RBI Circular RBI/2023-24/40."
            }
          },
          {
            "@type": "Question",
            "name": "What should I do if I get an online arbitration email for a CASHe loan?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Do not ignore an arbitration email. File a short written reply putting your financial hardship and settlement readiness on record, while negotiating a bilateral Full and Final OTS directly with Bhanix Finance."
            }
          },
          {
            "@type": "Question",
            "name": "What waiver range is real in a CASHe / Bhanix Finance settlement?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No cut is fixed in advance. On unsecured NPAs aged past 90 to 180 days with verified hardship, dropping bounce charges and penal interest often saves 30% to 55% off total claimed dues."
            }
          },
          {
            "@type": "Question",
            "name": "Should I hire a firm for a single Rs 45,000 CASHe loan?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. If your total unsecured debt is under Rs 3,00,000, email Bhanix Finance's Grievance Officer directly to negotiate a penalty cut yourself. CredSettle strictly serves salaried borrowers carrying Rs 3,00,000 or more in combined unsecured debt across CASHe, other apps, credit cards, and personal loans."
            }
          },
          {
            "@type": "Question",
            "name": "Can CASHe agents email my company HR or call colleagues?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. Under RBI Digital Lending Directions and RBI's updated recovery conduct norms effective 1 January 2027, recovery calls and visits are allowed strictly from 8:00 AM to 7:00 PM, and contacting HR, bosses, or family members is barred."
            }
          },
          {
            "@type": "Question",
            "name": "How do I verify a CASHe / Bhanix Finance OTS letter?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Confirm that the letter comes from the official domain of CASHe or Bhanix Finance and Investment Ltd, shows your exact loan ID, states Full and Final Settlement, and directs payment into the official app or NBFC account."
            }
          },
          {
            "@type": "Question",
            "name": "How fast do I get a No Dues Certificate after CASHe settlement?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Once you pay 100% of the sanctioned OTS sum by the cutoff date, Bhanix Finance issues a signed No Dues Certificate within 30 days and marks CIBIL as Settled."
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
      <CasheLoanSettlementClient />
      <Footer />
    </div>
  );
}
