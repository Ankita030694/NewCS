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
            Official Settlement Initiation
          </span>
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            How to Request a Personal Loan Settlement Offer from Banks
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            A practical guide to initiating an official One-Time Settlement offer, presenting your case to the credit committee, and securing a formal sanction.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-[#007AFF] hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-full transition-all shadow-lg text-lg">
              Request a Settlement Offer
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
              Initiating a Compromise Settlement Proposal
            </h2>
            <div className="prose max-w-none text-gray-700 space-y-4 leading-relaxed">
              <p>
                Requesting a One-Time Settlement (OTS) offer requires a formal approach. Initiating a request incorrectly can alert aggressive collection agencies or prompt premature legal notices under Section 138 of the Negotiable Instruments Act.
              </p>

              <h3 className="text-xl font-bold text-[#0C2756] mt-8 mb-4">
                Essential Steps in Requesting an OTS Offer:
              </h3>
              <div className="space-y-4 my-6">
                <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <h4 className="font-semibold text-[#0C2756]">1. Assess Your Capital Availability</h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Before requesting an offer, ascertain exactly how much lump sum capital you can arrange from personal savings, friends, or family. An offer without payment capacity weakens your negotiating leverage.
                  </p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <h4 className="font-semibold text-[#0C2756]">2. Draft a Formal Hardship Application</h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Submit a comprehensive letter to the Bank&apos;s Delinquent Asset Department stating your loan account number, financial hardship reasons, and a concrete proposed settlement amount.
                  </p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <h4 className="font-semibold text-[#0C2756]">3. Demand an Official Letterhead Sanction</h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Ensure the bank provides an authorized OTS sanction letter detailing the waived amount, payment date, and specific waiver clauses before any deposit is made.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-emerald-50 border-l-4 border-emerald-600 p-6 rounded-r-xl mt-8">
              <h4 className="font-bold text-emerald-950 mb-2">Legal Shield Against Harassment</h4>
              <p className="text-sm text-emerald-800 leading-relaxed">
                When you initiate an official settlement through CredSettle, our legal notice to the bank immediately halts unauthorized collection agent visits and ensures negotiations are conducted directly with bank officials.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0C2756] mb-8 border-b pb-4">
              Frequently Asked Questions About Settlement Offers
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Can a bank reject my settlement request?
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Yes, banks may initially reject an offer if the proposed amount is too low or if hardship documentation is inadequate. Experienced legal counsel counter-negotiates with revised proofs to gain committee approval.
                </p>
              </div>
              <div className="border-t pt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  What happens if I miss the settlement payment deadline?
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Missing the deadline specified in the OTS sanction letter can invalidate the waiver, reinstating full liability. Always request an installment timeline that you can fulfill with absolute certainty.
                </p>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 mt-8">
              <h4 className="font-semibold text-[#0C2756] mb-2">Initiate Your Settlement with Professional Advocates</h4>
              <p className="mb-4 text-sm text-gray-600">CredSettle prepares and files your formal OTS application with complete legal rigor, maximizing your discount.</p>
              <Link href="/contact" className="inline-block bg-[#0C2756] text-white font-medium py-2.5 px-6 rounded-lg hover:bg-blue-900 transition-colors text-sm">
                Request an OTS Proposal
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
