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
            Legal & Financial Analysis
          </span>
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Tax Implications of Personal Loan Settlement in India
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto"> Understand whether a loan waiver or OTS haircut is considered taxable income under the Income Tax Act. 1961. </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-[#007AFF] hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-full transition-all shadow-lg text-lg">
              Consult a Legal Tax Advisor
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
              Is a Waived Loan Amount Taxable in India?
            </h2>
            <div className="prose max-w-none text-gray-700 space-y-4 leading-relaxed">
              <p> When you settle a One-Time closure (OTS) with a bank or NBFC. The lender agrees to waive a substantial portion of your main sum. Rates. penal charges. A key question that often arises is: <strong>Does the waived debt qualify as taxable income?</strong> </p>
              <p> The tax treatment of forgiven debt depends fully on the purpose and nature of the borrowing. Under Indian tax law. Loans are broadly bifurcated into <strong>own consumer borrowings</strong> and <strong>trade or firm borrowings</strong>. </p>

              <h3 className="text-xl font-bold text-[#0C2756] mt-8 mb-4"> 1. own Loans for own Use (Capital Receipt. Non-Taxable) </h3>
              <p> If a loan was obtained purely for own expenditures (such as medical treatment. Marriage expenses. Home renovation. general household consumption) and no tax deduction or depreciation was claimed against it in prior years: </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>The loan main sum is fundamentally a <strong>capital receipt</strong>Not revenue income.</li>
                <li>The waiver or remission of such own risk does not constitute income under Section 2(24) or Section 41(1) of the Income Tax Act.</li>
                <li>Multiple landmark rulings from the Supreme Court of India (including <em>CIT v. Mahindra & Mahindra Ltd.</em>) have reaffirmed that the remission of a loan taken for acquiring capital assets or own expenses cannot be taxed under Section 28(iv) as firm profits.</li>
              </ul>

              <h3 className="text-xl font-bold text-[#0C2756] mt-8 mb-4"> 2. firm Loans & trade Overdrafts (Taxable under Section 41(1) & 28(iv)) </h3>
              <p> Conversely. if an entrepreneur or firm borrows working capital or overdraft funds and previously claimed rates deductions under Section 36(1)(iii) as an allowable firm expenditure: </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Any subsequent waiver of that accrued rates constitutes a <strong>remission of a trading risk</strong> under Section 41(1) and is treated as taxable firm income in the money year of closure.</li>
                <li>Under recent amendments to Section 194R. Benefit or perquisite arising from firm or profession can attract withholding tax scrutiny if the loan was availed of for revenue operations.</li>
              </ul>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl mt-8">
              <h3 className="font-bold text-amber-900 mb-2">Important Advice for Salaried clients</h3>
              <p className="text-sm text-amber-800 leading-relaxed"> If you are a salaried individual settling an clean own loan or credit card. The amount waived by the bank is generally non-taxable. Yet. You must preserve your valid closure sanction letter and No Dues letter (NDC) to prove the capital nature of the transaction in the event of an automated inquiry under Section 133(6) from the Income Tax department. </p>
            </div>
          </div>

          {/* FAQs on Tax Implications */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0C2756] mb-8 border-b pb-4">
              Frequently Asked Questions Regarding Loan Settlement Taxes
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2"> Will my bank issue a Form 16A or deduct TDS on the settled amount? </h3>
                <p className="text-gray-600 leading-relaxed text-sm"> No. Banks and NBFCs do not deduct Tax Deducted at Source (TDS) when writing off or settling an clean retail own loan with an individual clients. </p>
              </div>
              <div className="border-t pt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2"> Do I need to disclose the settled amount in my Annual Information Statement (AIS)? </h3>
                <p className="text-gray-600 leading-relaxed text-sm"> Lenders report compromised debt resolutions to credit bureaus (CIBIL. Experian). Not straight as taxable income to the CBDT. If specifically required during high-value asset scrutiny. The waiver can be shown under &apos. Exempt Income&apos. as a capital receipt. </p>
              </div>
              <div className="border-t pt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2"> What papers should I preserve for tax safety after closure? </h3>
                <p className="text-gray-600 leading-relaxed text-sm"> Keep copies of your original loan sanction pacts. Payment proof of the agreed OTS amount (bank statement or RTGS receipt). The bank&apos. s formal closure approval letter. the final No Dues letter for a minimum of six money years. </p>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 mt-8">
              <h3 className="font-semibold text-[#0C2756] mb-2">Have exact Questions About Your Loan Default?</h3>
              <p className="mb-4 text-sm text-gray-600">Our money counsel ensure your closure is by law watertight and shielded against future tax and civil claims disputes.</p>
              <Link href="/contact" className="inline-block bg-[#0C2756] text-white font-medium py-2.5 px-6 rounded-lg hover:bg-blue-900 transition-colors text-sm">
                Speak with a Financial Legal Expert
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
