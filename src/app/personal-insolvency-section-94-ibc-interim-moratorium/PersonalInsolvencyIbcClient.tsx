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

export default function PersonalInsolvencyIbcClient() {
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
    { id: 'section-94-framework', label: '1. Section 94 IBC Framework: Debtor Application Rights' },
    { id: 'section-96-moratorium', label: '2. Section 96 Interim Moratorium: Instant Legal Shield' },
    { id: 'scope-of-protection', label: '3. Scope of Protection: Debt Recovery & SARFAESI Stay' },
    { id: 'judicial-precedents', label: '4. Judicial Precedents: Supreme Court on Interim Stay' },
    { id: 'visual-blueprint', label: '5. Visual Blueprint: Section 94 Insolvency Workflow' },
    { id: 'step-by-step-sop', label: '6. Step-by-Step SOP: Section 94 Resolution Protocol' },
    { id: 'debtor-rights', label: '7. Debtor Rights & Protections Against Creditor Action' },
    { id: 'resolution-matrix', label: '8. 3-Tier Resolution Matrix: Process & Authorities' },
    { id: 'procedural-timeline', label: '9. Procedural Timeline: Application to Discharge Order' },
    { id: 'specialized-scenarios', label: '10. Specialized Scenarios: Personal Guarantors & MSME' },
    { id: 'company-profile', label: 'About CredSettle Debt Resolution Services' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions: Section 94 IBC Moratorium' },
    { id: 'regulatory-sources', label: 'Official Regulatory Citations & Statutory Authorities' }
  ];

  const faqs = [
    {
      q: 'What is Section 94 under the Insolvency and Bankruptcy Code (IBC)?',
      a: 'Section 94 of the IBC enables an individual debtor or personal guarantor who has defaulted on qualifying debts to apply for an insolvency resolution process before the adjudicating authority.'
    },
    {
      q: 'What is an interim moratorium under Section 96 of the IBC?',
      a: 'Under Section 96, an interim moratorium commences immediately on the date of filing an application under Section 94. It automatically stays all pending legal actions and bars creditors from filing fresh suits for any debt.'
    },
    {
      q: 'Does the interim moratorium under Section 96 require a formal court order?',
      a: 'No. As affirmed by the Supreme Court in Dilip B. Jiwrajka, the interim moratorium operates automatically by operation of law from the moment the application is filed, without needing prior judicial admission.'
    },
    {
      q: 'Does Section 96 interim moratorium stay SARFAESI property auctions?',
      a: 'Yes. National Company Law Appellate Tribunal rulings confirm that the interim moratorium stays recovery proceedings in respect of the debt, including SARFAESI notices, physical possession orders, and pending property auctions.'
    },
    {
      q: 'Which forum has jurisdiction over Section 94 personal insolvency applications?',
      a: 'The Debt Recovery Tribunal (DRT) has territorial jurisdiction over individuals and partnerships. However, if the debtor is a personal guarantor to a corporate debtor in CIRP, the National Company Law Tribunal (NCLT) has jurisdiction.'
    },
    {
      q: 'Does Section 96 stay Section 138 cheque bounce criminal cases?',
      a: 'Section 96 stays legal proceedings in respect of the debt. While debt recovery execution is stayed, courts have held that criminal trial proceedings under Section 138 of the Negotiable Instruments Act against individuals may continue unless specifically stayed by a competent high court.'
    },
    {
      q: 'What are excluded debts under Section 79(15) of the IBC?',
      a: 'Excluded debts cannot be resolved or discharged under the IBC. These include court fines, child maintenance or alimony, student education loans, and damages for negligence or breach of statutory duty.'
    },
    {
      q: 'What restrictions apply to a debtor during the interim moratorium?',
      a: 'During the moratorium, the debtor cannot dispose of, transfer, or encumber any assets without the approval of the resolution professional or the tribunal, and cannot incur substantial fresh debt without disclosure.'
    },
    {
      q: 'What happens after the interim moratorium expires?',
      a: 'The interim moratorium ceases when the adjudicating authority admits or rejects the application under Section 100. If admitted, a full statutory moratorium under Section 101 begins for 180 days to implement a repayment plan.'
    },
    {
      q: 'How does CredSettle assist borrowers facing severe debt distress?',
      a: 'CredSettle guides borrowers through legal debt defense, halts recovery agent harassment, evaluates statutory IBC relief options, and negotiates direct One-Time Settlements (OTS) with banks for significant debt waivers.'
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
            <span>IBC 2016 Part III • Statutory Borrower Protection &amp; Debt Freeze</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Section 94 IBC Interim Moratorium: Personal Insolvency
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            A comprehensive legal guide for distressed borrowers and personal guarantors. Understand Section 94 debtor applications, automatic Section 96 interim moratorium, and how to stay bank lawsuits and SARFAESI actions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Get Immediate Legal Debt Relief</span>
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
                  <span>Statutory Moratorium Shield</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Protected under Section 94 and Section 96 of the Insolvency and Bankruptcy Code, 2016.
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
                <span>EXECUTIVE BRIEF: SECTION 94 IBC &amp; INTERIM MORATORIUM CRUX</span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Debtor-Initiated Insolvency:</strong> Section 94 of the IBC empowers an individual or personal guarantor to initiate an insolvency resolution process upon qualifying debt default.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Automatic Section 96 Interim Moratorium:</strong> The interim moratorium starts immediately on the application filing date. No prior court hearing or admission order is needed.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Deemed Stay on Legal Proceedings:</strong> All pending recovery lawsuits, DRT suits, civil execution petitions, and SARFAESI property actions are automatically stayed.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Supreme Court Constitutional Affirmation:</strong> The Supreme Court in Dilip B. Jiwrajka upheld that Section 96 creates a protective breathing period to protect debtor assets.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Pathway to Debt Resolution:</strong> The interim moratorium gives borrowers peaceful space to structure a formal repayment plan or negotiate an out-of-court One-Time Settlement (OTS).
                  </span>
                </li>
              </ul>
            </div>

            {/* SECTION 1: Section 94 IBC Framework */}
            <section id="section-94-framework" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Enactment &amp; Legislative Scheme</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. Section 94 IBC Framework: Debtor Application Rights
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When borrowers face overwhelming debt, aggressive bank recovery actions can feel suffocating. Multiple recovery suits, arbitration claims, and SARFAESI property notices often strike simultaneously. The Insolvency and Bankruptcy Code, 2016 (IBC) offers an organized statutory mechanism to resolve personal debt. Under Part III of the IBC, Chapter III provides the legal framework for personal insolvency.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Section 94 of the IBC gives the debtor the explicit right to apply for an insolvency resolution process. A debtor who has committed a default on qualifying debts may submit an application directly or through an Insolvency Resolution Professional (RP). This provision stands in contrast to Section 95, which is invoked by creditors against personal guarantors or individual debtors.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                To be eligible under Section 94, the applicant must satisfy clear statutory conditions. The debtor must not be an undischarged bankrupt. The debtor must not currently be undergoing a fresh start process or another insolvency resolution process. Additionally, the applicant must not have had an insolvency application admitted under Chapter III within the previous twelve months.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The appropriate legal forum depends on the nature of the debtor. For ordinary individuals, sole proprietors, and partnership firms, the Debt Recovery Tribunal (DRT) acts as the Adjudicating Authority under Section 179. However, under Section 60(2) and Section 60(3), if the debtor is a personal guarantor to a corporate debtor undergoing corporate insolvency or liquidation, the National Company Law Tribunal (NCLT) holds exclusive jurisdiction.
              </p>
            </section>

            {/* SECTION 2: Section 96 Interim Moratorium */}
            <section id="section-96-moratorium" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <ShieldCheck className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Debt Freeze &amp; Protection</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. Section 96 Interim Moratorium: Instant Legal Shield
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The most remarkable feature of Section 94 is its immediate legal consequence under Section 96 of the IBC. In corporate insolvency under Section 14, a moratorium takes effect only after the NCLT formally admits the petition. In stark contrast, Section 96 triggers an interim moratorium immediately on the date the application is filed.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This immediate statutory freeze operates by law. It requires no preliminary judicial hearing or formal admission order. As soon as the application is stamped and registered with the tribunal registry, the interim moratorium takes effect automatically.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Section 96(1)(b) establishes two clear statutory protections. First, any legal action or proceeding pending in respect of any debt shall be deemed to be stayed. Second, creditors of the debtor are prohibited from initiating any fresh legal action or proceeding in respect of any debt. If the debtor files under Section 94 for all debts, this interim protection applies universally across all creditor claims.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Parliament created this automatic shield to stop a chaotic race to courthouse steps. Without an interim moratorium, aggressive lenders could seize bank balances or auction assets before a viable repayment plan could be formulated. However, the debtor also undertakes duties. During the interim moratorium, the debtor cannot dispose of, transfer, or alienate any assets without the approval of the resolution professional.
              </p>
            </section>

            {/* Representative Calculation Card */}
            <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white shadow-xs">
              <div className="bg-slate-900 text-white p-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                  <span className="font-bold text-sm">Representative Debt Exposure &amp; Moratorium Impact</span>
                </div>
                <span className="text-xs text-blue-300 font-mono">₹45 Lakh Total Claims</span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80">
                  <thead>
                    <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-semibold">
                      <th className="p-3">Creditor / Legal Proceeding</th>
                      <th className="p-3">Claim Amount</th>
                      <th className="p-3">Section 96 Statutory Status</th>
                      <th className="p-3 text-right">Debtor Position</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Bank Home Loan (SARFAESI Sec 13(4) Notice)</td>
                      <td className="p-3">₹28,00,000</td>
                      <td className="p-3 text-emerald-600 font-semibold">Deemed Stayed by Law</td>
                      <td className="p-3 text-right font-bold text-emerald-700">Property Auction Halted</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Personal Loan DRT Suit (Section 19 RDB Act)</td>
                      <td className="p-3">₹11,50,000</td>
                      <td className="p-3 text-emerald-600 font-semibold">Proceedings Frozen</td>
                      <td className="p-3 text-right font-bold text-emerald-700">No Attachment Decree</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Multiple Credit Card Collection Claims</td>
                      <td className="p-3">₹5,50,000</td>
                      <td className="p-3 text-blue-600 font-semibold">New Suits Barred</td>
                      <td className="p-3 text-right font-bold text-blue-700">Recovery Calls Stopped</td>
                    </tr>
                    <tr className="bg-blue-50/70 font-bold text-slate-900">
                      <td className="p-3">Consolidated Debt Under Resolution</td>
                      <td className="p-3 text-slate-900">₹45,00,000 Total</td>
                      <td className="p-3 text-emerald-700">Complete Litigation Freeze</td>
                      <td className="p-3 text-right text-[#1886ff] text-sm sm:text-base">100% Legal Insulation</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* SECTION 3: Scope of Protection */}
            <section id="scope-of-protection" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Scope &amp; Legal Proceeding Comparison</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Scope of Protection: Debt Recovery &amp; SARFAESI Stay
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                A critical question for borrowers is what proceedings are stayed under Section 96 and what exceptions exist. Because the interim moratorium applies in respect of the debt, its reach across civil recovery laws is broad and protective.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under the SARFAESI Act, 2002, secured lenders often issue possession notices under Section 13(4) or seek District Magistrate orders under Section 14. Once an application under Section 94 is filed, all recovery actions relating to the debt are deemed stayed. Lenders cannot conduct physical property seizures or e-auctions while the interim moratorium remains in effect.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Similarly, recovery proceedings before the Debt Recovery Tribunal under Section 19 of the RDB Act, 1993, civil money suits, and execution petitions under the Code of Civil Procedure are held in abeyance. Arbitral tribunals must also pause hearings regarding debt recovery claims.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                However, debtors must note essential statutory limitations. Excluded debts under Section 79(15) of the IBC are not wiped out or resolved through personal insolvency. Excluded debts include court fines, child maintenance or alimony, student education loans, and court-ordered damages for negligence or breach of duty.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[620px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Legal Action / Proceeding</th>
                      <th className="p-3">Governing Law</th>
                      <th className="p-3">Section 96 Moratorium Impact</th>
                      <th className="p-3">Judicial Position</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr className="bg-blue-50/30">
                      <td className="p-3 font-bold text-slate-900">SARFAESI Property Auctions</td>
                      <td className="p-3">SARFAESI Act, 2002 (Sec 13 &amp; 14)</td>
                      <td className="p-3 text-emerald-600 font-semibold">Deemed Stayed</td>
                      <td className="p-3">NCLAT confirms banks cannot sell assets during interim stay.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">DRT Recovery Applications</td>
                      <td className="p-3">RDB Act, 1993 (Section 19)</td>
                      <td className="p-3 text-emerald-600 font-semibold">Deemed Stayed</td>
                      <td className="p-3">Tribunal stays hearing of recovery applications and certificate execution.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Civil Money Recovery Suits</td>
                      <td className="p-3">Code of Civil Procedure, 1908</td>
                      <td className="p-3 text-emerald-600 font-semibold">Deemed Stayed</td>
                      <td className="p-3">Civil courts cannot pass money decrees or attachment warrants.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Commercial Arbitration Proceedings</td>
                      <td className="p-3">Arbitration &amp; Conciliation Act, 1996</td>
                      <td className="p-3 text-emerald-600 font-semibold">Deemed Stayed</td>
                      <td className="p-3">Arbitrators must suspend hearings and cannot enforce monetary awards.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Section 138 Cheque Bounce Trials</td>
                      <td className="p-3">Negotiable Instruments Act, 1881</td>
                      <td className="p-3 text-amber-600 font-semibold">Nuanced / Quasi-Criminal</td>
                      <td className="p-3">Debt recovery is stayed, but criminal trial may proceed unless High Court grants relief.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Excluded Debts (Alimony, Fines)</td>
                      <td className="p-3">IBC, 2016 (Section 79(15))</td>
                      <td className="p-3 text-rose-600 font-semibold">Not Protected</td>
                      <td className="p-3">Maintenance, court fines, and student loans remain enforceable.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 4: Judicial Precedents */}
            <section id="judicial-precedents" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>Judicial Jurisprudence &amp; Supreme Court Rulings</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. Judicial Precedents: Supreme Court on Interim Stay
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The constitutional validity and procedural mechanics of Section 94 to Section 100 were conclusively settled by the Supreme Court of India in the landmark case of Dilip B. Jiwrajka v. Union of India &amp; Ors. (2023 INSC 1010).
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                In this judgment, a three-judge bench of the Supreme Court examined whether the automatic interim moratorium violates natural justice because it commences without an initial court hearing. The Supreme Court upheld the constitutional validity of Sections 95 to 100 in full. The bench ruled that the interim moratorium is not an adjudication of liability. Rather, it is a protective measure intended to maintain the status quo.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The Supreme Court explained that the interim moratorium operates as a legal shield. It prevents creditors from taking hostile legal steps while the Resolution Professional collates debtor liabilities and submits an independent report under Section 99. The court clarified that the resolution professional functions as a facilitator, not a judicial adjudicator.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Earlier, in State Bank of India v. V. Ramakrishnan (2018) 17 SCC 394, the Supreme Court highlighted the distinction between Section 14 and Section 96. Under Section 96, the interim moratorium is debtor-specific and debt-specific. Appellate tribunals have consistently reinforced that lenders cannot violate this statutory stay by enforcing coercive asset sales or issuing threats.
              </p>
            </section>

            {/* SECTION 5: Visual Blueprint Infographic */}
            <section id="visual-blueprint" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Sparkles className="w-4 h-4 text-[#1886ff]" />
                <span>Visual Blueprint</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. Visual Blueprint: Section 94 Insolvency Workflow
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This comprehensive visual roadmap illustrates the step-by-step pathway under Part III of the IBC. It shows how filing under Section 94 triggers an immediate Section 96 interim moratorium, halts recovery lawsuits, and leads to an orderly debt resolution.
              </p>

              <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-slate-100 bg-slate-100">
                  <Image
                    src="/images/infographics/personal-insolvency-section-94-ibc-interim-moratorium.jpg"
                    alt="Section 94 IBC Personal Insolvency Interim Moratorium Workflow"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 900px"
                    className="object-contain hover:scale-[1.01] transition-transform duration-300"
                    priority
                  />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-500 pt-1 gap-2">
                  <span>Official CredSettle Personal Insolvency Framework • Section 94 &amp; 96 IBC Compliant</span>
                  <a
                    href="/images/infographics/personal-insolvency-section-94-ibc-interim-moratorium.jpg"
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

            {/* SECTION 6: Step-by-Step SOP */}
            <section id="step-by-step-sop" className="scroll-target space-y-6">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Standard Operating Procedure</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. Step-by-Step SOP: Section 94 Resolution Protocol
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Borrowers exploring personal insolvency must follow a disciplined, legally verified procedure. Executing this six-stage standard operating protocol ensures complete compliance and maximizes your financial protection.
              </p>

              <div className="space-y-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">1</span>
                    Stage 1: Complete Financial &amp; Liability Audit
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Compile a detailed schedule of all debts, including secured loans, unsecured personal loans, and credit cards. Separate qualifying debts from excluded liabilities under Section 79(15), such as court fines or child maintenance.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">2</span>
                    Stage 2: Application Filing in Proper Form
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Prepare the formal application under Section 94 along with requisite affidavits, asset statements, and default evidence. File before the jurisdictional DRT, or before the NCLT if the debtor is a personal guarantor to a corporate debtor in CIRP.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">3</span>
                    Stage 3: Service of Section 96 Interim Moratorium Notice
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Serve the registered filing receipt and formal interim moratorium notice on all lending banks, recovery departments, and pending court registries. Demand immediate suspension of SARFAESI notices and civil recovery suits.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">4</span>
                    Stage 4: Resolution Professional Appointment &amp; Report
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    The adjudicating authority directs the Insolvency and Bankruptcy Board of India (IBBI) to nominate a Resolution Professional under Section 97. The RP reviews your application and files an independent report under Section 99 within ten days.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">5</span>
                    Stage 5: Admission Order &amp; Section 101 Full Moratorium
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Under Section 100, the tribunal passes an order admitting or rejecting the application. Upon admission, the interim moratorium ceases and a full statutory moratorium under Section 101 begins for 180 days to prepare a formal repayment plan.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">6</span>
                    Stage 6: Repayment Plan or Strategic Out-of-Court OTS
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Submit a feasible repayment plan under Section 105 for creditor approval. Alternatively, use the statutory pause to negotiate a consensual One-Time Settlement (OTS) with lenders for deep principal waivers and clean No Dues Certificates.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: Debtor Rights & Protections */}
            <section id="debtor-rights" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <ShieldCheck className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Defenses &amp; Borrower Protections</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. Debtor Rights &amp; Protections Against Creditor Action
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                A common misconception among distressed borrowers is that defaulting on a loan deprives you of civil and statutory rights. Indian law provides strong safeguards against coercive creditor behavior during the insolvency resolution process.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Protection Against Recovery Harassment</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under the RBI Fair Practices Code and Section 96 of the IBC, lenders cannot send collection agents to your workplace or residence once an interim moratorium is in effect. Coercive collection constitutes an offense under BNS Section 351.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                    <Landmark className="w-4 h-4" />
                    <span>Bar on Bank Set-Off &amp; Freezes</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Creditor banks cannot unilaterally freeze unconnected savings accounts or seize retirement benefits once an interim moratorium is active. Any automated set-off debit violates Section 96 and must be reversed.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-purple-700 font-bold text-sm">
                    <Scale className="w-4 h-4" />
                    <span>Constitutional Article 21 &amp; 300A Shields</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The Supreme Court has confirmed that the right to a dignified livelihood under Article 21 protects individuals from arbitrary asset stripping. Property cannot be expropriated without due process of law.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <UserCheck className="w-4 h-4" />
                    <span>Right to Resolution Representation</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Debtors have the statutory right to be heard before the adjudicating tribunal, inspect the resolution professional report, and submit an adjusted repayment plan that reflects genuine living expenses.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 8: 3-Tier Resolution Matrix */}
            <section id="resolution-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Authority Framework</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. 3-Tier Resolution Matrix: Process &amp; Authorities
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Navigating personal insolvency requires understanding the roles of different statutory authorities throughout the resolution lifecycle. Here is how authority and review functions are structured.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Resolution Tier</th>
                      <th className="p-3">Statutory Authority</th>
                      <th className="p-3">Statutory Powers &amp; Scope</th>
                      <th className="p-3">Primary Deliverable</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Tier 1: Professional</td>
                      <td className="p-3">Insolvency Resolution Professional (RP)</td>
                      <td className="p-3">Appointed under Section 97. Examines debtor application, verifies debts, and facilitates repayment dialogue.</td>
                      <td className="p-3 font-mono text-xs">Section 99 Report within 10 days</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Tier 2: Adjudication</td>
                      <td className="p-3">Adjudicating Authority (DRT / NCLT)</td>
                      <td className="p-3">Tribunal decides admission or rejection under Section 100. Enforces Section 101 moratorium and approves repayment plan.</td>
                      <td className="p-3 font-mono text-xs">Admission Order &amp; Moratorium</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Tier 3: Appellate</td>
                      <td className="p-3">Appellate Tribunal (DRAT / NCLAT / SC)</td>
                      <td className="p-3">Hears appeals against tribunal orders under Section 61 or Section 181. Corrects procedural errors and upholds debtor stay.</td>
                      <td className="p-3 font-mono text-xs">Binding Appellate Decrees</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 9: Procedural Timeline */}
            <section id="procedural-timeline" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Clock className="w-4 h-4 text-[#1886ff]" />
                <span>Procedural Milestones</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Procedural Timeline: Application to Discharge Order
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Understanding the statutory milestones from application filing to final discharge order allows borrowers to plan their financial future with confidence.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Procedural Stage</th>
                      <th className="p-3">Timeline Milestone</th>
                      <th className="p-3">Legal Consequences &amp; Actions</th>
                      <th className="p-3">Borrower Strategy</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Application Filing</td>
                      <td className="p-3 font-mono text-[11px] text-[#1886ff] font-bold">Day 0</td>
                      <td className="p-3">Section 96 interim moratorium commences instantly. All pending recovery suits and SARFAESI actions stayed.</td>
                      <td className="p-3 font-bold text-slate-900">Serve interim moratorium notice to all banks.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">RP Appointment</td>
                      <td className="p-3 font-mono text-[11px]">Day 1 to 7</td>
                      <td className="p-3">Adjudicating authority directs IBBI to nominate an insolvency resolution professional under Section 97.</td>
                      <td className="p-3">Provide full debt documentation to the appointed RP.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">RP Report Submission</td>
                      <td className="p-3 font-mono text-[11px]">Day 7 to 10</td>
                      <td className="p-3">Resolution professional examines qualifying debts and submits Section 99 report recommending admission or rejection.</td>
                      <td className="p-3">Review RP report and confirm debt figures are accurate.</td>
                    </tr>
                    <tr className="bg-amber-50/50">
                      <td className="p-3 font-bold text-slate-900">Tribunal Adjudication</td>
                      <td className="p-3 font-mono text-[11px] text-amber-700 font-bold">Day 14 to 28</td>
                      <td className="p-3">Tribunal hears debtor and creditors, then passes order under Section 100 admitting or rejecting the application.</td>
                      <td className="p-3">Represent financial hardship before the adjudicating bench.</td>
                    </tr>
                    <tr className="bg-emerald-50/50">
                      <td className="p-3 font-bold text-slate-900">Full Moratorium &amp; Plan</td>
                      <td className="p-3 font-mono text-[11px] text-emerald-700 font-bold">180 Days Window</td>
                      <td className="p-3">Section 101 moratorium takes effect. Debtor prepares a repayment plan under Section 105 in consultation with the RP.</td>
                      <td className="p-3">Submit realistic repayment plan or negotiate OTS.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Discharge Order</td>
                      <td className="p-3 font-mono text-[11px]">Post-Implementation</td>
                      <td className="p-3">Upon successful completion of the repayment plan, the tribunal passes a discharge order under Section 112.</td>
                      <td className="p-3">Receive official discharge and rebuild credit profile.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: Specialized Real-World Scenarios */}
            <section id="specialized-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>Specialized Scenarios</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                10. Specialized Scenarios: Personal Guarantors &amp; MSME
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Personal insolvency provisions intersect with diverse borrowing structures across India. Here is how Section 94 and the Section 96 interim moratorium apply to specific borrower categories.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-[#1886ff]" />
                    Personal Guarantors to Corporate Debtors
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under central notifications in force since December 2019, personal guarantors to corporate entities in CIRP fall under NCLT jurisdiction. Filing under Section 94 immediately stays coercive guarantee invocation and DRT proceedings against the guarantor.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-emerald-600" />
                    Sole Proprietors &amp; Partnership Firms
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Sole proprietorships share personal liability with their owners. When business cash flows collapse, proprietors can invoke Section 94 before the DRT to consolidate business and personal credit lines into a single insolvency resolution framework.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-indigo-600" />
                    Emergency Injunction on SARFAESI E-Auctions
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If a secured bank issues an e-auction notice with thirty-day bidding deadlines, filing a Section 94 application imposes an automatic Section 96 stay. CredSettle notifies auction officers to protect valuable properties from distressed distress sales.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-amber-600" />
                    Multiple Unsecured Loans &amp; Credit Cards
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Borrowers overwhelmed by multiple credit cards and personal loans often face fragmented legal actions. Section 94 unifies all unsecured creditors under one collective forum, replacing piecemeal harassment with a structured resolution plan.
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
                Frequently Asked Questions: Section 94 IBC Moratorium
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Clear, verified legal guidance addressing critical questions regarding debtor applications, Section 96 interim stay rules, tribunal jurisdiction, and borrower protections in India.
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
                Official Regulatory Citations &amp; Statutory Authorities
              </h2>
              <ul className="space-y-2 text-xs text-slate-600 leading-relaxed list-disc pl-5">
                <li>
                  <strong>Insolvency and Bankruptcy Code, 2016 (IBC):</strong> Section 94 (Application by Debtor to Initiate Insolvency Resolution Process) and Section 96 (Interim-Moratorium).
                </li>
                <li>
                  <strong>Insolvency and Bankruptcy Code, 2016 (Part III):</strong> Section 97 (Appointment of Resolution Professional), Section 99 (Submission of Report by RP), Section 100 (Admission or Rejection), and Section 101 (Moratorium).
                </li>
                <li>
                  <strong>Supreme Court of India Benchmark Ruling:</strong> Dilip B. Jiwrajka v. Union of India &amp; Ors. (2023 INSC 1010), affirming the constitutional validity of Section 95 to Section 100.
                </li>
                <li>
                  <strong>Supreme Court Precedent on Moratorium Scope:</strong> State Bank of India v. V. Ramakrishnan (2018) 17 SCC 394, examining debtor-specific statutory stays.
                </li>
                <li>
                  <strong>Adjudicating Authority Jurisdiction:</strong> Section 60(2) &amp; (3) (NCLT Jurisdiction for Personal Guarantors) and Section 179 (DRT Jurisdiction for Individuals).
                </li>
                <li>
                  <strong>Reserve Bank of India Prudential Framework:</strong> RBI Guidelines on Stressed Asset Resolution and Out-of-Court Compromise Settlements.
                </li>
              </ul>

              {/* 6 Outbound Authority Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Verified Government &amp; Regulatory Portals:</span>
                <div className="flex flex-wrap gap-2">
                  <a href="https://ibbi.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>Insolvency &amp; Bankruptcy Board of India</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://nclt.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>National Company Law Tribunal</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://drt.etribunals.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>Debt Recovery Tribunals Portal</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://main.sci.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>Supreme Court of India Decisions</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.indiacode.nic.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>India Code Statutory Repository</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.rbi.org.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>Reserve Bank of India Guidelines</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* 12 Internal Topic Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Explore Related CredSettle Guides:</span>
                <div className="flex flex-wrap gap-2">
                  <Link href="/sarfaesi-section-14-physical-possession-order-dm-cmm" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    SARFAESI Section 14 Possession
                  </Link>
                  <Link href="/drt-notice-for-personal-loan-default" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    DRT Notice Defense
                  </Link>
                  <Link href="/willful-defaulter-notice-rbi-rules-legal-defense-guide" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Willful Defaulter Defense
                  </Link>
                  <Link href="/section-60-cpc-assets-property-exempt-from-bank-attachment" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Section 60 CPC Exempt Assets
                  </Link>
                  <Link href="/can-bank-seize-epf-provident-fund-for-loan-recovery" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    EPF &amp; Gratuity Seizure Rules
                  </Link>
                  <Link href="/loan-recall-notice-from-bank-legal-defense-reply-guide" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Loan Recall Notice Reply
                  </Link>
                  <Link href="/stop-recovery-agent-harassment" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Stop Recovery Harassment
                  </Link>
                  <Link href="/rbi-rules-for-recovery-agents" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    RBI Agent Guidelines
                  </Link>
                  <Link href="/services/personal-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Personal Loan Settlement
                  </Link>
                  <Link href="/services/business-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Business Loan Settlement
                  </Link>
                  <Link href="/get-noc-after-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    No Dues Certificate
                  </Link>
                  <Link href="/civil-suit-for-recovery-of-money-by-bank" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Civil Recovery Suit Defense
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
                Expert in insolvency law, personal guarantor resolution, SARFAESI defense, and negotiated debt compromise settlements under the Insolvency and Bankruptcy Code and RBI regulations.
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
                  CONFIDENTIAL LEGAL SHIELD
                </span>
                <p className="text-lg md:text-xl font-bold text-white leading-snug">
                  Facing Overwhelming Bank Recovery?
                </p>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our senior legal resolution specialists evaluate statutory protections under Section 94 IBC, stay aggressive recovery lawsuits, and negotiate up to 75% debt settlement waivers.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Protect Your Assets Now
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
                  <span>Statutory Protection • 100% Confidential</span>
                </div>
              </div>
            </div>

            {/* Card 3: CredSettle Trust Badges */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">The CredSettle Shield</p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Statutory Stay Defense:</strong> Stop SARFAESI &amp; DRT suits.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Harassment Shield:</strong> Stop recovery agents immediately.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Structured OTS:</strong> Up to 75% debt reduction.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Official Bank NOC:</strong> Complete legal closure.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">Related Legal Guides</p>
              <div className="space-y-2.5">
                <Link
                  href="/sarfaesi-section-14-physical-possession-order-dm-cmm"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    SARFAESI Section 14 Physical Possession
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Stop DM/CMM order execution &rarr;</span>
                </Link>

                <Link
                  href="/drt-notice-for-personal-loan-default"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    DRT Notice for Personal Loan Default
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Debt Recovery Tribunal defense &rarr;</span>
                </Link>

                <Link
                  href="/willful-defaulter-notice-rbi-rules-legal-defense-guide"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Willful Defaulter Notice Legal Defense
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Identification committee defense &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
