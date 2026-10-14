'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import StatsStrip from '@/components/StatsStrip';
import CompanySection from '@/components/CompanySection';
import { ShieldCheck, CheckCircle2, ChevronDown, Phone, FileText, Building2, ArrowRight, TrendingDown, Landmark, Scale, Globe2, ExternalLink, Award, BookOpen } from 'lucide-react';
export default function NriCreditCardDebtSettlementClient() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const [activeSection, setActiveSection] = useState<string>('quick-crux');
    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };
    const navLinks = [
        { id: 'quick-crux', label: 'Executive Summary' },
        { id: 'debt-economics-npa-dynamics', label: '1. Debt Economics & NPA' },
        { id: 'financial-breakdown-settlement-math', label: '2. Financial Breakdown & Math' },
        { id: 'resolution-options-matrix', label: '3. Comparative Matrix' },
        { id: 'technical-cibil-algorithm', label: '4. CIBIL Algorithm Impact' },
        { id: 'infographic-overview', label: '5. Visual Resolution Blueprint' },
        { id: 'step-by-step-nri-sop', label: '6. 6-Stage Remote SOP' },
        { id: 'statutory-notice-defense-rights', label: '7. Statutory Notice Defense' },
        { id: 'three-tier-escalation-matrix', label: '8. 3-Tier Escalation Matrix' },
        { id: 'chronological-resolution-milestones', label: '9. Procedural Timeline' },
        { id: 'specialized-nri-scenarios', label: '10. Specialized Scenarios' },
        { id: 'about-credsettle', label: '11. About CredSettle' },
        { id: 'frequently-asked-questions', label: '12. FAQs' },
        { id: 'regulatory-sources', label: '13. Statutory Citations' },
    ];
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, { rootMargin: '-100px 0px -50% 0px', threshold: 0 });
        navLinks.forEach(({ id }) => {
            const el = document.getElementById(id);
            if (el)
                observer.observe(el);
        });
        return () => observer.disconnect();
    }, []);
    const faqs = [
        {
            q: 'Can an NRI settle credit card debt in India remotely?',
            a: "Yes. Non-Resident Indians can settle credit cards remotely by executing a consular Special Power of lawyer authorizing Indian legal staff to settle straight with bank nodal desks."
        },
        {
            q: 'Can an NRI be arrested at an airport for credit card defaults?',
            a: 'No. no-pledge credit card defaults are strictly civil contractual claims under Indian law. visa officials hold zero legal police area to arrest travelers for civil bank debts.'
        },
        {
            q: 'Can Indian banks issue a Lookout Circular for credit card debt?',
            a: 'No. Ministry of Home Affairs rules and High Court rulings prohibit banks from issuing Lookout Circulars for civil debt defaults. LOCs are restricted to penal fraud cases.'
        },
        {
            q: 'How does an NRI execute a Special Power of Attorney from abroad?',
            a: 'The NRI executes a Special PoA before an Indian Embassy. Consulate. Or via apostille in Hague countries. In India. counsel completes stamping under the Indian Stamp Act. 1899.'
        },
        {
            q: 'What percentage of credit card debt can an NRI save through an OTS?',
            a: 'Through credit boards representations. NRIs typically secure a 45% to 60% waiver on main loan. Along with a 100% waiver of total revolving finance charges and late penalties.'
        },
        {
            q: 'What happens to an NRI\'s NRE and NRO accounts during a loan default?',
            a: 'Banks cannot freeze third-party accounts without court orders. However. If an NRI holds deposits with the lending bank itself. The bank may exercise a Banker\'s Lien under Section 171.'
        },
        {
            q: 'How do recovery agents contact overseas employers, and is it legal?',
            a: 'Contacting overseas employers or making abusive international calls violates the RBI Fair Practices Code. NRIs can issue cease-and-desist notices and file reports on the RBI staff portal.'
        },
        {
            q: 'How should settlement funds be remitted to ensure clean tax closure?',
            a: 'closure funds must be wired straight to the lending bank\'s collection account via NRE/NRO transfer or foreign wire backed by a Foreign Inward Remittance Certificate (FIRC).'
        },
        {
            q: 'How does debt settlement affect an NRI\'s CIBIL score in India?',
            a: "closure updates the account in CIBIL to \"Settled\" with zero balance, halting default reporting. Non-residents can rebuild credit scores above 750+ within 12 to 24 months."
        },
        {
            q: 'What documents does an NRI receive upon completing a debt settlement?',
            a: "Upon closure reconciliation. The lending bank issues a formal No Dues letter (NDC) confirming full discharge of all money dues with zero remaining legal debt risk."
        }
    ];
    return (<main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-[#1886ff] selection:text-white">
      {/* 1. HERO SECTION (#2452ae Centered Background matching Image 4) */}
      <section className="relative text-white pt-14 pb-10 md:pt-18 md:pb-12 px-4 md:px-8 overflow-hidden flex items-center justify-center text-center" style={{ backgroundColor: '#2452ae' }}>
        <div className="absolute inset-0 bg-black/5 z-0 pointer-events-none"/>
        <div className="max-w-5xl mx-auto text-center z-10 relative">
          <span className="text-[11px] font-black uppercase tracking-wider text-blue-200 bg-white/10 px-3.5 py-1 rounded-full inline-block mb-3 border border-white/15"> Cross-Border Banking &amp. Remote Legal Protection. </span>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs text-white">
            NRI Credit Card Debt Settlement India
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-3xl mx-auto font-normal text-white/95 leading-relaxed"> Settle legacy Indian credit cards and private loans remotely from UAE. USA. UK. Canada. Singapore. Protect resident parents. Eliminate visa arrest anxieties. And secure an formal No Dues letter through bank nodal legal help. </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="https://www.credsettle.com/contact" className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-[#2452ae] hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2">
              <span>Resolve NRI Debt Remotely: Speak with Legal Experts.</span>
              <ArrowRight className="w-4 h-4"/>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. STATS STRIP COMPONENT */}
      <StatsStrip />

      {/* 3. WIDESCREEN 3-COLUMN LAYOUT (Reduced Left/Right Margins & Increased Middle Width) */}
      <div className="w-full max-w-[1720px] mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-[240px_minmax(0,1fr)_280px] xl:grid-cols-[260px_minmax(0,1fr)_300px] 2xl:grid-cols-[280px_minmax(0,1fr)_320px] gap-5 xl:gap-6 items-start">
          
          {/* ================= LEFT COLUMN: STICKY TOC ================= */}
          <aside className="sticky top-6 hidden lg:block">
            <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs p-4 overflow-hidden">
              <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-100">
                <BookOpen className="w-4 h-4 text-[#1886ff]"/>
                <span className="text-xs font-black uppercase tracking-wider text-slate-800"> Navigation Index. </span>
              </div>
              <nav className="space-y-1 max-h-[calc(100vh-140px)] overflow-y-auto pr-1 text-xs">
                {navLinks.map((item) => (<a key={item.id} href={`#${item.id}`} className={`block py-1.5 px-2.5 rounded-lg transition-all duration-150 leading-snug ${activeSection === item.id
                ? 'bg-blue-50 text-[#1886ff] font-bold border-l-3 border-[#1886ff] pl-2'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50 font-medium'}`}>
                    {item.label}
                  </a>))}
              </nav>

              <div className="mt-4 pt-3 border-t border-slate-100 bg-blue-50/50 -mx-4 -mb-4 p-3 rounded-b-2xl">
                <div className="flex items-center gap-2 text-[11px] font-bold text-slate-800">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0"/>
                  <span>Cross-Border Protection.</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight"> Governed by Powers of lawyer Act 1882. Indian Stamp Act 1899. FEMA 1999. And RBI Master Directions. </p>
              </div>
            </div>
          </aside>

          {/* ================= CENTER COLUMN: EDITORIAL CONTENT ================= */}
          <article className="space-y-10 min-w-0">
            
            {/* 2. EXECUTIVE SUMMARY BOX */}
            <section id="quick-crux" className="bg-[#F4F8FE] border-l-[5px] border-l-[#1886ff] p-6 rounded-r-2xl border border-slate-200/80 shadow-xs space-y-4">
              <div className="flex items-center gap-2 mb-2">
                <ShieldCheck className="w-5 h-5 text-[#1886ff]"/>
                <h2 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                  EXECUTIVE SUMMARY: REMOTE NRI DEBT RESOLUTION FRAMEWORK
                </h2>
              </div>
              <div className="space-y-3 text-sm text-slate-700 leading-relaxed font-normal">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5"/>
                  <p><strong>100% Remote PoA legal help:</strong> Settle Indian debts from abroad via consular Special PoA without visiting India.</p>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5"/>
                  <p><strong>Zero visa Arrest Risk:</strong> no-pledge credit default is strictly civil. visa holds zero legal arrest formal.</p>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5"/>
                  <p><strong>Lookout Circular (LOC) Immunity:</strong> banks cannot issue LOCs for routine civil defaults under binding rulings.</p>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5"/>
                  <p><strong>45% to 60% Haircut Target:</strong> Credit boards representations eliminate 100% of revolving finance charges and secure main loan waivers.</p>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5"/>
                  <p><strong>Direct Nodal reports:</strong> Representations bypass third-party claims firms and settle with bank zonal officials.</p>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5"/>
                  <p><strong>Resident kin safety:</strong> Invoking the RBI Fair Practices Code halts banned visits to Indian kin homes.</p>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5"/>
                  <p><strong>FEMA Compliant Inward wire transfer:</strong> Settle debts straight via NRE/NRO or foreign wire backed by FIRC letters.</p>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5"/>
                  <p><strong>formal No Dues letter:</strong> Secure a formal bank discharge letter. Terminating debt risk and updating CIBIL desk records.</p>
                </div>
              </div>
            </section>

            {/* SECTION 1 */}
            <section id="debt-economics-npa-dynamics" className="space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-50 text-[#1886ff] text-xs font-semibold">
                <Landmark className="w-3.5 h-3.5"/>
                Macroeconomic & Regulatory Context.
              </div>
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                1. NRI Debt Economics & NPA Dynamics in Indian Banking
              </h2>
              <p className="text-slate-700 leading-relaxed text-sm"> Relocating overseas presents complex money adjustments for Indian workers. Whether emigrating to the Gulf region. North America. The United Kingdom. Singapore. Expatriates often leave behind active credit facilities in India. Unanticipated career interruptions. Tech sector layoffs. Delayed end-of-service gratuities in the Middle East. Dual living costs can cause monthly payments to lapse. Once an overseas client misses three running billing cycles. The account transitions through 90-day Special Mention Account classifications (SMA-0 to SMA-2) and becomes a Non-Performing Asset (NPA) under Reserve Bank of India prudential norms. </p>
              <p className="text-slate-700 leading-relaxed text-sm"> Under RBI Master Directions. Scheduled banks must allocate 15% to 100% Tier-1 cash bank reserves against aging NPAs. Because credit cards are purely no-pledge facilities. Lending institutions cannot invoke the SARFAESI Act. 2002 to seize real pledge without court decrees. Cross-border lawsuits is commercially unviable due to jurisdictional friction and international legal costs. As a result. Bank credit boards are structurally incentivized to approve One-Time deals (OTS) to clean balance sheets and recover core liquidity. </p>
              <p className="text-slate-700 leading-relaxed text-sm"> also. Enforcing Indian civil money decrees overseas under Section 44A of the Code of Civil steps (CPC) or reciprocal foreign enforcement treaties requires extensive diplomatic transmission. Foreign court filing fees. Prolonged proof hearings. For no-pledge retail balances. Lenders readily recognize that executing a structured OTS deals through domestic legal counsel yields largely superior claims velocity compared to costly cross-border legal battles. </p>
            </section>

            {/* SECTION 2 */}
            <section id="financial-breakdown-settlement-math" className="space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-50 text-[#1886ff] text-xs font-semibold">
                <TrendingDown className="w-3.5 h-3.5"/>
                Financial Analysis.
              </div>
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                2. Financial Breakdown: Unbundling Revolving APR & Settlement Math
              </h2>
              <p className="text-slate-700 leading-relaxed text-sm"> When an Indian credit card account defaults. The ledger balance expands rapidly under growing fees. Trade card issuers levy annual finance charges ranging from 42% to 48% compounded monthly. Alongside late fees. Over-limit penalties. 18% GST. Over an 18 to 24 month default period. An original base loan of ₹5.00 Lakhs routinely inflates into an artificial ledger claim of ₹12.00 Lakhs to ₹14.00 Lakhs. </p>
              <p className="text-slate-700 leading-relaxed text-sm"> During talks. Legal counsel audits the loan ledger under the Bankers' Books proof Act. 1891. Separating genuine released main loan from capitalized penalty charges. banks recognize that phantom penal fees hold zero real asset value. By establishing genuine expatriate hardship. Negotiators routinely secure a 100% waiver on all total extra fees. Combined with a 45% to 60% haircut on core main loan. </p>
              <p className="text-slate-700 leading-relaxed text-sm"> The core accounting reality is that Indian lending institutions routinely write off bad card balances internally under technical prudential write-offs once an account crosses 180 to 360 days of default. Because 18% Goods and Services Tax (GST) applied on growing extra fees creates an artificial accounting demand rather than real cash disbursement. Bank credit boards possess full legal discretion to waive the entire secondary fee stack during structured OTS reviews. </p>

              {/* Math Card */}
              <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-600"> Representative 180-Day NPA Credit Card closure Matrix </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-center">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="block text-[11px] font-medium text-slate-500">released main sum.</span>
                    <span className="text-base font-bold text-slate-800">₹6,00,000</span>
                    <span className="block text-[10px] text-slate-500 mt-0.5">released balance.</span>
                  </div>
                  <div className="p-3 rounded-xl bg-red-50/60 border border-red-100">
                    <span className="block text-[11px] font-medium text-red-600">Inflated Bank Claim.</span>
                    <span className="text-base font-bold text-red-700">₹14,20,000</span>
                    <span className="block text-[10px] text-red-500 mt-0.5">Includes 42% APR + GST.</span>
                  </div>
                  <div className="p-3 rounded-xl bg-emerald-50/60 border border-emerald-100">
                    <span className="block text-[11px] font-medium text-emerald-600">Target closure.</span>
                    <span className="text-base font-bold text-emerald-700">₹2.80L - ₹3.40L</span>
                    <span className="block text-[10px] text-emerald-600 font-semibold mt-0.5">53%-60% Haircut</span>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 3 */}
            <section id="resolution-options-matrix" className="space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-50 text-[#1886ff] text-xs font-semibold">
                <Scale className="w-3.5 h-3.5"/>
                Comparative Strategic Matrix.
              </div>
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                3. Comparative Resolution Matrix: NRI Debt Relief Pathways
              </h2>
              <p className="text-slate-700 leading-relaxed text-sm"> Evaluating legal remedies and cross-border claims workings across available debt handling routes enables expatriates to make strategic decisions: </p>

              {/* 4-Sided Bordered Comparison Table */}
              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto shadow-sm bg-white">
                <table className="w-full text-xs text-left border-collapse">
                  <thead className="bg-slate-50 text-slate-700 border-b border-slate-200/80 uppercase font-bold tracking-wider text-[11px]">
                    <tr className="divide-x divide-slate-200/80">
                      <th className="p-3">Route</th>
                      <th className="p-3">Haircut</th>
                      <th className="p-3">NRI Travel</th>
                      <th className="p-3">Legal Risk</th>
                      <th className="p-3">CIBIL Result</th>
                      <th className="p-3">Strategic Viability.</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr className="divide-x divide-slate-200/80 bg-blue-50/30">
                      <td className="p-3 font-bold text-[#1886ff]">OTS</td>
                      <td className="p-3 font-semibold text-emerald-600">45%-60%</td>
                      <td className="p-3">None (via PoA)</td>
                      <td className="p-3 text-emerald-600">Zero (Notices Dropped).</td>
                      <td className="p-3 font-semibold text-slate-800">Settled -&gt. Closed.</td>
                      <td className="p-3 font-medium text-slate-800">Optimal for permanent closure.</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80">
                      <td className="p-3 font-bold text-slate-800">Restructuring</td>
                      <td className="p-3">0%</td>
                      <td className="p-3">Remote</td>
                      <td className="p-3">Paused pending EMIs.</td>
                      <td className="p-3">Restructured Standard.</td>
                      <td className="p-3">Only if offshore income stable.</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80">
                      <td className="p-3 font-bold text-slate-800">Civil Suit</td>
                      <td className="p-3">0% + Costs</td>
                      <td className="p-3">Indian counsel</td>
                      <td className="p-3 text-red-600 font-semibold">High (Court Summons).</td>
                      <td className="p-3 text-red-600">Suit Filed Hard Reject.</td>
                      <td className="p-3 text-red-600">High legal expenses and delays.</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80">
                      <td className="p-3 font-bold text-slate-800">Lok Adalat</td>
                      <td className="p-3 font-semibold text-emerald-600">40%-55%</td>
                      <td className="p-3">Via lawyer</td>
                      <td className="p-3">Final Consent Award.</td>
                      <td className="p-3">Settled via talks.</td>
                      <td className="p-3">Good for legal OTS deal.</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 bg-red-50/20">
                      <td className="p-3 font-bold text-red-600">Inaction</td>
                      <td className="p-3 text-red-600">Negative</td>
                      <td className="p-3 text-red-600">High Uncertainty.</td>
                      <td className="p-3 text-red-600">hearing & Sec 25 PSSA.</td>
                      <td className="p-3 text-red-600">Sub-600 Score</td>
                      <td className="p-3 text-red-600">Severe risk to kin peace.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 4 */}
            <section id="technical-cibil-algorithm" className="space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-50 text-[#1886ff] text-xs font-semibold">
                <Building2 className="w-3.5 h-3.5"/>
                Credit Bureau Architecture.
              </div>
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                4. Technical CIBIL Algorithm & Scoring Impact for Non-Residents
              </h2>
              <p className="text-slate-700 leading-relaxed text-sm"> Credit Information CIBIL desk (India) Limited (CIBIL) computes credit scores evaluating five parameters: Payment History accounts for 35%. Credit use constitutes 30%. Credit History Age represents 15%. Credit Mix contributes 10%. Inquiries account for 10%. When an NRI ceases servicing an no-pledge credit card. Days Past Due (DPD) counters advance past 90 DPD. Dropping scores below 600. </p>
              <p className="text-slate-700 leading-relaxed text-sm"> Executing a formal closure replaces steady default flags with an formal "Settled" status and zeroes out the unpaid late balance. While a settled notation remains on credit records. It eliminates ongoing monthly default reporting. Under Section 21 of the Credit Information firms (rule) Act (CICRA). 2005. Clients retain the legal right to request CIBIL desk updates once their debt is discharged. Non-residents can systematically rehabilitate credit scores over 12 to 24 months using secured fixed-deposit credit cards in India. Rebuilding scores above 750+. </p>
              <p className="text-slate-700 leading-relaxed text-sm"> Once the lending institution transmits the monthly closure data feed. The CIBIL desk recalculates the total balance from active default to zero debt risk. This structural shift halts negative score erosion promptly. By pairing the closure discharge with a disciplined payment cycle on an Indian fixed-deposit secured card. Non-resident clients re-establish positive credit velocity across all four Reserve Bank of India authorized credit bureaus. </p>
            </section>

            {/* SECTION 5: INFOGRAPHIC ASSET CARD */}
            <section id="infographic-overview" className="space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-50 text-[#1886ff] text-xs font-semibold">
                <FileText className="w-3.5 h-3.5"/>
                Visual Resolution Framework.
              </div>
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                Visual Defense Blueprint: 6-Step Remote NRI Debt Settlement
              </h2>
              <p className="text-slate-700 leading-relaxed text-sm"> Review this steps map detailing how non-resident clients execute cross-border legal legal help. Challenge banned claims. Secure debt discharge without returning to India: </p>

              <div className="bg-white p-3 sm:p-4 rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden">
                <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-slate-900">
                  <Image src="/images/infographics/nri-credit-card-debt-settlement.jpg" alt="NRI Credit Card Debt Settlement India Strategic Process Map" fill className="object-cover hover:scale-105 transition-transform duration-300" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 600px"/>
                </div>
                <div className="flex items-center justify-between mt-3 text-xs text-slate-500 px-1">
                  <span>CredSettle Legal Defense Architecture • Powers of Attorney Act 1882.</span>
                  <a href="/images/infographics/nri-credit-card-debt-settlement.jpg" target="_blank" rel="noopener noreferrer" className="text-[#1886ff] font-semibold hover:underline inline-flex items-center gap-1">
                    View Blueprint
                    <ExternalLink className="w-3 h-3"/>
                  </a>
                </div>
              </div>
            </section>

            {/* SECTION 6: STEP-BY-STEP SOP (6 STAGES) */}
            <section id="step-by-step-nri-sop" className="space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-50 text-[#1886ff] text-xs font-semibold">
                <Award className="w-3.5 h-3.5"/>
                Sequential Protocol.
              </div>
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                5. Standard Operating Procedure (SOP): 6 Stages of Remote Settlement
              </h2>
              <p className="text-slate-700 leading-relaxed text-sm"> Adhering to this structured legal protocol ensures that non-resident debt relief proceeds smoothly while protecting domestic kin assets: </p>

              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-[#1886ff] uppercase tracking-wider">Stage 01</span>
                    <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">Days 1-7</span>
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 mb-1">Forensic Audit & Claim Separation</h3>
                  <p className="text-xs text-slate-600 leading-relaxed"> Legal counsel audits credit card ledgers. Unbundling main loan from 42%+ revolving finance charges. Late surcharges. Penal GST under the Bankers' Books proof Act. 1891. </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-[#1886ff] uppercase tracking-wider">Stage 02</span>
                    <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">Days 8-18</span>
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 mb-1">Hardship Dossier Compilation</h3>
                  <p className="text-xs text-slate-600 leading-relaxed"> The expatriate compiles overseas jobs records. Layoff letters. currency inflation data. This empirical dossier establishes genuine distress to justify large debt waivers. </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-[#1886ff] uppercase tracking-wider">Stage 03</span>
                    <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">Days 19-30</span>
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 mb-1">Special PoA Execution</h3>
                  <p className="text-xs text-slate-600 leading-relaxed"> The NRI executes a consular Special Power of lawyer (PoA) before the Indian Embassy or Consulate abroad. In India. counsel completes domestic stamping under the Indian Stamp Act. 1899. </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-[#1886ff] uppercase tracking-wider">Stage 04</span>
                    <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">Days 31-50</span>
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 mb-1">Nodal Desk Negotiations</h3>
                  <p className="text-xs text-slate-600 leading-relaxed"> Authorized legal counsel submits the formal OTS proposal straight to the bank's main loan Nodal staff. Settling a 100% extra fees waiver and 45% to 60% main loan reduction. </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-[#1886ff] uppercase tracking-wider">Stage 05</span>
                    <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">Days 51-65</span>
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 mb-1">Sanction Vetting & Remittance</h3>
                  <p className="text-xs text-slate-600 leading-relaxed"> Legal experts review the bank's written closure sanction letter for explicit full-and-final discharge clauses. Payment is remitted straight via NRE/NRO wire transfer with FIRC certification. </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-[#1886ff] uppercase tracking-wider">Stage 06</span>
                    <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">Days 66-90</span>
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 mb-1">NDC & CIBIL Discharge</h3>
                  <p className="text-xs text-slate-600 leading-relaxed"> Upon wire transfer check. The bank issues a stamped No Dues letter (NDC). Withdraws pending legal notices. Transmits closure records to CIBIL and other credit bureaus. </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: STATUTORY NOTICE DEFENSE */}
            <section id="statutory-notice-defense-rights" className="space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-50 text-[#1886ff] text-xs font-semibold">
                <Scale className="w-3.5 h-3.5"/>
                Statutory Defense & Cross-Border Rights.
              </div>
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                6. Statutory Notice Defense & Expatriate Cross-Border Rights
              </h2>
              <p className="text-slate-700 leading-relaxed text-sm"> Unethical third-party claims firms often exploit geographic distance by attempting to intimidate non-resident clients with groundless legal threats. Claiming imminent passport cancellation or airport visa arrests. Indian legal law provides clear protections against such coercive tactics. This ensures that civil debt defaults cannot be transformed into penal steps without established penal intent at loan inception. </p>
              <p className="text-slate-700 leading-relaxed text-sm"> Under Section 205 of the Code of penal steps (Section 228 of Bharatiya Nagarik Suraksha Sanhita). Magistrates routinely dispense with the private real attendance of overseas accused in summons-triable trade claims. Permitting appointed Indian counsel to appear on their behalf. This ensures that non-residents can defend legal notices and compound matters without international travel. </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm">
                  <h3 className="text-xs font-bold text-slate-900 mb-1">Lookout Circulars (LOC) & Immigration</h3>
                  <p className="text-xs text-slate-600 leading-relaxed"> Under Ministry of Home Affairs rules and Delhi High Court ruling in Sumer Singh Salkan. Banks cannot request Lookout Circulars for routine civil credit card defaults. </p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm">
                  <h3 className="text-xs font-bold text-slate-900 mb-1">Section 25 PSSA & Section 138 NI Act</h3>
                  <p className="text-xs text-slate-600 leading-relaxed"> If an auto-debit mandate or cheque dishonors. Authorized legal counsel can appear through an exemption petition under Section 205 CrPC without requiring the NRI's real presence. </p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm">
                  <h3 className="text-xs font-bold text-slate-900 mb-1">Section 12(5) Unilateral Arbitration</h3>
                  <p className="text-xs text-slate-600 leading-relaxed"> Under Supreme Court rulings in Perkins Eastman and TRF Ltd. Banks cannot unilaterally appoint sole arbitrators to pass ex-parte awards against overseas clients. </p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm">
                  <h3 className="text-xs font-bold text-slate-900 mb-1">DRT Jurisdiction & SARFAESI</h3>
                  <p className="text-xs text-slate-600 leading-relaxed"> DRTs handle claims exceeding ₹20 Lakhs. No-pledge credit card debts carry zero deeds charge. fully exempting private home assets and kin home from SARFAESI steps. </p>
                </div>
              </div>
            </section>

            {/* SECTION 8: 3-TIER ESCALATION MATRIX */}
            <section id="three-tier-escalation-matrix" className="space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-50 text-[#1886ff] text-xs font-semibold">
                <ShieldCheck className="w-3.5 h-3.5"/>
                Grievance Hierarchy.
              </div>
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                7. The 3-Tier Escalation Matrix for Unlawful Recovery Harassment
              </h2>
              <p className="text-slate-700 leading-relaxed text-sm"> If claims firms harass resident kin. Escalate through this formal RBI rules: </p>

              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">1</span>
                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <h3 className="text-xs font-bold text-slate-900">Grievance Redressal Officer (GRO)</h3>
                      <span className="text-[10px] text-slate-500 font-semibold bg-slate-100 px-1.5 py-0.5 rounded">7-10 Days</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed"> Serve a formal notice attaching the Special PoA and demanding cessation of kin abuse under the RBI Fair Practices Code. </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">2</span>
                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <h3 className="text-xs font-bold text-slate-900">main sum Nodal Officer (PNO)</h3>
                      <span className="text-[10px] text-slate-500 font-semibold bg-slate-100 px-1.5 py-0.5 rounded">14-21 Days</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed"> Escalate straight to the bank's main loan Nodal staff to submit OTS deal OTS proposals and reassign the account away from claims staff. </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">3</span>
                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <h3 className="text-xs font-bold text-slate-900">RBI Integrated Ombudsman</h3>
                      <span className="text-[10px] text-slate-500 font-semibold bg-slate-100 px-1.5 py-0.5 rounded">30 Days</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed"> File a legal RBI reports on cms.rbi.org.in if the bank fails to halt claims misconduct or unlawfully freezes accounts. </p>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 9: CHRONOLOGICAL TIMELINE TABLE */}
            <section id="chronological-resolution-milestones" className="space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-50 text-[#1886ff] text-xs font-semibold">
                <Award className="w-3.5 h-3.5"/>
                Procedural Timeline.
              </div>
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                8. Chronological Procedural Timeline: From Delinquency to Final NDC
              </h2>
              <p className="text-slate-700 leading-relaxed text-sm"> grasp key legal and banking milestones allows overseas clients to plan defense maneuvers and closure funds efficiently: </p>

              {/* 4-Sided Bordered Timeline Table */}
              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto shadow-sm bg-white">
                <table className="w-full text-xs text-left border-collapse">
                  <thead className="bg-slate-50 text-slate-700 border-b border-slate-200/80 uppercase font-bold tracking-wider text-[11px]">
                    <tr className="divide-x divide-slate-200/80">
                      <th className="p-3">Phase</th>
                      <th className="p-3">Banking Event</th>
                      <th className="p-3">Framework</th>
                      <th className="p-3">Action Protocol</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr className="divide-x divide-slate-200/80">
                      <td className="p-3 font-semibold text-slate-800">Days 1-90</td>
                      <td className="p-3">SMA-0 to SMA-2 Classification.</td>
                      <td className="p-3">RBI Income Recognition.</td>
                      <td className="p-3">Collate records & initiate review.</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80">
                      <td className="p-3 font-semibold text-slate-800">Day 90+</td>
                      <td className="p-3 text-red-600 font-semibold">Non-Performing Asset Flag.</td>
                      <td className="p-3">15%-100% bank reserves.</td>
                      <td className="p-3">Execute consular PoA & establish defense.</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 bg-blue-50/30">
                      <td className="p-3 font-semibold text-[#1886ff]">Months 4-5</td>
                      <td className="p-3 font-semibold text-[#1886ff]">Credit boards OTS Window.</td>
                      <td className="p-3">Stressed Asset rules.</td>
                      <td className="p-3 font-semibold text-emerald-600">Secure 45%-60% haircut sanction letter.</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80">
                      <td className="p-3 font-semibold text-slate-800">Month 6</td>
                      <td className="p-3 font-semibold text-emerald-600">Inward wire transfer & NDC.</td>
                      <td className="p-3">FEMA 1999 & CICRA 2005.</td>
                      <td className="p-3">Wire funds via NRE/NRO & receive NDC.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: SPECIALIZED REAL-WORLD SCENARIOS */}
            <section id="specialized-nri-scenarios" className="space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-50 text-[#1886ff] text-xs font-semibold">
                <Globe2 className="w-3.5 h-3.5"/>
                Specialized Cross-Border Scenarios.
              </div>
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                9. Specialized Scenarios: Gulf Layoffs, Currency Swings & ARCs
              </h2>
              <p className="text-slate-700 leading-relaxed text-sm"> Expatriates face distinct daily work challenges depending on their host country and the firm evolution of their loan portfolio: </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm">
                  <h3 className="text-xs font-bold text-slate-900 mb-1">GCC & Middle East Layoffs</h3>
                  <p className="text-xs text-slate-600 leading-relaxed"> Expats in Dubai. Abu Dhabi. Doha. Riyadh dealing with firm restructuring can submit visa cancellations as conclusive proof of distress for fast OTS approval. </p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm">
                  <h3 className="text-xs font-bold text-slate-900 mb-1">Dual Currency Swings</h3>
                  <p className="text-xs text-slate-600 leading-relaxed"> Foreign currency appreciation against the Rupee lowers the foreign currency outlay required to settle debts. NRE/NRO transfers ensure full FEMA compliance. </p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm">
                  <h3 className="text-xs font-bold text-slate-900 mb-1">ARC Portfolio Assignments</h3>
                  <p className="text-xs text-slate-600 leading-relaxed"> When banks sell bad card pools to ARCs (such as Phoenix ARC or ARCIL) at 70% to 85% discounts. ARCs readily accept large OTS deals waivers. </p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm">
                  <h3 className="text-xs font-bold text-slate-900 mb-1">Resident Parents Shielding</h3>
                  <p className="text-xs text-slate-600 leading-relaxed"> Credit card pacts are primary person contracts. Third-party staff cannot by law contact parents. Formal PoA legal help halts all domestic abuse. </p>
                </div>
              </div>
            </section>

            {/* SECTION 11: COMPANY PROFILE COMPONENT */}
            <div id="about-credsettle" className="pt-4">
              <CompanySection />
            </div>

            {/* SECTION 12: 10 SYNCHRONIZED FAQS */}
            <section id="frequently-asked-questions" className="space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-50 text-[#1886ff] text-xs font-semibold">
                <FileText className="w-3.5 h-3.5"/>
                Frequently Asked Questions.
              </div>
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                Frequently Asked Questions on NRI Credit Card Debt Settlement
              </h2>
              <p className="text-slate-700 leading-relaxed text-sm"> checked answers by cross-border debt relief workers: </p>

              <div className="space-y-3 pt-2">
                {faqs.map((faq, index) => (<div key={index} className="border border-slate-200/80 rounded-2xl bg-white overflow-hidden shadow-sm transition-all">
                    <button type="button" onClick={() => toggleFaq(index)} className="w-full p-4 text-left flex items-center justify-between gap-4 hover:bg-slate-50/50 transition-colors" aria-expanded={openFaq === index}>
                      <span className="text-xs sm:text-sm font-bold text-slate-900"> {faq.q} </span>
                      <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform duration-200 flex-shrink-0 ${openFaq === index ? 'rotate-180 text-[#1886ff]' : ''}`}/>
                    </button>
                    {openFaq === index && (<div className="px-4 pb-4 pt-1 text-xs text-slate-600 leading-relaxed border-t border-slate-100">
                        {faq.a}
                      </div>)}
                  </div>))}
              </div>
            </section>

            {/* SECTION 13: CITATIONS & OUTBOUND AUTHORITY GRID */}
            <section id="regulatory-sources" className="space-y-4 pt-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-50 text-[#1886ff] text-xs font-semibold">
                <Scale className="w-3.5 h-3.5"/>
                Statutory Citations & Regulatory Authorities.
              </div>
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                Official Statutory References & Regulatory Authorities
              </h2>
              
              <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm space-y-4 text-xs text-slate-600 leading-relaxed">
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">Key Statutes & Directives</h3>
                  <p> Powers of lawyer Act. 1882 & Indian Stamp Act. 1899: Consular PoA execution and stamping. Reserve Bank of India Master Directions: Fair Practices Code and Stressed Assets (2026). Ministry of Home Affairs rules: Office Memorandum on Lookout Circulars. Supreme Court of India: Perkins Eastman (2020) and TRF Ltd. (2017). FEMA 1999: Inward wire transfers. CICRA 2005: Section 21 credit rectification. </p>
                </div>

                <div className="pt-2 border-t border-slate-100">
                  <h3 className="font-bold text-slate-800 mb-2">Verified Portals</h3>
                  <div className="flex flex-wrap gap-2">
                    <a href="https://www.rbi.org.in" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-[#1886ff] transition-colors">
                      RBI (rbi.org.in). <ExternalLink className="w-3 h-3"/>
                    </a>
                    <a href="https://cms.rbi.org.in" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-[#1886ff] transition-colors">
                      Ombudsman (cms.rbi.org.in). <ExternalLink className="w-3 h-3"/>
                    </a>
                    <a href="https://www.cibil.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-[#1886ff] transition-colors">
                      CIBIL (cibil.com). <ExternalLink className="w-3 h-3"/>
                    </a>
                    <a href="https://www.indiacode.nic.in" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-[#1886ff] transition-colors">
                      India Code <ExternalLink className="w-3 h-3"/>
                    </a>
                    <a href="https://nalsa.gov.in" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-[#1886ff] transition-colors">
                      NALSA <ExternalLink className="w-3 h-3"/>
                    </a>
                    <a href="https://cybercrime.gov.in" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-[#1886ff] transition-colors">
                      Cyber Crime Portal. <ExternalLink className="w-3 h-3"/>
                    </a>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-100">
                  <h3 className="font-bold text-slate-800 mb-2">Related Guides</h3>
                  <div className="flex flex-wrap gap-2">
                    <Link href="/legal-notice-for-loan-settlement-harassment" className="px-2.5 py-1 rounded-md bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-[#1886ff] transition-colors">
                      Bank Sent Legal Notice
                    </Link>
                    <Link href="/arbitration-notice-personal-loan-default" className="px-2.5 py-1 rounded-md bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-[#1886ff] transition-colors">
                      Arbitration Notice Defense
                    </Link>
                    <Link href="/services/anti-harassment" className="px-2.5 py-1 rounded-md bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-[#1886ff] transition-colors">
                      Anti-Harassment Protection
                    </Link>
                    <Link href="/legal-help-for-non-closure-of-settled-loan" className="px-2.5 py-1 rounded-md bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-[#1886ff] transition-colors">
                      Convert Settled to Closed
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </article>

          {/* ================= RIGHT COLUMN: STICKY SIDEBAR ================= */}
          <aside className="space-y-5 sticky top-6 hidden lg:block">
            {/* Author Card */}
            <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-11 h-11 rounded-full bg-[#1886ff] text-white flex items-center justify-center font-bold text-sm">
                  AJ
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">Ashish Jhangra</p>
                  <p className="text-[11px] text-slate-500 font-medium leading-tight"> Legal & Debt relief expert. </p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-3"> expert in cross-border banking claims relief and NPA talks. </p>
              <Link href="/author/ashish-jhangra" className="text-xs font-bold text-[#1886ff] hover:underline inline-flex items-center gap-1">
                View Author Profile
                <ArrowRight className="w-3 h-3"/>
              </Link>
            </div>

            {/* Emergency Remote Defense CTA Box */}
            <div className="bg-[#2452ae] text-white rounded-2xl p-5 shadow-md">
              <div className="flex items-center gap-2 mb-2">
                <ShieldCheck className="w-4 h-4 text-blue-200"/>
                <span className="text-[10px] font-bold uppercase tracking-wider text-blue-200"> 100% Confidential. </span>
              </div>
              <p className="text-sm font-bold mb-2 leading-tight"> Facing Indian Debt Abroad? </p>
              <p className="text-xs text-blue-100 leading-relaxed mb-4"> Our legal team handles PoA execution. Stops abuse. And negotiates a 45%-60% waiver. </p>
              <a href="https://www.credsettle.com/contact" className="block w-full py-2.5 px-4 bg-white text-[#2452ae] text-center rounded-xl font-bold text-xs shadow hover:bg-blue-50 transition-colors mb-3">
                Resolve NRI Debt Remotely.
              </a>
              <a href="tel:+918800226635" className="flex items-center justify-center gap-2 text-xs font-bold text-blue-100 hover:text-white py-1 transition-colors">
                <Phone className="w-3.5 h-3.5"/>
                Call: +91-8800226635.
              </a>
            </div>

            {/* CredSettle Advantage */}
            <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm space-y-3">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500"> CredSettle Advantage. </p>
              <div className="space-y-2 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#1886ff] flex-shrink-0"/>
                  <span>Zero Travel via PoA.</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#1886ff] flex-shrink-0"/>
                  <span>Direct Bank Wire.</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#1886ff] flex-shrink-0"/>
                  <span>RBI Compliant NDC.</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>);
}
