'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import StatsStrip from '@/components/StatsStrip';
import CompanySection from '@/components/CompanySection';
import { ChevronDown, Scale, ExternalLink, ShieldCheck, CheckCircle2, AlertTriangle, FileText, HelpCircle, TrendingUp, Award, BookOpen, Building2, DollarSign, Check, Lock, Phone, AlertCircle, CreditCard, Briefcase, Bookmark, ArrowRight, Clock, UserCheck, Sparkles, Gavel, BadgeAlert, Landmark, PhoneCall, UserX, ShieldAlert } from 'lucide-react';
export default function CanBankCallRelativesForLoanRecoveryClient() {
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
        { id: 'legal-reality-calling-relatives', label: '1. Legal Reality & Privacy Rights' },
        { id: 'financial-breakdown-penal-charges', label: '2. Penal Charges vs Principal' },
        { id: 'debt-resolution-comparison-matrix', label: '3. Debt Resolution Matrix' },
        { id: 'cibil-algorithm-scoring-math', label: '4. CIBIL Scoring & DPD Tracking' },
        { id: 'visual-defense-blueprint', label: 'Visual Anti-Harassment Blueprint' },
        { id: 'step-by-step-defense-sop', label: '5. 6-Stage Defense SOP' },
        { id: 'statutory-notice-defense', label: '6. Statutory Legal Defense' },
        { id: 'three-tier-escalation-matrix', label: '7. 3-Tier Grievance Matrix' },
        { id: 'procedural-timeline-milestones', label: '8. Procedural Milestones' },
        { id: 'specialized-harassment-scenarios', label: '9. Loan Apps & Contact Scraping' },
        { id: 'company-profile', label: 'About CredSettle' },
        { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
        { id: 'regulatory-sources', label: 'Statutory Citations & Authorities' }
    ];
    const faqs = [
        {
            q: 'Can a bank legally call my relatives or friends for loan recovery?',
            a: "No. Under Reserve Bank of India (RBI) rules and the Supreme Court rights ruling (Puttaswamy v. Union of India). Banks and claims agents are strictly prohibited from contacting your relatives. Friends. Colleagues. Neighbors for debt claims unless they are registered co-clients or legal guarantors."
        },
        {
            q: 'What should I do if recovery agents are calling people on my contact list?',
            a: "Paper every call. Save call recordings and screenshots. promptly issue a formal cease-and-desist legal notice to the bank nodal agents. You should also register an fast reports on the National Cyber Crime Reporting Portal (1930) and the RBI CMS portal (cms.rbi.org.in)."
        },
        {
            q: 'Can loan apps access and call my entire phone contact list in India?',
            a: "No. The RBI online Lending rules explicitly prohibit loan apps from accessing client phone contacts. Media galleries. Call logs. Any loan app scraping your phone contact book to harass friends and kin is operating unlawfully in direct violation of RBI directives and IT Act provisions."
        },
        {
            q: 'Can recovery agents visit my family home or workplace?',
            a: "claims agents may only visit the client at their checked residential address during designated hours (8:00 AM to 7:00 PM) if authorized by the lender. They cannot harass kin. Visit your workplace to create a public scene. Disclose loan default details to colleagues and employers."
        },
        {
            q: 'What legal action can I take against recovery agents abusing my relatives?',
            a: "You can file a police FIR under Sections 351. 352. 308 of the Bharatiya Nyaya Sanhita (BNS) for penal threats. Defamation. And extortion. Concurrently. You can file a formal reports with the RBI Integrated agents for RBI sanctions against the lending institution."
        },
        {
            q: 'Is a family member liable to pay an unsecured personal loan or credit card debt?',
            a: "No. private loans and credit card debts are no-pledge person dues. Spouses, parents, siblings. Adult children have zero legal debt risk to repay the client's debt unless they explicitly signed as a co-client or provided a written money guarantee."
        },
        {
            q: 'Can recovery agents threaten relatives with police arrest or asset seizure?',
            a: "No. Defaulting on an no-pledge private loans is strictly a civil claims. Claims agents have zero legal formal to threaten arrest. File penal charges. Seize household assets belonging to kin. Such threats constitute penal extortion and abuse punishable under law."
        },
        {
            q: 'How do I stop recovery agents from harassing reference contacts provided during application?',
            a: 'Reference contacts are provided solely for address and identity check at the time of loan onboarding. Lenders cannot treat references as co-obligors or harass them for payment. A formal legal legal help to the bank\'s Principal Nodal Officer will immediately halt calls to reference contacts.'
        },
        {
            q: 'Can I settle my loan to permanently stop recovery agent harassment?',
            a: 'Yes. Entering into a formal One-Time settlement (OTS) with the lending bank or NBFC allows you to resolve the unpaid dues at a 40% to 70% waiver on extra fees. Once settled. The bank issues a No Dues letter (NDC) and terminates all claims firm mandates.'
        },
        {
            q: 'How can CredSettle protect my family from aggressive recovery agent calling?',
            a: "CredSettle provides dedicated anti-abuse legal defense. We issue formal legal cease-and-desist notices to lenders. Escalate rights abuse to the RBI agents and Cyber Crime Cell. Take over lenders contacts. settle affordable OTS deals on your behalf."
        }
    ];
    return (<main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-[#1886ff] selection:text-white">
      {/* 1. HERO SECTION (#2452ae Background) */}
      <section className="relative text-white pt-14 pb-10 md:pt-18 md:pb-12 px-4 md:px-8 overflow-hidden flex items-center justify-center text-center" style={{ backgroundColor: '#2452ae' }}>
        <div className="absolute inset-0 bg-black/5 z-0 pointer-events-none"/>
        <div className="max-w-5xl mx-auto text-center z-10 relative">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-blue-100 text-xs font-bold uppercase tracking-wider mb-4">
            <ShieldCheck className="w-4 h-4 text-emerald-300"/>
            <span>RBI Fair Practices &amp; Privacy Protection.</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Can Bank Call Relatives for Loan Recovery?
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed"> Are claims agents harassing your kin. Scraping contacts. threatening colleagues? Understand your legal rights rights under RBI rules and stop banned debt claims calls promptly. </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2">
              <span>Stop Agents Calling Your Family.</span>
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
                  <span>Statutory Legal Defense.</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight"> Governed by the RBI Master Directions &amp. Constitution of India Article 21. </p>
              </div>
            </div>
          </aside>

          {/* ================= MIDDLE COLUMN: MAIN CONTENT ================= */}
          <div className="space-y-8 md:space-y-10 min-w-0">
            
            {/* Executive Summary Box */}
            <div id="quick-crux" className="scroll-target rounded-2xl bg-[#F4F8FE] border border-blue-100/90 border-l-[5px] border-l-[#1886ff] p-5 sm:p-6 md:p-7 shadow-xs space-y-4 text-slate-800">
              <div className="flex items-center gap-2 text-xs md:text-sm font-black uppercase tracking-wider text-[#1886ff]">
                <Bookmark className="w-4 h-4 text-[#1886ff]"/>
                <span>EXECUTIVE SUMMARY: LEGAL PROTECTIONS AGAINST CONTACT HARASSMENT.</span>
              </div>

              <ul className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-3"> <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5"/> <div> <strong className="text-slate-900 font-bold">Calling Relatives is Strictly banned:</strong> Under Reserve Bank of India Master Directions on Fair Practices Code. Lenders and claims firms are explicitly barred from calling. Messaging. Contacting kin. Friends. Or employers regarding a client&apos. s loan default. </div> </li>

                <li className="flex items-start gap-3"> <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5"/> <div> <strong className="text-slate-900 font-bold">Constitutional Right to rights:</strong> The landmark Supreme Court ruling in. <em>Justice K.S. Puttaswamy v. Union of India.</em> affirms informational rights as a fundamental right under Article 21. Making the non-consensual disclosure of debt to third parties an actionable civil and constitutional violation. </div> </li>

                <li className="flex items-start gap-3"> <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5"/> <div> <strong className="text-slate-900 font-bold">Zero money debt risk on Non-Guarantors:</strong> no-pledge private loans and credit cards are strictly private debts. Relatives, spouses. Parents carry zero legal debt to clear unpaid dues unless they formally signed as joint co-clients or money guarantors. </div> </li>

                <li className="flex items-start gap-3"> <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5"/> <div> <strong className="text-slate-900 font-bold">online Contact Scraping is a Cyber Crime:</strong> loan apps that siphon phone contact lists. Photos. Call logs violate RBI online Lending Directives and Section 43A and Section 66E of the Information Technology Act. 2000. </div> </li>

                <li className="flex items-start gap-3"> <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5"/> <div> <strong className="text-slate-900 font-bold">penal Penalties for threats:</strong> Threatening relatives with arrest. Public shaming. home confiscation triggers fast penal legal steps under Sections 351. 352. 308 of the Bharatiya Nyaya Sanhita (BNS) for penal threats and extortion. </div> </li>

                <li className="flex items-start gap-3"> <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5"/> <div> <strong className="text-slate-900 font-bold">Reference Contacts are Not Obligors:</strong> crisis reference numbers provided during loan application are by law intended only for address trace confirmation and can never be converted into claims targets by claims call centers. </div> </li>

                <li className="flex items-start gap-3"> <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5"/> <div> <strong className="text-slate-900 font-bold">fast 3-Tier reports Channels:</strong> abuse can be halted by filing a formal grievance with the Bank main loan Nodal agents. Registering a cyber reports on portal 1930. Escalating to the RBI Integrated agents on cms.rbi.org.in. </div> </li>

                <li className="flex items-start gap-3"> <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5"/> <div> <strong className="text-slate-900 font-bold">Permanent relief via OTS deals:</strong> Transitioning unmanageable debt into a formal One-Time settlement (OTS) secures a 40% to 70% waiver on accrued extra fees and permanently cancels third-party claims firm mandates. </div> </li>
              </ul>
            </div>

            {/* SECTION 1: Legal Reality: Can Banks Call Family & Contacts? */}
            <section id="legal-reality-calling-relatives" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]"/>
                <span>Debt Economics &amp; Banking Privacy Law.</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. Legal Reality: Can Banks Call Family &amp; Contacts?
              </h2>
              
              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> When unexpected money stress. Sudden job loss. health crises lead to unpaid private loans installments or credit card dues. Clients often face harsh debt claims tactics. Third-party claims firms routinely resort to calling elderly parents. Spouses, distant relatives. office colleagues. Many clients wonder whether Indian banking laws permit banks to contact their private network to recover late funds. </p>
              
              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> The unequivocal legal reality under Indian jurisprudence is that banks. Non-Banking money firms (NBFCs). Micro-lending apps have absolutely zero legal approval to contact your relatives. Friends. Or workplace acquaintances for debt claims. A loan pacts is an person bilateral contract between the client and the bank governed by the Indian Contract Act. 1872. Third parties who have not explicitly executed the contract as co-clients or formal legal guarantors carry no money. Moral. Legal debt risk for the unpaid debt. </p>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> The Reserve Bank of India has repeatedly issued strict directives through its Master Directions on Fair Practices Code for Lenders. Holding regulated entities straight accountable for the misconduct of their claims agents. The regulator mandates that claims agents must never resort to threats. Abuse. Public humiliation. Breach of customer rights. Disclosing loan default details to kin or calling private contacts is a severe RBI violation that exposes lending institutions to large supervisory penalties and daily work bans. </p>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> also. The Nine-Judge Constitution Bench of the Supreme Court of India in. <em>Justice K.S. Puttaswamy (Retd.) v. Union of India (2017).</em> established that the right to rights is an intrinsic facet of the right to life and private liberty guaranteed under Article 21 of the Constitution. Leaking private money records or broadcasting debt defaults to a person&apos. s social circle violates their constitutional dignity. When claims agents use threatening language or threaten relatives with police action. Their conduct crosses from civil default into penal threats under Section 351 and extortion under Section 308 of the Bharatiya Nyaya Sanhita (BNS). </p>
            </section>

            {/* SECTION 2: Financial Breakdown & Settlement Math */}
            <section id="financial-breakdown-penal-charges" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4 text-[#1886ff]"/>
                <span>Financial Analysis &amp; Settlement Economics.</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. Financial Breakdown: Genuine Principal vs Predatory Fees
              </h2>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> When a client defaults on no-pledge credit facilities. Banks apply cascading penalty charges. growing fees rates. claims overheads that rapidly inflate the claimed debt risk far beyond the authentic main loan. Within a few months of default. The ledger record swells with growing fees surcharges. NACH bounce penalties. Arbitrary legal fees. Lenders use these inflated figures to exert psychological pressure on clients and their families. </p>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> Understanding the mathematical dissection between pure main loan cash and predatory penal inflation is essential for building an effective defense and settling a OTS deals. Once an account reaches Non-Performing Asset (NPA) status after ninety days of steady non-payment. Banks are mandated under RBI prudential norms to make 100% bank reserves against Tier-1 cash. This RBI bank reserves makes banks highly receptive to a One-Time settlement (OTS) that recovers the net main loan while waiving the artificial penal accruals. </p>

              <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-[#1886ff]"/>
                    Representative 180-Day NPA Personal Loan Settlement Calculation
                  </h3>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">
                    Target 40% to 55% OTS Waiver.
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs md:text-sm">
                  <div className="space-y-2 bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <div className="font-bold text-slate-800 pb-1 border-b border-slate-200">
                      Bank Claimed Ledger Breakdown.
                    </div>
                    <div className="flex justify-between py-1 text-slate-600">
                      <span>Original released Principal:</span>
                      <span className="font-semibold text-slate-900">₹5,00,000</span>
                    </div>
                    <div className="flex justify-between py-1 text-slate-600">
                      <span>Accrued Contractual Interest (18% p.a.):</span>
                      <span className="font-semibold text-slate-900">₹90,000</span>
                    </div>
                    <div className="flex justify-between py-1 text-slate-600">
                      <span>Compounded Penal Interest (24% p.a.):</span>
                      <span className="font-semibold text-red-600">₹1,20,000</span>
                    </div>
                    <div className="flex justify-between py-1 text-slate-600">
                      <span>Late Fees &amp; NACH Bounce Charges:</span>
                      <span className="font-semibold text-red-600">₹35,000</span>
                    </div>
                    <div className="flex justify-between py-1 text-slate-600">
                      <span>Recovery Agency &amp; Legal Costs:</span>
                      <span className="font-semibold text-red-600">₹45,000</span>
                    </div>
                    <div className="flex justify-between py-1 pt-2 font-bold text-slate-900 border-t border-slate-200">
                      <span>Total Demand Notice Claim:</span>
                      <span className="text-red-700">₹7,90,000</span>
                    </div>
                  </div>

                  <div className="space-y-2 bg-blue-50/60 p-4 rounded-xl border border-blue-100">
                    <div className="font-bold text-[#1886ff] pb-1 border-b border-blue-200">
                      CredSettle Forensic Compromise Settlement.
                    </div>
                    <div className="flex justify-between py-1 text-slate-600">
                      <span>Forensic Principal Audit:</span>
                      <span className="font-semibold text-slate-900">₹5,00,000</span>
                    </div>
                    <div className="flex justify-between py-1 text-slate-600">
                      <span>Penal Surcharges Waived (100%):</span>
                      <span className="font-semibold text-emerald-700">-₹1,20,000</span>
                    </div>
                    <div className="flex justify-between py-1 text-slate-600">
                      <span>Late &amp; Bounce Fees Waived (100%):</span>
                      <span className="font-semibold text-emerald-700">-₹35,000</span>
                    </div>
                    <div className="flex justify-between py-1 text-slate-600">
                      <span>Agency Collection Fees Waived (100%):</span>
                      <span className="font-semibold text-emerald-700">-₹45,000</span>
                    </div>
                    <div className="flex justify-between py-1 text-slate-600">
                      <span>Negotiated Principal Haircut (35%):</span>
                      <span className="font-semibold text-emerald-700">-₹1,75,000</span>
                    </div>
                    <div className="flex justify-between py-1 pt-2 font-bold text-slate-900 border-t border-blue-200">
                      <span>Final Agreed OTS Remittance:</span>
                      <span className="text-emerald-700">₹3,25,000 (59% Total Relief).</span>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed pt-1"> By stripping away banned penal fees and showing genuine debt stress through structured legal representations. Clients can settle late accounts for a fraction of the inflated demand while securing a valid No Dues letter. </p>
              </div>
            </section>

            {/* SECTION 3: 4-Sided Bordered Comparison Matrix */}
            <section id="debt-resolution-comparison-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]"/>
                <span>Comparative Resolution Pathways.</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Debt Resolution Matrix: Legal Relief Mechanisms
              </h2>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> When facing harsh claims calls to your kin. You must evaluate the available legal and money remedies. The table below compares One-Time settlement against loan restructuring. Cyber and police reports. Lok Adalat talks. Passive inaction: </p>

              <div className="overflow-x-auto rounded-2xl border border-slate-200/80 bg-white shadow-xs">
                <table className="w-full text-left text-xs md:text-sm divide-y divide-slate-200/80">
                  <thead className="bg-slate-50 text-slate-700">
                    <tr className="divide-x divide-slate-200/80">
                      <th className="p-3.5 font-bold">Resolution Route.</th>
                      <th className="p-3.5 font-bold">Harassment Cessation.</th>
                      <th className="p-3.5 font-bold">Financial Waiver.</th>
                      <th className="p-3.5 font-bold">Legal Protection Level.</th>
                      <th className="p-3.5 font-bold">Resolution Speed.</th>
                      <th className="p-3.5 font-bold text-[#1886ff]">Strategic Verdict.</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-600">
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/50">
                      <td className="p-3.5 font-bold text-slate-900">One-Time settlement (OTS).</td>
                      <td className="p-3.5 text-emerald-700 font-semibold">fast &amp. Permanent.</td>
                      <td className="p-3.5 text-emerald-700 font-semibold">40% to 70% Total Waiver.</td>
                      <td className="p-3.5">Complete civil immunity with NDC.</td>
                      <td className="p-3.5">30 to 60 Days</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold">Optimal for severe hardship.</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/50">
                      <td className="p-3.5 font-bold text-slate-900">Loan Restructuring / Moratorium.</td>
                      <td className="p-3.5 text-slate-700">Temporary while active.</td>
                      <td className="p-3.5 text-red-600 font-semibold">Zero Waiver (rates Increases).</td>
                      <td className="p-3.5">Conditional on regular EMI flow.</td>
                      <td className="p-3.5">45 to 90 Days</td>
                      <td className="p-3.5 text-slate-700">Viable only if regular income resumes.</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/50">
                      <td className="p-3.5 font-bold text-slate-900">Cyber Cell &amp. Police reports.</td>
                      <td className="p-3.5 text-emerald-700 font-semibold">Stops banned agent calls.</td>
                      <td className="p-3.5 text-slate-500">None on underlying loan.</td>
                      <td className="p-3.5">High against penal threats.</td>
                      <td className="p-3.5">14 to 30 Days</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold">Essential defense against blackmail apps.</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/50">
                      <td className="p-3.5 font-bold text-slate-900">National Lok Adalat.</td>
                      <td className="p-3.5 text-emerald-700 font-semibold">Stops all claims action.</td>
                      <td className="p-3.5 text-emerald-700 font-semibold">30% to 50% OTS deal.</td>
                      <td className="p-3.5">Binding decree under Sec 21 LSA.</td>
                      <td className="p-3.5">Single-day hearing.</td>
                      <td className="p-3.5 text-slate-700">Effective for bank bank claims.</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/50">
                      <td className="p-3.5 font-bold text-slate-900">Passive Inaction.</td>
                      <td className="p-3.5 text-red-600 font-semibold">abuse Escalates Daily.</td>
                      <td className="p-3.5 text-red-600 font-semibold">Zero (Debt Doubles).</td>
                      <td className="p-3.5 text-red-600 font-semibold">High risk of ex-parte decrees.</td>
                      <td className="p-3.5 text-red-600">Unresolved</td>
                      <td className="p-3.5 text-red-600 font-semibold">Worst approach causing severe damage.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 4: Technical CIBIL Algorithm & Scoring Math */}
            <section id="cibil-algorithm-scoring-math" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4 text-[#1886ff]"/>
                <span>Credit Bureau Scoring &amp; Technical Analysis.</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. CIBIL Scoring Impact: DPD Tracking &amp; Credit Repair
              </h2>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> When loan installments are missed. Credit bureaus such as TransUnion CIBIL. Experian. CRIF High Mark. Equifax recalculate creditworthiness based on algorithmic scoring weights. The standard credit scoring model evaluates five core parameters: payment history (35%). Credit exposure and use (30%). Credit history length (15%). Credit product mix (10%). Recent credit inquiries (10%). </p>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> Payment history holds the highest person weighting. Missing consecutive monthly payments triggers Days Past Due (DPD) tracking on your credit profile. Once DPD crosses 90 days. The lender flags the account as an NPA or Sub-Standard Asset. Reducing your credit score by 80 to 140 points. If third-party claims firms initiate civil lawsuits or hearing. Credit algorithms register a severe negative marker that causes loan application rejections across banks. </p>

              <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-4">
                <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#1886ff]"/>
                  Section 21 CICRA Remedy &amp; Post-Settlement Credit Rebuilding
                </h3>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed"> Executing a OTS deal One-Time settlement and securing an formal No Dues letter halts further negative DPD reporting. Under Section 21 of the Credit Information firms (Regulation) Act. 2005 (CICRA). Lending institutions are by law required to update credit bureaus within thirty days of settlement. Reflecting the account balance as zero. </p>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed"> While a settled status initially marks the credit history. Clients can systematically rebuild their score to 750+ within 12 to 18 months by maintaining a 100% on-time track record on secured credit cards backed by fixed deposits. Keeping credit use below 30%. Eliminating all uncollateralized revolving balances. </p>
              </div>
            </section>

            {/* SECTION 5: Visual Infographic Asset Card */}
            <section id="visual-defense-blueprint" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Sparkles className="w-4 h-4 text-[#1886ff]"/>
                <span>Visual Anti-Harassment Blueprint.</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Visual Defense Blueprint: 6-Stage Anti-Harassment Plan
              </h2>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> This full visual blueprint details the 6-stage procedural sequence to stop claims calls to relatives. Assert legal rights rights. Achieve complete debt closure: </p>

              <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-3 md:p-4 overflow-hidden">
                <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-slate-100">
                  <Image src="/images/infographics/can-bank-call-relatives-for-loan-recovery.jpg" alt="Can Bank Call Relatives for Loan Recovery Legal Defense Blueprint" fill className="object-contain" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 60vw" priority/>
                </div>
                <div className="mt-3 px-2 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2">
                  <span>CredSettle Consumer Protection Framework • RBI Fair Practices Code &amp; IT Act.</span>
                  <a href="/images/infographics/can-bank-call-relatives-for-loan-recovery.jpg" target="_blank" rel="noopener noreferrer" className="text-[#1886ff] hover:underline font-bold flex items-center gap-1">
                    <span>View High-Resolution Blueprint.</span>
                    <ExternalLink className="w-3.5 h-3.5"/>
                  </a>
                </div>
              </div>
            </section>

            {/* SECTION 6: Step-by-Step SOP (6 Stages) */}
            <section id="step-by-step-defense-sop" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Award className="w-4 h-4 text-[#1886ff]"/>
                <span>Standard Operating Procedure.</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. Step-by-Step SOP: Stopping Harassment Calls
              </h2>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> Follow this sequential standard operating steps to halt banned claims calls to your kin and resolve the underlying debt: </p>

              <div className="space-y-4 pt-2">
                {/* Stage 1 */}
                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 01: Forensic Call &amp; Ledger Audit.
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Days 1–3</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900">
                    Evidence Logging &amp; Financial Ledger Scrutiny
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed"> Preserve all proof of unlawful debt claims. Record abusive phone calls. Capture WhatsApp threats. And log caller phone numbers. Request an audited record of account from the lending institution to identify banned penalty charges and unsubstantiated claims expenses. </p>
                </div>

                {/* Stage 2 */}
                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 02: Hardship Dossier Preparation.
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Days 4–7</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900">
                    Comprehensive Involuntary Hardship Compilation
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed"> Compile checked paperwork showing genuine reasons for loan default. This includes hospital discharge summaries. jobs termination letters. Or salary slips showing severe pay cuts. This paperwork forms the foundation of your OTS deals petition. </p>
                </div>

                {/* Stage 3 */}
                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 03: Legal Representation &amp; Cease-and-Desist.
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Days 8–15</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900">
                    Statutory Cease-and-Desist Legal Notice
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed"> Serve a formal legal notice upon the bank main loan Nodal agents and claims firm. Demand fast cessation of all calls to third parties. Citing RBI Fair Practices Code and Puttaswamy rights rulings. Redirect all formal contacts to your authorized legal agents. </p>
                </div>

                {/* Stage 4 */}
                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 04: Bilateral Settlement Negotiations.
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Days 16–35</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900">
                    Credit Committee &amp; SAMD Compromise Representation
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed"> Our relief specialists present your hardship dossier straight to the bank Credit boards and Stressed Asset handling Division (SAMD). We settle an affordable OTS deals. Seeking a 40% to 70% waiver on accrued extra fees and claims surcharges. </p>
                </div>

                {/* Stage 5 */}
                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 05: Settlement Letter Vetting.
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Days 36–45</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900">
                    Legal Validation of Formal Settlement Offer
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed"> Conduct a deep review of the bank formal closure note. Verify that the paper explicitly states Full and Final settlement. Contains genuine authorized bank signatures. Waives all residual claims. Commits to issuing a No Dues letter upon receipt of funds. </p>
                </div>

                {/* Stage 6 */}
                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 06: Direct Remittance &amp; NDC Issuance.
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Days 46–60</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900">
                    Settlement Execution &amp; Bureau Status Update
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed"> pay the agreed settlement funds straight into your checked bank loan account. Secure an formal No Dues letter. Ensure all third-party claims mandates are permanently closed. Confirm that the credit bureaus update your account balance to zero within thirty days. </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: Statutory Notice Defense & Legal Rights */}
            <section id="statutory-notice-defense" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]"/>
                <span>Statutory Legal Defense.</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. Statutory Notice Defense: Legal Privacy Protections
              </h2>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> clients facing harsh debt claims and contact abuse are protected by several legal rules across Indian banking. penal. Civil procedural law: </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                  <div className="flex items-center gap-2 text-[#1886ff] font-bold text-sm">
                    <ShieldCheck className="w-4 h-4"/>
                    <span>RBI Fair Practices Code &amp; Master Directions.</span>
                  </div>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed"> The Reserve Bank of India mandates that claims agents cannot contact clients before 8:00 AM or after 7:00 PM. Lenders are strictly prohibited from contacting third parties. Misrepresenting debt debts. Using abusive language. Or employing physical threats. Regulated entities face direct supervisory penalties for violations. </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                    <Landmark className="w-4 h-4"/>
                    <span>Section 25 PSSA &amp; Section 138 NI Act Defense.</span>
                  </div>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed"> When NACH auto-debits or cheques bounce. Lenders may issue legal notices under Section 25 of the Payments and settlement Systems Act or Section 138 of the Negotiable Instruments Act. These steps target only the signatory account holder and cannot be used to harass kin or unassociated contacts. </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <Scale className="w-4 h-4"/>
                    <span>Arbitration Section 21 &amp; Perkins Eastman Defense.</span>
                  </div>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed"> When banks invoke hearing under Section 21 of the 1996 Act. Unilateral appointments of sole arbitrators are invalid under the Supreme Court ruling in. <em>Perkins Eastman</em>. hearing is strictly a civil steps between signing parties. With zero legal formal to summon or penalize uninvolved relatives. </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                  <div className="flex items-center gap-2 text-amber-700 font-bold text-sm">
                    <BadgeAlert className="w-4 h-4"/>
                    <span>Bharatiya Nyaya Sanhita (BNS) Criminal Provisions.</span>
                  </div>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed"> Abusive claims calls. Morphed images. Threats of violence against relatives constitute penal offenses under Section 351 (penal threats). Section 352 (intentional insult). Section 308 (extortion) of the Bharatiya Nyaya Sanhita (BNS). Punishable with imprisonment and fines. </p>
                </div>
              </div>
            </section>

            {/* SECTION 8: 3-Tier Escalation Matrix */}
            <section id="three-tier-escalation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff]"/>
                <span>Institutional Grievance Framework.</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. 3-Tier Escalation Matrix: Bank PNO to RBI Ombudsman
              </h2>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> If claims callers continue to contact your relatives or reference contacts. Follow this structured 3-tier RBI reports hierarchy to enforce fast compliance: </p>

              <div className="space-y-4 pt-2">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Level 1: Grievance Redressal Officer &amp; Bank PNO.
                    </span>
                    <span className="text-xs text-slate-500 font-semibold">Turnaround: 7–10 Days.</span>
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-slate-900">
                    Internal Institutional Complaint &amp; Agency Recall
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed"> File a formal written reports with the bank Grievance Redressal agents (GRO) and main loan Nodal agents (PNO). Submit call records. Specify third-party numbers contacted. Demand the fast withdrawal of the late file from the offending claims firm. </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-md">
                      Level 2: National Cyber Crime Portal &amp; Police FIR.
                    </span>
                    <span className="text-xs text-slate-500 font-semibold">Turnaround: 14–21 Days.</span>
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-slate-900">
                    Cybercrime Reporting &amp; Criminal Intimidation FIR
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed"> If harsh loan apps or callers use abusive language. Send morphed photos. Threaten relatives. Lodge an fast cyber reports at. <strong>cybercrime.gov.in.</strong> or dial helpline. <strong>1930</strong>. Concurrently file an FIR at your local police station under BNS provisions. </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-emerald-200 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">
                      Level 3: RBI Integrated Ombudsman (CMS Portal).
                    </span>
                    <span className="text-xs text-slate-500 font-semibold">Turnaround: 30 Days.</span>
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-slate-900">
                    Regulatory Complaint on cms.rbi.org.in
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed"> If the bank fails to resolve the grievance within thirty days or provides an unsatisfactory reply. Escalate the claims straight to the. <strong>RBI Integrated agents.</strong> via <strong>cms.rbi.org.in</strong>. The agents has the legal formal to award payout up to ₹20 Lakhs for mental anguish and abuse. </p>
                </div>
              </div>
            </section>

            {/* SECTION 9: Chronological Timeline Table */}
            <section id="procedural-timeline-milestones" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Clock className="w-4 h-4 text-[#1886ff]"/>
                <span>Procedural Milestones.</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. Procedural Timeline: Default to Complete Debt Relief
              </h2>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> Understanding bank claims timelines helps clients anticipate bank actions and structure defense steps effectively: </p>

              <div className="overflow-x-auto rounded-2xl border border-slate-200/80 bg-white shadow-xs">
                <table className="w-full text-left text-xs md:text-sm divide-y divide-slate-200/80">
                  <thead className="bg-slate-50 text-slate-700">
                    <tr className="divide-x divide-slate-200/80">
                      <th className="p-3.5 font-bold">Timeline Phase</th>
                      <th className="p-3.5 font-bold">Loan Classification.</th>
                      <th className="p-3.5 font-bold">Typical Collection Action.</th>
                      <th className="p-3.5 font-bold text-[#1886ff]">Strategic Legal Countermeasure.</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-600">
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/50">
                      <td className="p-3.5 font-bold text-slate-900">Days 1. 30</td>
                      <td className="p-3.5">SMA-0 (Special Mention Account).</td>
                      <td className="p-3.5">Automated SMS. Emails. Tele-calling.</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold">Verify ledger and communicate hardship in writing.</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/50">
                      <td className="p-3.5 font-bold text-slate-900">Days 31. 60</td>
                      <td className="p-3.5">SMA-1 Classification.</td>
                      <td className="p-3.5">Third-party firm assignment.</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold">Establish call boundaries and record all contacts.</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/50">
                      <td className="p-3.5 font-bold text-slate-900">Days 61. 90</td>
                      <td className="p-3.5">SMA-2 Classification.</td>
                      <td className="p-3.5">Intensified claims and reference calls.</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold">Issue formal cease-and-desist to Bank PNO.</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/50">
                      <td className="p-3.5 font-bold text-slate-900">Days 91. 120</td>
                      <td className="p-3.5">NPA (Non-Performing Asset).</td>
                      <td className="p-3.5">Legal notice and OTS OTS deal window.</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold">Initiate bilateral OTS talks for 40%. 70% waiver.</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/50">
                      <td className="p-3.5 font-bold text-slate-900">Months 4. 6</td>
                      <td className="p-3.5">Full Closure &amp. settlement.</td>
                      <td className="p-3.5">Account settled and calls cancelled.</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold">Obtain formal NDC and update CIBIL desk status.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: Specialized Real-World Scenarios */}
            <section id="specialized-harassment-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]"/>
                <span>Specialized Real-World Scenarios.</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Special Scenarios: Fintech Apps &amp; Contact Scraping
              </h2>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed"> claims abuse manifests differently across credit products. Lending channels. app loans applications: </p>

              <div className="space-y-3 pt-2">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                    <ShieldAlert className="w-4 h-4 text-red-600"/>
                    Illegal Digital Loan Apps Scraping Contact Books
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed"> banned 7-day instant loan apps siphon phone contact lists. Photos. messages upon installation. When defaults occur. Syndicates create WhatsApp groups with kin and colleagues to send extortion messages. These entities operate illegally outside RBI oversight and require fast cybercrime reporting (helpline 1930) and device formatting. </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-[#1886ff]"/>
                    Third-Party Recovery Agency Calls to Workplace HR
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed"> claims callers often attempt to contact office receptionists. Colleagues. Human resources units to induce fear of job termination. Disclosing loan defaults to employers straight violates RBI Fair Practices rules and creates debt risk for workplace defamation under civil and penal statutes. </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                    <UserX className="w-4 h-4 text-[#1886ff]"/>
                    Emergency Reference Numbers Given During Application
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed"> Lenders often claim that reference numbers provided during loan application signed away their rights rights. by law. Reference contacts are provided strictly for address check at onboarding. Converting reference contacts into claims targets is a blatant violation of lending regulations. </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-[#1886ff]"/>
                    Co-Borrowers vs Non-Guarantor Family Members
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed"> If a spouse or kin signed as a joint co-client or formal money guarantor. They share contractual debt risk for the loan. However. Claims agents must still adhere strictly to RBI expert calling hours and decorum standards. With zero tolerance for abusive conduct. </p>
                </div>
              </div>
            </section>

            {/* SECTION 11: Company Profile */}
            <div id="company-profile" className="scroll-target">
              <CompanySection />
            </div>

            {/* SECTION 12: Frequently Asked Questions Accordion */}
            <section id="frequently-asked-questions" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <HelpCircle className="w-4 h-4 text-[#1886ff]"/>
                <span>Frequently Asked Questions.</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Frequently Asked Questions: Bank Calls &amp; Family Rights
              </h2>
              <p className="text-xs md:text-sm text-slate-600"> Click on any question below to view detailed legal answers checked by our debt relief workers: </p>

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
            <section id="regulatory-sources" className="scroll-target space-y-4 pt-4 border-t border-slate-200">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-500">
                <BookOpen className="w-4 h-4"/>
                <span>Statutory Citations &amp; Regulatory Authorities.</span>
              </div>
              <h2 className="text-base sm:text-lg font-bold text-slate-900">
                Official Regulatory Citations &amp; Statutory References
              </h2>
              
              <ul className="space-y-2 text-xs text-slate-600 leading-relaxed list-disc pl-5">
                <li> <strong>Reserve Bank of India Master Directions:</strong> Master Direction on Fair Practices Code for Lenders. Rules on claims agents. Directives on online Lending (Updated 2026). </li>
                <li> <strong>Supreme Court of India:</strong> <em>Justice K.S. Puttaswamy (Retd.) v. Union of India (2017) 10 SCC 1.</em> (Fundamental Right to rights under Article 21 of the Constitution). </li>
                <li> <strong>Bharatiya Nyaya Sanhita (BNS). 2023:</strong> Sections 308 (Extortion). 351 (penal threats). And 352 (Intentional Insult to Provoke Breach of Peace). </li>
                <li> <strong>Information Technology Act. 2000:</strong> Sections 43A. 66E. And 72A (payout for Failure to Protect Data and Breach of rights). </li>
                <li> <strong>Credit Information firms (Regulation) Act. 2005 (CICRA):</strong> Section 21 (strict Updating of Settled CIBIL desk Records). </li>
              </ul>

              {/* 6 Outbound Authority Badges */}
              <div className="pt-3">
                <span className="text-xs font-bold text-slate-700 block mb-2">Verified Official Legal &amp; Regulatory Portals:</span>
                <div className="flex flex-wrap gap-2">
                  <a href="https://www.rbi.org.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200 inline-flex items-center gap-1">
                    <span>Reserve Bank of India.</span>
                    <ExternalLink className="w-3 h-3"/>
                  </a>
                  <a href="https://cms.rbi.org.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200 inline-flex items-center gap-1">
                    <span>RBI Integrated Ombudsman (CMS).</span>
                    <ExternalLink className="w-3 h-3"/>
                  </a>
                  <a href="https://cybercrime.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200 inline-flex items-center gap-1">
                    <span>National Cyber Crime Portal.</span>
                    <ExternalLink className="w-3 h-3"/>
                  </a>
                  <a href="https://www.cibil.com" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200 inline-flex items-center gap-1">
                    <span>TransUnion CIBIL India.</span>
                    <ExternalLink className="w-3 h-3"/>
                  </a>
                  <a href="https://www.indiacode.nic.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200 inline-flex items-center gap-1">
                    <span>India Code Legislative Repository.</span>
                    <ExternalLink className="w-3 h-3"/>
                  </a>
                  <a href="https://nalsa.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200 inline-flex items-center gap-1">
                    <span>National Legal Services Authority.</span>
                    <ExternalLink className="w-3 h-3"/>
                  </a>
                </div>
              </div>

              {/* 10 Internal Topic Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Explore Related CredSettle Legal &amp; Anti-Harassment Guides:</span>
                <div className="flex flex-wrap gap-2">
                  <Link href="/services/anti-harassment" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Anti-Harassment Defense
                  </Link>
                  <Link href="/7-day-loan-app-harassment-morphed-photos" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    7-Day Loan App Harassment
                  </Link>
                  <Link href="/bank-sent-legal-notice-for-loan-what-to-do" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Bank Sent Legal Notice
                  </Link>
                  <Link href="/services/personal-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Personal Loan Settlement
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
                  <Link href="/improve-cibil-after-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Rebuild CIBIL Score
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
              <p className="text-xs text-slate-600 leading-relaxed"> expert in banking compliance. Client rights defense. Anti-abuse legal remedies. NPA talks with extensive skill resolving claims claims under RBI Fair Practices Code. </p>
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
                  100% CONFIDENTIAL ANTI-HARASSMENT.
                </span>
                <p className="text-lg md:text-xl font-bold text-white leading-snug"> Are Agents Calling Your kin? </p>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal"> Our debt relief experts issue fast cease-and-desist notices to stop claims calls. Protect your rights. settle a 40% to 70% settlement waiver. </p>
              </div>
              <Link href="/contact" className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md">
                Stop Agents Calling Your Family
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
                  <span>Direct Bank Settlement • RBI Compliant.</span>
                </div>
              </div>
            </div>

            {/* Card 3: CredSettle Trust Badges */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">The CredSettle Advantage.</p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2"> <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5"/> <span><strong>fast abuse Stop:</strong> Formal legal cease-and-desist.</span> </li>
                <li className="flex items-start gap-2"> <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5"/> <span><strong>Zero Upfront Risk:</strong> Success-linked settlement fees.</span> </li>
                <li className="flex items-start gap-2"> <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5"/> <span><strong>Direct Bank Remittance:</strong> No third-party fund pooling.</span> </li>
                <li className="flex items-start gap-2"> <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5"/> <span><strong>RBI &amp. rights Compliance:</strong> 100% lawful claims advocacy.</span> </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">Related Legal Guides.</p>
              <div className="space-y-2.5">
                <Link href="/services/anti-harassment" className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group">
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug"> Anti-abuse Legal Defense Guide. </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Stop illegal recovery practices &rarr;.</span>
                </Link>

                <Link href="/7-day-loan-app-harassment-morphed-photos" className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group">
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug"> 7-Day Loan App Morphed Photo Blackmail. </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Cyber crime complaint blueprint &rarr;.</span>
                </Link>

                <Link href="/bank-sent-legal-notice-for-loan-what-to-do" className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group">
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug"> Bank Sent Legal Notice for Loan Default. </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Formal step-by-step reply guide &rarr;.</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>);
}
