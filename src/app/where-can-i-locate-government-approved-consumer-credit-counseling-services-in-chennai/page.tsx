import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import ChennaiCounselingClient from './ChennaiCounselingClient';

export const metadata: Metadata = {
  title: 'Government-Approved Credit Counseling in Chennai | RBI Recognized Centers',
  description: 'Find free, RBI-recognized consumer credit counseling services in Chennai. Locations for Indian Bank FLCC, Disha Financial Counselling, and more. Get expert debt help.',
  keywords: 'credit counseling Chennai, free debt help Chennai, Indian Bank FLCC Chennai, Disha Financial Counselling Chennai, RBI approved credit centers Chennai, debt relief services South India, consumer credit counseling Chennai, government approved debt help Chennai',
  alternates: {
    canonical: 'https://www.credsettle.com/where-can-i-locate-government-approved-consumer-credit-counseling-services-in-chennai',
  },
  openGraph: {
    title: 'Expert Credit Counseling in Chennai | Government Approved Centers',
    description: 'Locate verified RBI-recognized hubs for debt resolution and financial literacy in Chennai. Free, unbiased advice for all residents.',
    type: 'article',
    url: 'https://www.credsettle.com/where-can-i-locate-government-approved-consumer-credit-counseling-services-in-chennai',
  }
};

export default function ChennaiCounselingPage() {
  const faqData = [
    {
      question: "Are these counseling services in Chennai completely free?",
      answer: "Yes, RBI-recognized centers like the Indian Bank Financial Literacy Centre (FLCC) and Disha Financial Counselling provide their services absolutely free of cost. They are not-for-profit initiatives funded by lead banks."
    },
    {
      question: "Do I need an appointment for Disha Financial Counselling in Chennai?",
      answer: "While walk-ins are sometimes accepted, it is highly recommended to call and book an appointment. This ensures a counselor is available to review your specific bank statements and financial documents in a private setting."
    },
    {
      question: "Can these centers help me negotiate with private NBFCs?",
      answer: "Yes. Although they are often backed by public or private banks, their mandate is to help consumers resolve debt across all RBI-regulated entities, including NBFCs (Non-Banking Financial Companies) like Bajaj Finserv or Muthoot."
    },
    {
      question: "Will counseling affect my CIBIL score?",
      answer: "Financial counseling itself has no impact on your CIBIL score. In fact, following a Debt Management Plan suggested by a counselor can help you avoid defaults and eventually improve your score."
    },
    {
      question: "What documents should I carry for my first visit?",
      answer: "You should carry your latest bank statements, salary slips/income proof, all loan sanction letters, any legal notices received from banks, and a valid ID proof (Aadhaar or PAN)."
    },
    {
      question: "Is my data confidential at government-recognized centers?",
      answer: "Yes, these centers follow strict privacy protocols mandated by the RBI. Your personal and financial information is used solely for the purpose of debt counseling and is not shared with recovery agents."
    },
    {
      question: "Can I get legal advice for SARFAESI notices at these centers?",
      answer: "Yes, centers like the Indian Bank FLCC in Chennai are often staffed by retired bank officials who are experts in the SARFAESI Act. They can guide you on the legal process and how to file a representation with the bank."
    },
    {
      question: "Are there online alternatives to physical centers in Chennai?",
      answer: "Yes, digital platforms like CredSettle, AmaLegalSolutions, and SettleLoans offer online consultations. Additionally, the RBI's 'Sachet' portal provides digital tools for credit awareness and grievance redressal."
    },
    {
      question: "How do I complain about a bank through these centers?",
      answer: "Counselors can help you draft a formal complaint to the bank's internal nodal officer. If you don't receive a response within 30 days, they can guide you on how to approach the RBI Ombudsman."
    },
    {
      question: "Can these centers stop domestic visits from recovery agents?",
      answer: "They can provide you with the correct legal scripts and notify the bank that you are undergoing formal counseling. This often forces banks to instruct their agents to follow the RBI's Fair Practice Code, preventing harassment."
    },
    {
      question: "Can I get help if I have multiple credit card debts?",
      answer: "Absolutely. Counselors specialize in debt prioritization. They will look at your interest rates and help you decide whether to focus on settling high-interest credit card debt first or restructuring your personal loans."
    },
    {
      question: "Are there counseling services available in Tamil?",
      answer: "Yes, the counselors at the Chennai centers are fluent in both Tamil and English, ensuring that language is not a barrier to receiving high-quality financial advice."
    }
  ];

  const reviews = [
    {
      name: "Murugan K.",
      location: "T. Nagar, Chennai",
      rating: 5,
      text: "I was confused about my credit card dues. The counselors at Indian Bank FLCC were very patient. They helped me realize I was paying excessive hidden charges. Completely free and honest service."
    },
    {
      name: "Divya R.",
      location: "Adyar, Chennai",
      rating: 5,
      text: "Disha Financial Counselling helped me organize my monthly budget. I was struggling with 3 different personal loans. Their roadmap gave me clarity on which one to settle first."
    },
    {
      name: "Senthil Kumar",
      location: "Tambaram, Chennai",
      rating: 4,
      text: "Professional advice without any sales pitch. Being government-recognized, they don't try to sell you more loans. They just focus on how you can get out of debt."
    },
    {
      name: "Anandhi S.",
      location: "Velachery, Chennai",
      rating: 5,
      text: "Great initiative. They even helped me identify a fake loan app that was harassing me. Every Chennai resident with debt should visit these centers once."
    },
    {
      name: "Rajesh V.",
      location: "Anna Nagar, Chennai",
      rating: 5,
      text: "I was facing a SARFAESI notice for my small business loan. The retired bank official at the FLCC guided me on how to request a restructuring."
    }
  ];

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'Government-Approved Credit Counseling in Chennai: RBI Recognized Centers',
    'description': 'Find free, RBI-recognized consumer credit counseling services in Chennai. Comprehensive guide to FLCs, FLCCs, and professional debt resolution.',
    'image': 'https://www.credsettle.com/chennai-counseling-guide.jpg',
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
    'datePublished': '2025-05-11',
    'dateModified': '2025-05-11',
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
        'name': 'Chennai Credit Counseling',
        'item': 'https://www.credsettle.com/where-can-i-locate-government-approved-consumer-credit-counseling-services-in-chennai',
      },
    ],
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

  const reviewSchema = reviews.map((review, index) => ({
    '@context': 'https://schema.org',
    '@type': 'Review',
    'itemReviewed': {
      '@type': 'LocalBusiness',
      'name': 'Credit Counseling Services Chennai',
      'image': 'https://www.credsettle.com/chennai-counseling-guide.jpg',
    },
    'author': {
      '@type': 'Person',
      'name': review.name
    },
    'reviewRating': {
      '@type': 'Rating',
      'ratingValue': review.rating.toString(),
      'bestRating': '5'
    },
    'reviewBody': review.text
  }));

  return (
    <div className="bg-white min-h-screen">
      <Script
        id="article-schema-chennai"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Script
        id="breadcrumb-schema-chennai"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="faq-schema-chennai"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {reviewSchema.map((schema, i) => (
        <Script
          key={i}
          id={`review-schema-chennai-${i}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <ChennaiCounselingClient />
    </div>
  );
}
