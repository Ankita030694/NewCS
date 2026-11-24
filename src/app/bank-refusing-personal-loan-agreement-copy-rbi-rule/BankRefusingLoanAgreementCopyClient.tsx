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
  BookOpen,
  Building2,
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
  Calendar,
  Smartphone,
  FileCheck2
} from 'lucide-react';

export default function BankRefusingLoanAgreementCopyClient() {
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
    { id: 'statutory-framework', label: '1. RBI Fair Practices Code Rule' },
    { id: 'mandatory-enclosures', label: '2. Mandatory Enclosures & KFS' },
    { id: 'refusal-excuses-matrix', label: '3. Bank Excuses vs RBI Law' },
    { id: 'digital-lending-kfs', label: '4. Digital Loans & Email Delivery' },
    { id: 'visual-blueprint', label: '5. Visual Blueprint Infographic' },
    { id: 'step-by-step-sop', label: '6. Step-by-Step Demand SOP' },
    { id: 'borrower-legal-rights', label: '7. Consumer Court, RTI & Courts' },
    { id: 'escalation-matrix', label: '8. 3-Tier Escalation Matrix' },
    { id: 'procedural-timeline', label: '9. Request to Ombudsman Timeline' },
    { id: 'specialized-scenarios', label: '10. Fees, ARCs & Default Cases' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Portals' }
  ];

  const faqs = [
    {
      q: 'Must a bank give me a copy of my personal loan agreement?',
      a: 'Yes. Under RBI Circular DBOD.No.Leg.BC.28/09.07.005/2007-08 and the Fair Practices Code, banks and NBFCs must hand you a full copy of your signed loan contract and all papers quoted in it at sanction or payout. Holding it back is an unfair trade act.'
    },
    {
      q: 'Can a bank say they only give loan copies on special request?',
      a: 'No. The RBI rule clearly bans the habit of giving copies only when asked. Your lender must send the full signed contract and all annex sheets on its own right when the loan starts.'
    },
    {
      q: 'Does this RBI rule also cover NBFCs and digital loan apps?',
      a: 'Yes. Both the RBI NBFC Scale Based Rules (2023) and the RBI Digital Lending Directions (2025) bind NBFCs and loan apps. Every loan app must email or SMS digitally signed papers on the real lender letterhead.'
    },
    {
      q: 'Can a bank charge a fee to give me my loan agreement copy?',
      a: 'No fee applies to your first copy when you take the loan. If you lose your file and ask for a duplicate years later, a bank can charge a small listed fee. If the bank never gave the first copy, they must send it free.'
    },
    {
      q: 'What papers must come with my personal loan agreement?',
      a: 'Your loan pack must have the signed contract, the Key Facts Statement (KFS), the APR sheet, the full EMI chart, the sanction letter, the fee list, and any linked credit insurance policy.'
    },
    {
      q: 'Can a bank refuse my loan copy because my loan is overdue or NPA?',
      a: 'No. Missing EMIs or NPA tags never take away your right to your own signed contract. If the bank starts recovery calls, arbitration, or a court case, your legal right to see the full signed file is even stronger.'
    },
    {
      q: 'Can a lender charge hidden fees not shown in the KFS or contract?',
      a: 'No. Under RBI KFS Circular RBI/2024-25/18 (in force from October 1, 2024), a bank or NBFC cannot charge any fee missing from the KFS unless you give clear written consent.'
    },
    {
      q: 'How do I get my loan contract from a public bank like SBI or PNB?',
      a: 'Write to the Branch Manager and Nodal Officer first. You can also file an RTI under the Right to Information Act, 2005 with the bank CPIO for ₹10. Public banks must give true copies of your file within 30 days.'
    },
    {
      q: 'What relief can the RBI Ombudsman give if a bank still says no?',
      a: 'Under the Reserve Bank - Integrated Ombudsman Scheme, 2026, the Ombudsman can force the bank to send all papers and cut unfair fees. It can also award up to ₹30 lakh for direct loss plus up to ₹3 lakh for stress and loss of time.'
    },
    {
      q: 'How does CredSettle help when a bank hides my personal loan contract?',
      a: 'CredSettle drafts strong legal letters citing RBI Fair Practices and KFS rules, files RBI CMS complaints, checks the contract for hidden fees once it arrives, and helps you close or settle your debt safely.'
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
            <span>RBI Fair Practices Code &amp; KFS Rights Guide</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Demand Free Copy of Executed Loan Agreement &amp; Enclosures
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            Is your bank or NBFC refusing to hand over your signed personal loan contract? Learn the strict RBI rules that force free delivery of your loan file and help you fight back.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Demand Your Loan Agreement</span>
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
                  <span>Borrower Legal Shield</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Backed by RBI Fair Practices Code (2007), KFS Rule (2024), and RB-IOS 2026.
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
                <span>EXECUTIVE BRIEF: RBI PERSONAL LOAN AGREEMENT COPY RULES</span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Free Copy on Day One:</strong> Under RBI Circular DBOD.No.Leg.BC.28 (August 22, 2007), banks must hand you a signed copy of your loan contract at payout. Giving it only when asked is an unfair trade act.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Every Quoted Paper Included:</strong> Your bank must include all annex sheets free of cost. This covers the Key Facts Statement (KFS), EMI table, and full fee list.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">NBFCs &amp; Apps Must Comply:</strong> Both NBFCs (2023 Scale Based Rules) and loan apps (2025 Digital Lending Rules) must send signed digital PDFs straight to your email or SMS.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Unlisted Fees Are Void:</strong> Under the April 2024 RBI KFS rule, a lender cannot collect any fee missing from your KFS without your clear written okay.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Fast Legal Relief:</strong> If a bank says no, you can complain to the RBI Ombudsman for up to ₹3 lakh stress relief, file a ₹10 RTI for public banks, or move Consumer Court.
                  </span>
                </li>
              </ul>
            </div>

            {/* SECTION 1: RBI Law: Mandatory Free Loan Agreement Copy Rule */}
            <section id="statutory-framework" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Central Bank Rules &amp; Fair Practices Code</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. RBI Law: Mandatory Free Loan Agreement Copy Rule
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Many people in India sign thick loan papers in a rush or tap accept on a phone app. Months later, they see a steep closing fee, a forced cover plan, or a sudden rate hike. When they ask the bank for a copy of the signed loan contract, staff often stall or say no.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This refusal breaks clear rules of the Reserve Bank of India (RBI). In May 2003 (Circular DBOD.Leg.No.BC.104), the RBI launched the Fair Practices Code for Lenders. It told banks to put every loan term in writing and give a certified copy to the borrower.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Some banks tried to dodge this duty by giving copies only when a customer asked. On August 22, 2007, the RBI shut that gap with Circular RBI/2007-08/119 (DBOD.No.Leg.BC.28/09.07.005/2007-08). The RBI made it clear that hiding the loan contract or its enclosures is an unfair practice.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Every bank and NBFC must obey this rule. Under the RBI NBFC Scale Based Rules (2023), an NBFC must hand over the loan contract in a language the borrower knows well. They must deliver the full set at sanction or payout, with all quoted annex sheets intact.
              </p>
            </section>

            {/* SECTION 2: Mandatory Enclosures: KFS, Sanction & Schedule */}
            <section id="mandatory-enclosures" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileCheck2 className="w-4 h-4 text-[#1886ff]" />
                <span>Complete Loan Kit Checklist</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. Mandatory Enclosures: KFS, Sanction &amp; Schedule
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                A bank cannot meet RBI rules by sending only a short welcome note. Both the 2007 Fair Practices Circular and the April 2024 Key Facts Statement (KFS) rule force lenders to hand over a full pack of papers.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Check your personal loan file against these six key items. If even one sheet is missing, your bank is breaking RBI law:
              </p>
              <ul className="space-y-2 text-sm md:text-base text-slate-700 list-disc pl-5 leading-relaxed">
                <li>
                  <strong className="text-slate-900">Signed Loan Agreement:</strong> The full contract with your sign or digital sign, plus the bank stamp or officer sign.
                </li>
                <li>
                  <strong className="text-slate-900">Key Facts Statement (KFS):</strong> A short, clear box showing loan sum, tenure, Annual Percentage Rate (APR), and every fee. Since October 1, 2024, every personal loan needs a KFS.
                </li>
                <li>
                  <strong className="text-slate-900">Sanction Letter:</strong> The formal offer sheet showing if your rate is fixed or floating, the reset rule, and pre-closure terms.
                </li>
                <li>
                  <strong className="text-slate-900">EMI Repayment Schedule:</strong> A month-by-month chart showing how much of each EMI pays off principal and how much pays interest.
                </li>
                <li>
                  <strong className="text-slate-900">Fee List &amp; Penal Charges:</strong> Clear rates for bounce fees, late dues, and lock-in rules. Under RBI rules, banks cannot add interest on top of penal charges.
                </li>
                <li>
                  <strong className="text-slate-900">Quoted Enclosures &amp; Cover Papers:</strong> Any extra form named in the contract, like a loan cover policy, auto-debit form, or guarantor sheet.
                </li>
              </ul>
            </section>

            {/* SECTION 3: Common Bank Excuses vs Official RBI Compliance Law */}
            <section id="refusal-excuses-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <AlertTriangle className="w-4 h-4 text-[#1886ff]" />
                <span>Common Branch &amp; App Excuses Exposed</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Common Bank Excuses vs Official RBI Compliance Law
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Bank staff and call agents often use fixed lines to push borrowers away. None of these lines stand up under RBI rules. The chart below shows five common excuses and the real law that beats each one.
              </p>

              {/* Excuses vs RBI Law Comparison Card */}
              <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white shadow-xs">
                <div className="bg-slate-900 text-white p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Scale className="w-4 h-4 text-[#1886ff]" />
                    <span className="font-bold text-sm">Lender Excuses vs Binding RBI Rules</span>
                  </div>
                  <span className="text-xs text-blue-300 font-mono">RBI Fair Practices Audit</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[560px]">
                    <thead>
                      <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-semibold">
                        <th className="p-3">Common Bank or NBFC Excuse</th>
                        <th className="p-3">Why It Breaks the Law</th>
                        <th className="p-3">Governing RBI Rule / Act</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200/80 text-slate-600">
                      <tr>
                        <td className="p-3 font-medium text-slate-900">&quot;This file is an internal bank record.&quot;</td>
                        <td className="p-3">A loan deal binds two sides. You have a full right to hold a signed copy of every deal you sign.</td>
                        <td className="p-3 font-semibold text-[#1886ff]">RBI Circular DBOD.Leg.BC.28 (2007)</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">&quot;You clicked accept on the phone app.&quot;</td>
                        <td className="p-3">A screen tap is not enough. Digital lenders must send signed PDFs to your email on real letterhead.</td>
                        <td className="p-3 font-semibold text-[#1886ff]">RBI Digital Lending Rules, 2025</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">&quot;Pay ₹1,500 first to get your file.&quot;</td>
                        <td className="p-3">Your first copy is always free. A bank cannot bill you when it failed to send the first copy.</td>
                        <td className="p-3 font-semibold text-[#1886ff]">Fair Practices Code &amp; KFS 2024</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">&quot;Your loan is NPA, so no papers now.&quot;</td>
                        <td className="p-3">Default never cuts your right to check rates, audit dues, or challenge unfair recovery claims.</td>
                        <td className="p-3 font-semibold text-[#1886ff]">Consumer Protection Act, 2019</td>
                      </tr>
                      <tr className="bg-blue-50/70 font-medium text-slate-900">
                        <td className="p-3 font-bold">&quot;Your file sits in our central vault.&quot;</td>
                        <td className="p-3">Safe storage is the bank&apos;s own job. Long delays count as poor service under banking law.</td>
                        <td className="p-3 font-bold text-[#1886ff]">RB-IOS 2026 Ombudsman Rule</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* SECTION 4: Digital Loans & KFS Rules: Auto Email Delivery Law */}
            <section id="digital-lending-kfs" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Smartphone className="w-4 h-4 text-[#1886ff]" />
                <span>App Loans &amp; Key Facts Statement Rules</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. Digital Loans &amp; KFS Rules: Auto Email Delivery Law
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Most fights today start with quick loan apps and online personal loans. You tap through five app screens, punch in an OTP, and cash lands in your account. Weeks later, the app hides the download button or closes your chat ticket.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                To stop this, the RBI issued the Digital Lending Directions, 2025 (RBI/2025-26/36, dated May 8, 2025). These rules replaced the 2022 code and made digital records strict. As soon as you accept a loan online, the full file pack must go straight to your email or SMS.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Each file sent to you must carry a valid digital sign under the IT Act, 2000. It must also be on the official letterhead of the real bank or NBFC, not just a third-party app brand.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Use this alongside the RBI KFS Circular (RBI/2024-25/18, live from October 1, 2024). Before you sign, the lender must share a Key Facts Statement valid for at least 3 working days (for loans of 7 days or more). If a fee is not inside your KFS, the bank cannot legally charge you that rupee.
              </p>
            </section>

            {/* SECTION 5: Visual Blueprint Infographic */}
            <section id="visual-blueprint" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Sparkles className="w-4 h-4 text-[#1886ff]" />
                <span>Visual Blueprint</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. Visual Blueprint: Loan Agreement Copy Demand Flow
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This visual sums up your main right under the RBI Fair Practices Code. Every personal loan borrower has a firm right to a free signed loan agreement, KFS, and all quoted annex sheets.
              </p>

              <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-slate-100 bg-slate-100">
                  <Image
                    src="/images/infographics/bank-refusing-personal-loan-agreement-copy-rbi-rule.jpg"
                    alt="RBI Fair Practices Code Mandatory Free Personal Loan Agreement Copy and Enclosures Guide"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 900px"
                    className="object-contain hover:scale-[1.01] transition-transform duration-300"
                    priority
                  />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-500 pt-1 gap-2">
                  <span>CredSettle Borrower Rights Visual • RBI Fair Practices &amp; KFS Rules</span>
                  <a
                    href="/images/infographics/bank-refusing-personal-loan-agreement-copy-rbi-rule.jpg"
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

            {/* SECTION 6: Step-by-Step SOP: Demand Your Loan Agreement Copy */}
            <section id="step-by-step-sop" className="scroll-target space-y-6">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Action Plan</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. Step-by-Step SOP: Demand Your Loan Agreement Copy
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Do not rely on phone calls or branch talks alone. Spoken denials leave zero proof for the RBI Ombudsman. Follow these six simple steps to build solid proof and force fast delivery.
              </p>

              <div className="space-y-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">1</span>
                    Stage 1: Search Your Email, Net Banking &amp; App Portal
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Search your inbox and spam folder using your loan account number (LAN). Take clear screenshots if the bank portal or loan app has no download link for the signed contract or KFS.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">2</span>
                    Stage 2: Email the Branch Manager &amp; Helpdesk
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Send a crisp email with your LAN and cite RBI Circular DBOD.No.Leg.BC.28/09.07.005/2007-08. Ask for a free copy of your signed contract, KFS, EMI chart, and all enclosures within 7 working days.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">3</span>
                    Stage 3: Put Any Fee Demand or Refusal on Record
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If branch staff say no in person or ask for cash for your first copy, write back by email right away. State clearly that the bank never gave your first copy at loan payout.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">4</span>
                    Stage 4: Write to the Principal Nodal Officer (PNO)
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If you get no reply or a weak reply in 7 to 10 days, email the bank or NBFC Principal Nodal Officer. Share your first ticket ID and demand fast action under the Fair Practices Code.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">5</span>
                    Stage 5: File on RBI CMS Portal After 30 Days
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Wait 30 days from your first written mail (or file right away if the bank sends a final no). File free online at cms.rbi.org.in under Fair Practices breach and ask for cash relief.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">6</span>
                    Stage 6: Audit Every Page Once Your Copy Arrives
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Match the signed file against your bank statement and KFS. Look for forced insurance cuts, wrong APR math, or hidden closing fees so you can claim refunds or better OTS terms.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: Legal Rights: Consumer Court, RTI & Arbitration */}
            <section id="borrower-legal-rights" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>Legal Remedies &amp; Court Defenses</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. Legal Rights: Consumer Court, RTI &amp; Arbitration
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The RBI Ombudsman is not your only path. Indian law gives loan borrowers four strong legal tools to force a bank to hand over your file and stop unfair recovery.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                    <Gavel className="w-4 h-4" />
                    <span>Consumer Protection Act, 2019</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Hiding a signed loan file counts as &quot;deficiency in service&quot; under Section 2(11) and an &quot;unfair trade practice&quot; under Section 2(47). You can file in District Consumer Court (DCDRC) under Section 35 for the contract, stress damages, and legal costs.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                    <FileText className="w-4 h-4" />
                    <span>RTI Act, 2005 for Public Sector Banks</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If your loan is with SBI, PNB, Bank of Baroda, Canara Bank, or any PSU bank, file an RTI with its CPIO for just ₹10. Under Section 7(1) of the RTI Act, the bank must send true copies of your own loan file in 30 days.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-purple-700 font-bold text-sm">
                    <Scale className="w-4 h-4" />
                    <span>Arbitration Shield (Sections 7, 16 &amp; 34)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under Section 7 of the Arbitration Act, 1996, a bank must show a valid written clause. If it starts arbitration without giving the signed deal or picks its own judge alone (barred in Perkins Eastman v. HSCC), object under Section 16 or challenge the award under Section 34.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Civil Suit Production &amp; Adverse Inference</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    In a civil recovery case, Order 7 Rule 14 and Order 11 Rules 12-14 CPC force the bank to place the signed contract in court. If the bank hides it, judges can draw an adverse view against the bank under Section 119 of the Bharatiya Sakshya Adhiniyam (BSA), 2023.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 8: 3-Tier Escalation Matrix: Bank GRO to RBI Ombudsman */}
            <section id="escalation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff]" />
                <span>Official Escalation Ladder</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. 3-Tier Escalation Matrix: Bank GRO to RBI Ombudsman
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Use the official three-step ladder if your branch or loan app ignores your email. Under the Reserve Bank - Integrated Ombudsman Scheme (RB-IOS), 2026 (live from July 1, 2026), cash award caps are much higher than before.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Step Level</th>
                      <th className="p-3">Official Banking Officer</th>
                      <th className="p-3">Time Limit</th>
                      <th className="p-3">What Relief You Get</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 1: GRO</td>
                      <td className="p-3">Bank / NBFC Grievance Officer</td>
                      <td className="p-3 font-mono">7 to 10 Working Days</td>
                      <td className="p-3">Logs a formal ticket, pulls your file from storage, and emails the scanned loan contract.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 2: PNO</td>
                      <td className="p-3">Principal Nodal Officer (Head Office)</td>
                      <td className="p-3 font-mono">14 to 21 Working Days</td>
                      <td className="p-3">Checks the branch refusal, drops wrong copy fees, and sends certified enclosures.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Level 3: RBI Ombudsman</td>
                      <td className="p-3">RBI Integrated Ombudsman (RB-IOS 2026)</td>
                      <td className="p-3 font-mono">After 30 Days / Denial</td>
                      <td className="p-3">Orders file release on cms.rbi.org.in and awards up to ₹30 lakh loss + ₹3 lakh stress relief.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 9: Procedural Milestones: Request to Ombudsman Order */}
            <section id="procedural-timeline" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Calendar className="w-4 h-4 text-[#1886ff]" />
                <span>Step-by-Step Timeline</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Procedural Milestones: Request to Ombudsman Order
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Track each date from your first email to the final RBI order. Keeping dated proof at each stage stops your complaint from getting rejected on small rules.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Day Window</th>
                      <th className="p-3">Stage Name</th>
                      <th className="p-3">What the Bank Must Do</th>
                      <th className="p-3">What You Should Do</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 0</td>
                      <td className="p-3 font-mono text-[11px]">First Written Email</td>
                      <td className="p-3">Gives a ticket ID and traces your signed contract.</td>
                      <td className="p-3">Email branch citing DBOD.Leg.BC.28 and ask for all papers.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 1 to 10</td>
                      <td className="p-3 font-mono text-[11px]">Level 1 GRO Check</td>
                      <td className="p-3">Finds the signed PDF, KFS, and full EMI chart.</td>
                      <td className="p-3">Save all bank emails, chats, and any wrong fee quotes.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 11 to 21</td>
                      <td className="p-3 font-mono text-[11px]">Level 2 PNO Stage</td>
                      <td className="p-3">Head office checks branch denial and clears free copy.</td>
                      <td className="p-3">Write to the PNO; file a ₹10 RTI if it is a PSU bank.</td>
                    </tr>
                    <tr className="bg-amber-50/50">
                      <td className="p-3 font-bold text-slate-900">Day 22 to 30</td>
                      <td className="p-3 font-mono text-[11px] text-amber-700 font-bold">Legal Notice Window</td>
                      <td className="p-3">Last chance to fix the Fair Practices breach before RBI.</td>
                      <td className="p-3 font-bold text-amber-800">Send a lawyer notice warning of RBI CMS &amp; Consumer Court.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Day 31</td>
                      <td className="p-3 font-mono text-[11px] text-[#1886ff] font-bold">RBI CMS Filing</td>
                      <td className="p-3">Must file a formal reply before the RBI Ombudsman.</td>
                      <td className="p-3 font-bold text-slate-900">File free at cms.rbi.org.in and upload all PDF proofs.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 45 to 75</td>
                      <td className="p-3 font-mono text-[11px] text-rose-700 font-bold">Final Order</td>
                      <td className="p-3">Sends true loan file, refunds wrong fees, or pays award.</td>
                      <td className="p-3">Check every clause; move Consumer Court if losses are huge.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: Specialized Scenarios: Duplicate Fees, ARCs & Apps */}
            <section id="specialized-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>Real-World Loan Cases</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                10. Specialized Scenarios: Duplicate Fees, ARCs &amp; Apps
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Real loan fights often come with extra twists. Here is how RBI contract rules shield you in four tough cases.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#1886ff]" />
                    First Copy vs Duplicate Copy Fees
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Your first copy at loan payout is 100% free. Banks can charge a small listed fee only if you got the first copy, lost it, and ask for a duplicate years later. Always ask for proof of first delivery before paying a single rupee.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-emerald-600" />
                    Loans Sold to ARCs or Merged Banks
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If your bank merged or sold your bad loan to an Asset Reconstruction Company (ARC), the new owner takes on all record duties. An ARC cannot force you to pay without showing the signed loan contract and the sale deed.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Smartphone className="w-4 h-4 text-indigo-600" />
                    Missing Papers From Fintech Loan Apps
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If a phone app blocks your contract or shuts down, pull your CIBIL report to find the real RBI-licensed NBFC or bank behind it. Send your RBI Fair Practices notice straight to that lender&apos;s Nodal Officer.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-amber-600" />
                    Checking Dues Before One-Time Settlement
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Never agree to an inflated OTS figure blindly. Getting your signed contract and KFS helps you catch illegal penal compounding or forced cover plans. That proof gives you real power to negotiate a far lower settlement sum.
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
                Frequently Asked Questions: Loan Agreement Copy Rights
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Plain, verified answers to top questions on demanding your signed personal loan contract, KFS enclosures, copy fees, and RBI Ombudsman relief.
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
                  <strong>RBI Circular (August 22, 2007):</strong> RBI/2007-08/119, DBOD.No.Leg.BC.28/09.07.005/2007-08, Fair Practices Code rule on furnishing a copy of the loan agreement and all enclosures (backing DBOD.Leg.No.BC.104/09.07.007/2002-03).
                </li>
                <li>
                  <strong>RBI NBFC Scale Based Rules (2023):</strong> Fair Practices Code rule requiring NBFCs to give a loan contract in a language the borrower knows along with all enclosures.
                </li>
                <li>
                  <strong>RBI KFS Circular (April 15, 2024):</strong> RBI/2024-25/18, DoR.STR.REC.13/13.03.00/2024-25, Key Facts Statement (KFS) for Retail and MSME Loans (live from October 1, 2024).
                </li>
                <li>
                  <strong>RBI Digital Lending Directions (2025):</strong> RBI/2025-26/36, DoR.STR.REC.19/21.07.001/2025-26 (May 8, 2025), rule on automatic email and SMS delivery of signed loan papers.
                </li>
                <li>
                  <strong>RB-IOS 2026 &amp; Core Indian Acts:</strong> Reserve Bank - Integrated Ombudsman Scheme (2026), Consumer Protection Act 2019 (Sections 2(11), 2(47), 35), RTI Act 2005 (Section 7(1)), and Arbitration Act 1996 (Sections 7, 16, 34).
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
                  <a href="https://rtionline.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>RTI Online Portal (Public Banks)</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.indiacode.nic.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>India Code Statutory Repository</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://e-jagriti.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>e-Jagriti Consumer Court Portal</span>
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
                  <Link href="/personal-loan-hidden-charges-not-in-kfs-rbi-refund" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Hidden Fees Missing in KFS
                  </Link>
                  <Link href="/flat-interest-rate-vs-reducing-apr-personal-loan-trap" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Flat Rate vs Reducing APR Trap
                  </Link>
                  <Link href="/personal-loan-interest-before-disbursal-bpi-rbi-refund" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Interest Before Disbursal Refund
                  </Link>
                  <Link href="/rbi-floating-personal-loan-reset-negative-amortization" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Floating Rate Reset Rules
                  </Link>
                  <Link href="/rule-of-78-front-loaded-interest-personal-loan-dispute" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Rule of 78 Interest Dispute
                  </Link>
                  <Link href="/arbitration-notice-personal-loan-default" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Personal Loan Arbitration Defense
                  </Link>
                  <Link href="/rbi-5000-per-day-delay-compensation-property-documents" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    RBI ₹5,000/Day Document Penalty
                  </Link>
                  <Link href="/bank-sent-legal-notice-for-loan-what-to-do" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Bank Legal Notice Reply
                  </Link>
                  <Link href="/services/personal-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Personal Loan Settlement
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
                Expert in Indian banking law, RBI Fair Practices rules, KFS fee audits, and personal loan defense. He helps borrowers stop unfair bank charges and settle loans cleanly across India.
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
                  RBI RIGHTS SUPPORT
                </span>
                <p className="text-lg md:text-xl font-bold text-white leading-snug">
                  Bank Hiding Your Loan Agreement Copy?
                </p>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our banking lawyers draft strong demands under RBI Fair Practices &amp; KFS rules, force free delivery of your loan file, reverse hidden fees, and negotiate fair debt relief.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Get Free Legal Review
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
                  <span>RBI Compliant • 100% Private</span>
                </div>
              </div>
            </div>

            {/* Card 3: CredSettle Trust Badges */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">The CredSettle Assurance</p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>RBI Rule Legal Notices:</strong> Formal letters citing DBOD.Leg.BC.28 &amp; KFS norms.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Hidden Fee &amp; APR Checks:</strong> Catch forced cover plans and wrong penal fees.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Arbitration &amp; Notice Help:</strong> Block one-sided claims lacking a signed deal.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>RBI Ombudsman Filing:</strong> Complete online help on cms.rbi.org.in.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">Related Legal Guides</p>
              <div className="space-y-2.5">
                <Link
                  href="/personal-loan-hidden-charges-not-in-kfs-rbi-refund"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Hidden Personal Loan Fees Not in KFS
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Claim RBI refund on extra fees &rarr;</span>
                </Link>

                <Link
                  href="/arbitration-notice-personal-loan-default"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Arbitration Notice for Personal Loan
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Challenge one-sided lender tribunals &rarr;</span>
                </Link>

                <Link
                  href="/rbi-5000-per-day-delay-compensation-property-documents"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    RBI ₹5,000/Day Property Document Rule
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Daily penalty for withheld deeds &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
