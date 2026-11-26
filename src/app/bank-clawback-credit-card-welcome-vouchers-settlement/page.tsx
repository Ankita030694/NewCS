import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BankVoucherClawbackClient from './BankVoucherClawbackClient';

export const metadata: Metadata = {
  title: 'Credit Card Voucher & Cashback Clawback in Settlement',
  description:
    'Understand bank clawback of vouchers under official RBI rules. Stop unfair charges, protect your credit report, and get legal relief with CredSettle.',
  keywords: [
    'bank clawback of credit card welcome vouchers during closure',
    'credit card cashback clawback settlement',
    'rbi rules credit card welcome voucher reversal',
    'dispute credit card reward clawback closure',
    'credit card cancellation fee welcome gift recovery',
    'rbi 7 working days credit card closure rule 500 penalty',
    'bank added voucher charges in loan settlement',
    'credit card one time settlement ledger inflation',
    'remove unfair credit card clawback cibil',
    'credsettle credit card debt settlement legal help'
  ],
  openGraph: {
    title: 'Credit Card Voucher & Cashback Clawback in Settlement',
    description:
      'Understand bank clawback of vouchers under official RBI rules. Stop unfair charges, protect your credit report, and get legal relief with CredSettle.',
    type: 'article',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://www.credsettle.com/bank-clawback-credit-card-welcome-vouchers-settlement',
    images: [
      {
        url: 'https://www.credsettle.com/images/infographics/bank-clawback-credit-card-welcome-vouchers-settlement.jpg',
        width: 1200,
        height: 675,
        alt: 'Disputing Credit Card Voucher and Cashback Clawbacks in Settlement'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Credit Card Voucher & Cashback Clawback in Settlement',
    description:
      'Understand bank clawback of vouchers under official RBI rules. Stop unfair charges, protect your credit report, and get legal relief with CredSettle.',
    images: [
      'https://www.credsettle.com/images/infographics/bank-clawback-credit-card-welcome-vouchers-settlement.jpg'
    ]
  },
  alternates: {
    canonical: 'https://www.credsettle.com/bank-clawback-credit-card-welcome-vouchers-settlement'
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function BankVoucherClawbackPage() {
  const unifiedSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': 'https://www.credsettle.com/bank-clawback-credit-card-welcome-vouchers-settlement#article',
        isPartOf: {
          '@type': 'WebPage',
          '@id': 'https://www.credsettle.com/bank-clawback-credit-card-welcome-vouchers-settlement'
        },
        headline: 'Credit Card Voucher & Cashback Clawback in Settlement',
        description:
          'Understand bank clawback of vouchers under official RBI rules. Stop unfair charges, protect your credit report, and get legal relief with CredSettle.',
        inLanguage: 'en-IN',
        mainEntityOfPage: 'https://www.credsettle.com/bank-clawback-credit-card-welcome-vouchers-settlement',
        datePublished: '2026-11-21T12:00:00+05:30',
        dateModified: '2026-11-21T12:00:00+05:30',
        articleSection: 'Credit Card Regulation & Consumer Debt Relief',
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
          'https://www.credsettle.com/images/infographics/bank-clawback-credit-card-welcome-vouchers-settlement.jpg'
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
        '@id': 'https://www.credsettle.com/bank-clawback-credit-card-welcome-vouchers-settlement#breadcrumb',
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
            name: 'Credit Card Voucher Clawback Defense',
            item: 'https://www.credsettle.com/bank-clawback-credit-card-welcome-vouchers-settlement'
          }
        ]
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://www.credsettle.com/bank-clawback-credit-card-welcome-vouchers-settlement#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What is a credit card welcome voucher and cashback clawback?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'A credit card clawback is a retroactive debit where the card issuer charges the rupee value of promotional welcome vouchers, gift cards, bonus reward points, or cashback back to the cardholder account, typically triggered upon early card cancellation or during debt settlement.'
            }
          },
          {
            '@type': 'Question',
            name: 'Can a bank claw back welcome vouchers if I paid the card joining fee?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. If you paid a non-refundable joining or annual fee that entitled you to the welcome voucher, the voucher represents valid contractual consideration under Section 2(d) of the Indian Contract Act, 1872. The bank cannot claw back its value upon early closure unless explicit, pre-agreed fraud terms apply.'
            }
          },
          {
            '@type': 'Question',
            name: 'Does the RBI allow banks to add voucher clawbacks during loan settlement?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. Under the RBI Master Direction on Credit Card Conduct (2022) and the Fair Practices Code, lenders cannot artificially inflate outstanding settlement balances with retroactive promotional debits. Settlement terms must be based on genuine principal dues and contractually authorized fees disclosed upfront in the MITC.'
            }
          },
          {
            '@type': 'Question',
            name: 'Can a bank refuse to close my credit card over disputed clawback charges?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Under Section 8 of the RBI Master Direction 2022, card issuers must complete card closure within 7 working days of receiving a request, subject to clearance of legitimate dues. Banks cannot generate bogus or disputed clawback debits to delay closure; failing to close incurs an RBI penalty of ₹500 per day.'
            }
          },
          {
            '@type': 'Question',
            name: 'What happens if cashback clawback pushes my card balance into negative or overlimit?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'If a bank retroactively claws back promotional cashback (for instance, following transaction refunds) and causes an overlimit condition, it cannot levy overlimit fees or penal interest without prior customer consent, in strict compliance with RBI credit card conduct regulations.'
            }
          },
          {
            '@type': 'Question',
            name: 'Can a bank debit my savings account for credit card voucher clawbacks?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'While banks claim a general lien under Section 171 of the Indian Contract Act, judicial precedents from High Courts establish that banker set-off cannot be exercised arbitrarily over disputed, unliquidated claims or without prior written notice and opportunity to contest.'
            }
          },
          {
            '@type': 'Question',
            name: 'Will a disputed voucher clawback affect my CIBIL score?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'If an issuer reports an unpaid clawback debit as overdue or delinquent, it harms your credit score. However, under Credit Information Companies (Regulation) Act (CICRA) rules and RBI directives, cardholders can formally dispute the unauthorized reporting and demand bureau rectification within 30 days.'
            }
          },
          {
            '@type': 'Question',
            name: 'Is retroactive voucher clawback considered an unfair trade practice?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Under Section 2(46) and Section 2(47) of the Consumer Protection Act, 2019, luring customers with free welcome gifts and subsequently billing them upon cancellation without prominent upfront MITC disclosure constitutes an unfair contract and unfair trade practice.'
            }
          },
          {
            '@type': 'Question',
            name: 'How can I ensure voucher clawbacks are waived during a credit card OTS?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Ensure your written One-Time Settlement (OTS) sanction letter explicitly includes a comprehensive waiver clause stating that all promotional debits, voucher clawbacks, finance charges, and penal fees are extinguished, and that an unconditional No Dues Certificate (NDC) will be issued.'
            }
          },
          {
            '@type': 'Question',
            name: 'How does CredSettle help borrowers facing unfair voucher and cashback clawbacks?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'CredSettle audits credit card ledgers to identify bogus debits, drafts statutory dispute notices citing RBI Master Directions, negotiates clean settlements eliminating clawbacks, and files escalations before the RBI Integrated Ombudsman and Consumer Commissions.'
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
      <BankVoucherClawbackClient />
      <Footer />
    </div>
  );
}
