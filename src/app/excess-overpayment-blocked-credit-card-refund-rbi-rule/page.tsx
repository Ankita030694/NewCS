import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ExcessPaymentBlockedCardClient from './ExcessPaymentBlockedCardClient';

export const metadata: Metadata = {
  title: 'Excess Payment on Blocked Credit Card: RBI Refund Law',
  description:
    'Stuck with excess payment on a blocked credit card? Learn RBI 3-working-day refund rules, bank transfer steps, and Ombudsman remedies at CredSettle.',
  keywords: [
    'excess overpayment on blocked credit card refund to bank rbi',
    'excess payment on blocked credit card refund',
    'credit balance refund on closed credit card rbi rule',
    'rbi 3 working days credit card refund rule',
    'how to get refund from blocked credit card',
    'negative balance on blocked credit card refund',
    'rbi master direction credit card credit balance reversal',
    'bank not refunding excess credit card payment',
    'rbi ombudsman complaint credit card refund delay',
    'credsettle credit card refund legal help'
  ],
  openGraph: {
    title: 'Excess Payment on Blocked Credit Card: RBI Refund Law',
    description:
      'Stuck with excess payment on a blocked credit card? Learn RBI 3-working-day refund rules, bank transfer steps, and Ombudsman remedies at CredSettle.',
    type: 'article',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://www.credsettle.com/excess-overpayment-blocked-credit-card-refund-rbi-rule'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Excess Payment on Blocked Credit Card: RBI Refund Law',
    description:
      'Stuck with excess payment on a blocked credit card? Learn RBI 3-working-day refund rules, bank transfer steps, and Ombudsman remedies at CredSettle.'
  },
  alternates: {
    canonical: 'https://www.credsettle.com/excess-overpayment-blocked-credit-card-refund-rbi-rule'
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function ExcessPaymentBlockedCardPage() {
  const unifiedSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': 'https://www.credsettle.com/excess-overpayment-blocked-credit-card-refund-rbi-rule#article',
        isPartOf: {
          '@type': 'WebPage',
          '@id': 'https://www.credsettle.com/excess-overpayment-blocked-credit-card-refund-rbi-rule'
        },
        headline: 'Excess Payment on Blocked Credit Card: RBI Refund Law',
        description:
          'Stuck with excess payment on a blocked credit card? Learn RBI 3-working-day refund rules, bank transfer steps, and Ombudsman remedies at CredSettle.',
        inLanguage: 'en-IN',
        mainEntityOfPage: 'https://www.credsettle.com/excess-overpayment-blocked-credit-card-refund-rbi-rule',
        datePublished: '2026-11-21T12:00:00+05:30',
        dateModified: '2026-11-21T12:00:00+05:30',
        articleSection: 'Credit Card Regulation & Consumer Rights',
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
        '@id': 'https://www.credsettle.com/excess-overpayment-blocked-credit-card-refund-rbi-rule#breadcrumb',
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
            name: 'Excess Payment on Blocked Credit Card Refund',
            item: 'https://www.credsettle.com/excess-overpayment-blocked-credit-card-refund-rbi-rule'
          }
        ]
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://www.credsettle.com/excess-overpayment-blocked-credit-card-refund-rbi-rule#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Can I get a refund for an excess payment on a blocked credit card?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Under the RBI Master Direction on Credit Card and Debit Card Issuance and Conduct, 2022, any credit balance on your card belongs to you. You can request a direct transfer to your bank account even if the card is blocked.'
            }
          },
          {
            '@type': 'Question',
            name: 'How many days does a bank have to refund excess credit card balance?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Once you submit a formal request to reverse a credit balance into your bank account, the card issuer must complete the transfer within three working days under RBI rules.'
            }
          },
          {
            '@type': 'Question',
            name: 'What happens to my excess balance if my credit card is permanently closed?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'RBI guidelines mandate that after closing a credit card account, the bank must transfer any remaining credit balance to your bank account. If the bank does not have your account details, it must contact you to collect them.'
            }
          },
          {
            '@type': 'Question',
            name: 'Do banks pay interest on excess money lying in a blocked credit card?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. Credit card accounts are not savings accounts. Banks do not pay any interest on positive or excess credit balances sitting on a credit card.'
            }
          },
          {
            '@type': 'Question',
            name: 'What documents are needed to transfer excess balance to another bank account?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'If you want the refund in a different bank account, the card issuer may ask for your account number, IFSC code, and a cancelled cheque or bank statement copy to verify ownership under KYC rules.'
            }
          },
          {
            '@type': 'Question',
            name: 'Can a bank keep my excess payment if I have another overdue loan with them?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Under Section 171 of the Indian Contract Act, 1872, a bank may exercise a right of set-off against undisputed overdue debts in your name with the same bank. However, any surplus left after clearing valid dues must be refunded to you.'
            }
          },
          {
            '@type': 'Question',
            name: 'What if an auto-debit paid my bill twice on a blocked credit card?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'A double payment creates a credit balance on your card statement. You should raise a Credit Balance Refund request with customer care and cite the RBI 3-working-day transfer rule.'
            }
          },
          {
            '@type': 'Question',
            name: 'Does the ₹500 per day RBI penalty apply to credit balance refund delays?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'The ₹500 per day penalty specifically applies when a bank delays closing a credit card beyond seven working days with zero dues. For delayed credit balance refunds beyond three working days, you can claim compensation through the RBI Ombudsman or Consumer Court.'
            }
          },
          {
            '@type': 'Question',
            name: 'How do I complain if the bank refuses to refund my blocked card balance?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'First email the bank Grievance Redressal Officer and Principal Nodal Officer with your request number. If unresolved after 30 days, file a free complaint on the RBI CMS portal at cms.rbi.org.in.'
            }
          },
          {
            '@type': 'Question',
            name: 'How can CredSettle help recover funds stuck on a blocked credit card?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'CredSettle reviews your card statement, audits any illegal deductions or set-offs, drafts formal notices citing RBI Master Directions, and escalates stuck refund claims to the Nodal Officer and RBI Ombudsman.'
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
        priceRange: '₹₹'
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
      <ExcessPaymentBlockedCardClient />
      <Footer />
    </div>
  );
}
