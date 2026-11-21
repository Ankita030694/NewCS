'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
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
  Gavel,
  Landmark,
  Calendar
} from 'lucide-react';

export default function BnplShadowNbfcCibilClosureClient() {
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
    { id: 'shadow-nbfc-mystery', label: '1. Why Unknown NBFCs Show on CIBIL' },
    { id: 'legal-framework', label: '2. RBI Digital Lending & CICRA Law' },
    { id: 'score-impact', label: '3. How Zero-Balance BNPL Hurts Score' },
    { id: 'partner-map', label: '4. BNPL Apps & Shadow NBFC Partners' },
    { id: 'step-by-step-sop', label: '5. Step-by-Step BNPL Closure SOP' },
    { id: 'closed-vs-settled', label: '6. Closed vs Settled CIBIL Status' },
    { id: 'compensation-math', label: '7. RBI Rs 100/Day Delay Penalty' },
    { id: 'escalation-matrix', label: '8. 3-Tier Escalation Matrix' },
    { id: 'procedural-timeline', label: '9. Closure to CIBIL Fix Timeline' },
    { id: 'special-scenarios', label: '10. Unconsented BNPL & Co-Lending' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
    {
      q: 'Why is an unknown NBFC personal loan showing on my CIBIL report?',
      a: 'When you activate a Buy Now, Pay Later (BNPL) option on shopping or food apps, an RBI-licensed NBFC or bank funds that credit line in the background. Under RBI Digital Lending Guidelines (RBI/2022-23/111), the NBFC must report every BNPL account to CIBIL as a personal or consumer loan.'
    },
    {
      q: 'Does deleting the shopping or Pay Later app close the NBFC loan on CIBIL?',
      a: 'No. Deleting an app or pausing your Pay Later limit only stops app notifications. The underlying NBFC loan account remains active on your CIBIL report until you clear all dues, request permanent credit line closure, and receive a No Objection Certificate (NOC).'
    },
    {
      q: 'Does an active BNPL account with zero balance hurt my CIBIL score or loan approval?',
      a: 'Yes, it can hurt your loan eligibility. Even with a zero balance, an open BNPL entry counts as an active unsecured personal loan. Banks reviewing home or car loan applications may flag multiple open unsecured tradelines as higher credit risk.'
    },
    {
      q: 'How quickly must an NBFC update my CIBIL report after BNPL closure?',
      a: 'Under the RBI (NBFC - Credit Information Reporting) Amendment Directions, 2025 (effective July 1, 2026), NBFCs must report incremental updates including closed accounts four times a month (9th, 16th, 23rd, and month-end) within 4 calendar days.'
    },
    {
      q: 'Can I claim Rs 100 per day if the NBFC or CIBIL delays closing my BNPL entry?',
      a: 'Yes. Under RBI circular RBI/2023-24/72, if your formal CIBIL dispute or closure update request is not resolved within 30 calendar days (21 days for the NBFC and 9 days for CIBIL), you are entitled to Rs 100 per day compensation.'
    },
    {
      q: 'What if a BNPL shadow NBFC account was opened without my consent?',
      a: 'Under RBI Digital Lending Guidelines, no lender can open a credit line without explicit borrower consent and a Key Facts Statement (KFS). You can demand proof of consent and KFS, and file a dispute under Section 21(3) of CICRA, 2005 for full deletion.'
    },
    {
      q: 'How do I close Amazon Pay Later or Flipkart Pay Later on CIBIL permanently?',
      a: 'Pay your balance to zero, including any unbilled EMIs. Contact the app support to request permanent closure of the Pay Later credit line, then email the backend NBFC or bank (such as Axio or IDFC First Bank) to issue an NOC and mark the tradeline Closed.'
    },
    {
      q: 'Why are two different NBFCs listed on CIBIL for a single Pay Later app?',
      a: 'Many BNPL apps split your credit limit between two co-lending partners, such as a bank and a shadow NBFC. When closing the account, you must obtain an NOC and verify Closed status for every partner entry on your CIBIL report.'
    },
    {
      q: 'What is the difference between Closed and Settled status for a BNPL loan?',
      a: 'Closed means you paid 100% of your valid dues and the lender ended the account cleanly. Settled means you paid a reduced compromise amount. A Settled tag stays on your CIBIL report for up to seven years and lowers your credit score.'
    },
    {
      q: 'How does CredSettle help remove or close shadow NBFC BNPL entries on CIBIL?',
      a: 'CredSettle audits your CIBIL report to identify hidden BNPL partner NBFCs, drafts statutory closure and CICRA Section 21(3) dispute notices, secures formal NOCs, escalates overdue updates to the RBI Ombudsman, and claims Rs 100/day delay compensation.'
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
            <span>RBI Digital Lending &amp; CICRA Section 21 Compliance</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Close Unknown NBFC Loan Accounts From Pay Later Apps
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            Discover why unfamiliar shadow NBFC loans from Buy Now, Pay Later (BNPL) apps appear on your CIBIL report. Follow RBI rules to close active accounts, secure your NOC, and claim ₹100 per day for delayed credit bureau updates.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Close Shadow BNPL Entries Now</span>
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
                  Protected under RBI Digital Lending Guidelines, CICRA 2005, and RBI/2023-24/72.
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
                <span>EXECUTIVE BRIEF: BNPL SHADOW NBFC CIBIL CLOSURE</span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Why Unknown NBFCs Appear:</strong> Shopping and payment apps cannot lend on their own. They partner with RBI-licensed NBFCs that report every Pay Later limit to CIBIL as a personal loan.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">App Deletion Does Not Close Loans:</strong> Removing an app or pausing Pay Later keeps the underlying NBFC loan active on CIBIL. You must request permanent closure and get a formal NOC.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Weekly NBFC Reporting Mandate:</strong> Under RBI rules effective July 1, 2026, NBFCs must report closed accounts four times a month (9th, 16th, 23rd, and month-end) within 4 days.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">₹100 Per Day Delay Penalty:</strong> Under RBI Circular RBI/2023-24/72, if a CIBIL dispute remains unresolved past 30 calendar days, the NBFC or bureau must pay ₹100 per day.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Unconsented Account Deletion:</strong> If a BNPL loan was opened without your consent or a Key Facts Statement (KFS), you can demand complete removal under CICRA Section 21(3).
                  </span>
                </li>
              </ul>
            </div>

            {/* SECTION 1: Why Unknown Shadow NBFC Loans Appear on Your CIBIL */}
            <section id="shadow-nbfc-mystery" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <AlertTriangle className="w-4 h-4 text-[#1886ff]" />
                <span>Understanding Hidden Digital Credit Lines</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. Why Unknown Shadow NBFC Loans Appear on Your CIBIL
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Many borrowers check their CIBIL report before applying for a home loan and get a shock. They see active personal loans from unfamiliar NBFCs they never visited. In most cases, these entries come from Buy Now, Pay Later (BNPL) or Pay Later apps.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Shopping websites, food delivery apps, and payment wallets are not licensed banks. Under Indian banking law, they cannot lend money from their own accounts. Instead, they act as Lending Service Providers (LSPs) for RBI-registered banks or NBFCs.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When you tap to activate Pay Later at checkout, the backend NBFC creates a formal loan account in your name. Because you only see the shopping brand on your screen, people call the hidden lender a shadow NBFC.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Even if you used the limit only once for ₹500 and repaid it on time, the credit line stays open. The NBFC reports that open credit line to CIBIL, Experian, Equifax, and CRIF High Mark every cycle.
              </p>
            </section>

            {/* SECTION 2: Legal Framework: RBI Digital Lending & CICRA Rules */}
            <section id="legal-framework" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Enactments &amp; Central Bank Mandates</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. Legal Framework: RBI Digital Lending &amp; CICRA Rules
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Several strict Indian laws govern how BNPL apps and shadow NBFCs report and close your loan data. Knowing these exact rules gives you strong leverage when an NBFC refuses to close your entry.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-[#1886ff] font-bold text-sm">
                    <Landmark className="w-4 h-4" />
                    <span>RBI Digital Lending Guidelines (2022)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Circular RBI/2022-23/111 (Paragraphs 14.1 and 14.2) forces all NBFCs and banks to report every digital or BNPL loan to credit bureaus, regardless of amount or tenure. Lenders must also give you a Key Facts Statement (KFS) naming the exact NBFC.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                    <Scale className="w-4 h-4" />
                    <span>CICRA 2005: Section 21(3)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Section 21(3) of the Credit Information Companies (Regulation) Act, 2005 gives you a legal right to correct or update your credit report. Once you request a fix, the lender and CIBIL must update your record within 30 days.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <Clock className="w-4 h-4" />
                    <span>RBI Weekly Reporting Rule (2026)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under the RBI (NBFC Credit Information Reporting) Amendment Directions, 2025 (effective July 1, 2026), NBFCs must report closed accounts four times a month. They must submit data for the 9th, 16th, 23rd, and month-end within 4 days.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-amber-700 font-bold text-sm">
                    <ShieldCheck className="w-4 h-4" />
                    <span>DPDP Act 2023 &amp; Consent Rules</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under the Digital Personal Data Protection Act, 2023 and RBI digital norms, you can withdraw data consent after closing a loan. Apps cannot keep sharing your KYC data with partner NBFCs once the account is closed.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 3: How Active Zero-Balance BNPL Entries Hurt Your Score */}
            <section id="score-impact" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                <span>Credit Underwriting &amp; Score Risk</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. How Active Zero-Balance BNPL Entries Hurt Your Score
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Many users assume that a ₹0 balance Pay Later account is harmless. In reality, leaving multiple shadow NBFC tradelines open can hurt your credit profile in four ways.
              </p>
              <ul className="space-y-2.5 text-sm text-slate-700 leading-relaxed list-disc pl-5">
                <li>
                  <strong className="text-slate-900">Too Many Unsecured Loans Flag:</strong> Credit bureaus classify BNPL limits as unsecured personal or consumer loans. Having three or four active BNPL accounts makes banks think you rely heavily on short-term credit.
                </li>
                <li>
                  <strong className="text-slate-900">Home &amp; Car Loan Rejections:</strong> Mortgage underwriters count every active BNPL sanctioned limit toward your total debt exposure. This can reduce your eligible home loan amount.
                </li>
                <li>
                  <strong className="text-slate-900">Lower Average Credit Age:</strong> Opening quick checkout Pay Later lines lowers the average age of your credit accounts, which reduces your CIBIL score.
                </li>
                <li>
                  <strong className="text-slate-900">Accidental Late Fees &amp; DPD Hits:</strong> Some NBFCs charge hidden annual renewal or convenience fees on dormant BNPL lines. Missing a ₹50 fee can trigger a 30-day past due (DPD) mark and drop your score by 50 to 80 points.
                </li>
              </ul>
            </section>

            {/* SECTION 4: App Partner Map: Common BNPL Apps & Shadow NBFCs */}
            <section id="partner-map" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff]" />
                <span>Identifying Your Underlying Lender</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. App Partner Map: Common BNPL Apps &amp; Shadow NBFCs
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                CIBIL does not show the consumer app name on your credit report. Instead, it displays the legal name of the RBI-registered bank or NBFC. Use this table to match common Pay Later apps with their typical lending partners.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white shadow-xs">
                <div className="bg-slate-900 text-white p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-[#1886ff]" />
                    <span className="font-bold text-sm">BNPL App to CIBIL NBFC Tradeline Mapping</span>
                  </div>
                  <span className="text-xs text-blue-300 font-mono">Verify exact name on your CIR</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                    <thead>
                      <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-semibold">
                        <th className="p-3">Consumer App / Brand</th>
                        <th className="p-3">Common CIBIL Lender Name</th>
                        <th className="p-3">Typical CIBIL Loan Type</th>
                        <th className="p-3">Where to Request Closure</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200/80 text-slate-600">
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Amazon Pay Later</td>
                        <td className="p-3">Axio (CapFloat) / IDFC First Bank</td>
                        <td className="p-3">Personal Loan / Consumer Loan</td>
                        <td className="p-3">Amazon Support + Partner NBFC Email</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Flipkart Pay Later</td>
                        <td className="p-3">IDFC First Bank / Axis Bank</td>
                        <td className="p-3">Personal Loan / Credit Line</td>
                        <td className="p-3">Flipkart Help Center + Bank GRO</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">LazyPay</td>
                        <td className="p-3">PayU Finance India / Partner NBFCs</td>
                        <td className="p-3">Personal Loan (Short Tenor)</td>
                        <td className="p-3">wecare@lazypay.in + PayU Finance</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Paytm / Ola Postpaid</td>
                        <td className="p-3">Aditya Birla Finance / SMFG India</td>
                        <td className="p-3">Personal Loan / Consumer Loan</td>
                        <td className="p-3">App Help Desk + Partner NBFC Nodal</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Simpl / Checkout BNPL</td>
                        <td className="p-3">Partner NBFCs (Check KFS / CIR)</td>
                        <td className="p-3">Consumer Loan / Credit Facility</td>
                        <td className="p-3">Simpl Help Desk + Underlying NBFC</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <p className="text-xs text-slate-500 italic">
                Note: Lending partnerships change over time. Always check your Key Facts Statement (KFS) or downloaded CIBIL report to confirm the exact NBFC name and Loan Account Number (LAN).
              </p>
            </section>

            {/* SECTION 5: Step-by-Step SOP: Closing BNPL & NBFC Accounts */}
            <section id="step-by-step-sop" className="scroll-target space-y-6">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Standard Operating Procedure</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. Step-by-Step SOP: Closing BNPL &amp; NBFC Accounts
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Simply uninstalling a Pay Later app will never remove the loan from your credit report. Follow these six steps to permanently close your shadow NBFC entries and clean your CIBIL file.
              </p>

              <div className="space-y-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">1</span>
                    Stage 1: Download Your Full CIBIL Report &amp; Match LANs
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Pull your latest Credit Information Report (CIR) from CIBIL. Note every unfamiliar NBFC name, Loan Account Number (LAN), sanctioned amount, and opening date. Match the opening date with when you signed up for a shopping or Pay Later app.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">2</span>
                    Stage 2: Clear All Billed &amp; Unbilled EMIs to Zero
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Log in to the BNPL app and pay off any remaining balance, pending EMIs, or late fees. Take a screenshot showing a ₹0.00 outstanding balance and save your payment confirmation receipts.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">3</span>
                    Stage 3: Demand Permanent Credit Line Closure (Not Pause)
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Contact the app support via email or chat and write clearly: &ldquo;I request permanent closure of my Pay Later credit line and termination of the underlying NBFC loan account.&rdquo; Never accept a temporary &ldquo;freeze&rdquo; or &ldquo;pause.&rdquo;
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">4</span>
                    Stage 4: Email the Shadow NBFC Directly for Your NOC
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Write to the customer care or Grievance Redressal Officer (GRO) of the actual NBFC listed on CIBIL. Attach your ticket number and zero-balance screenshot, and demand an official No Objection Certificate (NOC) or Loan Closure Letter.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">5</span>
                    Stage 5: Wait for the Weekly CIBIL Reporting Cycle
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Under the RBI 2026 reporting schedule, NBFCs report closed accounts on the 9th, 16th, 23rd, and last day of the month. Check your CIBIL report 15 to 20 days after receiving your NOC to confirm the status changed to Closed.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">6</span>
                    Stage 6: File a CICRA Section 21(3) CIBIL Dispute If Still Active
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If the entry still shows Active after 20 days, log in to the CIBIL Dispute Center. Raise a dispute for &ldquo;Account Closed,&rdquo; upload your NOC, and provide your bank account or UPI details to trigger the 30-day RBI compensation clock.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 6: Closed vs Settled: Protecting Your CIBIL Status */}
            <section id="closed-vs-settled" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <CheckCircle2 className="w-4 h-4 text-[#1886ff]" />
                <span>Protecting Your Credit History</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. Closed vs Settled: Protecting Your CIBIL Status
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When you close a BNPL account, the exact status word reported to CIBIL matters enormously. If you have disputed late fees or overdue amounts, be careful not to accept a compromise settlement by mistake.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">CIBIL Account Status</th>
                      <th className="p-3">What It Means</th>
                      <th className="p-3">Impact on Loan Approval</th>
                      <th className="p-3">When You Should Accept It</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-emerald-700">Closed</td>
                      <td className="p-3">100% of valid dues paid; zero balance.</td>
                      <td className="p-3 text-emerald-700 font-semibold">Positive / Neutral</td>
                      <td className="p-3">Always insist on Closed after full repayment.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-amber-700">Settled</td>
                      <td className="p-3">Lender accepted less than full billed dues.</td>
                      <td className="p-3 text-rose-600 font-semibold">Negative (Stays 7 Years)</td>
                      <td className="p-3">Only when facing genuine financial hardship on large debt.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-blue-700">Deleted / Suppressed</td>
                      <td className="p-3">Tradeline completely erased from CIBIL.</td>
                      <td className="p-3 text-blue-700 font-semibold">Full Score Restoration</td>
                      <td className="p-3">When BNPL was opened without consent or via fraud.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If an NBFC wrongly marks your fully paid BNPL account as Settled, you can file a correction request. Learn more in our{' '}
                <Link href="/dispute-wrong-settled-status-cibil" className="text-[#1886ff] font-semibold hover:underline">
                  guide on disputing a wrong Settled status on CIBIL
                </Link>.
              </p>
            </section>

            {/* SECTION 7: RBI Rs 100/Day Penalty for Delayed CIBIL Updates */}
            <section id="compensation-math" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <DollarSign className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Penalty Formulas &amp; Accrual Ledger</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. RBI Rs 100/Day Penalty for Delayed CIBIL Updates
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under RBI Circular RBI/2023-24/72 (issued October 26, 2023), you have a strong financial remedy if an NBFC or CIBIL ignores your closure dispute. Every complaint regarding inaccurate or unclosed credit data must be resolved within 30 calendar days.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The 30-day window gives the NBFC 21 calendar days to verify your closure and send corrected data. CIBIL then gets 9 calendar days to update your report. If the delay crosses 30 days, you earn ₹100 per calendar day until the fix is complete.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white shadow-xs">
                <div className="bg-slate-900 text-white p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-[#1886ff]" />
                    <span className="font-bold text-sm">CIBIL Dispute Delay Compensation Ledger</span>
                  </div>
                  <span className="text-xs text-blue-300 font-mono">₹100 Daily Accrual (RBI/2023-24/72)</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80">
                    <thead>
                      <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-semibold">
                        <th className="p-3">Days Since Dispute Filed</th>
                        <th className="p-3">Delay Days Beyond Day 30</th>
                        <th className="p-3">Regulatory Status</th>
                        <th className="p-3 text-right">Compensation Owed</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200/80 text-slate-600">
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Day 1 to Day 30</td>
                        <td className="p-3 font-mono">0 Days</td>
                        <td className="p-3 text-emerald-600 font-semibold">21 Days NBFC + 9 Days CIBIL</td>
                        <td className="p-3 text-right font-bold text-slate-500">₹0 (Statutory Window)</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Day 45</td>
                        <td className="p-3 font-mono text-amber-600 font-bold">15 Days Delay</td>
                        <td className="p-3 text-amber-600 font-semibold">Statutory Breach Active</td>
                        <td className="p-3 text-right font-bold text-amber-700 font-mono">₹1,500</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Day 60</td>
                        <td className="p-3 font-mono text-rose-600 font-bold">30 Days Delay</td>
                        <td className="p-3 text-rose-600 font-semibold">RBI Ombudsman Eligible</td>
                        <td className="p-3 text-right font-bold text-rose-700 font-mono">₹3,000</td>
                      </tr>
                      <tr className="bg-blue-50/70 font-bold text-slate-900">
                        <td className="p-3">Day 90</td>
                        <td className="p-3 font-mono text-[#1886ff]">60 Days Delay</td>
                        <td className="p-3 text-[#1886ff]">Direct Bank Credit Within 5 Days</td>
                        <td className="p-3 text-right text-[#1886ff] text-sm sm:text-base font-mono">₹6,000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Once resolved, the responsible NBFC or bureau must credit this compensation to your bank account or UPI ID within 5 working days. Read our detailed{' '}
                <Link href="/rbi-100-per-day-compensation-for-delayed-cibil-report-update" className="text-[#1886ff] font-semibold hover:underline">
                  RBI ₹100 per day CIBIL compensation guide
                </Link>{' '}
                for filing tips.
              </p>
            </section>

            {/* SECTION 8: 3-Tier Escalation Matrix: NBFC GRO to RBI Ombudsman */}
            <section id="escalation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Escalation Protocol</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. 3-Tier Escalation Matrix: NBFC GRO to RBI Ombudsman
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If customer care at the Pay Later app keeps sending automated replies, stop chatting with front-line bots. Escalate directly to the RBI-regulated NBFC using this three-tier legal matrix.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Escalation Tier</th>
                      <th className="p-3">Designated Authority</th>
                      <th className="p-3">Turnaround Time</th>
                      <th className="p-3">Action &amp; Legal Outcome</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 1: NBFC GRO</td>
                      <td className="p-3">NBFC Grievance Redressal Officer</td>
                      <td className="p-3 font-mono">7 to 14 Days</td>
                      <td className="p-3">Closes the loan ledger, issues NOC, and queues CIBIL update.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 2: NBFC PNO</td>
                      <td className="p-3">Principal Nodal Officer (Head Office)</td>
                      <td className="p-3 font-mono">15 to 21 Days</td>
                      <td className="p-3">Audits unconsented loans, removes overdue tags, and clears CIBIL batch.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Level 3: RBI Ombudsman</td>
                      <td className="p-3">Reserve Bank Integrated Ombudsman</td>
                      <td className="p-3 font-mono">30 Days Post-Filing</td>
                      <td className="p-3">Issues binding order on cms.rbi.org.in to close account and pay ₹100/day.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 9: Procedural Timeline: Closure Request to CIBIL Fix */}
            <section id="procedural-timeline" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Calendar className="w-4 h-4 text-[#1886ff]" />
                <span>Procedural Milestones</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Procedural Timeline: Closure Request to CIBIL Fix
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Tracking each milestone helps you spot lender delays early and protect your loan application schedule.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Milestone Window</th>
                      <th className="p-3">Phase</th>
                      <th className="p-3">Lender / Bureau Duty</th>
                      <th className="p-3">Your Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 0</td>
                      <td className="p-3 font-mono text-[11px]">Zero Balance &amp; Request</td>
                      <td className="p-3">Logs permanent closure request and stops limit reuse.</td>
                      <td className="p-3">Pay dues to ₹0 and email both app and partner NBFC.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 1 to 7</td>
                      <td className="p-3 font-mono text-[11px]">NOC Issuance</td>
                      <td className="p-3">Generates official Loan Closure Letter / NOC.</td>
                      <td className="p-3">Verify your name, LAN, and zero balance on the NOC.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 8 to 20</td>
                      <td className="p-3 font-mono text-[11px]">Weekly Reporting Cycle</td>
                      <td className="p-3">NBFC submits closure in next 9th/16th/23rd/month-end file.</td>
                      <td className="p-3">Refresh your CIBIL report to verify Closed status.</td>
                    </tr>
                    <tr className="bg-amber-50/50">
                      <td className="p-3 font-bold text-slate-900">Day 21</td>
                      <td className="p-3 font-mono text-[11px] text-amber-700 font-bold">Dispute Trigger</td>
                      <td className="p-3">Statutory 30-day compensation clock starts upon dispute.</td>
                      <td className="p-3 font-bold text-amber-800">File CIBIL dispute + NBFC GRO complaint with NOC &amp; UPI ID.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Day 51+</td>
                      <td className="p-3 font-mono text-[11px] text-rose-700 font-bold">Ombudsman &amp; Penalty</td>
                      <td className="p-3">₹100/day penalty accrues if dispute passes 30 days.</td>
                      <td className="p-3">File complaint on cms.rbi.org.in for closure and payout.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: Special Cases: Unconsented BNPL & Co-Lending Splits */}
            <section id="special-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>Specialized Real-World Cases</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                10. Special Cases: Unconsented BNPL &amp; Co-Lending Splits
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Borrowers often run into tricky edge cases with digital Pay Later apps. Here is how RBI rules protect you in four common scenarios.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-[#1886ff]" />
                    Pre-Ticked Checkout Boxes (No Consent)
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Some apps used pre-ticked boxes to open BNPL limits without clear consent. Under RBI Digital Lending Guidelines, you can demand the signed KFS and OTP log. If the NBFC lacks proof, demand full deletion from CIBIL.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-emerald-600" />
                    Co-Lending Dual NBFC Entries
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    One Pay Later app may split your ₹20,000 limit across two NBFCs (e.g., 80:20). This creates two separate CIBIL entries. Always verify that both partner NBFCs issue separate NOCs and close both tradelines.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Lock className="w-4 h-4 text-indigo-600" />
                    Defunct or RBI-Banned NBFC Partners
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If the RBI restricts or cancels an NBFC&apos;s license, your closed BNPL loan may stay stuck as Active on CIBIL. You can file a direct dispute on CIBIL with your payment receipts and escalate to the RBI Ombudsman.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-amber-600" />
                    Urgent Home Loan Sanction Blocking
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If a bank pauses your home loan because of active BNPL entries, share your official NBFC NOCs and closure emails with the bank underwriter. Most banks accept formal NOCs while CIBIL updates in the background.
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
                Frequently Asked Questions: BNPL Shadow NBFC Closure
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Clear, verified answers on closing unknown BNPL shadow NBFC loan accounts, getting your NOC, and claiming RBI delay penalties.
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
                  <strong>RBI Guidelines on Digital Lending:</strong> RBI/2022-23/111, DOR.CRE.REC.66/21.07.001/2022-23 (Paragraphs 14.1 &amp; 14.2 on Mandatory CIC Reporting of BNPL &amp; Deferred Credit).
                </li>
                <li>
                  <strong>RBI Compensation Framework for Credit Information:</strong> RBI/2023-24/72, DoR.FIN.REC.48/20.16.003/2023-24 (₹100 Per Day Delay Compensation Beyond 30 Calendar Days).
                </li>
                <li>
                  <strong>RBI NBFC Credit Information Reporting Directions:</strong> Amendment Directions, 2025 (Effective July 1, 2026: Four-Times-a-Month Reporting on 9th, 16th, 23rd, and Month-End).
                </li>
                <li>
                  <strong>Credit Information Companies (Regulation) Act, 2005 (CICRA):</strong> Section 21(3) (Borrower Right to Request Credit Report Correction Within 30 Days).
                </li>
                <li>
                  <strong>Reserve Bank - Integrated Ombudsman Scheme, 2021 (RB-IOS):</strong> Grievance Redressal Against Regulated Entities and Credit Information Companies.
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
                  <a href="https://cms.rbi.org.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>RBI Integrated Ombudsman Portal</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.cibil.com" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>TransUnion CIBIL Dispute Portal</span>
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

              {/* Internal Topic Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Explore Related CredSettle Guides:</span>
                <div className="flex flex-wrap gap-2">
                  <Link href="/cibil-dispute-wrong-overdue-entry-filing-process" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    CIBIL Dispute Filing Process
                  </Link>
                  <Link href="/rbi-100-per-day-compensation-for-delayed-cibil-report-update" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    RBI ₹100/Day CIBIL Penalty
                  </Link>
                  <Link href="/dispute-wrong-settled-status-cibil" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Dispute Wrong Settled Status
                  </Link>
                  <Link href="/remove-settled-status-from-cibil" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Remove Settled Status From CIBIL
                  </Link>
                  <Link href="/get-noc-after-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Get Loan Closure NOC
                  </Link>
                  <Link href="/check-free-cibil-score" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Check Free CIBIL Score
                  </Link>
                  <Link href="/how-to-improve-cibil-score" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Improve CIBIL Score
                  </Link>
                  <Link href="/services/nbfc-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    NBFC Loan Settlement
                  </Link>
                  <Link href="/services/app-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    App Loan Settlement
                  </Link>
                  <Link href="/services/credit-score-builder" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Credit Score Builder
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
                Specialist in digital lending compliance, NBFC dispute resolution, CIBIL rectification under CICRA, and RBI Ombudsman representation for Indian borrowers.
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
                  CIBIL CLOSURE SUPPORT
                </span>
                <p className="text-lg md:text-xl font-bold text-white leading-snug">
                  Stuck With Unknown BNPL Loans on CIBIL?
                </p>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our legal team traces hidden shadow NBFC partners, secures your official NOC, closes active CIBIL tradelines, and claims ₹100 per day for delayed bureau updates.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Fix My CIBIL Report Now
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
                  <span><strong>Shadow NBFC Tracing:</strong> Match every hidden BNPL loan to its lender.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Official NOC Recovery:</strong> Secure valid closure letters from NBFCs.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>₹100/Day Penalty Claims:</strong> Enforce RBI/2023-24/72 delay payouts.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Ombudsman Escalation:</strong> End-to-end RBI CMS portal filing.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">Related CIBIL &amp; NBFC Guides</p>
              <div className="space-y-2.5">
                <Link
                  href="/rbi-100-per-day-compensation-for-delayed-cibil-report-update"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    RBI ₹100/Day CIBIL Update Compensation
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Claim 30-day delay penalty &rarr;</span>
                </Link>

                <Link
                  href="/cibil-dispute-wrong-overdue-entry-filing-process"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    CIBIL Wrong Overdue Dispute Process
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Step-by-step CICRA filing &rarr;</span>
                </Link>

                <Link
                  href="/get-noc-after-loan-settlement"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Get NOC After Loan Closure
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Official bank closure steps &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
