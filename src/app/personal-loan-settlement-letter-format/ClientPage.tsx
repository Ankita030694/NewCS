'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function ClientPage() {
  const [copied, setCopied] = useState(false);

  const letterTemplate = `To,
The Branch Manager / Delinquent Asset Recovery Division,
[Name of Bank / NBFC],
[Branch Address / Regional Office Address],
[City, State, PIN Code]

Date: [DD/MM/YYYY]

Subject: Formal Request for One-Time Settlement (OTS) for Personal Loan Account No: [Your Loan Account Number]

Respected Sir / Madam,

I am writing this application with reference to my Personal Loan Account Number [Your Loan Account Number], sanctioned by your esteemed institution on [Sanction Date] for a principal sum of Rs. [Sanctioned Loan Amount].

I have maintained an unblemished repayment track record with your bank for several years. However, due to unforeseen and severe financial distress caused by [Mention Reason: unexpected job loss / catastrophic medical emergency in the family / severe business loss], my primary source of livelihood has been severely disrupted since [Month, Year]. Despite my sincere intentions and numerous personal sacrifices, I am no longer in a position to service the regular equated monthly installments (EMIs) of Rs. [Monthly EMI Amount].

As on date, the total outstanding balance reflected against my account stands at Rs. [Total Claimed Outstanding Amount], which includes substantial penal interest and late payment charges. Given my current insolvency and absolute lack of alternative liquid assets, I am writing to humbly propose an amicable One-Time Settlement (OTS) under the Reserve Bank of India’s guidelines on compromise settlements.

I have arranged financial support from close family relatives who are willing to assist me with a one-time lump sum payment of Rs. [Proposed Settlement Amount in Figures] (Rupees [Proposed Amount in Words] Only) towards the full and final discharge of all my liabilities under this loan facility. This proposed sum represents the absolute maximum capital I can raise under my present circumstances.

I kindly request your good office to:
1. Consider my genuine financial hardship favorably and accept the proposed OTS amount of Rs. [Proposed Settlement Amount].
2. Waive all accumulated penal interest, penal fees, and legal processing charges.
3. Issue an official One-Time Settlement Sanction Letter on bank letterhead detailing the accepted amount, payment mode, and due date.
4. Issue a formal 'No Dues Certificate' (NDC) and closure certificate upon receipt of the agreed settlement sum, and initiate the corresponding update to credit information bureaus (CIBIL, Experian, CRIF High Mark).

Enclosed herewith are relevant documentary proofs supporting my financial hardship (copy of termination letter / medical bills / recent bank statements).

I look forward to your positive and prompt consideration of this mutual resolution.

Yours sincerely,

[Your Full Legal Name]
[Signature]
[Complete Postal Address]
[Mobile Number]
[Email Address]`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(letterTemplate);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <main className="w-full">
      <section className="relative text-white pt-32 pb-20 px-4 md:px-8 overflow-hidden" style={{ backgroundColor: '#0C2756' }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/pattern-bg.svg')] bg-repeat opacity-20"></div>
        </div>
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <span className="inline-block py-1.5 px-4 rounded-full bg-blue-500/20 text-blue-200 text-xs font-bold mb-4 tracking-widest uppercase border border-blue-400/30">
            Free Legal Template & Guide
          </span>
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">Personal Loan Settlement Letter Format</h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Download or copy our legally vetted One-Time Settlement (OTS) proposal template to formally communicate with your bank manager or recovery division.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-[#007AFF] hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-full transition-all shadow-lg text-lg">
              Get Expert Negotiation Help
            </Link>
            <a href="tel:+918800226635" className="bg-white text-[#0C2756] hover:bg-gray-100 font-bold py-4 px-8 rounded-full transition-all shadow-lg text-lg flex items-center justify-center">
              Call +91 8800226635
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto space-y-10">
          {/* Letter Template Box */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 border-b pb-4">
              <div>
                <h2 className="text-2xl font-bold text-[#0C2756]">Official OTS Proposal Letter Template</h2>
                <p className="text-sm text-gray-500 mt-1">Copy and customize the text in brackets [ ] before submitting to your bank.</p>
              </div>
              <button
                onClick={copyToClipboard}
                className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg shadow transition-all flex items-center gap-2 flex-shrink-0"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                </svg>
                {copied ? 'Copied to Clipboard!' : 'Copy Template'}
              </button>
            </div>

            <pre className="bg-gray-50 border border-gray-200 rounded-xl p-6 text-sm text-gray-800 font-mono whitespace-pre-wrap overflow-x-auto leading-relaxed">
              {letterTemplate}
            </pre>
          </div>

          {/* Drafting Guidelines */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0C2756] mb-6">
              Crucial Rules When Submitting a Settlement Application
            </h2>
            <div className="prose max-w-none text-gray-700 space-y-4 leading-relaxed">
              <p>
                Drafting a settlement proposal letter is a legally binding step in negotiating with financial institutions. In India, under the framework of the Reserve Bank of India (RBI) circular on compromise settlements, banks have clear authority to approve haircuts, but their credit committees require robust documentation.
              </p>
              <h3 className="text-xl font-semibold text-[#0C2756] mt-6 mb-3">Key Elements Bank Officers Look For:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Clear Proof of Genuine Hardship:</strong> Banks will reject frivolous requests from borrowers with visible repayment capacity. Attach salary slips demonstrating a pay cut, termination letters, medical diagnosis records, or GST filings showing business closure.</li>
                <li><strong>Realistic Settlement Offer:</strong> Offering 10% on a recently defaulted unsecured loan will be summarily rejected. A realistic initial proposal usually falls between 35% and 50% of the principal outstanding.</li>
                <li><strong>Explicit Request for No Dues Certificate:</strong> Ensure your letter demands written confirmation that the bank will issue an NDC and refrain from selling the residual debt to asset reconstruction companies (ARCs).</li>
                <li><strong>Submission Channel:</strong> Always submit this letter via Registered Post with Acknowledgement Due (RPAD) or send it to the bank&apos;s official nodal grievance email address so you hold an indisputable audit trail.</li>
              </ul>
            </div>

            {/* CTA Box */}
            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 mt-8">
              <h4 className="font-semibold text-[#0C2756] mb-2">Need Professional Legal Assistance?</h4>
              <p className="mb-4 text-sm text-gray-600">Our senior advocates negotiate directly with regional bank decision-makers, shielding you from collection agents and securing the highest possible waiver.</p>
              <Link href="/contact" className="inline-block bg-[#0C2756] text-white font-medium py-2.5 px-6 rounded-lg hover:bg-blue-900 transition-colors text-sm">
                Get a Lawyer to Draft Your Settlement
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
