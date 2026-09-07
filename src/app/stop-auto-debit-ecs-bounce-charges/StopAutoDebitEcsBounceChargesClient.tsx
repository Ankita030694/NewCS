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
  RefreshCw,
  Ban,
  ShieldAlert,
  Smartphone
} from 'lucide-react';

export default function StopAutoDebitEcsBounceChargesClient() {
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
    { id: 'quick-crux', label: 'Executive Brief & Crux' },
    { id: 'nach-ecs-mechanics', label: '1. NACH & ECS Auto-Debit Mechanics' },
    { id: 'financial-impact-bounce-charges', label: '2. The Compounding Bounce Charge Spiral' },
    { id: 'mandate-cancellation-comparison', label: '3. Mandate Cancellation Comparison Matrix' },
    { id: 'cibil-impact-nach-bounces', label: '4. CIBIL Scoring & Bounce Delinquency' },
    { id: 'visual-infographic-blueprint', label: '5. Visual 6-Step Cancellation Blueprint' },
    { id: 'step-by-step-cancellation-sop', label: '6. 6-Stage Mandate Cancellation SOP' },
    { id: 'statutory-notice-defense', label: '7. Statutory Defense: Section 25 PSSA' },
    { id: 'three-tier-escalation-matrix', label: '8. 3-Tier Banking Escalation Matrix' },
    { id: 'chronological-resolution-milestones', label: '9. Chronological Resolution Timeline' },
    { id: 'specialized-banking-scenarios', label: '10. Multi-Lenders, Salary & ARCs' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
    {
      q: 'Can I legally stop an auto-debit NACH or ECS mandate with my bank?',
      a: 'Yes. Under Reserve Bank of India (RBI) circulars and NPCI NACH Procedural Guidelines, a customer has the unequivocal legal right to revoke or cancel an electronic mandate at any time directly through their destination bank without prior permission from the merchant or lender.'
    },
    {
      q: 'Why do banks deduct ECS bounce charges multiple times in a single month?',
      a: 'Lenders and fintech apps frequently re-present failed NACH debit instructions multiple times during a billing cycle. Each time a presentation fails due to insufficient funds, both the destination bank and sponsor bank levy bounce fees of ₹295 to ₹590, leading to severe account balance erosion.'
    },
    {
      q: 'How can I cancel a NACH mandate online through NetBanking?',
      a: 'Log into your bank internet banking portal, navigate to the Customer Service, Accounts, or e-Mandates / NACH section, locate the active mandate using the Unique Mandate Reference Number (UMRN), select Cancel / Revoke Mandate, and authenticate the request using OTP.'
    },
    {
      q: 'Does stopping an auto-debit mandate cancel my loan liability?',
      a: 'No. Cancelling a NACH mandate stops automated deductions and prevents recurring bounce penalties, but it does not extinguish your underlying contractual loan liability. You remain obligated to settle the principal and interest through voluntary manual payments or structured debt settlement.'
    },
    {
      q: 'Can a bank refuse to stop an ECS or NACH mandate on a loan?',
      a: 'No. A bank cannot refuse a borrower written or digital mandate cancellation request. RBI regulations mandate that banks must honour customer revocation requests promptly. If a bank refuses, you can immediately escalate a complaint to the Bank Principal Nodal Officer and RBI Ombudsman.'
    },
    {
      q: 'What is a Section 25 notice under the Payment and Settlement Systems Act?',
      a: 'Section 25 of the Payment and Settlement Systems Act, 2007 (PSSA) is a statutory provision that treats dishonour of electronic funds transfers due to insufficient funds similarly to a cheque bounce under Section 138 of the NI Act. Lenders must issue a formal 30-day demand notice before initiating legal proceedings.'
    },
    {
      q: 'Can I get a refund of unfair or repetitive bank bounce charges?',
      a: 'Yes. Under RBI guidelines on Fair Lending Practices and unreasonable bank service charges, you can lodge a formal grievance requesting a refund or waiver of duplicate bounce fees levied for multiple re-presentations of the same installment within the same billing month.'
    },
    {
      q: 'Can a lender freeze my savings account if I cancel the auto-debit mandate?',
      a: 'A lending NBFC or external bank cannot freeze your third-party savings account without a court attachment order. However, if your loan is with the same bank where you maintain your savings account, the bank may exercise its Banker Right of Set-Off under Section 171 of the Indian Contract Act.'
    },
    {
      q: 'How does stopping NACH auto-debit affect my CIBIL credit score?',
      a: 'Cancelling the mandate itself does not lower your CIBIL score. However, if the underlying loan EMI remains unpaid, the lender reports Days Past Due (DPD) delinquency to credit bureaus, which reduces your credit score until the loan is resolved through repayment or settlement.'
    },
    {
      q: 'What is the fastest way to stop illegal EMI auto-deductions across multiple loan apps?',
      a: 'The fastest method is submitting a comprehensive Mandate Revocation Form with UMRN details at your home bank branch, disabling auto-debit permissions via netbanking, and routing your primary income to a newly opened non-linked bank account while engaging CredSettle for bilateral dispute resolution.'
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs md:text-sm font-semibold mb-4 tracking-wide">
            <ShieldCheck className="w-4 h-4 text-emerald-300" />
            <span>RBI Master Directions &amp; NPCI NACH Guidelines</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Cancel NACH Mandates to Stop ECS Bank Bounce Charges
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-3xl mx-auto font-normal text-white/95 leading-relaxed">
            Repeated auto-debit failures can rapidly deplete your savings through compounding inward bounce fees and unauthorized retry debits. Learn the exact statutory framework to cancel electronic mandates at your destination bank, stop predatory deductions, and defend against Section 25 PSSA legal notices.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Stop Illegal EMI Deductions</span>
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
                  <span>Statutory Borrower Rights</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Protected under RBI Master Directions, NPCI NACH Procedural Guidelines, and PSSA 2007.
                </p>
              </div>
            </div>
          </aside>

          {/* ================= MIDDLE COLUMN: MAIN CONTENT ================= */}
          <div className="space-y-8 md:space-y-10 min-w-0">
            
            {/* Executive Brief Box */}
            <div
              id="quick-crux"
              className="scroll-target rounded-2xl bg-[#F4F8FE] border border-blue-100/90 border-l-[5px] border-l-[#1886ff] p-5 sm:p-6 md:p-7 shadow-xs space-y-4 text-slate-800"
            >
              <div className="flex items-center gap-2 text-xs md:text-sm font-black uppercase tracking-wider text-[#1886ff]">
                <Bookmark className="w-4 h-4 text-[#1886ff]" />
                <span>EXECUTIVE BRIEF: STOPPING AUTO-DEBIT &amp; PREVENTING BOUNCE PENALTIES</span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <div className="truncate">
                    <strong className="text-slate-900 font-bold">Statutory Right to Revoke:</strong> Borrowers can cancel NACH/ECS mandates directly at their destination bank under RBI rules.
                  </div>
                </li>

                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <div className="truncate">
                    <strong className="text-slate-900 font-bold">Stop Recurring Bounce Fees:</strong> Revoking mandates halts predatory ₹295 to ₹590 inward return penalties from repeated retries.
                  </div>
                </li>

                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <div className="truncate">
                    <strong className="text-slate-900 font-bold">Section 25 PSSA Defense:</strong> Issue formal statutory replies within 15 days to dispute inflated penal claims and notices.
                  </div>
                </li>

                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <div className="truncate">
                    <strong className="text-slate-900 font-bold">Institutional Escalation:</strong> Bank refusals can be escalated directly to the Principal Nodal Officer and RBI Ombudsman.
                  </div>
                </li>
              </ul>
            </div>

            {/* SECTION 1: NACH & ECS Mechanics */}
            <section id="nach-ecs-mechanics" className="scroll-target space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                1. NACH &amp; ECS Mechanics: How Auto-Debit Traps Function
              </h2>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Retail lending in India relies on automated clearing systems governed by NPCI and RBI. When availing a personal loan or credit card, lenders register an Electronic Clearing Service (ECS) or NACH e-mandate. This standing instruction empowers the lender to debit your savings account on scheduled EMI dates using a 20-digit Unique Mandate Reference Number (UMRN).
              </p>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When financial hardship occurs, lenders frequently execute automated retry presentations across consecutive days. Inadequate account balances trigger multiple clearing failures, causing severe penalty debits. Under RBI Master Directions on Customer Service and NPCI guidelines, borrowers have an unconditional legal right to instruct their destination bank to revoke any active debit mandate.
              </p>
            </section>

            {/* SECTION 2: Financial Impact & Bounce Charges */}
            <section id="financial-impact-bounce-charges" className="scroll-target space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                2. Financial Impact: The Compounding Bounce Charge Spiral
              </h2>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                An auto-debit bounce triggers dual penalty charges across the banking system. Your destination bank debits an inward return fee of ₹295 to ₹590 (including 18% GST), while the lender levies an additional bounce and late payment fee on the loan ledger.
              </p>

              {/* Financial Calculation Card */}
              <div className="rounded-2xl border border-slate-200/80 bg-white p-5 sm:p-6 shadow-xs space-y-4">
                <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
                  <DollarSign className="w-5 h-5 text-[#1886ff]" />
                  <h3 className="text-sm sm:text-base font-bold text-slate-900">
                    Representative Monthly Cost of Multiple NACH Re-Presentations
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-center">
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/60">
                    <span className="text-xs text-slate-500 font-medium block">Active Loan Apps</span>
                    <span className="text-lg font-black text-slate-900">4 Fintechs</span>
                    <span className="text-[11px] text-slate-400 block mt-0.5">Average digital exposure</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/60">
                    <span className="text-xs text-slate-500 font-medium block">Monthly Debit Retries</span>
                    <span className="text-lg font-black text-rose-600">3 Hits / Lender</span>
                    <span className="text-[11px] text-rose-500 block mt-0.5">12 Total Bounces</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/60">
                    <span className="text-xs text-slate-500 font-medium block">Destination Bounce Fees</span>
                    <span className="text-lg font-black text-rose-600">₹4,248</span>
                    <span className="text-[11px] text-slate-400 block mt-0.5">₹354 per failed return</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-blue-50/60 border border-blue-200/60">
                    <span className="text-xs text-[#1886ff] font-bold block">Total Monthly Loss</span>
                    <span className="text-lg font-black text-blue-900">₹6,000+</span>
                    <span className="text-[11px] text-slate-500 block mt-0.5">Purely in penalty charges</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
                  Under RBI Fair Lending Practice directives (DOR.MCS.REC.28/01.01.001/2023-24), banks cannot capitalize penal charges into the loan principal, making repetitive retry fees eligible for formal dispute and waiver claims.
                </p>
              </div>
            </section>

            {/* SECTION 3: Comparison Matrix Table */}
            <section id="mandate-cancellation-comparison" className="scroll-target space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                3. Mandate Cancellation vs Inaction: Comparison Matrix
              </h2>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Evaluating different mandate response pathways helps borrowers protect liquidity while maintaining legal compliance under RBI norms.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto shadow-xs bg-white">
                <table className="w-full text-left text-xs sm:text-sm divide-y divide-slate-200/80">
                  <thead className="bg-slate-100/80 text-slate-800 font-bold uppercase tracking-wider text-[11px]">
                    <tr className="divide-x divide-slate-200/80">
                      <th className="p-3 sm:p-4">Action Pathway</th>
                      <th className="p-3 sm:p-4">Operational Method</th>
                      <th className="p-3 sm:p-4">Immediate Financial Impact</th>
                      <th className="p-3 sm:p-4">Legal Position &amp; Statutory Risk</th>
                      <th className="p-3 sm:p-4">Recommended Strategy</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-700">
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/50">
                      <td className="p-3 sm:p-4 font-bold text-slate-900">Formal Bank Revocation</td>
                      <td className="p-3 sm:p-4">Written Form M-02 submission citing UMRN at branch</td>
                      <td className="p-3 sm:p-4 text-emerald-700 font-semibold">Instantly stops inward bank bounce penalties</td>
                      <td className="p-3 sm:p-4">100% compliant with RBI &amp; NPCI guidelines</td>
                      <td className="p-3 sm:p-4 text-emerald-600 font-bold">Highly Recommended</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/50">
                      <td className="p-3 sm:p-4 font-bold text-slate-900">NetBanking e-Mandate Cancel</td>
                      <td className="p-3 sm:p-4">Digital cancellation via netbanking or mobile app OTP</td>
                      <td className="p-3 sm:p-4 text-emerald-700 font-semibold">Prevents automated debit hits within 24 hours</td>
                      <td className="p-3 sm:p-4">Valid electronic cancellation under IT Act</td>
                      <td className="p-3 sm:p-4 text-emerald-600 font-bold">Fastest Digital Route</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/50">
                      <td className="p-3 sm:p-4 font-bold text-slate-900">Lender Hardship Notice</td>
                      <td className="p-3 sm:p-4">Registered email informing inability to maintain mandate</td>
                      <td className="p-3 sm:p-4 text-slate-700">Creates documentary record of genuine hardship</td>
                      <td className="p-3 sm:p-4">Strong defense against Section 25 criminal intent</td>
                      <td className="p-3 sm:p-4 text-blue-600 font-bold">Essential for Defense</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/50">
                      <td className="p-3 sm:p-4 font-bold text-slate-900">Account Depletion Only</td>
                      <td className="p-3 sm:p-4">Keeping zero balance without formal mandate stop</td>
                      <td className="p-3 sm:p-4 text-rose-600 font-semibold">Negative balance spirals due to recurring charges</td>
                      <td className="p-3 sm:p-4">Leaves account vulnerable to unexpected debits</td>
                      <td className="p-3 sm:p-4 text-amber-600 font-bold">Incomplete Protection</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/50">
                      <td className="p-3 sm:p-4 font-bold text-slate-900">Passive Inaction</td>
                      <td className="p-3 sm:p-4">Ignoring notices and repeated automated bounces</td>
                      <td className="p-3 sm:p-4 text-rose-700 font-bold">Total loss of liquidity and severe score damage</td>
                      <td className="p-3 sm:p-4 text-rose-600 font-medium">Triggers Section 25 PSSA and Section 138 summons</td>
                      <td className="p-3 sm:p-4 text-rose-600 font-bold">High Risk Default</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 4: Technical CIBIL Algorithm & Scoring Math */}
            <section id="cibil-impact-nach-bounces" className="scroll-target space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                4. CIBIL Impact: Differentiating Bounces from Loan Default
              </h2>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Credit bureaus (CIBIL, Experian, CRIF High Mark, Equifax) calculate credit scores across five factors: Payment History (35%), Credit Utilization (30%), Credit History Length (15%), Credit Mix (10%), and Inquiries (10%).
              </p>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                An auto-debit cancellation or bank bounce is not reported as a separate score deduction. Instead, overdue loan repayments are reported as Days Past Due (DPD) delinquency under Section 21 of CICRA 2005. Allowing continuous bounces wastes thousands of rupees in penalty fees without protecting your CIBIL score. Cancelling the mandate preserves liquid capital to negotiate a structured One-Time Settlement (OTS) and secure an official No Dues Certificate.
              </p>
            </section>

            {/* SECTION 5: Visual Infographic Card */}
            <section id="visual-infographic-blueprint" className="scroll-target space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                5. Visual Blueprint: 6-Stage Mandate Cancellation Guide
              </h2>

              <div className="rounded-2xl border border-slate-200/80 bg-white p-4 sm:p-5 shadow-xs overflow-hidden">
                <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-slate-100 border border-slate-200/60 mb-3">
                  <Image
                    src="/images/infographics/stop-auto-debit-ecs-bounce-charges.jpg"
                    alt="How to Stop Auto-Debit NACH ECS Mandate and Avoid Bounce Charges Infographic"
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 850px"
                  />
                </div>
                <div className="flex flex-wrap items-center justify-between gap-2 pt-2 text-xs text-slate-600">
                  <span className="font-semibold text-slate-800">
                    Figure 1: CredSettle 6-Stage Statutory Protocol for Electronic Mandate Revocation
                  </span>
                  <a
                    href="/images/infographics/stop-auto-debit-ecs-bounce-charges.jpg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1886ff] hover:underline font-bold inline-flex items-center gap-1"
                  >
                    <span>View High-Res Blueprint</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </section>

            {/* SECTION 6: Step-by-Step SOP (6 Stages) */}
            <section id="step-by-step-cancellation-sop" className="scroll-target space-y-5">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                6. Step-by-Step SOP: Stopping NACH &amp; ECS Mandates Safely
              </h2>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Revoking automated debit mandates requires an orderly procedure. This verified 6-stage SOP ensures protection against wrongful bank rejections and establishes documented defenses against recovery harassment.
              </p>

              <div className="space-y-4 text-xs sm:text-sm text-slate-700">
                {/* Stage 1 */}
                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#1886ff] text-white flex items-center justify-center font-black text-xs">1</span>
                    <h3 className="font-black text-slate-900 text-sm sm:text-base">
                      Mandate Audit &amp; UMRN Extraction
                    </h3>
                  </div>
                  <p className="leading-relaxed pl-8">
                    Review your recent bank statements to identify active debits. Extract the 20-digit alphanumeric Unique Mandate Reference Number (UMRN) from your NetBanking mandate dashboard.
                  </p>
                </div>

                {/* Stage 2 */}
                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#1886ff] text-white flex items-center justify-center font-black text-xs">2</span>
                    <h3 className="font-black text-slate-900 text-sm sm:text-base">
                      Submission of Destination Bank Revocation Request
                    </h3>
                  </div>
                  <p className="leading-relaxed pl-8">
                    Submit Form M-02 at your bank branch or cancel digitally via NetBanking e-Mandates citing Section 4(vii) of NPCI guidelines, which obligates banks to honor customer revocation requests.
                  </p>
                </div>

                {/* Stage 3 */}
                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#1886ff] text-white flex items-center justify-center font-black text-xs">3</span>
                    <h3 className="font-black text-slate-900 text-sm sm:text-base">
                      Formal Written Notice to the Lending Entity
                    </h3>
                  </div>
                  <p className="leading-relaxed pl-8">
                    Send an official notice via registered email to the lender explaining financial hardship, revoking debit authorization, and offering to discuss structured manual settlement options.
                  </p>
                </div>

                {/* Stage 4 */}
                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#1886ff] text-white flex items-center justify-center font-black text-xs">4</span>
                    <h3 className="font-black text-slate-900 text-sm sm:text-base">
                      Neutralizing Payroll &amp; Switching Primary Accounts
                    </h3>
                  </div>
                  <p className="leading-relaxed pl-8">
                    If your loan is with your salary bank, redirect payroll to a separate non-linked bank account to prevent unilateral set-off deductions under Section 171 of the Indian Contract Act.
                  </p>
                </div>

                {/* Stage 5 */}
                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#1886ff] text-white flex items-center justify-center font-black text-xs">5</span>
                    <h3 className="font-black text-slate-900 text-sm sm:text-base">
                      Disputing &amp; Claiming Refund of Unfair Bounce Charges
                    </h3>
                  </div>
                  <p className="leading-relaxed pl-8">
                    Submit a formal claim with your bank Grievance Officer demanding a refund of duplicate bounce charges levied on multiple retry attempts within the same billing cycle under RBI norms.
                  </p>
                </div>

                {/* Stage 6 */}
                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#1886ff] text-white flex items-center justify-center font-black text-xs">6</span>
                    <h3 className="font-black text-slate-900 text-sm sm:text-base">
                      Structured Debt Settlement &amp; Formal Loan Closure
                    </h3>
                  </div>
                  <p className="leading-relaxed pl-8">
                    Partner with CredSettle to represent your case before the lender credit committee, negotiate a 40% to 70% waiver on penal dues, and secure an official No Dues Certificate.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: Statutory Notice Defense & Legal Rights */}
            <section id="statutory-notice-defense" className="scroll-target space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                7. Statutory Defense: Section 25 PSSA &amp; Section 138 NI Act
              </h2>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When auto-debit instructions fail or are cancelled, lenders may issue statutory notices. Understanding the legal parameters protects you against coercive intimidation.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Card 1 */}
                <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2">
                    <Gavel className="w-4 h-4 text-[#1886ff]" />
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                      Section 25 of Payment &amp; Settlement Systems Act
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Section 25 of PSSA 2007 governs electronic debit dishonour. Lenders must issue a written statutory demand notice within 30 days of the bounce, providing a mandatory 15-day cure window before initiating legal action.
                  </p>
                </div>

                {/* Card 2 */}
                <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2">
                    <Scale className="w-4 h-4 text-[#1886ff]" />
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                      Absence of Mens Rea &amp; Bona Fide Hardship
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Serving a prior written hardship notification to the lender establishes genuine civil inability to pay, defeating allegations of fraudulent intent or deliberate criminal evasion.
                  </p>
                </div>

                {/* Card 3 */}
                <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2">
                    <ShieldAlert className="w-4 h-4 text-[#1886ff]" />
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                      Disputing Inflated Penal Dues in Statutory Replies
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Statutory demand notices that include un-crystallized, compound penal interest can be legally challenged in formal replies drafted through CredSettle, exposing defects in the demand.
                  </p>
                </div>

                {/* Card 4 */}
                <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2">
                    <Landmark className="w-4 h-4 text-[#1886ff]" />
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                      RBI Anti-Coercion &amp; Recovery Agent Safeguards
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Under RBI Fair Practices Code, lenders cannot threaten police arrest, send fake court summons on WhatsApp, or make calls outside the permitted 8:00 AM to 7:00 PM window.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 8: 3-Tier Escalation Matrix */}
            <section id="three-tier-escalation-matrix" className="scroll-target space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                8. 3-Tier Escalation Matrix: Institutional Grievance Redress
              </h2>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                If your destination bank unlawfully rejects your mandate cancellation request, activate the formal institutional redressal machinery established by the Reserve Bank of India.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto shadow-xs bg-white">
                <table className="w-full text-left text-xs sm:text-sm divide-y divide-slate-200/80">
                  <thead className="bg-slate-100/80 text-slate-800 font-bold uppercase tracking-wider text-[11px]">
                    <tr className="divide-x divide-slate-200/80">
                      <th className="p-3 sm:p-4">Escalation Tier</th>
                      <th className="p-3 sm:p-4">Designated Authority</th>
                      <th className="p-3 sm:p-4">Resolution SLA</th>
                      <th className="p-3 sm:p-4">Scope of Relief &amp; Enforcement Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-700">
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/50">
                      <td className="p-3 sm:p-4 font-bold text-slate-900">Level 1: Branch / GRO</td>
                      <td className="p-3 sm:p-4">Branch Manager &amp; Grievance Redressal Officer</td>
                      <td className="p-3 sm:p-4 font-semibold text-slate-800">7 to 10 Working Days</td>
                      <td className="p-3 sm:p-4">Manual mandate stop in Core Banking System (CBS) and initial review of bounce charge waivers.</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/50">
                      <td className="p-3 sm:p-4 font-bold text-slate-900">Level 2: Principal Nodal Officer</td>
                      <td className="p-3 sm:p-4">Bank Principal Nodal Officer (PNO Desk)</td>
                      <td className="p-3 sm:p-4 font-semibold text-slate-800">14 to 21 Working Days</td>
                      <td className="p-3 sm:p-4">Enforces systemic UMRN deactivation across zonal clearing hubs and orders restitution of wrongful debits.</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/50">
                      <td className="p-3 sm:p-4 font-bold text-slate-900">Level 3: RBI Integrated Ombudsman</td>
                      <td className="p-3 sm:p-4">RBI Ombudsman (cms.rbi.org.in / 14448)</td>
                      <td className="p-3 sm:p-4 font-semibold text-slate-800">30 Days Statutory Window</td>
                      <td className="p-3 sm:p-4">Binding regulatory orders penalizing bank service deficiencies and awarding consumer compensation.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 9: Chronological Resolution Milestones */}
            <section id="chronological-resolution-milestones" className="scroll-target space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                9. Chronological Timeline: Default to Mandate Neutralization
              </h2>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Understanding the typical procedural trajectory allows borrowers to anticipate bank actions and execute decisive counter-measures at each critical milestone.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto shadow-xs bg-white">
                <table className="w-full text-left text-xs sm:text-sm divide-y divide-slate-200/80">
                  <thead className="bg-slate-100/80 text-slate-800 font-bold uppercase tracking-wider text-[11px]">
                    <tr className="divide-x divide-slate-200/80">
                      <th className="p-3 sm:p-4">Timeline Phase</th>
                      <th className="p-3 sm:p-4">Account Status</th>
                      <th className="p-3 sm:p-4">Lender / Banking Action</th>
                      <th className="p-3 sm:p-4">Mandatory Borrower Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-700">
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/50">
                      <td className="p-3 sm:p-4 font-bold text-slate-900">Day 1 to 5</td>
                      <td className="p-3 sm:p-4">Initial Default (SMA-0)</td>
                      <td className="p-3 sm:p-4">Automated NACH presentation bounce; inward return charges debited.</td>
                      <td className="p-3 sm:p-4">Extract UMRN numbers and submit online mandate revocation.</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/50">
                      <td className="p-3 sm:p-4 font-bold text-slate-900">Day 6 to 30</td>
                      <td className="p-3 sm:p-4">Delinquency (SMA-1)</td>
                      <td className="p-3 sm:p-4">Repeated clearing retries; collection calls and payment reminder SMS.</td>
                      <td className="p-3 sm:p-4">Submit physical Form M-02 at branch; serve written hardship notice.</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/50">
                      <td className="p-3 sm:p-4 font-bold text-slate-900">Day 31 to 60</td>
                      <td className="p-3 sm:p-4">Late Delinquency (SMA-2)</td>
                      <td className="p-3 sm:p-4">Statutory legal notice issued under Section 25 PSSA / Sec 138 NI Act.</td>
                      <td className="p-3 sm:p-4">Issue formal legal reply disputing penal interest and debt calculation.</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/50">
                      <td className="p-3 sm:p-4 font-bold text-slate-900">Day 90+</td>
                      <td className="p-3 sm:p-4">NPA Classification</td>
                      <td className="p-3 sm:p-4">Loan classified as Non-Performing Asset; legal desk assigns file for OTS.</td>
                      <td className="p-3 sm:p-4">Engage CredSettle for bilateral One-Time Settlement negotiations.</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/50">
                      <td className="p-3 sm:p-4 font-bold text-slate-900">Month 4 to 6</td>
                      <td className="p-3 sm:p-4">Resolution &amp; Closure</td>
                      <td className="p-3 sm:p-4">Issuance of formal OTS approval letter with 40% to 70% waiver.</td>
                      <td className="p-3 sm:p-4">Remit compromise settlement amount and secure original NDC.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: Specialized Real-World Scenarios */}
            <section id="specialized-banking-scenarios" className="scroll-target space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                10. Specialized Scenarios: Multiple Lenders, Salary &amp; ARCs
              </h2>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Specific borrowing arrangements require tailored tactical steps to terminate automated debit instructions safely.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Scenario 1 */}
                <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2">
                    <Smartphone className="w-4 h-4 text-[#1886ff]" />
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                      Multiple Fintech Instant Loan Apps
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Submit a consolidated multi-mandate revocation list at your bank branch with written instructions prohibiting automated debits under registered fintech merchant IDs.
                  </p>
                </div>

                {/* Scenario 2 */}
                <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-[#1886ff]" />
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                      Salary Account with the Same Lending Bank
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Migrate payroll to a separate bank immediately to stop the lender from executing unilateral balance deductions under Banker Right of Set-Off (Section 171 Contract Act).
                  </p>
                </div>

                {/* Scenario 3 */}
                <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-[#1886ff]" />
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                      Joint Accounts and Family Funds
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Either account holder in an Either or Survivor joint account can submit a mandate cancellation request to prevent recurring bounce charges from eroding family savings.
                  </p>
                </div>

                {/* Scenario 4 */}
                <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-[#1886ff]" />
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                      Debt Assignment to Asset Reconstruction Companies
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    When loans are sold to ARCs under SARFAESI Section 5, presenting the assignment letter at your bank enables immediate permanent cancellation of legacy ECS mandates.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 11: Company Profile Component */}
            <div id="company-profile" className="scroll-target">
              <CompanySection />
            </div>

            {/* SECTION 12: Frequently Asked Questions */}
            <section id="frequently-asked-questions" className="scroll-target space-y-5">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                <HelpCircle className="w-5 h-5 text-[#1886ff]" />
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Frequently Asked Questions: Stopping Auto-Debit &amp; ECS Charges
                </h2>
              </div>

              <div className="space-y-3">
                {faqs.map((faq, index) => {
                  const isOpen = openFaq === index;
                  return (
                    <div
                      key={index}
                      className="rounded-2xl border border-slate-200/80 bg-white overflow-hidden transition-all duration-200 shadow-2xs"
                    >
                      <button
                        onClick={() => toggleFaq(index)}
                        className="w-full flex items-center justify-between gap-4 p-4 sm:p-5 text-left font-bold text-slate-900 text-xs sm:text-sm hover:bg-slate-50 transition-colors"
                        aria-expanded={isOpen}
                      >
                        <span className="flex items-center gap-2.5">
                          <span className="w-5 h-5 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black flex-shrink-0">
                            Q
                          </span>
                          {faq.q}
                        </span>
                        <ChevronDown
                          className={`w-4 h-4 text-slate-400 flex-shrink-0 transition-transform duration-200 ${
                            isOpen ? 'transform rotate-180 text-[#1886ff]' : ''
                          }`}
                        />
                      </button>

                      {isOpen && (
                        <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3 bg-slate-50/40">
                          <p>{faq.a}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>

            {/* SECTION 13: Citations & Outbound Authority Grid */}
            <section id="regulatory-sources" className="scroll-target space-y-4 pt-4 border-t border-slate-200">
              <h2 className="text-base sm:text-lg font-black text-slate-900 tracking-tight">
                Statutory Citations &amp; Regulatory References
              </h2>

              <p className="text-xs text-slate-600 leading-relaxed">
                This comprehensive guide is authored in strict accordance with Indian banking law, Reserve Bank of India Master Directions, and landmark judicial pronouncements governing electronic payment systems:
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1 text-xs">
                <a
                  href="https://www.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white border border-slate-200 hover:border-[#1886ff] text-slate-700 hover:text-[#1886ff] font-semibold flex items-center justify-between transition-colors shadow-2xs"
                >
                  <span>RBI Master Directions</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://cms.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white border border-slate-200 hover:border-[#1886ff] text-slate-700 hover:text-[#1886ff] font-semibold flex items-center justify-between transition-colors shadow-2xs"
                >
                  <span>RBI Ombudsman Portal</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://www.cibil.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white border border-slate-200 hover:border-[#1886ff] text-slate-700 hover:text-[#1886ff] font-semibold flex items-center justify-between transition-colors shadow-2xs"
                >
                  <span>TransUnion CIBIL Bureau</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://www.indiacode.nic.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white border border-slate-200 hover:border-[#1886ff] text-slate-700 hover:text-[#1886ff] font-semibold flex items-center justify-between transition-colors shadow-2xs"
                >
                  <span>PSSA 2007 &amp; NI Act</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://nalsa.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white border border-slate-200 hover:border-[#1886ff] text-slate-700 hover:text-[#1886ff] font-semibold flex items-center justify-between transition-colors shadow-2xs"
                >
                  <span>NALSA Legal Services</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://cybercrime.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white border border-slate-200 hover:border-[#1886ff] text-slate-700 hover:text-[#1886ff] font-semibold flex items-center justify-between transition-colors shadow-2xs"
                >
                  <span>Cyber Crime Reporting</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>

              {/* Internal Resource Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">
                  Related CredSettle Legal Guides:
                </span>
                <div className="flex flex-wrap gap-2 text-xs">
                  <Link
                    href="/services/personal-loan-settlement"
                    className="px-2.5 py-1 rounded-lg bg-blue-50 text-[#1886ff] hover:bg-blue-100 font-semibold transition-colors"
                  >
                    Personal Loan Settlement
                  </Link>
                  <Link
                    href="/services/credit-card-settlement"
                    className="px-2.5 py-1 rounded-lg bg-blue-50 text-[#1886ff] hover:bg-blue-100 font-semibold transition-colors"
                  >
                    Credit Card Debt Relief
                  </Link>
                  <Link
                    href="/convert-settled-status-to-closed"
                    className="px-2.5 py-1 rounded-lg bg-blue-50 text-[#1886ff] hover:bg-blue-100 font-semibold transition-colors"
                  >
                    Convert Settled to Closed
                  </Link>
                  <Link
                    href="/services/anti-harassment"
                    className="px-2.5 py-1 rounded-lg bg-blue-50 text-[#1886ff] hover:bg-blue-100 font-semibold transition-colors"
                  >
                    Anti-Harassment Protection
                  </Link>
                  <Link
                    href="/arbitration-notice-personal-loan-default"
                    className="px-2.5 py-1 rounded-lg bg-blue-50 text-[#1886ff] hover:bg-blue-100 font-semibold transition-colors"
                  >
                    Arbitration Notice Defense
                  </Link>
                  <Link
                    href="/services/business-loan-settlement"
                    className="px-2.5 py-1 rounded-lg bg-blue-50 text-[#1886ff] hover:bg-blue-100 font-semibold transition-colors"
                  >
                    MSME &amp; Business Loan Defense
                  </Link>
                  <Link
                    href="/application-to-unblock-bank-account-for-loan-emi"
                    className="px-2.5 py-1 rounded-lg bg-blue-50 text-[#1886ff] hover:bg-blue-100 font-semibold transition-colors"
                  >
                    Unblock Bank Account for EMI
                  </Link>
                  <Link
                    href="/resources"
                    className="px-2.5 py-1 rounded-lg bg-blue-50 text-[#1886ff] hover:bg-blue-100 font-semibold transition-colors"
                  >
                    All Legal Resources
                  </Link>
                </div>
              </div>
            </section>
          </div>

          {/* ================= RIGHT COLUMN: STICKY SIDEBAR ================= */}
          <aside className="sticky top-6 space-y-5">
            {/* 1. Author Bio Card */}
            <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-xs text-slate-800 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-blue-600 to-[#1886ff] flex items-center justify-center text-white font-black text-base shadow-sm">
                  AJ
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">Ashish Jhangra</h3>
                  <p className="text-[11px] text-slate-500 font-medium">Legal &amp; Debt Resolution Professional</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Specialist in Indian banking dispute resolution, consumer credit protection, and negotiated debt settlements under the RBI regulatory framework.
              </p>
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-medium">
                <span>Verified Authority</span>
                <span className="text-emerald-600 font-bold">Active Counsel</span>
              </div>
            </div>

            {/* 2. Emergency CTA Card (#2452ae Background) */}
            <div
              className="rounded-2xl p-5 sm:p-6 text-white shadow-md space-y-4 text-center relative overflow-hidden"
              style={{ backgroundColor: '#2452ae' }}
            >
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mx-auto text-white">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-extrabold text-base sm:text-lg tracking-tight">
                  Stop Illegal Deductions Now
                </h3>
                <p className="text-xs text-white/90 mt-1.5 leading-relaxed">
                  Are loan apps repeatedly hitting your account with unlawful bounce penalties? Speak with our legal resolution team today.
                </p>
              </div>

              <div className="pt-1">
                <a
                  href="tel:+918800226635"
                  className="block w-full py-2.5 px-4 rounded-xl bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-xs sm:text-sm hover:bg-slate-50 transition-all shadow-sm"
                >
                  Call +91-8800226635
                </a>
              </div>

              <div className="text-[11px] text-white/80 flex items-center justify-center gap-1.5 pt-1">
                <Lock className="w-3.5 h-3.5" />
                <span>100% Confidential &amp; Legal</span>
              </div>
            </div>

            {/* 3. CredSettle Trust Badges */}
            <div className="rounded-2xl border border-slate-200/80 bg-white p-4 shadow-xs space-y-3 text-xs text-slate-700">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-100 font-bold text-slate-900">
                <Award className="w-4 h-4 text-[#1886ff]" />
                <span>CredSettle Legal Standards</span>
              </div>
              <ul className="space-y-2 text-[11px] text-slate-600">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  <span>Strict RBI Fair Practices Compliance</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  <span>No Upfront Settlement Commission</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  <span>Direct Bank PNO Level Negotiation</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  <span>Official No Dues Certificate Guarantee</span>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
