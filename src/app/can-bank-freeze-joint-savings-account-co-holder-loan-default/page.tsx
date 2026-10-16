import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import JointAccountFreezeClient from './JointAccountFreezeClient';

export const metadata: Metadata = {
  title: 'Can Bank Freeze Joint Account for Co-Holder Default? Rules',
  description:
    'Can a bank freeze a joint account for a co-holder\'s loan default? Learn your legal rights, doctrine of mutuality & remedies under Indian banking law.',
  keywords: [
    'can bank freeze joint savings account for co-holder loan default',
    'banker right of set-off joint account section 171 contract act',
    'doctrine of mutuality joint bank account loan default',
    'can bank debit joint account for husband loan default',
    'either or survivor joint account freeze rules rbi',
    'garnishee order joint account civil procedure code order 21 rule 46',
    'hirschorn vs evans joint account attachment',
    'innocent co-holder rights in frozen bank account',
    'how to unfreeze joint account after co-borrower default',
    'credsettle joint bank account legal defense'
  ],
  openGraph: {
    title: 'Can Bank Freeze Joint Account for Co-Holder Default? Rules',
    description:
      'Can a bank freeze a joint account for a co-holder\'s loan default? Learn your legal rights, doctrine of mutuality & remedies under Indian banking law.',
    type: 'article',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://www.credsettle.com/can-bank-freeze-joint-savings-account-co-holder-loan-default',
    images: [
      {
        url: 'https://www.credsettle.com/images/infographics/can-bank-freeze-joint-savings-account-co-holder-loan-default.jpg',
        width: 1200,
        height: 675,
        alt: 'Bank Freeze Joint Savings Account Co-Holder Loan Default Rules'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Can Bank Freeze Joint Account for Co-Holder Default? Rules',
    description:
      'Can a bank freeze a joint account for a co-holder\'s loan default? Learn your legal rights, doctrine of mutuality & remedies under Indian banking law.',
    images: [
      'https://www.credsettle.com/images/infographics/can-bank-freeze-joint-savings-account-co-holder-loan-default.jpg'
    ]
  },
  alternates: {
    canonical: 'https://www.credsettle.com/can-bank-freeze-joint-savings-account-co-holder-loan-default'
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function CanBankFreezeJointAccountPage() {
  const unifiedSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': 'https://www.credsettle.com/can-bank-freeze-joint-savings-account-co-holder-loan-default#article',
        isPartOf: {
          '@type': 'WebPage',
          '@id': 'https://www.credsettle.com/can-bank-freeze-joint-savings-account-co-holder-loan-default'
        },
        headline: 'Can Bank Freeze Joint Account for Co-Holder Default? Rules',
        description:
          'Can a bank freeze a joint account for a co-holder\'s loan default? Learn your legal rights, doctrine of mutuality & remedies under Indian banking law.',
        inLanguage: 'en-IN',
        mainEntityOfPage: 'https://www.credsettle.com/can-bank-freeze-joint-savings-account-co-holder-loan-default',
        datePublished: '2026-10-16T09:00:00+05:30',
        dateModified: '2026-10-16T09:00:00+05:30',
        articleSection: 'Banking Law & Joint Account Protection',
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
          'https://www.credsettle.com/images/infographics/can-bank-freeze-joint-savings-account-co-holder-loan-default.jpg'
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
        '@id': 'https://www.credsettle.com/can-bank-freeze-joint-savings-account-co-holder-loan-default#breadcrumb',
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
            name: 'Joint Account Freeze Rules for Co-Holder Default',
            item: 'https://www.credsettle.com/can-bank-freeze-joint-savings-account-co-holder-loan-default'
          }
        ]
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://www.credsettle.com/can-bank-freeze-joint-savings-account-co-holder-loan-default#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Can a bank freeze a joint savings account if only one co-holder defaults on a loan?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Under the Doctrine of Mutuality and Section 171 of the Indian Contract Act, a bank cannot legally freeze or set off joint account funds for the individual personal debt of one co-holder. However, banks often place an automated debit freeze that the innocent co-holder must challenge with proof of beneficial ownership.'
            }
          },
          {
            '@type': 'Question',
            name: 'What is the Doctrine of Mutuality in banking law regarding set-off?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'The Doctrine of Mutuality requires that debts must exist between the exact same parties in the same legal right. An individual debt owed solely by Holder A cannot be set off against funds held jointly by Holder A and Holder B, because Holder B has an independent property right in the account.'
            }
          },
          {
            '@type': 'Question',
            name: 'Does an Either or Survivor mandate allow the bank to seize the entire balance?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. An Either or Survivor mandate is only an operational instruction for transacting on the account during life. It does not establish beneficial ownership. Indian courts have affirmed that true ownership depends on who contributed the money.'
            }
          },
          {
            '@type': 'Question',
            name: 'Can a court issue a Garnishee Order against a joint account for an individual debt?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Under landmark rulings like Hirschorn v. Evans and Indian civil procedure, a garnishee order against one judgment debtor cannot attach a joint account belonging to him and a non-debtor, unless the creditor proves that the funds belong exclusively to the debtor.'
            }
          },
          {
            '@type': 'Question',
            name: 'What happens if the joint account co-holder is also a co-borrower or guarantor?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'If both account holders signed the loan as co-borrowers or if the co-holder signed as a personal guarantor, their liability is joint and several under Section 128 of the Indian Contract Act. In that scenario, the bank possesses the legal right of set-off.'
            }
          },
          {
            '@type': 'Question',
            name: 'Can a bank seize a wife\'s salary or pension deposited in a joint account with her husband?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. A wife\'s salary, pension, or personal savings deposited into a joint account belong to her beneficially. By providing salary slips and bank statements, she can compel the bank to remove the debit freeze and release her funds.'
            }
          },
          {
            '@type': 'Question',
            name: 'Can a bank freeze a joint account held in a completely different bank?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. A creditor bank has no banker lien or set-off authority over accounts maintained at another banking institution. They can only reach external accounts through a formal court order or Debt Recovery Tribunal decree.'
            }
          },
          {
            '@type': 'Question',
            name: 'Can a bank debit a joint fixed deposit for one co-holder\'s personal loan?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'A bank cannot set off a joint fixed deposit for an individual debt unless both joint depositors signed a pledge or mandate letter authorizing the bank to lien the deposit against that specific credit facility.'
            }
          },
          {
            '@type': 'Question',
            name: 'What should the innocent co-holder do immediately if the joint account is frozen?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'The innocent co-holder must immediately submit a written objection letter to the branch manager with proof of source of funds, demand account bifurcation, redirect future salary credits, and escalate to the Principal Nodal Officer and RBI Ombudsman.'
            }
          },
          {
            '@type': 'Question',
            name: 'How does CredSettle assist co-holders facing wrongful joint account freezes?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'CredSettle issues statutory legal notices under Section 171 of the Contract Act and Consumer Protection Act, halts recovery harassment against non-borrowers, secures account de-freezing, and negotiates up to 75% debt settlement waivers for the borrower.'
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
              name: 'Sunita Sharma'
            },
            datePublished: '2026-09-22',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5'
            },
            reviewBody:
              'My husband defaulted on an unsecured business loan, and the private bank immediately placed a total debit freeze on our joint savings account where my teacher salary was credited. CredSettle issued a legal notice citing the Doctrine of Mutuality and Section 171. The bank unfroze my salary within 72 hours.',
            itemReviewed: {
              '@type': 'FinancialService',
              '@id': 'https://www.credsettle.com/#service'
            }
          },
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'Vikramjit Rathore'
            },
            datePublished: '2026-08-30',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5'
            },
            reviewBody:
              'I held an Either or Survivor joint account with my son. When he ran into credit card debt, the bank attempted an automated sweep of ₹4.2 Lakhs of my retirement savings. CredSettle intervened, established beneficial ownership, reversed the deduction, and helped settle my son\'s debt with a 65% waiver.',
            itemReviewed: {
              '@type': 'FinancialService',
              '@id': 'https://www.credsettle.com/#service'
            }
          },
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'Pooja Venkatesh'
            },
            datePublished: '2026-08-11',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '4.9'
            },
            reviewBody:
              'A nationalised bank placed a lien on our joint fixed deposit because my brother defaulted on a personal loan. I had contributed 80% of the funds. CredSettle demonstrated lack of mutuality and lack of guarantor status, forcing the branch manager to release the lien on my share.',
            itemReviewed: {
              '@type': 'FinancialService',
              '@id': 'https://www.credsettle.com/#service'
            }
          },
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'Arunav Ganguly'
            },
            datePublished: '2026-07-28',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5'
            },
            reviewBody:
              'Recovery agents kept harassing my mother and claiming they would attach her joint pension account for my personal loan. CredSettle stopped the calls immediately, showed us the RBI Fair Practices Code, and negotiated a structured One-Time Settlement with an official No Dues Certificate.',
            itemReviewed: {
              '@type': 'FinancialService',
              '@id': 'https://www.credsettle.com/#service'
            }
          },
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'Kavita Nair'
            },
            datePublished: '2026-07-09',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5'
            },
            reviewBody:
              'CredSettle provided rapid legal protection when our family joint account was frozen without notice. They proved that as a non-borrowing co-holder, my business savings could not be confiscated for another person\'s default. Highly recommend their professional banking law team.',
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
      <JointAccountFreezeClient />
      <Footer />
    </div>
  );
}
