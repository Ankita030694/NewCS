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
  Globe,
  BookOpen,
  Building2,
  Landmark,
  Check,
  Lock,
  Phone,
  Briefcase,
  Bookmark,
  ArrowRight,
  UserCheck,
  Sparkles,
  Gavel,
  Plane,
  Calendar,
  CreditCard
} from 'lucide-react';

export default function PersonalLoanDefaultForeignVisaClient() {
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
    { id: 'direct-answer', label: '1. Do Embassies Check Indian CIBIL?' },
    { id: 'legal-framework', label: '2. CICRA 2005, Passports Act & Law' },
    { id: 'country-comparison', label: '3. US, UK, Canada, Schengen & UAE' },
    { id: 'court-rulings', label: '4. Bombay HC 2024 LOC Verdict' },
    { id: 'visual-blueprint', label: '5. Visual Blueprint Infographic' },
    { id: 'hidden-red-flags', label: '6. Section 138, PCC & Bank Freezes' },
    { id: 'settled-vs-default', label: '7. Settled Loan vs Active Default' },
    { id: 'step-by-step-sop', label: '8. Step-by-Step Pre-Visa SOP' },
    { id: 'pre-visa-timeline', label: '9. Pre-Visa Legal Audit Timeline' },
    { id: 'special-cases', label: '10. Education Loans, PR & NRI Debt' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
    {
      q: 'Do foreign embassies check Indian CIBIL scores during visa processing?',
      a: 'No. Foreign embassies and visa centers like VFS Global cannot see Indian credit reports. Under CICRA 2005, only RBI-approved Indian firms can check your CIBIL, Experian, Equifax, or CRIF score.'
    },
    {
      q: 'Will a settled personal loan stop my US, UK, Canada, or Schengen visa?',
      a: 'No. A One-Time Settlement (OTS) mark on your Indian CIBIL file does not block your visa. Visa officers check your bank balance, income proof, and travel plans, not your local credit score.'
    },
    {
      q: 'Can an Indian bank issue a Look Out Circular (LOC) for personal loan default?',
      a: 'No. Private banks and NBFCs never had the power to issue Look Out Circulars. In April 2024, the Bombay High Court also struck down the rule that let Public Sector Banks issue LOCs for debt recovery.'
    },
    {
      q: 'When can a personal loan default actually hurt a foreign visa application?',
      a: 'It hurts your visa in three clear cases. First, a court issues a Non-Bailable Warrant in a Section 138 cheque bounce case. Second, a fraud FIR blocks your Police Clearance Certificate (PCC). Third, your bank freezes the account holding your Proof of Funds.'
    },
    {
      q: 'Does a personal loan default show up in a Police Clearance Certificate (PCC)?',
      a: 'No. A normal loan default is a civil matter and never shows up on a PCC. Only a police FIR or a pending criminal case with a court warrant can delay or stop your PCC.'
    },
    {
      q: 'Can a personal loan default affect my foreign study visa education loan?',
      a: 'Yes, it can affect your loan, not your visa directly. Foreign embassies do not check CIBIL, but Indian banks do. If your CIBIL is low, use savings, a strong co-applicant, a scholarship, or a global study lender.'
    },
    {
      q: 'Should I keep my visa Proof of Funds in the same bank where I defaulted?',
      a: 'No. Under Section 171 of the Indian Contract Act, 1872, a bank can freeze or debit your savings account in the same bank. Always keep your visa funds in a clean, separate bank.'
    },
    {
      q: 'Can a bank cancel or impound my Indian passport for unpaid personal loans?',
      a: 'No. Banks have no power to cancel or seize your passport. Under Section 10(3) of the Passports Act, 1967, only the Passport Office can act, and only when a criminal court case or warrant exists.'
    },
    {
      q: 'Does an Indian personal loan default block a UAE or Gulf work visa?',
      a: 'No. Indian credit bureaus are not linked to the UAE credit bureau or Gulf visa desks. A normal civil default will not stop your UAE visa, though settling your debt gives you full peace of mind.'
    },
    {
      q: 'How does CredSettle help borrowers clear debt safely before applying for a visa?',
      a: 'CredSettle checks eCourts for hidden cases and settles personal loans with fair waivers. Our team also makes sure lenders drop Section 138 cases and give you a written No Dues Certificate before you fly.'
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
            <Plane className="w-3.5 h-3.5" />
            <span>CICRA 2005 Privacy, Bombay HC LOC Ruling &amp; Travel Rights</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Embassy Proof of Funds vs CIBIL Score for Overseas Visas
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            Find out if an Indian personal loan default or settled CIBIL hurts your US, UK, Canada, Schengen, or UAE visa. Learn what visa officers really check and how to stay safe before you fly.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Get Free Pre-Visa Legal Audit</span>
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
                  <span>Your Legal Travel Shield</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Backed by Article 21, CICRA 2005 privacy rules, and the Passports Act, 1967.
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
                <span>EXECUTIVE BRIEF: LOAN DEFAULT VS FOREIGN VISA RULES</span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Embassies Cannot Check CIBIL:</strong> Foreign visa offices cannot view Indian credit bureaus under CICRA 2005. A low score or Settled mark does not trigger visa denial.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Proof of Funds Comes First:</strong> Embassies check your real cash balance, tax returns, and pay slips. Never keep your visa savings in the same bank where you owe debt.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">No Bank Look Out Circulars:</strong> Private banks never had LOC power. In April 2024, the Bombay High Court also barred state banks from issuing LOCs for debt recovery.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Real Visa Red Flags:</strong> Only criminal cases, Section 138 arrest warrants, or fraud FIRs put your Police Clearance Certificate (PCC) and passport at risk.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Best Move Before Flying:</strong> Search eCourts before your visa filing. Settle overdue personal loans in writing and get every cheque bounce case closed.
                  </span>
                </li>
              </ul>
            </div>

            {/* SECTION 1 */}
            <section id="direct-answer" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Globe className="w-4 h-4 text-[#1886ff]" />
                <span>Quick Legal Answer</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. Direct Answer: Do Foreign Embassies Check Indian CIBIL?
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                No. An Indian personal loan default does not stop you from getting a foreign study, work, or tourist visa. Foreign embassies cannot check your CIBIL, Experian, Equifax, or CRIF report.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Many debt collectors tell borrowers that an unpaid loan will ruin their US, UK, Canada, or Europe visa. That claim is false. Missing a personal loan EMI is a civil issue, not a crime.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Still, an unpaid loan can cause indirect trouble in three clear ways. Your bank may freeze the savings account you use for Proof of Funds. An Indian bank may reject your fresh study loan. And a cheque bounce warrant can stop your Police Clearance Certificate (PCC).
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Once you know what embassies check and what Indian law allows, you can plan your move abroad without fear.
              </p>
            </section>

            {/* SECTION 2 */}
            <section id="legal-framework" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Indian Laws &amp; Credit Privacy Rules</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. Legal Framework: CICRA 2005, Passports Act &amp; Constitution
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Three core Indian laws protect your right to go abroad and keep your credit report private from foreign offices.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-[#1886ff] font-bold text-sm">
                    <Lock className="w-4 h-4" />
                    <span>CICRA 2005 Privacy</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Sections 17 and 20 of CICRA 2005 limit who can view credit files. Only RBI-approved Indian banks and lenders can pull your score. Foreign embassies and VFS desks have zero access.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Article 21 Travel Right</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Article 21 of the Constitution protects your personal freedom. The Supreme Court held that going abroad is a basic right. No bank can stop your trip without a fair law and court order.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                    <Landmark className="w-4 h-4" />
                    <span>Passports Act, 1967</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Sections 6(2)(f) and 10(3) allow passport holds only for active criminal court cases or warrants. A civil loan default or a Settled remark is never a valid reason to hold your passport.
                  </p>
                </div>
              </div>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                A bank cannot email a foreign embassy to cancel your visa. Visa officers base their decision only on valid funds, job or study letters, and clean police records.
              </p>
            </section>

            {/* SECTION 3 */}
            <section id="country-comparison" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Plane className="w-4 h-4 text-[#1886ff]" />
                <span>Country-by-Country Visa Rules</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Country Comparison: US, UK, Canada, Schengen &amp; UAE Visas
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Every major country checks your money in its own way. None of them pull your Indian CIBIL score. All of them look closely at clean bank accounts and police checks.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white shadow-xs">
                <div className="bg-slate-900 text-white p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Globe className="w-4 h-4 text-[#1886ff]" />
                    <span className="font-bold text-sm">What Foreign Embassies Actually Check</span>
                  </div>
                  <span className="text-xs text-blue-300 font-mono">Study, Work &amp; PR Visas</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[600px]">
                    <thead>
                      <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-semibold">
                        <th className="p-3">Country &amp; Visa Type</th>
                        <th className="p-3">Checks CIBIL?</th>
                        <th className="p-3">What Visa Officers Check</th>
                        <th className="p-3">Real Loan Risk to Watch</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200/80 text-slate-600">
                      <tr>
                        <td className="p-3 font-medium text-slate-900">USA (F-1, H-1B, B1/B2)</td>
                        <td className="p-3 font-bold text-emerald-600">No</td>
                        <td className="p-3">I-20 funds, cash savings, tax returns, job offer, and arrest history.</td>
                        <td className="p-3">Open court warrant or denied Indian study loan.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">UK (Student, Work)</td>
                        <td className="p-3 font-bold text-emerald-600">No</td>
                        <td className="p-3">28-day clear bank balance rule, job sponsor, and police record.</td>
                        <td className="p-3">Bank freeze breaking the 28-day fund rule.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Canada (Study, Work, PR)</td>
                        <td className="p-3 font-bold text-emerald-600">No</td>
                        <td className="p-3">GIC deposit, fee receipt, 4-month bank statements, and Indian PCC.</td>
                        <td className="p-3">Pending criminal court case blocking PCC.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Schengen &amp; Germany</td>
                        <td className="p-3 font-bold text-emerald-600">No</td>
                        <td className="p-3">Blocked account funds, 3-6 month pay statements, and tax filings.</td>
                        <td className="p-3">Many ECS bounce fees shown on bank statements.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Australia (500, 482, PR)</td>
                        <td className="p-3 font-bold text-emerald-600">No</td>
                        <td className="p-3">True student funds, family income proof, and PCC character check.</td>
                        <td className="p-3">Unpaid Section 138 warrant hurting character check.</td>
                      </tr>
                      <tr className="bg-blue-50/40">
                        <td className="p-3 font-medium text-slate-900">UAE &amp; Gulf Work Visas</td>
                        <td className="p-3 font-bold text-emerald-600">No</td>
                        <td className="p-3">Job sponsor, valid passport, attested degrees, and police clearance.</td>
                        <td className="p-3">Formal court decree execution only in rare large cases.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* SECTION 4 */}
            <section id="court-rulings" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>Key Court Verdicts</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. Court Rulings: Bombay HC 2024 LOC Verdict &amp; Travel Rights
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Indian courts have made it clear that banks cannot use airport stops to collect normal loans. Four major rulings and rules protect your travel rights.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                    <Gavel className="w-4 h-4" />
                    <span>Bombay HC: Viraj Chetan Shah v. Union of India (2024)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    On April 23, 2024, the Bombay High Court struck down the rule that let state bank chiefs issue Look Out Circulars (LOCs). The court held that banks cannot stop citizens from flying just to collect unpaid loans.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                    <Scale className="w-4 h-4" />
                    <span>Supreme Court: Maneka Gandhi v. Union of India (1978)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The Supreme Court ruled that the right to travel abroad sits inside Article 21. Any stop on your passport or flight must follow a fair and valid legal step.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-purple-700 font-bold text-sm">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Supreme Court: Satwant Singh Sawhney (1967)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The court held that officers cannot deny a passport or stop foreign travel without clear law. Private banks and NBFCs have zero power to put your name on airport alerts.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <Building2 className="w-4 h-4" />
                    <span>MEA Rule G.S.R. 570(E) Travel Relief</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Even if a lender files a Section 138 cheque bounce case, you are not stuck in India forever. Under MEA rule G.S.R. 570(E), you can ask the court for a travel NOC to renew your passport and fly.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 5: Visual Blueprint Infographic */}
            <section id="visual-blueprint" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Sparkles className="w-4 h-4 text-[#1886ff]" />
                <span>Visual Blueprint</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. Visual Blueprint: Loan Default vs Visa Approval Flow
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This visual chart sums up what visa officers check, why civil debt does not ban your travel, and how to keep your Proof of Funds and PCC safe.
              </p>

              <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-slate-100 bg-slate-100">
                  <Image
                    src="/images/infographics/does-personal-loan-default-affect-foreign-study-work-visa.jpg"
                    alt="Indian Personal Loan Default vs Foreign Study and Work Visa Rules Blueprint"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 900px"
                    className="object-contain hover:scale-[1.01] transition-transform duration-300"
                    priority
                  />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-500 pt-1 gap-2">
                  <span>Official CredSettle Overseas Mobility &amp; Debt Protection Guide</span>
                  <a
                    href="/images/infographics/does-personal-loan-default-affect-foreign-study-work-visa.jpg"
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

            {/* SECTION 6 */}
            <section id="hidden-red-flags" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <AlertTriangle className="w-4 h-4 text-[#1886ff]" />
                <span>Real Risks That Can Delay Your Visa</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. Hidden Red Flags: Section 138 Warrants, PCC &amp; Bank Freezes
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Your CIBIL score will not stop your visa. Still, four real legal traps tied to an unpaid loan can delay your travel if you ignore them.
              </p>

              <div className="space-y-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-rose-600 flex-shrink-0" />
                    1. Section 138 NI Act &amp; Section 25 PSS Act Warrants
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If your cheque or NACH mandate bounces, a lender can file a case under Section 138 of the NI Act or Section 25 of the PSS Act. This is a bailable matter. If you attend court, you stay safe. If you skip court dates, the judge can issue a Non-Bailable Warrant (NBW), which blocks your PCC.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <Landmark className="w-4 h-4 text-amber-600 flex-shrink-0" />
                    2. Bank Freeze &amp; Set-Off on Your Proof of Funds
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Under Section 171 of the Indian Contract Act, 1872, a bank can freeze or debit your savings account in the same bank. UK and Europe visas check clean 28-day to 6-month balances. A sudden bank hold can cause a quick Proof of Funds refusal.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <FileText className="w-4 h-4 text-indigo-600 flex-shrink-0" />
                    3. Repeated ECS Bounce Fees on Visa Bank Statements
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Visa officers read your last 3 to 6 months of bank statements line by line. Even without checking CIBIL, dozens of unpaid ECS bounce fees look like poor money health. Always show a clean, active account for your visa file.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-rose-700 flex-shrink-0" />
                    4. Criminal Fraud FIRs (Fake KYC or Forged Papers)
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Losing a job or facing medical bills is a civil issue, not a crime. Only real fraud charges, like fake pay slips or stolen IDs under the Bharatiya Nyaya Sanhita (BNS), lead to a police FIR and block a PCC.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7 */}
            <section id="settled-vs-default" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <CreditCard className="w-4 h-4 text-[#1886ff]" />
                <span>Credit Status Comparison</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. Settled Loan vs Active Default: Impact on Study &amp; Work Visas
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Many people ask whether to leave a bad loan unpaid or close it via One-Time Settlement (OTS) before a visa. Settling your loan clears court, warrant, and lien risks in one step.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[580px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Visa &amp; Legal Factor</th>
                      <th className="p-3">Unpaid Default (NPA)</th>
                      <th className="p-3">Settled via OTS + NOC</th>
                      <th className="p-3">Fully Paid &amp; Closed</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Embassy Visa Decision</td>
                      <td className="p-3">Not denied for CIBIL alone.</td>
                      <td className="p-3 text-emerald-700 font-semibold">Safe. No embassy issue.</td>
                      <td className="p-3 text-emerald-700 font-semibold">Safe. No embassy issue.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Section 138 / Warrant Risk</td>
                      <td className="p-3 text-rose-700 font-semibold">High if cheques bounce.</td>
                      <td className="p-3 text-emerald-700 font-semibold">Gone once case is closed.</td>
                      <td className="p-3 text-emerald-700 font-semibold">Zero legal risk.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Police Clearance (PCC)</td>
                      <td className="p-3 text-amber-700 font-semibold">Risk only if NBW exists.</td>
                      <td className="p-3 text-emerald-700 font-semibold">Clean PCC approval.</td>
                      <td className="p-3 text-emerald-700 font-semibold">Clean PCC approval.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Indian Study Loan</td>
                      <td className="p-3 text-rose-700 font-semibold">Denied by Indian lenders.</td>
                      <td className="p-3 text-amber-700 font-semibold">Needs strong co-applicant.</td>
                      <td className="p-3 text-emerald-700 font-semibold">Easy once score rises.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Calls to Family in India</td>
                      <td className="p-3 text-rose-700 font-semibold">Agents keep calling home.</td>
                      <td className="p-3 text-emerald-700 font-semibold">Stops for good after NOC.</td>
                      <td className="p-3 text-emerald-700 font-semibold">Stops for good after NOC.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 8 */}
            <section id="step-by-step-sop" className="scroll-target space-y-6">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Step-by-Step Pre-Visa Plan</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. Step-by-Step SOP: Clear Visa &amp; Travel Hurdles Before Flying
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Follow these six simple steps 60 to 90 days before you submit your study, work, or PR visa file.
              </p>

              <div className="space-y-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">1</span>
                    Stage 1: Search eCourts for Any Hidden Case
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Look up your name on services.ecourts.gov.in in your home city and your bank head office city. Make sure no Section 138 cheque bounce case or court notice is pending against you.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">2</span>
                    Stage 2: Keep Visa Funds in a Clean Bank
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Hold your savings, pay credits, GIC funds, or parent funds in a bank where you have zero loans. This keeps your 3 to 6 month visa statements free from bank freezes and bounce fees.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">3</span>
                    Stage 3: Ask for a Written One-Time Settlement
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If you cannot pay the full due amount, agree to a written OTS on official bank paper. Check that the OTS letter clearly promises to drop all civil and Section 138 cases.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">4</span>
                    Stage 4: Collect Your NOC &amp; Court Closure Order
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Once you pay the settled sum, take your official No Dues Certificate (NOC). If a court case existed, get a signed copy of the judge order closing the complaint.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">5</span>
                    Stage 5: Check 15-Day RBI Bureau Updates
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Under RBI 15-day reporting rules effective January 2025, banks must update credit bureaus twice a month. Confirm that your overdue amount drops to zero on CIBIL, Experian, Equifax, and CRIF.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">6</span>
                    Stage 6: Apply for PCC &amp; File True Visa Forms
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Apply early for your PCC on Passport Seva if your work or PR visa asks for one. Always tell the truth on visa forms. Civil debt does not count as a criminal record.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 9 */}
            <section id="pre-visa-timeline" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Calendar className="w-4 h-4 text-[#1886ff]" />
                <span>90-Day Pre-Visa Schedule</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Pre-Visa Timeline: From Legal Audit to Clean Travel File
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Starting three months early helps you avoid last-minute delays with your PCC, study loan, or visa stamping.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Time Before Filing</th>
                      <th className="p-3">Stage</th>
                      <th className="p-3">Action to Take</th>
                      <th className="p-3">Result</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">90 Days Left</td>
                      <td className="p-3 font-mono text-[11px]">Case &amp; Bank Audit</td>
                      <td className="p-3">Check eCourts, pull 4 bureau reports, and move visa funds to a clean bank.</td>
                      <td className="p-3">Your clean 3-month bank statement starts safely.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">60-75 Days Left</td>
                      <td className="p-3 font-mono text-[11px]">OTS Talks</td>
                      <td className="p-3">Agree on a fair settlement plan or repayment deal with your lender.</td>
                      <td className="p-3">Written OTS offer with legal case drop clause.</td>
                    </tr>
                    <tr className="bg-amber-50/50">
                      <td className="p-3 font-bold text-slate-900">30-45 Days Left</td>
                      <td className="p-3 font-mono text-[11px] text-amber-700 font-bold">NOC &amp; Closure</td>
                      <td className="p-3">Pay OTS amount, collect NOC, and close any Section 138 court file.</td>
                      <td className="p-3 font-bold text-amber-800">Zero pending court cases or warrant risks.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">15-30 Days Left</td>
                      <td className="p-3 font-mono text-[11px] text-[#1886ff] font-bold">PCC &amp; Credit Check</td>
                      <td className="p-3">Check 15-day RBI bureau update and finish Passport Seva PCC.</td>
                      <td className="p-3 font-bold text-slate-900">Clean PCC and updated zero-due report.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Filing Week</td>
                      <td className="p-3 font-mono text-[11px] text-emerald-700 font-bold">Visa &amp; Flight</td>
                      <td className="p-3">Submit clean bank statements, offer letter, and valid PCC.</td>
                      <td className="p-3">Smooth visa stamping and safe airport travel.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10 */}
            <section id="special-cases" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>Common Real-World Cases</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                10. Special Cases: Education Loans, PR &amp; NRI Debt Recovery
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Different visa goals bring unique money questions. Here is how Indian loan default works for students, PR applicants, and NRIs.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-[#1886ff]" />
                    Foreign Study Visa &amp; Education Loans
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Your college offer and student visa do not depend on CIBIL. Still, Indian banks check CIBIL before giving an education loan. You can use a strong co-applicant, family savings, or foreign lenders like Prodigy or MPOWER.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Globe className="w-4 h-4 text-emerald-600" />
                    Canada Express Entry &amp; Australia PR
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    PR officers want free, unblocked funds and a clean PCC. You must prove your funds are not a fresh loan. Settling old debt early keeps your PCC fast and your bank cash safe.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-indigo-600" />
                    Fresh Credit Score Abroad
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Indian credit scores do not move to the US, UK, Canada, Europe, or Australia. When you land abroad, your new credit score starts fresh from zero, even if you settled an Indian loan.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-amber-600" />
                    Already Abroad? Remote NRI Settlement
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If you already live abroad with unpaid Indian debt, you do not need to fly back. You can sign a Power of Attorney so family or legal experts settle the loan and stop home visits.
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
                Frequently Asked Questions: Loan Default &amp; Foreign Visas
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Simple, verified answers on personal loan default, settled CIBIL scores, visa Proof of Funds, PCC rules, and airport travel rights.
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
                Official Statutory Citations &amp; Legal References
              </h2>
              <ul className="space-y-2 text-xs text-slate-600 leading-relaxed list-disc pl-5">
                <li>
                  <strong>CICRA, 2005 (Sections 17 &amp; 20):</strong> Limits credit report sharing strictly to RBI-approved Indian users.
                </li>
                <li>
                  <strong>Passports Act, 1967 &amp; MEA Rule G.S.R. 570(E):</strong> Sets exact criminal grounds for passport holds and court travel NOCs.
                </li>
                <li>
                  <strong>Bombay High Court (April 23, 2024):</strong> Viraj Chetan Shah v. Union of India (WP 719/2020) quashing state bank LOC rules.
                </li>
                <li>
                  <strong>Supreme Court of India:</strong> Satwant Singh Sawhney (1967) and Maneka Gandhi (1978) protecting travel under Article 21.
                </li>
                <li>
                  <strong>Contract Act, 1872 &amp; NI Act, 1881:</strong> Section 171 (Banker Lien), Section 138 (Cheque Bounce), and RBI 15-Day Bureau Rules (2024).
                </li>
              </ul>

              {/* Outbound Authority Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Verified Government &amp; Regulatory Portals:</span>
                <div className="flex flex-wrap gap-2">
                  <a href="https://www.rbi.org.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>Reserve Bank of India</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.passportindia.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>Passport Seva (MEA)</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://services.ecourts.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>eCourts India Case Search</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.indiacode.nic.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>India Code Statutory Repository</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://cms.rbi.org.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>RBI Integrated Ombudsman Portal</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://bombayhighcourt.nic.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>Bombay High Court Orders</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* 10 Internal Topic Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Explore Related CredSettle Guides:</span>
                <div className="flex flex-wrap gap-2">
                  <Link href="/can-loan-defaulter-go-abroad" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Can Loan Defaulter Go Abroad?
                  </Link>
                  <Link href="/nri-returning-to-india-with-unpaid-debt" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    NRI Returning With Unpaid Debt
                  </Link>
                  <Link href="/non-bailable-warrant-cheque-bounce-loan" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Cheque Bounce NBW Defense
                  </Link>
                  <Link href="/can-bank-freeze-my-savings-account-for-loan" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Bank Account Freeze Rules
                  </Link>
                  <Link href="/can-bank-deduct-money-from-another-account" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Right of Set-Off Protection
                  </Link>
                  <Link href="/services/personal-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Personal Loan Settlement
                  </Link>
                  <Link href="/get-noc-after-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Get NOC After Settlement
                  </Link>
                  <Link href="/ibps-bank-job-verification-settled-personal-loan-cibil" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Bank Job CIBIL Verification
                  </Link>
                  <Link href="/can-hr-refuse-salary-account-switch-personal-loan" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Switch Salary Bank Account
                  </Link>
                  <Link href="/rbi-circular-on-loan-settlement-ots" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    RBI Loan Settlement Rules
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
                Expert in Indian banking rules, loan settlement, Section 138 cases, and NRI debt relief. Helps Indian borrowers clear debt hurdles safely before study or work abroad.
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
                  PRE-VISA DEBT CLEARANCE
                </span>
                <p className="text-lg md:text-xl font-bold text-white leading-snug">
                  Applying for a Foreign Visa With an Unpaid Loan?
                </p>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our legal team checks eCourts cases, settles personal loans via written OTS, closes Section 138 files, and gets your NOC before you fly.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Book Pre-Visa Legal Review
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
                  <span><strong>eCourts &amp; Warrant Audit:</strong> Spot hidden Section 138 cases early.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Legal OTS Deals:</strong> Cut loan dues and get a signed NOC.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Proof of Funds Safety:</strong> Protect visa cash from bank holds.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Remote NRI Help:</strong> Close Indian loans safely from abroad.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">Related Legal Guides</p>
              <div className="space-y-2.5">
                <Link
                  href="/can-loan-defaulter-go-abroad"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Can a Loan Defaulter Go Abroad?
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Airport &amp; LOC legal rules &rarr;</span>
                </Link>

                <Link
                  href="/non-bailable-warrant-cheque-bounce-loan"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Cheque Bounce Non-Bailable Warrant
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Cancel NBW &amp; protect PCC &rarr;</span>
                </Link>

                <Link
                  href="/nri-returning-to-india-with-unpaid-debt"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    NRI Returning With Unpaid Debt
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Remote settlement &amp; travel guide &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
