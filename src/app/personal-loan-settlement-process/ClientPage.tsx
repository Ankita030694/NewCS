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
            End-to-End Legal Process
          </span>
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Personal Loan Settlement Process in India (Step-by-Step)
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            A comprehensive overview of the complete loan settlement lifecycle from default notice to receiving your official No Dues Certificate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-[#007AFF] hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-full transition-all shadow-lg text-lg">
              Begin Settlement Process
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
              The 5 Crucial Stages of Personal Loan Settlement
            </h2>
            <div className="prose max-w-none text-gray-700 space-y-4 leading-relaxed">
              <p>
                Settling an unsecured personal loan follows a well-defined statutory trajectory governed by Reserve Bank of India guidelines. Understanding each stage empowers borrowers to avoid legal pitfalls and achieve maximum financial relief.
              </p>

              <div className="space-y-6 my-6">
                <div className="p-5 bg-gray-50 rounded-xl border border-gray-200">
                  <h3 className="text-base font-bold text-[#0C2756] mb-1">Stage 1: Delinquency to NPA Classification (0 to 90 Days)</h3>
                  <p className="text-sm text-gray-600">
                    When consecutive installments are missed, the account enters Special Mention Account (SMA) categories. At 90 days of continuous non-payment, the loan is formally classified as a Non-Performing Asset (NPA).
                  </p>
                </div>

                <div className="p-5 bg-gray-50 rounded-xl border border-gray-200">
                  <h3 className="text-base font-bold text-[#0C2756] mb-1">Stage 2: Hardship Documentation & Grievance Representation</h3>
                  <p className="text-sm text-gray-600">
                    The borrower submits a formal written petition detailing valid financial catastrophe (medical incapacity, job termination, business insolvency) directly to the bank&apos;s Circle Recovery Cell.
                  </p>
                </div>

                <div className="p-5 bg-gray-50 rounded-xl border border-gray-200">
                  <h3 className="text-base font-bold text-[#0C2756] mb-1">Stage 3: Bilateral Committee Negotiation</h3>
                  <p className="text-sm text-gray-600">
                    Legal representatives negotiate with the bank&apos;s internal compromise settlement committee. Discussion centers on principal haircut percentage, waiver of penal interest, and payment timeframe.
                  </p>
                </div>

                <div className="p-5 bg-gray-50 rounded-xl border border-gray-200">
                  <h3 className="text-base font-bold text-[#0C2756] mb-1">Stage 4: Issuance of Formal Settlement Sanction Letter</h3>
                  <p className="text-sm text-gray-600">
                    The bank generates a legally binding OTS letter on letterhead specifying: the agreed settlement sum, installment schedule (if staggered), and commitment to discharge all claims.
                  </p>
                </div>

                <div className="p-5 bg-gray-50 rounded-xl border border-gray-200">
                  <h3 className="text-base font-bold text-[#0C2756] mb-1">Stage 5: Payment & No Dues Certificate (NDC) Issuance</h3>
                  <p className="text-sm text-gray-600">
                    Upon deposit of the settled sum directly into the loan account, the bank issues a final NDC within 30 days and notifies credit bureaus (CIBIL/Experian) to reflect the status as &apos;Settled&apos;.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-emerald-50 border-l-4 border-emerald-600 p-6 rounded-r-xl mt-8">
              <h4 className="font-bold text-emerald-950 mb-2">Notice Verification Guarantee</h4>
              <p className="text-sm text-emerald-800 leading-relaxed">
                Always ensure payment is made directly to the bank&apos;s designated account number through official banking channels (NEFT/RTGS/Cheque). Never hand cash to collection agents or transfer funds into third-party accounts.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0C2756] mb-8 border-b pb-4">
              Frequently Asked Questions About the Settlement Process
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  How long does the entire loan settlement process take?
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Typically between 30 and 60 days from formal representation to final sanction letter issuance, depending on the speed of the bank&apos;s credit committee approvals.
                </p>
              </div>
              <div className="border-t pt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Can a settlement be paid in multiple installments?
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Yes, banks frequently approve structured settlements split over 2 to 4 monthly installments for borrowers unable to raise a single lump sum.
                </p>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 mt-8">
              <h4 className="font-semibold text-[#0C2756] mb-2">Need Professional Assistance Through the Process?</h4>
              <p className="mb-4 text-sm text-gray-600">CredSettle manages every stage of your settlement process with complete legal transparency and RBI compliance.</p>
              <Link href="/contact" className="inline-block bg-[#0C2756] text-white font-medium py-2.5 px-6 rounded-lg hover:bg-blue-900 transition-colors text-sm">
                Get Expert Process Guidance
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
