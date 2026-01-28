import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatIsNpaClient from './WhatIsNpaClient';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'What is NPA? Meaning, Types, Impact & Resolution Guide | CredSettle',
  description: 'Detailed guide on Non-Performing Assets (NPA). Learn NPA meaning in banking, full form, npa kya hota hai, types, causes, and how to resolve NPA through settlement.',
  keywords: [
    'what is npa',
    'npa kya hota hai',
    'npa in banking',
    'non performing asset',
    'npa full form',
    'types of npa',
    'npa impact',
    'loan settlement',
    'sarfaesi act',
    'ibc code',
    'sub standard asset',
    'doubtful asset',
    'loss asset',
    'gross npa',
    'net npa'
  ],
  openGraph: {
    title: 'What is NPA? Complete Guide to Non-Performing Assets | CredSettle',
    description: 'Everything you need to know about NPA (Non-Performing Assets). From "NPA kya hota hai" to SARFAESI and settlement options.',
    type: 'article',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://credsettle.com/what-is-npa'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What is NPA? Banking Guide | CredSettle',
    description: 'Complete guide on Non-Performing Assets, their impact on your credit, and how to resolve them.'
  },
  alternates: {
    canonical: 'https://credsettle.com/what-is-npa'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    }
  }
};

export default function WhatIsNpaPage() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    '@id': 'https://credsettle.com/what-is-npa',
    name: 'CredSettle NPA Advisory',
    legalName: 'CredSettle Legal Services',
    url: 'https://credsettle.com',
    logo: 'https://credsettle.com/credsettle-logo.svg',
    description: 'Expert advisory on NPA resolution, loan settlement, and debt relief services.',
    telephone: '+91-9289707648',
    email: 'support@credsettle.com',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN'
    },
    priceRange: 'Consultation Free'
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
        'name': 'Resources',
        'item': 'https://credsettle.com/resources'
      },
      {
        '@type': 'ListItem',
        'position': 3,
        'name': 'What is NPA',
        'item': 'https://credsettle.com/what-is-npa'
      }
    ]
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'What is NPA? Complete Guide to Non-Performing Assets and Resolution',
    'description': 'A comprehensive guide explaining Non-Performing Assets (NPA) in banking, including types, causes, impact on borrowers, and legal resolution mechanisms like SARFAESI and IBC.',
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
    'datePublished': '2024-01-28',
    'dateModified': '2024-01-28',
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': 'https://credsettle.com/what-is-npa'
    }
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'What is the full form of NPA in banking?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'The full form of NPA is Non Performing Asset. It refers to a loan or advance for which the principal or interest payment remained overdue for a period of 90 days.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Does an NPA status affect my CIBIL score?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Yes, an NPA classification has a severe negative impact on your credit score. Since it indicates a default of over 90 days, your score can drop significantly.'
        }
      },
      {
        '@type': 'Question',
        'name': 'How can I remove the NPA tag from my account?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'To remove the NPA tag, you must regularize the account by paying the overdue amount including interest and penalties. Alternatively, you can opt for a One Time Settlement (OTS).'
        }
      },
      {
        '@type': 'Question',
        'name': 'Can a bank seize my property if my loan becomes NPA?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Yes, for secured loans, the bank has the right to initiate proceedings under the SARFAESI Act to take possession of the collateral.'
        }
      },
      {
        '@type': 'Question',
        'name': 'What is the difference between Gross NPA and Net NPA?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Gross NPA represents the total value of all non-performing loans in a bank. Net NPA is the value remaining after deducting the provisions from the Gross NPA.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Can I get a loan after my account becomes NPA?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Getting a standard loan from major banks is very difficult with an active NPA. Some NBFCs might provide loans at higher interest rates, but improving your credit score is recommended first.'
        }
      }
    ]
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <Script id="org-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero Section */}
      <section 
        className="relative text-white pt-32 pb-20 px-4 md:px-8"
        style={{
          background: 'radial-gradient(136.19% 254.89% at -1.53% 10.35%, #2F6CE2 0%, #001235 100%)',
          minHeight: '50vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <div className="max-w-6xl mx-auto text-center z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight">
            What is NPA?<br />
            <span className="text-blue-300">Understanding Non-Performing Assets</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light">
            Everything you need to know about banking defaults, the types of NPAs, and how to resolve them to regain your financial freedom.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Get Free Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Client Component content */}
      <WhatIsNpaClient />
      
      <Footer />
    </div>
  );
}
