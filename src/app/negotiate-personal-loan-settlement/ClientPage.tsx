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
            Professional Negotiation Strategy
          </span>
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            How to Negotiate a Personal Loan Settlement with Banks
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Learn the exact negotiation tactics, documentation rules, and psychological levers required to secure up to a 60% waiver on unsecured personal loans.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-[#007AFF] hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-full transition-all shadow-lg text-lg">
              Get Professional Negotiation Help
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
              Core Principles of Personal Loan Settlement Negotiation
            </h2>
            <div className="prose max-w-none text-gray-700 space-y-4 leading-relaxed">
              <p>
                Negotiating an unsecured personal loan settlement in India is a formal financial and legal procedure, not an emotional dispute. Commercial banks write off billions in Non-Performing Assets (NPAs) annually, but obtaining an optimal waiver requires navigating internal bank hierarchy and credit risk provisioning cycles.
              </p>

              <h3 className="text-xl font-bold text-[#0C2756] mt-8 mb-4">
                1. Timing Your Negotiation Window
              </h3>
              <p>
                Banks will not entertain settlement during early default (1 to 60 days). The ideal window begins once the account has crossed 90 days past due (NPA classification) and approaches 150–180 days. Around financial quarter-ends (especially March and September), branch managers and circle debt heads have urgent NPA reduction targets and higher discretionary waiver limits.
              </p>

              <h3 className="text-xl font-bold text-[#0C2756] mt-8 mb-4">
                2. Bypassing Third-Party Recovery Agencies
              </h3>
              <p>
                Third-party collection agents operate on commissions and will use aggressive pressure tactics to collect partial payments. Never negotiate final settlement figures with external collection tele-callers. Always insist on dealing with the bank&apos;s internal Delinquent Asset Division (DAD) or circle credit manager.
              </p>

              <h3 className="text-xl font-bold text-[#0C2756] mt-8 mb-4">
                3. Establishing Genuine Insolvency
              </h3>
              <p>
                Under Reserve Bank of India (RBI) prudential guidelines, banks can only approve compromise settlements if the borrower demonstrates verifiable inability to pay. Provide concrete evidence:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Salary reduction slips or termination letters from your employer.</li>
                <li>Hospitalization records, medical invoices, or chronic illness proofs.</li>
                <li>GST cancellation or audited balance sheets showing business winding up.</li>
              </ul>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-xl mt-8">
              <h4 className="font-bold text-blue-950 mb-2">The Golden Rule: Written Approval First</h4>
              <p className="text-sm text-gray-700 leading-relaxed">
                Never transfer money based on verbal promises or WhatsApp messages. Ensure you hold a physical or cryptographically signed One-Time Settlement (OTS) sanction letter on the bank&apos;s official letterhead with the authorized signatory&apos;s employee code.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0C2756] mb-8 border-b pb-4">
              Frequently Asked Questions on Loan Negotiation
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  What is a realistic waiver percentage on personal loans?
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  On unsecured personal loans with deep default (over 180 days), realistic settlements typically conclude between 40% and 55% of the total outstanding amount, effectively waiving 100% of accumulated penal interest and a notable portion of principal.
                </p>
              </div>
              <div className="border-t pt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Can an advocate negotiate on my behalf?
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Yes. Appointing a legal representative stops abusive collection agent calls under RBI guidelines and allows experienced advocates to represent your case before the bank&apos;s compromise committee.
                </p>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 mt-8">
              <h4 className="font-semibold text-[#0C2756] mb-2">Let Senior Advocates Negotiate Your Debt</h4>
              <p className="mb-4 text-sm text-gray-600">CredSettle provides institutional legal backing to stop harassment and achieve maximum waivers on your personal loans.</p>
              <Link href="/contact" className="inline-block bg-[#0C2756] text-white font-medium py-2.5 px-6 rounded-lg hover:bg-blue-900 transition-colors text-sm">
                Get a Free Negotiation Evaluation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
