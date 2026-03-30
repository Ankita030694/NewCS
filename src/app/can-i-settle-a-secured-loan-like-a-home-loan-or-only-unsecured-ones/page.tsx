import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import SecuredVsUnsecuredClient from './SecuredVsUnsecuredClient';

export const metadata: Metadata = {
  title: 'Secured vs Unsecured Loan Settlement: SARFAESI & OTS Guide',
  description: 'Can you settle a home loan or car loan in India? Learn how SARFAESI Act 2002 impacts secured debt settlement and how it differs from credit cards.',
  keywords: 'settle secured loan India, home loan settlement SARFAESI, car loan OTS scheme, unsecured vs secured debt settlement, section 13(2) notice settlement, can I settle home loan, debt recovery tribunal settlement',
  alternates: {
    canonical: 'https://www.credsettle.com/can-i-settle-a-secured-loan-like-a-home-loan-or-only-unsecured-ones',
  },
};

export default function SecuredVsUnsecuredPage() {
  const faqData = [
    {
      question: "Is it easier to settle a personal loan or a home loan?",
      answer: "It is much easier to settle a personal loan because there is no collateral for the bank to fall back on. Home loan settlements require more documentation and the waivers are usually smaller."
    },
    {
      question: "Can the bank take my house without going to court?",
      answer: "Yes, under the SARFAESI Act 2002, if you have defaulted and the loan is an NPA, the bank can take possession and auction the property after following the notice procedure, without needing a court order."
    },
    {
      question: "What is the minimum percentage a bank accepts for a home loan settlement?",
      answer: "There is no fixed minimum, but generally, banks look for at least the Principal Amount plus a portion of the interest. In extreme cases of property depreciation, they might accept 70% to 80% of the total outstanding."
    },
    {
      question: "Does the SARFAESI Act apply to agricultural land?",
      answer: "No. Section 31(i) of the SARFAESI Act explicitly excludes agricultural land from being seized. This gives farmers much more leverage in debt negotiations compared to urban home buyers."
    },
    {
      question: "Can I settle a car loan after the repo man has taken the car?",
      answer: "Yes, but you must act quickly before the car is auctioned. You can negotiate an OTS to get the car back, but the bank will include the towing and yard charges in the amount."
    },
    {
      question: "Will a settlement remove the NPA status from my records?",
      answer: "The account will be closed in the bank’s books, but in your CIBIL report, it will be marked as Settled. This is better than an Active Default but still impacts your ability to get future loans for several years."
    },
    {
      question: "What happens if the auction fails to find a buyer?",
      answer: "If the auction fails (no bidders), the bank’s bargaining power decreases. They might then be more willing to accept a lower settlement offer from the borrower because they don’t want to hold onto a Dead Asset."
    },
    {
      question: "Can I use specialized apps for a secured loan settlement?",
      answer: "Yes, specialized apps and legal service providers can help you draft replies to SARFAESI notices and identify procedural errors that give you leverage for a better settlement."
    },
    {
      question: "Is a 50% waiver possible on a home loan?",
      answer: "It is extremely rare. It only happens if the property value has crashed significantly below the loan amount or if there is a severe legal defect in the property titles that makes it impossible for the bank to auction it."
    },
    {
      question: "How long does a secured loan settlement take?",
      answer: "From the first proposal to the final No Dues Certificate, it usually takes 3 to 6 months. This allows for valuations, committee approvals, and the payment window."
    }
  ];

  const reviews = [
    {
      name: "Rajesh Kumar",
      location: "Mumbai",
      rating: 5,
      text: "I was terrified of the SARFAESI notice on my flat. CredSettle helped me understand the 13(2) timeline and managed to negotiate a 25% waiver with my bank. We saved our family home."
    },
    {
      name: "Anjali Gupta",
      location: "Delhi",
      rating: 5,
      text: "Settling a car loan after it was repossessed seemed impossible. The team worked with the bank to waive off the extra yard charges and settled the balance for a reasonable amount. Highly professional."
    },
    {
      name: "Suresh Menon",
      location: "Bangalore",
      rating: 4,
      text: "Very knowledgeable about the OTS policies of PSUs. They identified a technical error in the bank’s valuation which gave us the upper hand in the settlement negotiation."
    },
    {
      name: "Meera Deshmukh",
      location: "Pune",
      rating: 5,
      text: "Transparent and honest. They told me upfront that secured loans get lower discounts than credit cards, but their help with the legal documentation was worth every rupee."
    }
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'Secured vs Unsecured Loan Settlement: SARFAESI & OTS Guide',
    'description': 'Can you settle a home loan or car loan in India? Learn how SARFAESI Act 2002 impacts secured debt settlement.',
    'image': 'https://www.credsettle.com/secured-vs-unsecured-guide.jpg',
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
        'name': 'Secured vs Unsecured Loan Settlement',
        'item': 'https://www.credsettle.com/can-i-settle-a-secured-loan-like-a-home-loan-or-only-unsecured-ones',
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
    'mainEntity': faqData.map(faq => ({
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
    'name': 'Secured Loan Settlement Consultation',
    'aggregateRating': {
        '@type': 'AggregateRating',
        'ratingValue': '4.9',
        'reviewCount': '1280',
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
      <Script
        id="article-schema-secured"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Script
        id="breadcrumb-schema-secured"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="org-schema-secured"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Script
        id="faq-schema-secured"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="product-schema-secured"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <SecuredVsUnsecuredClient />
    </div>
  );
}
