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
  FileText,
  HelpCircle,
  TrendingUp,
  Award,
  BookOpen,
  Building2,
  Lock,
  Phone,
  AlertCircle,
  GraduationCap,
  ArrowRight,
  Clock,
  Gavel,
  Landmark,
  Layers,
  Percent,
  FileCheck,
  ShieldAlert,
  BadgePercent,
  CheckCircle2
} from 'lucide-react';

export default function EducationLoanSettlementClient() {
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
    { id: 'quick-crux', label: 'Executive Summary' },
    { id: 'debt-economics-npa', label: '1. Debt Economics & NPA Dynamics' },
    { id: 'financial-breakdown-math', label: '2. Principal vs Penal Interest Breakdown' },
    { id: 'resolution-comparison-matrix', label: '3. Resolution Mechanisms Matrix' },
    { id: 'cibil-scoring-math', label: '4. Technical CIBIL & Co-Borrower Math' },
    { id: 'infographic-overview', label: '5. Visual 6-Stage Resolution Blueprint' },
    { id: 'step-by-step-settlement-sop', label: '6. 6-Stage Settlement SOP' },
    { id: 'statutory-notice-defense', label: '7. Statutory Notice Defense & Rights' },
    { id: 'three-tier-escalation', label: '8. 3-Tier Grievance Redressal Matrix' },
    { id: 'chronological-timeline', label: '9. Chronological Timelines & Milestones' },
    { id: 'real-world-scenarios', label: '10. Specialized Student Debt Scenarios' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
    {
      q: 'Can education loans be settled through a One-Time Settlement (OTS) in India?',
      a: 'Yes. When student borrowers face genuine post-graduation financial distress, such as prolonged unemployment or health crises, Indian banks and NBFCs can sanction an OTS to write off interest and accept a reduced principal lump sum.'
    },
    {
      q: 'What is the difference between collateralized and non-collateralized education loans under default?',
      a: 'Loans under ₹7.5 Lakhs are generally non-collateralized and backed by CGFSEL guarantee cover, limiting recovery to unsecured claims. Collateralized loans above ₹7.5 Lakhs involve pledged property, which lenders can attach under SARFAESI if unpaid.'
    },
    {
      q: 'How does the Credit Guarantee Fund Scheme for Educational Loans (CGFSEL) affect loan settlement?',
      a: 'CGFSEL provides banks with up to 75% credit risk cover on eligible defaulted loans up to ₹7.5 Lakhs. Because banks can claim fund compensation, they possess greater flexibility to negotiate compromise settlements with distressed students.'
    },
    {
      q: 'Are parents and co-borrowers legally liable for education loan default?',
      a: 'Yes. Parents who sign as co-borrowers share joint and several liability under Section 128 of the Indian Contract Act 1872, exposing their credit scores and income to recovery proceedings until a formal compromise is executed.'
    },
    {
      q: 'Can I request a moratorium extension if I have not secured employment after graduation?',
      a: 'Yes. Under IBA Model Educational Loan guidelines, graduates unable to secure placement can formally petition their lender for a moratorium extension of 6 to 12 months before the account is classified as delinquent.'
    },
    {
      q: 'How much waiver can borrowers typically expect in an education loan OTS?',
      a: 'In verified hardship cases where graduate earning capacity is impaired, credit committees routinely waive 100% of penal charges and accumulated compound interest, alongside a 35% to 55% discount on the core principal balance.'
    },
    {
      q: 'What happens to my CIBIL score and my co-borrower parent\'s score after settlement?',
      a: 'The loan status updates to Settled across credit bureaus, arresting negative overdue reporting. While scores temporarily decline, borrowers can rebuild their CIBIL score to 750+ within 12 to 24 months through disciplined credit repair.'
    },
    {
      q: 'Can banks initiate legal proceedings or send recovery agents to my workplace?',
      a: 'Lenders may issue statutory notices under Section 138 NI Act or Section 25 PSSA for unpaid mandates. However, recovery agent harassment, intimidation, and workplace visits violate the RBI Fair Practices Code and are strictly actionable.'
    },
    {
      q: 'Can education loans for overseas studies be settled if foreign employment falls through?',
      a: 'Yes. Overseas education loans from Indian banks or NBFCs are eligible for OTS. Demonstrating visa expiration, lack of foreign job placement, or currency repatriation distress helps establish bona fide hardship for principal concessions.'
    },
    {
      q: 'What documents are essential to negotiate an education loan settlement?',
      a: 'Essential documents include graduation completion certificates, proof of job search or termination, bank account statements proving insufficient income, medical records if applicable, and a formal written hardship petition addressed to the bank.'
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
          <span className="text-[11px] font-black uppercase tracking-wider text-blue-200 bg-white/10 px-3.5 py-1 rounded-full inline-block mb-3 border border-white/15">
            Student Debt Relief &amp; Co-Borrower Protection
          </span>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Education Loan Settlement in India
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-3xl mx-auto font-normal text-white/95 leading-relaxed">
            Resolve defaulted student debt under IBA guidelines and CGFSEL cover. Protect parent co-borrowers from CIBIL damage, stop recovery harassment, and negotiate 35% to 55% principal waivers when post-study employment fails.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Facing Education Loan Default? Get Legal Defense</span>
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
                      href={'#' + link.id}
                      className={'block py-1.5 px-2.5 rounded-lg transition-all duration-150 leading-snug ' + (
                        isActive
                          ? 'bg-blue-50 text-[#1886ff] font-bold border-l-3 border-[#1886ff] pl-2'
                          : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50 font-medium'
                      )}
                    >
                      {link.label}
                    </a>
                  );
                })}
              </nav>

              <div className="mt-4 pt-3 border-t border-slate-100 bg-blue-50/50 -mx-4 -mb-4 p-3 rounded-b-2xl">
                <div className="flex items-center gap-2 text-[11px] font-bold text-slate-800">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  <span>Student Debt Protection</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Governed by IBA Model Scheme, CGFSEL Guidelines, Indian Contract Act 1872, and RBI Fair Practices Code.
                </p>
              </div>
            </div>
          </aside>

          {/* ================= CENTER COLUMN: EDITORIAL CONTENT ================= */}
          <div className="space-y-10 min-w-0">

            {/* EXECUTIVE SUMMARY BOX (#F4F8FE with border-l-[5px] border-l-[#1886ff]) */}
            <section
              id="quick-crux"
              className="scroll-target rounded-2xl p-6 md:p-7 border border-blue-100 shadow-xs space-y-4"
              style={{ backgroundColor: '#F4F8FE', borderLeft: '5px solid #1886ff' }}
            >
              <div className="flex items-center gap-2.5 text-[#1886ff]">
                <GraduationCap className="w-5 h-5 flex-shrink-0" />
                <h2 className="text-lg md:text-xl font-extrabold text-slate-900">
                  Executive Summary: Student Debt Resolution &amp; Co-Borrower Shield
                </h2>
              </div>
              <p className="text-xs md:text-sm text-slate-700 leading-relaxed font-normal">
                Defaulting on an educational loan creates severe stress across Indian families because parents almost universally sign as joint co-borrowers. When campus placements fail, layoffs occur, or foreign work visas expire, servicing EMIs becomes unviable. Under Indian banking regulations, borrowers can execute a structured One-Time Settlement (OTS) rather than facing perpetual debt.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 pt-1">
                <div className="flex items-start gap-2 text-xs md:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>Non-collateralized loans under ₹7.5 Lakhs fall under CGFSEL cover, barring SARFAESI property attachment.</span>
                </div>
                <div className="flex items-start gap-2 text-xs md:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>Collateralized study loans above ₹7.5 Lakhs require structured legal defense to protect parental real estate.</span>
                </div>
                <div className="flex items-start gap-2 text-xs md:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>Graduates can petition for a 6 to 12-month moratorium extension under IBA Model Loan provisions.</span>
                </div>
                <div className="flex items-start gap-2 text-xs md:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>Credit committees approve 35% to 55% principal haircuts for verified post-study financial distress.</span>
                </div>
                <div className="flex items-start gap-2 text-xs md:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>100% waiver of accumulated penal interest, compounding levies, and late fees is standard under RBI rules.</span>
                </div>
                <div className="flex items-start gap-2 text-xs md:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>Parents are fully discharged from joint liability under Section 128 of the Indian Contract Act.</span>
                </div>
                <div className="flex items-start gap-2 text-xs md:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>Formal legal replies to Section 25 PSSA and Section 138 notices halt aggressive recovery harassment.</span>
                </div>
                <div className="flex items-start gap-2 text-xs md:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>Direct RTGS remittances into bank loan accounts secure an unconditional No Dues Certificate and CIBIL repair.</span>
                </div>
              </div>
            </section>

            {/* SECTION 1: DEBT ECONOMICS & NPA DYNAMICS */}
            <section id="debt-economics-npa" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                <Landmark className="w-5 h-5 text-[#1886ff]" />
                <h2 className="text-xl md:text-2xl font-bold text-slate-900">
                  1. Debt Economics &amp; Educational NPA Classification Dynamics
                </h2>
              </div>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Educational loans in India carry distinct credit dynamics because they are sanctioned on expected future earnings rather than tangible balance sheets. When students face hiring freezes or currency repatriation distress, loan servicing breaks down once the course moratorium expires.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under RBI prudential norms, delinquent accounts advance through Special Mention Account buckets: SMA-0 (1-30 days overdue), SMA-1 (31-60 days), and SMA-2 (61-90 days). On the 91st day, the loan is classified as a Non-Performing Asset (NPA), requiring mandatory 15% to 100% provisioning against bank Tier-1 capital.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                For non-collateralized loans under ₹7.5 Lakhs backed by the Credit Guarantee Fund Scheme for Educational Loans (CGFSEL), lenders cannot invoke SARFAESI property attachment. Knowing civil recovery takes years in court, credit committees prefer an OTS to recover capital promptly and clear balance sheets.
              </p>
            </section>

            {/* SECTION 2: FINANCIAL BREAKDOWN & SETTLEMENT MATH */}
            <section id="financial-breakdown-math" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                <Percent className="w-5 h-5 text-[#1886ff]" />
                <h2 className="text-xl md:text-2xl font-bold text-slate-900">
                  2. Principal vs Penal Interest Breakdown &amp; OTS Financial Math
                </h2>
              </div>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Student loan debt escalates rapidly during default due to accrued moratorium interest and punitive penal charges of 24% to 36% per annum. However, RBI Fair Practices Code rules prohibit capitalizing penal charges into core principal. A forensic ledger audit strips unauthorized levies, establishing the true settlement baseline.
              </p>
              
              {/* Financial Calculation Card */}
              <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs p-5 md:p-6 space-y-4">
                <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <BadgePercent className="w-5 h-5 text-[#1886ff]" />
                  Representative 180-Day NPA Student Loan Settlement (₹15 Lakh MBA Facility)
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs md:text-sm">
                  <div className="bg-slate-50 p-4 rounded-xl space-y-2 border border-slate-100">
                    <span className="font-bold text-slate-800 block text-xs uppercase tracking-wider text-rose-600">Bank Demand (Pre-OTS Claim)</span>
                    <div className="flex justify-between py-1 border-b border-slate-200">
                      <span className="text-slate-600">Disbursed Principal:</span>
                      <span className="font-semibold text-slate-900">₹15,00,000</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-200">
                      <span className="text-slate-600">Moratorium Interest:</span>
                      <span className="font-semibold text-slate-900">₹4,50,000</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-200">
                      <span className="text-slate-600">Penal &amp; Bounce Charges:</span>
                      <span className="font-semibold text-rose-600">₹2,20,000</span>
                    </div>
                    <div className="flex justify-between pt-1 font-bold text-slate-900 text-sm">
                      <span>Total Claim:</span>
                      <span className="text-rose-700">₹21,70,000</span>
                    </div>
                  </div>

                  <div className="bg-blue-50/60 p-4 rounded-xl space-y-2 border border-blue-100">
                    <span className="font-bold text-slate-800 block text-xs uppercase tracking-wider text-[#1886ff]">Negotiated Compromise Settlement</span>
                    <div className="flex justify-between py-1 border-b border-blue-200/60">
                      <span className="text-slate-600">Penal Charges Waived:</span>
                      <span className="font-semibold text-emerald-600">100% (-₹2,20,000)</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-blue-200/60">
                      <span className="text-slate-600">Overdue Interest Waived:</span>
                      <span className="font-semibold text-emerald-600">100% (-₹4,50,000)</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-blue-200/60">
                      <span className="text-slate-600">Principal Haircut (45%):</span>
                      <span className="font-semibold text-emerald-600">-₹6,75,000</span>
                    </div>
                    <div className="flex justify-between pt-1 font-bold text-slate-900 text-sm">
                      <span>Final Agreed Payout:</span>
                      <span className="text-emerald-700 font-extrabold">₹8,25,000 (62% Savings)</span>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Documenting unemployment proves to credit committees that an immediate ₹8.25 Lakh lump sum offers superior recovery over uncollectible debt.
                </p>
              </div>
            </section>

            {/* SECTION 3: 4-SIDED BORDERED COMPARISON MATRIX */}
            <section id="resolution-comparison-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                <Scale className="w-5 h-5 text-[#1886ff]" />
                <h2 className="text-xl md:text-2xl font-bold text-slate-900">
                  3. Student Debt Resolution Pathways: Strategic Comparative Matrix
                </h2>
              </div>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Evaluating available legal and financial avenues allows graduates and parents to select the most viable debt resolution strategy.
              </p>

              {/* 4-Sided Bordered Table */}
              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto shadow-xs bg-white">
                <table className="w-full text-left text-xs md:text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-100/80 text-slate-800 font-bold border-b border-slate-200/80 divide-x divide-slate-200/80">
                      <th className="p-3.5 md:p-4">Resolution Pathway</th>
                      <th className="p-3.5 md:p-4">Debt Haircut Scope</th>
                      <th className="p-3.5 md:p-4">Closure Timeline</th>
                      <th className="p-3.5 md:p-4">Parent Co-Borrower Liability</th>
                      <th className="p-3.5 md:p-4">Credit Score Trajectory</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-700">
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/80 transition-colors">
                      <td className="p-3.5 md:p-4 font-semibold text-slate-900">One Time Settlement (OTS)</td>
                      <td className="p-3.5 md:p-4 text-emerald-600 font-semibold">35% to 55% Principal + 100% Fees</td>
                      <td className="p-3.5 md:p-4">30 to 90 Days</td>
                      <td className="p-3.5 md:p-4 text-emerald-700 font-medium">Full discharge via NDC</td>
                      <td className="p-3.5 md:p-4">Settled tag, repairable in 12-24m</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/80 transition-colors">
                      <td className="p-3.5 md:p-4 font-semibold text-slate-900">Moratorium Extension</td>
                      <td className="p-3.5 md:p-4 text-amber-600 font-medium">0% Haircut (Tenure elongation)</td>
                      <td className="p-3.5 md:p-4">60 to 120 Days</td>
                      <td className="p-3.5 md:p-4 text-amber-700">Parental liability continues</td>
                      <td className="p-3.5 md:p-4">Restructured tag</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/80 transition-colors">
                      <td className="p-3.5 md:p-4 font-semibold text-slate-900">DRT / Court Litigation</td>
                      <td className="p-3.5 md:p-4 text-slate-600">Uncertain decree</td>
                      <td className="p-3.5 md:p-4 text-rose-600 font-medium">3 to 7 Years</td>
                      <td className="p-3.5 md:p-4 text-rose-700">Persistent parental asset threat</td>
                      <td className="p-3.5 md:p-4 text-rose-600">Suit Filed tag</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/80 transition-colors">
                      <td className="p-3.5 md:p-4 font-semibold text-slate-900">Lok Adalat Conciliation</td>
                      <td className="p-3.5 md:p-4 text-emerald-600 font-medium">15% to 35% Interest Waivers</td>
                      <td className="p-3.5 md:p-4">Single Session</td>
                      <td className="p-3.5 md:p-4">Enforceable consent award</td>
                      <td className="p-3.5 md:p-4">Lok Adalat Settled tag</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/80 transition-colors">
                      <td className="p-3.5 md:p-4 font-semibold text-slate-900">Inaction / Default</td>
                      <td className="p-3.5 md:p-4 text-rose-600 font-semibold">0% (Debt compounds)</td>
                      <td className="p-3.5 md:p-4">Indefinite</td>
                      <td className="p-3.5 md:p-4 text-rose-700">Severe asset attachment risk</td>
                      <td className="p-3.5 md:p-4 text-rose-700 font-bold">Score crashes (&lt;550)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 4: TECHNICAL CIBIL ALGORITHM & SCORING MATH */}
            <section id="cibil-scoring-math" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                <TrendingUp className="w-5 h-5 text-[#1886ff]" />
                <h2 className="text-xl md:text-2xl font-bold text-slate-900">
                  4. Technical CIBIL Algorithm &amp; Co-Borrower Scoring Dynamics
                </h2>
              </div>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Credit bureaus evaluate education loans against both the primary student and the co-borrowing parent. TransUnion CIBIL scoring calculates creditworthiness across five weighted factors: Payment History (35%), Credit Exposure (30%), History Length (15%), Credit Mix (10%), and Inquiries (10%).
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Default triggers concurrent Days Past Due (DPD) reporting on both files, slashing scores by 150 to 250 points and paralyzing parental access to emergency credit.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                An executed OTS stops negative DPD reporting immediately. Under Section 21 of the Credit Information Companies (Regulation) Act (CICRA) 2005, borrowers can update bureau records with their No Dues Certificate, allowing systematic credit score recovery back to 750+ within 12 to 24 months.
              </p>
            </section>

            {/* SECTION 5: VISUAL INFOGRAPHIC ASSET CARD */}
            <section id="infographic-overview" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                <FileCheck className="w-5 h-5 text-[#1886ff]" />
                <h2 className="text-xl md:text-2xl font-bold text-slate-900">
                  5. Visual Blueprint: 6-Stage Education Loan Settlement Framework
                </h2>
              </div>
              <div className="bg-white rounded-3xl border border-slate-200/80 shadow-sm p-4 md:p-6 space-y-3">
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-slate-950 border border-slate-800">
                  <Image
                    src="/images/infographics/education-loan-settlement.jpg"
                    alt="Education Loan Settlement in India 6-Stage Strategic Framework"
                    fill
                    priority
                    className="object-contain"
                    sizes="(max-width: 1200px) 100vw, 900px"
                  />
                </div>
                <div className="flex flex-wrap items-center justify-between gap-2 pt-2 text-xs text-slate-600">
                  <span>Official CredSettle Framework: Student Debt Compromise, CGFSEL Cover &amp; Co-Borrower Discharge</span>
                  <a
                    href="/images/infographics/education-loan-settlement.jpg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1886ff] hover:underline font-bold flex items-center gap-1"
                  >
                    <span>View High-Resolution Visual</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </section>

            {/* SECTION 6: STEP-BY-STEP SOP (6 STAGES) */}
            <section id="step-by-step-settlement-sop" className="scroll-target space-y-5">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                <Layers className="w-5 h-5 text-[#1886ff]" />
                <h2 className="text-xl md:text-2xl font-bold text-slate-900">
                  6. Step-by-Step SOP: 6 Stages of Education Loan Compromise
                </h2>
              </div>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Following this structured 6-stage Standard Operating Procedure ensures student debt is resolved lawfully while protecting parental assets.
              </p>

              <div className="space-y-3.5 text-sm md:text-base text-slate-700 leading-relaxed">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] font-bold text-xs flex items-center justify-center">1</span>
                    Stage 1: Forensic Loan &amp; CGFSEL Audit
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Counsel examines sanction letters, interest compounding during moratoriums, and verifies CGFSEL guarantee coverage to establish co-borrower exposure limits.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] font-bold text-xs flex items-center justify-center">2</span>
                    Stage 2: Hardship Dossier Compilation
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    The borrower compiles proof of unemployment, placement rejection records, medical summaries, and 12-month bank statements demonstrating financial insolvency.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] font-bold text-xs flex items-center justify-center">3</span>
                    Stage 3: Statutory Legal Notice Defense
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    When lenders issue Section 25 PSSA or Section 138 notices, counsel submits formal legal responses within 15-30 days to halt harassment.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] font-bold text-xs flex items-center justify-center">4</span>
                    Stage 4: Credit Committee Representation
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Formal OTS petitions are submitted to the Stressed Assets Desk, proving that a 35% to 55% cash settlement maximizes net recovery.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] font-bold text-xs flex items-center justify-center">5</span>
                    Stage 5: Settlement Sanction Letter Vetting
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Attorneys review the bank formal OTS letter to ensure 100% penal waiver and full discharge of parental guarantees under Section 128.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 font-bold text-xs flex items-center justify-center">6</span>
                    Stage 6: Remittance &amp; No Dues Certificate
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Funds are remitted directly to the loan account via RTGS, securing an unconditional No Dues Certificate and updated credit bureau files.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: STATUTORY NOTICE DEFENSE & LEGAL RIGHTS */}
            <section id="statutory-notice-defense" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                <Gavel className="w-5 h-5 text-[#1886ff]" />
                <h2 className="text-xl md:text-2xl font-bold text-slate-900">
                  7. Statutory Notice Defense &amp; Borrower Legal Rights
                </h2>
              </div>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Understanding statutory instruments enables borrowers to defend against aggressive recovery and assert their consumer protections under Indian law.
              </p>

              <div className="space-y-3.5 text-xs md:text-sm text-slate-700 leading-relaxed">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm md:text-base">
                    <ShieldAlert className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                    <span>Section 25 Payment &amp; Settlement Systems Act (PSSA)</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    For failed NACH mandates, legal defense establishes that dishonour stemmed from genuine unemployment without criminal intent, confirming willingness to settle.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm md:text-base">
                    <FileText className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                    <span>Section 138 Negotiable Instruments Act (Cheque Dishonour)</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    For bounced security cheques, counsel demonstrates that security instruments deposited without reconciled debt amounts cannot support criminal prosecution.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm md:text-base">
                    <Scale className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                    <span>Section 21 Arbitration Act &amp; Perkins Precedent</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    Lenders cannot unilaterally appoint sole arbitrators; unilateral arbitral proceedings are challenged under Section 12(5) of the Arbitration Act.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm md:text-base">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>DRT Jurisdiction &amp; Fair Practices Code</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    DRT proceedings under Section 19 RDBFI Act require claims exceeding ₹20 Lakhs. The RBI Fair Practices Code strictly prohibits agent visits to workplaces or harassment.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 8: 3-TIER ESCALATION MATRIX */}
            <section id="three-tier-escalation" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                <Building2 className="w-5 h-5 text-[#1886ff]" />
                <h2 className="text-xl md:text-2xl font-bold text-slate-900">
                  8. 3-Tier Institutional Grievance &amp; Escalation Matrix
                </h2>
              </div>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When bank branches stall settlement talks or engage in coercive tactics, borrowers can utilize the RBI statutory grievance framework.
              </p>

              <div className="space-y-3.5 text-xs md:text-sm text-slate-700 leading-relaxed">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-slate-900 text-sm">Tier 1: Bank Internal Grievance Redressal Officer (GRO)</h3>
                    <span className="text-[11px] font-bold text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-full">7-10 Days</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    File a written complaint regarding improper fee capitalization or agent harassment, required to be addressed within 7 to 10 days.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-slate-900 text-sm">Tier 2: Bank Principal Nodal Officer (PNO)</h3>
                    <span className="text-[11px] font-bold text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-full">14-21 Days</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    Escalate deadlocked negotiations to the zonal Principal Nodal Officer for credit committee intervention within 14 to 21 days.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-slate-900 text-sm">Tier 3: RBI Integrated Ombudsman Scheme</h3>
                    <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">cms.rbi.org.in</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    Lodge a statutory complaint on cms.rbi.org.in for Fair Practices Code violations or delays in issuing No Dues Certificates.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 9: CHRONOLOGICAL TIMELINE TABLE */}
            <section id="chronological-timeline" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                <Clock className="w-5 h-5 text-[#1886ff]" />
                <h2 className="text-xl md:text-2xl font-bold text-slate-900">
                  9. Chronological Resolution Timeline: From Delinquency to Clean NDC
                </h2>
              </div>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                An education loan settlement progresses across five operational milestones over six months.
              </p>

              {/* 4-Sided Bordered Timeline Table */}
              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto shadow-xs bg-white">
                <table className="w-full text-left text-xs md:text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-100/80 text-slate-800 font-bold border-b border-slate-200/80 divide-x divide-slate-200/80">
                      <th className="p-3.5 md:p-4">Timeframe</th>
                      <th className="p-3.5 md:p-4">Account Status</th>
                      <th className="p-3.5 md:p-4">Banking &amp; Legal Action</th>
                      <th className="p-3.5 md:p-4">Strategic Counter-Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-700">
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/80 transition-colors">
                      <td className="p-3.5 md:p-4 font-semibold text-slate-900">Days 1 to 30</td>
                      <td className="p-3.5 md:p-4 text-blue-700 font-medium">SMA-0 Category</td>
                      <td className="p-3.5 md:p-4">Automated reminders</td>
                      <td className="p-3.5 md:p-4">Submit moratorium extension petition</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/80 transition-colors">
                      <td className="p-3.5 md:p-4 font-semibold text-slate-900">Days 31 to 90</td>
                      <td className="p-3.5 md:p-4 text-amber-700 font-medium">SMA-1 / SMA-2</td>
                      <td className="p-3.5 md:p-4">Recall notices and co-borrower calls</td>
                      <td className="p-3.5 md:p-4">Compile hardship dossier and audit ledger</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/80 transition-colors">
                      <td className="p-3.5 md:p-4 font-semibold text-slate-900">Day 91+</td>
                      <td className="p-3.5 md:p-4 text-rose-700 font-semibold">NPA Classification</td>
                      <td className="p-3.5 md:p-4">Mandatory bank provisioning</td>
                      <td className="p-3.5 md:p-4">Submit formal OTS proposal</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/80 transition-colors">
                      <td className="p-3.5 md:p-4 font-semibold text-slate-900">Month 4 to 5</td>
                      <td className="p-3.5 md:p-4 text-purple-700 font-medium">Active Negotiation</td>
                      <td className="p-3.5 md:p-4">Statutory legal notices issued</td>
                      <td className="p-3.5 md:p-4">File formal legal replies and negotiate haircut</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/80 transition-colors">
                      <td className="p-3.5 md:p-4 font-semibold text-slate-900">Month 6</td>
                      <td className="p-3.5 md:p-4 text-emerald-700 font-bold">Debt Discharged</td>
                      <td className="p-3.5 md:p-4">Bank issues OTS sanction letter</td>
                      <td className="p-3.5 md:p-4">Remit funds, obtain NDC and update CIBIL</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: SPECIALIZED REAL-WORLD SCENARIOS */}
            <section id="real-world-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                <AlertCircle className="w-5 h-5 text-[#1886ff]" />
                <h2 className="text-xl md:text-2xl font-bold text-slate-900">
                  10. Specialized Real-World Student Debt Scenarios &amp; Case Commentary
                </h2>
              </div>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Addressing specific educational debt situations requires tailored legal and financial resolution strategies.
              </p>

              <div className="space-y-3.5 text-xs md:text-sm text-slate-700 leading-relaxed">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <h3 className="font-bold text-slate-900 text-sm">Multi-Lender &amp; Fintech Stacking</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Resolving supplementary fintech loans requires synchronized negotiations to secure uniform principal waivers across all creditors.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <h3 className="font-bold text-slate-900 text-sm">Overseas Study Default &amp; Visa Expiration</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Demonstrating post-study visa expiry and forced return to lower domestic salary levels provides justification for deep principal haircuts.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <h3 className="font-bold text-slate-900 text-sm">Parental Pension &amp; Asset Protection</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Invoking Section 60 CPC protects parental retirement pensions and agricultural assets from unlawful recovery attachment.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <h3 className="font-bold text-slate-900 text-sm">ARC Debt Assignments</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Stressed student loans sold to Asset Reconstruction Companies at discounts allow aggressive compromise settlements with 50% to 70% waivers.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 11: COMPANY PROFILE COMPONENT */}
            <section id="company-profile" className="scroll-target">
              <CompanySection />
            </section>

            {/* SECTION 12: 10 SYNCHRONIZED FAQS */}
            <section id="frequently-asked-questions" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                <HelpCircle className="w-5 h-5 text-[#1886ff]" />
                <h2 className="text-xl md:text-2xl font-bold text-slate-900">
                  Frequently Asked Questions: Education Loan Settlement
                </h2>
              </div>
              <p className="text-xs md:text-sm text-slate-600">
                Essential legal and financial inquiries regarding student debt resolution, parent co-borrower rights, CGFSEL provisions, and One-Time Settlement procedures in India.
              </p>

              <div className="space-y-3">
                {faqs.map((faq, index) => {
                  const isOpen = openFaq === index;
                  return (
                    <div
                      key={index}
                      className="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden transition-all duration-200"
                    >
                      <button
                        type="button"
                        onClick={() => toggleFaq(index)}
                        className="w-full p-4 md:p-5 text-left flex items-center justify-between gap-4 font-bold text-slate-900 text-xs md:text-sm hover:text-[#1886ff] transition-colors"
                      >
                        <span>{faq.q}</span>
                        <ChevronDown
                          className={'w-4 h-4 text-slate-400 transition-transform duration-200 flex-shrink-0 ' + (
                            isOpen ? 'rotate-180 text-[#1886ff]' : ''
                          )}
                        />
                      </button>
                      {isOpen && (
                        <div className="px-4 pb-4 md:px-5 md:pb-5 text-xs md:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                          <p>{faq.a}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>

            {/* SECTION 13: CITATIONS & OUTBOUND AUTHORITY GRID */}
            <section id="regulatory-sources" className="scroll-target space-y-4 pt-4">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                <Award className="w-5 h-5 text-[#1886ff]" />
                <h2 className="text-lg md:text-xl font-bold text-slate-900">
                  Statutory Citations &amp; Institutional Authorities
                </h2>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                CredSettle resolution procedures strictly adhere to statutory frameworks including the IBA Model Educational Loan Scheme, CGFSEL Guidelines, Section 128 Indian Contract Act (1872), Section 25 PSSA (2007), Section 138 NI Act (1881), and CICRA (2005).
              </p>

              {/* Outbound Badges */}
              <div className="space-y-2 pt-2">
                <span className="text-xs font-bold text-slate-700 block uppercase tracking-wider">
                  Verified Regulators:
                </span>
                <div className="flex flex-wrap gap-2">
                  <a
                    href="https://www.rbi.org.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-[#1886ff] hover:text-[#1886ff] text-slate-700 transition-colors font-medium inline-flex items-center gap-1.5 shadow-2xs"
                  >
                    <span>Reserve Bank of India (rbi.org.in)</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                  <a
                    href="https://cms.rbi.org.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-[#1886ff] hover:text-[#1886ff] text-slate-700 transition-colors font-medium inline-flex items-center gap-1.5 shadow-2xs"
                  >
                    <span>RBI Integrated Ombudsman (cms.rbi.org.in)</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                  <a
                    href="https://www.cibil.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-[#1886ff] hover:text-[#1886ff] text-slate-700 transition-colors font-medium inline-flex items-center gap-1.5 shadow-2xs"
                  >
                    <span>TransUnion CIBIL (cibil.com)</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                  <a
                    href="https://www.indiacode.nic.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-[#1886ff] hover:text-[#1886ff] text-slate-700 transition-colors font-medium inline-flex items-center gap-1.5 shadow-2xs"
                  >
                    <span>India Code (indiacode.nic.in)</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                  <a
                    href="https://nalsa.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-[#1886ff] hover:text-[#1886ff] text-slate-700 transition-colors font-medium inline-flex items-center gap-1.5 shadow-2xs"
                  >
                    <span>NALSA (nalsa.gov.in)</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                  <a
                    href="https://cybercrime.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-[#1886ff] hover:text-[#1886ff] text-slate-700 transition-colors font-medium inline-flex items-center gap-1.5 shadow-2xs"
                  >
                    <span>Cyber Crime Portal (cybercrime.gov.in)</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                </div>
              </div>

              {/* Internal Related Badges */}
              <div className="space-y-2 pt-3 border-t border-slate-200/80">
                <span className="text-xs font-bold text-slate-700 block uppercase tracking-wider">
                  Related Guides:
                </span>
                <div className="flex flex-wrap gap-2">
                  <Link href="/best-lawyer-for-education-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Education Loan Lawyer
                  </Link>
                  <Link href="/guarantor-liability-personal-loan-default" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Guarantor Liability Guide
                  </Link>
                  <Link href="/bank-recovery-harassment-complaint" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Stop Recovery Harassment
                  </Link>
                  <Link href="/ecs-nach-bounce-legal-notice-section-25" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Section 25 PSSA Notice
                  </Link>
                  <Link href="/section-138-cheque-bounce-personal-loan" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Section 138 Cheque Bounce
                  </Link>
                  <Link href="/convert-settled-status-to-closed" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Convert Settled to Closed
                  </Link>
                  <Link href="/remove-settled-status-from-cibil" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Remove Settled from CIBIL
                  </Link>
                  <Link href="/full-and-final-settlement-meaning" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Settlement Meaning
                  </Link>
                  <Link href="/improve-cibil-after-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Rebuild CIBIL Score
                  </Link>
                  <Link href="/get-noc-after-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Get NOC Certificate
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
                Specialized in student loan dispute defense, CGFSEL banking compliance, and co-borrower compromise negotiations across Indian banking forums.
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
                  <ShieldCheck className="w-3.5 h-3.5" /> CredSettle Panel
                </span>
              </div>
            </div>

            {/* Card 2: Emergency CTA Card (#2452ae Background) */}
            <div
              className="rounded-3xl p-6 text-white text-center space-y-4 shadow-md relative overflow-hidden"
              style={{ backgroundColor: '#2452ae' }}
            >
              <div className="space-y-1 text-center">
                <span className="text-[10px] font-black uppercase tracking-wider text-blue-200 bg-white/10 px-3 py-1 rounded-full inline-block mb-1">
                  100% CONFIDENTIAL STUDENT DEBT DEFENSE
                </span>
                <h3 className="text-lg md:text-xl font-bold text-white leading-snug">
                  Facing Education Loan Default?
                </h3>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our debt specialists protect parent co-borrowers from harassment, represent your case before bank committees, and negotiate 35% to 55% principal waivers.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Facing Education Loan Default? Get Legal Defense
              </Link>
              <div className="pt-2 flex flex-col items-center justify-center gap-1 text-[11px] text-blue-200">
                <div className="flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5 text-blue-200" />
                  <a href="tel:+918800226635" className="hover:underline font-bold text-white">
                    Call: +91-8800226635
                  </a>
                </div>
                <div className="flex items-center gap-1 text-[10px] text-blue-300">
                  <Lock className="w-3 h-3" />
                  <span>Direct Bank Settlement • RBI Compliant</span>
                </div>
              </div>
            </div>

            {/* Card 3: Trust Badges Card */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3">
              <h4 className="font-bold text-xs uppercase tracking-wider text-slate-800 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>CredSettle Protection Standards</span>
              </h4>
              <div className="space-y-2 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0" />
                  <span>IBA Model Scheme Compliance</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0" />
                  <span>CGFSEL Guarantee Shield</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0" />
                  <span>Section 128 Co-Borrower Immunity</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0" />
                  <span>Direct-to-Bank RTGS Settlement</span>
                </div>
              </div>
            </div>

          </aside>

        </div>
      </div>
    </main>
  );
}
