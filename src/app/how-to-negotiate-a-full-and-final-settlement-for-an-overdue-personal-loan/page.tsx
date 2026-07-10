import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PersonalLoanSettlementClient from './PersonalLoanSettlementClient';

export const metadata: Metadata = {
  title: 'Personal Loan Settlement Guide',
  description: 'Learn how to negotiate a full and final personal loan settlement. Understand NPA rules, calculate your lump sum, and avoid predatory debt scams.',
  keywords: [
    'personal loan settlement',
    'overdue personal loan',
    'full and final settlement',
    'loan settlement calculator',
    'NPA classification',
    'personal loan default'
  ],
  openGraph: {
    title: 'Personal Loan Settlement Guide',
    description: 'Learn how to negotiate a full and final personal loan settlement. Understand NPA rules, calculate your lump sum, and avoid predatory debt scams.',
    type: 'article',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://credsettle.com/how-to-negotiate-a-full-and-final-settlement-for-an-overdue-personal-loan'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Personal Loan Settlement Guide',
    description: 'Learn how to negotiate a full and final personal loan settlement.'
  },
  alternates: {
    canonical: 'https://credsettle.com/how-to-negotiate-a-full-and-final-settlement-for-an-overdue-personal-loan'
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function PersonalLoanSettlementPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'Personal Loan Settlement Guide',
    'description': 'Learn how to negotiate a full and final personal loan settlement. Understand NPA rules, calculate your lump sum, and avoid predatory debt scams.',
    'author': {
      '@type': 'Person',
      'name': 'Rohan Sharma',
      'image': 'https://credsettle.comhttps://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg'
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'CredSettle',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://credsettle.com/credsettle-logo.svg'
      }
    },
    'datePublished': new Date().toISOString().split('T')[0],
    'dateModified': new Date().toISOString().split('T')[0],
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': 'https://credsettle.com/how-to-negotiate-a-full-and-final-settlement-for-an-overdue-personal-loan'
    }
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'Will my bank settle my personal loan immediately after a default?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'No, banks typically do not entertain settlement offers until the loan account crosses the ninety day threshold and is classified as a Non Performing Asset. Early negotiations usually focus on restructuring rather than principal reduction.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Can I negotiate a personal loan settlement in multiple monthly installments?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'While possible in rare cases, banking institutions heavily favor a single lump sum payment. Offering cash upfront provides maximum leverage to reduce the principal balance significantly.'
        }
      },
      {
        '@type': 'Question',
        'name': 'How badly will a personal loan settlement damage my CIBIL score?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'A settlement will mark your credit report with a Settled status instead of Closed. This is a negative indicator that can drop your score by fifty to one hundred points and remain visible for up to seven years.'
        }
      },
      {
        '@type': 'Question',
        'name': 'What happens if I stop paying my personal loan entirely?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'If you completely stop payments without negotiating, the bank will escalate recovery efforts, send legal notices, and eventually write off the account. This destroys your creditworthiness permanently.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Are third party loan settlement applications safe to use?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Many unregulated settlement applications charge upfront fees without providing actual legal protection. Always verify the credentials of any agency and rely on certified legal advocates for debt resolution.'
        }
      },
      {
        '@type': 'Question',
        'name': 'What is the most important document to collect after settling my loan?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'The No Objection Certificate is the most critical document. It serves as legal proof that the banking institution has accepted your final payment and absolves you of any further financial liability regarding that specific loan.'
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
        'name': 'Personal Loan Settlement Guide',
        'item': 'https://credsettle.com/how-to-negotiate-a-full-and-final-settlement-for-an-overdue-personal-loan'
      }
    ]
  };

  const reviewSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    'name': 'Personal Loan Settlement Consultation',
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': '4.9',
      'reviewCount': '312',
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
            Personal Loan Settlement Guide
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            Stop the harassment and resolve your personal loan debt legally. A structured approach to proving financial insolvency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Get Settlement Assistance
            </a>
          </div>
        </div>
      </section>

      <PersonalLoanSettlementClient />
      <Footer />
    </div>
  );
}
