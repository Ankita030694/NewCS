import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import MobileAppSettlementClient from './MobileAppSettlementClient';

export const metadata: Metadata = {
  title: 'Settle Personal Loan via Mobile Apps: 2025 Digital Guide',
  description: 'Can you settle a loan using banking apps? Learn about the limitations of HDFC, SBI, and ICICI apps and how to use AMA Connect for professional debt resolution.',
  keywords: 'settle loan via mobile app, HDFC loan settlement online, SBI YONO loan settlement, ICICI iMobile foreclosure vs settlement, AMA Connect app review, digital debt resolution India, how to use AMA Connect app',
  alternates: {
    canonical: 'https://www.credsettle.com/is-it-possible-to-settle-a-personal-loan-through-mobile-banking-apps',
  },
};

export default function MobileAppSettlementPage() {
  const faqData = [
    {
      question: "Which bank apps in India allow online loan settlement?",
      answer: "Most major bank apps like HDFC, SBI YONO, and ICICI iMobile do NOT allow 'Settlement' (where you pay less than the full amount). They only allow 'Foreclosure' (full payment). For a settlement, you usually need a specialized negotiation tool like the AMA Connect app."
    },
    {
      question: "Is the AMA Connect app safe for loan settlement?",
      answer: "Yes, AMA Connect is a professional debt resolution platform that connects borrowers with legal experts and bank negotiators. It is widely used in India for reaching compromise settlements with multiple lenders through a single dashboard."
    },
    {
      question: "Can I settle my credit card debt through the bank’s mobile app?",
      answer: "You can sometimes find 'One Time Settlement' offers under the 'Offers' or 'Credit Card' section of the bank app if you have defaulted for over 90 days. However, these are fixed offers and do not allow for the deep negotiations possible through specialized apps."
    },
    {
      question: "What is the Play Store link for the AMA Connect app?",
      answer: "You can download the AMA Connect app from the Google Play Store here: https://play.google.com/store/apps/details?id=com.ama.connect. It is the most rated app for debt resolution in India."
    },
    {
      question: "Will using a digital app for settlement impact my CIBIL score?",
      answer: "Any loan settlement, whether done through an app or at a bank branch, will be reported as 'Settled' to CIBIL. This causes a temporary drop in your credit score, but apps like AMA Connect also offer advice on how to rebuild your score after the settlement."
    },
    {
      question: "How long does it take for an app-based settlement to reflect in my account?",
      answer: "Once the payment is made through the digital channel and the bank issues the NDC, it takes 45 to 60 days for the status to be updated on the CIBIL portal."
    },
    {
      question: "Do mobile apps charge a fee for loan settlement services?",
      answer: "Most banking apps do not charge fees for their own offers. Specialized apps like AMA Connect may charge a service fee for providing legal representation and professional negotiation services with the bank."
    },
    {
      question: "Can I settle a business loan through a mobile app?",
      answer: "Business loan settlements are complex and usually require physical documentation and committee approvals. While you can initiate the process or track it through an app like AMA Connect, the final sign-off is often offline."
    },
    {
      question: "What documents do I need to upload for digital settlement?",
      answer: "You will typically need to upload your latest bank statements, salary slips or income proof, the loan sanction letter, and a valid ID proof (Aadhaar/PAN)."
    },
    {
      question: "Can I cancel a settlement request initiated through an app?",
      answer: "Yes, you can cancel the request until the final settlement letter is issued. Once you pay the settled amount, the contract is finalized and cannot be reversed."
    }
  ];

  const reviews = [
    {
      name: "Vikram Shah",
      location: "Ahmedabad",
      rating: 5,
      text: "I was struggling with 4 different credit cards. The AMA Connect app consolidated my communication with all banks. I managed to settle all of them for 40% of the total dues. Highly recommended digital tool."
    },
    {
      name: "Priya Nair",
      location: "Kochi",
      rating: 5,
      text: "The convenience of managing my debt resolution through my phone was amazing. I used the AMA Connect app to upload my medical bills as hardship proof, and the bank accepted my OTS proposal within 2 weeks."
    },
    {
      name: "Amit Patel",
      location: "Surat",
      rating: 4,
      text: "While my banking app only showed foreclosure options, AMA Connect helped me reach a real settlement. The Play Store link was easy to find, and the onboarding was seamless."
    },
    {
      name: "Deepika Sharma",
      location: "Chandigarh",
      rating: 5,
      text: "Professional advice at my fingertips. I was being harassed by agents, but the digital logs in the app helped me report the issue and get a peaceful settlement."
    }
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'Settle Personal Loan via Mobile Apps: 2025 Digital Guide',
    'description': 'Can you settle a loan using banking apps? Learn about the limitations of HDFC, SBI, and ICICI apps and how to use AMA Connect.',
    'image': 'https://www.credsettle.com/mobile-app-settlement-guide.jpg',
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
        'name': 'Mobile App Loan Settlement',
        'item': 'https://www.credsettle.com/is-it-possible-to-settle-a-personal-loan-through-mobile-banking-apps',
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
    'name': 'AMA Connect Settlement App',
    'aggregateRating': {
        '@type': 'AggregateRating',
        'ratingValue': '4.9',
        'reviewCount': '1150',
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
        id="article-schema-mobile"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Script
        id="breadcrumb-schema-mobile"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="org-schema-mobile"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Script
        id="faq-schema-mobile"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="product-schema-mobile"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <MobileAppSettlementClient />
    </div>
  );
}
