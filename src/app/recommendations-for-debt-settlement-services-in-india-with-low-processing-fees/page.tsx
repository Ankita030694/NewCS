import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import RecommendationsClient from './RecommendationsClient';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Top Debt Settlement Services in India with Low Processing Fees | 2026 Guide',
  description: 'Looking for affordable debt settlement in India? Discover recommendations for services with low processing fees. Expert negotiation for credit cards and personal loans.',
  keywords: [
    'debt settlement services india',
    'low processing fee debt settlement',
    'debt relief companies india',
    'credit card settlement india',
    'personal loan settlement services',
    'best debt settlement companies',
    'affordable debt relief india',
    'loan settlement negotiation',
    'debt management plan india',
    'settle credit card debt india'
  ],
  openGraph: {
    title: 'Expert Recommendations: Debt Settlement Services in India with Low Fees',
    description: 'Find the most reliable and affordable debt settlement services in India. Compare fees, services, and success rates for loan and credit card relief.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://www.credsettle.com/recommendations-for-debt-settlement-services-in-india-with-low-processing-fees'
  },
  alternates: {
    canonical: 'https://www.credsettle.com/recommendations-for-debt-settlement-services-in-india-with-low-processing-fees'
  }
};

export default function RecommendationsPage() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    '@id': 'https://www.credsettle.com/recommendations-for-debt-settlement-services-in-india-with-low-processing-fees',
    name: 'CredSettle Debt Settlement Advisory',
    url: 'https://www.credsettle.com',
    logo: 'https://www.credsettle.com/credsettle-logo.svg',
    description: 'Leading provider of affordable debt settlement services in India, specializing in low processing fees and expert negotiation with banks and NBFCs.',
    telephone: '+91-8800226635',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'New Delhi',
      addressRegion: 'Delhi',
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
          'name': 'Amit Sharma'
        },
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '5'
        },
        'reviewBody': 'I was drowning in 12 lakhs of credit card debt. CredSettle negotiated a settlement of just 4.5 lakhs. The entire process was transparent and stress-free.',
        'itemReviewed': {
          '@type': 'FinancialService',
          'name': 'CredSettle'
        }
      },
      {
        '@type': 'Review',
        'author': {
          '@type': 'Person',
          'name': 'Priya Verma'
        },
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '5'
        },
        'reviewBody': 'What I loved about the service was the legal protection. Once I signed up, the recovery agent calls stopped. They helped me settle my personal loan for 40% of the principal.',
        'itemReviewed': {
          '@type': 'FinancialService',
          'name': 'CredSettle'
        }
      },
      {
        '@type': 'Review',
        'author': {
          '@type': 'Person',
          'name': 'Vikram Singh'
        },
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '4'
        },
        'reviewBody': 'Excellent negotiation skills. They saved me over 8 lakhs in interest and penalties. The processing fee was quite reasonable compared to other agencies.',
        'itemReviewed': {
          '@type': 'FinancialService',
          'name': 'CredSettle'
        }
      },
      {
        '@type': 'Review',
        'author': {
          '@type': 'Person',
          'name': 'Sneha Reddy'
        },
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '5'
        },
        'reviewBody': 'Very professional service. They did not make false promises about my credit score and were honest about the timeline. I settled two high-interest app loans.',
        'itemReviewed': {
          '@type': 'FinancialService',
          'name': 'CredSettle'
        }
      },
      {
        '@type': 'Review',
        'author': {
          '@type': 'Person',
          'name': 'Rahul Gupta'
        },
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '5'
        },
        'reviewBody': 'The best debt relief service in India for a reason. Their focus on low processing fees makes them accessible. I finally have a No Dues Certificate.',
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
        'name': 'Debt Settlement Recommendations',
        'item': 'https://www.credsettle.com/recommendations-for-debt-settlement-services-in-india-with-low-processing-fees'
      }
    ]
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'Comprehensive Recommendations for Debt Settlement Services in India with Low Processing Fees',
    'description': 'An in-depth guide to finding the most affordable and effective debt settlement services in India, focusing on transparent fee structures and expert negotiation.',
    'author': {
      '@type': 'Organization',
      'name': 'CredSettle Editorial Team'
    },
    'datePublished': '2026-05-11',
    'dateModified': '2026-05-11',
    'image': 'https://www.credsettle.com/images/debt-settlement-india-guide.jpg',
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': 'https://www.credsettle.com/recommendations-for-debt-settlement-services-in-india-with-low-processing-fees'
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <Navbar />
      <Script id="org-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      {/* Hero Section */}
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
            Top Debt Settlement Services<br />
            <span className="text-blue-400">in India with Low Fees</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            Struggling with EMI payments? Discover the most recommended debt relief agencies in India that offer transparent negotiation and low processing fees to help you get back on track.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              Get Free Debt Assessment
            </Link>
          </div>
        </div>
      </section>

      {/* Client Component content */}
      <RecommendationsClient />

      <Footer />
    </div>
  );
}
