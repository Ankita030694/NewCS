'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import StatsStrip from '@/components/StatsStrip';
import CompanySection from '@/components/CompanySection';
import {
  ChevronDown,
  Scale,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  FileText,
  HelpCircle,
  TrendingUp,
  Award,
  BookOpen,
  Building2,
  DollarSign,
  Check,
  Lock,
  Phone,
  AlertCircle,
  CreditCard,
  Briefcase,
  Bookmark,
  ArrowRight,
  Clock,
  UserCheck,
  Sparkles,
  Gavel,
  BadgeAlert,
  Landmark
} from 'lucide-react';

export default function IdfcFirstBankLoanSettlementClient() {
  const [activeId, setActiveId] = useState<string>('quick-crux');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-100px 0px -40% 0px',
        threshold: 0.05
      }
    );

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
      a: 'IDFC FIRST Bank administers loan settlement through its Retail Stressed Asset Management Division under RBI compromise guidelines. When borrowers face involuntary financial distress such as job termination, business insolvency, or catastrophic medical expenses, the bank considers structured One-Time Settlements (OTS) involving complete waivers of penal levies and substantial principal write-offs.'
    },
    {
      q: 'How does IDFC FIRST Bank handle delinquent digital consumer and consumer durable loans?',
      a: 'Delinquent digital loans and consumer durable financing originate via automated algorithmic underwriting and e-mandates. In early default, automated notifications and telecalling agencies handle recovery. Once delinquency surpasses 90 days (NPA), IDFC FIRST Bank transfers files to its Special Recoveries desk, where micro-exposures are evaluated for bulk or bilateral compromise settlements.'
    },
    {
      q: 'What percentage of waiver can be negotiated on an IDFC FIRST Bank personal loan?',
      a: 'Borrowers consistently secure a 100% complete waiver on accrued penal interest, late payment surcharges, and NACH bounce fees. On the verified unamortized principal balance, IDFC FIRST Bank routinely sanctions haircuts ranging between 40% and 60%, heavily influenced by the delinquency vintage, documented insolvency evidence, and legal posture.'
    },
    {
      q: 'How should I respond to digital legal notices and e-summons sent via WhatsApp or email by IDFC FIRST Bank?',
      a: 'Digital notices and e-summons sent via WhatsApp or email must be formally examined rather than ignored. Many digital notices originate from third-party recovery vendors using automated legal templates. A formal legal reply issued by debt resolution professionals establishes genuine financial hardship, disputes arbitrary penal additions, and channels communication away from informal threats toward structured settlement channels.'
    },
    {
      q: 'How can I stop aggressive recovery agents and doorstep collection visits from IDFC FIRST Bank?',
      a: "Unlawful recovery harassment violates the Reserve Bank of India Fair Practices Code. Borrowers can stop aggressive telecalling and unannounced home visits by serving a formal legal representation to IDFC FIRST Bank's Principal Nodal Officer and Circle Stressed Asset desk, asserting borrower rights and demanding bilateral resolution through authorized bank officers."
    },
    {
      q: 'What steps should be taken if IDFC FIRST Bank initiates sole arbitration or digital dispute resolution?',
      a: 'IDFC FIRST Bank loan agreements often specify sole arbitration or digital dispute resolution (ODR). Under Supreme Court rulings in Perkins Eastman and TRF Limited, unilateral arbitrator appointments by lenders are void ab initio. Borrowers must file formal jurisdictional objections under Section 12(5) of the Arbitration and Conciliation Act, halting proceedings and compelling the bank toward mutual compromise.'
    },
    {
      q: 'How does CredSettle defend against Section 25 PSSA notices for IDFC FIRST Bank NACH bounces?',
      a: 'When monthly e-mandates bounce due to insufficient funds, lenders issue statutory notices under Section 25 of the Payment and Settlement Systems Act. Our legal team issues an authoritative reply establishing the absence of fraudulent intent, explaining bona fide liquidity failure, and submitting an immediate proposal for One-Time Settlement before magistrate filings can occur.'
    },
    {
      q: 'What critical terms must be verified in an official IDFC FIRST Bank settlement sanction letter?',
      a: 'An authentic IDFC FIRST Bank settlement sanction letter must be issued on official bank letterhead, originate from an authorized corporate email domain (@idfcfirstbank.com), specify the precise loan account number, clearly state the agreed settlement sum and tranche payment schedule, and contain explicit commitments to withdraw legal proceedings and issue a No Dues Certificate.'
    },
    {
      q: 'What is the impact of an IDFC FIRST Bank settlement on my CIBIL score and credit profile?',
      a: 'Concluding a loan settlement causes IDFC FIRST Bank to report the account as "Settled" with zero outstanding balance to TransUnion CIBIL and other credit bureaus. While this mark lowers credit scores initially, it permanently halts compounding negative monthly defaults. Borrowers can restore a 750+ score within 18 to 24 months through disciplined credit rebuilding or seek status conversion under Section 21 of CICRA.'
    },
    {
      q: 'How long does it take to receive the official No Dues Certificate from IDFC FIRST Bank?',
      a: 'After the full settlement amount is remitted directly into the IDFC FIRST Bank loan account, the bank processes internal write-offs across its Core Banking System (CBS). In compliance with Reserve Bank of India directives, IDFC FIRST Bank must issue the official No Dues Certificate (NDC) and account closure confirmation within 30 to 45 business days.'
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-[#1886ff] selection:text-white">
      {/* 1. HERO SECTION (#2452ae Background) */}
      <section
        className="relative text-white pt-14 pb-10 md:pt-18 md:pb-12 px-4 md:px-8 overflow-hidden flex items-center justify-center text-center"
        style={{ backgroundColor: '#2452ae' }}
      >
        <div className="absolute inset-0 bg-black/5 z-0 pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center z-10 relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-blue-200 text-xs font-semibold mb-3">
            <Landmark className="w-3.5 h-3.5" />
            <span>Institutional IDFC FIRST Bank Stressed Asset Resolution Framework</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            IDFC FIRST Bank Loan Settlement Process
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            Institutional legal strategy for resolving delinquent IDFC FIRST Bank retail personal loans and digital consumer facilities. Learn how to counter automated digital legal notices, neutralize sole arbitration proceedings, eliminate compounding penal charges, and negotiate up to 60% debt write-offs with an authentic No Dues Certificate.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Facing IDFC Loan Default? Request Settlement Evaluation</span>
              <ArrowRight className="w-4 h-4" />
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
                <BookOpen className="w-4 h-4 text-[#1886ff]" />
                <span className="text-xs font-black uppercase tracking-wider text-slate-800">
                  Table of Contents
                </span>
              </div>
              <nav className="space-y-1 max-h-[calc(100vh-140px)] overflow-y-auto pr-1 text-xs">
                {navLinks.map((link) => {
                  const isActive = activeId === link.id;
                  return (
                    <a
                      key={link.id}
                      href={`#${link.id}`}
                      className={`block py-1.5 px-2.5 rounded-lg transition-all duration-150 leading-snug ${
                        isActive
                          ? 'bg-blue-50 text-[#1886ff] font-bold border-l-3 border-[#1886ff] pl-2'
                          : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50 font-medium'
                      }`}
                    >
                      {link.label}
                    </a>
                  );
                })}
              </nav>

              <div className="mt-4 pt-3 border-t border-slate-100 bg-blue-50/50 -mx-4 -mb-4 p-3 rounded-b-2xl">
                <div className="flex items-center gap-2 text-[11px] font-bold text-slate-800">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  <span>Institutional Defense</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Governed by Reserve Bank of India Prudential Guidelines, Master Directions on Advances, and Fair Practices Code.
                </p>
              </div>
            </div>
          </aside>

          {/* ================= MIDDLE COLUMN: MAIN EDITORIAL CONTENT ================= */}
          <div className="space-y-8 md:space-y-10 min-w-0">
            
            {/* EXECUTIVE SUMMARY BOX (#F4F8FE Box) */}
            <div
              id="quick-crux"
              className="scroll-target rounded-2xl bg-[#F4F8FE] border border-blue-100/90 border-l-[5px] border-l-[#1886ff] p-5 sm:p-6 md:p-7 shadow-xs space-y-4 text-slate-800"
            >
              <div className="flex items-center gap-2 text-xs md:text-sm font-black uppercase tracking-wider text-[#1886ff]">
                <Bookmark className="w-4 h-4 text-[#1886ff]" />
                <span>EXECUTIVE BRIEF: IDFC FIRST BANK LOAN SETTLEMENT CRUX</span>
              </div>

              <ul className="space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start sm:items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <p className="text-slate-700">
                    <strong className="text-slate-900 font-bold">Institutional Jurisdiction:</strong> Settled through IDFC Stressed Assets desk past 90 days default.
                  </p>
                </li>

                <li className="flex items-start sm:items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <p className="text-slate-700">
                    <strong className="text-slate-900 font-bold">Unsecured Immunity:</strong> No asset mortgage rights under SARFAESI Act Section 31(g).
                  </p>
                </li>

                <li className="flex items-start sm:items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <p className="text-slate-700">
                    <strong className="text-slate-900 font-bold">100% Surcharge Waiver:</strong> Full elimination of compounding penal interest, bounce fees &amp; GST.
                  </p>
                </li>

                <li className="flex items-start sm:items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <p className="text-slate-700">
                    <strong className="text-slate-900 font-bold">Principal Haircut Target:</strong> 40% to 60% write-offs negotiated on core unamortized balance.
                  </p>
                </li>

                <li className="flex items-start sm:items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <p className="text-slate-700">
                    <strong className="text-slate-900 font-bold">Digital Notice Shield:</strong> Automated WhatsApp summons &amp; notices defused via formal legal reply.
                  </p>
                </li>

                <li className="flex items-start sm:items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <p className="text-slate-700">
                    <strong className="text-slate-900 font-bold">Arbitration Protection:</strong> Unilateral arbitrator appointments countered under Perkins Eastman.
                  </p>
                </li>

                <li className="flex items-start sm:items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <p className="text-slate-700">
                    <strong className="text-slate-900 font-bold">Section 25 PSSA Defense:</strong> E-mandate dishonors channeled into binding compromise settlements.
                  </p>
                </li>

                <li className="flex items-start sm:items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <p className="text-slate-700">
                    <strong className="text-slate-900 font-bold">Statutory Account Closure:</strong> Direct CBS remittance followed by authentic NDC within 30-45 days.
                  </p>
                </li>
              </ul>
            </div>

            {/* SECTION 1: DEBT ECONOMICS & NPA DYNAMICS */}
            <section id="npa-dynamics" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs md:text-sm font-bold text-[#1886ff] uppercase tracking-wider">
                <Landmark className="w-4 h-4 text-[#1886ff]" />
                <span>Section 1: Banking Economics &amp; Regulatory Architecture</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                IDFC FIRST Bank Debt Economics and NPA Classification Dynamics
              </h2>
              <div className="text-xs sm:text-sm text-slate-700 leading-relaxed space-y-3">
                <p>
                  IDFC FIRST Bank has expanded aggressively into retail unsecured credit, originating thousands of consumer durable loans, digital app credit lines, and high-ticket personal loans across India. When unexpected life circumstances, corporate downsizing, or severe business downturns disrupt a borrower&apos;s monthly cashflow, the loan transitions sequentially through regulatory delinquency brackets. During the initial thirty days of default, the account is designated as Special Mention Account Zero (SMA-0), progressing to SMA-1 between thirty-one and sixty days, and reaching SMA-2 between sixty-one and ninety days. Throughout these initial ninety days, the bank deploys high-frequency automated reminders, digital payment links, and intensive telecalling through third-party collection agencies.
                </p>
                <p>
                  Once an unsecured personal loan crosses the critical ninety-day continuous default threshold, Reserve Bank of India prudential regulations mandate that IDFC FIRST Bank classify the asset as a Gross Non-Performing Asset (NPA). This regulatory classification triggers significant financial pressure for the institution. Under RBI provisioning guidelines, the bank must set aside substantial Tier-1 capital reserves against the delinquent balance, directly eroding its reported quarterly profitability and capital adequacy ratios. Crucially, because retail personal loans and digital facilities are entirely unsecured, Section 31(g) of the SARFAESI Act explicitly bars the bank from initiating summary asset auctions, home seizures, or property attachments without protracted civil litigation. Recognizing that prolonged legal recovery in civil courts often takes five to seven years with exorbitant legal overhead, IDFC FIRST Bank&apos;s Retail Stressed Asset Management division operates under clear commercial mandates to negotiate pragmatic One-Time Settlements (OTS), enabling the bank to recover substantial capital while purging bad debt from its balance sheet.
                </p>
              </div>
            </section>

            {/* SECTION 2: FINANCIAL BREAKDOWN & SETTLEMENT MATH */}
            <section id="settlement-math" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs md:text-sm font-bold text-[#1886ff] uppercase tracking-wider">
                <DollarSign className="w-4 h-4 text-[#1886ff]" />
                <span>Section 2: Forensic Ledger Analysis</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                Financial Breakdown and Settlement Mathematical Formulation
              </h2>
              <div className="text-xs sm:text-sm text-slate-700 leading-relaxed space-y-3">
                <p>
                  When an IDFC FIRST Bank loan enters extended delinquency, the gross outstanding balance cited by recovery telecallers rapidly becomes distorted. Lenders automatically superimpose annualized compounding penal interest rates ranging from twenty-four to thirty-six percent, recurring NACH dishonor charges of ₹450 to ₹590 per cycle, legal administration fees, and an eighteen percent Goods and Services Tax on every levied surcharge. Over four to six months of non-payment, these compounding add-ons can easily represent twenty-five to thirty-five percent of the entire ledger claim, creating an artificial barrier to debt resolution.
                </p>
                <p>
                  Institutional debt negotiation begins with an uncompromising forensic audit of the loan ledger. CredSettle isolates the core unamortized principal balance by extracting all non-statutory penal charges, bounce fees, and accrued surcharge interest. Under IDFC FIRST Bank&apos;s established compromise settlement framework, credit committees routinely grant a mandatory 100% waiver on all penal and administrative surcharges once bona fide financial distress is substantiated. Furthermore, depending on the vintage of the NPA and the borrower&apos;s verified insolvency, the bank sanctions an unamortized principal haircut between 40% and 60%, establishing a realistic single-tranche or structured multi-part compromise figure.
                </p>
              </div>

              {/* REPRESENTATIVE MATHEMATICAL CALCULATION CARD */}
              <div className="rounded-2xl border border-slate-200/80 bg-white p-5 sm:p-6 shadow-xs space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Representative Forensic Audit: ₹8,50,000 Delinquent IDFC Personal Loan
                  </span>
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-blue-50 text-[#1886ff]">
                    180-Day NPA Vintage
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                    <p className="text-[11px] font-semibold text-slate-500 uppercase">Gross Bank Claim</p>
                    <p className="text-lg sm:text-xl font-extrabold text-red-600 mt-1">₹8,50,000</p>
                    <p className="text-[10px] text-slate-500 mt-0.5">Includes penal interest &amp; bounce fees</p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                    <p className="text-[11px] font-semibold text-slate-500 uppercase">Penal Surcharges Stripped</p>
                    <p className="text-lg sm:text-xl font-extrabold text-emerald-600 mt-1">₹2,10,000</p>
                    <p className="text-[10px] text-slate-500 mt-0.5">100% full institutional waiver</p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                    <p className="text-[11px] font-semibold text-slate-500 uppercase">Core Unamortized Principal</p>
                    <p className="text-lg sm:text-xl font-extrabold text-slate-800 mt-1">₹6,40,000</p>
                    <p className="text-[10px] text-slate-500 mt-0.5">Verified baseline exposure</p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-blue-50/70 border border-blue-200/60">
                    <p className="text-[11px] font-semibold text-[#1886ff] uppercase">Sanctioned OTS Figure</p>
                    <p className="text-lg sm:text-xl font-extrabold text-[#1886ff] mt-1">₹3,20,000</p>
                    <p className="text-[10px] text-blue-700 font-medium mt-0.5">50% principal haircut (62% total relief)</p>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 3: 4-SIDED BORDERED COMPARISON MATRIX */}
            <section id="comparison-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs md:text-sm font-bold text-[#1886ff] uppercase tracking-wider">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Section 3: Strategic Evaluation</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                Resolution Pathways Comparison: OTS versus Alternate Mechanisms
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                When borrowers experience severe debt distress on IDFC FIRST Bank personal loans, they are frequently presented with confusing alternatives ranging from tenure extensions to court appearances. Loan restructuring appears attractive initially but actually increases aggregate interest burdens without granting any principal relief. Conversely, unresolved defaults trigger aggressive digital summons, potential criminal complaints under payment statutes, and eventual debt assignment to private asset recovery entities. The comprehensive comparative matrix below objectively contrasts the legal, financial, and credit implications across every available resolution pathway.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto shadow-xs bg-white">
                <table className="w-full text-left text-xs border-collapse divide-y divide-slate-200/80">
                  <thead className="bg-slate-50 text-slate-700 font-bold uppercase tracking-wider text-[11px]">
                    <tr className="divide-x divide-slate-200/80">
                      <th className="py-3 px-3.5">Resolution Route</th>
                      <th className="py-3 px-3.5">Waiver Potential</th>
                      <th className="py-3 px-3.5">Settlement Timeline</th>
                      <th className="py-3 px-3.5">Legal Immunity</th>
                      <th className="py-3 px-3.5">Credit Impact</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-700">
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/70 transition-colors">
                      <td className="py-3 px-3.5 font-bold text-slate-900">One-Time Settlement (OTS)</td>
                      <td className="py-3 px-3.5 text-emerald-600 font-semibold">100% penal + 40% to 60% principal write-off</td>
                      <td className="py-3 px-3.5">45 to 90 days</td>
                      <td className="py-3 px-3.5">Complete withdrawal of all notices, suits &amp; ODR claims</td>
                      <td className="py-3 px-3.5">Reported as Settled; rebuildable in 18-24 mos</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/70 transition-colors">
                      <td className="py-3 px-3.5 font-bold text-slate-900">Tenure Restructuring</td>
                      <td className="py-3 px-3.5 text-red-600 font-semibold">0% waiver; higher overall interest liability</td>
                      <td className="py-3 px-3.5">2 to 4 extended years</td>
                      <td className="py-3 px-3.5">Conditional upon strict monthly EMI compliance</td>
                      <td className="py-3 px-3.5">Marked as Restructured; score suppresses</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/70 transition-colors">
                      <td className="py-3 px-3.5 font-bold text-slate-900">Civil Court Litigation</td>
                      <td className="py-3 px-3.5 text-amber-600 font-semibold">Determined by court decree; high advocate fees</td>
                      <td className="py-3 px-3.5">3 to 7 years</td>
                      <td className="py-3 px-3.5">Prolonged court summons, hearings &amp; warrants</td>
                      <td className="py-3 px-3.5">Severe derogatory suit-filed bureau records</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/70 transition-colors">
                      <td className="py-3 px-3.5 font-bold text-slate-900">National Lok Adalat</td>
                      <td className="py-3 px-3.5 text-blue-600 font-semibold">Full penal waiver + 20% to 35% principal cut</td>
                      <td className="py-3 px-3.5">Quarterly sittings</td>
                      <td className="py-3 px-3.5">Final decree under Legal Services Authorities Act</td>
                      <td className="py-3 px-3.5">Reported as Settled under Lok Adalat</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/70 transition-colors">
                      <td className="py-3 px-3.5 font-bold text-slate-900">Inaction &amp; Default Neglect</td>
                      <td className="py-3 px-3.5 text-red-700 font-semibold">0% waiver; runaway compounding debt ballooning</td>
                      <td className="py-3 px-3.5">Indefinite harassment</td>
                      <td className="py-3 px-3.5">Sec. 25 PSSA, Sec. 138 NI Act &amp; ARC assignment</td>
                      <td className="py-3 px-3.5">CIBIL plunges below 600; complete credit freeze</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 4: TECHNICAL CIBIL ALGORITHM & SCORING MATH */}
            <section id="cibil-impact" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs md:text-sm font-bold text-[#1886ff] uppercase tracking-wider">
                <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                <span>Section 4: Credit Architecture</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                Technical CIBIL Algorithm Breakdown and Section 21 CICRA Remediation
              </h2>
              <div className="text-xs sm:text-sm text-slate-700 leading-relaxed space-y-3">
                <p>
                  Credit information companies including TransUnion CIBIL, Experian, CRIF High Mark, and Equifax compute credit scores using proprietary mathematical models governed by five primary parameters. Payment history commands the single largest influence at 35%, followed by credit exposure and utilization at 30%, credit vintage and duration at 15%, credit mix between secured and unsecured debt at 10%, and recent credit inquiries at 10%. When consecutive monthly installments on an IDFC FIRST Bank personal loan are missed, the reporting algorithm logs negative Days Past Due (DPD) entries each month, leading to a steep eighty to one hundred and thirty point plunge in the borrower&apos;s credit score.
                </p>
                <p>
                  Executing an authorized One-Time Settlement fundamentally alters this negative reporting trajectory. Upon receipt of the settlement remittance, IDFC FIRST Bank updates credit bureau databases to reflect a &quot;Settled&quot; status with zero current outstanding liability. While a &quot;Settled&quot; notation indicates that the lender accepted a concession, it immediately halts monthly compounding default marks and eliminates active delinquency flags. Borrowers can methodically reconstruct a prime 750+ CIBIL score within eighteen to twenty-four months by maintaining a low-utilization secured credit card backed by a fixed deposit. Additionally, under Section 21 of the Credit Information Companies (Regulation) Act, 2005 (CICRA), borrowers retain the statutory right to petition credit bureaus for dispute resolution and file requests to update records to &quot;Closed&quot; upon voluntarily settling residual haircut balances at a subsequent date.
                </p>
              </div>
            </section>

            {/* SECTION 5: VISUAL INFOGRAPHIC ASSET CARD */}
            <section id="infographic-overview" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs md:text-sm font-bold text-[#1886ff] uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-[#1886ff]" />
                <span>Section 5: Procedural Blueprint</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                IDFC FIRST Bank Loan Settlement Institutional Roadmap
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                The visual framework below summarizes CredSettle&apos;s rigorous institutional methodology for resolving delinquent IDFC FIRST Bank personal loans, neutralizing digital summons, preventing coercive debt collection, and securing fully authorized compromise settlement letters with verified bank releases.
              </p>

              <div className="rounded-2xl border border-slate-200/80 bg-white p-3 sm:p-4 shadow-xs overflow-hidden">
                <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-slate-900">
                  <Image
                    src="/images/infographics/idfc-first-bank-loan-settlement.jpg"
                    alt="IDFC FIRST Bank Personal Loan Settlement Procedure and Resolution Blueprint"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 1200px) 100vw, 1200px"
                  />
                </div>
                <div className="flex items-center justify-between pt-3 px-1">
                  <span className="text-[11px] text-slate-500 font-medium">
                    Figure 1: CredSettle 6-Stage Institutional Settlement Blueprint for IDFC FIRST Bank
                  </span>
                  <a
                    href="/images/infographics/idfc-first-bank-loan-settlement.jpg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#1886ff] hover:underline"
                  >
                    <span>View High-Res</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </section>

            {/* SECTION 6: STEP-BY-STEP SOP (6 STAGES) */}
            <section id="step-by-step-sop" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs md:text-sm font-bold text-[#1886ff] uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4 text-[#1886ff]" />
                <span>Section 6: Standard Operating Procedure</span>
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
                  <p className="text-slate-600 pl-8 leading-relaxed">
                    Our financial analysts dissect your IDFC FIRST Bank statement of account and loan agreement. We extract all compounding penal interest, automated NACH bounce penalties, processing fees, and associated taxes, determining the true unamortized principal baseline required for institutional negotiations.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900">
                    <span className="w-6 h-6 rounded-full bg-[#1886ff] text-white flex items-center justify-center text-xs">2</span>
                    <h3 className="text-sm font-bold">Stage 2: Comprehensive Hardship Dossier Compilation</h3>
                  </div>
                  <p className="text-slate-600 pl-8 leading-relaxed">
                    We assemble substantiated documentation proving genuine involuntary insolvency. This dossier includes official corporate layoff letters, medical hospitalization bills, or audited business loss records, constructing an unassailable hardship brief that establishes absence of willful default before bank authorities.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900">
                    <span className="w-6 h-6 rounded-full bg-[#1886ff] text-white flex items-center justify-center text-xs">3</span>
                    <h3 className="text-sm font-bold">Stage 3: Special Recoveries &amp; Credit Committee Representation</h3>
                  </div>
                  <p className="text-slate-600 pl-8 leading-relaxed">
                    We bypass third-party collection telecallers and direct formal legal representations to IDFC FIRST Bank&apos;s Retail Stressed Asset Management division and Principal Nodal Officer. This formal invocation asserts borrower protections under RBI circulars and halts unauthorized collection harassment.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900">
                    <span className="w-6 h-6 rounded-full bg-[#1886ff] text-white flex items-center justify-center text-xs">4</span>
                    <h3 className="text-sm font-bold">Stage 4: Bilateral Compromise Negotiations &amp; Haircut Structuring</h3>
                  </div>
                  <p className="text-slate-600 pl-8 leading-relaxed">
                    Our senior debt negotiators engage circle credit committees to structure optimal compromise terms. We secure an absolute 100% waiver on all penal surcharges and negotiate a 40% to 60% principal write-off, structuring payments across an affordable lump-sum or structured multi-month tranches.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900">
                    <span className="w-6 h-6 rounded-full bg-[#1886ff] text-white flex items-center justify-center text-xs">5</span>
                    <h3 className="text-sm font-bold">Stage 5: Settlement Sanction Letter Legal Vetting</h3>
                  </div>
                  <p className="text-slate-600 pl-8 leading-relaxed">
                    Our legal counsel conducts exhaustive verification of the official settlement letter issued on IDFC FIRST Bank letterhead. We verify corporate email origins, exact account numbers, agreed compromise amounts, payment schedules, and clear undertakings to withdraw all pending legal notices and arbitration claims.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900">
                    <span className="w-6 h-6 rounded-full bg-[#1886ff] text-white flex items-center justify-center text-xs">6</span>
                    <h3 className="text-sm font-bold">Stage 6: CBS Loan Remittance, Zeroing, and Official NDC</h3>
                  </div>
                  <p className="text-slate-600 pl-8 leading-relaxed">
                    The settlement funds are remitted directly into your IDFC FIRST Bank loan account through official banking channels. We monitor Core Banking System ledger zeroing and ensure receipt of your official No Dues Certificate within thirty to forty-five business days in compliance with RBI guidelines.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: STATUTORY NOTICE DEFENSE & LEGAL RIGHTS */}
            <section id="statutory-defense" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs md:text-sm font-bold text-[#1886ff] uppercase tracking-wider">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>Section 7: Statutory Protections</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                Statutory Notice Defense and Legal Rights under Indian Law
              </h2>
              <div className="text-xs sm:text-sm text-slate-700 leading-relaxed space-y-3">
                <p>
                  Defaulting on an unsecured personal loan or digital credit facility in India is strictly a civil dispute arising from breach of contract, rather than a criminal offense. Despite aggressive posturing by collection agencies, financial hardship does not constitute willful default or financial fraud under Indian jurisprudence. Borrowers enjoy robust statutory defenses against arbitrary demands, unauthorized home visits, and automated digital intimidation.
                </p>
                <p>
                  When IDFC FIRST Bank or its outsourced legal representatives issue statutory notices or digital summons, timely and authoritative legal intervention is critical. Formally responding through qualified debt resolution professionals establishes a matter of record regarding the borrower&apos;s genuine financial incapacity, counters procedural irregularities, and immediately shifts the engagement away from adversarial litigation into structured institutional compromise discussions.
                </p>
              </div>

              {/* 4-CARD ANALYTICAL GRID */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900">
                    <ShieldCheck className="w-4 h-4 text-[#1886ff]" />
                    <h3 className="text-xs font-bold uppercase tracking-wide">Section 25 PSSA (NACH / E-Mandate Bounce)</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Automated electronic mandate returns trigger statutory demand notices under Section 25 of the Payment and Settlement Systems Act, 2007. We issue comprehensive legal replies establishing lack of fraudulent intent, citing bona fide liquidity collapse, and demonstrating readiness to execute an amicable compromise settlement before any magistrate complaint is filed.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900">
                    <AlertCircle className="w-4 h-4 text-[#1886ff]" />
                    <h3 className="text-xs font-bold uppercase tracking-wide">Section 138 Negotiable Instruments Act</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Where physical security cheques are deposited and dishonored, lenders issue fifteen-day statutory demand notices. Our formal replies rebut statutory presumptions under Section 139 by proving instruments were held solely as conditional security rather than for discharge of legally enforceable current debt, facilitating pre-trial compromise.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900">
                    <Gavel className="w-4 h-4 text-[#1886ff]" />
                    <h3 className="text-xs font-bold uppercase tracking-wide">Sole Arbitration &amp; ODR under Section 21 &amp; Section 12(5)</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    IDFC FIRST Bank frequently invokes online dispute resolution or sole arbitration. Under landmark Supreme Court rulings in <em>Perkins Eastman Architects DPC v. HSCC (India) Ltd.</em> and <em>TRF Ltd. v. Energo Engineering Projects Ltd.</em>, unilateral arbitrator appointments by lenders are void ab initio. We file Section 12(5) objections, halting proceedings and compelling mutual settlement.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900">
                    <Scale className="w-4 h-4 text-[#1886ff]" />
                    <h3 className="text-xs font-bold uppercase tracking-wide">DRT Section 19 &amp; RBI Fair Practices Code</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Debt Recovery Tribunal (DRT) filings require claims exceeding ₹20 Lakhs under the Recovery of Debts and Bankruptcy Act. Simultaneously, RBI Fair Practices Code strictly prohibits recovery agent contact before 8 AM or after 7 PM, threats to family, public humiliation, or workplace intrusions, establishing immediate grounds for regulatory complaints.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 8: 3-TIER GRIEVANCE & ESCALATION MATRIX */}
            <section id="escalation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs md:text-sm font-bold text-[#1886ff] uppercase tracking-wider">
                <BadgeAlert className="w-4 h-4 text-[#1886ff]" />
                <span>Section 8: Regulatory Redressal</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                Three-Tier Institutional Grievance and Escalation Matrix
              </h2>
              <div className="text-xs sm:text-sm text-slate-700 leading-relaxed space-y-3">
                <p>
                  Borrowers encountering unauthorized collection tactics, excessive penal interest calculations, or refusal to engage in legitimate compromise negotiations can utilize the Reserve Bank of India&apos;s structured three-tier grievance hierarchy to secure accountability:
                </p>
                <p>
                  <strong>Level 1: Grievance Redressal Officer (GRO):</strong> The initial formal complaint is registered directly with IDFC FIRST Bank&apos;s designated Grievance Redressal Officer. Under banking service standards, the GRO must investigate the operational irregularity and provide a documented resolution within seven to ten business days.
                </p>
                <p>
                  <strong>Level 2: Principal Nodal Officer (PNO):</strong> If the initial response is inadequate or the timeline lapses without redress, the dispute escalates to IDFC FIRST Bank&apos;s Principal Nodal Officer. The PNO possesses executive authority to intervene in collection practices, halt agency harassment, and direct stressed asset committees to examine settlement proposals within fourteen to twenty-one business days.
                </p>
                <p>
                  <strong>Level 3: Reserve Bank of India Ombudsman:</strong> If thirty days elapse without satisfactory resolution, a statutory complaint is lodged on the RBI Complaint Management System (cms.rbi.org.in). Operating under the Reserve Bank - Integrated Ombudsman Scheme, 2021, the Ombudsman exercises statutory powers to penalize procedural violations and facilitate equitable financial settlements.
                </p>
              </div>
            </section>

            {/* SECTION 9: CHRONOLOGICAL TIMELINE TABLE */}
            <section id="chronological-timeline" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs md:text-sm font-bold text-[#1886ff] uppercase tracking-wider">
                <Clock className="w-4 h-4 text-[#1886ff]" />
                <span>Section 9: Procedural Milestones</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                Chronological Loan Default Milestones and Settlement Timeline
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Effectively managing a delinquent loan requires understanding the exact procedural timeline through which IDFC FIRST Bank escalates recovery and evaluates compromise proposals. The chronological milestone table below delineates the transition from initial missed installment to final debt discharge.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto shadow-xs bg-white">
                <table className="w-full text-left text-xs border-collapse divide-y divide-slate-200/80">
                  <thead className="bg-slate-50 text-slate-700 font-bold uppercase tracking-wider text-[11px]">
                    <tr className="divide-x divide-slate-200/80">
                      <th className="py-3 px-3.5">Delinquency Phase</th>
                      <th className="py-3 px-3.5">Banking Milestone</th>
                      <th className="py-3 px-3.5">Recovery &amp; Legal Action</th>
                      <th className="py-3 px-3.5">Optimal Strategy</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-700">
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/70 transition-colors">
                      <td className="py-3 px-3.5 font-bold text-slate-900">Days 1 to 30 (SMA-0)</td>
                      <td className="py-3 px-3.5">First missed installment</td>
                      <td className="py-3 px-3.5">Automated SMS, WhatsApp reminders &amp; soft telecalling</td>
                      <td className="py-3 px-3.5">Audit personal liquidity; conserve cash reserves for settlement</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/70 transition-colors">
                      <td className="py-3 px-3.5 font-bold text-slate-900">Days 31 to 90 (SMA-1/2)</td>
                      <td className="py-3 px-3.5">Consecutive default period</td>
                      <td className="py-3 px-3.5">External telecalling agencies assigned; frequent collection calls</td>
                      <td className="py-3 px-3.5">Compile hardship evidence; issue anti-harassment legal notice</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/70 transition-colors">
                      <td className="py-3 px-3.5 font-bold text-slate-900">Day 90+ (NPA Classification)</td>
                      <td className="py-3 px-3.5">Gross NPA declaration</td>
                      <td className="py-3 px-3.5">Tier-1 provisioning; transfer to Special Recoveries division</td>
                      <td className="py-3 px-3.5">Submit formal One-Time Settlement proposal with hardship proof</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/70 transition-colors">
                      <td className="py-3 px-3.5 font-bold text-slate-900">Days 91 to 150 (Legal Window)</td>
                      <td className="py-3 px-3.5">Pre-litigation escalation</td>
                      <td className="py-3 px-3.5">Section 25 PSSA demand notices, sole arbitration intimations</td>
                      <td className="py-3 px-3.5">Serve formal legal replies; file Section 12(5) arbitration objections</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/70 transition-colors">
                      <td className="py-3 px-3.5 font-bold text-slate-900">Days 151 to 180+ (OTS Closure)</td>
                      <td className="py-3 px-3.5">Compromise finalization</td>
                      <td className="py-3 px-3.5">Final settlement sanction issued or portfolio assignment to ARC</td>
                      <td className="py-3 px-3.5">Audit sanction letter; remit funds to CBS loan account; obtain NDC</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: SPECIALIZED REAL-WORLD SCENARIOS */}
            <section id="specialized-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs md:text-sm font-bold text-[#1886ff] uppercase tracking-wider">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>Section 10: Practical Case Studies</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                Specialized Real-World Scenarios and Contextual Resolutions
              </h2>

              {/* 4 REAL-WORLD SCENARIO CARDS */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wide">
                    1. IDFC FIRST Bank Digital Consumer &amp; Instant App Loans
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Algorithmic instant loans feature rapid automated collection escalations upon default. CredSettle unbundles compounding app-based processing surcharges, halts automated calling bots through formal legal representations, and secures deep compromise write-offs directly with credit authorities.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wide">
                    2. Salaried Executive Layoffs &amp; Tech Sector Downturns
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Mid-career professionals impacted by corporate restructuring face severe EMI burdens. By presenting verified termination letters and severance exhaustion statements, our negotiators establish genuine financial distress to secure 50% to 60% principal waivers on high-ticket loans.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wide">
                    3. Small Business Proprietorship &amp; Working Capital Collapse
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Business proprietors frequently use personal credit to support operating expenses. When commercial supply chains fail, audited GST filings and commercial bank statements demonstrate business closure, allowing multi-tranche compromise settlements that insulate personal assets.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wide">
                    4. Bad Debt Portfolio Sale to Asset Reconstruction Companies (ARCs)
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    When aged non-performing loans are sold to private asset reconstruction companies under SARFAESI Section 5, CredSettle audits the underlying Deed of Assignment. We negotiate substantial write-offs reflecting the steep portfolio acquisition discounts obtained by the purchasing ARC.
                  </p>
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
                <HelpCircle className="w-4 h-4 text-[#1886ff]" />
                <span>Section 12: Direct Knowledge Base</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                Frequently Asked Questions on IDFC FIRST Bank Loan Settlement
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Authoritative legal and procedural answers to the most common queries regarding IDFC FIRST Bank personal loans, digital credit facilities, recovery notices, and credit bureau remediation.
              </p>

              <div className="space-y-3 pt-2">
                {faqs.map((faq, index) => {
                  const isOpen = openFaq === index;
                  return (
                    <div
                      key={index}
                      className="rounded-2xl border border-slate-200/80 bg-white overflow-hidden shadow-xs transition-colors"
                    >
                      <button
                        onClick={() => toggleFaq(index)}
                        className="w-full flex items-center justify-between p-4 sm:p-5 text-left text-xs sm:text-sm font-bold text-slate-900 hover:text-[#1886ff] transition-colors gap-3"
                      >
                        <span>{faq.q}</span>
                        <ChevronDown
                          className={`w-4 h-4 text-slate-500 flex-shrink-0 transition-transform duration-200 ${
                            isOpen ? 'rotate-180 text-[#1886ff]' : ''
                          }`}
                        />
                      </button>
                      {isOpen && (
                        <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>

            {/* SECTION 13: CITATIONS & OUTBOUND AUTHORITY GRID */}
            <section id="regulatory-sources" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs md:text-sm font-bold text-[#1886ff] uppercase tracking-wider">
                <BookOpen className="w-4 h-4 text-[#1886ff]" />
                <span>Section 13: Legal Authority &amp; References</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                Statutory Citations and Regulatory Reference Repositories
              </h2>
              <div className="text-xs sm:text-sm text-slate-700 leading-relaxed space-y-2">
                <p>
                  Every settlement petition, legal notice reply, and arbitration objection drafted by CredSettle is anchored in authoritative statutory acts, regulatory guidelines, and judicial precedents governing the Indian financial architecture:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-slate-600 text-xs">
                  <li>Reserve Bank of India Master Circular on Prudential Norms on Advances, Asset Classification and Provisioning (DOR.No.STR.REC.55/21.04.048/2021-22).</li>
                  <li>Reserve Bank of India Master Direction - Direct Selling Agents and Bank Fair Practices Code on Recovery Agents.</li>
                  <li>Securitisation and Reconstruction of Financial Assets and Enforcement of Security Interest Act, 2002 (SARFAESI Act Section 31(g) regarding unsecured loans).</li>
                  <li>Arbitration and Conciliation Act, 1996 (Section 12(5), Section 21, and Supreme Court rulings in Perkins Eastman and TRF Ltd.).</li>
                  <li>Payment and Settlement Systems Act, 2007 (Section 25 quasi-criminal defense and compounding provisions for electronic mandates).</li>
                  <li>Credit Information Companies (Regulation) Act, 2005 (CICRA Section 21 dispute rectification and data accuracy protocols).</li>
                </ul>
              </div>

              {/* OUTBOUND AUTHORITY BADGES */}
              <div className="pt-2">
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2.5">
                  Official Statutory Repositories
                </p>
                <div className="flex flex-wrap gap-2">
                  <a
                    href="https://www.rbi.org.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-[11px] font-semibold text-slate-700 hover:text-[#1886ff] hover:border-blue-200 transition-colors shadow-2xs"
                  >
                    <span>Reserve Bank of India (rbi.org.in)</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                  <a
                    href="https://cms.rbi.org.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-[11px] font-semibold text-slate-700 hover:text-[#1886ff] hover:border-blue-200 transition-colors shadow-2xs"
                  >
                    <span>RBI Complaint Management (cms.rbi.org.in)</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                  <a
                    href="https://www.cibil.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-[11px] font-semibold text-slate-700 hover:text-[#1886ff] hover:border-blue-200 transition-colors shadow-2xs"
                  >
                    <span>TransUnion CIBIL India (cibil.com)</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                  <a
                    href="https://www.indiacode.nic.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-[11px] font-semibold text-slate-700 hover:text-[#1886ff] hover:border-blue-200 transition-colors shadow-2xs"
                  >
                    <span>India Code Legislative Portal (indiacode.nic.in)</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                  <a
                    href="https://nalsa.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-[11px] font-semibold text-slate-700 hover:text-[#1886ff] hover:border-blue-200 transition-colors shadow-2xs"
                  >
                    <span>National Legal Services Authority (nalsa.gov.in)</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                  <a
                    href="https://cybercrime.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-[11px] font-semibold text-slate-700 hover:text-[#1886ff] hover:border-blue-200 transition-colors shadow-2xs"
                  >
                    <span>National Cyber Crime Portal (cybercrime.gov.in)</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                </div>
              </div>

              {/* INTERNAL TOPIC BADGES */}
              <div className="pt-2">
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2.5">
                  Related Debt Resolution Topics
                </p>
                <div className="flex flex-wrap gap-2">
                  <Link
                    href="/axis-bank-personal-loan-settlement"
                    className="px-2.5 py-1 rounded-md bg-slate-100 text-[11px] font-medium text-slate-700 hover:bg-blue-50 hover:text-[#1886ff] transition-colors"
                  >
                    Axis Bank Loan Settlement
                  </Link>
                  <Link
                    href="/icici-bank-personal-loan-settlement"
                    className="px-2.5 py-1 rounded-md bg-slate-100 text-[11px] font-medium text-slate-700 hover:bg-blue-50 hover:text-[#1886ff] transition-colors"
                  >
                    ICICI Bank Loan Settlement
                  </Link>
                  <Link
                    href="/kotak-mahindra-bank-loan-settlement"
                    className="px-2.5 py-1 rounded-md bg-slate-100 text-[11px] font-medium text-slate-700 hover:bg-blue-50 hover:text-[#1886ff] transition-colors"
                  >
                    Kotak Bank Loan Settlement
                  </Link>
                  <Link
                    href="/sbi-personal-loan-settlement-process"
                    className="px-2.5 py-1 rounded-md bg-slate-100 text-[11px] font-medium text-slate-700 hover:bg-blue-50 hover:text-[#1886ff] transition-colors"
                  >
                    SBI Personal Loan Settlement
                  </Link>
                  <Link
                    href="/hdfc-personal-loan-settlement-policy"
                    className="px-2.5 py-1 rounded-md bg-slate-100 text-[11px] font-medium text-slate-700 hover:bg-blue-50 hover:text-[#1886ff] transition-colors"
                  >
                    HDFC Bank Loan Settlement
                  </Link>
                  <Link
                    href="/arbitration-notice-personal-loan-default"
                    className="px-2.5 py-1 rounded-md bg-slate-100 text-[11px] font-medium text-slate-700 hover:bg-blue-50 hover:text-[#1886ff] transition-colors"
                  >
                    Arbitration Notice Defense
                  </Link>
                  <Link
                    href="/ecs-nach-bounce-legal-notice-section-25"
                    className="px-2.5 py-1 rounded-md bg-slate-100 text-[11px] font-medium text-slate-700 hover:bg-blue-50 hover:text-[#1886ff] transition-colors"
                  >
                    Section 25 NACH Bounce Defense
                  </Link>
                  <Link
                    href="/section-138-cheque-bounce-personal-loan"
                    className="px-2.5 py-1 rounded-md bg-slate-100 text-[11px] font-medium text-slate-700 hover:bg-blue-50 hover:text-[#1886ff] transition-colors"
                  >
                    Section 138 Cheque Bounce
                  </Link>
                  <Link
                    href="/lok-adalat-personal-loan-settlement"
                    className="px-2.5 py-1 rounded-md bg-slate-100 text-[11px] font-medium text-slate-700 hover:bg-blue-50 hover:text-[#1886ff] transition-colors"
                  >
                    Lok Adalat Loan Settlement
                  </Link>
                  <Link
                    href="/convert-settled-status-to-closed"
                    className="px-2.5 py-1 rounded-md bg-slate-100 text-[11px] font-medium text-slate-700 hover:bg-blue-50 hover:text-[#1886ff] transition-colors"
                  >
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
                  <h3 className="text-sm font-bold text-slate-900">Ashish Jhangra</h3>
                  <p className="text-[11px] font-semibold text-[#1886ff]">
                    Legal &amp; Debt Resolution Professional
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Specialist in stressed asset negotiations, consumer banking protections, and banking dispute litigation before RBI Ombudsmen and institutional credit committees across India.
              </p>
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <span>Verified Legal Author</span>
                <span className="text-emerald-600 font-bold flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" /> CredSettle Panel
                </span>
              </div>
            </div>

            {/* 2. EMERGENCY CTA CARD (#2452ae Background) */}
            <div
              className="rounded-2xl text-white p-5 space-y-4 shadow-md relative overflow-hidden"
              style={{ backgroundColor: '#2452ae' }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-10 -mt-10 pointer-events-none" />
              
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/15 text-blue-100 text-[10px] font-bold uppercase tracking-wider">
                <BadgeAlert className="w-3 h-3 text-amber-300" />
                <span>Urgent Recovery Defense</span>
              </div>

              <h3 className="text-base font-extrabold leading-snug">
                Receiving IDFC Legal Notices or Telecaller Threats?
              </h3>

              <p className="text-xs text-white/90 leading-relaxed font-normal">
                Speak directly with senior debt settlement negotiators. Halt recovery harassment, dispute unilateral arbitration, and secure an official OTS waiver before court filings.
              </p>

              <div className="space-y-2.5 pt-1">
                <a
                  href="tel:+918800226635"
                  className="w-full py-2.5 px-4 rounded-xl bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-xs flex items-center justify-center gap-2 hover:bg-slate-50 transition-colors shadow-sm"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Now: +91-8800226635</span>
                </a>

                <Link
                  href="/contact"
                  className="w-full py-2.5 px-4 rounded-xl bg-blue-700/80 hover:bg-blue-700 text-white font-bold text-xs flex items-center justify-center gap-2 border border-blue-400/40 transition-colors"
                >
                  <span>Request Free Legal Evaluation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="flex items-center justify-center gap-2 text-[10px] text-blue-200/90 pt-1">
                <Lock className="w-3 h-3" />
                <span>100% Confidential &amp; Legally Protected</span>
              </div>
            </div>

            {/* 3. TRUST BADGES CARD */}
            <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs p-4 space-y-3">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block border-b border-slate-100 pb-2">
                CredSettle Institutional Benchmarks
              </span>

              <div className="space-y-2.5 text-xs">
                <div className="flex items-center gap-2.5 text-slate-700">
                  <Award className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span><strong>5,000+</strong> Successful Debt Settlements</span>
                </div>
                <div className="flex items-center gap-2.5 text-slate-700">
                  <ShieldCheck className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <span><strong>₹150+ Crores</strong> Debt Resolved</span>
                </div>
                <div className="flex items-center gap-2.5 text-slate-700">
                  <Landmark className="w-4 h-4 text-purple-600 flex-shrink-0" />
                  <span><strong>40% to 60%</strong> Principal Haircut Concession</span>
                </div>
                <div className="flex items-center gap-2.5 text-slate-700">
                  <UserCheck className="w-4 h-4 text-amber-600 flex-shrink-0" />
                  <span><strong>100%</strong> Authentic Bank No Dues Certificates</span>
                </div>
              </div>
            </div>

            {/* 4. RELATED GUIDES */}
            <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs p-4 space-y-2.5">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block border-b border-slate-100 pb-2">
                Popular Bank Settlement Guides
              </span>
              <ul className="space-y-2 text-xs text-slate-600">
                <li>
                  <Link
                    href="/axis-bank-personal-loan-settlement"
                    className="hover:text-[#1886ff] font-medium flex items-center justify-between"
                  >
                    <span>Axis Bank Personal Loan</span>
                    <ArrowRight className="w-3 h-3 text-slate-400" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="/icici-bank-personal-loan-settlement"
                    className="hover:text-[#1886ff] font-medium flex items-center justify-between"
                  >
                    <span>ICICI Bank Personal Loan</span>
                    <ArrowRight className="w-3 h-3 text-slate-400" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="/kotak-mahindra-bank-loan-settlement"
                    className="hover:text-[#1886ff] font-medium flex items-center justify-between"
                  >
                    <span>Kotak Mahindra Bank Loan</span>
                    <ArrowRight className="w-3 h-3 text-slate-400" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="/sbi-personal-loan-settlement-process"
                    className="hover:text-[#1886ff] font-medium flex items-center justify-between"
                  >
                    <span>SBI Rinn Samadhan OTS</span>
                    <ArrowRight className="w-3 h-3 text-slate-400" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="/hdfc-personal-loan-settlement-policy"
                    className="hover:text-[#1886ff] font-medium flex items-center justify-between"
                  >
                    <span>HDFC Bank Loan Settlement</span>
                    <ArrowRight className="w-3 h-3 text-slate-400" />
                  </Link>
                </li>
              </ul>
            </div>

          </aside>

        </div>
      </div>
    </main>
  );
}
