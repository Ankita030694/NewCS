'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import StatsStrip from '@/components/StatsStrip';
import CompanySection from '@/components/CompanySection';
import {
  ChevronDown,
  Scale,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  FileText,
  HelpCircle,
  TrendingUp,
  Award,
  BookOpen,
  Building2,
  Check,
  Lock,
  Phone,
  AlertCircle,
  Bookmark,
  ArrowRight,
  Clock,
  UserCheck,
  Sparkles,
  Gavel,
  BadgeAlert,
  Landmark,
  Calculator,
  ExternalLink,
  ShieldAlert
} from 'lucide-react';

export default function FileCaveatPetitionAgainstBankClient() {
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
    { id: 'debt-economics-npa-dynamics', label: '1. Debt Economics & Preemptive Risk' },
    { id: 'financial-breakdown-settlement-math', label: '2. Financial Math & Litigation Costs' },
    { id: 'legal-forum-comparison-matrix', label: '3. Legal Defense Comparison Matrix' },
    { id: 'cibil-algorithm-credit-impact', label: '4. CIBIL Algorithm & CICRA Remedies' },
    { id: 'infographic-overview', label: 'Visual 6-Stage Caveat Blueprint' },
    { id: 'step-by-step-caveat-sop', label: '6. 6-Stage Procedural SOP' },
    { id: 'statutory-notice-defense-grid', label: '7. Statutory Notice Defense Grid' },
    { id: 'three-tier-escalation-matrix', label: '8. 3-Tier Escalation Matrix' },
    { id: 'chronological-timeline-table', label: '9. Chronological Resolution Milestones' },
    { id: 'specialized-real-world-scenarios', label: '10. Specialized Real-World Scenarios' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
    {
      q: 'What is a caveat petition under Section 148A against a bank?',
      a: 'A caveat petition under Section 148A of the Code of Civil Procedure (CPC), 1908 is a formal legal application lodged by a borrower in a civil court, commercial court, or Debt Recovery Tribunal (DRT). It notifies the court that if the lending bank or financial institution files any suit, appeal, or interim application against the borrower, the court must not pass any ex-parte order or injunction without first serving notice and providing the borrower a fair hearing.'
    },
    {
      q: 'How long does a caveat petition remain legally valid in court?',
      a: 'Under Section 148A(5) of the Code of Civil Procedure, a caveat petition remains legally enforceable for exactly 90 days from the date it is lodged in court. If the dispute is not resolved or if the bank does not file its legal action within this 90-day window, the borrower must file a fresh caveat petition to maintain continuous legal protection against ex-parte orders.'
    },
    {
      q: 'Can a caveat petition be filed in the Debt Recovery Tribunal (DRT)?',
      a: 'Yes, a caveat petition can be filed before the Debt Recovery Tribunal (DRT) and Debt Recovery Appellate Tribunal (DRAT) under Section 22 of the Recovery of Debts and Bankruptcy Act, 1993 read with DRT (Procedure) Rules. Filing a caveat in DRT prevents the bank from securing ex-parte recovery certificates, asset attachment orders, or advocate commissioner appointments for property inspection.'
    },
    {
      q: 'Does filing a caveat petition stop a bank from taking SARFAESI action?',
      a: 'A caveat petition filed in civil court does not automatically bar a bank from issuing statutory demand notices under Section 13(2) of the SARFAESI Act because SARFAESI is a non-judicial administrative recovery enforcement mechanism. However, filing a caveat in the DRT under Section 17 ensures that if the bank approaches the tribunal for interim protection or if an appeal is filed, the borrower is heard immediately.'
    },
    {
      q: 'What happens if a court passes an ex-parte order after a caveat is filed?',
      a: 'Under established Supreme Court and High Court jurisprudence, if a court passes an ex-parte interim order or injunction against a caveator without serving the mandatory statutory notice under Section 148A(3), such an order is procedurally defective and liable to be recalled or set aside immediately upon filing an application pointing out the subsisting caveat.'
    },
    {
      q: 'Can a borrower file a caveat petition without an advocate?',
      a: 'While an individual has the statutory right to appear in person under civil procedure rules, drafting and filing a caveat petition involves technical compliance, including precise identification of the prospective dispute, executing a supporting verification affidavit, and serving mandatory RPAD postal notice to the bank under Section 148A(2). Engaging experienced debt resolution professionals or advocates ensures zero procedural defects.'
    },
    {
      q: 'What documents are required to file a caveat petition against a bank?',
      a: 'The essential documents required to file a caveat include a copy of the loan sanction letter or credit facility agreement, recent loan account statements, any recall notices or legal demand notices issued by the bank, a duly verified supporting affidavit, proof of postal service (RPAD receipt) sent to the bank, and an executed Vakalatnama or letter of authority.'
    },
    {
      q: 'How does a caveat petition help in negotiating a One-Time Settlement (OTS)?',
      a: 'Filing a caveat petition strips the bank of the element of surprise and blocks fast-track ex-parte asset attachments. Facing the reality of contested civil litigation, extended court hearings, and higher legal expenses, the bank credit committee and legal recovery desk become far more amenable to offering substantial 40% to 60% waivers on penal interest and closing the loan through an OTS.'
    },
    {
      q: 'Is it mandatory to serve a registered post notice of the caveat to the bank?',
      a: 'Yes. Under Section 148A(2) of the Code of Civil Procedure, the caveator is statutorily mandated to serve a copy of the caveat petition by Registered Post with Acknowledgment Due (RPAD) or speed post to the prospective applicant (the bank). Proof of dispatch and tracking receipt must be submitted to the court registry at the time of lodging the caveat.'
    },
    {
      q: 'Can a bank file a caveat petition against a borrower?',
      a: 'Yes. Banks and financial institutions frequently lodge caveat petitions in High Courts and DRTs after initiating recovery proceedings or issuing SARFAESI possession notices. Lenders do this preemptively to prevent borrowers from obtaining ex-parte interim stay orders or restraining orders against property auctions and recovery enforcement actions.'
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-xs text-xs font-bold uppercase tracking-wider text-blue-100 mb-4 border border-white/15">
            <Scale className="w-3.5 h-3.5 text-blue-200" />
            <span>Section 148A Civil Procedure Code Defense</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            How to File a Caveat Petition Against Bank Under Section 148A
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            Anticipating bank legal action or summary recovery proceedings? Lodging a caveat petition under Section 148A CPC prevents surprise ex-parte stay orders, freezes arbitrary asset attachments, and forces the judicial bench to hear your defense before passing any adverse orders.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>File a Caveat Petition Today</span>
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
                  <span>Preemptive Legal Shield</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Governed by Section 148A of the Code of Civil Procedure, 1908 &amp; RDB Act 1993.
                </p>
              </div>
            </div>
          </aside>

          {/* ================= MIDDLE COLUMN: MAIN CONTENT ================= */}
          <div className="space-y-8 md:space-y-10 min-w-0">
            
            {/* Executive Brief Box */}
            <div
              id="quick-crux"
              className="scroll-target rounded-2xl bg-[#F4F8FE] border border-blue-100/90 border-l-[5px] border-l-[#1886ff] p-5 sm:p-6 md:p-7 shadow-xs space-y-4 text-slate-800"
            >
              <div className="flex items-center gap-2 text-xs md:text-sm font-black uppercase tracking-wider text-[#1886ff]">
                <Bookmark className="w-4 h-4 text-[#1886ff]" />
                <span>EXECUTIVE BRIEF: SECTION 148A CAVEAT DEFENSE MECHANISM</span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <div>
                    <strong className="text-slate-900 font-bold">Mandatory Prior Hearing:</strong> Bars courts from passing ex-parte orders without serving advance notice and hearing your defense.
                  </div>
                </li>

                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <div>
                    <strong className="text-slate-900 font-bold">Strict 90-Day Legal Shield:</strong> Provides 90 calendar days of statutory preemptive protection under Section 148A(5).
                  </div>
                </li>

                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <div>
                    <strong className="text-slate-900 font-bold">Blocks Sudden Asset Freezes:</strong> Prevents surprise bank account attachments and property injunctions under Order 38 and Order 39.
                  </div>
                </li>

                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <div>
                    <strong className="text-slate-900 font-bold">Enforceable Across All Forums:</strong> Valid in District Civil Courts, High Courts, Commercial Courts, and Debt Recovery Tribunals.
                  </div>
                </li>

                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <div>
                    <strong className="text-slate-900 font-bold">Drives Favorable OTS Settlements:</strong> Eliminates fast-track litigation leverage and pushes the bank to negotiate an affordable compromise waiver.
                  </div>
                </li>
              </ul>
            </div>

            {/* SECTION 1: Debt Economics & NPA Dynamics */}
            <section id="debt-economics-npa-dynamics" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Debt Economics &amp; NPA Dynamics</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. Debt Economics, NPA Dynamics, and Preemptive Court Risks
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When a borrower experiences financial distress, commercial banks and NBFCs follow a strict regulatory recovery cycle mandated by the Reserve Bank of India. The moment an account crosses 30, 60, and 90 days past due, it transitions from Special Mention Account stages (SMA-0, SMA-1, SMA-2) directly into Non-Performing Asset (NPA) classification. Upon NPA declaration, lenders face rigorous provisioning requirements under RBI Prudential Norms, compelling them to lock up valuable Tier-1 capital against potential credit defaults.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                To minimize balance sheet write-offs and recover funds before standard limitations lapse, bank legal departments often bypass preliminary mediation and rush directly to court. Their preferred strategy is filing summary recovery suits under Order 37 CPC or original applications in Debt Recovery Tribunals (DRTs) alongside urgent interim applications. Lenders routinely seek ex-parte temporary injunctions, receiver appointments, or pre-judgment asset freezes under Order 38 Rule 5 CPC without prior notice to the borrower.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This aggressive procedural maneuver catches distressed borrowers completely off-guard. Without timely intervention, a borrower may suddenly discover their business bank accounts frozen or residential properties subjected to interim status quo orders. Filing a caveat petition under Section 148A of the Code of Civil Procedure neutralizes this aggressive tactic entirely. By formally placing the court on notice, the borrower builds an impenetrable legal barrier that disallows any unilateral judicial relief and restores parity between both parties.
              </p>
            </section>

            {/* SECTION 2: Financial Breakdown & Settlement Math */}
            <section id="financial-breakdown-settlement-math" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Calculator className="w-4 h-4 text-[#1886ff]" />
                <span>Financial Breakdown &amp; Settlement Math</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. Financial Breakdown, Litigation Math, and Settlement Economics
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                A primary reason loan disputes spiral out of control during litigation is the exponential inflation of outstanding debt caused by compound penal interest, late payment charges, and legal retainer surcharges. Once a loan defaults, banks typically levy punitive interest rates ranging between 24% and 36% per annum on the total overdue balance. Over a 180-day to 360-day litigation cycle, these phantom charges often inflate the outstanding claim by 30% to 50% above the genuine principal disbursement.
              </p>

              {/* Financial Comparison Card */}
              <div className="bg-white rounded-2xl border border-slate-200/80 p-5 md:p-6 shadow-xs space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-sm md:text-base">
                    <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                    <span>Representative 180-Day NPA Debt Settlement Model</span>
                  </div>
                  <span className="text-xs font-black px-2.5 py-1 bg-emerald-50 text-emerald-700 rounded-md">
                    45% - 55% OTS TARGET
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs md:text-sm">
                  <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100 space-y-1">
                    <span className="text-slate-500 font-semibold block text-[11px]">Original Principal Balance</span>
                    <span className="text-slate-900 font-extrabold text-base">₹15,00,000</span>
                    <p className="text-[11px] text-slate-500">Core borrowed funds disbursed.</p>
                  </div>

                  <div className="p-3.5 bg-rose-50 rounded-xl border border-rose-100 space-y-1">
                    <span className="text-rose-600 font-semibold block text-[11px]">Bank Inflated Claim (Post-NPA)</span>
                    <span className="text-rose-900 font-extrabold text-base">₹22,40,000</span>
                    <p className="text-[11px] text-rose-700">Includes 30% penal compound interest.</p>
                  </div>

                  <div className="p-3.5 bg-blue-50 rounded-xl border border-blue-100 space-y-1">
                    <span className="text-[#1886ff] font-semibold block text-[11px]">CredSettle Negotiated OTS</span>
                    <span className="text-blue-950 font-extrabold text-base">₹8,50,000 - ₹9,75,000</span>
                    <p className="text-[11px] text-blue-700">Waiver of 100% penal fees + principal cut.</p>
                  </div>
                </div>

                <p className="text-xs md:text-sm text-slate-600 leading-relaxed pt-2">
                  When a borrower lodges a caveat, the bank legal counsel is compelled to disclose their complete claim ledger in open court. This judicial scrutiny exposes arbitrary penal compounding and violations of the RBI Master Direction on Fair Practices Code. Realizing that obtaining a summary decree will involve protracted hearings, the bank credit committee shifts from adversarial litigation to a commercial compromise, making an affordable One-Time Settlement the most cost-effective recovery path.
                </p>
              </div>
            </section>

            {/* SECTION 3: 4-Sided Bordered Comparison Matrix */}
            <section id="legal-forum-comparison-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Strategic Comparison Matrix</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Comparative Analysis: Caveat Shield vs Alternative Legal Responses
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Navigating bank disputes requires choosing the right legal posture. Compare how lodging a Section 148A caveat measures against other procedural strategies when anticipating bank court recovery:
              </p>

              <div className="overflow-x-auto rounded-2xl border border-slate-200/80 bg-white shadow-xs">
                <table className="w-full text-left text-xs md:text-sm border-collapse">
                  <thead className="bg-slate-50 border-b border-slate-200/80 text-slate-700">
                    <tr className="divide-x divide-slate-200/80">
                      <th className="p-3.5 font-bold">Legal Approach</th>
                      <th className="p-3.5 font-bold">Governing Law</th>
                      <th className="p-3.5 font-bold">Ex-Parte Order Protection</th>
                      <th className="p-3.5 font-bold">Right to Be Heard</th>
                      <th className="p-3.5 font-bold text-[#1886ff]">Settlement Bargaining Leverage</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-600">
                    <tr className="divide-x divide-slate-100 hover:bg-slate-50/50">
                      <td className="p-3.5 font-bold text-slate-900">Section 148A Caveat Petition</td>
                      <td className="p-3.5">Section 148A CPC / Section 22 RDB Act</td>
                      <td className="p-3.5 text-emerald-700 font-bold">100% Guaranteed Protection</td>
                      <td className="p-3.5">Mandatory prior notice before any hearing</td>
                      <td className="p-3.5 font-bold text-emerald-700">Maximum: Blocks surprise injunctions</td>
                    </tr>
                    <tr className="divide-x divide-slate-100 hover:bg-slate-50/50">
                      <td className="p-3.5 font-bold text-slate-900">Waiting for Bank Summons</td>
                      <td className="p-3.5">Order 5 CPC / DRT Rules</td>
                      <td className="p-3.5 text-rose-600 font-bold">Zero: High risk of ex-parte freezes</td>
                      <td className="p-3.5">Only after formal service (often delayed)</td>
                      <td className="p-3.5 text-rose-600">Low: Bank controls judicial timing</td>
                    </tr>
                    <tr className="divide-x divide-slate-100 hover:bg-slate-50/50">
                      <td className="p-3.5 font-bold text-slate-900">Challenging Ex-Parte Decree</td>
                      <td className="p-3.5">Order 9 Rule 13 CPC / Section 34</td>
                      <td className="p-3.5 text-amber-600 font-bold">Reactive: Post-damage defense</td>
                      <td className="p-3.5">Requires filing review applications</td>
                      <td className="p-3.5 text-amber-600">Moderate: Heavy litigation cost burden</td>
                    </tr>
                    <tr className="divide-x divide-slate-100 hover:bg-slate-50/50">
                      <td className="p-3.5 font-bold text-slate-900">Unprotected Direct OTS Talks</td>
                      <td className="p-3.5">Non-Statutory Bank Policy</td>
                      <td className="p-3.5 text-rose-600 font-bold">Zero: Bank can sue concurrently</td>
                      <td className="p-3.5">No judicial oversight or protection</td>
                      <td className="p-3.5 text-slate-600">Weak: Lenders maintain coercive pressure</td>
                    </tr>
                    <tr className="divide-x divide-slate-100 hover:bg-slate-50/50">
                      <td className="p-3.5 font-bold text-slate-900">Lok Adalat Pre-Litigation</td>
                      <td className="p-3.5">Legal Services Authorities Act 1987</td>
                      <td className="p-3.5 text-slate-700 font-semibold">Limited to consented matters</td>
                      <td className="p-3.5">Voluntary mutual participation</td>
                      <td className="p-3.5 text-slate-700">Moderate: Requires mutual bank consent</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 4: Technical CIBIL Algorithm & Scoring Math */}
            <section id="cibil-algorithm-credit-impact" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                <span>Credit Bureau Scoring &amp; CIBIL Math</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. Technical CIBIL Algorithm Mechanics and Credit Repair Pathways
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Credit information bureaus in India (TransUnion CIBIL, Experian, CRIF High Mark, and Equifax) compute credit scores using proprietary mathematical models evaluated across five fundamental pillars: Repayment History (35%), Credit Utilization Ratio (30%), Credit History Length (15%), Credit Mix (10%), and Recent Credit Inquiries (10%). The moment an account enters NPA status, regular non-payment reporting drives the credit score downward by 150 to 250 points, dropping distressed borrowers into the high-risk 500 to 580 range.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The greatest credit catastrophe occurs when a bank files a civil suit or DRT application and marks the account as &quot;Suit Filed&quot; or &quot;Willful Default&quot; on bureau databases. If the bank secures an ex-parte decree, the borrower becomes virtually blacklisted across the Indian banking ecosystem for new loans, credit cards, or commercial credit lines.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Filing a Section 148A caveat halts unmonitored litigation, keeping the dispute within manageable boundaries. Once an amicable One-Time Settlement is executed and the settlement amount remitted directly to the bank, the lender is legally obligated to issue an official No Dues Certificate (NDC). Under Section 21 of the Credit Information Companies (Regulation) Act (CICRA), 2005, the bank must update the bureau records from &quot;Suit Filed&quot; to &quot;Settled&quot; or &quot;Closed&quot; within 30 days, opening the pathway to rebuild your credit rating back above 750 within 12 to 18 months.
              </p>
            </section>

            {/* SECTION 5: Visual Infographic Asset Card */}
            <section id="infographic-overview" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Sparkles className="w-4 h-4 text-[#1886ff]" />
                <span>Visual Defense Roadmap</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. Visual Overview: 6-Stage Section 148A Caveat Workflow
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Review the end-to-end procedural lifecycle of lodging a caveat petition against a banking institution to secure preemptive legal shielding and facilitate compromise debt resolution:
              </p>

              <div className="bg-white rounded-3xl border border-slate-200/80 p-4 sm:p-6 shadow-xs space-y-3">
                <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-slate-100 bg-slate-900">
                  <Image
                    src="/images/infographics/file-caveat-petition-against-bank.jpg"
                    alt="How to File a Caveat Petition Against Bank Under Section 148A CPC"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 850px"
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-2 text-xs text-slate-500">
                  <span>Figure 1: CredSettle 6-Stage Section 148A Preemptive Caveat Defense Framework.</span>
                  <a
                    href="/images/infographics/file-caveat-petition-against-bank.jpg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1886ff] font-bold hover:underline inline-flex items-center gap-1"
                  >
                    <span>View Full Resolution</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </section>

            {/* SECTION 6: Step-by-Step SOP (6 Stages) */}
            <section id="step-by-step-caveat-sop" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>Standard Operating Procedure</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. Step-by-Step SOP: Lodging a Section 148A Caveat Petition
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Filing a caveat against a commercial lender requires rigorous adherence to statutory formalities under the Code of Civil Procedure. Here is the structured 6-stage operational blueprint executed by legal professionals:
              </p>

              <div className="space-y-4 pt-2">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-blue-100 text-[#1886ff] font-extrabold text-xs flex items-center justify-center flex-shrink-0">
                      01
                    </span>
                    <h3 className="text-sm md:text-base font-bold text-slate-900">
                      Stage 1: Pre-Litigation Threat &amp; Jurisdiction Assessment
                    </h3>
                  </div>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed pl-10">
                    Identify prospective recovery courts, such as District Civil Courts, Commercial Courts, or DRTs, from bank notices.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-blue-100 text-[#1886ff] font-extrabold text-xs flex items-center justify-center flex-shrink-0">
                      02
                    </span>
                    <h3 className="text-sm md:text-base font-bold text-slate-900">
                      Stage 2: Drafting the Caveat Petition &amp; Supporting Affidavit
                    </h3>
                  </div>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed pl-10">
                    Draft the Section 148A petition with dispute facts and execute a verified supporting affidavit.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-blue-100 text-[#1886ff] font-extrabold text-xs flex items-center justify-center flex-shrink-0">
                      03
                    </span>
                    <h3 className="text-sm md:text-base font-bold text-slate-900">
                      Stage 3: Mandatory Section 148A(2) RPAD Notice to Bank
                    </h3>
                  </div>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed pl-10">
                    Serve the caveat copy to the bank via RPAD post under Section 148A(2) and secure postal receipts.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-blue-100 text-[#1886ff] font-extrabold text-xs flex items-center justify-center flex-shrink-0">
                      04
                    </span>
                    <h3 className="text-sm md:text-base font-bold text-slate-900">
                      Stage 4: Court Registry Lodgment &amp; Caveat Number Allocation
                    </h3>
                  </div>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed pl-10">
                    Lodge the petition with postal proof in the court registry to receive a formal Caveat Number.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-blue-100 text-[#1886ff] font-extrabold text-xs flex items-center justify-center flex-shrink-0">
                      05
                    </span>
                    <h3 className="text-sm md:text-base font-bold text-slate-900">
                      Stage 5: 90-Day Preemptive Shield &amp; Cause-List Monitoring
                    </h3>
                  </div>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed pl-10">
                    Track court cause-lists during the 90-day period; the court cannot hear bank pleas without notice.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-blue-100 text-[#1886ff] font-extrabold text-xs flex items-center justify-center flex-shrink-0">
                      06
                    </span>
                    <h3 className="text-sm md:text-base font-bold text-slate-900">
                      Stage 6: Commercial Negotiation &amp; Bilateral OTS Closure
                    </h3>
                  </div>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed pl-10">
                    Negotiate an OTS with the bank credit committee, remit settlement funds, and secure an official NDC.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: Statutory Notice Defense & Legal Rights */}
            <section id="statutory-notice-defense-grid" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Landmark className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Legal Grid</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. Statutory Notice Defense &amp; Borrower Legal Rights Under Indian Law
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Indian civil and banking jurisprudence provides multiple statutory safeguards that protect borrowers from unilateral lender actions. Review the core statutory defense provisions below:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Section 148A &amp; Order 39 Rules 1-2 CPC</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Bars courts from granting ex-parte interim injunctions without advance notice and hearing.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                    <Scale className="w-4 h-4" />
                    <span>Order 38 Rule 5 CPC (Attachment Defense)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Protects assets from pre-judgment attachment by requiring banks to prove fraudulent intent.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <Landmark className="w-4 h-4" />
                    <span>Section 22 RDB Act &amp; DRT Caveats</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Ensures claims over ₹20 Lakhs in DRT cannot secure ex-parte recovery certificates.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-rose-700 font-bold text-sm">
                    <ShieldAlert className="w-4 h-4" />
                    <span>Section 25 PSSA &amp; Section 138 NI Act</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Helps counter coercive recovery tactics by establishing active civil dispute conciliation.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 8: 3-Tier Escalation Matrix */}
            <section id="three-tier-escalation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff]" />
                <span>Escalation Framework</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. 3-Tier Grievance Redressal and Judicial Escalation Matrix
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If a lender engages in unfair debt collection practices, ignores formal caveat notices, or attempts coercive recovery, borrowers can escalate through three institutional levels:
              </p>

              <div className="space-y-3 pt-2">
                <div className="bg-white p-4.5 rounded-2xl border border-slate-200/80 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-black px-2 py-0.5 rounded-md bg-blue-50 text-[#1886ff]">LEVEL 1</span>
                      <h3 className="font-bold text-slate-900 text-sm">Bank Grievance Redressal Officer (GRO) &amp; Legal Desk</h3>
                    </div>
                    <p className="text-xs text-slate-600 mt-1">
                      Submit caveat details to the bank legal desk to dispute penal interest and halt coercion (7-10 days).
                    </p>
                  </div>
                  <span className="text-[11px] font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full whitespace-nowrap">
                    Internal Bank Escalation
                  </span>
                </div>

                <div className="bg-white p-4.5 rounded-2xl border border-slate-200/80 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-black px-2 py-0.5 rounded-md bg-indigo-50 text-indigo-700">LEVEL 2</span>
                      <h3 className="font-bold text-slate-900 text-sm">Principal Nodal Officer (PNO) &amp; Court Registry Review</h3>
                    </div>
                    <p className="text-xs text-slate-600 mt-1">
                      Notify the Principal Nodal Officer and court registry to block unlisted hearings (14-21 days).
                    </p>
                  </div>
                  <span className="text-[11px] font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full whitespace-nowrap">
                    Appellate Oversight
                  </span>
                </div>

                <div className="bg-white p-4.5 rounded-2xl border border-slate-200/80 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-black px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700">LEVEL 3</span>
                      <h3 className="font-bold text-slate-900 text-sm">RBI Integrated Ombudsman &amp; High Court Review</h3>
                    </div>
                    <p className="text-xs text-slate-600 mt-1">
                      File regulatory complaints on cms.rbi.org.in or seek High Court supervisory review under Article 227.
                    </p>
                  </div>
                  <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full whitespace-nowrap">
                    Statutory Regulator
                  </span>
                </div>
              </div>
            </section>

            {/* SECTION 9: Chronological Timeline Table */}
            <section id="chronological-timeline-table" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Clock className="w-4 h-4 text-[#1886ff]" />
                <span>Procedural Milestones</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Chronological Resolution Milestones: Day 1 to Month 6
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The timeline below outlines the key procedural milestones when responding to bank legal actions through a preemptive caveat strategy:
              </p>

              <div className="overflow-x-auto rounded-2xl border border-slate-200/80 bg-white shadow-xs">
                <table className="w-full text-left text-xs md:text-sm border-collapse">
                  <thead className="bg-slate-50 border-b border-slate-200/80 text-slate-700">
                    <tr className="divide-x divide-slate-200/80">
                      <th className="p-3.5 font-bold">Timeline Milestone</th>
                      <th className="p-3.5 font-bold">Procedural Phase</th>
                      <th className="p-3.5 font-bold">Key Actions &amp; Compliance</th>
                      <th className="p-3.5 font-bold text-[#1886ff]">Legal Shield Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-600">
                    <tr className="divide-x divide-slate-100 hover:bg-slate-50/50">
                      <td className="p-3.5 font-bold text-slate-900">Days 1 - 30</td>
                      <td className="p-3.5 font-medium">NPA Notice &amp; Legal Threat</td>
                      <td className="p-3.5">Account crosses 90 DPD; bank issues loan recall or legal demand notice.</td>
                      <td className="p-3.5 text-amber-600 font-semibold">Pre-Litigation Vulnerability</td>
                    </tr>
                    <tr className="divide-x divide-slate-100 hover:bg-slate-50/50">
                      <td className="p-3.5 font-bold text-slate-900">Days 31 - 45</td>
                      <td className="p-3.5 font-medium">Caveat Drafting &amp; Filing</td>
                      <td className="p-3.5">Draft Section 148A petition, execute affidavit, serve RPAD, and lodge in court.</td>
                      <td className="p-3.5 text-blue-700 font-bold">Caveat Number Assigned</td>
                    </tr>
                    <tr className="divide-x divide-slate-100 hover:bg-slate-50/50">
                      <td className="p-3.5 font-bold text-slate-900">Days 46 - 90</td>
                      <td className="p-3.5 font-medium">Active Protection Window</td>
                      <td className="p-3.5">Court cause-list tracking; bank barred from ex-parte interim injunctions.</td>
                      <td className="p-3.5 text-emerald-700 font-bold">100% Preemptive Immunity</td>
                    </tr>
                    <tr className="divide-x divide-slate-100 hover:bg-slate-50/50">
                      <td className="p-3.5 font-bold text-slate-900">Days 91 - 120</td>
                      <td className="p-3.5 font-medium">Bilateral OTS Negotiation</td>
                      <td className="p-3.5">Represent financial hardship before credit committee; negotiate 40%-60% waiver.</td>
                      <td className="p-3.5 text-indigo-700 font-bold">Commercial Compromise Phase</td>
                    </tr>
                    <tr className="divide-x divide-slate-100 hover:bg-slate-50/50">
                      <td className="p-3.5 font-bold text-slate-900">Months 5 - 6</td>
                      <td className="p-3.5 font-medium">Closure &amp; CIBIL Rectification</td>
                      <td className="p-3.5">Remit settlement funds, obtain formal NDC, and update bureau records to Closed.</td>
                      <td className="p-3.5 text-emerald-700 font-bold">Complete Debt Freedom</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: Specialized Real-World Scenarios */}
            <section id="specialized-real-world-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <BadgeAlert className="w-4 h-4 text-[#1886ff]" />
                <span>Specialized Scenarios</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                10. Specialized Real-World Scenarios in Banking Litigation
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Different financial products involve distinct statutory venues and litigation mechanics. Explore four specialized scenarios:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-[#1886ff]" />
                    Consortium Lending &amp; Multi-Bank Facilities
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Lodge individual caveats against each consortium lender to block coordinated recovery actions.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-[#1886ff]" />
                    Corporate &amp; Personal Guarantor Liability
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Enables personal guarantors to independently shield personal assets from summary attachment.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                    <Landmark className="w-4 h-4 text-[#1886ff]" />
                    Mortgaged Property &amp; Section 17 DRT Appeals
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Guarantees a DRT hearing if the bank files for physical possession assistance under Section 14.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                    <Scale className="w-4 h-4 text-[#1886ff]" />
                    Asset Reconstruction Company (ARC) Portfolios
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Halts fast-track recovery actions by debt buyers and compels bilateral OTS discussions.
                  </p>
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
                <HelpCircle className="w-4 h-4 text-[#1886ff]" />
                <span>Frequently Asked Questions</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Frequently Asked Questions on Caveat Petitions Against Banks
              </h2>
              <p className="text-xs md:text-sm text-slate-600">
                Click on any question below to view detailed legal answers verified by our debt resolution professionals:
              </p>

              <div className="space-y-3 pt-2">
                {faqs.map((faq, index) => {
                  const isOpen = openFaq === index;
                  return (
                    <div
                      key={index}
                      className="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden transition-all"
                    >
                      <button
                        onClick={() => toggleFaq(index)}
                        className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-slate-900 hover:text-[#1886ff] transition-colors cursor-pointer"
                        aria-expanded={isOpen}
                      >
                        <span>{faq.q}</span>
                        <ChevronDown
                          className={`w-4 h-4 sm:w-5 sm:h-5 text-slate-400 flex-shrink-0 transition-transform duration-200 ${
                            isOpen ? 'rotate-180 text-[#1886ff]' : ''
                          }`}
                        />
                      </button>
                      {isOpen && (
                        <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                          <p className="pt-3">{faq.a}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>

            {/* SECTION 13: Regulatory Sources & Authorities */}
            <section id="regulatory-sources" className="scroll-target space-y-4 pt-4 border-t border-slate-200">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-500">
                <BookOpen className="w-4 h-4" />
                <span>Statutory Citations &amp; Legal Authorities</span>
              </div>
              <h2 className="text-base sm:text-lg font-bold text-slate-900">
                Official Regulatory Citations &amp; Judicial References
              </h2>
              <ul className="space-y-2 text-xs text-slate-600 leading-relaxed list-disc pl-5">
                <li>
                  <strong>Code of Civil Procedure, 1908:</strong> Section 148A (Right to Lodge a Caveat), Order 38 Rule 5 (Attachment Before Judgment), and Order 39 Rules 1-2 (Temporary Injunctions), Ministry of Law and Justice, Government of India.
                </li>
                <li>
                  <strong>Recovery of Debts and Bankruptcy Act, 1993:</strong> Section 19 and Section 22 (Application of Natural Justice and Civil Procedure in Debt Recovery Tribunals).
                </li>
                <li>
                  <strong>Securitisation and Reconstruction of Financial Assets and Enforcement of Security Interest Act, 2002 (SARFAESI Act):</strong> Section 13, Section 17, and Section 18.
                </li>
                <li>
                  <strong>Reserve Bank of India Master Directions:</strong> Master Direction on Fair Practices Code for Lenders and Prudential Norms on Income Recognition, Asset Classification, and Provisioning pertaining to Advances (Updated 2026).
                </li>
                <li>
                  <strong>Credit Information Companies (Regulation) Act, 2005 (CICRA):</strong> Section 21 (Statutory Duty of Credit Institutions to Update Credit Records Following Settlement).
                </li>
              </ul>

              {/* 6 Outbound Authority Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Verified Government &amp; Regulatory Portals:</span>
                <div className="flex flex-wrap gap-2">
                  <a
                    href="https://www.rbi.org.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200 inline-flex items-center gap-1"
                  >
                    <span>RBI Official Portal</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                  <a
                    href="https://cms.rbi.org.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200 inline-flex items-center gap-1"
                  >
                    <span>RBI CMS Portal</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                  <a
                    href="https://www.cibil.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200 inline-flex items-center gap-1"
                  >
                    <span>TransUnion CIBIL</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                  <a
                    href="https://www.indiacode.nic.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200 inline-flex items-center gap-1"
                  >
                    <span>India Code (CPC 1908)</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                  <a
                    href="https://nalsa.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200 inline-flex items-center gap-1"
                  >
                    <span>NALSA Legal Services</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                  <a
                    href="https://cybercrime.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200 inline-flex items-center gap-1"
                  >
                    <span>National Cyber Crime Portal</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                </div>
              </div>

              {/* 10 Internal Topic Badges */}
              <div className="pt-3 border-t border-slate-100">
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
                Specialized in banking litigation defense, Section 148A caveat strategies, loan dispute resolution, and NPA compromise negotiations across Indian civil courts and Debt Recovery Tribunals.
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

            {/* Card 2: Emergency CTA Card (#2452ae Background) */}
            <div
              className="rounded-3xl p-6 text-white text-center space-y-4 shadow-md relative overflow-hidden"
              style={{ backgroundColor: '#2452ae' }}
            >
              <div className="space-y-1 text-center">
                <span className="text-xs font-black uppercase tracking-wider text-blue-200 bg-white/10 px-3 py-1 rounded-full inline-block mb-1">
                  100% CONFIDENTIAL LEGAL DEFENSE
                </span>
                <h3 className="text-lg md:text-xl font-bold text-white leading-snug">
                  Anticipating Bank Legal Action?
                </h3>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our legal and debt resolution specialists lodge Section 148A caveat petitions in civil courts and DRTs, block ex-parte injunctions, and negotiate 40% to 60% loan settlement waivers.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                File a Caveat Petition Today
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
                  <span><strong>Zero Upfront Risk:</strong> Success-linked settlement fees.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Direct Remittance:</strong> Payments made only to bank accounts.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Statutory Preemption:</strong> CPC &amp; RDB Act compliant filings.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Pan-India Defense:</strong> Specialized debt resolution panel.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <h4 className="font-bold text-slate-900 text-sm">Related Legal Guides</h4>
              <div className="space-y-2.5">
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
                  href="/bank-recovery-case-in-court"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Bank Filed Recovery Case in Civil Court
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Civil suit defense &amp; summons guide &rarr;</span>
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
