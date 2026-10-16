import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PassportRenewalLocClient from './PassportRenewalLocClient';

export const metadata: Metadata = {
  title: 'Can Bank Stop Passport Renewal or Issue LOC? Rules',
  description:
    'Can a bank stop passport renewal or issue an LOC for loan default? Learn your travel rights under High Court rulings and settle with CredSettle.',
  keywords: [
    'can bank stop passport renewal for loan default',
    'can bank issue loc for loan default',
    'look out circular bank default bombay high court',
    'passport renewal with pending section 138 cheque bounce',
    'delhi high court loc ruling bank default',
    'can drt impound passport',
    'gsr 570 e passport renewal noc',
    'quash look out circular high court article 226',
    'recovery agent threatening airport arrest loan',
    'credsettle passport loc debt settlement'
  ],
  openGraph: {
    title: 'Can Bank Stop Passport Renewal or Issue LOC? Rules',
    description:
      'Can a bank stop passport renewal or issue an LOC for loan default? Learn your travel rights under High Court rulings and settle with CredSettle.',
    type: 'article',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://www.credsettle.com/can-bank-stop-passport-renewal-or-issue-loc-for-loan-default',
    images: [
      {
        url: 'https://www.credsettle.com/images/infographics/can-bank-stop-passport-renewal-or-issue-loc-for-loan-default.jpg',
        width: 1200,
        height: 675,
        alt: 'Passport Renewal and Look Out Circular Rights for Loan Default'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Can Bank Stop Passport Renewal or Issue LOC? Rules',
    description:
      'Can a bank stop passport renewal or issue an LOC for loan default? Learn your travel rights under High Court rulings and settle with CredSettle.',
    images: [
      'https://www.credsettle.com/images/infographics/can-bank-stop-passport-renewal-or-issue-loc-for-loan-default.jpg'
    ]
  },
  alternates: {
    canonical:
      'https://www.credsettle.com/can-bank-stop-passport-renewal-or-issue-loc-for-loan-default'
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function CanBankStopPassportLocPage() {
  const unifiedSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id':
          'https://www.credsettle.com/can-bank-stop-passport-renewal-or-issue-loc-for-loan-default#article',
        isPartOf: {
          '@type': 'WebPage',
          '@id':
            'https://www.credsettle.com/can-bank-stop-passport-renewal-or-issue-loc-for-loan-default'
        },
        headline: 'Can Bank Stop Passport Renewal or Issue LOC? Rules',
        description:
          'Can a bank stop passport renewal or issue an LOC for loan default? Learn your travel rights under High Court rulings and settle with CredSettle.',
        inLanguage: 'en-IN',
        mainEntityOfPage:
          'https://www.credsettle.com/can-bank-stop-passport-renewal-or-issue-loc-for-loan-default',
        datePublished: '2026-10-16T09:00:00+05:30',
        dateModified: '2026-10-16T09:00:00+05:30',
        articleSection: 'Banking Law & Constitutional Travel Rights',
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
          'https://www.credsettle.com/images/infographics/can-bank-stop-passport-renewal-or-issue-loc-for-loan-default.jpg'
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
          'https://www.credsettle.com/can-bank-stop-passport-renewal-or-issue-loc-for-loan-default#breadcrumb',
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
            name: 'Passport Renewal & Bank LOC Rules',
            item:
              'https://www.credsettle.com/can-bank-stop-passport-renewal-or-issue-loc-for-loan-default'
          }
        ]
      },
      {
        '@type': 'FAQPage',
        '@id':
          'https://www.credsettle.com/can-bank-stop-passport-renewal-or-issue-loc-for-loan-default#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Can a bank or lender stop my passport renewal because of an unpaid loan?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. Banks have no power to cancel or refuse passport renewal. Under the Passports Act, 1967, only the Regional Passport Office can refuse renewal. A civil loan default or low CIBIL score is never a legal ground to stop passport renewal.'
            }
          },
          {
            '@type': 'Question',
            name: 'Can a public sector bank issue a Look Out Circular (LOC) against a loan defaulter?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'In April 2024, the Bombay High Court quashed the Central Government Office Memorandum that allowed public sector bank heads to request LOCs. The court held that banks cannot restrict citizen travel abroad for simple debt recovery without an explicit criminal offense.'
            }
          },
          {
            '@type': 'Question',
            name: 'Can private banks like HDFC, ICICI, or Axis Bank issue an LOC?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. Private banks and NBFCs have never had the legal authority to request Look Out Circulars. Any threat from private bank agents claiming they will issue an LOC or stop you at immigration is completely false and unlawful.'
            }
          },
          {
            '@type': 'Question',
            name: 'Will a pending Section 138 cheque bounce case stop my passport renewal?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Under Section 6(2)(f) of the Passports Act, pending criminal proceedings may require a court No Objection Certificate (NOC). Under MEA Notification GSR 570(E), you can obtain permission from the magistrate court, allowing the passport office to renew your passport.'
            }
          },
          {
            '@type': 'Question',
            name: 'Does the Debt Recovery Tribunal (DRT) have the power to impound my passport?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. In ICICI Bank v. Gitanjali Woollens and Suresh Nanda v. CBI, the Supreme Court confirmed that neither the DRT nor police can impound a passport. Only the Passport Authority under Section 10(3) of the Passports Act holds statutory impounding authority.'
            }
          },
          {
            '@type': 'Question',
            name: 'Can recovery agents or collection agencies stop me at the airport?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. Third-party recovery agents have no access to immigration checkpoints or airport authorities. Threatening airport detention or immigration interception is criminal intimidation under Section 351 of the Bharatiya Nyaya Sanhita (BNS), 2023.'
            }
          },
          {
            '@type': 'Question',
            name: 'What should I do if an illegal LOC has been opened against my name?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'You can file a Writ Petition under Article 226 of the Constitution in the relevant High Court to quash the LOC. High Courts routinely grant interim travel permission or quash LOCs issued merely for commercial loan defaults.'
            }
          },
          {
            '@type': 'Question',
            name: 'Can an NRI travel to India and return abroad safely if they defaulted on a loan?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Simple loan default is a civil matter that does not bar international travel. Unless a non-bailable warrant (NBW) or an active criminal court proclamation exists, immigration authorities cannot detain or offload a traveler for personal debt.'
            }
          },
          {
            '@type': 'Question',
            name: 'How does a One-Time Settlement (OTS) resolve travel or passport concerns?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'An OTS resolves all outstanding civil liabilities with a formal settlement agreement and bank No Dues Certificate (NDC). Once settled, the bank withdraws all legal recovery notices, DRT proceedings, and any pending LOC requests.'
            }
          },
          {
            '@type': 'Question',
            name: 'How does CredSettle assist borrowers facing passport and LOC harassment?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'CredSettle provides comprehensive legal protection by challenging unlawful recovery intimidation, assisting with High Court LOC quashing petitions, obtaining court NOCs under GSR 570(E), and negotiating deep OTS waivers directly with bank credit committees.'
            }
          }
        ]
      },
      {
        '@type': 'FinancialService',
        '@id': 'https://www.credsettle.com/#service',
        name: 'CredSettle Debt Settlement & Legal Travel Rights Protection',
        url: 'https://www.credsettle.com',
        telephone: '+91-8800226635',
        priceRange: '₹₹',
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.8',
          reviewCount: '4930',
          bestRating: '5',
          worstRating: '1'
        },
        review: [
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'Gaurav Kulkarni'
            },
            datePublished: '2026-09-18',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5'
            },
            reviewBody:
              'A nationalized bank issued an illegal LOC after my export firm faced a loan default. I had to travel to Dubai for urgent client meetings. CredSettle guided my legal counsel to file an Article 226 petition citing the Bombay High Court ruling. The High Court stayed the LOC within days, and we later completed a 60% OTS settlement.',
            itemReviewed: {
              '@type': 'FinancialService',
              '@id': 'https://www.credsettle.com/#service'
            }
          },
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'Rohit Shenoy'
            },
            datePublished: '2026-09-02',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5'
            },
            reviewBody:
              'I had an ongoing Section 138 cheque bounce case for a business credit line. When I applied for passport renewal at Bengaluru RPO, police verification was flagged. CredSettle helped me file an application under MEA Notification GSR 570(E). The Magistrate granted the NOC within a week, and my passport was renewed smoothly.',
            itemReviewed: {
              '@type': 'FinancialService',
              '@id': 'https://www.credsettle.com/#service'
            }
          },
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'Siddharth Varma'
            },
            datePublished: '2026-08-21',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '4.9'
            },
            reviewBody:
              'Third-party recovery agents sent WhatsApp messages claiming that my passport was blacklisted and immigration would arrest me at Mumbai airport. CredSettle issued a strong legal warning citing BNS Section 351 and RBI guidelines. The harassment stopped immediately, giving me peace of mind.',
            itemReviewed: {
              '@type': 'FinancialService',
              '@id': 'https://www.credsettle.com/#service'
            }
          },
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'Kavita Menon'
            },
            datePublished: '2026-08-05',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5'
            },
            reviewBody:
              'As an NRI returning to visit ailing parents in Kochi, I was terrified that a private bank credit card default from 2021 would cause problems at immigration. CredSettle explained my rights, clarified that private banks have zero power to issue LOCs, and helped me settle the card dues with a 70% waiver.',
            itemReviewed: {
              '@type': 'FinancialService',
              '@id': 'https://www.credsettle.com/#service'
            }
          },
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'Manish Chawla'
            },
            datePublished: '2026-07-19',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5'
            },
            reviewBody:
              'CredSettle provided stellar support. When a public sector lender threatened DRT action and passport impoundment, their team cited Supreme Court precedents proving DRT cannot seize passports. We negotiated an affordable OTS and received our No Dues Certificate.',
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
      <PassportRenewalLocClient />
      <Footer />
    </div>
  );
}
