import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BajajHomeVisitClient from './BajajHomeVisitClient';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Stop Bajaj Finance Recovery Agent Harassment Home Visit 2025',
  description: 'Practical guide to handle and stop Bajaj Finance recovery agent harassment home visit. Stop illegal debt collection agents today using RBI rules and legal remedies.',
  keywords: [
    'bajaj finance recovery agent harassment home visit',
    'stop bajaj finance recovery',
    'bajaj finance home visit timing',
    'legal action against bajaj finance agents',
    'RBI guidelines for bajaj finance collection agents',
    'bajaj finserv recovery harassment'
  ],
  openGraph: {
    title: 'Stop Bajaj Finance Recovery Agent Harassment Home Visit | Legal Guide',
    description: 'Learn how to stop Bajaj Finance recovery agent harassment home visits permanently. Know the RBI rules and your borrower rights today.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://www.credsettle.com/bajaj-finance-recovery-agent-harrasement-home-visit'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stop Bajaj Finance Recovery Agent Harassment Home Visit',
    description: 'Expert advice on stopping Bajaj Finance recovery agents. Stop doorstep harassment entirely.'
  },
  alternates: {
    canonical: 'https://www.credsettle.com/bajaj-finance-recovery-agent-harrasement-home-visit'
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

export default function BajajRecoveryVisitPage() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    '@id': 'https://www.credsettle.com/bajaj-finance-recovery-agent-harrasement-home-visit',
    name: 'CredSettle Debt Relief Services',
    legalName: 'CredSettle Legal Services',
    url: 'https://www.credsettle.com',
    logo: 'https://www.credsettle.com/credsettle-logo.svg',
    description: 'Professional legal consultation to stop illegal bajaj finance recovery agent harassment home visit and settle loans with RBI compliance.',
    telephone: '+91-9289707648',
    email: 'support@credsettle.com',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN'
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '15400',
      bestRating: '5',
      worstRating: '1'
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
        'name': 'Bajaj Finance Recovery Agent Harassment Home Visit',
        'item': 'https://www.credsettle.com/bajaj-finance-recovery-agent-harrasement-home-visit'
      }
    ]
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'How to Handle Bajaj Finance Recovery Agent Harassment Home Visit',
    'description': 'A comprehensive legal guide on stopping Bajaj Finance recovery agent harassment home visit, RBI guidelines on collections, and legal remedies against doorstep harassment.',
    'author': {
      '@type': 'Organization',
      'name': 'CredSettle Team'
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'CredSettle',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://www.credsettle.com/credsettle-logo.svg'
      }
    },
    'datePublished': '2025-02-24',
    'dateModified': '2025-02-24',
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': 'https://www.credsettle.com/bajaj-finance-recovery-agent-harrasement-home-visit'
    }
  };


  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'Can a Bajaj finance recovery agent visit my home without notice?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'No. According to RBI guidelines, banks and NBFCs like Bajaj Finance must provide a prior written notice before a recovery agent visits a borrower premises.'
        }
      },
      {
        '@type': 'Question',
        'name': 'What are the permissible hours for a Bajaj Finance recovery agent home visit?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Recovery agents can only visit or call between 8:00 AM and 7:00 PM. Any visit before or after these hours is strictly prohibited and considered harassment.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Should I let a Bajaj Finance recovery agent enter my house?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'You are not legally obligated to allow a recovery agent inside your home. You can interact with them at the doorstep or in a public area. They have no right of forced entry.'
        }
      },
      {
        '@type': 'Question',
        'name': 'What documents must a Bajaj Finance agent carry?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'They must produce an official identity card issued by the agency and an authorization letter from Bajaj Finance with your specific loan details.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Can Bajaj finance agents discuss my debt with neighbors?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'No. Discussing a debt with neighbors, relatives, or employers is a severe violation of privacy rights and RBI guidelines against public shaming.'
        }
      },
      {
        '@type': 'Question',
        'name': 'What to do if a Bajaj finance recovery agent is abusive?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Record the interaction as evidence. Lodge a formal complaint with Bajaj Finance customer care and if unresolved, escalate it to the RBI Ombudsman online.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Can I file an FIR for Bajaj Finance recovery agent harassment home visit?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Yes, if the agent uses physical force, threats, or tries to trespass into your property, you can file an FIR for criminal intimidation at your local police station.'
        }
      },
      {
        '@type': 'Question',
        'name': 'How does CredSettle stop Bajaj finance visits?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'CredSettle sends a formal legal notice to lenders to halt unauthorized visits and acts as your legal representative, negotiating a settlement plan on your behalf.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Can Bajaj Finance recovery agents go to my office?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Yes, they can visit but must maintain professional conduct. They cannot disclose loan default information to your boss or colleagues or shout at your workplace.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Is defaulting on a Bajaj Finance loan a criminal offense?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'No. A loan default is treated as a civil dispute in India. You cannot be arrested simply because you cannot pay your EMI, and agents cannot threaten you with jail.'
        }
      }
    ]
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <Script id="org-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

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
            Stop Bajaj Finance Recovery Agent <br /> Harassment Home Visit<br />
            <span className="text-blue-300">Your Legal Rights & Action Plan</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-4xl mx-auto font-light">
            Experiencing harassment from a Bajaj Finance recovery agent during a home visit?
            Know your rights under RBI guidelines and take swift legal action to stop the doorstep threats permanently.
            Protect your family privacy today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Stop Home Visits Now
            </Link>
          </div>
        </div>
      </section>

      <BajajHomeVisitClient />

      <Footer />
    </div>
  );
}
