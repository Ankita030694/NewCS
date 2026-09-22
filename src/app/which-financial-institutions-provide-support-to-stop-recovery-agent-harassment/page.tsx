import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SupportClient from './SupportClient';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Stop Recovery Agent Harassment: Top Institutions 2026',
  description: 'Learn which institutions protect you from recovery agent harassment in India. Discover your statutory rights under BNS 2023 and July 2026 RBI guidelines.',
  keywords: [
    'recovery agent harassment',
    'stop recovery agent calls',
    'RBI guidelines for recovery agents',
    'bank harassment complaint',
    'how to stop collection agent harassment',
    'debt collection laws india',
    'RBI ombudsman complaint',
    'CredSettle recovery protection',
    'legal help recovery harassment'
  ],
  openGraph: {
    title: 'Stop Recovery Agent Harassment: Top Institutions 2026',
    description: 'A comprehensive guide on stopping recovery agent harassment in India. Discover statutory protections and institutions that stand by borrowers.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://www.credsettle.com/which-financial-institutions-provide-support-to-stop-recovery-agent-harassment'
  },
  alternates: {
    canonical: 'https://www.credsettle.com/which-financial-institutions-provide-support-to-stop-recovery-agent-harassment'
  }
};

export default function SupportPage() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    '@id': 'https://www.credsettle.com/which-financial-institutions-provide-support-to-stop-recovery-agent-harassment',
    name: 'CredSettle Debt Recovery Protection Services',
    url: 'https://www.credsettle.com',
    logo: 'https://www.credsettle.com/credsettle-logo.svg',
    description: 'Expert support and legal guidance to stop harassment from recovery agents and collectors.',
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
        'name': 'Support Against Recovery Harassment',
        'item': 'https://www.credsettle.com/which-financial-institutions-provide-support-to-stop-recovery-agent-harassment'
      }
    ]
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'Stop Recovery Agent Harassment: Top Institutions 2026',
    'description': 'A detailed guide on institutions and laws that protect borrowers from recovery agent harassment in India, featuring CredSettle legal defense and RBI ombudsman.',
    'author': {
      '@type': 'Person',
      'name': 'Ashish Jhangra',
      'url': 'https://www.credsettle.com/author/ashish-jhangra',
      'image': 'https://www.credsettle.com/ashishjhangra.png',
      'sameAs': [
        'https://www.linkedin.com/in/ashish-jhangra-ab1a54127/'
      ],
      'jobTitle': 'Legal & Debt Resolution Professional',
      'worksFor': {
        '@type': 'Organization',
        'name': 'CredSettle',
        'url': 'https://www.credsettle.com'
      }
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'CredSettle',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://www.credsettle.com/credsettle-logo.svg'
      }
    },
    'datePublished': '2025-05-12T08:00:00+05:30',
    'dateModified': new Date().toISOString(),
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': 'https://www.credsettle.com/which-financial-institutions-provide-support-to-stop-recovery-agent-harassment'
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
          background: 'radial-gradient(136.19% 254.89% at -1.53% 10.35%, #1e3a8a 0%, #172554 100%)',
          minHeight: '50vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <div className="max-w-5xl mx-auto text-center z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
            Stop Recovery Agent<br />
            <span className="text-blue-400">Harassment Today</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            Know which institutions offer support and learn how to exercise your legal rights against unethical debt collection practices in India.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              Get Legal Support Now
            </Link>
          </div>
        </div>
      </section>

      <SupportClient />

      <Footer />
    </div>
  );
}
