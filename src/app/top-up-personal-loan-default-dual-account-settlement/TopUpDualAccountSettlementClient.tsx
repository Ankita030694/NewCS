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

export default function TopUpDualAccountSettlementClient() {
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
    { id: 'dual-lan-trap', label: '1. Dual LAN Top-Up Loan Trap' },
    { id: 'rbi-borrower-npa', label: '2. RBI Borrower-Wise NPA Rules' },
    { id: 'parallel-vs-merged', label: '3. Parallel vs Consolidated Top-Up' },
    { id: 'dual-ots-math', label: '4. Dual Account Audit & OTS Math' },
    { id: 'visual-blueprint', label: '5. Visual Blueprint Infographic' },
    { id: 'step-by-step-sop', label: '6. Step-by-Step Dual OTS SOP' },
    { id: 'borrower-protections', label: '7. Sections 59 & 171 Protections' },
    { id: 'escalation-matrix', label: '8. 3-Tier Escalation Matrix' },
    { id: 'procedural-timeline', label: '9. Dual Default to Clean Bureau' },
    { id: 'special-scenarios', label: '10. Common Mistakes & Special Cases' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
    {
      q: 'Does a top-up personal loan create a separate Loan Account Number (LAN)?',
      a: 'In most banks and NBFCs, yes. Lenders issue a fresh Loan Account Number (LAN), a separate EMI, and a new credit bureau tradeline for the top-up loan unless they explicitly foreclose and merge the base loan into one new account.'
    },
    {
      q: 'What happens if I pay my base loan EMI but default on the top-up loan?',
      a: 'Under Section 4.2.7 of the RBI IRACP Master Circular, NPA tagging is borrower-wise, not facility-wise. If your top-up loan stays unpaid for 90 days with the same bank, the bank must mark both your top-up loan and your regular base loan as NPA.'
    },
    {
      q: 'Can I settle my base personal loan and top-up loan under one OTS letter?',
      a: 'Yes. You can negotiate a combined One-Time Settlement (OTS) with the lender under its Board-approved compromise policy. Make sure the signed OTS letter clearly lists both Loan Account Numbers and the exact split or full discharge for each account.'
    },
    {
      q: 'How does Section 59 of the Indian Contract Act protect dual LAN borrowers?',
      a: 'Section 59 gives you the legal right to direct which loan account your payment must clear. If you pay without naming the exact LAN in writing, Section 60 lets the bank put your money into any overdue fee or interest head on the other loan.'
    },
    {
      q: 'Can the bank freeze my savings account if I default on a top-up personal loan?',
      a: 'If you hold a sole savings account in the same bank, the lender may use its right of set-off or general lien under Section 171 of the Indian Contract Act. However, it cannot touch third-party funds, trust money, or accounts held in a different legal capacity.'
    },
    {
      q: 'Do I need two separate No Objection Certificates (NOCs) after dual settlement?',
      a: 'Yes. You must collect two separate NOCs or No Dues Certificates, one for the base LAN and one for the top-up LAN. A single letter that omits one LAN leaves the second account open on your CIBIL and CRIF reports.'
    },
    {
      q: 'How fast must the bank update both loan accounts in CIBIL after settlement?',
      a: 'Under RBI circular RBI/2024-25/60, lenders must send credit data to bureaus every 15 days. If either LAN stays marked active or overdue more than 30 days after your formal dispute, RBI circular RBI/2023-24/72 mandates ₹100 per day compensation.'
    },
    {
      q: 'Can a bank charge compound penal interest on both my base and top-up loans?',
      a: 'No. Under RBI circular RBI/2023-24/53 on Penal Charges in Loan Accounts, banks and NBFCs cannot charge compounding penal interest. Default fees must be plain penal charges with zero extra interest added on top of them.'
    },
    {
      q: 'What if the bank writes off my top-up loan while I settle the base loan?',
      a: 'Under RBI circular RBI/2023-24/40, a technical write-off is only an accounting entry and does not cancel your debt. The lender or an ARC can still recover the written-off top-up loan unless you close it with a written OTS and NOC.'
    },
    {
      q: 'How does CredSettle help settle dual base and top-up personal loans?',
      a: 'CredSettle audits both KFS sheets and ledgers, strips out unlawful penal charges, negotiates a single unified OTS covering both LANs, enforces Section 59 payment letters, and verifies dual NOCs and 15-day credit bureau updates.'
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
            <span>RBI IRACP &amp; Compromise Settlement Rules for Dual LAN Loans</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            How to Settle Base &amp; Top-Up Personal Loans Together
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            Defaulting on a top-up personal loan often triggers NPA status on your main loan too. Learn the RBI borrower-wise rules, stop payment misallocation under Section 59, and close both accounts with two clean NOCs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Plan Dual Loan Settlement</span>
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
                  <span>Dual LAN Borrower Shield</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Guided by RBI IRACP Norms, RBI OTS Framework 2023, and the Indian Contract Act, 1872.
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
                <span>EXECUTIVE BRIEF: TOP-UP PERSONAL LOAN DUAL ACCOUNT RULES</span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Two Separate Loan Accounts:</strong> Most banks book a top-up loan under a new Loan Account Number (LAN) with its own EMI, auto-debit mandate, and CIBIL line.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">One Default Flags Both Loans:</strong> Under RBI IRACP Section 4.2.7, NPA status applies borrower-wise. If one LAN crosses 90 days overdue, both LANs turn NPA.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Combined OTS Prevents Traps:</strong> Always settle both LANs under one written One-Time Settlement (OTS) letter that lists each LAN and its exact payoff amount.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Section 59 Payment Shield:</strong> Always write the exact LAN on every transfer memo. Without clear direction, Section 60 lets the bank move your funds to old fees.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Two NOCs and 15-Day Bureau Sync:</strong> Collect separate NOCs for both LANs and check all four credit bureaus after 15 days under RBI fortnightly reporting rules.
                  </span>
                </li>
              </ul>
            </div>

            {/* SECTION 1: How Top-Up Personal Loans Create Dual LAN Traps */}
            <section id="dual-lan-trap" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <AlertTriangle className="w-4 h-4 text-[#1886ff]" />
                <span>Quick Answer &amp; Debt Mechanics</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. How Top-Up Personal Loans Create Dual LAN Traps
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Many borrowers think a top-up personal loan simply adds extra money to their old loan. In real life, most banks and NBFCs create a brand new loan account behind the scenes.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                You end up holding two active Loan Account Numbers (LANs) under one Unique Customer Identification Code (UCIC). LAN 1 is your original base personal loan. LAN 2 is your new top-up personal loan.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Both accounts pull separate EMIs from your bank account every month. When income drops due to a job loss or medical crisis, paying two EMIs becomes hard. Missing payments on either loan starts a chain reaction across both accounts.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Each LAN also builds its own bounce fees, late charges, and legal notices. If you settle only one account by mistake, the bank can still chase you for the second LAN for years.
              </p>
            </section>

            {/* SECTION 2: RBI Borrower-Wise NPA & Cross-Default Legal Rules */}
            <section id="rbi-borrower-npa" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Core RBI Regulatory Framework</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. RBI Borrower-Wise NPA &amp; Cross-Default Legal Rules
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The Reserve Bank of India (RBI) sets strict rules on how banks mark bad loans. Under Section 4.2.7 of the RBI IRACP Master Circular (RBI/2024-25/12), NPA tagging is strictly borrower-wise and not loan-wise.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This rule has a huge impact on top-up borrowers. Suppose you pay every EMI on your base personal loan (LAN 1) on time, but you stop paying your top-up loan (LAN 2) with the same bank. Once LAN 2 crosses 90 days overdue, the bank must tag both LAN 1 and LAN 2 as Non-Performing Assets (NPAs).
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Even worse, you cannot pull LAN 1 back to Standard status by paying only LAN 1. RBI rules require you to clear all unpaid arrears across every loan with that lender before either account upgrades back to Standard.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Three other RBI circulars also shape dual account settlements:
              </p>
              <ul className="space-y-2 text-sm md:text-base text-slate-700 leading-relaxed list-disc pl-5">
                <li>
                  <strong className="text-slate-900">RBI Compromise Settlement Framework (RBI/2023-24/40, June 8, 2023):</strong> Banks and NBFCs must follow a clear Board-approved OTS policy. A compromise settlement ends the debt after cash payment, but carries at least a 12-month cooling-off period for fresh loans from the same lender.
                </li>
                <li>
                  <strong className="text-slate-900">RBI Key Facts Statement Circular (RBI/2024-25/18, April 15, 2024):</strong> Lenders must give you a separate Key Facts Statement (KFS) showing the true Annual Percentage Rate (APR) and fees before signing a top-up loan. Hidden fees missing from the KFS cannot be charged.
                </li>
                <li>
                  <strong className="text-slate-900">RBI Penal Charges Circular (RBI/2023-24/53, August 18, 2023):</strong> Lenders cannot add penal interest onto your loan principal or charge interest on penalties. Every late fee must stay as a flat, transparent penal charge.
                </li>
              </ul>
            </section>

            {/* SECTION 3: Parallel Dual LAN vs Consolidated Top-Up Structure */}
            <section id="parallel-vs-merged" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Loan Structure Comparison</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Parallel Dual LAN vs Consolidated Top-Up Structure
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Before you talk to recovery officers, check how your bank booked your top-up loan. Indian lenders use two models. Your KFS and credit bureau report will quickly show which one you hold.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Feature</th>
                      <th className="p-3">Parallel Dual LAN Top-Up</th>
                      <th className="p-3">Consolidated Single LAN Top-Up</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Loan Account Numbers</td>
                      <td className="p-3">Two active LANs (LAN 1 Base + LAN 2 Top-Up)</td>
                      <td className="p-3">Old LAN is foreclosed; one merged LAN stays active</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Monthly EMI &amp; NACH</td>
                      <td className="p-3">Two separate EMI debits and two bounce charges</td>
                      <td className="p-3">One single EMI debit and one mandate</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">CIBIL / Bureau Lines</td>
                      <td className="p-3">Two active personal loan entries on your report</td>
                      <td className="p-3">Old line shows Closed; one new line shows Active</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Settlement Letter Rule</td>
                      <td className="p-3 text-rose-700 font-semibold">Must cite BOTH LANs and exact split</td>
                      <td className="p-3 text-emerald-700 font-semibold">Standard single-LAN OTS letter applies</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">NOC Requirement</td>
                      <td className="p-3 font-bold text-[#1886ff]">Two separate NOCs required after payoff</td>
                      <td className="p-3">One NOC for the merged account (plus old closure proof)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If your bank closed LAN 1 using your top-up money, check your CIBIL report right away. Sometimes banks forget to mark the old LAN as Closed, leaving a ghost account that hurts your credit score.
              </p>
            </section>

            {/* SECTION 4: Dual Account Financial Audit & OTS Math Breakdown */}
            <section id="dual-ots-math" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                <span>Practical Dual-Account Example</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. Dual Account Financial Audit &amp; OTS Math Breakdown
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When two loans default at the same time, bank software inflates both balances with late fees, double NACH bounce fees, legal fees, and unapplied interest. Always strip out these add-ons to find the real principal balance first.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The example below shows how a borrower with a ₹5,00,000 base loan and a ₹3,00,000 top-up loan can audit total dues after 180 days of default. Note that actual OTS waivers depend on your hardship proof and the lender&apos;s Board-approved policy.
              </p>

              {/* Representative Dual-LAN Audit Card */}
              <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white shadow-xs">
                <div className="bg-slate-900 text-white p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-[#1886ff]" />
                    <span className="font-bold text-sm">Illustrative Dual LAN Settlement Audit Ledger</span>
                  </div>
                  <span className="text-xs text-blue-300 font-mono">180+ DPD NPA Stage Example</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[540px]">
                    <thead>
                      <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-semibold">
                        <th className="p-3">Ledger Component</th>
                        <th className="p-3 text-right">Base Loan (LAN 1)</th>
                        <th className="p-3 text-right">Top-Up Loan (LAN 2)</th>
                        <th className="p-3 text-right">Combined Total</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200/80 text-slate-600">
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Unpaid Principal Outstanding</td>
                        <td className="p-3 text-right font-mono">₹3,20,000</td>
                        <td className="p-3 text-right font-mono">₹2,80,000</td>
                        <td className="p-3 text-right font-bold text-slate-900 font-mono">₹6,00,000</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Normal Interest Accrued</td>
                        <td className="p-3 text-right font-mono">₹48,000</td>
                        <td className="p-3 text-right font-mono">₹54,000</td>
                        <td className="p-3 text-right font-mono">₹1,02,000</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Penal Charges &amp; Double Bounce Fees</td>
                        <td className="p-3 text-right font-mono text-rose-600">₹34,000</td>
                        <td className="p-3 text-right font-mono text-rose-600">₹38,000</td>
                        <td className="p-3 text-right font-bold text-rose-600 font-mono">₹72,000</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Inflated Bank Demand Total</td>
                        <td className="p-3 text-right font-bold font-mono">₹4,02,000</td>
                        <td className="p-3 text-right font-bold font-mono">₹3,72,000</td>
                        <td className="p-3 text-right font-bold text-slate-900 font-mono">₹7,74,000</td>
                      </tr>
                      <tr className="bg-blue-50/70 font-bold text-slate-900">
                        <td className="p-3">Illustrative Unified OTS Target (45% to 55% of Demand)</td>
                        <td className="p-3 text-right font-mono text-[#1886ff]">₹1,90,000</td>
                        <td className="p-3 text-right font-mono text-[#1886ff]">₹1,80,000</td>
                        <td className="p-3 text-right text-[#1886ff] text-sm sm:text-base font-mono">₹3,70,000 (Both Closed)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Notice why negotiating both accounts as one bundle works better. When a lender sees a serious cash offer that clears your entire UCIC exposure at once, credit committees often approve deeper waivers on penal charges and post-NPA interest.
              </p>
            </section>

            {/* SECTION 5: Visual Blueprint Infographic */}
            <section id="visual-blueprint" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Sparkles className="w-4 h-4 text-[#1886ff]" />
                <span>Visual Blueprint</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. Visual Blueprint: Dual LAN Settlement &amp; NOC Flow
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This chart maps out the four steps to exit a dual personal loan default safely. Follow this flow to link both LANs, protect your money under Section 59, and close both CIBIL tradelines.
              </p>

              <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-slate-100 bg-slate-100">
                  <Image
                    src="/images/infographics/top-up-personal-loan-default-dual-account-settlement.jpg"
                    alt="Top-Up Personal Loan Default Dual LAN Settlement Blueprint"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 900px"
                    className="object-contain hover:scale-[1.01] transition-transform duration-300"
                    priority
                  />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-500 pt-1 gap-2">
                  <span>Official CredSettle Dual Account Resolution Framework • RBI Compliant</span>
                  <a
                    href="/images/infographics/top-up-personal-loan-default-dual-account-settlement.jpg"
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

            {/* SECTION 6: Step-by-Step SOP: Settling Both LANs Together */}
            <section id="step-by-step-sop" className="scroll-target space-y-6">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Standard Operating Procedure</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. Step-by-Step SOP: Settling Both LANs Together
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Follow these six steps to settle a base personal loan and its top-up loan without falling into a single-account closure trap.
              </p>

              <div className="space-y-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">1</span>
                    Stage 1: Pull Full Ledgers and KFS for Both LANs
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Download your CIBIL report and ask the bank for the Key Facts Statement (KFS) and Statement of Account for both LANs. Confirm the exact unpaid principal and spot any illegal compound penal interest.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">2</span>
                    Stage 2: Send One Combined Hardship Proposal
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Email the bank&apos;s central recovery cell with proof of financial distress, such as a layoff letter or medical bills. Clearly list your UCIC, Base LAN, and Top-Up LAN, and ask for a single combined OTS.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">3</span>
                    Stage 3: Verify Every Word of the Dual OTS Letter
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Never pay based on a phone promise or WhatsApp chat. Demand an official settlement letter on bank letterhead sent from an official bank email ID. Confirm both LANs, exact Rupee figures, due dates, and full legal withdrawal terms.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">4</span>
                    Stage 4: Pay With a Written Section 59 Direction
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Make separate NEFT or RTGS transfers into each LAN if the OTS letter splits the amounts. Email the UTR receipts right away with a Section 59 note stating that the transfer is strictly for OTS full closure of each named LAN.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">5</span>
                    Stage 5: Collect Two Separate NOCs and Close Mandates
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Demand two separate No Dues Certificates, one for LAN 1 and one for LAN 2, within 15 to 30 days. Also ensure both e-NACH and UPI Autopay mandates are cancelled so no random debit triggers later.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">6</span>
                    Stage 6: Audit All Four Credit Bureaus After 15 Days
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Check CIBIL, Experian, Equifax, and CRIF High Mark after the next fortnightly cycle. Both LANs must show zero balance and Settled status. If one LAN stays Active, file a dispute immediately.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: Borrower Protections: Sections 59 & 171 Explained */}
            <section id="borrower-protections" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Laws &amp; Supreme Court Precedents</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. Borrower Protections: Sections 59 &amp; 171 Explained
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When you owe two loans to one lender, two rules of the Indian Contract Act, 1872 decide how your money and bank balances are treated. Knowing these laws stops banks from misusing your settlement funds.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                    <Gavel className="w-4 h-4" />
                    <span>Section 59 vs Section 60: Payment Direction</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under Section 59, when you tell the bank in writing which LAN your payment covers, the bank must obey. If you stay silent, Section 60 lets the lender put that money into any other due or fee it picks.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                    <Scale className="w-4 h-4" />
                    <span>Pre-Decree vs Post-Decree Supreme Court Rule</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    In Industrial Credit v. Smithaben H. Patel (1999) and Gurpreet Singh v. Union of India (2006), the Supreme Court held that Sections 59 to 61 apply before a court decree. Once a court passes a decree, payments follow the court order first.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-purple-700 font-bold text-sm">
                    <Building2 className="w-4 h-4" />
                    <span>Section 171: Syndicate Bank v. Vijay Kumar (1992)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The Supreme Court confirmed a bank&apos;s general lien over securities and FDRs for general balances unless excluded by contract. For sole savings accounts in the same bank, lenders may also assert set-off, but not over trust or third-party funds.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <ShieldCheck className="w-4 h-4" />
                    <span>RBI ₹100/Day Credit Report Delay Relief</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under RBI circular RBI/2023-24/72, if a bank or bureau fails to fix an open top-up LAN error within 30 calendar days of your complaint, they must pay you ₹100 for each day of delay.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 8: 3-Tier Escalation Matrix: GRO to RBI Ombudsman */}
            <section id="escalation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Escalation Protocol</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. 3-Tier Escalation Matrix: GRO to RBI Ombudsman
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If your lender diverts your OTS payment to the wrong LAN, refuses a second NOC, or leaves your top-up loan overdue in CIBIL, use this official three-tier escalation path.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Escalation Tier</th>
                      <th className="p-3">Designated Authority</th>
                      <th className="p-3">Turnaround Time</th>
                      <th className="p-3">Scope of Relief &amp; Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 1: GRO</td>
                      <td className="p-3">Bank or NBFC Grievance Redressal Officer</td>
                      <td className="p-3 font-mono">7 to 10 Working Days</td>
                      <td className="p-3">Logs your dual-LAN dispute, audits misapplied UTR receipts, and issues missing NOCs.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 2: PNO</td>
                      <td className="p-3">Principal Nodal Officer (Head Office)</td>
                      <td className="p-3 font-mono">14 to 21 Working Days</td>
                      <td className="p-3">Reverses unlawful penal interest, aligns both LAN closures, and pushes 15-day bureau fixes.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Level 3: RBI Ombudsman</td>
                      <td className="p-3">Reserve Bank Integrated Ombudsman</td>
                      <td className="p-3 font-mono">30 Days Post-Complaint</td>
                      <td className="p-3">Orders binding NOC release, CIBIL correction, and ₹100/day delay payout on cms.rbi.org.in.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 9: Procedural Timeline: Dual Default to Clean Bureau */}
            <section id="procedural-timeline" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Calendar className="w-4 h-4 text-[#1886ff]" />
                <span>Deadlines &amp; Key Milestones</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Procedural Timeline: Dual Default to Clean Bureau
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Timing matters in dual account settlements. Banks rarely grant deep waivers in Month 1, yet waiting too long invites arbitration or Section 25 PASA bounce notices on both mandates.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Timeline Stage</th>
                      <th className="p-3">Account Status</th>
                      <th className="p-3">Bank System Action</th>
                      <th className="p-3">Smart Borrower Move</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 1 to 89</td>
                      <td className="p-3 font-mono text-[11px]">SMA-0 to SMA-2</td>
                      <td className="p-3">Double EMI bounces hit both LANs; reminder calls rise sharply.</td>
                      <td className="p-3">Save hardship proof and keep salary safe from auto-set-off risk.</td>
                    </tr>
                    <tr className="bg-amber-50/50">
                      <td className="p-3 font-bold text-slate-900">Day 90</td>
                      <td className="p-3 font-mono text-[11px] text-amber-700 font-bold">Dual NPA Tag</td>
                      <td className="p-3">RBI borrower-wise rule flips BOTH LANs to NPA under your UCIC.</td>
                      <td className="p-3 font-bold text-amber-800">Stop paying piecemeal EMIs; request both KFS and full ledgers.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 120 to 180</td>
                      <td className="p-3 font-mono text-[11px]">OTS Negotiation Window</td>
                      <td className="p-3">Account shifts to central recovery or NPA settlement desk.</td>
                      <td className="p-3">Pitch one unified OTS covering both LANs after stripping penal fees.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">OTS Payoff Day</td>
                      <td className="p-3 font-mono text-[11px] text-[#1886ff] font-bold">Settlement Execution</td>
                      <td className="p-3">Receives OTS funds against signed sanction letter terms.</td>
                      <td className="p-3 font-bold text-slate-900">Send UTR proof with written Section 59 LAN allocation letter.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Payoff + 15 to 30 Days</td>
                      <td className="p-3 font-mono text-[11px] text-emerald-700 font-bold">Dual NOC &amp; Bureau Sync</td>
                      <td className="p-3">Issues two NOCs and reports both LANs in next 15-day bureau cycle.</td>
                      <td className="p-3">Verify zero balance on all four credit bureaus; escalate any mismatch.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: Common Mistakes & Special Dual-Account Cases */}
            <section id="special-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>Precautions &amp; Complex Scenarios</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                10. Common Mistakes &amp; Special Dual-Account Cases
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Small paperwork slips ruin many dual loan settlements. Watch out for these four common traps before signing or transferring any money.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-rose-600" />
                    Mistake 1: Accepting a Single-LAN OTS Letter
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Some agents promise that paying one OTS letter closes both loans automatically. Never believe verbal claims. If the second LAN is not written on the letter, that debt stays legally alive.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-[#1886ff]" />
                    Case 2: One LAN Sold to an ARC
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Sometimes a lender sells one bad loan to an Asset Reconstruction Company (ARC) while keeping the other in-house. Check assignment notices and settle with each legal owner separately to get both NOCs.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-indigo-600" />
                    Case 3: Technical Write-Off Confusion
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If your top-up loan shows Written-Off while you settle your base loan, do not ignore it. Under RBI circular RBI/2023-24/40, a technical write-off does not wipe out your duty to pay.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-amber-600" />
                    Case 4: Dual Loans Across Two Different Banks
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If you took a top-up or second loan from a different bank or NBFC, RBI borrower-wise NPA rules do not auto-link them. Each lender tracks its own recovery, though your CIBIL score reflects both.
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
                Frequently Asked Questions: Dual Loan Settlement
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Clear, plain-English answers on top-up personal loan defaults, RBI borrower-wise NPA rules, Section 59 payment letters, and dual NOC recovery.
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
                  <strong>RBI Master Circular on IRACP Norms:</strong> RBI/2024-25/12, DOR.STR.REC.8/21.04.048/2024-25 (Section 4.2.7: Borrower-wise Asset Classification across Multiple Facilities).
                </li>
                <li>
                  <strong>RBI Framework for Compromise Settlements and Technical Write-offs:</strong> RBI/2023-24/40, DOR.STR.REC.20/21.04.048/2023-24 (Dated June 8, 2023).
                </li>
                <li>
                  <strong>RBI Key Facts Statement (KFS) for Loans &amp; Advances:</strong> RBI/2024-25/18, DOR.STR.REC.13/13.03.00/2024-25 (Dated April 15, 2024).
                </li>
                <li>
                  <strong>RBI Fair Lending Practice on Penal Charges:</strong> RBI/2023-24/53, DoR.MCS.REC.28/01.01.001/2023-24 (Dated August 18, 2023).
                </li>
                <li>
                  <strong>RBI Credit Bureau Reporting &amp; Compensation Circulars:</strong> RBI/2024-25/60 (15-Day Fortnightly Reporting) and RBI/2023-24/72 (₹100/Day Rectification Delay Compensation).
                </li>
                <li>
                  <strong>Indian Contract Act, 1872 &amp; Supreme Court Precedents:</strong> Sections 59, 60, 61, and 171; Syndicate Bank v. Vijay Kumar (1992); Industrial Credit v. Smithaben H. Patel (1999); Gurpreet Singh v. Union of India (2006).
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
                  <a href="https://www.indiacode.nic.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>India Code Statutory Repository</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.cibil.com" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>TransUnion CIBIL Dispute Portal</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.crifhighmark.com" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>CRIF High Mark Bureau</span>
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
                  <Link href="/services/personal-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Personal Loan Settlement
                  </Link>
                  <Link href="/get-noc-after-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    No Dues Certificate Guide
                  </Link>
                  <Link href="/how-to-verify-bank-ots-sanction-letter-avoid-settlement-scams" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Verify Bank OTS Letter
                  </Link>
                  <Link href="/personal-loan-hidden-charges-not-in-kfs-rbi-refund" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Personal Loan KFS Hidden Fees
                  </Link>
                  <Link href="/flexi-hybrid-personal-loan-drop-line-overdraft-settle" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Flexi Hybrid Loan Settlement
                  </Link>
                  <Link href="/upi-autopay-mandate-pause-vs-revoke-personal-loan-emi" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    UPI Autopay Pause vs Revoke
                  </Link>
                  <Link href="/nbfc-presenting-mandate-multiple-times-month-bounce-fee" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Multiple Mandate Bounce Refund
                  </Link>
                  <Link href="/flat-interest-rate-vs-reducing-apr-personal-loan-trap" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Flat Rate vs Reducing APR Trap
                  </Link>
                  <Link href="/bank-sent-legal-notice-for-loan-what-to-do" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Bank Legal Notice Reply
                  </Link>
                  <Link href="/stop-recovery-agent-harassment" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Stop Recovery Harassment
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
                Specialist in personal loan restructuring, RBI IRACP compliance, and multi-account OTS negotiations helping Indian borrowers close linked loan accounts safely.
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
                  DUAL ACCOUNT OTS DESK
                </span>
                <p className="text-lg md:text-xl font-bold text-white leading-snug">
                  Stuck With Base &amp; Top-Up Loan Defaults?
                </p>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our legal team audits both LAN ledgers, negotiates one unified settlement letter, enforces Section 59 payment rules, and secures both NOCs cleanly.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Get Free Dual-LAN Review
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
                  <span>RBI Compliant • 100% Confidential</span>
                </div>
              </div>
            </div>

            {/* Card 3: CredSettle Trust Badges */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">The CredSettle Assurance</p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Dual-LAN Ledger Audit:</strong> Strip out unlawful penal charges on both loans.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Unified OTS Drafting:</strong> Both LAN numbers locked inside one verified letter.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Section 59 Payment Guard:</strong> Stop banks from misrouting your settlement UTR.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Dual NOC &amp; Bureau Tracking:</strong> Confirm both tradelines update within 15 days.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">Related Legal Guides</p>
              <div className="space-y-2.5">
                <Link
                  href="/get-noc-after-loan-settlement"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Get NOC After Loan Settlement
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Official bank closure steps &rarr;</span>
                </Link>

                <Link
                  href="/how-to-verify-bank-ots-sanction-letter-avoid-settlement-scams"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Verify Bank OTS Sanction Letter
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Avoid fake settlement traps &rarr;</span>
                </Link>

                <Link
                  href="/personal-loan-hidden-charges-not-in-kfs-rbi-refund"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Personal Loan Fees Missing in KFS
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">RBI KFS refund rules &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
