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

export default function VernacularLanguageLoanContractClient() {
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
    { id: 'statutory-framework', label: '1. RBI Vernacular Language Rules' },
    { id: 'mandatory-documents', label: '2. Papers Required in Local Language' },
    { id: 'compliance-matrix', label: '3. Valid Rules vs Unfair Traps' },
    { id: 'vernacular-declaration', label: '4. Fake Declarations & Click-Wrap' },
    { id: 'visual-blueprint', label: '5. Visual Blueprint Infographic' },
    { id: 'step-by-step-sop', label: '6. Dispute an Unread Loan SOP' },
    { id: 'borrower-rights', label: '7. Contract Act & Court Rulings' },
    { id: 'escalation-matrix', label: '8. 3-Tier Escalation Matrix' },
    { id: 'procedural-timeline', label: '9. Dispute to Fee Waiver Timeline' },
    { id: 'specialized-scenarios', label: '10. Loan Apps, DSAs & Co-Signers' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
    {
      q: 'What is the RBI vernacular language rule for personal loan contracts?',
      a: 'Under the RBI Fair Practices Code and KFS rules, banks and NBFCs must share loan forms, sanction letters, and Key Facts Statements in a local language the borrower understands. They must also give a free copy of the signed loan contract with all annexures.'
    },
    {
      q: 'Does the 2024 RBI Key Facts Statement rule require local languages?',
      a: 'Yes. Under RBI Circular DOR.STR.REC.13 dated April 15, 2024, all banks and NBFCs must give a clear Key Facts Statement in a language the borrower understands before loan signing. Any fee not shown in that KFS cannot be charged later.'
    },
    {
      q: 'Is a personal loan contract valid if I do not read English well?',
      a: 'A loan contract does not vanish automatically just because it is in English. You still have to return the real principal you got. However, hidden fees, surprise penal charges, or mis-sold add-ons can be struck down if the bank failed to explain them in your language.'
    },
    {
      q: 'What is a vernacular declaration in a personal loan file?',
      a: 'A vernacular declaration is a form stating that someone read and explained the English loan terms to you in your local language. If an agent took your blank signature or ticked a box without explaining the terms, that declaration can be challenged as invalid.'
    },
    {
      q: 'Do loan apps have to follow RBI local language rules too?',
      a: 'Yes. Under the RBI Digital Lending Directions 2025, every loan app and NBFC must show the KFS, APR, cooling-off window, and loan summary in a language the borrower understands. Simply using a fast English OTP screen breaks RBI transparency rules.'
    },
    {
      q: 'Can a bank hike my interest rate or fees using an English-only notice?',
      a: 'No. Under the RBI Fair Practices Code, lenders must send prior notice of any change in interest rate, fees, or EMI terms in the vernacular language or a language the borrower knows. Rate hikes can only apply going forward, never to past months.'
    },
    {
      q: 'Can I use the non est factum defense for a mis-sold loan contract?',
      a: 'Yes, in strict fraud cases. The Supreme Court ruled in Ramathal v. K. Rajamani (2023) that non est factum protects people who cannot read the contract language and were tricked about the core nature of the paper they signed. You must show clear proof of the trick.'
    },
    {
      q: 'How can Consumer Court help if a bank hid charges in English fine print?',
      a: 'Under Section 2(46) of the Consumer Protection Act, 2019, one-sided loan terms that harm the borrower are unfair contracts. Consumer commissions on the e-Jagriti portal can cancel hidden charges, award damages for poor service, and stop unfair claims.'
    },
    {
      q: 'Where do I complain if an NBFC refuses to give my loan contract in my language?',
      a: 'First write to the lender Grievance Redressal Officer and Principal Nodal Officer asking for your translated KFS and signed agreement. If they fail to fix it within 30 days, file a free online complaint with the RBI Integrated Ombudsman at cms.rbi.org.in.'
    },
    {
      q: 'How does CredSettle help borrowers stuck in unfair English loan contracts?',
      a: 'CredSettle checks your loan agreement, KFS, and vernacular declaration for RBI Fair Practices breaks. Our legal team sends formal notices to reverse hidden charges, files RBI Ombudsman complaints, negotiates fair OTS settlements, and protects your CIBIL score.'
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
            <span>RBI Fair Practices Code &amp; KFS Language Mandate</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            RBI Mandate on Language Comprehension in Loan Agreements
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            Did a bank or loan app make you sign English fine print you could not read? Learn how the RBI vernacular language rule lets you dispute hidden fees, fight unfair loan terms, and settle debt safely.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Audit My Loan Agreement</span>
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
                  <span>Borrower Consent Shield</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Backed by RBI KFS Rules 2024, Fair Practices Code, and the Indian Contract Act, 1872.
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
                <span>EXECUTIVE BRIEF: RBI VERNACULAR LANGUAGE LOAN RULES</span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Right to Your Own Language:</strong> Under the RBI Fair Practices Code, banks and NBFCs must share loan forms, sanction letters, and term changes in a local language you understand.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Mandatory Local Language KFS:</strong> Under RBI Circular DOR.STR.REC.13 (2024), lenders must give a clear Key Facts Statement before signing. Fees left out of this sheet cannot be charged later.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Penal Charges Must Be in Bold:</strong> Lenders cannot hide late fees in tiny English print. RBI rules force lenders to print late fee terms in bold in the contract and KFS.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Blank Declarations Fail in Court:</strong> If an agent took your thumbprint or OTP without reading out the loan terms, Indian law lets you challenge those unfair clauses.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Free Ombudsman &amp; Court Relief:</strong> You can ask the RBI Integrated Ombudsman or Consumer Court to cancel hidden charges and stop unfair recovery calls.
                  </span>
                </li>
              </ul>
            </div>

            {/* SECTION 1: Statutory Framework: RBI Vernacular Language Rules */}
            <section id="statutory-framework" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Central Bank Mandates &amp; Fair Lending Law</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. Statutory Framework: RBI Vernacular Language Rules
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Millions of people in India take personal loans every year. Yet most banks and NBFCs hand out thick 20-page loan contracts in legal English. Many borrowers cannot read this dense text and sign in good faith.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                To stop this trap, the Reserve Bank of India (RBI) made strict language rules. These rules apply to all commercial banks, small finance banks, cooperative banks, and NBFCs in India. They also cover digital loan apps.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                First, the RBI Fair Practices Code (FPC) sets the base rule. Under the Master Direction for NBFCs (DoR.FIN.REC.No.45, October 2023) and bank FPC circulars, lenders must speak and write in a local language the borrower understands. This is called the vernacular language rule.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Second, the RBI Charter of Customer Rights gives you the Right to Transparency, Fair and Honest Dealing. This means a lender must explain loan rates, fees, and risks in plain words before you sign.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Third, RBI Circular DOR.STR.REC.13 (dated April 15, 2024) made the Key Facts Statement (KFS) mandatory for all retail personal loans. A KFS is a short summary sheet of your true loan cost. The lender must give you this KFS in a language you can read before you sign the deal.
              </p>
            </section>

            {/* SECTION 2: Which Personal Loan Papers Must Be in Local Language */}
            <section id="mandatory-documents" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Mandatory Loan Papers &amp; Notice Scope</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. Which Personal Loan Papers Must Be in Local Language
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The RBI language rule does not stop at one single page. It covers every key paper you get before, during, and after your personal loan is paid out. Here are the five core papers you can demand in your local language:
              </p>
              <ul className="space-y-2.5 text-sm md:text-base text-slate-700 leading-relaxed list-disc pl-5">
                <li>
                  <strong className="text-slate-900">Loan Application Form:</strong> The form must list key fees and terms in your language so you can compare offers from other banks.
                </li>
                <li>
                  <strong className="text-slate-900">Key Facts Statement (KFS):</strong> This sheet must show your exact loan sum, Annual Percentage Rate (APR), EMI count, and all extra fees in plain local text. Under RBI rules, the KFS must stay valid for at least 3 working days for loans lasting 7 days or more.
                </li>
                <li>
                  <strong className="text-slate-900">Sanction Letter:</strong> The lender must state the approved amount, yearly interest rate, and late payment terms in writing in a language you know. It must keep signed proof that you accepted these terms.
                </li>
                <li>
                  <strong className="text-slate-900">Signed Loan Agreement &amp; Annexures:</strong> Banks and NBFCs must give you a full copy of the signed loan contract and all attached sheets at loan payout. Withholding this copy is an unfair practice under RBI rules.
                </li>
                <li>
                  <strong className="text-slate-900">Notice of Any Term Change:</strong> If the lender wants to change interest rates, service fees, or EMI dates later, it must send advance notice in your vernacular language. Changes can only apply to future months.
                </li>
              </ul>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Also remember the RBI Penal Charges rule (DoR.MCS.REC.28, August 2023). Lenders cannot mix late penalties into your interest rate. They must print the exact penal fee clearly in bold inside your KFS and loan contract.
              </p>
            </section>

            {/* SECTION 3: Compliance Matrix: Valid Rules vs Unfair Traps */}
            <section id="compliance-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                <span>RBI Compliance Audit &amp; Violation Matrix</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Compliance Matrix: Valid Rules vs Unfair Traps
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Many lenders pretend to follow RBI rules while keeping borrowers in the dark. Use the table below to check if your bank or NBFC broke the law during your personal loan sign-up.
              </p>

              {/* Compliance Comparison Card */}
              <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white shadow-xs">
                <div className="bg-slate-900 text-white p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Scale className="w-4 h-4 text-[#1886ff]" />
                    <span className="font-bold text-sm">RBI Vernacular Compliance Audit Table</span>
                  </div>
                  <span className="text-xs text-blue-300 font-mono">FPC &amp; KFS 2024 Check</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80">
                    <thead>
                      <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-semibold">
                        <th className="p-3">Loan Stage</th>
                        <th className="p-3">What RBI Law Requires</th>
                        <th className="p-3">Common Lender Trap</th>
                        <th className="p-3">Your Legal Remedy</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200/80 text-slate-600">
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Before Signing (KFS)</td>
                        <td className="p-3 text-emerald-700 font-medium">Local language KFS with true APR and 3-day review time.</td>
                        <td className="p-3 text-rose-700">No KFS given, or English-only PDF sent after payout.</td>
                        <td className="p-3 font-semibold text-slate-800">Demand refund of all hidden charges via RBI CMS.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Loan Signing</td>
                        <td className="p-3 text-emerald-700 font-medium">Full terms read and explained in your native language.</td>
                        <td className="p-3 text-rose-700">Agent rushes signatures on blank English pages.</td>
                        <td className="p-3 font-semibold text-slate-800">Challenge invalid consent under Contract Act.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Penal Charges</td>
                        <td className="p-3 text-emerald-700 font-medium">Printed in bold in KFS and never added to interest.</td>
                        <td className="p-3 text-rose-700">Buried in page 18 English fine print at 36% per year.</td>
                        <td className="p-3 font-semibold text-slate-800">Seek full waiver of unlawful penal fees.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">App Onboarding</td>
                        <td className="p-3 text-emerald-700 font-medium">Local language buttons, screens, and signed KFS copy.</td>
                        <td className="p-3 text-rose-700">One English checkbox and instant OTP auto-consent.</td>
                        <td className="p-3 font-semibold text-slate-800">Report breach of Digital Lending Rules 2025.</td>
                      </tr>
                      <tr className="bg-blue-50/70 font-medium text-slate-900">
                        <td className="p-3 font-bold">Rate or Fee Hike</td>
                        <td className="p-3 text-[#1886ff] font-bold">Prior written notice in borrower local language.</td>
                        <td className="p-3 text-rose-700">Silent EMI jump or English email sent after debit.</td>
                        <td className="p-3 font-bold text-[#1886ff]">Dispute hike and claim reversal of excess EMI.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* SECTION 4: Fake Vernacular Declarations & Click-Wrap Consent */}
            <section id="vernacular-declaration" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <AlertTriangle className="w-4 h-4 text-[#1886ff]" />
                <span>Paperwork Loopholes &amp; Forced Signatures</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. Fake Vernacular Declarations &amp; Click-Wrap Consent
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Many banks try to dodge the RBI vernacular rule by adding a short page called a &quot;Vernacular Declaration.&quot; This paper says someone read and translated the English loan file to you, and that you fully understood every line.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                In real life, sales agents often abuse this form. They print the declaration itself in English and ask you to sign it along with 30 other pages. Sometimes the agent writes their own name as the witness or leaves the translator blank empty.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                On mobile loan apps, the problem is even worse. Apps flash a tiny English box that says &quot;I read and agree to all terms in English&quot; right above an OTP button. The user taps next in ten seconds without ever seeing the true interest rate or processing fee.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The RBI rejects this box-ticking habit. Under RBI KFS and Digital Lending rules, consent must be real and not a trick. A lender must prove it gave you a readable local-language KFS before payout. Without that proof, a forced English form will not save hidden charges in an Ombudsman review or court.
              </p>
            </section>

            {/* SECTION 5: Visual Blueprint Infographic */}
            <section id="visual-blueprint" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Sparkles className="w-4 h-4 text-[#1886ff]" />
                <span>Visual Blueprint</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. Visual Blueprint: Vernacular Loan Rights Flow
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This visual guide sums up your core language rights under RBI banking law. Use it to check if your lender followed the Fair Practices Code and gave you a valid local-language KFS.
              </p>

              <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-slate-100 bg-slate-100">
                  <Image
                    src="/images/infographics/personal-loan-agreement-vernacular-language-rbi-rule.jpg"
                    alt="RBI Vernacular Language Rule in Personal Loan Contracts and KFS"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 900px"
                    className="object-contain hover:scale-[1.01] transition-transform duration-300"
                    priority
                  />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-500 pt-1 gap-2">
                  <span>Official CredSettle Borrower Language Shield • RBI KFS &amp; FPC Compliant</span>
                  <a
                    href="/images/infographics/personal-loan-agreement-vernacular-language-rbi-rule.jpg"
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

            {/* SECTION 6: Step-by-Step SOP: Dispute an Unread Loan Contract */}
            <section id="step-by-step-sop" className="scroll-target space-y-6">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Standard Operating Procedure</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. Step-by-Step SOP: Dispute an Unread Loan Contract
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If a bank or NBFC pushed an English personal loan on you without clear local terms, follow these six steps. Do not ignore EMI bills silently. Build a clean written record first.
              </p>

              <div className="space-y-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">1</span>
                    Stage 1: Demand Your Complete Signed Loan File
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Email the bank support desk and ask for your full signed loan agreement, sanction letter, KFS, and vernacular declaration. Under RBI rules, they must give these copies free of cost.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">2</span>
                    Stage 2: Audit the KFS and Vernacular Declaration
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Check if the KFS was sent before payout and in a language you read. Look for missing witness names, wrong dates, or fees that never appeared on the KFS page.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">3</span>
                    Stage 3: Save Proof of Agent Mis-Selling
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Keep all WhatsApp chats, call logs, SMS links, and app screenshots from the sales agent. Note down the exact rate and EMI the agent promised you verbally.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">4</span>
                    Stage 4: Use the Cooling-Off Exit if Within Window
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If you took a digital loan in the last few days, invoke the RBI cooling-off exit right away. You can return the principal plus daily interest with zero foreclosure penalty.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">5</span>
                    Stage 5: File a Formal Breach Notice to the Nodal Officer
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Send a written dispute to the lender Grievance Officer and Principal Nodal Officer. Cite RBI KFS Circular DOR.STR.REC.13 and the Fair Practices Code, and demand a reversal of all undisclosed fees.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">6</span>
                    Stage 6: Escalate to RBI CMS or Negotiate a Fair OTS
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If the lender rejects your claim or waits past 30 days, file online at cms.rbi.org.in. You can also use these RBI breaks as strong leverage to negotiate a clean One-Time Settlement (OTS).
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: Borrower Legal Rights: Contract Act & Court Rulings */}
            <section id="borrower-rights" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>Indian Contract Law &amp; Supreme Court Precedents</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. Borrower Legal Rights: Contract Act &amp; Court Rulings
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                RBI rules work hand in hand with Indian contract law and consumer law. Under Sections 13 and 14 of the Indian Contract Act, 1872, a valid contract needs free consent and a true meeting of minds. That means both sides must agree on the same terms in the same sense.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When a strong bank uses complex English text to hide costly terms from a local-language borrower, courts look closely at fairness. Here are four key legal shields you can rely on:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                    <Gavel className="w-4 h-4" />
                    <span>Supreme Court: Ramathal v. K. Rajamani (2023)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The Supreme Court explained the rule of non est factum, which means &quot;it is not my deed.&quot; If a person who cannot read the contract language is tricked about what they are signing, the unfair paper does not bind them.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                    <Building2 className="w-4 h-4" />
                    <span>Supreme Court: Kharbuja Kuer v. Jangbahadur Rai</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    In this landmark ruling, the Court set a strict rule on burden of proof. When a party takes a signature from an illiterate or non-English speaker, the stronger party must prove the text was read and explained clearly.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-purple-700 font-bold text-sm">
                    <Scale className="w-4 h-4" />
                    <span>Consumer Protection Act 2019: Section 2(46)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Section 2(46) defines one-sided fine-print terms as &quot;unfair contracts.&quot; State and National Consumer Commissions can declare hidden fees, harsh penalties, and surprise clauses null and void.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Contract Act Sections 16, 17 &amp; 18</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    A lender cannot abuse its power or lie verbally about the interest rate while handing you an English file. In such cases, consent fails due to undue influence, fraud, or wrong statements. You can void those unfair terms.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 8: 3-Tier Escalation Matrix: Bank GRO to RBI Ombudsman */}
            <section id="escalation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Escalation Protocol</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. 3-Tier Escalation Matrix: Bank GRO to RBI Ombudsman
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If your lender refuses to translate your KFS, keeps charging hidden fees, or ignores your email, move up the official three-level redressal ladder below.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Escalation Tier</th>
                      <th className="p-3">Designated Authority</th>
                      <th className="p-3">Response Time</th>
                      <th className="p-3">Relief You Can Seek</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 1: GRO</td>
                      <td className="p-3">Lender Grievance Redressal Officer</td>
                      <td className="p-3 font-mono">7 to 14 Days</td>
                      <td className="p-3">Provides signed loan copy, KFS audit, and reverses minor unapproved fees.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 2: PNO</td>
                      <td className="p-3">Principal Nodal Officer (Head Office)</td>
                      <td className="p-3 font-mono">15 to 30 Days</td>
                      <td className="p-3">Reviews Fair Practices breach, cancels mis-sold add-ons, and corrects APR.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Level 3: RBI CMS &amp; e-Jagriti</td>
                      <td className="p-3">RBI Integrated Ombudsman / Consumer Court</td>
                      <td className="p-3 font-mono">After 30 Days</td>
                      <td className="p-3">Orders fee refunds, CIBIL fixes, and damages for unfair contract practices.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 9: Procedural Timeline: Dispute to Fee Waiver & Exit */}
            <section id="procedural-timeline" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Calendar className="w-4 h-4 text-[#1886ff]" />
                <span>Procedural Milestones</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Procedural Timeline: Dispute to Fee Waiver &amp; Exit
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Acting on time protects your CIBIL score and keeps your claim strong. Follow this milestone chart from the day you spot a hidden charge or missing local-language KFS.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Timeline Window</th>
                      <th className="p-3">Dispute Stage</th>
                      <th className="p-3">Lender Duty</th>
                      <th className="p-3">Your Action Step</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 1 to 3</td>
                      <td className="p-3 font-mono text-[11px]">Cooling-Off Check</td>
                      <td className="p-3">Must allow penalty-free exit on digital loans per KFS terms.</td>
                      <td className="p-3">Exit right away if APR or fees look higher than promised.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 4 to 10</td>
                      <td className="p-3 font-mono text-[11px]">File Audit</td>
                      <td className="p-3">Must supply free copies of loan contract, KFS, and annexures.</td>
                      <td className="p-3">Email GRO for full file and check for missing local translation.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 11 to 30</td>
                      <td className="p-3 font-mono text-[11px]">PNO Review</td>
                      <td className="p-3">Must send a reasoned written reply within 30 days of complaint.</td>
                      <td className="p-3">Track ticket number and save all email replies as evidence.</td>
                    </tr>
                    <tr className="bg-amber-50/50">
                      <td className="p-3 font-bold text-slate-900">Day 31</td>
                      <td className="p-3 font-mono text-[11px] text-amber-700 font-bold">RBI Escalation</td>
                      <td className="p-3">Lender enters default on internal grievance timeline.</td>
                      <td className="p-3 font-bold text-amber-800">File free complaint on cms.rbi.org.in with KFS proof.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Day 32 to 60</td>
                      <td className="p-3 font-mono text-[11px] text-[#1886ff] font-bold">Refund or OTS</td>
                      <td className="p-3">Faces Ombudsman notice and prefers fee waiver or settlement.</td>
                      <td className="p-3 font-bold text-slate-900">Verify fee reversal or sign a written OTS letter and get NOC.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 61 Onward</td>
                      <td className="p-3 font-mono text-[11px] text-emerald-700 font-bold">CIBIL Update</td>
                      <td className="p-3">Must update credit bureaus within 15 days under RBI rules.</td>
                      <td className="p-3">Check CIBIL, CRIF, and Equifax reports to confirm clean status.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: Specialized Scenarios: Loan Apps, DSAs & Co-Signers */}
            <section id="specialized-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>Real-World Personal Loan Situations</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                10. Specialized Scenarios: Loan Apps, DSAs &amp; Co-Signers
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Language traps happen in very specific ways across India. Here is how RBI and contract laws protect you in four common real-life cases.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-[#1886ff]" />
                    Digital Loan Apps &amp; Fast OTP Loans
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under RBI Digital Lending Directions 2025, apps must send a digitally signed KFS and loan summary to your email or SMS at payout. If an app hid 36% APR behind English screens, the backing NBFC is fully liable.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Scale className="w-4 h-4 text-emerald-600" />
                    DSA Agents &amp; Verbal Promises
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Direct Selling Agents (DSAs) often promise a low &quot;flat rate&quot; in Hindi or a local tongue. Yet the English form carries a much higher reducing APR. Banks are legally liable for the acts of their appointed DSAs.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-indigo-600" />
                    Senior Citizens &amp; Rural Co-Signers
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Parents or spouses often sign as co-borrowers or guarantors thinking they are only signing a KYC witness form. If no one explained the guarantee in their local language, courts protect them under free consent rules.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-amber-600" />
                    English vs Local Translation Mismatch
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Sometimes the local-language KFS shows zero foreclosure fees while the long English agreement lists a 5% charge. Under RBI KFS rules, the lender cannot charge any fee that was left out of the KFS you accepted.
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
                Frequently Asked Questions: Vernacular Loan Agreements
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Clear answers to common questions on RBI local language rules, Key Facts Statements, vernacular declarations, and disputing unfair English personal loan contracts.
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
                  <strong>RBI Key Facts Statement Circular (2024):</strong> RBI/2024-25/18, DOR.STR.REC.13/13.03.00/2024-25 dated April 15, 2024 - Key Facts Statement (KFS) for Loans &amp; Advances in a language understood by the borrower.
                </li>
                <li>
                  <strong>RBI NBFC Master Direction (Scale Based Regulation, 2023):</strong> RBI/DoR/2023-24/106, DoR.FIN.REC.No.45/03.10.119/2023-24, Chapter VII - Fair Practices Code in vernacular language.
                </li>
                <li>
                  <strong>RBI Digital Lending Directions (2025):</strong> RBI/2025-26/36, DOR.STR.REC.19/21.07.001/2025-26 dated May 8, 2025 - Mandatory KFS, cooling-off window, and digitally signed contract delivery.
                </li>
                <li>
                  <strong>RBI Penal Charges Circular (2023):</strong> RBI/2023-24/53, DoR.MCS.REC.28/01.01.001/2023-24 dated August 18, 2023 - Fair Lending Practice on Penal Charges in Loan Accounts.
                </li>
                <li>
                  <strong>Indian Contract Act, 1872 &amp; Consumer Protection Act, 2019:</strong> Sections 13, 14, 16, 17, and 18 (Free Consent), Section 2(46) (Unfair Contracts), and Supreme Court rulings in Ramathal v. K. Rajamani (2023 INSC 737) and Mst. Kharbuja Kuer v. Jangbahadur Rai (AIR 1963 SC 1203).
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
                  <a href="https://e-jagriti.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>e-Jagriti Consumer Portal</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.indiacode.nic.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>India Code Statutory Repository</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://ncdrc.nic.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>National Consumer Commission (NCDRC)</span>
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
                    Flat vs Reducing APR Trap
                  </Link>
                  <Link href="/personal-loan-interest-before-disbursal-bpi-rbi-refund" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Pre-Disbursal Interest Refund
                  </Link>
                  <Link href="/rule-of-78-front-loaded-interest-personal-loan-dispute" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Rule of 78 Interest Dispute
                  </Link>
                  <Link href="/section-59-contract-act-loan-payment-to-principal-rule" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Section 59 Payment Allocation
                  </Link>
                  <Link href="/rbi-floating-personal-loan-reset-negative-amortization" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Floating Rate Reset Rules
                  </Link>
                  <Link href="/edtech-coaching-course-nbfc-personal-loan-cancellation" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    EdTech NBFC Loan Dispute
                  </Link>
                  <Link href="/services/personal-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Personal Loan Settlement
                  </Link>
                  <Link href="/stop-recovery-agent-harassment" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Stop Recovery Harassment
                  </Link>
                  <Link href="/arbitration-notice-personal-loan-default" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Loan Arbitration Defense
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
                Specialist in RBI Fair Practices compliance, personal loan contract audits, KFS mis-selling disputes, and lawful debt settlement for Indian borrowers.
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
                  LOAN CONTRACT AUDIT HELP
                </span>
                <p className="text-lg md:text-xl font-bold text-white leading-snug">
                  Signed an English Loan Without Clear Terms?
                </p>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our legal team audits your KFS and loan file for RBI vernacular rule breaks, challenges hidden fees, and settles unfair dues with a clean NOC.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Get Free Loan File Review
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
                  <span><strong>KFS &amp; FPC Audit:</strong> Spot missing local terms and hidden fees fast.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Fee &amp; Penalty Reversal:</strong> Dispute unlawful charges not shown in bold.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>RBI Ombudsman Filing:</strong> Formal escalation to Nodal Officers and CMS.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Safe OTS &amp; NOC Exit:</strong> Close mis-sold loans and protect your CIBIL score.</span>
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
                    Hidden Charges Not in KFS
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">RBI fee refund mandate &rarr;</span>
                </Link>

                <Link
                  href="/flat-interest-rate-vs-reducing-apr-personal-loan-trap"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Flat vs Reducing APR Trap
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Spot mis-sold loan rates &rarr;</span>
                </Link>

                <Link
                  href="/bank-sent-legal-notice-for-loan-what-to-do"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Bank Legal Notice Reply
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Respond to recovery notices &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
