import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HowToSettle7DaysLoanAppClient from './HowToSettle7DaysLoanAppClient';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to Settle 7-Days Loan App | Stop Harassment & Debt Relief | CredSettle',
  description: 'Learn how to settle illegal 7-day loan apps in India. Stop harassment from recovery agents, report cybercrime, and reclaim your financial dignity. Expert legal guide.',
  keywords: [
    'how to settle 7 days loan app',
    '7 day loan app harassment',
    'illegal loan apps india',
    'loan app extortion',
    'rbi digital lending guidelines',
    'report loan app cybercrime',
    'instant loan app settlement',
    'stop recovery agent calls',
    'cyber crime helpline 1930',
    'how to stop loan app blackmail'
  ],
  openGraph: {
    title: 'How to Settle 7-Days Loan App | Stop Harassment | CredSettle',
    description: 'Expert legal guide on handling illegal 7-day loan apps. Stop the blackmail and harassment today.',
    type: 'article',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://www.credsettle.com/how-to-settle-7-days-loan-app'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Settle 7-Days Loan App | CredSettle',
    description: 'Professional guide to resolving illegal loan app harassment and settlement.'
  },
  alternates: {
    canonical: 'https://www.credsettle.com/how-to-settle-7-days-loan-app'
  }
};

export default function HowToSettle7DaysLoanAppPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'How to Settle 7-Days Loan App: The Ultimate Legal Guide 2026',
    'description': 'A comprehensive guide on dealing with illegal 7-day loan apps, stopping harassment, and legal settlement strategies in India.',
    'author': {
      '@type': 'Organization',
      'name': 'CredSettle'
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'CredSettle',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://www.credsettle.com/credsettle-logo.svg'
      }
    },
    'datePublished': '2026-04-18',
    'dateModified': '2026-04-18',
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': 'https://www.credsettle.com/how-to-settle-7-days-loan-app'
    }
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'Are 7-day loan apps legal in India?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Most 7-day loan apps are illegal as they are not registered with the RBI or associated with a valid NBFC. They often violate data privacy laws and engage in extortion.'
        }
      },
      {
        '@type': 'Question',
        'name': 'What should I do if a loan app is threatening my contacts?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Immediately stop paying and communicating with them. Inform your contacts about the scam, document all evidence, and file a complaint at cybercrime.gov.in or call 1930.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Can I settle an illegal loan app debt?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Technically, you do not owe money to illegal entities. However, a legal settlement or formal closure through a mediator like CredSettle can help stop the harassment permanently.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Will I go to jail for not paying a 7-day loan?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'No. Defaulting on a loan is a civil matter. Furthermore, illegal apps cannot take you to court. Their threats of arrest are fake and baseless.'
        }
      },
      {
        '@type': 'Question',
        'name': 'How do I report a loan app to the RBI?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'You can report illegal lending practices through the RBI CMS portal or the Sachet portal (sachet.rbi.org.in).'
        }
      },
      {
        '@type': 'Question',
        'name': 'Do loan apps have access to my gallery?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Yes, if you granted permission during installation, they can steal your photos and contacts. This is why you should uninstall the app and revoke permissions immediately.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Can recovery agents visit my house for a 7-day loan?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Illegal apps almost never send physical agents because they operate anonymously. They rely solely on digital harassment and social shaming.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Is my CIBIL score affected by illegal loan apps?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'In most cases, no. Illegal apps are not connected to credit bureaus. However, some apps linked to third-party NBFCs might report defaults.'
        }
      },
      {
        '@type': 'Question',
        'name': 'How can CredSettle help with loan app harassment?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'We provide legal advocacy to stop the harassment, handle all communications with the lenders, and ensure a formal closure of the dispute.'
        }
      },
      {
        '@type': 'Question',
        'name': 'What is the "Seven Year Rule" for loan records?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'A settled or defaulted status stays on your credit report for seven years. However, this only applies to regulated entities, not illegal apps.'
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
        'item': 'https://www.credsettle.com'
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': 'How to Settle 7-Days Loan App',
        'item': 'https://www.credsettle.com/how-to-settle-7-days-loan-app'
      }
    ]
  };

  const reviewSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    'name': '7-Day Loan App Settlement Service',
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': '4.9',
      'reviewCount': '850',
      'bestRating': '5',
      'worstRating': '1'
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="review-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

      {/* Hero Section */}
      <section 
        className="relative text-white pt-32 pb-20 px-4 md:px-8"
        style={{
          background: 'radial-gradient(136.19% 254.89% at -1.53% 10.35%, #2F6CE2 0%, #001235 100%)',
          minHeight: '60vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <div className="max-w-6xl mx-auto text-center z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight">
            How to Settle 7-Day Loan Apps<br />
            <span className="text-blue-300">Stop Harassment & Reclaim Peace</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            Victim of illegal loan app extortion? Learn the legal way to stop harassment, protect your contacts, and settle your debt for good.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Get Legal Protection
            </Link>
          </div>
        </div>
      </section>

      <HowToSettle7DaysLoanAppClient />
      
      <Footer />
    </div>
  );
}
