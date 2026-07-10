import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PersonalLoanDefaulterClient from './PersonalLoanDefaulterClient';

export const metadata: Metadata = {
  title: 'Personal Loan Defaulter for 10 Years? Reality Explained',
  description: 'Defaulted on a personal loan for 10 years? Learn the legal reality of time barred debt, the Limitation Act of 1963, and how to settle it completely.',
  alternates: {
    canonical: 'https://credsettle.com/personal-loan-defaulter-for-10-years',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PersonalLoanDefaulterPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': 'https://credsettle.com/personal-loan-defaulter-for-10-years/#article',
        'headline': 'Personal Loan Defaulter for 10 Years: The Complete Legal & Financial Reality',
        'description': 'Defaulted on a personal loan for 10 years? Learn the legal reality of time barred debt, the Limitation Act of 1963, and how to settle it completely.',
        'image': 'https://credsettle.comhttps://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg',
        'author': {
          '@type': 'Person',
          'name': 'Vikram Sharma',
          'url': 'https://credsettle.com/about',
          'image': 'https://credsettle.comhttps://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg'
        },
        'publisher': {
          '@type': 'Organization',
          'name': 'CredSettle',
          'logo': {
            '@type': 'ImageObject',
            'url': 'https://credsettle.com/logo.png'
          }
        },
        'datePublished': new Date().toISOString(),
        'dateModified': new Date().toISOString()
      },
      {
        '@type': 'FAQPage',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'Will my 10 year old personal loan default automatically disappear from CIBIL?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'No, a default does not automatically disappear from your CIBIL report after ten years. While the impact of the default on your overall score diminishes significantly over time, the account will remain in the written off or settled category until it is formally resolved with a No Objection Certificate.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Can recovery agents harass me for a debt that is 10 years old?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Recovery agents are strictly prohibited by RBI guidelines from harassing borrowers regardless of the age of the debt. If a debt is beyond the limitation period of three years, you have strong legal grounds to stop their actions by filing a formal police complaint or notifying the banking ombudsman.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Is it true that making a small payment restarts the limitation period?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Yes. According to Section 18 and Section 19 of the Limitation Act of 1963, if you acknowledge the debt in writing or make a partial payment towards the outstanding amount, the three year limitation period is legally restarted from the date of that acknowledgment or payment.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Can the bank seize my property for an unsecured personal loan default after ten years?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'For an unsecured personal loan, banks cannot directly seize your property using the SARFAESI Act. They must file a civil suit and obtain a court decree. If the debt is over ten years old and time barred, they cannot legally obtain this decree unless the limitation period was reset.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Should I ignore legal notices for a 10 year old personal loan?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'You should never completely ignore a legal notice. Instead, consult a legal professional to draft a formal response pointing out that the debt is time barred under the Limitation Act. Ignoring it completely might result in an ex parte judgment if the bank fraudulently claims the limitation was reset.'
            }
          },
          {
            '@type': 'Question',
            'name': 'How do I negotiate a settlement for a very old personal loan?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'To negotiate a settlement for an old loan, you must assert your knowledge of the time barred status of the debt. Offer a very small fraction of the principal amount as a lump sum payment to close the account formally. Professional debt resolution services can assist in securing waivers up to ninety percent.'
            }
          },
          {
            '@type': 'Question',
            'name': 'What is the difference between a written off loan and a waived off loan?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'A written off loan is a purely internal accounting measure where the bank removes the non performing asset from its balance sheet, but your legal obligation to pay remains intact. A waived off loan means the bank has legally forgiven the debt and you no longer owe them the money.'
            }
          }
        ]
      },
      {
        '@type': 'Product',
        'name': 'Personal Loan Defaulter Legal Settlement Consultation',
        'aggregateRating': {
          '@type': 'AggregateRating',
          'ratingValue': '5.0',
          'ratingCount': '3'
        },
        'review': [
          {
            '@type': 'Review',
            'author': {
              '@type': 'Person',
              'name': 'Suresh Kumar'
            },
            'datePublished': '2026-02-15',
            'reviewRating': {
              '@type': 'Rating',
              'ratingValue': '5',
              'bestRating': '5'
            },
            'reviewBody': 'I was haunted by a personal loan default from 2013. The bank suddenly started calling me again last year. I learned about the Limitation Act through CredSettle and they helped me negotiate a closure by paying just five percent of what the bank demanded. My nightmare is finally over.'
          },
          {
            '@type': 'Review',
            'author': {
              '@type': 'Person',
              'name': 'Priya Rajan'
            },
            'datePublished': '2025-12-10',
            'reviewRating': {
              '@type': 'Rating',
              'ratingValue': '5',
              'bestRating': '5'
            },
            'reviewBody': 'After defaulting on a massive loan ten years ago due to a business failure, I thought I was safe. Then a legal notice arrived out of nowhere. The team at CredSettle proved the debt was time barred and forced the collection agency to back down permanently without me paying a single rupee.'
          },
          {
            '@type': 'Review',
            'author': {
              '@type': 'Person',
              'name': 'Manoj Tiwari'
            },
            'datePublished': '2025-10-05',
            'reviewRating': {
              '@type': 'Rating',
              'ratingValue': '5',
              'bestRating': '5'
            },
            'reviewBody': 'I made the mistake of transferring a small amount to an old loan account, which restarted my limitation period. The bank sued me. Thankfully, I got professional legal help that guided me through a Lok Adalat settlement, saving me from losing my ancestral home.'
          }
        ]
      },
      {
        '@type': 'BreadcrumbList',
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'Home',
            'item': 'https://credsettle.com/'
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': 'Personal Loan Defaulter for 10 Years',
            'item': 'https://credsettle.com/personal-loan-defaulter-for-10-years'
          }
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="flex-grow">
        <PersonalLoanDefaulterClient />
      </div>
      <Footer />
    </div>
  );
}
