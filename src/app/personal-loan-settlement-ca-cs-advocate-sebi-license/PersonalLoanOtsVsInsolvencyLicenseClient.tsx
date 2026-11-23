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
  UserCheck,
  Sparkles,
  Gavel,
  Landmark,
  Calendar
} from 'lucide-react';

export default function PersonalLoanOtsVsInsolvencyLicenseClient() {
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
    { id: 'quick-crux', label: 'Quick Answer & Legal Brief' },
    { id: 'ots-vs-insolvency', label: '1. OTS vs Insolvency Rules' },
    { id: 'ca-cs-rules', label: '2. CA & CS Section 8 Bars' },
    { id: 'sebi-rules', label: '3. SEBI Fit & Proper Test' },
    { id: 'advocate-rules', label: '4. Advocates Act & BCI Rules' },
    { id: 'visual-blueprint', label: '5. Visual License Blueprint' },
    { id: 'comparison-matrix', label: '6. Regulator Risk Matrix' },
    { id: 'landmark-precedents', label: '7. IBC & Court Precedents' },
    { id: 'step-by-step-sop', label: '8. Safe OTS Steps for Pros' },
    { id: 'key-risks', label: '9. Wilful Default & Sec 138' },
    { id: 'recovery-roadmap', label: '10. Upgrade Settled to Closed' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Laws & Official Portals' }
  ];

  const faqs = [
    {
      q: 'Does a personal loan OTS cancel a CA or CS practice license?',
      a: 'No. A bank OTS under RBI rules is a civil deal with your bank. It does not make you an undischarged insolvent under Section 8 of the CA Act, 1949 or Section 8 of the CS Act, 1980. Your license stays safe.'
    },
    {
      q: 'Why is court insolvency risky for a CA or CS in India?',
      a: 'Under Section 8 of the CA Act and Section 8 of the CS Act, a bankrupt person cannot stay on the member roll. ICAI or ICSI must strike off your name. You stay barred until a court clears you with a no-fault order.'
    },
    {
      q: 'Does a personal loan OTS fail the SEBI Fit and Proper test?',
      a: 'No. A plain loan OTS after job or pay loss does not break SEBI Schedule II rules on its own. Still, a court bankruptcy order or a bank wilful defaulter tag will fail the test and risk your license.'
    },
    {
      q: 'Can bank loan default cancel an Advocate license in India?',
      a: 'No. Loan default or OTS is a civil issue, not a crime of moral guilt under Section 24A of the Advocates Act, 1961. Your Bar roll stays safe. Yet hiding a court insolvency order breaks BCI rules under Section 35.'
    },
    {
      q: 'What happens if I file Section 94 IBC personal insolvency?',
      a: 'Filing under Section 94 IBC starts a court case and a stay under Section 96. If your pay plan fails, the court can pass a bankruptcy order. Section 141 IBC then bars you from board seats and foreign trips without leave.'
    },
    {
      q: 'Does a Section 138 cheque bounce case hurt my practice license?',
      a: 'Courts treat cheque bounce under Section 138 as a civil-style debt wrong, not a moral crime. Even so, a jail or fine order draws board checks. Settle the debt and close the case under Section 147 right away.'
    },
    {
      q: 'How does a wilful defaulter tag hurt SEBI advisers and brokers?',
      a: 'Under Schedule II of the SEBI Intermediaries Rules, 2008, a wilful defaulter fails the fit and proper test. SEBI can deny a new permit, halt your active permit, or bar you from leading a registered firm.'
    },
    {
      q: 'Must a CA, CS, or Advocate report a private loan OTS to their board?',
      a: 'A private bank OTS on a personal loan is not a legal bar under ICAI, ICSI, or BCI rules. You do not need to report it as insolvency. SEBI firms must still check annual forms for net worth or wilful default tags.'
    },
    {
      q: 'Can I change a Settled CIBIL tag to Closed later?',
      a: 'Yes. Once your cash flow heals, pay the waived sum to the bank and get a clean No Dues paper. Under RBI 15-day rules, the bank must update your CIBIL tag from Settled to Closed in the next cycle.'
    },
    {
      q: 'How does CredSettle help CAs, CSs, Advocates, and SEBI pros settle?',
      a: 'CredSettle sets up written RBI OTS deals, fights wilful defaulter notices, closes Section 138 cheque cases, and gets clean NOC letters. You clear debt in private and keep your license active.'
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
            <span>ICAI, ICSI, BCI &amp; SEBI License Safety Guide</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Protect Professional Practice Licenses During Debt Relief
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            Compare a private bank OTS with court insolvency under ICAI, ICSI, Bar Council, and SEBI rules. Clear tough loan debt without putting your career or license at risk.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Protect Your License &amp; Settle</span>
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
                  <span>Career &amp; License Shield</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Based on RBI June 2023 OTS rules, CA/CS Section 8, SEBI Schedule II, and IBC Part III.
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
                <span>QUICK ANSWER: PERSONAL LOAN OTS VS INSOLVENCY</span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Private OTS Keeps Your License Safe:</strong> A bank OTS under RBI rules is a civil deal. It does not end your CA, CS, Advocate, or SEBI license.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Court Insolvency Triggers Section 8 Removal:</strong> A court bankruptcy order bars you from ICAI and ICSI rolls under Section 8.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">SEBI Bars Bankrupts and Wilful Defaulters:</strong> Under Schedule II of SEBI rules, a wilful tag or court bankruptcy breaks the fit and proper test.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Advocates Must Report Bankruptcy Orders:</strong> Civil loan default is not a Section 24A crime. Yet hiding a court insolvency breaks BCI rules under Section 35.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Act Early With Written Proof:</strong> Close stressed loans via a written OTS and clean NOC. This blocks IBC cases, wilful tags, and cheque bounce orders.
                  </span>
                </li>
              </ul>
            </div>

            {/* SECTION 1 */}
            <section id="ots-vs-insolvency" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Core Law &amp; Debt Exit Choice</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. OTS Settlement vs Insolvency: Core Legal Difference
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Chartered Accountants, Company Secretaries, Advocates, and SEBI advisers hold permits built on public trust. When personal debt grows too high, the exit path you pick matters deeply. One path keeps your license safe. The other can end your right to practice.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                A personal loan One-Time Settlement (OTS) is a private deal with your bank. On June 8, 2023, the RBI issued Circular DOR.STR.REC.20/21.04.048/2023-24. This set a clear{' '}
                <Link
                  href="/rbi-circular-on-loan-settlement-ots"
                  className="text-[#1886ff] font-semibold hover:underline"
                >
                  RBI Compromise Settlement Framework
                </Link>{' '}
                for all banks and NBFCs. You pay a lower agreed sum, and the bank closes the loan with no court order.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Personal insolvency works in a very different way. Under Part III of the Insolvency and Bankruptcy Code, 2016 (IBC), you or a bank go to a court or tribunal. If a pay plan fails, the court declares you bankrupt in a public order.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                That court tag triggers strict bars across Indian laws. By contrast, a private bank OTS affects only your credit report for a while. It leaves your legal license and active work roll intact.
              </p>
            </section>

            {/* SECTION 2 */}
            <section id="ca-cs-rules" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>ICAI &amp; ICSI Member Roll Laws</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. CA &amp; CS License Rules: Section 8 ICAI &amp; ICSI Bars
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Both the Chartered Accountants Act, 1949 and the Company Secretaries Act, 1980 have strict bars under <strong>Section 8 (Disabilities)</strong>. This law lists when a member loses the right to stay on the official roll.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under Section 8(iii) of the CA Act and Section 8(c) of the CS Act, an <strong>undischarged insolvent</strong> or IBC bankrupt is strictly barred. ICAI must remove the name under Section 19. ICSI must remove the name under Section 20.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Even a discharged insolvent faces a tough hurdle. Under Section 8(iv) of the CA Act and Section 8(d) of the CS Act, you stay barred unless a court gives you a special paper. That court note must prove your failure came from bad luck, not bad conduct.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                A private bank OTS never triggers Section 8. No court calls you insolvent. Your Certificate of Practice (COP) stays active, and you can keep signing audits, tax files, and board reports.
              </p>
            </section>

            {/* SECTION 3 */}
            <section id="sebi-rules" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                <span>Capital Market &amp; SEBI Permits</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. SEBI Intermediary &amp; Fit and Proper Criteria Rules
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Stock brokers, Investment Advisers (RIAs), Research Analysts (RAs), and key staff follow the <strong>SEBI (Intermediaries) Regulations, 2008</strong>. Under Regulation 7 and <strong>Schedule II</strong>, you must stay a &quot;Fit and Proper Person&quot; at all times.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Schedule II checks three main traits. First, it checks your honest track record. Second, it checks for crime orders or market bans. Third, it checks your financial health and minimum net worth.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Two debt tags directly break SEBI Schedule II rules:
              </p>
              <ul className="space-y-2 text-sm md:text-base text-slate-700 list-disc pl-5">
                <li>
                  <strong>Undischarged Insolvent or Bankrupt:</strong> A court bankruptcy order shows poor financial health. SEBI can stop you from holding a permit, a key post, or control of a firm.
                </li>
                <li>
                  <strong>Wilful Defaulter Tag:</strong> If a bank names you a{' '}
                  <Link
                    href="/willful-defaulter-notice-rbi-rules-legal-defense-guide"
                    className="text-[#1886ff] font-semibold hover:underline"
                  >
                    Wilful Defaulter under RBI rules
                  </Link>
                  , SEBI sees a major trust breach. It can halt or cancel your market permit.
                </li>
              </ul>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                A plain personal loan OTS after true pay loss is not a Schedule II bar by itself. Just keep your firm net worth above the legal floor and fight any unfair wilful default tag right away.
              </p>
            </section>

            {/* SECTION 4 */}
            <section id="advocate-rules" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>Bar Council &amp; Court Practice Rules</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. Advocates Act &amp; Bar Council Rules on Loan Default
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Lawyers on a State Bar roll follow the <strong>Advocates Act, 1961</strong> and Bar Council of India (BCI) Rules. <strong>Section 24A</strong> bars enrolment if a person is guilty of a crime involving moral guilt or was fired from state work for moral guilt.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Missing loan EMIs or signing a bank OTS is a civil contract issue. It is not a crime and shows no moral guilt. So a bank loan settlement does not cancel your Bar Sanad or stop you from arguing in court.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Yet court insolvency creates real traps for lawyers. Under BCI Rules, if you face a major legal bar or insolvency order, you must inform your State Bar Council within 90 days. Hiding a bankruptcy order can bring strict action under <strong>Section 35</strong>.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Also, bodies like IBBI, public banks, and state legal panels bar undischarged bankrupts from their lawyer lists. Settling your debt in private through OTS keeps your roll and panel work clean.
              </p>
            </section>

            {/* SECTION 5: Visual Blueprint Infographic */}
            <section id="visual-blueprint" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Sparkles className="w-4 h-4 text-[#1886ff]" />
                <span>Visual Blueprint</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. Visual Blueprint: Protecting Practice Licenses in OTS
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This chart shows why a private bank OTS beats IBC insolvency for Indian CAs, CSs, Advocates, and SEBI advisers. Use the four steps at the bottom to close debt cleanly.
              </p>

              <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-slate-100 bg-slate-100">
                  <Image
                    src="/images/infographics/personal-loan-settlement-ca-cs-advocate-sebi-license.jpg"
                    alt="Personal Loan OTS vs Insolvency Impact on CA, CS, Advocate and SEBI Licenses Blueprint"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 900px"
                    className="object-contain hover:scale-[1.01] transition-transform duration-300"
                    priority
                  />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-500 pt-1 gap-2">
                  <span>Official CredSettle License Protection Blueprint • RBI &amp; IBC Compliant</span>
                  <a
                    href="/images/infographics/personal-loan-settlement-ca-cs-advocate-sebi-license.jpg"
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

            {/* SECTION 6: Comparison Matrix */}
            <section id="comparison-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff]" />
                <span>Side-by-Side Board Rules</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. Comparison Matrix: OTS vs Insolvency Impact by Body
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Check the table below to see how each Indian board treats a private bank OTS versus a court insolvency or bankruptcy order.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white shadow-xs">
                <div className="bg-slate-900 text-white p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Scale className="w-4 h-4 text-[#1886ff]" />
                    <span className="font-bold text-sm">Board-Wise License Risk: OTS vs IBC Insolvency</span>
                  </div>
                  <span className="text-xs text-blue-300 font-mono">Verified Indian Laws</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[600px]">
                    <thead>
                      <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-semibold">
                        <th className="p-3">Board &amp; Law</th>
                        <th className="p-3">Bank OTS Impact</th>
                        <th className="p-3">IBC Insolvency / Bankruptcy</th>
                        <th className="p-3">Main Red-Flag Trigger</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200/80 text-slate-600">
                      <tr>
                        <td className="p-3 font-medium text-slate-900">ICAI (CA Act, 1949 - Sec 8)</td>
                        <td className="p-3 text-emerald-700 font-semibold">Safe: Roll and COP stay active</td>
                        <td className="p-3 text-rose-700 font-semibold">Barred as undischarged insolvent</td>
                        <td className="p-3">Court bankruptcy or fraud guilt</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">ICSI (CS Act, 1980 - Sec 8)</td>
                        <td className="p-3 text-emerald-700 font-semibold">Safe: Civil deal keeps permit</td>
                        <td className="p-3 text-rose-700 font-semibold">Struck off roll under Sec 20</td>
                        <td className="p-3">Bankruptcy with no bad-luck order</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">SEBI (Intermediaries - Sch II)</td>
                        <td className="p-3 text-amber-700 font-semibold">Safe if non-wilful &amp; net worth OK</td>
                        <td className="p-3 text-rose-700 font-semibold">Fails Fit &amp; Proper; halt risk</td>
                        <td className="p-3">Wilful defaulter or court bankruptcy</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">BCI (Advocates Act - Sec 24A, 35)</td>
                        <td className="p-3 text-emerald-700 font-semibold">Safe: Civil debt is not a crime</td>
                        <td className="p-3 text-amber-700 font-semibold">90-day notice duty; panel loss</td>
                        <td className="p-3">Hiding bankruptcy or client fund misuse</td>
                      </tr>
                      <tr className="bg-blue-50/70 font-medium text-slate-900">
                        <td className="p-3 font-bold">IBC Part III (Sec 141 Bankrupt)</td>
                        <td className="p-3 font-semibold text-emerald-700">Not triggered by bank OTS</td>
                        <td className="p-3 font-bold text-rose-700">Bars board seats &amp; foreign trips</td>
                        <td className="p-3 font-semibold">Failed pay plan causing bankruptcy</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* SECTION 7: Landmark Precedents */}
            <section id="landmark-precedents" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Landmark className="w-4 h-4 text-[#1886ff]" />
                <span>Supreme Court &amp; Legal Rules</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. Landmark Precedents: IBC Section 94 &amp; Civil Default
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Some borrowers think filing personal insolvency under IBC is a quick shield against bank calls. Supreme Court law shows why licensed experts should treat IBC as a strict last resort.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                    <Gavel className="w-4 h-4" />
                    <span>Dilip B. Jiwrajka v. Union of India (2023)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    In 2023 INSC 1018 (Nov 9, 2023), the Supreme Court upheld Sections 95 to 100 of the IBC. When a bank files under Section 95, a court officer reviews your assets and files a report with the bench.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Section 141 IBC Bankruptcy Bars</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If a court declares you bankrupt, Section 141 bars you from serving as a firm director. You also cannot borrow fresh money without notice or travel abroad without court leave.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-purple-700 font-bold text-sm">
                    <Scale className="w-4 h-4" />
                    <span>RBI OTS Framework (June 8, 2023)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    RBI Circular DOR.STR.REC.20 lets every bank and NBFC settle bad loans under a board-approved policy. This gives you a clean out-of-court exit with no public tribunal tag.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <FileText className="w-4 h-4" />
                    <span>Section 147 NI Act Case Closure</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If a bank files a Section 138 cheque bounce case, Section 147 lets both sides settle and close it. Once you pay the OTS sum, the court drops the case cleanly.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 8: Step-by-Step SOP */}
            <section id="step-by-step-sop" className="scroll-target space-y-6">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Step-by-Step Action Plan</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. Step-by-Step SOP: Safe OTS for Regulated Professionals
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Follow these six clear steps to settle tough personal loans in private. Each step keeps your ICAI, ICSI, BCI, or SEBI standing safe.
              </p>

              <div className="space-y-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">1</span>
                    Stage 1: Keep Client and Firm Funds Strictly Separate
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Never use client trust funds, fee accounts, or firm capital to pay a personal loan. Keep your required net worth and client bank accounts 100% separate at every stage.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">2</span>
                    Stage 2: Put Your True Hardship on Paper Early
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Send your bank a short hardship note with proof of health bills, job loss, or low firm income. This paper trail shows honest distress and blocks a wilful default claim.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">3</span>
                    Stage 3: Do Not Rush Into Section 94 IBC Filing
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Avoid filing{' '}
                    <Link
                      href="/personal-insolvency-section-94-ibc-interim-moratorium"
                      className="text-[#1886ff] font-semibold hover:underline"
                    >
                      Section 94 IBC personal insolvency
                    </Link>{' '}
                    for plain unsecured loans. If your pay plan fails, a bankruptcy order can cost you your CA, CS, or SEBI permit.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">4</span>
                    Stage 4: Get a Verified Written OTS Letter
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Negotiate a clear waiver and ask for a{' '}
                    <Link
                      href="/how-to-verify-bank-ots-sanction-letter-avoid-settlement-scams"
                      className="text-[#1886ff] font-semibold hover:underline"
                    >
                      verified bank OTS sanction letter
                    </Link>{' '}
                    on official letterhead. Make sure it promises full debt waiver and withdrawal of all court or cheque cases.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">5</span>
                    Stage 5: Pay the Loan Account Directly and Collect NOC
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Pay only via NEFT, RTGS, or the bank app straight into your loan account. Never pay cash to agents. Collect your signed{' '}
                    <Link
                      href="/get-noc-after-loan-settlement"
                      className="text-[#1886ff] font-semibold hover:underline"
                    >
                      No Dues Certificate (NOC)
                    </Link>{' '}
                    and court drop order.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">6</span>
                    Stage 6: Audit All Four Credit Bureaus After 15 Days
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Pull your credit file from CIBIL, Experian, Equifax, and CRIF after the next 15-day RBI cycle. Check that the overdue sum reads zero with no active default tag.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 9: Key Risks */}
            <section id="key-risks" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <AlertTriangle className="w-4 h-4 text-[#1886ff]" />
                <span>Common Traps to Avoid</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Key Risks: Wilful Default, Section 138 &amp; Disclosure
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Even if you skip court insolvency, four key mistakes can still hurt your license. Stay alert and avoid these traps.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-rose-600" />
                    Ignoring a Wilful Defaulter Notice
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Never ignore a bank letter that claims you hid cash or refused to pay on purpose. Send a written reply with bank proof and attend the bank panel hearing to block the wilful tag.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Gavel className="w-4 h-4 text-amber-600" />
                    Missing Section 138 Court Dates
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Always appear in court or send a lawyer for cheque or NACH bounce summons. Pay the OTS sum and{' '}
                    <Link
                      href="/compounding-section-138-cheque-bounce-case-after-settlement-section-147"
                      className="text-[#1886ff] font-semibold hover:underline"
                    >
                      compound the Section 138 case
                    </Link>{' '}
                    before any judge passes a fine or jail order.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-[#1886ff]" />
                    Dropping Below SEBI Net Worth Rules
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    SEBI advisers and brokers must keep a fixed minimum net worth at all times. Pulling that cash to clear personal loans without replacing it breaks SEBI rules.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-emerald-600" />
                    Filing Wrong Facts on Annual Forms
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Read your yearly ICAI, ICSI, BCI, or SEBI renewal form with care. Never hide a court bankruptcy order or crime fine, as a false form itself can lead to a ban.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 10: Recovery Roadmap */}
            <section id="recovery-roadmap" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Calendar className="w-4 h-4 text-[#1886ff]" />
                <span>Post-OTS Credit Rebuild Plan</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                10. Recovery Roadmap: Upgrade Settled Status to Closed
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                A &quot;Settled&quot; note on CIBIL does not take away your CA, CS, Advocate, or SEBI license. Still, a clean score helps when you apply for bank audit panels, top firms, or board seats. Follow this timeline to rebuild.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Time Window</th>
                      <th className="p-3">Key Step</th>
                      <th className="p-3">What You Should Do</th>
                      <th className="p-3">Career &amp; License Gain</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Month 0 (OTS Done)</td>
                      <td className="p-3 font-mono text-[11px]">NOC &amp; Zero Dues</td>
                      <td className="p-3">Collect your signed NOC and court case drop paper.</td>
                      <td className="p-3">Ends bank calls, IBC risk, and wilful tag threats.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 15 to 30</td>
                      <td className="p-3 font-mono text-[11px]">Bureau Audit</td>
                      <td className="p-3">Check CIBIL, CRIF, Equifax, and Experian for zero overdue.</td>
                      <td className="p-3">Claim RBI ₹100/day fee if the bank delays your update.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Month 6 to 12</td>
                      <td className="p-3 font-mono text-[11px] text-[#1886ff] font-bold">Score Rebuild</td>
                      <td className="p-3">Use a small FD-backed card under 30% limit and pay in full.</td>
                      <td className="p-3">Lifts score above 720 after the 12-month RBI cool-off.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Month 12 to 24</td>
                      <td className="p-3 font-mono text-[11px] text-emerald-700 font-bold">Settled to Closed</td>
                      <td className="p-3">Pay the waived gap if needed and get a clean Closed NOC.</td>
                      <td className="p-3">Clears strict bank audit panels and firm checks with ease.</td>
                    </tr>
                  </tbody>
                </table>
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
                Frequently Asked Questions: OTS &amp; Professional Licenses
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Get straight answers on how personal loan OTS and court insolvency affect CA, CS, Advocate, and SEBI licenses in India.
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
                <span>Laws &amp; Official Sources</span>
              </div>
              <h2 className="text-base sm:text-lg font-bold text-slate-900">
                Official Regulatory Citations &amp; Statutory References
              </h2>
              <ul className="space-y-2 text-xs text-slate-600 leading-relaxed list-disc pl-5">
                <li>
                  <strong>Chartered Accountants Act, 1949:</strong> Section 8 (Insolvency bars and bad-luck order) and Section 19 (Member roll).
                </li>
                <li>
                  <strong>Company Secretaries Act, 1980:</strong> Section 8 (Insolvency bars) and Section 20 (Roll removal).
                </li>
                <li>
                  <strong>SEBI (Intermediaries) Regulations, 2008:</strong> Regulation 7 and Schedule II (Fit and Proper Person test).
                </li>
                <li>
                  <strong>Advocates Act, 1961 &amp; BCI Rules:</strong> Section 24A (Enrolment bars), Section 35 (Conduct action), and the 90-day notice rule.
                </li>
                <li>
                  <strong>Insolvency and Bankruptcy Code, 2016:</strong> Part III, Sections 94, 95, 96, 138, and 141, plus Dilip B. Jiwrajka v. Union of India (2023 INSC 1018).
                </li>
                <li>
                  <strong>RBI Circular (June 8, 2023):</strong> RBI/2023-24/40, DOR.STR.REC.20/21.04.048/2023-24 on Compromise Settlements.
                </li>
              </ul>

              {/* 6 Outbound Authority Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Verified Government &amp; Board Portals:</span>
                <div className="flex flex-wrap gap-2">
                  <a href="https://www.rbi.org.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>Reserve Bank of India</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.sebi.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>SEBI Official Portal</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.icai.org" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>ICAI (Chartered Accountants)</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.icsi.edu" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>ICSI (Company Secretaries)</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://ibbi.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>IBBI Insolvency Portal</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.indiacode.nic.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>India Code Statutes</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* 10 Internal Topic Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Explore Related CredSettle Guides:</span>
                <div className="flex flex-wrap gap-2">
                  <Link href="/personal-insolvency-section-94-ibc-interim-moratorium" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Section 94 IBC Insolvency Guide
                  </Link>
                  <Link href="/section-95-ibc-personal-guarantor-insolvency-nclt-defense" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Section 95 IBC NCLT Defense
                  </Link>
                  <Link href="/willful-defaulter-notice-rbi-rules-legal-defense-guide" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Wilful Defaulter Defense Guide
                  </Link>
                  <Link href="/rbi-circular-on-loan-settlement-ots" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    RBI Circular on Loan OTS
                  </Link>
                  <Link href="/compounding-section-138-cheque-bounce-case-after-settlement-section-147" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Compound Section 138 Case
                  </Link>
                  <Link href="/ibps-bank-job-verification-settled-personal-loan-cibil" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    IBPS Bank Job Settled Loan Rules
                  </Link>
                  <Link href="/get-noc-after-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Get NOC After Settlement
                  </Link>
                  <Link href="/how-to-verify-bank-ots-sanction-letter-avoid-settlement-scams" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Verify Bank OTS Letter
                  </Link>
                  <Link href="/services/personal-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Personal Loan Settlement Service
                  </Link>
                  <Link href="/rbi-100-per-day-compensation-for-delayed-cibil-report-update" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    RBI ₹100/Day CIBIL Update Rule
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
                    Legal &amp; Debt Resolution Expert
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Helps Indian borrowers settle bank loans under RBI rules, fight IBC threats, and protect active work licenses across India.
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
                  PRIVATE LICENSE DEFENSE
                </span>
                <p className="text-lg md:text-xl font-bold text-white leading-snug">
                  CA, CS, Advocate or SEBI Adviser in Debt?
                </p>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Settle overdue bank loans via a private RBI OTS before a bank files an IBC case or wilful tag that harms your license.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Book Private Legal Review
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
              <p className="font-bold text-slate-900 text-sm">The CredSettle Promise</p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Private RBI OTS Deals:</strong> Zero court insolvency or public bankruptcy tag.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Wilful Tag Defense:</strong> Strong written replies to guard your SEBI permit.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Section 138 Closure:</strong> Clean court drop of cheque bounce cases.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Clean NOC &amp; Bureau Sync:</strong> Verified closure across all 4 credit bureaus.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">Related Legal Guides</p>
              <div className="space-y-2.5">
                <Link
                  href="/personal-insolvency-section-94-ibc-interim-moratorium"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Section 94 IBC Personal Insolvency
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Court stay &amp; bankruptcy risks &rarr;</span>
                </Link>

                <Link
                  href="/willful-defaulter-notice-rbi-rules-legal-defense-guide"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Wilful Defaulter Notice Defense
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Guard SEBI &amp; board rights &rarr;</span>
                </Link>

                <Link
                  href="/rbi-circular-on-loan-settlement-ots"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    RBI Compromise OTS Circular
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">June 2023 settlement rules &rarr;</span>
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
