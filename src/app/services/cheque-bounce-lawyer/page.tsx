import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ChequeBounceClient from './ChequeBounceClient';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cheque Bounce Lawyer India: Sect 138 NI Act Consulation',
  description: 'Expert Cheque Bounce Lawyers for Section 138 NI Act cases. Legal defense, notice drafting, and settlement services. Stop criminal action & save your reputation.',
  alternates: {
    canonical: 'https://www.credsettle.com/services/cheque-bounce-lawyer',
  },
  openGraph: {
    title: 'Cheque Bounce Lawyer India: Section 138 Defense Experts',
    description: 'Facing a cheque bounce case? Get expert legal defense for Section 138 NI Act. We handle legal notices, court representation, and settlements.',
    url: 'https://www.credsettle.com/services/cheque-bounce-lawyer',
    type: 'article',
    images: [
      {
        url: 'https://www.credsettle.com/hero-bg.png',
        width: 1200,
        height: 630,
        alt: 'Cheque Bounce Lawyer Services',
      },
    ],
  },
};

export default function ChequeBouncePage() {
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
    "headline": "Cheque Bounce Lawyer India: Section 138 NI Act Guide",
    "description": "Comprehensive guide on Section 138 NI Act, legal defenses for bounced cheques, and the process of filing or defending a cheque bounce case in India.",
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
      "@id": "https://www.credsettle.com/services/cheque-bounce-lawyer"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is a cheque bounce case a criminal offense in India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, under Section 138 of the NI Act, 1881, dishonest dishonour of a cheque is a criminal offense punishable by imprisonment up to 2 years."
        }
      },
      {
        "@type": "Question",
        "name": "Can I settle a cheque bounce case out of court?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, offenses under Section 138 are compoundable, meaning parties can settle the matter at any stage, leading to acquittal."
        }
      },
      {
        "@type": "Question",
        "name": "What is the time limit to file a cheque bounce case?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A legal notice must be sent within 30 days of dishonour. If payment isn’t made in 15 days, a complaint must be filed within the next 30 days (up 3 months per new rules)."
        }
      },
      {
        "@type": "Question",
        "name": "What if I lost the original cheque?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can still proceed by filing an FIR for the lost document and relying on secondary evidence, though having the original is always preferred."
        }
      },
      {
        "@type": "Question",
        "name": "Can notice be sent via WhatsApp?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, courts now recognize digital service of notice via WhatsApp and Email as valid if delivery is proven."
        }
      },
      {
        "@type": "Question",
        "name": "Does the court require me to pay interim compensation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, under Section 143A, courts can order the accused to pay up to 20% of the cheque amount as interim compensation during the trial."
        }
      },
      {
        "@type": "Question",
        "name": "Can a director be held liable for a company cheque?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, directors responsible for the conduct of business at the time of the offense are vicariously liable under Section 141."
        }
      }
    ]
  };

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Cheque Bounce Legal Services",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "542"
    },
    "review": [
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Amit Khanna" },
        "datePublished": "2025-12-05",
        "reviewBody": "CredSettle lawyers helped me quash a false case filed against me. Their knowledge of NI Act is exceptional.",
        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Suresh Gupta" },
        "datePublished": "2026-01-15",
        "reviewBody": "Fast and professional legal notice drafting. Got my money back without going to court.",
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
        "name": "Services",
        "item": "https://www.credsettle.com/services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Cheque Bounce Lawyer",
        "item": "https://www.credsettle.com/services/cheque-bounce-lawyer"
      }
    ]
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <Script
        id="org-schema-cb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Script
        id="article-schema-cb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Script
        id="faq-schema-cb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="review-schema-cb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
      <Script
        id="breadcrumb-schema-cb"
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
            Cheque Bounce Lawyer in India<br />
            <span className="text-blue-200">Legal Defense for Section 138 Cases</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light">
            Expert legal consultation for bounced cheques. We handle Legal Notices, 138 NI Act Complaints, and Out-of-Court Settlements across India.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Consult a Lawyer
            </Link>
          </div>
        </div>
      </section>

      <ChequeBounceClient />
      
      <Footer />
    </div>
  );
}
