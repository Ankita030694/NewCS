import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CreditCardGstOtsClient from './CreditCardGstOtsClient';

export const metadata: Metadata = {
  title: '18% GST on Credit Card Interest & OTS Waiver Explained',
  description:
    'Is 18% GST waived in credit card OTS settlement? Learn CGST Section 34 rules, stop illegal GST compounding under RBI norms, and settle with CredSettle.',
  keywords: [
    'is 18 percent gst waived in credit card one time settlement',
    '18 percent gst on credit card interest india',
    'credit card ots gst waiver rules',
    'cgst notification 12/2017 entry 27 credit card interest',
    'section 34 cgst act credit note ots settlement',
    'rbi credit card master direction compounding gst',
    'credit card settlement gst extra demand',
    'unapplied interest suspense account credit card npa',
    'credit card debt settlement legal help india',
    'credsettle credit card ots negotiation'
  ],
  openGraph: {
    title: '18% GST on Credit Card Interest & OTS Waiver Explained',
    description:
      'Is 18% GST waived in credit card OTS settlement? Learn CGST Section 34 rules, stop illegal GST compounding under RBI norms, and settle with CredSettle.',
    type: 'article',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://www.credsettle.com/is-18-percent-gst-waived-credit-card-settlement-ots',
    images: [
      {
        url: 'https://www.credsettle.com/credsettle-logo-black.png',
        width: 1200,
        height: 630,
        alt: '18% GST on Credit Card Interest and OTS Settlement Waiver Explained'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: '18% GST on Credit Card Interest & OTS Waiver Explained',
    description:
      'Is 18% GST waived in credit card OTS settlement? Learn CGST Section 34 rules, stop illegal GST compounding under RBI norms, and settle with CredSettle.',
    images: ['https://www.credsettle.com/credsettle-logo-black.png']
  },
  alternates: {
    canonical: 'https://www.credsettle.com/is-18-percent-gst-waived-credit-card-settlement-ots'
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function CreditCardGstOtsPage() {
  const unifiedSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': 'https://www.credsettle.com/is-18-percent-gst-waived-credit-card-settlement-ots#article',
        isPartOf: {
          '@type': 'WebPage',
          '@id': 'https://www.credsettle.com/is-18-percent-gst-waived-credit-card-settlement-ots'
        },
        headline: '18% GST on Credit Card Interest & OTS Waiver Explained',
        description:
          'Is 18% GST waived in credit card OTS settlement? Learn CGST Section 34 rules, stop illegal GST compounding under RBI norms, and settle with CredSettle.',
        inLanguage: 'en_IN',
        mainEntityOfPage: 'https://www.credsettle.com/is-18-percent-gst-waived-credit-card-settlement-ots',
        datePublished: '2026-11-21T12:00:00+05:30',
        dateModified: '2026-11-21T12:00:00+05:30',
        articleSection: 'Credit Card Taxation & Debt Settlement',
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
        image: ['https://www.credsettle.com/credsettle-logo-black.png']
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
        '@id': 'https://www.credsettle.com/is-18-percent-gst-waived-credit-card-settlement-ots#breadcrumb',
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
            name: '18% GST on Credit Card Interest & OTS Waiver',
            item: 'https://www.credsettle.com/is-18-percent-gst-waived-credit-card-settlement-ots'
          }
        ]
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://www.credsettle.com/is-18-percent-gst-waived-credit-card-settlement-ots#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Why do Indian banks charge 18% GST on credit card interest?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Under Entry 27 of CBIC Notification No. 12/2017-Central Tax (Rate), interest on normal loans and advances is exempt from GST. However, the notification explicitly excludes interest involved in credit card services. As a result, credit card interest and finance charges attract 18% GST.'
            }
          },
          {
            '@type': 'Question',
            name: 'Is 18% GST waived during a credit card One-Time Settlement (OTS)?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'In practice, yes, if you negotiate an all-inclusive OTS lump sum. While banks cannot erase GST already paid to the government on old statements, they absorb the waived interest, fees, and billed GST as a commercial write-off. You should never agree to pay extra GST on top of a final OTS amount.'
            }
          },
          {
            '@type': 'Question',
            name: 'Can a bank issue a GST Credit Note under Section 34 for an OTS waiver?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Usually no. Section 34 of the CGST Act, 2017 allows a GST credit note only for overcharged invoices, returned goods, deficient services, or pre-agreed discounts. Because an OTS is a bad-debt compromise after default, banks issue an internal commercial credit note instead of a Section 34 GST credit note.'
            }
          },
          {
            '@type': 'Question',
            name: 'Can a bank charge compound interest on unpaid 18% GST?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. Under the RBI Master Direction on Credit Card and Debit Card Issuance and Conduct Directions, 2022, card issuers cannot capitalize unpaid charges, levies, or taxes for charging or compounding interest. If a bank added interest on unpaid GST, you can demand a ledger reversal.'
            }
          },
          {
            '@type': 'Question',
            name: 'Do personal loans also attract 18% GST on interest and penal charges?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. Regular personal loan interest is exempt from GST under Entry 27 of Notification No. 12/2017. In addition, CBIC Circular No. 245/02/2025-GST clarified that penal charges levied by banks and NBFCs for loan default do not attract GST. Only credit card interest and card fees carry 18% GST.'
            }
          },
          {
            '@type': 'Question',
            name: 'What happens to credit card interest and GST after the account turns NPA?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Once a credit card account crosses 90 days past due and becomes a Non-Performing Asset (NPA), RBI IRAC norms require banks to stop recognizing unrealized interest as income. The bank moves uncollected interest into an Unapplied Interest Suspense Account, which gives you strong leverage to negotiate a waiver.'
            }
          },
          {
            '@type': 'Question',
            name: 'Should I pay if a recovery agent asks for 18% GST extra on top of my OTS amount?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Do not pay until you verify the official OTS sanction letter. An OTS letter must state one all-inclusive full and final settlement figure covering principal, interest, penalties, and GST. Never accept vague wording like settlement amount plus applicable taxes.'
            }
          },
          {
            '@type': 'Question',
            name: 'Does an OTS settlement waiver create an income tax liability for the borrower?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'For individual personal credit card holders, a waiver on personal consumption debt is generally a capital or personal relief and not business income. However, if you used the card for business expenses and claimed deductions under Section 41(1) of the Income Tax Act, consult a Chartered Accountant.'
            }
          },
          {
            '@type': 'Question',
            name: 'How do I challenge illegal GST compounding on my credit card statement?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Request a complete itemized billing ledger from the card issuer showing principal, interest, late fees, and GST separately. If interest was charged on unpaid GST or late fees, file a written complaint with the Bank Grievance Redressal Officer and escalate to the RBI Ombudsman at cms.rbi.org.in.'
            }
          },
          {
            '@type': 'Question',
            name: 'How does CredSettle help reduce credit card OTS amounts involving heavy GST?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'CredSettle audits your card statements to strip out illegal interest-on-GST compounding, separates true principal from inflated charges, and negotiates an all-inclusive OTS sanction letter with zero hidden tax demands plus a verified No Dues Certificate.'
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
              name: 'Rohan Kulkarni'
            },
            datePublished: '2026-10-12',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5'
            },
            reviewBody:
              'My credit card bill ballooned from ₹1.4 lakh to ₹3.2 lakh due to 42% APR interest and 18% GST. The recovery team demanded GST separately on the OTS offer. CredSettle audited the ledger, flagged interest-on-GST compounding under RBI rules, and closed an all-inclusive settlement at ₹95,000.',
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
            datePublished: '2026-09-25',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5'
            },
            reviewBody:
              'The bank initially sent a settlement letter stating ₹1,20,000 plus applicable GST and charges. CredSettle intervened, got the letter revised to an all-inclusive full and final figure, and ensured my No Dues Certificate was issued without extra tax billing.',
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
      <CreditCardGstOtsClient />
      <Footer />
    </div>
  );
}
