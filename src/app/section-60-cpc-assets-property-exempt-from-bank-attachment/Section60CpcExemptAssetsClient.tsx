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
  CreditCard,
  Briefcase,
  Bookmark,
  ArrowRight,
  Clock,
  UserCheck,
  Sparkles,
  Gavel,
  Landmark
} from 'lucide-react';

export default function Section60CpcExemptAssetsClient() {
  const [activeId, setActiveId] = useState<string>('quick-crux');
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [mobileTocOpen, setMobileTocOpen] = useState<boolean>(false);

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
    { id: 'section-60-overview', label: '1. Section 60 CPC: Attachable vs Exempt' },
    { id: 'salary-attachment-math', label: '2. Salary Attachment 1/3rd Garnishee Math' },
    { id: 'exempt-assets-matrix', label: '3. Exempt vs Attachable Assets Matrix' },
    { id: 'key-proviso-exemptions', label: '4. Key Proviso Exemptions: EPF, LIC & Tools' },
    { id: 'visual-blueprint', label: '5. Visual Blueprint Infographic' },
    { id: 'step-by-step-sop', label: '6. 6-Stage Attachment Defense Plan' },
    { id: 'order-21-rule-58', label: '7. Order 21 Rule 58 CPC Objection Filing' },
    { id: 'escalation-matrix', label: '8. 3-Tier Grievance & Redressal Matrix' },
    { id: 'procedural-timeline', label: '9. Civil Suit to Execution Timeline' },
    { id: 'specialized-scenarios', label: '10. Specialized Scenarios: Farmers & Gold' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
    {
      q: 'What is Section 60 of the Code of Civil Procedure (CPC), 1908?',
      a: 'Section 60 of the CPC sets the rules for what a civil court can seize to recover a money debt. More importantly, the Proviso to Section 60(1) lists items that are 100% safe from bank seizure. These include household goods, work tools, most of your salary, LIC policies, and PF funds.'
    },
    {
      q: 'How much of my monthly salary is exempt from bank attachment under Section 60(1)(i) CPC?',
      a: 'Under Section 60(1)(i) of the CPC, the first ₹1,000 of your monthly pay plus two-thirds (2/3rd) of the rest cannot be touched. A court can cut at most one-third (1/3rd) of the balance. Also, this salary cut cannot run for more than 24 months for the same court order.'
    },
    {
      q: 'Can a bank seize my household appliances, clothes, or mangalsutra for loan default?',
      a: 'No. Under Section 60(1), Clause (a) of the CPC, daily clothes, cooking pots, beds, and bedding for you and your family are fully safe. Gold items that a woman wears by religious custom, like a mangalsutra, can never be taken by a court or bank.'
    },
    {
      q: 'Are LIC life insurance policies exempt from bank attachment in India?',
      a: 'Yes. Under Section 60(1), Clause (kb) of the CPC, all money payable under a life insurance policy is 100% safe from court attachment. No bank or recovery agent can force you to close your LIC policy to pay off an unsecured loan.'
    },
    {
      q: 'Are laptops and professional tools protected under Section 60(1)(b) CPC?',
      a: 'Yes. Clause (b) of the Section 60(1) Proviso protects the tools of artisans and workers. Indian courts agree that basic work gear, tools, and a primary laptop needed to earn your daily living cannot be taken away by lenders.'
    },
    {
      q: 'Can a bank attach a farmer house or agricultural implements for an unsecured loan?',
      a: 'No. Under Section 60(1), Clauses (b) and (c), a farmer’s cattle, seed-grain, farming tools, and farm house are fully safe from civil court attachment.'
    },
    {
      q: 'Are EPF, PPF, Gratuity, and Pension protected under Section 60 CPC?',
      a: 'Yes. Clause (g) protects pensions and retirement gratuity. Clause (k) protects all money kept in EPF and Public Provident Fund (PPF) accounts. Banks cannot touch these retirement savings.'
    },
    {
      q: 'Does Section 60 CPC stop a bank from auctioning a mortgaged home under SARFAESI?',
      a: 'Section 60 CPC protects unpledged assets from civil court money decrees. However, if you pledged your house for a secured home loan, the bank can act under the SARFAESI Act, 2002. Even then, farm land remains safe under Section 31(i) of SARFAESI.'
    },
    {
      q: 'Can I sign an agreement waiving my Section 60 CPC exemptions in a loan contract?',
      a: 'No. Section 60(1A) of the CPC clearly says that any contract where you give up your Section 60 rights is void. Even if your loan form had such a line in fine print, it has zero legal value.'
    },
    {
      q: 'How do I challenge an illegal attachment of exempt property in court?',
      a: 'Your lawyer can file an objection petition under Order 21 Rule 58 read with Section 47 and Section 60 of the CPC in the executing court. CredSettle helps borrowers stop unlawful seizure threats and close loans with 50% to 75% One-Time Settlement waivers.'
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-[#1886ff] selection:text-white">
      {/* 1. HERO SECTION (#2452ae Background) */}
      <section
        className="relative text-white pt-12 pb-10 sm:pt-14 sm:pb-11 md:pt-18 md:pb-12 px-4 sm:px-6 md:px-8 overflow-hidden flex items-center justify-center text-center"
        style={{ backgroundColor: '#2452ae' }}
      >
        <div className="absolute inset-0 bg-black/5 z-0 pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center z-10 relative w-full">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-blue-200 text-[11px] sm:text-xs font-semibold mb-3 max-w-full">
            <Landmark className="w-3.5 h-3.5 flex-shrink-0" />
            <span className="truncate sm:whitespace-normal">
              Code of Civil Procedure, 1908 • Legal Debtor Asset Shield.
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs break-words">
            Section 60 CPC: Assets &amp; Property Exempt from Bank Attachment
          </h1>

          <p className="text-xs sm:text-sm md:text-base lg:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed px-1">
            A simple legal guide for Indian borrowers facing loan default. Learn how Section 60 of the CPC protects your salary, LIC policy, EPF, PPF, home items, and work tools from bank seizure.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center max-w-md sm:max-w-none mx-auto">
            <Link
              href="/contact"
              className="px-6 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Protect Your Assets &amp; Settle Debt</span>
              <ArrowRight className="w-4 h-4 flex-shrink-0" />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. STATS STRIP COMPONENT */}
      <StatsStrip />

      {/* 3. WIDESCREEN 3-COLUMN LAYOUT (Fully Mobile & Tablet Responsive) */}
      <div className="w-full max-w-[1720px] mx-auto px-3 sm:px-5 md:px-8 py-6 sm:py-8 md:py-12">
        {/* MOBILE & TABLET COLLAPSIBLE TABLE OF CONTENTS (< lg screens) */}
        <div className="lg:hidden mb-6">
          <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden">
            <button
              type="button"
              onClick={() => setMobileTocOpen(!mobileTocOpen)}
              className="w-full flex items-center justify-between p-4 text-left bg-slate-50/70 hover:bg-slate-100/70 transition-colors cursor-pointer"
              aria-expanded={mobileTocOpen}
            >
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-slate-800">
                  Table of Contents &amp; Quick Jump
                </span>
              </div>
              <ChevronDown
                className={`w-4 h-4 text-slate-600 transition-transform duration-200 flex-shrink-0 ${
                  mobileTocOpen ? 'rotate-180 text-[#1886ff]' : ''
                }`}
              />
            </button>
            {mobileTocOpen && (
              <nav className="p-3 sm:p-4 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs max-h-[60vh] overflow-y-auto">
                {navLinks.map((link) => {
                  const isActive = activeId === link.id;
                  return (
                    <a
                      key={link.id}
                      href={`#${link.id}`}
                      onClick={() => setMobileTocOpen(false)}
                      className={`block py-2 px-3 rounded-lg transition-all duration-150 leading-snug ${
                        isActive
                          ? 'bg-blue-50 text-[#1886ff] font-bold border-l-3 border-[#1886ff]'
                          : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50 font-medium'
                      }`}
                    >
                      {link.label}
                    </a>
                  );
                })}
              </nav>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[240px_minmax(0,1fr)_280px] xl:grid-cols-[260px_minmax(0,1fr)_300px] 2xl:grid-cols-[280px_minmax(0,1fr)_320px] gap-6 lg:gap-5 xl:gap-6 items-start">
          
          {/* ================= LEFT COLUMN: STICKY TOC (Desktop lg+) ================= */}
          <aside className="sticky top-6 self-start hidden lg:block">
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
                  <span>Section 60 CPC Legal Shield.</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Protected under Section 60(1) and Section 60(1A) of the Code of Civil Procedure, 1908.
                </p>
              </div>
            </div>
          </aside>

          {/* ================= MIDDLE COLUMN: MAIN EDITORIAL CONTENT ================= */}
          <div className="space-y-8 md:space-y-10 min-w-0 w-full">
            
            {/* EXECUTIVE SUMMARY BOX (#F4F8FE Box) */}
            <div
              id="quick-crux"
              className="scroll-target rounded-2xl bg-[#F4F8FE] border border-blue-100/90 border-l-[5px] border-l-[#1886ff] p-4 sm:p-6 md:p-7 shadow-xs space-y-4 text-slate-800"
            >
              <div className="flex items-center gap-2 text-xs md:text-sm font-black uppercase tracking-wider text-[#1886ff]">
                <Bookmark className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                <span>EXECUTIVE BRIEF: SECTION 60 CPC EXEMPTIONS.</span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Strong Legal Shield:</strong> The Proviso to Section 60(1) of the CPC lists assets that no civil court or DRT can seize for a loan default.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Salary Safety Rule:</strong> Under Clause (i), the first ₹1,000 plus two-thirds (2/3rd) of your remaining monthly pay is fully exempt from attachment.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">LIC, EPF, PPF &amp; Gratuity Safety:</strong> Clauses (g), (k), and (kb) give 100% protection to life insurance policies, EPF, PPF, and gratuity money.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Home &amp; Work Tools:</strong> Clauses (a), (b), and (c) protect clothes, cooking pots, beds, mangalsutra, artisan tools, and farmer homes.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Waiver Clauses Are Void:</strong> Under Section 60(1A) CPC, any loan agreement clause that asks you to give up these rights is void by law.
                  </span>
                </li>
              </ul>
            </div>

            {/* SECTION 1: Section 60 CPC Overview */}
            <section id="section-60-overview" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                <span>Code of Civil Procedure, 1908.</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. Section 60 CPC: Attachable vs Exempt Property Law
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When you miss payments on a personal loan or credit card, recovery agents often make scary threats. They claim they will bring court staff to empty your home. They say the bank will take your TV, fridge, kitchen pots, work laptop, LIC policy, and full salary. These claims are false and break Indian law.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                In India, no bank or agent can walk into your house and take your things for an unpaid loan. Even if a bank wins a civil case or an arbitration award, it cannot seize assets on its own. The bank must file an execution petition in a civil court. The judge then follows Section 60 of the Code of Civil Procedure (CPC), 1908.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Section 60(1) of the CPC splits a borrower’s property into two simple lists. The first list covers extra assets that a court can attach and sell. This includes a second house, stocks, extra land, or surplus bank cash. The second list, found in the Proviso to Section 60(1), covers items that are 100% exempt from seizure.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Lawmakers wrote this rule so that debt recovery never takes away a family’s basic shelter, food, or way to earn a living. Under Section 29 of the Recovery of Debts and Bankruptcy Act, 1993, even Debt Recovery Tribunals (DRTs) must obey these asset protections.
              </p>
            </section>

            {/* SECTION 2: Salary Attachment Calculation */}
            <section id="salary-attachment-math" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <DollarSign className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                <span>Salary Garnishee Formula.</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. Salary Attachment Calculation: 1/3rd Garnishee Math
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Many salaried workers fear that a bank or court will block 100% of their monthly pay. Section 60(1), Clause (i) of the CPC strictly bans full salary attachment in loan recovery cases.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under Clause (i), the first ₹1,000 of your monthly pay and two-thirds (2/3rd) of the rest are fully safe from court orders. A court garnishee order can cut at most one-third (1/3rd) of your salary above ₹1,000. You always keep over two-thirds of your income to run your home.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The law also sets a strict time cap on salary cuts. Once the one-third share is cut for a total of 24 months, your salary becomes free from any more cuts for that same loan decree.
              </p>

              {/* Representative Calculation Card */}
              <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white shadow-xs">
                <div className="bg-slate-900 text-white p-3.5 sm:p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                    <span className="font-bold text-xs sm:text-sm">Section 60(1)(i) CPC Salary Safety &amp; OTS Math.</span>
                  </div>
                  <span className="text-[11px] sm:text-xs text-blue-300 font-mono">₹76,000 Monthly Pay Example.</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[540px]">
                    <thead>
                      <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-semibold">
                        <th className="p-3">Pay or Asset Item.</th>
                        <th className="p-3">Total Value.</th>
                        <th className="p-3">Section 60(1) CPC Rule.</th>
                        <th className="p-3 text-right">Safe Amount.</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200/80 text-slate-600">
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Monthly Take-Home Pay.</td>
                        <td className="p-3">₹76,000.</td>
                        <td className="p-3 text-emerald-600 font-semibold">First ₹1,000 + 2/3rd of ₹75,000 Safe.</td>
                        <td className="p-3 text-right font-bold text-emerald-700">₹51,000 / Month Safe.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Max Court Cut Allowed.</td>
                        <td className="p-3 text-amber-700 font-semibold">₹25,000 Max.</td>
                        <td className="p-3 text-slate-600">Capped at 1/3rd for Max 24 Months.</td>
                        <td className="p-3 text-right font-bold text-slate-800">Stop via OTS Deal.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">EPF, PPF &amp; LIC Value.</td>
                        <td className="p-3">₹14,50,000.</td>
                        <td className="p-3 text-emerald-600 font-semibold">100% Safe Under Clauses (k) &amp; (kb).</td>
                        <td className="p-3 text-right font-bold text-emerald-700">₹14,50,000 (100% Safe).</td>
                      </tr>
                      <tr className="bg-blue-50/70 font-bold text-slate-900">
                        <td className="p-3">₹10 Lakh Loan OTS Closure.</td>
                        <td className="p-3 text-rose-600">₹10,00,000 Claim.</td>
                        <td className="p-3 text-emerald-700">Settled at ₹3,20,000 Before Decree.</td>
                        <td className="p-3 text-right text-[#1886ff] text-sm sm:text-base">₹6,80,000 Waived.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* SECTION 3: Exempt vs Attachable Assets Matrix */}
            <section id="exempt-assets-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                <span>Asset Safety Matrix.</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Exempt vs Attachable Assets: Section 60(1) Matrix
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Knowing which assets are safe and which are at risk gives you huge power during loan settlement talks. Agents use fear because most people do not know the clauses of Section 60(1).
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The table below shows how the Code of Civil Procedure, 1908 treats different personal and family assets during debt recovery.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[620px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Asset Type.</th>
                      <th className="p-3">Section 60(1) Clause.</th>
                      <th className="p-3">Safety Status.</th>
                      <th className="p-3">What the Law Says.</th>
                      <th className="p-3">Action Step.</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr className="bg-blue-50/30">
                      <td className="p-3 font-bold text-slate-900">Clothes, Beds, Pots &amp; Mangalsutra.</td>
                      <td className="p-3">Clause (a).</td>
                      <td className="p-3 text-emerald-600 font-semibold">100% Exempt.</td>
                      <td className="p-3">Daily home items and sacred jewelry are safe.</td>
                      <td className="p-3">Refuse agent home entry.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Artisan Tools &amp; Farm Gear.</td>
                      <td className="p-3">Clause (b).</td>
                      <td className="p-3 text-emerald-600 font-semibold">100% Exempt.</td>
                      <td className="p-3">Work tools, cattle, and seeds cannot be seized.</td>
                      <td className="p-3">Keep bills for work tools.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Farmer House &amp; Sheds.</td>
                      <td className="p-3">Clause (c).</td>
                      <td className="p-3 text-emerald-600 font-semibold">100% Exempt.</td>
                      <td className="p-3">Homes lived in by farmers and farm workers.</td>
                      <td className="p-3">Keep land papers ready.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Books of Accounts.</td>
                      <td className="p-3">Clause (d).</td>
                      <td className="p-3 text-emerald-600 font-semibold">100% Exempt.</td>
                      <td className="p-3">Shop ledgers and tax books cannot be taken.</td>
                      <td className="p-3">Cite Clause (d) in reply.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Pension &amp; Gratuity.</td>
                      <td className="p-3">Clause (g).</td>
                      <td className="p-3 text-emerald-600 font-semibold">100% Exempt.</td>
                      <td className="p-3">Retiree pension and gratuity are fully safe.</td>
                      <td className="p-3">Receive in a clean bank.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Labourer Wages.</td>
                      <td className="p-3">Clause (h).</td>
                      <td className="p-3 text-emerald-600 font-semibold">100% Exempt.</td>
                      <td className="p-3">Wages of manual workers and house staff.</td>
                      <td className="p-3">Zero salary cut allowed.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Monthly Salary.</td>
                      <td className="p-3">Clause (i).</td>
                      <td className="p-3 text-amber-600 font-semibold">Mostly Exempt.</td>
                      <td className="p-3">First ₹1,000 + 2/3rd of remaining pay is safe.</td>
                      <td className="p-3">Use a separate salary bank.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">EPF &amp; PPF Balances.</td>
                      <td className="p-3">Clause (k).</td>
                      <td className="p-3 text-emerald-600 font-semibold">100% Exempt.</td>
                      <td className="p-3">All PF and PPF savings are safe from courts.</td>
                      <td className="p-3">Keep in PF or neutral bank.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">LIC &amp; Life Insurance.</td>
                      <td className="p-3">Clause (kb).</td>
                      <td className="p-3 text-emerald-600 font-semibold">100% Exempt.</td>
                      <td className="p-3">All payouts from life insurance policies are safe.</td>
                      <td className="p-3">Link neutral bank for payout.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Extra Plots, Stocks &amp; FDs.</td>
                      <td className="p-3">Main Section 60(1).</td>
                      <td className="p-3 text-rose-600 font-semibold">Attachable.</td>
                      <td className="p-3">Can be attached only after a final court decree.</td>
                      <td className="p-3">Settle loan via OTS early.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 4: Key Proviso Exemptions */}
            <section id="key-proviso-exemptions" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                <span>Key Legal Protections.</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. Key Proviso Exemptions: EPF, PPF, LIC &amp; Tools
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Several rules in the Proviso to Section 60(1) CPC act as a strong shield for families, workers, and small shop owners. Knowing how courts read these rules helps you stop fake threats right away.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                <strong>Life Insurance Policies under Clause (kb):</strong> Every rupee payable under a life policy (whether LIC or private) is 100% safe from court attachment. In <em>Federal Bank Ltd v. Indiradevi Kunjamma</em>, the High Court ruled that life insurance money protects the family and cannot be taken for a bank loan.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                <strong>EPF, PPF, and Gratuity under Clauses (g) and (k):</strong> Money in an EPF or PPF account, along with gratuity and pension, cannot be seized. In <em>Radhey Shyam Gupta v. Punjab National Bank (2009)</em>, the Supreme Court held that retiree funds stay safe even after they enter a bank account or fixed deposit.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                <strong>No Waiver Allowed under Section 60(1A):</strong> Some banks put fine print in loan forms saying you give up your legal exemptions. However, Section 60(1A) of the CPC says that any deal waiving Section 60 rights is completely void. A bank contract can never cancel this protection.
              </p>
            </section>

            {/* SECTION 5: Visual Blueprint Infographic */}
            <section id="visual-blueprint" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Sparkles className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                <span>Visual Blueprint.</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. Visual Blueprint: Section 60 CPC Asset Shield
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This chart shows the debtor protection shield under Section 60(1) of the Code of Civil Procedure, 1908. It highlights the main asset groups that are safe from bank attachment.
              </p>

              <div className="bg-white p-3 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-slate-100 bg-slate-100">
                  <Image
                    src="/images/infographics/section-60-cpc-assets-property-exempt-from-bank-attachment.jpg"
                    alt="Section 60 CPC Assets and Property Exempt from Bank Attachment Legal Guide"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 900px"
                    className="object-contain hover:scale-[1.01] transition-transform duration-300"
                    priority
                  />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-500 pt-1 gap-2">
                  <span>Official CredSettle Debtor Protection Guide • Section 60 CPC Compliant.</span>
                  <a
                    href="/images/infographics/section-60-cpc-assets-property-exempt-from-bank-attachment.jpg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1886ff] hover:underline font-bold inline-flex items-center gap-1"
                  >
                    <span>View Full Size Blueprint.</span>
                    <ExternalLink className="w-3.5 h-3.5 flex-shrink-0" />
                  </a>
                </div>
              </div>
            </section>

            {/* SECTION 6: Step-by-Step SOP (6 Stages) */}
            <section id="step-by-step-sop" className="scroll-target space-y-6">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                <span>Step-by-Step Guide.</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. Step-by-Step SOP: 6-Stage Attachment Defense Plan
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If a bank or agent threatens to seize your pay, home items, or LIC policy, follow these six simple steps to keep your assets safe and close the debt.
              </p>

              <div className="space-y-4">
                <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black flex-shrink-0">1</span>
                    <span>Stage 1: Move Your Salary &amp; Benefit Accounts.</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Shift your monthly salary, LIC payouts, and EPF bank links to a clean bank where you have no loans or credit cards. This stops automatic bank set-off cuts.
                  </p>
                </div>

                <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black flex-shrink-0">2</span>
                    <span>Stage 2: Spot Fake WhatsApp Notices vs Real Court Orders.</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Recovery agents often send fake WhatsApp texts saying a bailiff will take your sofa and TV tomorrow. Check the official e-Courts site with your name or CNR number to see if any real court case exists.
                  </p>
                </div>

                <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black flex-shrink-0">3</span>
                    <span>Stage 3: Send a Section 60 CPC Legal Reply.</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Reply to bank legal notices through a lawyer. Cite the matching clauses of Section 60(1) CPC and warn the bank against making illegal seizure threats.
                  </p>
                </div>

                <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black flex-shrink-0">4</span>
                    <span>Stage 4: File an Order 21 Rule 58 CPC Objection.</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If a court order wrongly lists exempt tools, home items, or extra salary, file an objection under Order 21 Rule 58 of the CPC. The judge will release the protected items.
                  </p>
                </div>

                <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black flex-shrink-0">5</span>
                    <span>Stage 5: Negotiate a One-Time Settlement (OTS).</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Once the bank sees that your core income and savings are safe by law, start OTS talks. You can often close the unsecured loan with a 50% to 75% waiver.
                  </p>
                </div>

                <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black flex-shrink-0">6</span>
                    <span>Stage 6: Get Your No Dues Certificate (NDC).</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Verify the bank OTS letter and pay the agreed sum directly to your loan account. Collect your No Dues Certificate and make sure the bank closes any court case under Order 21 Rule 2 CPC.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: Order 21 Rule 58 CPC & Legal Remedies */}
            <section id="order-21-rule-58" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <ShieldCheck className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                <span>Court Objections &amp; Rights.</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. Order 21 Rule 58 CPC: Objecting to Wrongful Seizure
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Even when a bank holds a valid court decree, it must obey strict court rules. If a lender or agent crosses the line, Indian law gives you strong legal remedies.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                    <Gavel className="w-4 h-4 flex-shrink-0" />
                    <span>Order 21 Rule 58 &amp; Section 47 CPC.</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    You can file a claim in the executing court showing that the attached item is safe under Section 60(1) CPC. The judge must stop the sale and free your property.
                  </p>
                </div>

                <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                    <Scale className="w-4 h-4 flex-shrink-0" />
                    <span>Order 38 Rule 5 Defense.</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Banks sometimes ask to attach assets before a case ends under Order 38 Rule 5. In <em>Raman Tech v. Solanki Traders</em>, the Supreme Court ruled that courts cannot allow this for normal unpaid loans.
                  </p>
                </div>

                <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-purple-700 font-bold text-sm">
                    <Building2 className="w-4 h-4 flex-shrink-0" />
                    <span>BNS Section 329 &amp; 351 Crimes.</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Recovery agents have zero right to enter your house or touch your furniture. Forced entry or threats to take home goods are crimes under Sections 329 and 351 of the Bharatiya Nyaya Sanhita.
                  </p>
                </div>

                <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <ShieldCheck className="w-4 h-4 flex-shrink-0" />
                    <span>Section 51 &amp; 56 CPC Arrest Bar.</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under Section 56 of the CPC, a court can never arrest a woman for a money debt. Under Section 51 Proviso, an honest borrower who lacks cash due to job loss or illness cannot be jailed.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 8: 3-Tier Escalation Matrix */}
            <section id="escalation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                <span>Complaint Steps.</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. 3-Tier Escalation Matrix: Stopping Illegal Liens
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If a bank freezes your full salary account or if agents threaten to take exempt home items without a court order, file a complaint through these three steps.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Tier Level.</th>
                      <th className="p-3">Authority.</th>
                      <th className="p-3">Time Limit.</th>
                      <th className="p-3">How They Help You.</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 1: GRO.</td>
                      <td className="p-3">Bank Grievance Officer.</td>
                      <td className="p-3 font-mono">7 to 10 Days.</td>
                      <td className="p-3">Stops agent home visits, lifts wrong holds, and notes your OTS request.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 2: PNO.</td>
                      <td className="p-3">Principal Nodal Officer.</td>
                      <td className="p-3 font-mono">14 to 21 Days.</td>
                      <td className="p-3">Checks illegal salary cuts that break Section 60 CPC and approves waivers.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Level 3: RBI Ombudsman.</td>
                      <td className="p-3">RBI Integrated Ombudsman.</td>
                      <td className="p-3 font-mono">30 Days Post-PNO.</td>
                      <td className="p-3">Orders the bank via cms.rbi.org.in to unfreeze exempt pay and pay damages.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 9: Procedural Timeline Table */}
            <section id="procedural-timeline" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Clock className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                <span>Legal Timeline.</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Procedural Timeline: Civil Suit to Execution Decree
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Court attachment never happens in a day. This timeline from missed EMI to Order 21 execution shows why you have plenty of time to protect your property and settle the loan.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Time Window.</th>
                      <th className="p-3">Loan Stage.</th>
                      <th className="p-3">Bank Action.</th>
                      <th className="p-3">Your Best Step.</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 1 to 90.</td>
                      <td className="p-3 font-mono text-[11px]">SMA-0 to SMA-2.</td>
                      <td className="p-3">Reminder calls, SMS alerts, and emails.</td>
                      <td className="p-3">Shift salary and LIC payouts to a clean bank.</td>
                    </tr>
                    <tr className="bg-amber-50/50">
                      <td className="p-3 font-bold text-slate-900">Day 91 to 180.</td>
                      <td className="p-3 font-mono text-[11px] text-amber-700 font-bold">NPA Stage.</td>
                      <td className="p-3">Loan marked NPA and recall notice sent.</td>
                      <td className="p-3">Reply to notice and start OTS talks.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Month 6 to 12.</td>
                      <td className="p-3 font-mono text-[11px] text-[#1886ff] font-bold">Best OTS Window.</td>
                      <td className="p-3">Lok Adalat invite or arbitration letter sent.</td>
                      <td className="p-3 font-bold text-slate-900">Settle debt with a 50% to 75% waiver.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Year 1 to 2.</td>
                      <td className="p-3 font-mono text-[11px]">Civil Suit.</td>
                      <td className="p-3">Money suit or DRT case (if ₹20 Lakh+).</td>
                      <td className="p-3">Appear via lawyer and ask for mediation.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Year 2 to 3+.</td>
                      <td className="p-3 font-mono text-[11px]">Order 21 Stage.</td>
                      <td className="p-3">Execution petition filed after final decree.</td>
                      <td className="p-3">Claim all exemptions under Section 60(1) CPC.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: Specialized Real-World Scenarios */}
            <section id="specialized-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                <span>Real-Life Cases.</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                10. Specialized Scenarios: Farmers, Artisans &amp; Gold
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Section 60 CPC protects people from all walks of life. Here is how these rules work in common family and work situations.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                    <span>Freelancers, Doctors &amp; Artisans.</span>
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under Clause (b), tools of artisans are fully safe from seizure. For self-employed workers, basic trade tools, medical kits, sewing machines, or a primary work laptop used to earn daily bread are protected.
                  </p>
                </div>

                <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Farmer House, Tractor &amp; Seeds.</span>
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under Clauses (b) and (c), a farmer’s tools, cattle, seed-grain, and the farm house lived in by the farmer are 100% exempt from attachment in civil money decrees.
                  </p>
                </div>

                <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-indigo-600 flex-shrink-0" />
                    <span>Mangalsutra &amp; Wife’s Streedhan.</span>
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Clause (a) protects sacred ornaments that a woman wears by custom, such as a mangalsutra. Also, a wife’s personal Streedhan gold cannot be seized for her husband’s loan default.
                  </p>
                </div>

                <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-amber-600 flex-shrink-0" />
                    <span>Ancestral Family House.</span>
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    A bank cannot seize a whole joint family home for one member’s personal loan. Other family members can file an Order 21 Rule 58 claim to protect their shares right away.
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
                <HelpCircle className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                <span>Direct Answers.</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Frequently Asked Questions: Section 60 CPC Exemptions
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Simple, verified answers on property exemptions, salary attachment limits, LIC and EPF safety, and court rights under Section 60 of the CPC.
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
                <BookOpen className="w-4 h-4 flex-shrink-0" />
                <span>Legal Sources &amp; Acts.</span>
              </div>
              <h2 className="text-base sm:text-lg font-bold text-slate-900">
                Official Regulatory Citations &amp; Statutory Legal Framework
              </h2>
              <ul className="space-y-2 text-xs text-slate-600 leading-relaxed list-disc pl-5">
                <li>
                  <strong>Code of Civil Procedure, 1908 (CPC):</strong> Section 60(1) Proviso Clauses (a) to (p) and Section 60(1A) on Exempt Assets.
                </li>
                <li>
                  <strong>Code of Civil Procedure, 1908 (CPC):</strong> Order 21 Rule 48 (Salary Cuts) and Order 21 Rule 58 (Objections to Attachment).
                </li>
                <li>
                  <strong>EPF Act, 1952 &amp; Payment of Gratuity Act, 1972:</strong> Section 10 and Section 13 Bars Against Court Attachment.
                </li>
                <li>
                  <strong>Recovery of Debts and Bankruptcy Act, 1993:</strong> Section 29 and Income Tax Act Schedule II Rule 10 (Property Exempt Under CPC).
                </li>
                <li>
                  <strong>Supreme Court Rulings:</strong> Radhey Shyam Gupta v. Punjab National Bank (2009) 1 SCC 376 and Union of India v. Jyoti Chit Fund (1976) 3 SCC 271.
                </li>
              </ul>

              {/* 6 Outbound Authority Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Verified Government Portals:</span>
                <div className="flex flex-wrap gap-2">
                  <a href="https://www.indiacode.nic.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>India Code Portal.</span>
                    <ExternalLink className="w-3 h-3 flex-shrink-0" />
                  </a>
                  <a href="https://ecourts.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>e-Courts Services.</span>
                    <ExternalLink className="w-3 h-3 flex-shrink-0" />
                  </a>
                  <a href="https://www.rbi.org.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>Reserve Bank of India.</span>
                    <ExternalLink className="w-3 h-3 flex-shrink-0" />
                  </a>
                  <a href="https://cms.rbi.org.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>RBI Ombudsman Portal.</span>
                    <ExternalLink className="w-3 h-3 flex-shrink-0" />
                  </a>
                  <a href="https://www.epfindia.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>EPFO India Portal.</span>
                    <ExternalLink className="w-3 h-3 flex-shrink-0" />
                  </a>
                  <a href="https://nalsa.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>NALSA Legal Aid.</span>
                    <ExternalLink className="w-3 h-3 flex-shrink-0" />
                  </a>
                </div>
              </div>

              {/* 12 Internal Topic Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Explore Related CredSettle Guides:</span>
                <div className="flex flex-wrap gap-2">
                  <Link href="/can-bank-seize-epf-provident-fund-for-loan-recovery" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Can Bank Seize EPF &amp; Gratuity?
                  </Link>
                  <Link href="/pension-attachment-for-loan-recovery" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Pension Attachment Rules.
                  </Link>
                  <Link href="/garnishee-order-bank-account-freeze-loan" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Garnishee Order Defense.
                  </Link>
                  <Link href="/can-bank-attach-ancestral-property-for-personal-loan-default" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Ancestral Property Rules.
                  </Link>
                  <Link href="/can-recovery-agents-seize-property" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Can Agents Seize Property?
                  </Link>
                  <Link href="/salary-account-frozen-by-bank" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Salary Account Freeze.
                  </Link>
                  <Link href="/agricultural-loan-default-sarfaesi-act" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Farm Land Exemption Rules.
                  </Link>
                  <Link href="/civil-suit-for-recovery-of-money-by-bank" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Civil Recovery Suit Guide.
                  </Link>
                  <Link href="/ex-parte-decree-bank-loan-case" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Set Aside Ex-Parte Decree.
                  </Link>
                  <Link href="/services/personal-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Personal Loan Settlement.
                  </Link>
                  <Link href="/stop-recovery-agent-harassment" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Stop Agent Harassment.
                  </Link>
                  <Link href="/get-noc-after-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    No Dues Certificate Guide.
                  </Link>
                </div>
              </div>
            </section>

          </div>

          {/* ================= RIGHT COLUMN: STICKY SIDEBAR ================= */}
          <aside className="space-y-5 sticky top-6 self-start w-full">
            
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
                    Ashish Jhangra.
                  </Link>
                  <p className="text-[11px] font-semibold text-[#1886ff]">
                    Legal &amp; Debt Resolution Expert.
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Expert in CPC execution defense, Section 60 asset exemptions, DRT objections, and One-Time Settlements for retail and business loans.
              </p>
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <Link
                  href="/author/ashish-jhangra"
                  className="text-[#1886ff] hover:underline font-semibold flex items-center gap-1"
                >
                  <span>View Author Profile.</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
                <span className="text-emerald-600 font-bold flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3" /> CredSettle Panel.
                </span>
              </div>
            </div>

            {/* Card 2: Emergency CTA Card (#2452ae background) */}
            <div
              className="rounded-3xl p-5 sm:p-6 text-white text-center space-y-4 shadow-md relative overflow-hidden"
              style={{ backgroundColor: '#2452ae' }}
            >
              <div className="space-y-1 text-center">
                <span className="text-xs font-black uppercase tracking-wider text-blue-200 bg-white/10 px-3 py-1 rounded-full inline-block mb-1">
                  LEGAL ASSET SHIELD.
                </span>
                <p className="text-lg md:text-xl font-bold text-white leading-snug">
                  Facing Property Seizure or Salary Freeze Threats?
                </p>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our legal team invokes Section 60 CPC rules, stops illegal home visits, and negotiates 50% to 75% OTS waivers with your bank.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Protect Your Property Now.
              </Link>
              <div className="pt-2 flex flex-col items-center justify-center gap-1 text-[11px] text-blue-200">
                <div className="flex items-center gap-1">
                  <Phone className="w-3 h-3 text-blue-200" />
                  <a href="tel:+918800226635" className="hover:underline font-bold text-white">
                    Call: +91-8800226635.
                  </a>
                </div>
                <div className="flex items-center gap-1 text-[10px] text-blue-300">
                  <Lock className="w-3 h-3" />
                  <span>Section 60 CPC Shield • 100% Private.</span>
                </div>
              </div>
            </div>

            {/* Card 3: CredSettle Trust Badges */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">The CredSettle Asset Shield.</p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Section 60 CPC Defense:</strong> Protect home goods, tools, and LIC policies.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>2/3rd Salary Safety:</strong> Stop illegal 100% bank account freezes.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Order 21 Petitions:</strong> Legal defense against wrongful attachment.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Official OTS Closure:</strong> Verified No Dues Certificate in 30 days.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">Related Legal Guides.</p>
              <div className="space-y-2.5">
                <Link
                  href="/can-bank-seize-epf-provident-fund-for-loan-recovery"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Can Bank Seize EPF &amp; Gratuity for Loan Recovery?
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Section 10 EPF &amp; Section 13 Gratuity.</span>
                </Link>

                <Link
                  href="/garnishee-order-bank-account-freeze-loan"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Garnishee Order Bank Account Freeze.
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Stop salary &amp; account attachment.</span>
                </Link>

                <Link
                  href="/can-bank-attach-ancestral-property-for-personal-loan-default"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Can Bank Attach Ancestral Property for Personal Loan?
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Joint family property defense.</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
