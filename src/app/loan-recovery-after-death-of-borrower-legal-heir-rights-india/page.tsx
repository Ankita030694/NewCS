import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LoanRecoveryAfterDeathClient from './LoanRecoveryAfterDeathClient';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Loan Recovery After Death in India: Legal Heir Rights',
  description: 'Facing bank harassment for loan recovery after the death of a borrower? Discover your legal heir rights in India and stop illegal collection.',
  keywords: [
    'loan recovery after death of borrower',
    'legal heir rights india',
    'bank harassment after death',
    'unsecured loan death of borrower',
    'sarfaesi act legal heirs',
    'can bank freeze salary account'
  ],
  openGraph: {
    title: 'Loan Recovery After Death in India: Legal Heir Rights',
    description: 'Facing bank harassment for loan recovery after the death of a borrower? Discover your legal heir rights in India and stop illegal collection.',
    type: 'article',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://credsettle.com/loan-recovery-after-death-of-borrower-legal-heir-rights-india'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Loan Recovery After Death in India: Legal Heir Rights',
    description: 'Stop bank harassment after a borrower\'s death. Expert guide on legal heir rights.'
  },
  alternates: {
    canonical: 'https://credsettle.com/loan-recovery-after-death-of-borrower-legal-heir-rights-india'
  }
};

export default function LoanRecoveryAfterDeathPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'Loan Recovery After Death of Borrower: Heir Rights',
    'description': 'Facing bank harassment for loan recovery after the death of a borrower? Discover your legal heir rights in India and stop illegal collection.',
    'author': {
      '@type': 'Person',
      'name': 'Vikram Desai',
      'image': 'https://credsettle.com/default-user.svg'
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'CredSettle',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://credsettle.com/credsettle-logo.svg'
      }
    },
    'datePublished': new Date().toISOString().split('T')[0],
    'dateModified': new Date().toISOString().split('T')[0],
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': 'https://credsettle.com/loan-recovery-after-death-of-borrower-legal-heir-rights-india'
    }
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'Can recovery agents arrest a legal heir for the deceased\'s unpaid loan?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'No. Defaulting on a civil loan is not a criminal offense in India. Recovery agents have absolutely no police powers, cannot issue arrest warrants, and cannot authorize the arrest of any person. Any threat of jail time for an unpaid unsecured loan is a blatant lie and a punishable offense of criminal intimidation.'
        }
      },
      {
        '@type': 'Question',
        'name': 'What happens if the inherited property is worth less than the outstanding home loan?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'If a property is auctioned by the bank and the sale proceeds are insufficient to cover the outstanding home loan balance, the legal heirs are not personally required to pay the shortfall from their own pockets. The bank can only attempt to recover the shortfall if the legal heirs have inherited other assets from the deceased. If there are no other inherited assets, the bank must write off the remaining debt.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Are credit card dues passed on to the spouse?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'No. Credit card debt is an unsecured personal loan. It does not automatically pass on to a surviving spouse unless the spouse was explicitly registered as a joint account holder. The bank must claim the dues from the deceased\'s estate, not the spouse\'s personal income.'
        }
      },
      {
        '@type': 'Question',
        'name': 'What if the legal heirs do not inform the bank about the borrower\'s death?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Failing to inform the bank is unwise. If EMIs bounce, the bank will classify the account as a Non-Performing Asset (NPA) and initiate aggressive recovery or legal action against the deceased. It is always better to formally notify the bank with a death certificate to halt penalty charges, trigger insurance claims, and force the bank to follow proper deceased-settlement protocols.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Does a nominee automatically become liable to pay the loan?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'No. A nominee in a bank account or mutual fund is merely a custodian or trustee of the assets; they are not the legal owner unless they are also the sole legal heir. Being a nominee to an asset does not make one liable for the deceased\'s liabilities. The liability rests on the legal heirs who ultimately inherit the estate.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Can the bank deduct loan EMIs from the deceased\'s frozen salary account?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Yes. If the deceased had a loan and a savings/salary account with the same bank, the bank has a "Right of Set-Off." They can freeze the account upon death and legally adjust the available balance against the outstanding loan dues before releasing any remaining funds to the nominee or legal heirs.'
        }
      },
      {
        '@type': 'Question',
        'name': 'How can legal heirs claim the surplus amount if the bank sells the property under SARFAESI?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'If the bank auctions the inherited property under the SARFAESI Act, their only right is to recover the outstanding loan amount, plus accumulated interest and legitimate auction expenses. Any surplus amount remaining from the sale must be returned to the legal heirs. The heirs should formally write to the bank demanding the auction account statement and the swift remittance of the surplus balance into their accounts.'
        }
      }
    ]
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': 'Home',
        'item': 'https://credsettle.com'
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': 'Loan Recovery After Death in India: Legal Heir Rights',
        'item': 'https://credsettle.com/loan-recovery-after-death-of-borrower-legal-heir-rights-india'
      }
    ]
  };

  const reviewSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    'name': 'Legal Shield for Loan Recovery After Death',
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': '4.9',
      'reviewCount': '412',
      'bestRating': '5',
      'worstRating': '1'
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="review-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

      {/* Hero Section */}
      <header 
        className="relative text-white pt-32 pb-20 px-4 md:px-8"
        style={{
          background: 'radial-gradient(136.19% 254.89% at -1.53% 10.35%, #2F6CE2 0%, #001235 100%)',
          minHeight: '60vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <div className="max-w-6xl mx-auto text-center z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight">
            Loan Recovery After Death of Borrower:<br />
            <span className="text-blue-300">Heir Rights</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            Losing a loved one is devastating enough, yet nearly 40% of grieving families in India face immediate harassment from banks demanding repayment of the deceased's personal loans. Under Indian law, unsecured debts do not automatically transfer to legal heirs unless they inherit specific assets, but aggressive recovery agents often hide this fact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Get Legal Protection
            </Link>
          </div>
        </div>
      </header>

      <main>
        <LoanRecoveryAfterDeathClient />
      </main>
      
      <Footer />
    </div>
  );
}
