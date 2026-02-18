import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import KrazyBeeLoanSettlementClient from './KrazyBeeLoanSettlementClient';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'KrazyBee Loan Settlement | Fake Notice Check',
  description: 'Expert guide to settling KrazyBee / KreditBee loans. Check if your legal notice is FAKE or REAL. Download settlement letter format and stop harassment today.',
  alternates: {
    canonical: 'https://www.credsettle.com/loan-settlement/krazybee',
  },
  openGraph: {
    title: 'KrazyBee / KreditBee Settlement: Fake Notice Checker & Legal Guide',
    description: 'Received a legal notice from KreditBee? Check if it is fake. Learn how to settle your loan, stop harassment, and formatting your settlement letter.',
    url: 'https://www.credsettle.com/loan-settlement/krazybee',
    type: 'article',
  },
};

export default function KrazyBeeLoanSettlementPage() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "CredSettle",
    "url": "https://www.credsettle.com",
    "logo": "https://www.credsettle.com/credsettle-logo.svg",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-8800226635",
      "contactType": "customer service"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.credsettle.com"
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
        "name": "KrazyBee Loan Settlement",
        "item": "https://www.credsettle.com/loan-settlement/krazybee"
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "KrazyBee (KreditBee) Loan Settlement: Fake Notice Checker & 2026 Guide",
    "description": "Comprehensive guide on how to settle KrazyBee / KreditBee personal loans. Includes Fake Notice Checker, Settlement Letter Format, and Arbitration details.",
    "author": {
      "@type": "Organization",
      "name": "CredSettle Legal Team"
    },
    "publisher": {
      "@type": "Organization",
      "name": "CredSettle",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.credsettle.com/credsettle-logo.svg"
      }
    },
    "datePublished": "2026-01-15",
    "dateModified": "2026-01-15",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.credsettle.com/loan-settlement/krazybee"
    }
  };

  const faqList = [
    {
      question: "Can I settle my KreditBee personal loan?",
      answer: "Yes, KreditBee loans (financed by KrazyBee) can be settled if you are unable to repay. This involves paying a one-time reduced amount to close the loan account."
    },
    {
      question: "Why am I getting notices from KrazyBee Services?",
      answer: "KrazyBee Services Ltd. is the registered NBFC that lends money through the KreditBee app. Even if you took the loan on the app, the legal entity you owe money to is likely KrazyBee."
    },
    {
      question: "Is the WhatsApp legal notice from KreditBee real?",
      answer: "Most legal notices sent via WhatsApp that threaten 'Immediate Arrest' or 'Police Visit' are FAKE. A real arbitration notice is usually sent via registered post or official email."
    },
    {
      question: "How do I stop KreditBee agents from calling my parents?",
      answer: "Harassing relatives is against RBI guidelines. You can stop this by formally engaging a settlement firm like CredSettle to represent you and revoke third-party contact authorization."
    },
    {
      question: "What is the settlement percentage for KrazyBee loans?",
      answer: "Settlements often range between 30% to 50% of the total outstanding amount, depending on the delinquency period (how long you haven't paid) and your proven financial hardship."
    },
    {
      question: "Will settlement affect my CIBIL score?",
      answer: "Yes, the account will be marked as 'Settled' appearing in your credit report for 7 years. This is a negative status but is better than a 'Written Off' status or an active legal case."
    },
    {
      question: "How long does the settlement process take?",
      answer: "The process typically takes 2-4 weeks. It involves negotiation, approval of the settlement amount, issuance of the settlement letter, payment, and finally the No Dues Certificate."
    },
    {
      question: "Who is the Grievance Officer for KrazyBee?",
      answer: "The Grievance Redressal Officer can be reached at 080-44292555 or reachus@kbnbfc.in. If unresolved, escalations go to the Nodal Officer at grievance@kbnbfc.in."
    },
    {
      question: "What should be in the KrazyBee settlement letter?",
      answer: "The letter must be on KrazyBee letterhead, stating the agreed amount, payment deadline, loan account number, and explicitly mentioning that upon payment, the loan is closed and any legal proceedings will be withdrawn."
    },
    {
      question: "Can I settle if my case is in arbitration?",
      answer: "Yes, arbitration is a dispute resolution mechanism. You can settle the loan even during arbitration. The settlement agreement should serve as the consent terms to close the arbitration proceedings."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqList.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "KrazyBee Settlement Services by CredSettle",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "320"
    },
    "review": [
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Rohan Das" },
        "datePublished": "2025-11-25",
        "reviewBody": "Agents were calling my HR. I was terrified. CredSettle sent a legal notice to stop the harassment instantly. They settled my 50k loan for 22k.",
        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Karthik S." },
        "datePublished": "2025-12-05",
        "reviewBody": "Received an arbitration notice from KrazyBee. I didn't know what to do. The CredSettle legal team handled the hearing and closed the case swiftly.",
        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
      }
    ]
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <Script id="org-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="review-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

      {/* Hero Section */}
      <section 
        className="relative text-white pt-32 pb-20 px-4 md:px-8"
        style={{
          background: 'radial-gradient(136.19% 254.89% at -1.53% 10.35%, #2F6CE2 0%, #001235 100%)',
          minHeight: '60vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <div className="max-w-6xl mx-auto text-center z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight">
            KrazyBee (KreditBee) Loan Settlement<br />
            <span className="text-blue-300">Complete 2026 Guide</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light">
            Stop harassment from recovery agents. Expert legal help to settle your KreditBee/KrazyBee loans and close arbitration cases.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Start Your Settlement
            </Link>
          </div>
        </div>
      </section>

      {/* Client Component content (Breadcrumb & Main Content) */}
      <KrazyBeeLoanSettlementClient />
      
      <Footer />
    </div>
  );
}
