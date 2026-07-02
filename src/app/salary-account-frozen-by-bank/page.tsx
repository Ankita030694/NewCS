import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SalaryAccountFrozenClient from './SalaryAccountFrozenClient';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Salary Account Frozen by Bank? Legal Steps to Unfreeze It',
  description: 'Learn how to unfreeze your salary bank account blocked due to loan defaults, cybercrime liens, or unauthorized holds. Expert legal guide for professionals.',
  keywords: [
    'salary account frozen by bank',
    'bank account freeze cybercrime',
    'loan default bank account freeze',
    'unfreeze salary account',
    'RBI guidelines on account freeze',
    'bank account lien removal',
    'legal notice to unfreeze bank account',
    'stop salary deductions loan'
  ],
  openGraph: {
    title: 'Salary Account Frozen by Bank? Legal Steps to Unfreeze It',
    description: 'Expert legal guide on unfreezing your salary account blocked due to loan defaults or cybercrime liens. Protect your primary income today.',
    type: 'article',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://credsettle.com/salary-account-frozen-by-bank'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Salary Account Frozen by Bank? Unfreeze It | CredSettle',
    description: 'Professional guide to resolving frozen salary accounts and unauthorized bank liens.'
  },
  alternates: {
    canonical: 'https://credsettle.com/salary-account-frozen-by-bank'
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function SalaryAccountFrozenPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'Salary Account Frozen by Bank? Legal Steps to Unfreeze It',
    'description': 'A comprehensive legal guide on how to unfreeze a salary bank account blocked due to loan defaults, cybercrime liens, or unauthorized bank holds.',
    'author': {
      '@type': 'Person',
      'name': 'Vikram Desai',
      'image': 'https://credsettle.com/default-user.svg'
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'CredSettle',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://credsettle.com/credsettle-logo.svg'
      }
    },
    'datePublished': new Date().toISOString().split('T')[0],
    'dateModified': new Date().toISOString().split('T')[0],
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': 'https://credsettle.com/salary-account-frozen-by-bank'
    }
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'Can a bank freeze my salary account without prior notice?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Under strict RBI guidelines, banks are generally required to provide prior notice before freezing an account due to a loan default. However, in cases involving cybercrime investigations or court orders, an account can be frozen immediately without prior warning.'
        }
      },
      {
        '@type': 'Question',
        'name': 'What is the difference between a lien and a frozen account?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'A lien is a hold on a specific amount of money within your account, meaning you can still use the balance above that amount. A complete freeze blocks all debit transactions, preventing you from withdrawing any funds at all.'
        }
      },
      {
        '@type': 'Question',
        'name': 'How long does it take to unfreeze a bank account?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'The timeline depends heavily on the cause. Unfreezing an account blocked due to a loan dispute can sometimes be resolved in a few days with legal negotiation. Cybercrime freezes typically take much longer, often requiring weeks or months of legal follow up.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Can I open a new bank account if my current one is frozen?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Yes, you can legally open a new bank account with a different bank. However, if the freeze is due to a severe regulatory issue or a PAN level block, the new bank might flag your application during their KYC process.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Will my employer know if my salary account is frozen?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Your employer will not be automatically notified by the bank. However, if your employer attempts to deposit your salary and the transaction bounces due to the freeze, they will become aware of the issue.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Is it legal for a bank to deduct my entire salary for a missed EMI?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'While banks have a right to set off debts, doing so in a way that deprives a person of their basic livelihood can be challenged legally. The RBI mandates fair recovery practices that respect the borrower\'s basic survival needs.'
        }
      },
      {
        '@type': 'Question',
        'name': 'How can CredSettle help with a frozen salary account?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'CredSettle provides expert legal advocacy to communicate with banks and cybercrime authorities. We help draft legal notices, negotiate the removal of liens, and represent you to ensure your financial rights are protected and restored.'
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
        'name': 'Salary Account Frozen by Bank',
        'item': 'https://credsettle.com/salary-account-frozen-by-bank'
      }
    ]
  };

  const reviewSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    'name': 'Account Unfreezing Legal Service',
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': '4.8',
      'reviewCount': '3',
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
            Salary Account Frozen by Bank?<br />
            <span className="text-blue-300">Legal Steps to Unfreeze It</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            Discover the exact legal procedures to unblock your salary account, remove unauthorized liens, and protect your primary source of income.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Get Legal Assistance
            </Link>
          </div>
        </div>
      </section>

      <SalaryAccountFrozenClient />
      
      <Footer />
    </div>
  );
}
