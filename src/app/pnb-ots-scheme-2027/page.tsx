import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PnbOtsScheme2027Client from './PnbOtsScheme2027Client';

export const metadata: Metadata = {
  title: 'PNB OTS Scheme 2027: e-OTS & NPA Waivers | CredSettle',
  description:
    'Check Punjab National Bank OTS Scheme 2027 status, PNB e-OTS rules, SASTRA steps, realistic NPA waivers, and sanction letter checks in India.',
  keywords: [
    'pnb ots scheme 2027',
    'punjab national bank ots scheme 2027',
    'pnb e-ots portal',
    'pnb sastra settlement process',
    'pnb one time settlement 2027',
    'obc united bank npa settlement pnb',
    'pnb loan settlement rules'
  ],
  openGraph: {
    title: 'PNB OTS Scheme 2027: e-OTS & NPA Waivers | CredSettle',
    description:
      'Check Punjab National Bank OTS Scheme 2027 status, PNB e-OTS rules, SASTRA steps, NPA waivers, and sanction letter checks in India today.',
    type: 'article',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://www.credsettle.com/pnb-ots-scheme-2027'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PNB OTS Scheme 2027: e-OTS & NPA Waivers | CredSettle',
    description:
      'Check Punjab National Bank OTS Scheme 2027 status, PNB e-OTS rules, SASTRA steps, NPA waivers, and sanction letter checks in India today.'
  },
  alternates: {
    canonical: 'https://www.credsettle.com/pnb-ots-scheme-2027'
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function PnbOtsScheme2027Page() {
  const unifiedSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://www.credsettle.com/pnb-ots-scheme-2027#article",
        "isPartOf": {
          "@type": "WebPage",
          "@id": "https://www.credsettle.com/pnb-ots-scheme-2027"
        },
        "headline": "Punjab National Bank (PNB) OTS Scheme 2027 Guide",
        "description":
          "Check Punjab National Bank OTS Scheme 2027 status, PNB e-OTS rules, SASTRA steps, NPA waivers, and sanction letter checks in India today.",
        "inLanguage": "en_IN",
        "mainEntityOfPage": "https://www.credsettle.com/pnb-ots-scheme-2027",
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
        "@id": "https://www.credsettle.com/pnb-ots-scheme-2027#breadcrumb",
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
            "name": "PNB OTS Scheme 2027",
            "item": "https://www.credsettle.com/pnb-ots-scheme-2027"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.credsettle.com/pnb-ots-scheme-2027#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Has Punjab National Bank announced a special PNB OTS Scheme 2027 yet?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "As checked in November 2026, PNB has not released a separate public circular for a standalone 2027 special OTS campaign. However, PNB branches and Circle SASTRA centres accept compromise settlement proposals all year under RBI Circular RBI/2023-24/40."
            }
          },
          {
            "@type": "Question",
            "name": "What is the SASTRA division in Punjab National Bank?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "SASTRA stands for Stressed Assets Targeted Resolution Action. PNB operates Circle SASTRA and Zonal SASTRA centres across India to handle NPA recovery, Lok Adalat referrals, and One-Time Settlement approvals."
            }
          },
          {
            "@type": "Question",
            "name": "How does PNB e-OTS work for small NPA borrowers?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "PNB periodically activates e-OTS digital workflows via pnb.bank.in and PNB ONE for eligible low-ticket retail, MSME, and farm NPAs, allowing standard non-discretionary settlement quotes without lengthy branch paperwork."
            }
          },
          {
            "@type": "Question",
            "name": "Are Oriental Bank of Commerce and United Bank of India loans eligible for PNB OTS?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Oriental Bank of Commerce (OBC) and United Bank of India merged with PNB in April 2020. Unpaid legacy loans from both banks are managed by PNB SASTRA hubs and qualify for OTS."
            }
          },
          {
            "@type": "Question",
            "name": "Which accounts are excluded from standard PNB OTS schemes?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Accounts tagged as RBI-reported fraud, certified willful defaulters without board clearance, NCLT-admitted IBC cases, gold loans, and FD-backed loans are barred from standard PNB OTS slab schemes."
            }
          },
          {
            "@type": "Question",
            "name": "How much waiver does PNB grant in a loan settlement?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Waivers depend on NPA vintage, collateral status, and hardship proof. On unsecured Doubtful or Loss retail accounts, dropping penal interest and unapplied charges often brings indicative savings of 30% to 60% off total claimed balances."
            }
          },
          {
            "@type": "Question",
            "name": "How much upfront money is needed for a PNB OTS proposal?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Special PNB OTS schemes commonly require 10% to 15% of the proposed OTS amount up front, with the balance payable within 30 to 90 days of written sanction."
            }
          },
          {
            "@type": "Question",
            "name": "How do I verify if a PNB OTS sanction letter is authentic?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Check that the letter is printed on official PNB branch or Circle SASTRA letterhead, states your 16-digit PNB loan account number, lists exact waiver terms and due dates, and directs deposit strictly into your PNB account."
            }
          },
          {
            "@type": "Question",
            "name": "What RBI recovery rules protect PNB borrowers from 1 January 2027?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Under RBI Fair Practices guidelines and updated recovery conduct directions taking effect on 1 January 2027, recovery calls and visits are limited to 8:00 AM to 7:00 PM, agents must show bank authorization IDs, and contacting relatives or employers is banned."
            }
          },
          {
            "@type": "Question",
            "name": "What happens after I finish paying my PNB OTS sanction amount?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "PNB issues a signed No Dues Certificate within 30 days of final payment and reports the account to CIBIL as Settled with zero balance."
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
      <PnbOtsScheme2027Client />
      <Footer />
    </div>
  );
}
