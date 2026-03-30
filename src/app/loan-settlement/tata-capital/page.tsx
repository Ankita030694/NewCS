import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TataCapitalLoanSettlementClient from './TataCapitalLoanSettlementClient';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Tata Capital Loan Settlement Process 2026 | Guide to OTS & NOC',
  description: 'Complete guide to Tata Capital loan settlement. Learn how to settle personal and business loans, format your settlement letter, and save up to 50% on dues.',
  alternates: {
    canonical: 'https://www.credsettle.com/loan-settlement/tata-capital',
  },
  openGraph: {
    title: 'Tata Capital Loan Settlement: Complete OTS Guide',
    description: 'Struggling with Tata Capital debt? Expert legal help to settle loans, stop harassment, and reduce debt by 50%.',
    url: 'https://www.credsettle.com/loan-settlement/tata-capital',
    type: 'article',
  },
};

export default function TataCapitalLoanSettlementPage() {
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
        "name": "Tata Capital Loan Settlement",
        "item": "https://www.credsettle.com/loan-settlement/tata-capital"
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Tata Capital Loan Settlement Process: The Complete 2026 Guide",
    "description": "Comprehensive guide on how to settle Tata Capital personal and business loans. Learn about the One Time Settlement (OTS) process, eligibility, and legal rights.",
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
      "@id": "https://www.credsettle.com/loan-settlement/tata-capital"
    }
  };

  const faqList = [
    {
      question: "What is the process for Tata Capital personal loan settlement?",
      answer: "The process involves analyzing your financial hardship, submitting a formal settlement proposal to Tata Capital, negotiating for a reduced repayment amount (One Time Settlement), and obtaining a settlement letter. Once the agreed amount is paid, the bank issues a No Dues Certificate. It is crucial to have all terms in writing."
    },
    {
      question: "Does Tata Capital accept settlement for credit cards?",
      answer: "Yes, Tata Capital (and its partnered issuers) accepts settlement for credit card dues if the borrower is in genuine financial distress. The settlement is typically offered on the total outstanding dues including interest and late fees."
    },
    {
      question: "How can I get the Tata Capital loan settlement letter?",
      answer: "The settlement letter is issued by Tata Capital’s collections department after your settlement proposal is approved. It must be on the official letterhead and contain details like the settlement amount, payment due date, and a clause stating that the loan will be closed upon payment."
    },
    {
      question: "What are the RBI guidelines for NBFC loan settlement?",
      answer: "RBI guidelines mandate fair practices. NBFCs like Tata Capital must have a clear grievance redressal mechanism, cannot use abusive harassment tactics for recovery, and must provide a clear One Time Settlement (OTS) scheme for eligible borrowers. They are also required to release original documents within 30 days of closure."
    },
    {
      question: "Will settlement remove 'Written Off' status from CIBIL?",
      answer: "A settlement changes the status from 'Written Off' or 'Default' to 'Settled'. While 'Settled' is still a negative remark indicating partial payment, it stops the monthly reporting of 'Overdue' status and allows you to start rebuilding your credit score sooner."
    },
    {
      question: "Who is the Grievance Redressal Officer for Tata Capital?",
      answer: "For retail loans, the Level 2 Grievance Redressal Officer is Ms. Francyna Dias. If unresolved, you can escalate to the Principal Nodal Officer, Ms. Sona S. Gaharwar. Emails are available on the Tata Capital website or in our detailed guide above."
    },
    {
      question: "Can I do a settlement if I have a co-applicant?",
      answer: "Yes, but both the primary applicant and the co-applicant must agree to the settlement terms. The impact on CIBIL score will apply to both applicants."
    },
    {
      question: "How much can I save in a Tata Capital OTS?",
      answer: "Savings typically range from 30% to 50% of the total outstanding amount. In cases of severe hardship (like critical illness or long-term unemployment) or very old NPAs, the waiver can sometimes be higher."
    },
    {
      question: "Is it safe to use a third-party settlement company?",
      answer: "Yes, provided they are legitimate. A professional company like CredSettle ensures that you are protected from harassment, that the negotiation is handled legally, and that the final settlement letter is authentic and binding."
    },
    {
      question: "Does Tata Capital initiate legal action for non-payment?",
      answer: "Yes, as an NBFC, they can initiate arbitration proceedings or file cases under Section 25 of the Payment and Settlement Systems Act for bounced NACH mandates. Initiating a settlement dialogue is the best way to pause or resolve these legal actions."
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
    "name": "Tata Capital Settlement Services by CredSettle",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "412"
    },
    "review": [
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Manish Verma" },
        "datePublished": "2025-11-20",
        "reviewBody": "My business took a hit and I defaulted on a 15 Lakh Tata Capital loan. The arbitration notice scared me. CredSettle took over, attended the hearings, and settled it for 7 Lakhs. Highly professional.",
        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Sneha R." },
        "datePublished": "2025-12-10",
        "reviewBody": "I was being harassed daily by agents. After signing up with CredSettle, the calls stopped within 48 hours. I settled my personal loan and finally have peace of mind.",
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
            Tata Capital Loan Settlement<br />
            <span className="text-blue-300">Complete 2026 Guide</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light">
            Expert legal help to settle your Tata Capital Personal & Business Loans. Stop harassment, legal notices, and save up to 50% on outstanding dues.
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
      <TataCapitalLoanSettlementClient />
      
      <Footer />
    </div>
  );
}
