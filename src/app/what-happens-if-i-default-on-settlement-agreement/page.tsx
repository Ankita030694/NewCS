import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatHappensIfIDefaultOnSettlementAgreementClient from './WhatHappensIfIDefaultOnSettlementAgreementClient';

export const metadata: Metadata = {
  title: 'Settlement Agreement Default: What to Do',
  description:
    'Defaulted on your loan settlement agreement? Understand revocation terms, debt revival, Section 138 defense, and renegotiation.',
  keywords: [
    'what happens if i default on settlement agreement',
    'defaulting on loan settlement agreement',
    'missed ots installment',
    'settlement agreement revocation clause',
    'can bank cancel settlement agreement',
    'what happens if one time settlement fails',
    'renegotiate loan settlement after default',
    'bank legal notice after settlement default',
    'section 138 after settlement default',
    'cure period for loan settlement default',
    'cibil score after settlement default',
    'credsettle debt resolution'
  ],
  openGraph: {
    title: 'Settlement Agreement Default: What to Do',
    description:
      'Defaulted on your loan settlement agreement? Understand revocation clauses, revival of original debt, penal interest risks, Section 138 defense, and renegotiation steps.',
    type: 'article',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://www.credsettle.com/what-happens-if-i-default-on-settlement-agreement',
    images: [
      {
        url: 'https://www.credsettle.com/images/infographics/what-happens-if-i-default-on-settlement-agreement.jpg',
        width: 1200,
        height: 630,
        alt: 'What Happens If You Default on a Settlement Agreement Infographic Roadmap'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Settlement Agreement Default: What to Do',
    description:
      'Defaulted on your loan settlement agreement? Understand revocation clauses, revival of original debt, penal interest risks, Section 138 defense, and renegotiation steps.',
    images: ['https://www.credsettle.com/images/infographics/what-happens-if-i-default-on-settlement-agreement.jpg']
  },
  alternates: {
    canonical: 'https://www.credsettle.com/what-happens-if-i-default-on-settlement-agreement'
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function WhatHappensIfIDefaultOnSettlementAgreementPage() {
  const unifiedSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': 'https://www.credsettle.com/what-happens-if-i-default-on-settlement-agreement#article',
        isPartOf: {
          '@type': 'WebPage',
          '@id': 'https://www.credsettle.com/what-happens-if-i-default-on-settlement-agreement'
        },
        headline: 'What Happens If You Default on a Settlement Agreement? (OTS Guide)',
        description:
          'Defaulted on your loan settlement agreement? Understand revocation clauses, revival of original debt, penal interest risks, Section 138 defense, and renegotiation steps.',
        inLanguage: 'en-IN',
        mainEntityOfPage: 'https://www.credsettle.com/what-happens-if-i-default-on-settlement-agreement',
        datePublished: '2026-09-03T09:00:00+05:30',
        dateModified: '2026-09-03T09:00:00+05:30',
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
        image: [
          'https://www.credsettle.com/images/infographics/what-happens-if-i-default-on-settlement-agreement.jpg'
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
        '@id': 'https://www.credsettle.com/what-happens-if-i-default-on-settlement-agreement#breadcrumb',
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
            name: 'What Happens If You Default on a Settlement Agreement',
            item: 'https://www.credsettle.com/what-happens-if-i-default-on-settlement-agreement'
          }
        ]
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://www.credsettle.com/what-happens-if-i-default-on-settlement-agreement#faq',
        mainEntity: [
          {
                    "@type": "Question",
                    "name": "What happens immediately if I miss a loan settlement installment?",
                    "acceptedAnswer": {
                              "@type": "Answer",
                              "text": "Missing an installment triggers the revocation clause. The lender cancels waiver discounts, revives full debt plus penal interest, and reallocates past payments toward interest."
                    }
          },
          {
                    "@type": "Question",
                    "name": "Is there a grace period if I cannot pay my settlement installment on time?",
                    "acceptedAnswer": {
                              "@type": "Answer",
                              "text": "Settlement letters typically allow a 7 to 15 day grace period. Borrowers must notify the bank in writing before the due date to request an extension."
                    }
          },
          {
                    "@type": "Question",
                    "name": "Can the bank forfeit payments made before defaulting on the settlement?",
                    "acceptedAnswer": {
                              "@type": "Answer",
                              "text": "Banks do not forfeit funds, but they reallocate prior installments toward un-waived interest and late fees rather than principal, leaving a higher balance."
                    }
          },
          {
                    "@type": "Question",
                    "name": "Can I renegotiate a new settlement agreement after defaulting on the first one?",
                    "acceptedAnswer": {
                              "@type": "Answer",
                              "text": "Yes. Banks prefer recovering capital over litigation. Submit an emergency hardship petition to the Zonal Credit Committee to restructure dues into a revised plan."
                    }
          },
          {
                    "@type": "Question",
                    "name": "Will the bank file a police case or arrest me for defaulting on a settlement?",
                    "acceptedAnswer": {
                              "@type": "Answer",
                              "text": "No. Loan default is strictly a civil dispute under the Indian Contract Act, 1872. Police cannot register an FIR or make an arrest."
                    }
          },
          {
                    "@type": "Question",
                    "name": "What legal notices can a bank send after a settlement default?",
                    "acceptedAnswer": {
                              "@type": "Answer",
                              "text": "Lenders typically issue demand notices under Section 138 NI Act for cheque bounces, Section 25 PSSA for NACH bounces, or initiate arbitration."
                    }
          },
          {
                    "@type": "Question",
                    "name": "How does defaulting on a settlement affect my CIBIL credit score?",
                    "acceptedAnswer": {
                              "@type": "Answer",
                              "text": "Defaulting lowers your CIBIL score by 80 to 140 points, as lenders report monthly overdue payments, updated DPD, and active default status."
                    }
          },
          {
                    "@type": "Question",
                    "name": "Can recovery agents visit my home or workplace after a settlement default?",
                    "acceptedAnswer": {
                              "@type": "Answer",
                              "text": "While collection resumes, agents must follow RBI Fair Practices Code. They cannot visit before 8:00 AM or after 7:00 PM, or contact relatives."
                    }
          },
          {
                    "@type": "Question",
                    "name": "What should I do if the bank initiates arbitration after a settlement default?",
                    "acceptedAnswer": {
                              "@type": "Answer",
                              "text": "Challenge unilateral arbitrator appointments under Section 12(5) of the Arbitration Act, citing Supreme Court rulings in Perkins Eastman, while submitting a revised compromise."
                    }
          },
          {
                    "@type": "Question",
                    "name": "When do I get my official No Dues Certificate after completing a renegotiated settlement?",
                    "acceptedAnswer": {
                              "@type": "Answer",
                              "text": "Once all restructured installments clear in core banking, the lender is legally required to issue the official No Dues Certificate within 15 to 30 days."
                    }
          }
]
      },
      {
        '@type': 'FinancialService',
        '@id': 'https://www.credsettle.com/#service',
        name: 'CredSettle Settlement Default Remediation & Debt Restructuring Legal Advisory',
        url: 'https://www.credsettle.com/what-happens-if-i-default-on-settlement-agreement',
        provider: {
          '@type': 'Organization',
          name: 'CredSettle'
        },
        image: 'https://www.credsettle.com/images/infographics/what-happens-if-i-default-on-settlement-agreement.jpg',
        telephone: '+91-8800226635',
        priceRange: '₹₹',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Barakhamba Road, Connaught Place',
          addressLocality: 'New Delhi',
          addressRegion: 'Delhi',
          postalCode: '110001',
          addressCountry: 'IN'
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.8',
          reviewCount: '5190',
          bestRating: '5',
          worstRating: '1'
        },
        review: [
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'Vikramaditya Sengupta'
            },
            datePublished: '2026-08-18',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5'
            },
            reviewBody:
              'I missed the second installment of my ₹6 Lakh loan settlement due to an unexpected hospital admission. The bank threatened to cancel my ₹3 Lakh waiver. CredSettle stepped in immediately, submitted medical records to the Zonal Credit Committee, and revalidated my settlement with an extended 60-day schedule.',
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
            datePublished: '2026-07-30',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5'
            },
            reviewBody:
              'After my startup faced liquidity issues, I defaulted on my credit card settlement tranches. Collection agents resumed calling aggressively. CredSettle sent a formal Cease-and-Desist notice under RBI guidelines and restructured the remaining dues into 3 manageable monthly payments.',
            itemReviewed: {
              '@type': 'FinancialService',
              '@id': 'https://www.credsettle.com/#service'
            }
          },
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'Harpreet Singh Sandhu'
            },
            datePublished: '2026-06-25',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5'
            },
            reviewBody:
              'The bank had sent a Section 138 notice after my settlement installment bounced. CredSettle legal team vetted the notice, drafted a strong reply disputing the inflated penal charges, and settled the dispute before Lok Adalat with zero court penalties.',
            itemReviewed: {
              '@type': 'FinancialService',
              '@id': 'https://www.credsettle.com/#service'
            }
          },
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'Ananya Roy Choudhury'
            },
            datePublished: '2026-05-14',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5'
            },
            reviewBody:
              'I was terrified when my personal loan OTS was revoked and the bank added ₹2.5 Lakhs in compound penal interest. CredSettle renegotiated the entire file, saved my initial token deposit, and got the full penal interest waived in the revised sanction letter.',
            itemReviewed: {
              '@type': 'FinancialService',
              '@id': 'https://www.credsettle.com/#service'
            }
          },
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'Rajesh Nair'
            },
            datePublished: '2026-04-05',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5'
            },
            reviewBody:
              'Outstanding legal and advisory support. CredSettle handled my multi-lender settlement defaults across two private banks, stopped unilateral arbitration proceedings, and secured authentic No Dues Certificates for both accounts.',
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
      <WhatHappensIfIDefaultOnSettlementAgreementClient />
      <Footer />
    </div>
  );
}
