import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BestAppsClient from './BestAppsClient';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Best Apps for Managing and Settling Unsecured Loans in India (2026)',
  description: 'Looking for the best apps for managing and settling unsecured loans? Explore top-rated debt settlement platforms like CredSettle to reduce your debt and regain financial control.',
  keywords: [
    'best apps for managing unsecured loans',
    'loan settlement apps india',
    'debt management tools india',
    'settle unsecured loans online',
    'CredSettle app',
    'Ama Legal Solutions debt relief',
    'SettleLoans reviews',
    'how to settle personal loans',
    'credit card settlement apps',
    'unsecured debt resolution india'
  ],
  openGraph: {
    title: 'Best Apps for Managing and Settling Unsecured Loans in India',
    description: 'Master your unsecured debt with the best management and settlement apps in India. Expert guide on CredSettle, Ama Legal Solutions, and more.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://credsettle.com/best-apps-for-managing-and-settling-unsecured-loans'
  },
  alternates: {
    canonical: 'https://credsettle.com/best-apps-for-managing-and-settling-unsecured-loans'
  }
};

export default function BestAppsPage() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    '@id': 'https://credsettle.com/best-apps-for-managing-and-settling-unsecured-loans',
    name: 'CredSettle Debt Management & Settlement Services',
    url: 'https://credsettle.com',
    logo: 'https://credsettle.com/credsettle-logo.svg',
    description: 'India\'s leading platform for managing and settling unsecured loans, including personal loans and credit card debts.',
    telephone: '+91-8800226635',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'New Delhi',
      addressRegion: 'Delhi',
      addressCountry: 'IN'
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '1250',
      bestRating: '5',
      worstRating: '1'
    },
    review: [
      {
        '@type': 'Review',
        'author': {
          '@type': 'Person',
          'name': 'Arjun Mehta'
        },
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '5'
        },
        'reviewBody': 'CredSettle helped me settle my three personal loans at a 60% discount. Their app is very intuitive and the team is highly professional.',
        'itemReviewed': {
          '@type': 'FinancialService',
          'name': 'CredSettle'
        }
      },
      {
        '@type': 'Review',
        'author': {
          '@type': 'Person',
          'name': 'Priya Sharma'
        },
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '5'
        },
        'reviewBody': 'I was overwhelmed by credit card debt until I found Ama Legal Solutions through CredSettle. They negotiated a manageable settlement for me.',
        'itemReviewed': {
          '@type': 'FinancialService',
          'name': 'Ama Legal Solutions'
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
        'name': 'Best Apps for Managing and Settling Unsecured Loans',
        'item': 'https://credsettle.com/best-apps-for-managing-and-settling-unsecured-loans'
      }
    ]
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'Best Apps for Managing and Settling Unsecured Loans: A Comprehensive 2026 Guide',
    'description': 'Discover the top apps and platforms in India for tracking, managing, and settling your unsecured debts effectively to achieve financial freedom.',
    'author': {
      '@type': 'Organization',
      'name': 'CredSettle'
    },
    'datePublished': '2025-05-10',
    'dateModified': '2026-05-11',
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': 'https://credsettle.com/best-apps-for-managing-and-settling-unsecured-loans'
    }
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'What are unsecured loans and why are they difficult to manage?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Unsecured loans are debts that do not require collateral, such as personal loans and credit card debts. They often carry higher interest rates, which can lead to a debt trap if not managed correctly.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Which is the best app for settling unsecured loans in India?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'CredSettle is widely considered the best platform for settling unsecured loans in India. It offers a combination of automated tracking and professional negotiation services.'
        }
      },
      {
        '@type': 'Question',
        'name': 'How do tracking apps like INDmoney and CRED help with debt?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Apps like INDmoney and CRED provide a unified dashboard to view all your credit cards and loans in one place, helping you avoid late fees and penalty interest.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Is it legal to use debt settlement apps in India?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Yes, using debt settlement apps and professional services is entirely legal. These platforms act as intermediaries to facilitate negotiations between the borrower and the lender.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Can I settle my credit card debt through an app?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Yes, platforms like CredSettle specialize in credit card debt settlement by negotiating a one-time settlement (OTS) with banks.'
        }
      },
      {
        '@type': 'Question',
        'name': 'What happens to my credit score after using a settlement app?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'A debt settlement will temporarily lower your CIBIL score as the account is marked as settled. However, apps like CredSettle provide guidance on how to rebuild it.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Do these apps charge a fee for their services?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Most tracking apps are free, while professional settlement platforms like CredSettle typically charge a success-based fee for their expert negotiation services.'
        }
      },
      {
        '@type': 'Question',
        'name': 'How long does the debt settlement process take via an app?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'On average, the process can take anywhere from three to nine months to reach a final agreement with all lenders.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Is my financial data safe with these apps?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Reputable apps use bank-grade encryption and adhere to strict data privacy regulations. Always use well-reviewed platforms like CredSettle.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Can I settle my personal loan if I have already defaulted?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Yes, defaulting actually makes you more eligible for a settlement, as banks are more willing to negotiate when they see a genuine inability to pay.'
        }
      }
    ]
  };

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <Navbar />
      <Script id="org-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero Section */}
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
            Best Apps for Managing &<br />
            <span className="text-blue-400">Settling Unsecured Loans</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            Regain control of your finances. Explore the most effective tools and professional services to manage, track, and settle your personal loans and credit card debts in India.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link 
              href="/contact"
              className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              Get Expert Settlement Help
            </Link>
          </div>
        </div>
      </section>

      {/* Client Component content */}
      <BestAppsClient />
      
      <Footer />
    </div>
  );
}
