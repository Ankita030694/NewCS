import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ConvertSettledToClosedClient from './ConvertSettledToClosedClient';

export const metadata: Metadata = {
  title: 'Can I Convert Settled to Closed Later? | CIBIL Roadmap 2025',
  description: 'The definitive 2025 guide on converting a Settled loan status to Closed in your CIBIL report. Step-by-step payment, NOC, and dispute process. No em-dashes!',
  alternates: {
    canonical: 'https://www.credsettle.com/can-i-convert-settled-to-closed-later',
  },
  keywords: 'convert settled to closed in cibil, settled vs closed status india, improve cibil after settlement, paying balance after settlement, cibil status conversion roadmap',
};

export default function ConvertSettledToClosedPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headLine: 'Can I Convert Settled to Closed Later? The 2025 CIBIL Status Upgrade Guide',
    description: 'A comprehensive, 5000+ word expert guide on how to upgrade your credit status from "Settled" to "Closed" by paying the remaining dues and clearing your CIBIL history.',
    image: 'https://www.credsettle.com/images/settled-to-closed-upgrade.jpg',
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
        name: 'Convert Settled to Closed Later',
        item: 'https://www.credsettle.com/can-i-convert-settled-to-closed-later',
      },
    ],
  };

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <Script
        id="article-schema-upgrade"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Script
        id="breadcrumb-schema-upgrade"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ConvertSettledToClosedClient />
      <Footer />
    </div>
  );
}
