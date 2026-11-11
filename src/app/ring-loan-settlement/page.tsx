import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import RingLoanSettlementClient from './RingLoanSettlementClient';

export const metadata: Metadata = {
  title: 'RING App Loan Settlement: Si Creva OTS | CredSettle',
  description:
    'Stuck with unpaid RING (PayWithRing) app bills and ₹3L+ multi-loan debt? Check Si Creva NBFC OTS rules, RBI 2027 rights, and safe closure steps.',
  keywords: [
    'ring loan settlement',
    'paywithring loan settlement',
    'si creva capital settlement',
    'ring power loan overdue settlement',
    'ring app recovery harassment complaint',
    'settle ring app and credit card debt'
  ],
  openGraph: {
    title: 'RING App Loan Settlement: Si Creva OTS | CredSettle',
    description:
      'Stuck with unpaid RING (PayWithRing) app bills and ₹3L+ multi-loan debt? Check Si Creva NBFC OTS rules, RBI 2027 rights, and safe closure steps.',
    type: 'article',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://www.credsettle.com/ring-loan-settlement'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RING App Loan Settlement: Si Creva OTS | CredSettle',
    description:
      'Stuck with unpaid RING (PayWithRing) app bills and ₹3L+ multi-loan debt? Check Si Creva NBFC OTS rules, RBI 2027 rights, and safe closure steps.'
  },
  alternates: {
    canonical: 'https://www.credsettle.com/ring-loan-settlement'
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RingLoanSettlementPage() {
  const unifiedSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://www.credsettle.com/ring-loan-settlement#article",
        "isPartOf": {
          "@type": "WebPage",
          "@id": "https://www.credsettle.com/ring-loan-settlement"
        },
        "headline": "RING (PayWithRing) App Loan & Si Creva Settlement Guide",
        "description":
          "Stuck with unpaid RING (PayWithRing) app bills and ₹3L+ multi-loan debt? Check Si Creva NBFC OTS rules, RBI 2027 rights, and safe closure steps.",
        "inLanguage": "en_IN",
        "mainEntityOfPage": "https://www.credsettle.com/ring-loan-settlement",
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
        "@id": "https://www.credsettle.com/ring-loan-settlement#breadcrumb",
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
            "name": "RING App Loan Settlement",
            "item": "https://www.credsettle.com/ring-loan-settlement"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.credsettle.com/ring-loan-settlement#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Which NBFC owns my RING (PayWithRing) loan on CIBIL?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "RING is operated by OnEMI Technology Solutions (the Kissht group). Most RING QR lines and RING Power Loans sit on the books of its group RBI-registered NBFC, Si Creva Capital Services Private Limited, or a co-lending NBFC named on your Key Fact Statement."
            }
          },
          {
            "@type": "Question",
            "name": "Can a RING Power Loan or QR bill be settled via One-Time Settlement?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Once an unpaid RING Power Loan crosses 90 days past due into NPA status and you show real hardship proof like job loss or medical bills, Si Creva Capital or your KFS lender can approve a written Full and Final OTS under RBI Circular RBI/2023-24/40."
            }
          },
          {
            "@type": "Question",
            "name": "Why did my small RING QR limit turn into a big overdue loan?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Users often scan RING QR codes for daily bills and then convert unpaid cycle dues into higher-fee EMI or Power Loans. Missing those EMIs adds bounce charges and late fees fast."
            }
          },
          {
            "@type": "Question",
            "name": "Should I hire a firm if I owe only Rs 18,000 on RING?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. If your total debt is under Rs 3,00,000, clear the small RING bill directly in the app or email Si Creva Capital's Grievance Officer for a fee cut. CredSettle only takes cases where combined unsecured debt across RING, other apps, cards, and personal loans is Rs 3,00,000 or more."
            }
          },
          {
            "@type": "Question",
            "name": "What waiver range is real in a Si Creva / RING loan settlement?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No cut is fixed in advance. On aged unsecured NPAs past 90 to 180 days with hardship proof, dropping added late fees and penal charges often saves 30% to 55% off total claimed dues."
            }
          },
          {
            "@type": "Question",
            "name": "What RBI rules stop RING agent harassment from 1 January 2027?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Under RBI Digital Lending rules and the new RBI agent conduct norms taking effect on 1 January 2027, calls and visits are legal only from 8:00 AM to 7:00 PM. Agents must carry NBFC ID cards and cannot call family or bosses."
            }
          },
          {
            "@type": "Question",
            "name": "How do I check if a RING OTS letter is real?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Make sure the letter comes from the official domain of PayWithRing or Si Creva Capital Services Pvt Ltd, lists your exact loan ID, states Full and Final Settlement, and routes money to the official app or NBFC bank account."
            }
          },
          {
            "@type": "Question",
            "name": "When will Si Creva Capital update CIBIL after RING settlement?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "After you pay 100% of the sanctioned OTS sum on time, Si Creva Capital issues a No Dues Certificate within 30 days and marks CIBIL as Settled with zero balance."
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
      <RingLoanSettlementClient />
      <Footer />
    </div>
  );
}
