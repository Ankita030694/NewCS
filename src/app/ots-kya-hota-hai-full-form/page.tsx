import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import OtsKyaHotaHaiClient from './OtsKyaHotaHaiClient';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'OTS Kya Hota Hai? Full Form & Bank Settlement Process',
  description: 'What is the full form of OTS? Learn about One Time Settlement eligibility, cost breakdown, and its impact on your CIBIL score in our complete guide.',
  keywords: [
    'ots kya hota hai',
    'ots full form',
    'one time settlement full form',
    'what is ots in banking',
    'ots scheme',
    'loan settlement ots',
    'ots full form in banking'
  ],
  openGraph: {
    title: 'OTS Kya Hota Hai? Full Form & Bank Settlement Process',
    description: 'What is the full form of OTS? Learn about One Time Settlement eligibility, cost breakdown, and its impact on your CIBIL score in our complete guide.',
    type: 'article',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://credsettle.com/ots-kya-hota-hai-full-form'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OTS Kya Hota Hai? Full Form & Bank Settlement Process',
    description: 'What is the full form of OTS? Learn about One Time Settlement eligibility, cost breakdown, and its impact on your CIBIL score in our complete guide.'
  },
  alternates: {
    canonical: 'https://credsettle.com/ots-kya-hota-hai-full-form'
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function OtsKyaHotaHaiPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'OTS Kya Hota Hai? Full Form & Bank Settlement Process',
    'description': 'What is the full form of OTS? Learn about One Time Settlement eligibility, cost breakdown, and its impact on your CIBIL score in our complete guide.',
    'author': {
      '@type': 'Person',
      'name': 'Rohan Sharma',
      'image': 'https://credsettle.comhttps://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg'
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'CredSettle',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://credsettle.com/credsettle-logo.svg'
      }
    },
    'datePublished': '2026-07-08',
    'dateModified': '2026-07-08',
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': 'https://credsettle.com/ots-kya-hota-hai-full-form'
    }
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'What is the exact full form of OTS in Indian banking?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'The full form of OTS in Indian banking is One Time Settlement. It is a formal mechanism where the bank accepts a single, discounted payment to resolve an outstanding loan or credit card debt.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Is an OTS a legal way to resolve debt?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Yes, an OTS is completely legal and regulated by the Reserve Bank of India (RBI). It is a recognized method for banks to recover bad loans without pursuing lengthy litigation.'
        }
      },
      {
        '@type': 'Question',
        'name': 'How much discount can I get in a One Time Settlement?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'The discount percentage varies based on the age of the default and your proven hardship. Waivers can range from thirty percent to as high as seventy five percent of the total outstanding balance.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Does applying for an OTS guarantee approval?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'No, approval is at the sole discretion of the bank. You must prove genuine financial hardship, such as severe medical emergencies or job loss, to qualify for the settlement.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Will my CIBIL score recover after taking an OTS?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Your CIBIL score will drop initially because the account is marked as Settled rather than Closed. However, with disciplined financial behavior over several years, you can gradually rebuild your credit score.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Can I pay the OTS amount in installments?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'While a true OTS requires a single lump sum payment, some banks may allow you to pay the agreed settlement amount in two or three short term installments, depending on the negotiation.'
        }
      },
      {
        '@type': 'Question',
        'name': 'What happens if I miss the OTS payment deadline?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'If you miss the deadline, the settlement agreement becomes void. The bank will reverse all waivers, reinstate the total outstanding balance with penalties, and resume aggressive collection efforts.'
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
        'name': 'OTS Kya Hota Hai Full Form Guide',
        'item': 'https://credsettle.com/ots-kya-hota-hai-full-form'
      }
    ]
  };

  const reviewSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    'name': 'One Time Settlement Negotiation Service',
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': '4.9',
      'reviewCount': '210',
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
            OTS Kya Hota Hai? Complete Full Form Guide
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            Discover the exact meaning of OTS, the strict eligibility criteria, and a detailed cost breakdown to resolve your debt permanently.
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

      <OtsKyaHotaHaiClient />

      <Footer />
    </div>
  );
}
