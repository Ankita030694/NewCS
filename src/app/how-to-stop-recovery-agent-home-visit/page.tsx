import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import RecoveryVisitClient from './RecoveryVisitClient';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to Stop Recovery Agent Home Visit: RBI Rules 2025-2026',
  description: 'Proved ways to stop recovery agent home visits. Learn RBI guidelines on collection agents, your legal rights, and how to stop harassment at your doorstep today.',
  keywords: [
    'how to stop recovery agent home visit',
    'RBI rules for recovery agent home visit',
    'stop collection agent visiting home',
    'legal rights against recovery agents india',
    'RBI guidelines for recovery agents 2025',
    'loan recovery agent home visit rules',
    'how to handle recovery agents at home',
    'can bank recovery agent visit home',
    'recovery agent harassment doorstep',
    'complaint against recovery agent home visit'
  ],
  openGraph: {
    title: 'Stop Recovery Agent Home Visits | Legal Guide & RBI Rules',
    description: 'Practical legal guide to stop collection agents from visiting your home or office. Know your rights under RBI guidelines and protect your privacy.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://www.credsettle.com/how-to-stop-recovery-agent-home-visit'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stop Recovery Agent Home Visits | RBI Rules 2025',
    description: 'Expert advice on stopping recovery agent harassment at your home. Know the law and protect your family privacy.'
  },
  alternates: {
    canonical: 'https://www.credsettle.com/how-to-stop-recovery-agent-home-visit'
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

export default function RecoveryVisitPage() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    '@id': 'https://www.credsettle.com/how-to-stop-recovery-agent-home-visit',
    name: 'CredSettle Debt Relief Services',
    legalName: 'CredSettle Legal Services',
    url: 'https://www.credsettle.com',
    logo: 'https://www.credsettle.com/credsettle-logo.svg',
    description: 'Professional legal consultation and debt relief services to stop illegal recovery agent home visits and settle loans with RBI compliance.',
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
        'name': 'Stop Recovery Agent Home Visit',
        'item': 'https://www.credsettle.com/how-to-stop-recovery-agent-home-visit'
      }
    ]
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'How to Stop Recovery Agent Home Visit: The Definitive Legal Guide (2025-2026)',
    'description': 'A massive guide on stopping unauthorized collection agent visits, understanding RBI regulations, and exercising your legal rights to privacy in India.',
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
      '@id': 'https://www.credsettle.com/how-to-stop-recovery-agent-home-visit'
    }
  };


  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'Can a recovery agent visit my home without notice?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'No. According to RBI guidelines, banks and NBFCs must provide a prior written notice before a recovery agent visits a borrower’s premises. Unannounced visits are a violation of the Fair Practices Code.'
        }
      },
      {
        '@type': 'Question',
        'name': 'What are the RBI allowed hours for recovery agent visits?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Recovery agents can only visit or call Between 8:00 AM and 7:00 PM. Any visit before or after these hours is strictly prohibited and considered harassment.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Should I allow a recovery agent inside my house?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'You are not legally obligated to allow a recovery agent inside your home. You can interact with them at the doorstep or in a public area. They have no legal right of forced entry.'
        }
      },
      {
        '@type': 'Question',
        'name': 'What documents should a recovery agent show during a visit?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'An agent must produce a valid Identity Card issued by the bank/agency, a copy of the bank’s Authorization Letter, and a specific Visit Letter mentioning your loan details.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Can a recovery agent discuss my loan with my neighbors?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Absolutely not. Discussing a debt with third parties like neighbors, relatives, or employers is a severe violation of privacy rights and RBI guidelines against public shaming.'
        }
      },
      {
        '@type': 'Question',
        'name': 'What should I do if a recovery agent uses abusive language?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Record the interaction immediately as evidence. File a formal complaint with the bank’s Nodal Officer and if not resolved, escalate to the RBI Ombudsman.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Is it legal for recovery agents to threaten physical force?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'No. Use of muscle power or physical intimidation is a criminal offense under the Indian Penal Code (IPC). You should call the police immediately in such cases.'
        }
      },
      {
        '@type': 'Question',
        'name': 'How can CredSettle help stop home visits?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'CredSettle acts as your legal representative, sending official notices to lenders to stop unauthorized third-party visits and negotiating a formal settlement plan.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Can recovery agents visit my office?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'While they can visit, they must respect your professional environment and privacy. They cannot create a scene or disclose your debt to your colleagues or employer.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Can I file a police complaint against a recovery agent?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Yes, if the agent engages in criminal intimidation, trespass, or harassment, you can file an FIR at your local police station citing relevant IPC sections.'
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
        <div className="max-w-8xl mx-auto text-center z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight">
            How to Stop Recovery Agent Home Visit<br />
            <span className="text-blue-300">Your Legal Rights & RBI Rules 2025</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-4xl mx-auto font-light">
            Tired of unannounced doorstep harassment? Discover the powerful RBI guidelines
            and legal strategies to stop recovery visits forever. Protect your family’s
            dignity and privacy with expert legal protection.
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

      <RecoveryVisitClient />

      <Footer />
    </div>
  );
}
