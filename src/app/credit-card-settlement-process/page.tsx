import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CreditCardSettlementProcessClient from './CreditCardSettlementProcessClient';

export const metadata: Metadata = {
  title: 'Credit Card Settlement Guide: Settle Debt in India',
  description:
    'Master the credit card settlement process in India. Learn how to negotiate 50% to 75% waivers, stop harassment, and secure an NOC.',
  keywords: [
    'credit card settlement process in india',
    'how to settle credit card debt in india',
    'credit card one time settlement',
    'credit card debt relief india',
    'credit card settlement letter sample',
    'credit card no dues certificate',
    'rbi rules for credit card recovery agents',
    'settle credit card cibil score impact',
    'credit card interest waiver negotiation',
    'credit card legal notice reply'
  ],
  openGraph: {
    title: 'Credit Card Settlement Guide: Settle Debt in India',
    description:
      'Comprehensive legal guide to the credit card settlement process in India. Learn how to negotiate 50% to 75% waivers, halt recovery agent harassment, defend against legal notices, and secure an official No Dues Certificate.',
    type: 'article',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://www.credsettle.com/credit-card-settlement-process',
    images: [
      {
        url: 'https://www.credsettle.com/images/infographics/credit-card-settlement-process.jpg',
        width: 1200,
        height: 630,
        alt: 'Credit Card Settlement Process Legal Blueprint Infographic'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Credit Card Settlement Guide: Settle Debt in India',
    description:
      'Comprehensive legal guide to the credit card settlement process in India. Learn how to negotiate 50% to 75% waivers, halt recovery agent harassment, defend against legal notices, and secure an official No Dues Certificate.',
    images: ['https://www.credsettle.com/images/infographics/credit-card-settlement-process.jpg']
  },
  alternates: {
    canonical: 'https://www.credsettle.com/credit-card-settlement-process'
  }
};

export default function CreditCardSettlementProcessPage() {
  const unifiedSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': 'https://www.credsettle.com/credit-card-settlement-process#article',
        isPartOf: {
          '@type': 'WebPage',
          '@id': 'https://www.credsettle.com/credit-card-settlement-process'
        },
        headline: 'Credit Card Settlement Process in India: Step-by-Step Legal Guide',
        description:
          'Comprehensive legal guide to the credit card settlement process in India. Learn how to negotiate 50% to 75% waivers, halt recovery agent harassment, defend against legal notices, and secure an official No Dues Certificate.',
        inLanguage: 'en-IN',
        mainEntityOfPage: 'https://www.credsettle.com/credit-card-settlement-process',
        datePublished: '2026-09-02T09:00:00+05:30',
        dateModified: '2026-09-02T09:00:00+05:30',
        articleSection: 'Credit Dispute & Banking Law',
        author: {
          '@type': 'Person',
          '@id': 'https://www.credsettle.com/author/ashish-jhangra#author',
          name: 'Ashish Jhangra',
          url: 'https://www.credsettle.com/author/ashish-jhangra',
          jobTitle: 'Legal & Debt Resolution Professional',
          worksFor: {
            '@type': 'Organization',
            name: 'CredSettle'
          }
        },
        publisher: {
          '@type': 'Organization',
          name: 'CredSettle',
          logo: {
            '@type': 'ImageObject',
            url: 'https://www.credsettle.com/credsettle-logo-black.png'
          }
        },
        image: ['https://www.credsettle.com/images/infographics/credit-card-settlement-process.jpg']
      },
      {
        '@type': 'Organization',
        '@id': 'https://www.credsettle.com/#organization',
        name: 'CredSettle',
        url: 'https://www.credsettle.com',
        logo: 'https://www.credsettle.com/credsettle-logo-black.png',
        telephone: '+91-8800226635',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Barakhamba Road, Connaught Place',
          addressLocality: 'New Delhi',
          addressRegion: 'Delhi',
          postalCode: '110001',
          addressCountry: 'IN'
        },
        sameAs: [
          'https://www.facebook.com/credsettle',
          'https://www.twitter.com/credsettle',
          'https://www.linkedin.com/company/credsettle',
          'https://www.instagram.com/credsettle/'
        ],
        image: 'https://www.credsettle.com/credsettle-logo-black.png',
        priceRange: '₹₹'
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://www.credsettle.com/credit-card-settlement-process#breadcrumb',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://www.credsettle.com/'
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Resources',
            item: 'https://www.credsettle.com/resources'
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Credit Card Settlement Process',
            item: 'https://www.credsettle.com/credit-card-settlement-process'
          }
        ]
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://www.credsettle.com/credit-card-settlement-process#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What is the credit card settlement process in India?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Credit card settlement is a formal compromise where the issuing bank agrees to waive penal interest and fees, accepting a negotiated lump sum to close the delinquent account.'
            }
          },
          {
            '@type': 'Question',
            name: 'How much waiver can I get on credit card settlement?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Cardholders typically secure 100% waivers on late fees and GST, alongside 50% to 75% reductions on finance charges, depending on default age and documented hardship.'
            }
          },
          {
            '@type': 'Question',
            name: 'Can a bank send me to jail for credit card default?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. Credit card default is strictly a civil breach of contract under the Indian Contract Act, 1872. Card issuers cannot arrest or criminally detain defaulting cardholders.'
            }
          },
          {
            '@type': 'Question',
            name: 'How does credit card settlement affect my CIBIL score?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'The bank reports the status as Settled, reducing your score by 75 to 150 points. However, disciplined credit habits can rebuild your score above 750 within 24 months.'
            }
          },
          {
            '@type': 'Question',
            name: 'Can I convert a Settled credit card status to Closed in CIBIL?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Under Section 21 of CICRA 2005, you can pay the remaining waived balance later, obtain a final NOC, and update your status from Settled to Closed.'
            }
          },
          {
            '@type': 'Question',
            name: 'What documents are required to prove financial hardship?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Issuers require proofs including job termination letters, salary reduction slips, audited business balance sheets, medical hospital records, and bank statements showing liquidity depletion.'
            }
          },
          {
            '@type': 'Question',
            name: 'How do I reply to a Section 25 PSSA notice for auto-debit bounce?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Serve a formal legal reply within 15 days contesting excessive penal compounding, establishing lack of fraudulent intent, presenting hardship proof, and proposing an OTS.'
            }
          },
          {
            '@type': 'Question',
            name: 'Why do banks prefer One-Time Settlement for delinquent cards?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Unsecured card NPAs mandate 100% bank capital provisioning under RBI rules. Lacking physical mortgage collateral, banks prefer recovering immediate compromised cash over costly civil litigation.'
            }
          },
          {
            '@type': 'Question',
            name: 'How do I verify that a credit card settlement letter is authentic?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Ensure the letter originates from the bank official corporate domain or branch letterhead, specifies card numbers and payment deadlines, and covenants zero residual liability.'
            }
          },
          {
            '@type': 'Question',
            name: 'What is the role of the RBI Integrated Ombudsman?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'If an issuer ignores formal hardship complaints for 30 days or violates fair recovery practices, you can file a complaint at cms.rbi.org.in for free statutory adjudication.'
            }
          }
        ]
      },
      {
        '@type': 'FinancialService',
        '@id': 'https://www.credsettle.com/#service',
        name: 'CredSettle Credit Card Debt Settlement & Legal Dispute Resolution Services',
        url: 'https://www.credsettle.com/credit-card-settlement-process',
        provider: {
          '@type': 'Organization',
          name: 'CredSettle'
        },
        image: 'https://www.credsettle.com/images/infographics/credit-card-settlement-process.jpg',
        telephone: '+91-8800226635',
        priceRange: '₹₹',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Barakhamba Road, Connaught Place',
          addressLocality: 'New Delhi',
          addressRegion: 'Delhi',
          postalCode: '110001',
          addressCountry: 'IN'
        }
      }
    ]
  };

  return (
    <div className="relative min-h-screen bg-white">
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(unifiedSchema) }}
      />
      <CreditCardSettlementProcessClient />
      <Footer />
    </div>
  );
}
