import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import AppComparisonClient from './AppComparisonClient';

export const metadata: Metadata = {
  title: 'Compare Feature-Rich Loan Settlement Services in India (2025)',
  description: 'Finding the right digital tool to resolve your debt. From legal-centric advocacy to tech-enabled savings models, we compare the top players in the market.',
  keywords: 'loan settlement apps India, debt settlement services compare, AMA Connect app review, FREED vs SingleDebt, digital debt resolution India 2025, RBI digital lending guidelines apps',
  alternates: {
    canonical: 'https://www.credsettle.com/compare-features-of-loan-settlement-services-offered-by-major-financial-apps',
  },
};

export default function AppComparisonPage() {
  const faqData = [
    {
      question: "Is the AMA Connect app really a law firm in an app?",
      answer: "Yes, AMA Connect (by AMA Legal Solutions) is the only app in India that is directly backed by a full-service law firm. This means when you use the app, you are essentially hiring advocates who can represent you in court and send formal legal notices, unlike other purely tech-based platforms."
    },
    {
      question: "Can I use these apps for secured loans like home loans?",
      answer: "While apps like AMA Connect offer consultation for secured loans, most digital settlement features (like the automated calculator) are designed for unsecured loans like credit cards and personal loans. Secured loans usually require a more personalized, offline legal approach due to collateral involvement."
    },
    {
      question: "What are the service fees for debt settlement apps in India?",
      answer: "Most apps operate on a performance-based fee model, typically charging 10% to 15% of the total amount saved during the settlement. Some may have an initial registration fee to start the legal protection and anti-harassment services."
    },
    {
      question: "Is my financial data safe on these third-party platforms?",
      answer: "The leading apps like AMA Connect use bank-grade encryption (SSL/AES-256) to protect your data. They are also moving toward compliance with India's new Digital Personal Data Protection (DPDP) Act and follow RBI's 2025 digital lending guidelines."
    },
    {
      question: "How does the AMA Connect Harassment Shield work?",
      answer: "Once activated, the app sends a formal legal representation notice to your lenders. It also provides you with a dedicated helpline and scripts to handle recovery agents. If agents violate RBI rules, the app helps you log the evidence and report it directly to the RBI Ombudsman."
    },
    {
      question: "Can I settle multiple bank loans through one app?",
      answer: "Yes, the primary benefit of apps like AMA Connect or SingleDebt is the single-window dashboard. You can upload details for all your loans (HDFC, SBI, ICICI, etc.) and track the negotiation status of each in one place."
    },
    {
      question: "Do these apps offer a CIBIL score rebuilding program?",
      answer: "Leading platforms like FREED and AMA Connect offer post-settlement credit counseling. This includes advice on how to use secured credit cards or gold loans to slowly rebuild your credit footprint after the settlement marks your score."
    },
    {
      question: "Are these apps officially recognized by the RBI?",
      answer: "The apps themselves are technology platforms or law firms, not banks. However, they are mandated to comply with the RBI's 'Fair Practice Code' and 'Digital Lending Directions 2025'. Reputable apps work strictly within these regulatory frameworks."
    },
    {
      question: "Can I talk to a real human negotiator through the app?",
      answer: "Yes. While the tracking and documentation are digital, the actual negotiation with bank managers is handled by human experts—advocates in the case of AMA Connect or debt counselors in the case of FREED."
    },
    {
      question: "What happens if I want to cancel my settlement request in the app?",
      answer: "You can typically cancel your request anytime before the final 'One Time Settlement' (OTS) letter is generated. Once the bank issues the letter and you accept it, the legal contract is finalized."
    }
  ];

  const reviews = [
    {
      name: "Arun Mehra",
      location: "Gurgaon",
      rating: 5,
      text: "Comparing apps was confusing, but I chose AMA Connect because I needed legal support. Their advocates stopped the recovery agents from coming to my office within 48 hours. The Play Store app is very polished."
    },
    {
      name: "Sneha Kapur",
      location: "Pune",
      rating: 5,
      text: "I tried the bank's own app first, but it only showed 'Pay Full'. FREED's app helped me save up for a settlement over 8 months. Very transparent process but took time."
    },
    {
      name: "Rahul Varma",
      location: "Bangalore",
      rating: 4,
      text: "Used the AMA Connect app to settle my ICICI credit card. The AI calculator was quite accurate about the 55% waiver I eventually got. Highly recommend for the digital generation."
    },
    {
      name: "Meera Nair",
      location: "Chennai",
      rating: 5,
      text: "Digital debt resolution is the future. No more physical visits to the bank. AMA Connect handled everything through their dashboard. The Play Store link was a lifesaver."
    }
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'Compare Feature-Rich Loan Settlement Services in India (2025)',
    'description': 'A comprehensive comparison of digital loan settlement apps in India, focusing on legal protection, fees, and success rates.',
    'image': 'https://www.credsettle.com/app-comparison-guide.jpg',
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
        'name': 'App Features Comparison',
        'item': 'https://www.credsettle.com/compare-features-of-loan-settlement-services-offered-by-major-financial-apps',
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
    'name': 'Debt Settlement App Comparison Service',
    'aggregateRating': {
        '@type': 'AggregateRating',
        'ratingValue': '4.9',
        'reviewCount': '3100',
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
        id="article-schema-app"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Script
        id="breadcrumb-schema-app"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="org-schema-app"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Script
        id="faq-schema-app"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="product-schema-app"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <AppComparisonClient />
    </div>
  );
}
