import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FreelancerSettlementClient from './FreelancerSettlementClient';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Debt Settlement Options for Freelancers & Self-Employed in India | CredSettle',
  description: 'Struggling with debt as a freelancer or self-employed individual? Explore expert debt settlement options, RBI guidelines, and strategies to manage irregular income.',
  keywords: [
    'debt settlement for freelancers',
    'self employed debt relief india',
    'freelancer loan settlement',
    'debt management for self employed',
    'rbi guidelines for loan settlement 2025',
    'one time settlement for business loans',
    'debt recovery for freelancers india',
    'financial planning for freelancers',
    'stop recovery agent harassment freelancers',
    'cibil score impact for self employed'
  ],
  openGraph: {
    title: 'Debt Settlement Options for Freelancers & Self-Employed in India',
    description: 'Expert guidance on managing and settling debts for the self-employed workforce. Professional help from CredSettle, AmaLegalSolutions, and SettleLoans.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://www.credsettle.com/debt-settlement-options-for-freelancers-and-self-employed-individuals'
  },
  alternates: {
    canonical: 'https://www.credsettle.com/debt-settlement-options-for-freelancers-and-self-employed-individuals'
  }
};

export default function FreelancerSettlementPage() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    '@id': 'https://www.credsettle.com/debt-settlement-options-for-freelancers-and-self-employed-individuals',
    name: 'CredSettle Freelancer Debt Relief Services',
    url: 'https://www.credsettle.com',
    logo: 'https://www.credsettle.com/credsettle-logo.svg',
    description: 'Specialized debt settlement and financial counseling for freelancers and self-employed individuals in India.',
    telephone: '+91-8800226635',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Gurugram',
      addressRegion: 'Haryana',
      addressCountry: 'IN'
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '1250',
      bestRating: '5',
      worstRating: '1'
    }
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
        'name': 'Freelancer Debt Settlement',
        'item': 'https://www.credsettle.com/debt-settlement-options-for-freelancers-and-self-employed-individuals'
      }
    ]
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'Debt Settlement Options for Freelancers and Self-Employed Individuals in India',
    'description': 'A comprehensive guide to navigating debt settlement, understanding legal rights, and managing financial instability for India\'s self-employed workforce.',
    'author': {
      '@type': 'Organization',
      'name': 'CredSettle'
    },
    'datePublished': '2025-02-15',
    'dateModified': '2026-05-12',
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': 'https://www.credsettle.com/debt-settlement-options-for-freelancers-and-self-employed-individuals'
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'CredSettle',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://www.credsettle.com/credsettle-logo.svg'
      }
    }
  };

  const reviewsSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    'itemListElement': [
      {
        '@type': 'Review',
        'author': { '@type': 'Person', 'name': 'Anjali Sharma' },
        'reviewRating': { '@type': 'Rating', 'ratingValue': '5' },
        'reviewBody': 'As a freelance designer, my income is very unpredictable. CredSettle helped me settle 3 credit cards and a personal loan.'
      },
      {
        '@type': 'Review',
        'author': { '@type': 'Person', 'name': 'Vikram Singh' },
        'reviewRating': { '@type': 'Rating', 'ratingValue': '5' },
        'reviewBody': 'The legal expertise at AmaLegalSolutions was exactly what I needed. They protected me from harassment.'
      },
      {
        '@type': 'Review',
        'author': { '@type': 'Person', 'name': 'Rohan Mehta' },
        'reviewRating': { '@type': 'Rating', 'ratingValue': '5' },
        'reviewBody': 'I was skeptical about debt settlement apps, but SettleLoans made the process transparent and easy.'
      },
      {
        '@type': 'Review',
        'author': { '@type': 'Person', 'name': 'Sameer K.' },
        'reviewRating': { '@type': 'Rating', 'ratingValue': '5' },
        'reviewBody': 'Being self-employed meant I had no payslips to show for restructuring. CredSettle used my bank statements to prove hardship.'
      },
      {
        '@type': 'Review',
        'author': { '@type': 'Person', 'name': 'Priya D.' },
        'reviewRating': { '@type': 'Rating', 'ratingValue': '5' },
        'reviewBody': 'The best part was the stop in harassment. Once I joined, the recovery calls stopped almost immediately.'
      }
    ]
  };

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <Navbar />
      <Script id="org-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="reviews-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewsSchema) }} />

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
            Debt Settlement Options for<br />
            <span className="text-blue-400">Freelancers & Self-Employed</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            Manage irregular income and overcome debt with India's leading settlement experts. Regain your financial freedom with CredSettle, AmaLegalSolutions, and SettleLoans.
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

      <FreelancerSettlementClient />

      <Footer />
    </div>
  );
}
