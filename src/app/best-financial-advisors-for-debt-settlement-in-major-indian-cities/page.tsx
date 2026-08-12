import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BestFinancialAdvisorsClient from './BestFinancialAdvisorsClient';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Best Financial Advisors for Debt Settlement in India',
  description: 'Find the top financial advisors for debt settlement in major Indian cities. Discover true costs, spot scams, and negotiate a 70% debt waiver safely.',
  keywords: [
    'best financial advisors for debt settlement',
    'debt settlement agency in Mumbai',
    'financial advisor Delhi',
    'debt settlement cost India',
    'how to hire debt advisor'
  ],
  openGraph: {
    title: 'Best Financial Advisors for Debt Settlement in India',
    description: 'Find the top financial advisors for debt settlement in major Indian cities. Discover true costs, spot scams, and negotiate a 70% debt waiver safely.',
    type: 'article',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://www.credsettle.com/best-financial-advisors-for-debt-settlement-in-major-indian-cities'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Financial Advisors for Debt Settlement in India',
    description: 'Find the top financial advisors for debt settlement in major Indian cities. Discover true costs, spot scams, and negotiate a 70% debt waiver safely.'
  },
  alternates: {
    canonical: 'https://www.credsettle.com/best-financial-advisors-for-debt-settlement-in-major-indian-cities'
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function BestFinancialAdvisorsPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'Best Financial Advisors for Debt Settlement in India',
    'description': 'Find the top financial advisors for debt settlement in major Indian cities. Discover true costs, spot scams, and negotiate a 70% debt waiver safely.',
    'author': {
      '@type': 'Person',
      'name': 'Rohan Sharma',
      'image': 'https://www.credsettle.comhttps://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg'
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'CredSettle',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://www.credsettle.com/credsettle-logo.svg'
      }
    },
    'datePublished': '2026-07-10',
    'dateModified': '2026-07-10',
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': 'https://www.credsettle.com/best-financial-advisors-for-debt-settlement-in-major-indian-cities'
    }
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'What is the average timeline for an advisor to settle a debt?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'The process typically takes anywhere from three to twelve months, depending entirely on the age of your default and the internal policies of the lending institution. Older defaults generally see faster resolution times.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Will hiring a professional advisor completely protect my CIBIL score?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'No professional can prevent the negative impact of a settlement on your CIBIL score. A settlement will always reflect poorly on your credit report, but an advisor ensures you pay the absolute minimum amount required to close the account legally.'
        }
      },
      {
        '@type': 'Question',
        'name': 'How do I verify the credentials of a financial advisor in Mumbai or Delhi?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Always ask for registration details, check their physical office location, and speak directly to their assigned legal counsel. Genuine agencies operate transparently and never demand exorbitant upfront fees before reviewing your case.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Can an advisor stop bank recovery agents from visiting my house?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Yes, legitimate advisors have dedicated legal teams that immediately issue cease and desist notices to banks and third party collection agencies, effectively halting all illegal harassment and home visits.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Do these advisors work with all types of loans and credit cards?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Most top tier advisors specialize primarily in unsecured debts, such as personal loans and credit cards, because these lack collateral. Secured loans like home mortgages require entirely different legal strategies.'
        }
      },
      {
        '@type': 'Question',
        'name': 'What happens if the bank refuses the settlement offer proposed by the advisor?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Banks rarely refuse outright if the borrower is genuinely insolvent. The advisor will escalate the matter to higher banking ombudsman levels or utilize alternative dispute resolution forums like Lok Adalats to force a fair compromise.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Is it legal to use a third party agency to negotiate my debts in India?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Yes, it is entirely legal. You have the constitutional right to appoint a legal representative or a financial consultant to act as your power of attorney in financial negotiations with any registered lending institution.'
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
        'name': 'Best Financial Advisors for Debt Settlement',
        'item': 'https://www.credsettle.com/best-financial-advisors-for-debt-settlement-in-major-indian-cities'
      }
    ]
  };

  const reviewSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    'name': 'Financial Advisor Debt Negotiation Service',
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': '4.9',
      'reviewCount': '214',
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight leading-tight">
            Best Financial Advisors for Debt Settlement
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            Find the top financial advisors for debt settlement in major Indian cities. Discover true costs, spot scams, and negotiate a 70% debt waiver safely.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Get Settlement Assistance
            </Link>
          </div>
        </div>
      </section>

      <BestFinancialAdvisorsClient />

      <Footer />
    </div>
  );
}
