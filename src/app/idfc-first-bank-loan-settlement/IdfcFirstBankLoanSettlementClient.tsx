'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import StatsStrip from '@/components/StatsStrip';
import CompanySection from '@/components/CompanySection';
import { ChevronDown, Scale, ExternalLink, ShieldCheck, CheckCircle2, AlertTriangle, FileText, HelpCircle, TrendingUp, Award, BookOpen, Building2, DollarSign, Check, Lock, Phone, AlertCircle, CreditCard, Briefcase, Bookmark, ArrowRight, Clock, UserCheck, Sparkles, Gavel, BadgeAlert, Landmark } from 'lucide-react';
export default function IdfcFirstBankLoanSettlementClient() {
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
            q: 'What is the official IDFC FIRST Bank personal loan settlement policy?',
            a: "IDFC FIRST Bank administers loan settlement through its Retail Stressed Asset handling Division under RBI OTS deal rules. When clients face involuntary debt stress such as job termination. Trade ruin. Catastrophic health expenses. The bank considers structured One-Time deals (OTS) involving complete waivers of penalty fees and large main loan write-offs."
        },
        {
            q: "How does IDFC FIRST Bank handle overdue digital consumer and consumer durable loans?",
            a: "late app loans and clients durable financing originate via automated algorithmic underwriting and e-mandates. In early default. Automated notices and telecalling firms handle claims. Once default surpasses 90 days (NPA). IDFC FIRST Bank transfers files to its Special Recoveries desk. Where micro-exposures are evaluated for bulk or bilateral OTS deals."
        },
        {
            q: 'What percentage of waiver can be negotiated on an IDFC FIRST Bank personal loan?',
            a: "Clients consistently secure a 100% complete waiver on accrued extra fees. Late payment surcharges. And NACH bounce fees. On the checked remaining base loan. IDFC FIRST Bank routinely sanctions haircuts ranging between 40% and 60%. Heavily influenced by the default vintage. Documented ruin proof. Legal posture."
        },
        {
            q: 'How should I respond to digital legal notices and e-summons sent via WhatsApp or email by IDFC FIRST Bank?',
            a: "online notices and e-summons sent via WhatsApp or email must be formally examined rather than ignored. Many online notices originate from third-party claims vendors using automated legal templates. A formal legal reply issued by debt relief workers establishes genuine hardship. claims arbitrary penal additions. Channels contact away from informal threats toward structured settlement channels."
        },
        {
            q: 'How can I stop aggressive recovery agents and doorstep collection visits from IDFC FIRST Bank?',
            a: "Unlawful claims abuse violates the Reserve Bank of India Fair Practices Code. Clients can stop harsh telecalling and unannounced home visits by serving a formal legal legal help to IDFC FIRST Bank's main loan Nodal agents and Circle Stressed Asset desk. Asserting client rights and demanding bilateral relief through authorized bank agents."
        },
        {
            q: 'What steps should be taken if IDFC FIRST Bank initiates sole arbitration or digital dispute resolution?',
            a: 'IDFC FIRST Bank loan pacts often specify sole hearing or online claims relief (ODR). Under Supreme Court rulings in Perkins Eastman and TRF Limited. Unilateral judge appointments by lenders are void ab initio. Clients must file formal jurisdictional objections under Section 12(5) of the hearing and talks Act. Halting steps and compelling the bank toward mutual OTS deal.'
        },
        {
            q: 'How does CredSettle defend against Section 25 PSSA notices for IDFC FIRST Bank NACH bounces?',
            a: "When monthly e-mandates bounce due to insufficient funds. Lenders issue legal notices under Section 25 of the Payment and settlement Systems Act. Our legal team issues an authoritative reply establishing the absence of fraudulent intent. Explaining genuine liquidity failure. Submitting an fast proposal for One-Time settlement before magistrate filings can occur."
        },
        {
            q: 'What critical terms must be verified in an official IDFC FIRST Bank settlement sanction letter?',
            a: 'An authentic IDFC FIRST Bank settlement sanction letter must be issued on formal bank letterhead. Originate from an authorized firm email domain (@idfcfirstbank.com). Specify the precise loan account number. Clearly state the agreed settlement sum and tranche payment schedule. And contain explicit commitments to withdraw legal steps and issue a No Dues letter.'
        },
        {
            q: 'What is the impact of an IDFC FIRST Bank settlement on my CIBIL score and credit profile?',
            a: 'Concluding a loan settlement causes IDFC FIRST Bank to report the account as "Settled" with zero unpaid dues to TransUnion CIBIL and other credit bureaus. While this mark lowers credit scores initially. It permanently halts growing negative monthly defaults. clients can restore a 750+ score within 18 to 24 months through disciplined credit rebuilding or seek status conversion under Section 21 of CICRA.'
        },
        {
            q: 'How long does it take to receive the official No Dues Certificate from IDFC FIRST Bank?',
            a: 'After the full payout sum is remitted straight into the IDFC FIRST Bank loan account. The bank processes internal write-offs across its Core Banking System (CBS). In compliance with Reserve Bank of India directives. IDFC FIRST Bank must issue the formal No Dues letter (NDC) and account closure confirmation within 30 to 45 trade days.'
        }
    ];
    return (<main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-[#1886ff] selection:text-white">
      {/* 1. HERO SECTION (#2452ae Background) */}
      <section className="relative text-white pt-14 pb-10 md:pt-18 md:pb-12 px-4 md:px-8 overflow-hidden flex items-center justify-center text-center" style={{ backgroundColor: '#2452ae' }}>
        <div className="absolute inset-0 bg-black/5 z-0 pointer-events-none"/>
        <div className="max-w-5xl mx-auto text-center z-10 relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-blue-200 text-xs font-semibold mb-3">
            <Landmark className="w-3.5 h-3.5"/>
            <span>Institutional IDFC FIRST Bank Stressed Asset Resolution Framework.</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            IDFC FIRST Bank Loan Settlement Process
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed"> bank legal plan for resolving late IDFC FIRST Bank retail private loans and online clients facilities. Learn how to counter automated online legal notices. Neutralize sole hearing steps. Eliminate growing penalty charges. settle up to 60% debt write-offs with an authentic No Dues letter. </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2">
              <span>Facing IDFC Loan Default? Request Settlement Evaluation.</span>
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
                <p className="text-[10px] text-slate-500 mt-1 leading-tight"> Governed by Reserve Bank of India Prudential rules. Master Directions on Advances. And Fair Practices Code. </p>
              </div>
            </div>
          </aside>

          {/* ================= MIDDLE COLUMN: MAIN EDITORIAL CONTENT ================= */}
          <div className="space-y-8 md:space-y-10 min-w-0">
            
            {/* EXECUTIVE SUMMARY BOX (#F4F8FE Box) */}
            <div id="quick-crux" className="scroll-target rounded-2xl bg-[#F4F8FE] border border-blue-100/90 border-l-[5px] border-l-[#1886ff] p-5 sm:p-6 md:p-7 shadow-xs space-y-4 text-slate-800">
              <div className="flex items-center gap-2 text-xs md:text-sm font-black uppercase tracking-wider text-[#1886ff]">
                <Bookmark className="w-4 h-4 text-[#1886ff]"/>
                <span>EXECUTIVE BRIEF: IDFC FIRST BANK LOAN SETTLEMENT CRUX.</span>
              </div>

              <ul className="space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start sm:items-center gap-2.5"> <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0"/> <p className="text-slate-700"> <strong className="text-slate-900 font-bold">bank police area:</strong> Settled through IDFC Stressed Assets desk past 90 days default. </p> </li>

                <li className="flex items-start sm:items-center gap-2.5"> <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0"/> <p className="text-slate-700"> <strong className="text-slate-900 font-bold">no-pledge Immunity:</strong> No asset mortgage rights under SARFAESI Act Section 31(g). </p> </li>

                <li className="flex items-start sm:items-center gap-2.5"> <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0"/> <p className="text-slate-700"> <strong className="text-slate-900 font-bold">100% Surcharge Waiver:</strong> Full elimination of growing extra fees. Bounce fees &amp. GST. </p> </li>

                <li className="flex items-start sm:items-center gap-2.5"> <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0"/> <p className="text-slate-700"> <strong className="text-slate-900 font-bold">main loan Haircut Target:</strong> 40% to 60% write-offs settled on core unamortized balance. </p> </li>

                <li className="flex items-start sm:items-center gap-2.5"> <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0"/> <p className="text-slate-700"> <strong className="text-slate-900 font-bold">online Notice Shield:</strong> Automated WhatsApp summons &amp. notices defused via formal legal reply. </p> </li>

                <li className="flex items-start sm:items-center gap-2.5"> <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0"/> <p className="text-slate-700"> <strong className="text-slate-900 font-bold">hearing safety:</strong> Unilateral judge appointments countered under Perkins Eastman. </p> </li>

                <li className="flex items-start sm:items-center gap-2.5"> <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0"/> <p className="text-slate-700"> <strong className="text-slate-900 font-bold">Section 25 PSSA Defense:</strong> E-mandate dishonors channeled into binding OTS deals. </p> </li>

                <li className="flex items-start sm:items-center gap-2.5"> <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0"/> <p className="text-slate-700"> <strong className="text-slate-900 font-bold">legal Account Closure:</strong> Direct CBS remittance followed by authentic NDC within 30-45 days. </p> </li>
              </ul>
            </div>

            {/* SECTION 1: DEBT ECONOMICS & NPA DYNAMICS */}
            <section id="npa-dynamics" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs md:text-sm font-bold text-[#1886ff] uppercase tracking-wider">
                <Landmark className="w-4 h-4 text-[#1886ff]"/>
                <span>Section 1: Banking Economics &amp; Regulatory Architecture.</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                IDFC FIRST Bank Debt Economics and NPA Classification Dynamics
              </h2>
              <div className="text-xs sm:text-sm text-slate-700 leading-relaxed space-y-3">
                <p> IDFC FIRST Bank has expanded aggressively into retail no-pledge credit. Originating thousands of clients durable loans. online app credit lines. High-ticket private loans across India. When unexpected life situation. firm downsizing. Severe trade downturns disrupt a client&apos. S monthly cashflow. The loan transitions sequentially through RBI default brackets. During the initial thirty days of default. The account is designated as Special Mention Account Zero (SMA-0). Progressing to SMA-1 between thirty-one and sixty days. Reaching SMA-2 between sixty-one and ninety days. Throughout these initial ninety days. The bank deploys high-frequency automated reminders. online payment links. Intensive telecalling through third-party claims firms. </p>
                <p> Once an no-pledge private loans crosses the critical ninety-day steady default threshold. Reserve Bank of India prudential regulations mandate that IDFC FIRST Bank classify the asset as a Gross Non-Performing Asset (NPA). This RBI classification triggers major money pressure for the institution. Under RBI bank reserves rules. The bank must set aside large Tier-1 cash reserves against the late balance. Straight eroding its reported quarterly profitability and cash adequacy ratios. Crucially. This is because retail private loans and online facilities are entirely no-pledge. Section 31(g) of the SARFAESI Act explicitly bars the bank from initiating summary asset auctions. Home seizures. home attachments without protracted civil lawsuits. Recognizing that prolonged legal claims in civil courts often takes five to seven years with excessive legal overhead. IDFC FIRST Bank&apos. s Retail Stressed Asset handling division operates under clear trade mandates to settle pragmatic One-Time deals (OTS). This lets the bank to recover large cash while purging bad debt from its balance sheet. </p>
              </div>
            </section>

            {/* SECTION 2: FINANCIAL BREAKDOWN & SETTLEMENT MATH */}
            <section id="settlement-math" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs md:text-sm font-bold text-[#1886ff] uppercase tracking-wider">
                <DollarSign className="w-4 h-4 text-[#1886ff]"/>
                <span>Section 2: Forensic Ledger Analysis.</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                Understanding IDFC FIRST Bank Loan Charges & Settlement Math
              </h2>
              <div className="text-xs sm:text-sm text-slate-700 leading-relaxed space-y-3">
                <p> When an IDFC FIRST Bank loan enters extended default. The gross unpaid dues cited by claims telecallers rapidly becomes distorted. Lenders automatically superimpose annualized growing extra fees rates ranging from twenty-four to thirty-six percent. Recurring NACH dishonor charges of ₹450 to ₹590 per cycle. Legal administration fees. An eighteen percent Goods and Services Tax on every levied surcharge. Over four to six months of non-payment. These growing add-ons can easily represent twenty-five to thirty-five percent of the entire ledger claim. Creating an artificial barrier to debt relief. </p>
                <p> bank debt talks begins with an uncompromising audits of the loan ledger. CredSettle isolates the core remaining base loan by extracting all non-legal penalty charges. Bounce fees. Accrued surcharge rates. Under IDFC FIRST Bank&apos. S established OTS deals rules. Credit boards routinely grant a strict 100% waiver on all penal and office surcharges once genuine debt stress is prove. Also. Depending on the vintage of the NPA and the client&apos. S checked ruin. The bank sanctions an remaining main loan haircut between 40% and 60%. Establishing a realistic single-tranche or structured multi-part OTS deal figure. </p>
              </div>

              {/* REPRESENTATIVE MATHEMATICAL CALCULATION CARD */}
              <div className="rounded-2xl border border-slate-200/80 bg-white p-5 sm:p-6 shadow-xs space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    agent Forensic Audit: ₹8,50,000 overdue IDFC Personal Loan.
                  </span>
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-blue-50 text-[#1886ff]">
                    180-Day NPA Vintage.
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                    <p className="text-[11px] font-semibold text-slate-500 uppercase">Gross Bank Claim.</p>
                    <p className="text-lg sm:text-xl font-extrabold text-red-600 mt-1">₹8,50,000</p>
                    <p className="text-[10px] text-slate-500 mt-0.5">Includes extra fees &amp. bounce fees.</p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                    <p className="text-[11px] font-semibold text-slate-500 uppercase">Penal Surcharges Stripped.</p>
                    <p className="text-lg sm:text-xl font-extrabold text-emerald-600 mt-1">₹2,10,000</p>
                    <p className="text-[10px] text-slate-500 mt-0.5">100% full bank waiver.</p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                    <p className="text-[11px] font-semibold text-slate-500 uppercase">Core remaining main loan.</p>
                    <p className="text-lg sm:text-xl font-extrabold text-slate-800 mt-1">₹6,40,000</p>
                    <p className="text-[10px] text-slate-500 mt-0.5">checked baseline exposure.</p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-blue-50/70 border border-blue-200/60">
                    <p className="text-[11px] font-semibold text-[#1886ff] uppercase">Sanctioned OTS Figure.</p>
                    <p className="text-lg sm:text-xl font-extrabold text-[#1886ff] mt-1">₹3,20,000</p>
                    <p className="text-[10px] text-blue-700 font-medium mt-0.5">50% main loan haircut (62% total relief).</p>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 3: 4-SIDED BORDERED COMPARISON MATRIX */}
            <section id="comparison-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs md:text-sm font-bold text-[#1886ff] uppercase tracking-wider">
                <Scale className="w-4 h-4 text-[#1886ff]"/>
                <span>Section 3: Strategic Evaluation.</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                IDFC Settlement vs Restructuring & Alternate Options
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed"> When clients skill severe debt distress on IDFC FIRST Bank private loans. They are often presented with confusing alternatives ranging from tenure extensions to court appearances. Loan restructuring appears attractive initially but actually increases aggregate rates burdens without granting any main loan relief. Conversely. Unresolved defaults trigger harsh online summons. Potential penal reports under payment statutes. Eventual debt assignment to private asset claims entities. The full comparative matrix below objectively contrasts the legal. Money. And credit implications across every available relief pathway. </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto shadow-xs bg-white">
                <table className="w-full text-left text-xs border-collapse divide-y divide-slate-200/80">
                  <thead className="bg-slate-50 text-slate-700 font-bold uppercase tracking-wider text-[11px]">
                    <tr className="divide-x divide-slate-200/80">
                      <th className="py-3 px-3.5">Resolution Route.</th>
                      <th className="py-3 px-3.5">Waiver Potential.</th>
                      <th className="py-3 px-3.5">Settlement Timeline.</th>
                      <th className="py-3 px-3.5">Legal Immunity</th>
                      <th className="py-3 px-3.5">Credit Impact</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-700">
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/70 transition-colors">
                      <td className="py-3 px-3.5 font-bold text-slate-900">One-Time settlement (OTS).</td>
                      <td className="py-3 px-3.5 text-emerald-600 font-semibold">100% penal + 40% to 60% main loan write-off.</td>
                      <td className="py-3 px-3.5">45 to 90 days</td>
                      <td className="py-3 px-3.5">Complete withdrawal of all notices. Suits &amp. ODR claims.</td>
                      <td className="py-3 px-3.5">Reported as Settled. rebuildable in 18-24 mos.</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/70 transition-colors">
                      <td className="py-3 px-3.5 font-bold text-slate-900">Tenure Restructuring.</td>
                      <td className="py-3 px-3.5 text-red-600 font-semibold">0% waiver. higher overall rates debt risk.</td>
                      <td className="py-3 px-3.5">2 to 4 extended years.</td>
                      <td className="py-3 px-3.5">Conditional upon strict monthly EMI compliance.</td>
                      <td className="py-3 px-3.5">Marked as Restructured. score suppresses.</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/70 transition-colors">
                      <td className="py-3 px-3.5 font-bold text-slate-900">Civil Court lawsuits.</td>
                      <td className="py-3 px-3.5 text-amber-600 font-semibold">Determined by court decree. high lawyers fees.</td>
                      <td className="py-3 px-3.5">3 to 7 years</td>
                      <td className="py-3 px-3.5">Prolonged court summons. Hearings &amp. warrants.</td>
                      <td className="py-3 px-3.5">Severe derogatory suit-filed CIBIL desk records.</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/70 transition-colors">
                      <td className="py-3 px-3.5 font-bold text-slate-900">National Lok Adalat.</td>
                      <td className="py-3 px-3.5 text-blue-600 font-semibold">Full penal waiver + 20% to 35% main loan cut.</td>
                      <td className="py-3 px-3.5">Quarterly sittings.</td>
                      <td className="py-3 px-3.5">Final decree under Legal Services officials Act.</td>
                      <td className="py-3 px-3.5">Reported as Settled under Lok Adalat.</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/70 transition-colors">
                      <td className="py-3 px-3.5 font-bold text-slate-900">Inaction &amp. Default Neglect.</td>
                      <td className="py-3 px-3.5 text-red-700 font-semibold">0% waiver. runaway growing debt ballooning.</td>
                      <td className="py-3 px-3.5">Indefinite abuse.</td>
                      <td className="py-3 px-3.5">Sec. 25 PSSA, Sec. 138 NI Act &amp. ARC assignment.</td>
                      <td className="py-3 px-3.5">CIBIL plunges below 600. complete credit freeze.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 4: TECHNICAL CIBIL ALGORITHM & SCORING MATH */}
            <section id="cibil-impact" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs md:text-sm font-bold text-[#1886ff] uppercase tracking-wider">
                <TrendingUp className="w-4 h-4 text-[#1886ff]"/>
                <span>Section 4: Credit Architecture.</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                IDFC Default Impact on CIBIL & Section 21 CICRA Relief
              </h2>
              <div className="text-xs sm:text-sm text-slate-700 leading-relaxed space-y-3">
                <p> Credit information firms including TransUnion CIBIL. Experian. CRIF High Mark. Equifax compute credit scores using proprietary mathematical models governed by five primary parameters. Payment history commands the single largest influence at 35%. Followed by credit exposure and use at 30%. Credit vintage and duration at 15%. Credit mix between secured and no-pledge debt at 10%. Recent credit inquiries at 10%. When consecutive monthly installments on an IDFC FIRST Bank private loans are missed. The reporting algorithm logs negative Days Past Due (DPD) entries each month. This leads to a steep eighty to one hundred and thirty point plunge in the client&apos. s credit score. </p>
                <p> Executing an authorized One-Time settlement fundamentally alters this negative reporting trajectory. Upon receipt of the settlement remittance. IDFC FIRST Bank updates CIBIL desk databases to reflect a &quot. Settled&quot. Status with zero current unpaid debt risk. While a &quot. Settled&quot. Notation indicates that the lender accepted a concession. It promptly halts monthly growing default marks and eliminates active default flags. clients can methodically reconstruct a prime 750+ CIBIL score within eighteen to twenty-four months by maintaining a low-use secured credit card backed by a fixed deposit. Additionally. Under Section 21 of the Credit Information firms (Regulation) Act. 2005 (CICRA). Clients retain the legal right to petition credit bureaus for claims relief and file requests to update records to &quot. Closed&quot. Upon voluntarily settling residual haircut balances at a subsequent date. </p>
              </div>
            </section>

            {/* SECTION 5: VISUAL INFOGRAPHIC ASSET CARD */}
            <section id="infographic-overview" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs md:text-sm font-bold text-[#1886ff] uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-[#1886ff]"/>
                <span>Section 5: Procedural Blueprint.</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                IDFC FIRST Bank Loan Settlement Institutional Roadmap
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed"> The visual rules below summarizes CredSettle&apos. S rigorous bank process for resolving late IDFC FIRST Bank private loans. Neutralizing online summons. Preventing coercive debt claims. Securing fully authorized OTS deals letters with checked bank releases. </p>

              <div className="rounded-2xl border border-slate-200/80 bg-white p-3 sm:p-4 shadow-xs overflow-hidden">
                <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-slate-900">
                  <Image src="/images/infographics/idfc-first-bank-loan-settlement.jpg" alt="IDFC FIRST Bank Personal Loan Settlement Procedure and Resolution Blueprint" fill className="object-cover" priority sizes="(max-width: 1200px) 100vw, 1200px"/>
                </div>
                <div className="flex items-center justify-between pt-3 px-1">
                  <span className="text-[11px] text-slate-500 font-medium">
                    Figure 1: CredSettle 6-Stage Institutional Settlement Blueprint for IDFC FIRST Bank.
                  </span>
                  <a href="/images/infographics/idfc-first-bank-loan-settlement.jpg" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs font-bold text-[#1886ff] hover:underline">
                    <span>View High-Res</span>
                    <ExternalLink className="w-3 h-3"/>
                  </a>
                </div>
              </div>
            </section>

            {/* SECTION 6: STEP-BY-STEP SOP (6 STAGES) */}
            <section id="step-by-step-sop" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs md:text-sm font-bold text-[#1886ff] uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4 text-[#1886ff]"/>
                <span>Section 6: Standard Operating Procedure.</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                Step-by-Step Institutional SOP for IDFC FIRST Bank Loan Settlement
              </h2>
              <div className="text-xs sm:text-sm text-slate-700 leading-relaxed space-y-4">
                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900">
                    <span className="w-6 h-6 rounded-full bg-[#1886ff] text-white flex items-center justify-center text-xs">1</span>
                    <h3 className="text-sm font-bold">Stage 1: Forensic Loan Ledger Audit &amp; Surcharge Extraction</h3>
                  </div>
                  <p className="text-slate-600 pl-8 leading-relaxed"> Our money analysts dissect your IDFC FIRST Bank record of account and loan pacts. We extract all growing extra fees. Automated NACH bounce penalties. Processing fees. Associated taxes. Determining the true remaining main loan baseline required for bank talks. </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900">
                    <span className="w-6 h-6 rounded-full bg-[#1886ff] text-white flex items-center justify-center text-xs">2</span>
                    <h3 className="text-sm font-bold">Stage 2: Comprehensive Hardship Dossier Compilation</h3>
                  </div>
                  <p className="text-slate-600 pl-8 leading-relaxed"> We assemble prove paperwork proving genuine involuntary ruin. This dossier includes formal firm layoff letters. health hospitalization bills. Audited trade loss records. Constructing an unassailable hardship brief that establishes absence of willful default before bank officials. </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900">
                    <span className="w-6 h-6 rounded-full bg-[#1886ff] text-white flex items-center justify-center text-xs">3</span>
                    <h3 className="text-sm font-bold">Stage 3: Special Recoveries &amp; Credit Committee Representation</h3>
                  </div>
                  <p className="text-slate-600 pl-8 leading-relaxed"> We bypass third-party claims telecallers and direct formal legal representations to IDFC FIRST Bank&apos. s Retail Stressed Asset handling division and main loan Nodal agents. This formal invocation asserts client protections under RBI circulars and halts banned claims abuse. </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900">
                    <span className="w-6 h-6 rounded-full bg-[#1886ff] text-white flex items-center justify-center text-xs">4</span>
                    <h3 className="text-sm font-bold">Stage 4: Bilateral Compromise Negotiations &amp; Haircut Structuring</h3>
                  </div>
                  <p className="text-slate-600 pl-8 leading-relaxed"> Our senior debt negotiators engage circle credit boards to structure optimal OTS deal terms. We secure an absolute 100% waiver on all penal surcharges and settle a 40% to 60% main loan write-off. Structuring payments across an affordable lump-sum or structured multi-month tranches. </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900">
                    <span className="w-6 h-6 rounded-full bg-[#1886ff] text-white flex items-center justify-center text-xs">5</span>
                    <h3 className="text-sm font-bold">Stage 5: Settlement Sanction Letter Legal Vetting</h3>
                  </div>
                  <p className="text-slate-600 pl-8 leading-relaxed"> Our legal counsel conducts exhaustive check of the formal closure note issued on IDFC FIRST Bank letterhead. We verify firm email origins. Exact account numbers. Agreed OTS deal amounts. Payment schedules. Clear undertakings to withdraw all pending legal notices and hearing claims. </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900">
                    <span className="w-6 h-6 rounded-full bg-[#1886ff] text-white flex items-center justify-center text-xs">6</span>
                    <h3 className="text-sm font-bold">Stage 6: CBS Loan Remittance, Zeroing, and Official NDC</h3>
                  </div>
                  <p className="text-slate-600 pl-8 leading-relaxed"> The settlement funds are remitted straight into your IDFC FIRST Bank loan account through formal banking channels. We monitor Core Banking System ledger zeroing and ensure receipt of your formal No Dues letter within thirty to forty-five trade days in compliance with RBI rules. </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: STATUTORY NOTICE DEFENSE & LEGAL RIGHTS */}
            <section id="statutory-defense" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs md:text-sm font-bold text-[#1886ff] uppercase tracking-wider">
                <Gavel className="w-4 h-4 text-[#1886ff]"/>
                <span>Section 7: Statutory Protections.</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                IDFC Legal Notices Defense & Borrower Rights in India
              </h2>
              <div className="text-xs sm:text-sm text-slate-700 leading-relaxed space-y-3">
                <p> Defaulting on an no-pledge private loans or online credit facility in India is strictly a civil claims arising from breach of contract. Rather than a crime. Despite harsh posturing by claims firms. Hardship does not constitute willful default or money fraud under Indian jurisprudence. Clients enjoy robust legal defenses against arbitrary demands. banned home visits. And automated online threats. </p>
                <p> When IDFC FIRST Bank or its outside legal agents issue legal notices or online summons. Timely and authoritative legal intervention is critical. Formally responding through qualified debt relief workers establishes a matter of record regarding the client&apos. S genuine money incapacity. Counters procedural irregularities. promptly shifts the engagement away from adversarial lawsuits into structured bank OTS deal discussions. </p>
              </div>

              {/* 4-CARD ANALYTICAL GRID */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900">
                    <ShieldCheck className="w-4 h-4 text-[#1886ff]"/>
                    <h3 className="text-xs font-bold uppercase tracking-wide">Section 25 PSSA (NACH / E-Mandate Bounce)</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed"> Automated electronic mandate returns trigger legal demand notices under Section 25 of the Payment and settlement Systems Act. 2007. We issue full legal replies establishing lack of fraudulent intent. Citing genuine liquidity collapse. Showing readiness to execute an amicable OTS deals before any magistrate reports is filed. </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900">
                    <AlertCircle className="w-4 h-4 text-[#1886ff]"/>
                    <h3 className="text-xs font-bold uppercase tracking-wide">Section 138 Negotiable Instruments Act</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed"> Where physical pledge cheques are deposited and dishonored. Lenders issue fifteen-day legal demand notices. Our formal replies rebut legal presumptions under Section 139 by proving instruments were held solely as conditional pledge rather than for discharge of by law enforceable current debt. Helping pre-trial OTS deal. </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900">
                    <Gavel className="w-4 h-4 text-[#1886ff]"/>
                    <h3 className="text-xs font-bold uppercase tracking-wide">Sole Arbitration &amp; ODR under Section 21 &amp; Section 12(5)</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed"> IDFC FIRST Bank often invokes online claims relief or sole hearing. Under landmark Supreme Court rulings in. <em>Perkins Eastman Architects DPC v. HSCC (India) Ltd.</em> and <em>TRF Ltd. v. Energo tech Projects Ltd.</em>Unilateral judge appointments by lenders are void ab initio. We file Section 12(5) objections. Halting steps and compelling mutual settlement. </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900">
                    <Scale className="w-4 h-4 text-[#1886ff]"/>
                    <h3 className="text-xs font-bold uppercase tracking-wide">DRT Section 19 &amp; RBI Fair Practices Code</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed"> Debt claims Tribunal (DRT) filings require claims exceeding ₹20 Lakhs under the claims of Debts and ruin Act. Simultaneously. RBI Fair Practices Code strictly prohibits claims agent contact before 8 AM or after 7 PM. Threats to kin. Public humiliation. Workplace intrusions. Establishing fast grounds for RBI reports. </p>
                </div>
              </div>
            </section>

            {/* SECTION 8: 3-TIER GRIEVANCE & ESCALATION MATRIX */}
            <section id="escalation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs md:text-sm font-bold text-[#1886ff] uppercase tracking-wider">
                <BadgeAlert className="w-4 h-4 text-[#1886ff]"/>
                <span>Section 8: Regulatory Redressal.</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                3-Tier Grievance Escalation Matrix for IDFC Loans
              </h2>
              <div className="text-xs sm:text-sm text-slate-700 leading-relaxed space-y-3">
                <p> clients encountering banned claims tactics. Excessive extra fees calculations. Refusal to engage in legitimate OTS deal talks can use the Reserve Bank of India&apos. s structured three-tier grievance hierarchy to secure accountability: </p>
                <p> <strong>Level 1: Grievance Redressal agents (GRO):</strong> The initial formal reports is registered straight with IDFC FIRST Bank&apos. s designated Grievance Redressal agents. Under banking service standards. The GRO must investigate the daily work irregularity and provide a documented relief within seven to ten trade days. </p>
                <p> <strong>Level 2: main loan Nodal agents (PNO):</strong> If the initial response is inadequate or the timeline lapses without redress. The claims escalates to IDFC FIRST Bank&apos. s main loan Nodal agents. The PNO possesses executive formal to intervene in claims practices. Halt firm abuse. Direct stressed asset boards to examine offers within fourteen to twenty-one trade days. </p>
                <p> <strong>Level 3: Reserve Bank of India agents:</strong> If thirty days elapse without satisfactory relief. A legal reports is lodged on the RBI reports handling System (cms.rbi.org.in). Operating under the Reserve Bank - Integrated agents Scheme. 2021. The agents exercises legal powers to penalize procedural violations and help equitable money deals. </p>
              </div>
            </section>

            {/* SECTION 9: CHRONOLOGICAL TIMELINE TABLE */}
            <section id="chronological-timeline" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs md:text-sm font-bold text-[#1886ff] uppercase tracking-wider">
                <Clock className="w-4 h-4 text-[#1886ff]"/>
                <span>Section 9: Procedural Milestones.</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                IDFC Loan Default Milestones & Resolution Timeline
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed"> Effectively managing a late loan requires understanding the exact procedural timeline through which IDFC FIRST Bank escalates claims and evaluates OTS deal proposals. The chronological milestone table below delineates the transition from initial missed installment to final debt discharge. </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto shadow-xs bg-white">
                <table className="w-full text-left text-xs border-collapse divide-y divide-slate-200/80">
                  <thead className="bg-slate-50 text-slate-700 font-bold uppercase tracking-wider text-[11px]">
                    <tr className="divide-x divide-slate-200/80">
                      <th className="py-3 px-3.5">default Phase.</th>
                      <th className="py-3 px-3.5">Banking Milestone.</th>
                      <th className="py-3 px-3.5">Recovery &amp; Legal Action.</th>
                      <th className="py-3 px-3.5">Optimal Strategy.</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-700">
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/70 transition-colors">
                      <td className="py-3 px-3.5 font-bold text-slate-900">Days 1 to 30 (SMA-0).</td>
                      <td className="py-3 px-3.5">First missed installment.</td>
                      <td className="py-3 px-3.5">Automated SMS. WhatsApp reminders &amp. soft telecalling.</td>
                      <td className="py-3 px-3.5">Audit private liquidity. conserve cash reserves for settlement.</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/70 transition-colors">
                      <td className="py-3 px-3.5 font-bold text-slate-900">Days 31 to 90 (SMA-1/2).</td>
                      <td className="py-3 px-3.5">Consecutive default period.</td>
                      <td className="py-3 px-3.5">External telecalling firms assigned. frequent claims calls.</td>
                      <td className="py-3 px-3.5">Compile hardship proof. issue anti-abuse legal notice.</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/70 transition-colors">
                      <td className="py-3 px-3.5 font-bold text-slate-900">Day 90+ (NPA Classification).</td>
                      <td className="py-3 px-3.5">Gross NPA declaration.</td>
                      <td className="py-3 px-3.5">Tier-1 bank reserves. transfer to Special Recoveries division.</td>
                      <td className="py-3 px-3.5">Submit formal One-Time offers with hardship proof.</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/70 transition-colors">
                      <td className="py-3 px-3.5 font-bold text-slate-900">Days 91 to 150 (Legal Window).</td>
                      <td className="py-3 px-3.5">Pre-lawsuits reports.</td>
                      <td className="py-3 px-3.5">Section 25 PSSA demand notices. Sole hearing intimations.</td>
                      <td className="py-3 px-3.5">Serve formal legal replies. file Section 12(5) hearing objections.</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/70 transition-colors">
                      <td className="py-3 px-3.5 font-bold text-slate-900">Days 151 to 180+ (OTS Closure).</td>
                      <td className="py-3 px-3.5">OTS deal finalization.</td>
                      <td className="py-3 px-3.5">Final settlement sanction issued or portfolio assignment to ARC.</td>
                      <td className="py-3 px-3.5">Audit sanction letter. pay funds to CBS loan account. obtain NDC.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: SPECIALIZED REAL-WORLD SCENARIOS */}
            <section id="specialized-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs md:text-sm font-bold text-[#1886ff] uppercase tracking-wider">
                <Briefcase className="w-4 h-4 text-[#1886ff]"/>
                <span>Section 10: Practical Case Studies.</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                Case Scenarios: Resolving IDFC FIRST Bank Loan Defaults
              </h2>

              {/* 4 REAL-WORLD SCENARIO CARDS */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wide">
                    1. IDFC FIRST Bank Digital Consumer &amp; Instant App Loans
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed"> Algorithmic instant loans feature rapid automated claims reports upon default. CredSettle unbundles growing app-based processing surcharges. Halts automated calling bots through formal legal representations. Secures deep OTS deal write-offs straight with credit officials. </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wide">
                    2. Salaried Executive Layoffs &amp; Tech Sector Downturns
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed"> Mid-career workers impacted by firm restructuring face severe EMI burdens. By presenting checked termination letters and severance exhaustion records. Our negotiators establish genuine debt stress to secure 50% to 60% main loan waivers on high-ticket loans. </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wide">
                    3. Small Business Proprietorship &amp; Working Capital Collapse
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed"> trade proprietors often use private credit to support operating expenses. When trade supply chains fail. Audited GST filings and banks records show trade closure. This allows multi-tranche OTS deals that insulate own assets. </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wide">
                    4. Bad Debt Portfolio Sale to Asset Reconstruction Companies (ARCs)
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed"> When aged non-performing loans are sold to private asset reconstruction firms under SARFAESI Section 5. CredSettle audits the underlying Deed of Assignment. We settle large write-offs reflecting the steep portfolio acquisition discounts obtained by the purchasing ARC. </p>
                </div>
              </div>
            </section>

            {/* SECTION 11: COMPANY PROFILE COMPONENT */}
            <div id="company-profile" className="scroll-target">
              <CompanySection />
            </div>

            {/* SECTION 12: 10 SYNCHRONIZED FAQS */}
            <section id="frequently-asked-questions" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs md:text-sm font-bold text-[#1886ff] uppercase tracking-wider">
                <HelpCircle className="w-4 h-4 text-[#1886ff]"/>
                <span>Section 12: Direct Knowledge Base.</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                Frequently Asked Questions on IDFC FIRST Bank Loan Settlement
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed"> Authoritative legal and procedural answers to the most common queries regarding IDFC FIRST Bank private loans. online credit facilities. Claims notices. CIBIL desk remediation. </p>

              <div className="space-y-3 pt-2">
                {faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (<div key={index} className="rounded-2xl border border-slate-200/80 bg-white overflow-hidden shadow-xs transition-colors">
                      <button onClick={() => toggleFaq(index)} className="w-full flex items-center justify-between p-4 sm:p-5 text-left text-xs sm:text-sm font-bold text-slate-900 hover:text-[#1886ff] transition-colors gap-3">
                        <span>{faq.q}</span>
                        <ChevronDown className={`w-4 h-4 text-slate-500 flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#1886ff]' : ''}`}/>
                      </button>
                      {isOpen && (<div className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                          {faq.a}
                        </div>)}
                    </div>);
        })}
              </div>
            </section>

            {/* SECTION 13: CITATIONS & OUTBOUND AUTHORITY GRID */}
            <section id="regulatory-sources" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs md:text-sm font-bold text-[#1886ff] uppercase tracking-wider">
                <BookOpen className="w-4 h-4 text-[#1886ff]"/>
                <span>Section 13: Legal Authority &amp; References.</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                Statutory Citations & RBI Regulations for IDFC Borrowers
              </h2>
              <div className="text-xs sm:text-sm text-slate-700 leading-relaxed space-y-2">
                <p> Every settlement petition. Legal notice reply. hearing objection drafted by CredSettle is anchored in authoritative legal acts. RBI rules. court rulings governing the Indian money architecture: </p>
                <ul className="list-disc pl-5 space-y-1 text-slate-600 text-xs">
                  <li>Reserve Bank of India Master Circular on Prudential Norms on Advances. Asset Classification and bank reserves (DOR.No.STR.REC.55/21.04.048/2021-22).</li>
                  <li>Reserve Bank of India Master Direction - Direct Selling Agents and Bank Fair Practices Code on claims agents.</li>
                  <li>Securitisation and Reconstruction of money Assets and Enforcement of pledge rates Act. 2002 (SARFAESI Act Section 31(g) regarding no-pledge loans).</li>
                  <li>hearing and talks Act. 1996 (Section 12(5). Section 21. Supreme Court rulings in Perkins Eastman and TRF Ltd.).</li>
                  <li>Payment and settlement Systems Act. 2007 (Section 25 quasi-penal defense and growing provisions for electronic mandates).</li>
                  <li>Credit Information firms (Regulation) Act. 2005 (CICRA Section 21 claims rectification and data accuracy protocols).</li>
                </ul>
              </div>

              {/* OUTBOUND AUTHORITY BADGES */}
              <div className="pt-2">
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2.5"> formal legal Repositories. </p>
                <div className="flex flex-wrap gap-2">
                  <a href="https://www.rbi.org.in" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-[11px] font-semibold text-slate-700 hover:text-[#1886ff] hover:border-blue-200 transition-colors shadow-2xs">
                    <span>Reserve Bank of India (rbi.org.in).</span>
                    <ExternalLink className="w-3 h-3 text-slate-400"/>
                  </a>
                  <a href="https://cms.rbi.org.in" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-[11px] font-semibold text-slate-700 hover:text-[#1886ff] hover:border-blue-200 transition-colors shadow-2xs">
                    <span>RBI Complaint Management (cms.rbi.org.in).</span>
                    <ExternalLink className="w-3 h-3 text-slate-400"/>
                  </a>
                  <a href="https://www.cibil.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-[11px] font-semibold text-slate-700 hover:text-[#1886ff] hover:border-blue-200 transition-colors shadow-2xs">
                    <span>TransUnion CIBIL India (cibil.com).</span>
                    <ExternalLink className="w-3 h-3 text-slate-400"/>
                  </a>
                  <a href="https://www.indiacode.nic.in" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-[11px] font-semibold text-slate-700 hover:text-[#1886ff] hover:border-blue-200 transition-colors shadow-2xs">
                    <span>India Code Legislative Portal (indiacode.nic.in).</span>
                    <ExternalLink className="w-3 h-3 text-slate-400"/>
                  </a>
                  <a href="https://nalsa.gov.in" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-[11px] font-semibold text-slate-700 hover:text-[#1886ff] hover:border-blue-200 transition-colors shadow-2xs">
                    <span>National Legal Services Authority (nalsa.gov.in).</span>
                    <ExternalLink className="w-3 h-3 text-slate-400"/>
                  </a>
                  <a href="https://cybercrime.gov.in" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-[11px] font-semibold text-slate-700 hover:text-[#1886ff] hover:border-blue-200 transition-colors shadow-2xs">
                    <span>National Cyber Crime Portal (cybercrime.gov.in).</span>
                    <ExternalLink className="w-3 h-3 text-slate-400"/>
                  </a>
                </div>
              </div>

              {/* INTERNAL TOPIC BADGES */}
              <div className="pt-2">
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2.5"> Related Debt relief Topics. </p>
                <div className="flex flex-wrap gap-2">
                  <Link href="/axis-bank-personal-loan-settlement" className="px-2.5 py-1 rounded-md bg-slate-100 text-[11px] font-medium text-slate-700 hover:bg-blue-50 hover:text-[#1886ff] transition-colors">
                    Axis Bank Loan Settlement
                  </Link>
                  <Link href="/icici-bank-personal-loan-settlement" className="px-2.5 py-1 rounded-md bg-slate-100 text-[11px] font-medium text-slate-700 hover:bg-blue-50 hover:text-[#1886ff] transition-colors">
                    ICICI Bank Loan Settlement
                  </Link>
                  <Link href="/kotak-mahindra-bank-loan-settlement" className="px-2.5 py-1 rounded-md bg-slate-100 text-[11px] font-medium text-slate-700 hover:bg-blue-50 hover:text-[#1886ff] transition-colors">
                    Kotak Bank Loan Settlement
                  </Link>
                  <Link href="/sbi-personal-loan-settlement-process" className="px-2.5 py-1 rounded-md bg-slate-100 text-[11px] font-medium text-slate-700 hover:bg-blue-50 hover:text-[#1886ff] transition-colors">
                    SBI Personal Loan Settlement
                  </Link>
                  <Link href="/hdfc-personal-loan-settlement-policy" className="px-2.5 py-1 rounded-md bg-slate-100 text-[11px] font-medium text-slate-700 hover:bg-blue-50 hover:text-[#1886ff] transition-colors">
                    HDFC Bank Loan Settlement
                  </Link>
                  <Link href="/arbitration-notice-personal-loan-default" className="px-2.5 py-1 rounded-md bg-slate-100 text-[11px] font-medium text-slate-700 hover:bg-blue-50 hover:text-[#1886ff] transition-colors">
                    Arbitration Notice Defense
                  </Link>
                  <Link href="/ecs-nach-bounce-legal-notice-section-25" className="px-2.5 py-1 rounded-md bg-slate-100 text-[11px] font-medium text-slate-700 hover:bg-blue-50 hover:text-[#1886ff] transition-colors">
                    Section 25 NACH Bounce Defense
                  </Link>
                  <Link href="/section-138-cheque-bounce-personal-loan" className="px-2.5 py-1 rounded-md bg-slate-100 text-[11px] font-medium text-slate-700 hover:bg-blue-50 hover:text-[#1886ff] transition-colors">
                    Section 138 Cheque Bounce
                  </Link>
                  <Link href="/lok-adalat-personal-loan-settlement" className="px-2.5 py-1 rounded-md bg-slate-100 text-[11px] font-medium text-slate-700 hover:bg-blue-50 hover:text-[#1886ff] transition-colors">
                    Lok Adalat Loan Settlement
                  </Link>
                  <Link href="/convert-settled-status-to-closed" className="px-2.5 py-1 rounded-md bg-slate-100 text-[11px] font-medium text-slate-700 hover:bg-blue-50 hover:text-[#1886ff] transition-colors">
                    Convert Settled to Closed CIBIL
                  </Link>
                </div>
              </div>
            </section>

          </div>

          {/* ================= RIGHT COLUMN: STICKY SIDEBAR ================= */}
          <aside className="sticky top-6 space-y-5">
            
            {/* 1. AUTHOR BIO CARD */}
            <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs p-5 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#1886ff]/10 text-[#1886ff] flex items-center justify-center font-bold text-lg border border-[#1886ff]/20">
                  AJ
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">Ashish Jhangra</p>
                  <p className="text-[11px] font-semibold text-[#1886ff]"> Legal &amp. Debt relief expert. </p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed"> Specialist in stressed asset talks. Clients banking protections. Banking claims lawsuits before RBI Ombudsmen and bank boards across India. </p>
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <span>Verified Legal Author.</span>
                <span className="text-emerald-600 font-bold flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5"/> CredSettle Panel.
                </span>
              </div>
            </div>

            {/* 2. EMERGENCY CTA CARD (#2452ae Background) */}
            <div className="rounded-2xl text-white p-5 space-y-4 shadow-md relative overflow-hidden" style={{ backgroundColor: '#2452ae' }}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-10 -mt-10 pointer-events-none"/>
              
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/15 text-blue-100 text-[10px] font-bold uppercase tracking-wider">
                <BadgeAlert className="w-3 h-3 text-amber-300"/>
                <span>Urgent Recovery Defense.</span>
              </div>

              <p className="text-base font-extrabold leading-snug"> Receiving IDFC Legal Notices or Telecaller Threats? </p>

              <p className="text-xs text-white/90 leading-relaxed font-normal"> Speak straight with senior debt settlement negotiators. Halt claims abuse. Claims unilateral hearing. And secure an formal OTS waiver before court filings. </p>

              <div className="space-y-2.5 pt-1">
                <a href="tel:+918800226635" className="w-full py-2.5 px-4 rounded-xl bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-xs flex items-center justify-center gap-2 hover:bg-slate-50 transition-colors shadow-sm">
                  <Phone className="w-3.5 h-3.5"/>
                  <span>Call Now: +91-8800226635.</span>
                </a>

                <Link href="/contact" className="w-full py-2.5 px-4 rounded-xl bg-blue-700/80 hover:bg-blue-700 text-white font-bold text-xs flex items-center justify-center gap-2 border border-blue-400/40 transition-colors">
                  <span>Request Free Legal Evaluation.</span>
                  <ArrowRight className="w-3.5 h-3.5"/>
                </Link>
              </div>

              <div className="flex items-center justify-center gap-2 text-[10px] text-blue-200/90 pt-1">
                <Lock className="w-3 h-3"/>
                <span>100% Confidential &amp; Legally Protected.</span>
              </div>
            </div>

            {/* 3. TRUST BADGES CARD */}
            <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs p-4 space-y-3">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block border-b border-slate-100 pb-2">
                CredSettle Institutional Benchmarks.
              </span>

              <div className="space-y-2.5 text-xs">
                <div className="flex items-center gap-2.5 text-slate-700">
                  <Award className="w-4 h-4 text-emerald-600 flex-shrink-0"/>
                  <span><strong>5,000+</strong> Successful Debt Settlements.</span>
                </div>
                <div className="flex items-center gap-2.5 text-slate-700">
                  <ShieldCheck className="w-4 h-4 text-[#1886ff] flex-shrink-0"/>
                  <span><strong>₹150+ Crores</strong> Debt Resolved</span>
                </div>
                <div className="flex items-center gap-2.5 text-slate-700">
                  <Landmark className="w-4 h-4 text-purple-600 flex-shrink-0"/>
                  <span><strong>40% to 60%</strong> Principal Haircut Concession.</span>
                </div>
                <div className="flex items-center gap-2.5 text-slate-700">
                  <UserCheck className="w-4 h-4 text-amber-600 flex-shrink-0"/>
                  <span><strong>100%</strong> Authentic Bank No Dues Certificates.</span>
                </div>
              </div>
            </div>

            {/* 4. RELATED GUIDES */}
            <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs p-4 space-y-2.5">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block border-b border-slate-100 pb-2">
                Popular Bank Settlement Guides.
              </span>
              <ul className="space-y-2 text-xs text-slate-600">
                <li> <Link href="/axis-bank-personal-loan-settlement" className="hover:text-[#1886ff] font-medium flex items-center justify-between"> <span>Axis Bank private loans.</span> <ArrowRight className="w-3 h-3 text-slate-400"/> </Link> </li>
                <li> <Link href="/icici-bank-personal-loan-settlement" className="hover:text-[#1886ff] font-medium flex items-center justify-between"> <span>ICICI Bank private loans.</span> <ArrowRight className="w-3 h-3 text-slate-400"/> </Link> </li>
                <li> <Link href="/kotak-mahindra-bank-loan-settlement" className="hover:text-[#1886ff] font-medium flex items-center justify-between"> <span>Kotak Mahindra Bank Loan.</span> <ArrowRight className="w-3 h-3 text-slate-400"/> </Link> </li>
                <li> <Link href="/sbi-personal-loan-settlement-process" className="hover:text-[#1886ff] font-medium flex items-center justify-between"> <span>SBI Rinn Samadhan OTS.</span> <ArrowRight className="w-3 h-3 text-slate-400"/> </Link> </li>
                <li> <Link href="/hdfc-personal-loan-settlement-policy" className="hover:text-[#1886ff] font-medium flex items-center justify-between"> <span>HDFC Bank Loan settlement.</span> <ArrowRight className="w-3 h-3 text-slate-400"/> </Link> </li>
              </ul>
            </div>

          </aside>

        </div>
      </div>
    </main>);
}
