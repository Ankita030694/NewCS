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
            Regulatory Framework
          </span>
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            RBI Guidelines on Personal Loan Settlement & Recovery
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            A comprehensive guide to your legal rights under the Reserve Bank of India’s Fair Practices Code and Compromise Settlement Framework.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-[#007AFF] hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-full transition-all shadow-lg text-lg">
              Protect Your Rights Today
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
              Key RBI Directives Governing Debt Settlement in India
            </h2>
            <div className="prose max-w-none text-gray-700 space-y-4 leading-relaxed">
              <p>
                The Reserve Bank of India (RBI) has issued clear regulatory directives to ensure that debt recovery and compromise settlements are conducted transparently, ethically, and without harassment. Borrowers facing personal loan default have robust statutory protections.
              </p>

              <h3 className="text-xl font-bold text-[#0C2756] mt-8 mb-4">
                1. Framework for Compromise Settlements (June 2023 Circular)
              </h3>
              <p>
                Under the RBI Master Circular on Compromise Settlements and Technical Write-offs, Regulated Entities (REs)—including all scheduled commercial banks, NBFCs, and cooperative banks—are mandated to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Maintain clear, board-approved policies for undertaking compromise settlements with delinquent borrowers.</li>
                <li>Ensure transparent delegation of power for approving haircuts across managerial grades.</li>
                <li>Permit compromise settlements with genuine defaulters who suffer financial distress, granting a minimum cooling period before fresh borrowing eligibility.</li>
              </ul>

              <h3 className="text-xl font-bold text-[#0C2756] mt-8 mb-4">
                2. RBI Code of Conduct for Recovery Agents
              </h3>
              <p>
                Under the RBI Fair Practices Code, banks and their outsourced recovery agents are strictly prohibited from violating borrower dignity:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Permissible Calling Hours:</strong> Recovery calls or visits are strictly confined to 8:00 AM to 7:00 PM. Calls at night or early morning are illegal.</li>
                <li><strong>No Intimidation or Abuse:</strong> Use of threatening language, humiliation in front of family or neighbors, or unannounced visits to workplaces is strictly forbidden.</li>
                <li><strong>Right to Privacy:</strong> Calling friends, relatives, or office colleagues regarding a personal debt violates RBI privacy mandates.</li>
              </ul>
            </div>

            <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-xl mt-8">
              <h4 className="font-bold text-red-950 mb-2">Escalation Mechanism for RBI Violations</h4>
              <p className="text-sm text-red-800 leading-relaxed">
                If a lender or agent breaches these rules, borrowers have the legal right to file a formal complaint with the Bank&apos;s Principal Nodal Officer and escalate to the RBI Integrated Ombudsman via the Complaint Management System (CMS).
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0C2756] mb-8 border-b pb-4">
              Frequently Asked Questions About RBI Settlement Rules
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Does RBI mandate a fixed minimum settlement amount?
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  No. The RBI provides regulatory guidelines for fair compromise, but the exact waiver percentage is determined by each lender&apos;s internal credit committee based on the borrower&apos;s financial hardship and security status.
                </p>
              </div>
              <div className="border-t pt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Can banks refuse to issue an NDC after receiving settlement funds?
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Under RBI directives, once a compromise settlement is honored as per the sanction letter, the bank is legally obligated to issue a No Dues Certificate and update credit bureaus within 30 days.
                </p>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 mt-8">
              <h4 className="font-semibold text-[#0C2756] mb-2">Ensure Full RBI Compliance with CredSettle</h4>
              <p className="mb-4 text-sm text-gray-600">Our legal team holds lenders accountable to RBI directives, ensuring ethical debt resolution without unlawful harassment.</p>
              <Link href="/contact" className="inline-block bg-[#0C2756] text-white font-medium py-2.5 px-6 rounded-lg hover:bg-blue-900 transition-colors text-sm">
                Consult an RBI Banking Lawyer
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
