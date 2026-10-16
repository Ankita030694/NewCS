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
  Bookmark,
  ArrowRight,
  Clock,
  UserCheck,
  Sparkles,
  Gavel,
  Landmark,
  BadgeCheck
} from 'lucide-react';

export default function CompoundingSection138Client() {
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
    { id: 'legal-compounding', label: '1. Section 147 NI Act Compounding' },
    { id: 'damodar-prabhu-costs', label: '2. Damodar S. Prabhu Guidelines' },
    { id: 'compounding-matrix', label: '3. Compounding Stages & Fee Matrix' },
    { id: 'compounding-vs-acquittal', label: '4. Compounding vs Acquittal Rules' },
    { id: 'visual-blueprint', label: '5. Visual Blueprint Infographic' },
    { id: 'step-by-step-sop', label: '6. 6-Stage Case Compounding SOP' },
    { id: 'quashing-section-482', label: '7. High Court Quashing under Sec 482' },
    { id: 'escalation-matrix', label: '8. 3-Tier Settlement Escalation' },
    { id: 'court-timeline', label: '9. Court Timeline to Acquittal' },
    { id: 'specialized-scenarios', label: '10. Lok Adalat & Appeal Scenarios' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Legal Citations & Officials' }
  ];

  const faqs = [
    {
      q: 'What does compounding a Section 138 cheque bounce case mean?',
      a: 'Compounding means reaching a mutual financial compromise between the lender and borrower. Under Section 147 of the Negotiable Instruments Act, 1881, compounding closes the criminal case. It results in the complete legal acquittal of the borrower.'
    },
    {
      q: 'Can a Section 138 case be compounded after conviction in trial court?',
      a: 'Yes. The Supreme Court in K.M. Ibrahim confirmed that Section 147 overrides Section 320 CrPC. You can compound the case at the appeal stage in the Sessions Court, High Court, or Supreme Court.'
    },
    {
      q: 'What are the compounding costs under the Damodar S. Prabhu guidelines?',
      a: 'The Supreme Court recommended graded costs. You pay zero costs if you settle early. You pay 10 percent before the magistrate, 15 percent in appeal, and 20 percent in the Supreme Court. Courts can waive these fees for financial hardship.'
    },
    {
      q: 'What happens if a bank accepts OTS settlement money but does not compound?',
      a: 'If a bank takes the settlement money but delays court compounding, show the OTS letter and payment receipts to the magistrate. You can also petition the High Court under Section 482 CrPC to quash the criminal complaint.'
    },
    {
      q: 'Does compounding a cheque bounce case remove criminal conviction records?',
      a: 'Yes. Under Section 320(8) of the CrPC, compounding acts as an immediate acquittal. The court wipes away any conviction or jail sentence. Your criminal record remains clean.'
    },
    {
      q: 'Can a cheque bounce case be compounded in National Lok Adalat?',
      a: 'Yes. National Lok Adalats resolve cheque bounce cases quickly. You pay zero penalty fees. The court refunds the complainant court fees. The Lok Adalat award is final and cannot be appealed.'
    },
    {
      q: 'Is the complainant consent strictly mandatory for compounding?',
      a: 'Generally, compounding needs mutual consent. However, in Meters and Instruments, the Supreme Court ruled that magistrates can close the case if the accused pays the cheque sum plus fair compensation.'
    },
    {
      q: 'What documents are required to file a Section 147 compounding application?',
      a: 'You need the joint compounding petition, the bank OTS sanction letter, RTGS bank receipts, the No Dues Certificate, and photo identity proofs.'
    },
    {
      q: 'What is the legal difference between withdrawal and compounding in Section 138?',
      a: 'Withdrawal under Section 257 CrPC happens when the complainant drops the case before final order. Compounding under Section 147 NI Act is a formal bilateral compromise that gives an automatic acquittal at any stage.'
    },
    {
      q: 'How does CredSettle help borrowers compound Section 138 cases after loan settlement?',
      a: 'CredSettle negotiates One-Time Settlements directly with senior bank managers. Our advocates draft Section 147 compounding petitions, appear before magistrates, and obtain certified court acquittal orders.'
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
            <Gavel className="w-3.5 h-3.5" />
            <span>Negotiable Instruments Act &amp; Criminal Acquittal Framework</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Compounding Section 138 Cheque Bounce Case Under Section 147
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            A complete legal guide for borrowers settling personal loans, business credit, or card dues. Understand how Section 147 compounding guarantees complete criminal acquittal and cancels court summons.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Compound Your Cheque Bounce Case</span>
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
                  <span>Legal Criminal Immunity</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Governed by Section 147 NI Act and Section 320(8) CrPC.
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
                <span>EXECUTIVE BRIEF: SECTION 147 COMPOUNDING LEGAL CRUX</span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Non-Obstante Power:</strong> Section 147 of the Negotiable Instruments Act overrides normal criminal procedure rules. It allows you to compound the case at any stage.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Instant Acquittal:</strong> Under Section 320(8) CrPC, compounding a cheque bounce case gives you a full legal acquittal.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Compounding on Appeal:</strong> Supreme Court rulings in Damodar Prabhu and K.M. Ibrahim allow compounding even after a trial court convicts you.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Bank OTS Protection:</strong> When you settle a loan with a bank, file a joint compounding petition in court. This step closes the criminal case permanently.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Lok Adalat Advantage:</strong> Compounding in National Lok Adalat costs zero penalty fees. The court also refunds full court fees to the lender.
                  </span>
                </li>
              </ul>
            </div>

            {/* SECTION 1: Legal Right to Compound */}
            <section id="legal-compounding" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Parliamentary Law &amp; Legal Framework</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. Section 147 NI Act: Legal Right to Compound
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When a borrower misses loan payments, banks often deposit security cheques. If the bank cheque bounces, the lender files a criminal case under Section 138 of the Negotiable Instruments Act, 1881. Section 138 carries tough penalties. The court can order two years of jail time or impose fines up to double the cheque amount.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                However, Parliament understands that cheque bounce cases arise from commercial deals. In 2002, Parliament added Section 147 to the Act. This law makes every offence under the Act compoundable. Compounding means that the lender and borrower can settle their dispute out of court.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Section 147 starts with special words: &quot;Notwithstanding anything contained in the Code of Criminal Procedure, 1973&quot;. In simple terms, this non-obstante clause overrides normal criminal rules. Section 320 of the CrPC sets strict limits on when people can settle cases. Section 147 removes those limits for cheque bounce complaints.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Because of this law, both sides can settle the debt at any time. You can compound the case during the trial, in appeal, or before the High Court. Once the judge accepts the compromise, the court cancels all summons and acquits the borrower completely.
              </p>
            </section>

            {/* SECTION 2: Damodar S. Prabhu Guidelines */}
            <section id="damodar-prabhu-costs" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>Supreme Court Precedents</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. Damodar S. Prabhu Guidelines: Graded Compounding Costs
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Thousands of cheque bounce cases reach Indian courts each year. To speed up settlements, the Supreme Court set clear rules in Damodar S. Prabhu v. Sayed Babalal H. (2010). The court held that Section 138 aims to help creditors recover money, not put borrowers in jail.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The Supreme Court created a graded cost structure. This system rewards borrowers who settle early. If you compound the case during early hearings, you pay zero penalty. If you delay settlement until appeal, you must pay graded costs to the Legal Services Body.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Judges retain full power to waive these costs. If you face job loss, illness, or severe financial trouble, the court can drop the penalty. When you reach a mutual One-Time Settlement with a bank, magistrates routinely waive graded costs.
              </p>

              {/* Sample Calculation Card */}
              <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white shadow-xs">
                <div className="bg-slate-900 text-white p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                    <span className="font-bold text-sm">Sample Ledger Audit: Cost of Delayed Compounding</span>
                  </div>
                  <span className="text-xs text-blue-300 font-mono">₹10 Lakh Disputed Cheque</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80">
                    <thead>
                      <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-semibold">
                        <th className="p-3">Court Court Stage</th>
                        <th className="p-3">Cheque Face Value</th>
                        <th className="p-3">Damodar Prabhu Cost Rate</th>
                        <th className="p-3 text-right">DLSA Graded Cost Payable</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200/80 text-slate-600">
                      <tr>
                        <td className="p-3 font-medium text-slate-900">First / Second Hearing (Trial Magistrate)</td>
                        <td className="p-3">₹10,00,000</td>
                        <td className="p-3 text-emerald-600 font-semibold">0% (Zero Graded Cost)</td>
                        <td className="p-3 text-right font-bold text-emerald-700">₹0 (Completely Free)</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Post-Notice / Trial Hearing Stage</td>
                        <td className="p-3">₹10,00,000</td>
                        <td className="p-3 text-blue-600 font-semibold">10% of Cheque Amount</td>
                        <td className="p-3 text-right font-bold text-slate-900">₹1,00,000 (Waivable by Court)</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Sessions Court (Criminal Appeal)</td>
                        <td className="p-3">₹10,00,000</td>
                        <td className="p-3 text-amber-600 font-semibold">15% of Cheque Amount</td>
                        <td className="p-3 text-right font-bold text-amber-700">₹1,50,000 (To DLSA / SLSA)</td>
                      </tr>
                      <tr className="bg-blue-50/70 font-bold text-slate-900">
                        <td className="p-3">High Court / Supreme Court Stage</td>
                        <td className="p-3">₹10,00,000</td>
                        <td className="p-3 text-rose-600">20% of Cheque Amount</td>
                        <td className="p-3 text-right text-[#1886ff] text-sm sm:text-base">₹2,00,000 (Maximum Surcharge)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* SECTION 3: Compounding Matrix */}
            <section id="compounding-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Court Comparison</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Compounding Matrix: Court Stages, Fees &amp; Precedents
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The stage at which you settle determines your court costs and legal paperwork. Reviewing this table helps you resolve complaints before penalties climb.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[620px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Court Stage</th>
                      <th className="p-3">Governing Legal Section</th>
                      <th className="p-3">Complainant Consent</th>
                      <th className="p-3">Court Cost Penalty</th>
                      <th className="p-3">Legal Outcome for Accused</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr className="bg-blue-50/30">
                      <td className="p-3 font-bold text-slate-900">National Lok Adalat</td>
                      <td className="p-3">Legal Services Officials Act Sec 21</td>
                      <td className="p-3 text-emerald-600 font-semibold">Mutual Agreement</td>
                      <td className="p-3 text-emerald-600 font-semibold">0% (Nil Cost)</td>
                      <td className="p-3">Final Award with Immediate Acquittal.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Trial Court (Appearance)</td>
                      <td className="p-3">Section 147 NI Act</td>
                      <td className="p-3 text-emerald-600 font-semibold">Mutual Compromise</td>
                      <td className="p-3 text-emerald-600 font-semibold">0% (Exempt)</td>
                      <td className="p-3">Magistrate Order of Complete Acquittal.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Trial Court (Post-Notice)</td>
                      <td className="p-3">Section 147 NI Act</td>
                      <td className="p-3 text-emerald-600 font-semibold">Mutual or Payment Deposit</td>
                      <td className="p-3 text-blue-600">10% (Court may waive)</td>
                      <td className="p-3">Criminal Complaint Disposed as Compounded.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Sessions Court (Appeal)</td>
                      <td className="p-3">Section 147 r/w Sec 391 CrPC</td>
                      <td className="p-3 text-emerald-600 font-semibold">Mutual Settlement Memo</td>
                      <td className="p-3 text-amber-600">15% (To DLSA fund)</td>
                      <td className="p-3">Conviction &amp; Sentence Overturned.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">High Court (Revision / 482)</td>
                      <td className="p-3">Section 482 / 401 CrPC</td>
                      <td className="p-3 text-emerald-600 font-semibold">Compromise Deed Produced</td>
                      <td className="p-3 text-amber-600">15% to 20% (Flexible)</td>
                      <td className="p-3">Complaint Quashed by Inherent Powers.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Supreme Court (SLP)</td>
                      <td className="p-3">Article 142 r/w Sec 147 NI Act</td>
                      <td className="p-3 text-emerald-600 font-semibold">Affidavit of Settlement</td>
                      <td className="p-3 text-rose-600">20% (Flexible waiver)</td>
                      <td className="p-3">Supreme Court Sets Aside Conviction.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 4: Compounding vs Withdrawal vs Acquittal */}
            <section id="compounding-vs-acquittal" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Legal Distinctions &amp; Legal Effect</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. Compounding vs Withdrawal vs Acquittal: Key Rules
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Many borrowers confuse case withdrawal with case compounding. While both steps bring court cases to an end, they operate under different legal sections.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under Section 257 of the CrPC, a complainant can ask the court to withdraw a case. If the magistrate finds good grounds, the court allows the withdrawal. This action results in an acquittal under Section 257.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                On the other hand, compounding under Section 147 of the NI Act is a two-way settlement. It records that both parties resolved the underlying debt. Under Section 320(8) of the CrPC, compounding has the automatic force of an acquittal.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                In Gimpex Private Ltd. v. Manoj Goel (2022), the Supreme Court ruled that a valid compromise settles the original dispute. Once the borrower pays the agreed settlement, the lender cannot file fresh cases on the same cheque.
              </p>
            </section>

            {/* SECTION 5: Visual Blueprint Infographic */}
            <section id="visual-blueprint" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Sparkles className="w-4 h-4 text-[#1886ff]" />
                <span>Visual Blueprint</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. Visual Blueprint: Section 138 Compounding Workflow
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This diagram illustrates the step-by-step process of compounding a cheque bounce case. It shows the clear path from bank OTS talks to final acquittal orders.
              </p>

              <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-slate-100 bg-slate-100">
                  <Image
                    src="/images/infographics/compounding-section-138-cheque-bounce-case-after-settlement-section-147.jpg"
                    alt="Compounding Section 138 Cheque Bounce Case After Settlement Section 147"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 900px"
                    className="object-contain hover:scale-[1.01] transition-transform duration-300"
                    priority
                  />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-500 pt-1 gap-2">
                  <span>Official CredSettle Cheque Bounce Defense Framework • Section 147 NI Act Compliant</span>
                  <a
                    href="/images/infographics/compounding-section-138-cheque-bounce-case-after-settlement-section-147.jpg"
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

            {/* SECTION 6: Step-by-Step SOP (6 Stages) */}
            <section id="step-by-step-sop" className="scroll-target space-y-6">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Standard Operating Procedure</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. Step-by-Step SOP: 6-Stage Case Compounding Protocol
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If you face a Section 138 case, follow these six clear steps. This protocol ensures you settle your debt safely and get complete legal clearance.
              </p>

              <div className="space-y-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">1</span>
                    Stage 1: Secure Formal Bank OTS Sanction Letter
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Never pay cash to recovery agents. Demand an official One-Time Settlement letter printed on bank letterhead and signed by bank managers.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">2</span>
                    Stage 2: Pay Settlement Dues via Online Bank Transfer
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Transfer the agreed money directly into your loan account through RTGS or NEFT. Keep digital receipts for every payment you make.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">3</span>
                    Stage 3: Collect Official No Dues Certificate &amp; Cheque Return
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Collect your official No Dues Certificate from the bank. Ask the bank to return the original bounced cheque or issue a cancellation letter.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">4</span>
                    Stage 4: Draft Joint Application Under Section 147 NI Act
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Ask your lawyer to draft a joint compounding plea. Add your bank OTS note, bank slips, and No Dues Certificate.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">5</span>
                    Stage 5: Record Mutual Statements Before the Magistrate
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Both parties appear before the trial court judge. The bank lawyer confirms that the bank received full payment and agrees to drop the case.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">6</span>
                    Stage 6: Obtain Certified Copy of Acquittal Order
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    The judge issues an order of acquittal under Section 320(8) CrPC. Get a certified court copy to keep as permanent proof of case closure.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: Quashing under Section 482 CrPC if Bank Refuses NOC */}
            <section id="quashing-section-482" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <ShieldCheck className="w-4 h-4 text-[#1886ff]" />
                <span>High Court Powers</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. Quashing under Section 482 CrPC if Bank Refuses NOC
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Sometimes a bank accepts settlement money but fails to attend court hearings. In some cases, lenders delay court withdrawal to pressure borrowers. You have strong legal options to protect yourself.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                    <Gavel className="w-4 h-4" />
                    <span>Petition Under Section 482 CrPC</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    You can approach the High Court under Section 482 CrPC. The High Court can quash the criminal case to prevent abuse of the court system.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                    <Building2 className="w-4 h-4" />
                    <span>Direct Deposit Before Magistrate</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under the Meters and Instruments ruling, you can show bank receipts to the trial judge. The judge can close the case without the lender presence.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-purple-700 font-bold text-sm">
                    <Scale className="w-4 h-4" />
                    <span>Consumer Forum Complaint</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Failing to issue an NOC after full payment is a deficiency in service. The Consumer Forum can grant compensation and order immediate case withdrawal.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <Landmark className="w-4 h-4" />
                    <span>RBI Ombudsman Escalation</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Lenders that break settlement letters violate RBI fair practice rules. File an online complaint at cms.rbi.org.in to seek swift regulatory action.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 8: 3-Tier Escalation Matrix */}
            <section id="escalation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff]" />
                <span>Legal Escalation Protocol</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. 3-Tier Settlement &amp; Court Redressal Escalation Matrix
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Follow this simple three-tier plan to escalate settlement delays and enforce your right to case compounding.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x border-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Grievance Tier</th>
                      <th className="p-3">Designated Legal Body</th>
                      <th className="p-3">Turnaround Time</th>
                      <th className="p-3">Scope of Intervention &amp; Relief</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 1: Lender SAMD</td>
                      <td className="p-3">Stressed Asset Management Desk</td>
                      <td className="p-3 font-mono">7 to 14 Working Days</td>
                      <td className="p-3">Issues formal OTS sanction letter, calculates principal waivers, and recalls private recovery agents.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 2: Trial Court</td>
                      <td className="p-3">Metropolitan Magistrate / JMFC</td>
                      <td className="p-3 font-mono">Next Scheduled Hearing</td>
                      <td className="p-3">Records joint compounding application under Section 147 NI Act, recalls warrants, and enters acquittal order.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Level 3: High Court</td>
                      <td className="p-3">High Court Criminal Bench (Sec 482)</td>
                      <td className="p-3 font-mono">3 to 6 Weeks</td>
                      <td className="p-3">Quashes summons, bailable warrants, and criminal complaints if the lender delays withdrawal after accepting OTS money.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 9: Court Timeline */}
            <section id="court-timeline" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Clock className="w-4 h-4 text-[#1886ff]" />
                <span>Court Milestones</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Court Timeline: Summons to Final Case Acquittal
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Knowing the court timeline helps you act at the right time. You can settle better terms and compound the case before trial begins.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Litigation Window</th>
                      <th className="p-3">Court Stage</th>
                      <th className="p-3">Court / Complainant Action</th>
                      <th className="p-3">Strategic Borrower Response</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 1 to 30</td>
                      <td className="p-3 font-mono text-[11px]">Legal Legal Notice</td>
                      <td className="p-3">Complainant serves 15-day legal demand notice.</td>
                      <td className="p-3">Reply through legal counsel and initiate early OTS talks.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 31 to 45</td>
                      <td className="p-3 font-mono text-[11px]">Filing Complaint</td>
                      <td className="p-3">Complainant files criminal complaint before the JMFC court.</td>
                      <td className="p-3">Track court diary to monitor cognisance and pre-summoning evidence.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 46 to 90</td>
                      <td className="p-3 font-mono text-[11px]">Court Summons Issued</td>
                      <td className="p-3">Magistrate issues judicial summons to the accused borrower.</td>
                      <td className="p-3 font-bold text-emerald-700">Prime Stage: Compound immediately with 0% graded costs.</td>
                    </tr>
                    <tr className="bg-amber-50/50">
                      <td className="p-3 font-bold text-slate-900">Day 91 to 180</td>
                      <td className="p-3 font-mono text-[11px] text-amber-700 font-bold">Notice &amp; Bail</td>
                      <td className="p-3">Bailable warrants issued if unserved; bail and notice framed.</td>
                      <td className="p-3">Secure bail, recall warrants, and apply for Lok Adalat referral.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Month 6 to 18</td>
                      <td className="p-3 font-mono text-[11px] text-[#1886ff] font-bold">Trial &amp; Evidence</td>
                      <td className="p-3">Complainant evidence (CW1) and cross-examination.</td>
                      <td className="p-3">File Section 147 application with payment receipts to halt trial.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Post-Conviction</td>
                      <td className="p-3 font-mono text-[11px]">Appeal &amp; Revision</td>
                      <td className="p-3">Sessions Court appeal against sentence or imprisonment.</td>
                      <td className="p-3">Compound under Section 147; obtain total reversal of conviction.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: Specialized Real-World Scenarios */}
            <section id="specialized-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <BadgeCheck className="w-4 h-4 text-[#1886ff]" />
                <span>Specialized Scenarios</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                10. Specialized Scenarios: Lok Adalat, Conviction &amp; Appeals
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Cheque bounce compounding applies across many situations. Here is how legal rules protect borrowers in common cases.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-[#1886ff]" />
                    Compounding in National Lok Adalat
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    National Lok Adalats happen every three months. Settling here gives you an award that works like a civil decree. It carries zero graded costs and cannot be challenged on appeal.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-emerald-600" />
                    Compounding After Conviction by Magistrate
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under the K.M. Ibrahim ruling, you can compound even after a judge sentences you. Once you present the settlement deed, the appellate court must overturn your conviction.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-indigo-600" />
                    Corporate Cheque Bounces &amp; Section 141 NI Act
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    When a company bounces a cheque, company directors face legal charges under Section 141. Compounding the main company loan closes the case for all directors and signatories.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-amber-600" />
                    Disputed Blank Security Cheques Given to Lenders
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Lenders often fill in high sums on undated security cheques. Reaching an OTS confirms the real debt. This cancels the inflated cheque claim and allows quick compounding.
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
                Frequently Asked Questions: Section 138 Compounding
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Clear, verified legal guidance addressing critical questions regarding cheque bounce compounding, Section 147 NI Act, acquittal effects, and borrower rights.
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

            {/* SECTION 13: Citations & Outbound Body Grid */}
            <section id="regulatory-sources" className="scroll-target space-y-4 pt-4 border-t border-slate-200">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-500">
                <BookOpen className="w-4 h-4" />
                <span>Legal Citations &amp; Legal Officials</span>
              </div>
              <h2 className="text-base sm:text-lg font-bold text-slate-900">
                Official Regulatory Citations &amp; Statutory Legal Framework
              </h2>
              <ul className="space-y-2 text-xs text-slate-600 leading-relaxed list-disc pl-5">
                <li>
                  <strong>Negotiable Instruments Act, 1881:</strong> Section 138 (Cheque Dishonour Offence) and Section 147 (Offences to be Compoundable).
                </li>
                <li>
                  <strong>Code of Criminal Procedure, 1973 (CrPC):</strong> Section 320(8) (Effect of Compounding as Acquittal) and Section 257 (Withdrawal of Complaint).
                </li>
                <li>
                  <strong>Bharatiya Nagarik Suraksha Sanhita, 2023 (BNSS):</strong> Section 359 (Compounding Framework) and Section 528 (High Court Inherent Powers).
                </li>
                <li>
                  <strong>Legal Services Authorities Act, 1987:</strong> Section 19 to 21 (National Lok Adalat Settlement and Non-Appealable Awards).
                </li>
                <li>
                  <strong>Supreme Court of India Precedents:</strong> Damodar S. Prabhu (2010), Meters and Instruments (2018), and Gimpex Pvt Ltd (2022).
                </li>
              </ul>

              {/* 6 Outbound Body Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Verified Judicial &amp; Regulatory Portals:</span>
                <div className="flex flex-wrap gap-2">
                  <a href="https://ecourts.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>eCourts Services India</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://main.sci.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>Supreme Court of India</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://nalsa.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>National Legal Services Body (Lok Adalat)</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.indiacode.nic.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>India Code Legal Repository</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://delhihighcourt.nic.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>High Court Case Status</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://cms.rbi.org.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>RBI Integrated Ombudsman</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* 12 Internal Topic Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Explore Related CredSettle Guides:</span>
                <div className="flex flex-wrap gap-2">
                  <Link href="/cheque-bounce-case-defense-section-138" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Section 138 Defense Guide
                  </Link>
                  <Link href="/bailable-warrant-for-loan-default" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Recall Bailable Warrant
                  </Link>
                  <Link href="/section-138-cheque-bounce-personal-loan" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Personal Loan Cheque Bounce
                  </Link>
                  <Link href="/how-to-verify-bank-ots-sanction-letter-avoid-settlement-scams" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Verify OTS Sanction Letter
                  </Link>
                  <Link href="/what-is-the-punishment-for-cheque-bounce-under-section-138-ni-act" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Cheque Bounce Punishment
                  </Link>
                  <Link href="/get-noc-after-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    No Dues Certificate Guide
                  </Link>
                  <Link href="/bank-sent-legal-notice-for-loan-what-to-do" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Bank Legal Notice Reply
                  </Link>
                  <Link href="/can-bank-file-section-420-cheating-case-for-loan-default" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Section 420 Cheating Defense
                  </Link>
                  <Link href="/order-37-cpc-summary-suit-loan-recovery-leave-to-defend" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Order 37 Summary Suit
                  </Link>
                  <Link href="/services/personal-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Personal Loan Settlement
                  </Link>
                  <Link href="/stop-recovery-agent-harassment" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Stop Recovery Harassment
                  </Link>
                  <Link href="/rbi-rules-for-recovery-agents" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    RBI Recovery Rules
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
                Expert in Negotiable Instruments Act defense, banking compliance, Section 147 compounding protocols, and criminal trial resolution for corporate and individual debt distress.
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
                  CRIMINAL DEFENSE &amp; SETTLEMENT
                </span>
                <p className="text-lg md:text-xl font-bold text-white leading-snug">
                  Facing Cheque Bounce Court Summons?
                </p>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our senior advocates recall non-bailable warrants, settle deep loan settlement waivers with bank managers, and compound Section 138 cases under Section 147 NI Act.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Compound Your Case Now
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
                  <span>Judicial Protection • 100% Confidential</span>
                </div>
              </div>
            </div>

            {/* Card 3: CredSettle Trust Badges */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">The CredSettle Shield</p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Complete Acquittal:</strong> Formal compounding order from Magistrate.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Warrant Recall:</strong> Immediate bail and NBW cancellation assistance.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Lok Adalat Representation:</strong> Fast-track zero-penalty compounding.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>High Court Sec 482 Quashing:</strong> Inherent relief if lender delays NOC.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">Related Legal Guides</p>
              <div className="space-y-2.5">
                <Link
                  href="/cheque-bounce-case-defense-section-138"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Section 138 Cheque Bounce Defense
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Trial defenses &amp; case law &rarr;</span>
                </Link>

                <Link
                  href="/bailable-warrant-for-loan-default"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Bailable Warrant for Loan Default
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Warrant recall procedure &rarr;</span>
                </Link>

                <Link
                  href="/what-is-the-punishment-for-cheque-bounce-under-section-138-ni-act"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Section 138 Punishment &amp; Penalty
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Jail time &amp; fines explained &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
