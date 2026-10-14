'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import StatsStrip from '@/components/StatsStrip';
import CompanySection from '@/components/CompanySection';
import { ChevronDown, Scale, ExternalLink, ShieldCheck, CheckCircle2, AlertTriangle, FileText, HelpCircle, TrendingUp, Award, BookOpen, Building2, DollarSign, Check, Lock, Phone, AlertCircle, CreditCard, Briefcase, Bookmark, ArrowRight, Clock, UserCheck, Sparkles, Gavel, BadgeAlert, Landmark } from 'lucide-react';
export default function HdfcPersonalLoanSettlementPolicyClient() {
    const [activeId, setActiveId] = useState<string>('quick-crux');
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveId(entry.target.id);
                }
            });
        }, {
            rootMargin: '-100px 0px -40% 0px',
            threshold: 0.05
        });
        const headings = document.querySelectorAll('section[id], div[id].scroll-target');
        headings.forEach((heading) => observer.observe(heading));
        return () => {
            headings.forEach((heading) => observer.unobserve(heading));
        };
    }, []);
    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };
    const navLinks = [
        { id: 'quick-crux', label: 'Executive Brief & Crux' },
        { id: 'npa-dynamics', label: '1. Debt Economics & NPA Classification' },
        { id: 'settlement-math', label: '2. Financial Breakdown & Settlement Math' },
        { id: 'comparison-matrix', label: '3. Resolution Options Comparison Matrix' },
        { id: 'cibil-impact', label: '4. CIBIL Algorithm & Credit Rebuilding' },
        { id: 'infographic-overview', label: 'Visual Institutional Blueprint' },
        { id: 'step-by-step-sop', label: '6. 6-Stage Institutional Settlement SOP' },
        { id: 'statutory-defense', label: '7. Statutory Notice Defense & Legal Rights' },
        { id: 'escalation-matrix', label: '8. 3-Tier Grievance & Escalation Matrix' },
        { id: 'chronological-timeline', label: '9. Procedural Milestones & Timelines' },
        { id: 'specialized-scenarios', label: '10. Jumbo Loans, Layoffs & Complex Defaults' },
        { id: 'company-profile', label: 'About CredSettle' },
        { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
        { id: 'regulatory-sources', label: 'Statutory Citations & Authorities' }
    ];
    const faqs = [
        {
            q: 'What is the official HDFC Bank personal loan settlement policy?',
            a: "HDFC Bank's private loans settlement policy is a structured OTS deal program managed by its Stressed Asset handling Division. It allows distressed clients facing verifiable bankruptcy. Severe illness. Job loss to settle their unpaid no-pledge loan dues through a one-time lump-sum payment or short-term tranches. Waiving total penal interest and a portion of the main loan."
        },
        {
            q: 'When does HDFC Bank consider an unsecured personal loan eligible for settlement?',
            a: 'HDFC Bank typically considers an no-pledge private loans eligible for a OTS deals after the account defaults for over 90 days and is formally classified as a Non-Performing Asset (NPA). Once classified as an NPA. The bank must set aside RBI cash reserves. Incentivizing credit boards to settle a OTS deal claims.'
        },
        {
            q: 'How much waiver or discount can I expect on an HDFC personal loan settlement?',
            a: "Clients typically secure a 100% waiver on accrued penal interest. Bounce charges, and late payment fees. On the core base loan. HDFC Bank generally agrees to a 40% to 55% waiver depending on the age of the default. Whether legal notices have been served. The strength of the client's hardship paperwork."
        },
        {
            q: 'What should I do if HDFC collection agents visit my home or workplace?',
            a: "If claims agents visit. Demand their formal HDFC staff ID card. Firm approval letter. Bank trade Correspondent code. Under the RBI Fair Practices Code. Agents cannot visit before 8:00 AM or after 7:00 PM. Use threats. Breach privacy with neighbors or colleagues. You should paper any violation and submit a formal complaint to the bank's main loan Nodal Officer."
        },
        {
            q: "How do I bypass third-party recovery agencies and deal with HDFC's Stressed Asset Division?",
            a: "You can bypass aggressive claims firms by serving a formal legal legal help through counsel or a debt relief expert straight to HDFC Bank's local claims Head and main loan Nodal Officer. This notice cites hardship. Asserts your legal rights under RBI rules. Formally requests transfer of the file to the internal Stressed Asset handling Desk."
        },
        {
            q: 'How should I respond to an arbitration or legal notice from HDFC Bank?',
            a: "You must never ignore an HDFC legal notice. For Section 25 PSSA or Section 138 NI Act notices. Submit a reply through legal counsel within 15 to 30 days explaining the lack of criminal intent and genuine debt stress. For arbitration intimations. Challenge any unilateral arbitrator appointment under Section 12(5) while proposing an amicable settlement."
        },
        {
            q: 'Can HDFC Bank initiate criminal proceedings or file an FIR for loan default?',
            a: 'Defaulting on an no-pledge private loans is strictly a civil contractual breach. Not a criminal offense. The police cannot register an FIR or arrest you for genuine inability to pay loan EMIs. While dishonored cheques or NACH mandates can trigger quasi-criminal complaints under Section 138 or Section 25. These are compoundable disputes routinely resolved through OTS deals.'
        },
        {
            q: 'What is the step-by-step procedure to obtain an official HDFC Bank settlement letter?',
            a: "Once a settlement figure is settled. HDFC Bank's credit boards sanctions the OTS deal. The bank then issues an formal Settlement Sanction Letter on bank letterhead from a verified @hdfcbank.com email address. This letter must explicitly state the reduced payout sum. Payment due dates, account number. And an doing to issue a No Dues letter."
        },
        {
            q: 'How does an HDFC personal loan settlement impact my CIBIL score and how can I recover?',
            a: 'Following a settlement. HDFC Bank reports the account to credit bureaus as "Settled" or "Post-Write-off Settled" with a zero balance. While this remark lowers your score initially. It eliminates recurring late payment marks. You can gradually rebuild your credit score over 18 to 24 months by maintaining disciplined payment on a secured credit card backed by a fixed deposit.'
        },
        {
            q: 'When and how will I receive the No Dues Certificate (NDC) from HDFC Bank?',
            a: "After you pay the full agreed payout sum into your HDFC loan account within the stipulated deadline. The bank processes internal write-offs and ledger closures. HDFC Bank is required to issue the formal No Dues letter (NDC) or Closure Letter within 30 to 45 trade days. This can be downloaded via NetBanking or collected from the home branch."
        }
    ];
    return (<main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-[#1886ff] selection:text-white">
      {/* 1. HERO SECTION (#2452ae Background) */}
      <section className="relative text-white pt-14 pb-10 md:pt-18 md:pb-12 px-4 md:px-8 overflow-hidden flex items-center justify-center text-center" style={{ backgroundColor: '#2452ae' }}>
        <div className="absolute inset-0 bg-black/5 z-0 pointer-events-none"/>
        <div className="max-w-5xl mx-auto text-center z-10 relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-blue-200 text-xs font-semibold mb-3">
            <Landmark className="w-3.5 h-3.5"/>
            <span>Institutional Banking Resolution Framework.</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            HDFC Personal Loan Settlement Policy
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed"> bank rules for resolving overdue HDFC Bank private and jumbo loans. Understand NPA timelines, legal notice defense. How to settle up to a 55% waiver straight through HDFC&apos. s Central Stressed Asset Division. </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2">
              <span>Facing HDFC Loan Default? Request Settlement Evaluation.</span>
              <ArrowRight className="w-4 h-4"/>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. STATS STRIP COMPONENT */}
      <StatsStrip />

      {/* 3. WIDESCREEN 3-COLUMN LAYOUT */}
      <div className="w-full max-w-[1720px] mx-auto px-4 md:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[240px_minmax(0,1fr)_280px] xl:grid-cols-[260px_minmax(0,1fr)_300px] 2xl:grid-cols-[280px_minmax(0,1fr)_320px] gap-5 xl:gap-6 items-start">
          
          {/* ================= LEFT COLUMN: STICKY TOC ================= */}
          <aside className="sticky top-6 hidden lg:block">
            <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs p-4 overflow-hidden">
              <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-100">
                <BookOpen className="w-4 h-4 text-[#1886ff]"/>
                <span className="text-xs font-black uppercase tracking-wider text-slate-800">
                  Table of Contents.
                </span>
              </div>
              <nav className="space-y-1 max-h-[calc(100vh-140px)] overflow-y-auto pr-1 text-xs">
                {navLinks.map((link) => {
            const isActive = activeId === link.id;
            return (<a key={link.id} href={`#${link.id}`} className={`block py-1.5 px-2.5 rounded-lg transition-all duration-150 leading-snug ${isActive
                    ? 'bg-blue-50 text-[#1886ff] font-bold border-l-3 border-[#1886ff] pl-2'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50 font-medium'}`}>
                      {link.label}
                    </a>);
        })}
              </nav>

              <div className="mt-4 pt-3 border-t border-slate-100 bg-blue-50/50 -mx-4 -mb-4 p-3 rounded-b-2xl">
                <div className="flex items-center gap-2 text-[11px] font-bold text-slate-800">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0"/>
                  <span>Institutional Defense.</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight"> Governed by Reserve Bank of India Prudential rules and Fair Practices Code. </p>
              </div>
            </div>
          </aside>

          {/* ================= MIDDLE COLUMN: MAIN CONTENT ================= */}
          <div className="space-y-8 md:space-y-10 min-w-0">
            
            {/* Executive Brief Box */}
            <div id="quick-crux" className="scroll-target rounded-2xl bg-[#F4F8FE] border border-blue-100/90 border-l-[5px] border-l-[#1886ff] p-5 sm:p-6 md:p-7 shadow-xs space-y-4 text-slate-800">
              <div className="flex items-center gap-2 text-xs md:text-sm font-black uppercase tracking-wider text-[#1886ff]">
                <Bookmark className="w-4 h-4 text-[#1886ff]"/>
                <span>EXECUTIVE BRIEF: HDFC BANK PERSONAL LOAN SETTLEMENT CRUX.</span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5"> <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5"/> <div> <strong className="text-slate-900 font-bold">bank Mandate:</strong> Evaluated by HDFC&apos. s Central Stressed Asset Division after 90 days of default (NPA). </div> </li>

                <li className="flex items-start gap-2.5"> <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5"/> <div> <strong className="text-slate-900 font-bold">Zero SARFAESI Exposure:</strong> no-pledge private and jumbo loans carry no security mortgage or property seizure rights. </div> </li>

                <li className="flex items-start gap-2.5"> <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5"/> <div> <strong className="text-slate-900 font-bold">Waiver Benchmarks:</strong> 100% waiver on accrued penal interest and late fees. With a 40% to 55% haircut on core main loan. </div> </li>

                <li className="flex items-start gap-2.5"> <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5"/> <div> <strong className="text-slate-900 font-bold">formal Closure &amp. NDC:</strong> Formal sanction letter on HDFC letterhead and No Dues letter guaranteed within 30 to 45 days. </div> </li>
              </ul>
            </div>

            {/* SECTION 1: Debt Economics & NPA Dynamics */}
            <section id="npa-dynamics" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]"/>
                <span>Banking Regulations &amp; Prudential Guidelines.</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. Debt Economics &amp; NPA Classification in HDFC Personal Loans
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> HDFC Bank manages one of India&apos. S largest retail lending portfolios. Extending private loans, pre-approved insta loans. Jumbo credit lines to salaried staff and self-employed workers. When unforeseen economic breaks occur. Examples include company downsizings. Critical medical emergencies. Severe trade downturns. Clients often find themselves unable to service high monthly equated installments. In response. The bank initiates a rigid internal claims sequence governed by Reserve Bank of India prudential rules. </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> During the initial 90 days of default. HDFC Bank categorizes the overdue account as a Special Mention Account across three escalating brackets: SMA-0 for 1 to 30 days. SMA-1 for 31 to 60 days. SMA-2 for 61 to 90 days. Once the 90-day threshold is breached without regularization. The account is reclassified as a Non-Performing Asset. This reclassification forces HDFC Bank to set aside RBI cash provisions ranging between 15% and 25% from its core Tier-1 reserves. </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> Crucially. No-pledge private loans are entirely exempt from the Securitisation and Reconstruction of money Assets and Enforcement of Security Interest Act of 2002. Because there is no underlying physical mortgage or pledged security. HDFC Bank cannot initiate summary asset attachments. Prolonged civil lawsuits or private arbitration represents a costly. Time-consuming avenue with uncertain claims prospects. as a result, HDFC Bank&apos. S Central Stressed Asset handling Division is institutionally incentivized to approve One-Time Settlement OTS deal pacts to release blocked cash. Reverse loan loss provisions. Eliminate toxic non-performing assets from its quarterly money balance sheets. </p>
            </section>

            {/* SECTION 2: Financial Breakdown & Settlement Math */}
            <section id="settlement-math" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <DollarSign className="w-4 h-4 text-[#1886ff]"/>
                <span>Financial Forensics.</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Understanding HDFC Loan Charges and Settlement Options
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> When an HDFC private loans defaults. Automated banking software rapidly inflates the total unpaid dues by compounding penal interest at 24% to 36% per annum. Imposing NACH bounce penalties of ₹500 to ₹750 per presentation. Adding late payment surcharges alongside 18% Goods and Services Tax. Over a six-month non-payment period. These artificial penalty fees can swell the ledger balance by 30% to 40% above the genuine remaining main loan released to the client. </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> A skilled debt relief plan begins with a deep ledger audit to strip away these non-legal additions. HDFC Bank&apos. S internal OTS deal sanction matrices permit credit boards to grant a complete 100% waiver on all total penal interest. Bounce charges. office expenses. Also. When presented with authenticated paperwork of severe hardship. The bank routinely consents to a large haircut on the core base loan. Establishing a realistic settlement target between 40% and 55% of the gross claim. </p>

              {/* Representative Calculation Card */}
              <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white shadow-xs">
                <div className="bg-slate-900 text-white p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-[#1886ff]"/>
                    <span className="font-bold text-sm">agent HDFC 180-Day NPA Settlement Math.</span>
                  </div>
                  <span className="text-xs text-blue-300 font-mono">₹10 Lakh Baseline Claim.</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80">
                    <thead>
                      <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-semibold">
                        <th className="p-3">Financial Component.</th>
                        <th className="p-3">Pre-Settlement Ledger.</th>
                        <th className="p-3">HDFC Credit Committee Waiver.</th>
                        <th className="p-3 text-right">Final Payable Amount.</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200/80 text-slate-600">
                      <tr>
                        <td className="p-3 font-medium text-slate-900">remaining base loan.</td>
                        <td className="p-3">₹7,50,000</td>
                        <td className="p-3 text-emerald-600 font-semibold">40% Core Haircut (₹3,00,000).</td>
                        <td className="p-3 text-right font-bold text-slate-900">₹4,50,000</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Accrued Regular &amp. Penal Interest.</td>
                        <td className="p-3">₹2,10,000</td>
                        <td className="p-3 text-emerald-600 font-semibold">100% Complete Waiver.</td>
                        <td className="p-3 text-right font-bold text-slate-900">₹0</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Late Surcharges &amp. NACH Bounces.</td>
                        <td className="p-3">₹40,000</td>
                        <td className="p-3 text-emerald-600 font-semibold">100% office Waiver.</td>
                        <td className="p-3 text-right font-bold text-slate-900">₹0</td>
                      </tr>
                      <tr className="bg-blue-50/70 font-bold text-slate-900">
                        <td className="p-3">Total OTS deal Evaluation.</td>
                        <td className="p-3 text-rose-600">₹10,00,000</td>
                        <td className="p-3 text-emerald-700">₹5,50,000 Total Relief (55% Savings).</td>
                        <td className="p-3 text-right text-[#1886ff] text-sm sm:text-base">₹4,50,000 Final OTS.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* SECTION 3: 4-Sided Bordered Comparison Matrix */}
            <section id="comparison-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]"/>
                <span>Strategic Assessment.</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Comparative Analysis: HDFC Debt Resolution Pathways
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> When navigating an acute debt crisis with HDFC Bank. Choosing the correct legal and trade mechanism is essential for reducing money exposure and preserving peace of mind. While loan restructuring or tenor extensions merely postpone debt stress by growing long-term interest burdens. Court lawsuits entails protracted expenses. The matrix below outlines how an bank One-Time Settlement compares against alternative options. </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[620px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Resolution Mechanism.</th>
                      <th className="p-3">Financial Relief.</th>
                      <th className="p-3">Legal Immunity</th>
                      <th className="p-3">CIBIL Bureau Remark.</th>
                      <th className="p-3">Standard Timeline.</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr className="bg-blue-50/30">
                      <td className="p-3 font-bold text-slate-900">One-Time Settlement (OTS).</td>
                      <td className="p-3 text-emerald-600 font-semibold">40% to 55% Total Reduction.</td>
                      <td className="p-3">Complete Discharge &amp. Notice Withdrawal.</td>
                      <td className="p-3 font-mono text-[11px]">Settled / Zero Balance.</td>
                      <td className="p-3">30 to 60 Days</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Tenor Restructuring.</td>
                      <td className="p-3 text-amber-600">0% Haircut (Higher Total Interest).</td>
                      <td className="p-3">Conditional upon Regular Servicing.</td>
                      <td className="p-3 font-mono text-[11px]">Restructured Account.</td>
                      <td className="p-3">45 to 90 Days</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Civil Court lawsuits.</td>
                      <td className="p-3 text-rose-600">Heavy Legal &amp. Defense Costs.</td>
                      <td className="p-3">Adversarial Judicial Decrees.</td>
                      <td className="p-3 font-mono text-[11px]">Suit Filed / Wilful Default.</td>
                      <td className="p-3">2 to 5 Years</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">National Lok Adalat.</td>
                      <td className="p-3 text-emerald-600">35% to 50% Mutual OTS deal.</td>
                      <td className="p-3">Section 21 Non-Appealable Decree.</td>
                      <td className="p-3 font-mono text-[11px]">Settled in Lok Adalat.</td>
                      <td className="p-3">Sitting Date Basis.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Unmanaged Default.</td>
                      <td className="p-3 text-rose-600">Accelerated Penal Compounding.</td>
                      <td className="p-3 text-rose-600">Section 25 / Section 138 Warrants.</td>
                      <td className="p-3 font-mono text-[11px] text-rose-600">Written Off / Default.</td>
                      <td className="p-3">Indefinite Distress.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 4: Technical CIBIL Algorithm & Scoring Math */}
            <section id="cibil-impact" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4 text-[#1886ff]"/>
                <span>Credit Bureau Architecture.</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. CIBIL Scoring Mechanics, Algorithms &amp; Score Rehabilitation
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> TransUnion CIBIL, alongside Experian, Equifax. CRIF High Mark. Evaluates clients creditworthiness using a strict five-factor mathematical algorithm: 35% Payment History. 30% Credit Exposure and use. 15% Vintage of Credit History. 10% Credit Mix across secured versus no-pledge facilities. 10% Recent Credit Inquiries. When an HDFC private loans enters default. Monthly reporting of 30, 60. 90+ Days Past Due destroys the payment history pillar. Routinely causing credit scores to plummet by 120 to 180 points. </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> Executing an bank settlement prompts HDFC Bank to submit an account status update marking the loan as &quot. Settled&quot. Or &quot. Post-Write-off Settled&quot. with the unpaid dues reduced to zero. While a settled remark remains visible on your credit bureau history. It halts the progressive monthly bleeding of DPD default marks and eliminates active claims flags. </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> Rebuilding a prime credit score of 750 or higher is entirely viable over an 18 to 24 month horizon. Distressed clients can initiate this claims by securing a credit builder credit card collateralized against a modest fixed deposit. Maintaining credit use strictly below 30%. Ensuring immaculate payment cycles. Also. Under Section 21 of the Credit Information Companies (Regulation) Act of 2005. Clients who regain money strength can approach HDFC Bank to pay the residual settled variance. Thereby converting their bureau status from &quot. Settled&quot. To &quot. Closed&quot. and restoring bank credit eligibility. </p>
            </section>

            {/* SECTION 5: Visual Infographic Asset Card */}
            <section id="infographic-overview" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Sparkles className="w-4 h-4 text-[#1886ff]"/>
                <span>Visual Blueprint.</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                HDFC Personal Loan Settlement Roadmap
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> This full visual roadmap details the six bank milestones required to transition an overdue HDFC private loans from contentious claims claims into a verified. Legally binding OTS deals. </p>

              <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-slate-100 bg-slate-100">
                  <Image src="/images/infographics/hdfc-personal-loan-settlement-policy.jpg" alt="HDFC Bank Personal Loan Settlement Policy and 6-Stage Process Flowchart" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 900px" className="object-contain hover:scale-[1.01] transition-transform duration-300" priority/>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-500 pt-1 gap-2">
                  <span>Official CredSettle Institutional Resolution Architecture • RBI Compliant.</span>
                  <a href="/images/infographics/hdfc-personal-loan-settlement-policy.jpg" target="_blank" rel="noopener noreferrer" className="text-[#1886ff] hover:underline font-bold inline-flex items-center gap-1">
                    <span>View High-Resolution Blueprint.</span>
                    <ExternalLink className="w-3.5 h-3.5"/>
                  </a>
                </div>
              </div>
            </section>

            {/* SECTION 6: Step-by-Step SOP (6 Stages) */}
            <section id="step-by-step-sop" className="scroll-target space-y-6">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]"/>
                <span>Standard Operating Procedure.</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. Six-Stage SOP: Negotiating HDFC Personal Loan Settlements
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> Navigating HDFC Bank&apos. s bureaucratic settlement hierarchy requires strict adherence to bank protocols. Attempting ad-hoc discussions with telecallers often results in wasted token deposits. Follow this six-stage bank rules to secure an authorized settlement sanction. </p>

              <div className="space-y-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">1</span>
                    Stage 1: Forensic Loan Account Audit
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed"> Obtain and analyze the complete HDFC Bank record of account from loan origination. Isolate total main loan released. Calculate actual payments made. Unbundle compound penal interest. Identify invalid NACH bounce levies to establish the exact unamortized net main loan baseline. </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">2</span>
                    Stage 2: Comprehensive Hardship Dossier Compilation
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed"> Compile verifiable legal and medical paperwork showing genuine money incapacity. Include company termination letters. Medical treatment discharge summaries. Diminished bank cashflow records. Audited trade loss balances to validate that default is genuine rather than intentional. </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">3</span>
                    Stage 3: Stressed Asset Management Division Representation
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed"> Bypass third-party claims vendors by submitting a formal legal legal help to HDFC Bank&apos. s local Stressed Asset Division and main loan Nodal Officer. This notice details your hardship situation. Asserts legal clients protections. And requests formal OTS deal consideration. </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">4</span>
                    Stage 4: Bilateral Credit Committee Negotiations
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed"> Engage in structured OTS deal dialogue with HDFC Bank zonal credit managers. Leverage the bank&apos. s internal NPA provisioning timelines and the absence of physical security to settle a 100% waiver of penal interest and a 40% to 55% discount on the net base loan. </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">5</span>
                    Stage 5: Settlement Sanction Letter Legal Vetting
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed"> Conduct a rigorous deep legal review of the sanction letter. Verify that it is issued on authentic HDFC Bank letterhead. Originates from an formal @hdfcbank.com company email. Accurately states the loan account number. Specifies payment tranches. And contains explicit covenants withdrawing all legal proceedings. </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">6</span>
                    Stage 6: Direct Remittance &amp; No Dues Certificate Procurement
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed"> pay the approved OTS deal tranches straight into your designated HDFC loan account through traceable RTGS or NEFT transfers. Retain stamped bank deposit challans and systematically follow up with the nodal desk to secure the formal No Dues letter within 30 to 45 trade days. </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: Statutory Notice Defense & Legal Rights */}
            <section id="statutory-defense" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]"/>
                <span>Statutory Protections.</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. Statutory Notice Defense &amp; Borrower Legal Rights
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> As private loans defaults cross the 90 to 120 day threshold. HDFC Bank&apos. s legal retainers often dispatch formal legal demand notices to compel fast settlement. Understanding the exact legal scope of these notices prevents panic and empowers clients to invoke legal safeguards. </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                    <FileText className="w-4 h-4"/>
                    <span>Section 25 PSSA NACH Mandate Notice.</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed"> Issued under the Payment and Settlement Systems Act of 2007 when electronic auto-debits bounce due to insufficient funds. While carrying quasi-criminal provisions similar to cheque bounce laws. Establishing genuine debt stress and responding through counsel within 30 days refutes criminal intent and provides ideal ground for OTS OTS deal. </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                    <Scale className="w-4 h-4"/>
                    <span>Section 138 Negotiable Instruments Act.</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed"> Triggered if physical security cheques presented by the lender bounce. A formal legal reply must be served within 15 days of notice receipt. Establishing that cheques were deposited as security rather than in discharge of a determined debt debt risk. Thereby protecting against summary magistrate proceedings. </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-purple-700 font-bold text-sm">
                    <Gavel className="w-4 h-4"/>
                    <span>Arbitration Section 21 Jurisdictional Challenge.</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed"> HDFC Bank often invokes arbitration under Section 21 of the 1996 Act. Under Supreme Court rulings in Perkins Eastman and TRF Ltd. A lender cannot unilaterally appoint a sole arbitrator. Clients can file jurisdictional objections under Section 12(5) and Section 16. Compelling the bank to seek mutual consent or engage in OTS. </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <ShieldCheck className="w-4 h-4"/>
                    <span>DRT Section 19 &amp; RBI Fair Practices Code.</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed"> Debts claims Tribunals handle claims only exceeding ₹20 Lakhs under the RDBFI Act. For all loan sizes. The RBI Fair Practices Code legally bars claims firms from calling before 8:00 AM or after 7:00 PM. Using threatening language, contacting references. Visiting unannounced. </p>
                </div>
              </div>
            </section>

            {/* SECTION 8: 3-Tier Escalation Matrix */}
            <section id="escalation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff]"/>
                <span>Statutory Escalation Protocol.</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. Three-Tier Escalation Matrix for HDFC Grievances
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> When third-party claims firms violate RBI norms or local claims managers refuse to consider legitimate hardship representations. Clients must initiate formal legal escalations through HDFC Bank&apos. s internal grievance architecture and RBI oversight mechanisms. </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Grievance Tier</th>
                      <th className="p-3">Designated Banking Authority.</th>
                      <th className="p-3">Turnaround Time</th>
                      <th className="p-3">pay &amp; Scope of Intervention.</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 1: GRO</td>
                      <td className="p-3">HDFC Grievance Redressal Officer.</td>
                      <td className="p-3 font-mono">7 to 10 Working Days.</td>
                      <td className="p-3">Investigation into illegal claims calls. Improper billing, and preliminary settlement requests.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 2: PNO</td>
                      <td className="p-3">main loan Nodal Officer (Mumbai HQ).</td>
                      <td className="p-3 font-mono">14 to 21 Working Days.</td>
                      <td className="p-3">Relief of unresolved claims abuse. Review of disputed penal interest. And OTS boards escalations.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Level 3: RBI Ombudsman.</td>
                      <td className="p-3">Reserve Bank Integrated Ombudsman.</td>
                      <td className="p-3 font-mono">30 Days Post-PNO.</td>
                      <td className="p-3">Binding RBI adjudication via cms.rbi.org.in for predatory debt practices or RBI violations.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 9: Chronological Timeline Table */}
            <section id="chronological-timeline" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Clock className="w-4 h-4 text-[#1886ff]"/>
                <span>Procedural Milestones.</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Chronological Resolution Timeline: From Default to NDC
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> The lifecycle of an HDFC private loans default evolves across well-defined RBI stages. Recognizing where your loan sits on this chronological continuum allows you to pinpoint the optimal moment for initiating settlement discussions and securing maximum money waivers. </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Timeline Interval.</th>
                      <th className="p-3">Asset Classification.</th>
                      <th className="p-3">Bank Recovery Actions.</th>
                      <th className="p-3">Recommended Borrower Strategy.</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 1 to 30</td>
                      <td className="p-3 font-mono text-[11px]">SMA-0</td>
                      <td className="p-3">Automated SMS. Emails. And soft telephonic reminders.</td>
                      <td className="p-3">Assess liquidity. avoid taking fresh high-interest debt.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 31 to 60</td>
                      <td className="p-3 font-mono text-[11px]">SMA-1</td>
                      <td className="p-3">Escalated claims calls and initial demand notices.</td>
                      <td className="p-3">Begin gathering medical and hardship proof.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 61 to 90</td>
                      <td className="p-3 font-mono text-[11px]">SMA-2</td>
                      <td className="p-3">Final pre-NPA warnings and firm allocation.</td>
                      <td className="p-3">Assert RBI Fair Practices rights against abuse.</td>
                    </tr>
                    <tr className="bg-amber-50/50">
                      <td className="p-3 font-bold text-slate-900">Day 91 to 120</td>
                      <td className="p-3 font-mono text-[11px] text-amber-700 font-bold">NPA Classification.</td>
                      <td className="p-3">Tier-1 loss provisioning triggered. transfer to Stressed Asset Desk.</td>
                      <td className="p-3">Audit loan records and engage relief experts.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Day 121 to 180</td>
                      <td className="p-3 font-mono text-[11px] text-[#1886ff] font-bold">Prime OTS Window.</td>
                      <td className="p-3">Issuance of Section 25 PSSA or arbitration letters.</td>
                      <td className="p-3 font-bold text-slate-900">Execute bilateral OTS deal for 40% to 55% waiver.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Month 6 and Beyond.</td>
                      <td className="p-3 font-mono text-[11px]">Write-off / Legal.</td>
                      <td className="p-3">Ex-parte arbitral filings or portfolio sale to ARCs.</td>
                      <td className="p-3">pay payment steps and secure formal NDC.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: Specialized Real-World Scenarios */}
            <section id="specialized-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]"/>
                <span>Complex Scenarios.</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                10. Handling Complex Scenarios: Jumbo Loans, Layoffs &amp; ARCs
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> Every debt distress hardship presents unique daily work challenges. Standard automated claims approaches fail when applied to complex money structures. Below are bank relief tactics for specialized loan scenarios. </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-[#1886ff]"/>
                    HDFC Jumbo Loans &amp; Multi-Product Exposure
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed"> clients holding high-limit Jumbo Loans linked to HDFC credit cards alongside private loans often face cross-default acceleration. Strategic legal help requires consolidating all no-pledge credit facilities into a single full OTS dossier. Preventing fragmented recoveries. </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-emerald-600"/>
                    Executive Layoffs &amp; Sudden Loss of Employment
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed"> Salaried company workers earning high payout often secure large private credit. Following sudden layoffs or tech sector restructuring. Submitting formal separation letters and bank records proving zero monthly inflows helps expedited approval of steep main loan haircuts. </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-indigo-600"/>
                    Business Proprietorship &amp; Working Capital Deficits
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed"> Self-employed individuals who utilized private loans to sustain firms work during severe cashflow crunches can show trade bankruptcy using audited profit-and-loss balances and GST returns. Justifying trade write-downs. </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-600"/>
                    Asset Reconstruction Company (ARC) Debt Assignments
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed"> When HDFC Bank sells seasoned bad debts to ARCs like Phoenix or ARCIL under Section 5 of the SARFAESI Act. The legal rights transfer completely. Because ARCs acquire portfolios at deep bank discounts. Skilled negotiators can often achieve settlements exceeding 60% to 70% waivers. </p>
                </div>
              </div>
            </section>

            {/* SECTION 11: Company Profile Component */}
            <div id="company-profile" className="scroll-target pt-2">
              <CompanySection />
            </div>

            {/* SECTION 12: 10 Synchronized FAQs */}
            <section id="frequently-asked-questions" className="scroll-target space-y-5">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <HelpCircle className="w-4 h-4 text-[#1886ff]"/>
                <span>Direct Answers</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Frequently Asked Questions About HDFC Personal Loan Settlement
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> Clear. Legally verified answers addressing the most common questions on HDFC Bank&apos. S private loans settlement process. Discount expectations. Claims procedures. Credit rehabilitation. </p>

              <div className="space-y-3 pt-2">
                {faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (<div key={index} className="border border-slate-200/80 rounded-2xl bg-white overflow-hidden shadow-2xs transition-all duration-200">
                      <button type="button" onClick={() => toggleFaq(index)} className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 hover:bg-slate-50/80 transition-colors cursor-pointer" aria-expanded={isOpen}>
                        <span className="font-bold text-xs sm:text-sm text-slate-900 leading-snug">
                          {faq.q}
                        </span>
                        <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform duration-200 flex-shrink-0 ${isOpen ? 'rotate-180 text-[#1886ff]' : ''}`}/>
                      </button>
                      {isOpen && (<div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                          <p className="pt-3">{faq.a}</p>
                        </div>)}
                    </div>);
        })}
              </div>
            </section>

            {/* SECTION 13: Citations & Outbound Authority Grid */}
            <section id="regulatory-sources" className="scroll-target space-y-4 pt-4 border-t border-slate-200">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-500">
                <BookOpen className="w-4 h-4"/>
                <span>Statutory Citations &amp; Legal Authorities.</span>
              </div>
              <h2 className="text-base sm:text-lg font-bold text-slate-900">
                Official Regulatory References &amp; Legal Framework
              </h2>
              <ul className="space-y-2 text-xs text-slate-600 leading-relaxed list-disc pl-5">
                <li> <strong>Reserve Bank of India:</strong> Master Direction on Fair Practices Code for Non-Banking money Companies and banks (Updated 2026). </li>
                <li> <strong>Payment and Settlement Systems Act, 2007:</strong> Section 25. Dishonour of Electronic Funds Transfer Mandates and Legal Remedies. </li>
                <li> <strong>Negotiable Instruments Act, 1881:</strong> Section 138. Legal rules for Dishonour of Cheques for Discharge of Debt. </li>
                <li> <strong>Arbitration and talks Act, 1996:</strong> Sections 12(5), 16, and 21. Ineligibility of Unilateral Arbitrators and Supreme Court rulings (Perkins Eastman / TRF Ltd). </li>
                <li> <strong>Credit Information Companies (Regulation) Act. 2005 (CICRA):</strong> Section 21. Accuracy of Credit Information and Bureau Dispute Rectification Procedures. </li>
              </ul>

              {/* 6 Outbound Authority Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Verified Government &amp; Regulatory Portals:</span>
                <div className="flex flex-wrap gap-2">
                  <a href="https://www.rbi.org.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>Reserve Bank of India.</span>
                    <ExternalLink className="w-3 h-3"/>
                  </a>
                  <a href="https://cms.rbi.org.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>RBI Integrated Ombudsman.</span>
                    <ExternalLink className="w-3 h-3"/>
                  </a>
                  <a href="https://www.cibil.com" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>TransUnion CIBIL India.</span>
                    <ExternalLink className="w-3 h-3"/>
                  </a>
                  <a href="https://www.indiacode.nic.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>India Code Statutory Repository.</span>
                    <ExternalLink className="w-3 h-3"/>
                  </a>
                  <a href="https://nalsa.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>National Legal Services Authority.</span>
                    <ExternalLink className="w-3 h-3"/>
                  </a>
                  <a href="https://cybercrime.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>National Cyber Crime Portal.</span>
                    <ExternalLink className="w-3 h-3"/>
                  </a>
                </div>
              </div>

              {/* 10 Internal Topic Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Explore Related CredSettle Guides:</span>
                <div className="flex flex-wrap gap-2">
                  <Link href="/bank-sent-legal-notice-for-loan-what-to-do" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Bank Legal Notice Defense
                  </Link>
                  <Link href="/arbitration-notice-personal-loan-default" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Arbitration Notice for Loan
                  </Link>
                  <Link href="/lok-adalat-personal-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Lok Adalat Loan Settlement
                  </Link>
                  <Link href="/services/personal-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Personal Loan Settlement
                  </Link>
                  <Link href="/services/anti-harassment" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Anti-Harassment Protection
                  </Link>
                  <Link href="/bank-recovery-case-in-court" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Bank Court Recovery Cases
                  </Link>
                  <Link href="/convert-settled-status-to-closed" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Convert Settled to Closed
                  </Link>
                  <Link href="/cibil-score-kaise-badhaye-after-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Rebuild CIBIL Score
                  </Link>
                  <Link href="/full-and-final-settlement-meaning" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Full &amp; Final Settlement Meaning
                  </Link>
                  <Link href="/get-noc-after-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Get No Dues Certificate
                  </Link>
                </div>
              </div>
            </section>

          </div>

          {/* ================= RIGHT COLUMN: STICKY SIDEBAR ================= */}
          <aside className="space-y-5 sticky top-6">
            
            {/* Card 1: Author Bio Card */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3">
              <div className="flex items-center gap-3">
                <Link href="/author/ashish-jhangra" className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-extrabold text-sm hover:bg-blue-200 transition-colors flex-shrink-0" title="View Ashish Jhangra Profile">
                  AJ
                </Link>
                <div>
                  <Link href="/author/ashish-jhangra" className="text-sm font-bold text-slate-900 hover:text-[#1886ff] transition-colors block">
                    Ashish Jhangra
                  </Link>
                  <p className="text-[11px] font-semibold text-[#1886ff]"> Legal &amp. Debt relief expert. </p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed"> Expert in banking compliance. HDFC Bank NPA relief. Claims defense. OTS deal talks with extensive skill representing stressed retail clients before banking ombudsmen and credit boards. </p>
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <Link href="/author/ashish-jhangra" className="text-[#1886ff] hover:underline font-semibold flex items-center gap-1">
                  <span>View Author Profile.</span>
                  <ArrowRight className="w-3 h-3"/>
                </Link>
                <span className="text-emerald-600 font-bold flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3"/> CredSettle Panel.
                </span>
              </div>
            </div>

            {/* Card 2: Emergency CTA Card */}
            <div className="rounded-3xl p-6 text-white text-center space-y-4 shadow-md relative overflow-hidden" style={{ backgroundColor: '#2452ae' }}>
              <div className="space-y-1 text-center">
                <span className="text-xs font-black uppercase tracking-wider text-blue-200 bg-white/10 px-3 py-1 rounded-full inline-block mb-1">
                  CONFIDENTIAL LEGAL DEFENSE.
                </span>
                <p className="text-lg md:text-xl font-bold text-white leading-snug"> HDFC Loan Notice or claims Threats? </p>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal"> Our senior debt relief specialists halt claims agent abuse. Respond to legal notices. settle up to 55% waivers straight with HDFC Bank&apos. s Stressed Asset Division. </p>
              </div>
              <Link href="/contact" className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md">
                Request Free Settlement Evaluation
              </Link>
              <div className="pt-2 flex flex-col items-center justify-center gap-1 text-[11px] text-blue-200">
                <div className="flex items-center gap-1">
                  <Phone className="w-3 h-3 text-blue-200"/>
                  <a href="tel:+918800226635" className="hover:underline font-bold text-white">
                    Call: +91-8800226635.
                  </a>
                </div>
                <div className="flex items-center gap-1 text-[10px] text-blue-300">
                  <Lock className="w-3 h-3"/>
                  <span>Direct Bank Settlement • 100% RBI Compliant.</span>
                </div>
              </div>
            </div>

            {/* Card 3: CredSettle Trust Badges */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">The CredSettle Advantage.</p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2"> <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5"/> <span><strong>Zero Upfront Risk:</strong> Success-linked relief fee structure.</span> </li>
                <li className="flex items-start gap-2"> <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5"/> <span><strong>Direct Account Remittance:</strong> No middleman fund handling.</span> </li>
                <li className="flex items-start gap-2"> <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5"/> <span><strong>Complete RBI Compliance:</strong> Strict Fair Practices enforcement.</span> </li>
                <li className="flex items-start gap-2"> <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5"/> <span><strong>Verified No Dues letter:</strong> formal bank closure guarantee.</span> </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">Related Legal Guides.</p>
              <div className="space-y-2.5">
                <Link href="/bank-sent-legal-notice-for-loan-what-to-do" className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group">
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug"> Bank Sent Legal Notice for Loan Default. </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Full step-by-step reply blueprint &rarr;.</span>
                </Link>

                <Link href="/arbitration-notice-personal-loan-default" className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group">
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug"> Arbitration Notice for private loans. </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Challenge unilateral arbitrator guide &rarr;.</span>
                </Link>

                <Link href="/convert-settled-status-to-closed" className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group">
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug"> Convert Settled Loan to Closed Status. </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Clean credit report blueprint &rarr;.</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>);
}
