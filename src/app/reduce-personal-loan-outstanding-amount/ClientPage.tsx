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
            Debt Reduction Framework
          </span>
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            How to Reduce Personal Loan Outstanding Amount in India
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Discover proven legal strategies to eliminate penal charges, remove accrued interest, and negotiate a steep reduction on your principal balance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-[#007AFF] hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-full transition-all shadow-lg text-lg">
              Calculate Your Debt Reduction
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
              Proven Strategies to Slash Your Loan Outstanding
            </h2>
            <div className="prose max-w-none text-gray-700 space-y-4 leading-relaxed">
              <p>
                When you default on personal loan EMIs, the outstanding balance can rapidly spiral due to compounding interest, late payment fees, and steep penal charges. In many instances, the inflated charges represent over 30% to 40% of the claimed debt.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
                <div className="p-5 bg-gray-50 rounded-xl border border-gray-200">
                  <h3 className="text-base font-bold text-[#0C2756] mb-2">1. Dispute Penal Charges</h3>
                  <p className="text-xs text-gray-600">
                    Under recent RBI fair lending practice rules, banks cannot compound penal interest. Advocates can demand an immediate reversal of unfair penal levies.
                  </p>
                </div>
                <div className="p-5 bg-gray-50 rounded-xl border border-gray-200">
                  <h3 className="text-base font-bold text-[#0C2756] mb-2">2. Seek Pure Principal OTS</h3>
                  <p className="text-xs text-gray-600">
                    In deep default scenarios, compromise committees are authorized to waive 100% of accumulated interest and settle for a fraction of the original principal.
                  </p>
                </div>
                <div className="p-5 bg-gray-50 rounded-xl border border-gray-200">
                  <h3 className="text-base font-bold text-[#0C2756] mb-2">3. Lok Adalat Compromise</h3>
                  <p className="text-xs text-gray-600">
                    Submitting your case to National Lok Adalat presided over by retired judges often results in instant 50%+ reductions with zero court fees and finality of decree.
                  </p>
                </div>
              </div>

              <h3 className="text-xl font-bold text-[#0C2756] mt-8 mb-4">
                Step-by-Step Action Plan for Debt Reduction
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Obtain Foreclosure Statement:</strong> Request an official account breakdown showing the segregation of principal, regular interest, and penal charges.</li>
                <li><strong>Audit Interest Computations:</strong> Identify any post-default usurious interest rates that breach RBI usury ceilings.</li>
                <li><strong>Issue a Formal Hardship Petition:</strong> Submit a compromise settlement application proposing a realistic reduced sum backed by verifiable distress proofs.</li>
              </ul>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-xl mt-8">
              <h4 className="font-bold text-blue-950 mb-2">Stop Unchecked Accumulation</h4>
              <p className="text-sm text-gray-700 leading-relaxed">
                The longer an unpaid account lingers without formal representation, the more penal charges accumulate. Freezing interest growth through formal settlement negotiations is essential to protect your assets.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0C2756] mb-8 border-b pb-4">
              Frequently Asked Questions on Debt Reduction
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Can banks legally charge compound interest on penalties?
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  No. Under RBI guidelines effective April 2024, penal charges for non-compliance with loan terms must be treated as penalty and cannot be capitalized or added to the loan principal for compounding.
                </p>
              </div>
              <div className="border-t pt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  How much can CredSettle help reduce my total outstanding?
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Our legal team typically negotiates waivers ranging from 40% to 60% of the total claimed amount, eliminating all penal levies and achieving substantial principal write-offs.
                </p>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 mt-8">
              <h4 className="font-semibold text-[#0C2756] mb-2">Ready to Reduce Your Debt Burden?</h4>
              <p className="mb-4 text-sm text-gray-600">Connect with our debt reduction specialists to review your bank statements and negotiate immediate waivers.</p>
              <Link href="/contact" className="inline-block bg-[#0C2756] text-white font-medium py-2.5 px-6 rounded-lg hover:bg-blue-900 transition-colors text-sm">
                Get a Free Debt Audit
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
