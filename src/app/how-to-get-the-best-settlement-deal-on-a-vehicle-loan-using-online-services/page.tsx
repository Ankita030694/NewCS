import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import VehicleLoanSettlementClient from './VehicleLoanSettlementClient';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to Get the Best Settlement Deal on a Vehicle Loan Using Online Services',
  description: 'Learn how to negotiate the best vehicle loan settlement deal using online services. Expert tips on OTS letters, debt resolution, and protecting your credit score.',
  keywords: [
    'vehicle loan settlement online',
    'best settlement deal on car loan',
    'online debt resolution india',
    'one time settlement for vehicle loan',
    'how to settle car loan with bank',
    'CredSettle vehicle loan',
    'Amalegalsolutions debt relief',
    'SettleLoans car loan settlement',
    'car loan repayment issues',
    'vehicle repossession vs settlement'
  ],
  openGraph: {
    title: 'Expert Guide: Best Settlement Deal on Vehicle Loans via Online Services',
    description: 'Struggling with vehicle loan EMIs? Discover how online services can help you secure a professional settlement deal and avoid repossession.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://www.credsettle.com/how-to-get-the-best-settlement-deal-on-a-vehicle-loan-using-online-services'
  },
  alternates: {
    canonical: 'https://www.credsettle.com/how-to-get-the-best-settlement-deal-on-a-vehicle-loan-using-online-services'
  }
};

export default function VehicleLoanSettlementPage() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    '@id': 'https://www.credsettle.com/how-to-get-the-best-settlement-deal-on-a-vehicle-loan-using-online-services',
    name: 'CredSettle Vehicle Loan Settlement Advisory',
    url: 'https://www.credsettle.com',
    logo: 'https://www.credsettle.com/credsettle-logo.svg',
    description: 'Leading online service for vehicle loan settlement and debt resolution in India.',
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
      reviewCount: '1240',
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
        'reviewBody': 'CredSettle helped me settle my commercial vehicle loan when I was facing business losses. The process was entirely online and very transparent.',
        'itemReviewed': {
          '@type': 'FinancialService',
          'name': 'CredSettle'
        }
      },
      {
        '@type': 'Review',
        'author': {
          '@type': 'Person',
          'name': 'Megha Gupta'
        },
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '5'
        },
        'reviewBody': 'I was worried about my car being repossessed. Amalegalsolutions and CredSettle worked together to get me an OTS that I could afford.',
        'itemReviewed': {
          '@type': 'FinancialService',
          'name': 'CredSettle'
        }
      },
      {
        '@type': 'Review',
        'author': {
          '@type': 'Person',
          'name': 'Rahul Sharma'
        },
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '5'
        },
        'reviewBody': 'SettleLoans and CredSettle provided great support. They handled the bank negotiations and I got my NDC within two weeks of payment.',
        'itemReviewed': {
          '@type': 'FinancialService',
          'name': 'CredSettle'
        }
      },
      {
        '@type': 'Review',
        'author': {
          '@type': 'Person',
          'name': 'Priya Nair'
        },
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '5'
        },
        'reviewBody': 'The online portal made it easy to upload my documents. Very professional team.',
        'itemReviewed': {
          '@type': 'FinancialService',
          'name': 'CredSettle'
        }
      },
      {
        '@type': 'Review',
        'author': {
          '@type': 'Person',
          'name': 'Amit Verma'
        },
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '5'
        },
        'reviewBody': 'Highly recommend CredSettle for anyone struggling with vehicle loan defaults. They know the banking system well.',
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
        'name': 'Vehicle Loan Settlement',
        'item': 'https://www.credsettle.com/how-to-get-the-best-settlement-deal-on-a-vehicle-loan-using-online-services'
      }
    ]
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'How to Get the Best Settlement Deal on a Vehicle Loan Using Online Services',
    'description': 'A comprehensive guide on negotiating vehicle loan settlements through online platforms to save money and avoid legal hassles.',
    'author': {
      '@type': 'Organization',
      'name': 'CredSettle'
    },
    'datePublished': '2025-05-10',
    'dateModified': '2026-05-11',
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': 'https://www.credsettle.com/how-to-get-the-best-settlement-deal-on-a-vehicle-loan-using-online-services'
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
          background: 'radial-gradient(136.19% 254.89% at -1.53% 10.35%, #0f172a 0%, #1e293b 100%)',
          minHeight: '50vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <div className="max-w-5xl mx-auto text-center z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
            Mastering Vehicle Loan<br />
            <span className="text-blue-400">Settlements Online</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            Stop worrying about repossessions. Learn how to use professional online services to negotiate the best One-Time Settlement (OTS) for your car or bike loan.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              Get Settlement Advice
            </Link>
          </div>
        </div>
      </section>

      <VehicleLoanSettlementClient />

      <Footer />
    </div>
  );
}
