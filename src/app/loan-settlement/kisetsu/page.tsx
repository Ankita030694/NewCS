import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import KisetsuLoanSettlementClient from './KisetsuLoanSettlementClient';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Kisetsu Saison Finance Loan Settlement | Privo App & Credit Saison OTS',
  description: 'Complete guide to Kisetsu Saison Finance (Credit Saison) & Privo App loan settlement. Download NOC, find customer care email, and stop harassment. Save 50%.',
  alternates: {
    canonical: 'https://www.credsettle.com/loan-settlement/kisetsu',
  },
  openGraph: {
    title: 'Kisetsu Saison Finance Settlement: Privo App & Credit Saison Guide',
    description: 'Struggling with Credit Saison or Privo App debt? Legal experts help you settle loans, get NOC, and stop harassment. Read now.',
    url: 'https://www.credsettle.com/loan-settlement/kisetsu',
    type: 'article',
  },
};

export default function KisetsuLoanSettlementPage() {
  // Schema Data
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
        "name": "Kisetsu Saison Finance Settlement",
        "item": "https://www.credsettle.com/loan-settlement/kisetsu"
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Kisetsu Saison Finance Loan Settlement Process: Complete Guide",
    "description": "Comprehensive guide on how to settle Kisetsu Saison Finance (Credit Saison) loans. Learn about the OTS process, benefits, and legal protection.",
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
      "@id": "https://www.credsettle.com/loan-settlement/kisetsu"
    }
  };

  const faqList = [
    {
      question: "What is Kisetsu Saison Finance Settlement?",
      answer: "Kisetsu Saison Finance settlement, or OTS (One Time Settlement), is a mutual agreement where you pay a reduced lump sum amount to close your loan account effectively. This option is typically available for borrowers who are unable to repay their full dues because of genuine financial hardship."
    },
    {
      question: "Will settling my loan affect my CIBIL score?",
      answer: "Yes, opting for a settlement will negatively impact your credit score. Your account will be marked as 'Settled' rather than 'Closed', which indicates to future lenders that the full amount was not repaid. However, this is often a necessary step to become debt-free and stop mounting interest."
    },
    {
      question: "Can I settle my loan if legal action has already started?",
      answer: "Yes, settlement is possible even during legal proceedings. In fact, many cases under Section 138 or arbitration are resolved through settlement agreements. It is advisable to have legal representation to ensure the terms are favorable and the legal cases are withdrawn concurrently."
    },
    {
      question: "How much discount can I expect on my outstanding dues?",
      answer: "The discount varies based on several factors including the age of the default, your financial situation, and the bank's policies. Typically, waivers range from 30% to 50% or more on the total outstanding, primarily targeting the removal of penal interest and other charges."
    },
    {
      question: "How long does the settlement process take?",
      answer: "The entire process, from initial analysis to receiving the settlement letter, usually takes between 2 to 4 weeks. This timeline can vary depending on the complexity of the case and the speed of negotiations."
    },
    {
      question: "What documents do I need for settlement?",
      answer: "You will primarily need your KYC documents, recent loan statements, and proof of financial hardship (like a termination letter, medical records, or bank statements showing low funds). These help in building a strong case for a waiver."
    },
    {
      question: "Are there any hidden costs in hiring a settlement expert?",
      answer: "Transparent firms like CredSettle have a clear fee structure usually based on success or a percentage of savings. Always clarify the fees upfront. Direct dealing with the bank has no 'fee' but often results in a higher settlement amount due to lack of negotiation leverage."
    },
    {
      question: "What is a 'No Dues Certificate'?",
      answer: "A 'No Dues Certificate' (NDC) is a formal document issued by the lender after you have paid the agreed settlement amount. It serves as proof that the loan is fully closed and the lender has no further claims against you. Never consider a settlement complete without this document."
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
    "name": "Kisetsu Saison Finance Settlement Services by CredSettle",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.7",
      "reviewCount": "420"
    },
    "review": [
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Rohan D." },
        "datePublished": "2025-12-10",
        "reviewBody": "I had a Credit Saison loan that I couldn't pay after my shop closed. CredSettle stopped the constant calls and closed the specific loan for 45% of the value.",
        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Sneha P." },
        "datePublished": "2025-11-22",
        "reviewBody": "The legal team dealt with the arbitration notice I received. I didn't have to go to court. Highly relieved.",
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
            Kisetsu Saison Finance Loan Settlement<br />
            <span className="text-blue-300">Complete OTS Process Guide</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light">
            Expert legal help to settle your Credit Saison (Kisetsu) Personal Business Loans. Stop harassment and resolve debt with our RBI compliant settlement process.
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
      <KisetsuLoanSettlementClient />
      
      <Footer />
    </div>
  );
}
