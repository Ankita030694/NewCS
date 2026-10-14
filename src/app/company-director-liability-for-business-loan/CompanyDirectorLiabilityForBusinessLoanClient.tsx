'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import StatsStrip from '@/components/StatsStrip';
import CompanySection from '@/components/CompanySection';
import { ChevronDown, Scale, ExternalLink, ShieldCheck, FileText, HelpCircle, TrendingUp, Award, BookOpen, Building2, Check, Lock, Phone, AlertCircle, Briefcase, ArrowRight, Clock, Gavel, Landmark, Layers, Percent, FileCheck, ShieldAlert, BadgePercent, UserCheck } from 'lucide-react';
export default function CompanyDirectorLiabilityForBusinessLoanClient() {
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
        { id: 'quick-crux', label: 'Executive Summary' },
        { id: 'debt-economics-npa', label: '1. Corporate Debt & Director Liability' },
        { id: 'financial-breakdown-math', label: '2. Principal vs Penal & Settlement Math' },
        { id: 'resolution-comparison-matrix', label: '3. Resolution Mechanisms Matrix' },
        { id: 'cibil-commercial-scoring', label: '4. Commercial CIBIL & Director Score' },
        { id: 'infographic-overview', label: '5. Visual Resolution Blueprint' },
        { id: 'step-by-step-settlement-sop', label: '6. 6-Stage Resolution SOP' },
        { id: 'statutory-notice-defense', label: '7. Statutory Notice Defense & Rights' },
        { id: 'three-tier-escalation', label: '8. 3-Tier Grievance Redressal Matrix' },
        { id: 'chronological-timeline', label: '9. Chronological Timelines & Milestones' },
        { id: 'real-world-scenarios', label: '10. Specialized Director Scenarios' },
        { id: 'company-profile', label: 'About CredSettle' },
        { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
        { id: 'regulatory-sources', label: 'Statutory Citations & Authorities' }
    ];
    const faqs = [
        {
            q: 'Is a company director personally liable for a business loan default in India?',
            a: "A board heads is generally protected by the firm shield under the firms Act 2013 and is not automatically liable for firm debts. Unless they executed a private sureties. Pledged own assets. Engaged in fraudulent conduct."
        },
        {
            q: 'What happens when a bank invokes a director\'s personal guarantee?',
            a: "Under Section 128 of the Indian Contract Act 1872. The surety's debt risk is co-extensive with the main loan debtor. The bank can proceed against the board heads's bank accounts. Movable assets. Unencumbered homes via civil court or DRT."
        },
        {
            q: 'Can a director be jailed if a Private Limited company defaults on a loan?',
            a: 'Loan default is a civil claims. Not a crime. However. board heads who signed dishonoured payment cheques or NACH mandates may face legal steps under Section 138 of the Negotiable Instruments Act or Section 25 of the PSSA.'
        },
        {
            q: 'Does resigning as a director discharge an existing personal guarantee?',
            a: 'Resignation as a board heads does not automatically terminate private sureties executed during your tenure. A formal written revocation under Section 130 of the Contract Act or a bank-issued Deed of Release is by law required.'
        },
        {
            q: 'How does a company loan default affect the personal CIBIL score of a director?',
            a: 'If the board heads signed a private sureties. The default is reported under their person PAN. Severely reducing their person CIBIL score below 600 and impairing private borrowing skill until an OTS or closure is executed.'
        },
        {
            q: 'Can banks attach personal residential property of a director under SARFAESI?',
            a: 'Banks can attach private residential homes under the SARFAESI Act only if the home was formally mortgaged. For no-pledge loans with private sureties. Banks must secure a decree through the Debt claims Tribunal before attachment.'
        },
        {
            q: 'What is the legal threshold for banks to file IBC proceedings against personal guarantors?',
            a: 'Under Section 95 of the ruin and ruin Code (IBC) 2016. lenders can initiate ruin relief against private guarantors of firm debtors before the NCLT or DRT. This triggers an interim moratorium under Section 96.'
        },
        {
            q: 'Can a director negotiate a One Time Settlement (OTS) for business loans?',
            a: 'Yes. board heads can submit a structured OTS proposal to bank credit boards. Settling a 40% to 60% loan cut along with complete discharge of private sureties and full return of original sureties papers.'
        },
        {
            q: 'Are independent or non-executive directors liable for corporate loan defaults?',
            a: "Under Section 149(12) of the firms Act 2013. Independent and non-executive board heads are liable only for acts of omission or commission committed with their direct knowledge. Consent. Connivance. Provided they did not sign private sureties."
        },
        {
            q: 'How do directors obtain a complete release from personal guarantees after settlement?',
            a: 'The One Time closure sanction letter must contain an explicit clause releasing all private guarantors under Section 133 of the Indian Contract Act. Followed by obtaining an full No Dues letter and return of pledge cheques.'
        }
    ];
    return (<main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-[#1886ff] selection:text-white">
      {/* 1. HERO SECTION (#2452ae Background) */}
      <section className="relative text-white pt-14 pb-10 md:pt-18 md:pb-12 px-4 md:px-8 overflow-hidden flex items-center justify-center text-center" style={{ backgroundColor: '#2452ae' }}>
        <div className="absolute inset-0 bg-black/5 z-0 pointer-events-none"/>
        <div className="max-w-5xl mx-auto text-center z-10 relative">
          <span className="text-[11px] font-black uppercase tracking-wider text-blue-200 bg-white/10 px-3.5 py-1 rounded-full inline-block mb-3 border border-white/15">
            Corporate Law &amp; Personal Guarantee Protection.
          </span>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Is a Director Personally Liable for Business Loan Defaults?
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-3xl mx-auto font-normal text-white/95 leading-relaxed"> Understand when banks can by law pierce the firm shield. How private sureties are invoked under Indian contract law. The exact legal mechanisms firm board heads use to protect private residential homes and kin wealth from trade debt claims. </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2">
              <span>Defend Your Personal Assets.</span>
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
            return (<a key={link.id} href={'#' + link.id} className={'block py-1.5 px-2.5 rounded-lg transition-all duration-150 leading-snug ' + (isActive
                    ? 'bg-blue-50 text-[#1886ff] font-bold border-l-3 border-[#1886ff] pl-2'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50 font-medium')}>
                      {link.label}
                    </a>);
        })}
              </nav>

              <div className="mt-4 pt-3 border-t border-slate-100 bg-blue-50/50 -mx-4 -mb-4 p-3 rounded-b-2xl">
                <div className="flex items-center gap-2 text-[11px] font-bold text-slate-800">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0"/>
                  <span>Director Asset Protection.</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight"> Governed by firms Act 2013. Indian Contract Act 1872. IBC 2016. And RBI Prudential rules. </p>
              </div>
            </div>
          </aside>

          {/* ================= CENTER COLUMN: EDITORIAL CONTENT ================= */}
          <div className="space-y-10 min-w-0">

            {/* EXECUTIVE SUMMARY BOX (#F4F8FE with border-l-[5px] border-l-[#1886ff]) */}
            <section id="quick-crux" className="scroll-target rounded-2xl p-6 md:p-7 border border-blue-100 shadow-xs space-y-3.5" style={{ backgroundColor: '#F4F8FE', borderLeft: '5px solid #1886ff' }}>
              <div className="flex items-center gap-2.5 text-[#1886ff]">
                <Briefcase className="w-5 h-5 flex-shrink-0"/>
                <h2 className="text-lg md:text-xl font-extrabold text-slate-900">
                  Executive Summary: Company Director Liability Crux
                </h2>
              </div>
              <p className="text-xs md:text-sm text-slate-700 leading-relaxed font-normal"> Under foundational Indian firm law. A Private Limited or Public Limited firm is a distinct legal entity endowed with perpetual succession and separate firm personality. As a result. board heads and shareholders enjoy limited debt risk and are not inherently responsible for firm loans contracted in the firm name. However. Trade lenders routinely require promoters to sign steady private sureties. Creating independent tripartite surety dues that bypass the legal firm shield. </p>
              <p className="text-xs md:text-sm text-slate-700 leading-relaxed font-normal"> When a firm clients defaults and enters Non-Performing Asset classification after 90 days of steady default. Banks trigger private sureties clauses under Section 128 of the Indian Contract Act 1872. While lenders cannot attach private residential homes under the SARFAESI Act unless mainly mortgaged. They often initiate Debt claims Tribunal apps. Section 138 cheque bounce steps. Section 95 ruin apps under the ruin and ruin Code. </p>
              <p className="text-xs md:text-sm text-slate-700 leading-relaxed font-normal"> A structured One Time closure (OTS) executed at the bank board level provides a lawful exit mechanism. Through loan audits. Documented trade hardship dossiers. Bilateral OTS deal talks. board heads routinely secure 40% to 60% main loan waivers alongside total discharge of private sureties. Full No Dues letters. The return of all private pledge. </p>
            </section>

            {/* SECTION 1: DEBT ECONOMICS & NPA DYNAMICS */}
            <section id="debt-economics-npa" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                <Landmark className="w-5 h-5 text-[#1886ff]"/>
                <h2 className="text-xl md:text-2xl font-bold text-slate-900">
                  1. Corporate Debt Economics &amp; Director Liability Dynamics
                </h2>
              </div>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> The principle of separate legal personality established in landmark firm jurisprudence protects firm staff from private debts incurred by the trade entity. Under Section 2(34) and Section 149 of the firms Act 2013. board heads act as staff and fiduciaries of the firm body. Meaning debt risk for firm contractual default rests solely with firm assets. When an firms suffers daily work collapse. Supply chain breaks. client ruin. Firm credit facilities inevitably face distress. </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> Indian banks and Non-Banking money firms reduce this firm shield safety by mandating person promoter private sureties during loan origination. Under the Reserve Bank of India Prudential rules for relief of Stressed Assets. Loans progress through Special Mention Account stages (SMA-0 for 1-30 days late. SMA-1 for 31-60 days. SMA-2 for 61-90 days). Upon reaching day 91. The account is classified as a Non-Performing Asset. Requiring banks to make strict Tier-1 cash bank reserves ranging from 15% to 100%. </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> Because no-pledge firm loans carry no underlying physical deeds. Lenders cannot use summary attachment under the SARFAESI Act 2002 against unpledged own assets. Instead. Banks face prolonged civil trials or DRT lawsuits spanning three to seven years. This economic dynamic drives bank boards to favor structured One Time deals. This lets lenders to clean up stressed balance sheets while allowing board heads to resolve firm debts cleanly. </p>
            </section>

            {/* SECTION 2: FINANCIAL BREAKDOWN & SETTLEMENT MATH */}
            <section id="financial-breakdown-math" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                <Percent className="w-5 h-5 text-[#1886ff]"/>
                <h2 className="text-xl md:text-2xl font-bold text-slate-900">
                  2. Principal vs Penal Breakdown &amp; Director Settlement Math
                </h2>
              </div>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> Following a firm loans default. Banks rapidly inflate unpaid dues by growing late rates. Applying penalty fees between 24% and 36% annually. Adding legal claims overheads. Within 12 to 18 months. The claimed debt often exceeds the original main loan by 40% to 70%. Under the Reserve Bank of India Fair Practices Code and master directions on penalty charges. Lenders are prohibited from capitalizing extra fees into core main loan balances. </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> Conducting a loan audits strips away these unapplied charges and banned compoundings. Establishing the baseline main loan owed. During formal OTS talks. Bank credit boards evaluate the net present value of fast cash claims versus indefinite lawsuits costs against private guarantors. Paving the way for large trade debt relief. </p>
              
              {/* Financial Calculation Card */}
              <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs p-5 md:p-6 space-y-4">
                <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <BadgePercent className="w-5 h-5 text-[#1886ff]"/>
                  Representative Corporate Default &amp; Personal Guarantee Settlement (₹60 Lakh Debt)
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs md:text-sm">
                  <div className="bg-slate-50 p-4 rounded-xl space-y-2 border border-slate-100">
                    <span className="font-bold text-slate-800 block text-xs uppercase tracking-wider text-rose-600">Bank Claim Post-Default.</span>
                    <div className="flex justify-between py-1 border-b border-slate-200">
                      <span className="text-slate-600">Core Principal Outstanding:</span>
                      <span className="font-semibold text-slate-900">₹60,00,000</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-200">
                      <span className="text-slate-600">Accumulated Overdue Interest:</span>
                      <span className="font-semibold text-slate-900">₹14,80,000</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-200">
                      <span className="text-slate-600">penalty fees &amp; Legal Charges:</span>
                      <span className="font-semibold text-rose-600">₹7,40,000</span>
                    </div>
                    <div className="flex justify-between pt-1 font-bold text-slate-900 text-sm">
                      <span>Total Demanded Balance:</span>
                      <span className="text-rose-700">₹82,20,000</span>
                    </div>
                  </div>

                  <div className="bg-blue-50/60 p-4 rounded-xl space-y-2 border border-blue-100">
                    <span className="font-bold text-slate-800 block text-xs uppercase tracking-wider text-[#1886ff]">Structured Compromise Resolution.</span>
                    <div className="flex justify-between py-1 border-b border-blue-200/60">
                      <span className="text-slate-600">penalty fees Waived:</span>
                      <span className="font-semibold text-emerald-600">100% (-₹7,40,000).</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-blue-200/60">
                      <span className="text-slate-600">Overdue Interest Waived:</span>
                      <span className="font-semibold text-emerald-600">100% (-₹14,80,000).</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-blue-200/60">
                      <span className="text-slate-600">Principal Haircut (45%):</span>
                      <span className="font-semibold text-emerald-600">-₹27,00,000</span>
                    </div>
                    <div className="flex justify-between pt-1 font-bold text-slate-900 text-sm">
                      <span>Final Agreed Payout:</span>
                      <span className="text-emerald-700 font-extrabold">₹33,00,000 (59.8% Savings).</span>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed"> Upon payment of ₹33 Lakhs. The bank issues a full firm No Dues letter and an irrevocable Deed of Release discharging the private sureties. Releasing all private risk permanently. </p>
              </div>
            </section>

            {/* SECTION 3: 4-SIDED BORDERED COMPARISON MATRIX */}
            <section id="resolution-comparison-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                <Scale className="w-5 h-5 text-[#1886ff]"/>
                <h2 className="text-xl md:text-2xl font-bold text-slate-900">
                  3. Corporate Resolution Mechanisms: Comparative Matrix
                </h2>
              </div>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> When a Private Limited firm defaults on trade dues. handling can choose from several claims pathways. The strategic matrix below outlines how each relief options straight impacts private guarantor exposure. Money claims. Timeline certainty. </p>

              {/* 4-Sided Bordered Table */}
              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto shadow-xs bg-white">
                <table className="w-full text-left text-xs md:text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-100/80 text-slate-800 font-bold border-b border-slate-200/80 divide-x divide-slate-200/80">
                      <th className="p-3.5 md:p-4">Resolution Pathway.</th>
                      <th className="p-3.5 md:p-4">Principal Waiver Scope.</th>
                      <th className="p-3.5 md:p-4">Resolution Timeline.</th>
                      <th className="p-3.5 md:p-4">Director Personal Guarantee.</th>
                      <th className="p-3.5 md:p-4">Corporate &amp; Personal CIBIL.</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-700">
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/80 transition-colors">
                      <td className="p-3.5 md:p-4 font-semibold text-slate-900">One Time closure (OTS).</td>
                      <td className="p-3.5 md:p-4 text-emerald-600 font-semibold">40% to 60% main loan + 100% Fees.</td>
                      <td className="p-3.5 md:p-4">30 to 90 Days</td>
                      <td className="p-3.5 md:p-4 text-emerald-700 font-medium">Fully discharged via sanction letter.</td>
                      <td className="p-3.5 md:p-4">Settled status. Repairable in 12-24m.</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/80 transition-colors">
                      <td className="p-3.5 md:p-4 font-semibold text-slate-900">firm debt Restructuring.</td>
                      <td className="p-3.5 md:p-4 text-amber-600 font-medium">0% Haircut (Tenure extension).</td>
                      <td className="p-3.5 md:p-4">60 to 150 Days</td>
                      <td className="p-3.5 md:p-4 text-amber-700">sureties remain active.</td>
                      <td className="p-3.5 md:p-4">Restructured tag on trade file.</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/80 transition-colors">
                      <td className="p-3.5 md:p-4 font-semibold text-slate-900">DRT / NCLT lawsuits.</td>
                      <td className="p-3.5 md:p-4 text-slate-600">Unpredictable decree.</td>
                      <td className="p-3.5 md:p-4 text-rose-600 font-medium">3 to 7 Years</td>
                      <td className="p-3.5 md:p-4 text-rose-700">Persistent private asset exposure.</td>
                      <td className="p-3.5 md:p-4 text-rose-600">Suit Filed / Willful Defaulter risk.</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/80 transition-colors">
                      <td className="p-3.5 md:p-4 font-semibold text-slate-900">Lok Adalat Mediation.</td>
                      <td className="p-3.5 md:p-4 text-emerald-600 font-medium">20% to 40% rates Waivers.</td>
                      <td className="p-3.5 md:p-4">Single Session</td>
                      <td className="p-3.5 md:p-4">Discharged upon award fulfillment.</td>
                      <td className="p-3.5 md:p-4">Settled through Lok Adalat.</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/80 transition-colors">
                      <td className="p-3.5 md:p-4 font-semibold text-slate-900">Unmanaged Default Inaction.</td>
                      <td className="p-3.5 md:p-4 text-rose-600 font-semibold">0% (growing continues).</td>
                      <td className="p-3.5 md:p-4">Indefinite</td>
                      <td className="p-3.5 md:p-4 text-rose-700">Civil attachment &amp. Section 95 IBC.</td>
                      <td className="p-3.5 md:p-4 text-rose-700 font-bold">Severe degradation (&lt. 550 CIBIL).</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 4: TECHNICAL CIBIL ALGORITHM & SCORING MATH */}
            <section id="cibil-commercial-scoring" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                <TrendingUp className="w-5 h-5 text-[#1886ff]"/>
                <h2 className="text-xl md:text-2xl font-bold text-slate-900">
                  4. Commercial CIBIL &amp; Director Credit Score Dynamics
                </h2>
              </div>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> When a firm clients defaults. The impact on credit profiles is two-fold. The firm entity is rated on its firm Credit Report (CCR) with a CIBIL trade Rank ranging from CMR-1 (lowest risk) to CMR-10 (highest risk). Simultaneously. Every board heads who signed a private sureties is tracked under their person PAN on their clients Credit Information Report scored from 300 to 900. </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> person credit scoring algorithms evaluate five primary parameters: Payment History (35%). Credit Exposure &amp. Use (30%). Credit History Length (15%). Credit Diversity (10%). And Recent Credit Inquiries (10%). Defaulting on a guaranteed firm loans causes Days Past Due (DPD) to escalate. Precipitating an fast 150 to 250 point drop in the board heads private score and pushing trade ratings to CMR-9 or CMR-10. </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> Executing an bank OTS freezes negative DPD reports and updates the account status to Settled. Under Section 21 of the Credit Information firms (Regulation) Act (CICRA) 2005. Clients and guarantors are entitled to accurate reporting post-closure. By securing an full No Dues letter. board heads can systematically claims erroneous default tags and rebuild their credit profiles to 750+ within 12 to 24 months. </p>
            </section>

            {/* SECTION 5: VISUAL INFOGRAPHIC ASSET CARD */}
            <section id="infographic-overview" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                <FileCheck className="w-5 h-5 text-[#1886ff]"/>
                <h2 className="text-xl md:text-2xl font-bold text-slate-900">
                  5. Visual Blueprint: Director Debt Resolution Framework
                </h2>
              </div>
              <div className="bg-white rounded-3xl border border-slate-200/80 shadow-sm p-4 md:p-6 space-y-3">
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-slate-950 border border-slate-800">
                  <Image src="/images/infographics/company-director-liability-for-business-loan.jpg" alt="Company Director Liability for Business Loan Defaults in India 6-Stage Resolution Architecture" fill priority className="object-contain" sizes="(max-width: 1200px) 100vw, 900px"/>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-2 pt-2 text-xs text-slate-600">
                  <span>Official CredSettle Architecture: Corporate Debt Resolution &amp; Guarantee Release.</span>
                  <a href="/images/infographics/company-director-liability-for-business-loan.jpg" target="_blank" rel="noopener noreferrer" className="text-[#1886ff] hover:underline font-bold flex items-center gap-1">
                    <span>View High-Resolution Visual.</span>
                    <ExternalLink className="w-3.5 h-3.5"/>
                  </a>
                </div>
              </div>
            </section>

            {/* SECTION 6: STEP-BY-STEP SOP (6 STAGES) */}
            <section id="step-by-step-settlement-sop" className="scroll-target space-y-5">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                <Layers className="w-5 h-5 text-[#1886ff]"/>
                <h2 className="text-xl md:text-2xl font-bold text-slate-900">
                  6. Step-by-Step SOP: 6 Stages of Business Debt Resolution
                </h2>
              </div>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> Protecting own assets and extinguishing firm loans debts requires a disciplined six-stage Standard Operating steps executed by seasoned debt relief counsel. </p>

              <div className="space-y-3.5 text-sm md:text-base text-slate-700 leading-relaxed">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] font-bold text-xs flex items-center justify-center">1</span>
                    Stage 1: Forensic Loan &amp; Personal Guarantee Audit
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed"> counsel does a full audit of firm loans pacts. Sanction letters. private sureties covenants. The audit identifies banned penal compoundings violating RBI directives while establishing the precise legal limits of person promoter sureties. </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] font-bold text-xs flex items-center justify-center">2</span>
                    Stage 2: Financial Hardship Dossier Compilation
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed"> The firms compiles certified money proof documenting genuine trade ruin. This includes audited balance sheets. Declining GST returns. Bank records reflecting cash deficits. Uncollectable client receivables to prove firm distress. </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] font-bold text-xs flex items-center justify-center">3</span>
                    Stage 3: Statutory Legal Notice Defense
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed"> When lenders issue notices under Section 138 of the Negotiable Instruments Act or Section 25 of the PSSA for dishonoured cheques or mandates. Attorneys file structured replies within 15 days to establish genuine trade claims and prevent police case. </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] font-bold text-xs flex items-center justify-center">4</span>
                    Stage 4: Bank Credit Committee Bilateral Negotiations
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed"> A formal OTS proposal is submitted to the bank Stressed Assets relief Desk. Presenting money metrics that prove a 40% to 60% discounted lump-sum claims delivers superior net present value compared to multi-year DRT lawsuits against private guarantors. </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] font-bold text-xs flex items-center justify-center">5</span>
                    Stage 5: Settlement Sanction Vetting &amp; Guarantee Discharge
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed"> Legal specialists review the formal bank OTS sanction letter to ensure it contains explicit covenants releasing all private guarantors under Section 133 of the Indian Contract Act 1872 and confirming complete debt extinguishment upon payment. </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 font-bold text-xs flex items-center justify-center">6</span>
                    Stage 6: Direct Remittance &amp; No Dues Certificate Issuance
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed"> The agreed OTS deal sum is transferred straight into the bank loan account via RTGS. The lender promptly issues an full No Dues letter. Releases original title papers and pledge cheques. Updates CIBIL desk records to Settled. </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: STATUTORY NOTICE DEFENSE & LEGAL RIGHTS */}
            <section id="statutory-notice-defense" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                <Gavel className="w-5 h-5 text-[#1886ff]"/>
                <h2 className="text-xl md:text-2xl font-bold text-slate-900">
                  7. Statutory Notice Defense &amp; Director Legal Protections
                </h2>
              </div>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> During firm loans default. Banks use various legal instruments to exert claims pressure on firm leadership. Understanding applicable legal defenses protects board heads from coercive claims tactics and unwarranted private debt risk. </p>

              <div className="space-y-3.5 text-xs md:text-sm text-slate-700 leading-relaxed">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm md:text-base">
                    <ShieldAlert className="w-4 h-4 text-[#1886ff] flex-shrink-0"/>
                    <span>Section 25 Payment &amp; Settlement Systems Act.</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed"> When electronic NACH mandates bounce due to insufficient firm funds. Lenders issue Section 25 notices. Legal defense establishes that the mandate dishonour was caused by genuine trade distress rather than fraudulent intent. Meanwhile. Showing steady good-faith efforts to reach a structured OTS deal. </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm md:text-base">
                    <FileText className="w-4 h-4 text-[#1886ff] flex-shrink-0"/>
                    <span>Section 138 &amp; Section 141 Negotiable Instruments Act.</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed"> Banks routinely deposit blank pledge cheques and file reports against board heads under Section 138 read with Section 141. Under established Supreme Court ruling. pledge cheques do not represent an existing liquidated debt at issuance. Non-signatory or non-executive board heads are shielded unless direct daily work handling is established. </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm md:text-base">
                    <Scale className="w-4 h-4 text-[#1886ff] flex-shrink-0"/>
                    <span>Section 21 Arbitration Act &amp; Perkins Supreme Court Ruling.</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed"> banks often attempt to initiate unilateral hearing steps against firm debtors and guarantors. Under the Supreme Court judgments in Perkins Eastman and TRF Limited. Unilateral judge appointments by lenders are void ab initio under Section 12(5) of the hearing Act. Halting biased steps promptly. </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm md:text-base">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0"/>
                    <span>DRT Jurisdiction &amp; RBI Fair Practices Code.</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed"> Debt claims Tribunal steps under Section 19 of the RDBFI Act apply only to claims exceeding ₹20 Lakhs. Simultaneously. The RBI Fair Practices Code strictly prohibits lenders from deploying third-party claims staff to harass board heads. Visit private residences unannounced. Violate rights rights. </p>
                </div>
              </div>
            </section>

            {/* SECTION 8: 3-TIER ESCALATION MATRIX */}
            <section id="three-tier-escalation" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                <Building2 className="w-5 h-5 text-[#1886ff]"/>
                <h2 className="text-xl md:text-2xl font-bold text-slate-900">
                  8. 3-Tier Grievance Redressal &amp; Institutional Matrix
                </h2>
              </div>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> When claims branch officials refuse to consider genuine closure representations. Impose arbitrary penal additions. Engage in claims staff misconduct. board heads can use the Reserve Bank of India legal grievance reports rules. </p>

              <div className="space-y-3.5 text-xs md:text-sm text-slate-700 leading-relaxed">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-slate-900 text-sm">Tier 1: Bank Internal Grievance Redressal Officer (GRO)</h3>
                    <span className="text-[11px] font-bold text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-full">7-10 Days</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed"> Submit a formal written grievance detailing banned penal capitalization. Non-adherence to MSME debt rules. staff abuse. Requiring strict investigation and response within 7 to 10 working days. </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-slate-900 text-sm">Tier 2: Bank Principal Nodal Officer (PNO)</h3>
                    <span className="text-[11px] font-bold text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-full">14-21 Days</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed"> Escalate unresolved branch claims to the main loan Nodal staff at the bank zonal or national headquarters. Who possesses executive formal to review offers with central credit boards within 14 to 21 days. </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-slate-900 text-sm">Tier 3: RBI Integrated Ombudsman Scheme</h3>
                    <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">cms.rbi.org.in</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed"> Lodge a legal reports through the RBI Integrated staff portal (cms.rbi.org.in) for non-compliance with Fair Practices Codes. Unlawful sureties enforcement. Unjustified delays in releasing pledge paperwork. </p>
                </div>
              </div>
            </section>

            {/* SECTION 9: CHRONOLOGICAL TIMELINE TABLE */}
            <section id="chronological-timeline" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                <Clock className="w-5 h-5 text-[#1886ff]"/>
                <h2 className="text-xl md:text-2xl font-bold text-slate-900">
                  9. Chronological Resolution Milestones: Default to Release
                </h2>
              </div>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> firm loans claims relief follows a predictable procedural sequence from the first missed EMIs to final sureties discharge. </p>

              {/* 4-Sided Bordered Timeline Table */}
              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto shadow-xs bg-white">
                <table className="w-full text-left text-xs md:text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-100/80 text-slate-800 font-bold border-b border-slate-200/80 divide-x divide-slate-200/80">
                      <th className="p-3.5 md:p-4">Timeframe</th>
                      <th className="p-3.5 md:p-4">Corporate Status.</th>
                      <th className="p-3.5 md:p-4">Banking &amp; Legal Actions.</th>
                      <th className="p-3.5 md:p-4">Director Legal Strategy.</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-700">
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/80 transition-colors">
                      <td className="p-3.5 md:p-4 font-semibold text-slate-900">Days 1 to 30</td>
                      <td className="p-3.5 md:p-4 text-blue-700 font-medium">SMA-0 Classification.</td>
                      <td className="p-3.5 md:p-4">Automated late alerts and branch reminders.</td>
                      <td className="p-3.5 md:p-4">Audit firm cash flow and isolate private finances.</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/80 transition-colors">
                      <td className="p-3.5 md:p-4 font-semibold text-slate-900">Days 31 to 90</td>
                      <td className="p-3.5 md:p-4 text-amber-700 font-medium">SMA-1 / SMA-2</td>
                      <td className="p-3.5 md:p-4">Loan recall notices and sureties invocation warnings.</td>
                      <td className="p-3.5 md:p-4">Compile hardship dossier and audit ledgers.</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/80 transition-colors">
                      <td className="p-3.5 md:p-4 font-semibold text-slate-900">Day 91+</td>
                      <td className="p-3.5 md:p-4 text-rose-700 font-semibold">NPA Classification.</td>
                      <td className="p-3.5 md:p-4">Bank executes strict Tier-1 cash bank reserves.</td>
                      <td className="p-3.5 md:p-4">Submit structured OTS proposal to Stressed Assets Desk.</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/80 transition-colors">
                      <td className="p-3.5 md:p-4 font-semibold text-slate-900">Month 4 to 5</td>
                      <td className="p-3.5 md:p-4 text-purple-700 font-medium">Active closure.</td>
                      <td className="p-3.5 md:p-4">Issuance of Section 138 NI Act / Section 25 notices.</td>
                      <td className="p-3.5 md:p-4">File formal legal defenses and attend credit hearings.</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/80 transition-colors">
                      <td className="p-3.5 md:p-4 font-semibold text-slate-900">Month 6</td>
                      <td className="p-3.5 md:p-4 text-emerald-700 font-bold">Complete Closure.</td>
                      <td className="p-3.5 md:p-4">Sanction letter issued with full sureties release.</td>
                      <td className="p-3.5 md:p-4">Pay closure sum. Secure NDC. And restore CIBIL.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: SPECIALIZED REAL-WORLD SCENARIOS */}
            <section id="real-world-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                <AlertCircle className="w-5 h-5 text-[#1886ff]"/>
                <h2 className="text-xl md:text-2xl font-bold text-slate-900">
                  10. Specialized Commercial Scenarios &amp; Director Defense
                </h2>
              </div>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> firm loans defaults often intersect with complex daily work and governance realities. Examining these expert scenarios illustrates how board heads protect their rights in high-stakes situation. </p>

              <div className="space-y-3.5 text-xs md:text-sm text-slate-700 leading-relaxed">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <h3 className="font-bold text-slate-900 text-sm">Multi-Director Co-Guarantee Liability Allocation</h3>
                  <p className="text-slate-600 leading-relaxed"> When multiple promoters execute joint and several sureties. Lenders often pursue the board heads with the most accessible own assets. Legal legal help ensures talks encompass all guarantors collectively. Executing full OTS deal releases under Section 138 of the Indian Contract Act to prevent internal contribution claims. </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <h3 className="font-bold text-slate-900 text-sm">Resigned Director Exposure for Legacy Company Debt</h3>
                  <p className="text-slate-600 leading-relaxed"> Resigning as a board heads under Section 168 of the firms Act does not automatically revoke private sureties given to banks. Legal counsel serves formal revocation notices under Section 130 of the Contract Act for future advances and negotiates complete substitution or release of the outgoing board heads sureties. </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <h3 className="font-bold text-slate-900 text-sm">Section 95 IBC Personal Guarantor Insolvency Defense</h3>
                  <p className="text-slate-600 leading-relaxed"> lenders initiating private ruin against board heads under Section 95 of the IBC trigger an automatic interim moratorium under Section 96. Staying all legal steps. Leveraging this legal window allows counsel to present formal payment plans that settle firm debts and prevent private ruin. </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <h3 className="font-bold text-slate-900 text-sm">Asset Reconstruction Company (ARC) Debt Assignments</h3>
                  <p className="text-slate-600 leading-relaxed"> When stressed firm loans are assigned to ARCs under Section 5 of the SARFAESI Act at deep discounts. ARCs possess extensive trade flexibility. Stressed firm board heads can settle harsh lump-sum OTS deals securing 50% to 70% debt waivers and fast sureties releases. </p>
                </div>
              </div>
            </section>

            {/* SECTION 11: COMPANY PROFILE COMPONENT */}
            <section id="company-profile" className="scroll-target">
              <CompanySection />
            </section>

            {/* SECTION 12: 10 SYNCHRONIZED FAQS */}
            <section id="frequently-asked-questions" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                <HelpCircle className="w-5 h-5 text-[#1886ff]"/>
                <h2 className="text-xl md:text-2xl font-bold text-slate-900">
                  Frequently Asked Questions: Director Loan Liability
                </h2>
              </div>
              <p className="text-xs md:text-sm text-slate-600"> Authoritative legal answers regarding firm board heads debt risk. Private sureties enforcement. And firm loans closure protocols in India. </p>

              <div className="space-y-3">
                {faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (<div key={index} className="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden transition-all duration-200">
                      <button type="button" onClick={() => toggleFaq(index)} className="w-full p-4 md:p-5 text-left flex items-center justify-between gap-4 font-bold text-slate-900 text-xs md:text-sm hover:text-[#1886ff] transition-colors">
                        <span>{faq.q}</span>
                        <ChevronDown className={'w-4 h-4 text-slate-400 transition-transform duration-200 flex-shrink-0 ' + (isOpen ? 'rotate-180 text-[#1886ff]' : '')}/>
                      </button>
                      {isOpen && (<div className="px-4 pb-4 md:px-5 md:pb-5 text-xs md:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                          <p>{faq.a}</p>
                        </div>)}
                    </div>);
        })}
              </div>
            </section>

            {/* SECTION 13: CITATIONS & OUTBOUND AUTHORITY GRID */}
            <section id="regulatory-sources" className="scroll-target space-y-4 pt-4">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                <Award className="w-5 h-5 text-[#1886ff]"/>
                <h2 className="text-lg md:text-xl font-bold text-slate-900">
                  Statutory Citations &amp; Institutional Authorities
                </h2>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed"> CredSettle relief steps strictly comply with established legal rules including the firms Act (2013). Indian Contract Act (1872). ruin and ruin Code (2016). SARFAESI Act (2002). RDBFI Act (1993). Section 138 Negotiable Instruments Act (1881). Section 25 PSSA (2007). Reserve Bank of India Prudential Master Directions. </p>

              {/* Outbound Badges */}
              <div className="space-y-2 pt-2">
                <span className="text-xs font-bold text-slate-700 block uppercase tracking-wider">
                  Verified Regulators:
                </span>
                <div className="flex flex-wrap gap-2">
                  <a href="https://www.rbi.org.in" target="_blank" rel="noopener noreferrer" className="text-xs px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-[#1886ff] hover:text-[#1886ff] text-slate-700 transition-colors font-medium inline-flex items-center gap-1.5 shadow-2xs">
                    <span>Reserve Bank of India (rbi.org.in).</span>
                    <ExternalLink className="w-3 h-3 text-slate-400"/>
                  </a>
                  <a href="https://cms.rbi.org.in" target="_blank" rel="noopener noreferrer" className="text-xs px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-[#1886ff] hover:text-[#1886ff] text-slate-700 transition-colors font-medium inline-flex items-center gap-1.5 shadow-2xs">
                    <span>RBI Integrated Ombudsman (cms.rbi.org.in).</span>
                    <ExternalLink className="w-3 h-3 text-slate-400"/>
                  </a>
                  <a href="https://www.cibil.com" target="_blank" rel="noopener noreferrer" className="text-xs px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-[#1886ff] hover:text-[#1886ff] text-slate-700 transition-colors font-medium inline-flex items-center gap-1.5 shadow-2xs">
                    <span>TransUnion CIBIL (cibil.com).</span>
                    <ExternalLink className="w-3 h-3 text-slate-400"/>
                  </a>
                  <a href="https://www.indiacode.nic.in" target="_blank" rel="noopener noreferrer" className="text-xs px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-[#1886ff] hover:text-[#1886ff] text-slate-700 transition-colors font-medium inline-flex items-center gap-1.5 shadow-2xs">
                    <span>India Code (indiacode.nic.in).</span>
                    <ExternalLink className="w-3 h-3 text-slate-400"/>
                  </a>
                  <a href="https://nalsa.gov.in" target="_blank" rel="noopener noreferrer" className="text-xs px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-[#1886ff] hover:text-[#1886ff] text-slate-700 transition-colors font-medium inline-flex items-center gap-1.5 shadow-2xs">
                    <span>NALSA (nalsa.gov.in).</span>
                    <ExternalLink className="w-3 h-3 text-slate-400"/>
                  </a>
                  <a href="https://cybercrime.gov.in" target="_blank" rel="noopener noreferrer" className="text-xs px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-[#1886ff] hover:text-[#1886ff] text-slate-700 transition-colors font-medium inline-flex items-center gap-1.5 shadow-2xs">
                    <span>Cyber Crime Portal (cybercrime.gov.in).</span>
                    <ExternalLink className="w-3 h-3 text-slate-400"/>
                  </a>
                </div>
              </div>

              {/* Internal Related Badges */}
              <div className="space-y-2 pt-3 border-t border-slate-200/80">
                <span className="text-xs font-bold text-slate-700 block uppercase tracking-wider">
                  Related Guides:
                </span>
                <div className="flex flex-wrap gap-2">
                  <Link href="/best-lawyer-for-business-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Business Loan Settlement
                  </Link>
                  <Link href="/business-loan-settlement-process" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Business Settlement Process
                  </Link>
                  <Link href="/best-lawyer-for-company-loan-matters" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Company Loan Legal Help
                  </Link>
                  <Link href="/best-lawyer-for-msme-loan-recovery-defence" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    MSME Loan Defense
                  </Link>
                  <Link href="/best-lawyer-for-arc-loan-assignment-dispute" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    ARC Loan Disputes
                  </Link>
                  <Link href="/best-lawyer-for-consortium-loan-recovery-defence" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Consortium Loan Defense
                  </Link>
                  <Link href="/best-lawyer-for-drt-case-defence-for-bank-loan-recovery" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    DRT Case Defense
                  </Link>
                  <Link href="/convert-settled-status-to-closed" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Convert Settled to Closed
                  </Link>
                  <Link href="/remove-settled-status-from-cibil" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Remove Settled from CIBIL
                  </Link>
                  <Link href="/get-noc-after-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Get NOC Certificate
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
              <p className="text-xs text-slate-600 leading-relaxed"> expert in firm debt relief. board heads private sureties safety. DRT lawsuits defense. And banking OTS deal talks. </p>
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <Link href="/author/ashish-jhangra" className="text-[#1886ff] hover:underline font-semibold flex items-center gap-1">
                  <span>View Author Profile.</span>
                  <ArrowRight className="w-3 h-3"/>
                </Link>
                <span className="text-emerald-600 font-bold flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5"/> CredSettle Panel.
                </span>
              </div>
            </div>

            {/* Card 2: Emergency CTA Card (#2452ae Background) */}
            <div className="rounded-3xl p-6 text-white text-center space-y-4 shadow-md relative overflow-hidden" style={{ backgroundColor: '#2452ae' }}>
              <div className="space-y-1 text-center">
                <span className="text-[10px] font-black uppercase tracking-wider text-blue-200 bg-white/10 px-3 py-1 rounded-full inline-block mb-1">
                  100% CONFIDENTIAL DIRECTOR PROTECTION.
                </span>
                <p className="text-lg md:text-xl font-bold text-white leading-snug"> Facing private sureties Invocation? </p>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal"> Our firm debt specialists protect your own assets. Represent your case before credit boards. Secure complete legal releases. </p>
              </div>
              <Link href="/contact" className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md">
                Defend Your Personal Assets
              </Link>
              <div className="pt-2 flex flex-col items-center justify-center gap-1 text-[11px] text-blue-200">
                <div className="flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5 text-blue-200"/>
                  <a href="tel:+918800226635" className="hover:underline font-bold text-white">
                    Call: +91-8800226635.
                  </a>
                </div>
                <div className="flex items-center gap-1 text-[10px] text-blue-300">
                  <Lock className="w-3 h-3"/>
                  <span>Direct Bank Settlement • RBI Compliant.</span>
                </div>
              </div>
            </div>

            {/* Card 3: CredSettle Trust Badges */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">The CredSettle Advantage.</p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2"> <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5"/> <span><strong>Zero Upfront Risk:</strong> Transparent success-linked fees.</span> </li>
                <li className="flex items-start gap-2"> <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5"/> <span><strong>Direct Bank Remittance:</strong> No third-party escrow pools.</span> </li>
                <li className="flex items-start gap-2"> <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5"/> <span><strong>Complete sureties Discharge:</strong> by law binding releases.</span> </li>
                <li className="flex items-start gap-2"> <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5"/> <span><strong>Pan-India legal help:</strong> skilled firm counsel.</span> </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">Related firm Guides.</p>
              <div className="space-y-2.5">
                <Link href="/best-lawyer-for-company-loan-matters" className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group">
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug"> Best counsel for firm Loan Matters. </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Corporate debt guide &rarr;.</span>
                </Link>

                <Link href="/business-loan-settlement-process" className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group">
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug"> firm loans steps. </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">MSME resolution &rarr;.</span>
                </Link>

                <Link href="/best-lawyer-for-msme-loan-recovery-defence" className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group">
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug"> MSME Loan claims Defense in India. </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Statutory protections &rarr;.</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>);
}
