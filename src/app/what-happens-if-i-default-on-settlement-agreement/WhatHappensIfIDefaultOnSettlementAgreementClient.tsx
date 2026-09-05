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
  Check,
  Phone,
  AlertCircle,
  Briefcase,
  Bookmark,
  ArrowRight,
  Clock,
  Landmark,
  Calculator,
  ReceiptText,
  Gavel,
  ShieldAlert
} from 'lucide-react';

export default function WhatHappensIfIDefaultOnSettlementAgreementClient() {
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
    { id: 'settlement-default-economics', label: '1. Settlement Default Economics' },
    { id: 'financial-revocation-math', label: '2. Revocation & Penal Cost Math' },
    { id: 'strategic-options-matrix', label: '3. Strategic Resolution Options' },
    { id: 'cibil-algorithm-impact', label: '4. CIBIL Scoring & Credit Impact' },
    { id: 'infographic-roadmap', label: 'Visual Settlement Default Roadmap' },
    { id: 'settlement-cure-sop', label: '5. 6-Stage Default Cure SOP' },
    { id: 'statutory-notice-defense', label: '6. Legal Rights & Notice Defense' },
    { id: 'three-tier-escalation', label: '7. 3-Tier Escalation Matrix' },
    { id: 'procedural-milestones', label: '8. Timelines & Milestone Tracking' },
    { id: 'specialized-default-scenarios', label: '9. Real-World Default Scenarios' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-citations', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [{"q": "What happens immediately if I miss a loan settlement installment?", "a": "Missing an installment triggers the revocation clause. The lender cancels waiver discounts, revives full debt plus penal interest, and reallocates past payments toward interest."}, {"q": "Is there a grace period if I cannot pay my settlement installment on time?", "a": "Settlement letters typically allow a 7 to 15 day grace period. Borrowers must notify the bank in writing before the due date to request an extension."}, {"q": "Can the bank forfeit payments made before defaulting on the settlement?", "a": "Banks do not forfeit funds, but they reallocate prior installments toward un-waived interest and late fees rather than principal, leaving a higher balance."}, {"q": "Can I renegotiate a new settlement agreement after defaulting on the first one?", "a": "Yes. Banks prefer recovering capital over litigation. Submit an emergency hardship petition to the Zonal Credit Committee to restructure dues into a revised plan."}, {"q": "Will the bank file a police case or arrest me for defaulting on a settlement?", "a": "No. Loan default is strictly a civil dispute under the Indian Contract Act, 1872. Police cannot register an FIR or make an arrest."}, {"q": "What legal notices can a bank send after a settlement default?", "a": "Lenders typically issue demand notices under Section 138 NI Act for cheque bounces, Section 25 PSSA for NACH bounces, or initiate arbitration."}, {"q": "How does defaulting on a settlement affect my CIBIL credit score?", "a": "Defaulting lowers your CIBIL score by 80 to 140 points, as lenders report monthly overdue payments, updated DPD, and active default status."}, {"q": "Can recovery agents visit my home or workplace after a settlement default?", "a": "While collection resumes, agents must follow RBI Fair Practices Code. They cannot visit before 8:00 AM or after 7:00 PM, or contact relatives."}, {"q": "What should I do if the bank initiates arbitration after a settlement default?", "a": "Challenge unilateral arbitrator appointments under Section 12(5) of the Arbitration Act, citing Supreme Court rulings in Perkins Eastman, while submitting a revised compromise."}, {"q": "When do I get my official No Dues Certificate after completing a renegotiated settlement?", "a": "Once all restructured installments clear in core banking, the lender is legally required to issue the official No Dues Certificate within 15 to 30 days."}];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-[#1886ff] selection:text-white">
      {/* 1. HERO SECTION (#2452ae Background) */}
      <section
        className="relative text-white pt-14 pb-10 md:pt-18 md:pb-12 px-4 md:px-8 overflow-hidden flex items-center justify-center text-center"
        style={{ backgroundColor: '#2452ae' }}
      >
        <div className="absolute inset-0 bg-black/5 z-0 pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center z-10 relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-blue-100 text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldAlert className="w-3.5 h-3.5 text-blue-200" />
            <span>OTS Default &amp; Legal Revocation Advisory</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            What Happens If You Default on a Settlement Agreement? (OTS Guide)
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-3xl mx-auto font-normal text-white/95 leading-relaxed">
            Understand legal and financial consequences of missing an agreed OTS installment. Learn how revocation clauses revive waived interest, defend against Section 138/25 notices, and renegotiate terms.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Defaulted on Settlement? Speak with Senior Advisors</span>
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
                  <span>Statutory Borrower Rights</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Protected under RBI Fair Practices Code, PSSA §25, NI Act §138 &amp; CICRA.
                </p>
              </div>
            </div>
          </aside>

          {/* ================= MIDDLE COLUMN: MAIN CONTENT ================= */}
          <div className="space-y-8 md:space-y-10 min-w-0">
            
            {/* Executive Brief Box */}
            <div
              id="quick-crux"
              className="scroll-target rounded-2xl bg-[#F4F8FE] border border-blue-100/90 border-l-[5px] border-l-[#1886ff] p-5 sm:p-6 shadow-xs space-y-3.5 text-slate-800"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#1886ff] flex-shrink-0" />
                <h2 className="text-base sm:text-lg font-bold text-slate-900">
                  Executive Summary: What Happens If You Default on a Settlement Agreement?
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Defaulting on an agreed One-Time Settlement (OTS) triggers immediate contractual and banking repercussions across Indian financial institutions. Legal jurisprudence and RBI regulations govern borrower protections and restructuring pathways:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3 pt-1">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-700 leading-snug"><strong className="text-slate-900 font-bold">Automatic Revocation:</strong> Missing an installment voids the compromise agreement and cancels waiver discounts immediately.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-700 leading-snug"><strong className="text-slate-900 font-bold">Full Debt Revival:</strong> Lenders reinstate original loan principal, un-waived interest charges, and retrospective penal fees.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-700 leading-snug"><strong className="text-slate-900 font-bold">Payment Reallocation:</strong> Past tranche payments are credited against accrued interest rather than reducing settlement principal.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-700 leading-snug"><strong className="text-slate-900 font-bold">Legal Escalation:</strong> Creditors can reactivate recovery proceedings under Section 138 NI Act, Section 25 PSSA, or arbitration.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-700 leading-snug"><strong className="text-slate-900 font-bold">Collection Resumption:</strong> Recovery calls and field visits resume under strict adherence to RBI Fair Practices Code guidelines.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-700 leading-snug"><strong className="text-slate-900 font-bold">CIBIL Score Plunge:</strong> Credit bureau records reflect active default status or suit filed, lowering CIBIL scores by 80 to 140 points.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-700 leading-snug"><strong className="text-slate-900 font-bold">Grace Period Rights:</strong> Standard settlement letters typically provide a 7 to 15 day contractual grace window to cure technical defaults.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-700 leading-snug"><strong className="text-slate-900 font-bold">Restructuring Remedy:</strong> Borrowers can submit a hardship dossier to the Zonal Credit Committee to renegotiate an extended plan.</span>
                </div>
              </div>
            </div>

            {/* SECTION 1: Debt Economics & NPA Dynamics */}
            <section id="settlement-default-economics" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Banking Economics &amp; NPA Provisions</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. Debt Economics &amp; Banking Dynamics: Mechanics of a Settlement Default
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                When a borrower executes a One-Time Settlement (OTS) with a bank or NBFC, the agreement operates as a conditional compromise governed by the Indian Contract Act, 1872. The lending institution agrees to waive substantial interest and principal only on the strict condition that all installment tranches are paid exactly on schedule. If an agreed date is missed, the conditional agreement is breached, triggering the automatic revocation clause embedded in the sanction letter.
              </p>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Under Reserve Bank of India prudential norms, the loan facility remains an active Non-Performing Asset (NPA) throughout the settlement period until the final tranche clears. When default occurs, the lender reverses proposed accounting write-offs and reinstates the entire gross claim. Because unsecured debts lack collateral under the SARFAESI Act, banks face costly 3 to 5 year litigations in civil courts or Debt Recovery Tribunals. Consequently, institutional credit committees are commercially open to evaluating fresh compromise proposals before initiating aggressive legal action.
              </p>
            </section>

            {/* SECTION 2: Financial Breakdown & Settlement Math */}
            <section id="financial-revocation-math" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Calculator className="w-4 h-4 text-[#1886ff]" />
                <span>Financial Analysis &amp; Settlement Math</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. Financial Breakdown: Cost of Settlement Default &amp; Revocation Math
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Defaulting on an OTS exposes borrowers to immediate balance inflation. Lenders retroactively reinstate waived penal interest (24% to 36% compound annual rates), mandate bounce surcharges, and legal recovery costs. Furthermore, money paid in prior tranches is reallocated toward interest rather than reducing settlement principal.
              </p>

              <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900 flex items-center gap-2">
                    <ReceiptText className="w-4 h-4 text-[#1886ff]" />
                    <span>Representative Settlement Default Math (₹10 Lakh Facility)</span>
                  </h3>
                  <span className="text-[11px] font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded border border-rose-200">
                    Revocation Impact
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/70 space-y-1">
                    <span className="text-slate-500 text-[11px] block font-medium">Original Principal Facility</span>
                    <span className="text-base font-extrabold text-slate-900">₹7,00,000</span>
                    <p className="text-[11px] text-slate-500">Gross claim inflated to ₹10,00,000 with penal fees.</p>
                  </div>
                  <div className="p-3 rounded-xl bg-blue-50/60 border border-blue-200/70 space-y-1">
                    <span className="text-[#1886ff] text-[11px] block font-medium">Agreed OTS Sum (50% Discount)</span>
                    <span className="text-base font-extrabold text-[#1886ff]">₹3,50,000</span>
                    <p className="text-[11px] text-slate-600">Sanctioned into 3 monthly tranches of ₹1,16,666.</p>
                  </div>
                  <div className="p-3 rounded-xl bg-emerald-50/60 border border-emerald-200/70 space-y-1">
                    <span className="text-emerald-700 text-[11px] block font-medium">Paid Before Default (Tranche 1)</span>
                    <span className="text-base font-extrabold text-emerald-700">₹1,16,666</span>
                    <p className="text-[11px] text-slate-600">Cleared successfully on Day 1.</p>
                  </div>
                  <div className="p-3 rounded-xl bg-rose-50/60 border border-rose-200/70 space-y-1">
                    <span className="text-rose-700 text-[11px] block font-medium">Revived Balance Post-Default</span>
                    <span className="text-base font-extrabold text-rose-700">₹8,83,334</span>
                    <p className="text-[11px] text-slate-600">Waiver revoked; prior payment credited to penal interest.</p>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-amber-50/60 border border-amber-200/70 text-xs text-amber-900 space-y-1">
                  <div className="flex items-center gap-1.5 font-bold text-amber-950">
                    <AlertTriangle className="w-3.5 h-3.5 text-amber-600 flex-shrink-0" />
                    <span>Renegotiated Cure Target: ₹3,85,000 with Extended 3-Month Plan</span>
                  </div>
                  <p className="text-[11px] text-amber-800 leading-relaxed">
                    By submitting a formal hardship dossier within the grace period, borrowers can preserve prior remittances and revalidate the 50% waiver under a revised sanction letter.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 3: 4-Sided Bordered Comparison Matrix */}
            <section id="strategic-options-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Strategic Options Matrix</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Strategic Resolution Options: Settlement Default vs. Alternative Paths
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Evaluating the optimal legal path after a settlement default requires comparing costs and timelines:
              </p>

              <div className="overflow-x-auto rounded-2xl border border-slate-200/80 bg-white shadow-xs">
                <table className="w-full text-left text-xs border-collapse">
                  <thead className="bg-slate-50 border-b border-slate-200/80 text-slate-700">
                    <tr className="divide-x divide-slate-200/80">
                      <th className="p-3 font-bold">Route</th>
                      <th className="p-3 font-bold">Financial Cost</th>
                      <th className="p-3 font-bold">Legal Impact</th>
                      <th className="p-3 font-bold">Timeline</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr className="divide-x divide-slate-200/80">
                      <td className="p-3 font-bold text-rose-700">OTS Default</td>
                      <td className="p-3">Full debt + 24%-36% penal fees</td>
                      <td className="p-3">Sec 138/25 notices, arbitration</td>
                      <td className="p-3">2 to 4 years</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80">
                      <td className="p-3 font-bold text-[#1886ff]">Renegotiated OTS</td>
                      <td className="p-3">40%-55% principal (penal waived)</td>
                      <td className="p-3">Notices quashed, clean NDC</td>
                      <td className="p-3 font-semibold text-slate-900">30 to 90 days</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80">
                      <td className="p-3 font-bold text-slate-900">Restructuring</td>
                      <td className="p-3">100% principal + standard interest</td>
                      <td className="p-3">Standard asset; zero discount</td>
                      <td className="p-3">2 to 5 years</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80">
                      <td className="p-3 font-bold text-slate-900">DRT Litigation</td>
                      <td className="p-3">Full liability + legal costs</td>
                      <td className="p-3">Summons, hearings, attachments</td>
                      <td className="p-3">3 to 7 years</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80">
                      <td className="p-3 font-bold text-slate-900">Lok Adalat</td>
                      <td className="p-3">40% to 60% compromise sum</td>
                      <td className="p-3">Non-appealable consent award</td>
                      <td className="p-3">1 day hearing</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 4: Technical CIBIL Algorithm & Scoring Math */}
            <section id="cibil-algorithm-impact" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                <span>Credit Bureau Scoring &amp; CIBIL Dynamics</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. Credit Bureau Impact: CIBIL Scoring Mechanics After an OTS Default
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                The TransUnion CIBIL scoring model evaluates creditworthiness across five weighted pillars: payment history (35%), credit utilization (30%), credit history length (15%), credit mix (10%), and recent inquiries (10%). Defaulting on an active settlement agreement severely damages the payment history pillar. Lenders update Days Past Due (DPD) to reflect continuous default and report negative remarks such as &apos;Suit Filed&apos; or &apos;Wilful Default&apos;.
              </p>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                This triggers a rapid credit score drop of 80 to 140 points, pushing scores below 600. However, this impact is reversible. Under Section 21 of the Credit Information Companies (Regulation) Act, 2005 (CICRA), borrowers have the legal right to rectify inaccurate bureau reporting. Completing a renegotiated settlement and securing an authentic No Dues Certificate updates the account to &apos;Settled&apos; with zero outstanding balance, enabling score recovery within 12 to 24 months.
              </p>
            </section>

            {/* SECTION 5: Visual Infographic Asset Card */}
            <section id="infographic-roadmap" className="scroll-target space-y-3">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Visual Process Architecture</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Consequences of Defaulting on a Settlement Agreement &amp; Cure Roadmap
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Review the 6 core pillars of settlement default consequences, statutory notice risks, and step-by-step cure procedures:
              </p>

              <div className="bg-white p-3 sm:p-4 rounded-2xl border border-slate-200/80 shadow-xs">
                <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-slate-100">
                  <Image
                    src="/images/infographics/what-happens-if-i-default-on-settlement-agreement.jpg"
                    alt="What Happens If You Default on a Settlement Agreement Infographic Roadmap"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 60vw"
                    priority
                  />
                </div>
                <div className="mt-2 px-1 flex items-center justify-between text-[11px] text-slate-500">
                  <span>CredSettle Settlement Default &amp; Cure Framework • RBI Compliant</span>
                  <a
                    href="/images/infographics/what-happens-if-i-default-on-settlement-agreement.jpg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1886ff] hover:underline font-bold flex items-center gap-1"
                  >
                    <span>View High-Resolution</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </section>

            {/* SECTION 6: Step-by-Step SOP (6 Stages) */}
            <section id="settlement-cure-sop" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Award className="w-4 h-4 text-[#1886ff]" />
                <span>Step-by-Step Resolution SOP</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. Standard Operating Procedure: 6 Stages to Cure a Default and Renegotiate Settlement
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Execute this disciplined 6-stage SOP to cure default triggers, protect prior payments, and revive your settlement agreement:
              </p>

              <div className="space-y-3 text-xs">
                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs space-y-1">
                  <span className="text-[11px] font-black uppercase text-[#1886ff] bg-blue-50 px-2 py-0.5 rounded">Stage 1: Days 1-7</span>
                  <h3 className="font-bold text-slate-900 text-sm">Forensic Statement Audit &amp; Grace Period Check</h3>
                  <p className="text-slate-600 leading-relaxed">Review the sanction letter for 7 to 15 day grace clauses. Calculate exact default shortfalls, isolate uncredited payments, and verify if formal revocation notices have been issued.</p>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs space-y-1">
                  <span className="text-[11px] font-black uppercase text-[#1886ff] bg-blue-50 px-2 py-0.5 rounded">Stage 2: Days 8-15</span>
                  <h3 className="font-bold text-slate-900 text-sm">Emergency Hardship Dossier Preparation</h3>
                  <p className="text-slate-600 leading-relaxed">Compile authentic evidence of default causes, including medical summaries, layoff letters, or business bank statements to document genuine cash-flow constraints.</p>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs space-y-1">
                  <span className="text-[11px] font-black uppercase text-[#1886ff] bg-blue-50 px-2 py-0.5 rounded">Stage 3: Days 16-30</span>
                  <h3 className="font-bold text-slate-900 text-sm">Credit Committee Representation &amp; Cure Notice</h3>
                  <p className="text-slate-600 leading-relaxed">Submit a formal settlement preservation petition directly to the Zonal Credit Committee. Bypass aggressive recovery agents and propose a restructured installment schedule.</p>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs space-y-1">
                  <span className="text-[11px] font-black uppercase text-[#1886ff] bg-blue-50 px-2 py-0.5 rounded">Stage 4: Days 31-45</span>
                  <h3 className="font-bold text-slate-900 text-sm">Bilateral Negotiations for Revised Terms</h3>
                  <p className="text-slate-600 leading-relaxed">Negotiate with bank recovery managers. Protect earlier tranche payments from forfeiture by ensuring they credit toward the agreed compromise sum with an extended timeline.</p>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs space-y-1">
                  <span className="text-[11px] font-black uppercase text-[#1886ff] bg-blue-50 px-2 py-0.5 rounded">Stage 5: Days 46-60</span>
                  <h3 className="font-bold text-slate-900 text-sm">Legal Due Diligence of Revised Sanction Letter</h3>
                  <p className="text-slate-600 leading-relaxed">Vet the new settlement letter on official bank letterhead. Ensure it supersedes defaulted terms, waives 100% of penal interest, and guarantees NDC issuance.</p>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs space-y-1">
                  <span className="text-[11px] font-black uppercase text-[#1886ff] bg-blue-50 px-2 py-0.5 rounded">Stage 6: Days 61-90+</span>
                  <h3 className="font-bold text-slate-900 text-sm">Tranche Remittance &amp; Procurement of Final NDC</h3>
                  <p className="text-slate-600 leading-relaxed">Remit remaining installments directly to your loan account via RTGS/NEFT. Maintain timestamped receipts, verify zero balance in core banking, and obtain your official NDC within 30 days.</p>
                </div>
              </div>
            </section>

            {/* SECTION 7: Statutory Notice Defense & Legal Rights */}
            <section id="statutory-notice-defense" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Notice Defense &amp; Legal Rights</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. Statutory Notice Defense: Responding to Legal Action After Settlement Default
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Loan settlement default is strictly a civil contractual dispute. Knowing your legal protections ensures secure negotiation:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs space-y-1">
                  <div className="flex items-center gap-2 text-[#1886ff] font-bold">
                    <AlertCircle className="w-4 h-4" />
                    <span>Section 25 PSSA, 2007 (NACH Dishonour)</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed">Issued when electronic mandate debits bounce. Serve a formal legal reply within 15 days proving lack of fraud and active renegotiation.</p>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs space-y-1">
                  <div className="flex items-center gap-2 text-[#1886ff] font-bold">
                    <Scale className="w-4 h-4" />
                    <span>Section 138 NI Act, 1881 (Cheque Dishonour)</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed">Applies to bounced security cheques. Offenses are compoundable under Section 147; complaints are quashed upon settlement fulfillment.</p>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs space-y-1">
                  <div className="flex items-center gap-2 text-[#1886ff] font-bold">
                    <Gavel className="w-4 h-4" />
                    <span>Arbitration Section 21 &amp; Section 12(5)</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed">Unilateral arbitrator appointments by banks are void ab initio under Supreme Court rulings in TRF Ltd. and Perkins Eastman.</p>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs space-y-1">
                  <div className="flex items-center gap-2 text-[#1886ff] font-bold">
                    <Landmark className="w-4 h-4" />
                    <span>Section 19 RDB Act (DRT Claims)</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed">For debts over ₹20 Lakhs. Borrowers can file a written statement disputing penal interest and seek a Lok Adalat compromise.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs space-y-2 text-xs">
                <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#1886ff]" />
                  <span>Borrower Protections Under the RBI Fair Practices Code</span>
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Under the RBI Master Direction on Fair Practices Code, lenders and recovery agents cannot call before 8:00 AM or after 7:00 PM, visit without notice, use abusive language, or contact relatives.
                </p>
              </div>
            </section>

            {/* SECTION 8: 3-Tier Escalation Matrix */}
            <section id="three-tier-escalation" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff]" />
                <span>Grievance Redressal</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. The 3-Tier Escalation Framework for Defaulted Settlement Disputes
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                If a bank recovery department unlawfully cancels compromise terms, escalate through this 3-tier statutory framework:
              </p>

              <div className="space-y-3 text-xs">
                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs space-y-1">
                  <span className="text-[11px] font-bold text-[#1886ff] bg-blue-50 px-2 py-0.5 rounded">Level 1: Grievance Redressal Officer (GRO)</span>
                  <p className="text-slate-600 mt-1 leading-relaxed">Submit a formal written petition proposing your revised plan directly to the GRO (7 to 10 days turnaround).</p>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs space-y-1">
                  <span className="text-[11px] font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded">Level 2: Principal Nodal Officer (PNO)</span>
                  <p className="text-slate-600 mt-1 leading-relaxed">Escalate to the bank&apos;s apex PNO if Level 1 fails or if agent harassment persists (14 to 21 days turnaround).</p>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-emerald-200 shadow-xs space-y-1">
                  <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">Level 3: RBI Integrated Ombudsman</span>
                  <p className="text-slate-600 mt-1 leading-relaxed">Lodge a complaint on cms.rbi.org.in for unfair settlement cancellations or violations of the Fair Practices Code.</p>
                </div>
              </div>
            </section>

            {/* SECTION 9: Chronological Timeline Table */}
            <section id="procedural-milestones" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Clock className="w-4 h-4 text-[#1886ff]" />
                <span>Procedural Milestones</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. Chronological Timeline: From Settlement Default to Re-Settlement Closure
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Follow chronological milestones and legal deadlines from initial installment default to final NDC delivery:
              </p>

              <div className="overflow-x-auto rounded-2xl border border-slate-200/80 bg-white shadow-xs">
                <table className="w-full text-left text-xs border-collapse">
                  <thead className="bg-slate-50 border-b border-slate-200/80 text-slate-700">
                    <tr className="divide-x divide-slate-200/80">
                      <th className="p-3 font-bold">Milestone</th>
                      <th className="p-3 font-bold">Status</th>
                      <th className="p-3 font-bold">Bank Action</th>
                      <th className="p-3 font-bold text-[#1886ff]">Borrower Strategic Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr className="divide-x divide-slate-200/80">
                      <td className="p-3 font-bold text-slate-900">Days 1-15</td>
                      <td className="p-3">Technical Default</td>
                      <td className="p-3">Grace tracking</td>
                      <td className="p-3 text-[#1886ff] font-semibold">Exercise grace clause, audit ledger, notify branch</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80">
                      <td className="p-3 font-bold text-slate-900">Days 16-30</td>
                      <td className="p-3">Sanction Breach</td>
                      <td className="p-3">Revocation warning</td>
                      <td className="p-3 text-[#1886ff] font-semibold">Submit hardship petition, request bilateral meeting</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80">
                      <td className="p-3 font-bold text-slate-900">Days 31-60</td>
                      <td className="p-3">Revived NPA</td>
                      <td className="p-3">Section 138/25 notices</td>
                      <td className="p-3 text-[#1886ff] font-semibold">Issue legal reply, challenge arbitrator, propose revised OTS</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80">
                      <td className="p-3 font-bold text-slate-900">Days 61-90</td>
                      <td className="p-3">Revalidated OTS</td>
                      <td className="p-3">Revised terms approved</td>
                      <td className="p-3 text-[#1886ff] font-semibold">Vet revised sanction letter, remit updated down payment</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80">
                      <td className="p-3 font-bold text-slate-900">Month 4-5</td>
                      <td className="p-3">Settled / Closed</td>
                      <td className="p-3">Ledger zero-balanced</td>
                      <td className="p-3 text-[#1886ff] font-semibold">Collect official NDC, initiate CIBIL record update</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: Specialized Real-World Scenarios */}
            <section id="specialized-default-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>Real-World Scenarios</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Real-World Settlement Default Scenarios &amp; Strategic Solutions
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Applying tailored negotiation strategies across different borrower profiles ensures protected resolution:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs space-y-1">
                  <h3 className="font-bold text-slate-900 text-sm">Multi-Lender Portfolio Balancing</h3>
                  <p className="text-slate-600 leading-relaxed">Defaulting on multiple loans requires sequencing settlements one by one rather than exhausting funds simultaneously across lenders.</p>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs space-y-1">
                  <h3 className="font-bold text-slate-900 text-sm">Corporate Executive Layoffs</h3>
                  <p className="text-slate-600 leading-relaxed">Submit verified severance documentation to freeze installment schedules for 60 days without forfeiting prior tranche payments.</p>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs space-y-1">
                  <h3 className="font-bold text-slate-900 text-sm">MSME Proprietorship Cash Flow</h3>
                  <p className="text-slate-600 leading-relaxed">Propose balloon installments aligned with audited quarterly accounts receivable cycles to ensure sustainable payments.</p>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs space-y-1">
                  <h3 className="font-bold text-slate-900 text-sm">ARC Debt Assignments</h3>
                  <p className="text-slate-600 leading-relaxed">Leverage ARC discounted acquisition prices (70%-80% off) to negotiate deep 4 to 6 month restructured settlement terms.</p>
                </div>
              </div>
            </section>

            {/* SECTION 11: Company Profile Component */}
            <div id="company-profile" className="scroll-target">
              <CompanySection />
            </div>

            {/* SECTION 12: Frequently Asked Questions Accordion */}
            <section id="frequently-asked-questions" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <HelpCircle className="w-4 h-4 text-[#1886ff]" />
                <span>Frequently Asked Questions</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Frequently Asked Questions on Defaulting on a Loan Settlement Agreement
              </h2>

              <div className="space-y-2.5 pt-1">
                {faqs.map((faq, index) => {
                  const isOpen = openFaq === index;
                  return (
                    <div
                      key={index}
                      className="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden transition-all"
                    >
                      <button
                        onClick={() => toggleFaq(index)}
                        className="w-full p-3.5 sm:p-4 text-left flex items-center justify-between gap-4 font-bold text-xs sm:text-sm text-slate-900 hover:text-[#1886ff] transition-colors cursor-pointer"
                        aria-expanded={isOpen}
                      >
                        <span>{faq.q}</span>
                        <ChevronDown
                          className={`w-4 h-4 text-slate-400 flex-shrink-0 transition-transform duration-200 ${
                            isOpen ? 'rotate-180 text-[#1886ff]' : ''
                          }`}
                        />
                      </button>
                      {isOpen && (
                        <div className="px-3.5 pb-3.5 sm:px-4 sm:pb-4 pt-0 text-xs text-slate-600 leading-relaxed border-t border-slate-100">
                          <p className="pt-2">{faq.a}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>

            {/* SECTION 13: Regulatory Sources & Authorities */}
            <section id="regulatory-citations" className="scroll-target space-y-4 pt-5 border-t border-slate-200">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <BookOpen className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Citations &amp; Legal Authorities</span>
              </div>
              
              <h2 className="text-base sm:text-lg font-bold text-slate-900">
                Official Regulatory Citations &amp; Legal References
              </h2>

              <ul className="space-y-1.5 text-xs text-slate-700 leading-relaxed list-disc pl-5">
                <li><strong className="text-slate-900 font-bold">RBI:</strong> Master Direction on Fair Practices Code for Lenders.</li>
                <li><strong className="text-slate-900 font-bold">RBI Ombudsman Scheme 2021:</strong> Statutory dispute mechanism on cms.rbi.org.in.</li>
                <li><strong className="text-slate-900 font-bold">CICRA 2005 (§21):</strong> Credit dispute resolution and bureau remark rectification.</li>
                <li><strong className="text-slate-900 font-bold">PSSA 2007 (§25):</strong> Dishonour of electronic funds transfer / NACH mandates.</li>
                <li><strong className="text-slate-900 font-bold">RDB Act 1993 (§19):</strong> Original Applications before Debt Recovery Tribunals (DRT).</li>
                <li><strong className="text-slate-900 font-bold">Indian Contract Act 1872:</strong> Sections 73 &amp; 74 regarding contractual damages.</li>
                <li><strong className="text-slate-900 font-bold">NI Act 1881 (§138 &amp; §147):</strong> Cheque dishonour defense and compounding of offenses.</li>
              </ul>

              <div className="pt-2">
                <span className="text-[11px] font-bold text-slate-800 block mb-2 uppercase tracking-wider">
                  Official Outbound Authority Portals &amp; Statutory Registers:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 text-xs">
                  <a href="https://www.rbi.org.in" target="_blank" rel="noopener noreferrer" className="p-3 bg-white rounded-xl border border-slate-200 hover:border-[#1886ff] shadow-xs flex items-center justify-between font-semibold text-slate-800 hover:text-[#1886ff]">
                    <div className="flex items-center gap-2"><Landmark className="w-4 h-4 text-[#1886ff]" /><span>RBI Official Portal</span></div>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                  <a href="https://cms.rbi.org.in" target="_blank" rel="noopener noreferrer" className="p-3 bg-white rounded-xl border border-slate-200 hover:border-[#1886ff] shadow-xs flex items-center justify-between font-semibold text-slate-800 hover:text-[#1886ff]">
                    <div className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-emerald-600" /><span>RBI Ombudsman (CMS)</span></div>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                  <a href="https://www.cibil.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-white rounded-xl border border-slate-200 hover:border-[#1886ff] shadow-xs flex items-center justify-between font-semibold text-slate-800 hover:text-[#1886ff]">
                    <div className="flex items-center gap-2"><TrendingUp className="w-4 h-4 text-[#1886ff]" /><span>TransUnion CIBIL</span></div>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                  <a href="https://www.indiacode.nic.in" target="_blank" rel="noopener noreferrer" className="p-3 bg-white rounded-xl border border-slate-200 hover:border-[#1886ff] shadow-xs flex items-center justify-between font-semibold text-slate-800 hover:text-[#1886ff]">
                    <div className="flex items-center gap-2"><Scale className="w-4 h-4 text-[#1886ff]" /><span>India Code Portal</span></div>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                  <a href="https://nalsa.gov.in" target="_blank" rel="noopener noreferrer" className="p-3 bg-white rounded-xl border border-slate-200 hover:border-[#1886ff] shadow-xs flex items-center justify-between font-semibold text-slate-800 hover:text-[#1886ff]">
                    <div className="flex items-center gap-2"><Gavel className="w-4 h-4 text-[#1886ff]" /><span>NALSA Lok Adalat</span></div>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                  <a href="https://cybercrime.gov.in" target="_blank" rel="noopener noreferrer" className="p-3 bg-white rounded-xl border border-slate-200 hover:border-[#1886ff] shadow-xs flex items-center justify-between font-semibold text-slate-800 hover:text-[#1886ff]">
                    <div className="flex items-center gap-2"><AlertTriangle className="w-4 h-4 text-amber-600" /><span>Cyber Crime Portal</span></div>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100">
                <span className="text-[11px] font-bold text-slate-700 block mb-2">Explore Related CredSettle Debt Resolution Guides:</span>
                <div className="flex flex-wrap gap-1.5">
                  <Link href="/settle-1-lakh-personal-loan" className="text-[11px] px-2 py-0.5 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 border border-slate-200">Settle ₹1L Loan</Link>
                  <Link href="/settle-2-lakh-personal-loan" className="text-[11px] px-2 py-0.5 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 border border-slate-200">Settle ₹2L Loan</Link>
                  <Link href="/settle-25-lakh-personal-loan" className="text-[11px] px-2 py-0.5 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 border border-slate-200">Settle ₹25L Loan</Link>
                  <Link href="/arbitration-notice-personal-loan-default" className="text-[11px] px-2 py-0.5 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 border border-slate-200">Arbitration Defense</Link>
                  <Link href="/ecs-nach-bounce-legal-notice-section-25" className="text-[11px] px-2 py-0.5 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 border border-slate-200">NACH Section 25</Link>
                  <Link href="/section-138-cheque-bounce-personal-loan" className="text-[11px] px-2 py-0.5 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 border border-slate-200">Section 138 Defense</Link>
                  <Link href="/mental-harassment-by-recovery-agents-legal-action" className="text-[11px] px-2 py-0.5 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 border border-slate-200">Stop Harassment</Link>
                  <Link href="/get-noc-after-loan-settlement" className="text-[11px] px-2 py-0.5 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 border border-slate-200">Get NDC / NOC</Link>
                  <Link href="/convert-settled-status-to-closed" className="text-[11px] px-2 py-0.5 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 border border-slate-200">Convert Settled to Closed</Link>
                  <Link href="/improve-cibil-after-loan-settlement" className="text-[11px] px-2 py-0.5 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 border border-slate-200">Rebuild CIBIL</Link>
                </div>
              </div>
            </section>

          </div>

          {/* ================= RIGHT COLUMN: STICKY SIDEBAR ================= */}
          <aside className="space-y-4 sticky top-6">
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-4 space-y-2.5 text-xs">
              <div className="flex items-center gap-2.5">
                <Link
                  href="/author/ashish-jhangra"
                  className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-extrabold text-xs hover:bg-blue-200 transition-colors flex-shrink-0"
                >
                  AJ
                </Link>
                <div>
                  <Link
                    href="/author/ashish-jhangra"
                    className="text-xs font-bold text-slate-900 hover:text-[#1886ff] transition-colors block"
                  >
                    Ashish Jhangra
                  </Link>
                  <p className="text-[10px] font-semibold text-[#1886ff]">
                    Legal &amp; Debt Resolution Professional
                  </p>
                </div>
              </div>
              <p className="text-slate-600 leading-relaxed text-[11px]">
                Specialized in banking regulations, settlement default remedies, and retail NPA compromise resolution across Indian banking tribunals.
              </p>
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-500">
                <Link href="/author/ashish-jhangra" className="text-[#1886ff] hover:underline font-semibold flex items-center gap-1">
                  <span>Author Profile</span>
                  <ArrowRight className="w-2.5 h-2.5" />
                </Link>
                <span className="text-emerald-600 font-bold flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3" /> CredSettle Panel
                </span>
              </div>
            </div>

            <div
              className="rounded-3xl p-5 text-white text-center space-y-3 shadow-md relative overflow-hidden"
              style={{ backgroundColor: '#2452ae' }}
            >
              <div className="space-y-1 text-center">
                <span className="text-[10px] font-black uppercase text-blue-200 bg-white/10 px-2.5 py-0.5 rounded-full inline-block">
                  100% CONFIDENTIAL DEBT RELIEF
                </span>
                <h3 className="text-base font-bold text-white leading-snug">
                  Defaulted on Your Settlement Agreement?
                </h3>
                <p className="text-blue-100 text-xs leading-relaxed font-normal">
                  Our debt resolution experts negotiate directly with bank credit committees to cure defaults, stop legal escalation, and restore settlement discounts.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-2.5 px-3 rounded-full font-bold text-xs hover:bg-slate-50 transition-all shadow-md"
              >
                Defaulted on OTS? Speak to Senior Advisors
              </Link>
              <div className="pt-1 flex flex-col items-center justify-center gap-0.5 text-[10px] text-blue-200">
                <a href="tel:+918800226635" className="hover:underline font-bold text-white flex items-center gap-1">
                  <Phone className="w-3 h-3" /> +91-8800226635
                </a>
                <span className="text-[9px] text-blue-300">Direct Bank Settlement • RBI Compliant</span>
              </div>
            </div>

            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-4 space-y-2 text-xs">
              <h4 className="font-bold text-slate-900 text-xs">The CredSettle Advantage</h4>
              <ul className="space-y-1.5 text-slate-600 text-[11px]">
                <li className="flex items-center gap-1.5"><Check className="w-3 h-3 text-emerald-600 flex-shrink-0" /><span className="leading-snug"><strong>Zero Upfront Risk:</strong> Success-linked advisory model.</span></li>
                <li className="flex items-center gap-1.5"><Check className="w-3 h-3 text-emerald-600 flex-shrink-0" /><span className="leading-snug"><strong>Direct Remittance:</strong> Zero middleman account transfers.</span></li>
                <li className="flex items-center gap-1.5"><Check className="w-3 h-3 text-emerald-600 flex-shrink-0" /><span className="leading-snug"><strong>RBI &amp; Banking Norms:</strong> 100% lawful dispute handling.</span></li>
                <li className="flex items-center gap-1.5"><Check className="w-3 h-3 text-emerald-600 flex-shrink-0" /><span className="leading-snug"><strong>Pan-India Defense:</strong> Senior banking resolution team.</span></li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-4 space-y-2 text-xs">
              <h4 className="font-bold text-slate-900 text-xs">Related Debt Guides</h4>
              <div className="space-y-1.5">
                <Link href="/services/personal-loan-settlement" className="block p-2 rounded-xl border border-slate-100 hover:bg-blue-50/50 text-[11px] font-bold text-slate-800 hover:text-[#1886ff]">
                  Personal Loan Settlement Services &rarr;
                </Link>
                <Link href="/can-i-pay-settlement-amount-in-emi" className="block p-2 rounded-xl border border-slate-100 hover:bg-blue-50/50 text-[11px] font-bold text-slate-800 hover:text-[#1886ff]">
                  Pay Settlement in Monthly EMIs &rarr;
                </Link>
                <Link href="/ecs-nach-bounce-legal-notice-section-25" className="block p-2 rounded-xl border border-slate-100 hover:bg-blue-50/50 text-[11px] font-bold text-slate-800 hover:text-[#1886ff]">
                  NACH Bounce Section 25 Defense &rarr;
                </Link>
                <Link href="/get-noc-after-loan-settlement" className="block p-2 rounded-xl border border-slate-100 hover:bg-blue-50/50 text-[11px] font-bold text-slate-800 hover:text-[#1886ff]">
                  Get NOC / No Dues Certificate &rarr;
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
