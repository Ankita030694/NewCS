import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import JointLoanSettlementClient from './JointLoanSettlementClient';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Is It Possible to Settle a Joint Loan? Implications for Co-Borrowers',
  description: 'Learn if you can settle a joint loan and the legal implications for co-borrowers. Expert guidance on joint debt settlement, credit score impact, and legal rights.',
  keywords: [
    'settle joint loan',
    'joint loan settlement implications',
    'co-borrower rights in loan settlement',
    'joint debt settlement india',
    'impact of settlement on co-borrower credit score',
    'how to remove co-borrower from joint loan',
    'joint and several liability loan settlement',
    'credsettle joint loan help',
    'amalegalsolutions debt advice',
    'settleloans joint debt'
  ],
  openGraph: {
    title: 'Can You Settle a Joint Loan? Legal Guide for Co-Borrowers',
    description: 'Discover the process and consequences of settling a joint loan. Professional advice for co-borrowers on managing joint liabilities and protecting credit.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://credsettle.com/is-it-possible-to-settle-a-joint-loan-and-what-are-the-implications-for-co-borrowers'
  },
  alternates: {
    canonical: 'https://credsettle.com/is-it-possible-to-settle-a-joint-loan-and-what-are-the-implications-for-co-borrowers'
  }
};

export default function JointLoanSettlementPage() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    '@id': 'https://credsettle.com/is-it-possible-to-settle-a-joint-loan-and-what-are-the-implications-for-co-borrowers',
    name: 'CredSettle Joint Loan Resolution Services',
    url: 'https://credsettle.com',
    logo: 'https://credsettle.com/credsettle-logo.svg',
    description: 'Expert legal and financial advisory for settling joint loans and resolving co-borrower disputes.',
    telephone: '+91-8800226635',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Kolkata',
      addressRegion: 'West Bengal',
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
          'name': 'Vikram Singh'
        },
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '5'
        },
        'reviewBody': 'CredSettle helped me navigate a complex joint loan settlement after my business partner left. Their advice on co-borrower liability was life-saving.',
        'itemReviewed': {
          '@type': 'LegalService',
          'name': 'CredSettle'
        }
      },
      {
        '@type': 'Review',
        'author': {
          '@type': 'Person',
          'name': 'Meera Iyer'
        },
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '5'
        },
        'reviewBody': 'Expert guidance on joint home loan settlement. Highly recommend for anyone stuck with a co-borrower who is not paying.',
        'itemReviewed': {
          '@type': 'LegalService',
          'name': 'CredSettle'
        }
      },
      {
        '@type': 'Review',
        'author': {
          '@type': 'Person',
          'name': 'Rahul Verma'
        },
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '5'
        },
        'reviewBody': 'Professional approach to settling joint personal loans. They handled the bank negotiations seamlessly.',
        'itemReviewed': {
          '@type': 'LegalService',
          'name': 'CredSettle'
        }
      },
      {
        '@type': 'Review',
        'author': {
          '@type': 'Person',
          'name': 'Sneha Gupta'
        },
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '5'
        },
        'reviewBody': 'Detailed explanation of credit score implications for co-borrowers. Their settlement strategy worked perfectly.',
        'itemReviewed': {
          '@type': 'LegalService',
          'name': 'CredSettle'
        }
      },
      {
        '@type': 'Review',
        'author': {
          '@type': 'Person',
          'name': 'Amit Shah'
        },
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '5'
        },
        'reviewBody': 'Excellent service for resolving joint debt issues. Saved my credit score from a major hit.',
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
        'name': 'Joint Loan Settlement',
        'item': 'https://credsettle.com/is-it-possible-to-settle-a-joint-loan-and-what-are-the-implications-for-co-borrowers'
      }
    ]
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'Is It Possible to Settle a Joint Loan? Implications and Guide for Co-Borrowers',
    'description': 'A comprehensive guide on the feasibility of settling joint loans, the impact on co-borrowers, and how to protect your credit score during the process.',
    'author': {
      '@type': 'Organization',
      'name': 'CredSettle'
    },
    'datePublished': '2025-05-11',
    'dateModified': '2026-05-11',
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': 'https://credsettle.com/is-it-possible-to-settle-a-joint-loan-and-what-are-the-implications-for-co-borrowers'
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
            Is It Possible to Settle a <br />
            <span className="text-blue-400">Joint Loan?</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            Understanding the legalities and implications for co-borrowers when negotiating a settlement on shared financial liabilities.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link 
              href="/contact"
              className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              Get Expert Advisory
            </Link>
          </div>
        </div>
      </section>

      <JointLoanSettlementClient />
      
      <Footer />
    </div>
  );
}
