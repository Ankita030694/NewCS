import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CanRecoveryAgentsVisitMyOfficeClient from './CanRecoveryAgentsVisitMyOfficeClient';

export const metadata: Metadata = {
  title: 'Can Recovery Agents Visit Your Office? (Stop Them Legally)',
  description:
    'Are recovery agents threatening workplace visits? Learn RBI fair practice rules on office visits and stop collection harassment legally with CredSettle.',
  keywords: [
    'can bank recovery agents visit my office',
    'recovery agents talking to HR',
    'stop bank agents from visiting workplace',
    'rbi rules for office visits',
    'recovery agent harassment at workplace',
    'cease and desist notice for office visit',
    'rbi guidelines for debt recovery agents',
    'can recovery agents enter office premises',
    'police complaint against recovery agents',
    'one time settlement personal loan'
  ],
  openGraph: {
    title: 'Can Recovery Agents Visit Your Office? (Stop Them Legally)',
    description:
      'Are recovery agents threatening workplace visits? Learn RBI fair practice rules on office visits and stop collection harassment legally with CredSettle.',
    type: 'article',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://www.credsettle.com/can-recovery-agents-visit-my-office',
    images: [
      {
        url: 'https://www.credsettle.com/images/infographics/can-recovery-agents-visit-my-office.jpg',
        width: 1200,
        height: 630,
        alt: 'Can Recovery Agents Visit Your Office Legal Guide'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Can Recovery Agents Visit Your Office? (Stop Them Legally)',
    description:
      'Are recovery agents threatening workplace visits? Learn RBI fair practice rules on office visits and stop collection harassment legally with CredSettle.',
    images: ['https://www.credsettle.com/images/infographics/can-recovery-agents-visit-my-office.jpg']
  },
  alternates: {
    canonical: 'https://www.credsettle.com/can-recovery-agents-visit-my-office'
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function CanRecoveryAgentsVisitMyOfficePage() {
  const unifiedSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': 'https://www.credsettle.com/can-recovery-agents-visit-my-office#article',
        isPartOf: {
          '@type': 'WebPage',
          '@id': 'https://www.credsettle.com/can-recovery-agents-visit-my-office'
        },
        headline: 'Can Recovery Agents Visit Your Office? (Stop Them Legally)',
        description:
          'Are recovery agents threatening workplace visits? Learn RBI fair practice rules on office visits and stop collection harassment legally with CredSettle.',
        inLanguage: 'en-IN',
        mainEntityOfPage: 'https://www.credsettle.com/can-recovery-agents-visit-my-office',
        datePublished: '2026-09-01T09:00:00+05:30',
        dateModified: '2026-09-07T14:30:00+05:30',
        articleSection: 'Banking Law & Anti-Harassment',
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
        image: ['https://www.credsettle.com/images/infographics/can-recovery-agents-visit-my-office.jpg']
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
        '@id': 'https://www.credsettle.com/can-recovery-agents-visit-my-office#breadcrumb',
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
            name: 'Can Recovery Agents Visit Your Office',
            item: 'https://www.credsettle.com/can-recovery-agents-visit-my-office'
          }
        ]
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://www.credsettle.com/can-recovery-agents-visit-my-office#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Can bank recovery agents legally visit my workplace or office in India?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Under RBI Master Directions, recovery agents can only visit a workplace if you are genuinely unreachable at your residence. If you have explicitly prohibited workplace visits in writing, agents are legally barred from visiting your office.'
            }
          },
          {
            '@type': 'Question',
            name: 'What should I do immediately if a recovery agent shows up at my office?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Request the agent\'s official ID card, IIBF DRA certificate, and bank authorization letter. Inform office security, maintain composure, record the interaction, and firmly state that debt matters must be discussed via registered mail.'
            }
          },
          {
            '@type': 'Question',
            name: 'Are recovery agents permitted to speak with my employer, HR, or colleagues about my debt?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. Disclosing loan details to employers, HR managers, or coworkers violates RBI Fair Practices Code, privacy rights under Article 21, and constitutes actionable criminal defamation under Section 499 of the Indian Penal Code.'
            }
          },
          {
            '@type': 'Question',
            name: 'What are the legal calling and visiting hours for recovery agents under RBI guidelines?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'RBI regulations strictly limit all recovery activities, including telephone calls and personal visits, to the hours between 8:00 AM and 7:00 PM. Any workplace visit outside this window constitutes an illegal practice.'
            }
          },
          {
            '@type': 'Question',
            name: 'Can I file a police complaint if a recovery agent creates a scene at my office?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Creating a public scene, shouting, or intimidating you at your workplace constitutes criminal intimidation under Section 503/506 IPC and public nuisance under Section 268 IPC. You can lodge an immediate police complaint.'
            }
          },
          {
            '@type': 'Question',
            name: 'What is a Cease and Desist notice against workplace recovery visits?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'A Cease and Desist notice is a formal legal communication sent to the bank Principal Nodal Officer revoking consent for office visits and mandating that all debt communication take place exclusively via email or postal address.'
            }
          },
          {
            '@type': 'Question',
            name: 'How do I escalate recovery agent harassment to the RBI Ombudsman?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'If the bank Grievance Redressal Officer fails to stop workplace visits within 30 days of your complaint, submit an escalation online at cms.rbi.org.in under the Reserve Bank - Integrated Ombudsman Scheme, 2021.'
            }
          },
          {
            '@type': 'Question',
            name: 'Can a bank seize my salary or freeze my account for an unsecured loan default?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Banks cannot arbitrarily seize salary or freeze accounts without a formal garnishee order from a competent civil court or Debt Recovery Tribunal under Section 19 of the Recovery of Debts and Bankruptcy Act.'
            }
          },
          {
            '@type': 'Question',
            name: 'How does a One-Time Settlement (OTS) permanently stop workplace recovery visits?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'An approved OTS legally discharges your defaulted debt upon payment of a negotiated compromise sum (typically 40% to 55% of principal). Once finalized, the bank recalls all collection agencies and issues a No Dues Certificate.'
            }
          },
          {
            '@type': 'Question',
            name: 'Will settling my loan affect my employment background checks or CIBIL score?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Settling temporarily marks the loan as Settled on your CIBIL report, which affects credit scores but has zero legal bearing on private sector employment background checks, and the status can be upgraded to Closed later.'
            }
          }
        ]
      },
      {
        '@type': 'FinancialService',
        '@id': 'https://www.credsettle.com/#service',
        name: 'CredSettle Workplace Anti-Harassment & Debt Dispute Resolution Services',
        url: 'https://www.credsettle.com/can-recovery-agents-visit-my-office',
        provider: {
          '@type': 'Organization',
          name: 'CredSettle'
        },
        image: 'https://www.credsettle.com/images/infographics/can-recovery-agents-visit-my-office.jpg',
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
          reviewCount: '5180',
          bestRating: '5',
          worstRating: '1'
        },
        review: [
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'Rajesh Nambiar'
            },
            datePublished: '2026-08-19',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5'
            },
            reviewBody:
              'A recovery agent threatened to meet my HR manager regarding an overdue personal loan. CredSettle immediately served a statutory cease-and-desist notice to the bank nodal officer citing RBI Master Directions. The visits stopped instantly, and we settled ₹6.8 Lakhs for ₹2.9 Lakhs.',
            itemReviewed: {
              '@type': 'FinancialService',
              '@id': 'https://www.credsettle.com/#service'
            }
          },
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'Sneha Sen'
            },
            datePublished: '2026-07-11',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5'
            },
            reviewBody:
              'Third-party agents caused severe embarrassment at my tech park office. CredSettle took immediate legal control, escalated the Fair Practices violation to the RBI Ombudsman, and negotiated a structured compromise settlement.',
            itemReviewed: {
              '@type': 'FinancialService',
              '@id': 'https://www.credsettle.com/#service'
            }
          },
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'Vikramaditya Rathore'
            },
            datePublished: '2026-06-25',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5'
            },
            reviewBody:
              'CredSettle protected my professional dignity when recovery agents attempted to enter my commercial premises. Their legal team cited Section 503 IPC and forced the lender to negotiate directly through formal channels.',
            itemReviewed: {
              '@type': 'FinancialService',
              '@id': 'https://www.credsettle.com/#service'
            }
          },
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'Meenakshi Sundaram'
            },
            datePublished: '2026-05-18',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '4.8'
            },
            reviewBody:
              'Outstanding anti-harassment defense. The CredSettle team stopped persistent workplace collection threats within 48 hours and helped me secure a clean One-Time Settlement with an official No Dues Certificate.',
            itemReviewed: {
              '@type': 'FinancialService',
              '@id': 'https://www.credsettle.com/#service'
            }
          },
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'Ananya Mukherjee'
            },
            datePublished: '2026-04-02',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5'
            },
            reviewBody:
              'After facing intimidation from recovery agents at my workplace, CredSettle stepped in with decisive legal representations. Their guidance gave me peace of mind and an affordable 50% debt waiver.',
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
      <CanRecoveryAgentsVisitMyOfficeClient />
      <Footer />
    </div>
  );
}
