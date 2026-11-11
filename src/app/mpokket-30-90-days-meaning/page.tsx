import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Mpokket3090DaysMeaningClient from './Mpokket3090DaysMeaningClient';

export const metadata: Metadata = {
  title: 'mPokket 30 to 90 Days Overdue Meaning & NPA | CredSettle',
  description:
    'What does mPokket 30, 60, and 90 days late mean? Check late fees, SMA to NPA CIBIL hits, free DIY steps, and ₹3L+ multi-app settlement rules.',
  keywords: [
    'mpokket 30 90 days meaning',
    'mpokket 30 days overdue',
    'mpokket 90 days npa meaning',
    'mpokket loan tenure 30 to 90 days',
    'mpokket financial services settlement',
    'mpokket cibil impact'
  ],
  openGraph: {
    title: 'mPokket 30 to 90 Days Overdue Meaning & NPA | CredSettle',
    description:
      'What does mPokket 30, 60, and 90 days late mean? Check late fees, SMA to NPA CIBIL hits, free DIY steps, and ₹3L+ multi-app settlement rules.',
    type: 'article',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://www.credsettle.com/mpokket-30-90-days-meaning'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'mPokket 30 to 90 Days Overdue Meaning & NPA | CredSettle',
    description:
      'What does mPokket 30, 60, and 90 days late mean? Check late fees, SMA to NPA CIBIL hits, free DIY steps, and ₹3L+ multi-app settlement rules.'
  },
  alternates: {
    canonical: 'https://www.credsettle.com/mpokket-30-90-days-meaning'
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function Mpokket3090DaysMeaningPage() {
  const unifiedSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://www.credsettle.com/mpokket-30-90-days-meaning#article",
        "isPartOf": {
          "@type": "WebPage",
          "@id": "https://www.credsettle.com/mpokket-30-90-days-meaning"
        },
        "headline": "mPokket 30, 60 & 90 Days Overdue Meaning & CIBIL Impact",
        "description":
          "What does mPokket 30, 60, and 90 days overdue mean? Understand late fees, SMA-1/SMA-2 to NPA impact on CIBIL, and ₹3L+ multi-app debt settlement.",
        "inLanguage": "en_IN",
        "mainEntityOfPage": "https://www.credsettle.com/mpokket-30-90-days-meaning",
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
        "@id": "https://www.credsettle.com/mpokket-30-90-days-meaning#breadcrumb",
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
            "name": "mPokket 30 to 90 Days Meaning",
            "item": "https://www.credsettle.com/mpokket-30-90-days-meaning"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.credsettle.com/mpokket-30-90-days-meaning#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What does 30 to 90 days mean in the mPokket app?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "In mPokket, '30 to 90 days' shows up in two ways: first, as short single-bullet or EMI repayment tenures (30, 60, or 90 days) when taking a small loan; and second, as Days Past Due (DPD) buckets (1-30 DPD SMA-0, 31-60 DPD SMA-1, 61-90 DPD SMA-2, and 90+ DPD NPA) if you miss your due date."
            }
          },
          {
            "@type": "Question",
            "name": "Is mPokket an RBI-registered NBFC?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. mPokket operates through mPokket Financial Services Private Limited, an RBI-registered NBFC headquartered in Kolkata. Every missed payment is reported directly to CIBIL, Experian, Equifax, and CRIF High Mark."
            }
          },
          {
            "@type": "Question",
            "name": "What happens when an mPokket loan crosses 90 days overdue?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "At 90+ Days Past Due (DPD), mPokket Financial Services classifies your loan as a Non-Performing Asset (NPA). Your credit score drops sharply, and the account moves to NPA recovery or One-Time Settlement review."
            }
          },
          {
            "@type": "Question",
            "name": "Why do 10 small mPokket tickets hurt CIBIL worse than 1 loan?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "mPokket lets users take many small Rs 1,000 to Rs 5,000 tickets at once. Each ticket can appear as a separate active trade line on CIBIL, so defaulting on 12 small tickets logs 12 simultaneous defaults on your credit report."
            }
          },
          {
            "@type": "Question",
            "name": "Should a student owing Rs 12,000 on mPokket hire a settlement agency?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No! For small balances under Rs 3,00,000, hiring a paid agency costs more than clearing the tickets directly in the app or requesting a late-fee waiver by email from mPokket support. CredSettle strictly assists salaried borrowers holding Rs 3,00,000+ in combined unsecured debt across multiple apps, credit cards, and personal loans."
            }
          },
          {
            "@type": "Question",
            "name": "Can mPokket recovery agents call my college or parents?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. Under RBI Digital Lending Directions and RBI's updated recovery conduct norms effective 1 January 2027, agents can contact only you between 8:00 AM and 7:00 PM and are barred from calling parents, professors, friends, or employers."
            }
          },
          {
            "@type": "Question",
            "name": "Can multiple mPokket tickets be merged into one settlement?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Once your open mPokket tickets cross 90+ DPD into NPA status, you can request a consolidated account statement and negotiate one single Full and Final Settlement letter covering every active loan ID under your profile."
            }
          },
          {
            "@type": "Question",
            "name": "How long after clearing mPokket dues do I get an NOC?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "mPokket Financial Services issues loan closure confirmations inside the app and sends a formal No Dues Certificate within 30 days of full payment or sanctioned OTS payment."
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
      <Mpokket3090DaysMeaningClient />
      <Footer />
    </div>
  );
}
