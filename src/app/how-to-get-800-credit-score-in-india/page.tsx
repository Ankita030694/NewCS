import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CreditScore800Client from './CreditScore800Client';

export const metadata: Metadata = {
  title: 'How to Get 800 Credit Score in India | Tips & Hacks 2025',
  description: 'Learn how to get an 800+ credit score in India with our 2025 ultimate guide. Step-by-step hacks for CIBIL & Experian score improvement. No em-dashes!',
  alternates: {
    canonical: 'https://www.credsettle.com/how-to-get-800-credit-score-in-india',
  },
  keywords: 'how to get 800 credit score in india, improve cibil score, cibil score hacks 2025, credit score improvement tips, reach 800 cibil score fast',
};

export default function CreditScore800Page() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headLine: 'How to Get 800 Credit Score in India: The Ultimate 2025 Guide',
    description: 'A comprehensive, 5000+ word guide on reaching and maintaining an 800+ credit score in India. Includes CIBIL tips, Experian hacks, and legal rights.',
    image: 'https://www.credsettle.com/images/credit-score-800.jpg',
    author: {
      '@type': 'Organization',
      name: 'CredSettle',
    },
    publisher: {
      '@type': 'Organization',
      name: 'CredSettle',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.credsettle.com/logo.png',
      },
    },
    datePublished: '2025-03-27',
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.credsettle.com/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'How to Get 800 Credit Score in India',
        item: 'https://www.credsettle.com/how-to-get-800-credit-score-in-india',
      },
    ],
  };

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <Script
        id="article-schema-800"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Script
        id="breadcrumb-schema-800"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <CreditScore800Client />
      <Footer />
    </div>
  );
}
