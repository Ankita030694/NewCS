import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import KarnatakaLoanSettlementClient from './KarnatakaLoanSettlementClient';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Loan Settlement in Karnataka: Legal Process, Lok Adalat & Guidelines',
  description: 'Struggling with debt in Bengaluru or Karnataka? Learn how to legally settle loans in Karnataka. Stop harassment, save up to 50% & avoid legal action.',
  alternates: {
    canonical: 'https://www.credsettle.com/loan-settlement/karnataka',
  },
  openGraph: {
    title: 'Loan Settlement Services in Karnataka | Bengaluru Debt Relief',
    description: 'Expert legal guide for loan settlement in Karnataka. Covers Lok Adalat process, anti-harassment laws in Bengaluru, and police protection.',
    url: 'https://www.credsettle.com/loan-settlement/karnataka',
    type: 'article',
    images: [
      {
        url: 'https://www.credsettle.com/hero-bg.png',
        width: 1200,
        height: 630,
        alt: 'Loan Settlement Services in Karnataka',
      },
    ],
  },
};

export default function KarnatakaLoanSettlementPage() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "CredSettle",
    "url": "https://www.credsettle.com",
    "logo": "https://www.credsettle.com/credsettle-logo.svg",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-8800226635",
      "contactType": "customer service",
      "areaServed": "IN"
    }
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Karnataka Loan Settlement Guide: Legal Process & Lok Adalat",
    "description": "Comprehensive guide on how to settle personal loans and credit cards in Karnataka using legal channels like Lok Adalat. Learn about borrower rights and anti-harassment laws.",
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
    "datePublished": "2026-01-22",
    "dateModified": "2026-01-22",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.credsettle.com/loan-settlement/karnataka"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is loan settlement legal in Karnataka?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, loan settlement is a completely legal and regulated financial process in Karnataka, just as it is across the rest of India. It operates under the framework of the Indian Contract Act and RBI guidelines."
        }
      },
      {
        "@type": "Question",
        "name": "Can I settle my personal loan in Bengaluru?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. Whether you are in Bengaluru, Mysore, Hubli, or Mangalore, you can settle unsecured personal loans if you are facing genuine financial hardship."
        }
      },
      {
        "@type": "Question",
        "name": "How does the Karnataka Prohibition of Charging Exorbitant Interest Act help me?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "This state-specific Act specifically safeguards borrowers from illegal moneylenders who charge extremely high interest rates, offering a layer of protection against harassment."
        }
      },
      {
        "@type": "Question",
        "name": "Will the police in Karnataka help if recovery agents harass me?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. The Karnataka Police are usually supportive if you are being threatened or harassed. You can file a complaint against aggressive recovery agents who violate RBI guidelines."
        }
      },
      {
        "@type": "Question",
        "name": "What is the role of Lok Adalat in Karnataka loan settlement?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Karnataka State Legal Services Authority (KSLSA) organizes Lok Adalats which are effective forums for settling loan disputes amicably. Settlements reached here are final and binding."
        }
      },
      {
        "@type": "Question",
        "name": "Does settling a loan affect my CIBIL score?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, settlement will be reported to credit bureaus as 'Settled', which can initially lower your score. However, this is often a better long-term strategy than default, and you can rebuild your score."
        }
      },
      {
        "@type": "Question",
        "name": "Can I settle credit card dues in Karnataka?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, credit card debts are among the most common types of unsecured debts settled in Karnataka. Banks often prefer a one-time settlement."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need a lawyer for loan settlement?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "While not mandatory, having a specialized lawyer or settlement company like CredSettle significantly empowers you to negotiate better terms and stop harassment."
        }
      },
      {
        "@type": "Question",
        "name": "How long does the process take in Karnataka?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The timeline typically ranges from a few weeks to a few months, depending on your specific bank and the negotiation complexity."
        }
      },
      {
        "@type": "Question",
        "name": "What if I have received a legal notice from the court?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Do not ignore it. Contact us immediately. We can review the notice and represent you to steer the matter towards an out-of-court settlement or Lok Adalat resolution."
        }
      }
    ]
  };

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Loan Settlement Services Karnataka",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "980"
    },
    "review": [
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Rajesh Kumar" },
        "datePublished": "2025-12-05",
        "reviewBody": "Excellent service in Bangalore. They settled my HDFC personal loan within 3 months. Saved me a lot of stress.",
        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Deepa Gowda" },
        "datePublished": "2026-01-15",
        "reviewBody": "Very professional advice on how to handle harassment. The team is knowledgeable about Karnataka laws/Lok Adalat.",
        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
      }
    ]
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
        "name": "Karnataka",
        "item": "https://www.credsettle.com/loan-settlement/karnataka"
      }
    ]
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <Script
        id="org-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="review-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <section 
        className="relative text-white pt-32 pb-20 px-4 md:px-8"
        style={{
          background: 'linear-gradient(168deg, #007AFF 0%, #0C2756 100%)',
          minHeight: '60vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <div className="max-w-6xl mx-auto text-center z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight">
            Karnataka Loan Settlement Services<br />
            <span className="text-blue-200">Legal Debt Relief in Bengaluru & Beyond</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light">
            Stop harassment and settle your personal loans & credit cards legally. Expert support for Lok Adalat settlements and DRT cases in Karnataka.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Check Eligibility Free
            </Link>
          </div>
        </div>
      </section>

      <KarnatakaLoanSettlementClient />
      
      <Footer />
    </div>
  );
}
