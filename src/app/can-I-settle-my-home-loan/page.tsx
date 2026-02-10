import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import VerticalTableOfContents from '@/components/VerticalTableOfContents';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCheckCircle, faExclamationTriangle, faFileAlt, faMoneyBillWave, faPhone, faBalanceScale, faGavel, faLandmark, faCalculator } from '@fortawesome/free-solid-svg-icons';

export const metadata: Metadata = {
  title: 'Can I Settle My Home Loan in India? | Process, NPA & SARFAESI Guide',
  description: 'Wondering "Can I settle my home loan?" Learn the complete process, RBI guidelines, NPA classification, SARFAESI Act rights, tax implications, and how to negotiate a one-time settlement (OTS).',
  keywords: [
    'can I settle my home loan',
    'home loan settlement process india',
    'home loan one time settlement',
    'settle home loan with bank',
    'housing loan settlement',
    'home loan settlement letter',
    'how to settle home loan',
    'sarfaesi act home loan settlement',
    'npa home loan settlement',
    'rbi guidelines for home loan settlement',
    'impact of loan settlement on cibil',
    'foreclosure of home loan',
    'home loan prepayment vs settlement',
    'tax on loan waiver',
    'lok adalat loan settlement'
  ],
  openGraph: {
    title: 'Can I Settle My Home Loan in India? | Complete Legal Guide',
    description: 'Struggling with home loan EMIs? Discover if you can settle your home loan through a One Time Settlement (OTS), understand SARFAESI Act, and NPA norms.',
    type: 'article',
    url: 'https://credsettle.com/can-I-settle-my-home-loan',
    siteName: 'CredSettle',
    locale: 'en_IN',
    images: [
      {
        url: 'https://credsettle.com/og-can-i-settle-home-loan.jpg',
        width: 1200,
        height: 630,
        alt: 'Can I Settle My Home Loan Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Can I Settle My Home Loan? | CredSettle',
    description: 'Learn about home loan settlement, SARFAESI Act, and RBI guidelines. Get expert advice on settling your housing loan.',
  },
  alternates: {
    canonical: 'https://credsettle.com/can-I-settle-my-home-loan'
  }
};

export default function CanISettleHomeLoanPage() {
  const headings = [
    { id: 'introduction', text: 'Introduction', level: 2 },
    { id: 'settlement-vs-prepayment', text: 'Settlement vs. Prepayment', level: 2 },
    { id: 'when-to-consider', text: 'When to Consider Settlement?', level: 2 },
    { id: 'understanding-npa', text: 'Understanding NPA & SMA Stages', level: 2 },
    { id: 'sarfaesi-act', text: 'SARFAESI Act & Your Rights', level: 2 },
    { id: 'settlement-process', text: 'Step-by-Step Settlement Process', level: 2 },
    { id: 'lok-adalat', text: 'Settlement through Lok Adalat', level: 2 },
    { id: 'tax-implications', text: 'Tax Implications of Settlement', level: 2 },
    { id: 'co-borrowers', text: 'Impact on Co-Borrowers', level: 2 },
    { id: 'rbi-guidelines', text: 'RBI Guidelines & Legal Rights', level: 2 },
    { id: 'credit-score-impact', text: 'Impact on Credit Score', level: 2 },
    { id: 'pros-and-cons', text: 'Pros and Cons', level: 2 },
    { id: 'documents-required', text: 'Documents Required', level: 2 },
    { id: 'expert-tips', text: 'Expert Tips for Negotiation', level: 2 },
    { id: 'case-studies', text: 'Real Life Scenarios', level: 2 },
    { id: 'faqs', text: 'Frequently Asked Questions', level: 2 },
  ];

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
        'name': 'Can I Settle My Home Loan',
        'item': 'https://credsettle.com/can-I-settle-my-home-loan'
      }
    ]
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'Can I Settle My Home Loan in India? A Comprehensive Legal Guide',
    'description': 'A detailed guide on home loan settlement in India, covering SARFAESI, NPA norms, tax implications, process, eligibility, RBI guidelines, and impact on credit score.',
    'image': 'https://credsettle.com/og-can-i-settle-home-loan.jpg',
    'author': {
      '@type': 'Organization',
      'name': 'CredSettle'
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'CredSettle',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://credsettle.com/credsettle-logo.svg'
      }
    },
    'datePublished': '2024-02-10',
    'dateModified': '2024-02-10',
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': 'https://credsettle.com/can-I-settle-my-home-loan'
    }
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'Can I settle my home loan with the bank?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Yes, you can settle your home loan with the bank if you are facing genuine financial hardship and are unable to repay the full amount. This is typically done through a One Time Settlement (OTS) scheme.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Does settling a home loan affect my CIBIL score?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Yes, settling a home loan negatively impacts your CIBIL score. The loan status will be reported as "Settled" rather than "Closed," which can drop your score significantly and remain on your report for up to 7 years.'
        }
      },
      {
        '@type': 'Question',
        'name': 'What is a 13(2) notice under SARFAESI Act?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'A 13(2) notice is a demand notice issued by the bank under the SARFAESI Act when your loan becomes an NPA. It gives you 60 days to repay the full outstanding amount, failing which the bank can take possession of your property.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Is the waived amount in settlement taxable?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'It can be. Under Section 41(1) of the Income Tax Act, the remission of a liability (waived loan amount) can be treated as income/profit and taxed accordingly. Consult a CA for your specific case.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Can I settle my loan through Lok Adalat?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Yes, Lok Adalat is an effective forum for settling loan disputes. The award passed by a Lok Adalat is final and binding, and no appeal lies against it. It is a faster and cheaper method than regular courts.'
        }
      },
      {
        '@type': 'Question',
        'name': 'What happens to the guarantor if I settle my loan?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'The guarantor is equally liable. If you settle, the bank may still pursue the guarantor for the remaining balance unless the settlement clearly states that the guarantor is also released from liability.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Can the bank reject my settlement offer?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Yes, banks are not obligated to accept a settlement offer. They will verify your financial condition and only agree if they are convinced you genuinely cannot repay the full amount.'
        }
      },
      {
        '@type': 'Question',
        'name': 'How do I remove the "Settled" status from my CIBIL report?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'The "Settled" status cannot be simply removed. However, you can negotiate with the bank to pay the remaining "waived" amount later to convert the status to "Closed," or wait for 7 years for it to fall off naturally while building good credit elsewhere.'
        }
      }
    ]
  };

  const reviewSchema = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    '@id': 'https://credsettle.com/can-I-settle-my-home-loan',
    'name': 'CredSettle Loan Settlement',
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': '4.9',
      'reviewCount': '3450',
      'bestRating': '5',
      'worstRating': '1'
    }
  };

  const settlementBankLinks = [
    { name: 'HDFC Bank', href: '/loan-settlement/hdfc' },
    { name: 'SBI (State Bank of India)', href: '/loan-settlement/sbi' },
    { name: 'ICICI Bank', href: '/loan-settlement/icici' },
    { name: 'IndusInd Bank', href: '/loan-settlement/indusind' },
    { name: 'Axis Bank', href: '/loan-settlement/axis-bank' },
    { name: 'Kotak Mahindra Bank', href: '/loan-settlement/kotak' },
    { name: 'IDFC First Bank', href: '/loan-settlement/idfc' },
    { name: 'Yes Bank', href: '/loan-settlement/yes-bank' },
    { name: 'RBL Bank', href: '/loan-settlement/rbl-bank' },
    { name: 'Bajaj Finserv', href: '/loan-settlement/bajaj-finserv' },
    { name: 'Aditya Birla Capital', href: '/loan-settlement/aditya-birla' },
    { name: 'Hero Fincorp', href: '/loan-settlement/hero-fincorp' },
    { name: 'Union Bank', href: '/loan-settlement/union-bank' },
    { name: 'Federal Bank', href: '/loan-settlement/federal-bank' },
    { name: 'Bank of Baroda', href: '/loan-settlement/bank-of-baroda' },
    { name: 'DMI Finance', href: '/loan-settlement/dmi-finance' },
    { name: 'Kisetsu Saison Finance', href: '/loan-settlement/kisetsu' },
    { name: 'SMFG India Credit', href: '/loan-settlement/smfg-india-credit' },
    { name: 'Fibe (EarlySalary)', href: '/loan-settlement/fibe' },
    { name: 'Poonawalla Fincorp', href: '/loan-settlement/poonawalla' },
    { name: 'Tata Capital', href: '/loan-settlement/tata-capital' },
    { name: 'KrazyBee (KreditBee)', href: '/loan-settlement/krazybee' },
    { name: 'Piramal Finance', href: '/loan-settlement/piramal-finance' },
    { name: 'Stashfin (Akara Capital)', href: '/loan-settlement/stashfin' },
    { name: 'AU Small Finance Bank', href: '/loan-settlement/au-small-finance-bank' },
    { name: 'PayU Finance', href: '/loan-settlement/payu-finance' },
  ];

  const areaLinks = [
    { name: 'Andhra Pradesh', href: '/loan-settlement/andhra-pradesh' },
    { name: 'Delhi', href: '/loan-settlement/delhi' },
    { name: 'Gujarat', href: '/loan-settlement/gujarat' },
    { name: 'Haryana', href: '/loan-settlement/haryana' },
    { name: 'Karnataka', href: '/loan-settlement/karnataka' },
    { name: 'Maharashtra', href: '/loan-settlement/maharashtra' },
    { name: 'Rajasthan', href: '/loan-settlement/rajasthan' },
    { name: 'Tamil Nadu', href: '/loan-settlement/tamil-nadu' },
    { name: 'Telangana', href: '/loan-settlement/telangana' },
    { name: 'Uttar Pradesh', href: '/loan-settlement/uttar-pradesh' },
    { name: 'West Bengal', href: '/loan-settlement/west-bengal' },
  ];

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <Navbar />
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="review-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

      {/* Hero Section */}
      <section 
        className="relative text-white pt-32 pb-20 px-4 md:px-8"
        style={{
          background: 'radial-gradient(136.19% 254.89% at -1.53% 10.35%, #2F6CE2 0%, #001235 100%)',
          minHeight: '50vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <div className="max-w-4xl mx-auto text-center z-10">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight leading-tight">
            Can I Settle My Home Loan?
            <span className="block text-blue-300 mt-2 text-2xl md:text-4xl">Complete Legal Guide & Process</span>
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto font-light leading-relaxed">
             Facing SARFAESI notice? Struggling with EMI? Learn how to legally settle your home loan with the bank, understand your rights under RBI guidelines, and avoid property auction.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-white text-blue-900 px-8 py-3 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              Get Free Consultation <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-3">
          <nav className="flex text-sm text-gray-500" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
              </li>
              <li>
                <div className="flex items-center">
                  <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                  </svg>
                  <span className="ml-1 text-gray-700 font-medium md:ml-2">Can I Settle My Home Loan</span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="max-w-8xl mx-auto px-4 md:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Left Column - Table of Contents */}
          <div className="hidden lg:block w-1/4 min-w-[250px]">
            <div className="sticky top-24">
              <VerticalTableOfContents headings={headings} />
            </div>
          </div>

          {/* Middle Column - Main Content */}
          <div className="w-full lg:w-1/2 flex-1">
            <article className="prose prose-lg max-w-none bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100 text-gray-700 prose-headings:text-[#0C2756] prose-a:text-blue-600 hover:prose-a:text-blue-800">
              
              <div id="introduction">
                <p className="lead text-xl text-gray-600 mb-8">
                  Owning a home is a dream for many, but life is unpredictable. Job loss, medical emergencies, or business failure can turn your dream home into a financial burden. If you find yourself asking, <strong>"Can I settle my home loan?"</strong>, you are not alone. Many borrowers face situations where paying the full EMI becomes impossible.
                </p>
                <p>
                  Settling a home loan is a critical financial decision that should not be taken lightly. It is different from simply closing your loan early. It involves negotiating with the bank to pay a reduced amount to close the account because you are unable to pay the full debt. While this can provide immediate relief from harassment and mounting debt, it comes with long-term consequences for your credit health.
                </p>
                <p>
                  In this comprehensive guide, we will walk you through everything you need to know about settling your housing loan in India. We will cover the difference between prepayment and settlement, the step-by-step process, RBI guidelines, the <strong>SARFAESI Act</strong>, and how to protect your financial future while navigating this challenging time.
                </p>
              </div>

              <div id="settlement-vs-prepayment" className="my-10">
                <h2 className="text-3xl font-bold mb-6 text-[#0C2756]">Settlement vs. Prepayment (Foreclosure)</h2>
                <p>
                  Before proceeding, it is vital to distinguish between two commonly confused terms: <strong>Loan Settlement</strong> and <strong>Loan Prepayment (or Foreclosure)</strong>. They sound similar—both result in the loan account being closed—but their impact on your financial life is opposites.
                </p>
                
                <h3 className="text-xl font-semibold mt-4 mb-2">1. Home Loan Prepayment (Foreclosure)</h3>
                <p>
                  Prepayment happens when you have sufficient funds and decide to pay off your entire outstanding loan principal before the tenure ends.
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li><strong>Scenario:</strong> You get a bonus, sell an asset, or have increased savings.</li>
                  <li><strong>Action:</strong> You pay the full remaining principal + any interest accrued till date.</li>
                  <li><strong>Result:</strong> The loan is closed "honorably."</li>
                  <li><strong>Credit Impact:</strong> Positive! It shows you are a responsible borrower.</li>
                  <li><strong>Charges:</strong> For floating-rate home loans, RBI has mandated <strong>zero prepayment charges</strong> for individual borrowers. For fixed-rate loans, a small penalty may apply.</li>
                </ul>

                <h3 className="text-xl font-semibold mt-4 mb-2">2. Home Loan Settlement (One Time Settlement - OTS)</h3>
                <p>
                  Settlement happens when you <em>cannot</em> pay the full amount due to genuine financial distress.
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li><strong>Scenario:</strong> Loss of income, severe medical issues, or bankruptcy.</li>
                  <li><strong>Action:</strong> You negotiate with the bank to pay a lump sum (e.g., 60-70% of the due amount) to close the account.</li>
                  <li><strong>Result:</strong> The bank writes off the remaining amount as a loss.</li>
                  <li><strong>Credit Impact:</strong> Negative. The account is marked as <strong>"Settled"</strong> in your CIBIL report, causing your score to drop by 50-100 points or more.</li>
                </ul>
                <div className="bg-blue-50 border-l-4 border-blue-600 p-4 my-6">
                  <p className="font-medium text-blue-900 m-0">
                    <FontAwesomeIcon icon={faFileAlt} className="mr-2" />
                    <strong>Key Takeaway:</strong> Only opt for settlement if you have absolutely no other way to repay the loan. If you have funds, always aim for prepayment/foreclosure to keep your credit history clean.
                  </p>
                </div>
              </div>

              <div id="when-to-consider" className="my-10">
                <h2 className="text-3xl font-bold mb-6 text-[#0C2756]">When Should You Consider Settlement?</h2>
                <p>
                  Home loan settlement is effectively a declaration of major default. Lenders do not agree to it easily. It is typically considered a "last resort" option. You should only consider this path if:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                  <div className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-200">
                    <h4 className="font-bold text-lg mb-2 text-red-600 flex items-center">
                       <FontAwesomeIcon icon={faExclamationTriangle} className="mr-2" /> Job Loss or Business Failure
                    </h4>
                    <p className="text-sm">You have lost your primary source of income and have been unable to find employment for a significant period (6 months or more).</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-200">
                    <h4 className="font-bold text-lg mb-2 text-red-600 flex items-center">
                       <FontAwesomeIcon icon={faExclamationTriangle} className="mr-2" /> Medical Emergency
                    </h4>
                    <p className="text-sm">A severe illness or accident has drained your savings and impacted your ability to earn, making EMI payments impossible.</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-200">
                    <h4 className="font-bold text-lg mb-2 text-red-600 flex items-center">
                       <FontAwesomeIcon icon={faExclamationTriangle} className="mr-2" /> Death of Co-borrower
                    </h4>
                    <p className="text-sm">The demise of a primary earning member in a joint loan can severely impact repayment capacity.</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-200">
                    <h4 className="font-bold text-lg mb-2 text-red-600 flex items-center">
                       <FontAwesomeIcon icon={faExclamationTriangle} className="mr-2" /> Asset Depreciation
                    </h4>
                    <p className="text-sm">In rare cases where the property value has fallen significantly below the outstanding loan amount, and you cannot continue servicing the debt.</p>
                  </div>
                </div>
              </div>

              <div id="understanding-npa" className="my-10">
                <h2 className="text-3xl font-bold mb-6 text-[#0C2756]">Understanding Non-Performing Assets (NPA) & SMA Stages</h2>
                <p>
                  Banks cannot just settle any loan. There is a regulatory framework. Typically, a loan must be classified as a <strong>Non-Performing Asset (NPA)</strong> before a One Time Settlement (OTS) is considered. Knowing these stages helps you understand your timeline.
                </p>
                <div className="overflow-x-auto mt-4">
                  <table className="min-w-full divide-y divide-gray-200 border border-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Classification</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Overdue Period</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Bank Action</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 font-bold text-gray-900">SMA 0</td>
                        <td className="px-6 py-4">0 - 30 days</td>
                        <td className="px-6 py-4 text-sm">Reminder calls and SMS.</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 font-bold text-yellow-600">SMA 1</td>
                        <td className="px-6 py-4">31 - 60 days</td>
                        <td className="px-6 py-4 text-sm">Aggressive follow-ups, reporting to credit bureaus.</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 font-bold text-orange-600">SMA 2</td>
                        <td className="px-6 py-4">61 - 90 days</td>
                        <td className="px-6 py-4 text-sm">Legal notices may start. Risk of NPA is high.</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 font-bold text-red-600">NPA</td>
                        <td className="px-6 py-4">90+ days</td>
                        <td className="px-6 py-4 text-sm">Loan is declared NPA. SARFAESI proceedings can begin. OTS becomes possible.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="mt-4 text-sm text-gray-500 italic">* SMA = Special Mention Account</p>
              </div>

              <div id="sarfaesi-act" className="my-10">
                <h2 className="text-3xl font-bold mb-6 text-[#0C2756]">The SARFAESI Act 2002 & Your Rights</h2>
                <p>
                  The <strong>Securitisation and Reconstruction of Financial Assets and Enforcement of Security Interest (SARFAESI) Act, 2002</strong> is a powerful tool for banks to recover dues by auctioning your property <em>without the intervention of the court</em>. However, you have rights too.
                </p>
                
                <div className="space-y-4 mt-6">
                  <div className="border border-red-100 bg-red-50 p-4 rounded-lg">
                    <h4 className="font-bold text-red-800 mb-2 flex items-center">
                       <FontAwesomeIcon icon={faGavel} className="mr-2" /> Section 13(2) Notice (Demand Notice)
                    </h4>
                    <p className="text-sm text-red-800">
                      Once your loan is NPA, the bank sends this notice giving you <strong>60 days</strong> to clear the dues. You have the right to raise objections or make a representation against this notice. The bank <em>must</em> reply to your objection within 15 days. This is often the best time to propose a settlement.
                    </p>
                  </div>
                  
                  <div className="border border-red-200 bg-red-100 p-4 rounded-lg">
                    <h4 className="font-bold text-red-900 mb-2 flex items-center">
                       <FontAwesomeIcon icon={faLandmark} className="mr-2" /> Section 13(4) Notice (Possession Notice)
                    </h4>
                    <p className="text-sm text-red-900">
                      If you fail to pay within 60 days, the bank can take <strong>symbolic possession</strong> or <strong>physical possession</strong> of your property. They will publish an auction notice giving you 30 more days to pay.
                    </p>
                  </div>
                </div>

                <p className="mt-6">
                  <strong>Your Right to Appeal (DRT):</strong> If the bank has violated any procedure under SARFAESI, you can approach the <strong>Debt Recovery Tribunal (DRT)</strong> under Section 17 of the Act within 45 days of the possession notice. The DRT can stay the auction if the bank's action is found illegal.
                </p>
              </div>

              <div id="settlement-process" className="my-10">
                <h2 className="text-3xl font-bold mb-6 text-[#0C2756]">Step-by-Step Home Loan Settlement Process</h2>
                <p>
                  Settling a home loan is a formal process. You cannot simply stop paying and expect the bank to settle. Follow these steps to ensure a legal and documented settlement.
                </p>

                <div className="space-y-6 mt-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-lg">1</div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Assess Your Outstanding Dues</h4>
                      <p>Check your latest loan statement. Calculate exactly how much principal and interest is pending. Ideally, in a settlement, banks waive off the penal interest and other charges, and you negotiate on the principal amount.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-lg">2</div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Communicate with the Lender</h4>
                      <p>Write a formal letter or email to the branch manager or the recovery department. Clearly explain your financial hardship. Attach proof such as termination letters, medical reports, or bank statements showing lack of funds.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-lg">3</div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">The Negotiation Phase</h4>
                      <p>The bank will initially ask for the full amount. You need to negotiate. Start with a lower offer (e.g., 40-50% of the principal). The bank will counter. This back-and-forth can take weeks. Professional debt settlement companies can often handle this negotiation for you.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-lg">4</div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Get the Settlement Letter</h4>
                      <p className="text-orange-700 font-medium">This is the most crucial step.</p>
                      <p>Once an amount is agreed upon, <strong>do not pay a single rupee</strong> until you receive an official Settlement Letter (or OTS Letter) from the bank. This letter must state:</p>
                      <ul className="list-disc pl-5 mt-2 text-sm text-gray-600">
                        <li>The total outstanding amount.</li>
                        <li>The agreed settlement amount.</li>
                        <li>The payment deadline.</li>
                        <li>A clause stating that upon this payment, the loan will be considered closed and no further dues will be claimed.</li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-lg">5</div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Make the Payment</h4>
                      <p>Pay the settlement amount via Cheque or DD or NEFT. Keep the transaction receipt safe.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-lg">6</div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Collect Closing Documents</h4>
                      <p>After payment, ensure you receive the <strong>No Objection Certificate (NOC)</strong> and a <strong>Loan Closure Certificate</strong>. Verify that the bank initiates the return of your original property deeds (Sale Deed, Mother Deed, etc.).</p>
                    </div>
                  </div>
                </div>
              </div>

            

               <div id="tax-implications" className="my-10">
                <h2 className="text-3xl font-bold mb-6 text-[#0C2756]">Tax Implications of Loan Settlement</h2>
                <div className="p-6 bg-yellow-50 border border-yellow-200 rounded-xl">
                   <h3 className="text-xl font-bold text-yellow-800 mb-3 flex items-center">
                      <FontAwesomeIcon icon={faCalculator} className="mr-2" /> Is the Waived Amount Taxable?
                   </h3>
                   <p className="text-yellow-900 mb-4">
                      Yes, it can be. Under <strong>Section 41(1) of the Income Tax Act, 1961</strong>, the remission or cessation of a trading liability is treated as income. While home loans are personal liabilities, tax officers sometimes view the "waived principal" as a benefit or perquisite (under Section 28(iv)) or simply as "Income from Other Sources".
                   </p>
                   <p className="text-yellow-900">
                      <strong>Recommendation:</strong> Always consult a Chartered Accountant (CA) after settlement. You might need to declare the waived amount in your ITR to avoid scrutiny later.
                   </p>
                </div>
              </div>

              <div id="co-borrowers" className="my-10">
                <h2 className="text-3xl font-bold mb-6 text-[#0C2756]">Impact on Co-Borrowers and Guarantors</h2>
                <p>
                  Home loans often have co-borrowers (spouse, parent) or guarantors. Settlement affects them too.
                </p>
                <div className="grid md:grid-cols-2 gap-6 mt-4">
                   <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                      <h4 className="font-bold text-gray-800 mb-2">Co-Borrowers</h4>
                      <p className="text-sm text-gray-600">They are jointly and equally liable. If the primary applicant defaults, the bank will pursue the co-borrower. A settlement will negatively impact the Credit/CIBIL score of <strong>both</strong> the primary borrower and the co-borrower.</p>
                   </div>
                   <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                      <h4 className="font-bold text-gray-800 mb-2">Guarantors</h4>
                      <p className="text-sm text-gray-600">A guarantor's liability is co-extensive with the borrower. If you settle, ensure the settlement letter explicitly releases the guarantor from all future liabilities. Otherwise, the bank might chase the guarantor for the remaining balance.</p>
                   </div>
                </div>
              </div>

              <div id="rbi-guidelines" className="my-10">
                <h2 className="text-3xl font-bold mb-6 text-[#0C2756]">RBI Guidelines & Your Rights</h2>
                <p>
                  The Reserve Bank of India (RBI) has laid down specific guidelines to protect borrowers during the settlement process.
                </p>
                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#0C2756] my-4">
                  <h5 className="font-bold text-lg mb-2">Fair Practices Code</h5>
                  <p>Banks must follow a Fair Practices Code. They cannot use abusive language, call at odd hours, or harass your family members for recovery. If they do, you have the right to file a complaint with the Banking Ombudsman.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#0C2756] my-4">
                  <h5 className="font-bold text-lg mb-2">Rights to Documents</h5>
                  <p>Recently, the RBI has mandated that banks must release original property documents within <strong>30 days</strong> of full repayment/settlement of the loan. Failure to do so attracts a penalty for the bank.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#0C2756] my-4">
                  <h5 className="font-bold text-lg mb-2">Transparent Settlement</h5>
                  <p>The settlement terms must be transparent. The bank cannot hide charges or spring surprise fees after the settlement letter is issued.</p>
                </div>
              </div>

              <div id="credit-score-impact" className="my-10">
                <h2 className="text-3xl font-bold mb-6 text-[#0C2756]">Impact on CIBIL and Credit Score</h2>
                <p>
                  This is the "cost" of settlement. When you settle a home loan, the bank reports it to credit bureaus like CIBIL, Experian, and Equifax.
                </p>
                <p>
                  Instead of marking the account as <strong>"Closed"</strong> (which means paid in full), they mark it as <strong>"Settled"</strong>. This flag indicates that the borrower did not pay the full amount and the lender took a loss.
                </p>
                
                <h4 className="font-bold text-lg mt-4 mb-2">Consequences:</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Score Drop:</strong> Your credit score can drop by 70 to 100 points or more.</li>
                  <li><strong>Future Loans:</strong> Getting a new loan (personal, car, or home) becomes extremely difficult for the next 7 years. Most banks automatically reject applications with a "Settled" tag.</li>
                  <li><strong>Credit Cards:</strong> You may find it hard to get premium credit cards or higher limits.</li>
                </ul>

                <p className="mt-4">
                  <strong>Can you fix this?</strong> Yes, but it takes time. You can convert a "Settled" status to "Closed" by approaching the bank later (when your finances improve) and paying the waived amount. Once paid, the bank can update the status to "Closed," removing the negative flag.
                </p>
              </div>

              <div id="pros-and-cons" className="my-10">
                <h2 className="text-3xl font-bold mb-6 text-[#0C2756]">Pros and Cons of Home Loan Settlement</h2>
                
                <div className="overflow-hidden border border-gray-200 rounded-xl shadow-sm">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Pros (Advantages)</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cons (Disadvantages)</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4">
                          <ul className="list-disc pl-4 space-y-2 text-sm">
                            <li className="text-green-700">Immediate relief from debt burden.</li>
                            <li className="text-green-700">Stops harassment from recovery agents.</li>
                            <li className="text-green-700">Avoids legal battles or strict legal action like SARFAESI.</li>
                            <li className="text-green-700">Lower payout amount (waiver of interest/penalties).</li>
                          </ul>
                        </td>
                        <td className="px-6 py-4">
                          <ul className="list-disc pl-4 space-y-2 text-sm">
                            <li className="text-red-700">Severe damage to Credit/CIBIL Score.</li>
                            <li className="text-red-700">"Settled" tag remains on report for ~7 years.</li>
                            <li className="text-red-700">Difficulty in getting future loans or credit cards.</li>
                            <li className="text-red-700">Possible tax implications on the waived amount.</li>
                          </ul>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div id="documents-required" className="my-10">
                <h2 className="text-3xl font-bold mb-6 text-[#0C2756]">Documents Required for Settlement</h2>
                <p>To process your settlement request smoothly, keep the following documents ready:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                  <div className="flex items-start">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mt-1 mr-3" />
                    <p><strong>Loan Documents:</strong> Original sanction letter, loan account statement.</p>
                  </div>
                  <div className="flex items-start">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mt-1 mr-3" />
                    <p><strong>KYC Documents:</strong> PAN Card, Aadhar Card, Address Proof.</p>
                  </div>
                  <div className="flex items-start">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mt-1 mr-3" />
                    <p><strong>Income Proof (Current):</strong> Bank statements showing lack of funds, salary slips (if any), or ITR.</p>
                  </div>
                  <div className="flex items-start">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mt-1 mr-3" />
                    <p><strong>Proof of Hardship:</strong> Medical bills, termination letter, death certificate, closure of business proof.</p>
                  </div>
                </div>
              </div>

               <div id="expert-tips" className="my-10">
                <h2 className="text-3xl font-bold mb-6 text-[#0C2756]">Expert Tips for Negotiation</h2>
                <div className="bg-[#EFF7FF] p-8 rounded-2xl">
                  <p className="mb-4">Negotiating with a bank requires patience and strategy. Here is how you can get the best deal:</p>
                  <ol className="list-decimal pl-6 space-y-3 font-medium text-gray-800">
                    <li><span className="font-bold text-[#0C2756]">Do not sound desperate:</span> While you must explain your hardship, do not agree to the first offer they make.</li>
                    <li><span className="font-bold text-[#0C2756]">Start low:</span> If you owe 10 Lakhs, start your offer at 3-4 Lakhs. The bank will negotiate up.</li>
                    <li><span className="font-bold text-[#0C2756]">Show intent to pay:</span> Convince them that the settlement amount is all you can arrange (from friends/family) and if they refuse, you might file for bankruptcy (insolvency), in which case they might get nothing.</li>
                    <li><span className="font-bold text-[#0C2756]">Get everything in writing:</span> Verbal promises from agents mean nothing. Only a signed letter on bank letterhead matters.</li>
                    <li><span className="font-bold text-[#0C2756]">Consult a Professional:</span> If the bank is being unreasonable, hiring a debt settlement agency (like CredSettle) can help. We know the legal loopholes and negotiation tactics to get you a fair deal.</li>
                  </ol>
                  <div className="mt-8 text-center">
                    <Link href="/contact" className="inline-block bg-[#0C2756] text-white px-8 py-3 rounded-lg font-bold hover:bg-opacity-90 transition-all">
                      Speak to a Settlement Expert
                    </Link>
                  </div>
                </div>
              </div>

              <div id="case-studies" className="my-10">
                 <h2 className="text-3xl font-bold mb-6 text-[#0C2756]">Real Life Scenarios (Examples)</h2>
                 <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                       <div className="flex items-center mb-3">
                          <div className="bg-blue-100 p-2 rounded-full mr-3"><FontAwesomeIcon icon={faFileAlt} className="text-blue-600" /></div>
                          <h4 className="font-bold text-gray-800">Case 1: Job Loss</h4>
                       </div>
                       <p className="text-sm text-gray-600 italic mb-2">"Ravi lost his IT job and couldn't pay EMI for 6 months. Loan outstanding: ₹60 Lakhs."</p>
                       <p className="text-sm text-gray-700"><strong>Outcome:</strong> Ravi approached the bank with proof of termination. He offered to settle using his PF withdrawal. The bank agreed to settle at ₹38 Lakhs (waiving interest and part principal). Status: "Settled".</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                       <div className="flex items-center mb-3">
                          <div className="bg-blue-100 p-2 rounded-full mr-3"><FontAwesomeIcon icon={faFileAlt} className="text-blue-600" /></div>
                          <h4 className="font-bold text-gray-800">Case 2: Medical Crisis</h4>
                       </div>
                       <p className="text-sm text-gray-600 italic mb-2">"Suresh faced a severe accident, leading to huge hospital bills. Loan outstanding: ₹45 Lakhs."</p>
                       <p className="text-sm text-gray-700"><strong>Outcome:</strong> Bank recognized the hardship. Instead of full settlement, they offered 12-month moratorium and restructured the loan to lower EMIs, avoiding the "Settled" tag.</p>
                    </div>
                 </div>
              </div>

              <div id="faqs" className="my-10 pt-10 border-t border-gray-200">
                <h2 className="text-3xl font-bold mb-8 text-[#0C2756]">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  <details className="group bg-white rounded-lg border border-gray-200">
                    <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-4 group-open:bg-gray-50 text-lg">
                      <span>Can I sell my house if I settle the loan?</span>
                      <span className="transition group-open:rotate-180">
                        <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                      </span>
                    </summary>
                    <div className="text-gray-600 p-4 pt-0 mt-2">
                      <p>Yes, once you pay the settlement amount and get the NOC and original deeds back from the bank, the lien on the property is removed. You become the full owner and can sell the property legally.</p>
                    </div>
                  </details>

                  <details className="group bg-white rounded-lg border border-gray-200">
                    <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-4 group-open:bg-gray-50 text-lg">
                      <span>Will the bank harass me after settlement?</span>
                      <span className="transition group-open:rotate-180">
                        <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                      </span>
                    </summary>
                    <div className="text-gray-600 p-4 pt-0 mt-2">
                      <p>No. Once the settlement is complete and you have the "No Dues Certificate" or NOC, the bank has no legal right to pursue you for the remaining balance. If they do, you can take legal action.</p>
                    </div>
                  </details>

                  <details className="group bg-white rounded-lg border border-gray-200">
                    <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-4 group-open:bg-gray-50 text-lg">
                      <span>Can I settle my loan if a court case is filed?</span>
                      <span className="transition group-open:rotate-180">
                         <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                      </span>
                    </summary>
                    <div className="text-gray-600 p-4 pt-0 mt-2">
                       <p>Yes. Settlement can happen at any stage, even during legal proceedings like SARFAESI or DRT cases. In fact, banks often prefer settlement to avoid long legal battles. The settlement terms will simply include a clause to withdraw the legal case.</p>
                    </div>
                  </details>

                  <details className="group bg-white rounded-lg border border-gray-200">
                    <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-4 group-open:bg-gray-50 text-lg">
                      <span>How long does the process take?</span>
                      <span className="transition group-open:rotate-180">
                         <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                      </span>
                    </summary>
                    <div className="text-gray-600 p-4 pt-0 mt-2">
                       <p>It depends on the negotiation. It typically takes anywhere from 2 weeks to 3 months to finalize the amount and process the paperwork.</p>
                    </div>
                  </details>
                  
                  <details className="group bg-white rounded-lg border border-gray-200">
                    <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-4 group-open:bg-gray-50 text-lg">
                      <span>Is there a minimum amount for settlement?</span>
                      <span className="transition group-open:rotate-180">
                         <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                      </span>
                    </summary>
                    <div className="text-gray-600 p-4 pt-0 mt-2">
                       <p>There is no fixed minimum, but banks rarely accept less than the principal amount unless the loan has been a Non-Performing Asset (NPA) for a very long time.</p>
                    </div>
                  </details>
                </div>
              </div>

            </article>
          </div>

          {/* Right Column - CTA & Related */}
          <div className="hidden lg:block w-1/4 min-w-[250px]">
             <div className="sticky top-24 space-y-6">
                
                {/* CTA Container */}
                <div className="bg-[#0C2756] rounded-xl p-6 text-white shadow-lg relative overflow-hidden">
                   <div className="absolute top-0 right-0 opacity-10 transform translate-x-1/2 -translate-y-1/2">
                      <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                         <circle cx="100" cy="100" r="100" fill="white" />
                      </svg>
                   </div>
                   <h3 className="text-xl font-bold mb-3 relative z-10">Struggling with Home Loan?</h3>
                   <p className="text-blue-100 text-sm mb-6 relative z-10">Don't let debt take over your life. Get expert legal advice on settlement today.</p>
                   <Link href="/contact" className="block w-full text-center bg-white text-[#0C2756] font-bold py-3 rounded-lg hover:bg-blue-50 transition-colors relative z-10">
                      Get Free Consultation
                   </Link>
                   <div className="mt-4 flex items-center justify-center gap-2 text-sm text-blue-200">
                      <FontAwesomeIcon icon={faPhone} className="w-4 h-4" />
                      <span>+91-9289707648</span>
                   </div>
                </div>

                {/* Related Pages Container */}
                <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
                   <h3 className="text-[#0C2756] font-bold mb-4 font-poppins text-lg border-b pb-2">Related Resources</h3>
                   <div className="flex flex-col gap-3">
                      <Link href="/loan-settlement" className="text-gray-600 hover:text-blue-600 text-sm transition-colors flex items-center">
                         <span className="w-1.5 h-1.5 rounded-full bg-blue-200 mr-2"></span>
                         Loan Settlement Services
                      </Link>
                      <Link href="/services/personal-loan-settlement" className="text-gray-600 hover:text-blue-600 text-sm transition-colors flex items-center">
                         <span className="w-1.5 h-1.5 rounded-full bg-blue-200 mr-2"></span>
                         Personal Loan Settlement
                      </Link>
                      <Link href="/services/anti-harassment" className="text-gray-600 hover:text-blue-600 text-sm transition-colors flex items-center">
                         <span className="w-1.5 h-1.5 rounded-full bg-blue-200 mr-2"></span>
                         Stop Harassment
                      </Link>
                      <Link href="/how-to-settle-loan" className="text-gray-600 hover:text-blue-600 text-sm transition-colors flex items-center">
                         <span className="w-1.5 h-1.5 rounded-full bg-blue-200 mr-2"></span>
                         How to Settle Loan
                      </Link>
                      <Link href="/what-is-npa" className="text-gray-600 hover:text-blue-600 text-sm transition-colors flex items-center">
                         <span className="w-1.5 h-1.5 rounded-full bg-blue-200 mr-2"></span>
                         What is NPA?
                      </Link>
                   </div>
                </div>

             </div>
          </div>
        </div>
      </div>

       {/* Bank Settlement Directory Grid */}
      <div className="max-w-[1440px] mx-auto px-4 py-12 border-t border-gray-200 mt-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Settlement Services by Bank</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {settlementBankLinks.map((bank) => (
            <Link 
              key={bank.href}
              href={bank.href}
              className="flex items-center p-4 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-300 transition-all group"
            >
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
              <span className="text-gray-700 font-medium group-hover:text-blue-700">{bank.name}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Areas We Serve In Grid */}
      <div className="max-w-[1440px] mx-auto px-4 py-12 border-t border-gray-200">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Areas We Serve In</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {areaLinks.map((area) => (
            <Link 
              key={area.href}
              href={area.href}
              className="flex items-center p-4 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-300 transition-all group"
            >
              <span className="w-2 h-2 bg-green-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
              <span className="text-gray-700 font-medium group-hover:text-blue-700">{area.name}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile CTA (Sticky Bottom) */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 z-50 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
        <div className="flex gap-3">
           <Link href="tel:+919289707648" className="flex-1 bg-white border border-[#0C2756] text-[#0C2756] font-bold py-3 rounded-lg text-center">
              Call Now
           </Link>
           <Link href="/contact" className="flex-1 bg-[#0C2756] text-white font-bold py-3 rounded-lg text-center">
              Settle Now
           </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
