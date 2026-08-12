import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import KyaMaiApnaLoanSettleKrSktaHuClient from './KyaMaiApnaLoanSettleKrSktaHuClient';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Kya Mai Apna Loan Settle Kr Skta Hu?',
  description: 'Wondering kya mai apna loan settle kr skta hu? Learn about unsecured loan settlement, RBI rules, the step by step process, and CIBIL impact.',
  keywords: [
    'kya mai apna loan settle kr skta hu',
    'loan settlement in india',
    'personal loan settlement',
    'credit card settlement',
    'how to settle a loan',
    'loan settlement process',
    'CIBIL score after settlement'
  ],
  openGraph: {
    title: 'Kya Mai Apna Loan Settle Kr Skta Hu? (Complete Guide)',
    description: 'Wondering kya mai apna loan settle kr skta hu? Learn about unsecured loan settlement, RBI rules, the step by step process, and CIBIL impact.',
    type: 'article',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://www.credsettle.com/kya-mai-apna-loan-settle-kr-skta-hu'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kya Mai Apna Loan Settle Kr Skta Hu?',
    description: 'Wondering kya mai apna loan settle kr skta hu? Learn about unsecured loan settlement, RBI rules, the step by step process, and CIBIL impact.'
  },
  alternates: {
    canonical: 'https://www.credsettle.com/kya-mai-apna-loan-settle-kr-skta-hu'
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function KyaMaiApnaLoanSettleKrSktaHuPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'Kya Mai Apna Loan Settle Kr Skta Hu?',
    'description': 'Wondering kya mai apna loan settle kr skta hu? Learn about unsecured loan settlement, RBI rules, the step by step process, and CIBIL impact.',
    'author': {
      '@type': 'Person',
      'name': 'Aditya Singhal',
      'image': 'https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg'
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'CredSettle',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://www.credsettle.com/credsettle-logo.svg'
      }
    },
    'datePublished': '2026-07-08',
    'dateModified': '2026-07-08',
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': 'https://www.credsettle.com/kya-mai-apna-loan-settle-kr-skta-hu'
    }
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'Kya mai bina lawyer ke apna loan settle kr skta hu?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Yes, aap bina lawyer ke directly bank ke nodal officer se contact karke apna loan settle kar sakte hain. However, jab bank legal notice bhejta hai ya recovery agents harass karte hain, tab professional debt settlement expert ki madad lena behtar hota hai taaki aap kam se kam amount me settlement kar saken.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Settlement ke baad kya mujhe dobara loan mil sakta hai?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Loan settlement aapke CIBIL score ko kafi gira deta hai aur aapki credit report par Settled likha aata hai. Iske baad aam taur par 3 se 7 saal tak naya unsecured loan milna bahut mushkil hota hai. Aap secured loan ya FD backed credit card le kar apna CIBIL dreere dreere theek kar sakte hain.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Kya loan settlement ke liye bank 80% tak maaf kar sakta hai?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Rare cases me jab defaulter ke paas bilkul paisa nahi hota aur account bahut purana NPA ban chuka hota hai, toh bank 80% ya usse zyada late fees aur interest maaf kar sakta hai. Par yeh sirf tab hota hai jab aap apni hardship ko documents (like medical bills or termination letter) ke sath prove karein.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Agar mai settlement nahi karta toh kya mujhe jail ho sakti hai?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Nahi. Credit card ya personal loan default karna ek civil matter hai. Loan nahi chukana koi criminal offence nahi hai aur iske liye jail nahi hoti, unless aane cheque bounce fraud (Section 138) kiya ho.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Kya settlement ke amount ko EMI me diya ja sakta hai?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Usually bank One Time Settlement (OTS) cash lump sum me maangte hain. Par agar negotiation achhi ho, toh bank settlement amount ko 3 se 6 EMI me pay karne ka option bhi de dete hain. Iske liye strong negotiation skills chahiye.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Fake settlement agency ko kaise pehchane?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Agar koi agency aapko 100% guarantee deti hai, aapse bahut bada advance payment maangti hai bina kisi written agreement ke, ya aapko bank ko directly pay karne ke bajaye unke account me paise daalne ko kehti hai, toh woh red flags hain.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Credit card aur personal loan me kiska settlement aasan hai?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Credit card ka settlement personal loan ke comparison me thoda aasan hota hai kyunki credit card ka interest rate bahut high hota hai aur overdue account tezi se badhta hai. Dono hi unsecured hain, isliye dono ka settlement kiya ja sakta hai.'
        }
      }
    ]
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': 'Home',
        'item': 'https://www.credsettle.com'
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': 'Kya Mai Apna Loan Settle Kr Skta Hu?',
        'item': 'https://www.credsettle.com/kya-mai-apna-loan-settle-kr-skta-hu'
      }
    ]
  };

  const reviewSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    'name': 'Loan Settlement Assessment and Negotiation Service',
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': '4.9',
      'reviewCount': '3',
      'bestRating': '5',
      'worstRating': '1'
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight leading-tight">
            Kya Mai Apna Loan Settle Kr Skta Hu?
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            Stop worrying about recovery agents. Learn the formal banking procedures to settle your unpaid loans safely and legally.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Get Settlement Assistance
            </Link>
          </div>
        </div>
      </section>

      <KyaMaiApnaLoanSettleKrSktaHuClient />

      <Footer />
    </div>
  );
}
