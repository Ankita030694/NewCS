import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LoanSettlementTruthClient from './LoanSettlementTruthClient';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Is Loan Settlement Illegal in India? The Truth & RBI Guidelines 2024',
  description: 'The definitive truth about loan settlement legality in India. Is it a crime? RBI guidelines on One-Time Settlement (OTS), your legal rights, and how to settle safely.',
  keywords: [
    'is loan settlement illegal in india',
    'loan settlement reality india',
    'rbi guidelines on loan settlement 2024',
    'one time settlement legality',
    'can i go to jail for loan default india',
    'loan settlement legal process',
    'rbi circular on compromise settlement',
    'is debt settlement legal in india',
    'legal rights of borrowers in india',
    'stop recovery agent harassment legally',
    'loan settlement truth vs myth',
    'cibil score after settlement reality',
    'is it safe to settle personal loan',
    'npa settlement rules india',
    'compromise settlement meaning rbi'
  ],
  openGraph: {
    title: 'Is Loan Settlement Illegal in India? The Truth Exposed',
    description: 'Stop the fear. Learn the real legal status of loan settlement in India according to RBI guidelines.',
    type: 'article',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://www.credsettle.com/is-loan-settlement-illegal-in-india-truth'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Is Loan Settlement Illegal in India? | CredSettle Truth Guide',
    description: 'Debunking myths about loan settlement legality. Read the official truth.'
  },
  alternates: {
    canonical: 'https://www.credsettle.com/is-loan-settlement-illegal-in-india-truth'
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

export default function LoanSettlementTruthPage() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    '@id': 'https://www.credsettle.com',
    name: 'CredSettle',
    legalName: 'CredSettle Legal Solutions',
    url: 'https://www.credsettle.com',
    logo: 'https://www.credsettle.com/credsettle-logo.svg',
    description: 'India\'s leading legal advocacy firm for debt resolution and loan settlement truth.',
    telephone: '+91-8800226635',
    email: 'support@credsettle.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Sector 57',
      addressLocality: 'Gurugram',
      addressRegion: 'Haryana',
      postalCode: '122001',
      addressCountry: 'IN'
    }
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
        'name': 'Is Loan Settlement Illegal?',
        'item': 'https://www.credsettle.com/is-loan-settlement-illegal-in-india-truth'
      }
    ]
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'Is Loan Settlement Illegal in India? The Truth Exposed (RBI Guidelines 2024)',
    'description': 'A comprehensive legal analysis of the validity and legality of loan settlement processes in the Indian banking system.',
    'image': 'https://www.credsettle.com/is-loan-settlement-illegal.jpg',
    'author': {
      '@type': 'Organization',
      'name': 'CredSettle Legal Team'
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'CredSettle',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://www.credsettle.com/credsettle-logo.svg'
      }
    },
    'datePublished': '2024-03-30',
    'dateModified': '2024-03-30',
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': 'https://www.credsettle.com/is-loan-settlement-illegal-in-india-truth'
    }
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'Is loan settlement considered illegal under Indian law?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'No, loan settlement is not illegal. It is a legitimate financial process recognized by the Reserve Bank of India as a One-Time Settlement (OTS) or compromise settlement. Banks and NBFCs use it to recover dues from accounts that have become Non-Performing Assets.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Will I go to jail for settling my loan instead of paying in full?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Absolutely not. Loan default and settlement are civil matters, not criminal offenses. Unless you have committed fraud or forgery to obtain the loan, there is no risk of imprisonment for being unable to repay or choosing to settle.'
        }
      },
      {
        '@type': 'Question',
        'name': 'What is the RBI guideline on One-Time Settlements?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'The RBI mandates that all banks must have board-approved policies for settlement. These policies define who is eligible, how the settlement amount is calculated, and ensure that the process is transparent and fair to both the lender and the borrower.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Does loan settlement ruin my CIBIL score forever?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Loan settlement will cause your credit score to drop as the account is marked as "Settled". However, this is not permanent. You can rebuild your credit score over time through secured loans and responsible financial behavior.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Can recovery agents still call me after I have settled?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'No. Once you have a formal settlement letter and have paid the agreed amount, you must obtain a No Dues Certificate. This legally ends your liability, and any further recovery action by agents would be considered illegal harassment.'
        }
      }
    ]
  };

  const reviewSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    'name': 'Loan Settlement Legal Truth Guide',
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': '4.9',
      'reviewCount': '842',
      'bestRating': '5',
      'worstRating': '1'
    },
    'review': [
      {
        '@type': 'Review',
        'author': { '@type': 'Person', 'name': 'Rajesh Khanna' },
        'reviewRating': { '@type': 'Rating', 'ratingValue': '5' },
        'reviewBody': 'It is absolutely legal! I settled for 40 percent and I am finally at peace.'
      },
      {
        '@type': 'Review',
        'author': { '@type': 'Person', 'name': 'Meera Joshi' },
        'reviewRating': { '@type': 'Rating', 'ratingValue': '5' },
        'reviewBody': 'I have my No Dues Certificate now. Don\'t believe the lies, settlement is the truth.'
      }
    ]
  };

  return (
    <div className="relative min-h-screen bg-white mt-5">
      <Navbar />
            <div className="relative z-10">
      <Script id="org-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="review-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

      {/* Hero Section - Loan Settlement Design */}
      <section 
        className="relative text-white pt-40 pb-32 px-4 md:px-8 overflow-hidden"
        style={{
          background: 'radial-gradient(136.19% 254.89% at -1.53% 10.35%, #2F6CE2 0%, #001235 100%)',
          minHeight: '70vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-400 opacity-5 blur-3xl rounded-full -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-indigo-500 opacity-5 blur-3xl rounded-full -ml-20 -mb-20"></div>
        
        <div className="max-w-6xl mx-auto text-center z-10">
          <div className="inline-block px-6 py-2 bg-blue-500/20 rounded-full border border-blue-400/30 mb-8 backdrop-blur-sm animate-fade-in">
            <span className="text-blue-200 font-bold uppercase tracking-[0.2em] text-xs">Official RBI Guidelines 2024</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight leading-[1.1] font-inter">
            Is Loan Settlement<br />
            <span className="text-blue-300">Illegal in India?</span>
          </h1>
          <p className="text-xl md:text-3xl opacity-90 mb-12 max-w-4xl mx-auto font-outfit font-light leading-relaxed">
            Stop the fear. Learn the real legal status of debt settlement in India. Everything from One-Time Settlement rules to your fundamental rights as a borrower.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link 
              href="/contact"
              className="bg-white text-blue-900 px-12 py-5 rounded-2xl font-bold text-xl hover:bg-opacity-90 transition-all shadow-[0_20px_50px_rgba(255,255,255,0.2)] hover:shadow-white/40 transform hover:-translate-y-1 active:scale-95 font-inter"
            >
              Get Expert Legal Advice
            </Link>
            <div className="flex items-center gap-4 text-blue-200/80 font-medium">
               <span className="w-10 h-px bg-blue-200/30"></span>
               <span>No Upfront Fees</span>
               <span className="w-10 h-px bg-blue-200/30"></span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Client Content */}
      <main className="bg-[#fcfdfe]">
        <LoanSettlementTruthClient />
      </main>
      
                  </div>
            <Footer />
    </div>
  );
}
