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
  FileText,
  HelpCircle,
  TrendingUp,
  BookOpen,
  Building2,
  DollarSign,
  Check,
  Lock,
  Phone,
  Briefcase,
  Bookmark,
  ArrowRight,
  Clock,
  Sparkles,
  Gavel,
  Landmark,
  FileCheck,
  Percent,
  ShieldAlert
} from 'lucide-react';

export default function BankDemandingFullPaymentForLoanClosureClient() {
  const [activeId, setActiveId] = useState<string>('executive-summary');
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
    { id: 'executive-summary', label: 'Executive Brief & Crux' },
    { id: 'debt-economics-npa-dynamics', label: '1. Debt Economics & NPA Dynamics' },
    { id: 'financial-breakdown-settlement-math', label: '2. Ledger Inflation & Math' },
    { id: 'resolution-comparison-matrix', label: '3. Resolution Comparison Matrix' },
    { id: 'technical-cibil-scoring-math', label: '4. CIBIL Impact & CICRA Remedy' },
    { id: 'infographic-overview', label: 'Visual Defense Infographic' },
    { id: 'step-by-step-ots-sop', label: '5. 6-Stage Statutory OTS SOP' },
    { id: 'statutory-notice-defense', label: '6. Statutory Notice Defense' },
    { id: 'three-tier-escalation-matrix', label: '7. 3-Tier Escalation Matrix' },
    { id: 'chronological-timeline-milestones', label: '8. 180-Day Timeline Table' },
    { id: 'specialized-loan-scenarios', label: '9. Complex Borrower Scenarios' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authority' }
  ];

  const faqs = [
    {
      q: 'Why is the recovery agency demanding 100% full payment for loan closure?',
      a: 'Third-party recovery agencies earn commissions solely on recovered amounts and have zero authority to grant waivers. Demanding 100% is their standard pressure script, even after the bank has provisioned for the loss internally.'
    },
    {
      q: 'Can I bypass recovery agents and negotiate directly with the bank?',
      a: 'Yes. Under RBI guidelines, borrowers can bypass external recovery agents and present their hardship dossier directly to the bank\'s Stressed Assets Resolution Branch (SARB) or Circle Head.'
    },
    {
      q: 'What are RBI Compromise Settlement guidelines for personal loans?',
      a: 'The RBI Prudential Framework and Compromise Settlement circulars permit banks and NBFCs to negotiate One-Time Settlements (OTS), waiving accumulated penal interest and accepting a discounted principal lump sum.'
    },
    {
      q: 'How much discount can I negotiate when the bank demands full payment?',
      a: 'Borrowers who substantiate genuine financial distress typically negotiate an OTS compromise of 40% to 55% of the principal balance, alongside a 100% waiver of accumulated penal charges.'
    },
    {
      q: 'What documents prove financial inability to pay the full loan?',
      a: 'Key evidence includes job termination letters, salary reduction slips, audited business loss statements, hospital discharge summaries, bank statements showing low liquidity, and an itemized hardship declaration.'
    },
    {
      q: 'Can the bank seize my property for an unsecured personal loan default?',
      a: 'No. Under Section 31(g) of the SARFAESI Act, unsecured loans and credit cards are strictly exempt from summary property attachment or auction without a registered mortgage.'
    },
    {
      q: 'What should I do if recovery agents visit my workplace or harass family?',
      a: 'Workplace visits, abusive language, and contacting relatives violate the RBI Fair Practices Code. You can issue a formal cease-and-desist notice and escalate to the Bank Nodal Officer and RBI Ombudsman.'
    },
    {
      q: 'How does an OTS compromise affect my CIBIL score?',
      a: 'The loan will be reported as Settled, causing a temporary score dip. However, the balance becomes zero, halting negative reporting. You can rebuild your CIBIL score back to 750+ within 12-24 months.'
    },
    {
      q: 'What should I verify before paying the agreed settlement amount?',
      a: 'Never pay based on verbal promises. Obtain a formal Settlement Sanction Letter on official bank letterhead stating the exact compromise amount, payment dates, full debt release covenants, and deposit directly to your loan account.'
    },
    {
      q: 'What is the difference between a Settlement Letter and a No Dues Certificate?',
      a: 'A Settlement Letter is an approval terms document specifying the compromise amount. A No Dues Certificate (NDC) is the final statutory release issued after payment clearance, confirming zero remaining debt.'
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-[#1886ff] selection:text-white">
      {/* 1. HERO SECTION (#2452ae Background) */}
      <section
        className="relative text-white pt-14 pb-10 md:pt-16 md:pb-12 px-4 md:px-8 overflow-hidden flex items-center justify-center text-center"
        style={{ backgroundColor: '#2452ae' }}
      >
        <div className="absolute inset-0 bg-black/5 z-0 pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center z-10 relative">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-blue-100 text-xs font-bold tracking-wide uppercase mb-4 border border-white/15">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-300" />
            <span>STATUTORY DEBT RESOLUTION &amp; RBI COMPROMISE FRAMEWORK</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 tracking-tight leading-tight">
            Bank Demanding Full Payment for Loan Closure? (How to Settle)
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            When third-party recovery agencies demand 100% full repayment, they are using commission-driven pressure scripts. Learn how to bypass collection agents, invoke RBI compromise settlement norms directly with bank leadership, and settle for 40% to 55%.
          </p>

          <div className="flex justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-2"
            >
              <span>Facing Full Payment Demands? Get Legal Defense</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. STATS STRIP COMPONENT */}
      <StatsStrip />

      {/* 3. WIDESCREEN 3-COLUMN LAYOUT */}
      <div className="w-full max-w-[1720px] mx-auto px-4 md:px-8 py-8 md:py-10">
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
                  <span>Statutory OTS Protection</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Governed by RBI Prudential Norms, SARFAESI Act &amp; CICRA 2005.
                </p>
              </div>
            </div>
          </aside>

          {/* ================= MIDDLE COLUMN: MAIN CONTENT ================= */}
          <div className="space-y-7 md:space-y-8 min-w-0">
            
            {/* Executive Brief Box */}
            <div
              id="executive-summary"
              className="scroll-target rounded-2xl bg-[#F4F8FE] border border-blue-100/90 border-l-[5px] border-l-[#1886ff] p-5 sm:p-6 shadow-xs space-y-3.5 text-slate-800"
            >
              <div className="flex items-center gap-2 text-xs md:text-sm font-black uppercase tracking-wider text-[#1886ff]">
                <Bookmark className="w-4 h-4 text-[#1886ff]" />
                <span>EXECUTIVE BRIEF: COUNTERING FULL REPAYMENT DEMANDS</span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Zero Settlement Authority in Collection Agencies:</strong> Recovery agents operate on commission models and lack legal authority to sanction waivers. Their 100% demand is merely a tactical pressure script.
                  </div>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Right to Bypass Frontline Agents:</strong> Borrowers have the regulatory right under RBI Master Directions to negotiate directly with the bank\'s Stressed Assets Resolution Branch (SARB) or Circle Head.
                  </div>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">100% Bank Provisioning on NPAs:</strong> Once a delinquent loan crosses 90 days into NPA status, banks set aside up to 100% provisions from capital reserves, making a cash OTS commercially attractive.
                  </div>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Isolating True Principal:</strong> Forensic ledger audits unbundle illegal compounding penal charges and late fees, anchoring compromise talks strictly around the base principal debt.
                  </div>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Documented Financial Distress Dossier:</strong> Evidentiary hardship proofs (job loss, business decline, medical emergencies) eliminate willful default assumptions and trigger credit committee review.
                  </div>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Realistic 40% to 55% OTS Target:</strong> Distressed borrowers consistently secure a 40% to 55% principal settlement with a 100% waiver of accumulated penal interest.
                  </div>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">SARFAESI Immunity on Unsecured Loans:</strong> Under Section 31(g) of the SARFAESI Act, unsecured personal loans and credit cards cannot be subjected to property attachment or auction.
                  </div>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">No Dues Certificate (NDC):</strong> Payments must only be remitted against an official sanction letter, followed by a stamped NDC to restore your credit record under Section 21 CICRA.
                  </div>
                </li>
              </ul>
            </div>

            {/* SECTION 1: DEBT ECONOMICS & NPA DYNAMICS */}
            <section id="debt-economics-npa-dynamics" className="scroll-target space-y-3.5">
              <div className="flex items-center gap-2">
                <Landmark className="w-5 h-5 text-[#1886ff]" />
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  1. Debt Economics &amp; NPA Dynamics: Why Banks Settle
                </h2>
              </div>

              <p className="text-slate-700 leading-relaxed text-xs sm:text-sm">
                When a borrower faces financial disruption and misses loan installments, the account is outsourced to third-party recovery agencies. These agencies earn high commission percentages on extracted recoveries and have zero authority to approve waivers. Consequently, their agents use standardized scripts demanding 100% full repayment plus penalties, threatening legal action to maximize recovery pressure.
              </p>

              <p className="text-slate-700 leading-relaxed text-xs sm:text-sm">
                In reality, RBI prudential norms dictate that loans overdue past 90 days transition from Special Mention Accounts (SMA-0/1/2) into Non-Performing Assets (NPAs). Once an account becomes an NPA, the bank must set aside 15% to 100% capital provisioning from its Tier-1 reserves. For unsecured loans exempt from property attachment under Section 31(g) of the SARFAESI Act, civil litigation is costly and slow. Bank credit committees routinely prefer recovering 40% to 55% via a One-Time Settlement (OTS) to release locked capital reserves immediately.
              </p>
            </section>

            {/* SECTION 2: FINANCIAL BREAKDOWN & SETTLEMENT MATH */}
            <section id="financial-breakdown-settlement-math" className="scroll-target space-y-3.5">
              <div className="flex items-center gap-2">
                <Percent className="w-5 h-5 text-[#1886ff]" />
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  2. Financial Breakdown: Principal vs. Penal Inflation
                </h2>
              </div>

              <p className="text-slate-700 leading-relaxed text-xs sm:text-sm">
                Recovery demands often inflate the original debt by 40% to 70% due to compounded overdue interest, 24%-36% penal charges, bounce fees, and recovery costs. Under RBI Fair Lending Practice norms, lenders cannot capitalize penal charges into principal. A forensic audit isolates the authentic principal balance to negotiate realistic settlement figures.
              </p>

              {/* Calculation Card */}
              <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs p-5 space-y-3.5">
                <div className="flex items-center justify-between pb-2.5 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-[#1886ff]" />
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                      Representative 180-Day NPA Settlement Calculation
                    </h3>
                  </div>
                  <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-700">
                    NPA Model
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="text-slate-500 block">Sanctioned Principal</span>
                    <span className="text-sm font-extrabold text-slate-900">₹10,00,000</span>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="text-slate-500 block">Balance at Default</span>
                    <span className="text-sm font-extrabold text-slate-900">₹8,20,000</span>
                  </div>

                  <div className="p-3 rounded-xl bg-red-50/70 border border-red-100">
                    <span className="text-red-600 block">Inflated Demand</span>
                    <span className="text-sm font-extrabold text-red-700">₹13,40,000</span>
                  </div>

                  <div className="p-3 rounded-xl bg-amber-50/70 border border-amber-100">
                    <span className="text-amber-700 block">Bank Provisioning</span>
                    <span className="text-sm font-extrabold text-amber-800">100% Provisioned</span>
                  </div>

                  <div className="p-3 rounded-xl bg-emerald-50/70 border border-emerald-100">
                    <span className="text-emerald-700 block">Negotiated OTS</span>
                    <span className="text-sm font-extrabold text-emerald-800">₹4,10,000</span>
                  </div>

                  <div className="p-3 rounded-xl bg-blue-50/70 border border-blue-100">
                    <span className="text-[#1886ff] block">Total Relief</span>
                    <span className="text-sm font-extrabold text-blue-900">₹9,30,000 (69%)</span>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 3: 4-SIDED BORDERED COMPARISON MATRIX */}
            <section id="resolution-comparison-matrix" className="scroll-target space-y-3.5">
              <div className="flex items-center gap-2">
                <Scale className="w-5 h-5 text-[#1886ff]" />
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  3. Resolution Matrix: Evaluating Your Debt Options
                </h2>
              </div>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto shadow-xs bg-white">
                <table className="w-full text-left border-collapse text-xs divide-y divide-slate-200/80">
                  <thead className="bg-slate-100/80 text-slate-800 font-bold">
                    <tr className="divide-x divide-slate-200/80">
                      <th className="p-3 min-w-[140px]">Pathway</th>
                      <th className="p-3 min-w-[140px]">Financial Impact</th>
                      <th className="p-3 min-w-[140px]">Legal Finality</th>
                      <th className="p-3 min-w-[140px]">CIBIL Trajectory</th>
                      <th className="p-3 min-w-[130px]">Suitability</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-700">
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60">
                      <td className="p-3 font-bold text-[#1886ff]">Direct OTS via SARB</td>
                      <td className="p-3">40% to 55% of principal; 100% penal waiver.</td>
                      <td className="p-3">Permanent discharge with stamped NDC.</td>
                      <td className="p-3">Status: Settled; rebuildable to 750+ in 12-24 mos.</td>
                      <td className="p-3 font-semibold text-emerald-700">Recommended for hardship.</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60">
                      <td className="p-3 font-bold text-slate-900">Paying 100% to Agency</td>
                      <td className="p-3">100% principal + full compounded penalties.</td>
                      <td className="p-3">Risk of unrecorded payment disputes.</td>
                      <td className="p-3">Marked Closed after severe financial strain.</td>
                      <td className="p-3 font-semibold text-red-600">High financial loss.</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60">
                      <td className="p-3 font-bold text-slate-900">Restructuring</td>
                      <td className="p-3">Zero discount; higher total interest.</td>
                      <td className="p-3">Loan re-executed; default risk recurs.</td>
                      <td className="p-3">Marked Restructured on bureau files.</td>
                      <td className="p-3 font-semibold text-amber-700">Only if income is stable.</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60">
                      <td className="p-3 font-bold text-slate-900">Civil / DRT Litigation</td>
                      <td className="p-3">Heavy legal and court expenses.</td>
                      <td className="p-3">Multi-year adversarial proceedings.</td>
                      <td className="p-3">Reported as Suit Filed / Wilful Default.</td>
                      <td className="p-3 font-semibold text-slate-600">High stress, high cost.</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60">
                      <td className="p-3 font-bold text-slate-900">Lok Adalat</td>
                      <td className="p-3">15% to 30% modest waiver.</td>
                      <td className="p-3">Non-appealable consent decree.</td>
                      <td className="p-3">Marked Settled in Lok Adalat.</td>
                      <td className="p-3 font-semibold text-blue-700">Small ticket loans.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 4: TECHNICAL CIBIL ALGORITHM & SCORING MATH */}
            <section id="technical-cibil-scoring-math" className="scroll-target space-y-3.5">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-[#1886ff]" />
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  4. CIBIL Scoring &amp; Section 21 CICRA Credit Restoration
                </h2>
              </div>

              <p className="text-slate-700 leading-relaxed text-xs sm:text-sm">
                Credit scores are calculated across Payment History (35%), Credit Utilization (30%), Credit Mix (15%), Inquiries (10%), and Leverage (10%). Defaulting past 90 DPD drops scores into the 520-600 range. Settling halts continuous negative reporting and updates the balance to zero.
              </p>

              <p className="text-slate-700 leading-relaxed text-xs sm:text-sm">
                Under Section 21 of the Credit Information Companies (Regulation) Act, 2005 (CICRA), borrowers can submit their No Dues Certificate, start fresh payment cycles with a secured credit card, and rebuild their score back to 750+ within 12 to 24 months.
              </p>
            </section>

            {/* SECTION 5: VISUAL INFOGRAPHIC ASSET CARD */}
            <section id="infographic-overview" className="scroll-target space-y-3.5">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#1886ff]" />
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Visual Blueprint: Countering Full Repayment Demands &amp; RBI OTS
                </h2>
              </div>

              <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-4 sm:p-5 overflow-hidden space-y-3">
                <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-slate-950 border border-slate-800">
                  <Image
                    src="/images/infographics/bank-demanding-full-payment-for-loan-closure.jpg"
                    alt="Bank Demanding Full Payment for Loan Closure Defense Blueprint"
                    fill
                    sizes="(max-width: 1200px) 100vw, 900px"
                    className="object-cover"
                    priority
                  />
                </div>

                <div className="flex items-center justify-between text-xs text-slate-600">
                  <span>Visual guide to bypassing collection agencies and securing SARB settlement sanction.</span>
                  <a
                    href="/images/infographics/bank-demanding-full-payment-for-loan-closure.jpg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1886ff] font-bold hover:underline inline-flex items-center gap-1 flex-shrink-0"
                  >
                    <span>High-Res</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </section>

            {/* SECTION 6: STEP-BY-STEP OTS SOP */}
            <section id="step-by-step-ots-sop" className="scroll-target space-y-3.5">
              <div className="flex items-center gap-2">
                <FileCheck className="w-5 h-5 text-[#1886ff]" />
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  5. Step-by-Step SOP: The 6-Stage Statutory OTS Blueprint
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                <div className="bg-white rounded-2xl border border-slate-200/80 p-4 space-y-1.5 shadow-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-md bg-blue-100 text-[#1886ff] font-bold flex items-center justify-center text-xs">01</span>
                    <h3 className="font-bold text-slate-900 text-sm">Forensic Account Audit</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Isolate raw principal from compounded penalties, establishing the baseline for compromise talks.
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200/80 p-4 space-y-1.5 shadow-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-md bg-blue-100 text-[#1886ff] font-bold flex items-center justify-center text-xs">02</span>
                    <h3 className="font-bold text-slate-900 text-sm">Hardship Dossier Compilation</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Gather termination letters, audited business losses, and medical summaries to prove genuine distress.
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200/80 p-4 space-y-1.5 shadow-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-md bg-blue-100 text-[#1886ff] font-bold flex items-center justify-center text-xs">03</span>
                    <h3 className="font-bold text-slate-900 text-sm">Bypassing Recovery Agents</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Issue anti-harassment notices and escalate the case directly to the bank\'s Stressed Assets Branch (SARB).
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200/80 p-4 space-y-1.5 shadow-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-md bg-blue-100 text-[#1886ff] font-bold flex items-center justify-center text-xs">04</span>
                    <h3 className="font-bold text-slate-900 text-sm">Credit Committee Negotiations</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Leverage bank provisioning to secure a 40% to 55% settlement with a 100% waiver of penal charges.
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200/80 p-4 space-y-1.5 shadow-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-md bg-blue-100 text-[#1886ff] font-bold flex items-center justify-center text-xs">05</span>
                    <h3 className="font-bold text-slate-900 text-sm">Sanction Letter Vetting</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Verify that the sanction letter confirms full release without residual liability clauses before payment.
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200/80 p-4 space-y-1.5 shadow-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-md bg-blue-100 text-[#1886ff] font-bold flex items-center justify-center text-xs">06</span>
                    <h3 className="font-bold text-slate-900 text-sm">Remittance &amp; NDC Issuance</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Deposit funds directly to the loan account, secure the stamped No Dues Certificate, and update CIBIL.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: STATUTORY NOTICE DEFENSE & LEGAL RIGHTS */}
            <section id="statutory-notice-defense" className="scroll-target space-y-3.5">
              <div className="flex items-center gap-2">
                <Gavel className="w-5 h-5 text-[#1886ff]" />
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  6. Statutory Notice Defense &amp; Borrower Rights
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                <div className="bg-white rounded-2xl border border-slate-200/80 p-4 space-y-2 shadow-xs">
                  <div className="flex items-center gap-2 text-blue-900">
                    <FileText className="w-4 h-4 text-[#1886ff]" />
                    <h3 className="font-bold text-sm">Section 25 PSSA: NACH Mandate Recall</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Borrowers can formally revoke NACH auto-debit consent in writing, eliminating criminal default grounds and restricting the matter to civil debt settlement.
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200/80 p-4 space-y-2 shadow-xs">
                  <div className="flex items-center gap-2 text-blue-900">
                    <Gavel className="w-4 h-4 text-[#1886ff]" />
                    <h3 className="font-bold text-sm">Section 138 NI Act: Cheque Bounce Defense</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Security cheques cannot be presented for inflated penalty sums without an audited statement, enabling a pre-trial compoundable settlement response.
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200/80 p-4 space-y-2 shadow-xs">
                  <div className="flex items-center gap-2 text-blue-900">
                    <Scale className="w-4 h-4 text-[#1886ff]" />
                    <h3 className="font-bold text-sm">Arbitration: Perkins Eastman Precedent</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Supreme Court rulings (TRF Ltd. &amp; Perkins Eastman) prohibit banks from unilaterally appointing sole arbitrators, rendering unilateral proceedings voidable.
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200/80 p-4 space-y-2 shadow-xs">
                  <div className="flex items-center gap-2 text-blue-900">
                    <ShieldAlert className="w-4 h-4 text-[#1886ff]" />
                    <h3 className="font-bold text-sm">DRT Threshold &amp; Fair Practices Code</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    DRT jurisdiction is restricted to debts exceeding ₹20 Lakhs. The RBI Fair Practices Code strictly prohibits workplace visits, intimidation, or calling relatives.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 8: 3-TIER ESCALATION MATRIX */}
            <section id="three-tier-escalation-matrix" className="scroll-target space-y-3.5">
              <div className="flex items-center gap-2">
                <Building2 className="w-5 h-5 text-[#1886ff]" />
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  7. 3-Tier Grievance &amp; Regulatory Escalation
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                <div className="bg-white rounded-2xl border border-slate-200/80 p-4 space-y-1.5 shadow-xs">
                  <span className="text-[10px] font-black uppercase text-blue-600 bg-blue-50 px-2 py-0.5 rounded">Level 1: 7-10 Days</span>
                  <h3 className="font-bold text-slate-900 text-sm">Grievance Officer (GRO)</h3>
                  <p className="text-xs text-slate-600">Submit a formal complaint against agent harassment requesting hardship settlement review.</p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200/80 p-4 space-y-1.5 shadow-xs">
                  <span className="text-[10px] font-black uppercase text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">Level 2: 14-21 Days</span>
                  <h3 className="font-bold text-slate-900 text-sm">Nodal Officer (PNO)</h3>
                  <p className="text-xs text-slate-600">Escalate unresolved cases to the Principal Nodal Officer and Zonal Stressed Assets Committee.</p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200/80 p-4 space-y-1.5 shadow-xs">
                  <span className="text-[10px] font-black uppercase text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">Level 3: 30 Days</span>
                  <h3 className="font-bold text-slate-900 text-sm">RBI Ombudsman</h3>
                  <p className="text-xs text-slate-600">File a statutory complaint on cms.rbi.org.in if the bank fails to resolve the matter in 30 days.</p>
                </div>
              </div>
            </section>

            {/* SECTION 9: CHRONOLOGICAL TIMELINE TABLE */}
            <section id="chronological-timeline-milestones" className="scroll-target space-y-3.5">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#1886ff]" />
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  8. Chronological Timeline: 180-Day Resolution Path
                </h2>
              </div>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto shadow-xs bg-white">
                <table className="w-full text-left border-collapse text-xs divide-y divide-slate-200/80">
                  <thead className="bg-slate-100/80 text-slate-800 font-bold">
                    <tr className="divide-x divide-slate-200/80">
                      <th className="p-3 min-w-[120px]">Timeline</th>
                      <th className="p-3 min-w-[140px]">Account Status</th>
                      <th className="p-3 min-w-[180px]">Bank / Agency Action</th>
                      <th className="p-3 min-w-[180px]">Borrower Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-700">
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60">
                      <td className="p-3 font-bold text-[#1886ff]">Days 1 to 30</td>
                      <td className="p-3">SMA-0 Delinquency</td>
                      <td className="p-3">Automated payment reminders and internal calls.</td>
                      <td className="p-3">Assess restructuring vs settlement strategy.</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60">
                      <td className="p-3 font-bold text-slate-900">Days 31 to 90</td>
                      <td className="p-3">SMA-1 / SMA-2</td>
                      <td className="p-3">Outsourced to recovery agency; 100% demand calls.</td>
                      <td className="p-3">Issue anti-harassment notice; compile hardship proofs.</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60">
                      <td className="p-3 font-bold text-slate-900">Days 91 to 120</td>
                      <td className="p-3">NPA Classification</td>
                      <td className="p-3">Bank allocates provision; file moved to SARB.</td>
                      <td className="p-3">Bypass agency; present hardship dossier to SARB.</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60">
                      <td className="p-3 font-bold text-slate-900">Days 121 to 150</td>
                      <td className="p-3">Committee Review</td>
                      <td className="p-3">Evaluation of hardship and settlement haircut.</td>
                      <td className="p-3">Negotiate 40% to 55% principal compromise terms.</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60">
                      <td className="p-3 font-bold text-slate-900">Days 151 to 180</td>
                      <td className="p-3">OTS Sanction &amp; Closure</td>
                      <td className="p-3">Issuance of Settlement Sanction Letter.</td>
                      <td className="p-3">Vet sanction letter, remit funds, obtain stamped NDC.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: SPECIALIZED REAL-WORLD SCENARIOS */}
            <section id="specialized-loan-scenarios" className="scroll-target space-y-3.5">
              <div className="flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-[#1886ff]" />
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  9. Specialized Real-World Scenarios
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                <div className="bg-white rounded-2xl border border-slate-200/80 p-4 space-y-1.5 shadow-xs">
                  <h3 className="font-bold text-slate-900 text-sm">Multi-Lender Portfolios</h3>
                  <p className="text-xs text-slate-600">Synchronized settlement strategy across multiple lenders, prioritizing accounts by notice risk.</p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200/80 p-4 space-y-1.5 shadow-xs">
                  <h3 className="font-bold text-slate-900 text-sm">Layoffs &amp; Medical Crises</h3>
                  <p className="text-xs text-slate-600">Evidentiary hardship dossiers proving zero cash flow to secure maximum principal haircuts without court action.</p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200/80 p-4 space-y-1.5 shadow-xs">
                  <h3 className="font-bold text-slate-900 text-sm">MSME Overdrafts</h3>
                  <p className="text-xs text-slate-600">Protecting personal assets under Section 31(g) SARFAESI while negotiating clean commercial OTS terms.</p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200/80 p-4 space-y-1.5 shadow-xs">
                  <h3 className="font-bold text-slate-900 text-sm">ARC Debt Assignments</h3>
                  <p className="text-xs text-slate-600">Verifying SARFAESI Section 5 assignment validity and negotiating deep settlements reflecting ARC acquisition discounts.</p>
                </div>
              </div>
            </section>

            {/* SECTION 11: COMPANY PROFILE COMPONENT */}
            <div id="company-profile" className="scroll-target pt-1">
              <CompanySection />
            </div>

            {/* SECTION 12: 10 SYNCHRONIZED FAQS */}
            <section id="frequently-asked-questions" className="scroll-target space-y-3.5">
              <div className="flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-[#1886ff]" />
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  10. Frequently Asked Questions: Bank Demanding Full Payment
                </h2>
              </div>

              <div className="space-y-2.5">
                {faqs.map((faq, index) => {
                  const isOpen = openFaq === index;
                  return (
                    <div
                      key={index}
                      className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-xs transition-all duration-200"
                    >
                      <button
                        onClick={() => toggleFaq(index)}
                        className="w-full p-4 text-left flex items-center justify-between gap-4 font-bold text-slate-900 hover:text-[#1886ff] transition-colors text-xs sm:text-sm"
                      >
                        <span>{faq.q}</span>
                        <ChevronDown
                          className={`w-4 h-4 text-slate-400 flex-shrink-0 transition-transform duration-200 ${
                            isOpen ? 'transform rotate-180 text-[#1886ff]' : ''
                          }`}
                        />
                      </button>

                      {isOpen && (
                        <div className="px-4 pb-4 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-2.5">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>

            {/* SECTION 13: CITATIONS & OUTBOUND AUTHORITY GRID */}
            <section id="regulatory-sources" className="scroll-target space-y-3.5 pt-3 border-t border-slate-200/80">
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-[#1886ff]" />
                <h2 className="text-base sm:text-lg font-bold text-slate-900">
                  11. Statutory Citations &amp; Regulatory Authorities
                </h2>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                <a
                  href="https://www.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-white border border-slate-200 hover:border-blue-300 hover:bg-blue-50/50 transition-colors flex items-center justify-between text-xs font-semibold text-slate-800"
                >
                  <span>RBI Master Directions</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>

                <a
                  href="https://cms.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-white border border-slate-200 hover:border-blue-300 hover:bg-blue-50/50 transition-colors flex items-center justify-between text-xs font-semibold text-slate-800"
                >
                  <span>RBI Ombudsman</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>

                <a
                  href="https://www.cibil.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-white border border-slate-200 hover:border-blue-300 hover:bg-blue-50/50 transition-colors flex items-center justify-between text-xs font-semibold text-slate-800"
                >
                  <span>TransUnion CIBIL</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>

                <a
                  href="https://www.indiacode.nic.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-white border border-slate-200 hover:border-blue-300 hover:bg-blue-50/50 transition-colors flex items-center justify-between text-xs font-semibold text-slate-800"
                >
                  <span>India Code Legislation</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>

                <a
                  href="https://nalsa.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-white border border-slate-200 hover:border-blue-300 hover:bg-blue-50/50 transition-colors flex items-center justify-between text-xs font-semibold text-slate-800"
                >
                  <span>NALSA Lok Adalat</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>

                <a
                  href="https://cybercrime.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-white border border-slate-200 hover:border-blue-300 hover:bg-blue-50/50 transition-colors flex items-center justify-between text-xs font-semibold text-slate-800"
                >
                  <span>Cyber Crime Portal</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </div>

              <div className="pt-2 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-1.5">Related CredSettle Guides:</span>
                <div className="flex flex-wrap gap-1.5">
                  <Link href="/bank-sent-legal-notice-for-loan-what-to-do" className="text-[11px] px-2 py-0.5 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Bank Sent Legal Notice
                  </Link>
                  <Link href="/services/personal-loan-settlement" className="text-[11px] px-2 py-0.5 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Personal Loan Settlement
                  </Link>
                  <Link href="/services/anti-harassment" className="text-[11px] px-2 py-0.5 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Anti-Harassment Defense
                  </Link>
                  <Link href="/arbitration-notice-personal-loan-default" className="text-[11px] px-2 py-0.5 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Arbitration Notice Defense
                  </Link>
                  <Link href="/convert-settled-status-to-closed" className="text-[11px] px-2 py-0.5 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Convert Settled to Closed
                  </Link>
                  <Link href="/remove-settled-status-from-cibil" className="text-[11px] px-2 py-0.5 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Remove Settled from CIBIL
                  </Link>
                  <Link href="/full-and-final-settlement-meaning" className="text-[11px] px-2 py-0.5 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Full &amp; Final Settlement
                  </Link>
                  <Link href="/improve-cibil-after-loan-settlement" className="text-[11px] px-2 py-0.5 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Rebuild CIBIL Score
                  </Link>
                  <Link href="/get-noc-after-loan-settlement" className="text-[11px] px-2 py-0.5 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Get NOC Certificate
                  </Link>
                  <Link href="/verify-loan-settlement-letter" className="text-[11px] px-2 py-0.5 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Verify Settlement Letter
                  </Link>
                </div>
              </div>
            </section>

          </div>

          {/* ================= RIGHT COLUMN: STICKY SIDEBAR ================= */}
          <aside className="space-y-4 sticky top-6">
            
            {/* Card 1: Author Bio Card */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3">
              <div className="flex items-center gap-3">
                <Link
                  href="/author/ashish-jhangra"
                  className="w-11 h-11 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-extrabold text-sm hover:bg-blue-200 transition-colors flex-shrink-0"
                  title="View Ashish Jhangra Profile"
                >
                  AJ
                </Link>
                <div>
                  <Link
                    href="/author/ashish-jhangra"
                    className="text-sm font-bold text-slate-900 hover:text-[#1886ff] transition-colors block"
                  >
                    Ashish Jhangra
                  </Link>
                  <p className="text-[11px] font-semibold text-[#1886ff]">
                    Legal &amp; Debt Resolution Professional
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Specialized in banking compliance, loan dispute resolution, and NPA compromise negotiations across Indian banking forums.
              </p>
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <Link
                  href="/author/ashish-jhangra"
                  className="text-[#1886ff] hover:underline font-semibold flex items-center gap-1"
                >
                  <span>View Author Profile</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
                <span className="text-emerald-600 font-bold flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3" /> CredSettle Panel
                </span>
              </div>
            </div>

            {/* Card 2: Emergency CTA Card */}
            <div
              className="rounded-3xl p-5 text-white text-center space-y-3.5 shadow-md relative overflow-hidden"
              style={{ backgroundColor: '#2452ae' }}
            >
              <div className="space-y-1 text-center">
                <span className="text-[10px] font-black uppercase tracking-wider text-blue-200 bg-white/10 px-2.5 py-0.5 rounded-full inline-block">
                  100% CONFIDENTIAL LEGAL DEFENSE
                </span>
                <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                  Bank Demanding Full Repayment?
                </h3>
                <p className="text-blue-100 text-xs mt-1 leading-relaxed font-normal">
                  Our experts bypass aggressive recovery agents, represent your hardship to bank leadership, and negotiate a 40% to 55% settlement.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-2.5 px-4 rounded-full font-bold text-xs sm:text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Facing Full Demands? Get Defense
              </Link>
              <div className="pt-1 flex flex-col items-center justify-center gap-1 text-[11px] text-blue-200">
                <div className="flex items-center gap-1">
                  <Phone className="w-3 h-3 text-blue-200" />
                  <a href="tel:+918800226635" className="hover:underline font-bold text-white">
                    Call: +91-8800226635
                  </a>
                </div>
                <div className="flex items-center gap-1 text-[10px] text-blue-300">
                  <Lock className="w-3 h-3" />
                  <span>Direct Bank Settlement • RBI Compliant</span>
                </div>
              </div>
            </div>

            {/* Card 3: CredSettle Trust Badges */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-4 space-y-2.5 text-xs">
              <h4 className="font-bold text-slate-900 text-xs sm:text-sm">The CredSettle Advantage</h4>
              <ul className="space-y-1.5 text-slate-600">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Zero Upfront Risk:</strong> Success-linked settlement fees.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Direct Bank Remittance:</strong> Zero middleman fund holding.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>RBI &amp; CICRA Compliance:</strong> 100% lawful dispute handling.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Pan-India Representation:</strong> Dedicated dispute specialists.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-4 space-y-2.5 text-xs">
              <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Related Legal Guides</h4>
              <div className="space-y-2">
                <Link
                  href="/bank-sent-legal-notice-for-loan-what-to-do"
                  className="block p-2 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Bank Sent Legal Notice for Default
                  </p>
                  <span className="text-[10px] text-slate-400 mt-0.5 block">Reply blueprint &rarr;</span>
                </Link>

                <Link
                  href="/arbitration-notice-personal-loan-default"
                  className="block p-2 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Arbitration Notice for Personal Loan
                  </p>
                  <span className="text-[10px] text-slate-400 mt-0.5 block">Perkins Eastman defense &rarr;</span>
                </Link>

                <Link
                  href="/convert-settled-status-to-closed"
                  className="block p-2 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Convert Settled Loan to Closed Status
                  </p>
                  <span className="text-[10px] text-slate-400 mt-0.5 block">Credit report guide &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
