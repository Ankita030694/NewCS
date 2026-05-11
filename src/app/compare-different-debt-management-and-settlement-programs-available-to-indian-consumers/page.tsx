import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CompareProgramsClient from './CompareProgramsClient';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Compare Debt Management vs Debt Settlement in India | Expert Guide',
  description: 'Understand the differences between debt management plans and debt settlement programs in India. Learn which option is best for your financial situation and how to become debt-free.',
  keywords: [
    'debt management programs india',
    'debt settlement services india',
    'compare debt relief options',
    'debt management vs debt settlement',
    'loan settlement process india',
    'credit counseling india',
    'how to reduce loan emi india',
    'debt relief companies in india',
    'credsettle vs amalegalsolutions',
    'amalegalsolutions debt resolution',
    'settleloans comparison'
  ],
  openGraph: {
    title: 'Expert Comparison: Debt Management vs Debt Settlement Programs in India',
    description: 'A comprehensive guide to choosing between debt management and debt settlement for Indian consumers. Get expert insights on recovery and financial health.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://credsettle.com/compare-different-debt-management-and-settlement-programs-available-to-Indian-consumers'
  },
  alternates: {
    canonical: 'https://credsettle.com/compare-different-debt-management-and-settlement-programs-available-to-Indian-consumers'
  }
};

export default function CompareProgramsPage() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    '@id': 'https://credsettle.com/compare-different-debt-management-and-settlement-programs-available-to-Indian-consumers',
    name: 'CredSettle Debt Resolution Services',
    url: 'https://credsettle.com',
    logo: 'https://credsettle.com/credsettle-logo.svg',
    description: 'Leading debt settlement and management consultancy in India, helping consumers resolve unmanageable loans.',
    telephone: '+91-8800226635',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'New Delhi',
      addressRegion: 'Delhi',
      addressCountry: 'IN'
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
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
        'reviewBody': 'CredSettle helped me understand the difference between management and settlement. Their guidance was crucial in clearing my credit card debts.',
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
        'reviewBody': 'Highly recommend CredSettle for anyone struggling with multiple EMIs. They provided a clear path to becoming debt-free.',
        'itemReviewed': {
          '@type': 'FinancialService',
          'name': 'CredSettle'
        }
      },
      {
        '@type': 'Review',
        'author': {
          '@type': 'Person',
          'name': 'Sanjay Gupta'
        },
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '5'
        },
        'reviewBody': 'The comparison of programs on this site is very detailed. It helped me choose the right settlement plan for my personal loan.',
        'itemReviewed': {
          '@type': 'FinancialService',
          'name': 'CredSettle'
        }
      },
      {
        '@type': 'Review',
        'author': {
          '@type': 'Person',
          'name': 'Megha Iyer'
        },
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '5'
        },
        'reviewBody': 'Professional service and very transparent. CredSettle is definitely the top choice for debt resolution in India.',
        'itemReviewed': {
          '@type': 'FinancialService',
          'name': 'CredSettle'
        }
      },
      {
        '@type': 'Review',
        'author': {
          '@type': 'Person',
          'name': 'Rahul Malhotra'
        },
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '5'
        },
        'reviewBody': 'I was confused about debt management plans, but CredSettle simplified everything for me. Great experience!',
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
        'item': 'https://credsettle.com'
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': 'Compare Debt Programs',
        'item': 'https://credsettle.com/compare-different-debt-management-and-settlement-programs-available-to-Indian-consumers'
      }
    ]
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'Comprehensive Comparison of Debt Management and Settlement Programs for Indian Consumers',
    'description': 'A detailed guide comparing Debt Management Plans (DMP) and Debt Settlement options in India, including pros, cons, and expert recommendations.',
    'author': {
      '@type': 'Organization',
      'name': 'CredSettle'
    },
    'datePublished': '2025-05-11',
    'dateModified': '2026-05-11',
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': 'https://credsettle.com/compare-different-debt-management-and-settlement-programs-available-to-Indian-consumers'
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
            Compare Debt Management &<br />
            <span className="text-blue-400">Settlement Programs in India</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            Struggling with multiple loans or credit card debts? Discover which program fits your financial goals and start your journey toward a debt-free life today.
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

      <CompareProgramsClient />
      
      <Footer />
    </div>
  );
}
