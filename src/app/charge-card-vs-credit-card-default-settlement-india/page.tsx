import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ChargeVsCreditCardSettlementClient from './ChargeVsCreditCardSettlementClient';

export const metadata: Metadata = {
  title: 'Charge Card vs Credit Card Default Settlement in India',
  description:
    'Compare charge card vs revolving credit card default and OTS settlement in India. Learn RBI rules, CIBIL impact, and legal debt relief with CredSettle.',
  keywords: [
    'charge card vs credit card default settlement india',
    'american express charge card settlement india',
    'charge card default rbi rules',
    'revolving credit card ots settlement india',
    'amex platinum charge card overdue settlement',
    'rbi master direction charge card definition',
    'credit card 90 day npa settlement',
    'charge card cibil impact settled status',
    'rbi compromise settlement framework 2023',
    'credsettle charge card debt resolution'
  ],
  openGraph: {
    title: 'Charge Card vs Credit Card Default Settlement in India',
    description:
      'Compare charge card vs revolving credit card default and OTS settlement in India. Learn RBI rules, CIBIL impact, and legal debt relief with CredSettle.',
    type: 'article',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://www.credsettle.com/charge-card-vs-credit-card-default-settlement-india'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Charge Card vs Credit Card Default Settlement in India',
    description:
      'Compare charge card vs revolving credit card default and OTS settlement in India. Learn RBI rules, CIBIL impact, and legal debt relief with CredSettle.'
  },
  alternates: {
    canonical: 'https://www.credsettle.com/charge-card-vs-credit-card-default-settlement-india'
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function ChargeVsCreditCardSettlementPage() {
  const unifiedSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': 'https://www.credsettle.com/charge-card-vs-credit-card-default-settlement-india#article',
        isPartOf: {
          '@type': 'WebPage',
          '@id': 'https://www.credsettle.com/charge-card-vs-credit-card-default-settlement-india'
        },
        headline: 'Charge Card vs Credit Card Default Settlement in India',
        description:
          'Compare charge card vs revolving credit card default and OTS settlement in India. Learn RBI rules, CIBIL impact, and legal debt relief with CredSettle.',
        inLanguage: 'en-IN',
        mainEntityOfPage: 'https://www.credsettle.com/charge-card-vs-credit-card-default-settlement-india',
        datePublished: '2026-11-21T12:00:00+05:30',
        dateModified: '2026-11-21T12:00:00+05:30',
        articleSection: 'Credit Card & Banking Debt Resolution',
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
        '@id': 'https://www.credsettle.com/charge-card-vs-credit-card-default-settlement-india#breadcrumb',
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
            name: 'Charge Card vs Credit Card Default Settlement',
            item: 'https://www.credsettle.com/charge-card-vs-credit-card-default-settlement-india'
          }
        ]
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://www.credsettle.com/charge-card-vs-credit-card-default-settlement-india#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'How does the RBI define a charge card compared to a credit card?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Under the RBI Master Direction on Credit Card and Debit Card Issuance and Conduct, a charge card is a type of credit card where the user must pay the full billed amount on the due date. Rolling over the balance to the next billing cycle is not allowed.'
            }
          },
          {
            '@type': 'Question',
            name: 'Why are charge card settlements harder to negotiate than revolving credit cards?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Revolving credit card balances often contain 35% to 50% compounded interest and late fees, which banks can easily waive. Charge card dues consist mostly of pure principal spends plus flat delinquency fees, so issuers offer smaller principal haircuts unless severe financial hardship is proven.'
            }
          },
          {
            '@type': 'Question',
            name: 'Can I pay a Minimum Amount Due on a charge card to avoid default?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. A charge card does not have a Minimum Amount Due option for revolving debt. You must clear 100% of the statement balance by the due date, unless the issuer specifically offers a temporary Pay Over Time or EMI conversion facility.'
            }
          },
          {
            '@type': 'Question',
            name: 'When does a defaulted charge card become an NPA in India?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Under RBI prudential norms, any credit facility including a charge card or revolving credit card is classified as a Non-Performing Asset (NPA) when the overdue amount remains unpaid for more than 90 days past the payment due date.'
            }
          },
          {
            '@type': 'Question',
            name: 'Does the 3-day RBI grace period apply to charge cards?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Under the RBI Master Direction on Credit Cards, card issuers can only report an account as past due to credit bureaus or levy late payment charges if the bill remains unpaid for more than three days after the payment due date.'
            }
          },
          {
            '@type': 'Question',
            name: 'Can a card issuer file a criminal case for charge card default?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Simple inability to pay a charge card or credit card bill is a civil dispute, not a criminal offence. Criminal action under Section 138 of the Negotiable Instruments Act or Section 25 of the Payment and Settlement Systems Act applies only if a repayment cheque or NACH auto-debit mandate bounces.'
            }
          },
          {
            '@type': 'Question',
            name: 'What happens to my CIBIL score after settling a charge card?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Once you complete a One-Time Settlement, the issuer reports the account to CIBIL and other bureaus as Settled instead of Closed. Under RBI rules, lenders must update credit bureau records every 15 days. A Settled tag lowers your credit score and remains visible for up to seven years.'
            }
          },
          {
            '@type': 'Question',
            name: 'What is the RBI cooling-off period after a compromise settlement?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Under the RBI Framework for Compromise Settlements dated June 8, 2023, regulated lenders must apply a minimum 12-month cooling-off period before granting fresh credit exposure to a borrower who completed a compromise settlement.'
            }
          },
          {
            '@type': 'Question',
            name: 'Will I lose my reward points if I default on a charge card?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Most card agreements allow the issuer to freeze or forfeit accumulated reward points once an account becomes overdue or enters settlement. You should redeem valid points before missing a due date if you anticipate financial hardship.'
            }
          },
          {
            '@type': 'Question',
            name: 'How does CredSettle help settle charge card and credit card defaults?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'CredSettle audits your statements for unlawful charges, compiles hardship documentation, negotiates structured One-Time Settlement terms directly with the card issuer, stops unlawful recovery harassment, and verifies your final No Dues Certificate.'
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
      <ChargeVsCreditCardSettlementClient />
      <Footer />
    </div>
  );
}
