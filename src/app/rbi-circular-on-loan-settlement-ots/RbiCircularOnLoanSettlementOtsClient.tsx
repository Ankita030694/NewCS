'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import StatsStrip from '@/components/StatsStrip';
import CompanySection from '@/components/CompanySection';
import { BookOpen, ShieldCheck, CheckCircle2, AlertTriangle, Scale, TrendingUp, FileText, Building2, DollarSign, Lock, Phone, Calendar, AlertCircle, Briefcase, Bookmark, ArrowRight, ExternalLink, Check, ChevronDown, ChevronUp, Gavel, ShieldAlert, Landmark, UserCheck } from 'lucide-react';
export default function RbiCircularOnLoanSettlementOtsClient() {
    const [activeId, setActiveId] = useState<string>('executive-summary');
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
        { id: 'executive-summary', label: 'Executive Summary: Key Rules' },
        { id: 'debt-economics-npa-dynamics', label: '1. Debt Economics & NPA Rules' },
        { id: 'financial-breakdown-settlement-math', label: '2. Settlement Math & Waivers' },
        { id: 'resolution-comparison-matrix', label: '3. OTS vs. Restructuring & Court' },
        { id: 'cibil-algorithm-scoring-math', label: '4. CIBIL Algorithm & Recovery' },
        { id: 'visual-infographic-blueprint', label: 'Visual SOP Blueprint' },
        { id: 'step-by-step-settlement-sop', label: '5. 6-Stage Compromise SOP' },
        { id: 'statutory-notice-defense', label: '6. Statutory Notice Defense' },
        { id: 'three-tier-escalation-matrix', label: '7. 3-Tier Grievance Matrix' },
        { id: 'chronological-timeline-milestones', label: '8. Procedural NPA Milestones' },
        { id: 'specialized-real-world-scenarios', label: '9. Specialized Default Cases' },
        { id: 'about-credsettle', label: 'About CredSettle' },
        { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
        { id: 'regulatory-citations-authorities', label: 'Regulatory Sources & Citations' }
    ];
    const faqs = [
        {
            q: 'What is the official RBI circular on compromise settlement and OTS?',
            a: "The Reserve Bank of India issued full RBI rules under the Prudential rules for relief of Stressed Assets and OTS deals rules (RBI/2023-24/40). This circular mandates that all regulated entities. This includes scheduled banks and NBFCs. Must institute board-approved policies governing OTS deals and One-Time Settlements (OTS) for stressed and non-performing asset accounts without discriminatory discretion."
        },
        {
            q: 'Can a willful defaulter or fraud account apply for OTS under RBI guidelines?',
            a: "Under the updated RBI rules. Regulated entities may do OTS deals with accounts classified as fraud or willful default without prejudice to ongoing criminal proceedings. However, board approval is strict. Such clients are subjected to a strict cooling period of at least five years before becoming eligible for any fresh credit facilities from regulated banks."
        },
        {
            q: 'How much waiver can I legally get under an RBI loan settlement?',
            a: "The RBI rules do not fix a rigid legal percentage for debt waivers. Instead. Loan concessions are determined by the bank's board-approved claims matrix based on the client's verified net worth. Demonstrable economic hardship. Security realisability under SARFAESI. Net present value (NPV) claims analysis. In practice. Genuine hardship cases often achieve waivers between 40% and 75% on total penal interest and unpaid main loan dues."
        },
        {
            q: 'Does settling a loan under RBI guidelines stop recovery agent harassment?',
            a: "Yes. Under the RBI Master Directions on Fair Practices Code and rules on claims agents (2022/2026). Lenders and their claims agents are strictly prohibited from intimidating clients. Making calls before 8:00 AM or after 7:00 PM. Calling family members or colleagues. Visiting workplaces unlawfully. Once formal OTS talks start through an authorized legal agent. All unsolicited abuse must cease promptly."
        },
        {
            q: 'What is the difference between a loan restructuring and an RBI compromise settlement?',
            a: "Loan restructuring modifies the original payment terms by extending tenure. Lowering interest rates. Granting an EMI moratorium to make continued debt servicing feasible. Keeping the account marked as Restructured in credit bureaus. A OTS deals or OTS involves a one-time discounted lump-sum payment that fully discharges the client's contractual debt risk and closes the account as Settled."
        },
        {
            q: 'What is the mandatory cooling period after an OTS settlement under RBI rules?',
            a: 'Under the RBI OTS deals circular. Clients who do a OTS deals or technical write-off are subject to a minimum cooling-off period of 12 months for standard non-fraud stressed accounts before they can seek fresh credit from regulated entities. For willful default or fraud classifications. The strict cooling period is at least five years.'
        },
        {
            q: 'How does an OTS settlement affect my CIBIL score under RBI regulations?',
            a: "Following an OTS. The lending institution updates credit information companies with the tag Settled or Post-Settlement Write-Off. This causes an fast temporary decline of 50 to 120 points on credit bureau scores. However. Unlike active default or lawsuits status. A settled account stops growing default marks. This allows clients to rebuild their score back to prime 750+ within 12 to 24 months through disciplined credit use."
        },
        {
            q: 'What legal document must the bank issue after I pay the OTS settlement amount?',
            a: 'Upon receipt and verification of the full agreed OTS settlement remittance. The lending institution is legally obligated to issue an full No Dues letter (NDC) or No Objection letter (NOC) on formal bank letterhead signed by an authorized branch or claims officer. Along with releasing any held security or original title deeds within 30 calendar days.'
        },
        {
            q: 'Can a bank initiate SARFAESI action if an OTS proposal is under active review?',
            a: 'While banks maintain legal rights under Section 13(2) and 13(4) of the SARFAESI Act. Submitting a structured OTS proposal under board-approved RBI rules accompanied by a token earnest deposit typically prompts the bank\'s competent authority to hold coercive auction proceedings in abeyance pending credit committee determination.'
        },
        {
            q: 'How do I escalate if a bank refuses an OTS or fails to issue an NDC after settlement?',
            a: 'If a bank acts arbitrarily or fails to release the NDC within 30 days of full settlement payment. You can file a formal complaint with the Bank main loan Nodal Officer (PNO). If the grievance remains unresolved after 30 days. You can lodge an escalation with the RBI Integrated Ombudsman via cms.rbi.org.in. Where the bank may be penalised and ordered to compensate the client.'
        }
    ];
    return (<main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-[#1886ff] selection:text-white">
      {/* 1. HERO SECTION (#2452ae Swatch Color) */}
      <section className="relative text-white pt-24 pb-16 md:pt-32 md:pb-20 px-4 md:px-8 overflow-hidden flex items-center justify-center text-center" style={{ backgroundColor: '#2452ae' }}>
        <div className="absolute inset-0 bg-black/10 z-0 pointer-events-none"/>
        <div className="max-w-5xl mx-auto text-center z-10 relative">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md text-xs sm:text-sm font-bold tracking-wide uppercase mb-5 border border-white/20">
            <Landmark className="w-4 h-4 text-blue-200"/>
            <span>RBI Prudential Resolution Framework 2026.</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight leading-tight drop-shadow-sm">
            RBI Guidelines &amp; Circular for <br className="hidden sm:inline"/>
            <span className="text-blue-200">Bank Loan OTS Settlements.</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl mb-8 max-w-3xl mx-auto font-normal text-white/95 leading-relaxed"> Understand how Reserve Bank of India OTS deals rules protect distressed clients. Empower banks to grant genuine loan waivers. Provide a lawful path to money claims. </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-blue-900 hover:text-[#1886ff] px-8 py-4 rounded-full font-extrabold text-base md:text-lg hover:bg-slate-50 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2">
              <span>Use RBI Rules to Settle Your Loan.</span>
              <ArrowRight className="w-5 h-5"/>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. STATS STRIP COMPONENT */}
      <StatsStrip />

      {/* 3. WIDESCREEN 3-COLUMN LAYOUT */}
      <div className="w-full max-w-[1720px] mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[250px_minmax(0,1fr)_280px] xl:grid-cols-[270px_minmax(0,1fr)_310px] 2xl:grid-cols-[290px_minmax(0,1fr)_330px] gap-6 xl:gap-8 items-start">
          
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
                  <span>RBI Compliance Verified.</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight"> Aligned with RBI Master Circular on OTS deals &amp. claims Agent Norms 2026. </p>
              </div>
            </div>
          </aside>

          {/* ================= MIDDLE COLUMN: MAIN EDITORIAL CONTENT ================= */}
          <div className="space-y-10 min-w-0">
            
            {/* EXECUTIVE SUMMARY BOX (#F4F8FE with #1886ff border) */}
            <div id="executive-summary" className="scroll-target rounded-2xl bg-[#F4F8FE] border border-blue-100/90 border-l-[5px] border-l-[#1886ff] p-5 sm:p-6 md:p-7 shadow-xs space-y-4 text-slate-800">
              <div className="flex items-center gap-2 text-xs md:text-sm font-black uppercase tracking-wider text-[#1886ff]">
                <Bookmark className="w-4 h-4 text-[#1886ff]"/>
                <span>EXECUTIVE BRIEF: RBI COMPROMISE SETTLEMENT &amp; OTS POLICY.</span>
              </div>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium"> The Reserve Bank of India has established clear RBI rules empowering banks and non-banking money companies to execute OTS deals and One-Time Settlements (OTS) with distressed retail and trade clients. </p>

              <ul className="space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5"> <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5"/> <span><strong>Board-Approved OTS Policy:</strong> Banks must offer transparent OTS deals under board-approved rules.</span> </li>
                <li className="flex items-start gap-2.5"> <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5"/> <span><strong>100% Penal Fee Waiver:</strong> Lenders have RBI power to waive total penal interest and legal costs.</span> </li>
                <li className="flex items-start gap-2.5"> <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5"/> <span><strong>abuse Prohibition:</strong> RBI Fair Practices Code strictly bans threatening calls. Abusive tactics, and home visits.</span> </li>
                <li className="flex items-start gap-2.5"> <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5"/> <span><strong>30-Day strict NDC:</strong> Banks must release full No Dues letters and title deeds within 30 days.</span> </li>
                <li className="flex items-start gap-2.5"> <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5"/> <span><strong>Direct Bank Remittance:</strong> All settlement payments are transferred straight to your bank account via RTGS/NEFT.</span> </li>
              </ul>
            </div>

            {/* SECTION 1: DEBT ECONOMICS & NPA DYNAMICS */}
            <section id="debt-economics-npa-dynamics" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4"/>
                <span>Regulatory Foundation.</span>
              </div>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 leading-snug">
                1. Debt Economics: NPA Classification &amp; Provisioning
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> Under the Reserve Bank of India prudential norms. Loan default follows an exact chronological progression. When a client misses scheduled equated monthly installments (EMIs). The account enters the Special Mention Account (SMA) classification. Mainly. Overdue periods between 1 and 30 days are designated as SMA-0. 31 to 60 days as SMA-1. 61 to 90 days as SMA-2. Once main loan or interest payments remain overdue past the critical 90-day threshold. The lending institution is mandated by banking regulation to reclassify the loan as a Non-Performing Asset (NPA). </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> Classifying a facility as an NPA triggers severe loan loss provisioning requirements under RBI cash adequacy regulations. Banks must set aside Tier-1 cash against doubtful and substandard assets. This straight impacts their profitability and lending limits. For no-pledge credit lines such as credit cards and private loans. Where SARFAESI Act security attachment mechanisms cannot be enforced. Bank claims through civil suits or Debt claims Tribunals (DRTs) typically takes four to seven years. As a result. Banks prefer settling a One-Time Settlement (OTS) under board-approved OTS deal policies. As fast cash realization yields a higher Net Present Value than prolonged court lawsuits. </p>
            </section>

            {/* SECTION 2: FINANCIAL BREAKDOWN & SETTLEMENT MATH */}
            <section id="financial-breakdown-settlement-math" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <DollarSign className="w-4 h-4"/>
                <span>Financial Ledger Anatomy.</span>
              </div>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 leading-snug">
                2. Financial Breakdown: Principal vs Inflated Dues
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> When a loan account becomes overdue. The unpaid dues shown on claims demand notices rarely reflects the original borrowed sum. Banks automatically apply compounding penal interest. Monthly late payment penalties. Cheque bounce charges. And internal claims overheads. Over twelve to eighteen months of non-payment. These compounding charges can inflate the nominal unpaid dues by 40% to 80% above the genuine main loan ledger balance. </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> Under the RBI OTS deals rules. Credit sanctioning boards are authorized to dissect the total claim into distinct accounting buckets: original remaining main loan. Regular accrued interest. Penalty charges. In OTS deal talks. The primary objective is securing a complete 100% waiver on all penal interest and late fees. Followed by a settled haircut on the remaining base loan based on verified bankruptcy or medical hardship. </p>

              {/* Financial Calculation Breakdown Card */}
              <div className="rounded-2xl border border-slate-200/80 bg-white p-5 md:p-6 shadow-xs space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wide">Case Ledger Study: 180-Day NPA Personal Loan.</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold">54% Net Waiver Achieved.</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs">
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70">
                    <p className="text-slate-500 font-medium">Original main loan.</p>
                    <p className="text-base font-bold text-slate-900 mt-1">₹6,50,000</p>
                    <p className="text-[11px] text-slate-500 mt-0.5">Base borrowed cash.</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200/70">
                    <p className="text-rose-600 font-medium">Inflated Ledger Total.</p>
                    <p className="text-base font-bold text-rose-700 mt-1">₹11,40,000</p>
                    <p className="text-[11px] text-rose-600 mt-0.5">Includes penal interest &amp. fees.</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-blue-50 border border-blue-200/70">
                    <p className="text-[#1886ff] font-medium">Penal &amp. Fee Waiver.</p>
                    <p className="text-base font-bold text-[#1886ff] mt-1">₹4,90,000</p>
                    <p className="text-[11px] text-[#1886ff] mt-0.5">100% penal interest waived.</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200/70">
                    <p className="text-emerald-700 font-medium">Approved OTS Payment.</p>
                    <p className="text-base font-bold text-emerald-700 mt-1">₹5,20,000</p>
                    <p className="text-[11px] text-emerald-600 mt-0.5">Full &amp. final closure amount.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 3: 4-SIDED BORDERED COMPARISON MATRIX */}
            <section id="resolution-comparison-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4"/>
                <span>Strategic Evaluation.</span>
              </div>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 leading-snug">
                3. Resolution Comparison: OTS vs Litigation Pathways
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> clients dealing with severe debt burdens often wonder whether they should request a One-Time Settlement. Restructure their ongoing loan. Settle through a National Lok Adalat. Defend in court. Evaluating each legal mechanism against cost. Relief speed. Credit standing provides total clarity on the optimal claims roadmap. </p>

              {/* 4-Sided Bordered Comparison Table */}
              <div className="rounded-2xl border border-slate-200/80 bg-white overflow-hidden shadow-xs">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs md:text-sm border-collapse">
                    <thead>
                      <tr className="bg-gradient-to-r from-blue-700 to-blue-900 text-white">
                        <th className="p-3.5 md:p-4 border-r border-blue-600/60 font-bold">Resolution Route.</th>
                        <th className="p-3.5 md:p-4 border-r border-blue-600/60 font-bold">Financial Waiver.</th>
                        <th className="p-3.5 md:p-4 border-r border-blue-600/60 font-bold">Turnaround Time</th>
                        <th className="p-3.5 md:p-4 border-r border-blue-600/60 font-bold">Legal Protection.</th>
                        <th className="p-3.5 md:p-4 font-bold">Credit Bureau Tag.</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-slate-700">
                      <tr className="hover:bg-slate-50/80 transition-colors">
                        <td className="p-3.5 md:p-4 border-r border-slate-200 font-bold text-slate-900 bg-blue-50/30"> OTS deal OTS (RBI Policy). </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200 font-semibold text-emerald-700"> 40% to 75% Total Debt Relief. </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200"> 30 to 60 Days </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200"> Complete civil discharge &amp. NDC. </td>
                        <td className="p-3.5 md:p-4 font-semibold text-amber-700"> Settled / Post-Write-Off. </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80 transition-colors">
                        <td className="p-3.5 md:p-4 border-r border-slate-200 font-bold text-slate-900"> Loan Restructuring. </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200 text-slate-600"> 0% Waiver (Tenure Extended). </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200"> 45 to 90 Days </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200"> Contract remains fully active. </td>
                        <td className="p-3.5 md:p-4 font-semibold text-blue-700"> Restructured Account. </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80 transition-colors">
                        <td className="p-3.5 md:p-4 border-r border-slate-200 font-bold text-slate-900 bg-emerald-50/20"> National Lok Adalat. </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200 font-semibold text-emerald-700"> 30% to 60% Waiver. </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200"> Quarterly Court Sittings. </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200"> Binding civil court decree. </td>
                        <td className="p-3.5 md:p-4 font-semibold text-amber-700"> Settled via Lok Adalat. </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80 transition-colors">
                        <td className="p-3.5 md:p-4 border-r border-slate-200 font-bold text-slate-900"> Civil Court lawsuits / DRT. </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200 text-rose-600 font-semibold"> Zero (Compound Interest Adds). </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200"> 3 to 7 Years </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200"> High lawsuits costs &amp. risk. </td>
                        <td className="p-3.5 md:p-4 font-semibold text-rose-700"> Suit Filed / Willful Default. </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* SECTION 4: TECHNICAL CIBIL ALGORITHM & SCORING MATH */}
            <section id="cibil-algorithm-scoring-math" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4"/>
                <span>Bureau Analytics.</span>
              </div>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 leading-snug">
                4. CIBIL Scoring Math: Post-Settlement Credit Rebuilding
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> Credit scores generated by TransUnion CIBIL. Experian. Equifax. CRIF High Mark are calculated using proprietary mathematical algorithms based on five core statistical parameters: payment history (35%). Credit exposure and use (30%). Credit history duration (15%). Credit mix between secured and no-pledge debt (10%). Recent hard inquiry frequency (10%). </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> When an account is settled under an RBI OTS policy. The lending institution updates the bureau with a &quot. Settled&quot. Tag and reports the waived main loan as written off. This results in an fast 50 to 120 point deduction on your credit score. However. This is greatly less damaging than maintaining an open &quot. Default&quot. Or &quot. Written Off&quot. account. This degrades your score continuously each month. By settling the account. You cap further credit damage. Halt negative reporting. Establish a stable baseline to rebuild your CIBIL score back above 750 over 12 to 24 months through secured credit instruments. </p>
            </section>

            {/* SECTION 5: VISUAL INFOGRAPHIC ASSET CARD */}
            <section id="visual-infographic-blueprint" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4"/>
                <span>Visual Blueprint.</span>
              </div>
              <div className="rounded-3xl border border-slate-200/90 bg-white p-4 sm:p-6 shadow-xs space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
                  <div>
                    <h3 className="text-base md:text-lg font-bold text-slate-900">
                      RBI Compromise Settlement &amp; OTS Execution Framework
                    </h3>
                    <p className="text-xs text-slate-500"> formal six-stage structured protocol for debt audit. Talks, and formal loan closure. </p>
                  </div>
                  <a href="/images/infographics/rbi-circular-on-loan-settlement-ots.jpg" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1886ff] hover:underline flex-shrink-0">
                    <span>View High-Res Blueprint.</span>
                    <ExternalLink className="w-3.5 h-3.5"/>
                  </a>
                </div>

                <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-slate-100 border border-slate-200/80">
                  <Image src="/images/infographics/rbi-circular-on-loan-settlement-ots.jpg" alt="RBI Compromise Settlement & OTS Framework 2026 Process Infographic" fill priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 800px" className="object-cover"/>
                </div>
                <p className="text-[11px] text-slate-500 text-center italic"> Figure 1: CredSettle procedural legal help of the RBI Prudential relief &amp. OTS deals rules. </p>
              </div>
            </section>

            {/* SECTION 6: STEP-BY-STEP SOP (6 STAGES) */}
            <section id="step-by-step-settlement-sop" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <CheckCircle2 className="w-4 h-4"/>
                <span>Standard Operating Procedure.</span>
              </div>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 leading-snug">
                5. Step-by-Step SOP: 6-Stage Compromise Settlement Protocol
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> Navigating an bank One-Time Settlement under the RBI OTS deals Circular requires strict adherence to banking protocols. CredSettle implements a structured six-stage standard operating procedure designed to eliminate illegal fees. Present verified economic hardship. Secure an ironclad No Dues letter straight from the bank. </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-[#1886ff] font-bold text-xs uppercase tracking-wide">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center font-black">1</span>
                    <span>Stage 1: Forensic Loan Ledger Audit.</span>
                  </div>
                  <p className="text-slate-700 leading-relaxed"> Our legal team extracts your full account record. Isolating the true remaining main loan from inflated compound interest. Bounced cheque levies. Arbitrary claims surcharges to determine the actual legal base debt risk. </p>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-[#1886ff] font-bold text-xs uppercase tracking-wide">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center font-black">2</span>
                    <span>Stage 2: Financial Hardship Dossier.</span>
                  </div>
                  <p className="text-slate-700 leading-relaxed"> We compile verifiable documentary proof of involuntary economic distress. This includes medical discharge summaries. Termination letters. Or audited balance sheet declines. Establishing genuine non-willful default status. </p>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-[#1886ff] font-bold text-xs uppercase tracking-wide">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center font-black">3</span>
                    <span>Stage 3: Credit Committee Representation.</span>
                  </div>
                  <p className="text-slate-700 leading-relaxed"> A formal legal help is submitted straight to the bank&apos. S Zonal or National Stressed Asset Settlement boards. Showing why an fast OTS deals provides superior claims value compared to prolonged lawsuits. </p>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-[#1886ff] font-bold text-xs uppercase tracking-wide">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center font-black">4</span>
                    <span>Stage 4: Bilateral OTS Negotiations.</span>
                  </div>
                  <p className="text-slate-700 leading-relaxed"> Our senior debt relief specialists engage in rigorous bilateral talks with bank credit officers. Countering aggressive claims demands and securing maximum permissible waivers under board policies. </p>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-[#1886ff] font-bold text-xs uppercase tracking-wide">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center font-black">5</span>
                    <span>Stage 5: Settlement Letter Legal Vetting.</span>
                  </div>
                  <p className="text-slate-700 leading-relaxed"> We review the formal OTS deal approval letter issued on bank letterhead to confirm explicit full-and-final settlement clauses. Verified payment milestones. strict commitments to withdraw legal proceedings. </p>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-[#1886ff] font-bold text-xs uppercase tracking-wide">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center font-black">6</span>
                    <span>Stage 6: Bank Remittance &amp; NDC Issuance.</span>
                  </div>
                  <p className="text-slate-700 leading-relaxed"> You pay the settled payout sum straight to the bank via RTGS or NEFT. Our advocates follow up to ensure the prompt issuance of your full No Dues letter within the legal 30-day window. </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: STATUTORY NOTICE DEFENSE & LEGAL RIGHTS */}
            <section id="statutory-notice-defense" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4"/>
                <span>Statutory Protections.</span>
              </div>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 leading-snug">
                6. Statutory Notice Defense: Borrower Legal Protections
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> When loan defaults occur. Banks often issue legal notices under various Indian legal provisions. Understanding your legal rights under each statute prevents panic and empowers you to respond effectively through authorized legal legal help. </p>

              {/* 4-Card Analytical Defense Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-amber-700 font-bold text-xs uppercase tracking-wide">
                    <ShieldAlert className="w-4 h-4 text-amber-600"/>
                    <span>Section 25 PSSA (NACH / ECS Bounce).</span>
                  </div>
                  <p className="text-slate-700 leading-relaxed"> Dishonour of automated electronic clearing mandates is a bailable legal offense under Section 25 of the Payment and Settlement Systems Act. 2007. Establishing demonstrable hardship and submitting an active OTS proposal provides valid legal grounds to resolve the underlying debt. </p>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-rose-700 font-bold text-xs uppercase tracking-wide">
                    <ShieldAlert className="w-4 h-4 text-rose-600"/>
                    <span>Section 138 Negotiable Instruments Act.</span>
                  </div>
                  <p className="text-slate-700 leading-relaxed"> Cheque bounce notices require a formal response within 15 days of receipt. Section 138 matters are compoundable under Section 147 of the NI Act. Meaning the criminal complaint is promptly withdrawn upon executing a formal OTS deals with the bank. </p>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-xs uppercase tracking-wide">
                    <Scale className="w-4 h-4 text-[#1886ff]"/>
                    <span>Arbitration Section 21 &amp; Perkins Ruling.</span>
                  </div>
                  <p className="text-slate-700 leading-relaxed"> Unilateral arbitrator appointments by lenders are void ab initio under Supreme Court rulings in Perkins Eastman and TRF Ltd. Clients can challenge unilateral arbitration notices. Compelling banks to engage in genuine bilateral OTS deal discussions. </p>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-xs uppercase tracking-wide">
                    <Landmark className="w-4 h-4 text-emerald-600"/>
                    <span>DRT Section 19 &amp; Fair Practices Code.</span>
                  </div>
                  <p className="text-slate-700 leading-relaxed"> For dues exceeding ₹20 Lakhs before Debt claims Tribunals. Filing a written record along with an OTS application under RBI rules creates a strong bank record. Encouraging banks to settle rather than incur years of tribunal fees. </p>
                </div>
              </div>
            </section>

            {/* SECTION 8: 3-TIER ESCALATION MATRIX */}
            <section id="three-tier-escalation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Landmark className="w-4 h-4"/>
                <span>Grievance Mechanism.</span>
              </div>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 leading-snug">
                7. 3-Tier Escalation Matrix: Institutional Grievance Redressal
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> If a bank officer acts arbitrarily. Demands illegal charges. Fails to adhere to RBI OTS deals rules. Clients have access to a structured three-tier legal escalation pathway. </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm">
                <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <div className="font-bold text-slate-900 flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center font-bold text-xs">1</span>
                    <span>Level 1: Grievance Redressal Officer.</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed"> Submit a formal written complaint to the bank&apos. s Branch Manager and designated Grievance Redressal Officer (GRO). The bank is required to respond within 7 to 10 working days. </p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <div className="font-bold text-slate-900 flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center font-bold text-xs">2</span>
                    <span>Level 2: Principal Nodal Officer.</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed"> If unresolved. Escalate the grievance to the bank&apos. s main loan Nodal Officer (PNO) at the company headquarters. The PNO possesses executive formal to review offers and correct daily work errors within 14 to 21 days. </p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <div className="font-bold text-slate-900 flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center font-bold text-xs">3</span>
                    <span>Level 3: RBI Ombudsman (CMS).</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed"> If the lender fails to resolve the issue within 30 days or rejects a valid settlement arbitrarily. Lodge a formal escalation on the RBI Complaint handling System at cms.rbi.org.in for binding RBI adjudication. </p>
                </div>
              </div>
            </section>

            {/* SECTION 9: CHRONOLOGICAL TIMELINE TABLE */}
            <section id="chronological-timeline-milestones" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Calendar className="w-4 h-4"/>
                <span>Procedural Timeline.</span>
              </div>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 leading-snug">
                8. Procedural Timeline: Delinquency to Settlement NDC
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> A structured overview of the typical default timeline. RBI milestones. Optimal intervention windows under the Reserve Bank of India rules. </p>

              {/* 4-Sided Bordered Timeline Table */}
              <div className="rounded-2xl border border-slate-200/80 bg-white overflow-hidden shadow-xs">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs md:text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-800 text-white">
                        <th className="p-3.5 md:p-4 border-r border-slate-700 font-bold">Timeline Stage</th>
                        <th className="p-3.5 md:p-4 border-r border-slate-700 font-bold">Regulatory Milestone.</th>
                        <th className="p-3.5 md:p-4 border-r border-slate-700 font-bold">Bank Action</th>
                        <th className="p-3.5 md:p-4 font-bold">Optimal Borrower Strategy.</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-slate-700">
                      <tr className="hover:bg-slate-50/80 transition-colors">
                        <td className="p-3.5 md:p-4 border-r border-slate-200 font-bold text-slate-900"> Day 1 to 30 </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200"> SMA-0 Classification. </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200"> Automated SMS and reminder calls. </td>
                        <td className="p-3.5 md:p-4"> Evaluate payment capacity or initiate restructuring. </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80 transition-colors">
                        <td className="p-3.5 md:p-4 border-r border-slate-200 font-bold text-slate-900"> Day 31 to 90 </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200"> SMA-1 and SMA-2 Classification. </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200"> Internal claims follow-ups initiated. </td>
                        <td className="p-3.5 md:p-4"> Audit account ledger and gather hardship proofs. </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80 transition-colors">
                        <td className="p-3.5 md:p-4 border-r border-slate-200 font-bold text-slate-900 bg-amber-50/30"> Day 91 to 180 </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200 font-semibold text-amber-800"> NPA Classification. </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200"> 15% strict provisioning allocated. </td>
                        <td className="p-3.5 md:p-4 font-semibold text-blue-700"> Prime window to submit formal OTS proposal. </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80 transition-colors">
                        <td className="p-3.5 md:p-4 border-r border-slate-200 font-bold text-slate-900 bg-emerald-50/30"> Month 6 to 9 </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200 font-semibold text-emerald-800"> OTS deal OTS Approval. </td>
                        <td className="p-3.5 md:p-4 border-r border-slate-200"> Sanction letter issued &amp. remittance received. </td>
                        <td className="p-3.5 md:p-4 font-semibold text-emerald-700"> Receive full No Dues letter (NDC). </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* SECTION 10: SPECIALIZED REAL-WORLD SCENARIOS */}
            <section id="specialized-real-world-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4"/>
                <span>Specialized Scenarios.</span>
              </div>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 leading-snug">
                9. Specialized Scenarios: Layoffs, ARCs &amp; Multi-Lenders
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> Debt relief dynamics differ across money situation. CredSettle designs tailored legal plans to match local real-world client situations. </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <div className="font-bold text-slate-900 flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-[#1886ff]"/>
                    <span>Corporate Layoffs &amp; Income Loss.</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed"> Salaried individuals facing sudden job cuts or salary reductions can present formal severance records to secure extended EMI moratoriums or settled OTS waivers of 50% or more on unpaid private loans. </p>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <div className="font-bold text-slate-900 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-emerald-600"/>
                    <span>MSME &amp; Business Working Capital Default.</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed"> Proprietors and small shop owners dealing with supply chain breaks or unpaid client receivables can leverage the RBI MSME Restructuring rules to achieve structured debt write-offs without asset liquidation. </p>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <div className="font-bold text-slate-900 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-amber-600"/>
                    <span>Multi-Lender Unsecured Debt Consolidation.</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed"> clients servicing multiple credit cards and instant digital app loans benefit from coordinated bilateral settlements across all lenders simultaneously. Preventing cascading legal notices and restoring peace of mind. </p>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <div className="font-bold text-slate-900 flex items-center gap-2">
                    <Landmark className="w-4 h-4 text-purple-600"/>
                    <span>Asset Reconstruction Company (ARC) Portfolios.</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed"> When banks sell stressed loan portfolios to ARCs at deep discounts. Our negotiators leverage the lower acquisition cost to secure large settlement discounts between 50% and 75% for the client. </p>
                </div>
              </div>
            </section>

            {/* SECTION 11: COMPANY PROFILE COMPONENT */}
            <div id="about-credsettle" className="scroll-target pt-4">
              <CompanySection />
            </div>

            {/* SECTION 12: 10 SYNCHRONIZED FAQS */}
            <section id="frequently-asked-questions" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4"/>
                <span>Frequently Asked Questions.</span>
              </div>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 leading-snug">
                Frequently Asked Questions: RBI Loan Settlement &amp; OTS
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> Authoritative answers to common legal and procedural questions regarding Reserve Bank of India OTS deals rules and One-Time Settlements. </p>

              <div className="space-y-3 pt-2">
                {faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (<div key={index} className="rounded-2xl border border-slate-200/80 bg-white overflow-hidden shadow-xs transition-all">
                      <button onClick={() => toggleFaq(index)} className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-bold text-slate-900 hover:text-[#1886ff] transition-colors text-sm sm:text-base">
                        <span>{faq.q}</span>
                        {isOpen ? (<ChevronUp className="w-5 h-5 text-[#1886ff] flex-shrink-0"/>) : (<ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0"/>)}
                      </button>
                      {isOpen && (<div className="px-4 pb-5 sm:px-5 sm:pb-6 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100 pt-3 bg-slate-50/50">
                          {faq.a}
                        </div>)}
                    </div>);
        })}
              </div>
            </section>

            {/* SECTION 13: CITATIONS & OUTBOUND AUTHORITY GRID */}
            <section id="regulatory-citations-authorities" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Landmark className="w-4 h-4"/>
                <span>Statutory Authority &amp; Resources.</span>
              </div>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 leading-snug">
                Regulatory Sources &amp; Outbound Statutory Authorities
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed"> All legal analysis and procedural guidance provided on this page are grounded in legal Indian banking enactments and Reserve Bank of India RBI directions: </p>

              {/* 6 Outbound Authority Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                <a href="https://www.rbi.org.in" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-white border border-slate-200 hover:border-[#1886ff] transition-colors flex items-center justify-between text-xs font-bold text-slate-800 shadow-2xs">
                  <span>Reserve Bank of India.</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#1886ff]"/>
                </a>
                <a href="https://cms.rbi.org.in" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-white border border-slate-200 hover:border-[#1886ff] transition-colors flex items-center justify-between text-xs font-bold text-slate-800 shadow-2xs">
                  <span>RBI CMS Ombudsman.</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#1886ff]"/>
                </a>
                <a href="https://www.cibil.com" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-white border border-slate-200 hover:border-[#1886ff] transition-colors flex items-center justify-between text-xs font-bold text-slate-800 shadow-2xs">
                  <span>TransUnion CIBIL.</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#1886ff]"/>
                </a>
                <a href="https://www.indiacode.nic.in" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-white border border-slate-200 hover:border-[#1886ff] transition-colors flex items-center justify-between text-xs font-bold text-slate-800 shadow-2xs">
                  <span>India Code Legislation.</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#1886ff]"/>
                </a>
                <a href="https://nalsa.gov.in" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-white border border-slate-200 hover:border-[#1886ff] transition-colors flex items-center justify-between text-xs font-bold text-slate-800 shadow-2xs">
                  <span>National Lok Adalat.</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#1886ff]"/>
                </a>
                <a href="https://cybercrime.gov.in" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-white border border-slate-200 hover:border-[#1886ff] transition-colors flex items-center justify-between text-xs font-bold text-slate-800 shadow-2xs">
                  <span>National Cyber Crime.</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#1886ff]"/>
                </a>
              </div>

              {/* 10 Internal Topic Badges */}
              <div className="pt-2">
                <p className="text-xs font-bold text-slate-600 mb-2">Related CredSettle relief Guides:</p>
                <div className="flex flex-wrap gap-2">
                  <Link href="/convert-settled-status-to-closed" className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-medium text-slate-700 hover:border-[#1886ff] hover:text-[#1886ff] transition-colors shadow-2xs">
                    Convert Settled to Closed Status
                  </Link>
                  <Link href="/remove-settled-status-from-cibil" className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-medium text-slate-700 hover:border-[#1886ff] hover:text-[#1886ff] transition-colors shadow-2xs">
                    Remove Settled Tag in CIBIL
                  </Link>
                  <Link href="/rbi-rules-for-recovery-agents" className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-medium text-slate-700 hover:border-[#1886ff] hover:text-[#1886ff] transition-colors shadow-2xs">
                    RBI Recovery Agent Guidelines
                  </Link>
                  <Link href="/is-loan-settlement-illegal-in-india-truth" className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-medium text-slate-700 hover:border-[#1886ff] hover:text-[#1886ff] transition-colors shadow-2xs">
                    Is Loan Settlement Legal in India?
                  </Link>
                  <Link href="/settlement-of-loan-letter" className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-medium text-slate-700 hover:border-[#1886ff] hover:text-[#1886ff] transition-colors shadow-2xs">
                    Bank Settlement Letter Format
                  </Link>
                  <Link href="/credit-card-settlement-calculator" className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-medium text-slate-700 hover:border-[#1886ff] hover:text-[#1886ff] transition-colors shadow-2xs">
                    Credit Card Settlement Calculator
                  </Link>
                  <Link href="/get-noc-after-loan-settlement" className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-medium text-slate-700 hover:border-[#1886ff] hover:text-[#1886ff] transition-colors shadow-2xs">
                    How to Get Bank NOC Certificate
                  </Link>
                  <Link href="/arbitration-notice-personal-loan-default" className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-medium text-slate-700 hover:border-[#1886ff] hover:text-[#1886ff] transition-colors shadow-2xs">
                    Arbitration Notice Defense Guide
                  </Link>
                  <Link href="/business-loan-settlement-process" className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-medium text-slate-700 hover:border-[#1886ff] hover:text-[#1886ff] transition-colors shadow-2xs">
                    Business Loan Settlement Process
                  </Link>
                  <Link href="/cibil-score-kaise-badhaye-after-settlement" className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-medium text-slate-700 hover:border-[#1886ff] hover:text-[#1886ff] transition-colors shadow-2xs">
                    Rebuild CIBIL Score Post-Settlement
                  </Link>
                </div>
              </div>
            </section>

          </div>

          {/* ================= RIGHT COLUMN: STICKY AUTHOR BIO & CTA ================= */}
          <aside className="sticky top-6 space-y-6">
            
            {/* Author Bio Card */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3">
              <div className="flex items-center gap-3">
                <Link href="/author/ashish-jhangra" className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-[#1886ff] font-extrabold text-sm hover:bg-blue-200 transition-colors flex-shrink-0" title="View Ashish Jhangra Profile">
                  AJ
                </Link>
                <div>
                  <Link href="/author/ashish-jhangra" className="text-sm font-bold text-slate-900 hover:text-[#1886ff] transition-colors block">
                    Ashish Jhangra
                  </Link>
                  <p className="text-[11px] font-semibold text-[#1886ff]"> Legal &amp. Debt relief expert. </p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed"> Expert in Reserve Bank of India prudential banking regulations. OTS deals rules, loan dispute relief. Credit bureau compliance. </p>
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

            {/* Emergency Advocate CTA Card (#2452ae background / blue gradient) */}
            <div className="rounded-3xl bg-gradient-to-br from-[#2452ae] to-blue-800 p-6 shadow-md text-white space-y-4">
              <div className="inline-flex items-center gap-1.5 py-1 px-3 rounded-lg bg-white/15 text-blue-100 text-[11px] font-bold tracking-wide">
                <Lock className="w-3.5 h-3.5"/>
                <span>100% CONFIDENTIAL &amp; LAWFUL.</span>
              </div>
              <div>
                <p className="text-xl font-bold text-white leading-tight"> Overwhelmed by Loan Defaults or Agent Calls? </p>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal"> Our skilled debt relief workers represent you before bank credit boards under formal RBI rules to stop abuse and settle manageable OTS deals. </p>
              </div>
              <Link href="/contact" className="block w-full text-center bg-white text-blue-900 font-bold py-3.5 px-4 rounded-xl hover:bg-slate-100 transition-all shadow-md text-sm transform hover:-translate-y-0.5">
                Use RBI Rules to Settle Your Loan
              </Link>
              <div className="text-center pt-1">
                <a href="tel:+918800226635" className="text-xs sm:text-sm text-blue-100 hover:text-white font-semibold flex items-center justify-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-white"/>
                  <span>Call: +91-8800226635.</span>
                </a>
              </div>
            </div>

            {/* CredSettle Trust Badges Card */}
            <div className="bg-white rounded-3xl border border-slate-200/80 p-5 space-y-3 text-xs shadow-xs">
              <p className="font-bold text-slate-900 uppercase tracking-wider text-[11px] flex items-center gap-1.5"> <ShieldCheck className="w-3.5 h-3.5 text-emerald-600"/> CredSettle Trust Commitments. </p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2"> <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5"/> <span><strong>Zero Upfront Risk:</strong> Success-oriented debt relief assistance.</span> </li>
                <li className="flex items-start gap-2"> <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5"/> <span><strong>Direct Bank Payment:</strong> 100% of settlement funds paid straight to lender.</span> </li>
                <li className="flex items-start gap-2"> <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5"/> <span><strong>Full Legal Compliance:</strong> Grounded strictly in RBI Master Directions.</span> </li>
                <li className="flex items-start gap-2"> <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5"/> <span><strong>Pan-India Advocacy:</strong> skilled debt relief negotiators nationwide.</span> </li>
              </ul>
            </div>

          </aside>

        </div>
      </div>
    </main>);
}
