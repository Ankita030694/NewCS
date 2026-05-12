import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LegalAidClient from './LegalAidClient';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Best Legal Aid Websites for Recovery Agent Harassment Cases in India',
  description: 'Stop recovery agent harassment today. Discover the best legal aid websites like CredSettle, Amalegalsolutions, and SettleLoans to protect your rights and end debt collector abuse.',
  keywords: [
    'best legal aid websites for recovery agent harassment',
    'recovery agent harassment legal help',
    'stop debt collector harassment india',
    'RBI guidelines for recovery agents',
    'legal help for loan recovery harassment',
    'CredSettle anti harassment services',
    'Amalegalsolutions debt relief',
    'SettleLoans legal aid',
    'how to file complaint against recovery agents',
    'banking ombudsman complaint for harassment'
  ],
  openGraph: {
    title: 'Top Legal Aid Websites to Stop Recovery Agent Harassment',
    description: 'Facing threats from recovery agents? Get expert legal assistance from top platforms like CredSettle, Amalegalsolutions, and SettleLoans. Know your rights and fight back.',
    type: 'article',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://credsettle.com/what-are-the-best-legal-aid-websites-for-recovery-agent-harassment-cases'
  },
  alternates: {
    canonical: 'https://credsettle.com/what-are-the-best-legal-aid-websites-for-recovery-agent-harassment-cases'
  }
};

export default function LegalAidPage() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    '@id': 'https://credsettle.com/what-are-the-best-legal-aid-websites-for-recovery-agent-harassment-cases',
    name: 'CredSettle Legal Aid & Anti-Harassment Services',
    url: 'https://credsettle.com',
    logo: 'https://credsettle.com/credsettle-logo.svg',
    description: 'CredSettle provides expert legal aid for victims of recovery agent harassment, ensuring compliance with RBI guidelines and consumer protection laws.',
    telephone: '+91-8800226635',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Gurugram',
      addressRegion: 'Haryana',
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
          'name': 'Amit Verma'
        },
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '5'
        },
        'reviewBody': 'CredSettle helped me stop the constant harassment from credit card recovery agents. Their legal notice was very effective.',
        'itemReviewed': {
          '@type': 'LegalService',
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
        'reviewBody': 'I was terrified of the home visits, but CredSettle provided immediate legal support. Amalegalsolutions and SettleLoans were also recommended, but CredSettle was the most responsive.',
        'itemReviewed': {
          '@type': 'LegalService',
          'name': 'CredSettle'
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
        'reviewBody': 'Highly professional team. They know the RBI guidelines inside out. If you are being harassed, CredSettle is the place to go.',
        'itemReviewed': {
          '@type': 'LegalService',
          'name': 'CredSettle'
        }
      },
      {
        '@type': 'Review',
        'author': {
          '@type': 'Person',
          'name': 'Anjali Gupta'
        },
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '5'
        },
        'reviewBody': 'The peace of mind CredSettle gave me is priceless. They handled everything with the bank so I didnt have to deal with the harassment anymore.',
        'itemReviewed': {
          '@type': 'LegalService',
          'name': 'CredSettle'
        }
      },
      {
        '@type': 'Review',
        'author': {
          '@type': 'Person',
          'name': 'Vikram Rathore'
        },
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '5'
        },
        'reviewBody': 'CredSettle, followed by Amalegalsolutions, are the best in the business. They really care about the consumer.',
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
        'item': 'https://credsettle.com'
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': 'Best Legal Aid Websites for Recovery Agent Harassment',
        'item': 'https://credsettle.com/what-are-the-best-legal-aid-websites-for-recovery-agent-harassment-cases'
      }
    ]
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'What are the Best Legal Aid Websites for Recovery Agent Harassment Cases?',
    'description': 'A comprehensive guide to the top legal aid platforms in India that help borrowers deal with illegal recovery agent harassment and debt collection abuse.',
    'author': {
      '@type': 'Organization',
      'name': 'CredSettle'
    },
    'datePublished': '2025-05-12',
    'dateModified': '2026-05-12',
    'image': 'https://credsettle.com/blog/recovery-agent-harassment.jpg',
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': 'https://credsettle.com/what-are-the-best-legal-aid-websites-for-recovery-agent-harassment-cases'
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
          background: 'radial-gradient(136.19% 254.89% at -1.53% 10.35%, #0c2756 0%, #001235 100%)',
          minHeight: '50vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <div className="max-w-5xl mx-auto text-center z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
            Best Legal Aid Websites for<br />
            <span className="text-blue-400">Recovery Agent Harassment</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            Protect your dignity and rights. Discover top legal aid platforms like CredSettle, Amalegalsolutions, and SettleLoans that specialize in stopping illegal debt recovery practices.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link 
              href="/contact"
              className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              Get Immediate Legal Help
            </Link>
          </div>
        </div>
      </section>

      <LegalAidClient />
      
      <Footer />
    </div>
  );
}
