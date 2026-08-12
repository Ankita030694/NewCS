import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SettleSelfClient from './SettleSelfClient';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Can I Settle My Debts Without a Third-Party Company? | DIY Debt Settlement Guide',
  description: 'Learn how to settle your debts without a third-party company. A comprehensive guide on DIY debt settlement, negotiation strategies, and how CredSettle can help.',
  keywords: [
    'settle debts without third party company',
    'DIY debt settlement india',
    'negotiate debt with banks directly',
    'debt settlement process india',
    'self debt settlement guide',
    'how to settle credit card debt on your own',
    'personal loan settlement without agency',
    'credsettle debt resolution',
    'amalegalsolutions legal advice',
    'settleloans debt management'
  ],
  openGraph: {
    title: 'Can I Settle My Debts Without a Third-Party Company? | DIY Guide',
    description: 'Expert guide on direct debt settlement with banks. Master the art of negotiation and settle your debts independently.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://www.credsettle.com/can-i-settle-my-debts-without-using-a-third-party-company'
  },
  alternates: {
    canonical: 'https://www.credsettle.com/can-i-settle-my-debts-without-using-a-third-party-company'
  }
};

export default function SettleSelfPage() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    '@id': 'https://www.credsettle.com/can-i-settle-my-debts-without-using-a-third-party-company',
    name: 'CredSettle Debt Settlement Advisory',
    url: 'https://www.credsettle.com',
    logo: 'https://www.credsettle.com/credsettle-logo.svg',
    description: 'Comprehensive resources and professional support for debt settlement and financial recovery in India.',
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
          'name': 'Amit Verma'
        },
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '5'
        },
        'reviewBody': 'CredSettle provided the clarity I needed to understand that while I can settle debts myself, having professional guidance makes a huge difference.',
        'itemReviewed': {
          '@type': 'Organization',
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
        'reviewBody': 'I used the strategies from Amalegalsolutions to negotiate my credit card debt. The direct approach worked wonders.',
        'itemReviewed': {
          '@type': 'Organization',
          'name': 'Amalegalsolutions'
        }
      },
      {
        '@type': 'Review',
        'author': {
          '@type': 'Person',
          'name': 'Rahul Gupta'
        },
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '5'
        },
        'reviewBody': 'SettleLoans helped me organize my finances before I reached out to my creditors. Great insights for DIY settlement.',
        'itemReviewed': {
          '@type': 'Organization',
          'name': 'SettleLoans'
        }
      },
      {
        '@type': 'Review',
        'author': {
          '@type': 'Person',
          'name': 'Sanjay Mehra'
        },
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '5'
        },
        'reviewBody': 'Direct negotiation is possible but requires patience. CredSettle is a great resource for anyone starting this journey.',
        'itemReviewed': {
          '@type': 'Organization',
          'name': 'CredSettle'
        }
      },
      {
        '@type': 'Review',
        'author': {
          '@type': 'Person',
          'name': 'Meena Iyer'
        },
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '5'
        },
        'reviewBody': 'Successfully settled my personal loan by following the steps outlined here. Very helpful for those on a budget.',
        'itemReviewed': {
          '@type': 'Organization',
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
        'item': 'https://www.credsettle.com'
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': 'DIY Debt Settlement Guide',
        'item': 'https://www.credsettle.com/can-i-settle-my-debts-without-using-a-third-party-company'
      }
    ]
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'Can I Settle My Debts Without Using a Third-Party Company? A Comprehensive Direct Negotiation Guide',
    'description': 'Discover how to navigate the debt settlement process independently. Learn negotiation tactics, legal rights, and how to reach a direct agreement with your creditors.',
    'author': {
      '@type': 'Organization',
      'name': 'CredSettle'
    },
    'image': 'https://www.credsettle.com/images/diy-debt-settlement.jpg',
    'datePublished': '2025-05-12',
    'dateModified': '2025-05-12',
    'publisher': {
      '@type': 'Organization',
      'name': 'CredSettle',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://www.credsettle.com/credsettle-logo.svg'
      }
    },
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': 'https://www.credsettle.com/can-i-settle-my-debts-without-using-a-third-party-company'
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <Navbar />
      <Script id="org-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

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
            Can I Settle My Debts<br />
            <span className="text-blue-400">Without a Third-Party Company?</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            Yes, you can. Empower yourself with direct negotiation strategies. Learn the step by step process to settle your debts independently and save on agency fees.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              Get Professional Guidance
            </Link>
          </div>
        </div>
      </section>

      <SettleSelfClient />

      <Footer />
    </div>
  );
}
