import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SeniorCitizenLoanClient from './SeniorCitizenLoanClient';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Loan Settlement for Senior Citizens & Pension Holders in India',
  description: 'Retired and defaulted on a personal loan or credit card in India? Learn how senior citizens can protect their pension and negotiate a loan settlement legally.',
  keywords: [
    'senior citizen loan default pension only income India',
    'can bank deduct pension for loan recovery',
    'retired person personal loan settlement',
    'pension holder loan default what happens',
    'loan settlement for 60 plus age India'
  ],
  openGraph: {
    title: 'Loan Settlement for Senior Citizens & Pension Holders in India',
    description: 'Retired and defaulted on a personal loan or credit card in India? Learn how senior citizens can protect their pension and negotiate a loan settlement legally.',
    type: 'article',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://www.credsettle.com/loan-settlement-for-senior-citizens-pension-holders-india'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Loan Settlement for Senior Citizens & Pension Holders in India',
    description: 'Learn how senior citizens can protect their pension and negotiate a loan settlement legally.'
  },
  alternates: {
    canonical: 'https://www.credsettle.com/loan-settlement-for-senior-citizens-pension-holders-india'
  }
};

export default function SeniorCitizenLoanPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'Loan Settlement for Senior Citizens & Pension Holders in India',
    'description': 'Retired and defaulted on a personal loan or credit card in India? Learn how senior citizens can protect their pension and negotiate a loan settlement legally.',
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
    'datePublished': new Date().toISOString().split('T')[0],
    'dateModified': new Date().toISOString().split('T')[0],
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': 'https://www.credsettle.com/loan-settlement-for-senior-citizens-pension-holders-india'
    }
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'Can a bank deduct money directly from my pension account for loan recovery?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'No. Banks cannot automatically deduct money from your pension account to cover a defaulted personal loan or credit card without a specific court order, and even then, pension income is heavily protected under Section 60 of the CPC.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Is it legal for recovery agents to visit my home if I am a senior citizen?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'While banks can send representatives, harassment, abuse, or visiting at odd hours is illegal. RBI guidelines clearly state that recovery agents must respect the privacy and dignity of all borrowers, especially senior citizens.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Will I be arrested for failing to pay my credit card dues after retirement?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'No. Defaulting on a credit card or personal loan is a civil matter. You cannot be arrested or sent to jail for a civil debt default in India, regardless of what recovery agents might falsely claim.'
        }
      },
      {
        '@type': 'Question',
        'name': 'How much of my debt can be waived off during a settlement?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Debt waiver amounts depend on your specific financial hardship. For senior citizens with limited pension income, banks are often willing to waive a significant portion of the interest and penalties, and sometimes even a part of the principal.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Will a loan settlement affect my pension payments?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'No. A loan settlement is an agreement between you and the lending bank. It has absolutely no impact on the government or private pension payments you receive from your former employer.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Do I need a lawyer to negotiate a loan settlement?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'While not strictly mandatory, having a legal advocate ensures your rights are protected, stops illegal harassment instantly, and usually results in a much better settlement percentage than negotiating alone.'
        }
      },
      {
        '@type': 'Question',
        'name': 'What documents are required to prove my financial hardship?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'You will typically need to provide your pension slips, medical bills if applicable, bank statements showing limited income, and a formal letter explaining your inability to continue paying the original EMI.'
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
        'name': 'Loan Settlement for Senior Citizens & Pension Holders in India',
        'item': 'https://www.credsettle.com/loan-settlement-for-senior-citizens-pension-holders-india'
      }
    ]
  };

  const reviewSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    'name': 'Senior Citizen Loan Settlement Advisory Service',
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': '4.9',
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
            Loan Settlement for Senior Citizens & Pension Holders<br />
            <span className="text-blue-300">Protect Your Pension legally</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            Retired and defaulted on a loan in India? Learn how to legally stop recovery harassment and negotiate an affordable settlement on a fixed pension.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Consult a Legal Expert Today
            </Link>
          </div>
        </div>
      </section>

      <main>
        <SeniorCitizenLoanClient />
      </main>
      
      <Footer />
    </div>
  );
}
