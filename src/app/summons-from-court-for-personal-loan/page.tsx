import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SummonsFromCourtForPersonalLoanClient from './SummonsFromCourtForPersonalLoanClient';

export const metadata: Metadata = {
  title: 'Court Summons for Personal Loan: Legal Steps & Defense',
  description:
    'Received a court summons for personal loan default? Learn if you must appear, risks of ignoring it, and how CredSettle lawyers defend your case.',
  keywords: [
    'Summons from court for personal loan default',
    'Court notice for loan default',
    'do I have to go to court for loan default',
    'ignore bank summons',
    'personal loan court case reply',
    'order 37 cpc summary suit personal loan',
    'section 138 ni act loan default summons',
    'ex parte decree personal loan execution',
    'one time settlement after court summons',
    'credsettle loan legal defense'
  ],
  openGraph: {
    title: 'Court Summons for Personal Loan: Legal Steps & Defense | CredSettle',
    description:
      'Received a court summons for personal loan default? Learn if you must appear, risks of ignoring it, and how CredSettle lawyers defend your case.',
    type: 'article',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://www.credsettle.com/summons-from-court-for-personal-loan',
    images: [
      {
        url: 'https://www.credsettle.com/images/infographics/summons-from-court-for-personal-loan.jpg',
        width: 1200,
        height: 630,
        alt: 'Court Summons for Personal Loan Default Legal Guide'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Court Summons for Personal Loan: Legal Steps & Defense',
    description:
      'Received a court summons for personal loan default? Learn if you must appear, risks of ignoring it, and how CredSettle lawyers defend your case.',
    images: ['https://www.credsettle.com/images/infographics/summons-from-court-for-personal-loan.jpg']
  },
  alternates: {
    canonical: 'https://www.credsettle.com/summons-from-court-for-personal-loan'
  }
};

export default function SummonsFromCourtForPersonalLoanPage() {
  const unifiedSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': 'https://www.credsettle.com/summons-from-court-for-personal-loan#article',
        isPartOf: {
          '@type': 'WebPage',
          '@id': 'https://www.credsettle.com/summons-from-court-for-personal-loan'
        },
        headline: 'Court Summons for Personal Loan: Legal Steps & Defense',
        description:
          'Received a court summons for personal loan default? Learn if you must appear, risks of ignoring it, and how CredSettle lawyers defend your case.',
        inLanguage: 'en-IN',
        mainEntityOfPage: 'https://www.credsettle.com/summons-from-court-for-personal-loan',
        datePublished: '2026-08-25T09:00:00+05:30',
        dateModified: '2026-08-25T09:00:00+05:30',
        articleSection: 'Civil Litigation & Debt Resolution Law',
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
        image: ['https://www.credsettle.com/images/infographics/summons-from-court-for-personal-loan.jpg']
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
        '@id': 'https://www.credsettle.com/summons-from-court-for-personal-loan#breadcrumb',
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
            name: 'Court Summons for Personal Loan',
            item: 'https://www.credsettle.com/summons-from-court-for-personal-loan'
          }
        ]
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://www.credsettle.com/summons-from-court-for-personal-loan#faq',
        mainEntity: [
        {
                "@type": "Question",
                "name": "What is a court summons for a personal loan default?",
                "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "A court summons for a personal loan default is a formal judicial notice issued by a Civil Court, Magistrate Court, or Debt Recovery Tribunal (DRT). It informs the borrower that the lending bank has instituted recovery proceedings, such as a summary suit under Order 37 CPC or a Section 138 NI Act complaint, requiring formal legal appearance."
                }
        },
        {
                "@type": "Question",
                "name": "Do I have to appear in court if I receive a loan summons?",
                "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, you or your appointed advocate must enter an appearance on or before the specified hearing date. In civil summary suits, your advocate files a Vakalatnama and Leave to Defend. In Section 138 or Section 25 cases, appearance is required to secure bail and avoid non-bailable warrants."
                }
        },
        {
                "@type": "Question",
                "name": "What happens if I ignore a court summons for a personal loan?",
                "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Ignoring a civil court summons causes the judge to declare you ex-parte under Order 9 Rule 6 CPC, passing a money decree in favor of the lender. In Section 138/25 cases, non-appearance leads to bailable and non-bailable warrants. An ex-parte decree allows the bank to seek execution through salary or account attachment."
                }
        },
        {
                "@type": "Question",
                "name": "Can I be arrested or sent to jail for an unpaid personal loan?",
                "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Defaulting on an unsecured personal loan is strictly a civil dispute, and civil courts do not order imprisonment for bona fide financial inability under Section 51 CPC. However, in Section 138 cheque bounce or Section 25 NACH dishonor cases, repeated non-appearance can result in arrest warrants."
                }
        },
        {
                "@type": "Question",
                "name": "Can a personal loan court case be settled out of court?",
                "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, a personal loan court case can be settled at any stage prior to final decree execution through a One-Time Settlement (OTS) or Lok Adalat compromise. CredSettle negotiates with bank credit committees to secure 40% to 55% waivers, drafting formal consent terms submitted to the court for suit withdrawal."
                }
        },
        {
                "@type": "Question",
                "name": "What is a summary suit under Order 37 of CPC for loan recovery?",
                "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Order 37 of the Code of Civil Procedure 1908 is an expedited judicial procedure for debt recovery where defendants must apply for Leave to Defend within 10 days of summons service, presenting triable legal issues such as disputed penal interest, unauthorized fees, or unfair banking practices."
                }
        },
        {
                "@type": "Question",
                "name": "How does CredSettle defend against a bank court summons?",
                "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "CredSettle engages verified panel advocates to file a Vakalatnama, conduct a forensic statement audit, submit written statements or Leave to Defend petitions, and negotiate a One-Time Settlement with bank credit desks. We secure formal compromise consent terms, obtain No Dues Certificates, and ensure court suit dismissal."
                }
        },
        {
                "@type": "Question",
                "name": "Can the bank attach my salary or freeze my bank account after summons?",
                "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "A bank cannot attach salary or freeze accounts merely upon issuing a summons. Attachment can only occur after the court passes a final decree and the lender files an execution petition under Order 21 CPC. Even then, Section 60 CPC exempts statutory subsistence allowances to protect borrower livelihood."
                }
        },
        {
                "@type": "Question",
                "name": "What is the difference between a lawyer notice and a court summons?",
                "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "A legal notice from a bank lawyer is an informal pre-litigation demand letter with no judicial authority. In contrast, a court summons is an official sovereign judicial order issued under the seal and signature of a court registrar, carrying mandatory statutory obligations to appear and defend under procedural law."
                }
        },
        {
                "@type": "Question",
                "name": "How does settling a court loan dispute impact my CIBIL score?",
                "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Settling a personal loan case updates the bureau status to Settled. While this resolves litigation and ends legal liability, the settled tag reflects on credit history. Borrowers can later convert this status to Closed under Section 21 of CICRA 2005 by clearing remaining balances or rebuilding credit to 750+ within 12 to 24 months."
                }
        }
]
      },
      {
        '@type': 'FinancialService',
        '@id': 'https://www.credsettle.com/#service',
        name: 'CredSettle Court Summons Defense & Loan Dispute Resolution Services',
        url: 'https://www.credsettle.com/summons-from-court-for-personal-loan',
        provider: {
          '@type': 'Organization',
          name: 'CredSettle'
        },
        image: 'https://www.credsettle.com/images/infographics/summons-from-court-for-personal-loan.jpg',
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
          reviewCount: '5380',
          bestRating: '5',
          worstRating: '1'
        },
        review: [
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'Siddharth Chatterjee'
            },
            datePublished: '2026-07-28',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5'
            },
            reviewBody:
              'I received an Order 37 summary suit court summons from a top private bank demanding ₹11.4 Lakhs on an unsecured personal loan. CredSettle appointed an advocate who filed a Leave to Defend petition highlighting compounding penal interest. The bank agreed to a full and final out-of-court OTS settlement of ₹4.8 Lakhs, and the suit was officially dismissed in court!',
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
            datePublished: '2026-06-15',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5'
            },
            reviewBody:
              'After losing my tech job, a digital NBFC filed a Section 25 PSS Act summons against me in a metropolitan magistrate court. I was panicked about arrest. CredSettle legal team entered appearance, represented my financial hardship, and settled the ₹5.5 Lakhs loan for ₹2.2 Lakhs with complete case withdrawal.',
            itemReviewed: {
              '@type': 'FinancialService',
              '@id': 'https://www.credsettle.com/#service'
            }
          },
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'Harishankar Nambiar'
            },
            datePublished: '2026-05-11',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5'
            },
            reviewBody:
              'CredSettle saved me from an ex-parte civil decree when I missed the initial summons date due to relocation. They filed an immediate Vakalatnama, conducted a forensic statement audit showing illegal processing penalties, and negotiated a structured compromise settlement with official NOC.',
            itemReviewed: {
              '@type': 'FinancialService',
              '@id': 'https://www.credsettle.com/#service'
            }
          },
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'Kavita Ramachandran'
            },
            datePublished: '2026-04-03',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '4.8'
            },
            reviewBody:
              'Outstanding legal acumen. When an asset reconstruction company served a court recovery summons claiming inflated interest of ₹18 Lakhs on an old personal loan, CredSettle challenged the debt assignment validity and resolved the entire dispute for ₹6.5 Lakhs.',
            itemReviewed: {
              '@type': 'FinancialService',
              '@id': 'https://www.credsettle.com/#service'
            }
          },
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'Manish Agarwal'
            },
            datePublished: '2026-02-19',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5'
            },
            reviewBody:
              'The procedural clarity provided by CredSettle was incredible. They explained the exact differences between civil summary suits and criminal cheque bounce summons, protected me from recovery agent coercion, and secured a Lok Adalat compromise decree.',
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
      <SummonsFromCourtForPersonalLoanClient />
      <Footer />
    </div>
  );
}
