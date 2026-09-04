import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StopCreditCardRecoveryCallsClient from './StopCreditCardRecoveryCallsClient';

export const metadata: Metadata = {
  title: 'Stop Credit Card Recovery Calls Immediately',
  description:
    'Relentless credit card collection calls? Learn your statutory rights under RBI Fair Practices Code, enforce calling hours (8 AM to 7 PM), and stop agent harassment.',
  keywords: [
    'how to stop credit card recovery calls immediately',
    'stop credit card recovery agent harassment',
    'rbi guidelines for credit card collection calls',
    'credit card collection call timing rbi',
    'complaint against bank recovery agent harassment',
    'cease and desist notice credit card recovery',
    'rbi ombudsman complaint credit card harassment',
    'credit card recovery agent calling relatives',
    'can credit card recovery agents visit office',
    'credit card one time settlement rbi rules'
  ],
  openGraph: {
    title: 'Stop Credit Card Recovery Calls Immediately',
    description:
      'Relentless credit card collection calls? Learn your statutory rights under RBI Fair Practices Code, enforce calling hours (8 AM to 7 PM), and stop agent harassment.',
    type: 'article',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://www.credsettle.com/stop-credit-card-recovery-calls',
    images: [
      {
        url: 'https://www.credsettle.com/images/infographics/stop-credit-card-recovery-calls.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Stop Credit Card Recovery Calls Legal Guide'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stop Credit Card Recovery Calls Immediately',
    description:
      'Relentless credit card collection calls? Learn your statutory rights under RBI Fair Practices Code, enforce calling hours (8 AM to 7 PM), and stop agent harassment.',
    images: ['https://www.credsettle.com/images/infographics/stop-credit-card-recovery-calls.jpg']
  },
  alternates: {
    canonical: 'https://www.credsettle.com/stop-credit-card-recovery-calls'
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function StopCreditCardRecoveryCallsPage() {
  const unifiedSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': 'https://www.credsettle.com/stop-credit-card-recovery-calls#article',
        isPartOf: {
          '@type': 'WebPage',
          '@id': 'https://www.credsettle.com/stop-credit-card-recovery-calls'
        },
        headline: 'How to Stop Credit Card Recovery Calls Immediately (Legal Guide)',
        description:
          'Relentless credit card collection calls? Learn your statutory rights under RBI Fair Practices Code, enforce calling hours (8 AM to 7 PM), and stop agent harassment.',
        inLanguage: 'en-IN',
        mainEntityOfPage: 'https://www.credsettle.com/stop-credit-card-recovery-calls',
        datePublished: '2026-08-28T09:00:00+05:30',
        dateModified: '2026-08-28T09:00:00+05:30',
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
        image: ['https://www.credsettle.com/images/infographics/stop-credit-card-recovery-calls.jpg']
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
        '@id': 'https://www.credsettle.com/stop-credit-card-recovery-calls#breadcrumb',
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
            name: 'Stop Credit Card Recovery Calls',
            item: 'https://www.credsettle.com/stop-credit-card-recovery-calls'
          }
        ]
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://www.credsettle.com/stop-credit-card-recovery-calls#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'How can I stop credit card recovery calls immediately in India?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Serve a formal Cease-and-Desist notice via email to the bank Grievance Redressal Officer and Principal Nodal Officer, citing RBI Fair Practices Code rules that prohibit harassment and restrict collection communication exclusively to registered written channels.'
            }
          },
          {
            '@type': 'Question',
            name: 'What are the official RBI rules regarding credit card recovery call timings?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Under RBI Master Directions, recovery telecallers can contact borrowers only between 8:00 AM and 7:00 PM. Calls placed outside this window constitute actionable regulatory violations punishable by the RBI Ombudsman.'
            }
          },
          {
            '@type': 'Question',
            name: 'Can credit card recovery agents call my family, friends, or office HR?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. RBI rules strictly prohibit contacting family, friends, or employers regarding card defaults. Disclosing debt details to third parties violates privacy laws and constitutes criminal defamation under Section 499 IPC.'
            }
          },
          {
            '@type': 'Question',
            name: 'Can I go to jail or face police arrest for credit card payment default?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. Credit card default is purely a civil breach of contract under the Indian Contract Act. Non-payment is not a criminal offense, and recovery agents cannot issue arrest warrants or police summons.'
            }
          },
          {
            '@type': 'Question',
            name: 'Is it legal to record phone calls with aggressive credit card recovery agents?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Borrowers have the legal right to record agent calls. Audio logs serve as admissible electronic evidence under Section 65B of the Indian Evidence Act when submitting formal complaints before banking authorities.'
            }
          },
          {
            '@type': 'Question',
            name: 'What is a Cease and Desist notice for bank recovery harassment?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'A Cease and Desist notice is a formal legal notice sent to bank nodal officers documenting collection harassment and mandating that the lender immediately recall recovery agencies and communicate exclusively in writing.'
            }
          },
          {
            '@type': 'Question',
            name: 'How do I file a formal complaint against credit card recovery harassment with the RBI Ombudsman?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'If the bank fails to resolve harassment within 30 days, submit a complaint at cms.rbi.org.in under the RBI Integrated Ombudsman Scheme, attaching call records and your prior nodal officer grievance letters.'
            }
          },
          {
            '@type': 'Question',
            name: 'What happens if a credit card bank sends a Section 138 or Section 25 legal notice?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'If auto-debit mandates or cheques bounce, the bank may send a statutory notice under Section 25 PSSA or Section 138 NI Act. Reply through legal counsel within 15 days to seek conciliation.'
            }
          },
          {
            '@type': 'Question',
            name: 'Can I settle my credit card dues through a One-Time Settlement (OTS) to stop calls permanently?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. An official One-Time Settlement permanently resolves debt and halts collection calls. Eligible borrowers can waive 100% of penal charges and 40% to 55% of principal, receiving a No Dues Certificate.'
            }
          },
          {
            '@type': 'Question',
            name: 'How does settling a credit card affect my CIBIL score and can it be repaired?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Settling marks the account as Settled, temporarily lowering CIBIL scores. However, cardholders can rebuild credit to 750+ over 12 to 24 months using secured credit cards or Section 21 CICRA status conversion.'
            }
          }
        ]
      },
      {
        '@type': 'FinancialService',
        '@id': 'https://www.credsettle.com/#service',
        name: 'CredSettle Credit Card Dispute Resolution & Anti-Harassment Services',
        url: 'https://www.credsettle.com/stop-credit-card-recovery-calls',
        provider: {
          '@type': 'Organization',
          name: 'CredSettle'
        },
        image: 'https://www.credsettle.com/images/infographics/stop-credit-card-recovery-calls.jpg',
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
          reviewCount: '5420',
          bestRating: '5',
          worstRating: '1'
        },
        review: [
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'Arjun Swaminathan'
            },
            datePublished: '2026-07-22',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5'
            },
            reviewBody:
              'I was bombarded with over 25 aggressive recovery calls a day across three private bank credit cards. CredSettle issued a formal Cease-and-Desist notice to the Principal Nodal Officers citing RBI Fair Practices Code violations. The harassing calls halted within 48 hours, and we successfully settled ₹7.4 Lakhs in card debt for ₹3.1 Lakhs with official NDCs.',
            itemReviewed: {
              '@type': 'FinancialService',
              '@id': 'https://www.credsettle.com/#service'
            }
          },
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'Pooja Kulkarni'
            },
            datePublished: '2026-06-14',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5'
            },
            reviewBody:
              'Third-party collection agents threatened to contact my HR department and show up at my workplace. The CredSettle team stepped in immediately, logged a formal escalation with the RBI Ombudsman, and defended my legal rights under Section 503 IPC. Professional, swift, and highly effective legal backing.',
            itemReviewed: {
              '@type': 'FinancialService',
              '@id': 'https://www.credsettle.com/#service'
            }
          },
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'Manish Varma'
            },
            datePublished: '2026-05-30',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5'
            },
            reviewBody:
              'After losing my job, my credit card dues ballooned due to 48% APR finance charges and late fee penalties. CredSettle conducted a forensic ledger audit, stripped all unconscionable charges, and negotiated a single compromise settlement that saved me over ₹4 Lakhs.',
            itemReviewed: {
              '@type': 'FinancialService',
              '@id': 'https://www.credsettle.com/#service'
            }
          },
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'Sunita Aggarwal'
            },
            datePublished: '2026-04-18',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '4.8'
            },
            reviewBody:
              'The relentless telecaller intimidation stopped completely once CredSettle served statutory notices on the lending bank. They handled all communications with the bank credit committee and delivered my No Dues Certificate directly to my inbox.',
            itemReviewed: {
              '@type': 'FinancialService',
              '@id': 'https://www.credsettle.com/#service'
            }
          },
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'Gaurav Bhatia'
            },
            datePublished: '2026-03-09',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5'
            },
            reviewBody:
              'Outstanding legal support against unlawful credit card recovery tactics. CredSettle helped me understand that credit card non-payment is purely a civil matter. Their structured OTS plan enabled me to become debt-free without fear or embarrassment.',
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
      <StopCreditCardRecoveryCallsClient />
      <Footer />
    </div>
  );
}
