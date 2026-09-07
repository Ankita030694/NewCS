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

export default function SummonsFromCourtForPersonalLoanClient() {
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
    { id: 'quick-crux', label: 'Executive Summary & Crux' },
    { id: 'debt-economics-npa-dynamics', label: '1. Debt Economics & NPA Defaults' },
    { id: 'financial-breakdown-settlement-math', label: '2. Financial Breakdown & Math' },
    { id: 'legal-forum-comparison-matrix', label: '3. Court vs Settlement Comparison' },
    { id: 'cibil-algorithm-scoring-math', label: '4. CIBIL Algorithm & Recovery' },
    { id: 'infographic-overview', label: 'Defense Blueprint Infographic' },
    { id: 'step-by-step-defense-sop', label: '5. 6-Stage Defense SOP' },
    { id: 'statutory-notice-defense-rights', label: '6. Statutory Defense & Legal Rights' },
    { id: 'three-tier-escalation-matrix', label: '7. 3-Tier Grievance Matrix' },
    { id: 'chronological-timeline-table', label: '8. Chronological Timeline Table' },
    { id: 'specialized-real-world-scenarios', label: '9. Complex Loan Scenarios' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Sources & Authorities' }
  ];

  const faqs = [
    {
      q: "What is a court summons for a personal loan default?",
      a: "A court summons for a personal loan default is a formal judicial notice issued by a Civil Court, Magistrate Court, or Debt Recovery Tribunal (DRT). It informs the borrower that the lending bank has instituted recovery proceedings, such as a summary suit under Order 37 CPC or a Section 138 NI Act complaint, requiring formal legal appearance."
    },
    {
      q: "Do I have to appear in court if I receive a loan summons?",
      a: "Yes, you or your appointed advocate must enter an appearance on or before the specified hearing date. In civil summary suits, your advocate files a Vakalatnama and Leave to Defend. In Section 138 or Section 25 cases, appearance is required to secure bail and avoid non-bailable warrants."
    },
    {
      q: "What happens if I ignore a court summons for a personal loan?",
      a: "Ignoring a civil court summons causes the judge to declare you ex-parte under Order 9 Rule 6 CPC, passing a money decree in favor of the lender. In Section 138/25 cases, non-appearance leads to bailable and non-bailable warrants. An ex-parte decree allows the bank to seek execution through salary or account attachment."
    },
    {
      q: "Can I be arrested or sent to jail for an unpaid personal loan?",
      a: "Defaulting on an unsecured personal loan is strictly a civil dispute, and civil courts do not order imprisonment for bona fide financial inability under Section 51 CPC. However, in Section 138 cheque bounce or Section 25 NACH dishonor cases, repeated non-appearance can result in arrest warrants."
    },
    {
      q: "Can a personal loan court case be settled out of court?",
      a: "Yes, a personal loan court case can be settled at any stage prior to final decree execution through a One-Time Settlement (OTS) or Lok Adalat compromise. CredSettle negotiates with bank credit committees to secure 40% to 55% waivers, drafting formal consent terms submitted to the court for suit withdrawal."
    },
    {
      q: "What is a summary suit under Order 37 of CPC for loan recovery?",
      a: "Order 37 of the Code of Civil Procedure 1908 is an expedited judicial procedure for debt recovery where defendants must apply for Leave to Defend within 10 days of summons service, presenting triable legal issues such as disputed penal interest, unauthorized fees, or unfair banking practices."
    },
    {
      q: "How does CredSettle defend against a bank court summons?",
      a: "CredSettle engages verified panel advocates to file a Vakalatnama, conduct a forensic statement audit, submit written statements or Leave to Defend petitions, and negotiate a One-Time Settlement with bank credit desks. We secure formal compromise consent terms, obtain No Dues Certificates, and ensure court suit dismissal."
    },
    {
      q: "Can the bank attach my salary or freeze my bank account after summons?",
      a: "A bank cannot attach salary or freeze accounts merely upon issuing a summons. Attachment can only occur after the court passes a final decree and the lender files an execution petition under Order 21 CPC. Even then, Section 60 CPC exempts statutory subsistence allowances to protect borrower livelihood."
    },
    {
      q: "What is the difference between a lawyer notice and a court summons?",
      a: "A legal notice from a bank lawyer is an informal pre-litigation demand letter with no judicial authority. In contrast, a court summons is an official sovereign judicial order issued under the seal and signature of a court registrar, carrying mandatory statutory obligations to appear and defend under procedural law."
    },
    {
      q: "How does settling a court loan dispute impact my CIBIL score?",
      a: "Settling a personal loan case updates the bureau status to Settled. While this resolves litigation and ends legal liability, the settled tag reflects on credit history. Borrowers can later convert this status to Closed under Section 21 of CICRA 2005 by clearing remaining balances or rebuilding credit to 750+ within 12 to 24 months."
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-[#1886ff] selection:text-white">
      {/* 1. HERO SECTION (#2452ae Background) */}
      <section
        className="relative text-white pt-14 pb-10 md:pt-18 md:pb-12 px-4 md:px-8 overflow-hidden flex items-center justify-center text-center"
        style={{ backgroundColor: "#2452ae" }}
      >
        <div className="absolute inset-0 bg-black/5 z-0 pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center z-10 relative">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold uppercase tracking-wider mb-4 text-blue-100">
            <Scale className="w-3.5 h-3.5 text-blue-200" />
            <span>Judicial Dispute Defense Protocol</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Received a Court Summons for Personal Loan Default? Legal Steps
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-3xl mx-auto font-normal text-white/95 leading-relaxed">
            Received a court summons for personal loan default? Learn your defense rights under civil procedure rules, avoid ex-parte decrees, and resolve debt via settlement.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Received a Summons? Hire a Defense Lawyer</span>
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
                      href={"#" + link.id}
                      className={
                        "block py-1.5 px-2.5 rounded-lg transition-all duration-150 leading-snug " +
                        (isActive
                          ? "bg-blue-50 text-[#1886ff] font-bold border-l-3 border-[#1886ff] pl-2"
                          : "text-slate-600 hover:text-slate-900 hover:bg-slate-50 font-medium")
                      }
                    >
                      {link.label}
                    </a>
                  );
                })}
              </nav>

              <div className="mt-4 pt-3 border-t border-slate-100 bg-blue-50/50 -mx-4 -mb-4 p-3 rounded-b-2xl">
                <div className="flex items-center gap-2 text-[11px] font-bold text-slate-800">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  <span>Statutory Judicial Defense</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Governed by Code of Civil Procedure 1908 and RBI Master Directions.
                </p>
              </div>
            </div>
          </aside>

          {/* ================= CENTER COLUMN: EDITORIAL CONTENT ================= */}
          <div className="space-y-10 min-w-0">
            
            {/* EXECUTIVE SUMMARY BOX (#F4F8FE Box) */}
            <section
              id="quick-crux"
              className="bg-[#F4F8FE] rounded-2xl border border-blue-100 p-6 md:p-8 border-l-[5px] border-l-[#1886ff] shadow-xs"
            >
              <div className="flex items-center gap-2.5 mb-4">
                <Gavel className="w-5 h-5 text-[#1886ff]" />
                <h2 className="text-lg md:text-xl font-extrabold text-slate-900">
                  Executive Summary: Responding to a Court Summons
                </h2>
              </div>
              <p className="text-xs md:text-sm text-slate-700 leading-relaxed mb-4">
                A court summons marks formal judicial escalation. Knowing your procedural rights prevents irreversible ex-parte liability.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs md:text-sm text-slate-800">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>Never ignore summons; non-appearance leads to an automatic ex-parte money decree.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>Personal loan default is strictly a civil dispute with zero arrest risk under Section 51 CPC.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>An appointed advocate can represent you in court via Vakalatnama without personal appearance.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>Summary suits under Order 37 CPC require filing Leave to Defend within 10 days of service.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>Section 138 NI Act or Section 25 PSSA summons require formal appearance to secure bail.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>Salary attachment and account freezing occur only after final decree execution under Section 60 CPC.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>Lenders routinely accept 40% to 55% One-Time Settlement (OTS) waivers during active litigation.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>CredSettle ensures pending recovery suits are formally withdrawn upon settlement remittance.</span>
                </div>
              </div>
            </section>

            {/* SECTION 1: DEBT ECONOMICS & NPA DYNAMICS */}
            <section id="debt-economics-npa-dynamics" className="space-y-4">
              <h2 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">
                1. Civil Debt Economics: Loan Default to Court Summons
              </h2>
              <p className="text-xs md:text-sm text-slate-700 leading-relaxed">
                When an unsecured personal loan defaults, lenders classify the debt under RBI Prudential Norms. Overdue accounts transition from SMA-0 (1-30 days) to SMA-1 (31-60 days) and SMA-2 (61-90 days). After 90 days of non-payment, the account is classified as a Non-Performing Asset (NPA).
              </p>
              <p className="text-xs md:text-sm text-slate-700 leading-relaxed">
                NPA classification requires banks to allocate 100% Tier-1 capital provisioning against bad debt. Because unsecured loans lack mortgage collateral, lenders cannot invoke property seizure under the SARFAESI Act. Instead, institutions file civil recovery suits under Order 37 CPC or initiate proceedings for bounced payment mandates.
              </p>
              <p className="text-xs md:text-sm text-slate-700 leading-relaxed">
                Civil litigation requires banks to deposit court fees and endure multi-year judicial proceedings. For credit committees, lengthy litigation represents an inefficient use of capital. This commercial dynamic creates strong leverage for represented borrowers to negotiate an out-of-court One-Time Settlement (OTS), providing immediate recovery for the bank and substantial debt relief.
              </p>
            </section>

            {/* SECTION 2: FINANCIAL BREAKDOWN & SETTLEMENT MATH */}
            <section id="financial-breakdown-settlement-math" className="space-y-4">
              <h2 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">
                2. Financial Breakdown: Principal Dues vs Inflated Claims
              </h2>
              <p className="text-xs md:text-sm text-slate-700 leading-relaxed">
                Monetary claims in court summons are heavily inflated beyond the original loan balance. Lenders compound monthly penal interest above 30% per annum, adding overdue fees, recurring bounce charges, legal expenses, and GST across every surcharge.
              </p>
              <p className="text-xs md:text-sm text-slate-700 leading-relaxed">
                Under RBI Fair Practices Code, penal charges cannot be capitalized into loan principal. A forensic audit eliminates these unverified penalties to establish true net principal exposure. In a typical ₹10,00,000 loan default where claimed dues reach ₹14,80,000, CredSettle establishes true principal of ₹7,50,000 and negotiates an out-of-court OTS of ₹3,75,000 to ₹4,50,000, securing a 50% to 62% overall reduction with full suit dismissal.
              </p>

              {/* Representative Calculation Card */}
              <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs p-5 md:p-6 space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-[#1886ff]" />
                    <h3 className="font-bold text-slate-900 text-sm md:text-base">
                      Representative 180-Day NPA Judicial Settlement Math
                    </h3>
                  </div>
                  <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-blue-50 text-[#1886ff] border border-blue-100">
                    Forensic Breakdown
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs md:text-sm">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                    <span className="text-slate-500 font-medium block">Total Bank Court Claim</span>
                    <span className="text-lg font-extrabold text-red-600 block">₹14,80,000</span>
                    <p className="text-[11px] text-slate-500 leading-tight">
                      Includes principal plus compounded penal interest and fees.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-blue-50/50 border border-blue-100 space-y-1">
                    <span className="text-slate-600 font-medium block">Audited Net Principal</span>
                    <span className="text-lg font-extrabold text-blue-700 block">₹7,50,000</span>
                    <p className="text-[11px] text-slate-600 leading-tight">
                      True liability established after removing penal charges.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-100 space-y-1">
                    <span className="text-emerald-800 font-medium block">Final CredSettle OTS Range</span>
                    <span className="text-lg font-extrabold text-emerald-600 block">₹3,75,000 - ₹4,50,000</span>
                    <p className="text-[11px] text-emerald-700 leading-tight">
                      Achieved 50% to 62% reduction with suit dismissal and NDC.
                    </p>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed pt-2 border-t border-slate-100">
                  By engaging the bank legal desk before an ex-parte decree is passed, borrowers transform an aggressive court demand into an affordable compromise settlement.
                </p>
              </div>
            </section>

            {/* SECTION 3: RESOLUTION COMPARISON MATRIX */}
            <section id="legal-forum-comparison-matrix" className="space-y-4">
              <h2 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">
                3. Resolution Comparison: Court Defense vs Settlement
              </h2>
              <p className="text-xs md:text-sm text-slate-700 leading-relaxed">
                Borrowers facing judicial summons must evaluate resolution pathways against legal exposure, timeframe, and financial relief. While courtroom litigation takes years and ignoring summons leads to ex-parte decree execution, a structured out-of-court compromise provides rapid closure and maximum debt waiver.
              </p>

              {/* 4-Sided Bordered Comparison Table */}
              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto shadow-xs bg-white">
                <table className="w-full text-left text-xs md:text-sm divide-y divide-slate-200/80">
                  <thead className="bg-slate-50 text-slate-900 font-bold">
                    <tr className="divide-x divide-slate-200/80">
                      <th className="p-3.5 md:p-4">Resolution Pathway</th>
                      <th className="p-3.5 md:p-4">Legal Forum &amp; Authority</th>
                      <th className="p-3.5 md:p-4">Financial Relief Potential</th>
                      <th className="p-3.5 md:p-4">Procedural Timeframe</th>
                      <th className="p-3.5 md:p-4">CIBIL Score Trajectory</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-700">
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60 transition-colors">
                      <td className="p-3.5 md:p-4 font-bold text-slate-900">One-Time Settlement (OTS)</td>
                      <td className="p-3.5 md:p-4">Credit Desk &amp; Court Withdrawal</td>
                      <td className="p-3.5 md:p-4 font-bold text-emerald-600">40% to 55% Principal Waiver</td>
                      <td className="p-3.5 md:p-4">30 to 60 Days</td>
                      <td className="p-3.5 md:p-4">Settled (Rebuildable to 750+)</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60 transition-colors">
                      <td className="p-3.5 md:p-4 font-bold text-slate-900">Loan Restructuring</td>
                      <td className="p-3.5 md:p-4">Internal Bank Branch Level</td>
                      <td className="p-3.5 md:p-4 font-bold text-amber-600">0% Waiver (Extended Tenure)</td>
                      <td className="p-3.5 md:p-4">45 to 90 Days</td>
                      <td className="p-3.5 md:p-4">Restructured tag on report</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60 transition-colors">
                      <td className="p-3.5 md:p-4 font-bold text-slate-900">Civil Court Defense</td>
                      <td className="p-3.5 md:p-4">District Civil / Commercial Court</td>
                      <td className="p-3.5 md:p-4 text-slate-700">Subject to Final Judgment</td>
                      <td className="p-3.5 md:p-4">2 to 5 Years</td>
                      <td className="p-3.5 md:p-4">Suit Filed (Sub-550 Score)</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60 transition-colors">
                      <td className="p-3.5 md:p-4 font-bold text-slate-900">Lok Adalat Settlement</td>
                      <td className="p-3.5 md:p-4">NALSA Judicial Bench</td>
                      <td className="p-3.5 md:p-4 font-bold text-emerald-600">30% to 50% Compromise Decree</td>
                      <td className="p-3.5 md:p-4">Single Hearing Sitting</td>
                      <td className="p-3.5 md:p-4">Settled via Judicial Decree</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60 transition-colors bg-red-50/30">
                      <td className="p-3.5 md:p-4 font-bold text-red-700">Ignoring Court Summons</td>
                      <td className="p-3.5 md:p-4 text-red-700">Ex-Parte Judicial Order</td>
                      <td className="p-3.5 md:p-4 font-bold text-red-700">0% Relief (100% + Interest)</td>
                      <td className="p-3.5 md:p-4 text-red-700">Immediate Ex-Parte Order</td>
                      <td className="p-3.5 md:p-4 text-red-700">Wilful Default / Sub-500 Score</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 4: TECHNICAL CIBIL ALGORITHM & SCORING MATH */}
            <section id="cibil-algorithm-scoring-math" className="space-y-4">
              <h2 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">
                4. CIBIL Algorithm: Legal Defaults &amp; Credit Rebuilding
              </h2>
              <p className="text-xs md:text-sm text-slate-700 leading-relaxed">
                Credit bureaus evaluate creditworthiness using an algorithm weighted across five metrics: payment history (35%), credit utilization (30%), credit history length (15%), credit mix (10%), and new inquiries (10%).
              </p>
              <p className="text-xs md:text-sm text-slate-700 leading-relaxed">
                When a bank files a recovery suit, it reports the account as Suit Filed, causing a score drop to sub-550. Executing an out-of-court OTS halts litigation and updates bureau status to Settled. Under Section 21 of CICRA 2005, borrowers can convert settled records to Closed or restore their CIBIL score to 750+ within 12 to 24 months through secured credit builder tools.
              </p>
            </section>

            {/* SECTION 5: INFOGRAPHIC ASSET CARD */}
            <section id="infographic-overview" className="space-y-4">
              <h2 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">
                Court Summons Defense Blueprint &amp; Action Plan
              </h2>
              <p className="text-xs md:text-sm text-slate-700 leading-relaxed">
                The visual roadmap below details the 6-stage procedural workflow for responding to personal loan court summons, establishing legal representation, and negotiating an out-of-court compromise settlement.
              </p>

              <div className="bg-white rounded-2xl border border-slate-200/80 shadow-md p-4 overflow-hidden">
                <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-slate-900">
                  <Image
                    src="/images/infographics/summons-from-court-for-personal-loan.jpg"
                    alt="Court Summons for Personal Loan Default 6-Stage Defense Blueprint"
                    fill
                    priority
                    sizes="(max-width: 1200px) 100vw, 1200px"
                    className="object-cover"
                  />
                </div>
                <div className="mt-3 flex flex-col sm:flex-row items-center justify-between gap-2 px-1 text-xs text-slate-600">
                  <span>Visual 6-Stage Judicial Defense and Compromise Settlement Architecture</span>
                  <a
                    href="/images/infographics/summons-from-court-for-personal-loan.jpg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1886ff] font-bold hover:underline inline-flex items-center gap-1"
                  >
                    <span>View High-Resolution Infographic</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </section>

            {/* SECTION 6: STEP-BY-STEP SOP (6 STAGES) */}
            <section id="step-by-step-defense-sop" className="space-y-4">
              <h2 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">
                5. Step-by-Step SOP: 6 Stages of Court Summons Defense
              </h2>
              <p className="text-xs md:text-sm text-slate-700 leading-relaxed">
                Handling a personal loan court summons requires a disciplined standard operating procedure combining courtroom representation with credit desk negotiations.
              </p>

              <div className="space-y-4">
                <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-blue-100 text-[#1886ff] font-extrabold text-xs flex items-center justify-center flex-shrink-0">
                      1
                    </span>
                    <h3 className="font-bold text-slate-900 text-sm md:text-base">
                      Stage 1: Judicial Audit &amp; Summons Verification
                    </h3>
                  </div>
                  <p className="text-xs md:text-sm text-slate-700 leading-relaxed pl-10">
                    We inspect the summons to verify court seal authenticity, case filing number, judicial forum, and appearance date, checking for limitation defects under the Limitation Act 1963 and unverified compound penal interest.
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-blue-100 text-[#1886ff] font-extrabold text-xs flex items-center justify-center flex-shrink-0">
                      2
                    </span>
                    <h3 className="font-bold text-slate-900 text-sm md:text-base">
                      Stage 2: Comprehensive Hardship Dossier Compilation
                    </h3>
                  </div>
                  <p className="text-xs md:text-sm text-slate-700 leading-relaxed pl-10">
                    To demonstrate bona fide inability rather than wilful default, we assemble documentation verifying job loss, medical emergencies, or revenue downturns to substantiate compromise settlement proposals.
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-blue-100 text-[#1886ff] font-extrabold text-xs flex items-center justify-center flex-shrink-0">
                      3
                    </span>
                    <h3 className="font-bold text-slate-900 text-sm md:text-base">
                      Stage 3: Formal Appearance &amp; Vakalatnama Execution
                    </h3>
                  </div>
                  <p className="text-xs md:text-sm text-slate-700 leading-relaxed pl-10">
                    Our panel advocate enters appearance before the judge by submitting a Vakalatnama. In Order 37 summary suits, we file Leave to Defend. In Section 138/25 cases, counsel secures bail to avoid arrest warrants.
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-blue-100 text-[#1886ff] font-extrabold text-xs flex items-center justify-center flex-shrink-0">
                      4
                    </span>
                    <h3 className="font-bold text-slate-900 text-sm md:text-base">
                      Stage 4: Bilateral Credit Committee Negotiations
                    </h3>
                  </div>
                  <p className="text-xs md:text-sm text-slate-700 leading-relaxed pl-10">
                    While counsel manages court proceedings, our debt negotiators engage the bank stressed asset desk. We bypass collection agents, present hardship records, and demand complete penal fee waivers to secure a 40% to 55% settlement.
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-blue-100 text-[#1886ff] font-extrabold text-xs flex items-center justify-center flex-shrink-0">
                      5
                    </span>
                    <h3 className="font-bold text-slate-900 text-sm md:text-base">
                      Stage 5: Settlement Sanction Letter Legal Audit
                    </h3>
                  </div>
                  <p className="text-xs md:text-sm text-slate-700 leading-relaxed pl-10">
                    Before authorizing payment, our legal team verifies the formal settlement letter. We confirm authentic bank letterhead, verify tranche payment schedules, and ensure a clause mandating court suit withdrawal upon payment.
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-blue-100 text-[#1886ff] font-extrabold text-xs flex items-center justify-center flex-shrink-0">
                      6
                    </span>
                    <h3 className="font-bold text-slate-900 text-sm md:text-base">
                      Stage 6: Direct Remittance, Court Dismissal &amp; NDC
                    </h3>
                  </div>
                  <p className="text-xs md:text-sm text-slate-700 leading-relaxed pl-10">
                    You remit compromise funds directly into your loan account via RTGS or NEFT. The bank counsel files a withdrawal memo in court, dismissing the suit. We obtain your No Dues Certificate and initiate bureau updates.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: STATUTORY NOTICE DEFENSE & LEGAL RIGHTS */}
            <section id="statutory-notice-defense-rights" className="space-y-4">
              <h2 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">
                6. Statutory Notice Defense: Legal Framework &amp; Rights
              </h2>
              <p className="text-xs md:text-sm text-slate-700 leading-relaxed">
                Indian law provides procedural protections against arbitrary recovery litigation. Understanding your statutory rights ensures you never surrender valid legal defenses.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs space-y-2">
                  <div className="flex items-center gap-2">
                    <Scale className="w-4 h-4 text-[#1886ff]" />
                    <h3 className="font-bold text-slate-900 text-sm">
                      Section 25 Payment &amp; Settlement Systems Act
                    </h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Applies when NACH auto-debit mandates bounce. Lenders must prove that a valid statutory 30-day demand notice was properly served prior to filing a court complaint.
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs space-y-2">
                  <div className="flex items-center gap-2">
                    <Scale className="w-4 h-4 text-[#1886ff]" />
                    <h3 className="font-bold text-slate-900 text-sm">
                      Section 138 Negotiable Instruments Act
                    </h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Governs bounced security cheques. Banks must prove the cheque was issued toward an existing legal debt rather than as an undated security token at loan sanction.
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs space-y-2">
                  <div className="flex items-center gap-2">
                    <Scale className="w-4 h-4 text-[#1886ff]" />
                    <h3 className="font-bold text-slate-900 text-sm">
                      Arbitration &amp; Supreme Court Precedents
                    </h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under Supreme Court rulings in TRF Ltd. and Perkins Eastman, banks cannot unilaterally appoint a sole arbitrator. Such appointments are void under Section 12(5) of the 1996 Act.
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs space-y-2">
                  <div className="flex items-center gap-2">
                    <Scale className="w-4 h-4 text-[#1886ff]" />
                    <h3 className="font-bold text-slate-900 text-sm">
                      DRT Jurisdiction &amp; RBI Fair Practices
                    </h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Debt Recovery Tribunals handle claims strictly exceeding ₹20 Lakhs. Under RBI Fair Practices Code 2026, lenders cannot use abusive language, contact third parties, or visit outside 8 AM to 7 PM.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 8: 3-TIER GRIEVANCE ESCALATION MATRIX */}
            <section id="three-tier-escalation-matrix" className="space-y-4">
              <h2 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">
                7. 3-Tier Grievance Escalation &amp; Redressal Matrix
              </h2>
              <p className="text-xs md:text-sm text-slate-700 leading-relaxed">
                When lenders violate banking guidelines or initiate coercive litigation, borrowers can activate the formal 3-tier regulatory redressal mechanism established by the Reserve Bank of India.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs md:text-sm">
                <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs space-y-2">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                    <span className="font-bold text-slate-900">Level 1: Grievance Redressal Officer (7-10 Days)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Submit a written complaint to the bank Grievance Redressal Officer detailing unfair interest calculation, lack of statutory notice, or recovery agent misconduct.
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs space-y-2">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                    <span className="font-bold text-slate-900">Level 2: Principal Nodal Officer (14-21 Days)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If Level 1 fails to resolve the dispute within 10 days, escalate the matter to the bank Principal Nodal Officer and Internal Ombudsman for executive review.
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs space-y-2">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                    <span className="font-bold text-slate-900">Level 3: RBI Ombudsman (30 Days Maximum)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    File an institutional complaint on the RBI Integrated Ombudsman portal (cms.rbi.org.in) for deficiency in banking service, improper billing, or unfair litigation tactics.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 9: CHRONOLOGICAL TIMELINE TABLE */}
            <section id="chronological-timeline-table" className="space-y-4">
              <h2 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">
                8. Chronological Timeline: Default to Decree Avoidance
              </h2>
              <p className="text-xs md:text-sm text-slate-700 leading-relaxed">
                Loan delinquency progresses through predictable legal milestones. Engaging specialized defense early prevents ex-parte orders and maximizes settlement savings.
              </p>

              {/* 4-Sided Bordered Chronological Table */}
              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto shadow-xs bg-white">
                <table className="w-full text-left text-xs md:text-sm divide-y divide-slate-200/80">
                  <thead className="bg-slate-50 text-slate-900 font-bold">
                    <tr className="divide-x divide-slate-200/80">
                      <th className="p-3.5 md:p-4">Timeframe</th>
                      <th className="p-3.5 md:p-4">Regulatory &amp; Legal Status</th>
                      <th className="p-3.5 md:p-4">Lender Recovery Action</th>
                      <th className="p-3.5 md:p-4">Recommended Borrower Defense</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-700">
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60 transition-colors">
                      <td className="p-3.5 md:p-4 font-bold text-slate-900">Day 1 to 30</td>
                      <td className="p-3.5 md:p-4">SMA-0 Delinquency</td>
                      <td className="p-3.5 md:p-4">Automated SMS, emails and reminder calls</td>
                      <td className="p-3.5 md:p-4">Review budget and assess restructuring options</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60 transition-colors">
                      <td className="p-3.5 md:p-4 font-bold text-slate-900">Day 31 to 90</td>
                      <td className="p-3.5 md:p-4">SMA-1 / SMA-2 Alert</td>
                      <td className="p-3.5 md:p-4">Third-party agency calls and field visits</td>
                      <td className="p-3.5 md:p-4">Enforce RBI calling hours and compile hardship records</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60 transition-colors">
                      <td className="p-3.5 md:p-4 font-bold text-slate-900">Day 90 to 120</td>
                      <td className="p-3.5 md:p-4 font-bold text-amber-600">NPA Classification</td>
                      <td className="p-3.5 md:p-4">Advocate legal demand notice issued</td>
                      <td className="p-3.5 md:p-4">Issue legal reply contesting penal interest and charges</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60 transition-colors">
                      <td className="p-3.5 md:p-4 font-bold text-slate-900">Day 120 to 180</td>
                      <td className="p-3.5 md:p-4 font-bold text-red-600">Court Summons Issued</td>
                      <td className="p-3.5 md:p-4">Filing of summary suit or Section 138/25 case</td>
                      <td className="p-3.5 md:p-4">Engage CredSettle advocate to file Vakalatnama and defense</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60 transition-colors bg-emerald-50/30">
                      <td className="p-3.5 md:p-4 font-bold text-emerald-700">Month 6+</td>
                      <td className="p-3.5 md:p-4 font-bold text-emerald-700">Compromise Resolution</td>
                      <td className="p-3.5 md:p-4">Credit desk accepts 40%-55% OTS waiver</td>
                      <td className="p-3.5 md:p-4">Execute settlement sanction, dismiss suit and get NDC</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: SPECIALIZED REAL-WORLD SCENARIOS */}
            <section id="specialized-real-world-scenarios" className="space-y-4">
              <h2 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">
                9. Specialized Scenarios: Layoffs, ARCs &amp; Multiple Loans
              </h2>
              <p className="text-xs md:text-sm text-slate-700 leading-relaxed">
                Legal defense strategies must adapt to the commercial circumstances surrounding personal loan defaults. CredSettle handles complex loan disputes nationwide.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs space-y-2">
                  <div className="flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-[#1886ff]" />
                    <h3 className="font-bold text-slate-900 text-sm">
                      Multi-Lender Consolidation &amp; Cross-Court Filings
                    </h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Borrowers with multiple defaulted loans often face concurrent summons across different courts. We consolidate legal representations, avoid conflicting orders, and coordinate simultaneous multi-bank settlements.
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs space-y-2">
                  <div className="flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-[#1886ff]" />
                    <h3 className="font-bold text-slate-900 text-sm">
                      Corporate Layoffs &amp; Loss of Livelihood
                    </h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Salaried executives facing sudden job loss cannot service high-value personal loans. We leverage severance records, termination notices, and bank statements to secure maximum principal waivers.
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs space-y-2">
                  <div className="flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-[#1886ff]" />
                    <h3 className="font-bold text-slate-900 text-sm">
                      Proprietorship Working Capital Personal Loans
                    </h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Business owners who used personal loans for operational cash flow face recovery suits during business downturns. We shield personal assets from business debt claims and prevent insolvency actions.
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs space-y-2">
                  <div className="flex items-center gap-2">
                    <Landmark className="w-4 h-4 text-[#1886ff]" />
                    <h3 className="font-bold text-slate-900 text-sm">
                      ARC Debt Assignments &amp; Inflated Demands
                    </h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    When loans are assigned to Asset Reconstruction Companies (ARCs), ARCs initiate aggressive suits demanding inflated interest. We audit assignment deeds under SARFAESI Section 5 and negotiate deep haircuts.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 11: COMPANY PROFILE */}
            <section id="company-profile" className="space-y-4">
              <h2 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">
                About CredSettle: Legal Defense &amp; Debt Resolution
              </h2>
              <CompanySection />
            </section>

            {/* SECTION 12: 10 SYNCHRONIZED FAQS */}
            <section id="frequently-asked-questions" className="space-y-4">
              <div className="flex items-center gap-2.5 mb-2">
                <HelpCircle className="w-5 h-5 text-[#1886ff]" />
                <h2 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">
                  Frequently Asked Questions: Court Summons for Loan
                </h2>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                Find clear, authoritative answers to common legal and financial questions regarding personal loan court summons, advocate representation, and out-of-court settlements in India.
              </p>

              <div className="space-y-3">
                {faqs.map((faq, idx) => (
                  <div
                    key={idx}
                    className="border border-slate-200/80 rounded-2xl bg-white overflow-hidden shadow-xs transition-colors"
                  >
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full text-left p-4 md:p-5 flex items-center justify-between gap-4 font-bold text-slate-900 hover:text-[#1886ff] transition-colors text-xs md:text-sm"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown
                        className={
                          "w-4 h-4 text-slate-500 transition-transform duration-200 flex-shrink-0 " +
                          (openFaq === idx ? "rotate-180 text-[#1886ff]" : "")
                        }
                      />
                    </button>
                    {openFaq === idx && (
                      <div className="px-4 pb-5 md:px-5 md:pb-6 text-xs md:text-sm text-slate-700 leading-relaxed border-t border-slate-100 pt-3 bg-slate-50/50">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* SECTION 13: CITATIONS & OUTBOUND AUTHORITY GRID */}
            <section id="regulatory-sources" className="space-y-4 bg-white rounded-2xl border border-slate-200/80 p-6 shadow-xs">
              <h2 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">
                Statutory Authorities &amp; Governing Legal Frameworks
              </h2>
              
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                CredSettle operates strictly within statutory provisions established by the Indian judicial system, Parliamentary enactments, and regulatory directives of the Reserve Bank of India.
              </p>

              {/* 6 Outbound Authority Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-2">
                <a
                  href="https://www.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-blue-50/60 hover:border-blue-200 text-slate-700 transition-all text-xs font-semibold"
                >
                  <span>RBI Official Portal</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>

                <a
                  href="https://cms.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-blue-50/60 hover:border-blue-200 text-slate-700 transition-all text-xs font-semibold"
                >
                  <span>RBI Ombudsman (CMS)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>

                <a
                  href="https://www.cibil.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-blue-50/60 hover:border-blue-200 text-slate-700 transition-all text-xs font-semibold"
                >
                  <span>TransUnion CIBIL</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>

                <a
                  href="https://www.indiacode.nic.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-blue-50/60 hover:border-blue-200 text-slate-700 transition-all text-xs font-semibold"
                >
                  <span>India Code Legislative Acts</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>

                <a
                  href="https://nalsa.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-blue-50/60 hover:border-blue-200 text-slate-700 transition-all text-xs font-semibold"
                >
                  <span>NALSA Lok Adalat</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>

                <a
                  href="https://cybercrime.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-blue-50/60 hover:border-blue-200 text-slate-700 transition-all text-xs font-semibold"
                >
                  <span>National Cyber Crime Portal</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>

              {/* Statutory Citations List */}
              <ul className="space-y-2 text-xs text-slate-600 border-t border-slate-100 pt-4 leading-relaxed">
                <li><strong>Code of Civil Procedure, 1908:</strong> Order XXXVII (Summary Procedure), Order IX Rule 6 (Ex-Parte Hearing), and Section 60 (Property and Salary Exemptions from Attachment).</li>
                <li><strong>Negotiable Instruments Act, 1881:</strong> Section 138 (Dishonour of Cheque for Insufficiency of Funds) and Section 141 (Company Liability).</li>
                <li><strong>Payment and Settlement Systems Act, 2007:</strong> Section 25 (Dishonour of Electronic Funds Transfer Mandates).</li>
                <li><strong>Reserve Bank of India Master Directions:</strong> Master Direction on Fair Practices Code for Lenders and Regulatory Framework for Stressed Assets (Updated 2026).</li>
                <li><strong>Credit Information Companies (Regulation) Act, 2005:</strong> Section 21 (Statutory Duty of Accuracy and Credit Information Dispute Resolution).</li>
              </ul>

              {/* 10 Internal Topic Badges */}
              <div className="pt-4 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Explore Related CredSettle Legal &amp; Debt Guides:</span>
                <div className="flex flex-wrap gap-2">
                  <Link href="/bank-recovery-case-in-court" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Bank Court Recovery Cases
                  </Link>
                  <Link href="/bank-sent-legal-notice-for-loan-what-to-do" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Bank Sent Legal Notice
                  </Link>
                  <Link href="/arbitration-notice-personal-loan-default" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Arbitration Notice Defense
                  </Link>
                  <Link href="/services/personal-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Personal Loan Settlement
                  </Link>
                  <Link href="/services/anti-harassment" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Anti-Harassment Defense
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
                </div>
              </div>
            </section>

          </div>

          {/* ================= RIGHT COLUMN: STICKY SIDEBAR ================= */}
          <aside className="space-y-5 sticky top-6">
            
            {/* Card 1: Author Bio Card */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3">
              <div className="flex items-center gap-3">
                <Link
                  href="/author/ashish-jhangra"
                  className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-extrabold text-sm hover:bg-blue-200 transition-colors flex-shrink-0"
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
                Specialized in civil debt defense, banking regulatory compliance, Section 138/25 dispute resolution, and NPA compromise settlements across Indian judicial and commercial tribunals.
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
              className="rounded-3xl p-6 text-white text-center space-y-4 shadow-md relative overflow-hidden"
              style={{ backgroundColor: "#2452ae" }}
            >
              <div className="space-y-1 text-center">
                <span className="text-xs font-black uppercase tracking-wider text-blue-200 bg-white/10 px-3 py-1 rounded-full inline-block mb-1">
                  100% CONFIDENTIAL LEGAL DEFENSE
                </span>
                <h3 className="text-lg md:text-xl font-bold text-white leading-snug">
                  Received a Court Summons?
                </h3>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our panel advocates file your court defense, stop recovery agent harassment, prevent ex-parte decrees, and negotiate a 40% to 55% compromise waiver.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Received a Summons? Hire a Defense Lawyer
              </Link>
              <div className="pt-2 flex flex-col items-center justify-center gap-1 text-[11px] text-blue-200">
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
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <h4 className="font-bold text-slate-900 text-sm">The CredSettle Advantage</h4>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Zero Upfront Risk:</strong> Success-linked settlement fee structure.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Direct Bank Remittance:</strong> Payments made strictly to your loan account.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>RBI &amp; CPC Compliance:</strong> 100% lawful dispute handling and defense.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Pan-India Advocacy:</strong> Verified panel advocates across all major cities.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <h4 className="font-bold text-slate-900 text-sm">Related Legal Guides</h4>
              <div className="space-y-2.5">
                <Link
                  href="/bank-recovery-case-in-court"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Bank Filed Recovery Case in Civil Court
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Civil suit defense &amp; summons guide &rarr;</span>
                </Link>

                <Link
                  href="/bank-sent-legal-notice-for-loan-what-to-do"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Bank Sent Legal Notice for Loan Default
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Full step-by-step reply blueprint &rarr;</span>
                </Link>

                <Link
                  href="/convert-settled-status-to-closed"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Convert Settled Loan to Closed Status
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Clean credit report blueprint &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
