import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DuplicateSecuritisedLoanClient from './DuplicateSecuritisedLoanClient';

export const metadata: Metadata = {
  title: 'Duplicate Loan on CIBIL After NBFC Securitisation Fix',
  description:
    'Fix duplicate personal loan on CIBIL after NBFC securitisation or assignment. Use RBI rules, claim ₹100/day penalty & clean reports with CredSettle.',
  keywords: [
    'duplicate personal loan entry cibil securitisation assignment',
    'duplicate loan on cibil after nbfc securitisation',
    'remove duplicate loan entry cibil direct assignment',
    'nbfc sold loan showing twice on cibil report',
    'rbi transfer of loan exposures directions cibil reporting',
    'rbi 100 per day compensation duplicate cibil entry',
    'same personal loan reported by two lenders cibil',
    'arc loan assignment duplicate tradeline fix india',
    'cibil dispute duplicate account securitised loan',
    'credsettle duplicate cibil loan removal help'
  ],
  openGraph: {
    title: 'Duplicate Loan on CIBIL After NBFC Securitisation Fix',
    description:
      'Fix duplicate personal loan on CIBIL after NBFC securitisation or assignment. Use RBI rules, claim ₹100/day penalty & clean reports with CredSettle.',
    type: 'article',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://www.credsettle.com/duplicate-personal-loan-cibil-securitisation-assignment',
    images: [
      {
        url: 'https://www.credsettle.com/images/infographics/duplicate-personal-loan-cibil-securitisation-assignment.jpg',
        width: 1200,
        height: 675,
        alt: 'Duplicate Personal Loan on CIBIL After NBFC Securitisation Fix Guide'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Duplicate Loan on CIBIL After NBFC Securitisation Fix',
    description:
      'Fix duplicate personal loan on CIBIL after NBFC securitisation or assignment. Use RBI rules, claim ₹100/day penalty & clean reports with CredSettle.',
    images: [
      'https://www.credsettle.com/images/infographics/duplicate-personal-loan-cibil-securitisation-assignment.jpg'
    ]
  },
  alternates: {
    canonical:
      'https://www.credsettle.com/duplicate-personal-loan-cibil-securitisation-assignment'
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function DuplicateSecuritisedLoanPage() {
  const unifiedSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id':
          'https://www.credsettle.com/duplicate-personal-loan-cibil-securitisation-assignment#article',
        isPartOf: {
          '@type': 'WebPage',
          '@id':
            'https://www.credsettle.com/duplicate-personal-loan-cibil-securitisation-assignment'
        },
        headline: 'Duplicate Loan on CIBIL After NBFC Securitisation Fix',
        description:
          'Fix duplicate personal loan on CIBIL after NBFC securitisation or assignment. Use RBI rules, claim ₹100/day penalty & clean reports with CredSettle.',
        inLanguage: 'en-IN',
        mainEntityOfPage:
          'https://www.credsettle.com/duplicate-personal-loan-cibil-securitisation-assignment',
        datePublished: '2026-11-24T09:40:00+05:30',
        dateModified: '2026-11-24T09:40:00+05:30',
        articleSection: 'Personal Loan Credit Reporting & NBFC Securitisation',
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
          'https://www.credsettle.com/images/infographics/duplicate-personal-loan-cibil-securitisation-assignment.jpg'
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
          'https://www.credsettle.com/duplicate-personal-loan-cibil-securitisation-assignment#breadcrumb',
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
            name: 'Duplicate Loan on CIBIL After NBFC Securitisation Fix',
            item: 'https://www.credsettle.com/duplicate-personal-loan-cibil-securitisation-assignment'
          }
        ]
      },
      {
        '@type': 'FAQPage',
        '@id':
          'https://www.credsettle.com/duplicate-personal-loan-cibil-securitisation-assignment#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Why is my single personal loan showing twice on CIBIL after NBFC securitisation?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'This happens when your NBFC sells or assigns your loan pool to a bank, trust, or ARC. The new buyer opens a fresh loan number in bureau files. If your old NBFC fails to mark its old entry as closed or sold, both lines stay open.'
            }
          },
          {
            '@type': 'Question',
            name: 'Do I have to pay two EMIs if my loan appears twice on CIBIL?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. You only signed one loan contract and received one payout. You never owe double money. A duplicate CIBIL line is a reporting mistake between the old NBFC and the new buyer.'
            }
          },
          {
            '@type': 'Question',
            name: 'How much does a duplicate securitised loan hurt my CIBIL score and FOIR?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'A duplicate active loan doubles your shown debt and EMI load. It pushes your debt-to-income ratio (FOIR) past bank limits and can cut your CIBIL score by 40 to 90 points. Lenders then reject home, car, or top-up loans.'
            }
          },
          {
            '@type': 'Question',
            name: 'Can an NBFC sell or assign my personal loan without asking me first?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Most NBFC loan contracts include an assignment clause that lets lenders pool and sell standard or stressed loans under RBI rules. However, under RBI fair lending norms and Section 130 of the Transfer of Property Act, they must give you clear notice when your servicing lender changes.'
            }
          },
          {
            '@type': 'Question',
            name: 'Who must fix the duplicate entry: the old NBFC or the new bank?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Both lenders share legal duty under RBI rules. Usually, the old NBFC must update its old account to Closed or Sold/Transferred with zero balance. In pure securitisation pools where the NBFC remains the servicer, the trust or bank should not upload a second active line.'
            }
          },
          {
            '@type': 'Question',
            name: 'Can CIBIL delete a duplicate loan entry on its own without bank approval?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. Under the CICRA Act, 2005, credit bureaus cannot change or delete loan lines on their own. The reporting bank or NBFC must confirm the error in writing and send a clean correction file.'
            }
          },
          {
            '@type': 'Question',
            name: 'How many days do lenders and bureaus get to remove a duplicate loan?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Under RBI Circular RBI/2023-24/72, your dispute must be solved within 30 calendar days. The lender gets 21 days to check and send fixed data, and the bureau gets 9 days to update your report.'
            }
          },
          {
            '@type': 'Question',
            name: 'Can I claim ₹100 per day if the duplicate loan stays after 30 days?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. If your valid dispute is not fixed within 30 calendar days, the lender or bureau at fault must pay you ₹100 for each extra day of delay. They must credit this money to your bank account within 5 working days of fixing the error.'
            }
          },
          {
            '@type': 'Question',
            name: 'Does fixing the duplicate loan on CIBIL also clean CRIF, Equifax, and Experian?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Not always. India has four separate credit bureaus that do not share live edits automatically. You should pull reports from CIBIL, CRIF High Mark, Equifax, and Experian and file disputes with every bureau that shows the duplicate line.'
            }
          },
          {
            '@type': 'Question',
            name: 'How does CredSettle help remove duplicate securitised personal loans?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'CredSettle audits all four credit reports and maps both Loan Account Numbers to your single payout. We send notices to both Nodal Officers, handle bureau disputes, and claim ₹100 per day delay relief.'
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
        priceRange: '₹₹'
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
      <DuplicateSecuritisedLoanClient />
      <Footer />
    </div>
  );
}
