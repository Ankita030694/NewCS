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
            Borrower Protection Guide
          </span>
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            How to Respond to Bank Legal Notices & Stop Harassment
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Received a legal notice for personal loan default or facing harassment from recovery agents? Learn your constitutional rights and legal remedies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-[#007AFF] hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-full transition-all shadow-lg text-lg">
              Get an Advocate to Reply
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
              Types of Legal Notices Issued by Banks for Loan Default
            </h2>
            <div className="prose max-w-none text-gray-700 space-y-4 leading-relaxed">
              <p>
                When you miss three consecutive loan EMIs, your account is classified as a Non-Performing Asset (NPA). Before taking any statutory action, banks typically issue formal legal communications through panel advocates. It is crucial to distinguish between genuine legal processes and intimidation tactics.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
                <div className="p-5 bg-gray-50 rounded-xl border border-gray-200">
                  <h3 className="text-base font-bold text-[#0C2756] mb-2">Section 138 NI Act</h3>
                  <p className="text-xs text-gray-600">
                    Issued when a post-dated cheque (PDC) bounces due to insufficient funds. The notice gives 15 days to pay before a complaint can be filed in the Magistrate court.
                  </p>
                </div>
                <div className="p-5 bg-gray-50 rounded-xl border border-gray-200">
                  <h3 className="text-base font-bold text-[#0C2756] mb-2">Section 25 PSS Act</h3>
                  <p className="text-xs text-gray-600">
                    Pertains to electronic mandate or NACH mandate failure. Lenders use this provision to threaten quasi-criminal complaints if unpaid within the statutory window.
                  </p>
                </div>
                <div className="p-5 bg-gray-50 rounded-xl border border-gray-200">
                  <h3 className="text-base font-bold text-[#0C2756] mb-2">Arbitration Notice</h3>
                  <p className="text-xs text-gray-600">
                    Invokes the arbitration clause in the loan agreement under Section 21 of the Arbitration & Conciliation Act to obtain a unilateral ex-parte financial award.
                  </p>
                </div>
              </div>

              <h3 className="text-xl font-bold text-[#0C2756] mt-8 mb-4">
                How to Respond to an Advocate Legal Notice
              </h3>
              <p>
                <strong>Never ignore a genuine legal notice.</strong> Failing to reply allows the bank&apos;s lawyer to argue that you had no defense against their allegations. An experienced debt resolution advocate will:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Submit a formal, registered legal reply denying false allegations of willful default or fraud.</li>
                <li>Detail verifiable financial hardships (medical conditions, job loss, insolvency) to demonstrate absence of <em>mens rea</em> (criminal intent).</li>
                <li>Highlight violations of the RBI Fair Practices Code committed by recovery agents (calling at odd hours, abusive language, contacting friends/family).</li>
                <li>Propose an amicable One-Time Settlement (OTS) to resolve the matter outside of protracted litigation.</li>
              </ul>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl mt-8">
              <h4 className="font-bold text-red-900 mb-2">Beware of Fake Recovery Agent Notices</h4>
              <p className="text-sm text-red-800 leading-relaxed">
                Collection agencies frequently circulate fraudulent letters titled &apos;Court Warrant&apos;, &apos;Police Arrest Notice&apos;, or &apos;Immediate Seizure Order&apos; via WhatsApp or unverified email. Police cannot arrest you for personal loan or credit card default without a direct warrant from a competent judicial magistrate.
              </p>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0C2756] mb-8 border-b pb-4">
              Frequently Asked Questions on Recovery Harassment & Notices
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  What are the permissible calling hours for recovery agents under RBI rules?
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Under the RBI Master Direction on loan recovery, collection agents are strictly prohibited from calling or visiting borrowers before 8:00 AM and after 7:00 PM. Visiting your workplace or contacting your neighbors is illegal.
                </p>
              </div>
              <div className="border-t pt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Can recovery agents seize household items for unsecured personal loans?
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  No. Personal loans and credit cards are unsecured debts without any hypothecation or mortgage. Recovery agents have zero authority to enter your residence or seize appliances, vehicles, or personal property.
                </p>
              </div>
              <div className="border-t pt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Where can I lodge a complaint against recovery agent harassment?
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  You can file a formal complaint with the Bank&apos;s Principal Nodal Officer, escalate to the RBI Integrated Ombudsman (cms.rbi.org.in), and lodge an FIR under IPC Section 503/506 for criminal intimidation.
                </p>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 mt-8">
              <h4 className="font-semibold text-[#0C2756] mb-2">Stop Harassment and Legal Threats Today</h4>
              <p className="mb-4 text-sm text-gray-600">Our advocates represent you legally, stop abusive phone calls, and negotiate a clean debt settlement on your behalf.</p>
              <Link href="/contact" className="inline-block bg-[#0C2756] text-white font-medium py-2.5 px-6 rounded-lg hover:bg-blue-900 transition-colors text-sm">
                Get Immediate Legal Protection
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
