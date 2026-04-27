import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import DigitalLendingClient from './DigitalLendingClient';

export const metadata: Metadata = {
  title: 'Digital Lending: Loan Settlement Requests (2025)',
  description: 'Understand the internal logic of Fintech lenders regarding loan settlements. Learn about RBI 2025 digital lending rules, KFS power, and how to negotiate app-based debt.',
  keywords: 'digital lending settlement, fintech loan settlement, RBI digital lending rules 2025, how to settle app loans, instant loan settlement India, NBFC settlement process, digital debt relief',
  alternates: {
    canonical: 'https://www.credsettle.com/how-do-digital-lending-companies-handle-loan-settlement-requests',
  },
};

export default function DigitalLendingPage() {
  const faqs = [
    {
        question: 'Are digital lending apps required to offer loan settlements?',
        answer: 'A settlement is not a legal right, but a commercial discretion. However, under the RBI Digital Lending Directions 2025, if an account becomes a "Doubtful" asset, the fintech lender is encouraged to offer a compromise (OTS) to avoid a total capital loss.'
    },
    {
        question: 'How do I submit a settlement request to a digital lender?',
        answer: 'The request should be made to the Nodal Grievance Redressal Officer (NGRO) of the Fintech app and copied to the Regulated Entity (the NBFC or Bank funding the loan). Use their official email listed in the Key Fact Statement (KFS).'
    },
    {
        question: 'Can digital lenders charge extra for processing a settlement?',
        answer: 'Under the 2025 rules, no charges other than those explicitly mentioned in the KFS can be levied. If "Settlement Processing Fees" are not in your original KFS, the lender cannot legally charge you for the negotiation.'
    },
    {
        question: 'Who should I contact if a digital app ignores my settlement request?',
        answer: 'If there is no response within 30 days, you can lodge a complaint on the RBI Integrated Ombudsman portal (CMS). Quote the lack of "Responsive Redressal" as a violation of the 2025 Digital Lending guidelines.'
    },
    {
        question: 'Do digital lenders use AI to decide settlement amounts?',
        answer: 'Yes, most fintech firms use "Propensity to Pay" models. If the AI detects that you have other active loans you are paying, they may reject a settlement. This why professional guidance from firms like CredSettle is essential to present your case correctly to their "Internal Logic".'
    },
    {
        question: 'How do I handle "Call Bombing" from automated systems while negotiating?',
        answer: 'Record a few calls, take screenshots of the frequency, and send a formal "Notice of Intrusive Collection" to the app. Quote the RBI 2025 rule that limits recovery communication to 8 AM - 7 PM and prohibits automated "DDoS-style" calling.'
    },
    {
        question: 'Is a settlement offer valid if received via WhatsApp or SMS?',
        answer: 'A digital offer is valid ONLY if it contains a link to the official domain of the lender, features a verifiable QR code, or follows an email from their registered domain. Never pay based on a plain text message or a personal WhatsApp call.'
    },
    {
        question: 'Can I settle a digital loan during the "Cooling-off Period"?',
        answer: 'The Cooling-off Period (minimum 1 day) allows you to exit the loan by paying just the principal and the APR pro-rata. This is the "Easiest" settlement, as it prevents any debt trap before it begins.'
    },
    {
        question: 'Should I pay the settlement amount through the app or directly to the bank?',
        answer: 'The RBI 2025 guidelines mandate that ALL repayments and settlements MUST be made directly into the bank account of the Regulated Entity (NBFC/Bank). Never pay into an LSP (Lending Service Provider) or "App Wallet" for a settlement.'
    },
    {
        question: 'What is the role of AMA Legal Solutions in digital loan disputes?',
        answer: 'AMA Legal Solutions (amalegalsolutions.com) provides specialized defense for digital loan victims, especially in cases where apps use illegal data-harvesting or "Contact List Harassment." They help in filing cyber-crime complaints and securing legal stays on unethical recovery actions.'
    }
  ];

  const reviews = [
    {
        name: "Amit Verma",
        location: "Pune",
        rating: 5,
        text: "Settled my 50k app loan for 22k. Automated calls stopped in 4 days. Professional help for fintech debt is real."
    },
    {
        name: "Priya S.",
        location: "Bangalore",
        rating: 5,
        text: "Navigating the 2025 RBI rules seemed impossible alone. CredSettle handled the NGRO emails and got me a fair deal."
    },
    {
        name: "Kavita R.",
        location: "Delhi",
        rating: 5,
        text: "AMA Legal helped when they harassed my father via WhatsApp. Their legal notice worked overnight. Settlement was a bonus."
    },
    {
        name: "Rahul M.",
        location: "Mumbai",
        rating: 5,
        text: "Cleaned my digital records after settlement. The dashboard is great for tracking progress. Highly recommend."
    }
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'How Digital Lending Companies Handle Loan Settlement Requests',
    'description': 'A tactical guide to settling app-based loans under the latest RBI digital directions.',
    'image': 'https://www.credsettle.com/digital-lending-guide.jpg',
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
        'name': 'Digital Lending Settlements',
        'item': 'https://www.credsettle.com/how-do-digital-lending-companies-handle-loan-settlement-requests',
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
    'name': 'Digital Loan Settlement Guide',
    'aggregateRating': {
        '@type': 'AggregateRating',
        'ratingValue': '4.8',
        'reviewCount': '2500',
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
        id="article-schema-digital"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Script
        id="breadcrumb-schema-digital"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="org-schema-digital"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Script
        id="faq-schema-digital"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="product-schema-digital"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <DigitalLendingClient />
    </div>
  );
}
