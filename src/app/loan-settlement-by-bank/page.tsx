import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import banksData from './banks.json';
export const metadata: Metadata = {
    alternates: { canonical: 'https://www.credsettle.com/loan-settlement-by-bank' },
    title: 'Loan Settlement by Bank | Debt Relief | CredSettle',
    description: 'Settle bank and NBFC loans legally. Find settlement policies, contact details, and RBI-compliant procedures for 129+ banks across India.',
    openGraph: {
        title: 'Loan Settlement by Bank | Debt Relief | CredSettle',
        description: 'Settle bank and NBFC loans legally. Find settlement policies, contact details, and RBI-compliant procedures for 129+ banks across India.',
        url: 'https://www.credsettle.com/loan-settlement-by-bank',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Loan Settlement by Bank | Debt Relief | CredSettle',
        description: 'Settle bank and NBFC loans legally. Find settlement policies, contact details, and RBI-compliant procedures for 129+ banks across India.',
    },
};
export default function LoanSettlementPage() {
    const getSlug = (name: string) => name.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
    const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://www.credsettle.com/',
            },
            {
                '@type': 'ListItem',
                position: 2,
                name: 'Loan Settlement by Bank',
                item: 'https://www.credsettle.com/loan-settlement-by-bank',
            },
        ],
    };
    const collectionSchema = {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: 'Loan Settlement by Bank & Financial Institution',
        description: 'Directory of loan settlement procedures, legal options, and guidelines across 129+ banks and NBFCs in India.',
        url: 'https://www.credsettle.com/loan-settlement-by-bank',
        mainEntity: {
            '@type': 'ItemList',
            numberOfItems: banksData.length,
            itemListElement: banksData.slice(0, 30).map((bank, index) => ({
                '@type': 'ListItem',
                position: index + 1,
                name: `${bank.company} Loan Settlement`,
                url: `https://www.credsettle.com/loan-settlement-by-bank/${getSlug(bank.company)}`,
            })),
        },
    };
    return (<div className="bg-gray-50 min-h-screen">
      <Script id="bank-hub-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}/>
      <Script id="bank-hub-collection-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}/>
      <Navbar />

      {/* Hero Section */}
      <section className="relative text-white pt-32 pb-20 px-4 md:px-8" style={{
            background: 'radial-gradient(136.19% 254.89% at -1.53% 10.35%, #2F6CE2 0%, #001235 100%)',
            minHeight: '40vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
        <div className="max-w-6xl mx-auto text-center z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Partner Banks & Institutions</h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Find your bank in the list below. We help you talk to your lender and settle your loan fast. Get legal debt relief, stop collection calls, and secure your official bank closure letter.
          </p>
        </div>
      </section>

      {/* Banks Grid Section */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-4">
            Settle Loans by Bank
          </h2>
          <p className="text-gray-600 mb-6 text-sm">
            Choose your bank to read its settlement policy. Our legal team helps you resolve debts safely under RBI rules.
          </p>

          {/* 5-column layout grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {banksData.map((bank, index) => (<Link key={index} href={`/loan-settlement-by-bank/${getSlug(bank.company)}`} className="group flex items-center p-4 border border-gray-100 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all duration-200">
                <span className="text-sm font-medium text-gray-700 group-hover:text-blue-700 truncate">
                  {bank.company}
                </span>
                <svg className="w-4 h-4 ml-auto text-gray-300 group-hover:text-blue-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="9 5l7 7-7 7"/>
                </svg>
              </Link>))}
          </div>
        </div>
      </section>

      {/* Guide Section */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Understanding Bank Loan Settlement in India
          </h2>
          <div className="prose max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>
              Money problems like job loss, medical crises, or business losses can make it hard to pay monthly EMIs. In such cases, an official <strong>One-Time Settlement (OTS)</strong> offers a legal way to close unsecured debts. Under Reserve Bank of India (RBI) rules, banks and NBFCs have clear policies to agree on reduced lump-sum settlements.
            </p>
            <p>
              Settlement rules differ based on the lender type. <strong>Public Sector Banks (such as SBI, PNB, and Bank of Baroda)</strong> mostly work under board-approved schemes or Lok Adalats. They require clear proof of hardship. In contrast, <strong>Private Banks (such as HDFC, ICICI, and Axis Bank)</strong> and digital NBFCs allow internal teams to approve waivers on interest and penalty fees. They often close settlements within 30 to 60 days.
            </p>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">
            Critical Steps in Securing a Bank Loan Settlement
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
            <div className="p-5 bg-blue-50/60 rounded-xl border border-blue-100">
              <h4 className="font-semibold text-blue-950 mb-2">1. Default & Hardship Proof</h4>
              <p className="text-sm text-gray-600">
                Banks review settlement offers once an account enters NPA status (90 days overdue). You should share proof of income loss, medical costs, or business losses.
              </p>
            </div>
            <div className="p-5 bg-blue-50/60 rounded-xl border border-blue-100">
              <h4 className="font-semibold text-blue-950 mb-2">2. Direct Negotiation</h4>
              <p className="text-sm text-gray-600">
                Our legal team talks directly with bank managers. We bypass third-party agents to seek 40% to 60% principal waivers for you.
              </p>
            </div>
            <div className="p-5 bg-blue-50/60 rounded-xl border border-blue-100">
              <h4 className="font-semibold text-blue-950 mb-2">3. Sanction Letter & NDC</h4>
              <p className="text-sm text-gray-600">
                Never pay money without a formal settlement letter on the bank&apos;s letterhead. After payment, always get your official No Dues Certificate (NDC).
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 border-b pb-4">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Can banks file police cases for personal loan default?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                No. In India, default on an unsecured personal loan or credit card is a civil dispute. It is not a crime. Banks cannot file police cases for non-payment unless there is clear proof of fraud or forgery.
              </p>
            </div>
            <div className="border-t pt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                How much waiver can you expect from your lender?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Waiver rates depend on the default period and hardship proof. For unsecured personal loans and credit cards past 180 days, settlements often close between 40% and 60% of the total balance.
              </p>
            </div>
            <div className="border-t pt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                What is the impact of an OTS on your CIBIL score?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                When a loan is settled for less than the full amount, the bank reports the account as &quot;Settled&quot; instead of &quot;Closed&quot;. This causes a temporary score drop. You can upgrade the status to &quot;Closed&quot; later by paying the waived balance once your finances improve.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>);
}
