import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import VehicleRepossessionClient from './VehicleRepossessionClient';

export const metadata: Metadata = {
  title: 'Vehicle Repossession by Bouncers: SC Rulings and FIR Guide',
  description:
    'Stop illegal vehicle repossession by bouncers. Learn Supreme Court rulings, RBI recovery guidelines, and how to file a police FIR with CredSettle.',
  keywords: [
    'vehicle repossession by bouncers supreme court rulings fir',
    'illegal car repossession by bouncers india',
    'supreme court ruling on vehicle repossession',
    'icici bank vs prakash kaur vehicle seizure',
    'citicorp maruti finance vs vijayalaxmi',
    'file fir against recovery agents for snatching car',
    'rbi guidelines on car loan recovery agents',
    'can bank take car without notice in india',
    'police complaint against vehicle repossession goondas',
    'credsettle vehicle loan settlement defense'
  ],
  openGraph: {
    title: 'Vehicle Repossession by Bouncers: SC Rulings and FIR Guide',
    description:
      'Stop illegal vehicle repossession by bouncers. Learn Supreme Court rulings, RBI recovery guidelines, and how to file a police FIR with CredSettle.',
    type: 'article',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://www.credsettle.com/vehicle-repossession-by-bouncers-supreme-court-rulings-fir',
    images: [
      {
        url: 'https://www.credsettle.com/images/infographics/vehicle-repossession-by-bouncers-supreme-court-rulings-fir.jpg',
        width: 1200,
        height: 675,
        alt: 'Vehicle Repossession by Bouncers Supreme Court Rulings and FIR'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vehicle Repossession by Bouncers: SC Rulings and FIR Guide',
    description:
      'Stop illegal vehicle repossession by bouncers. Learn Supreme Court rulings, RBI recovery guidelines, and how to file a police FIR with CredSettle.',
    images: [
      'https://www.credsettle.com/images/infographics/vehicle-repossession-by-bouncers-supreme-court-rulings-fir.jpg'
    ]
  },
  alternates: {
    canonical: 'https://www.credsettle.com/vehicle-repossession-by-bouncers-supreme-court-rulings-fir'
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function VehicleRepossessionPage() {
  const unifiedSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': 'https://www.credsettle.com/vehicle-repossession-by-bouncers-supreme-court-rulings-fir#article',
        isPartOf: {
          '@type': 'WebPage',
          '@id': 'https://www.credsettle.com/vehicle-repossession-by-bouncers-supreme-court-rulings-fir'
        },
        headline: 'Vehicle Repossession by Bouncers: SC Rulings and FIR Guide',
        description:
          'Stop illegal vehicle repossession by bouncers. Learn Supreme Court rulings, RBI recovery guidelines, and how to file a police FIR with CredSettle.',
        inLanguage: 'en-IN',
        mainEntityOfPage: 'https://www.credsettle.com/vehicle-repossession-by-bouncers-supreme-court-rulings-fir',
        datePublished: '2026-10-15T09:00:00+05:30',
        dateModified: '2026-10-15T09:00:00+05:30',
        articleSection: 'Banking Law & Consumer Protection',
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
          'https://www.credsettle.com/images/infographics/vehicle-repossession-by-bouncers-supreme-court-rulings-fir.jpg'
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
        '@id': 'https://www.credsettle.com/vehicle-repossession-by-bouncers-supreme-court-rulings-fir#breadcrumb',
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
            name: 'Vehicle Repossession by Bouncers & FIR',
            item: 'https://www.credsettle.com/vehicle-repossession-by-bouncers-supreme-court-rulings-fir'
          }
        ]
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://www.credsettle.com/vehicle-repossession-by-bouncers-supreme-court-rulings-fir#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Can a bank or NBFC hire bouncers or musclemen to seize my vehicle?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. The Supreme Court of India in ICICI Bank v. Prakash Kaur strictly prohibited the deployment of musclemen or bouncers for vehicle recovery. The court affirmed that banks must follow due process of law and cannot resort to physical force or intimidation.'
            }
          },
          {
            '@type': 'Question',
            name: 'Can recovery agents stop my car on the road and snatch the keys forcibly?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. Stopping a vehicle in transit and forcibly seizing keys constitutes criminal offences under the Bharatiya Nyaya Sanhita (BNS), including wrongful restraint, criminal force, extortion, and robbery. Such acts are strictly unlawful regardless of loan default.'
            }
          },
          {
            '@type': 'Question',
            name: 'What did the Supreme Court rule in Citicorp Maruti Finance v. S. Vijayalaxmi?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'The Supreme Court ruled that hire-purchase or hypothecation agreements do not give financiers the right to use physical force to take back vehicles. Repossession must be conducted through legal procedures with proper advance written notice.'
            }
          },
          {
            '@type': 'Question',
            name: 'What mandatory notice must a lender give before repossessing a vehicle?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Under RBI guidelines, lenders must issue a formal written default notice giving the borrower a reasonable cure period of 7 to 15 days. Post-repossession, a pre-sale notice must also be given before the vehicle can be auctioned.'
            }
          },
          {
            '@type': 'Question',
            name: 'Under which sections of BNS or IPC can I file an FIR against bouncers?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'You can file an FIR under Section 126 (wrongful restraint), Section 131 (assault or criminal force), Section 308 (extortion), Section 309 (robbery), and Section 351 (criminal intimidation) of the Bharatiya Nyaya Sanhita, 2023.'
            }
          },
          {
            '@type': 'Question',
            name: 'What should I do if the local police station refuses to register my FIR?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Submit a written complaint to the Superintendent of Police or Deputy Commissioner of Police under Section 173(4) BNSS. If inaction persists, file an application before the Judicial Magistrate under Section 175(3) BNSS for a court directive.'
            }
          },
          {
            '@type': 'Question',
            name: 'Can I get my unlawfully seized vehicle back through court custody?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. You can file an application for Superdari under Section 451 or 457 of CrPC (Section 497 or 503 BNSS) before the local criminal court to seek interim custody and release of your vehicle from the police or recovery yard.'
            }
          },
          {
            '@type': 'Question',
            name: 'Is the bank liable for illegal actions committed by its recovery agency?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Under RBI Master Directions and the doctrine of vicarious liability, banks and NBFCs are held directly responsible for unlawful acts, physical intimidation, and regulatory violations committed by their appointed recovery agents.'
            }
          },
          {
            '@type': 'Question',
            name: 'Can I settle my defaulted car loan via One-Time Settlement (OTS)?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Borrowers facing severe financial hardship can negotiate an OTS with the lender. This allows you to settle the debt with substantial waivers on overdue interest and penal charges, and obtain an official No Objection Certificate.'
            }
          },
          {
            '@type': 'Question',
            name: 'How does CredSettle assist borrowers facing illegal vehicle repossession?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'CredSettle issues urgent legal notices to stop bouncer intimidation, assists in filing police complaints and RBI Ombudsman escalations, petitions courts for vehicle release, and negotiates favorable loan settlements directly with bank credit committees.'
            }
          }
        ]
      },
      {
        '@type': 'FinancialService',
        '@id': 'https://www.credsettle.com/#service',
        name: 'CredSettle Debt Settlement & Loan Resolution Services',
        url: 'https://www.credsettle.com',
        telephone: '+91-8800226635',
        priceRange: '₹₹',
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.8',
          reviewCount: '5240',
          bestRating: '5',
          worstRating: '1'
        },
        review: [
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'Virender Sachdeva'
            },
            datePublished: '2026-09-19',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5'
            },
            reviewBody:
              'A private finance company sent three bouncers who blocked my car outside my office and snatched my keys for two missed EMIs. CredSettle acted immediately, served a legal notice quoting the Prakash Kaur Supreme Court ruling, and filed an FIR. The bank returned my vehicle and settled the loan dues at a 55% discount.',
            itemReviewed: {
              '@type': 'FinancialService',
              '@id': 'https://www.credsettle.com/#service'
            }
          },
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'Balwinder Singh'
            },
            datePublished: '2026-08-30',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5'
            },
            reviewBody:
              'Recovery agents intercepted my commercial vehicle on the national highway without any prior notice. CredSettle drafted an urgent complaint to the SP and the RBI Ombudsman. Within 48 hours, the lender halted all aggressive tactics and agreed to a restructured repayment schedule.',
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
            datePublished: '2026-08-11',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '4.8'
            },
            reviewBody:
              'When recovery bouncers visited my home late in the evening and threatened my elderly parents, CredSettle filed a criminal complaint under BNS Section 351. Their legal team made sure the bank recalled the agency and concluded a peaceful compromise settlement with an NOC.',
            itemReviewed: {
              '@type': 'FinancialService',
              '@id': 'https://www.credsettle.com/#service'
            }
          },
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'Rameshwar Yadav'
            },
            datePublished: '2026-07-22',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5'
            },
            reviewBody:
              'My car was towed away in the dead of night without an inventory sheet. CredSettle filed a Section 156(3) petition before the magistrate. The court directed immediate registration of an FIR against the agency, and the financier waived all repossession charges.',
            itemReviewed: {
              '@type': 'FinancialService',
              '@id': 'https://www.credsettle.com/#service'
            }
          },
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'Harish Chandra'
            },
            datePublished: '2026-07-04',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5'
            },
            reviewBody:
              'CredSettle provided exceptional legal protection. They guided me through the entire FIR process and proved that the financier breached RBI guidelines. We successfully settled my car loan with a complete waiver of penal charges.',
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
      <VehicleRepossessionClient />
      <Footer />
    </div>
  );
}
