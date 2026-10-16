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

export default function RbiPropertyDocCompensationClient() {
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
    { id: 'statutory-framework', label: '1. Statutory Framework: RBI Circular' },
    { id: 'mandatory-timeline', label: '2. Mandatory 30-Day Timeline & CERSAI' },
    { id: 'calculation-matrix', label: '3. Daily Delay Compensation Math' },
    { id: 'lost-damaged-deeds', label: '4. Lost or Damaged Title Deeds SOP' },
    { id: 'visual-blueprint', label: '5. Visual Blueprint Infographic' },
    { id: 'step-by-step-sop', label: '6. Claiming Your ₹5,000/Day Penalty' },
    { id: 'borrower-rights', label: '7. Consumer Court & Tort Damages' },
    { id: 'escalation-matrix', label: '8. 3-Tier Escalation Matrix' },
    { id: 'procedural-timeline', label: '9. Delinquency to Settlement Milestones' },
    { id: 'specialized-scenarios', label: '10. Mergers, ARCs & LAP Scenarios' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
    {
      q: 'What is the RBI rule on returning original property documents after loan repayment?',
      a: 'Under RBI circular RBI/2023-24/60, all regulated lenders must release original movable and immovable property documents within 30 days of full loan repayment or settlement. They must also remove charges registered with CERSAI or other registries within this period.'
    },
    {
      q: 'How much compensation must a bank pay for delay beyond 30 days?',
      a: 'If the delay beyond 30 days is attributable to the bank or NBFC, the lender must compensate the borrower at the rate of ₹5,000 for each day of delay. This amount must be credited directly to the borrower bank account.'
    },
    {
      q: 'From which date is the RBI ₹5,000 per day compensation rule applicable?',
      a: 'The RBI directive came into effect on December 1, 2023. It applies to all cases where the release of original property documents fell due on or after December 1, 2023, across commercial banks, co-operative banks, and NBFCs.'
    },
    {
      q: 'Where can the borrower choose to collect original property documents?',
      a: 'The borrower has the option to collect original property documents either from the banking outlet or branch where the loan was serviced, or from any other office of the lender where documents are maintained, as per the borrower preference.'
    },
    {
      q: 'What happens if the bank loses or damages the original property documents?',
      a: 'The bank must assist the borrower in obtaining certified true copies or duplicate documents from authorities at its own expense. The bank receives an additional 30 days (total 60 days). If delayed beyond 60 days, the ₹5,000 daily penalty applies from day 61.'
    },
    {
      q: 'Can a borrower claim damages in consumer court in addition to ₹5,000 per day?',
      a: 'Yes. The RBI circular explicitly provides that ₹5,000 per day compensation is without prejudice to any other rights under applicable law. Borrowers can approach consumer commissions for deficiency of service, mental agony, and property market value loss.'
    },
    {
      q: 'Does the ₹5,000 per day penalty apply to settled loans via OTS?',
      a: 'Yes. The RBI guidelines specifically apply upon repayment or settlement of personal loans. Once the compromise OTS sum is fully paid and the lender closes the loan ledger, the 30-day countdown begins immediately.'
    },
    {
      q: 'How do I check if the bank has removed its charge on CERSAI?',
      a: 'You can perform a public asset search on the official CERSAI portal at cersai.org.in using your property survey number or asset details. Within 30 days of closure, the bank must file charge satisfaction and update the portal status.'
    },
    {
      q: 'How do I file a complaint if the bank refuses to pay the ₹5,000 per day penalty?',
      a: 'First send a written legal notice to the Branch Manager and Bank Grievance Redressal Officer. If unresolved within 30 days, file an online complaint with the RBI Integrated Ombudsman at cms.rbi.org.in.'
    },
    {
      q: 'How does CredSettle assist borrowers in securing property documents and penalty claims?',
      a: 'CredSettle drafts formal legal notices under the RBI circular, audits delays, files escalations with Principal Nodal Officers, represents borrowers before the RBI Ombudsman, and secures both original title deeds and statutory compensation payouts.'
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
            <span>RBI Circular DoR.MCS.REC.38 Compliance &amp; Borrower Rights</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            RBI ₹5,000 Per Day Delay Compensation for Property Deeds
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            Understand the binding Reserve Bank of India mandate requiring lenders to release original property documents within 30 days of loan closure. Learn how to claim your mandatory ₹5,000 daily delay penalty and hold banks accountable.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Claim Document Compensation</span>
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
                  Protected under RBI Circular RBI/2023-24/60 and the Consumer Protection Act, 2019.
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
                <span>EXECUTIVE BRIEF: RBI PROPERTY DOCUMENT COMPENSATION RULES</span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Strict 30-Day Mandatory Deadline:</strong> Lenders must release original title deeds and remove registry charges within 30 calendar days of full repayment or settlement.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Statutory Daily Compensation:</strong> Any delay beyond 30 days attributable to the lender requires mandatory compensation of ₹5,000 per day credited directly to the borrower.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Borrower Branch Choice:</strong> Borrowers can collect documents from their servicing loan branch or any designated regional office of the bank.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Lost Document Protocol:</strong> If documents are misplaced, the bank must obtain certified copies at its own expense within 30 days. Daily penalties kick in after 60 days.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Additional Legal Remedies:</strong> The daily penalty does not prevent borrowers from claiming further damages in Consumer Court for mental agony or property devaluation.
                  </span>
                </li>
              </ul>
            </div>

            {/* SECTION 1: Statutory Framework: RBI Circular on Document Return */}
            <section id="statutory-framework" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Enactments &amp; Central Bank Mandates</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. Statutory Framework: RBI Circular on Document Return
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Borrowers in India often face long delays when getting back their original property documents. Banks and housing finance companies often give excuses. They blame central storage, vault transit, or branch audits for holding title deeds for months.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                To stop this unfair practice, the Reserve Bank of India issued a strict circular on September 13, 2023. Circular DoR.MCS.REC.38 sets clear rules for all lenders in India. It applies to all commercial banks, small finance banks, co-operative banks, and NBFCs.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The rule took effect on December 1, 2023. Under this rule, lenders cannot hold your title papers after you pay off your loan. This applies to normal EMI payoffs, loan prepayments, and one-time settlements.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Once your loan ledger shows zero balance, the bank must return your papers. The bank must complete this duty within thirty calendar days. If the bank fails to do so, it must pay you a daily penalty under RBI directions.
              </p>
            </section>

            {/* SECTION 2: Mandatory 30-Day Timeline & Registry Charge Removal */}
            <section id="mandatory-timeline" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Clock className="w-4 h-4 text-[#1886ff]" />
                <span>Regulatory Deadlines &amp; Registry Clearances</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. Mandatory 30-Day Timeline &amp; Registry Charge Removal
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The RBI circular imposes two clear duties on lenders. Both tasks must finish within thirty calendar days from the date of loan repayment or settlement.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                First, the bank must return all original movable and immovable property documents. You have the right to collect these documents from your servicing branch. You can also ask to collect them from another bank office where the papers are kept.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Second, the bank must remove all security charges registered on your property. In India, lenders register mortgages on the CERSAI portal. They also file liens with local Sub-Registrar offices and ROC registries.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The bank must file satisfaction forms and give you an official No Objection Certificate (NOC). If the bank gives back your deeds but delays CERSAI satisfaction beyond 30 days, the ₹5,000 per day penalty still applies.
              </p>
            </section>

            {/* SECTION 3: Calculation Matrix: Daily Delay Compensation Math */}
            <section id="calculation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Penalty Formulas &amp; Accrual Ledger</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Calculation Matrix: Daily Delay Compensation Math
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The compensation formula under the RBI circular is simple and direct. The lender must pay you ₹5,000 for each calendar day of delay beyond thirty days.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                You do not have to prove financial injury to get this compensation. The penalty is automatic once the 30-day window expires. The table below shows how the delay penalty adds up over time.
              </p>

              {/* Representative Calculation Card */}
              <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white shadow-xs">
                <div className="bg-slate-900 text-white p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-[#1886ff]" />
                    <span className="font-bold text-sm">Representative Delay Compensation Ledger</span>
                  </div>
                  <span className="text-xs text-blue-300 font-mono">₹5,000 Flat Daily Accrual Rate</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80">
                    <thead>
                      <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-semibold">
                        <th className="p-3">Timeline Post-Loan Closure</th>
                        <th className="p-3">Delay Days Beyond Day 30</th>
                        <th className="p-3">Statutory Regulatory Status</th>
                        <th className="p-3 text-right">Compensation Owed to Borrower</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200/80 text-slate-600">
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Day 1 to Day 30</td>
                        <td className="p-3 font-mono">0 Days</td>
                        <td className="p-3 text-emerald-600 font-semibold">Statutory Handover Window</td>
                        <td className="p-3 text-right font-bold text-slate-500">₹0 (Permissible Turnaround)</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Day 45 (15 Days Delayed)</td>
                        <td className="p-3 font-mono text-amber-600 font-bold">15 Days Delay</td>
                        <td className="p-3 text-amber-600 font-semibold">Statutory Breach: Penalty Triggered</td>
                        <td className="p-3 text-right font-bold text-amber-700 font-mono">₹75,000</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Day 60 (30 Days Delayed)</td>
                        <td className="p-3 font-mono text-rose-600 font-bold">30 Days Delay</td>
                        <td className="p-3 text-rose-600 font-semibold">Severe Regulatory Non-Compliance</td>
                        <td className="p-3 text-right font-bold text-rose-700 font-mono">₹1,50,000</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Day 90 (60 Days Delayed)</td>
                        <td className="p-3 font-mono text-rose-700 font-bold">60 Days Delay</td>
                        <td className="p-3 text-rose-700 font-semibold">Banking Ombudsman Escalation Stage</td>
                        <td className="p-3 text-right font-bold text-rose-800 font-mono">₹3,00,000</td>
                      </tr>
                      <tr className="bg-blue-50/70 font-bold text-slate-900">
                        <td className="p-3">Day 120 (90 Days Delayed)</td>
                        <td className="p-3 font-mono text-[#1886ff]">90 Days Delay</td>
                        <td className="p-3 text-[#1886ff]">Consumer Commission Tort Action</td>
                        <td className="p-3 text-right text-[#1886ff] text-sm sm:text-base font-mono">₹4,50,000 + Legal Costs</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* SECTION 4: Lost or Damaged Title Deeds: Bank Liability & SOP */}
            <section id="lost-damaged-deeds" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <AlertTriangle className="w-4 h-4 text-[#1886ff]" />
                <span>Lost Collateral Protocol &amp; Bank Custody Breaches</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. Lost or Damaged Title Deeds: Bank Liability &amp; SOP
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Losing original title deeds is a serious problem for any property owner. Without original deeds, selling or mortgaging a home becomes very difficult. The RBI rules protect borrowers when lenders misplace or lose title deeds.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When a bank loses property papers, it must help the borrower obtain certified duplicate copies from authorities. The bank cannot ask the borrower to run around government offices alone.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The lender must pay all costs for duplicate documents. This includes police complaint filings, newspaper advertisements, and Sub-Registrar certified copy fees.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The bank receives thirty extra days to obtain duplicate copies. This gives the bank sixty total days from the loan closure date. If the bank fails to deliver duplicate papers within sixty days, the ₹5,000 daily penalty begins on Day 61.
              </p>
            </section>

            {/* SECTION 5: Visual Blueprint Infographic */}
            <section id="visual-blueprint" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Sparkles className="w-4 h-4 text-[#1886ff]" />
                <span>Visual Blueprint</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. Visual Blueprint: Document Release &amp; Redressal Flow
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This visual chart explains the full process for getting back your property papers. It outlines your rights, the 30-day timeline, and how to claim your ₹5,000 daily delay penalty under RBI rules.
              </p>

              <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-slate-100 bg-slate-100">
                  <Image
                    src="/images/infographics/rbi-5000-per-day-delay-compensation-property-documents.jpg"
                    alt="RBI 5000 Per Day Delay Compensation for Property Documents"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 900px"
                    className="object-contain hover:scale-[1.01] transition-transform duration-300"
                    priority
                  />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-500 pt-1 gap-2">
                  <span>Official CredSettle Property Document Protection Framework • RBI Circular Compliant</span>
                  <a
                    href="/images/infographics/rbi-5000-per-day-delay-compensation-property-documents.jpg"
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

            {/* SECTION 6: Step-by-Step SOP: Claiming Your ₹5,000/Day Penalty */}
            <section id="step-by-step-sop" className="scroll-target space-y-6">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Standard Operating Procedure</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. Step-by-Step SOP: Claiming Your ₹5,000/Day Penalty
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If your bank has crossed thirty days without returning your property papers, follow these six steps to claim your papers and daily compensation.
              </p>

              <div className="space-y-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">1</span>
                    Stage 1: Secure Written Proof of Full Loan Closure
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Get an official loan account statement showing zero dues and a closure acknowledgment. The statutory thirty-day clock starts from this date.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">2</span>
                    Stage 2: Submit Document Collection Branch Preference
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Write to your lender stating where you want to collect your documents. You can choose your home branch or another bank office.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">3</span>
                    Stage 3: Issue Formal Statutory Demand on Day 31
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Send a formal letter citing RBI Circular DoR.MCS.REC.38 once day thirty passes. Demand immediate return of documents and calculate your daily ₹5,000 compensation.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">4</span>
                    Stage 4: Audit Registry Satisfaction on CERSAI
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Check if the lender cleared its mortgage charge on the cersai.org.in website. If the charge is still active after thirty days, report this violation.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">5</span>
                    Stage 5: Escalate to Bank PNO and RBI Ombudsman
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If the branch does not pay or deliver papers, file a complaint on the RBI CMS portal at cms.rbi.org.in. The Ombudsman will order payment.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">6</span>
                    Stage 6: Inspect Documents and Demand Compensation Credit
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Inspect every page when collecting your original files. Confirm that the full ₹5,000 per day penalty is credited to your bank account.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: Borrower Legal Rights: Consumer Court & Civil Suits */}
            <section id="borrower-rights" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>Judicial Precedents &amp; Tort Remedies</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. Borrower Legal Rights: Consumer Court &amp; Civil Suits
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The RBI circular explicitly states that daily compensation does not affect your other legal rights. You can still seek relief under consumer and civil laws.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under the Consumer Protection Act of 2019, delaying or losing title deeds is a deficiency in service. The National Consumer Commission (NCDRC) has awarded large sums to affected borrowers.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                    <Gavel className="w-4 h-4" />
                    <span>NCDRC: Bank of India v. Anita Ahuja</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The National Commission held that losing original title deeds is a gross deficiency in service. The court awarded ₹5 Lakhs in compensation to the property owner.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                    <Building2 className="w-4 h-4" />
                    <span>Property Market Value Devaluation Claims</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Buyers discount properties that have duplicate title deeds. Consumer courts have ordered banks to pay 20% to 30% of property value for lost marketability.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-purple-700 font-bold text-sm">
                    <Scale className="w-4 h-4" />
                    <span>Damages for Lost Sale Deals</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If an existing sale fell through because the lender withheld title deeds, you can sue the bank. You can claim the exact financial loss in court.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Criminal Breach of Trust under BNS</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If a bank holds papers to force payment on unrelated loans, this violates the law. Bank officers can face charges under Section 316 of BNS 2023.
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
                If the branch manager refuses to return your papers or pay the delay penalty, use the official RBI three-tier escalation system.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Escalation Tier</th>
                      <th className="p-3">Designated Banking Authority</th>
                      <th className="p-3">Turnaround Time</th>
                      <th className="p-3">Scope of Intervention &amp; Relief</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 1: GRO</td>
                      <td className="p-3">Bank Grievance Redressal Officer</td>
                      <td className="p-3 font-mono">7 to 10 Working Days</td>
                      <td className="p-3">Traces documents in central storage and registers your official penalty claim.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 2: PNO</td>
                      <td className="p-3">Principal Nodal Officer (Head Office)</td>
                      <td className="p-3 font-mono">14 to 21 Working Days</td>
                      <td className="p-3">Audits vault records, authorizes duplicate paper steps, and calculates daily dues.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Level 3: RBI Ombudsman</td>
                      <td className="p-3">Reserve Bank Integrated Ombudsman</td>
                      <td className="p-3 font-mono">30 Days Post-PNO</td>
                      <td className="p-3">Issues binding orders on cms.rbi.org.in to release deeds and pay your daily compensation.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 9: Procedural Milestones: Repayment to Penalty Payout */}
            <section id="procedural-timeline" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Calendar className="w-4 h-4 text-[#1886ff]" />
                <span>Procedural Milestones</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Procedural Milestones: Repayment to Penalty Payout
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Knowing the stages of document release helps you detect non-compliance early and protect your rights.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Milestone Window</th>
                      <th className="p-3">Regulatory Phase</th>
                      <th className="p-3">Lender Action Required</th>
                      <th className="p-3">Borrower Action Protocol</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 0</td>
                      <td className="p-3 font-mono text-[11px]">Loan Closure</td>
                      <td className="p-3">Generates zero dues letter and initiates collateral retrieval from vault.</td>
                      <td className="p-3">Submit branch collection preference in writing and secure receipt.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 1 to 20</td>
                      <td className="p-3 font-mono text-[11px]">Internal Transit</td>
                      <td className="p-3">Transfers title deeds to chosen branch and prepares charge release forms.</td>
                      <td className="p-3">Track transit with loan manager via email and record acknowledgment.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 21 to 30</td>
                      <td className="p-3 font-mono text-[11px]">Final Handover Window</td>
                      <td className="p-3">Notifies borrower of document arrival and discharges CERSAI charge.</td>
                      <td className="p-3">Collect original papers and verify all pages and title chain.</td>
                    </tr>
                    <tr className="bg-amber-50/50">
                      <td className="p-3 font-bold text-slate-900">Day 31</td>
                      <td className="p-3 font-mono text-[11px] text-amber-700 font-bold">Penalty Commences</td>
                      <td className="p-3">Lender enters statutory breach; daily ₹5,000 penalty begins accruing.</td>
                      <td className="p-3 font-bold text-amber-800">Serve formal legal notice citing RBI Circular DoR.MCS.REC.38.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Day 32 to 60</td>
                      <td className="p-3 font-mono text-[11px] text-[#1886ff] font-bold">Escalation Phase</td>
                      <td className="p-3">Investigates delay or begins lost document protocol if papers are missing.</td>
                      <td className="p-3 font-bold text-slate-900">Escalate complaint to Bank PNO and calculate daily compensation dues.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 61 and Beyond</td>
                      <td className="p-3 font-mono text-[11px] text-rose-700 font-bold">Ombudsman Award</td>
                      <td className="p-3">Faces binding compensation order from RBI Ombudsman or Consumer Commission.</td>
                      <td className="p-3">File complaint on cms.rbi.org.in and claim full compensation payout.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: Specialized Scenarios: Bank Mergers, ARCs & LAP */}
            <section id="specialized-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>Specialized Real-World Cases</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                10. Specialized Scenarios: Bank Mergers, ARCs &amp; LAP
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Borrowers often face complex cases involving bank mergers, loan sales to bad banks, or business property loans. Here is how RBI rules apply in these situations.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-[#1886ff]" />
                    Bank Mergers &amp; Central Vault Confusion
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Following bank mergers, deeds often sit in central storage under old loan numbers. The RBI circular clarifies that bank mergers do not extend the 30-day legal deadline.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Scale className="w-4 h-4 text-emerald-600" />
                    Asset Reconstruction Company (ARC) Sales
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    When a bad loan is sold to an ARC, the ARC assumes full lender liability. Upon settlement, the ARC must return papers within 30 days or pay the ₹5,000 daily penalty.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-indigo-600" />
                    Loans Against Property (LAP) &amp; Business Loans
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Business loans secured by personal real estate follow the same rules. Once you clear the loan balance, the bank must return all property papers within thirty days.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-amber-600" />
                    Deceased Borrowers &amp; Legal Heir Claims
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    When a borrower passes away, legal heirs submitting valid succession papers enjoy the same 30-day timeline. Lenders cannot cause extra delays once heir documents are verified.
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
                Frequently Asked Questions: Property Document Release
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Clear, verified legal guidance addressing critical questions regarding property document release, daily delay compensation, lost title deeds, and borrower rights under RBI rules.
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
                  <strong>Reserve Bank of India Circular:</strong> RBI/2023-24/60, DoR.MCS.REC.38/01.01.001/2023-24, Responsible Lending Conduct – Release of Movable/Immovable Property Documents on Repayment/Settlement of Personal Loans.
                </li>
                <li>
                  <strong>Reserve Bank - Integrated Ombudsman Scheme, 2021:</strong> Section 10, Deficiency in Service and Statutory Compensation Adjudication.
                </li>
                <li>
                  <strong>Consumer Protection Act, 2019:</strong> Section 2(11) (Deficiency of Service) and Section 39 (Orders for Punitive Damages and Compensation).
                </li>
                <li>
                  <strong>Securitisation and Reconstruction of Financial Assets and Enforcement of Security Interest Act, 2002 (SARFAESI):</strong> Section 26E and CERSAI Charge Satisfaction Rules.
                </li>
                <li>
                  <strong>National Consumer Disputes Redressal Commission Precedents:</strong> Bank of India v. Anita Ahuja (2018) and State Bank of India v. Amiteshwar Gautam (2020).
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
                  <a href="https://cersai.org.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>CERSAI Asset Registry</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.indiacode.nic.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>India Code Statutory Repository</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="http://ncdrc.nic.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>National Consumer Disputes Redressal Commission</span>
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
                  <Link href="/get-noc-after-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    No Dues Certificate Guide
                  </Link>
                  <Link href="/can-bank-withhold-pledged-gold-after-loan-repayment" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Pledged Gold Withholding Rules
                  </Link>
                  <Link href="/bank-sent-legal-notice-for-loan-what-to-do" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Bank Legal Notice Reply
                  </Link>
                  <Link href="/challenging-undervalued-sarfaesi-property-auction-reserve-price-drt" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    SARFAESI Property Auction Defense
                  </Link>
                  <Link href="/how-to-verify-bank-ots-sanction-letter-avoid-settlement-scams" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Verify Bank OTS Letter
                  </Link>
                  <Link href="/services/personal-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Personal Loan Settlement
                  </Link>
                  <Link href="/stop-recovery-agent-harassment" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Stop Recovery Harassment
                  </Link>
                  <Link href="/rbi-rules-for-recovery-agents" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    RBI Recovery Guidelines
                  </Link>
                  <Link href="/section-60-cpc-assets-property-exempt-from-bank-attachment" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Section 60 CPC Exempt Assets
                  </Link>
                  <Link href="/can-bank-seize-epf-provident-fund-for-loan-recovery" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    EPF &amp; Gratuity Protection
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
                Specialist in banking compliance, property mortgage defense, RBI statutory guidelines, and loan settlement resolutions with extensive experience holding lenders accountable under central bank mandates.
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
                  STATUTORY RECOVERY SUPPORT
                </span>
                <p className="text-lg md:text-xl font-bold text-white leading-snug">
                  Bank Delayed Your Property Documents?
                </p>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our banking advocates issue formal statutory notices under RBI circular DoR.MCS.REC.38, compel immediate release of title deeds, and recover your ₹5,000 per day delay compensation.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Claim ₹5,000/Day Penalty Now
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
                  <span><strong>100% RBI Circular Enforcement:</strong> Immediate legal demand on day 31.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Daily Compensation Recovery:</strong> ₹5,000 per day direct credit recovery.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>CERSAI Charge Satisfaction:</strong> Guaranteed online lien discharge.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Banking Ombudsman Representation:</strong> Hassle-free online escalation.</span>
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
                  href="/can-bank-withhold-pledged-gold-after-loan-repayment"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Can Bank Withhold Pledged Gold?
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Collateral return rights &rarr;</span>
                </Link>

                <Link
                  href="/challenging-undervalued-sarfaesi-property-auction-reserve-price-drt"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Challenge SARFAESI Property Auction
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">DRT valuation dispute defense &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
