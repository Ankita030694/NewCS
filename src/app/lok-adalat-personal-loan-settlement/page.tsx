import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LokAdalatPersonalLoanClient from './LokAdalatPersonalLoanClient';

export const metadata: Metadata = {
  title: 'Lok Adalat Personal Loan Settlement: Process & Waivers',
  description:
    'Received a Lok Adalat summons from your bank? Discover how to use Lok Adalat to negotiate up to a 70% waiver on your unsecured personal loan safely.',
  keywords: [
    'how to settle personal loan in lok adalat',
    'lok adalat settlement process',
    'lok adalat discount percentage',
    'bank sent lok adalat notice',
    'lok adalat personal loan settlement',
    'pre litigation lok adalat notice personal loan',
    'national lok adalat debt settlement',
    'legal services authorities act section 21 award',
    'is lok adalat notice mandatory for loan',
    'lok adalat loan waiver percentage'
  ],
  openGraph: {
    title: 'Lok Adalat Personal Loan Settlement: Process & Waivers | CredSettle',
    description:
      'Received a Lok Adalat summons from your bank? Discover how to use Lok Adalat to negotiate up to a 70% waiver on your unsecured personal loan safely.',
    type: 'article',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://www.credsettle.com/lok-adalat-personal-loan-settlement',
    images: [
      {
        url: 'https://www.credsettle.com/images/infographics/lok-adalat-personal-loan-settlement.jpg',
        width: 1200,
        height: 630,
        alt: 'Lok Adalat Personal Loan Settlement Process and Waivers'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lok Adalat Personal Loan Settlement: Process & Waivers',
    description:
      'Received a Lok Adalat summons from your bank? Discover how to use Lok Adalat to negotiate up to a 70% waiver on your unsecured personal loan safely.',
    images: ['https://www.credsettle.com/images/infographics/lok-adalat-personal-loan-settlement.jpg']
  },
  alternates: {
    canonical: 'https://www.credsettle.com/lok-adalat-personal-loan-settlement'
  }
};

export default function LokAdalatPersonalLoanPage() {
  const unifiedSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': 'https://www.credsettle.com/lok-adalat-personal-loan-settlement#article',
        isPartOf: {
          '@type': 'WebPage',
          '@id': 'https://www.credsettle.com/lok-adalat-personal-loan-settlement'
        },
        headline: 'Lok Adalat Personal Loan Settlement: Process & Waivers',
        description:
          'Received a Lok Adalat summons from your bank? Discover how to use Lok Adalat to negotiate up to a 70% waiver on your unsecured personal loan safely.',
        inLanguage: 'en-IN',
        mainEntityOfPage: 'https://www.credsettle.com/lok-adalat-personal-loan-settlement',
        datePublished: '2026-08-21T09:00:00+05:30',
        dateModified: '2026-08-21T09:00:00+05:30',
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
        image: ['https://www.credsettle.com/images/infographics/lok-adalat-personal-loan-settlement.jpg']
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
        '@id': 'https://www.credsettle.com/lok-adalat-personal-loan-settlement#breadcrumb',
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
            name: 'Lok Adalat Personal Loan Settlement',
            item: 'https://www.credsettle.com/lok-adalat-personal-loan-settlement'
          }
        ]
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://www.credsettle.com/lok-adalat-personal-loan-settlement#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What is a Lok Adalat personal loan notice and why did my bank send it?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'A Lok Adalat personal loan notice is a formal pre-litigation communication issued under Section 19 and Section 20 of the Legal Services Authorities Act, 1987. Commercial banks and NBFCs refer defaulted personal loans to National Lok Adalat benches to explore an amicable, mutual compromise settlement before initiating formal civil recovery suits or arbitration proceedings.'
            }
          },
          {
            '@type': 'Question',
            name: 'Is attending a Lok Adalat session mandatory for a personal loan default?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. Appearing before a Lok Adalat is completely voluntary. Lok Adalat is an alternative dispute resolution (ADR) conciliation forum, not a regular trial court. Non-appearance does not result in contempt of court, police action, or immediate penalties. However, attending strategically provides the best legal platform to negotiate substantial loan waivers.'
            }
          },
          {
            '@type': 'Question',
            name: 'Can I be arrested, sent to jail, or issued a warrant for ignoring a Lok Adalat notice?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. An unsecured personal loan default is strictly a civil contractual breach. Lok Adalat benches do not possess criminal jurisdiction and have zero authority to issue arrest warrants, summons through police, or order imprisonment. Any threat of arrest by recovery agents citing a Lok Adalat notice is illegal under RBI regulations.'
            }
          },
          {
            '@type': 'Question',
            name: 'What discount percentage or waiver can I get on a personal loan in Lok Adalat?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'In Lok Adalat hearings, borrowers typically receive a 100% waiver on accumulated penal interest, overdue compounding charges, and legal expenses. Furthermore, banks frequently concede a 30% to 70% waiver on the outstanding principal balance depending on the age of the default, NPA classification stage, and documented financial distress.'
            }
          },
          {
            '@type': 'Question',
            name: 'How does the settlement process work during a Lok Adalat hearing?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'During the session, the Lok Adalat bench (comprising a sitting or retired judicial officer and an advocate or social worker) mediates between you and the bank’s authorized legal representative. Once both parties agree on a mutually acceptable discounted settlement figure, a joint compromise memorandum is signed and the bench passes a formal Consent Award.'
            }
          },
          {
            '@type': 'Question',
            name: 'Is a Lok Adalat settlement award legally binding and can the bank sue me again later?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Under Section 21 of the Legal Services Authorities Act, 1987, an award passed by a Lok Adalat is deemed to be a decree of a Civil Court and is final and binding on all parties. Once you fulfill the payment terms stipulated in the award, the debt is completely extinguished and the bank is legally barred from filing any future civil or recovery claims.'
            }
          },
          {
            '@type': 'Question',
            name: 'Can I appeal against a Lok Adalat settlement award in a higher court?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No appeal lies to any court against an award of a Lok Adalat under Section 21(2) of the Act, because it is passed upon mutual consent. However, in extremely rare cases where a settlement was obtained through proven fraud, misrepresentation, or coercion, a writ petition under Article 226 or 227 of the Constitution can be filed before the High Court.'
            }
          },
          {
            '@type': 'Question',
            name: 'How does a Lok Adalat personal loan settlement impact my CIBIL score?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Upon completing the settlement, the bank reports the loan account status to credit bureaus (CIBIL, Experian, CRIF High Mark) as "Settled" or "Post-Write-off Settled" with a zero balance. While a settled remark impacts scores initially, it stops ongoing negative Days Past Due (DPD) accumulation. Borrowers can subsequently convert this status to "Closed" by paying the remaining differential later or rebuilding credit through secured instruments.'
            }
          },
          {
            '@type': 'Question',
            name: 'What documents do I need to carry to a Lok Adalat personal loan settlement session?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'You should carry the official Lok Adalat notice, government-issued photo ID (Aadhaar / PAN), loan sanction letter and account statements, proof of historical repayments, and comprehensive financial hardship documentation such as medical discharge summaries, salary reduction letters, termination notices, or audited business loss ledgers.'
            }
          },
          {
            '@type': 'Question',
            name: 'What is the difference between Lok Adalat, Debt Recovery Tribunal (DRT), and Court Mediation?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Lok Adalat handles pre-litigation and pending matters through immediate, cost-free conciliation resulting in a final non-appealable decree. DRT is a specialized statutory tribunal exclusively for bank claims exceeding ₹20 Lakhs under the SARFAESI/RDBFI Acts with formal adversarial litigation. Court mediation is a court-referred process where mediators facilitate compromise, but the agreement must be returned to the trial judge for a formal decree.'
            }
          }
        ]
      },
      {
        '@type': 'FinancialService',
        '@id': 'https://www.credsettle.com/#service',
        name: 'CredSettle Lok Adalat Personal Loan Settlement & Debt Resolution Services',
        url: 'https://www.credsettle.com/lok-adalat-personal-loan-settlement',
        provider: {
          '@type': 'Organization',
          name: 'CredSettle'
        },
        image: 'https://www.credsettle.com/images/infographics/lok-adalat-personal-loan-settlement.jpg',
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
          reviewCount: '5420',
          bestRating: '5',
          worstRating: '1'
        },
        review: [
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'Rajeshwar Rao'
            },
            datePublished: '2026-07-22',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5'
            },
            reviewBody:
              'Received a National Lok Adalat notice from a major private bank for an unpaid ₹8.5 Lakhs personal loan after suffering severe business losses. CredSettle legal professionals structured our hardship dossier and represented us before the bench. The entire debt was settled for ₹2.8 Lakhs with a 100% penal interest waiver and an official No Dues Certificate!',
            itemReviewed: {
              '@type': 'FinancialService',
              '@id': 'https://www.credsettle.com/#service'
            }
          },
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'Sunita Deshpande'
            },
            datePublished: '2026-06-18',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5'
            },
            reviewBody:
              'I was panicked when I received a Pre-Litigation Lok Adalat summons thinking the police would arrive. CredSettle clarified my rights under the Legal Services Authorities Act, engaged directly with the bank’s Nodal Officer, and helped me secure a 65% total settlement before the DLSA bench.',
            itemReviewed: {
              '@type': 'FinancialService',
              '@id': 'https://www.credsettle.com/#service'
            }
          },
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'Harish Nair'
            },
            datePublished: '2026-05-14',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5'
            },
            reviewBody:
              'A fintech lending NBFC sent continuous WhatsApp notices regarding Lok Adalat proceedings. CredSettle stepped in, verified the legitimacy of the notice, and negotiated a structured compromise settlement that eliminated all extortionate late fees.',
            itemReviewed: {
              '@type': 'FinancialService',
              '@id': 'https://www.credsettle.com/#service'
            }
          },
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'Amitav Bhattacharya'
            },
            datePublished: '2026-04-09',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '4.8'
            },
            reviewBody:
              'Settled two unsecured loans totaling ₹11 Lakhs at the National Lok Adalat. CredSettle’s guidance on Section 21 consent awards ensured that the bank gave complete legal immunity with zero lingering civil liability. Highly recommended!',
            itemReviewed: {
              '@type': 'FinancialService',
              '@id': 'https://www.credsettle.com/#service'
            }
          },
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'Kavita Murthy'
            },
            datePublished: '2026-03-17',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5'
            },
            reviewBody:
              'The bank claimed ₹4.2 Lakhs including compounding penalties on an original ₹2.5 Lakh loan. CredSettle represented my case before the Lok Adalat panel, audited the statement of accounts, and finalized an amicable closure at ₹1.5 Lakhs paid in two manageable tranches.',
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
      <LokAdalatPersonalLoanClient />
      <Footer />
    </div>
  );
}
