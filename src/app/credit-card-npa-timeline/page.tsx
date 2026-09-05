import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CreditCardNpaTimelineClient from './CreditCardNpaTimelineClient';

export const metadata: Metadata = {
  title: 'When Does a Credit Card Become NPA in India?',
  description:
    'When does a credit card become an NPA in India? Timeline of SMA stages, 90-day NPA classification, recovery, and OTS timing.',
  keywords: [
    'when does a credit card become npa',
    'credit card npa timeline',
    'credit card delinquency stages rbi',
    'sma 0 sma 1 sma 2 credit card',
    'credit card npa rules 90 days',
    'credit card non performing asset classification',
    'credit card settlement after npa',
    'credit card minimum amount due npa',
    'credit card recovery agency assignment timeline',
    'credsettle credit card npa resolution'
  ],
  openGraph: {
    title: 'When Does a Credit Card Become NPA in India?',
    description:
      'Understand when a credit card becomes an NPA in India. Complete chronological timeline of SMA-0, SMA-1, SMA-2, and Substandard NPA stages, bank recovery escalation, and OTS settlement timing.',
    type: 'article',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://www.credsettle.com/credit-card-npa-timeline',
    images: [
      {
        url: 'https://www.credsettle.com/images/infographics/credit-card-npa-timeline.jpg',
        width: 1200,
        height: 630,
        alt: 'Credit Card NPA Timeline and Delinquency Stages Legal Guide'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'When Does a Credit Card Become NPA in India?',
    description:
      'Understand when a credit card becomes an NPA in India. Complete chronological timeline of SMA-0, SMA-1, SMA-2, and Substandard NPA stages, bank recovery escalation, and OTS settlement timing.',
    images: ['https://www.credsettle.com/images/infographics/credit-card-npa-timeline.jpg']
  },
  alternates: {
    canonical: 'https://www.credsettle.com/credit-card-npa-timeline'
  }
};

export default function CreditCardNpaTimelinePage() {
  const unifiedSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': 'https://www.credsettle.com/credit-card-npa-timeline#article',
        isPartOf: {
          '@type': 'WebPage',
          '@id': 'https://www.credsettle.com/credit-card-npa-timeline'
        },
        headline: 'When Does a Credit Card Become NPA? Delinquency Stages & Settlement Timeline',
        description:
          'Comprehensive legal and financial analysis of credit card delinquency stages in India under RBI Master Directions, covering SMA classifications, field collection cycles, credit score impacts, and optimal OTS settlement windows.',
        inLanguage: 'en-IN',
        mainEntityOfPage: 'https://www.credsettle.com/credit-card-npa-timeline',
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
        image: ['https://www.credsettle.com/images/infographics/credit-card-npa-timeline.jpg']
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
        '@id': 'https://www.credsettle.com/credit-card-npa-timeline#breadcrumb',
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
            name: 'Credit Card NPA Timeline',
            item: 'https://www.credsettle.com/credit-card-npa-timeline'
          }
        ]
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://www.credsettle.com/credit-card-npa-timeline#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'When does a credit card account become an NPA in India?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Under RBI IRACP norms, a credit card becomes an NPA when the Minimum Amount Due remains unpaid for over 90 consecutive days past due date.'
            }
          },
          {
            '@type': 'Question',
            name: 'What are the SMA stages before a credit card turns into an NPA?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Delinquency progresses across SMA-0 (1-30 days), SMA-1 (31-60 days), and SMA-2 (61-90 days), after which the account enters Substandard NPA status.'
            }
          },
          {
            '@type': 'Question',
            name: 'What happens to interest and penal charges once a credit card becomes NPA?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Banks must stop booking unrealized interest to income under RBI rules. Accumulated penal charges and finance fees are 100% waived during settlement negotiations.'
            }
          },
          {
            '@type': 'Question',
            name: 'Can recovery agents visit my home or office during the NPA timeline?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'While banks assign agencies during SMA-2 and NPA stages, agents must obey the RBI Fair Practices Code, prohibiting harassment and visits outside 8:00 AM to 7:00 PM.'
            }
          },
          {
            '@type': 'Question',
            name: 'Can I go to jail or face arrest if my credit card becomes an NPA?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. Unsecured card default is strictly a civil dispute. Banks cannot arrest borrowers for genuine financial distress, provided no fraud or dishonored cheques occurred.'
            }
          },
          {
            '@type': 'Question',
            name: 'When is the optimal time to negotiate a One-Time Settlement (OTS)?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'The prime window begins between 120 and 180 days post-default, when bank 15% to 25% provisioning rules incentivize credit committees to grant 40% to 55% waivers.'
            }
          },
          {
            '@type': 'Question',
            name: 'What legal notices can a bank send after a credit card becomes NPA?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Banks may issue a Loan Recall Notice, Section 25 PSSA notice for bounced auto-debits, Section 138 NI Act notice for bounced cheques, or Section 21 Arbitration notices.'
            }
          },
          {
            '@type': 'Question',
            name: 'How does credit card NPA classification impact my CIBIL score?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'An NPA classification causes a score drop of 150 to 250 points. Completing an OTS stops negative reporting, allowing score recovery to 750+ within 12 to 18 months.'
            }
          },
          {
            '@type': 'Question',
            name: 'Can a bank freeze my savings account if my credit card becomes NPA?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Yes. Under Section 171 of the Indian Contract Act, banks can exercise a general banker's lien against savings in the same bank, making external accounts vital."
            }
          },
          {
            '@type': 'Question',
            name: 'What document proves that my credit card NPA has been fully resolved?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Complete legal discharge is confirmed exclusively by an official, signed No Dues Certificate (NDC) or Settlement Closure Letter issued by the bank, confirming zero residual liability.'
            }
          }
        ]
      },
      {
        '@type': 'FinancialService',
        '@id': 'https://www.credsettle.com/#service',
        name: 'CredSettle Credit Card NPA Dispute Resolution & Debt Settlement Services',
        url: 'https://www.credsettle.com/credit-card-npa-timeline',
        provider: {
          '@type': 'Organization',
          name: 'CredSettle'
        },
        image: 'https://www.credsettle.com/images/infographics/credit-card-npa-timeline.jpg',
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
          reviewCount: '5310',
          bestRating: '5',
          worstRating: '1'
        },
        review: [
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'Arunav Chakraborty'
            },
            datePublished: '2026-08-14',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5'
            },
            reviewBody: 'My credit card dues ballooned to ₹6.4 Lakhs after 120 days of non-payment and the account was marked Substandard NPA. CredSettle stopped third-party recovery visits under RBI guidelines and structured an OTS settlement for ₹2.3 Lakhs with an official No Dues Certificate.',
            itemReviewed: {
              '@type': 'FinancialService',
              '@id': 'https://www.credsettle.com/#service'
            }
          },
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'Suhasini Mehta'
            },
            datePublished: '2026-07-29',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5'
            },
            reviewBody: 'I was unaware of the SMA timeline until my bank initiated legal notices under Section 25 PSSA. CredSettle explained my statutory rights, responded to the legal notices, and secured a 54% waiver on the outstanding card balance.',
            itemReviewed: {
              '@type': 'FinancialService',
              '@id': 'https://www.credsettle.com/#service'
            }
          },
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'Karthik Ramanathan'
            },
            datePublished: '2026-06-12',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5'
            },
            reviewBody: 'Following a salary reduction, I missed minimum due payments across two cards for 90 days. CredSettle represented my case before the bank credit committee and negotiated a full settlement, saving over ₹4 Lakhs in compounding finance charges.',
            itemReviewed: {
              '@type': 'FinancialService',
              '@id': 'https://www.credsettle.com/#service'
            }
          },
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'Divya Gopinath'
            },
            datePublished: '2026-05-24',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '4.8'
            },
            reviewBody: 'CredSettle provided exceptional legal support when my card reached 150 days delinquency. Their team protected my salary account from banker lien deductions and helped me navigate the settlement process smoothly without court litigation.',
            itemReviewed: {
              '@type': 'FinancialService',
              '@id': 'https://www.credsettle.com/#service'
            }
          },
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'Manish Rawat'
            },
            datePublished: '2026-04-18',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5'
            },
            reviewBody: 'After my card account was written off and assigned to an external agency, I faced non-stop recovery calls. CredSettle served representation notices to the bank Nodal Officer, brought the matter to the settlement desk, and closed the debt cleanly.',
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
      <CreditCardNpaTimelineClient />
      <Footer />
    </div>
  );
}
