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
  UserCheck,
  Sparkles,
  Gavel,
  Landmark,
  Calendar
} from 'lucide-react';

export default function DuplicateSecuritisedLoanClient() {
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
    { id: 'quick-crux', label: 'Executive Brief & Legal Crux' },
    { id: 'why-duplicate-happens', label: '1. Why NBFC Securitisation Doubles Loans' },
    { id: 'securitisation-vs-assignment', label: '2. Securitisation vs Assignment vs ARC' },
    { id: 'score-and-foir-impact', label: '3. Score & FOIR Damage Breakdown' },
    { id: 'rbi-regulatory-rules', label: '4. RBI Rules & ₹100/Day Penalty' },
    { id: 'visual-blueprint', label: '5. Visual Blueprint Infographic' },
    { id: 'step-by-step-sop', label: '6. Step-by-Step Removal SOP' },
    { id: 'borrower-legal-rights', label: '7. CICRA & Consumer Court Rights' },
    { id: 'escalation-matrix', label: '8. 3-Tier Escalation Matrix' },
    { id: 'procedural-timeline', label: '9. Dispute to Clean Report Timeline' },
    { id: 'specialized-scenarios', label: '10. Co-Lending, MRR & Closed Ghosts' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
    {
      q: 'Why is my single personal loan showing twice on CIBIL after NBFC securitisation?',
      a: 'This happens when your NBFC sells or assigns your loan pool to a bank, trust, or ARC. The new buyer opens a fresh loan number in bureau files. If your old NBFC fails to mark its old entry as closed or sold, both lines stay open.'
    },
    {
      q: 'Do I have to pay two EMIs if my loan appears twice on CIBIL?',
      a: 'No. You only signed one loan contract and received one payout. You never owe double money. A duplicate CIBIL line is a reporting mistake between the old NBFC and the new buyer.'
    },
    {
      q: 'How much does a duplicate securitised loan hurt my CIBIL score and FOIR?',
      a: 'A duplicate active loan doubles your shown debt and EMI load. It pushes your debt-to-income ratio (FOIR) past bank limits and can cut your CIBIL score by 40 to 90 points. Lenders then reject home, car, or top-up loans.'
    },
    {
      q: 'Can an NBFC sell or assign my personal loan without asking me first?',
      a: 'Most NBFC loan contracts include an assignment clause that lets lenders pool and sell standard or stressed loans under RBI rules. However, under RBI fair lending norms and Section 130 of the Transfer of Property Act, they must give you clear notice when your servicing lender changes.'
    },
    {
      q: 'Who must fix the duplicate entry: the old NBFC or the new bank?',
      a: 'Both lenders share legal duty under RBI rules. Usually, the old NBFC must update its old account to Closed or Sold/Transferred with zero balance. In pure securitisation pools where the NBFC remains the servicer, the trust or bank should not upload a second active line.'
    },
    {
      q: 'Can CIBIL delete a duplicate loan entry on its own without bank approval?',
      a: 'No. Under the CICRA Act, 2005, credit bureaus cannot change or delete loan lines on their own. The reporting bank or NBFC must confirm the error in writing and send a clean correction file.'
    },
    {
      q: 'How many days do lenders and bureaus get to remove a duplicate loan?',
      a: 'Under RBI Circular RBI/2023-24/72, your dispute must be solved within 30 calendar days. The lender gets 21 days to check and send fixed data, and the bureau gets 9 days to update your report.'
    },
    {
      q: 'Can I claim ₹100 per day if the duplicate loan stays after 30 days?',
      a: 'Yes. If your valid dispute is not fixed within 30 calendar days, the lender or bureau at fault must pay you ₹100 for each extra day of delay. They must credit this money to your bank account within 5 working days of fixing the error.'
    },
    {
      q: 'Does fixing the duplicate loan on CIBIL also clean CRIF, Equifax, and Experian?',
      a: 'Not always. India has four separate credit bureaus that do not share live edits automatically. You should pull reports from CIBIL, CRIF High Mark, Equifax, and Experian and file disputes with every bureau that shows the duplicate line.'
    },
    {
      q: 'How does CredSettle help remove duplicate securitised personal loans?',
      a: 'CredSettle audits all four credit reports and maps both Loan Account Numbers to your single payout. We send notices to both Nodal Officers, handle bureau disputes, and claim ₹100 per day delay relief.'
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
            <span>RBI Loan Transfer &amp; Credit Bureau Compliance</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Remove Double-Counted Securitised Personal Loan Entries
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            Seeing your single personal loan twice on CIBIL after an NBFC sold or assigned its book? Learn the exact RBI rules to delete duplicate loan lines across all four bureaus and claim ₹100 per day for late fixes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Fix Duplicate Loan Entry</span>
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
                  <span>Statutory Borrower Shield</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Protected under CICRA 2005 and RBI Circular RBI/2023-24/72.
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
                <span>EXECUTIVE BRIEF: DUPLICATE SECURITISED LOAN REMOVAL RULES</span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">One Loan, Never Two Debts:</strong> When an NBFC pools or assigns your personal loan to a bank or trust, only one active balance can appear on CIBIL.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Why the Glitch Happens:</strong> The new buyer uploads a new Loan Account Number (LAN), while the old NBFC forgets to close or tag its old entry as sold.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Strict 30-Day RBI Fix Limit:</strong> Under RBI Circular RBI/2023-24/72, lenders have 21 days and bureaus have 9 days to remove duplicate lines after you dispute them.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">₹100 Per Day Delay Payout:</strong> If the duplicate loan stays past 30 calendar days, the lender or bureau at fault owes you ₹100 for every extra day.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Check All Four Credit Bureaus:</strong> A fix on CIBIL does not auto-sync everywhere. Audit CRIF High Mark, Equifax, and Experian on the same day.
                  </span>
                </li>
              </ul>
            </div>

            {/* SECTION 1: Why NBFC Securitisation Creates Duplicate CIBIL Loans */}
            <section id="why-duplicate-happens" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Root Cause of Double-Counted Loans</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. Why NBFC Securitisation Creates Duplicate CIBIL Loans
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Many Indian borrowers get a shock when they check their CIBIL report. They took only one personal loan from an NBFC or loan app. Yet their credit report shows two active personal loans for the exact same amount and date.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This error almost always starts after <strong>securitisation</strong> or <strong>direct assignment</strong>. In simple words, NBFCs raise fresh cash by selling bundles of active loans to banks, trusts, or Asset Reconstruction Companies (ARCs). Your EMI stays the same, and you still owe only one debt.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The problem happens during back-end data upload. The buying bank or ARC creates a brand-new Loan Account Number (LAN) in its system and sends it to CIBIL. Meanwhile, your old NBFC fails to tag its old account as Closed or Sold.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Because both records carry different account numbers and lender codes, CIBIL cannot merge them automatically. As a result, the credit bureau counts one loan twice. Your report now shows double debt even though you never borrowed a second rupee.
              </p>
            </section>

            {/* SECTION 2: Securitisation vs Direct Assignment vs ARC Sales */}
            <section id="securitisation-vs-assignment" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff]" />
                <span>Portfolio Transfer Structures Explained</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. Securitisation vs Direct Assignment vs ARC Sales
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                To fix a duplicate loan fast, you must first know how your NBFC moved your loan. Different transfer types place credit reporting duty on different firms. Knowing this stops both lenders from blaming each other.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                In pure securitisation (PTC pools), a trust buys the cash flow, while your old NBFC keeps collecting EMIs as the servicer. In direct assignment (DA), a bank buys 90% of the loan book and the NBFC keeps a 10% share. In an ARC sale, a stressed or overdue loan shifts fully to the ARC.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[580px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Transfer Model</th>
                      <th className="p-3">Who Buys the Loan</th>
                      <th className="p-3">Who Should Report to CIBIL</th>
                      <th className="p-3">Common Duplicate Glitch</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Securitisation (PTC)</td>
                      <td className="p-3">Special Purpose Trust (SPE)</td>
                      <td className="p-3">Originator NBFC (as Servicer)</td>
                      <td className="p-3">Trustee bank uploads a second pool entry under a new LAN.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Direct Assignment (DA)</td>
                      <td className="p-3">Public or Private Bank (90% share)</td>
                      <td className="p-3">Bank for buyer share; clean sync on 10% MRR</td>
                      <td className="p-3">Both NBFC and buyer bank report 100% of the full loan amount.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">ARC Stressed Sale</td>
                      <td className="p-3">Asset Reconstruction Company</td>
                      <td className="p-3">ARC only (NBFC must close old entry)</td>
                      <td className="p-3">Old NBFC leaves Written-Off open while ARC opens active NPA line.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Co-Lending (80:20)</td>
                      <td className="p-3">Bank (80%) + NBFC (20%)</td>
                      <td className="p-3">Split share only, never full double sum</td>
                      <td className="p-3">Both bank and NBFC report full sanctioned limit separately.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 3: Score & FOIR Damage: Double-Counted Debt Impact */}
            <section id="score-and-foir-impact" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                <span>Credit Score &amp; Loan Eligibility Math</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Score &amp; FOIR Damage: Double-Counted Debt Impact
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                A duplicate personal loan hurts you even if you pay every EMI on time. Banks check two key metrics before giving a home loan, car loan, or credit card. Those metrics are your CIBIL score and your Fixed Obligation to Income Ratio (FOIR).
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                FOIR measures what share of your monthly salary goes toward EMIs. Most Indian banks reject loan applications if your FOIR crosses 50% to 55%. When one ₹5 Lakh personal loan shows twice, bank software thinks you pay two EMIs every month.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Worse still, if the old NBFC stops updating payments on its frozen entry, the old line may start showing fake late marks (DPD). That triggers a sudden score crash of 50 to 100 points. The table below shows the real impact on a salaried borrower earning ₹60,000 per month.
              </p>

              {/* Representative Impact Card */}
              <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white shadow-xs">
                <div className="bg-slate-900 text-white p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-[#1886ff]" />
                    <span className="font-bold text-sm">Single Loan vs Double-Counted CIBIL Impact</span>
                  </div>
                  <span className="text-xs text-blue-300 font-mono">Sample Salary: ₹60,000/Month</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80">
                    <thead>
                      <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-semibold">
                        <th className="p-3">Credit Profile Factor</th>
                        <th className="p-3">True Single Loan</th>
                        <th className="p-3">Duplicate Entry Glitch</th>
                        <th className="p-3 text-right">Real Lending Impact</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200/80 text-slate-600">
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Active Unsecured Loans</td>
                        <td className="p-3 font-mono">1 Loan (₹5,00,000)</td>
                        <td className="p-3 font-mono text-rose-600 font-bold">2 Loans (₹10,00,000)</td>
                        <td className="p-3 text-right font-bold text-rose-700">2x Debt Inflation</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Monthly EMI Counted</td>
                        <td className="p-3 font-mono">₹15,000 / month</td>
                        <td className="p-3 font-mono text-rose-600 font-bold">₹30,000 / month</td>
                        <td className="p-3 text-right font-bold text-amber-700">Fake EMI Burden</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Calculated FOIR Ratio</td>
                        <td className="p-3 text-emerald-600 font-semibold">25% (Healthy)</td>
                        <td className="p-3 text-rose-600 font-semibold">50% (High Risk)</td>
                        <td className="p-3 text-right font-bold text-rose-700">Home Loan Blocked</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Missed EMI Hit (If Stressed)</td>
                        <td className="p-3 font-mono">1 DPD Mark</td>
                        <td className="p-3 font-mono text-rose-700 font-bold">2 Parallel DPD Marks</td>
                        <td className="p-3 text-right font-bold text-rose-800">Double Score Drop</td>
                      </tr>
                      <tr className="bg-blue-50/70 font-bold text-slate-900">
                        <td className="p-3">After RBI Dispute Removal</td>
                        <td className="p-3 text-[#1886ff]">1 Clean Active Line</td>
                        <td className="p-3 text-[#1886ff]">Duplicate Deleted</td>
                        <td className="p-3 text-right text-[#1886ff] text-sm sm:text-base font-mono">+45 to +90 Score Jump</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* SECTION 4: RBI Rules: Transfer Directions & ₹100/Day Penalty */}
            <section id="rbi-regulatory-rules" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Clock className="w-4 h-4 text-[#1886ff]" />
                <span>Central Bank Circulars &amp; Statutory Penalties</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. RBI Rules: Transfer Directions &amp; ₹100/Day Penalty
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Four clear Reserve Bank of India (RBI) directives give you strong power to erase duplicate loan entries. Cite these exact circulars in every email and dispute you file.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                <strong>1. RBI Securitisation &amp; Transfer Directions, 2021 (DOR.STR.REC.53 and DOR.STR.REC.51):</strong> These Master Directions govern how NBFCs sell standard or stressed loans. They require clean ledger handovers so credit bureaus always show true borrower debt, never double balances.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                <strong>2. RBI ₹100 Per Day Delay Penalty (RBI/2023-24/72):</strong> Issued on October 26, 2023, this binding rule sets a strict <strong>30-day total deadline</strong> to fix credit report errors. The bank or NBFC gets 21 days to send fixed files, and the bureau gets 9 days to update your report. Past Day 30, you earn ₹100 per day, paid within 5 working days of resolution.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                <strong>3. Weekly &amp; Fortnightly Reporting Rules (RBI Directions, 2025-2026):</strong> Credit updates no longer wait 45 days. Lenders must now send data four times each month (9th, 16th, 23rd, and month-end) and map CKYC IDs cleanly to prevent duplicate records.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                <strong>4. Mandatory ARC Bureau Membership (RBI/2024-25/82):</strong> Dated October 10, 2024, this circular forces every ARC to join all four credit bureaus. Every ARC must also appoint a Nodal Officer and fix rejected data within 7 days.
              </p>
            </section>

            {/* SECTION 5: Visual Blueprint Infographic */}
            <section id="visual-blueprint" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Sparkles className="w-4 h-4 text-[#1886ff]" />
                <span>Visual Blueprint</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. Visual Blueprint: Duplicate Loan Removal Process
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This visual guide highlights your legal shield when an NBFC loan transfer creates two active entries on your report. Use this framework to clean all four bureaus and enforce the RBI ₹100 daily rule.
              </p>

              <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-slate-100 bg-slate-100">
                  <Image
                    src="/images/infographics/duplicate-personal-loan-cibil-securitisation-assignment.jpg"
                    alt="Duplicate Personal Loan on CIBIL After NBFC Securitisation Fix Guide"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 900px"
                    className="object-contain hover:scale-[1.01] transition-transform duration-300"
                    priority
                  />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-500 pt-1 gap-2">
                  <span>Official CredSettle Duplicate Tradeline Rectification Framework • CICRA &amp; RBI Compliant</span>
                  <a
                    href="/images/infographics/duplicate-personal-loan-cibil-securitisation-assignment.jpg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1886ff] hover:underline font-bold inline-flex items-center gap-1"
                  >
                    <span>View High-Resolution Blueprint</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </section>

            {/* SECTION 6: Step-by-Step SOP: Fix Duplicate Loan on All Bureaus */}
            <section id="step-by-step-sop" className="scroll-target space-y-6">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Standard Operating Procedure</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. Step-by-Step SOP: Fix Duplicate Loan on All Bureaus
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Never rely on customer care calls to fix a duplicate securitised loan. Follow these six written steps so your 30-day RBI penalty clock starts right away.
              </p>

              <div className="space-y-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">1</span>
                    Stage 1: Pull Full Reports From All Four Credit Bureaus
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Download your full credit report from CIBIL, CRIF High Mark, Equifax, and Experian. Write down both Loan Account Numbers, exact open dates, sanctioned amounts, and lender names.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">2</span>
                    Stage 2: Gather Proof of Single Loan Payout
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Collect your original Loan Sanction Letter, Key Facts Statement (KFS), and the bank passbook page showing only one credit payout. Also save any email or SMS notifying you about loan assignment or transfer.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">3</span>
                    Stage 3: File an Online Duplicate Account Dispute
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Log in to the CIBIL Dispute Center and each affected bureau portal. Select &quot;Duplicate Account&quot; on the wrong entry, cite both account numbers, and save your Dispute ID number.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">4</span>
                    Stage 4: Email Both Principal Nodal Officers Together
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Send one joint email to the Grievance Redressal Officer and Principal Nodal Officer of both the old NBFC and the buying bank or ARC. Attach your proof and ask the old NBFC to suppress or mark its old line as Closed - Sold/Transferred with ₹0 balance.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">5</span>
                    Stage 5: Share Bank Details to Activate ₹100/Day Rights
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Include your bank account or UPI ID inside your complaint email as required by RBI/2023-24/72. This forces both lenders to track your 21-day deadline closely.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">6</span>
                    Stage 6: File RBI Ombudsman Case on Day 31
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If the duplicate loan still appears after 30 calendar days, file a free case on cms.rbi.org.in against the NBFC, buying bank, and bureau. Demand instant deletion and full ₹100 per day delay payment.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: Borrower Legal Rights: CICRA & Consumer Court Relief */}
            <section id="borrower-legal-rights" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Protections &amp; Court Remedies</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. Borrower Legal Rights: CICRA &amp; Consumer Court Relief
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Reporting false or double debt is not a harmless typo. Indian banking statutes and consumer courts treat wrong credit reporting as a clear legal breach. Here are four statutory shields you can use.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                    <Gavel className="w-4 h-4" />
                    <span>CICRA 2005 Section 21(3)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    This law gives every borrower the legal right to demand prompt updates to wrong credit data. Credit bureaus and lenders must act within 30 days of receiving your request.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                    <Landmark className="w-4 h-4" />
                    <span>CICs Under RBI Ombudsman</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Since September 2022, all four credit bureaus fall directly under the RBI Integrated Ombudsman Scheme. You can drag both the NBFC and CIBIL to the same free portal.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-purple-700 font-bold text-sm">
                    <Scale className="w-4 h-4" />
                    <span>Consumer Protection Act, 2019</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Consumer commissions rule that duplicate CIBIL loans cause deficiency in service and mental agony. If a home or business loan got rejected, you can claim extra damages with rejection proof.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Section 130 Transfer Notice Rule</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Section 130 of the Transfer of Property Act and RBI norms protect your right to know. Lenders must notify you in writing when servicing rights move to a new buyer or ARC.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 8: 3-Tier Escalation Matrix: Nodal Officer to Ombudsman */}
            <section id="escalation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Escalation Protocol</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. 3-Tier Escalation Matrix: Nodal Officer to Ombudsman
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When an old NBFC and a buying bank pass the blame back and forth, regular support desks stall. Use this official three-tier path to force rapid deletion.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Escalation Tier</th>
                      <th className="p-3">Designated Authority</th>
                      <th className="p-3">Turnaround Time</th>
                      <th className="p-3">Scope of Action &amp; Relief</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 1: GRO + Bureau</td>
                      <td className="p-3">NBFC GRO, Bank GRO &amp; CIBIL Dispute Desk</td>
                      <td className="p-3 font-mono">7 to 14 Days</td>
                      <td className="p-3">Logs official Dispute ID, verifies single disbursement, and triggers bureau check.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 2: Joint PNO</td>
                      <td className="p-3">Principal Nodal Officers of Both Lenders</td>
                      <td className="p-3 font-mono">Up to Day 21</td>
                      <td className="p-3">Pushes weekly XML correction batch to suppress duplicate LAN across all 4 CICs.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Level 3: RBI Ombudsman</td>
                      <td className="p-3">Reserve Bank Integrated Ombudsman (CMS)</td>
                      <td className="p-3 font-mono">Day 31 Onwards</td>
                      <td className="p-3">Issues binding removal order on cms.rbi.org.in plus ₹100/day delay compensation.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 9: Procedural Timeline: Dispute Filing to Clean Report */}
            <section id="procedural-timeline" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Calendar className="w-4 h-4 text-[#1886ff]" />
                <span>Procedural Milestones</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Procedural Timeline: Dispute Filing to Clean Report
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Track every milestone from Day 0 so neither the NBFC nor the credit bureau can hide behind fake system delays.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Milestone Window</th>
                      <th className="p-3">Regulatory Stage</th>
                      <th className="p-3">Lender / Bureau Duty</th>
                      <th className="p-3">Borrower Action Step</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 0</td>
                      <td className="p-3 font-mono text-[11px]">Dispute Logged</td>
                      <td className="p-3">Bureau issues Dispute ID and alerts both lenders.</td>
                      <td className="p-3">Email both GROs with passbook, KFS, and Dispute ID.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 1 to 14</td>
                      <td className="p-3 font-mono text-[11px]">Ledger Audit</td>
                      <td className="p-3">Originator and buyer verify pool assignment records.</td>
                      <td className="p-3">Escalate to both Principal Nodal Officers if no reply comes.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 15 to 21</td>
                      <td className="p-3 font-mono text-[11px]">Lender Cutoff</td>
                      <td className="p-3">Lender must upload corrected file by Day 21 under RBI rules.</td>
                      <td className="p-3">Ask for written confirmation and batch upload date.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 22 to 30</td>
                      <td className="p-3 font-mono text-[11px]">Bureau Sync</td>
                      <td className="p-3">CIC gets 9 days to clear duplicate line and update score.</td>
                      <td className="p-3">Pull fresh reports from all four bureaus on Day 30.</td>
                    </tr>
                    <tr className="bg-amber-50/50">
                      <td className="p-3 font-bold text-slate-900">Day 31</td>
                      <td className="p-3 font-mono text-[11px] text-amber-700 font-bold">₹100/Day Starts</td>
                      <td className="p-3">Defaulting bank, NBFC, or CIC enters daily penalty breach.</td>
                      <td className="p-3 font-bold text-amber-800">File RBI Ombudsman complaint on cms.rbi.org.in.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Within 5 Working Days</td>
                      <td className="p-3 font-mono text-[11px] text-[#1886ff] font-bold">Penalty Credit</td>
                      <td className="p-3">Entity at fault credits total ₹100/day sum to borrower.</td>
                      <td className="p-3 font-bold text-slate-900">Verify bank credit and download clean credit reports.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: Special Cases: Co-Lending, MRR & Closed Loan Ghosts */}
            <section id="specialized-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>Specialized Real-World Cases</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                10. Special Cases: Co-Lending, MRR &amp; Closed Loan Ghosts
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Not every duplicate entry looks identical. Here is how to handle four tricky real-world cases seen across Indian personal loans.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-[#1886ff]" />
                    Co-Lending 80:20 Full-Amount Glitch
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under RBI co-lending rules, a bank funds 80% and an NBFC funds 20%. Two split entries adding up to 100% are valid, but both firms reporting 100% each is illegal double counting.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Scale className="w-4 h-4 text-emerald-600" />
                    Direct Assignment 10% MRR Overlap
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    For loans over 24 months, RBI mandates a 10% Minimum Retention Requirement (MRR) for the NBFC. If both the NBFC and bank report full principal instead of their exact share, demand a split fix.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-600" />
                    Closed or Settled Loan Reappearing
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Sometimes you pay off or settle with an NBFC, yet a buyer bank or ARC revives the loan months later. Send your original No Dues Certificate (NDC) to both Nodal Officers for instant closure.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-indigo-600" />
                    Defunct or Merged Originator NBFC
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If the old NBFC merged or shut down, its successor lender or buying ARC inherits full CICRA duty. Escalate directly to the RBI Ombudsman if the bureau says the old NBFC is unreachable.
                  </p>
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
                <HelpCircle className="w-4 h-4 text-[#1886ff]" />
                <span>Direct Answers</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Frequently Asked Questions: Duplicate Securitised Loans
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Clear, plain-English answers on duplicate personal loan entries after NBFC securitisation, direct assignment, ARC sales, and RBI delay compensation.
              </p>

              <div className="space-y-3 pt-2">
                {faqs.map((faq, index) => {
                  const isOpen = openFaq === index;
                  return (
                    <div
                      key={index}
                      className="border border-slate-200/80 rounded-2xl bg-white overflow-hidden shadow-2xs transition-all duration-200"
                    >
                      <button
                        type="button"
                        onClick={() => toggleFaq(index)}
                        className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 hover:bg-slate-50/80 transition-colors cursor-pointer"
                        aria-expanded={isOpen}
                      >
                        <span className="font-bold text-xs sm:text-sm text-slate-900 leading-snug">
                          {faq.q}
                        </span>
                        <ChevronDown
                          className={`w-4 h-4 text-slate-500 transition-transform duration-200 flex-shrink-0 ${
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

            {/* SECTION 13: Citations & Outbound Authority Grid */}
            <section id="regulatory-sources" className="scroll-target space-y-4 pt-4 border-t border-slate-200">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-500">
                <BookOpen className="w-4 h-4" />
                <span>Statutory Citations &amp; Legal Authorities</span>
              </div>
              <h2 className="text-base sm:text-lg font-bold text-slate-900">
                Official Regulatory Citations &amp; Statutory References
              </h2>
              <ul className="space-y-2 text-xs text-slate-600 leading-relaxed list-disc pl-5">
                <li>
                  <strong>RBI Master Direction (Securitisation of Standard Assets) Directions, 2021:</strong> DOR.STR.REC.53/21.04.177/2021-22 governing loan pools, Special Purpose Entities, and servicer compliance.
                </li>
                <li>
                  <strong>RBI Master Direction (Transfer of Loan Exposures) Directions, 2021:</strong> DOR.STR.REC.51/21.04.048/2021-22 governing Direct Assignment, 10% MRR, and stressed loan transfers to ARCs.
                </li>
                <li>
                  <strong>RBI Compensation Circular for Credit Information Errors:</strong> RBI/2023-24/72 (DoR.FIN.REC.48/20.16.003/2023-24) mandating 21+9 day dispute closure and ₹100 per day delay payout.
                </li>
                <li>
                  <strong>RBI Circular on ARC Credit Bureau Reporting:</strong> RBI/2024-25/82 (DoR.FIN.REC.No.46/26.03.001/2024-25) requiring ARCs to join all four CICs and fix rejected files within 7 days.
                </li>
                <li>
                  <strong>Credit Information Companies (Regulation) Act, 2005 (CICRA):</strong> Section 21(3) (Right to update and rectify credit records) and Reserve Bank Integrated Ombudsman Scheme, 2021.
                </li>
              </ul>

              {/* 6 Outbound Authority Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Verified Government &amp; Regulatory Portals:</span>
                <div className="flex flex-wrap gap-2">
                  <a href="https://www.rbi.org.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>Reserve Bank of India</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://cms.rbi.org.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>RBI Integrated Ombudsman Portal</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.cibil.com" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>TransUnion CIBIL Dispute Portal</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.crifhighmark.com" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>CRIF High Mark India</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.indiacode.nic.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>India Code Statutory Repository</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://consumerhelpline.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>National Consumer Helpline</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* 10 Internal Topic Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Explore Related CredSettle Guides:</span>
                <div className="flex flex-wrap gap-2">
                  <Link href="/rbi-100-per-day-compensation-for-delayed-cibil-report-update" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    RBI ₹100/Day CIBIL Compensation
                  </Link>
                  <Link href="/rbi-15-day-fortnightly-credit-bureau-update-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    RBI 15-Day Credit Bureau Update
                  </Link>
                  <Link href="/personal-loan-settled-cibil-still-overdue-crif-equifax" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Sync CIBIL, CRIF &amp; Equifax
                  </Link>
                  <Link href="/post-write-off-settled-pwos-meaning-personal-loan" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Post Write-Off Settled (PWOS) Guide
                  </Link>
                  <Link href="/cibil-dispute-wrong-overdue-entry-filing-process" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    CIBIL Wrong Overdue Dispute
                  </Link>
                  <Link href="/best-lawyer-for-arc-loan-assignment-dispute" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    ARC Loan Assignment Defense
                  </Link>
                  <Link href="/bnpl-pay-later-shadow-nbfc-loan-entries-cibil-closure" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Shadow NBFC CIBIL Closure
                  </Link>
                  <Link href="/dispute-wrong-settled-status-cibil" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Dispute Wrong Settled Status
                  </Link>
                  <Link href="/get-noc-after-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    No Dues Certificate Guide
                  </Link>
                  <Link href="/services/personal-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Personal Loan Settlement
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
                Specialist in NBFC compliance, credit bureau disputes, RBI statutory rules, and loan settlement with wide experience helping Indian borrowers erase wrong bureau entries.
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

            {/* Card 2: Emergency CTA Card (#2452ae background) */}
            <div
              className="rounded-3xl p-6 text-white text-center space-y-4 shadow-md relative overflow-hidden"
              style={{ backgroundColor: '#2452ae' }}
            >
              <div className="space-y-1 text-center">
                <span className="text-xs font-black uppercase tracking-wider text-blue-200 bg-white/10 px-3 py-1 rounded-full inline-block mb-1">
                  CREDIT REPORT RECTIFICATION
                </span>
                <p className="text-lg md:text-xl font-bold text-white leading-snug">
                  Same Loan Showing Twice on CIBIL?
                </p>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our legal team audits both Loan Account Numbers and serves joint Nodal Officer notices. We delete duplicate entries across all 4 bureaus and claim ₹100/day relief.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Remove Duplicate Loan Now
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
                  <span>CICRA Compliant • 100% Confidential</span>
                </div>
              </div>
            </div>

            {/* Card 3: CredSettle Trust Badges */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">The CredSettle Assurance</p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>4-Bureau Audit:</strong> Clean sync on CIBIL, CRIF, Equifax, and Experian.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Joint Lender Notices:</strong> Targets both old NBFC and buying bank or ARC.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>₹100/Day Claim Filing:</strong> Enforces RBI/2023-24/72 past Day 30.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>RBI Ombudsman Escalation:</strong> End-to-end filing on cms.rbi.org.in.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">Related Legal Guides</p>
              <div className="space-y-2.5">
                <Link
                  href="/rbi-100-per-day-compensation-for-delayed-cibil-report-update"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    RBI ₹100/Day Delayed CIBIL Compensation
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Claim daily delay penalty &rarr;</span>
                </Link>

                <Link
                  href="/personal-loan-settled-cibil-still-overdue-crif-equifax"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Loan Settled in CIBIL, Overdue in CRIF?
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Sync all 4 credit bureaus &rarr;</span>
                </Link>

                <Link
                  href="/post-write-off-settled-pwos-meaning-personal-loan"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Post Write-Off Settled (PWOS) Meaning
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Upgrade PWOS to Closed &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
