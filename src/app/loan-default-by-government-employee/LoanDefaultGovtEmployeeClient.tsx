'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import StatsStrip from '@/components/StatsStrip';
import CompanySection from '@/components/CompanySection';
import { ChevronDown, Scale, ExternalLink, ShieldCheck, CheckCircle2, AlertTriangle, FileText, HelpCircle, TrendingUp, Award, BookOpen, Building2, DollarSign, Check, Lock, Phone, AlertCircle, CreditCard, Briefcase, Bookmark, ArrowRight, Clock, UserCheck, Sparkles, Gavel, BadgeAlert, Landmark, ShieldAlert } from 'lucide-react';
export default function LoanDefaultGovtEmployeeClient() {
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
        { id: 'quick-crux', label: 'Executive Summary & Crux' },
        { id: 'debt-economics-and-service-vulnerabilities', label: '1. Debt Economics in Govt Jobs' },
        { id: 'financial-breakdown-and-settlement-math', label: '2. Financial Math & Penal Dues' },
        { id: 'debt-resolution-comparison-matrix', label: '3. Debt Resolution Matrix' },
        { id: 'cibil-scoring-algorithm-and-repair', label: '4. CIBIL Algorithm & Rebuilding' },
        { id: 'infographic-overview', label: 'Visual Blueprint Defense' },
        { id: 'step-by-step-settlement-sop', label: '5. 6-Stage Resolution SOP' },
        { id: 'statutory-notice-defense-and-legal-rights', label: '6. Statutory Defense & CCS Rules' },
        { id: 'three-tier-grievance-escalation-matrix', label: '7. 3-Tier Grievance Matrix' },
        { id: 'chronological-resolution-timeline', label: '8. Chronological Milestones' },
        { id: 'specialized-government-cadre-scenarios', label: '9. Specialized Cadre Scenarios' },
        { id: 'company-profile', label: 'About CredSettle' },
        { id: 'frequently-asked-questions', label: '10. Frequently Asked Questions' },
        { id: 'statutory-citations-and-regulatory-authorities', label: '11. Citations & Official Portals' }
    ];
    const faqs = [
        {
            q: 'Can a government employee be dismissed or suspended solely for defaulting on a personal loan?',
            a: "No. A private loans default is a civil contractual claims. Not an automatic ground for suspension or dismissal. Under Central Civil Services (CCS) Conduct Rules. Departmental disciplinary action is initiated only if the default arises from habitual indebtedness. Moral turpitude. Money fraud. An unmanaged court decree causing steady salary attachment under Rule 16."
        },
        {
            q: 'What is Rule 16 of the Central Civil Services (CCS) Conduct Rules regarding debt?',
            a: "Rule 16 of the CCS (Conduct) Rules mandates that a state servant must manage private finances to avoid habitual indebtedness or ruin. If a state servant faces legal ruin or a large portion of salary is attached under a court decree. They must promptly submit a formal factual report to their Disciplinary formal explaining the hardship."
        },
        {
            q: 'Can a bank or recovery agent visit a government office or call the administrative department?',
            a: "Absolutely not. RBI Master Directions on Fair Practices Code and circulars strictly forbid claims agents from visiting a client's state office. Calling superiors. Harassing colleagues. Creating workplace breaks. Any such invasion of rights violates RBI rules and can be reported to the RBI agents and local police officials."
        },
        {
            q: 'Can a bank attach the entire salary of a government employee to recover a defaulted loan?',
            a: "No. Under Section 60(1)(i) of the Code of Civil steps (CPC). 1908. A civil court can only attach the salary exceeding the first Rs 1,000 plus two-thirds of the remainder. Also. Salary attachment under a decree cannot continue for more than 24 months. Subsequent attachments are barred for 12 months. Ensuring essential subsistence is constitutionally preserved."
        },
        {
            q: 'Are Employee Provident Fund (GPF/EPF), Gratuity, and Pension safe from bank recovery?',
            a: "Yes. Section 60(1)(g) and (k) of the CPC. Read with the Provident Funds Act. 1925 and the Payment of Gratuity Act. 1972. Provide absolute immunity to GPF. EPF. Legal pensions. Gratuity balances. lenders banks and courts cannot attach or seize retirement funds or death-cum-retirement benefits for no-pledge debt claims."
        },
        {
            q: 'Will opting for a One-Time Settlement (OTS) harm a government servant\'s vigilance clearance or promotion?',
            a: "No. A One-Time settlement (OTS) is a legitimate. RBI-approved OTS deal mechanism between the lender and client. It is a private civil contract closure that does not involve penal legal steps. Departmental inquiry. Vigilance adverse entries. Provided there is no pending court-ordered steady salary attachment or penal conviction."
        },
        {
            q: 'What legal steps should a government employee take upon receiving a Section 138 or Section 25 notice?',
            a: "Upon receiving a notice under Section 138 of the Negotiable Instruments Act or Section 25 of the PSSA. The staff must reply through a legal counsel within the legal timeline (15 to 30 days). The response should paper hardship. claims erroneous extra fees. Propose a structured bilateral settlement to prevent magistrate court summons."
        },
        {
            q: 'How does a loan default or settlement affect a government employee\'s CIBIL score?',
            a: 'Defaulting lowers the CIBIL score by 150 to 250 points. Meanwhile. An OTS reflects a Settled or Post-settlement Closure status. However. Once the No Dues letter (NDC) is issued. The staff can rebuild their credit score to 750+ within 12 to 18 months using secured credit cards and regular utility payments. Without any adverse impact on service records.'
        },
        {
            q: 'Can a government servant be arrested by police for non-payment of an unsecured personal loan?',
            a: "No. Defaulting on an no-pledge private loans is purely a civil breach of contract governed by the Indian Contract Act. Police officials have zero legal police area to intervene. Summon. Arrest a citizen for unpaid bank loans. Unless there is a proven allegation of deliberate penal fraud. Forgery. Impersonation."
        },
        {
            q: 'What is the recommended strategy for a government employee to settle bank debt confidentially?',
            a: "The optimal plan is engaging a expert debt relief firm to initiate formal. Confidential talks with the bank credit boards. This freezes harsh claims actions. Protects office rights. Eliminates extra fees inflation. Secures a formal One-Time closure note with a 40% to 60% waiver."
        }
    ];
    return (<main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-[#1886ff] selection:text-white">
      {/* 1. STATS STRIP COMPONENT */}
      <StatsStrip />

      {/* 2. WIDESCREEN 3-COLUMN LAYOUT */}
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
                  <span>Service Jurisprudence Protected.</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight"> CCS Conduct Rules 1964. Section 60 CPC &amp. RBI Fair Practices rules. </p>
              </div>
            </div>
          </aside>

          {/* ================= MIDDLE COLUMN: MAIN CONTENT ================= */}
          <div className="space-y-8 md:space-y-10 min-w-0">
            
            {/* Executive Summary Box */}
            <div id="quick-crux" className="scroll-target rounded-2xl bg-[#F4F8FE] border border-blue-100/90 border-l-[5px] border-l-[#1886ff] p-5 sm:p-6 md:p-7 shadow-xs space-y-4 text-slate-800">
              <div className="flex items-center gap-2 text-xs md:text-sm font-black uppercase tracking-wider text-[#1886ff]">
                <Bookmark className="w-4 h-4 text-[#1886ff]"/>
                <span>Executive Summary: Government Servant Debt Defense.</span>
              </div>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium"> state staff in India face unique systemic vulnerabilities when private loans defaults occur. Beyond standard money claims. Public servants risk office complications. Departmental inquiries under service conduct rules. harsh workplace abuse by claims agents. Here is the definitive legal summary: </p>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5"> <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5"/> <div> <strong className="text-slate-900 font-bold">Civil Matter. Not Misconduct:</strong> Loan default is a civil contractual claims. Not a ground for automatic suspension or dismissal. </div> </li>

                <li className="flex items-start gap-2.5"> <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5"/> <div> <strong className="text-slate-900 font-bold">Rule 16 CCS Conduct Safe Harbor:</strong> Departmental inquiry applies only to habitual misconduct. genuine hardship is by law protected. </div> </li>

                <li className="flex items-start gap-2.5"> <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5"/> <div> <strong className="text-slate-900 font-bold">Salary &amp. Pension Immunity:</strong> Section 60 CPC protects basic salary. Meanwhile. GPF. EPF. Gratuity. And pensions are 100% exempt from attachment. </div> </li>

                <li className="flex items-start gap-2.5"> <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5"/> <div> <strong className="text-slate-900 font-bold">Zero Workplace abuse:</strong> RBI Fair Practices Code strictly prohibits claims agents from visiting offices or calling superiors. </div> </li>

                <li className="flex items-start gap-2.5"> <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5"/> <div> <strong className="text-slate-900 font-bold">Confidential 40%. 60% OTS:</strong> Direct bank OTS deals eliminate debt cleanly without generating adverse vigilance entries. </div> </li>
              </ul>
            </div>

            {/* SECTION 1: Debt Economics & Service Vulnerabilities in Government Jobs */}
            <section id="debt-economics-and-service-vulnerabilities" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]"/>
                <span>Institutional Realities.</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. Debt Economics &amp; Service Vulnerabilities in Government Jobs
              </h2>
              
              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> state staff across Central Ministries. State Secretariats. PSUs. Defense establishments are often offered pre-approved private loans and credit cards due to secure monthly payrolls. However. Unforeseen life crises such as major health treatments or kin crises can quickly overwhelm a fixed salary structure. This leads to missed EMIs and severe debt stress. </p>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> When payments stop. Accounts progress from SMA-0 to SMA-2 and cross into Non-Performing Asset (NPA) status at 90 days. Requiring banks to make strict cash bank reserves. Because no-pledge private loans carry no pledge to seize under the SARFAESI Act. claims firms often exploit the staff&apos. s reputational sensitivity and fear of workplace inquiries rather than pursuing standard civil adjudication. </p>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> Crucially. A bank loan default is strictly a civil breach of contract under the Indian Contract Act. Established legal protections exist under service rules and civil law to safeguard the dignity. Livelihood. office standing of public servants facing genuine ruin. </p>
            </section>

            {/* SECTION 2: Financial Breakdown: Principal vs Inflated Penal Dues */}
            <section id="financial-breakdown-and-settlement-math" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <DollarSign className="w-4 h-4 text-[#1886ff]"/>
                <span>Financial Analysis.</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. Financial Breakdown: Principal vs Inflated Penal Dues
              </h2>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> Following default. Trade lenders rapidly inflate dues by adding 24% to 36% annualized extra fees. NACH bounce charges. Legal fees. Within months. Claimed unpaid dues can surge by 35% to 60% above the genuine main loan owed. </p>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> Under RBI Fair Lending Directions. Capitalizing extra fees into main loan balances is strictly prohibited. In a One-Time settlement (OTS). The starting baseline is strictly the. <em>Net base loan.</em>Waiving total penalties and late charges. </p>

              {/* 180-Day NPA Calculation Card */}
              <div className="bg-white rounded-2xl border border-slate-200/80 p-5 md:p-6 shadow-xs space-y-4">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 pb-3 border-b border-slate-100">
                  <h3 className="font-bold text-slate-900 text-sm md:text-base flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-[#1886ff]"/>
                    Representative 180-Day NPA Stressed Asset Audit
                  </h3>
                  <span className="text-[11px] font-bold bg-amber-50 text-amber-800 border border-amber-200/60 px-2.5 py-0.5 rounded-full">
                    Typical Case Profile.
                  </span>
                </div>

                <p className="text-xs md:text-sm text-slate-600 leading-relaxed"> For a state staff with an original ₹15,00,000 private loans inflated to ₹19,85,000 after 180 days default. A structured hardship settlement establishes an achievable OTS deal target: </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
                  <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200/60">
                    <span className="text-slate-500 block text-[11px]">Contractual Principal Owed.</span>
                    <span className="text-sm md:text-base font-bold text-slate-900 mt-0.5 block">₹12,40,000</span>
                    <span className="text-[10px] text-slate-500">True ledger principal.</span>
                  </div>

                  <div className="bg-red-50/60 p-3.5 rounded-xl border border-red-100">
                    <span className="text-red-700 block text-[11px]">Bank Inflated Claim.</span>
                    <span className="text-sm md:text-base font-bold text-red-900 mt-0.5 block">₹19,85,000</span>
                    <span className="text-[10px] text-red-600">Includes 24% penal + GST.</span>
                  </div>

                  <div className="bg-blue-50/70 p-3.5 rounded-xl border border-blue-100">
                    <span className="text-blue-700 block text-[11px]">Penal Dues Disputed.</span>
                    <span className="text-sm md:text-base font-bold text-blue-900 mt-0.5 block">₹7,45,000</span>
                    <span className="text-[10px] text-blue-600">100% waiver claimed.</span>
                  </div>

                  <div className="bg-emerald-50/70 p-3.5 rounded-xl border border-emerald-100">
                    <span className="text-emerald-700 block text-[11px]">Final OTS Target.</span>
                    <span className="text-sm md:text-base font-bold text-emerald-900 mt-0.5 block">₹6,80,000 – ₹8,20,000.</span>
                    <span className="text-[10px] text-emerald-700 font-semibold">45% to 55% Total Relief.</span>
                  </div>
                </div>

                <p className="text-xs text-slate-500 pt-1 leading-relaxed"> Settling at this realistic threshold clears the bank&apos. s bad debt provision while permanently shielding the staff from ruin. </p>
              </div>
            </section>

            {/* SECTION 3: Debt Resolution Matrix: OTS vs Restructuring vs Litigation */}
            <section id="debt-resolution-comparison-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]"/>
                <span>Comparative Matrix.</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Debt Resolution Matrix: OTS vs Restructuring vs Litigation
              </h2>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> Compare the office. Legal. And money trade-offs of key debt relief mechanisms for state staff: </p>

              <div className="overflow-x-auto rounded-2xl border border-slate-200/80 bg-white shadow-xs">
                <table className="w-full text-left text-xs md:text-sm divide-y divide-slate-200/80">
                  <thead className="bg-slate-50 text-slate-700 font-bold">
                    <tr className="divide-x divide-slate-200/80">
                      <th className="p-3.5">Resolution Route.</th>
                      <th className="p-3.5">Financial Relief.</th>
                      <th className="p-3.5">Service Record Impact.</th>
                      <th className="p-3.5">Legal Exposure</th>
                      <th className="p-3.5">Timeline</th>
                      <th className="p-3.5 text-[#1886ff]">Feasibility</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-600">
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-100">
                      <td className="p-3.5 font-bold text-slate-900">One-Time settlement (OTS).</td>
                      <td className="p-3.5 text-emerald-700 font-semibold">40% to 60% total waiver.</td>
                      <td className="p-3.5 text-emerald-700 font-medium">Zero adverse entries. complete rights.</td>
                      <td className="p-3.5">All civil &amp. Sec 138/25 notices closed.</td>
                      <td className="p-3.5">30. 60 Days</td>
                      <td className="p-3.5 text-emerald-700 font-bold">Recommended</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-100">
                      <td className="p-3.5 font-bold text-slate-900">Restructuring</td>
                      <td className="p-3.5 text-amber-700">0% waiver. extended tenure.</td>
                      <td className="p-3.5">Service safe. monthly burden stays.</td>
                      <td className="p-3.5">Notices paused if EMIs paid.</td>
                      <td className="p-3.5">60. 90 Days</td>
                      <td className="p-3.5 text-amber-700 font-semibold">Moderate</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-100">
                      <td className="p-3.5 font-bold text-slate-900">Lok Adalat</td>
                      <td className="p-3.5 text-blue-700">30% to 50% OTS deal.</td>
                      <td className="p-3.5">court consent decree. no vigilance impact.</td>
                      <td className="p-3.5">Non-appealable consent order.</td>
                      <td className="p-3.5">Quarterly</td>
                      <td className="p-3.5 text-blue-700 font-semibold">Good Option</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-100">
                      <td className="p-3.5 font-bold text-slate-900">Court lawsuits.</td>
                      <td className="p-3.5 text-rose-700">Zero waiver. high legal fees.</td>
                      <td className="p-3.5 text-rose-700">Risk of Sec 60 CPC salary decree.</td>
                      <td className="p-3.5">Prolonged civil summons &amp. trial.</td>
                      <td className="p-3.5">2. 5 Years</td>
                      <td className="p-3.5 text-rose-700 font-semibold">Risky</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-100">
                      <td className="p-3.5 font-bold text-slate-900">Passive Default</td>
                      <td className="p-3.5 text-rose-700">Penalties compound continuously.</td>
                      <td className="p-3.5 text-rose-700">Risk of workplace abuse &amp. Rule 16 query.</td>
                      <td className="p-3.5">Ex-parte decrees &amp. bailable warrants.</td>
                      <td className="p-3.5">Indefinite</td>
                      <td className="p-3.5 text-rose-700 font-bold">Avoid</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 4: Technical CIBIL Algorithm & Credit Rebuilding Pathways */}
            <section id="cibil-scoring-algorithm-and-repair" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4 text-[#1886ff]"/>
                <span>Credit Mathematics.</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. Technical CIBIL Algorithm &amp; Credit Rebuilding Pathways
              </h2>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> Loan default does not permanently damage creditworthiness. Credit bureaus (CIBIL. Experian. CRIF. Equifax) calculate scores based on five standardized weight factors: </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 text-xs">
                <div className="bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-2xs">
                  <span className="font-bold text-slate-900 block text-xs">35% Payment History.</span>
                  <p className="text-[11px] text-slate-600 mt-1">DPD track record across active accounts.</p>
                </div>
                <div className="bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-2xs">
                  <span className="font-bold text-slate-900 block text-xs">30% Credit use.</span>
                  <p className="text-[11px] text-slate-600 mt-1">unpaid debt vs total credit limit.</p>
                </div>
                <div className="bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-2xs">
                  <span className="font-bold text-slate-900 block text-xs">15% Credit History Age.</span>
                  <p className="text-[11px] text-slate-600 mt-1">Longevity of established credit lines.</p>
                </div>
                <div className="bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-2xs">
                  <span className="font-bold text-slate-900 block text-xs">10% Credit Mix</span>
                  <p className="text-[11px] text-slate-600 mt-1">Balance between secured and no-pledge debt.</p>
                </div>
                <div className="bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-2xs">
                  <span className="font-bold text-slate-900 block text-xs">10% Recent Inquiries.</span>
                  <p className="text-[11px] text-slate-600 mt-1">Hard credit checks within trailing 12 months.</p>
                </div>
              </div>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> Once an OTS is finalized and a No Dues letter is issued. Section 21 of the Credit Information firms (Regulation) Act (CICRA) enables clients to ensure accurate CIBIL desk reporting. By using a secured fixed-deposit credit card and maintaining low use. Credit scores recover back to 750+ within 12 to 18 months. </p>
            </section>

            {/* SECTION 5: Visual Infographic Asset Card */}
            <section id="infographic-overview" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <ShieldCheck className="w-4 h-4 text-[#1886ff]"/>
                <span>Visual Blueprint.</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Visual Blueprint: Government Servant Debt Defense Protocol
              </h2>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> Review the full visual architecture covering CCS conduct rules. Section 60 CPC salary exemptions. The 6-step One-Time settlement roadmap engineered mainly for state staff: </p>

              {/* Infographic Container */}
              <div className="rounded-2xl border border-slate-200/80 bg-white p-3 sm:p-4 shadow-sm space-y-3">
                <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-slate-900">
                  <Image src="/images/infographics/loan-default-by-government-employee.jpg" alt="Loan Default Consequences for Government Employees Infographic" fill className="object-cover" priority sizes="(max-width: 1024px) 100vw, 850px"/>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 px-1 pt-1 text-xs text-slate-500">
                  <span>Figure 1.0: Administrative Protection, Salary Attachment Limits &amp; Settlement Flowchart.</span>
                  <a href="/images/infographics/loan-default-by-government-employee.jpg" target="_blank" rel="noopener noreferrer" className="text-[#1886ff] hover:underline font-semibold flex items-center gap-1">
                    <span>View High-Res Infographic.</span>
                    <ExternalLink className="w-3.5 h-3.5"/>
                  </a>
                </div>
              </div>
            </section>

            {/* SECTION 6: Step-by-Step SOP (6 Stages) */}
            <section id="step-by-step-settlement-sop" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Award className="w-4 h-4 text-[#1886ff]"/>
                <span>Standard Operating Procedure.</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. Step-by-Step SOP: 6-Stage Government Servant Resolution
              </h2>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> Our structured 6-stage settlement protocol resolves debt while protecting service standing: </p>

              <div className="space-y-3 pt-1">
                {/* Stage 1 */}
                <div className="bg-white p-4.5 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md inline-block">
                    Stage 01: Forensic Audit (Days 1–10).
                  </span>
                  <p className="text-xs md:text-sm text-slate-700 leading-relaxed"> We audit the complete loan record. Disputing compound extra fees. Unlawful bounce charges. Unapproved fees to establish the genuine main loan baseline. </p>
                </div>

                {/* Stage 2 */}
                <div className="bg-white p-4.5 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md inline-block">
                    Stage 02: Hardship Dossier (Days 11–20).
                  </span>
                  <p className="text-xs md:text-sm text-slate-700 leading-relaxed"> We compile documented health and kin hardship proofs alongside CCS Conduct Rule declarations. Showing genuine unforeseen ruin rather than habitual indebtedness. </p>
                </div>

                {/* Stage 3 */}
                <div className="bg-white p-4.5 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md inline-block">
                    Stage 03: Committee Representation (Days 21–30).
                  </span>
                  <p className="text-xs md:text-sm text-slate-700 leading-relaxed"> Formal legal help is served straight to the bank Stressed Asset boards. Asserting RBI Fair Practice protections to bar agent visits to state secretariats. </p>
                </div>

                {/* Stage 4 */}
                <div className="bg-white p-4.5 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md inline-block">
                    Stage 04: Bilateral Negotiation (Days 31–45).
                  </span>
                  <p className="text-xs md:text-sm text-slate-700 leading-relaxed"> Our specialists settle straight with bank nodal executives. Leveraging NPA bank reserves mandates to secure a 40% to 60% OTS deal waiver across all dues. </p>
                </div>

                {/* Stage 5 */}
                <div className="bg-white p-4.5 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md inline-block">
                    Stage 05: Sanction Letter Vetting (Days 46–55).
                  </span>
                  <p className="text-xs md:text-sm text-slate-700 leading-relaxed"> We vet the bank formal OTS sanction letter to ensure full debt waiver. Withdrawal of legal notices. Guaranteed issuance of a No Dues letter. </p>
                </div>

                {/* Stage 6 */}
                <div className="bg-white p-4.5 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md inline-block">
                    Stage 06: Remittance &amp; Closure (Days 56–60+).
                  </span>
                  <p className="text-xs md:text-sm text-slate-700 leading-relaxed"> The payout sum is remitted straight to the loan account. Followed by acquiring the formal NDC and updating CIBIL records in compliance with CICRA norms. </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: Statutory Notice Defense & Legal Rights */}
            <section id="statutory-notice-defense-and-legal-rights" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]"/>
                <span>Statutory Protections.</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. Statutory Notice Defense: CCS Rules, NI Act &amp; CPC Rights
              </h2>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> Understanding the exact legal scope of legal notices empowers state servants to respond effectively: </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                {/* Card 1: CCS Rule 16 */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                    <ShieldAlert className="w-4 h-4 text-blue-600"/>
                    <span>Rule 16 CCS (Conduct) Rules, 1964.</span>
                  </div>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed"> Rule 16 mandates avoiding habitual indebtedness. However. Submitting a timely factual hardship report to the Disciplinary formal for unforeseen money ruin insulates the staff from misconduct charges. </p>
                </div>

                {/* Card 2: Section 60 CPC */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                    <Landmark className="w-4 h-4 text-emerald-600"/>
                    <span>Section 60(1)(i) CPC Salary Exemptions.</span>
                  </div>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed"> lenders cannot attach full pay. Section 60 strictly exempts the first ₹1,000 plus two-thirds of remainder salary. Capped at 24 months. Meanwhile, GPF, EPF. Pensions are 100% immune from attachment. </p>
                </div>

                {/* Card 3: Section 138 NI Act & Section 25 PSSA */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                    <BadgeAlert className="w-4 h-4 text-amber-600"/>
                    <span>Section 138 NI Act &amp; Sec 25 PSSA.</span>
                  </div>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed"> Notices for bounced cheques or NACH auto-debits require a prompt lawyers response establishing lack of fraudulent intent and proposing bilateral settlement. Averting court summons. </p>
                </div>

                {/* Card 4: Unilateral Arbitration Rulings */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                    <Scale className="w-4 h-4 text-purple-600"/>
                    <span>Arbitration &amp; Perkins Precedents.</span>
                  </div>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed"> Under Supreme Court rulings in. <em>TRF Ltd.</em> and <em>Perkins Eastman</em>Banks cannot unilaterally appoint a sole judge. Such arbitrations can be challenged under Section 12(5) as voidable. </p>
                </div>
              </div>

              <div className="bg-blue-50/70 border border-blue-200/70 p-4 rounded-xl text-xs md:text-sm text-slate-700 leading-relaxed space-y-1.5">
                <p className="font-bold text-slate-900 flex items-center gap-2"> <ShieldCheck className="w-4 h-4 text-[#1886ff]"/> Workplace claims abuse is Strictly Prohibited by RBI. </p>
                <p> RBI Master Directions strictly prohibit claims agents from visiting state offices. Contacting superiors or colleagues. Calling outside 8:00 AM to 7:00 PM. Any breach can be reported straight to the RBI agents. </p>
              </div>
            </section>

            {/* SECTION 8: 3-Tier Escalation Matrix */}
            <section id="three-tier-grievance-escalation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff]"/>
                <span>Grievance Hierarchy.</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. 3-Tier Escalation Matrix: Institutional Redressal Hierarchy
              </h2>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> If lenders use coercive tactics. Invoke this 3-tier legal redressal mechanism: </p>

              <div className="space-y-3 pt-1">
                <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div>
                    <span className="text-[11px] font-bold text-[#1886ff] uppercase tracking-wider block">Level 01 Escalation.</span>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900">Principal Grievance Redressal Officer (GRO)</h3>
                    <p className="text-xs text-slate-600 mt-1"> Written reports to the bank internal GRO detailing agent abuse or demanding account correction. relief: 7. 10 days. </p>
                  </div>
                  <span className="text-xs font-bold text-slate-700 bg-slate-100 px-3 py-1 rounded-full whitespace-nowrap">
                    7-10 Days
                  </span>
                </div>

                <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div>
                    <span className="text-[11px] font-bold text-indigo-600 uppercase tracking-wider block">Level 02 Escalation.</span>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900">Principal Nodal Officer (PNO)</h3>
                    <p className="text-xs text-slate-600 mt-1"> Appellate reports to the bank main loan Nodal agents to suspend harsh claims. relief: 14. 21 days. </p>
                  </div>
                  <span className="text-xs font-bold text-indigo-700 bg-indigo-50 px-3 py-1 rounded-full whitespace-nowrap">
                    14-21 Days
                  </span>
                </div>

                <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div>
                    <span className="text-[11px] font-bold text-emerald-600 uppercase tracking-wider block">Level 03 Escalation.</span>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900">RBI Integrated Ombudsman (cms.rbi.org.in)</h3>
                    <p className="text-xs text-slate-600 mt-1"> Online legal reports under the RBI Integrated agents Scheme. 2021 for binding RBI claims adjudication. </p>
                  </div>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full whitespace-nowrap">
                    30 Days
                  </span>
                </div>
              </div>
            </section>

            {/* SECTION 9: Chronological Timeline Table */}
            <section id="chronological-resolution-timeline" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Clock className="w-4 h-4 text-[#1886ff]"/>
                <span>Procedural Milestones.</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. Chronological Timeline: Default to Complete Debt Discharge
              </h2>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> Strategic legal countermeasures at every stage of the loan default lifecycle: </p>

              <div className="overflow-x-auto rounded-2xl border border-slate-200/80 bg-white shadow-xs">
                <table className="w-full text-left text-xs md:text-sm divide-y divide-slate-200/80">
                  <thead className="bg-slate-50 text-slate-700 font-bold">
                    <tr className="divide-x divide-slate-200/80">
                      <th className="p-3.5">default Phase.</th>
                      <th className="p-3.5">Banking Milestone.</th>
                      <th className="p-3.5">Lender Actions &amp; Risks.</th>
                      <th className="p-3.5 text-[#1886ff]">Recommended Action.</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-600">
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-100">
                      <td className="p-3.5 font-bold text-slate-900">Days 1. 30</td>
                      <td className="p-3.5">SMA-0 Stage</td>
                      <td className="p-3.5">Automated calls. Initial late fees.</td>
                      <td className="p-3.5 font-medium">Review budget. halt high-rates roll-overs.</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-100">
                      <td className="p-3.5 font-bold text-slate-900">Days 31. 60</td>
                      <td className="p-3.5">SMA-1 Stage</td>
                      <td className="p-3.5">claims calls &amp. firm assignment.</td>
                      <td className="p-3.5 font-medium">Issue anti-abuse notice against office visits.</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-100">
                      <td className="p-3.5 font-bold text-slate-900">Days 61. 90</td>
                      <td className="p-3.5">SMA-2 Stage</td>
                      <td className="p-3.5">Final demand notices. Section 25 warnings.</td>
                      <td className="p-3.5 font-medium">Conduct audits &amp. claims penalty fees.</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-100">
                      <td className="p-3.5 font-bold text-slate-900">Days 91. 180</td>
                      <td className="p-3.5">NPA Classification.</td>
                      <td className="p-3.5">Bad debt status. cash bank reserves starts.</td>
                      <td className="p-3.5 text-[#1886ff] font-bold">Initiate formal One-Time settlement (OTS) proposal.</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-100">
                      <td className="p-3.5 font-bold text-slate-900">Months 6. 9</td>
                      <td className="p-3.5">OTS Sanction &amp. Closure.</td>
                      <td className="p-3.5">Bank issues OTS deal sanction letter.</td>
                      <td className="p-3.5 text-emerald-700 font-semibold">pay OTS amount straight. secure No Dues letter.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: Specialized Real-World Scenarios */}
            <section id="specialized-government-cadre-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]"/>
                <span>Cadre-Specific Scenarios.</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Specialized Scenarios: Central, State, Defence &amp; PSU Staff
              </h2>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> Tailored debt relief plans across different wings of public service: </p>

              <div className="space-y-3 pt-1">
                {/* Scenario 1 */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                    <Landmark className="w-4 h-4 text-[#1886ff]"/>
                    Central Civil Services (CCS) &amp; Secretariat Personnel
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed"> Officials governed by CCS (Conduct) Rules. 1964 receive confidential legal legal help straight with bank headquarters. Ensuring complete rights from departmental vigilance. </p>
                </div>

                {/* Scenario 2 */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-[#1886ff]"/>
                    State Government &amp; District Administration Staff
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed"> We defend state staff from banned local bank salary deductions. Asserting Section 60 CPC exemptions and settling direct OTS terms. </p>
                </div>

                {/* Scenario 3 */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#1886ff]"/>
                    Defence &amp; Paramilitary Forces (Army, Navy, Air Force, CAPF)
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed"> Armed forces personnel facing strict service discipline receive expedited settlement legal help to safeguard unit service records and pledge clearances. </p>
                </div>

                {/* Scenario 4 */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-[#1886ff]"/>
                    PSU &amp; Nationalised Bank Staff (ARC Assignments)
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed"> For PSU staff whose debt is sold to Asset Reconstruction firms (ARCs). We capitalize on the ARC&apos. S deep portfolio purchase discounts to secure fast. High-waiver deals. </p>
                </div>
              </div>
            </section>

            {/* SECTION 11: Company Profile */}
            <div id="company-profile" className="scroll-target">
              <CompanySection />
            </div>

            {/* SECTION 12: Frequently Asked Questions */}
            <section id="frequently-asked-questions" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <HelpCircle className="w-4 h-4 text-[#1886ff]"/>
                <span>Frequently Asked Questions.</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                10. Frequently Asked Questions: Government Employee Debt Rights
              </h2>

              <p className="text-xs md:text-sm text-slate-600"> Click on any question below to explore authoritative legal answers checked by our debt relief workers: </p>

              <div className="space-y-3 pt-2">
                {faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (<div key={index} className="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden transition-all">
                      <button onClick={() => toggleFaq(index)} className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-slate-900 hover:text-[#1886ff] transition-colors cursor-pointer" aria-expanded={isOpen}>
                        <span>{faq.q}</span>
                        <ChevronDown className={`w-4 h-4 sm:w-5 sm:h-5 text-slate-400 flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#1886ff]' : ''}`}/>
                      </button>
                      {isOpen && (<div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                          <p className="pt-3">{faq.a}</p>
                        </div>)}
                    </div>);
        })}
              </div>
            </section>

            {/* SECTION 13: Citations & Outbound Authority Grid */}
            <section id="statutory-citations-and-regulatory-authorities" className="scroll-target space-y-4 pt-4 border-t border-slate-200">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-500">
                <BookOpen className="w-4 h-4"/>
                <span>Statutory Citations &amp; Legal Authorities.</span>
              </div>
              <h2 className="text-base sm:text-lg font-bold text-slate-900">
                11. Statutory Citations, Legal Authorities &amp; Official Portals
              </h2>

              <ul className="space-y-2 text-xs text-slate-600 leading-relaxed list-disc pl-5">
                <li> <strong>Central Civil Services (Conduct) Rules. 1964:</strong> Rule 16 (ruin and Habitual Indebtedness). unit of Personnel and Training (DoPT). state of India. </li>
                <li> <strong>Code of Civil steps. 1908 (CPC):</strong> Section 60(1)(i). (g). And (k) (safety of Salary. Pensions. Gratuity from Attachment). </li>
                <li> <strong>Reserve Bank of India Master Directions:</strong> Master Direction on Fair Practices Code for Lenders and Grievance Redressal Mechanism (Updated 2026). </li>
                <li> <strong>Supreme Court of India:</strong> <em>Perkins Eastman Architects DPC v. HSCC (India) Ltd. (2020).</em> &amp. <em>TRF Ltd. (2017)</em> (Disqualification of Unilateral Arbitrators). </li>
                <li> <strong>Credit Information firms (Regulation) Act. 2005 (CICRA):</strong> Section 21 (claims relief and Data Correction rules). </li>
              </ul>

              {/* 6 Outbound Authority Badges */}
              <div className="pt-3">
                <span className="text-xs font-bold text-slate-700 block mb-2">Verified Regulatory &amp; Judicial Portals:</span>
                <div className="flex flex-wrap gap-2">
                  <a href="https://www.rbi.org.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200 inline-flex items-center gap-1">
                    <span>RBI Official Portal (rbi.org.in).</span>
                    <ExternalLink className="w-3 h-3 text-slate-400"/>
                  </a>
                  <a href="https://cms.rbi.org.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200 inline-flex items-center gap-1">
                    <span>RBI CMS Portal (cms.rbi.org.in).</span>
                    <ExternalLink className="w-3 h-3 text-slate-400"/>
                  </a>
                  <a href="https://www.cibil.com" target="_blank" rel="noopener noreferrer" className="text-[11px] px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200 inline-flex items-center gap-1">
                    <span>TransUnion CIBIL (cibil.com).</span>
                    <ExternalLink className="w-3 h-3 text-slate-400"/>
                  </a>
                  <a href="https://www.indiacode.nic.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200 inline-flex items-center gap-1">
                    <span>India Code Legislative Repository (indiacode.nic.in).</span>
                    <ExternalLink className="w-3 h-3 text-slate-400"/>
                  </a>
                  <a href="https://nalsa.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200 inline-flex items-center gap-1">
                    <span>NALSA Legal Aid (nalsa.gov.in).</span>
                    <ExternalLink className="w-3 h-3 text-slate-400"/>
                  </a>
                  <a href="https://cybercrime.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200 inline-flex items-center gap-1">
                    <span>National Cyber Crime Portal (cybercrime.gov.in).</span>
                    <ExternalLink className="w-3 h-3 text-slate-400"/>
                  </a>
                </div>
              </div>

              {/* 10 Internal Topic Badges */}
              <div className="pt-4 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Explore Related CredSettle Legal &amp; Debt Guides:</span>
                <div className="flex flex-wrap gap-2">
                  <Link href="/bank-sent-legal-notice-for-loan-what-to-do" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Bank Sent Legal Notice
                  </Link>
                  <Link href="/services/personal-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Personal Loan Settlement
                  </Link>
                  <Link href="/services/anti-harassment" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Anti-Harassment Defense
                  </Link>
                  <Link href="/bank-recovery-case-in-court" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Bank Court Recovery Cases
                  </Link>
                  <Link href="/convert-settled-status-to-closed" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Convert Settled to Closed
                  </Link>
                  <Link href="/remove-settled-status-from-cibil" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Remove Settled from CIBIL
                  </Link>
                  <Link href="/full-and-final-settlement-meaning" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Full &amp; Final Settlement Meaning
                  </Link>
                  <Link href="/improve-cibil-after-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Rebuild CIBIL Score
                  </Link>
                  <Link href="/get-noc-after-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Get NOC Certificate
                  </Link>
                  <Link href="/verify-loan-settlement-letter" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Verify Settlement Letter
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
              <p className="text-xs text-slate-600 leading-relaxed"> expert in banking compliance. Service jurisprudence. Loan claims relief. NPA talks with deep expertise protecting state staff and salaried workers from unlawful claims actions. </p>
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
                  100% CONFIDENTIAL LEGAL DEFENSE.
                </span>
                <p className="text-lg md:text-xl font-bold text-white leading-snug"> state staff in Debt Crisis? </p>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal"> Protect your service record. Stop unlawful workplace abuse. And settle a confidential 40% to 60% loan settlement. </p>
              </div>
              <Link href="/contact" className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md">
                Govt Employee? Get Confidential Legal Help
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
                  <span>Confidential • Direct Bank Remittance • RBI Compliant.</span>
                </div>
              </div>
            </div>

            {/* Card 3: CredSettle Trust Badges */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">The CredSettle Advantage.</p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2"> <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5"/> <span><strong>100% rights:</strong> Complete office discretion.</span> </li>
                <li className="flex items-start gap-2"> <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5"/> <span><strong>Direct Bank Remittance:</strong> Zero middleman fund holding.</span> </li>
                <li className="flex items-start gap-2"> <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5"/> <span><strong>RBI &amp. CICRA Compliance:</strong> 100% lawful claims handling.</span> </li>
                <li className="flex items-start gap-2"> <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5"/> <span><strong>Pan-India Defense:</strong> Central. State. PSU &amp. Defence coverage.</span> </li>
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

                <Link href="/bank-recovery-case-in-court" className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group">
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug"> Bank Filed claims Case in Civil Court. </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Civil suit defense &amp; summons guide &rarr;.</span>
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
