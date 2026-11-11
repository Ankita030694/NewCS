import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CanaraBankOtsScheme2027Client from './CanaraBankOtsScheme2027Client';

export const metadata: Metadata = {
  title: 'Canara Bank OTS Scheme 2027: e-OTS Status | CredSettle',
  description:
    'Track Canara Bank OTS Scheme 2027 updates, e-OTS portal eligibility, Doubtful NPA waiver ranges, token deposit rules, and NOC steps in India.',
  keywords: [
    'canara bank ots scheme 2027',
    'canara bank e-ots',
    'canara bank one time settlement 2027',
    'canara bank npa settlement',
    'syndicate bank npa settlement canara bank',
    'canara bank loan settlement rules'
  ],
  openGraph: {
    title: 'Canara Bank OTS Scheme 2027: e-OTS Status | CredSettle',
    description:
      'Track Canara Bank OTS Scheme 2027 updates, e-OTS portal eligibility, Doubtful NPA waiver ranges, token deposit rules, and NOC steps in India.',
    type: 'article',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://www.credsettle.com/canara-bank-ots-scheme-2027'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Canara Bank OTS Scheme 2027: e-OTS Status | CredSettle',
    description:
      'Track Canara Bank OTS Scheme 2027 updates, e-OTS portal eligibility, Doubtful NPA waiver ranges, token deposit rules, and NOC steps in India.'
  },
  alternates: {
    canonical: 'https://www.credsettle.com/canara-bank-ots-scheme-2027'
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function CanaraBankOtsScheme2027Page() {
  const unifiedSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://www.credsettle.com/canara-bank-ots-scheme-2027#article",
        "isPartOf": {
          "@type": "WebPage",
          "@id": "https://www.credsettle.com/canara-bank-ots-scheme-2027"
        },
        "headline": "Canara Bank OTS Scheme 2027 & e-OTS Tracker",
        "description":
          "Track Canara Bank OTS Scheme 2027 updates, e-OTS portal eligibility, Doubtful NPA waiver ranges, token deposit rules, and NOC steps in India.",
        "inLanguage": "en_IN",
        "mainEntityOfPage": "https://www.credsettle.com/canara-bank-ots-scheme-2027",
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
        "@id": "https://www.credsettle.com/canara-bank-ots-scheme-2027#breadcrumb",
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
            "name": "Canara Bank OTS Scheme 2027",
            "item": "https://www.credsettle.com/canara-bank-ots-scheme-2027"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.credsettle.com/canara-bank-ots-scheme-2027#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Has Canara Bank published a special OTS Scheme for 2027 yet?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. As checked in November 2026, Canara Bank has not put out a new public notice for a 2027 OTS drive. Still, branches and ARM offices settle NPA loans all year under RBI Circular RBI/2023-24/40."
            }
          },
          {
            "@type": "Question",
            "name": "What is the Canara Bank e-OTS portal?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Canara Bank runs an online e-OTS tool on canarabank.bank.in during active drives. It gives fast slab quotes for small Doubtful, Loss, and written-off retail, MSME, and farm loans."
            }
          },
          {
            "@type": "Question",
            "name": "Can old Syndicate Bank NPA loans use Canara Bank OTS?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Syndicate Bank merged into Canara Bank in April 2020. Old unpaid Syndicate Bank retail, study, and small shop loans sit on Canara Bank books and can settle now."
            }
          },
          {
            "@type": "Question",
            "name": "How much token money does Canara Bank ask for up front?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Special Canara Bank OTS drives often ask for 10% to 25% of the agreed sum up front. You then pay the rest in 30 to 90 days after you get the written sanction letter."
            }
          },
          {
            "@type": "Question",
            "name": "What is an ARM branch in Canara Bank?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "ARM means Asset Recovery Management branch. Canara Bank shifts older or larger unpaid NPA files from local branches to city ARM hubs for fast recovery and OTS checks."
            }
          },
          {
            "@type": "Question",
            "name": "What waiver range is real in a Canara Bank OTS deal?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No cut is fixed in advance. On unsecured Doubtful or Loss loans with real hardship proof, dropping late fees and added interest often cuts 30% to 60% off the total demand sum."
            }
          },
          {
            "@type": "Question",
            "name": "Which loans are left out of Canara Bank OTS schemes?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Gold loans, jewel loans, FD loans, staff loans, fraud files, and willful default accounts without board nod are barred from standard Canara Bank OTS drives."
            }
          },
          {
            "@type": "Question",
            "name": "How do I check if my Canara Bank OTS sanction letter is real?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Check that the letter is on Canara Bank branch, RO, or ARM paper. It must list your exact loan number, full closure terms, last pay date, and bank stamp."
            }
          },
          {
            "@type": "Question",
            "name": "What RBI rules protect Canara Bank borrowers from 1 January 2027?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Under RBI rules and the new agent norms effective 1 January 2027, calls and home visits are legal only from 8:00 AM to 7:00 PM. Agents must show bank ID cards and cannot shame you."
            }
          },
          {
            "@type": "Question",
            "name": "When does Canara Bank give a No Dues Certificate?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Once you pay 100% of the OTS sum by the due date, Canara Bank gives a signed No Dues Certificate within 30 days and marks CIBIL as Settled."
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
      <CanaraBankOtsScheme2027Client />
      <Footer />
    </div>
  );
}
