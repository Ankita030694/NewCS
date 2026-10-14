'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import StatsStrip from '@/components/StatsStrip';
import CompanySection from '@/components/CompanySection';
import { ChevronDown, Scale, ExternalLink, ShieldCheck, CheckCircle2, AlertTriangle, FileText, HelpCircle, TrendingUp, Award, BookOpen, Building2, DollarSign, Check, Lock, Phone, AlertCircle, CreditCard, Briefcase, Bookmark, ArrowRight, Clock, UserCheck, Sparkles, Gavel, BadgeAlert, Landmark, ShieldAlert, Users } from 'lucide-react';
export default function LokAdalatPersonalLoanClient() {
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
        { id: 'what-is-lok-adalat', label: '1. Statutory Framework (NALSA Act 1987)' },
        { id: 'is-notice-mandatory', label: '2. Is Lok Adalat Notice Mandatory?' },
        { id: 'waiver-percentage-math', label: '3. Discount Percentages & Waiver Math' },
        { id: 'legal-forum-comparison', label: '4. Legal Forum Comparison Table' },
        { id: 'cibil-financial-analytics', label: '5. Financial Risk & CIBIL Scoring' },
        { id: 'infographic-overview', label: 'Visual 6-Step Defense Blueprint' },
        { id: 'step-by-step-sop', label: '6. 6-Stage Settlement SOP' },
        { id: 'formal-legal-strategy', label: '7. Legal Strategy & Representation' },
        { id: 'three-tier-escalation', label: '8. 3-Tier Grievance & Escalation Matrix' },
        { id: 'chronological-milestones', label: '9. Chronological Timelines & Milestones' },
        { id: 'specialized-scenarios', label: '10. Fintech Apps, Cards & ARCs' },
        { id: 'company-profile', label: 'About CredSettle' },
        { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
        { id: 'regulatory-sources', label: 'Statutory Citations & Authorities' }
    ];
    const faqs = [
        {
            q: 'What is a Lok Adalat personal loan notice and why did my bank send it?',
            a: 'A Lok Adalat private loans notice is a formal pre-lawsuits contact issued under Section 19 and Section 20 of the Legal Services officials Act. 1987. Banks and NBFCs refer defaulted private loans to National Lok Adalat benches to explore an amicable. Mutual OTS deals before initiating formal civil claims suits or arbitration proceedings.'
        },
        {
            q: 'Is attending a Lok Adalat session mandatory for a personal loan default?',
            a: "No. Appearing before a Lok Adalat is completely voluntary. Lok Adalat is an alternative dispute relief (ADR) talks forum. Not a regular trial court. Non-appearance does not result in contempt of court. Police action, or fast penalties. However. Attending strategically provides the best legal platform to settle large loan waivers."
        },
        {
            q: 'Can I be arrested, sent to jail, or issued a warrant for ignoring a Lok Adalat notice?',
            a: "No. An no-pledge private loans default is strictly a civil contractual breach. Lok Adalat benches do not possess criminal police area and have zero formal to issue arrest warrants. Summons through police. Order imprisonment. Any threat of arrest by claims agents citing a Lok Adalat notice is illegal under RBI regulations."
        },
        {
            q: 'What discount percentage or waiver can I get on a personal loan in Lok Adalat?',
            a: "In Lok Adalat hearings. Clients typically receive a 100% waiver on total penal interest. Overdue compounding charges. Legal expenses. Also. Banks often concede a 30% to 70% waiver on the unpaid base loan depending on the age of the default. NPA classification stage. Documented debt stress."
        },
        {
            q: 'How does the settlement process work during a Lok Adalat hearing?',
            a: "During the session. The Lok Adalat bench (comprising a sitting or retired judicial officer and an advocate or social worker) mediates between you and the bank\u2019s authorized legal agent. Once both parties agree on a mutually acceptable discounted settlement figure. A joint OTS deal memorandum is signed and the bench passes a formal Consent Award."
        },
        {
            q: 'Is a Lok Adalat settlement award legally binding and can the bank sue me again later?',
            a: 'Yes. Under Section 21 of the Legal Services officials Act. 1987. An award passed by a Lok Adalat is deemed to be a decree of a Civil Court and is final and binding on all parties. Once you fulfill the payment terms stipulated in the award. The debt is completely extinguished and the bank is legally barred from filing any future civil or claims claims.'
        },
        {
            q: 'Can I appeal against a Lok Adalat settlement award in a higher court?',
            a: "No appeal lies to any court against an award of a Lok Adalat under Section 21(2) of the Act. This is because it is passed upon mutual consent. However. In extremely rare cases where a settlement was obtained through proven fraud. Misrepresentation. Coercion. A writ petition under Article 226 or 227 of the Constitution can be filed before the High Court."
        },
        {
            q: 'How does a Lok Adalat personal loan settlement impact my CIBIL score?',
            a: "Upon completing the settlement. The bank reports the loan account status to credit bureaus (CIBIL. Experian, CRIF High Mark) as \"Settled\" or \"Post-Write-off Settled\" with a zero balance. While a settled remark impacts scores initially, it stops ongoing negative Days Past Due (DPD) accumulation. Borrowers can then convert this status to \"Closed\" by paying the remaining differential later or rebuilding credit through secured instruments."
        },
        {
            q: 'What documents do I need to carry to a Lok Adalat personal loan settlement session?',
            a: "You should carry the formal Lok Adalat notice. Government-issued photo ID (Aadhaar / PAN). Loan sanction letter and account records. Proof of historical payments. Full hardship paperwork such as medical discharge summaries. Salary reduction letters, termination notices. Audited trade loss ledgers."
        },
        {
            q: 'What is the difference between Lok Adalat, Debt Recovery Tribunal (DRT), and Court Mediation?',
            a: "Lok Adalat handles pre-lawsuits and pending matters through fast. Cost-free talks resulting in a final non-appealable decree. DRT is a specialized legal tribunal only for bank claims exceeding \u20B920 Lakhs under the SARFAESI/RDBFI Acts with formal adversarial lawsuits. Court mediation is a court-referred process where mediators help OTS deal. The pacts must be returned to the trial judge for a formal decree."
        }
    ];
    return (<main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-[#1886ff] selection:text-white">
      {/* 1. HERO SECTION (#2452ae Background) */}
      <section className="relative text-white pt-14 pb-10 md:pt-18 md:pb-12 px-4 md:px-8 overflow-hidden flex items-center justify-center text-center" style={{ backgroundColor: '#2452ae' }}>
        <div className="absolute inset-0 bg-black/5 z-0 pointer-events-none"/>
        <div className="max-w-5xl mx-auto text-center z-10 relative">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Lok Adalat Personal Loan Settlement
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed"> Received a Lok Adalat summons from your bank? Discover how to use Lok Adalat to settle up to a 70% waiver on your no-pledge private loans safely. </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2">
              <span>Lok Adalat Summons? Let Us Negotiate for You.</span>
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
                  <span>Statutory Dispute Forum.</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight"> Organized under Legal Services officials Act. 1987 &amp. NALSA Master rules. </p>
              </div>
            </div>
          </aside>

          {/* ================= MIDDLE COLUMN: MAIN CONTENT ================= */}
          <div className="space-y-8 md:space-y-10 min-w-0">
            
            {/* Executive Brief Box */}
            <div id="quick-crux" className="scroll-target rounded-2xl bg-[#F4F8FE] border border-blue-100/90 border-l-[5px] border-l-[#1886ff] p-5 sm:p-6 md:p-7 shadow-xs space-y-4 text-slate-800">
              <div className="flex items-center gap-2 text-xs md:text-sm font-black uppercase tracking-wider text-[#1886ff]">
                <Bookmark className="w-4 h-4 text-[#1886ff]"/>
                <span>EXECUTIVE BRIEF: LOK ADALAT PERSONAL LOAN SETTLEMENT CRUX.</span>
              </div>

              <ul className="space-y-3.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-3"> <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5"/> <div> <strong className="text-slate-900 font-bold">Voluntary talks with Zero Arrest Powers:</strong> A Lok Adalat notice for private loans default is a legal invitation for pre-lawsuits talks under the Legal Services officials Act. 1987. A Lok Adalat bench has zero criminal police area. Cannot issue arrest warrants or police summons. Cannot send any client to jail for defaulting on an no-pledge loan. </div> </li>

                <li className="flex items-start gap-3"> <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5"/> <div> <strong className="text-slate-900 font-bold">Exceptional 50% to 70% Debt Reduction Window:</strong> National Lok Adalats represent the most powerful platform to settle large loan waivers. Banks and NBFCs possess pre-approved mandates during Lok Adalat sessions to grant a 100% waiver on compounding penal interest. Overdue charges. A 30% to 70% discount on the net base loan. </div> </li>

                <li className="flex items-start gap-3"> <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5"/> <div> <strong className="text-slate-900 font-bold">Final &amp. Non-Appealable Decree (Section 21 Award):</strong> A settlement formalized in Lok Adalat results in a Consent Award under Section 21 of the 1987 Act. This award operates as a final decree of a Civil Court against which no appeal lies in any court. Permanently extinguishing the lender&apos. s right to file future civil claims suits. </div> </li>

                <li className="flex items-start gap-3"> <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5"/> <div> <strong className="text-slate-900 font-bold">Zero Court Fees &amp. fast Cost Savings:</strong> Lok Adalat proceedings involve zero court fees. Zero process charges. And zero hidden office costs. If a pending civil suit is referred to Lok Adalat and settled. Any court fees already paid by the parties are fully refunded under Section 21(1) of the Act. </div> </li>

                <li className="flex items-start gap-3"> <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5"/> <div> <strong className="text-slate-900 font-bold">Strategic Legal legal help Advantage:</strong> Entering a Lok Adalat session without structured hardship paperwork or expert legal help risks pressured pacts. Engaging debt relief workers ensures an audited baseline. Maximum possible waivers. And a flawless No Dues letter (NDC). </div> </li>
              </ul>
            </div>

            {/* SECTION 1: What is Lok Adalat & Statutory Framework */}
            <section id="what-is-lok-adalat" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]"/>
                <span>Statutory Dispute Architecture.</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. What is a Lok Adalat Personal Loan Notice? (LSA Act 1987)
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> When an individual defaults on no-pledge private loans Equated Monthly Installments (EMIs) due to involuntary debt stress. Such as acute medical emergencies. Trade loss. Sudden unemployment. scheduled banks, local banks. Non-Banking money Companies (NBFCs) often issue notices referring the matter to a. <strong>Lok Adalat</strong> (People&apos. s Court). </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> Lok Adalats are established under the. <strong>Legal Services officials Act, 1987.</strong> and organized under the aegis of the. <strong>National Legal Services formal (NALSA).</strong>, State Legal Services officials (SLSA). Areas Legal Services officials (DLSA). And Taluk Legal Services boards. The legal purpose of a Lok Adalat is to provide an accessible. Informal. Speedy Alternative Dispute relief (ADR) mechanism for settling compound civil and money disputes through mutual consensus and talks. </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                <div className="bg-white p-5 rounded-2xl border border-blue-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-[#1886ff] font-bold text-sm">
                    <FileText className="w-4 h-4"/>
                    <span>Pre-Litigation Conciliation.</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed"> Under Section 19(5) and Section 20(2) of the 1987 Act. Disputes that have not yet been filed in a regular civil court can be referred to Lok Adalat at the pre-lawsuits stage to avoid protracted and expensive lawsuits. </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-indigo-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                    <Users className="w-4 h-4"/>
                    <span>Neutral Conciliatory Bench.</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed"> Each Lok Adalat bench comprises a sitting or retired Judicial Officer acting as Presiding Officer. Alongside an skilled advocate and an eminent social worker acting as neutral conciliators. </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-emerald-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <Gavel className="w-4 h-4"/>
                    <span>Section 21 Consent Decree.</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed"> The final outcome of a successful talks is a Lok Adalat Award. Under Section 21 of the Act. Every award is deemed to be a decree of a Civil Court. Binding on both the bank and the client. </p>
                </div>
              </div>

              <div className="bg-blue-50/70 border border-blue-200/70 p-4 rounded-xl text-xs md:text-sm text-slate-700 leading-relaxed">
                <p> <strong>Why Banks Prefer Lok Adalat for private loans:</strong> banks manage massive Non-Performing Asset (NPA) portfolios. Filing civil claims suits requires large ad-valorem court fees (often 5% to 8% of the claim). Lawyer fees. Takes 3 to 7 years in civil courts. National Lok Adalat events allow banks to recover large liquid cash in a single day while extending attractive discount waivers to clients. </p>
              </div>
            </section>

            {/* SECTION 2: Is Lok Adalat Notice Mandatory? Debunking Myths */}
            <section id="is-notice-mandatory" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <BadgeAlert className="w-4 h-4 text-[#1886ff]"/>
                <span>Legal Rights &amp; Civil Protection.</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. Is a Lok Adalat Notice Mandatory? Legal Realities & Rights
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> Receiving an formal-looking notice stamped with &quot. areas Legal Services formal&quot. Or &quot. Pre-lawsuits Case Summons&quot. often induces extreme panic among clients. Aggressive claims firms often exploit this confusion by falsely claiming that ignoring the notice will lead to non-bailable arrest warrants. Police detention. fast home attachment. </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> Let us establish the absolute legal and legal facts governed by Indian jurisprudence: </p>

              <div className="bg-emerald-50 border border-emerald-200 p-5 rounded-2xl space-y-3">
                <div className="flex items-center gap-2 text-emerald-900 font-bold text-sm sm:text-base">
                  <ShieldCheck className="w-5 h-5 text-emerald-600 flex-shrink-0"/>
                  <span>Lok Adalat Appearance is 100% Voluntary under Indian Law.</span>
                </div>
                <p className="text-xs md:text-sm text-emerald-950 leading-relaxed"> Under Section 20 of the Legal Services officials Act. 1987. A Lok Adalat is strictly a talks and settlement forum. It is not an adjudicatory criminal court. <strong>The bench has zero formal to issue arrest warrants. Summon police forces, initiate contempt proceedings. Impose punitive fines for non-attendance.</strong> If you choose not to attend. The Lok Adalat bench simply closes the pre-lawsuits file and returns the matter to the bank with the remark &quot. Not Settled / Returned Unsettled&quot. </p>
                <p className="text-xs md:text-sm text-emerald-950 leading-relaxed font-semibold"> Any debt claims agent or tele-caller threatening criminal arrest. FIR registration. Police visits citing a Lok Adalat notice commits a severe violation of the Reserve Bank of India (RBI) Fair Practices Code and Section 383 IPC / Section 308 BNS (Extortion). </p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-600"/>
                  Why Ignoring a Lok Adalat Notice is a Major Missed Opportunity
                </h3>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed"> Although attending is not legally strict. On purpose ignoring a Lok Adalat notice is almost always a tactical error for clients dealing with unmanageable private loans debt. When a matter is returned unsettled. The bank may proceed with formal legal actions. Examples include initiating private arbitration. Filing a summary civil suit under Order 37 of the Code of Civil Procedure (CPC). Filing a criminal complaint under Section 25 of the Payments and Settlement Systems Act (PSS Act) / Section 138 Negotiable Instruments Act for bounced NACH mandates. </p>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed"> Conversely. Attending Lok Adalat provides you with bank protection where bank agents cannot intimidate you. Where bank claims officers have express internal formal to sanction large one-time waivers that are never offered through standard branch channels. </p>
              </div>
            </section>

            {/* SECTION 3: Lok Adalat Discount Percentage & Waiver Math */}
            <section id="waiver-percentage-math" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <DollarSign className="w-4 h-4 text-[#1886ff]"/>
                <span>Financial Settlement Analytics.</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Lok Adalat Discount Percentage &amp; Settlement Waiver Mathematics
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> A central question for every client is: <em>How much discount can I actually settle in Lok Adalat for an no-pledge private loans?</em> The settlement quantum in Lok Adalat is governed by structured NPA provisioning rules. The age of default. Documented client debt stress. </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                    <Award className="w-4 h-4 text-[#1886ff]"/>
                    Components of Total Debt Waiver in Lok Adalat
                  </h3>
                  <div className="space-y-2 text-xs text-slate-600 leading-relaxed">
                    <div className="flex justify-between py-1.5 border-b border-slate-100">
                      <span>Penal Interest &amp; Overdue Charges:</span>
                      <span className="font-bold text-emerald-600">100% Complete Waiver.</span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-slate-100">
                      <span>Late Payment &amp; NACH Bounce Fees:</span>
                      <span className="font-bold text-emerald-600">100% Complete Waiver.</span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-slate-100">
                      <span>Bank Legal &amp; Administrative Expenses:</span>
                      <span className="font-bold text-emerald-600">100% Complete Waiver.</span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-slate-100">
                      <span>Unaccrued / Future Interest:</span>
                      <span className="font-bold text-emerald-600">100% Extinguished.</span>
                    </div>
                    <div className="flex justify-between py-1.5 pt-2 font-bold text-slate-900">
                      <span>Principal Balance Haircut:</span>
                      <span className="text-[#1886ff]">30% to 70% Discount.</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-emerald-600"/>
                    Real-World Case Example: ₹8,00,000 Default
                  </h3>
                  <div className="space-y-2 text-xs text-slate-600 leading-relaxed">
                    <div className="flex justify-between py-1.5 border-b border-slate-100">
                      <span>Original released Principal:</span>
                      <span className="font-semibold text-slate-800">₹8,00,000</span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-slate-100">
                      <span>Repaid before Hardship:</span>
                      <span className="font-semibold text-slate-800">₹3,50,000</span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-slate-100">
                      <span>Net Unpaid Principal Balance:</span>
                      <span className="font-bold text-slate-900">₹4,50,000</span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-slate-100">
                      <span>Bank Claim with Penalties (36 mos):</span>
                      <span className="font-bold text-red-600">₹9,80,000</span>
                    </div>
                    <div className="flex justify-between py-1.5 pt-2 font-bold text-slate-900 bg-emerald-50/70 p-2 rounded-lg">
                      <span>Final Lok Adalat Settlement:</span>
                      <span className="text-emerald-700 text-sm">₹1,80,000 (81.6% Total Waiver).</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="overflow-x-auto rounded-2xl border border-slate-200/80 bg-white shadow-xs mt-4">
                <table className="w-full text-left text-xs md:text-sm border-collapse">
                  <thead className="bg-slate-50 border-b border-slate-200/80 text-slate-700">
                    <tr className="divide-x divide-slate-200/80">
                      <th className="p-3.5 font-bold">NPA Vintage / Stage.</th>
                      <th className="p-3.5 font-bold">Days Past Due (DPD).</th>
                      <th className="p-3.5 font-bold">Bank Provisioning Level.</th>
                      <th className="p-3.5 font-bold">Typical Principal Haircut.</th>
                      <th className="p-3.5 font-bold text-[#1886ff]">Expected Total Settlement %.</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-600">
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-200/80">
                      <td className="p-3.5 font-bold text-slate-900">Sub-Standard NPA.</td>
                      <td className="p-3.5">91 to 180 Days</td>
                      <td className="p-3.5">15% Provisioned</td>
                      <td className="p-3.5">15%. 30% Haircut.</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold">70%. 85% of Net main loan.</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-200/80">
                      <td className="p-3.5 font-bold text-slate-900">Doubtful Asset (D1).</td>
                      <td className="p-3.5">181 to 365 Days</td>
                      <td className="p-3.5">25%. 40% Provisioned.</td>
                      <td className="p-3.5">35%. 50% Haircut.</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold">50%. 65% of Net main loan.</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-200/80">
                      <td className="p-3.5 font-bold text-slate-900">Doubtful Asset (D2/D3).</td>
                      <td className="p-3.5">1 to 3 Years</td>
                      <td className="p-3.5">100% Provisioned.</td>
                      <td className="p-3.5">50%. 70% Haircut.</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold">30%. 50% of Net main loan.</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-200/80">
                      <td className="p-3.5 font-bold text-slate-900">Loss Asset / Written-Off.</td>
                      <td className="p-3.5">3+ Years / ARC Assigned.</td>
                      <td className="p-3.5">100% Written-Off.</td>
                      <td className="p-3.5">65%. 80% Haircut.</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold">20%. 35% of Net main loan.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 4: 4-Sided Bordered Status Comparison Table */}
            <section id="legal-forum-comparison" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]"/>
                <span>Comparative Legal Matrix.</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. Legal Forum Comparison: Lok Adalat vs. Other Debt Recovery Routes
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> Evaluate how Lok Adalat compares across critical parameters against other debt claims and dispute relief options in India: </p>

              <div className="overflow-x-auto rounded-2xl border border-slate-200/80 bg-white shadow-xs">
                <table className="w-full text-left text-xs md:text-sm border-collapse">
                  <thead className="bg-slate-50 border-b border-slate-200/80 text-slate-700">
                    <tr className="divide-x divide-slate-200/80">
                      <th className="p-3.5 font-bold">Recovery Forum</th>
                      <th className="p-3.5 font-bold">Governing Statute.</th>
                      <th className="p-3.5 font-bold">Nature of Proceeding.</th>
                      <th className="p-3.5 font-bold">Arrest / Criminal Power.</th>
                      <th className="p-3.5 font-bold">Final Award Status.</th>
                      <th className="p-3.5 font-bold text-[#1886ff]">Borrower Strategy.</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-600">
                    <tr className="hover:bg-slate-50/50 bg-blue-50/30 divide-x divide-slate-200/80">
                      <td className="p-3.5 font-bold text-slate-900 flex items-center gap-1.5"> <Sparkles className="w-3.5 h-3.5 text-[#1886ff]"/> National Lok Adalat. </td>
                      <td className="p-3.5">Legal Services officials Act 1987.</td>
                      <td className="p-3.5 text-emerald-700 font-semibold">100% talks &amp. ADR.</td>
                      <td className="p-3.5 text-emerald-700 font-semibold">NO (Zero Power)</td>
                      <td className="p-3.5 font-semibold text-slate-900">Civil Decree (Non-Appealable).</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold">Execute OTS with up to 70% waiver.</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-200/80">
                      <td className="p-3.5 font-bold text-slate-900">Summary Civil Suit (Order 37).</td>
                      <td className="p-3.5">Code of Civil Procedure, 1908.</td>
                      <td className="p-3.5">Adversarial Judicial Trial.</td>
                      <td className="p-3.5 text-emerald-700 font-semibold">NO (Civil Claim).</td>
                      <td className="p-3.5">Civil Money Decree (Appealable).</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold">File Leave to Defend on triable issues.</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-200/80">
                      <td className="p-3.5 font-bold text-slate-900">Arbitration Tribunal.</td>
                      <td className="p-3.5">Arbitration &amp. talks Act 1996.</td>
                      <td className="p-3.5">Private Adjudication.</td>
                      <td className="p-3.5 text-emerald-700 font-semibold">NO (Civil Claim).</td>
                      <td className="p-3.5">Arbitral Award (Sec 34 Challenge).</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold">Challenge Sec 12(5) Unilateral Appt.</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-200/80">
                      <td className="p-3.5 font-bold text-slate-900">Debt claims Tribunal (DRT).</td>
                      <td className="p-3.5">RDBFI Act, 1993 / SARFAESI.</td>
                      <td className="p-3.5">Specialized Tribunal (&gt. ₹20 Lakhs).</td>
                      <td className="p-3.5 text-emerald-700 font-semibold">NO (Civil / claims).</td>
                      <td className="p-3.5">claims letter (Appeal DRAT).</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold">Contest record of Account ledger.</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-200/80">
                      <td className="p-3.5 font-bold text-slate-900">Cheque / NACH Bounce Case.</td>
                      <td className="p-3.5">Sec 138 NI Act / Sec 25 PSS Act.</td>
                      <td className="p-3.5 text-red-600 font-semibold">Quasi-Criminal Trial.</td>
                      <td className="p-3.5 text-red-600 font-semibold">YES (Bailable, up to 2 yrs).</td>
                      <td className="p-3.5">Criminal Judgment / Fine / Appeal.</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold">Secure bail &amp. compound via settlement.</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-200/80">
                      <td className="p-3.5 font-bold text-slate-900">Direct Bank OTS Scheme.</td>
                      <td className="p-3.5">RBI Master Directions on NPAs.</td>
                      <td className="p-3.5">Bilateral trade Deal.</td>
                      <td className="p-3.5 text-emerald-700 font-semibold">NO (Voluntary)</td>
                      <td className="p-3.5">Bank Settlement Sanction Letter.</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold">Liaison with main loan Nodal Officer.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 5: Technical Financial Risk Analytics & CIBIL Scoring Penalties */}
            <section id="cibil-financial-analytics" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4 text-[#1886ff]"/>
                <span>Credit Bureau Scoring Mechanics.</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. Credit Bureau Analytics &amp; CIBIL Scoring Dynamics Post-Settlement
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> Understanding how private loans defaults and subsequent Lok Adalat settlements reflect across credit information companies (TransUnion CIBIL. Experian. Equifax. CRIF High Mark) is essential for long-term money rehabilitation: </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                  <div className="flex items-center gap-2 text-red-600 font-bold text-sm">
                    <AlertTriangle className="w-4 h-4"/>
                    <span>Unresolved Default Impact.</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed"> An ongoing default generates consecutive monthly 30. 60. 90. And 180+ DPD (Days Past Due) flags. Payment history accounts for. <strong>35% of your total credit score.</strong>. This causes an fast drop of 100 to 180 points and triggering automatic hard rejections across all Loan Origination Systems (LOS). </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                  <div className="flex items-center gap-2 text-[#1886ff] font-bold text-sm">
                    <Scale className="w-4 h-4"/>
                    <span>Post-Settlement &quot;Settled&quot; Remark.</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed"> When a loan is settled via Lok Adalat. The bank reports the account as. <em>&quot. Settled&quot.</em> or <em>&quot. Post-Write-off Settled&quot.</em> with a ₹0 balance. This stops further bleeding of your credit score. Permanently halts DPD tracking. Closes the active debt risk on your credit profile. </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                  <div className="flex items-center gap-2 text-emerald-600 font-bold text-sm">
                    <ShieldCheck className="w-4 h-4"/>
                    <span>Conversion to &quot;Closed&quot; Status.</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed"> clients who require clean future credit access for home loans or prime credit cards can then settle with the lender to pay the waived main loan differential. Converting the CIBIL remark from. <em>&quot. Settled&quot.</em> to a pristine <em>&quot. Closed&quot.</em> status with an updated NOC. </p>
                </div>
              </div>
            </section>

            {/* SECTION 6: Embedded 16:9 Infographic Banner */}
            <section id="infographic-overview" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Sparkles className="w-4 h-4 text-[#1886ff]"/>
                <span>Visual Process Blueprint.</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Visual Blueprint: 6-Stage Lok Adalat Personal Loan Settlement Roadmap
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> Examine this structured visual workflow detailing the complete procedural trajectory from receiving a pre-lawsuits notice to executing the Section 21 consent decree and obtaining the formal No Dues letter: </p>

              <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-3 md:p-4 overflow-hidden">
                <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-slate-100">
                  <Image src="/images/infographics/lok-adalat-personal-loan-settlement.jpg" alt="Lok Adalat Personal Loan Settlement Process and Waivers Blueprint India" fill className="object-contain" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 60vw" priority/>
                </div>
                <div className="mt-3 px-2 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2">
                  <span>CredSettle Legal Defense Architecture • Legal Services Authorities Act 1987.</span>
                  <a href="/images/infographics/lok-adalat-personal-loan-settlement.jpg" target="_blank" rel="noopener noreferrer" className="text-[#1886ff] hover:underline font-bold flex items-center gap-1">
                    <span>View High-Resolution Blueprint.</span>
                    <ExternalLink className="w-3.5 h-3.5"/>
                  </a>
                </div>
              </div>
            </section>

            {/* SECTION 7: 6-Stage Standard Operating Procedure (SOP) */}
            <section id="step-by-step-sop" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Award className="w-4 h-4 text-[#1886ff]"/>
                <span>Standard Operating Procedure.</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. 6 Stages of Lok Adalat Personal Loan Settlement
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> Execute this rigorous. Bank step-by-step operating procedure to navigate the Lok Adalat settlement process and secure optimal money waivers: </p>

              <div className="space-y-4 pt-2">
                {/* Stage 1 */}
                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 01
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Timeline: Days 1–7.</span>
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-slate-900">
                    Notice Authentication &amp; Loan Ledger Forensic Audit
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed"> Verify the authenticity of the Lok Adalat notice by checking the formal seal and signature of the areas Legal Services formal (DLSA) or Taluk boards. Obtain a certified. Updated record of accounts from your bank under the Bankers&apos. Books proof Act. Dissect the unpaid dues to isolate the true unpaid main loan from capitalized penal interest. Late payment fines, GST surcharges. Illegitimate claims firm expenses. </p>
                </div>

                {/* Stage 2 */}
                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 02
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Timeline: Days 8–15.</span>
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-slate-900">
                    Comprehensive Hardship Portfolio &amp; Dossier Assembly
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed"> Banks require verifiable evidentiary justification to approve large main loan write-offs during Lok Adalat sessions. Compile a full hardship dossier containing salary reduction letters. Pink slips. Medical hospitalization discharge summaries. GST return downturn reports. Family dependency proof. Calculate your exact maximum lump-sum or structured payment skill. </p>
                </div>

                {/* Stage 3 */}
                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 03
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Timeline: Days 16–25.</span>
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-slate-900">
                    Pre-Lok Adalat Strategic Bank Liaison &amp; Pre-Counseling
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed"> Avoid walking into the Lok Adalat session unprepared. Initiate pre-counseling contact with the bank&apos. S Senior NPA claims Manager. Legal Desk. main loan Nodal Officer at the designated pre-talks desk. Present your audited baseline and hardship dossier in advance. This pre-aligns the bank&apos. S internal approval grid. Ensuring the bank agent brings pre-authorized approval for your target settlement figure on the day of the sitting. </p>
                </div>

                {/* Stage 4 */}
                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 04
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Timeline: Lok Adalat Session Day.</span>
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-slate-900">
                    Lok Adalat Bench Appearance &amp; Conciliated Negotiation
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed"> Attend the scheduled session before the designated Lok Adalat bench (in person or via National e-Lok Adalat virtual portal). The Presiding Judicial Officer and Conciliator will invite both parties to present their terms. Respectfully explain your genuine money incapacity while expressing unambiguous willingness to close the debt promptly under fair terms. The bench helps an amicable OTS deal without allowing the bank to exert undue coercion. </p>
                </div>

                {/* Stage 5 */}
                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 05
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Timeline: Immediate Post-Agreement.</span>
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-slate-900">
                    Execution of Compromise Memo &amp; Section 21 Consent Award
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed"> Once terms are agreed upon. Verify that the written Settlement Memorandum explicitly lists the agreed OTS deal amount. The exact payment due dates. Full clauses stating that upon payment. All civil. Criminal. And claims claims stand fully extinguished. Both parties sign the memo. And the Lok Adalat bench passes a formal. <strong>Consent Award under Section 21.</strong> of the Act. </p>
                </div>

                {/* Stage 6 */}
                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 06
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Timeline: Days 30–60.</span>
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-slate-900">
                    Direct Bank Remittance, NDC Retrieval &amp; Bureau Updation
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed"> pay the agreed settlement funds straight to your designated bank loan account via RTGS. NEFT. Demand draft. never pay cash or third-party intermediaries. Obtain a stamped, dated receipt. Within 15 to 30 days. Collect your full. <strong>No Dues letter (NDC).</strong> and verify that the bank submits the updated closure data to TransUnion CIBIL. Equifax. And Experian. </p>
                </div>
              </div>
            </section>

            {/* SECTION 8: Formal Legal Reply Architecture & Legal Strategy (Paragraphs - NO Points / NO Letter Draft) */}
            <section id="formal-legal-strategy" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]"/>
                <span>Substantive Legal Framework.</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. Formal Reply Architecture &amp; Substantive Legal Strategy
              </h2>
              <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200/80 shadow-xs space-y-5 text-slate-700 leading-relaxed text-sm md:text-base">
                <p> Responding effectively to a pre-lawsuits Lok Adalat notice requires a well-orchestrated legal plan that establishes genuine hardship while dismantling the predatory interest calculations often advanced by banks. Under the legal rules established by the Legal Services officials Act. 1987. A formal written response sent to both the Secretary of the areas Legal Services formal and the lending bank&apos. s authorized agent establishes your legal standing as a local yet legally protected client. This contact should formally acknowledge receipt of the pre-lawsuits notice. Affirm your complete respect for the legal conciliatory process. Set forth the material economic conditions that caused the involuntary breaks of loan payments. </p>
                <p> A critical objective of this legal posture is challenging the quantum of the bank&apos. s aggregate demand before entering the conciliatory room. Trade lenders often present inflated claim figures that include compounded penal interest. Arbitrary late payment surcharges, processing penalties. Speculative claims expenses that violate Reserve Bank of India Master Directions on Fair Practices Code. The formal legal help must demand a certified and audited record of account under the Bankers&apos. Books proof Act. 1891. Mainly demanding the segregation of genuine main loan debt risk from unapproved punitive levies. By placing this deep error on record with the Legal Services formal. The client effectively deprives the lender of using inflated numbers as the baseline for talks. </p>
                <p> also. The substantive defense must articulate the definitive civil nature of the transaction and proactively safeguard the client against unlawful threats. Lending institutions often attempt to use the formal appearance of a Lok Adalat summons to exert undue pressure or threaten coercive legal remedies. The written response serves as an evidentiary shield by formally placing on record that the underlying debt represents an no-pledge trade private loans governed purely by civil contract law. Where no criminal mens rea or penal debt risk exists. Citing pertinent judicial rulings on debtor protections. The reply emphasizes that any ongoing third-party claims abuse violates the client&apos. s constitutional right to dignity under Article 21 and the binding rules issued by the Reserve Bank of India. </p>
                <p> Finally. The strategic positioning must formally propose a viable OTS deal One-Time Settlement structure supported by documentary exhibits. Rather than entering the Lok Adalat session with vague verbal pleas. Presenting an organized hardship dossier containing income tax returns. Salary reduction paperwork, termination letters. Medical ledgers transforms the dynamic into a credible. Solution-oriented relief. This early rules enables the Lok Adalat bench to fulfill its legal mandate of helping an equitable settlement. Compelling the bank claimant to accept realistic terms that align with the client&apos. s verified economic capacity. </p>
              </div>
            </section>

            {/* SECTION 9: 3-Tier Escalation Matrix */}
            <section id="three-tier-escalation" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff]"/>
                <span>Grievance Escalation Framework.</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. The 3-Tier Grievance &amp; Escalation Matrix for Loan Disputes
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> If the lending bank refuses fair talks. Reneges on agreed terms. Uses coercive claims tactics alongside the Lok Adalat process. Escalate through this structured 3-tier RBI and bank mechanism: </p>

              <div className="space-y-4 pt-2">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Level 1: Lok Adalat Bench &amp; Bank Principal Nodal Officer (PNO).
                    </span>
                    <span className="text-xs text-slate-500 font-semibold">Turnaround: 7–14 Days.</span>
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-slate-900">
                    Pre-Litigation Objection &amp; Grievance Submission
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed"> Submit a formal written objection straight to the Presiding Officer of the Lok Adalat bench detailing predatory charges and illegal claims abuse. Concurrently submit a formal grievance to the bank&apos. s main loan Nodal Officer under the internal grievance redressal mechanism. </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-md">
                      Level 2: District Legal Services Authority (DLSA) Secretary.
                    </span>
                    <span className="text-xs text-slate-500 font-semibold">Turnaround: 15–30 Days.</span>
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-slate-900">
                    Administrative Intervention for Unfair Banking Practices
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed"> File a legal help before the Full-Time Secretary of the DLSA (a Senior Civil Judge rank officer). The DLSA has office powers to summon bank branch managers and direct them to adhere strictly to fair talks principles without intimidating clients. </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-emerald-200 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">
                      Level 3: RBI Integrated Ombudsman (CMS Portal: cms.rbi.org.in).
                    </span>
                    <span className="text-xs text-slate-500 font-semibold">Turnaround: 30 Days.</span>
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-slate-900">
                    Statutory Regulatory Redressal for Coercive Recovery
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed"> If the bank combines Lok Adalat notices with illegal claims tactics. Offensive phone calls. Refuses to issue a No Dues letter post-settlement. Lodge a complaint on the. <strong>RBI CMS portal (cms.rbi.org.in).</strong> under the Reserve Bank - Integrated Ombudsman Scheme. 2021. </p>
                </div>
              </div>
            </section>

            {/* SECTION 10: Chronological Milestone Resolution Table */}
            <section id="chronological-milestones" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Clock className="w-4 h-4 text-[#1886ff]"/>
                <span>Procedural Timelines.</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Chronological Milestone Resolution Timeline (Day 0 to Month 6)
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> A clear roadmap of chronological milestones from receipt of notice to credit bureau rehabilitation: </p>

              <div className="overflow-x-auto rounded-2xl border border-slate-200/80 bg-white shadow-xs">
                <table className="w-full text-left text-xs md:text-sm border-collapse">
                  <thead className="bg-slate-50 border-b border-slate-200/80 text-slate-700">
                    <tr className="divide-x divide-slate-200/80">
                      <th className="p-3.5 font-bold">Milestone Phase</th>
                      <th className="p-3.5 font-bold">Key Institutional Event.</th>
                      <th className="p-3.5 font-bold">Statutory Timeframe.</th>
                      <th className="p-3.5 font-bold text-[#1886ff]">Borrower Action Checklist.</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-600">
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-200/80">
                      <td className="p-3.5 font-bold text-slate-900">Day 0</td>
                      <td className="p-3.5">Receipt of Pre-lawsuits Lok Adalat Notice.</td>
                      <td className="p-3.5">Typically 15. 30 days before sitting.</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold">verify DLSA case number &amp. audit account ledger.</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-200/80">
                      <td className="p-3.5 font-bold text-slate-900">Days 5. 15</td>
                      <td className="p-3.5">Pre-Counseling Sitting / Bank Outreach.</td>
                      <td className="p-3.5">Pre-talks period.</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold">Submit hardship dossier &amp. pre-settle waiver band.</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-200/80">
                      <td className="p-3.5 font-bold text-slate-900">National Lok Adalat Day.</td>
                      <td className="p-3.5">Appearance before Bench &amp. Consent Award.</td>
                      <td className="p-3.5">Single-day conclusive disposal.</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold">Sign joint OTS deal memo &amp. obtain Section 21 decree.</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-200/80">
                      <td className="p-3.5 font-bold text-slate-900">Days 15. 45 Post-Award.</td>
                      <td className="p-3.5">payment of Agreed payout sum.</td>
                      <td className="p-3.5">Stipulated in Consent Award.</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold">Direct bank RTGS transfer &amp. obtain stamped deposit slip.</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-200/80">
                      <td className="p-3.5 font-bold text-slate-900">Months 2. 3</td>
                      <td className="p-3.5">No Dues letter (NDC) Retrieval.</td>
                      <td className="p-3.5">Within 30 days of final payment.</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold">Collect original stamped NDC &amp. verify loan account closure.</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-200/80">
                      <td className="p-3.5 font-bold text-slate-900">Months 4. 6</td>
                      <td className="p-3.5">CIBIL / Credit Bureau Status Updation.</td>
                      <td className="p-3.5">45. 90 days bureau reporting cycle.</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold">Download CIBIL report. initiate bureau dispute if un-updated.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 11: Specialized Real-World Scenarios */}
            <section id="specialized-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]"/>
                <span>Specialized Scenarios.</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                10. Special Scenarios: Fintech NBFC Apps, Credit Cards &amp; ARCs
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> Nuances across various lending institutions in Lok Adalat proceedings: </p>

              <div className="space-y-3 pt-2">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#1886ff]"/>
                    Fintech NBFC Loan Apps &amp; Automated Pre-Litigation Notices
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed"> Digital private loans applications often dispatch automated WhatsApp notices referencing Lok Adalat hearings. Ensure you verify whether an actual pre-lawsuits case number has been registered with the local DLSA or if it is merely an informal talks invitation. In genuine e-Lok Adalats. Fintech NBFCs are known to offer dramatic 60% to 75% settlements due to high default provisioning. </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-[#1886ff]"/>
                    Credit Card Outstanding Dues in Lok Adalat
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed"> Credit card claims referred to Lok Adalat typically feature excessive revolving finance charges (often 42% to 48% annualized) and compounding GST penalties. Lok Adalat benches routinely direct credit card issuers to strip away all interest accumulations and settle only around the baseline uncollateralized spend. This results in massive savings. </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-[#1886ff]"/>
                    Asset Reconstruction Companies (ARCs) at Lok Adalat
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed"> When loans are sold to ARCs (such as Phoenix ARC. ARCIL. CFM ARC) under Section 5 of the SARFAESI Act. ARCs actively use National Lok Adalats to liquidate sticky portfolios. Since ARCs purchase distressed loan pools at steep discounts (often 20% to 30% of book value). They possess extraordinary trade flexibility to accept deep OTS deals. </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-[#1886ff]"/>
                    Co-Borrowers, Guarantors &amp; Legal Heirs in Lok Adalat
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed"> In co-client loans. Any consent award passed in Lok Adalat must expressly include all co-signers and guarantors to release them from joint and several debt risk under Section 128 of the Indian Contract Act. In cases involving deceased clients. Legal heirs are protected under Section 50 of the CPC and are only liable to the extent of inherited estate assets. </p>
                </div>
              </div>
            </section>

            {/* SECTION 12: Company Profile */}
            <div id="company-profile" className="scroll-target">
              <CompanySection />
            </div>

            {/* SECTION 13: Frequently Asked Questions Accordion */}
            <section id="frequently-asked-questions" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <HelpCircle className="w-4 h-4 text-[#1886ff]"/>
                <span>Frequently Asked Questions.</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Frequently Asked Questions on Lok Adalat Personal Loan Settlement
              </h2>
              <p className="text-xs md:text-sm text-slate-600"> Click on any question below to view detailed legal answers verified by our debt relief workers: </p>

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

            {/* SECTION 14: Regulatory Sources & Authorities */}
            <section id="regulatory-sources" className="scroll-target space-y-4 pt-4 border-t border-slate-200">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-500">
                <BookOpen className="w-4 h-4"/>
                <span>Statutory Citations &amp; Legal Authorities.</span>
              </div>
              <h2 className="text-base sm:text-lg font-bold text-slate-900">
                Official Regulatory Citations &amp; Legal References
              </h2>
              <ul className="space-y-2 text-xs text-slate-600 leading-relaxed list-disc pl-5">
                <li> <strong>Legal Services officials Act, 1987:</strong> Sections 19, 20, 21. 22, National Legal Services formal (NALSA). Ministry of Law and Justice. Government of India. </li>
                <li> <strong>Supreme Court of India:</strong> <em>State of Punjab v. Jalour Singh (2008) 2 SCC 660.</em> (Finality and Non-Appealability of Lok Adalat Awards under Section 21). </li>
                <li> <strong>Supreme Court of India:</strong> <em>K.N. Govindan Kutty Menon v. C.D. Shaji (2012) 2 SCC 51.</em> (Deemed Civil Court Decree status for Lok Adalat settlements). </li>
                <li> <strong>Reserve Bank of India Master Directions:</strong> Master Direction on Fair Practices Code for Lenders and Prudential rules for relief of Stressed Assets (Updated 2026). </li>
                <li> <strong>Reserve Bank - Integrated Ombudsman Scheme. 2021:</strong> Redressal of Unfair claims Practices. Abuse and Credit Reporting Errors. </li>
              </ul>

              {/* 10 Internal Topic Badges */}
              <div className="pt-4 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Explore Related CredSettle Legal &amp; Debt Guides:</span>
                <div className="flex flex-wrap gap-2">
                  <Link href="/bank-sent-legal-notice-for-loan-what-to-do" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Bank Sent Legal Notice
                  </Link>
                  <Link href="/arbitration-notice-personal-loan-default" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Arbitration Notice for Loan
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
              <p className="text-xs text-slate-600 leading-relaxed"> Specialized in banking compliance. Lok Adalat representations. Loan dispute relief. NPA talks with deep expertise navigating pre-lawsuits talks across Indian judicial forums. </p>
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
                <p className="text-lg md:text-xl font-bold text-white leading-snug"> Lok Adalat Summons? </p>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal"> Our debt relief experts represent your case before the Lok Adalat bench. Eliminate penal interest, stop claims abuse. settle up to a 70% loan waiver. </p>
              </div>
              <Link href="/contact" className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md">
                Lok Adalat Summons? Let Us Negotiate for You
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
                  <span>Direct Bank Settlement • NALSA Compliant.</span>
                </div>
              </div>
            </div>

            {/* Card 3: CredSettle Trust Badges */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">The CredSettle Advantage.</p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2"> <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5"/> <span><strong>Zero Upfront Risk:</strong> Success-linked settlement fees.</span> </li>
                <li className="flex items-start gap-2"> <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5"/> <span><strong>Direct Bank Remittance:</strong> Zero middleman fund holding.</span> </li>
                <li className="flex items-start gap-2"> <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5"/> <span><strong>RBI &amp. NALSA Compliance:</strong> 100% lawful dispute handling.</span> </li>
                <li className="flex items-start gap-2"> <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5"/> <span><strong>Pan-India legal help:</strong> Dedicated debt relief specialists.</span> </li>
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
