import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TimelyRepaymentClient from './TimelyRepaymentClient';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Timely Repayment of Loan Result',
  description: 'Understand the long-term financial outcomes, CIBIL impact, and immense monetary benefits of timely loan repayment compared to debt settlement.',
  keywords: [
    'timely repayment of loan result',
    'loan repayment benefits',
    'CIBIL score improvement',
    'avoiding loan settlement',
    'debt closure vs settlement',
    'loan repayment consequences'
  ],
  openGraph: {
    title: 'Timely Repayment of Loan Result',
    description: 'Understand the long-term financial outcomes, CIBIL impact, and immense monetary benefits of timely loan repayment compared to debt settlement.',
    type: 'article',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://credsettle.com/timely-repayment-of-loan-result'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Timely Repayment of Loan Result',
    description: 'Understand the long-term financial outcomes, CIBIL impact, and immense monetary benefits of timely loan repayment compared to debt settlement.'
  },
  alternates: {
    canonical: 'https://credsettle.com/timely-repayment-of-loan-result'
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function TimelyRepaymentPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'Timely Repayment of Loan Result',
    'description': 'Understand the long-term financial outcomes, CIBIL impact, and immense monetary benefits of timely loan repayment compared to debt settlement.',
    'author': {
      '@type': 'Person',
      'name': 'Anuj Bhiya',
      'image': 'https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg'
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'CredSettle',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://credsettle.com/credsettle-logo.svg'
      }
    },
    'datePublished': '2026-07-08',
    'dateModified': '2026-07-08',
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': 'https://credsettle.com/timely-repayment-of-loan-result'
    }
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'What happens to my CIBIL score when I repay my loan on time?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Your CIBIL score improves significantly as timely repayment demonstrates creditworthiness. The account status is marked as Closed with zero outstanding balance, signaling to future lenders that you are a reliable borrower who honors financial commitments without fail.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Is timely repayment better than negotiating a settlement?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Yes, absolutely. While a settlement provides immediate relief from debt, it severely damages your credit score and restricts your access to future loans for several years. Timely repayment protects your financial reputation and keeps premium credit options open.'
        }
      },
      {
        '@type': 'Question',
        'name': 'How long does it take for a closed loan to reflect on my credit report?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Lenders typically report account updates to credit bureaus within thirty to forty five days. Once reported, your credit file will reflect the closed status, and you will receive a No Objection Certificate from the bank.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Are there tax implications for timely repayment of my loan?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'There are no adverse tax implications for repaying a loan on time. In fact, for certain loans like home loans or education loans, timely repayment of interest and principal allows you to claim substantial tax deductions under various sections of the Income Tax Act.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Can I track the status of my loan closure online?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Yes, most major banking applications and financial portals allow you to track your loan status in real time. Once the final payment is processed, the system will update the status to closed, and you can download your final statement directly.'
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
        'item': 'https://credsettle.com'
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': 'Timely Repayment of Loan Result',
        'item': 'https://credsettle.com/timely-repayment-of-loan-result'
      }
    ]
  };

  const reviewSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    'name': 'Timely Loan Repayment Advisory Service',
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': '4.9',
      'reviewCount': '85',
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
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight">
            Timely Repayment of Loan Result
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            Understand the immense financial power and long term benefits of closing your loans on time compared to settling.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Consult a Financial Advisor
            </Link>
          </div>
        </div>
      </section>

      <TimelyRepaymentClient />

      <Footer />
    </div>
  );
}
