import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FullFormOfOtsClient from './FullFormOfOtsClient';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Full Form of OTS in Banking & CIBIL Impact',
  description: 'Learn the full form of OTS in banking, how a One Time Settlement works, eligibility, and the legal impact on your CIBIL score. Protect your credit today.',
  keywords: [
    'full form of ots',
    'one time settlement',
    'ots in banking',
    'what is ots',
    'ots settlement process',
    'cibil impact ots'
  ],
  openGraph: {
    title: 'Full Form of OTS in Banking & CIBIL Impact',
    description: 'Learn the full form of OTS in banking, how a One Time Settlement works, eligibility, and the legal impact on your CIBIL score. Protect your credit today.',
    type: 'article',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://www.credsettle.com/full-form-of-ots'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Full Form of OTS in Banking & CIBIL Impact',
    description: 'Learn the full form of OTS in banking, how a One Time Settlement works, eligibility, and the legal impact on your CIBIL score.'
  },
  alternates: {
    canonical: 'https://www.credsettle.com/full-form-of-ots'
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function FullFormOfOtsPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'Full Form of OTS in Banking & CIBIL Impact',
    'description': 'Learn the full form of OTS in banking, how a One Time Settlement works, eligibility, and the legal impact on your CIBIL score. Protect your credit today.',
    'author': {
      '@type': 'Person',
      'name': 'Rohan Sharma',
      'jobTitle': 'Senior Financial Analyst & Debt Strategist',
      'image': 'https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg'
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'CredSettle',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://www.credsettle.com/credsettle-logo.svg'
      }
    },
    'datePublished': '2026-07-08',
    'dateModified': '2026-07-08',
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': 'https://www.credsettle.com/full-form-of-ots'
    }
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'What is the full form of OTS in banking?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'The full form of OTS is One Time Settlement. It is a formal agreement where the borrower pays a negotiated lump sum amount that is less than the total outstanding debt to close the loan account.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Who is eligible for a One Time Settlement?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Borrowers who have experienced a genuine financial hardship, such as a major medical emergency, severe business loss, or prolonged unemployment, are generally eligible if their account is classified as a Non-Performing Asset.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Does an OTS affect my CIBIL score permanently?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'An OTS marks your credit report with a status of Settled, which significantly lowers your CIBIL score and remains on your record for up to seven years. It is not permanent, but it does impact future borrowing capacity for a considerable period.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Can I negotiate the OTS amount with the bank directly?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Yes, you can write directly to the grievance redressal department of the bank detailing your financial distress. Professional negotiation services can also assist in securing a higher waiver percentage based on your insolvency.'
        }
      },
      {
        '@type': 'Question',
        'name': 'What happens if I fail to pay the agreed OTS amount?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'If you miss the deadline for the OTS payment, the agreement is nullified. The bank will reinstate the original outstanding balance along with accumulated penalties and resume aggressive legal recovery actions.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Is it better to opt for an OTS or continue paying minimum dues?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Paying minimum dues traps you in a cycle of high interest debt indefinitely. An OTS provides immediate financial relief and stops harassment, but damages your credit score. It should be a last resort when full repayment is impossible.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Do banks always agree to a One Time Settlement offer?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'No, banks evaluate each case individually. They only approve an OTS if their internal risk models indicate that accepting a reduced lump sum now is mathematically more beneficial than pursuing drawn out legal recovery against an insolvent borrower.'
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
        'name': 'Full Form of OTS in Banking',
        'item': 'https://www.credsettle.com/full-form-of-ots'
      }
    ]
  };

  const reviewSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    'name': 'CredSettle One Time Settlement Advisory',
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': '4.9',
      'reviewCount': '312',
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
            Full Form of OTS in Banking
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            Understand the One Time Settlement process, discover your eligibility, and learn the exact legal impact on your credit profile.
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

      <FullFormOfOtsClient />

      <Footer />
    </div>
  );
}
