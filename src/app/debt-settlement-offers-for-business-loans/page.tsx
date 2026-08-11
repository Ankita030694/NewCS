import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BusinessLoanSettlementClient from './BusinessLoanSettlementClient';

export const metadata: Metadata = {
  title: 'Business Loan Settlement Offers | MSME Debt Resolution 2025',
  description: 'Explore strategic debt settlement offers for business loans in India. Learn about MSME OTS schemes, RBI compromise frameworks 2023-25, and how to resolve corporate debt.',
  keywords: 'business loan settlement offers, msme debt resolution, rbi compromise settlement framework, ots scheme for business loans, business debt relief india',
  alternates: {
    canonical: 'https://www.credsettle.com/debt-settlement-offers-for-business-loans',
  },
};

export default function BusinessLoanSettlementPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'Strategic Debt Settlement Offers for Business Loans (2025 Guide)',
    'description': 'A detailed roadmap for entrepreneurs to resolve business debt using the latest RBI frameworks and institutional OTS programs.',
    'image': 'https://www.credsettle.com/images/business-loan-settlement.jpg',
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
        'name': 'Business Loan Settlement Offers',
        'item': 'https://www.credsettle.com/debt-settlement-offers-for-business-loans'
      }
    ]
  };

  return (
    <div className="relative min-h-screen bg-white mt-5">
      <Navbar />
            <div className="relative z-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <BusinessLoanSettlementClient />
                  </div>
            <Footer />
    </div>
  );
}
