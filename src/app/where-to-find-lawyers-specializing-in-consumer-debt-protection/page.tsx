import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LawyersClient from './LawyersClient';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Where to Find Lawyers Specializing in Consumer Debt Protection in India',
  description: 'Looking for legal help with debt harassment? Discover where to find top lawyers specializing in consumer debt protection and learn your rights against recovery agents.',
  keywords: [
    'consumer debt protection lawyers',
    'debt collection defense attorney',
    'recovery agent harassment legal help',
    'consumer law experts india',
    'debt settlement lawyers',
    'RBI guidelines for debt recovery',
    'legal protection from debt collectors',
    'harassment by bank recovery agents',
    'consumer protection act 2019 debt',
    'debt relief legal services'
  ],
  openGraph: {
    title: 'Expert Consumer Debt Protection Lawyers in India | Know Your Rights',
    description: 'Protect yourself from debt collection harassment. Find specialized lawyers and learn about RBI guidelines and consumer protection laws in India.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://credsettle.com/where-to-find-lawyers-specializing-in-consumer-debt-protection'
  },
  alternates: {
    canonical: 'https://credsettle.com/where-to-find-lawyers-specializing-in-consumer-debt-protection'
  }
};

export default function DebtLawyersPage() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    '@id': 'https://credsettle.com/where-to-find-lawyers-specializing-in-consumer-debt-protection',
    name: 'CredSettle Consumer Debt Legal Protection',
    url: 'https://credsettle.com',
    logo: 'https://credsettle.com/credsettle-logo.svg',
    description: 'Expert legal assistance and protection for consumers facing debt collection harassment and seeking debt settlement solutions in India.',
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
        'name': 'Consumer Debt Protection Lawyers',
        'item': 'https://credsettle.com/where-to-find-lawyers-specializing-in-consumer-debt-protection'
      }
    ]
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'Where to Find Lawyers Specializing in Consumer Debt Protection: A Complete Guide for Indian Borrowers',
    'description': 'Facing harassment from recovery agents? This guide explains where to find specialized consumer debt protection lawyers and how to defend your rights under Indian law.',
    'author': {
      '@type': 'Organization',
      'name': 'CredSettle'
    },
    'datePublished': '2025-05-12',
    'dateModified': '2026-05-12',
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': 'https://credsettle.com/where-to-find-lawyers-specializing-in-consumer-debt-protection'
    },
    'image': 'https://credsettle.com/images/debt-protection-lawyers.jpg'
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
          background: 'radial-gradient(136.19% 254.89% at -1.53% 10.35%, #0a2e5c 0%, #001235 100%)',
          minHeight: '50vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <div className="max-w-5xl mx-auto text-center z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
            Where to Find Lawyers Specializing in<br />
            <span className="text-blue-400">Consumer Debt Protection</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            Stop harassment and regain your peace of mind. Connect with expert legal professionals across India who specialize in defending debtor rights and ensuring fair treatment.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link 
              href="/contact"
              className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              Get Expert Legal Advice
            </Link>
          </div>
        </div>
      </section>

      <LawyersClient />
      
      <Footer />
    </div>
  );
}
