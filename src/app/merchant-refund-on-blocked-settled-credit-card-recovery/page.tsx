import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MerchantRefundBlockedSettledCardClient from './MerchantRefundBlockedSettledCardClient';

export const metadata: Metadata = {
  title: 'Merchant Refund on Blocked or Settled Credit Card Law',
  description:
    'Merchant refund credited to a blocked or settled credit card? Learn RBI NEFT payout rules, 23-digit ARN tracking, and OTS rights with CredSettle.',
  keywords: [
    'merchant refund credited to blocked or settled credit card',
    'refund sent to closed credit card india rbi rule',
    'merchant refund on settled credit card ots',
    'how to get refund from blocked credit card to bank account',
    '23 digit arn tracking credit card refund india',
    'rbi credit balance transfer closed credit card neft',
    'refund credited after credit card one time settlement',
    'section 63 contract act settled credit card refund',
    'credit card sundry suspense account refund claim',
    'credsettle credit card refund dispute legal help'
  ],
  openGraph: {
    title: 'Merchant Refund on Blocked or Settled Credit Card Law',
    description:
      'Merchant refund credited to a blocked or settled credit card? Learn RBI NEFT payout rules, 23-digit ARN tracking, and OTS rights with CredSettle.',
    type: 'article',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://www.credsettle.com/merchant-refund-on-blocked-settled-credit-card-recovery',
    images: [
      {
        url: 'https://www.credsettle.com/images/infographics/merchant-refund-on-blocked-settled-credit-card-recovery.jpg',
        width: 1376,
        height: 768,
        alt: 'Merchant Refund on Blocked, Closed, or Settled Credit Card RBI NEFT Recovery Flow'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Merchant Refund on Blocked or Settled Credit Card Law',
    description:
      'Merchant refund credited to a blocked or settled credit card? Learn RBI NEFT payout rules, 23-digit ARN tracking, and OTS rights with CredSettle.',
    images: [
      'https://www.credsettle.com/images/infographics/merchant-refund-on-blocked-settled-credit-card-recovery.jpg'
    ]
  },
  alternates: {
    canonical: 'https://www.credsettle.com/merchant-refund-on-blocked-settled-credit-card-recovery'
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function MerchantRefundBlockedSettledCardPage() {
  const unifiedSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': 'https://www.credsettle.com/merchant-refund-on-blocked-settled-credit-card-recovery#article',
        isPartOf: {
          '@type': 'WebPage',
          '@id': 'https://www.credsettle.com/merchant-refund-on-blocked-settled-credit-card-recovery'
        },
        headline: 'How to Recover Refunds Sent to a Closed Credit Card',
        description:
          'Merchant refund credited to a blocked or settled credit card? Learn RBI NEFT payout rules, 23-digit ARN tracking, and OTS rights with CredSettle.',
        inLanguage: 'en-IN',
        mainEntityOfPage: 'https://www.credsettle.com/merchant-refund-on-blocked-settled-credit-card-recovery',
        datePublished: '2026-11-21T12:00:00+05:30',
        dateModified: '2026-11-21T12:00:00+05:30',
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
        },
        image: [
          'https://www.credsettle.com/images/infographics/merchant-refund-on-blocked-settled-credit-card-recovery.jpg'
        ]
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
        '@id': 'https://www.credsettle.com/merchant-refund-on-blocked-settled-credit-card-recovery#breadcrumb',
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
            name: 'Merchant Refund on Blocked or Settled Credit Card',
            item: 'https://www.credsettle.com/merchant-refund-on-blocked-settled-credit-card-recovery'
          }
        ]
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://www.credsettle.com/merchant-refund-on-blocked-settled-credit-card-recovery#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Does a merchant refund bounce back if my credit card is blocked or closed?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Usually no. Card networks route refunds using the original transaction reference. Even when the 16-digit card is blocked or closed, the refund lands in your card account ledger or the bank internal sundry pool.'
            }
          },
          {
            '@type': 'Question',
            name: 'What is the RBI rule for a credit balance in a closed credit card account?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Under the RBI Master Direction on Credit Card and Debit Card Issuance and Conduct, 2022, any credit balance left in or sent to a closed credit card must be transferred to your savings bank account via NEFT or RTGS.'
            }
          },
          {
            '@type': 'Question',
            name: 'Why do merchants refuse to send my card refund to a savings account or UPI ID?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Payment gateways follow strict anti-money laundering and anti-fraud rules. Closed-loop refund rules force merchants to return money only to the original payment source to stop cash cycling and double chargebacks.'
            }
          },
          {
            '@type': 'Question',
            name: 'What is an ARN or RRN, and how does it help trace my stuck refund?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Visa and Mastercard assign a 23-digit Acquirer Reference Number (ARN) to every refund. RuPay assigns a 12-digit Retrieval Reference Number (RRN). Your card bank uses this number to locate cash in its suspense account.'
            }
          },
          {
            '@type': 'Question',
            name: 'What happens if a refund hits a card that is blocked due to unpaid overdue bills?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'If your card is blocked for unpaid bills and not yet settled, the bank will not pay cash to you. Under Section 171 of the Indian Contract Act and RBI billing rules, the refund reduces your net overdue balance.'
            }
          },
          {
            '@type': 'Question',
            name: 'Can a bank keep my merchant refund after I finish a One-Time Settlement (OTS)?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'It depends on what transaction was refunded and your OTS terms. If you already paid for that purchase earlier and hold an unconditional No Dues Certificate, Section 63 extinguishes old debt. Yet if the bank waived that exact unpaid swipe in OTS, the bank can adjust the reversal.'
            }
          },
          {
            '@type': 'Question',
            name: 'Does a refund credited after bill generation reduce my Minimum Amount Due?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Under the March 2024 RBI amendment, banks can charge interest and late fees only on the net unpaid balance after subtracting posted refunds. Still, check your issuer app to confirm whether Minimum Due needs a small direct payment.'
            }
          },
          {
            '@type': 'Question',
            name: 'Can I claim Rs 100 per day compensation for a delayed failed transaction reversal?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes, for failed online or POS card debits where the merchant got no payment confirmation. Under RBI Circular DPSS.CO.PD No.629 dated September 20, 2019, auto-reversal must finish in T+5 days or the bank owes Rs 100 per day.'
            }
          },
          {
            '@type': 'Question',
            name: 'What documents do banks ask for to release a closed card refund via NEFT?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Banks normally ask for a written refund request, the 23-digit ARN or 12-digit RRN from the merchant, self-attested KYC, and a cancelled cheque or bank statement showing your name, account number, and IFSC.'
            }
          },
          {
            '@type': 'Question',
            name: 'What happens to unclaimed refunds sitting in a closed credit card for years?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Credit balances left unclaimed for 10 years move to the RBI Depositor Education and Awareness (DEA) Fund under Section 26A of the Banking Regulation Act. You can still claim your money later through the same card bank.'
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
      <MerchantRefundBlockedSettledCardClient />
      <Footer />
    </div>
  );
}
