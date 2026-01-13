import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import KotakLoanSettlementClient from './KotakLoanSettlementClient';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Kotak Loan Settlement Process 2026 | Settle Kotak Credit Card & Loan',
  description: 'Complete guide to Kotak Mahindra Bank loan settlement. Learn how to settle Kotak personal loans and credit cards with up to 50% waiver. Stop harassment today.',
  alternates: {
    canonical: 'https://www.credsettle.com/loan-settlement/kotak',
  },
  openGraph: {
    title: 'Kotak Loan Settlement: Save up to 50% on Dues',
    description: 'Struggling with Kotak debt? Our expert legal team helps you settle Kotak loans and credit cards. Stop harassment and become debt-free.',
    url: 'https://www.credsettle.com/loan-settlement/kotak',
    type: 'article',
  },
};

export default function KotakLoanSettlementPage() {
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
        "name": "Kotak Loan Settlement",
        "item": "https://www.credsettle.com/loan-settlement/kotak"
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Kotak Mahindra Bank Loan Settlement Process: The 2026 Guide",
    "description": "Comprehensive guide on how to settle Kotak Mahindra Bank personal loans and credit cards. Learn about the process, benefits, and how to stop recovery agent harassment.",
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
      "@id": "https://www.credsettle.com/loan-settlement/kotak"
    }
  };

  const faqList = [
    {
      question: "What is the Kotak loan settlement process?",
      answer: "The Kotak loan settlement process, often called One-Time Settlement (OTS), allows borrowers to pay a reduced lump sum amount to close their loan account. This is typically available for unsecured loans like personal loans and credit cards when the borrower is unable to repay the full amount due to financial hardship."
    },
    {
      question: "Can I settle my Kotak credit card dues?",
      answer: "Yes, Kotak credit card dues can be settled. If you have defaulted on payments for over 90 days and your account is classified as NPA, you can approach the bank for a settlement to clear the debt at a reduced value."
    },
    {
      question: "How much discount can I get in Kotak loan settlement?",
      answer: "Settlement discounts vary based on individual cases, but borrowers can typically save between 30% to 50% on the total outstanding principal and interest. In some severe hardship cases, waivers can be even higher."
    },
    {
      question: "Will settling my Kotak loan affect my CIBIL score?",
      answer: "Yes, a settlement is reported to credit bureaus as 'Settled', which negatively impacts your CIBIL score compared to a 'Closed' status. However, it is better than a 'Written Off' status or continuing to be in default."
    },
    {
      question: "How do I get a foreclosure letter from Kotak after settlement?",
      answer: "After paying the agreed settlement amount, Kotak Mahindra Bank will issue a 'No Dues Certificate' or settlement closure letter. This documents that your liability is extinguished. Ensure you receive this to avoid future claims."
    },
    {
      question: "Is it possible to settle a Kotak personal loan?",
      answer: "Yes, unsecured personal loans from Kotak Mahindra Bank are eligible for settlement if you can prove genuine financial distress, such as job loss or medical emergency."
    },
    {
      question: "How long does the Kotak settlement process take?",
      answer: "The process usually takes 2-4 weeks, depending on the speed of negotiations and internal approvals at the bank. Having a professional negotiator can expedite this."
    },
    {
      question: "Can Kotak Bank take legal action for non-payment?",
      answer: "Banks have the right to initiate legal proceedings for recovery. However, engaging in a settlement discussion shows intent to resolve the debt, often putting legal actions on hold."
    },
    {
      question: "Do I need a lawyer for Kotak loan settlement?",
      answer: "It is highly recommended to have legal representation or a professional settlement firm like CredSettle. We handle harassment from agents and ensure the settlement terms are legally sound and in your best interest."
    },
    {
      question: "What documents are required for Kotak loan settlement?",
      answer: "You typically need your loan statements, KYC documents, and proof of financial hardship (like a termination letter or medical records) to support your settlement request."
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
    "name": "Kotak Loan Settlement Services by CredSettle",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "850"
    },
    "review": [
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Suresh Reddy" },
        "datePublished": "2025-10-20",
        "reviewBody": "CredSettle helped me negotiate with Kotak for my personal loan. I settled for 40% of the outstanding amount. Very professional team.",
        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Meera Patel" },
        "datePublished": "2025-11-12",
        "reviewBody": "My credit card debt was spiraling. The harassment from agents was unbearable. CredSettle stopped the calls and settled my dues smoothly.",
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

      {/* Hero Section - Same gradient as requested, no grid */}
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
            Kotak Loan Settlement Process<br />
            <span className="text-blue-300">Complete 2026 Guide</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light">
            Expert legal help to settle your Kotak Personal Loan & Credit Card debt. Stop harassment and save up to 50% with our RBI compliant settlement process.
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
      <KotakLoanSettlementClient />
      
      <Footer />
    </div>
  );
}
