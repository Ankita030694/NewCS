import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BajajFinservLoanSettlementClient from './BajajFinservLoanSettlementClient';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Bajaj Finserv Loan Settlement Policy 2026 | Settle Personal Loan & EMI',
  description: 'Expert guide on Bajaj Finserv loan settlement. Learn how to settle Bajaj Finserv personal loan and EMI dues with up to 50% waiver. Stop harassment and get legal protection.',
  alternates: {
    canonical: 'https://www.credsettle.com/loan-settlement/bajaj-finserv',
  },
  openGraph: {
    title: 'Bajaj Finserv Loan Settlement Process: Save 50% on Dues',
    description: 'Struggling with Bajaj Finserv debt? Our expert legal team helps you settle Bajaj Finserv loans and EMIs. Stop harassment today.',
    url: 'https://www.credsettle.com/loan-settlement/bajaj-finserv',
    type: 'article',
  },
};

export default function BajajFinservLoanSettlementPage() {
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
        "name": "Bajaj Finserv Loan Settlement",
        "item": "https://www.credsettle.com/loan-settlement/bajaj-finserv"
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Bajaj Finserv Loan Settlement Process: The Complete 2026 Guide",
    "description": "Comprehensive guide on how to settle Bajaj Finserv personal loans and EMIs. Learn about the process, benefits, and how to stop recovery agent harassment.",
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
      "@id": "https://www.credsettle.com/loan-settlement/bajaj-finserv"
    }
  };

  const faqList = [
    {
      question: "What is the Bajaj Finserv loan settlement process?",
      answer: "The Bajaj Finserv loan settlement process involves negotiating with the lender to pay a one-time reduced amount to close your loan account. This is typically an option when you are unable to pay the full EMI due to financial hardship. The process includes submitting a settlement request, financial evaluation by Bajaj Finserv, and issuance of a settlement letter upon agreement."
    },
    {
      question: "Can I settle my Bajaj Finserv EMI card dues?",
      answer: "Yes, you can settle Bajaj Finserv EMI card dues. If you have been unable to pay your minimum dues for over 90 days and your account is classified as NPA, you can approach the lender for a One Time Settlement (OTS) to clear the debt at a reduced value."
    },
    {
      question: "How much discount can I get in Bajaj Finserv loan settlement?",
      answer: "The discount in Bajaj Finserv loan settlement varies based on your financial condition and the age of the default. Typically, borrowers can save anywhere between 30% to 50% on the total outstanding principal and interest, though exceptional cases may see higher waivers."
    },
    {
      question: "Will settling my Bajaj Finserv loan affect my CIBIL score?",
      answer: "Yes, settling a loan will impact your CIBIL score. The account status will be reported as 'Settled' rather than 'Closed', which indicates to future lenders that the full amount was not repaid. However, this is often better than a 'Written Off' status or continuing default."
    },
    {
      question: "How do I get a foreclosure letter after settlement?",
      answer: "Once you pay the agreed settlement amount, Bajaj Finserv will issue a 'No Dues Certificate' or a settlement closure letter. This document serves as proof that your liability towards the loan is extinguished."
    },
    {
      question: "Can Bajaj Finserv file a legal case against me for non-payment?",
      answer: "Lenders have the right to initiate legal proceedings like arbitration or filing a civil suit for recovery of dues. However, initiating a settlement dialogue often puts these legal actions on hold as both parties work towards a mutual resolution."
    },
    {
      question: "Do I need a lawyer for Bajaj Finserv loan settlement?",
      answer: "While not mandatory, having a legal expert or a settlement company like CredSettle represents you ensures that you are not bullied by recovery agents. We handle the negotiations to get you the best possible deal and ensure all documentation is legally sound."
    },
    {
      question: "What is the minimum amount Bajaj Finserv will accept for settlement?",
      answer: "There is no fixed minimum rule, as it is case specific. However, lenders generally try to recover at least the principal amount. In cases of severe hardship, they may accept a lower percentage of the principal."
    },
    {
      question: "How long does the Bajaj Finserv settlement process take?",
      answer: "The process can take anywhere from a few weeks to a couple of months, depending on the complexity of the case, the amount due, and the speed of negotiations between you (or your representative) and the lender officials."
    },
    {
      question: "Does Bajaj Finserv offer settlement for personal loans?",
      answer: "Yes, Bajaj Finserv personal loan settlement is possible if you can demonstrate genuine financial inability to repay the full loan amount due to job loss, medical emergencies, or business failure."
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
    "name": "Bajaj Finserv Loan Settlement Services by CredSettle",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.7",
      "reviewCount": "980"
    },
    "review": [
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Vikram Singh" },
        "datePublished": "2025-10-20",
        "reviewBody": "My Bajaj Finserv personal loan was becoming a burden. CredSettle helped me settle it for 40% of the value. Professional service.",
        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Meera K." },
        "datePublished": "2025-11-12",
        "reviewBody": "Recovery agents were harassment. The legal team at CredSettle stopped the calls within 48 hours and closed my EMI card dues.",
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
            Bajaj Finserv Loan Settlement<br />
            <span className="text-blue-300">Complete 2026 Guide</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light">
            Expert legal help to settle your Bajaj Finserv Personal Loan & EMI Card debt. Stop harassment and save up to 50% with our RBI compliant settlement process.
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
      <BajajFinservLoanSettlementClient />
      
      <Footer />
    </div>
  );
}
