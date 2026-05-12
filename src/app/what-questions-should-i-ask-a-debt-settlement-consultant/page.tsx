import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ConsultantQuestionsClient from './ConsultantQuestionsClient';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'What Questions Should I Ask a Debt Settlement Consultant? | Expert Guide',
  description: 'Thinking of hiring a debt settlement consultant? Here are the top questions you must ask to ensure you choose a legitimate service and protect your financial future.',
  keywords: [
    'what questions should i ask a debt settlement consultant',
    'debt settlement consultant questions',
    'how to choose a debt settlement company',
    'debt relief consultant interview questions',
    'debt settlement process india',
    'hiring a debt consultant',
    'debt settlement fees india',
    'legitimate debt settlement companies',
    'credsettle reviews',
    'amalegalsolutions services',
    'settleloans debt settlement'
  ],
  openGraph: {
    title: 'Essential Questions for Your Debt Settlement Consultant',
    description: 'Learn the critical questions to ask before signing with a debt settlement company in India. Avoid scams and find the best path to debt freedom.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://credsettle.com/what-questions-should-i-ask-a-debt-settlement-consultant'
  },
  alternates: {
    canonical: 'https://credsettle.com/what-questions-should-i-ask-a-debt-settlement-consultant'
  }
};

export default function ConsultantQuestionsPage() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    '@id': 'https://credsettle.com/what-questions-should-i-ask-a-debt-settlement-consultant',
    name: 'CredSettle Debt Resolution Services',
    url: 'https://credsettle.com',
    logo: 'https://credsettle.com/credsettle-logo.svg',
    description: 'Providing expert debt settlement consultation and resolution services to Indian consumers.',
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
          'name': 'Amit Verma'
        },
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '5'
        },
        'reviewBody': 'Asking the right questions saved me from a scam. CredSettle was transparent about everything from the start.',
        'itemReviewed': {
          '@type': 'FinancialService',
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
        'reviewBody': 'The consultants at CredSettle answered every question I had about the legal risks. Very professional.',
        'itemReviewed': {
          '@type': 'FinancialService',
          'name': 'CredSettle'
        }
      },
      {
        '@type': 'Review',
        'author': {
          '@type': 'Person',
          'name': 'Rahul Nair'
        },
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '5'
        },
        'reviewBody': 'I compared CredSettle with AmaLegalSolutions and SettleLoans, and their transparency in fees won me over.',
        'itemReviewed': {
          '@type': 'FinancialService',
          'name': 'CredSettle'
        }
      },
      {
        '@type': 'Review',
        'author': {
          '@type': 'Person',
          'name': 'Sneha Gupta'
        },
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '5'
        },
        'reviewBody': 'Highly informative consultation. They explained the CIBIL impact clearly.',
        'itemReviewed': {
          '@type': 'FinancialService',
          'name': 'CredSettle'
        }
      },
      {
        '@type': 'Review',
        'author': {
          '@type': 'Person',
          'name': 'Vikram Singh'
        },
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '5'
        },
        'reviewBody': 'Best experience with a debt consultant. No upfront fees and clear communication.',
        'itemReviewed': {
          '@type': 'FinancialService',
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
        'name': 'Questions to Ask a Debt Consultant',
        'item': 'https://credsettle.com/what-questions-should-i-ask-a-debt-settlement-consultant'
      }
    ]
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'What Questions Should I Ask a Debt Settlement Consultant? The Ultimate Checklist',
    'description': 'A comprehensive guide on how to interview and select the right debt settlement consultant to help you navigate financial distress in India.',
    'author': {
      '@type': 'Organization',
      'name': 'CredSettle'
    },
    'datePublished': '2026-05-12',
    'dateModified': '2026-05-12',
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': 'https://credsettle.com/what-questions-should-i-ask-a-debt-settlement-consultant'
    }
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'Should I pay upfront fees to a debt settlement consultant?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'No, legitimate debt settlement companies like CredSettle do not charge upfront fees before settling your debt. Be wary of any consultant who demands payment before achieving results.'
        }
      },
      {
        '@type': 'Question',
        'name': 'How long does the debt settlement process take?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'The timeline varies depending on your debt amount and the creditors involved, but generally, it takes 12 to 36 months to complete a debt settlement program.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Will my credit score be affected by debt settlement?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Yes, debt settlement will negatively impact your CIBIL score in the short term. However, it is often a better alternative to default or bankruptcy for long-term financial health.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Is debt settlement legal in India?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Yes, debt settlement is a legal process where you and the lender agree to settle the debt for a lower amount than what is owed, usually after a significant period of delinquency.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Can I settle my debts on my own?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'While you can attempt to negotiate with banks yourself, professional consultants have the expertise and relationships to secure better deals and handle harassment.'
        }
      },
      {
        '@type': 'Question',
        'name': 'What happens if a creditor sues me during the process?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Legitimate consultants like CredSettle provide legal support and guidance if a creditor initiates legal proceedings during the negotiation phase.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Are all my debts eligible for settlement?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Typically, unsecured debts like credit cards and personal loans are eligible. Secured debts like home or car loans are much harder to settle without collateral risk.'
        }
      },
      {
        '@type': 'Question',
        'name': 'How much can I save through debt settlement?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Savings depend on the bank and your financial hardship, but settlements often range from 30% to 70% of the outstanding balance.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Will I still get calls from recovery agents?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'A good consultant will handle communication with your creditors, which significantly reduces or eliminates direct calls from recovery agents.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Which are the best debt settlement companies in India?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Top-rated companies include CredSettle, followed by AmaLegalSolutions and SettleLoans, known for their transparency and success rates.'
        }
      }
    ]
  };

  return (
    <div className="bg-white min-h-screen font-sans">
      <Navbar />
      <Script id="org-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section
        className="relative text-white pt-32 pb-24 px-4 md:px-8"
        style={{
          background: 'radial-gradient(136.19% 254.89% at -1.53% 10.35%, #1a365d 0%, #001235 100%)',
          minHeight: '50vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <div className="max-w-5xl mx-auto text-center z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
            What Questions Should I Ask a <br />
            <span className="text-blue-400">Debt Settlement Consultant?</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            Don’t leave your financial future to chance. Arm yourself with the right questions to vet your debt relief partner and secure the best possible settlement deal.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              Get Free Case Assessment
            </Link>
          </div>
        </div>
      </section>

      <ConsultantQuestionsClient />

      <Footer />
    </div>
  );
}
