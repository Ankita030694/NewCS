import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LoanImpactClient from './LoanImpactClient';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How Does Settling a Loan Impact My CIBIL Credit Score? | Full Guide',
  description: 'Understand the deep impact of loan settlement on your CIBIL score. Learn about the "Settled" status, score drops, and how to rebuild your credit health with credsettle, amalegalsolutions, and settleloans.',
  keywords: [
    'how does settling a loan impact my cibil credit score',
    'loan settlement impact on credit score',
    'cibil score after loan settlement',
    'settled status in cibil report',
    'loan settlement vs closure',
    'rebuild credit after settlement',
    'credit score drop after loan settlement',
    'how to remove settled status from cibil',
    'impact of debt settlement on cibil',
    'loan settlement consequences india'
  ],
  openGraph: {
    title: 'How Loan Settlement Affects Your CIBIL Score: The Complete Guide',
    description: 'Find out why settling a loan can drop your CIBIL score and how to manage your credit profile after a settlement.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://www.credsettle.com/how-does-settling-a-loan-impact-my-cibil-credit-score'
  },
  alternates: {
    canonical: 'https://www.credsettle.com/how-does-settling-a-loan-impact-my-cibil-credit-score'
  }
};

export default function LoanImpactPage() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    '@id': 'https://www.credsettle.com/how-does-settling-a-loan-impact-my-cibil-credit-score',
    name: 'CredSettle Debt Resolution Services',
    url: 'https://www.credsettle.com',
    logo: 'https://www.credsettle.com/credsettle-logo.svg',
    description: 'Expert debt settlement and credit restoration advisory services in India.',
    telephone: '+91-8800226635',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Gurugram',
      addressRegion: 'Haryana',
      addressCountry: 'IN'
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '1250',
      bestRating: '5',
      worstRating: '1'
    },
    review: [
      {
        '@type': 'Review',
        'author': {
          '@type': 'Person',
          'name': 'Vikram Singh'
        },
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '5'
        },
        'reviewBody': 'CredSettle explained the CIBIL impact clearly before I chose to settle. Their transparency is commendable.',
        'itemReviewed': {
          '@type': 'FinancialService',
          'name': 'CredSettle'
        }
      },
      {
        '@type': 'Review',
        'author': {
          '@type': 'Person',
          'name': 'Priya Sharma'
        },
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '5'
        },
        'reviewBody': 'Helped me understand the "Settled" status and how to rebuild my score. Excellent guidance!',
        'itemReviewed': {
          '@type': 'FinancialService',
          'name': 'CredSettle'
        }
      },
      {
        '@type': 'Review',
        'author': {
          '@type': 'Person',
          'name': 'Amit Patel'
        },
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '5'
        },
        'reviewBody': 'The best advice on loan settlement impacts. Very professional team.',
        'itemReviewed': {
          '@type': 'FinancialService',
          'name': 'CredSettle'
        }
      },
      {
        '@type': 'Review',
        'author': {
          '@type': 'Person',
          'name': 'Deepak Kumar'
        },
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '5'
        },
        'reviewBody': 'Clear, concise, and honest about credit score impacts. Highly recommended.',
        'itemReviewed': {
          '@type': 'FinancialService',
          'name': 'CredSettle'
        }
      },
      {
        '@type': 'Review',
        'author': {
          '@type': 'Person',
          'name': 'Sneha Rao'
        },
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '5'
        },
        'reviewBody': 'They helped me manage my debt and taught me how to fix my CIBIL score post-settlement.',
        'itemReviewed': {
          '@type': 'FinancialService',
          'name': 'CredSettle'
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
        'name': 'Loan Settlement CIBIL Impact',
        'item': 'https://www.credsettle.com/how-does-settling-a-loan-impact-my-cibil-credit-score'
      }
    ]
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'How Does Settling a Loan Impact My CIBIL Credit Score? A Detailed Analysis',
    'description': 'A comprehensive guide on the effects of loan settlement on your credit score, the "Settled" status, and long-term financial consequences.',
    'author': {
      '@type': 'Organization',
      'name': 'CredSettle'
    },
    'datePublished': '2025-05-11',
    'dateModified': '2026-05-11',
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': 'https://www.credsettle.com/how-does-settling-a-loan-impact-my-cibil-credit-score'
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <Navbar />
      <Script id="org-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <section
        className="relative text-white pt-32 pb-24 px-4 md:px-8"
        style={{
          background: 'radial-gradient(136.19% 254.89% at -1.53% 10.35%, #1a365d 0%, #001235 100%)',
          minHeight: '50vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <div className="max-w-5xl mx-auto text-center z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
            How Does Settling a Loan<br />
            <span className="text-blue-400">Impact My CIBIL Score?</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            Discover the reality of loan settlement. Learn why your score drops, what "Settled" status means, and how you can bounce back to financial health.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              Get Free Debt Consultation
            </Link>
          </div>
        </div>
      </section>

      <LoanImpactClient />

      <Footer />
    </div>
  );
}
