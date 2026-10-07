import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LoanSettlementPageClient from './LoanSettlementPageClient';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Loan Settlement in India: RBI Rules, Process & CIBIL Guide',
  description: 'Master guide to loan settlement in India under RBI OTS rules. Learn recovery agent guidelines, 50% waiver calculations, legal rights & CIBIL impact.',
  keywords: [
    'loan settlement in india',
    'loan settlement process',
    'one time settlement ots',
    'rbi guidelines on loan settlement',
    'rbi recovery agent rules',
    'personal loan settlement',
    'credit card settlement',
    'nbfc loan settlement',
    'settlement vs restructuring',
    'cibil score after settlement',
    'settled vs closed cibil',
    'loan settlement legal notice',
    'loan settlement calculator',
    'how to negotiate loan settlement',
    'debt relief india',
    'stop recovery harassment rbi'
  ],
  openGraph: {
    title: 'Loan Settlement in India: RBI Rules, Process, CIBIL & Legal Guide (2026)',
    description: 'Comprehensive legal and practical guide to loan settlement, RBI compromise framework, harassment protection, and credit score recovery.',
    type: 'article',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://www.credsettle.com/loan-settlement'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Loan Settlement in India — Complete Legal & Financial Guide',
    description: 'How loan settlement works in India under RBI compromise settlement directives. Know your rights, CIBIL impact, and OTS calculation.'
  },
  alternates: {
    canonical: 'https://www.credsettle.com/loan-settlement'
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

export default function LoanSettlementPage() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    '@id': 'https://www.credsettle.com/loan-settlement#organization',
    name: 'CredSettle Legal & Financial Resolution Services',
    legalName: 'CredSettle Legal Services',
    url: 'https://www.credsettle.com',
    logo: 'https://www.credsettle.com/credsettle-logo.svg',
    description: 'Specialized loan settlement, anti-harassment legal defense, and debt compromise advisory under RBI regulatory framework.',
    telephone: '+91-8800226635',
    email: 'support@credsettle.com',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN'
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '12500',
      bestRating: '5',
      worstRating: '1'
    },
    priceRange: 'Consultation Free',
    serviceType: 'Compromise Loan Settlement Advisory',
    areaServed: 'IN'
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.credsettle.com'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Loan Settlement in India',
        item: 'https://www.credsettle.com/loan-settlement'
      }
    ]
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': 'https://www.credsettle.com/loan-settlement#article',
    headline: 'Loan Settlement in India: The Authoritative Legal & Financial Guide',
    description: 'A complete master reference on loan settlement in India detailing the RBI compromise settlement framework, recovery agent regulations, CIBIL score implications, legal notices, and negotiation strategy.',
    author: {
      '@type': 'Organization',
      name: 'CredSettle Legal Advisory Board',
      url: 'https://www.credsettle.com/about'
    },
    publisher: {
      '@type': 'Organization',
      name: 'CredSettle',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.credsettle.com/credsettle-logo.svg'
      }
    },
    datePublished: '2024-01-15T09:00:00+05:30',
    dateModified: '2026-10-07T18:00:00+05:30',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://www.credsettle.com/loan-settlement'
    }
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is loan settlement?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Loan settlement is a negotiated compromise between a borrower facing genuine financial hardship and a lending institution (bank or NBFC), wherein the lender agrees to accept a reduced lump-sum or staged payment to treat the debt as fully extinguished and close the loan account.'
        }
      },
      {
        '@type': 'Question',
        name: 'Is loan settlement legal in India?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Compromise settlements are officially recognized and regulated by the Reserve Bank of India (RBI) under the Framework for Compromise Settlements and Technical Write-offs (Circular DOR.STR.REC.20/21.04.048/2023-24) as well as the Prudential Framework for Resolution of Stressed Assets.'
        }
      },
      {
        '@type': 'Question',
        name: 'Is loan settlement safe?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Loan settlement is completely safe when conducted through formal, written channels directly with the authorized bank or NBFC officers. It is unsafe only if payments are made to third-party personal bank accounts or based on verbal assurances without a formal written Settlement Sanction Letter.'
        }
      },
      {
        '@type': 'Question',
        name: 'How does loan settlement work?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The process involves assessing genuine financial hardship, communicating with the bank, presenting hardship documentation, negotiating waiver of interest and penal charges, receiving a formal written settlement approval letter, remitting the agreed amount to the loan account, and obtaining a No Dues Certificate (NOC).'
        }
      },
      {
        '@type': 'Question',
        name: 'How much can a loan be settled for?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'There is no fixed statutory waiver percentage. In unsecured personal loans and credit cards, settlements typically range between 30% to 60% of the total outstanding dues depending on the age of default (NPA vintage), principal balance, and demonstrable inability to pay.'
        }
      },
      {
        '@type': 'Question',
        name: 'Can I settle my personal loan?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Unsecured personal loans from commercial banks and NBFCs are among the most frequently settled loan categories when the borrower experiences verifiable financial distress like job loss or severe medical events.'
        }
      },
      {
        '@type': 'Question',
        name: 'Can I settle my credit card?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Credit card dues have high compounding interest and finance charges, making them prime candidates for substantial waiver of accrued interest and penalties through a one-time settlement (OTS).'
        }
      },
      {
        '@type': 'Question',
        name: 'Can I settle an NBFC loan?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. All RBI-regulated NBFCs are governed by the RBI Framework for Compromise Settlements and must maintain transparent Board-approved policies for settlement.'
        }
      },
      {
        '@type': 'Question',
        name: 'Can I settle a vehicle loan?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Vehicle loans are secured loans backed by the hypothecated asset. Settlement is generally possible only after the vehicle has been surrendered/auctioned and an unsecured deficiency balance remains, or if the asset has deteriorated beyond repossession value.'
        }
      },
      {
        '@type': 'Question',
        name: 'Does loan settlement affect CIBIL?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. The lender reports the loan account to credit bureaus (CIBIL, Experian, Equifax, CRIF High Mark) with the status "Settled" or "Post Write-Off Settled". This temporarily lowers your credit score and remains on your bureau record for up to 7 years.'
        }
      },
      {
        '@type': 'Question',
        name: 'How long does loan settlement take?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A typical compromise settlement takes between 3 to 12 weeks depending on the lender internal committee approval cycles, delegation of powers, and whether legal notices are already pending.'
        }
      },
      {
        '@type': 'Question',
        name: 'Can a bank reject settlement?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Lenders are not legally compelled to accept every settlement offer. If the bank believes the borrower has undeclared assets, willful default tendencies, or viable alternative repayment streams, they may reject the offer.'
        }
      },
      {
        '@type': 'Question',
        name: 'Can a bank take legal action after settlement?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No, provided the borrower honors all payment terms of the written settlement letter on or before the due dates. Once the agreed settlement sum is cleared, the contract is discharged by accord and satisfaction.'
        }
      },
      {
        '@type': 'Question',
        name: 'Can I get a loan after settlement?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, but not immediately from prime tier-1 banks. RBI mandates a cooling-off period (minimum 12 months). Borrowers typically rebuild credit using secured credit cards (backed by fixed deposits) before qualifying for fresh unsecured loans 2-3 years later.'
        }
      },
      {
        '@type': 'Question',
        name: 'What happens after settlement?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'After paying the agreed amount, the lender closes the active recovery file, cancels pending legal/arbitration notices, issues a formal No Dues Certificate (NDC/NOC), and updates the credit bureaus within 30 to 45 days.'
        }
      },
      {
        '@type': 'Question',
        name: 'How do I get an NOC?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Following payment of the final settlement installment, submit the bank payment receipt alongside the Settlement Sanction Letter to the loan branch or collections head, requesting issuance of the No Dues Certificate.'
        }
      },
      {
        '@type': 'Question',
        name: 'Can recovery agents visit my home?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Under RBI Fair Practices Code, authorized recovery agents may visit your residential address only between 8:00 AM and 7:00 PM, must carry authorized ID cards and lender authorization letters, and cannot harass, intimidate, or violate your privacy.'
        }
      },
      {
        '@type': 'Question',
        name: 'What should I do if recovery agents harass me?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Preserve audio/video evidence, call recordings, and WhatsApp messages. Submit a formal grievance to the bank Principal Nodal Officer (PNO). If unresolved within 30 days, escalate to the RBI Banking Ombudsman (CMS portal) or file a police complaint under applicable BNS/IPC sections.'
        }
      },
      {
        '@type': 'Question',
        name: 'Can I negotiate directly with the bank?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, any borrower can approach the bank branch manager, regional credit manager, or Stressed Asset Recovery Branch (SARB) directly. However, professional representation is frequently used when borrowers face persistent intimidation or complex legal notices.'
        }
      },
      {
        '@type': 'Question',
        name: 'Should I hire a lawyer for loan settlement?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Hiring legal counsel is strongly advisable if you have received Section 138 NI Act summons, Section 25 PSSA notices, Arbitration invocation notices, or SARFAESI symbolic possession notices, to ensure valid legal replies and defend against coercive litigation.'
        }
      }
    ]
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <script id="org-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero Section - Mobile-Optimized Compact Half-Height */}
      <section 
        className="relative text-white pt-20 pb-6 sm:pt-24 sm:pb-8 px-3 sm:px-6 md:px-8 border-b border-blue-900/40"
        style={{
          background: 'radial-gradient(136.19% 254.89% at -1.53% 10.35%, #1E40AF 0%, #030D22 100%)',
          minHeight: '28vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <div className="max-w-5xl mx-auto text-center z-10 py-1 sm:py-2 w-full">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-200 text-[11px] sm:text-xs font-medium mb-2.5 sm:mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            RBI Compromise Framework &amp; Legal Defense 2026
          </div>
          <h1 className="text-xl sm:text-2xl md:text-4xl font-extrabold mb-2 tracking-tight leading-snug break-words">
            Loan Settlement in India<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-sky-200 to-indigo-200">
              The Complete Legal &amp; Financial Master Guide
            </span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-200 mb-4 sm:mb-5 max-w-2xl mx-auto font-normal leading-relaxed px-1">
            Understand the RBI compromise settlement policy, stop recovery agent harassment, defend legal notices, calculate realistic OTS ranges, and protect your dignity.
          </p>
          <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 justify-center items-stretch sm:items-center max-w-md sm:max-w-none mx-auto">
            <Link 
              href="/contact"
              className="bg-white text-blue-900 px-5 py-3 sm:py-2.5 rounded-xl sm:rounded-lg font-bold text-xs sm:text-sm hover:bg-blue-50 transition-all shadow-md active:scale-98 text-center"
            >
              Get Free Legal Case Review
            </Link>
            <a 
              href="#settlement-calculator"
              className="px-5 py-3 sm:py-2.5 rounded-xl sm:rounded-lg font-bold text-xs sm:text-sm text-white bg-blue-600/40 hover:bg-blue-600/60 border border-blue-400/40 transition-all backdrop-blur-sm active:scale-98 text-center"
            >
              Calculate Settlement Estimate
            </a>
          </div>
          <div className="mt-3.5 sm:mt-4 flex flex-wrap justify-center items-center gap-2 sm:gap-4 text-[10px] sm:text-[11px] text-blue-200/80">
            <span>✓ RBI Circular Compliant</span>
            <span className="hidden sm:inline">•</span>
            <span>✓ Anti-Harassment Shield</span>
            <span className="hidden sm:inline">•</span>
            <span>✓ 100% Confidential</span>
          </div>
        </div>
      </section>

      {/* Main Interactive Guide Component */}
      <LoanSettlementPageClient />
      
      <Footer />
    </div>
  );
}
