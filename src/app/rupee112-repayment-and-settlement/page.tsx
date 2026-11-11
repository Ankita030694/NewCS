import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Rupee112RepaymentAndSettlementClient from './Rupee112RepaymentAndSettlementClient';

export const metadata: Metadata = {
  title: 'Rupee112 Loan Repayment & Settlement Rules | CredSettle',
  description:
    'Trapped by Rupee112 short-term loan rollover and ₹3L+ combined debt? Check partner NBFC rules, RBI 2027 protections, and safe settlement steps.',
  keywords: [
    'rupee112 repayment and settlement',
    'rupee112 loan settlement',
    'dev aashish capitals rupee112',
    'rupee112 overdue charges',
    'rupee112 recovery harassment complaint',
    'settle payday app loans above 3 lakh'
  ],
  openGraph: {
    title: 'Rupee112 Loan Repayment & Settlement Rules | CredSettle',
    description:
      'Trapped by Rupee112 short-term loan rollover and ₹3L+ combined debt? Check partner NBFC rules, RBI 2027 protections, and safe settlement steps.',
    type: 'article',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://www.credsettle.com/rupee112-repayment-and-settlement'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rupee112 Loan Repayment & Settlement Rules | CredSettle',
    description:
      'Trapped by Rupee112 short-term loan rollover and ₹3L+ combined debt? Check partner NBFC rules, RBI 2027 protections, and safe settlement steps.'
  },
  alternates: {
    canonical: 'https://www.credsettle.com/rupee112-repayment-and-settlement'
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function Rupee112RepaymentAndSettlementPage() {
  const unifiedSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://www.credsettle.com/rupee112-repayment-and-settlement#article",
        "isPartOf": {
          "@type": "WebPage",
          "@id": "https://www.credsettle.com/rupee112-repayment-and-settlement"
        },
        "headline": "Rupee112 Loan Repayment Trap & Safe Settlement Guide",
        "description":
          "Trapped by Rupee112 short-term loan rollover and ₹3L+ combined debt? Check partner NBFC rules, RBI 2027 protections, and safe settlement steps.",
        "inLanguage": "en_IN",
        "mainEntityOfPage": "https://www.credsettle.com/rupee112-repayment-and-settlement",
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
        "@id": "https://www.credsettle.com/rupee112-repayment-and-settlement#breadcrumb",
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
            "name": "Rupee112 Repayment & Settlement",
            "item": "https://www.credsettle.com/rupee112-repayment-and-settlement"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.credsettle.com/rupee112-repayment-and-settlement#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Which NBFC is behind Rupee112 loans?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Rupee112 operates as a digital lending platform associated with RBI-registered NBFC partners such as Dev-Aashish Capitals Private Limited (always check your Key Fact Statement and CIBIL report to verify the exact NBFC holding your loan)."
            }
          },
          {
            "@type": "Question",
            "name": "Why is Rupee112 salary-day bullet repayment so hard to clear?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Short-tenure salaried bridge loans deduct upfront processing fees and demand the entire principal plus high daily or monthly interest on your very next payday, wiping out 30% to 50% of your next salary in one shot."
            }
          },
          {
            "@type": "Question",
            "name": "Can I settle a Rupee112 loan if I cannot pay the inflated overdue bill?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. When genuine hardship pushes the account past 90 days overdue into NPA status, the RBI-registered NBFC on your KFS can approve a written Full and Final One-Time Settlement waiving accumulated late fees and penal charges."
            }
          },
          {
            "@type": "Question",
            "name": "Should I pay an extension or rollover fee on a short-term loan?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Avoid paying informal extension fees that do not reduce your principal balance. Paying Rs 8,000 every month just to push a Rs 35,000 due date by 30 days drains cash without closing your debt."
            }
          },
          {
            "@type": "Question",
            "name": "Does CredSettle handle a standalone Rs 25,000 Rupee112 loan?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. If Rupee112 is your only loan and your total debt is under Rs 3,00,000, email the NBFC Grievance Officer directly to request a penalty waiver and close the account yourself. CredSettle serves borrowers holding Rs 3,00,000 or more in combined unsecured debt across multiple apps, credit cards, and personal loans."
            }
          },
          {
            "@type": "Question",
            "name": "Can Rupee112 agents message my office HR or family?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. Under RBI Digital Lending Directions and RBI's updated recovery conduct norms taking effect on 1 January 2027, recovery calls are restricted to 8:00 AM to 7:00 PM and contacting employers, colleagues, or family members is strictly illegal."
            }
          },
          {
            "@type": "Question",
            "name": "How do I check if a Rupee112 settlement offer is genuine?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Insist on a formal sanction email from the official corporate domain of the RBI-registered NBFC named on your KFS, verify your loan ID and Full and Final closure wording, and pay only via official NBFC channels, never to a personal WhatsApp UPI number."
            }
          },
          {
            "@type": "Question",
            "name": "Will Rupee112 default show up on my CIBIL report?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Because loans are booked under an RBI-registered NBFC, overdue days and settlements are reported to credit bureaus. Collecting your 30-day No Dues Certificate ensures CIBIL updates to zero balance."
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
      <Rupee112RepaymentAndSettlementClient />
      <Footer />
    </div>
  );
}
