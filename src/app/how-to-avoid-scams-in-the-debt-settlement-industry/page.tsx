import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScamAvoidanceClient from './ScamAvoidanceClient';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to Avoid Debt Settlement Scams in India | CredSettle',
  description: 'Learn how to identify and avoid debt settlement scams. Discover the red flags, legal rights, and how to choose a legitimate debt relief partner like.',
  keywords: [
    'avoid debt settlement scams',
    'debt relief scams',
    'debt settlement fraud',
    'legitimate debt settlement companies',
    'debt settlement red flags',
    'CredSettle',
    'how to settle debt safely',
    'debt relief help india',
    'avoiding predatory lenders',
    'debt settlement advice'
  ],
  openGraph: {
    title: 'Expert Guide: How to Avoid Scams in the Debt Settlement Industry',
    description: 'Protect yourself from fraudulent debt relief schemes. Read our comprehensive guide on identifying scams and choosing trustworthy settlement services.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://www.credsettle.com/how-to-avoid-scams-in-the-debt-settlement-industry'
  },
  alternates: {
    canonical: 'https://www.credsettle.com/how-to-avoid-scams-in-the-debt-settlement-industry'
  }
};

export default function ScamAvoidancePage() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    '@id': 'https://www.credsettle.com/how-to-avoid-scams-in-the-debt-settlement-industry',
    name: 'CredSettle Debt Relief Protection',
    url: 'https://www.credsettle.com',
    logo: 'https://www.credsettle.com/credsettle-logo.svg',
    description: 'Expert guidance on avoiding scams in the debt settlement industry and providing legitimate debt resolution services.',
    telephone: '+91-8800226635',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'New Delhi',
      addressRegion: 'Delhi',
      addressCountry: 'IN'
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
        'name': 'Avoid Debt Settlement Scams',
        'item': 'https://www.credsettle.com/how-to-avoid-scams-in-the-debt-settlement-industry'
      }
    ]
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'How to Avoid Scams in the Debt Settlement Industry: A Complete Protection Guide',
    'description': 'An in-depth guide on identifying red flags in the debt relief industry, verifying legitimate companies, and protecting your financial future.',
    'author': {
      '@type': 'Organization',
      'name': 'CredSettle'
    },
    'datePublished': '2026-05-12',
    'dateModified': '2026-05-12',
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': 'https://www.credsettle.com/how-to-avoid-scams-in-the-debt-settlement-industry'
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
          background: 'radial-gradient(136.19% 254.89% at -1.53% 10.35%, #0f172a 0%, #1e293b 100%)',
          minHeight: '50vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <div className="max-w-5xl mx-auto text-center z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
            How to Avoid Scams in the<br />
            <span className="text-blue-400">Debt Settlement Industry</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            Don't let desperation lead you into a trap. Learn the vital red flags of debt relief fraud and discover how to find a legitimate partner to resolve your financial burdens safely.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              Get a Secure Consultation
            </Link>
          </div>
        </div>
      </section>

      <ScamAvoidanceClient />

      <Footer />
    </div>
  );
}
