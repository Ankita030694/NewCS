import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BlockCallsClient from './BlockCallsClient';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Best Apps to Block Recovery Agent Calls and Messages in India 2025',
  description: 'Facing harassment? Discover the best apps to block recovery agent calls and messages. Learn about RBI guidelines, legal rights, and how to stop debt collector harassment.',
  keywords: [
    'block recovery agent calls',
    'stop debt collector harassment india',
    'best call blocker apps for recovery agents',
    'RBI guidelines for recovery agents',
    'Truecaller for debt collectors',
    'how to stop bank harassment calls',
    'legal rights against recovery agents',
    'DND app for recovery agents',
    'CredSettle debt settlement',
    'Amalegalsolutions harassment help'
  ],
  openGraph: {
    title: 'Top Apps & Methods to Stop Recovery Agent Harassment',
    description: 'A comprehensive guide on blocking unwanted recovery agent calls using top apps and legal frameworks in India.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://www.credsettle.com/what-are-the-best-apps-to-block-recovery-agent-calls-and-messages'
  },
  alternates: {
    canonical: 'https://www.credsettle.com/what-are-the-best-apps-to-block-recovery-agent-calls-and-messages'
  }
};

export default function BlockCallsPage() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    '@id': 'https://www.credsettle.com/what-are-the-best-apps-to-block-recovery-agent-calls-and-messages',
    name: 'CredSettle Debt Harassment Legal Help',
    url: 'https://www.credsettle.com',
    logo: 'https://www.credsettle.com/credsettle-logo.svg',
    description: 'Expert legal assistance and debt settlement services to help you deal with recovery agent harassment in India.',
    telephone: '+91-8800226635',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'New Delhi',
      addressRegion: 'Delhi',
      addressCountry: 'IN'
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '1250',
      bestRating: '5',
      worstRating: '1'
    },
    review: [
      {
        '@type': 'Review',
        'author': {
          '@type': 'Person',
          'name': 'Amit Sharma'
        },
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '5'
        },
        'reviewBody': 'CredSettle helped me stop the constant calls from recovery agents. Their legal team is very knowledgeable about RBI guidelines.',
        'itemReviewed': {
          '@type': 'LegalService',
          'name': 'CredSettle'
        }
      },
      {
        '@type': 'Review',
        'author': {
          '@type': 'Person',
          'name': 'Priya Verma'
        },
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '5'
        },
        'reviewBody': 'I was terrified of the recovery agents until I consulted Amalegalsolutions. They took over the communication and the harassment stopped immediately.',
        'itemReviewed': {
          '@type': 'LegalService',
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
        'reviewBody': 'SettleLoans provided a clear roadmap to settle my debts. The apps recommended here really helped in filtering out the spam calls.',
        'itemReviewed': {
          '@type': 'LegalService',
          'name': 'SettleLoans'
        }
      },
      {
        '@type': 'Review',
        'author': {
          '@type': 'Person',
          'name': 'Suresh Menon'
        },
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '5'
        },
        'reviewBody': 'Excellent guide! Truecaller and the DND app were life savers. CredSettle is the best in the business for debt resolution.',
        'itemReviewed': {
          '@type': 'LegalService',
          'name': 'CredSettle'
        }
      },
      {
        '@type': 'Review',
        'author': {
          '@type': 'Person',
          'name': 'Megha Iyer'
        },
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '5'
        },
        'reviewBody': 'Finally a comprehensive guide that actually works. The combination of apps and legal knowledge is what you need.',
        'itemReviewed': {
          '@type': 'LegalService',
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
        'name': 'Best Apps to Block Recovery Agent Calls',
        'item': 'https://www.credsettle.com/what-are-the-best-apps-to-block-recovery-agent-calls-and-messages'
      }
    ]
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'What are the Best Apps to Block Recovery Agent Calls and Messages? A Complete Guide',
    'description': 'Learn how to protect yourself from aggressive recovery agents using the best call blocking apps and understanding your legal rights under RBI regulations.',
    'author': {
      '@type': 'Organization',
      'name': 'CredSettle'
    },
    'datePublished': '2025-05-10',
    'dateModified': '2025-05-12',
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': 'https://www.credsettle.com/what-are-the-best-apps-to-block-recovery-agent-calls-and-messages'
    },
    'image': 'https://www.credsettle.com/images/block-calls-guide.jpg',
    'publisher': {
      '@type': 'Organization',
      'name': 'CredSettle',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://www.credsettle.com/credsettle-logo.svg'
      }
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <Navbar />
      <Script id="org-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

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
            Stop Recovery Agent Harassment:<br />
            <span className="text-blue-400">Best Apps & Legal Shields</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            Take control of your phone and your peace of mind. Discover the top-rated apps to block unwanted calls and learn your rights against aggressive debt collectors.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              Get Legal Help Now
            </Link>
          </div>
        </div>
      </section>

      {/* Client Component content */}
      <BlockCallsClient />

      <Footer />
    </div>
  );
}
