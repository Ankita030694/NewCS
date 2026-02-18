import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FibeLoanSettlementClient from './FibeLoanSettlementClient';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Fibe (EarlySalary) Loan Settlement | NPA Help',
  description: 'Settle Fibe loan (Social Worth Technologies) with up to 50% waiver. Expert legal help for EarlySalary default, harassment complaints (020-67639797), and NPA settlement.',
  alternates: {
    canonical: 'https://www.credsettle.com/loan-settlement/fibe',
  },
  openGraph: {
    title: 'Fibe Loan Settlement: Save 50% on Dues | Stop Harassment',
    description: 'Struggling with Fibe/EarlySalary (Social Worth Technologies) debt? Our expert legal team helps you settle your personal loan and stop recovery harassment immediately.',
    url: 'https://www.credsettle.com/loan-settlement/fibe',
    type: 'article',
  },
};

export default function FibeLoanSettlementPage() {
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
        "name": "Fibe Loan Settlement",
        "item": "https://www.credsettle.com/loan-settlement/fibe"
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Fibe (EarlySalary) Loan Settlement Process: The Complete 2026 Guide",
    "description": "Comprehensive guide on how to settle Fibe (formerly EarlySalary) personal loans. Learn about the process, benefits, eligibility, and how to stop recovery agent harassment.",
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
      "@id": "https://www.credsettle.com/loan-settlement/fibe"
    }
  };

  const faqList = [
    {
      question: "Can I settle my Fibe (EarlySalary) personal loan if I cannot pay the EMIs?",
      answer: "Yes, if you are facing genuine financial distress and your loan account has become a Non Performing Asset (NPA) due to non payment for over 90 days, you can approach Fibe for a loan settlement. This involves negotiating a one time payment that is lower than your total outstanding dues."
    },
    {
      question: "What is the new name of EarlySalary?",
      answer: "EarlySalary has rebranded itself as 'Fibe'. It is the same company offering personal loans and salary advances, but with a new brand identity. All previous loan agreements with EarlySalary are now managed under the Fibe brand."
    },
    {
      question: "How much discount can I expect in a Fibe loan settlement?",
      answer: "The settlement amount depends on various factors like the age of the default, your verified financial hardship, and your negotiation skills. Typically, borrowers can save anywhere from 30% to 50% on the total outstanding amount. In exceptional cases of severe hardship, the waiver can be higher."
    },
    {
      question: "Will settling my Fibe loan affect my CIBIL score?",
      answer: "Yes, opting for a loan settlement will negatively impact your credit score. The loan account will be marked as 'Settled' in your CIR (Credit Information Report), which indicates that the full amount was not repaid. This can lower your score by 50 to 100 points or more and stay on your report for up to 7 years."
    },
    {
      question: "Does Fibe take legal action against defaulters?",
      answer: "As an NBFC, Fibe has the right to initiate legal proceedings for recovery of dues. This can include sending legal notices, initiating arbitration proceedings, or filing a civil suit. However, they usually prefer to resolve the matter amicably through settlement or restructuring before taking drastic legal steps."
    },
    {
      question: "How do I stop harassment from Fibe recovery agents?",
      answer: "Recovery agents are bound by RBI guidelines which prohibit harassment, abusive language, and calling at odd hours (before 8 AM or after 7 PM). If you are being harassed, you can file a complaint with Fibe's grievance redressal officer. Engaging a legal settlement firm like CredSettle can also help, as we take over the communication and ensure professional conduct."
    },
    {
      question: "What documents do I need for Fibe loan settlement?",
      answer: "You will primarily need your KYC documents (PAN, Aadhaar), loan account statements, and proof of financial hardship. Proof of hardship can include a termination letter from your job, medical records showing critical illness, or bank statements indicating a severe drop in income."
    },
    {
      question: "How long does the Fibe loan settlement process take?",
      answer: "The entire process, from the initial proposal to the final closure, typically takes between 2 to 4 weeks. This timeline can vary based on how quickly the documents are submitted and the speed of the internal approvals at Fibe's end."
    },
    {
      question: "Can I get a loan in the future after settling my Fibe loan?",
      answer: "It will be difficult to get an unsecured loan or credit card from major banks immediately after a settlement. However, you can rebuild your credit score over time (usually 24 to 36 months) by using secured credit cards or gold loans responsibly. Once your score improves typically above 750 you will be eligible for loans again."
    },
    {
      question: "Is CredSettle authorized to negotiate with Fibe on my behalf?",
      answer: "Yes, as your legal representative, CredSettle is fully authorized to communicate and negotiate with lenders on your behalf. We operate within the legal framework of the country to protect your rights and secure the best possible settlement terms for you."
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
    "name": "Fibe Loan Settlement Services by CredSettle",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "850"
    },
    "review": [
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Suhail K." },
        "datePublished": "2025-11-20",
        "reviewBody": "I was stuck with a 2 Lakh loan from Fibe and lost my job. The calls was unbearable. CredSettle team took over and closed it for just 85k. I can finally breathe again.",
        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Anjali D." },
        "datePublished": "2025-12-10",
        "reviewBody": "Excellent service. They are very transparent and professional. They stopped the harassment within 2 days of me signing up. Highly recommended for settlement.",
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
            Fibe Loan Settlement Process<br />
            <span className="text-blue-300">Complete 2026 Guide</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light">
            Expert legal help to settle your Fibe (EarlySalary) Personal Loan debt. Stop harassment and save up to 50% with our RBI compliant settlement process.
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
      <FibeLoanSettlementClient />
      
      <Footer />
    </div>
  );
}
