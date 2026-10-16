import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PoliceSummonsLoanDefaultClient from './PoliceSummonsLoanDefaultClient';

export const metadata: Metadata = {
  title: 'Police Summons for Loan Default: Rights & Legal Defense',
  description:
    'Facing police summons for loan default? Know your rights against illegal police interference, stop fake notices & settle your debt with CredSettle.',
  keywords: [
    'police summons for loan default',
    'rights against illegal police interference loan',
    'can police arrest for personal loan default',
    'fake police notice debt recovery agent',
    'section 35 bnss notice loan default',
    'section 41a crpc police notice loan repayment',
    'supreme court ruling police interference loan',
    'police complaint for loan default civil dispute',
    'how to reply to police notice for credit card',
    'credsettle police harassment legal defense'
  ],
  openGraph: {
    title: 'Police Summons for Loan Default: Rights & Legal Defense',
    description:
      'Facing police summons for loan default? Know your rights against illegal police interference, stop fake notices & settle your debt with CredSettle.',
    type: 'article',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://www.credsettle.com/police-summons-for-loan-default-rights-against-illegal-interference',
    images: [
      {
        url: 'https://www.credsettle.com/images/infographics/police-summons-for-loan-default-rights-against-illegal-interference.jpg',
        width: 1200,
        height: 675,
        alt: 'Police Summons for Loan Default Rights and Legal Protection Guide'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Police Summons for Loan Default: Rights & Legal Defense',
    description:
      'Facing police summons for loan default? Know your rights against illegal police interference, stop fake notices & settle your debt with CredSettle.',
    images: [
      'https://www.credsettle.com/images/infographics/police-summons-for-loan-default-rights-against-illegal-interference.jpg'
    ]
  },
  alternates: {
    canonical: 'https://www.credsettle.com/police-summons-for-loan-default-rights-against-illegal-interference'
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function PoliceSummonsLoanDefaultPage() {
  const unifiedSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': 'https://www.credsettle.com/police-summons-for-loan-default-rights-against-illegal-interference#article',
        isPartOf: {
          '@type': 'WebPage',
          '@id': 'https://www.credsettle.com/police-summons-for-loan-default-rights-against-illegal-interference'
        },
        headline: 'Police Summons for Loan Default: Rights & Legal Defense',
        description:
          'Facing police summons for loan default? Know your rights against illegal police interference, stop fake notices & settle your debt with CredSettle.',
        inLanguage: 'en-IN',
        mainEntityOfPage: 'https://www.credsettle.com/police-summons-for-loan-default-rights-against-illegal-interference',
        datePublished: '2026-10-16T09:00:00+05:30',
        dateModified: '2026-10-16T09:00:00+05:30',
        articleSection: 'Banking Law & Police Rights',
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
          'https://www.credsettle.com/images/infographics/police-summons-for-loan-default-rights-against-illegal-interference.jpg'
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
        '@id': 'https://www.credsettle.com/police-summons-for-loan-default-rights-against-illegal-interference#breadcrumb',
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
            name: 'Police Summons for Loan Default Rights',
            item: 'https://www.credsettle.com/police-summons-for-loan-default-rights-against-illegal-interference'
          }
        ]
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://www.credsettle.com/police-summons-for-loan-default-rights-against-illegal-interference#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Can police summon or arrest me for an unpaid loan or credit card debt?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. Loan default is strictly a civil dispute under the Indian Contract Act. The Supreme Court has repeatedly held that police officers cannot act as debt collectors or arrest borrowers for failing to pay EMIs.'
            }
          },
          {
            '@type': 'Question',
            name: 'What should I do if a police officer calls me asking to visit the police station for loan recovery?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Ask for the formal FIR or GD entry number, the caller name, and their rank. Request a formal written notice under Section 35(3) BNSS. Do not visit alone; have your legal counsel submit a formal written response.'
            }
          },
          {
            '@type': 'Question',
            name: 'How can I identify if a police notice sent on WhatsApp is fake or forged?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Check for an official FIR number, police station seal, and signatures. Real police notices are served in person or via registered post, not informally through WhatsApp. Forging police summons is a serious criminal offence.'
            }
          },
          {
            '@type': 'Question',
            name: 'Can a bank file an FIR under Section 318(4) BNS or Section 420 IPC for loan default?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Banks often try, but the Supreme Court has ruled that mere inability to repay a loan is not cheating. Cheating requires fraudulent intention at the inception of the loan. Genuine business or personal distress is not a crime.'
            }
          },
          {
            '@type': 'Question',
            name: 'What are my rights if I am summoned under Section 35(3) of BNSS?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'You have the right to legal representation under Article 22(1) of the Constitution. If you comply with the notice and cooperate with the inquiry, police cannot arrest you without special written permission from a magistrate.'
            }
          },
          {
            '@type': 'Question',
            name: 'Can women, senior citizens, or minors be called to a police station for loan inquiries?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. Under the proviso to Section 179 of BNSS, women, children under fifteen years, and senior citizens above sixty cannot be called to a police station. Any required inquiry must be conducted at their residence.'
            }
          },
          {
            '@type': 'Question',
            name: 'What legal steps can I take if police officers harass me on behalf of a bank?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'You can submit a written complaint to the Police Commissioner or Superintendent of Police. You can also file a petition before the State Police Complaints Authority or approach the High Court under Section 528 of BNSS.'
            }
          },
          {
            '@type': 'Question',
            name: 'Can recovery agents face criminal charges for posing as police officers?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Impersonating a public servant is punishable under Section 204 of BNS. Sending forged legal notices and threatening borrowers constitutes forgery and criminal intimidation under Sections 336 and 351 of BNS.'
            }
          },
          {
            '@type': 'Question',
            name: 'Can I resolve my loan through a One-Time Settlement if a police complaint is filed?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. CredSettle helps you halt illegal police intimidation, challenge false complaints, and negotiate an official compromise settlement directly with the bank credit committee with up to 50% to 75% waivers.'
            }
          },
          {
            '@type': 'Question',
            name: 'How does CredSettle protect borrowers against unlawful police interference?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'CredSettle issues strong legal replies to police authorities, files complaints against rogue recovery agencies with the RBI Ombudsman, protects your constitutional rights, and secures clean No Dues Certificates.'
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
              name: 'Virendra Saxena'
            },
            datePublished: '2026-09-18',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5'
            },
            reviewBody:
              'A collection agent sent a forged police notice demanding I report to the crime branch for credit card default. CredSettle exposed the forgery, sent a legal warning to the bank nodal officer, and settled my dues at a 65% discount.',
            itemReviewed: {
              '@type': 'FinancialService',
              '@id': 'https://www.credsettle.com/#service'
            }
          },
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'Sunita Deshmukh'
            },
            datePublished: '2026-09-02',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5'
            },
            reviewBody:
              'A local police sub-inspector called my husband asking him to visit the station and sign loan recovery cheques. CredSettle submitted a strong representation citing Supreme Court rulings on civil debt. The police dropped the matter immediately.',
            itemReviewed: {
              '@type': 'FinancialService',
              '@id': 'https://www.credsettle.com/#service'
            }
          },
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'Rohit Khandelwal'
            },
            datePublished: '2026-08-20',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '4.8'
            },
            reviewBody:
              'An NBFC filed a frivolous Section 420 complaint after my business suffered losses. CredSettle advocates handled the inquiry, established clear lack of criminal intent under Bhajan Lal guidelines, and completed a formal OTS.',
            itemReviewed: {
              '@type': 'FinancialService',
              '@id': 'https://www.credsettle.com/#service'
            }
          },
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'Farhan Akhtar'
            },
            datePublished: '2026-08-05',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5'
            },
            reviewBody:
              'Recovery agents kept threatening to send police to my office. CredSettle issued a formal legal notice for criminal intimidation under BNS 351 and lodged an RBI ombudsman complaint. Harassment stopped on day one.',
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
            datePublished: '2026-07-22',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5'
            },
            reviewBody:
              'I received an informal WhatsApp summons from an out-of-state cyber cell for personal loan dues. CredSettle verified it was an illegal pressure tactic, intervened with senior police officers, and protected me completely.',
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
      <PoliceSummonsLoanDefaultClient />
      <Footer />
    </div>
  );
}
