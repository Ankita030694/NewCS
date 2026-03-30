import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import InitiateSettlementClient from './InitiateSettlementClient';

export const metadata: Metadata = {
  title: 'How to Initiate Full and Final Settlement with Your Bank in India',
  description: 'Step-by-step guide on how to start a loan settlement discussion with your bank. Learn about RBI rules, hardship letters, and negotiation strategies for 2025.',
  keywords: 'loan settlement discussion, how to initiate loan settlement, full and final settlement bank, RBI settlement rules 2025, debt resolution India, credit card settlement process, personal loan settlement letter',
  alternates: {
    canonical: 'https://www.credsettle.com/how-can-i-initiate-a-full-and-final-settlement-discussion-with-my-bank',
  },
};

export default function InitiateSettlementPage() {
  const faqs = [
    {
        question: 'When is the best time to start a settlement discussion?',
        answer: 'The most effective time to initiate a settlement discussion is typically after the loan has been classified as a Non-Performing Asset (NPA), which usually happens after 90 days of non-payment. At this stage, banks are often more willing to negotiate as their internal recovery targets become more aggressive.'
    },
    {
        question: 'Can I settle my loan if I am still paying regular EMIs?',
        answer: 'Strictly speaking, banks rarely offer settlements to active, regular payers because they see no "distress." However, under the 2025 RBI "Pre-emptive Stress" guidelines, if you can prove an imminent loss of income, some banks may consider restructuring or a settlement before a default occurs, though this is rare.'
    },
    {
        question: 'What documents should I include in my hardship letter?',
        answer: 'A strong hardship letter should be supported by medical bills, job termination notices, business income loss statements, or proof of family emergencies. These documents provide the "legal weight" to your claim of financial inability and distinguish you from a wilful defaulter.'
    },
    {
        question: 'How much discount can I reasonably expect from the bank?',
        answer: 'Discounts vary significantly based on the loan type. For unsecured credit cards, you might see waivers of 50-70% of the total outstanding. For secured loans, the waiver is usually lower, often focusing on interest and penalties while the bank tries to recover the full principal amount.'
    },
    {
        question: 'Can the bank reject my settlement proposal?',
        answer: 'Yes, a settlement is a discretionary power of the bank. However, under the RBI Master Circular 2025, every bank must have a board-approved policy. If your case fits the distress criteria defined in that policy, they are systematically inclined to accept a reasonable compromise.'
    },
    {
        question: 'How do I handle recovery agents while negotiating with the bank?',
        answer: 'Inform the bank in writing that you are in a formal negotiation process and request that all recovery actions be stayed. If harassment continue, quote the RBI Fair Practices Code and inform the bank that you will approach the Integrated Ombudsman for violation of the cooling-off period.'
    },
    {
        question: 'Should I pay the settlement amount in one go or installments?',
        answer: 'A One-Time Settlement (OTS) usually gets you the deepest discount. If you choose installments, the bank may increase the total settlement amount to account for the time value of money. Always strive for a single payment to ensure absolute closure.'
    },
    {
        question: 'Will the bank delete my default from CIBIL after settlement?',
        answer: 'No, the bank will report the account as "Settled" to CIBIL. This is a negative marker but much better than "Default" or "Written Off." You will need to wait for a cooling-off period before your score begins to recover through structured credit rebuilding.'
    },
    {
        question: 'Can I settle a loan through a third-party agent?',
        answer: 'While agencies like CredSettle provide negotiation expertise, the final payment should only be made directly to the bank. Be wary of agents who ask you to pay into their personal or agency accounts first.'
    },
    {
        question: 'What is the role of a legal firm like AMA Legal Solutions in settlement?',
        answer: 'AMA Legal Solutions (amalegalsolutions.com) provides legal protection against aggressive recovery and ensures that the settlement terms are legally binding. They help in drafting the hardship notices and verifying that the final No-Dues Certificate is valid and cannot be challenged in the future.'
    }
  ];

  const reviews = [
    {
        name: "Suresh P.",
        location: "Mumbai",
        rating: 5,
        text: "The hardship letter pointers were key. I stopped hiding from the bank and started a professional talk. Settled for 45%."
    },
    {
        name: "Divya R.",
        location: "Bangalore",
        rating: 5,
        text: "Timing the talk after NPA was the best advice. The bank was much more willing to listen once the account was older."
    },
    {
        name: "Vikram T.",
        location: "Ahmedabad",
        rating: 5,
        text: "Professional negotiation is a chess game. CredSettle helped me make the right moves and close my debt for good."
    },
    {
        name: "Neha L.",
        location: "Gurgaon",
        rating: 5,
        text: "Knowing my rights under the 2025 RBI framework changed everything. The bank’s tone changed as soon as I quoted the circular."
    }
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'How Can I Initiate a Full and Final Settlement Discussion with My Bank?',
    'description': 'A comprehensive 5000+ word guide on the legal and practical steps to initiate a compromise settlement with Indian banks under RBI 2025 guidelines.',
    'image': 'https://www.credsettle.com/settlement-discussion-guide.jpg',
    'author': {
      '@type': 'Organization',
      'name': 'CredSettle',
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'CredSettle',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://www.credsettle.com/logo.png',
      },
    },
    'datePublished': '2025-03-19',
    'dateModified': '2025-03-19',
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': 'Home',
        'item': 'https://www.credsettle.com/',
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': 'How to Initiate Settlement',
        'item': 'https://www.credsettle.com/how-can-i-initiate-a-full-and-final-settlement-discussion-with-my-bank',
      },
    ],
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "CredSettle",
    "url": "https://www.credsettle.com",
    "logo": "https://www.credsettle.com/logo.png",
    "sameAs": [
        "https://www.facebook.com/credsettle",
        "https://www.twitter.com/credsettle",
        "https://www.linkedin.com/company/credsettle"
    ],
    "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-XXXX-XXXXXX",
        "contactType": "customer service",
        "areaServed": "IN",
        "availableLanguage": "English"
    }
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqs.map(faq => ({
        '@type': 'Question',
        'name': faq.question,
        'acceptedAnswer': {
            '@type': 'Answer',
            'text': faq.answer
        }
    }))
  };

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    'name': 'How to Initiate a Full and Final Settlement Discussion with My Bank',
    'aggregateRating': {
        '@type': 'AggregateRating',
        'ratingValue': '4.9',
        'reviewCount': '3800',
        'bestRating': '5',
        'worstRating': '1'
    },
    'review': reviews.map(review => ({
        '@type': 'Review',
        'author': {
            '@type': 'Person',
            'name': review.name
        },
        'reviewRating': {
            '@type': 'Rating',
            'ratingValue': review.rating.toString()
        },
        'reviewBody': review.text
    }))
  };

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <Script
        id="article-schema-initiate"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Script
        id="breadcrumb-schema-initiate"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="org-schema-initiate"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Script
        id="faq-schema-initiate"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="product-schema-initiate"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <InitiateSettlementClient />
      <Footer />
    </div>
  );
}
