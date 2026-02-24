import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import RecoveryHarassmentClient from './RecoveryHarassmentClient';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to Stop Recovery Agent Harassment: Ultimate Legal Guide 2025',
  description: 'Learn the most effective ways to stop recovery agent harassment. Expert guide on RBI rules, legal rights, and practical strategies to end doorstep and phone intimidation today.',
  keywords: [
    'how to stop recovery agent harassment',
    'RBI rules for recovery agents',
    'illegal harassment by debt collectors',
    'legal rights against recovery agents india',
    'stop collection agent calls',
    'RBI guidelines for recovery agents 2025',
    'how to file complaint against recovery agent',
    'recovery agent harassment law india',
    'can recovery agent visit home',
    'consumer protection against recovery agents'
  ],
  openGraph: {
    title: 'Stop Recovery Agent Harassment | Official Legal Guide & RBI Rules',
    description: 'Comprehensive guide to ending illegal debt collection practices. Know your rights under RBI guidelines and protect your dignity.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://www.credsettle.com/how-to-stop-recovery-agent-harassment'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stop Recovery Agent Harassment | RBI Rules 2025',
    description: 'Protect yourself from aggressive recovery agents. Learn the law and stop the harassment today.'
  },
  alternates: {
    canonical: 'https://www.credsettle.com/how-to-stop-recovery-agent-harassment'
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

export default function RecoveryHarassmentPage() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    '@id': 'https://www.credsettle.com/how-to-stop-recovery-agent-harassment',
    name: 'CredSettle Debt Relief Services',
    legalName: 'CredSettle Legal Services',
    url: 'https://www.credsettle.com',
    logo: 'https://www.credsettle.com/credsettle-logo.svg',
    description: 'Professional legal consultation and debt relief services to stop illegal recovery agent harassment and settle loans with RBI compliance.',
    telephone: '+91-9289707648',
    email: 'support@credsettle.com',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN'
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '18200',
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
        'name': 'How to Stop Recovery Agent Harassment',
        'item': 'https://www.credsettle.com/how-to-stop-recovery-agent-harassment'
      }
    ]
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'How to Stop Recovery Agent Harassment: The Definitive Legal Guide (2025)',
    'description': 'A comprehensive 5000+ word guide on stopping recovery agent harassment, understanding RBI mandates, and exercising your legal rights to privacy and dignity in India.',
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
    'datePublished': '2025-02-24',
    'dateModified': '2025-02-24',
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': 'https://www.credsettle.com/how-to-stop-recovery-agent-harassment'
    }
  };

  const serviceReviewSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': 'Recovery Agent Harassment Protection',
    'description': 'Professional legal support and consultation to stop aggressive debt collection and negotiate loan settlements.',
    'provider': {
      '@type': 'FinancialService',
      'name': 'CredSettle',
      'url': 'https://www.credsettle.com'
    },
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': '4.9',
      'reviewCount': '18200',
      'bestRating': '5',
      'worstRating': '1'
    },
    'review': [
      {
        '@type': 'Review',
        'author': { '@type': 'Person', 'name': 'Arjun Sharma' },
        'reviewRating': { '@type': 'Rating', 'ratingValue': '5' },
        'reviewBody': 'I was being harassed daily by multiple agents. CredSettle legal team stepped in and all calls stopped within 24 hours. Their knowledge of RBI rules is life-saving.'
      },
      {
        '@type': 'Review',
        'author': { '@type': 'Person', 'name': 'Priya Nair' },
        'reviewRating': { '@type': 'Rating', 'ratingValue': '5' },
        'reviewBody': 'Agents were calling my family and neighbors. CredSettle issued a formal legal notice, and the bank immediately shifted to professional communication. Highly recommended!'
      },
      {
        '@type': 'Review',
        'author': { '@type': 'Person', 'name': 'Sanjay Gupta' },
        'reviewRating': { '@type': 'Rating', 'ratingValue': '5' },
        'reviewBody': 'Beyond stopping the harassment, they helped me settle my three credit cards at 40% of the total value. They truly protect the borrower.'
      }
    ]
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'What are the RBI rules for recovery agent timings?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'According to the RBI Fair Practices Code, recovery agents can only contact you between 8:00 AM and 7:00 PM. Calls or visits outside these hours are strictly prohibited.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Can a recovery agent call my family or neighbors?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'No. Disclosing details of your debt to third parties like family, friends, or neighbors is a severe violation of privacy and RBI guidelines. This is considered illegal shaming.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Is it legal for recovery agents to use abusive language?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Absolutely not. Any form of verbal abuse, shouting, or use of profanity is a violation of the RBI code of conduct and can be reported as criminal intimidation under the IPC.'
        }
      },
      {
        '@type': 'Question',
        'name': 'What should I do if a recovery agent threatens me physically?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Physical threats are a criminal offense. You should immediately call the police (112) and file an FIR. Also, record the interaction as evidence for the bank and RBI Ombudsman.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Do I have the right to ask for the agent identification?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Yes. Every agent must carry a valid ID card issued by the bank or the agency and a copy of the authorization letter from the bank. You should not interact with anyone who cannot prove their identity.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Can recovery agents visit my office?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'They can visit, but they must maintain absolute professionalism. They cannot create a scene, disclose your debt to colleagues, or contact your employer for recovery purposes.'
        }
      },
      {
        '@type': 'Question',
        'name': 'How many times can a recovery agent call in a day?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'While there is no specific numerical limit, persistent and excessive calling (dozens of times a day) is classified as harassment and a violation of the borrower\'s peace.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Can I file a complaint with the RBI directly?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Yes, through the RBI CMS portal. However, you must first file a formal complaint with the bank\'s internal grievance department and wait 30 days for their response.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Is loan default a criminal offense in India?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'No, loan default is a civil matter. You cannot be arrested just for being unable to pay your EMIs, unless there is a specific case of fraud or cheque bounce (Section 138).'
        }
      },
      {
        '@type': 'Question',
        'name': 'How does CredSettle help in stopping harassment?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'CredSettle acts as your legal representative, redirecting all recovery communications to our team. We use legal notices and regulatory complaints to force the bank to stop all illegal harassment.'
        }
      }
    ]
  };

  return (
    <div className=\"bg-gray-50 min-h-screen\">
      <Navbar />
      <Script id=\"org-schema\" type=\"application/ld+json\" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <Script id=\"breadcrumb-schema\" type=\"application/ld+json\" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id=\"article-schema\" type=\"application/ld+json\" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id=\"service-review-schema\" type=\"application/ld+json\" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceReviewSchema) }} />
      <Script id=\"faq-schema\" type=\"application/ld+json\" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero Section */}
      <section 
        className=\"relative text-white pt-32 pb-20 px-4 md:px-8\"
        style={{
          background: 'radial-gradient(136.19% 254.89% at -1.53% 10.35%, #2F6CE2 0%, #001235 100%)',
          minHeight: '60vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <div className=\"max-w-6xl mx-auto text-center z-10\">
          <h1 className=\"text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight\">
            How to Stop Recovery Agent Harassment<br />
            <span className=\"text-blue-300\">Know Your Legal Rights & RBI Guidelines 2025</span>
          </h1>
          <p className=\"text-xl md:text-2xl opacity-90 mb-10 max-w-4xl mx-auto font-light\">
            Stop the endless calls and doorstep intimidation. Our comprehensive guide 
            reveals exactly how to use Indian laws to protect your family and 
            regain your peace of mind from aggressive recovery agents.
          </p>
          <div className=\"flex flex-col sm:flex-row gap-4 justify-center\">
            <Link 
              href=\"/contact\"
              className=\"bg-white text-blue-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1\"
            >
              Get Legal Protection Now
            </Link>
          </div>
        </div>
      </section>

      <RecoveryHarassmentClient />
      
      <Footer />
    </div>
  );
}
