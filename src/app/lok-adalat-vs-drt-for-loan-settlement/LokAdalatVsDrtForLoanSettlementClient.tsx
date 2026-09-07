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
  Award,
  BookOpen,
  Building2,
  DollarSign,
  Check,
  Lock,
  Phone,
  AlertCircle,
  CreditCard,
  Briefcase,
  Bookmark,
  ArrowRight,
  Clock,
  UserCheck,
  Sparkles,
  Gavel,
  BadgeAlert,
  Landmark,
  Layers,
  FileCheck2
} from 'lucide-react';

export default function LokAdalatVsDrtForLoanSettlementClient() {
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
    { id: 'debt-economics-forum-jurisdiction', label: '1. Legal Foundations & Jurisdiction' },
    { id: 'financial-breakdown-settlement-math', label: '2. Claim Math & Waiver Margins' },
    { id: 'comprehensive-comparison-matrix', label: '3. 5-Way Legal Forum Matrix' },
    { id: 'cibil-algorithm-credit-restoration', label: '4. CIBIL Impact & Post-Settlement' },
    { id: 'visual-infographic-asset', label: '5. Visual Decision Blueprint' },
    { id: 'step-by-step-decision-sop', label: '6. 6-Stage Resolution SOP' },
    { id: 'statutory-rights-defense-grid', label: '7. Statutory Protections & Rights' },
    { id: 'three-tier-escalation-matrix', label: '8. 3-Tier Grievance Redressal' },
    { id: 'chronological-procedural-timeline', label: '9. Chronological Timeline' },
    { id: 'specialized-decision-scenarios', label: '10. Real-World Case Scenarios' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authority' }
  ];

  const faqs = [
    {
      q: 'What is the main difference between Lok Adalat and DRT for loan settlement?',
      a: 'Lok Adalat is an alternative dispute resolution forum focused on mutual conciliation with zero court fees for any loan amount, whereas the Debt Recovery Tribunal (DRT) is a formal statutory judicial tribunal handling default claims of ₹20 Lakhs and above under the RDB Act, 1993.'
    },
    {
      q: 'Can a bank force a loan settlement on me in Lok Adalat?',
      a: 'No. Lok Adalat functions strictly on voluntary mutual consent under the Legal Services Authorities Act, 1987. If you do not agree with the bank\'s settlement figure or payment terms, the bench cannot impose any decision, and the matter returns to regular proceedings without penalty.'
    },
    {
      q: 'Is a Lok Adalat settlement decree final and non-appealable?',
      a: 'Yes. Under Section 21 of the Legal Services Authorities Act, 1987, an award passed by Lok Adalat is deemed a civil court decree. Because it is founded on mutual consent, no appeal lies against this award before any appellate court, ensuring permanent dispute closure.'
    },
    {
      q: 'What is the minimum loan default threshold required to file a case in DRT?',
      a: 'Under Section 1(4) of the Recovery of Debts and Bankruptcy (RDB) Act, 1993, the statutory pecuniary threshold for banks and NBFCs to institute an Original Application before the Debt Recovery Tribunal is strictly ₹20 Lakhs and above.'
    },
    {
      q: 'Which forum offers higher loan settlement discounts and penal interest waivers?',
      a: 'Lok Adalat generally yields higher and faster waivers, often between 50% and 75% on total accumulated dues, as banks aim for immediate NPA resolution. In DRT, compromise One-Time Settlements (OTS) typically range between 40% and 60% on total claims after challenging compound penal charges.'
    },
    {
      q: 'Can you face arrest or jail time for defaulting on a personal loan in DRT or Lok Adalat?',
      a: 'No. Unsecured personal loan and credit card default is purely a civil contractual dispute. Neither Lok Adalat nor DRT has the criminal authority to order arrest or imprisonment for honest financial inability to repay unsecured credit.'
    },
    {
      q: 'How does a borrower appeal an adverse DRT order, and what is the pre-deposit?',
      a: 'A final or interim DRT order can be appealed before the Debt Recovery Appellate Tribunal (DRAT) under Section 20 of the RDB Act within 30 days. However, Section 21 requires a mandatory pre-deposit of 50% of the debt, reducible to a minimum of 25% upon proving severe hardship.'
    },
    {
      q: 'What happens if a borrower settles a pending DRT case in Lok Adalat?',
      a: 'When a pending DRT litigation is resolved through Lok Adalat or pre-Lok Adalat conciliation, the parties execute joint consent terms. The DRT disposes of the original application, and the bank files for a full refund of tribunal court fees under Section 21(1) of the Legal Services Authorities Act.'
    },
    {
      q: 'How long does a loan settlement take in Lok Adalat compared to DRT litigation?',
      a: 'A Lok Adalat settlement is concluded in a single day once terms are mutually agreed upon during pre-conciliation sittings. Conversely, contested DRT proceedings typically take 12 to 24 months unless resolved earlier through a negotiated out-of-court compromise OTS.'
    },
    {
      q: 'How does loan settlement in Lok Adalat or DRT affect my CIBIL credit score?',
      a: 'Upon settlement payment, the lender issues a No Dues Certificate and reports the account status as "Settled" or "Post-Settlement Closed" to credit bureaus under Section 21 of CICRA. Borrowers can gradually rebuild their score to 750+ over 12 to 24 months through disciplined credit utilization.'
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-xs font-bold text-blue-100 mb-4 border border-white/15">
            <Scale className="w-3.5 h-3.5 text-blue-200" />
            <span>ADR Conciliation vs Debt Recovery Tribunal Litigation</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Lok Adalat vs DRT for Loan Settlement: Which Option Is Better?
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            Struggling to choose between Lok Adalat conciliation and Debt Recovery Tribunal proceedings for your loan default? Compare statutory authority, waiver percentages, decree finality, and financial timelines to pick the ideal legal path.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Compare Your Legal Options</span>
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
                  <span>Statutory Dispute Guide</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Governed under the Legal Services Authorities Act, 1987 &amp; Recovery of Debts and Bankruptcy Act, 1993.
                </p>
              </div>
            </div>
          </aside>

          {/* ================= MIDDLE COLUMN: MAIN CONTENT ================= */}
          <div className="space-y-8 md:space-y-10 min-w-0">
            
            {/* Executive Summary Box */}
            <div
              id="quick-crux"
              className="scroll-target rounded-2xl bg-[#F4F8FE] border border-blue-100/90 border-l-[5px] border-l-[#1886ff] p-5 sm:p-6 md:p-7 shadow-xs space-y-4 text-slate-800"
            >
              <div className="flex items-center gap-2 text-xs md:text-sm font-black uppercase tracking-wider text-[#1886ff]">
                <Bookmark className="w-4 h-4 text-[#1886ff]" />
                <span>EXECUTIVE SUMMARY: LOK ADALAT VS DRT RESOLUTION CRUX</span>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-slate-700 leading-normal">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <div>
                    <strong className="text-slate-900 font-bold">Pecuniary Limits:</strong> Lok Adalat handles any loan amount; DRT requires ₹20L+ defaults.
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <div>
                    <strong className="text-slate-900 font-bold">Forum Nature:</strong> Lok Adalat is consensual conciliation; DRT is adversarial litigation.
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <div>
                    <strong className="text-slate-900 font-bold">Decree Finality:</strong> Lok Adalat awards are non-appealable civil decrees under Sec 21 LSAA.
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <div>
                    <strong className="text-slate-900 font-bold">Waiver Margins:</strong> 50%–75% waivers in Lok Adalat vs 40%–60% via DRT compromise OTS.
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <div>
                    <strong className="text-slate-900 font-bold">Court Fees:</strong> ₹0 in Lok Adalat with full court fee refunds on settled pending suits.
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <div>
                    <strong className="text-slate-900 font-bold">Voluntary Consent:</strong> 100% mutual agreement; benches cannot impose unilateral terms.
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <div>
                    <strong className="text-slate-900 font-bold">Civil Immunity:</strong> Purely civil recovery with zero powers of arrest or imprisonment.
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <div>
                    <strong className="text-slate-900 font-bold">Resolution Speed:</strong> Same-day binding award at Lok Adalat vs 12–24 months in DRT.
                  </div>
                </div>
              </div>
            </div>

            {/* SECTION 1: Debt Economics & Legal Foundations */}
            <section id="debt-economics-forum-jurisdiction" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Jurisdiction &amp; Banking Economics</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. Legal Foundations: Lok Adalat vs Debt Recovery Tribunal (DRT)
              </h2>
              <div className="space-y-4 text-slate-700 leading-relaxed text-sm md:text-base">
                <p>
                  When loan accounts encounter non-payment extending past the 90-day threshold, Reserve Bank of India prudential norms classify them as Non-Performing Assets (NPAs). This classification mandates that commercial banks and NBFCs allocate substantial Tier-1 capital provisioning to offset balance-sheet risk. To recover capital and de-clog their distressed portfolios, institutional lenders must select an appropriate legal forum based on the loan structure, security availability, and total outstanding debt quantum.
                </p>
                <p>
                  For debts of ₹20 Lakhs and above, financial institutions routinely invoke Section 19 of the Recovery of Debts and Bankruptcy (RDB) Act, 1993, by filing an Original Application (OA) before the Debt Recovery Tribunal. The DRT is a specialized judicial body designed to expedite recovery by bypassing ordinary civil courts. In contrast, for smaller retail loans, credit card balances, or high-volume NPA batches, banks frequently approach the National Lok Adalat, organized under the Legal Services Authorities Act, 1987.
                </p>
                <p>
                  The foundational divergence lies in judicial philosophy. The DRT functions as an adversarial tribunal where both parties present evidence, submit formal pleadings, and contest legal technicalities under procedural rules. Conversely, Lok Adalat is an Alternative Dispute Resolution (ADR) mechanism based entirely on mutual conciliation and equitable settlement. Understanding this structural difference enables borrowers to choose whether to engage in rapid conciliation or leverage formal procedural defenses to negotiate a discounted One-Time Settlement (OTS).
                </p>
              </div>
            </section>

            {/* SECTION 2: Financial Breakdown & Settlement Math */}
            <section id="financial-breakdown-settlement-math" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                <span>Financial Analysis &amp; Settlement Economics</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. Financial Breakdown: Waiver Percentages and Claim Economics
              </h2>
              <div className="space-y-4 text-slate-700 leading-relaxed text-sm md:text-base">
                <p>
                  A primary consideration for any borrower navigating debt resolution is the achievable discount on total accumulated dues. When a loan defaults, banks automatically compound contractual interest, penal interest, bounce charges, and administrative overheads, inflating the total demand by 40% to 70% over the original principal balance. How these inflated claims are settled differs drastically between Lok Adalat and DRT.
                </p>
                <p>
                  During National Lok Adalat sittings, institutional lenders operate under special NPA recovery mandates approved by their board committees. In this forum, bank representatives are authorized to waive up to 100% of penal surcharges, accumulated interest, and even a portion of the original principal to achieve immediate cash recovery. In DRT matters, however, lenders often pursue the entire inflated figure until the borrower files a robust Written Statement challenging compounding practices under Supreme Court precedents. Once challenged, banks negotiate a compromise OTS, generally yielding 40% to 60% total relief.
                </p>

                <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-4">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-[#1886ff]" />
                    Comparative Settlement Scenario: ₹25 Lakhs Defaulted Unsecured Loan
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                    <div className="space-y-2">
                      <div className="flex justify-between py-1.5 border-b border-slate-100">
                        <span className="text-slate-600">Original Principal Disbursed:</span>
                        <span className="font-bold text-slate-900">₹25,00,000</span>
                      </div>
                      <div className="flex justify-between py-1.5 border-b border-slate-100">
                        <span className="text-slate-600">Principal Balance at Default:</span>
                        <span className="font-bold text-slate-900">₹20,50,000</span>
                      </div>
                      <div className="flex justify-between py-1.5 border-b border-slate-100">
                        <span className="text-slate-600">Accrued Contractual Interest (15% p.a.):</span>
                        <span className="font-bold text-slate-900">₹4,60,000</span>
                      </div>
                      <div className="flex justify-between py-1.5 border-b border-slate-100">
                        <span className="text-slate-600">Compounded Penal Surcharges &amp; Fees:</span>
                        <span className="font-bold text-red-600">₹3,90,000</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between py-1.5 border-b border-slate-100">
                        <span className="text-slate-600">Total Demanded Ledger Claim:</span>
                        <span className="font-bold text-red-700">₹29,00,000</span>
                      </div>
                      <div className="flex justify-between py-1.5 border-b border-slate-100 bg-emerald-50/60 px-2 rounded-md">
                        <span className="font-semibold text-emerald-900">Lok Adalat Settlement (55%–70% Relief):</span>
                        <span className="font-extrabold text-emerald-700">₹8,70,000 – ₹13,05,000</span>
                      </div>
                      <div className="flex justify-between py-1.5 border-b border-slate-100 bg-blue-50/60 px-2 rounded-md">
                        <span className="font-semibold text-blue-900">DRT Compromise OTS (40%–60% Relief):</span>
                        <span className="font-extrabold text-[#1886ff]">₹11,60,000 – ₹17,40,000</span>
                      </div>
                      <div className="flex justify-between py-1.5 border-b border-slate-100">
                        <span className="text-slate-600">Litigation &amp; Court Fee Burden:</span>
                        <span className="font-semibold text-slate-800">Lok Adalat: ₹0 | DRT: High</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-slate-500 italic">
                    Note: Final figures depend on financial hardship documentation, loan age, and credit committee approval. All payments must be deposited directly to the bank against a formal written sanction letter.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 3: 4-Sided Bordered Comparison Matrix */}
            <section id="comprehensive-comparison-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Comparative Legal Matrix</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Legal Forum Matrix: Lok Adalat vs DRT vs Other Recovery Paths
              </h2>
              <div className="space-y-4 text-slate-700 leading-relaxed text-sm md:text-base">
                <p>
                  To make an informed decision on your debt resolution strategy, it is critical to compare Lok Adalat and the Debt Recovery Tribunal alongside alternative recovery methods such as civil summary suits, arbitration, and direct bilateral negotiations:
                </p>

                <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                  <table className="w-full text-left text-xs md:text-sm">
                    <thead className="bg-slate-50 border-b border-slate-200/80 text-slate-700">
                      <tr>
                        <th className="p-3.5 font-bold border-r border-slate-200/80">Resolution Forum</th>
                        <th className="p-3.5 font-bold border-r border-slate-200/80">Pecuniary Jurisdiction</th>
                        <th className="p-3.5 font-bold border-r border-slate-200/80">Nature of Forum</th>
                        <th className="p-3.5 font-bold border-r border-slate-200/80">Decree Finality &amp; Appeal</th>
                        <th className="p-3.5 font-bold border-r border-slate-200/80">Court Fees</th>
                        <th className="p-3.5 font-bold text-[#1886ff]">Target Settlement Waiver</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-600">
                      <tr className="hover:bg-slate-50/50">
                        <td className="p-3.5 font-bold text-slate-900 border-r border-slate-200/80">National Lok Adalat</td>
                        <td className="p-3.5 border-r border-slate-200/80">Any Value (No Limit)</td>
                        <td className="p-3.5 border-r border-slate-200/80 text-emerald-700 font-semibold">Consensual ADR</td>
                        <td className="p-3.5 border-r border-slate-200/80">Non-Appealable Civil Decree</td>
                        <td className="p-3.5 border-r border-slate-200/80 font-bold text-emerald-700">₹0 (Zero Fee)</td>
                        <td className="p-3.5 text-emerald-700 font-bold">50% to 75% Total Relief</td>
                      </tr>
                      <tr className="hover:bg-slate-50/50">
                        <td className="p-3.5 font-bold text-slate-900 border-r border-slate-200/80">Debt Recovery Tribunal (DRT)</td>
                        <td className="p-3.5 border-r border-slate-200/80 font-semibold text-slate-800">₹20 Lakhs &amp; Above</td>
                        <td className="p-3.5 border-r border-slate-200/80 text-blue-700 font-semibold">Adversarial Judicial</td>
                        <td className="p-3.5 border-r border-slate-200/80">Appeal to DRAT (25%–50% Deposit)</td>
                        <td className="p-3.5 border-r border-slate-200/80 text-slate-700">Ad Valorem Tribunal Fee</td>
                        <td className="p-3.5 text-[#1886ff] font-bold">40% to 60% Compromise OTS</td>
                      </tr>
                      <tr className="hover:bg-slate-50/50">
                        <td className="p-3.5 font-bold text-slate-900 border-r border-slate-200/80">Summary Civil Suit (Order 37)</td>
                        <td className="p-3.5 border-r border-slate-200/80">Below ₹20 Lakhs</td>
                        <td className="p-3.5 border-r border-slate-200/80">Civil Court Litigation</td>
                        <td className="p-3.5 border-r border-slate-200/80">Regular Appeal in District / HC</td>
                        <td className="p-3.5 border-r border-slate-200/80 text-slate-700">Full State Court Fee</td>
                        <td className="p-3.5 text-slate-700 font-semibold">35% to 50% via Consent Terms</td>
                      </tr>
                      <tr className="hover:bg-slate-50/50">
                        <td className="p-3.5 font-bold text-slate-900 border-r border-slate-200/80">Arbitration Tribunal</td>
                        <td className="p-3.5 border-r border-slate-200/80">Contractual Threshold</td>
                        <td className="p-3.5 border-r border-slate-200/80">Private Arbitral Body</td>
                        <td className="p-3.5 border-r border-slate-200/80">Section 34 Petition in Civil Court</td>
                        <td className="p-3.5 border-r border-slate-200/80 text-slate-700">Arbitrator &amp; Admin Fees</td>
                        <td className="p-3.5 text-slate-700 font-semibold">30% to 45% during proceedings</td>
                      </tr>
                      <tr className="hover:bg-slate-50/50">
                        <td className="p-3.5 font-bold text-slate-900 border-r border-slate-200/80">Complete Inaction / Default</td>
                        <td className="p-3.5 border-r border-slate-200/80">N/A</td>
                        <td className="p-3.5 border-r border-slate-200/80 text-red-700 font-semibold">Uncontested Default</td>
                        <td className="p-3.5 border-r border-slate-200/80">Ex-Parte Recovery Certificate</td>
                        <td className="p-3.5 border-r border-slate-200/80 text-red-700 font-semibold">Execution Costs Added</td>
                        <td className="p-3.5 text-red-700 font-bold">0% Waiver (Full Attachment)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* SECTION 4: Technical CIBIL Algorithm & Scoring Math */}
            <section id="cibil-algorithm-credit-restoration" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                <span>Credit Bureau Architecture &amp; Scoring Trajectory</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. CIBIL Algorithm Dynamics &amp; Credit Bureau Restoration
              </h2>
              <div className="space-y-4 text-slate-700 leading-relaxed text-sm md:text-base">
                <p>
                  Regardless of whether a settlement is finalized through a Lok Adalat consent award or a DRT compromise order, the resolution impacts your credit profile across the four Reserve Bank of India authorized credit bureaus: TransUnion CIBIL, Equifax, Experian, and CRIF High Mark. Credit scoring algorithms evaluate consumer profiles across five primary weights: payment history (35%), credit exposure and utilization (30%), length of credit history (15%), credit mix (10%), and new credit inquiries (10%).
                </p>
                <p>
                  When an account is settled with a partial waiver, banking software reports the account status as &quot;Settled&quot; or &quot;Post-Settlement Closed&quot; rather than &quot;Closed&quot;. This flag registers a historical credit loss, causing an initial score drop of 75 to 150 points and restricting immediate access to fresh unsecured credit. However, this is vastly preferable to an open &quot;Written Off&quot; or &quot;Suit Filed&quot; status, which completely freezes loan eligibility.
                </p>
                <p>
                  Under Section 21 of the Credit Information Companies (Regulation) Act, 2005 (CICRA), lenders are legally required to update bureau databases within 30 days of receiving settlement consideration and issuing a No Dues Certificate. Borrowers can restore their credit score above 750 within 12 to 24 months by establishing a new trade line, utilizing secured fixed-deposit credit cards with utilization below 30%, maintaining flawless repayment timeliness, or subsequently paying the remaining balance to convert the record from &quot;Settled&quot; to &quot;Closed&quot;.
                </p>
              </div>
            </section>

            {/* SECTION 5: Visual Infographic Asset Card */}
            <section id="visual-infographic-asset" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Sparkles className="w-4 h-4 text-[#1886ff]" />
                <span>Visual Legal Guide</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. Visual Comparison: Lok Adalat vs DRT at a Glance
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Review this comparative visual breakdown illustrating jurisdictional limits, fee structures, decree finality, and settlement waiver timelines between Lok Adalat conciliation and Debt Recovery Tribunal litigation:
              </p>

              <div className="bg-white p-3 sm:p-4 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-slate-100">
                  <Image
                    src="/images/infographics/lok-adalat-vs-drt-for-loan-settlement.jpg"
                    alt="Lok Adalat vs DRT for Loan Settlement Visual Infographic Comparison"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 60vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-between gap-2 px-1 text-xs text-slate-600">
                  <span>Authoritative legal comparison produced by the CredSettle Research &amp; Advisory Panel.</span>
                  <a
                    href="/images/infographics/lok-adalat-vs-drt-for-loan-settlement.jpg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1886ff] font-bold hover:underline inline-flex items-center gap-1"
                  >
                    <span>View Full Resolution</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </section>

            {/* SECTION 6: Step-by-Step SOP (6 Stages) */}
            <section id="step-by-step-decision-sop" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Award className="w-4 h-4 text-[#1886ff]" />
                <span>Standard Operating Procedure</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. 6-Stage SOP: Choosing and Navigating the Right Legal Forum
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Navigating loan resolution across either forum demands a disciplined, step-by-step legal protocol. Follow this six-stage standard operating procedure to maximize waiver margins and safeguard your legal rights:
              </p>

              <div className="space-y-4 pt-2">
                {/* Stage 1 */}
                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 01
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Timeline: Days 1–5</span>
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-slate-900">
                    Debt Exposure Audit &amp; Jurisdictional Assessment
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Audit defaulted exposure across lenders to verify if total balances cross the statutory ₹20 Lakhs DRT threshold.
                  </p>
                </div>

                {/* Stage 2 */}
                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 02
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Timeline: Days 6–15</span>
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-slate-900">
                    Notice Verification &amp; Response Preparation
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Verify summons validity, note delivery dates, and track the 30-day response window to prevent ex-parte DRT decrees.
                  </p>
                </div>

                {/* Stage 3 */}
                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 03
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Timeline: Days 16–25</span>
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-slate-900">
                    Hardship Dossier &amp; Forensic Ledger Analysis
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Assemble income loss and medical proof while auditing loan statements to isolate unapproved penal interest compounding.
                  </p>
                </div>

                {/* Stage 4 */}
                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 04
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Timeline: Days 26–45</span>
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-slate-900">
                    Forum Appearance &amp; Strategic Negotiations
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Attend DLSA conciliation sittings or submit a formal DRT Written Statement while initiating bilateral compromise talks.
                  </p>
                </div>

                {/* Stage 5 */}
                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 05
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Timeline: Days 46–75</span>
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-slate-900">
                    Sanction Letter Vetting &amp; Terms Finalization
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Vet the bank sanction letter to confirm full satisfaction, debt waiver, and mandatory withdrawal of pending litigation.
                  </p>
                </div>

                {/* Stage 6 */}
                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 06
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Timeline: Days 76–90</span>
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-slate-900">
                    Direct Remittance, Final Decree &amp; NDC
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Remit settlement funds directly to the lender, obtain the final non-appealable award/order, and collect your NDC.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: Statutory Notice Defense & Legal Rights */}
            <section id="statutory-rights-defense-grid" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Jurisprudence &amp; Defense Framework</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. Statutory Rights &amp; Legal Defenses Across Forums
              </h2>
              <div className="space-y-4 text-slate-700 leading-relaxed text-sm md:text-base">
                <p>
                  Borrowers facing recovery actions in either Lok Adalat or the Debt Recovery Tribunal are protected by robust statutory safeguards under Indian law. Whether defending an Original Application or negotiating in conciliation, these four legal pillars govern your rights:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                  <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                    <div className="flex items-center gap-2 text-[#1886ff] font-bold text-sm">
                      <Scale className="w-4 h-4" />
                      <span>Section 21 Legal Services Authorities Act</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Lok Adalat awards carry civil decree status with zero appeal rights, permanently barring lenders from reopening settled claims.
                    </p>
                  </div>

                  <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                    <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                      <Clock className="w-4 h-4" />
                      <span>Section 19(5) RDB Act Response Timelines</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Mandatory 30-day statutory window to file a Written Statement, dispute unverified service, and block ex-parte decrees.
                    </p>
                  </div>

                  <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                    <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                      <Gavel className="w-4 h-4" />
                      <span>Central Bank of India v. Ravindra</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Supreme Court precedent barring capitalization of penal interest, stripping phantom compounding from bank tribunal demands.
                    </p>
                  </div>

                  <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                    <div className="flex items-center gap-2 text-amber-700 font-bold text-sm">
                      <ShieldCheck className="w-4 h-4" />
                      <span>RBI Fair Practices Code Protections</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Strict prohibition against abusive collection agents, workplace harassment, or calling outside authorized regulatory hours.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 8: 3-Tier Escalation Matrix */}
            <section id="three-tier-escalation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff]" />
                <span>Institutional Redressal Mechanisms</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. 3-Tier Escalation Matrix: Resolving Impasses and Grievances
              </h2>
              <div className="space-y-4 text-slate-700 leading-relaxed text-sm md:text-base">
                <p>
                  If you encounter rigid bank recovery desks, incorrect debt calculations, or procedural irregularities during Lok Adalat or DRT proceedings, you should systematically escalate through this established 3-tier grievance matrix:
                </p>

                <div className="space-y-3 pt-1">
                  <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                        Level 1: Principal Nodal Officer (PNO) &amp; DLSA Helpdesk
                      </span>
                      <span className="text-xs text-slate-500 font-semibold">Turnaround: 7–10 Days</span>
                    </div>
                    <h3 className="text-sm md:text-base font-bold text-slate-900">
                      Internal Bank Escalation &amp; Pre-Conciliation Referral
                    </h3>
                    <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                      Submit written representations on ledger errors and request reference to the bank&apos;s Special OTS Committee.
                    </p>
                  </div>

                  <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-md">
                        Level 2: DRAT Appeal (Section 20) / State Legal Services Authority
                      </span>
                      <span className="text-xs text-slate-500 font-semibold">Turnaround: 15–30 Days</span>
                    </div>
                    <h3 className="text-sm md:text-base font-bold text-slate-900">
                      Appellate Tribunal Review &amp; Legal Services Oversight
                    </h3>
                    <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                      Appeal adverse DRT interim orders before the DRAT (Sec 20) or escalate conciliation impasses to the SLSA.
                    </p>
                  </div>

                  <div className="bg-white p-5 rounded-2xl border border-emerald-200 shadow-xs space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">
                        Level 3: Reserve Bank of India Integrated Ombudsman
                      </span>
                      <span className="text-xs text-slate-500 font-semibold">Turnaround: 30 Days</span>
                    </div>
                    <h3 className="text-sm md:text-base font-bold text-slate-900">
                      Regulatory Complaint on CMS Portal (cms.rbi.org.in)
                    </h3>
                    <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                      Lodge regulatory complaints for recovery harassment, refusal to honor settlement terms, or delayed NOC issuance.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 9: Chronological Procedural Milestones Table */}
            <section id="chronological-procedural-timeline" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Clock className="w-4 h-4 text-[#1886ff]" />
                <span>Procedural Milestones</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Chronological Milestones: Default to Final Resolution
              </h2>
              <div className="space-y-4 text-slate-700 leading-relaxed text-sm md:text-base">
                <p>
                  The progression from initial loan default to final decree execution follows structured procedural phases across both resolution avenues:
                </p>

                <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                  <table className="w-full text-left text-xs md:text-sm">
                    <thead className="bg-slate-50 border-b border-slate-200/80 text-slate-700">
                      <tr>
                        <th className="p-3.5 font-bold border-r border-slate-200/80">Timeline</th>
                        <th className="p-3.5 font-bold border-r border-slate-200/80">Loan Classification</th>
                        <th className="p-3.5 font-bold border-r border-slate-200/80">Lok Adalat Pathway</th>
                        <th className="p-3.5 font-bold text-[#1886ff]">DRT Judicial Pathway</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-600">
                      <tr className="hover:bg-slate-50/50">
                        <td className="p-3.5 font-bold text-slate-900 border-r border-slate-200/80">Days 1–90</td>
                        <td className="p-3.5 border-r border-slate-200/80 font-medium">SMA-0 to SMA-2</td>
                        <td className="p-3.5 border-r border-slate-200/80">Soft collection calls &amp; reminders</td>
                        <td className="p-3.5 text-slate-700">Internal bank recovery notices issued</td>
                      </tr>
                      <tr className="hover:bg-slate-50/50">
                        <td className="p-3.5 font-bold text-slate-900 border-r border-slate-200/80">Days 91–180</td>
                        <td className="p-3.5 border-r border-slate-200/80 font-medium text-amber-700">NPA Classification</td>
                        <td className="p-3.5 border-r border-slate-200/80">Account referred to DLSA Pre-Lok Adalat list</td>
                        <td className="p-3.5 text-slate-700">Legal demand notice under Section 138/PSSA/DRT</td>
                      </tr>
                      <tr className="hover:bg-slate-50/50">
                        <td className="p-3.5 font-bold text-slate-900 border-r border-slate-200/80">Months 6–9</td>
                        <td className="p-3.5 border-r border-slate-200/80 font-medium">Sub-Standard Asset</td>
                        <td className="p-3.5 border-r border-slate-200/80 text-emerald-700 font-semibold">Pre-conciliation meetings &amp; OTS negotiation</td>
                        <td className="p-3.5 text-blue-700 font-semibold">Section 19 OA filed in DRT (₹20L+ loans)</td>
                      </tr>
                      <tr className="hover:bg-slate-50/50">
                        <td className="p-3.5 font-bold text-slate-900 border-r border-slate-200/80">Months 9–12</td>
                        <td className="p-3.5 border-r border-slate-200/80 font-medium">Doubtful Asset</td>
                        <td className="p-3.5 border-r border-slate-200/80 font-bold text-emerald-700">Final consent award executed on Lok Adalat day</td>
                        <td className="p-3.5 text-slate-700">30-day Written Statement filed &amp; OTS talks open</td>
                      </tr>
                      <tr className="hover:bg-slate-50/50">
                        <td className="p-3.5 font-bold text-slate-900 border-r border-slate-200/80">Months 12–24</td>
                        <td className="p-3.5 border-r border-slate-200/80 font-medium text-red-700">Loss / Deep NPA</td>
                        <td className="p-3.5 border-r border-slate-200/80">N/A (Dispute already permanently closed)</td>
                        <td className="p-3.5 text-emerald-700 font-bold">Joint Compromise Terms filed; DRT case closed</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* SECTION 10: Specialized Real-World Decision Scenarios */}
            <section id="specialized-decision-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>Decision Scenarios &amp; Case Studies</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                10. Real-World Scenarios: Which Forum Should You Choose?
              </h2>
              <div className="space-y-4 text-slate-700 leading-relaxed text-sm md:text-base">
                <p>
                  Every borrower&apos;s financial and legal circumstances are unique. Consider these four representative real-world scenarios to determine the most advantageous forum for your situation:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                  <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                    <span className="text-xs font-bold text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md inline-block">
                      Scenario A: Unsecured Debt Under ₹20 Lakhs
                    </span>
                    <h3 className="text-sm md:text-base font-bold text-slate-900">
                      Clear Preference for Lok Adalat
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Ideal for credit cards and retail loans below ₹20L with zero court fees and immediate 50%–75% debt waivers.
                    </p>
                  </div>

                  <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                    <span className="text-xs font-bold text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-md inline-block">
                      Scenario B: Jumbo Unsecured Debt Above ₹20 Lakhs
                    </span>
                    <h3 className="text-sm md:text-base font-bold text-slate-900">
                      DRT Defense Combined with Parallel OTS
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      File a 30-day Written Statement to block ex-parte orders while negotiating a compromise OTS with the Zonal Committee.
                    </p>
                  </div>

                  <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md inline-block">
                      Scenario C: Loans Sold to Asset Reconstruction Companies (ARCs)
                    </span>
                    <h3 className="text-sm md:text-base font-bold text-slate-900">
                      Deep Discount Settlements via Conciliation
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      ARCs buy distressed debt at steep discounts and frequently approve 60%–75% cash settlements for quick closure.
                    </p>
                  </div>

                  <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                    <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-md inline-block">
                      Scenario D: Multiple Loans Across Multiple Lenders
                    </span>
                    <h3 className="text-sm md:text-base font-bold text-slate-900">
                      Hybrid Resolution Strategy
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Settle smaller facilities swiftly in Lok Adalat while dedicating legal resources to defend larger claims in DRT.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 11: Company Profile Component */}
            <div id="company-profile" className="scroll-target">
              <CompanySection />
            </div>

            {/* SECTION 12: 10 Synchronized FAQs */}
            <section id="frequently-asked-questions" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <HelpCircle className="w-4 h-4 text-[#1886ff]" />
                <span>Frequently Asked Questions</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                10. Frequently Asked Questions: Lok Adalat vs DRT
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Clear, definitive answers to the most critical legal and financial questions surrounding loan settlement through Lok Adalat and the Debt Recovery Tribunal:
              </p>

              <div className="space-y-3 pt-2">
                {faqs.map((faq, index) => {
                  const isOpen = openFaq === index;
                  return (
                    <div
                      key={index}
                      className="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden transition-all"
                    >
                      <button
                        onClick={() => toggleFaq(index)}
                        className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-bold text-slate-900 hover:text-[#1886ff] transition-colors text-sm sm:text-base"
                      >
                        <span>{faq.q}</span>
                        <ChevronDown
                          className={`w-4 h-4 text-slate-400 flex-shrink-0 transition-transform duration-200 ${
                            isOpen ? 'transform rotate-180 text-[#1886ff]' : ''
                          }`}
                        />
                      </button>
                      {isOpen && (
                        <div className="px-4 pb-5 sm:px-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>

            {/* SECTION 13: Citations & Outbound Authority Grid */}
            <section id="regulatory-sources" className="scroll-target space-y-4 bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Landmark className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Authorities &amp; Legal Citations</span>
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
                Authoritative Legal Citations &amp; Official Portals
              </h2>
              <div className="space-y-3 text-xs text-slate-600 leading-relaxed">
                <p>
                  This comparative legal analysis is anchored in the statutory provisions of the Legal Services Authorities Act, 1987, the Recovery of Debts and Bankruptcy Act, 1993, the Credit Information Companies (Regulation) Act, 2005, and authoritative Supreme Court rulings including Central Bank of India v. Ravindra (2002) 1 SCC 367.
                </p>

                {/* 6 Outbound Authority Badges */}
                <div className="flex flex-wrap gap-2 pt-1">
                  <a
                    href="https://www.rbi.org.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200 inline-flex items-center gap-1"
                  >
                    <span>Reserve Bank of India (rbi.org.in)</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a
                    href="https://cms.rbi.org.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200 inline-flex items-center gap-1"
                  >
                    <span>RBI Integrated Ombudsman (cms.rbi.org.in)</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a
                    href="https://nalsa.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200 inline-flex items-center gap-1"
                  >
                    <span>National Legal Services Authority (nalsa.gov.in)</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a
                    href="https://www.cibil.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200 inline-flex items-center gap-1"
                  >
                    <span>TransUnion CIBIL (cibil.com)</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a
                    href="https://www.indiacode.nic.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200 inline-flex items-center gap-1"
                  >
                    <span>India Code Statutory Repository (indiacode.nic.in)</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a
                    href="https://cybercrime.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200 inline-flex items-center gap-1"
                  >
                    <span>National Cyber Crime Portal (cybercrime.gov.in)</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* 10 Internal Topic Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Explore Related CredSettle Legal &amp; Debt Guides:</span>
                <div className="flex flex-wrap gap-2">
                  <Link href="/drt-notice-for-personal-loan-default" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    DRT Notice Defense
                  </Link>
                  <Link href="/bank-sent-legal-notice-for-loan-what-to-do" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Bank Legal Notice Reply
                  </Link>
                  <Link href="/arbitration-notice-personal-loan-default" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Arbitration Notice Defense
                  </Link>
                  <Link href="/civil-suit-for-recovery-of-money-by-bank" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Civil Money Suit Defense
                  </Link>
                  <Link href="/services/personal-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Personal Loan Settlement
                  </Link>
                  <Link href="/services/anti-harassment" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Anti-Harassment Shield
                  </Link>
                  <Link href="/convert-settled-status-to-closed" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Convert Settled to Closed
                  </Link>
                  <Link href="/full-and-final-settlement-meaning" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Full &amp; Final Settlement Guide
                  </Link>
                  <Link href="/get-noc-after-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Get NOC Certificate
                  </Link>
                  <Link href="/cibil-score-kaise-badhaye-after-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Rebuild CIBIL Score
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
                Specialized in banking dispute advisory, Lok Adalat pre-conciliation representation, Section 19 DRT defense, and high-value NPA compromise settlements across India.
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

            {/* Card 2: Emergency CTA Card (#2452ae Background) */}
            <div
              className="rounded-3xl p-6 text-white text-center space-y-4 shadow-md relative overflow-hidden"
              style={{ backgroundColor: '#2452ae' }}
            >
              <div className="space-y-1 text-center">
                <span className="text-xs font-black uppercase tracking-wider text-blue-200 bg-white/10 px-3 py-1 rounded-full inline-block mb-1">
                  CONFIDENTIAL LEGAL &amp; DEBT ADVISORY
                </span>
                <h3 className="text-lg md:text-xl font-bold text-white leading-snug">
                  Unsure About Lok Adalat or DRT?
                </h3>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our debt resolution professionals evaluate your loan quantum, challenge compound penal interest, and secure the highest possible waiver through consensual conciliation or structured OTS.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Compare Your Legal Options
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
                  <span>Direct Bank Settlement • RBI &amp; NALSA Compliant</span>
                </div>
              </div>
            </div>

            {/* Card 3: CredSettle Trust Badges */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <h4 className="font-bold text-slate-900 text-sm">The CredSettle Advantage</h4>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Zero Upfront Settlement Fee:</strong> Transparent, success-linked debt relief.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Direct Lender Payments:</strong> No third-party accounts or escrow traps.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Binding Legal Decrees:</strong> 100% lawful closure under NALSA &amp; RDB Acts.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Pan-India Defense Network:</strong> Seasoned advocates &amp; financial negotiators.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <h4 className="font-bold text-slate-900 text-sm">Related Legal Guides</h4>
              <div className="space-y-2.5">
                <Link
                  href="/drt-notice-for-personal-loan-default"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Received a DRT Notice for Loan Default?
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">30-Day Written Statement guide &rarr;</span>
                </Link>

                <Link
                  href="/bank-sent-legal-notice-for-loan-what-to-do"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Bank Sent Legal Notice for Loan
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Forensic audit &amp; legal reply steps &rarr;</span>
                </Link>

                <Link
                  href="/arbitration-notice-personal-loan-default"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Arbitration Notice for Personal Loan
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Unilateral arbitrator defense &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
