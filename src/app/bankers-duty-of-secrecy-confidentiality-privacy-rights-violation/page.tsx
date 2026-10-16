import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BankerSecrecyPrivacyClient from './BankerSecrecyPrivacyClient';

export const metadata: Metadata = {
  title: "Banker's Duty of Secrecy: Privacy Rights Violation Rules",
  description:
    'Protect financial privacy under Indian banking law. Stop illegal debt disclosure, report secrecy violations, and settle loans with CredSettle.',
  keywords: [
    "banker's duty of secrecy and confidentiality",
    'banker duty of secrecy privacy rights violation',
    'tournier case banking secrecy exceptions',
    'section 13 banking companies act secrecy',
    'section 44 sbi act secrecy of customer accounts',
    'recovery agent calling hr employer loan default',
    'recovery agents creating whatsapp group privacy breach',
    'section 72a it act breach of confidentiality',
    'section 356 bns criminal defamation bank recovery',
    'district registrar hyderabad vs canara bank article 21',
    'rbi ombudsman complaint for privacy violation',
    'credsettle privacy rights loan settlement'
  ],
  openGraph: {
    title: "Banker's Duty of Secrecy: Privacy Rights Violation Rules",
    description:
      'Protect financial privacy under Indian banking law. Stop illegal debt disclosure, report secrecy violations, and settle loans with CredSettle.',
    type: 'article',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://www.credsettle.com/bankers-duty-of-secrecy-confidentiality-privacy-rights-violation',
    images: [
      {
        url: 'https://www.credsettle.com/images/infographics/bankers-duty-of-secrecy-confidentiality-privacy-rights-violation.jpg',
        width: 1200,
        height: 675,
        alt: 'Banker Duty of Secrecy and Customer Privacy Rights Legal Blueprint'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: "Banker's Duty of Secrecy: Privacy Rights Violation Rules",
    description:
      'Protect financial privacy under Indian banking law. Stop illegal debt disclosure, report secrecy violations, and settle loans with CredSettle.',
    images: [
      'https://www.credsettle.com/images/infographics/bankers-duty-of-secrecy-confidentiality-privacy-rights-violation.jpg'
    ]
  },
  alternates: {
    canonical:
      'https://www.credsettle.com/bankers-duty-of-secrecy-confidentiality-privacy-rights-violation'
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function BankerSecrecyPrivacyPage() {
  const unifiedSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id':
          'https://www.credsettle.com/bankers-duty-of-secrecy-confidentiality-privacy-rights-violation#article',
        isPartOf: {
          '@type': 'WebPage',
          '@id':
            'https://www.credsettle.com/bankers-duty-of-secrecy-confidentiality-privacy-rights-violation'
        },
        headline: "Banker's Duty of Secrecy: Privacy Rights Violation Rules",
        description:
          'Protect financial privacy under Indian banking law. Stop illegal debt disclosure, report secrecy violations, and settle loans with CredSettle.',
        inLanguage: 'en-IN',
        mainEntityOfPage:
          'https://www.credsettle.com/bankers-duty-of-secrecy-confidentiality-privacy-rights-violation',
        datePublished: '2026-10-16T12:00:00+05:30',
        dateModified: '2026-10-16T12:00:00+05:30',
        articleSection: 'Banking Law & Customer Privacy Rights',
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
          'https://www.credsettle.com/images/infographics/bankers-duty-of-secrecy-confidentiality-privacy-rights-violation.jpg'
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
          'https://www.credsettle.com/bankers-duty-of-secrecy-confidentiality-privacy-rights-violation#breadcrumb',
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
            name: 'Banker Duty of Secrecy & Privacy Rights',
            item:
              'https://www.credsettle.com/bankers-duty-of-secrecy-confidentiality-privacy-rights-violation'
          }
        ]
      },
      {
        '@type': 'FAQPage',
        '@id':
          'https://www.credsettle.com/bankers-duty-of-secrecy-confidentiality-privacy-rights-violation#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What is a banker duty of secrecy and confidentiality under Indian law?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'The banker duty of secrecy is an implied contractual and statutory obligation requiring banks to maintain total confidentiality regarding customer account details, loan status, transactions, and personal information. Governed by common law Tournier principles, Section 13 of the Banking Companies Act, Section 44 of the SBI Act, and Article 21 of the Constitution, banks cannot disclose customer details to unauthorized third parties.'
            }
          },
          {
            '@type': 'Question',
            name: 'Can a bank or recovery agent call my employer or HR about my loan default?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. Contacting an employer, HR department, or workplace colleagues to disclose personal debt or demand salary deductions without a court attachment order is strictly prohibited under the RBI Charter of Customer Rights and Fair Practices Code. Such disclosures violate privacy rights and constitute criminal defamation under Section 356 of BNS 2023.'
            }
          },
          {
            '@type': 'Question',
            name: 'What are the four lawful exceptions to the banker duty of secrecy?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Under the landmark Tournier doctrine recognized by Indian courts, banks may disclose customer details only under four strict exceptions: (1) compulsion of law (formal court orders, tax summons), (2) duty to the public (national security, fraud prevention), (3) the bank own interests (filing legal recovery suits in court), and (4) express written consent of the customer.'
            }
          },
          {
            '@type': 'Question',
            name: 'Is it illegal for recovery agents to create WhatsApp groups with my contacts?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Scraping phone contacts and creating social messaging groups to humiliate or coerce a borrower is a direct criminal offense under Section 72A of the Information Technology Act, 2000, Section 351 and 356 of BNS 2023, and violates RBI Digital Lending Guidelines.'
            }
          },
          {
            '@type': 'Question',
            name: 'Can a bank publish a defaulting borrower photograph in newspapers?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No, unless the borrower has been officially declared a Wilful Defaulter after following the mandatory Identification and Review Committee process under RBI Master Directions. The Madras High Court and Calcutta High Court have ruled that publishing photographs of ordinary personal or business borrowers violates their constitutional right to privacy and human dignity.'
            }
          },
          {
            '@type': 'Question',
            name: 'What penalties apply to banks for violating customer data privacy under the DPDP Act 2023?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Under the Digital Personal Data Protection Act, 2023, banks act as Data Fiduciaries. Unauthorized disclosures, illegal sharing with third-party telemarketers, or failure to secure borrower financial data can attract financial penalties up to ₹250 Crores imposed by the Data Protection Board of India.'
            }
          },
          {
            '@type': 'Question',
            name: 'Can I file a police FIR against bank recovery agents for privacy breaches?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. If collection agents leak your financial distress to neighbors, harass your family, or send abusive messages, you can lodge a police complaint under Section 356 (Criminal Defamation), Section 351 (Criminal Intimidation), and Section 79 of Bharatiya Nyaya Sanhita, 2023, along with Section 72A of the IT Act.'
            }
          },
          {
            '@type': 'Question',
            name: 'How do I file an RBI Ombudsman complaint for a privacy violation by a bank?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Submit a formal written complaint to the bank Principal Nodal Officer (PNO). If the bank fails to resolve the violation within 30 days, file an online petition before the RBI Integrated Ombudsman at cms.rbi.org.in. The Ombudsman can award compensation up to ₹20 Lakhs for actual losses plus ₹1 Lakh for mental harassment.'
            }
          },
          {
            '@type': 'Question',
            name: 'Can a customer use bank privacy violations to negotiate a One-Time Settlement (OTS)?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. When a bank or its contracted recovery agency violates statutory secrecy rules and faces regulatory liability, borrowers gain significant legal leverage. CredSettle uses documented privacy breaches to halt harassment and negotiate favorable One-Time Settlements (OTS) with waivers between 50% and 75% on outstanding unsecured loans.'
            }
          },
          {
            '@type': 'Question',
            name: 'Does the banker duty of secrecy continue after an account is closed or defaulted?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. The duty of secrecy continues indefinitely even after the banker-customer contract ends, the account is closed, or the loan becomes a Non-Performing Asset (NPA). Confidentiality survives account termination and binds the bank perpetually.'
            }
          }
        ]
      },
      {
        '@type': 'FinancialService',
        '@id': 'https://www.credsettle.com/#service',
        name: 'CredSettle Debt Settlement & Privacy Rights Resolution',
        url: 'https://www.credsettle.com',
        telephone: '+91-8800226635',
        priceRange: '₹₹',
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          reviewCount: '5240',
          bestRating: '5',
          worstRating: '1'
        },
        review: [
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'Venkatesh Raghavan'
            },
            datePublished: '2026-10-10',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5'
            },
            reviewBody:
              'A private bank collection agency called my company HR and sent an email detailing my personal loan default. CredSettle issued a sharp legal notice citing the Tournier case, Section 13 of the Banking Companies Act, and RBI outsourcing rules. The bank apologized in writing and settled the ₹8.5 Lakh loan for ₹2.8 Lakh with an official NOC.',
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
            datePublished: '2026-09-24',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5'
            },
            reviewBody:
              'Recovery agents created a WhatsApp group containing my distant relatives and shared screenshots of my credit card statement. CredSettle immediately filed a cyber crime complaint under Section 72A of the IT Act and escalated to the RBI Ombudsman. The bank withdrew the recovery agency and closed the account at a 70% waiver.',
            itemReviewed: {
              '@type': 'FinancialService',
              '@id': 'https://www.credsettle.com/#service'
            }
          },
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'Kunal Singhal'
            },
            datePublished: '2026-09-08',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5'
            },
            reviewBody:
              'Recovery bouncers came to my residential society and pasted demand notices on my apartment door. CredSettle served a legal notice under BNS 356 for criminal defamation. The bank zonal management intervened, reprimanded the agency, and sanctioned a clean OTS waiver.',
            itemReviewed: {
              '@type': 'FinancialService',
              '@id': 'https://www.credsettle.com/#service'
            }
          },
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'Priyanka Sen'
            },
            datePublished: '2026-08-19',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '4.9'
            },
            reviewBody:
              'When an NBFC threatened to publish my photograph in the city newspaper for a delayed business loan EMI, CredSettle stepped in. They cited Madras High Court rulings on borrower privacy under Article 21, stopped the illegal publication, and negotiated a structured compromise settlement.',
            itemReviewed: {
              '@type': 'FinancialService',
              '@id': 'https://www.credsettle.com/#service'
            }
          },
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'Harish Chawla'
            },
            datePublished: '2026-08-02',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5'
            },
            reviewBody:
              'CredSettle provided exceptional support. Their advocates proved that the bank outsourced recovery agency had breached statutory secrecy norms by calling unauthorized references. We achieved a complete debt discharge with zero residual liability.',
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
      <BankerSecrecyPrivacyClient />
      <Footer />
    </div>
  );
}
