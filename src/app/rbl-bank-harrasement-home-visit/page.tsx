import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import RBLHomeVisitClient from './RBLHomeVisitClient';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Stop RBL Bank Harassment Home Visit | Debt Recovery Rules 2025',
  description: 'Proved legal strategies to stop RBL bank recovery agent harassment home visit. Learn RBI guidelines, your rights, and how to file a complaint against an RBL collection agent.',
  keywords: [
    'rbl bank harassment home visit',
    'rbl bank recovery agent harassment',
    'stop rbl bank recovery agent',
    'rbl credit card recovery agent harassment',
    'how to handle rbl bank recovery agents',
    'rbl loan default consequences',
    'rbl bank collection agency complaints',
    'RBI guidelines for rbl bank recovery agents',
    'rbl bank personal loan recovery process'
  ],
  openGraph: {
    title: 'Stop RBL Bank Harassment Home Visits | Legal Guide & RBI Rules',
    description: 'Expert legal guide to stop RBL bank collection agents from visiting your home or office. Know your rights under RBI guidelines and protect your privacy today.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://www.credsettle.com/rbl-bank-harrasement-home-visit'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stop RBL Bank Harassment Home Visits | RBI Rules 2025',
    description: 'Expert advice on stopping RBL bank recovery agent harassment at your home. Know the law and protect your family privacy.'
  },
  alternates: {
    canonical: 'https://www.credsettle.com/rbl-bank-harrasement-home-visit'
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

export default function RBLRecoveryVisitPage() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    '@id': 'https://www.credsettle.com/rbl-bank-harrasement-home-visit',
    name: 'CredSettle Debt Relief Services',
    legalName: 'CredSettle Legal Services',
    url: 'https://www.credsettle.com',
    logo: 'https://www.credsettle.com/credsettle-logo.svg',
    description: 'Professional legal consultation and debt relief services to stop illegal rbl bank harassment home visit and settle loans with RBI compliance.',
    telephone: '+91-9289707648',
    email: 'support@credsettle.com',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN'
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '13245',
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
        'name': 'RBL Bank Harassment Home Visit',
        'item': 'https://www.credsettle.com/rbl-bank-harrasement-home-visit'
      }
    ]
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'How to Stop RBL Bank Harassment Home Visit: The Definitive Legal Guide (2025)',
    'description': 'A massive guide on stopping unauthorized RBL Bank collection agent visits, understanding RBI regulations, and exercising your legal rights against harassment.',
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
      '@id': 'https://www.credsettle.com/rbl-bank-harrasement-home-visit'
    }
  };

  const serviceReviewSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': 'RBL Bank Harassment Protection',
    'description': 'Professional legal consultation and debt relief services to stop illegal rbl bank harassment home visit and settle loans legally.',
    'provider': {
      '@type': 'FinancialService',
      'name': 'CredSettle',
      'url': 'https://www.credsettle.com'
    },
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': '4.8',
      'reviewCount': '13245',
      'bestRating': '5',
      'worstRating': '1'
    },
    'review': [
      {
        '@type': 'Review',
        'author': { '@type': 'Person', 'name': 'Aditya Singh' },
        'reviewRating': { '@type': 'Rating', 'ratingValue': '5' },
        'reviewBody': 'CredSettle provided immediate legal support when RBL agents were visiting my house. Their understanding of RBI home visit rules stopped the harassment instantly.'
      },
      {
        '@type': 'Review',
        'author': { '@type': 'Person', 'name': 'Pooja Desai' },
        'reviewRating': { '@type': 'Rating', 'ratingValue': '5' },
        'reviewBody': 'RBL collection agents used to show up at 8 PM and shout. CredSettle legal team stopped it within 48 hours. I feel safe at home again.'
      },
      {
        '@type': 'Review',
        'author': { '@type': 'Person', 'name': 'Rahul Mehta' },
        'reviewRating': { '@type': 'Rating', 'ratingValue': '4' },
        'reviewBody': 'The guidance on RBI rules helped me face the RBL bank agents with confidence. CredSettle then negotiated my settlement perfectly.'
      }
    ]
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'Can an RBL Bank recovery agent visit my home without notice?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'No. According to RBI guidelines, RBL Bank must provide a prior written notice before a recovery agent visits a borrower premises.'
        }
      },
      {
        '@type': 'Question',
        'name': 'What are the permissible hours for an RBL Bank recovery agent visit?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Recovery agents can only visit or call between 8:00 AM and 7:00 PM. Any visit before or after these hours is strictly prohibited and considered harassment.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Should I allow an RBL Bank recovery agent inside my house?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'You are not legally obligated to allow a recovery agent inside your home. You can interact with them at the doorstep or in a public area. They have no legal right of forced entry.'
        }
      },
      {
        '@type': 'Question',
        'name': 'What documents must an RBL Bank agent carry?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'An agent must produce a valid Identity Card issued by the bank or agency, a copy of the bank Authorization Letter, and a specific Visit Letter mentioning your loan details.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Can RBL Bank agents discuss my debt with neighbors?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Absolutely not. Discussing a debt with third parties like neighbors, relatives, or employers is a severe violation of privacy rights and RBI guidelines against public shaming.'
        }
      },
      {
        '@type': 'Question',
        'name': 'What to do if an RBL Bank recovery agent uses abusive language?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Record the interaction immediately as evidence. File a formal complaint with the bank Nodal Officer and if not resolved, escalate to the RBI Ombudsman online.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Can I file an FIR for RBL Bank recovery agent harassment home visit?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Yes, if the agent engages in criminal intimidation, trespass, or harassment, you can file an FIR at your local police station citing relevant IPC sections.'
        }
      },
      {
        '@type': 'Question',
        'name': 'How does CredSettle stop RBL bank visits?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'CredSettle acts as your legal representative, sending official notices to RBL Bank to stop unauthorized third party visits and negotiating a formal settlement plan on your behalf.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Can RBL Bank recovery agents visit my office?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Selectively yes, but they must respect your professional environment and privacy. They cannot create a scene or disclose your debt to your colleagues or employer. The RBI has strictly penalized RBL Bank in the past for violating these exact norms.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Is defaulting on an RBL Bank loan a criminal offense?',
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
      <Script id="service-review-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceReviewSchema) }} />
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
            Stop RBL Bank Harassment Home Visit<br />
            <span className="text-blue-300">Your Action Plan & RBI Directives</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-4xl mx-auto font-light">
            Enduring an RBL Bank harassment home visit? Understand the Reserve Bank of India crucial debt recovery guidelines. Defend your peace of mind and family members against aggressive collection tactics completely within the bounds of the law.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-white text-blue-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Stop Home Visits Currently
            </Link>
          </div>
        </div>
      </section>

      <RBLHomeVisitClient />
      
      <Footer />
    </div>
  );
}
