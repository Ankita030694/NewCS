import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import InterestSuspenseUriClient from './InterestSuspenseUriClient';

export const metadata: Metadata = {
  title: 'NPA Interest Suspense Account (URI) & OTS Waivers Guide',
  description:
    'Understand NPA interest suspense account (URI) under RBI IRAC rules. Learn why banks waive 100% post-NPA interest in personal loan OTS with CredSettle.',
  keywords: [
    'unapplied interest suspense account uri npa personal loan ots',
    'npa interest suspense account uri meaning india',
    'why banks waive post npa interest in ots',
    'rbi irac norms memorandum account unapplied interest',
    'book balance vs memorandum dues personal loan ots',
    'rbi compromise settlement framework june 2023 personal loan',
    'pnb v shree jyoti education trust supreme court suspense interest',
    'rbi penal charges circular no compounding npa personal loan',
    'section 43d income tax act npa interest bank ots waiver',
    'credsettle personal loan npa ledger audit ots help'
  ],
  openGraph: {
    title: 'NPA Interest Suspense Account (URI) & OTS Waivers Guide',
    description:
      'Understand NPA interest suspense account (URI) under RBI IRAC rules. Learn why banks waive 100% post-NPA interest in personal loan OTS with CredSettle.',
    type: 'article',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://www.credsettle.com/interest-suspense-account-uri-npa-personal-loan-ots',
    images: [
      {
        url: 'https://www.credsettle.com/images/infographics/interest-suspense-account-uri-npa-personal-loan-ots.jpg',
        width: 1200,
        height: 675,
        alt: 'NPA Interest Suspense Account URI and Personal Loan OTS Waivers Guide'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NPA Interest Suspense Account (URI) & OTS Waivers Guide',
    description:
      'Understand NPA interest suspense account (URI) under RBI IRAC rules. Learn why banks waive 100% post-NPA interest in personal loan OTS with CredSettle.',
    images: [
      'https://www.credsettle.com/images/infographics/interest-suspense-account-uri-npa-personal-loan-ots.jpg'
    ]
  },
  alternates: {
    canonical: 'https://www.credsettle.com/interest-suspense-account-uri-npa-personal-loan-ots'
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function InterestSuspenseUriPage() {
  const unifiedSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id':
          'https://www.credsettle.com/interest-suspense-account-uri-npa-personal-loan-ots#article',
        isPartOf: {
          '@type': 'WebPage',
          '@id':
            'https://www.credsettle.com/interest-suspense-account-uri-npa-personal-loan-ots'
        },
        headline: 'NPA Interest Suspense Account (URI) & OTS Waivers Guide',
        description:
          'Understand NPA interest suspense account (URI) under RBI IRAC rules. Learn why banks waive 100% post-NPA interest in personal loan OTS with CredSettle.',
        inLanguage: 'en-IN',
        mainEntityOfPage:
          'https://www.credsettle.com/interest-suspense-account-uri-npa-personal-loan-ots',
        datePublished: '2026-11-24T10:00:00+05:30',
        dateModified: '2026-11-24T10:00:00+05:30',
        articleSection: 'Personal Loan NPA Accounting & OTS Law',
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
          'https://www.credsettle.com/images/infographics/interest-suspense-account-uri-npa-personal-loan-ots.jpg'
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
          'https://www.credsettle.com/interest-suspense-account-uri-npa-personal-loan-ots#breadcrumb',
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
            name: 'NPA Interest Suspense Account (URI) & OTS Waivers Guide',
            item: 'https://www.credsettle.com/interest-suspense-account-uri-npa-personal-loan-ots'
          }
        ]
      },
      {
        '@type': 'FAQPage',
        '@id':
          'https://www.credsettle.com/interest-suspense-account-uri-npa-personal-loan-ots#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What is an NPA Interest Suspense Account or URI in Indian banks?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'URI stands for Unapplied or Unrealized Interest. After 90 days of missed EMIs, your loan turns into an NPA. Under RBI rules, the bank stops adding new interest to profit. It parks that post-NPA interest in a side tally called an Interest Suspense Account.'
            }
          },
          {
            '@type': 'Question',
            name: 'Why do banks agree to waive 100% of post-NPA URI during an OTS?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Banks never count post-NPA URI as profit in their annual books. Waiving 100% of URI causes zero profit loss. Cash paid on your book balance also frees up old loss buffers as fresh bank profit.'
            }
          },
          {
            '@type': 'Question',
            name: 'Does moving interest to a suspense account mean my debt is waived automatically?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. In August 2026, the Supreme Court ruled in PNB v. Shree Jyoti Education Trust that suspense interest remains legal debt. You must get a signed OTS letter that waives both book balance and memo interest in full.'
            }
          },
          {
            '@type': 'Question',
            name: 'What is the difference between Book Balance and Memorandum Dues?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Book Balance is your unpaid loan principal plus valid dues up to the NPA date. Memorandum Dues track off-book URI, legal costs, and late fees after NPA. Anchor your OTS offer to the Book Balance, not the total notice.'
            }
          },
          {
            '@type': 'Question',
            name: 'Can a bank charge compound interest on late fees inside my NPA suspense account?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. Both Central Bank of India v. Ravindra and RBI Circular DoR.MCS.REC.28 ban interest on penal fees. Lenders cannot add late fees to your principal or charge extra interest on them.'
            }
          },
          {
            '@type': 'Question',
            name: 'How does Section 43D of the Income Tax Act help in OTS negotiations?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Section 43D taxes banks on NPA interest only when they collect cash. Banks pay zero tax on uncollected URI in suspense accounts. Waiving that URI creates zero tax loss for the bank.'
            }
          },
          {
            '@type': 'Question',
            name: 'Do I have to pay income tax if a bank waives my personal loan URI in OTS?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'For a personal loan used for family needs, courts treat a waiver as capital relief, not taxable income. If you claimed business interest tax breaks on that loan, Section 41(1) tax rules may apply.'
            }
          },
          {
            '@type': 'Question',
            name: 'How do NBFCs treat post-NPA interest on unsecured personal loans?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Under RBI IRACP norms and Ind AS 109, NBFCs tag 90-day defaults as Stage 3 NPA loans. They reverse unpaid interest and build high loss buffers. Since personal loans have no asset backing, NBFCs often waive 100% of post-NPA interest in OTS.'
            }
          },
          {
            '@type': 'Question',
            name: 'What must my OTS sanction letter say about URI and Memorandum Dues?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Your OTS letter must state that the payment clears all dues in full. It must list principal, book balance, URI, memo dues, and late fees as waived. Never pay based on a phone call alone.'
            }
          },
          {
            '@type': 'Question',
            name: 'How does CredSettle help audit NPA suspense accounts and secure OTS waivers?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'CredSettle gets your split NPA ledger and strips out illegal late fee compounding. We separate core principal from URI and negotiate directly with bank teams. We also verify your OTS letter, NDC, and CIBIL update.'
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
      <InterestSuspenseUriClient />
      <Footer />
    </div>
  );
}
