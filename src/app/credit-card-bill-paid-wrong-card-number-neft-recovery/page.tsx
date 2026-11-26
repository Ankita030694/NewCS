import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WrongCardPaymentRecoveryClient from './WrongCardPaymentRecoveryClient';

export const metadata: Metadata = {
  title: 'Credit Card Bill Paid to Wrong Number: Recovery Guide',
  description:
    'Paid your credit card bill to a wrong card number via NEFT, IMPS, or UPI? Follow RBI rules, request bank reversal, and recover funds with CredSettle.',
  keywords: [
    'credit card bill paid to wrong card number',
    'credit card payment sent to wrong number neft recovery',
    'wrong credit card bill payment refund process india',
    'rbi rules wrong credit card payment reversal',
    'bbps wrong credit card number payment refund',
    'imps credit card bill paid to wrong account',
    'section 72 indian contract act wrong bank transfer',
    'rbi ombudsman wrong credit card payment complaint',
    'how to reverse wrong credit card bill payment',
    'credsettle credit card payment dispute help'
  ],
  openGraph: {
    title: 'Credit Card Bill Paid to Wrong Number: Recovery Guide',
    description:
      'Paid your credit card bill to a wrong card number via NEFT, IMPS, or UPI? Follow RBI rules, request bank reversal, and recover funds with CredSettle.',
    type: 'article',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://www.credsettle.com/credit-card-bill-paid-wrong-card-number-neft-recovery'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Credit Card Bill Paid to Wrong Number: Recovery Guide',
    description:
      'Paid your credit card bill to a wrong card number via NEFT, IMPS, or UPI? Follow RBI rules, request bank reversal, and recover funds with CredSettle.'
  },
  alternates: {
    canonical: 'https://www.credsettle.com/credit-card-bill-paid-wrong-card-number-neft-recovery'
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function WrongCardPaymentRecoveryPage() {
  const unifiedSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id':
          'https://www.credsettle.com/credit-card-bill-paid-wrong-card-number-neft-recovery#article',
        isPartOf: {
          '@type': 'WebPage',
          '@id':
            'https://www.credsettle.com/credit-card-bill-paid-wrong-card-number-neft-recovery'
        },
        headline: 'Credit Card Bill Paid to Wrong Number: Recovery Guide',
        description:
          'Paid your credit card bill to a wrong card number via NEFT, IMPS, or UPI? Follow RBI rules, request bank reversal, and recover funds with CredSettle.',
        inLanguage: 'en-IN',
        mainEntityOfPage:
          'https://www.credsettle.com/credit-card-bill-paid-wrong-card-number-neft-recovery',
        datePublished: '2026-11-21T12:00:00+05:30',
        dateModified: '2026-11-21T12:00:00+05:30',
        articleSection: 'Credit Card Disputes & Banking Law',
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
        '@id':
          'https://www.credsettle.com/credit-card-bill-paid-wrong-card-number-neft-recovery#breadcrumb',
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
            name: 'Wrong Credit Card Number Payment Recovery',
            item: 'https://www.credsettle.com/credit-card-bill-paid-wrong-card-number-neft-recovery'
          }
        ]
      },
      {
        '@type': 'FAQPage',
        '@id':
          'https://www.credsettle.com/credit-card-bill-paid-wrong-card-number-neft-recovery#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What happens if I pay my credit card bill to a wrong 16-digit card number?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'If the wrong number does not exist or fails validation, the bank rejects the payment and refunds your money automatically. If the number belongs to another real cardholder, the payment posts to their card account and needs bank coordination and their consent for reversal.'
            }
          },
          {
            '@type': 'Question',
            name: 'Why did the bank process my NEFT payment even though the name did not match?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Under RBI circular RBI/2010-11/235, banks process inward NEFT and RTGS transfers solely based on the account or card number entered. They do not match the beneficiary name because spelling variations would slow down automated banking.'
            }
          },
          {
            '@type': 'Question',
            name: 'How many days does an automatic refund take for an invalid card number?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Under RBI turnaround time rules for failed transactions, failed NEFT or IMPS transfers to invalid numbers usually bounce back within T+1 working days. BBPS payments to non-existent card numbers generally reverse within 5 to 14 working days.'
            }
          },
          {
            '@type': 'Question',
            name: 'Can a bank reverse money from another person credit card without their consent?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. Once funds are validly credited to another active customer account, banks cannot unilaterally debit that account without the recipient consent. However, the beneficiary bank must contact the recipient and request written authorization for reversal.'
            }
          },
          {
            '@type': 'Question',
            name: 'What can I do if the unintended recipient refuses to return my money?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Under Section 72 of the Indian Contract Act, 1872, any person who receives money by mistake is legally bound to return it. You can send a legal notice through an advocate and file a civil recovery suit making the bank a formal party.'
            }
          },
          {
            '@type': 'Question',
            name: 'Should I wait for the refund before paying my actual credit card bill?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. Always pay at least the Minimum Amount Due or Total Amount Due on your real credit card before the due date. Waiting for a wrong transfer refund can trigger late payment fees, high interest charges, and negative CIBIL reporting.'
            }
          },
          {
            '@type': 'Question',
            name: 'How do I recover a wrong credit card bill payment made via GPay, PhonePe, or CRED?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Note your 20-character Bharat Connect or BBPS Transaction Reference ID and raise a dispute inside the payment app immediately. You should also email the card-issuing bank with your UTR and payment screenshot.'
            }
          },
          {
            '@type': 'Question',
            name: 'Can the card issuer waive late fees if I paid my own old or blocked card number?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. If you mistakenly paid your own closed, upgraded, or hotlisted card number with the same bank, the bank can transfer the credit internally to your active card. You can also request a one-time waiver of late fees and interest.'
            }
          },
          {
            '@type': 'Question',
            name: 'When can I complain to the RBI Integrated Ombudsman for a wrong card payment?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'You can file an online complaint at cms.rbi.org.in if your bank or the beneficiary bank fails to respond, refuses to trace the UTR, or does not resolve your written complaint within 30 days.'
            }
          },
          {
            '@type': 'Question',
            name: 'How does CredSettle help with wrong credit card payment recovery and billing disputes?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'CredSettle helps borrowers trace misrouted payments, draft formal bank and Section 72 legal notices, seek late fee and CIBIL reversals, and escalate unresolved bank lapses to the RBI Integrated Ombudsman.'
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
      <WrongCardPaymentRecoveryClient />
      <Footer />
    </div>
  );
}
