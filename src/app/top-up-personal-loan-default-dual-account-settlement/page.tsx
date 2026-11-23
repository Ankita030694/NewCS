import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TopUpDualAccountSettlementClient from './TopUpDualAccountSettlementClient';

export const metadata: Metadata = {
  title: 'Top-Up Personal Loan Default: Dual Account Settlement',
  description:
    'Defaulted on a top-up personal loan? Learn RBI dual LAN NPA rules, negotiate a combined OTS waiver, and secure both NOCs legally with CredSettle.',
  keywords: [
    'top up personal loan default dual lan account settlement rules',
    'top up personal loan settlement india',
    'dual loan account number ots settlement',
    'rbi borrower wise npa classification personal loan',
    'settle base loan and top up loan together',
    'section 59 indian contract act loan appropriation',
    'bank cross default top up personal loan',
    'dual noc after top up loan settlement',
    'rbi kfs top up personal loan charges',
    'credsettle top up personal loan settlement help'
  ],
  openGraph: {
    title: 'Top-Up Personal Loan Default: Dual Account Settlement',
    description:
      'Defaulted on a top-up personal loan? Learn RBI dual LAN NPA rules, negotiate a combined OTS waiver, and secure both NOCs legally with CredSettle.',
    type: 'article',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://www.credsettle.com/top-up-personal-loan-default-dual-account-settlement',
    images: [
      {
        url: 'https://www.credsettle.com/images/infographics/top-up-personal-loan-default-dual-account-settlement.jpg',
        width: 1200,
        height: 675,
        alt: 'Top-Up Personal Loan Default Dual Account Settlement Blueprint'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Top-Up Personal Loan Default: Dual Account Settlement',
    description:
      'Defaulted on a top-up personal loan? Learn RBI dual LAN NPA rules, negotiate a combined OTS waiver, and secure both NOCs legally with CredSettle.',
    images: [
      'https://www.credsettle.com/images/infographics/top-up-personal-loan-default-dual-account-settlement.jpg'
    ]
  },
  alternates: {
    canonical: 'https://www.credsettle.com/top-up-personal-loan-default-dual-account-settlement'
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function TopUpDualAccountSettlementPage() {
  const unifiedSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': 'https://www.credsettle.com/top-up-personal-loan-default-dual-account-settlement#article',
        isPartOf: {
          '@type': 'WebPage',
          '@id': 'https://www.credsettle.com/top-up-personal-loan-default-dual-account-settlement'
        },
        headline: 'Top-Up Personal Loan Default: Dual Account Settlement',
        description:
          'Defaulted on a top-up personal loan? Learn RBI dual LAN NPA rules, negotiate a combined OTS waiver, and secure both NOCs legally with CredSettle.',
        inLanguage: 'en-IN',
        mainEntityOfPage: 'https://www.credsettle.com/top-up-personal-loan-default-dual-account-settlement',
        datePublished: '2026-11-23T12:00:00+05:30',
        dateModified: '2026-11-23T12:00:00+05:30',
        articleSection: 'Personal Loan Settlement & Banking Regulation',
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
          'https://www.credsettle.com/images/infographics/top-up-personal-loan-default-dual-account-settlement.jpg'
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
        '@id': 'https://www.credsettle.com/top-up-personal-loan-default-dual-account-settlement#breadcrumb',
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
            name: 'Top-Up Personal Loan Dual Account Settlement',
            item: 'https://www.credsettle.com/top-up-personal-loan-default-dual-account-settlement'
          }
        ]
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://www.credsettle.com/top-up-personal-loan-default-dual-account-settlement#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Does a top-up personal loan create a separate Loan Account Number (LAN)?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'In most banks and NBFCs, yes. Lenders issue a fresh Loan Account Number (LAN), a separate EMI, and a new credit bureau tradeline for the top-up loan unless they explicitly foreclose and merge the base loan into one new account.'
            }
          },
          {
            '@type': 'Question',
            name: 'What happens if I pay my base loan EMI but default on the top-up loan?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Under Section 4.2.7 of the RBI IRACP Master Circular, NPA tagging is borrower-wise, not facility-wise. If your top-up loan stays unpaid for 90 days with the same bank, the bank must mark both your top-up loan and your regular base loan as NPA.'
            }
          },
          {
            '@type': 'Question',
            name: 'Can I settle my base personal loan and top-up loan under one OTS letter?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. You can negotiate a combined One-Time Settlement (OTS) with the lender under its Board-approved compromise policy. Make sure the signed OTS letter clearly lists both Loan Account Numbers and the exact split or full discharge for each account.'
            }
          },
          {
            '@type': 'Question',
            name: 'How does Section 59 of the Indian Contract Act protect dual LAN borrowers?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Section 59 gives you the legal right to direct which loan account your payment must clear. If you pay without naming the exact LAN in writing, Section 60 lets the bank put your money into any overdue fee or interest head on the other loan.'
            }
          },
          {
            '@type': 'Question',
            name: 'Can the bank freeze my savings account if I default on a top-up personal loan?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'If you hold a sole savings account in the same bank, the lender may use its right of set-off or general lien under Section 171 of the Indian Contract Act. However, it cannot touch third-party funds, trust money, or accounts held in a different legal capacity.'
            }
          },
          {
            '@type': 'Question',
            name: 'Do I need two separate No Objection Certificates (NOCs) after dual settlement?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. You must collect two separate NOCs or No Dues Certificates, one for the base LAN and one for the top-up LAN. A single letter that omits one LAN leaves the second account open on your CIBIL and CRIF reports.'
            }
          },
          {
            '@type': 'Question',
            name: 'How fast must the bank update both loan accounts in CIBIL after settlement?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Under RBI circular RBI/2024-25/60, lenders must send credit data to bureaus every 15 days. If either LAN stays marked active or overdue more than 30 days after your formal dispute, RBI circular RBI/2023-24/72 mandates ₹100 per day compensation.'
            }
          },
          {
            '@type': 'Question',
            name: 'Can a bank charge compound penal interest on both my base and top-up loans?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. Under RBI circular RBI/2023-24/53 on Penal Charges in Loan Accounts, banks and NBFCs cannot charge compounding penal interest. Default fees must be plain penal charges with zero extra interest added on top of them.'
            }
          },
          {
            '@type': 'Question',
            name: 'What if the bank writes off my top-up loan while I settle the base loan?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Under RBI circular RBI/2023-24/40, a technical write-off is only an accounting entry and does not cancel your debt. The lender or an ARC can still recover the written-off top-up loan unless you close it with a written OTS and NOC.'
            }
          },
          {
            '@type': 'Question',
            name: 'How does CredSettle help settle dual base and top-up personal loans?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'CredSettle audits both KFS sheets and ledgers, strips out unlawful penal charges, negotiates a single unified OTS covering both LANs, enforces Section 59 payment letters, and verifies dual NOCs and 15-day credit bureau updates.'
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
              name: 'Pradeep Deshmukh'
            },
            datePublished: '2026-10-28',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5'
            },
            reviewBody:
              'I had a ₹6 Lakh base personal loan and a ₹4 Lakh top-up loan with the same private bank. After a job loss, both accounts turned NPA under one UCIC. CredSettle audited both ledgers, got one combined OTS letter naming both LANs, and helped me get two separate NOCs.',
            itemReviewed: {
              '@type': 'FinancialService',
              '@id': 'https://www.credsettle.com/#service'
            }
          },
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'Meenakshi Iyer'
            },
            datePublished: '2026-10-12',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5'
            },
            reviewBody:
              'My NBFC applied my lump-sum payment toward overdue fees on my old personal loan instead of closing my top-up account. CredSettle cited Section 59 of the Contract Act, forced a ledger reversal, and settled both accounts with a 52% total waiver.',
            itemReviewed: {
              '@type': 'FinancialService',
              '@id': 'https://www.credsettle.com/#service'
            }
          },
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'Rohit Malhotra'
            },
            datePublished: '2026-09-25',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5'
            },
            reviewBody:
              'Even after I paid my dual settlement, my CIBIL report still showed the top-up LAN as active and overdue. CredSettle escalated to the bank Principal Nodal Officer under the RBI 15-day reporting rule and fixed both credit tradelines quickly.',
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
      <TopUpDualAccountSettlementClient />
      <Footer />
    </div>
  );
}
