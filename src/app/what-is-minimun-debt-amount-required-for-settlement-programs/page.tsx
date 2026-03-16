import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MinimumDebtAmountClient from './MinimumDebtAmountClient';

export const metadata: Metadata = {
  title: 'Minimum Debt Amount for Settlement | Eligibility & RBI Rules 2025',
  description: 'What is the minimum debt amount required for debt settlement programs in India? Learn about the ₹1 Lakh threshold, RBI ARC rules 2025, and eligibility for personal, credit card, and business loan settlements.',
  keywords: 'minimum debt amount for settlement, debt settlement eligibility india, rbi settlement rules 2025, loan settlement threshold, credit card settlement minimum amount',
  alternates: {
    canonical: 'https://www.credsettle.com/what-is-minimun-debt-amount-required-for-settlement-programs',
  },
};

export default function MinimumDebtAmountPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'What is the Minimum Debt Amount Required for Debt Settlement Programs in India?',
    'description': 'A comprehensive guide to understanding the monetary thresholds and eligibility criteria for entering debt settlement modules in 2025.',
    'image': 'https://www.credsettle.com/images/debt-settlement-threshold.jpg',
    'author': {
      '@type': 'Organization',
      'name': 'CredSettle',
      'url': 'https://www.credsettle.com'
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'CredSettle',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://www.credsettle.com/logo.png'
      }
    },
    'datePublished': '2025-01-25',
    'dateModified': '2025-03-16'
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
        'name': 'Minimum Debt Amount for Settlement',
        'item': 'https://www.credsettle.com/what-is-minimun-debt-amount-required-for-settlement-programs'
      }
    ]
  };

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <MinimumDebtAmountClient />
      <Footer />
    </div>
  );
}
