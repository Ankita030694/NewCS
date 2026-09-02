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
  Award,
  BookOpen,
  Building2,
  DollarSign,
  Check,
  Lock,
  Phone,
  CreditCard,
  Briefcase,
  Bookmark,
  ArrowRight,
  Clock,
  UserCheck,
  Sparkles,
  Gavel,
  Landmark,
  ShieldAlert,
  FileWarning
} from 'lucide-react';

export default function StopCreditCardRecoveryCallsClient() {
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
    { id: 'debt-economics-npa', label: '1. Debt Economics & NPA Dynamics' },
    { id: 'financial-breakdown-math', label: '2. Financial Breakdown & Math' },
    { id: 'resolution-matrix', label: '3. Recovery vs. Resolution Matrix' },
    { id: 'cibil-algorithm-math', label: '4. CIBIL Algorithm & Scoring Math' },
    { id: 'visual-infographic-card', label: 'Visual Defense Blueprint' },
    { id: 'six-stage-defense-sop', label: '5. 6-Stage Defense SOP' },
    { id: 'statutory-notice-defense', label: '6. Statutory Notice Defense & Rights' },
    { id: 'three-tier-escalation', label: '7. 3-Tier Grievance & Ombudsman' },
    { id: 'chronological-milestones', label: '8. Chronological Milestones Table' },
    { id: 'specialized-card-scenarios', label: '9. Multi-Card, Layoffs & ARCs' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'statutory-citations', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
    {
      q: 'How can I stop credit card recovery calls immediately in India?',
      a: 'Serve a formal Cease-and-Desist notice via email to the bank Grievance Redressal Officer and Principal Nodal Officer, citing RBI Fair Practices Code rules that prohibit harassment and restrict collection communication exclusively to registered written channels.'
    },
    {
      q: 'What are the official RBI rules regarding credit card recovery call timings?',
      a: 'Under RBI Master Directions, recovery telecallers can contact borrowers only between 8:00 AM and 7:00 PM. Calls placed outside this window constitute actionable regulatory violations punishable by the RBI Ombudsman.'
    },
    {
      q: 'Can credit card recovery agents call my family, friends, or office HR?',
      a: 'No. RBI rules strictly prohibit contacting family, friends, or employers regarding card defaults. Disclosing debt details to third parties violates privacy laws and constitutes criminal defamation under Section 499 IPC.'
    },
    {
      q: 'Can I go to jail or face police arrest for credit card payment default?',
      a: 'No. Credit card default is purely a civil breach of contract under the Indian Contract Act. Non-payment is not a criminal offense, and recovery agents cannot issue arrest warrants or police summons.'
    },
    {
      q: 'Is it legal to record phone calls with aggressive credit card recovery agents?',
      a: 'Yes. Borrowers have the legal right to record agent calls. Audio logs serve as admissible electronic evidence under Section 65B of the Indian Evidence Act when submitting formal complaints before banking authorities.'
    },
    {
      q: 'What is a Cease and Desist notice for bank recovery harassment?',
      a: 'A Cease and Desist notice is a formal legal notice sent to bank nodal officers documenting collection harassment and mandating that the lender immediately recall recovery agencies and communicate exclusively in writing.'
    },
    {
      q: 'How do I file a formal complaint against credit card recovery harassment with the RBI Ombudsman?',
      a: 'If the bank fails to resolve harassment within 30 days, submit a complaint at cms.rbi.org.in under the RBI Integrated Ombudsman Scheme, attaching call records and your prior nodal officer grievance letters.'
    },
    {
      q: 'What happens if a credit card bank sends a Section 138 or Section 25 legal notice?',
      a: 'If auto-debit mandates or cheques bounce, the bank may send a statutory notice under Section 25 PSSA or Section 138 NI Act. Reply through legal counsel within 15 days to seek conciliation.'
    },
    {
      q: 'Can I settle my credit card dues through a One-Time Settlement (OTS) to stop calls permanently?',
      a: 'Yes. An official One-Time Settlement permanently resolves debt and halts collection calls. Eligible borrowers can waive 100% of penal charges and 40% to 55% of principal, receiving a No Dues Certificate.'
    },
    {
      q: 'How does settling a credit card affect my CIBIL score and can it be repaired?',
      a: 'Settling marks the account as Settled, temporarily lowering CIBIL scores. However, cardholders can rebuild credit to 750+ over 12 to 24 months using secured credit cards or Section 21 CICRA status conversion.'
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-xs sm:text-sm font-semibold mb-4 text-blue-100 border border-white/15">
            <ShieldCheck className="w-4 h-4 text-sky-300" />
            <span>Statutory Anti-Harassment &amp; Debt Resolution Framework</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            How to Stop Credit Card Recovery Calls Immediately
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-3xl mx-auto font-normal text-white/95 leading-relaxed">
            Inundated with relentless collection calls and aggressive recovery agents? Enforce strict Reserve Bank of India calling regulations, issue formal statutory cease-and-desist notices, and transition your unsecured card dues into an affordable compromise settlement.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Stop Harassment &amp; Settle Card Dues</span>
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
                  <span>Statutory Legal Defense</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Protected under RBI Master Directions, TRAI Regulations &amp; Consumer Protection Act 2019.
                </p>
              </div>
            </div>
          </aside>

          {/* ================= MIDDLE COLUMN: MAIN EDITORIAL CONTENT ================= */}
          <div className="space-y-8 md:space-y-10 min-w-0">
            
            {/* Executive Brief Box */}
            <div
              id="quick-crux"
              className="scroll-target rounded-2xl bg-[#F4F8FE] border border-blue-100/90 border-l-[5px] border-l-[#1886ff] p-5 sm:p-6 md:p-7 shadow-xs space-y-4 text-slate-800"
            >
              <div className="flex items-center gap-2 text-xs md:text-sm font-black uppercase tracking-wider text-[#1886ff]">
                <Bookmark className="w-4 h-4 text-[#1886ff]" />
                <span>EXECUTIVE BRIEF: IMMEDIATE CREDIT CARD RECOVERY CALL DEFENSE</span>
              </div>

              <ul className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Strict Calling Window:</strong> RBI rules bar recovery calls before 8:00 AM or after 7:00 PM.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Third-Party Privacy:</strong> Agents cannot contact relatives, employers, or friends under any circumstances.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Civil Dispute:</strong> Card default is a civil contract breach; police arrest threats are illegal.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Call Recording Right:</strong> Borrowers can legally record all agent calls as Section 65B electronic evidence.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Cease-and-Desist Effect:</strong> Formal notices to bank nodal officers halt agency calls within 48 hours.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Mandatory DRA Badges:</strong> Visiting recovery agents must carry bank authorization letters and IIBF DRA credentials.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">RBI Ombudsman Remedy:</strong> Unresolved harassment escalates directly to cms.rbi.org.in for regulatory sanctions.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Permanent OTS Resolution:</strong> Negotiating a 40% to 55% One-Time Settlement permanently eliminates debt and calls.
                  </div>
                </li>
              </ul>
            </div>

            {/* SECTION 1: Debt Economics & NPA Dynamics */}
            <section id="debt-economics-npa" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Banking Mechanics &amp; NPA Physics</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. Credit Card Debt Economics &amp; NPA Portfolio Dynamics
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Credit cards represent high-risk unsecured revolving credit lines where lending institutions maintain zero underlying physical collateral. When a cardholder misses consecutive monthly payment deadlines, the exposure follows a rigid regulatory classification trajectory under Reserve Bank of India prudential asset norms. From Day 1 to Day 30 of default, the account is categorized as Special Mention Account Zero (SMA-0), escalating to SMA-1 (31 to 60 days) and SMA-2 (61 to 90 days). Once non-payment surpasses 90 days, the bank is legally compelled under RBI balance sheet directives to classify the balance as a Non-Performing Asset (NPA).
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Classifying an account as an NPA forces commercial banks to allocate mandatory Tier-1 capital provisioning, locking up liquid capital against the bad loan. Because unsecured credit cards are exempt from SARFAESI Act property confiscation, banks cannot seize residential property. Consequently, lenders deploy aggressive third-party collection agencies on heavy commission incentives. Understanding these banking mechanics clarifies that relentless telecalling is an institutional push to extract cash before full write-off, creating the commercial foundation for an affordable One-Time Settlement (OTS).
              </p>
            </section>

            {/* SECTION 2: Financial Breakdown & Settlement Math */}
            <section id="financial-breakdown-math" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <DollarSign className="w-4 h-4 text-[#1886ff]" />
                <span>Financial Mechanics &amp; Ledger Inflation</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. Financial Breakdown: Principal vs. Compounding Penal Interest
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Unpaid credit card balances compound aggressively due to annualized percentage rates oscillating between 42% and 48%, combined with monthly late fees and 18% GST surcharges. Over six months of payment default, these compounding penal surcharges often double the ledger balance, transforming manageable consumer borrowing into an unpayable artificial debt.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                During bilateral compromise negotiations, institutional credit committees routinely strip away 100% of accrued late fees, penal surcharges, and unbilled finance interest. Compromise settlements are evaluated strictly against the baseline principal exposure, typically resolving between 40% and 55% of the total recorded ledger claim upon establishing genuine financial distress.
              </p>

              <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <span className="text-xs font-black uppercase tracking-wider text-[#1886ff]">
                    Representative 180-Day Credit Card NPA Settlement Audit
                  </span>
                  <span className="text-xs font-bold text-slate-500">Benchmark Model</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs">
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                    <span className="text-slate-500 block">Original Card Principal</span>
                    <strong className="text-slate-900 text-sm md:text-base font-bold">₹3,00,000</strong>
                  </div>
                  <div className="p-3 bg-red-50 rounded-xl border border-red-100">
                    <span className="text-red-600 block">Penal &amp; Finance Surcharges</span>
                    <strong className="text-red-700 text-sm md:text-base font-bold">₹1,85,000</strong>
                  </div>
                  <div className="p-3 bg-blue-50 rounded-xl border border-blue-100">
                    <span className="text-blue-700 block">Gross Demand Claim</span>
                    <strong className="text-blue-900 text-sm md:text-base font-bold">₹4,85,000</strong>
                  </div>
                  <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-100">
                    <span className="text-emerald-700 block">Compromise OTS Target (45%)</span>
                    <strong className="text-emerald-800 text-sm md:text-base font-bold">₹1,35,000 – ₹1,65,000</strong>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 3: 4-Sided Bordered Comparison Matrix Table */}
            <section id="resolution-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Comparative Legal Matrix</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Comparative Resolution Matrix: Recovery Pathways Analyzed
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Comparing available debt resolution routes highlights clear trade-offs across cost, timeline, and harassment relief:
              </p>

              <div className="overflow-x-auto rounded-2xl border border-slate-200/80 bg-white shadow-xs">
                <table className="w-full text-left text-xs md:text-sm">
                  <thead className="bg-slate-50 border-b border-slate-200/80 text-slate-700">
                    <tr>
                      <th className="p-3.5 font-bold">Route</th>
                      <th className="p-3.5 font-bold">Governing Law</th>
                      <th className="p-3.5 font-bold">Harassment</th>
                      <th className="p-3.5 font-bold">Concession</th>
                      <th className="p-3.5 font-bold">Timeline</th>
                      <th className="p-3.5 font-bold text-[#1886ff]">Borrower Safeguard</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-600">
                    <tr className="hover:bg-slate-50/50">
                      <td className="p-3.5 font-bold text-slate-900">Compromise OTS</td>
                      <td className="p-3.5">RBI Policy</td>
                      <td className="p-3.5 text-emerald-700 font-semibold">Stops Permanently</td>
                      <td className="p-3.5 font-bold text-emerald-700">40%-55% Waiver</td>
                      <td className="p-3.5">30-60 Days</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold">Cease-and-Desist &amp; NDC</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50">
                      <td className="p-3.5 font-bold text-slate-900">Loan Restructure</td>
                      <td className="p-3.5">Bank Policy</td>
                      <td className="p-3.5 text-amber-700 font-semibold">Paused on EMI</td>
                      <td className="p-3.5">Zero Waiver</td>
                      <td className="p-3.5">15-45 Days</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold">Fixed EMI conversion</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50">
                      <td className="p-3.5 font-bold text-slate-900">Lok Adalat</td>
                      <td className="p-3.5">NALSA Act 1987</td>
                      <td className="p-3.5 text-emerald-700 font-semibold">Halted by Consent</td>
                      <td className="p-3.5 font-bold text-emerald-700">30%-50% Compromise</td>
                      <td className="p-3.5">1 Day</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold">Non-appealable decree</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50">
                      <td className="p-3.5 font-bold text-slate-900">Civil Suit</td>
                      <td className="p-3.5">CPC 1908</td>
                      <td className="p-3.5 text-blue-700 font-semibold">Handled by Lawyers</td>
                      <td className="p-3.5">Court Decision</td>
                      <td className="p-3.5">2-5 Years</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold">Leave to defend rights</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50">
                      <td className="p-3.5 font-bold text-slate-900">Inaction</td>
                      <td className="p-3.5">Agency Recovery</td>
                      <td className="p-3.5 text-red-700 font-semibold">Escalates</td>
                      <td className="p-3.5 text-red-700">Zero Waiver</td>
                      <td className="p-3.5">Indefinite</td>
                      <td className="p-3.5 text-red-600 font-semibold">Severe CIBIL damage</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 4: Technical CIBIL Algorithm & Scoring Math */}
            <section id="cibil-algorithm-math" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                <span>Credit Bureau Architecture</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. Technical CIBIL Algorithm &amp; Bureau Scoring Math
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                TransUnion CIBIL calculates three-digit credit scores between 300 and 900 based on five weighted pillars: 35% Payment History, 30% Credit Utilization Ratio, 15% Credit History Length, 10% Credit Mix, and 10% New Inquiries. Credit card defaults directly damage the 35% payment history component, triggering an immediate drop of 80 to 140 points as Days Past Due (DPD) counters climb past 90 days.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When an account is settled through an OTS, the bank updates bureau records with a Settled status code. While Settled marks the end of active recovery and litigation risk, it depresses scores temporarily. Under Section 21 of the Credit Information Companies (Regulation) Act, 2005 (CICRA), cardholders can later request conversion to Closed by paying agreed differential balances or by rebuilding their score to 750+ within 12 to 24 months using secured credit cards.
              </p>
            </section>

            {/* SECTION 5: Visual Infographic Asset Card */}
            <section id="visual-infographic-card" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Sparkles className="w-4 h-4 text-[#1886ff]" />
                <span>Visual Defense Roadmap</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Visual Defense Blueprint: Anti-Harassment &amp; Settlement Architecture
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Refer to this visual blueprint outlining statutory calling limits, evidence collection protocols, 3-tier grievance escalation channels, and compromise settlement workflows:
              </p>

              <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-3 md:p-4 overflow-hidden">
                <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-slate-100">
                  <Image
                    src="/images/infographics/stop-credit-card-recovery-calls.jpg"
                    alt="How to Stop Credit Card Recovery Calls Legal Defense Blueprint"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 60vw"
                    priority
                  />
                </div>
                <div className="mt-3 px-2 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2">
                  <span>CredSettle Legal Defense Architecture • RBI Master Directions &amp; PSSA 2007</span>
                  <a
                    href="/images/infographics/stop-credit-card-recovery-calls.jpg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1886ff] hover:underline font-bold flex items-center gap-1"
                  >
                    <span>View High-Resolution Blueprint</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </section>

            {/* SECTION 6: Step-by-Step SOP (6 Stages) */}
            <section id="six-stage-defense-sop" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Award className="w-4 h-4 text-[#1886ff]" />
                <span>Standard Operating Procedure</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. Standard Operating Procedure (SOP): 6 Stages of Recovery Call Defense
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Follow this battle-tested procedure to halt aggressive collection calls, assert your statutory protections, and secure a final settlement:
              </p>

              <div className="space-y-4 pt-2">
                {/* Stage 1 */}
                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 01
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Days 1–3</span>
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-slate-900">
                    Forensic Call &amp; Ledger Audit
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Log call timestamps, numbers, and agency names. Audit card statements to isolate actual principal borrowings from compounding 48% APR finance fees, GST charges, and late penalties.
                  </p>
                </div>

                {/* Stage 2 */}
                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 02
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Days 4–7</span>
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-slate-900">
                    Statutory Hardship Dossier &amp; Cease-and-Desist
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Compile documentation of hardship, such as salary termination letters. Dispatch a formal Cease-and-Desist notice to the bank Grievance Redressal Officer mandating the cessation of telephonic harassment.
                  </p>
                </div>

                {/* Stage 3 */}
                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 03
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Days 8–15</span>
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-slate-900">
                    Formal Representation to Credit Committee &amp; PNO
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Submit written representations to the Bank Principal Nodal Officer, requesting transfer of your account from third-party recovery vendors to the Special Assets Desk for structured compromise.
                  </p>
                </div>

                {/* Stage 4 */}
                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 04
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Days 16–30</span>
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-slate-900">
                    Bilateral Waiver Negotiations
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Negotiate directly with bank managers, countering inflated claims with a realistic 40% to 55% settlement proposal based on audited principal exposure and documented financial insolvency.
                  </p>
                </div>

                {/* Stage 5 */}
                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 05
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Days 31–45</span>
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-slate-900">
                    Official Settlement Letter Vetting
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Vet the written One-Time Settlement offer letter issued from the bank official domain, ensuring it specifies full debt waiver, installment dates, and a commitment to issue an NDC.
                  </p>
                </div>

                {/* Stage 6 */}
                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 06
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Days 46–60</span>
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-slate-900">
                    Direct Remittance &amp; NDC Issuance
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Remit settlement funds directly into your credit card loan account via official channels. Within 30 days, obtain your unconditional No Dues Certificate and verify bureau closure.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: Statutory Notice Defense & Legal Rights (4 Cards - Analytical, NO Drafts/Templates/Monospace) */}
            <section id="statutory-notice-defense" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <ShieldCheck className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Defense Architecture</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. Statutory Notice Defense &amp; Borrower Legal Protections
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When credit card accounts default, lenders may issue statutory legal notices. Understanding analytical defenses prevents panic and protects your rights:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-[#1886ff] font-bold text-sm">
                    <FileWarning className="w-4 h-4" />
                    <span>Section 25 PSSA (NACH Mandate Dishonor)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Section 25 PSSA penalizes electronic mandate bounces. Defense involves demonstrating that non-payment arose from financial distress rather than fraudulent intent, establishing prior mandate cancellation requests, and seeking compromise conciliation.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                    <Gavel className="w-4 h-4" />
                    <span>Section 138 NI Act (Cheque Dishonor Notice)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If security cheques bounce, lenders issue a statutory notice under Section 138 of the Negotiable Instruments Act. Defense requires showing that the cheque served as security rather than discharge of an undisputed debt, disputing penal calculations, and seeking statutory compounding.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-purple-700 font-bold text-sm">
                    <Landmark className="w-4 h-4" />
                    <span>Section 21 Arbitration Act (Unilateral Appointments)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Banks often initiate private arbitration. Landmark Supreme Court rulings in Perkins Eastman and TRF Ltd. hold that banks cannot unilaterally appoint arbitrators, providing absolute Section 12(5) grounds to invalidate proceedings.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <ShieldAlert className="w-4 h-4" />
                    <span>DRT Section 19 &amp; RBI Fair Practices Code</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Debt Recovery Tribunal actions apply strictly over ₹20 Lakhs. For credit cards, RBI Master Directions on Fair Practices Code strictly prohibit intimidation, physical visits without notice, and calls outside 8 AM to 7 PM.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 8: 3-Tier Escalation Matrix */}
            <section id="three-tier-escalation" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff]" />
                <span>Grievance Escalation Framework</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. The 3-Tier Escalation Matrix &amp; Regulatory Grievance Channels
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If collection callers persist with unlawful harassment, escalate systematically through this structured 3-tier regulatory hierarchy:
              </p>

              <div className="space-y-4 pt-2">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Level 1: Branch Grievance Redressal Officer (GRO)
                    </span>
                    <span className="text-xs text-slate-500 font-semibold">Turnaround: 7–10 Days</span>
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-slate-900">
                    Formal Cease-and-Desist Notice &amp; Call Log Submission
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Submit a written complaint with call logs to the branch GRO, demanding the immediate recall of third-party recovery agencies.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-md">
                      Level 2: Bank Principal Nodal Officer (PNO)
                    </span>
                    <span className="text-xs text-slate-500 font-semibold">Turnaround: 14–21 Days</span>
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-slate-900">
                    Executive Escalation for Fair Practices Violations
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Escalate unresolved grievances to the executive PNO, citing specific RBI Fair Practices Code violations to prompt internal vendor audits.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-emerald-200 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">
                      Level 3: RBI Integrated Ombudsman (cms.rbi.org.in)
                    </span>
                    <span className="text-xs text-slate-500 font-semibold">Turnaround: 30 Days</span>
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-slate-900">
                    Statutory Regulatory Adjudication &amp; Sanctions
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Lodge a formal regulatory complaint on cms.rbi.org.in under the Integrated Ombudsman Scheme, 2021 for persistent harassment and regulatory non-compliance.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 9: Chronological Timeline Table */}
            <section id="chronological-milestones" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Clock className="w-4 h-4 text-[#1886ff]" />
                <span>Procedural Milestones</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. Chronological Resolution Milestones (Day 1 to Month 6)
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Understanding default milestones helps cardholders navigate collection stages and negotiate strategically:
              </p>

              <div className="overflow-x-auto rounded-2xl border border-slate-200/80 bg-white shadow-xs">
                <table className="w-full text-left text-xs md:text-sm">
                  <thead className="bg-slate-50 border-b border-slate-200/80 text-slate-700">
                    <tr>
                      <th className="p-3.5 font-bold">Timeline</th>
                      <th className="p-3.5 font-bold">Banking Event</th>
                      <th className="p-3.5 font-bold">Status</th>
                      <th className="p-3.5 font-bold text-[#1886ff]">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-600">
                    <tr className="hover:bg-slate-50/50">
                      <td className="p-3.5 font-bold text-slate-900">Day 1-30</td>
                      <td className="p-3.5">Payment Default</td>
                      <td className="p-3.5">SMA-0</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold">Audit statement and minimum charges</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50">
                      <td className="p-3.5 font-bold text-slate-900">Day 31-90</td>
                      <td className="p-3.5">Persistent Calling</td>
                      <td className="p-3.5">SMA-1/2</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold">Issue Cease-and-Desist notice</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50">
                      <td className="p-3.5 font-bold text-slate-900">Day 91-120</td>
                      <td className="p-3.5">Bad Debt Write-Down</td>
                      <td className="p-3.5 font-bold text-amber-600">NPA</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold">Request compromise OTS with PNO</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50">
                      <td className="p-3.5 font-bold text-slate-900">Month 4-5</td>
                      <td className="p-3.5">Settlement Window</td>
                      <td className="p-3.5">Special Assets</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold">Negotiate 40%-55% settlement</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50">
                      <td className="p-3.5 font-bold text-slate-900">Month 6</td>
                      <td className="p-3.5">Permanent Closure</td>
                      <td className="p-3.5 text-emerald-700 font-semibold">NDC</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold">Obtain No Dues Certificate</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: Specialized Real-World Scenarios */}
            <section id="specialized-card-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>Real-World Scenarios</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Specialized Scenarios: Multi-Card Debt, Layoffs &amp; ARC Transfers
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Credit card defaults occur in varied contexts, each requiring a tailored legal defense strategy:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-[#1886ff]" />
                    Multi-Card Compounding Consolidation
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Cardholders with multiple defaulted accounts face over 40 daily recovery calls. A coordinated strategy pools portfolios, serves unified cease-and-desist notices, and sequences individual settlements efficiently.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-emerald-600" />
                    Executive Layoffs &amp; Income Shocks
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Sudden job loss severely disrupts credit card payments. Documenting financial hardship with severance letters and bank statements encourages bank credit committees to grant maximum settlement concessions.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-purple-600" />
                    Proprietorship Business Card Debt
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Business credit cards used for working capital create personal liability for sole proprietors. Defense focuses on isolating business distress and negotiating OTS terms that shield family assets.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-amber-600" />
                    ARC Debt Assignments (Phoenix, ARCIL)
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    When banks assign aged card debts to ARCs under SARFAESI Section 5 at steep discounts (often 15% to 25%), borrowers gain substantial leverage to negotiate deep-discount compromise settlements.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 11: Company Profile Component */}
            <div id="company-profile" className="scroll-target">
              <CompanySection />
            </div>

            {/* SECTION 12: 10 Synchronized FAQs */}
            <section id="frequently-asked-questions" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <HelpCircle className="w-4 h-4 text-[#1886ff]" />
                <span>Frequently Asked Questions</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Frequently Asked Questions on Stopping Credit Card Recovery Calls
              </h2>
              <p className="text-xs md:text-sm text-slate-600">
                Click on any question below to view detailed legal and procedural answers verified by our debt resolution professionals:
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

            {/* SECTION 13: Regulatory Citations & Outbound Authority Grid */}
            <section id="statutory-citations" className="scroll-target space-y-4 pt-4 border-t border-slate-200">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-500">
                <BookOpen className="w-4 h-4" />
                <span>Statutory Citations &amp; Legal Authorities</span>
              </div>
              <h2 className="text-base sm:text-lg font-bold text-slate-900">
                Official Regulatory Citations &amp; Judicial References
              </h2>
              <ul className="space-y-2 text-xs text-slate-600 leading-relaxed list-disc pl-5">
                <li>
                  <strong>RBI Master Directions:</strong> Master Direction on Fair Practices Code for Lenders, Grievance Redressal Mechanism &amp; Debt Recovery Agent Standards.
                </li>
                <li>
                  <strong>RBI Integrated Ombudsman Scheme 2021:</strong> Redressal of Unfair Recovery Practices, Intimidation, and Calling Violations.
                </li>
                <li>
                  <strong>CICRA 2005 (Section 21):</strong> Credit Information Dispute Resolution and Bureau Status Updates.
                </li>
                <li>
                  <strong>PSSA 2007 (Section 25):</strong> Electronic Auto-Debit Mandate Dishonor Framework and Defenses.
                </li>
                <li>
                  <strong>NI Act 1881 (Section 138):</strong> Dishonor of Cheque for Inadequacy of Funds and Statutory Limitations.
                </li>
                <li>
                  <strong>Supreme Court Precedents:</strong> <em>Perkins Eastman (2020)</em> &amp; <em>TRF Ltd (2017)</em> on Unilateral Arbitrator Ineligibility.
                </li>
              </ul>

              {/* 6 Outbound Regulatory Authority Badges */}
              <div className="pt-3">
                <span className="text-xs font-bold text-slate-700 block mb-2">Verified Outbound Statutory Portals:</span>
                <div className="flex flex-wrap gap-2">
                  <a
                    href="https://www.rbi.org.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors font-semibold border border-blue-200 inline-flex items-center gap-1"
                  >
                    <span>rbi.org.in</span>
                    <ExternalLink className="w-3 h-3 text-blue-500" />
                  </a>
                  <a
                    href="https://cms.rbi.org.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors font-semibold border border-blue-200 inline-flex items-center gap-1"
                  >
                    <span>cms.rbi.org.in</span>
                    <ExternalLink className="w-3 h-3 text-blue-500" />
                  </a>
                  <a
                    href="https://www.cibil.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors font-semibold border border-blue-200 inline-flex items-center gap-1"
                  >
                    <span>cibil.com</span>
                    <ExternalLink className="w-3 h-3 text-blue-500" />
                  </a>
                  <a
                    href="https://www.indiacode.nic.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors font-semibold border border-blue-200 inline-flex items-center gap-1"
                  >
                    <span>indiacode.nic.in</span>
                    <ExternalLink className="w-3 h-3 text-blue-500" />
                  </a>
                  <a
                    href="https://nalsa.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors font-semibold border border-blue-200 inline-flex items-center gap-1"
                  >
                    <span>nalsa.gov.in</span>
                    <ExternalLink className="w-3 h-3 text-blue-500" />
                  </a>
                  <a
                    href="https://cybercrime.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors font-semibold border border-blue-200 inline-flex items-center gap-1"
                  >
                    <span>cybercrime.gov.in</span>
                    <ExternalLink className="w-3 h-3 text-blue-500" />
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
                  <Link href="/credit-card-minimum-due-trap" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Credit Card Minimum Due Trap
                  </Link>
                  <Link href="/credit-card-settlement-process" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Credit Card Settlement Process
                  </Link>
                  <Link href="/can-i-go-to-jail-for-credit-card-debt" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Jail for Credit Card Debt?
                  </Link>
                  <Link href="/convert-settled-status-to-closed" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Convert Settled to Closed
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
                Specialized in banking compliance, debt recovery regulations, and NPA settlements with deep expertise enforcing RBI Fair Practices Code.
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
              style={{ backgroundColor: '#2452ae' }}
            >
              <div className="space-y-1 text-center">
                <span className="text-xs font-black uppercase tracking-wider text-blue-200 bg-white/10 px-3 py-1 rounded-full inline-block mb-1">
                  100% CONFIDENTIAL LEGAL DEFENSE
                </span>
                <h3 className="text-lg md:text-xl font-bold text-white leading-snug">
                  Facing Harassing Recovery Calls?
                </h3>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our debt resolution experts issue cease-and-desist notices, halt agency harassment, and negotiate a 40% to 55% settlement.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Stop Harassment &amp; Settle Card Dues
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
                  <span><strong>Direct Bank Remittance:</strong> Zero middleman fund holding.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>RBI &amp; CICRA Compliance:</strong> 100% lawful dispute handling.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Pan-India Representation:</strong> Dedicated debt resolution specialists.</span>
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
                  href="/credit-card-minimum-due-trap"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Credit Card Minimum Due Trap
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">48% APR compounding escape plan &rarr;</span>
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
