'use client';

import React from 'react';
import Link from 'next/link';

export default function ClientPage() {
  return (
    <main className="w-full">
      <section className="relative text-white pt-32 pb-20 px-4 md:px-8 overflow-hidden" style={{ backgroundColor: '#0C2756' }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/pattern-bg.svg')] bg-repeat opacity-20"></div>
        </div>
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <span className="inline-block py-1.5 px-4 rounded-full bg-blue-500/20 text-blue-200 text-xs font-bold mb-4 tracking-widest uppercase border border-blue-400/30">
            One-Time Settlement (OTS)
          </span>
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Personal Loan One-Time Settlement (OTS) in India
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Close your personal loan forever through a legally binding One-Time Settlement. Clear unpaid balances, halt legal notices, and receive your No Dues Certificate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-[#007AFF] hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-full transition-all shadow-lg text-lg">
              Explore One-Time Settlement
            </Link>
            <a href="tel:+918800226635" className="bg-white text-[#0C2756] hover:bg-gray-100 font-bold py-4 px-8 rounded-full transition-all shadow-lg text-lg flex items-center justify-center">
              Call +91 8800226635
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto space-y-10">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0C2756] mb-6">
              What is a Personal Loan One-Time Settlement (OTS)?
            </h2>
            <div className="prose max-w-none text-gray-700 space-y-4 leading-relaxed">
              <p>
                A One-Time Settlement (OTS) is an official compromise contract executed between a defaulting borrower and a lending institution. Under an approved OTS, the bank agrees to accept a significantly reduced lump sum amount in full satisfaction of the entire loan liability, forgiving the residual balance.
              </p>

              <h3 className="text-xl font-bold text-[#0C2756] mt-8 mb-4">
                Benefits of a Formal OTS Agreement:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                <div className="p-5 bg-blue-50/50 rounded-xl border border-blue-100">
                  <h4 className="font-bold text-[#0C2756] mb-1">Total Liability Discharge</h4>
                  <p className="text-xs text-gray-600">
                    Once the agreed OTS sum is deposited, the bank cannot pursue any civil recovery suits, arbitration claims, or execution petitions against you.
                  </p>
                </div>
                <div className="p-5 bg-blue-50/50 rounded-xl border border-blue-100">
                  <h4 className="font-bold text-[#0C2756] mb-1">Substantial Financial Waivers</h4>
                  <p className="text-xs text-gray-600">
                    OTS agreements routinely waive 100% of accumulated penal interest, overdue charges, legal expenses, and a major proportion of outstanding principal.
                  </p>
                </div>
                <div className="p-5 bg-blue-50/50 rounded-xl border border-blue-100">
                  <h4 className="font-bold text-[#0C2756] mb-1">Immediate Cessation of Harassment</h4>
                  <p className="text-xs text-gray-600">
                    Signing an OTS permanently halts collection agency communications, home visits, and automated tele-calling campaigns.
                  </p>
                </div>
                <div className="p-5 bg-blue-50/50 rounded-xl border border-blue-100">
                  <h4 className="font-bold text-[#0C2756] mb-1">Issuance of No Dues Certificate</h4>
                  <p className="text-xs text-gray-600">
                    The bank provides a formal NDC within 30 days, officially certifying that you hold no further liabilities under the loan facility.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl mt-8">
              <h4 className="font-bold text-amber-950 mb-2">Upgrading Settled to Closed</h4>
              <p className="text-sm text-amber-800 leading-relaxed">
                When an OTS is executed, credit bureaus reflect the status as &apos;Settled&apos;. Later, when your financial position improves, you can upgrade the status to &apos;Closed&apos; by paying the differential waiver amount to restore your CIBIL score to 750+.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0C2756] mb-8 border-b pb-4">
              Frequently Asked Questions About Personal Loan OTS
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Can an OTS be arranged for multiple loans at once?
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Yes, CredSettle handles multi-creditor debt portfolios, negotiating parallel OTS agreements across all your banking and NBFC relationships.
                </p>
              </div>
              <div className="border-t pt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  How is an OTS payment deposited?
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Settlement payments must strictly be made directly to the bank via official NEFT, RTGS, or demand draft drawn in the name of the bank, credited into your specific loan account.
                </p>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 mt-8">
              <h4 className="font-semibold text-[#0C2756] mb-2">Secure Your One-Time Settlement Today</h4>
              <p className="mb-4 text-sm text-gray-600">Our advocates represent you before top banks across India to finalize legally watertight OTS agreements.</p>
              <Link href="/contact" className="inline-block bg-[#0C2756] text-white font-medium py-2.5 px-6 rounded-lg hover:bg-blue-900 transition-colors text-sm">
                Get an OTS Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
