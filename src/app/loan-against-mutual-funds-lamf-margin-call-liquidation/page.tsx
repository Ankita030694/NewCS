import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LamfMarginCallClient from './LamfMarginCallClient';

export const metadata: Metadata = {
  title: 'Loan Against Mutual Funds (LAMF) Margin Call Rules',
  description:
    'Know Loan Against Mutual Funds margin call rules under RBI & Section 176 law. Stop illegal NAV liquidation, save tax & protect CIBIL with CredSettle.',
  keywords: [
    'loan against mutual funds lamf margin call forced liquidation',
    'rbi rules loan against mutual funds ltv limit',
    'lamf margin call 7 working days cure period',
    'section 176 contract act pledge mutual funds notice',
    'cams kfintech lien invocation mutual fund loan',
    'forced liquidation mutual fund capital gains tax india',
    'nbfc 50 percent ltv equity mutual funds rbi',
    'bank 75 percent ltv equity mutual funds rbi',
    'loan against mutual funds default cibil impact',
    'credsettle lamf margin call legal help'
  ],
  openGraph: {
    title: 'Loan Against Mutual Funds (LAMF) Margin Call Rules',
    description:
      'Know Loan Against Mutual Funds margin call rules under RBI & Section 176 law. Stop illegal NAV liquidation, save tax & protect CIBIL with CredSettle.',
    type: 'article',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://www.credsettle.com/loan-against-mutual-funds-lamf-margin-call-liquidation',
    images: [
      {
        url: 'https://www.credsettle.com/images/infographics/loan-against-mutual-funds-lamf-margin-call-liquidation.jpg',
        width: 1200,
        height: 675,
        alt: 'Loan Against Mutual Funds (LAMF) Margin Call and Forced Liquidation Rules Guide'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Loan Against Mutual Funds (LAMF) Margin Call Rules',
    description:
      'Know Loan Against Mutual Funds margin call rules under RBI & Section 176 law. Stop illegal NAV liquidation, save tax & protect CIBIL with CredSettle.',
    images: [
      'https://www.credsettle.com/images/infographics/loan-against-mutual-funds-lamf-margin-call-liquidation.jpg'
    ]
  },
  alternates: {
    canonical: 'https://www.credsettle.com/loan-against-mutual-funds-lamf-margin-call-liquidation'
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function LamfMarginCallPage() {
  const unifiedSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id':
          'https://www.credsettle.com/loan-against-mutual-funds-lamf-margin-call-liquidation#article',
        isPartOf: {
          '@type': 'WebPage',
          '@id':
            'https://www.credsettle.com/loan-against-mutual-funds-lamf-margin-call-liquidation'
        },
        headline: 'Loan Against Mutual Funds (LAMF) Margin Call Rules',
        description:
          'Know Loan Against Mutual Funds margin call rules under RBI & Section 176 law. Stop illegal NAV liquidation, save tax & protect CIBIL with CredSettle.',
        inLanguage: 'en-IN',
        mainEntityOfPage:
          'https://www.credsettle.com/loan-against-mutual-funds-lamf-margin-call-liquidation',
        datePublished: '2026-11-24T10:00:00+05:30',
        dateModified: '2026-11-24T10:00:00+05:30',
        articleSection: 'Personal Loan Law & Secured Lending',
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
          'https://www.credsettle.com/images/infographics/loan-against-mutual-funds-lamf-margin-call-liquidation.jpg'
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
        '@id':
          'https://www.credsettle.com/loan-against-mutual-funds-lamf-margin-call-liquidation#breadcrumb',
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
            name: 'Loan Against Mutual Funds (LAMF) Margin Call Rules',
            item: 'https://www.credsettle.com/loan-against-mutual-funds-lamf-margin-call-liquidation'
          }
        ]
      },
      {
        '@type': 'FAQPage',
        '@id':
          'https://www.credsettle.com/loan-against-mutual-funds-lamf-margin-call-liquidation#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What is a margin call in a Loan Against Mutual Funds (LAMF)?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'A margin call is a formal alert from your bank or NBFC when your mutual fund NAV drops. Because the value of your pledged units falls, your loan rises above the RBI LTV cap. You must pay cash or pledge extra units to fix this gap.'
            }
          },
          {
            '@type': 'Question',
            name: 'What are the RBI LTV limits for banks and NBFCs on mutual fund loans?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'NBFCs must keep a strict 50% LTV cap on equity and non-debt mutual funds under RBI Scale Based Regulation rules. Commercial banks can lend up to 75% on equity funds and up to 85% on debt funds, subject to a ₹1 Crore individual cap.'
            }
          },
          {
            '@type': 'Question',
            name: 'How many days do I get to pay a LAMF margin shortfall under RBI rules?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'RBI rules state that a margin shortfall must be fixed within 7 working days. Some NBFC apps set tighter windows of 3 to 5 days in their contract, so check your Key Facts Statement and act right away.'
            }
          },
          {
            '@type': 'Question',
            name: 'Can a bank or NBFC sell my mutual fund units without giving notice?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. Under Section 176 of the Indian Contract Act, a lender must give clear and reasonable notice before selling pledged units. Courts have struck down contract clauses that let lenders dump securities without warning.'
            }
          },
          {
            '@type': 'Question',
            name: 'Who pays capital gains tax and exit load after a forced NAV sale?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'You pay the tax and exit load even if the lender forced the sale. Tax rules treat a forced lien invocation as your own redemption. Equity units held up to 1 year face 20% STCG tax, and older units face 12.5% LTCG tax above the annual limit.'
            }
          },
          {
            '@type': 'Question',
            name: 'How does a lender sell my pledged units through CAMS or KFintech?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'If you miss the cure window, the lender sends a lien invocation order to CAMS or KFintech for SoA folios. For demat units, it uses NSDL or CDSL. The fund house then sells the units at the same-day NAV and pays the lender.'
            }
          },
          {
            '@type': 'Question',
            name: 'What happens to extra cash left over after a forced mutual fund sale?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'The lender can keep only the exact loan principal, interest, and disclosed fees listed in your KFS. Any surplus cash left after clearing the dues belongs to you and must be paid back to your bank account.'
            }
          },
          {
            '@type': 'Question',
            name: 'Does a LAMF margin call or forced sale hurt my CIBIL score?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'A margin call paid on time does not hurt your CIBIL score. Even a forced sale that clears 100% of dues leaves zero unpaid debt. However, if sale cash falls short and you miss paying the gap, the lender reports a default to credit bureaus.'
            }
          },
          {
            '@type': 'Question',
            name: 'Can I pledge ELSS tax-saver mutual funds for a loan in India?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No, not during the 3-year lock-in period under Section 80C of the Income Tax Act. Banks and NBFCs cannot mark a lien on locked ELSS units. Once the 3 years end, those unlocked units can be pledged like normal equity funds.'
            }
          },
          {
            '@type': 'Question',
            name: 'How does CredSettle help with illegal LAMF sales or leftover deficit debt?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'CredSettle audits your loan ledger, KFS, and margin alerts for Section 176 or RBI rule breaches. We file Nodal Officer and RBI Ombudsman complaints for no-notice sales and negotiate clean One-Time Settlements for any deficit balance.'
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
      <LamfMarginCallClient />
      <Footer />
    </div>
  );
}
