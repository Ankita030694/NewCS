import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import AskingSettlementClient from './AskingSettlementClient';

export const metadata: Metadata = {
  title: 'How to Ask Bank for Settlement: Expert Guide & Tips 2026',
  description: 'Learn the best way to ask your bank for a loan settlement. Master debt negotiation, understand RBI guidelines, and resolve your debt for 50-70% less.',
  keywords: [
    'how to ask bank for settlement',
    'loan settlement process india',
    'debt settlement negotiation',
    'one time settlement rbi guidelines',
    'bank settlement request letter',
    'how to settle personal loan',
    'credit card settlement tips',
    'rbi guidelines on loan settlement 2026',
    'debt relief india',
    'loan waiver process'
  ],
  openGraph: {
    title: 'How to Ask Bank for Settlement: The Master Guide',
    description: 'Expert strategies to negotiate your loan settlement and achieve financial freedom.',
    type: 'article',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://credsettle.com/how-to-ask-bank-for-settlement'
  },
  alternates: {
    canonical: 'https://credsettle.com/how-to-ask-bank-for-settlement'
  }
};

export default function HowToAskBankSettlementPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'How to Ask Your Bank for a Settlement in India: The Ultimate Step-by-Step Guide',
    'description': 'A comprehensive 2500+ word guide on the best ways to approach a bank for debt settlement, including legal rights and negotiation tactics.',
    'author': {
      '@type': 'Organization',
      'name': 'CredSettle'
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'CredSettle',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://credsettle.com/credsettle-logo.svg'
      }
    },
    'datePublished': '2026-02-10',
    'dateModified': '2026-02-10',
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': 'https://credsettle.com/how-to-ask-bank-for-settlement'
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
        'item': 'https://credsettle.com'
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': 'How to ask bank for settlement',
        'item': 'https://credsettle.com/how-to-ask-bank-for-settlement'
      }
    ]
  };

  return (
    <div className="relative min-h-screen bg-white mt-5">
      <Navbar />
            <div className="relative z-10">
      
      <Script id="article-schema-main" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="breadcrumb-schema-main" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero Section */}
      <section 
        className="relative text-white pt-32 pb-20 px-4 md:px-8 border-b border-white/10"
        style={{
          background: 'radial-gradient(136.19% 254.89% at -1.53% 10.35%, #2F6CE2 0%, #001235 100%)',
          minHeight: '55vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <div className="max-w-[1000px] mx-auto text-center z-10">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tighter leading-[1.1]">
            How to Ask Your Bank for a <br className="hidden md:block" />
            <span className="text-blue-400">Loan Settlement</span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            Master the art of debt negotiation, understand 2026 legal frameworks, and achieve a successful one-time settlement (OTS) with our expert strategies.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link 
              href="/contact"
              className="bg-white text-blue-900 px-10 py-4 rounded-full font-black text-base md:text-lg hover:bg-blue-50 transition-all shadow-2xl hover:shadow-[0_0_50px_rgba(255,255,255,0.3)] transform hover:-translate-y-1.5"
            >
              Get Free Consultation
            </Link>
          </div>
        </div>
      </section>

      <AskingSettlementClient />
      
                  </div>
            <Footer />
    </div>
  );
}
