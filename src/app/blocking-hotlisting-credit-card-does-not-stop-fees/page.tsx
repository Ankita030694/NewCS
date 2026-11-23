import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BlockingHotlistingClient from './BlockingHotlistingClient';

export const metadata: Metadata = {
  title: 'Blocking vs Closing Credit Card: Stop Hidden Fee Traps',
  description:
    'Blocking or hotlisting a credit card does not stop annual fees. Learn RBI closure rules, protect your CIBIL score, and dispute unfair charges today.',
  keywords: [
    'blocking vs closing credit card',
    'hotlisting credit card does not stop annual fees',
    'difference between blocking and closing credit card',
    'rbi credit card closure rules 7 working days',
    'rbi 500 per day penalty credit card closure delay',
    'annual fee charged on blocked credit card',
    'stop recurring charges on hotlisted credit card',
    'credit card blocked CIBIL score impact',
    'how to permanently close credit card india',
    'credsettle credit card fee dispute help'
  ],
  openGraph: {
    title: 'Blocking vs Closing Credit Card: Stop Hidden Fee Traps',
    description:
      'Blocking or hotlisting a credit card does not stop annual fees. Learn RBI closure rules, protect your CIBIL score, and dispute unfair charges today.',
    type: 'article',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://www.credsettle.com/blocking-hotlisting-credit-card-does-not-stop-fees'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blocking vs Closing Credit Card: Stop Hidden Fee Traps',
    description:
      'Blocking or hotlisting a credit card does not stop annual fees. Learn RBI closure rules, protect your CIBIL score, and dispute unfair charges today.'
  },
  alternates: {
    canonical: 'https://www.credsettle.com/blocking-hotlisting-credit-card-does-not-stop-fees'
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function BlockingHotlistingCreditCardPage() {
  const unifiedSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': 'https://www.credsettle.com/blocking-hotlisting-credit-card-does-not-stop-fees#article',
        isPartOf: {
          '@type': 'WebPage',
          '@id': 'https://www.credsettle.com/blocking-hotlisting-credit-card-does-not-stop-fees'
        },
        headline: 'Blocking vs Closing Credit Card: Stop Hidden Fee Traps',
        description:
          'Blocking or hotlisting a credit card does not stop annual fees. Learn RBI closure rules, protect your CIBIL score, and dispute unfair charges today.',
        inLanguage: 'en-IN',
        mainEntityOfPage: 'https://www.credsettle.com/blocking-hotlisting-credit-card-does-not-stop-fees',
        datePublished: '2026-11-23T10:30:00+05:30',
        dateModified: '2026-11-23T10:30:00+05:30',
        articleSection: 'Credit Card Regulation & Consumer Protection',
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
        }
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
        '@id': 'https://www.credsettle.com/blocking-hotlisting-credit-card-does-not-stop-fees#breadcrumb',
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
            name: 'Blocking vs Closing Credit Card',
            item: 'https://www.credsettle.com/blocking-hotlisting-credit-card-does-not-stop-fees'
          }
        ]
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://www.credsettle.com/blocking-hotlisting-credit-card-does-not-stop-fees#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Does blocking or hotlisting a credit card stop annual fees?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. Blocking or hotlisting only stops new card transactions for security reasons. Your underlying credit card account remains open, so the bank can still charge annual fees, renewal fees, and GST until you submit a formal closure request.'
            }
          },
          {
            '@type': 'Question',
            name: 'What is the difference between blocking and closing a credit card under RBI rules?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Under the RBI Master Direction on Credit Card and Debit Card Issuance and Conduct, blocking or deactivation only curtails card usage while keeping the account relationship active. Closure is the complete termination of the account relationship between you and the issuer.'
            }
          },
          {
            '@type': 'Question',
            name: 'How many days does a bank have to close a credit card in India?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Under RBI rules, a bank or NBFC must honour a credit card closure request within 7 working days, provided you have cleared all outstanding dues on the account.'
            }
          },
          {
            '@type': 'Question',
            name: 'What is the RBI penalty if a bank delays closing my credit card?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'If the bank fails to close your credit card within 7 working days despite zero pending dues, the issuer must pay you a penalty of Rs 500 per calendar day of delay until the account is closed.'
            }
          },
          {
            '@type': 'Question',
            name: 'Can unpaid annual fees on a blocked credit card hurt my CIBIL score?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. If you block a card and stop checking statements, billed annual fees and 18% GST can turn overdue. The bank will add late payment fees, charge interest, and report the default to CIBIL and other credit bureaus, which lowers your credit score.'
            }
          },
          {
            '@type': 'Question',
            name: 'Do recurring mandates and OTT subscriptions stop when I block my card?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Not always. Some tokenized merchant mandates or standing instructions may fail, while others linked to the card account or replacement token can still trigger billing attempts or late fee disputes. You must cancel standing instructions via SIHub or your bank before closing the card.'
            }
          },
          {
            '@type': 'Question',
            name: 'Can a bank force me to visit a branch or send a letter to close my card?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. RBI guidelines require card issuers to provide multiple easy closure channels such as helpline, dedicated email, IVR, mobile app, internet banking, or a prominent website link. They cannot insist on physical letters.'
            }
          },
          {
            '@type': 'Question',
            name: 'What happens if I do not use my credit card for over one year?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Under RBI rules, if a credit card has not been used for more than one year, the issuer must initiate the closure process after giving 30 days notice to the cardholder. If you do not reply, the bank must close the card account, subject to zero dues.'
            }
          },
          {
            '@type': 'Question',
            name: 'How can I get a refund if a bank charged annual fees on my permanently blocked card?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'File a written dispute with the bank customer care and Grievance Redressal Officer attaching proof of your block or closure request. If unresolved within 30 days, escalate to the RBI Integrated Ombudsman at cms.rbi.org.in for fee reversal and CIBIL correction.'
            }
          },
          {
            '@type': 'Question',
            name: 'How does CredSettle help with blocked credit card fee traps and CIBIL disputes?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'CredSettle audits wrongful annual fees, drafts formal legal notices citing RBI Master Directions, files RBI Ombudsman complaints for Rs 500 per day closure delay penalties, and negotiates waivers or CIBIL rectification.'
            }
          }
        ]
      },
      {
        '@type': 'FinancialService',
        '@id': 'https://www.credsettle.com/#service',
        name: 'CredSettle Debt Settlement & Banking Legal Advisory Services',
        url: 'https://www.credsettle.com',
        telephone: '+91-8800226635',
        priceRange: '₹₹',
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          reviewCount: '6180',
          bestRating: '5',
          worstRating: '1'
        },
        review: [
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'Rohan Deshmukh'
            },
            datePublished: '2026-10-05',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5'
            },
            reviewBody:
              'I hotlisted my credit card in 2025 thinking it was closed, and the bank billed Rs 2,500 annual fee plus late charges that damaged my CIBIL score. CredSettle escalated the issue under RBI closure rules, got all fees waived, and restored my CIBIL status.',
            itemReviewed: {
              '@type': 'FinancialService',
              '@id': 'https://www.credsettle.com/#service'
            }
          },
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'Ananya Iyer'
            },
            datePublished: '2026-09-22',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5'
            },
            reviewBody:
              'My bank kept my card in blocked state for 40 days even after I cleared all dues and requested closure. CredSettle filed an RBI CMS complaint and recovered Rs 16,500 in closure delay compensation at Rs 500 per day.',
            itemReviewed: {
              '@type': 'FinancialService',
              '@id': 'https://www.credsettle.com/#service'
            }
          }
        ]
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
      <BlockingHotlistingClient />
      <Footer />
    </div>
  );
}
