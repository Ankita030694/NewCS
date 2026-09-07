import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ExParteDecreeBankLoanCaseClient from './ExParteDecreeBankLoanCaseClient';

export const metadata: Metadata = {
  title: 'Ex-Parte Decree in Bank Loan Case: How to Set it Aside',
  description:
    'Did a bank secure an ex-parte decree against you without notice? Learn how to file under Order 9 Rule 13 CPC to set aside the order and reopen the trial.',
  keywords: [
    'Ex-parte decree in bank loan case',
    'How to set aside ex parte decree',
    'bank won case without me knowing',
    'Order 9 Rule 13 CPC limitation bank loan',
    'stay on ex parte decree execution',
    'setting aside ex parte decree bank recovery',
    'Order IX Rule 13 CPC application procedure',
    'Section 5 Limitation Act condonation of delay loan case',
    'bank loan default judgment defense India',
    'Order 21 Rule 26 stay on execution bank decree'
  ],
  openGraph: {
    title: 'Ex-Parte Decree in Bank Loan Case: How to Set it Aside | CredSettle',
    description:
      'Did a bank secure an ex-parte decree against you without notice? Learn how to file under Order 9 Rule 13 CPC to set aside the order and reopen the trial.',
    type: 'article',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://www.credsettle.com/ex-parte-decree-bank-loan-case',
    images: [
      {
        url: 'https://www.credsettle.com/images/infographics/ex-parte-decree-bank-loan-case.jpg',
        width: 1200,
        height: 630,
        alt: 'Ex-Parte Decree in Bank Loan Case Legal Defense Guide'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ex-Parte Decree in Bank Loan Case: How to Set it Aside',
    description:
      'Did a bank secure an ex-parte decree against you without notice? Learn how to file under Order 9 Rule 13 CPC to set aside the order and reopen the trial.',
    images: ['https://www.credsettle.com/images/infographics/ex-parte-decree-bank-loan-case.jpg']
  },
  alternates: {
    canonical: 'https://www.credsettle.com/ex-parte-decree-bank-loan-case'
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function ExParteDecreeBankLoanCasePage() {
  const unifiedSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': 'https://www.credsettle.com/ex-parte-decree-bank-loan-case#article',
        isPartOf: {
          '@type': 'WebPage',
          '@id': 'https://www.credsettle.com/ex-parte-decree-bank-loan-case'
        },
        headline: 'Ex-Parte Decree in a Bank Loan Case: How to Set It Aside',
        description:
          'Did a bank secure an ex-parte decree against you without notice? Learn how to file under Order 9 Rule 13 CPC to set aside the order and reopen the trial.',
        inLanguage: 'en-IN',
        mainEntityOfPage: 'https://www.credsettle.com/ex-parte-decree-bank-loan-case',
        datePublished: '2026-09-07T09:00:00+05:30',
        dateModified: '2026-09-07T09:00:00+05:30',
        articleSection: 'Banking Law & Civil Litigation Defense',
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
        image: ['https://www.credsettle.com/images/infographics/ex-parte-decree-bank-loan-case.jpg']
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
        '@id': 'https://www.credsettle.com/ex-parte-decree-bank-loan-case#breadcrumb',
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
            name: 'Ex-Parte Decree in a Bank Loan Case',
            item: 'https://www.credsettle.com/ex-parte-decree-bank-loan-case'
          }
        ]
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://www.credsettle.com/ex-parte-decree-bank-loan-case#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What is an ex-parte decree in a bank loan recovery case?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'An ex-parte decree is a final judgment passed by a civil court or judicial tribunal in favor of a lending bank when the defendant borrower fails to appear or file a defense after the court presumes that summons was formally served.'
            }
          },
          {
            '@type': 'Question',
            name: 'How can a bank win a court case against me without my knowledge?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Banks often file cases using outdated loan application addresses, or resort to substituted service like local newspaper publications or affixation without personal delivery, leading courts to erroneously declare summons served and proceed ex-parte.'
            }
          },
          {
            '@type': 'Question',
            name: 'What is the legal procedure to set aside an ex-parte decree under Order 9 Rule 13 CPC?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'A borrower must file a formal application under Order IX Rule 13 of the Code of Civil Procedure in the court that passed the decree, supported by an affidavit proving non-service of summons or sufficient cause for absence.'
            }
          },
          {
            '@type': 'Question',
            name: 'What is the limitation period to file an Order 9 Rule 13 application for a bank loan decree?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Under Article 123 of the Limitation Act, 1963, the limitation period is strictly 30 days from the date of the decree if summons was served, or 30 days from the date of gaining knowledge of the decree if summons was not duly served.'
            }
          },
          {
            '@type': 'Question',
            name: 'Can I file to set aside an ex-parte decree if 30 days have already passed?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. If more than 30 days have elapsed since the decree, you can file an application under Section 5 of the Limitation Act seeking condonation of delay, explaining day-to-day reasons such as lack of notice, medical emergencies, or address relocation.'
            }
          },
          {
            '@type': 'Question',
            name: 'Can the bank execute the decree or freeze my bank accounts while my set-aside application is pending?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'The bank can initiate execution under Order 21 CPC unless you file an urgent stay application under Order 21 Rule 26 or Section 151 CPC, requesting the court to restrain warrant issuance, property attachment, or account freezing.'
            }
          },
          {
            '@type': 'Question',
            name: 'What constitutes sufficient cause for non-appearance in a bank loan dispute?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Sufficient cause includes non-service of summons, wrong address dispatch, illness, sudden hospitalisation, advocate negligence, misleading settlement assurances by recovery managers, or natural disasters, as recognized in Supreme Court rulings.'
            }
          },
          {
            '@type': 'Question',
            name: 'What happens after the court sets aside an ex-parte decree?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'When the decree is set aside, the original recovery suit is fully restored to its initial trial stage. The borrower is granted time to file a Written Statement, cross-examine bank witnesses, dispute inflated penal interest, and present merits.'
            }
          },
          {
            '@type': 'Question',
            name: 'Can I negotiate a One-Time Settlement (OTS) with the bank after setting aside the decree?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Reopening the litigation eliminates the bank\'s unilateral execution leverage, making senior bank credit committees highly amenable to negotiating a mutually agreed One-Time Settlement with 40% to 60% waivers on penal interest.'
            }
          },
          {
            '@type': 'Question',
            name: 'How does an ex-parte decree and its subsequent setting aside affect my CIBIL credit score?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'An ex-parte decree triggers Suit-Filed or Decreed remarks that severely degrade credit scores. Once set aside and settled, the bank must file satisfaction before the court and update bureau records to Closed or Settled under Section 21 of CICRA.'
            }
          }
        ]
      },
      {
        '@type': 'FinancialService',
        '@id': 'https://www.credsettle.com/#service',
        name: 'CredSettle Ex-Parte Decree Defense & Debt Dispute Resolution Services',
        url: 'https://www.credsettle.com/ex-parte-decree-bank-loan-case',
        provider: {
          '@type': 'Organization',
          name: 'CredSettle'
        },
        image: 'https://www.credsettle.com/images/infographics/ex-parte-decree-bank-loan-case.jpg',
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
              name: 'Siddharth V. Raman'
            },
            datePublished: '2026-08-19',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5'
            },
            reviewBody:
              'A leading private bank obtained an ex-parte money decree of ₹18.5 Lakhs against me at my old Chennai address without my knowledge. CredSettle assisted in filing an Order 9 Rule 13 petition with a Section 5 condonation application. The court stayed execution and the bank settled the entire matter under an OTS for ₹8 Lakhs.',
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
            datePublished: '2026-07-22',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5'
            },
            reviewBody:
              'I only discovered an ex-parte decree when the executing court issued a bank attachment notice. CredSettle legal professionals quickly drafted our stay application under Order 21 Rule 26 and set-aside plea. The civil court set aside the decree, giving us room to resolve the loan peacefully.',
            itemReviewed: {
              '@type': 'FinancialService',
              '@id': 'https://www.credsettle.com/#service'
            }
          },
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'Gaurav K. Singhania'
            },
            datePublished: '2026-06-11',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5'
            },
            reviewBody:
              'An NBFC obtained an ex-parte award by showing newspaper publication summons that never circulated in my locality. CredSettle helped establish defective service under Order 5 CPC precedents. The default order was vacated and we completed an affordable settlement.',
            itemReviewed: {
              '@type': 'FinancialService',
              '@id': 'https://www.credsettle.com/#service'
            }
          },
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'Bhavna Chawla'
            },
            datePublished: '2026-05-04',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '4.8'
            },
            reviewBody:
              'When my business faced liquidity problems, an unsecured loan of ₹24 Lakhs resulted in an ex-parte recovery certificate. CredSettle guided me through the DRT set-aside process, stopped account freezing, and finalized a 50% waiver with a clear No Dues Certificate.',
            itemReviewed: {
              '@type': 'FinancialService',
              '@id': 'https://www.credsettle.com/#service'
            }
          },
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'Nitin Deshmukh'
            },
            datePublished: '2026-03-27',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5'
            },
            reviewBody:
              'CredSettle provided exceptional support when I found out about a 2-year-old ex-parte decree. They helped draft the delay condonation dossier showing lack of summons service. The court set aside the decree on merits, and my CIBIL record is now updated to closed status.',
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
      <ExParteDecreeBankLoanCaseClient />
      <Footer />
    </div>
  );
}
