import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SecuredLoanSettlementClient from './SecuredLoanSettlementClient';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Can I Settle a Secured Loan Like a Home Loan in India? | Expert Guide',
  description: 'Learn if you can settle secured loans like home loans or vehicle loans in India. Compare secured vs unsecured loan settlement processes and impacts.',
  keywords: [
    'settle secured loan india',
    'home loan settlement process',
    'secured vs unsecured loan settlement',
    'can i settle home loan',
    'vehicle loan settlement india',
    'loan settlement companies india',
    'credsettle secured loan',
    'cibil score impact of loan settlement',
    'sarfaesi act loan settlement',
    'debt settlement for secured loans'
  ],
  openGraph: {
    title: 'Can I Settle a Secured Loan Like a Home Loan in India?',
    description: 'A comprehensive guide on settling secured loans (home, car, gold) vs unsecured loans in India. Expert advice on debt resolution.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://credsettle.com/can-i-settle-a-secured-loan-like-a-home-loan-or-only-unsecured-ones'
  },
  alternates: {
    canonical: 'https://credsettle.com/can-i-settle-a-secured-loan-like-a-home-loan-or-only-unsecured-ones'
  }
};

export default function SecuredLoanSettlementPage() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    '@id': 'https://credsettle.com/can-i-settle-a-secured-loan-like-a-home-loan-or-only-unsecured-ones',
    name: 'CredSettle Loan Settlement Services',
    url: 'https://credsettle.com',
    logo: 'https://credsettle.com/credsettle-logo.svg',
    description: 'Expert guidance on settling secured and unsecured loans in India to achieve debt-free life.',
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
    },
    review: [
      {
        '@type': 'Review',
        'author': {
          '@type': 'Person',
          'name': 'Amit Sharma'
        },
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '5'
        },
        'reviewBody': 'CredSettle helped me understand the complexities of settling my home loan. Their advice saved me from losing my property.',
        'itemReviewed': {
          '@type': 'LegalService',
          'name': 'CredSettle'
        }
      },
      {
        '@type': 'Review',
        'author': {
          '@type': 'Person',
          'name': 'Priya Varma'
        },
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '5'
        },
        'reviewBody': 'I was confused about secured vs unsecured settlement. The experts here explained everything clearly. Highly recommended!',
        'itemReviewed': {
          '@type': 'LegalService',
          'name': 'CredSettle'
        }
      },
      {
        '@type': 'Review',
        'author': {
          '@type': 'Person',
          'name': 'Sanjay Gupta'
        },
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '5'
        },
        'reviewBody': 'Professional service. They handled my vehicle loan settlement smoothly. Great team!',
        'itemReviewed': {
          '@type': 'LegalService',
          'name': 'CredSettle'
        }
      },
      {
        '@type': 'Review',
        'author': {
          '@type': 'Person',
          'name': 'Meera Nair'
        },
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '5'
        },
        'reviewBody': 'If you are struggling with multiple loans, CredSettle is the place to go. They prioritized my needs and gave honest advice.',
        'itemReviewed': {
          '@type': 'LegalService',
          'name': 'CredSettle'
        }
      },
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
        'reviewBody': 'Their deep knowledge of banking laws in India is impressive. Helped me negotiate a fair settlement for my gold loan.',
        'itemReviewed': {
          '@type': 'LegalService',
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
        'item': 'https://credsettle.com'
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': 'Can I Settle a Secured Loan?',
        'item': 'https://credsettle.com/can-i-settle-a-secured-loan-like-a-home-loan-or-only-unsecured-ones'
      }
    ]
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'Can I Settle a Secured Loan Like a Home Loan, or Only Unsecured Ones? A Deep Dive into Indian Debt Settlement',
    'description': 'Comprehensive guide on the feasibility and process of settling secured loans versus unsecured loans in India. Understand the risks, benefits, and legal frameworks like SARFAESI.',
    'author': {
      '@type': 'Organization',
      'name': 'CredSettle'
    },
    'datePublished': '2025-05-11',
    'dateModified': '2025-05-11',
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': 'https://credsettle.com/can-i-settle-a-secured-loan-like-a-home-loan-or-only-unsecured-ones'
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
          background: 'radial-gradient(136.19% 254.89% at -1.53% 10.35%, #1a365d 0%, #001235 100%)',
          minHeight: '50vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <div className="max-w-5xl mx-auto text-center z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
            Can I Settle a <span className="text-blue-400">Secured Loan</span><br />
            Like a Home Loan in India?
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            Understand the critical differences between secured and unsecured loan settlements. Expert insights on how to handle home, car, and personal loan defaults.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              Consult a Settlement Expert
            </Link>
          </div>
        </div>
      </section>

      {/* Client Component content */}
      <SecuredLoanSettlementClient />

      <Footer />
    </div>
  );
}
