'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import StatsStrip from '@/components/StatsStrip';
import CompanySection from '@/components/CompanySection';
import { ChevronDown, Scale, ExternalLink, ShieldCheck, CheckCircle2, AlertTriangle, FileText, HelpCircle, TrendingUp, Award, BookOpen, Building2, DollarSign, Check, Lock, Phone, AlertCircle, CreditCard, Briefcase, Bookmark, ArrowRight, Clock, UserCheck, Sparkles, Gavel, BadgeAlert, Landmark } from 'lucide-react';
export default function BajajFinservPersonalLoanSettlementClient() {
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
        { id: 'npa-dynamics', label: '1. Debt Economics & NPA Dynamics' },
        { id: 'settlement-math', label: '2. Financial Breakdown & Settlement Math' },
        { id: 'comparison-matrix', label: '3. Resolution Pathways Comparison Matrix' },
        { id: 'cibil-impact', label: '4. CIBIL Algorithm & Credit Rebuilding' },
        { id: 'infographic-overview', label: '5. Visual Institutional Blueprint' },
        { id: 'step-by-step-sop', label: '6. 6-Stage Institutional Settlement SOP' },
        { id: 'statutory-defense', label: '7. Statutory Notice Defense & Legal Rights' },
        { id: 'escalation-matrix', label: '8. 3-Tier Grievance & Escalation Matrix' },
        { id: 'chronological-timeline', label: '9. Procedural Milestones & Timelines' },
        { id: 'specialized-scenarios', label: '10. Specialized Real-World Scenarios' },
        { id: 'company-profile', label: 'About CredSettle' },
        { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
        { id: 'regulatory-sources', label: 'Statutory Citations & Authorities' }
    ];
    const faqs = [
        {
            q: 'What is the official Bajaj Finserv personal loan settlement policy?',
            a: "Bajaj Finance operates a structured OTS deal program managed by its central relief desks in Pune. Clients facing verified job loss. Trade bankruptcy. health crises can settle no-pledge private loans dues via a One-Time settlement. Waiving all penal bounce charges alongside a large main loan haircut."
        },
        {
            q: 'When does Bajaj Finance consider an unsecured personal loan eligible for a settlement?',
            a: "An no-pledge loan becomes eligible for OTS deals once default crosses 90 consecutive days and is classified as a Non-Performing Asset (NPA). At this stage. Strict RBI provisioning rules incentivize Bajaj credit boards to accept a discounted cash settlement to clean their balance sheet."
        },
        {
            q: 'How much waiver or discount can I realistically negotiate on a Bajaj Finserv personal loan?',
            a: "clients typically secure a 100% waiver on accrued penal interest and NACH bounce fees. On the core remaining base loan. Clients realistically settle a 40% to 55% haircut depending on the age of default. Hardship paperwork. claims stage."
        },
        {
            q: 'How can I stop aggressive recovery agents and field visits from Bajaj Finance?',
            a: "Serve a formal legal legal help straight to the Bajaj Finance main loan Nodal Officer in Pune. This invokes the RBI Fair Practices Code. Limits calls strictly between 8:00 AM and 7:00 PM. Redirects contact to your legal counsel. Halts illegal workplace visits."
        },
        {
            q: 'How do I approach the Bajaj Finserv Stressed Asset Resolution Department directly?',
            a: "Bypass third-party claims telecallers by submitting a documented hardship dossier straight to the Bajaj Finance Zonal Grievance Redressal Officer and credit boards. CredSettle helps direct bank legal help to settle binding settlement terms."
        },
        {
            q: 'What should I do if I receive a Section 25 NACH bounce notice or Section 138 notice from Bajaj Finance?',
            a: "Never ignore legal notices. Serve a formal legal reply through counsel within 15 to 30 days. Establishing genuine hardship. Refuting intentional dishonor. Proposing an amicable One-Time settlement before magistrate court steps start."
        },
        {
            q: 'Can Bajaj Finserv send police, file an FIR, or have a borrower arrested for personal loan default?',
            a: 'No-pledge private loans default is strictly a civil claims. Not a criminal offense. Police cannot file an FIR or arrest clients for unpaid EMIs. Even Section 25 PSSA auto-debit bounce notices are compoundable matters routinely resolved through settlement.'
        },
        {
            q: 'What essential clauses must be verified in an official Bajaj Finserv settlement sanction letter?',
            a: 'An authentic Bajaj closure note must be on formal letterhead. Originate from a verified @bajajfinserv.in email. State your exact loan number. Define agreed payment tranches. And explicitly covenant to withdraw all legal notices upon settlement.'
        },
        {
            q: 'How will settling a Bajaj Finserv personal loan impact my CIBIL report and credit score?',
            a: "Bajaj updates credit bureaus to \"Settled\" with zero outstanding balance, stopping recurring negative 90+ DPD reporting. You can rebuild a 750+ score within 18 to 24 months using secured credit cards. Later convert the status to \"Closed\" under Section 21 of CICRA."
        },
        {
            q: 'What is the procedure and timeline to obtain the No Dues Certificate (NDC) from Bajaj Finance?',
            a: "After paying the agreed payout sum straight into your Bajaj loan account via NEFT or RTGS. The bank reconciles the ledger and writes off the waived variance. Bajaj Finance issues the formal No Dues letter (NDC) within 30 to 45 trade days."
        }
    ];
    return (<main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-[#1886ff] selection:text-white">
      {/* 1. HERO SECTION (#2452ae Background) */}
      <section className="relative text-white pt-14 pb-10 md:pt-18 md:pb-12 px-4 md:px-8 overflow-hidden flex items-center justify-center text-center" style={{ backgroundColor: '#2452ae' }}>
        <div className="absolute inset-0 bg-black/5 z-0 pointer-events-none"/>
        <div className="max-w-5xl mx-auto text-center z-10 relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-blue-200 text-xs font-semibold mb-3">
            <Landmark className="w-3.5 h-3.5"/>
            <span>Non-Banking Financial Company Stressed Asset Protocol.</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Bajaj Finserv Personal Loan Settlement
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed"> bank protocol for resolving overdue Bajaj Finance private loans. Halt claims firm calls. Stop illegal workplace visits. Waive compounding NACH bounce charges. Secure 40% to 55% main loan haircuts with an formal No Dues letter. </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2">
              <span>Facing Bajaj Finance Recovery Pressure? Request Case Evaluation.</span>
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
                <p className="text-[10px] text-slate-500 mt-1 leading-tight"> Governed by Reserve Bank of India NBFC Regulations and Fair Practices Code. </p>
              </div>
            </div>
          </aside>

          {/* ================= MIDDLE COLUMN: MAIN EDITORIAL CONTENT ================= */}
          <div className="space-y-8 md:space-y-10 min-w-0">
            
            {/* EXECUTIVE SUMMARY BOX (#F4F8FE Box) */}
            <div id="quick-crux" className="scroll-target rounded-2xl bg-[#F4F8FE] border border-blue-100/90 border-l-[5px] border-l-[#1886ff] p-5 sm:p-6 md:p-7 shadow-xs space-y-4 text-slate-800">
              <div className="flex items-center gap-2 text-xs md:text-sm font-black uppercase tracking-wider text-[#1886ff]">
                <Bookmark className="w-4 h-4 text-[#1886ff]"/>
                <span>EXECUTIVE BRIEF: BAJAJ FINSERV PERSONAL LOAN SETTLEMENT CRUX.</span>
              </div>

              <ul className="space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-center gap-2.5"> <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0"/> <div className="truncate sm:overflow-visible"> <strong className="text-slate-900 font-bold">NPA Mandate:</strong> Resolved straight through Bajaj Finance stressed asset desks after 90 days of default. </div> </li>

                <li className="flex items-center gap-2.5"> <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0"/> <div className="truncate sm:overflow-visible"> <strong className="text-slate-900 font-bold">Zero Mortgage Risk:</strong> no-pledge loans carry zero property mortgage or SARFAESI attachment rights. </div> </li>

                <li className="flex items-center gap-2.5"> <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0"/> <div className="truncate sm:overflow-visible"> <strong className="text-slate-900 font-bold">100% Penal Waiver:</strong> Full elimination of compounding penal interest and repeated NACH bounce fees. </div> </li>

                <li className="flex items-center gap-2.5"> <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0"/> <div className="truncate sm:overflow-visible"> <strong className="text-slate-900 font-bold">40% to 55% Haircut:</strong> Practical main loan OTS deal settled on core unamortized balances. </div> </li>

                <li className="flex items-center gap-2.5"> <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0"/> <div className="truncate sm:overflow-visible"> <strong className="text-slate-900 font-bold">formal Closure:</strong> Binding sanction letter followed by an authentic No Dues letter within 30 to 45 days. </div> </li>
              </ul>
            </div>

            {/* SECTION 1: Debt Economics & NPA Dynamics */}
            <section id="npa-dynamics" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]"/>
                <span>NBFC Regulations &amp; Prudential Guidelines.</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. Debt Economics &amp; NPA Classification in Bajaj Finance Personal Loans
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> Bajaj Finance Limited disburses large volumes of no-pledge private and flexi loans via digital underwriting. When sudden income loss. Trade downturns. Or health crises disrupt cashflow. Servicing installments becomes unviable. Overdue accounts progress through Special Mention Account stages: SMA-0 (1-30 days). SMA-1 (31-60 days). And SMA-2 (61-90 days). Beyond 90 consecutive days of default. The loan is formally classified as a Non-Performing Asset (NPA) under Reserve Bank of India prudential rules. </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> NPA reclassification requires Bajaj Finance to halt ledger interest accruals and allocate 15% to 25% provisions from its Tier-1 core cash reserves. Because no-pledge private loans lack mortgaged property or physical pledge. Bajaj cannot initiate summary asset seizure under the SARFAESI Act. Protracted civil lawsuits or disputed arbitrations across courts involve heavy office costs. As a result. Bajaj Finance central stressed asset boards in Pune are commercially motivated to approve structured One-Time deals (OTS) to release locked cash reserves and clean toxic non-performing assets off their balance sheets. </p>
            </section>

            {/* SECTION 2: Financial Breakdown & Settlement Math */}
            <section id="settlement-math" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <DollarSign className="w-4 h-4 text-[#1886ff]"/>
                <span>Financial Forensics.</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. Financial Breakdown: Principal vs. Compounded Penal Levies
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> When an EMI bounces. Bajaj Finance systems inflate the balance with annual penal interest between 24% and 36%. Plus recurring auto-debit bounce fees of ₹500 and 18% GST for each failed presentation. Within several months. These artificial non-legal charges swell the gross claim by 30% to 50% above the genuine unamortized loan main loan. </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> A skilled debt relief plan begins with a audits to strip away these non-legal additions. When backed by verified hardship records. Bajaj Finance credit boards routinely authorize a 100% waiver across all extra penalty charges and bounce charges. Alongside a 40% to 55% main loan haircut on the core unamortized balance. </p>

              {/* Representative Calculation Card */}
              <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white shadow-xs">
                <div className="bg-slate-900 text-white p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-[#1886ff]"/>
                    <span className="font-bold text-sm">agent Bajaj Finance 180-Day NPA Settlement Breakdown.</span>
                  </div>
                  <span className="text-xs text-blue-300 font-mono">₹10 Lakh Baseline Claim.</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80">
                    <thead>
                      <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-semibold">
                        <th className="p-3">Financial Component.</th>
                        <th className="p-3">Pre-Settlement Claim.</th>
                        <th className="p-3">Bajaj Credit Committee Waiver.</th>
                        <th className="p-3 text-right">Final Payable Amount.</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200/80 text-slate-600">
                      <tr>
                        <td className="p-3 font-medium text-slate-900">remaining base loan.</td>
                        <td className="p-3">₹7,00,000</td>
                        <td className="p-3 text-emerald-600 font-semibold">45% Core Haircut (₹3,15,000).</td>
                        <td className="p-3 text-right font-bold text-slate-900">₹3,85,000</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Accrued Regular &amp. Penal Interest.</td>
                        <td className="p-3">₹2,40,000</td>
                        <td className="p-3 text-emerald-600 font-semibold">100% Complete Waiver.</td>
                        <td className="p-3 text-right font-bold text-slate-900">₹0</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Late Surcharges &amp. NACH Bounces.</td>
                        <td className="p-3">₹60,00,0</td>
                        <td className="p-3 text-emerald-600 font-semibold">100% office Waiver.</td>
                        <td className="p-3 text-right font-bold text-slate-900">₹0</td>
                      </tr>
                      <tr className="bg-blue-50/70 font-bold text-slate-900">
                        <td className="p-3">Total OTS deal Evaluation.</td>
                        <td className="p-3 text-rose-600">₹10,00,000</td>
                        <td className="p-3 text-emerald-700">₹6,15,000 Total Relief (61.5% Savings).</td>
                        <td className="p-3 text-right text-[#1886ff] text-sm sm:text-base">₹3,85,000 Final OTS.</td>
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
                3. Comparative Analysis: Bajaj Finance Debt Resolution Pathways
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> clients must evaluate their options objectively. Simple tenure restructuring increases overall interest without main loan relief. Meanwhile. Ignoring notices invites aggressive claims visits and court summons. An bank OTS provides definitive closure and legal immunity. </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[620px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Resolution Mechanism.</th>
                      <th className="p-3">Financial Relief.</th>
                      <th className="p-3">Legal Protection.</th>
                      <th className="p-3">CIBIL Bureau Remark.</th>
                      <th className="p-3">Standard Timeline.</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr className="bg-blue-50/30">
                      <td className="p-3 font-bold text-slate-900">One-Time settlement (OTS).</td>
                      <td className="p-3 text-emerald-600 font-semibold">40% to 55% main loan Haircut.</td>
                      <td className="p-3">Complete Discharge &amp. Notice Withdrawal.</td>
                      <td className="p-3 font-mono text-[11px]">Settled / Zero Balance.</td>
                      <td className="p-3">30 to 60 Days</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Tenor Restructuring.</td>
                      <td className="p-3 text-amber-600">0% Haircut (Higher Total Interest).</td>
                      <td className="p-3">Conditional on Timely Servicing.</td>
                      <td className="p-3 font-mono text-[11px]">Restructured Facility.</td>
                      <td className="p-3">45 to 90 Days</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Civil Court lawsuits.</td>
                      <td className="p-3 text-rose-600">High Legal Defense Expenses.</td>
                      <td className="p-3">Prolonged Adversarial Decrees.</td>
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
                      <td className="p-3 text-rose-600">Compounding 36% Penalties.</td>
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
              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> Credit bureaus (CIBIL. Experian. CRIF High Mark) calculate scores based on five factors: 35% Payment History. 30% Credit use. 15% Credit Age. 10% Credit Mix. 10% Inquiries. Defaulting on a Bajaj private loans damages the critical 35% payment history pillar. Logging progressive 30. 60. 90+ DPD marks that reduce scores by 120 to 180 points. </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> Executing an authorized settlement updates the bureau remark to &quot. Settled&quot. With a zero unpaid dues. Halting ongoing negative DPD notations. clients can rebuild a 750+ score over 18 to 24 months using a fixed-deposit secured credit card while maintaining use below 30%. Under Section 21 of CICRA. Paying the waived variance later converts &quot. Settled&quot. To &quot. Closed&quot. , restoring complete creditworthiness. </p>
            </section>

            {/* SECTION 5: Visual Infographic Asset Card */}
            <section id="infographic-overview" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Sparkles className="w-4 h-4 text-[#1886ff]"/>
                <span>Visual Blueprint.</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Bajaj Finserv Personal Loan Settlement Roadmap
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> This visual flowchart summarizes the six bank stages required to resolve an overdue Bajaj private loans through an authorized OTS deals. </p>

              <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-slate-100 bg-slate-100">
                  <Image src="/images/infographics/bajaj-finserv-personal-loan-settlement.jpg" alt="Bajaj Finserv Personal Loan Settlement Roadmap and 6-Stage Process Flowchart" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 900px" className="object-contain hover:scale-[1.01] transition-transform duration-300" priority/>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-500 pt-1 gap-2">
                  <span>Official CredSettle Institutional Resolution Architecture • RBI Compliant.</span>
                  <a href="/images/infographics/bajaj-finserv-personal-loan-settlement.jpg" target="_blank" rel="noopener noreferrer" className="text-[#1886ff] hover:underline font-bold inline-flex items-center gap-1">
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
                6. Six-Stage SOP: Negotiating Bajaj Finserv Personal Loan Settlements
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> Settling with Bajaj Finance requires structured bank engagement. Informal discussions with telecallers often lead to misallocated token payments. Follow this six-stage protocol to secure an authorized settlement. </p>

              <div className="space-y-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">1</span>
                    Stage 1: Forensic Statement &amp; Bounce Audit
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed"> Audit the loan record from inception. Isolate released main loan. Reconcile cleared EMIs. Unbundle 36% penal interest. Strip away total NACH bounce charges to establish the true net base loan. </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">2</span>
                    Stage 2: Comprehensive Hardship Dossier Compilation
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed"> Assemble verifiable proof of genuine distress. This includes job termination letters. Salary reduction slips. Audited trade balance sheets. health discharge summaries to establish genuine inability to service regular EMIs. </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">3</span>
                    Stage 3: Harassment Shield &amp; Grievance Representation
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed"> Serve a formal legal notice to the Bajaj main loan Nodal Officer in Pune. Invoking the RBI Fair Practices Code to enforce 8 AM to 7 PM calling hours. Redirect contact through counsel. Stop workplace visits. </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">4</span>
                    Stage 4: Stressed Asset Committee Negotiations
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed"> Engage Bajaj Finance credit boards straight. Leverage Tier-1 provisioning pressures and the lack of underlying pledge to eliminate 100% of penal fees and secure a 40% to 55% main loan haircut. </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">5</span>
                    Stage 5: Settlement Sanction Letter Legal Vetting
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed"> Verify the sanction letter on formal letterhead from an authorized @bajajfinserv.in email. Confirming stated settlement figures. Payment deadlines. And an explicit doing to withdraw pending legal notices. </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">6</span>
                    Stage 6: Direct Loan Remittance &amp; NDC Procurement
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed"> pay the agreed settlement figure straight into your Bajaj loan account via NEFT or RTGS. Retain transaction receipts. Verify zeroed ledger balances. Obtain your formal No Dues letter within 30 to 45 trade days. </p>
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
              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> When loan default surpasses 90 to 120 days. Bajaj Finance retainers dispatch legal demand notices. Understanding your legal rights disarms threats and creates leverage for a fair OTS deal. </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                    <FileText className="w-4 h-4"/>
                    <span>Section 25 PSSA NACH Mandate Notice.</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed"> Issued under the Payment and settlement Systems Act for bounced auto-debits. Serving a legal reply within 30 days showing unexpected debt stress refutes criminal intent and channels the debt into an amicable OTS. </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                    <Scale className="w-4 h-4"/>
                    <span>Section 138 Negotiable Instruments Act.</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed"> Dispatched if physical pledge cheques are dishonored. A legal reply served within 15 days establishing that cheques were deposited as conditional pledge prevents summary criminal steps. </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-purple-700 font-bold text-sm">
                    <Gavel className="w-4 h-4"/>
                    <span>Arbitration Section 21 Jurisdictional Challenge.</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed"> Under Supreme Court rulings in Perkins Eastman and TRF Ltd. Lenders cannot unilaterally appoint a sole arbitrator. Raising Section 12(5) objections halts ex-parte steps and forces bilateral OTS deal. </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <ShieldCheck className="w-4 h-4"/>
                    <span>DRT Limits &amp; RBI Fair Practices Code.</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed"> Debts claims Tribunals handle claims exceeding ₹20 Lakhs only. For all retail loans. The RBI Fair Practices Code forbids calls before 8 AM or after 7 PM. Abuse of relatives. Workplace visits. </p>
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
                8. Three-Tier Escalation Matrix for Bajaj Finserv Grievances
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> When claims vendors violate conduct rules or branches ignore hardship letters. Escalate systematically through Bajaj internal redressal officers and the Reserve Bank of India. </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Grievance Tier</th>
                      <th className="p-3">Designated NBFC Authority.</th>
                      <th className="p-3">Turnaround Time</th>
                      <th className="p-3">pay &amp; Scope of Intervention.</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 1: GRO</td>
                      <td className="p-3">Bajaj Grievance Redressal Officer (Pune).</td>
                      <td className="p-3 font-mono">7 to 10 Working Days.</td>
                      <td className="p-3">Investigation into improper claims conduct. Disputed penal interest charges. And initial settlement review.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 2: PNO</td>
                      <td className="p-3">main loan Nodal Officer (Pune HQ).</td>
                      <td className="p-3 font-mono">14 to 21 Working Days.</td>
                      <td className="p-3">Direct intervention on persistent claims agent abuse. Review of disputed accounting. And zonal credit boards escalations.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Level 3: RBI Ombudsman.</td>
                      <td className="p-3">Reserve Bank Integrated Ombudsman.</td>
                      <td className="p-3 font-mono">30 Days Post-PNO.</td>
                      <td className="p-3">Legally binding RBI adjudication through cms.rbi.org.in for severe fair practices code infractions and predatory debt claims practices.</td>
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
              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> Understanding where your loan sits along the default timeline enables you to pinpoint the optimal strategic window for initiating talks and maximizing main loan waivers. </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Timeline Interval.</th>
                      <th className="p-3">Asset Classification.</th>
                      <th className="p-3">NBFC Recovery Actions.</th>
                      <th className="p-3">Recommended Borrower Strategy.</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 1 to 30</td>
                      <td className="p-3 font-mono text-[11px]">SMA-0</td>
                      <td className="p-3">Automated SMS notices, email reminders. And soft claims phone calls.</td>
                      <td className="p-3">Review household cashflow. avoid taking fresh high-interest digital loan apps.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 31 to 60</td>
                      <td className="p-3 font-mono text-[11px]">SMA-1</td>
                      <td className="p-3">Intensified telecaller outreach and preliminary loan recall notices.</td>
                      <td className="p-3">Assemble authenticated health. Employment. And income hardship records.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 61 to 90</td>
                      <td className="p-3 font-mono text-[11px]">SMA-2</td>
                      <td className="p-3">Pre-NPA warnings and initial assignment to third-party claims firms.</td>
                      <td className="p-3">Enforce RBI Fair Practices Code rights against abusive telecalling vendors.</td>
                    </tr>
                    <tr className="bg-amber-50/50">
                      <td className="p-3 font-bold text-slate-900">Day 91 to 120</td>
                      <td className="p-3 font-mono text-[11px] text-amber-700 font-bold">NPA Classification.</td>
                      <td className="p-3">Tier-1 cash provisioning triggered. account referred to central stressed assets.</td>
                      <td className="p-3">Perform deep record audit and engage seasoned debt relief counsel.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Day 121 to 180</td>
                      <td className="p-3 font-mono text-[11px] text-[#1886ff] font-bold">Prime OTS Window.</td>
                      <td className="p-3">Issuance of Section 25 PSSA notices or hearing intimation letters.</td>
                      <td className="p-3 font-bold text-slate-900">Execute bilateral OTS deal talks for a 40% to 55% waiver.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Month 6 and Beyond.</td>
                      <td className="p-3 font-mono text-[11px]">Write-off / ARC Sale.</td>
                      <td className="p-3">Ex-parte arbitral hearings or portfolio assignment to Asset Reconstruction Companies.</td>
                      <td className="p-3">pay sanctioned payment steps straight and secure formal NDC.</td>
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
                10. Handling Complex Scenarios: Insta Cards, Layoffs &amp; ARCs
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> clients often face multi-product debts and distinct economic crises. Below are tactical plans for specialized Bajaj debt scenarios. </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-[#1886ff]"/>
                    Insta EMI Card &amp; Flexi Cross-Defaults
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed"> default on an Insta EMI card accelerates cross-defaults on private loans. Structured relief bundles all active facilities into a single OTS deal dossier to achieve a unified waiver. </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-emerald-600"/>
                    Corporate Tech Layoffs &amp; Salary Loss
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed"> Salaried company staff facing sudden downsizing can submit severance papers and depleted bank records as verifiable hardship to expedite approval for deep main loan haircuts. </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-indigo-600"/>
                    Business Proprietorship Cashflow Shocks
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed"> Small shop owners using private credit for working cash can establish genuine trade distress through audited money records. Tax returns. Debtor default records. </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-600"/>
                    Asset Reconstruction Company (ARC) Sales
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed"> When aged portfolios are sold to ARCs like Phoenix or Prudent at deep discounts. Skilled negotiators can leverage the discounted acquisition cost to secure haircuts exceeding 60%. </p>
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
                FAQs: Bajaj Finserv Personal Loan Settlement Guide
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> Clear. Verified answers addressing the most common client questions regarding Bajaj Finance private loans deals. Waiver limits. Claims conduct. Credit rebuilding. </p>

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
                <li> <strong>Reserve Bank of India:</strong> Master Direction on Fair Practices Code for NBFCs and claims Conduct Rules. </li>
                <li> <strong>Payment and settlement Systems Act. 2007:</strong> Section 25. Dishonour of Electronic Funds Transfer Mandates. </li>
                <li> <strong>Negotiable Instruments Act, 1881:</strong> Section 138. Cheque Dishonour for Debt Discharge. </li>
                <li> <strong>hearing and talks Act, 1996:</strong> Sections 12(5) and 21. Ineligibility of Unilateral Arbitrators (Perkins Eastman). </li>
                <li> <strong>Credit Information Companies Act, 2005:</strong> Section 21. Credit Information Rectification Protocols. </li>
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
              <p className="text-xs text-slate-600 leading-relaxed"> Expert in NBFC compliance. Bajaj Finance stressed asset relief. And debt defense before ombudsman offices and credit boards. </p>
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

            {/* Card 2: Emergency CTA Card (#2452ae background) */}
            <div className="rounded-3xl p-6 text-white text-center space-y-4 shadow-md relative overflow-hidden" style={{ backgroundColor: '#2452ae' }}>
              <div className="space-y-1 text-center">
                <span className="text-xs font-black uppercase tracking-wider text-blue-200 bg-white/10 px-3 py-1 rounded-full inline-block mb-1">
                  CONFIDENTIAL LEGAL DEFENSE.
                </span>
                <p className="text-lg md:text-xl font-bold text-white leading-snug"> Bajaj Finance claims Threats or Legal Notices? </p>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal"> Our senior debt specialists halt claims abuse. Reply to Section 25 notices. settle up to 55% waivers straight with Bajaj Finance. </p>
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
                  <span>Direct NBFC Settlement • 100% RBI Compliant.</span>
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
                <li className="flex items-start gap-2"> <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5"/> <span><strong>Verified No Dues letter:</strong> formal NBFC closure guarantee.</span> </li>
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
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug"> hearing Notice for private loans. </p>
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
