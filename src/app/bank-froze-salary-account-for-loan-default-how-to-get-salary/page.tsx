import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SalaryAccountFreezeClient from './SalaryAccountFreezeClient';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Bank Froze Salary Account for Loan Default? Here is How to Get Your Salary',
  description: 'Emergency guide for when your bank exercises right of set-off and deducts your entire salary. Learn how to file an RBI complaint and open a new account.',
  keywords: [
    'bank froze my salary account for loan default',
    'same bank loan and salary account deducting full salary',
    'bank taking entire salary for EMI default India',
    'salary account frozen cant buy food India',
    'how to stop bank from taking salary for loan recovery',
    'right of set-off salary account India RBI',
    'salary account freeze'
  ],
  openGraph: {
    title: 'Bank Froze Salary Account for Loan Default? Get Your Salary Back',
    description: 'Emergency action plan for borrowers whose entire salary has been frozen by their bank. File an RBI Ombudsman complaint for basic survival funds.',
    type: 'article',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://www.credsettle.com/bank-froze-salary-account-for-loan-default-how-to-get-salary'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bank Froze Salary Account? Get Your Salary Back',
    description: 'Emergency action plan to unfreeze your salary account legally in India.'
  },
  alternates: {
    canonical: 'https://www.credsettle.com/bank-froze-salary-account-for-loan-default-how-to-get-salary'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    }
  }
};

export default function SalaryAccountFreezePage() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    '@id': 'https://www.credsettle.com/bank-froze-salary-account-for-loan-default-how-to-get-salary',
    name: 'CredSettle Debt Management',
    legalName: 'CredSettle Legal Services',
    url: 'https://www.credsettle.com',
    logo: 'https://www.credsettle.com/credsettle-logo.svg',
    description: 'Expert legal advice on frozen salary accounts, right of set-off, and personal loan settlement in India.',
    telephone: '+91-8800226635',
    email: 'support@credsettle.com',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN'
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '3',
      bestRating: '5',
      worstRating: '1'
    },
    priceRange: 'Consultation Free',
    serviceType: 'Legal Advisory',
    knowsAbout: [
      'Right of Set-Off',
      'RBI Ombudsman Complaints',
      'Frozen Salary Account',
      'Loan Settlement'
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
        'item': 'https://www.credsettle.com'
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': 'Salary Account Freeze Assistance',
        'item': 'https://www.credsettle.com/bank-froze-salary-account-for-loan-default-how-to-get-salary'
      }
    ]
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'Bank Froze Salary Account for Loan Default? Here is How to Get Your Salary',
    'description': 'Emergency-focused guide for people whose bank exercised right of set-off, deducting their entire salary to recover loan dues.',
    'author': {
      '@type': 'Person',
      'name': 'Rohan Sharma',
      'image': 'https://www.credsettle.comhttps://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg',
      'url': 'https://www.credsettle.com/about'
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'CredSettle',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://www.credsettle.com/credsettle-logo.svg'
      }
    },
    'datePublished': '2024-03-20',
    'dateModified': new Date().toISOString().split('T')[0],
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': 'https://www.credsettle.com/bank-froze-salary-account-for-loan-default-how-to-get-salary'
    }
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'Can the bank freeze my Employee Provident Fund account for a loan default?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Absolutely not. The EPF account is governed by the Employees Provident Funds and Miscellaneous Provisions Act. Under Section 10 of this Act, EPF balances are strictly immune from attachment, even by a civil court decree. Your retirement savings are completely safe from retail banking loan defaults.'
        }
      },
      {
        '@type': 'Question',
        'name': 'What happens if my frozen salary account is a joint account?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'The banks right of set-off only applies when there is strict mutuality. If you took a personal loan in your individual capacity, the bank cannot legally freeze or execute a set-off against a joint account you hold with your spouse or parent, because the debt and the account ownership are not identical. If they do this, you can immediately file an Ombudsman complaint and likely win.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Can my employer terminate me because my salary account is frozen?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'A bank account freeze is a private civil dispute between you and your bank. It has no bearing on your employment contract. An employer cannot legally fire you simply because you have a banking dispute. However, constant calls from recovery agents to the HR department can damage your professional reputation, which is why proactive communication with HR is essential.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Will I go to jail for defaulting on a personal loan?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'No. Defaulting on a personal loan is a civil breach of contract, not a criminal offense. You cannot be jailed merely for being unable to repay a debt. The only exception is if you intentionally committed fraud or if you deliberately bounce cheques or ECS mandates with malicious intent, which can attract quasi-criminal proceedings. Even in those cases, the courts vastly prefer financial settlements over imprisonment.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Can I open a new bank account if my current one is frozen?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Yes. There is no law preventing an Indian citizen from opening a new savings account, even if they have defaulted on a loan. However, there are practical challenges. Your PAN and Aadhaar are linked to your credit profile. When you apply for a new account, the new bank will see your deteriorated credit score. You should avoid opening an account with a bank that has any affiliated lending relationship with your current creditor.'
        }
      },
      {
        '@type': 'Question',
        'name': 'How long does an RBI Ombudsman complaint take to resolve a frozen account?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Once you file a complaint on the RBI CMS portal, the Ombudsman typically seeks a response from the bank within 15 to 30 days. Because an arbitrary 100 percent salary deduction violates basic subsistence rights, banks often proactively lift the freeze or offer a negotiated settlement before the Ombudsman issues a formal ruling to avoid regulatory penalties.'
        }
      },
      {
        '@type': 'Question',
        'name': 'What is the minimum subsistence amount protected by law?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'While internal bank policies vary, Indian courts heavily rely on Section 60 of the Code of Civil Procedure as a benchmark, which exempts the first Rs 1000 and two thirds of the remainder of a salary from attachment. This legal principle dictates that a borrower cannot be entirely stripped of their income, ensuring funds remain for basic food and shelter.'
        }
      }
    ]
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <Script id="org-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero Section */}
      <section 
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
            Bank Froze Salary Account for Loan Default? <br />
            <span className="text-blue-300">Here is How to Get Your Salary</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light">
            An emergency action plan to claim subsistence allowance, open a new account legally, and negotiate an urgent loan settlement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Get Emergency Legal Help
            </Link>
          </div>
        </div>
      </section>

      {/* Client Component content */}
      <SalaryAccountFreezeClient />
      
      <Footer />
    </div>
  );
}
