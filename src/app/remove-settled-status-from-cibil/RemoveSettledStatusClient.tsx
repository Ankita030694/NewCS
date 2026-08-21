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
  Calendar,
  AlertCircle,
  CreditCard,
  Briefcase,
  Bookmark,
  ArrowRight,
  Copy,
  Clock,
  UserCheck,
  Sparkles,
  Gavel,
  BadgeAlert,
  Landmark
} from 'lucide-react';

export default function RemoveSettledStatusClient() {
  const [activeId, setActiveId] = useState<string>('quick-crux');
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [copiedLetter, setCopiedLetter] = useState<boolean>(false);

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

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedLetter(true);
    setTimeout(() => setCopiedLetter(false), 3000);
  };

  const navLinks = [
    { id: 'quick-crux', label: 'Executive Brief & Key Takeaways' },
    { id: 'understanding-settled-status', label: '1. Settled vs. Closed vs. Written Off' },
    { id: 'why-settled-damages-credit', label: '2. 7-Year Bureau Damage & Scoring' },
    { id: 'can-settled-be-removed', label: '3. Can Settled Status Be Removed?' },
    { id: 'bureau-status-comparison', label: '4. CIBIL Status Comparison Table' },
    { id: 'step-by-step-removal-protocol', label: '5. 6-Step Lawful Upgrade Protocol' },
    { id: 'infographic-overview', label: 'Visual 6-Step Defense Blueprint' },
    { id: 'rbi-guidelines-cicra-rights', label: '6. CICRA 2005 & ₹100/Day RBI Rule' },
    { id: 'bank-grievance-letter-draft', label: '7. Bank Payoff & NDC Letter Draft' },
    { id: 'three-tier-escalation-matrix', label: '8. 3-Tier Grievance & RBI Ombudsman' },
    { id: 'credit-recovery-trajectory', label: '9. Post-Removal Score Recovery Plan' },
    { id: 'complex-scenarios', label: '10. Special Scenarios: Cards & ARCs' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Regulatory Sources & Authorities' }
  ];

  const faqs = [
    {
      q: 'How to remove settled status from CIBIL?',
      a: 'To remove settled status from CIBIL, you must contact your original lender and negotiate to pay the remaining waived balance (principal and agreed interest). Once paid in full, obtain a formal No Dues Certificate (NDC) and request the lender to report the account status as "Closed" to TransUnion CIBIL, Experian, Equifax, and CRIF High Mark within the mandatory 30-day RBI reporting window.'
    },
    {
      q: 'How long does settled status stay on CIBIL?',
      a: 'A settled status remains in your CIBIL credit report for up to 7 years (84 months) from the date of settlement reporting. During this entire period, future lenders view the settled tag as a high credit risk, resulting in loan rejections or higher interest rates unless upgraded to "Closed".'
    },
    {
      q: 'Can settled status be removed from CIBIL without paying the remaining amount?',
      a: 'No. Credit bureaus are legally prohibited under the Credit Information Companies (Regulation) Act, 2005 (CICRA) from removing authentic loan settlement records without the lending bank explicit confirmation. Any third-party agency claiming to delete a settled status without clearing dues with the lender is running an illegal scam.'
    },
    {
      q: 'What is the difference between "Settled" and "Closed" status in CIBIL?',
      a: '"Closed" indicates that the borrower repaid 100% of the principal, interest, and charges according to the original agreement with zero financial loss to the lender. "Settled" indicates that the borrower paid only a negotiated partial amount (OTS) and the bank had to write off the remaining balance as a loss, which significantly hurts the borrower credit rating.'
    },
    {
      q: 'How long does it take for CIBIL to update after submitting the No Dues Certificate?',
      a: 'Under RBI Master Directions, banks must submit updated credit data to credit bureaus every 30 days. Once the bank uploads the rectified data or after you raise an online dispute with your No Dues Certificate (NDC), TransUnion CIBIL usually reflects the updated "Closed" status within 30 to 45 working days.'
    },
    {
      q: 'Can I get a home loan or credit card with a "Settled" status on my CIBIL?',
      a: 'Unsecured credit cards and personal loans are almost universally rejected by mainstream banks if you have a "Settled" tag. For secured home loans, lenders may consider your application only if you have substantial collateral and a high income, but they will charge a hefty risk premium of 2% to 4% higher interest rates.'
    },
    {
      q: 'What should I do if the bank refuses to update my CIBIL status after full payment?',
      a: 'If the bank fails to update your account status within 30 days of receiving full payment and issuing an NDC, you can file an official grievance with the Bank Principal Nodal Officer and escalate to the RBI Integrated Ombudsman via the CMS portal. The RBI mandates a compensation of ₹100 per day for unjustifiable delays in credit record rectification.'
    },
    {
      q: 'Does paying the settlement difference immediately restore my credit score to 750+?',
      a: 'Changing the status from "Settled" to "Closed" removes the negative settlement flag, which stops automatic loan application rejections. However, score recovery requires 6 to 12 months of disciplined credit behavior, such as using a fixed deposit-backed secured credit card and maintaining credit utilization below 30%.'
    }
  ];

  const letterTemplate = `To,
The Branch Manager / Principal Nodal Officer,
[Name of the Bank / Financial Institution],
[Branch Address or Registered Corporate Office],
[City, State, PIN Code]

Date: [DD/MM/YYYY]

Subject: Formal Request for Full Payoff of Waived Balance and Conversion of Account Status from "Settled" to "Closed" in Credit Bureau Records (CIBIL/Experian/Equifax/CRIF)

Loan / Credit Card Account Number: [Your Account Number]
Borrower Name: [Your Full Name as per Bank Records]
PAN Number: [Your PAN]
Contact Number: [Your Phone Number]
Email Address: [Your Email Address]

Respected Sir/Madam,

I am writing with reference to the aforementioned credit facility which was previously settled under a compromise One-Time Settlement (OTS) scheme on [Date of OTS Settlement] for a negotiated sum of INR [Amount Paid during OTS].

As a result of the compromise settlement, the account is currently reflecting as "Settled" on my credit information reports across Credit Information Companies (CIBIL, Experian, Equifax, and CRIF High Mark), which has severely impaired my financial reputation and credit score.

I have now arranged sufficient financial resources and intend to voluntarily extinguish 100% of the remaining legitimate contractual liability on this account by paying the net differential principal balance that was waived during the OTS.

Accordingly, I formally request you to:
1. Provide an official statement specifying the exact net waived principal and contractual interest balance required to fully close the account (excluding compounding penal interest and penal charges).
2. Issue designated bank remittance instructions (NEFT/RTGS account details or Demand Draft payable coordinates).
3. Confirm in writing that upon realization of the differential remittance, the bank will:
   a. Issue a final, unconditional No Dues Certificate (NDC) / No Objection Certificate (NOC) on official letterhead.
   b. Transmit rectified credit records to all four RBI-licensed Credit Information Companies (CIBIL, Experian, Equifax, CRIF High Mark) to modify the account status from "Settled" to "Closed" with INR 0 (Zero) outstanding balance within the mandatory 30-day timeframe as stipulated under RBI Circular RBI/2023-24/72 and Section 21 of the Credit Information Companies (Regulation) Act, 2005.

Kindly treat this matter with urgency and provide the payoff calculation within seven (7) working days.

Yours sincerely,

___________________________
[Your Signature]
[Your Full Name]
Enclosures:
1. Copy of Previous OTS Settlement Letter & Payment Receipt
2. Copy of PAN Card & Aadhaar Card
3. Recent CIBIL Credit Report Extract`;

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-[#1886ff] selection:text-white">
      {/* 1. HERO SECTION (#2452ae Swatch Color) */}
      <section
        className="relative text-white pt-24 pb-16 md:pt-32 md:pb-20 px-4 md:px-8 overflow-hidden flex items-center justify-center text-center"
        style={{ backgroundColor: '#2452ae' }}
      >
        <div className="absolute inset-0 bg-black/5 z-0 pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center z-10 relative">
          {/* Title / H1 */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight leading-tight drop-shadow-sm">
            How to Remove <br />
            <span className="text-blue-100">&quot;Settled&quot; Status from CIBIL in 2026</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-2xl mb-8 max-w-3xl mx-auto font-normal md:font-medium text-white/95 leading-relaxed">
            Having a &quot;Settled&quot; tag on your credit report suppresses your CIBIL score for up to 7 years. Learn the legal, RBI-mandated protocol to upgrade your status to &quot;Closed&quot;.
          </p>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-900 hover:text-[#1886ff] px-8 py-4 rounded-full font-extrabold text-base md:text-lg hover:bg-slate-50 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Consult Our Debt Resolution Experts</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. STATS STRIP COMPONENT */}
      <StatsStrip />

      {/* 3. WIDESCREEN 3-COLUMN LAYOUT */}
      <div className="w-full max-w-[1720px] mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 py-8 md:py-12">
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
                  <span>Statutory Legal Guide</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Per RBI Master Directions on CICRA &amp; Ombudsman Framework 2026.
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
                <span>EXECUTIVE BRIEF: REMOVING SETTLED STATUS FROM CIBIL</span>
              </div>

              <ul className="space-y-3.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Removal Requires Upgrading to &quot;Closed&quot;:</strong> Under the Credit Information Companies (Regulation) Act (CICRA 2005), credit bureaus cannot unilaterally erase authentic historical records. The only lawful method to remove the negative impact is paying the waived differential balance to convert the account from &quot;Settled&quot; to &quot;Closed&quot;.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">7-Year Bureau Flag Elimination:</strong> While a &quot;Settled&quot; remark triggers instant auto-rejections across commercial banking algorithms for up to 7 years (84 months), a &quot;Closed&quot; status confirms zero financial loss to the lender and unblocks underwriting access.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Unconditional No Dues Certificate (NDC):</strong> The cornerstone of legal status rectification is obtaining an unconditional NDC on the bank official letterhead with authorized signatory seals confirming full extinguishment of liabilities.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">RBI 30-Day Mandate &amp; ₹100/Day Delay Fine:</strong> Under RBI Circular RBI/2023-24/72, banks and credit bureaus must complete bureau data rectification within <strong>30 calendar days</strong>. Unjustifiable delays entitle the borrower to ₹100/day statutory compensation via the RBI Ombudsman.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Rebuilding Score to 750+:</strong> Status conversion stops the negative hemorrhage; pairing this with a secured credit card and maintaining credit utilization below 30% restores a 750+ score within 6 to 12 months.
                  </div>
                </li>
              </ul>
            </div>

            {/* SECTION 1: Understanding Settled Status vs Closed vs Written Off */}
            <section id="understanding-settled-status" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Credit Reporting Fundamentals</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. Understanding &quot;Settled&quot; Status vs. &quot;Closed&quot; vs. &quot;Written Off&quot; in CIBIL
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When borrowers experience severe financial hardship, such as medical emergencies, job loss, or business failure, they frequently negotiate a <strong>One-Time Settlement (OTS)</strong> with their lending bank or NBFC. While an OTS legally terminates recovery proceedings and stops persistent phone calls from recovery agents, it produces an enduring, damaging byproduct on their credit history: the <strong>&quot;Settled&quot;</strong> account status.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Credit Information Companies in India—including <strong>TransUnion CIBIL, Experian India, Equifax, and CRIF High Mark</strong>—classify loan terminations into distinct statutory reporting categories. Understanding the technical divergence between these classifications is vital before initiating credit rectification:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                <div className="bg-white p-5 rounded-2xl border border-emerald-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Closed (Regular Closure)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The borrower repaid 100% of all contractual principal, interest, and processing fees on schedule or through full early foreclosure. The bank suffered zero financial write-off. This is the optimal credit status and strengthens borrowing eligibility.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-amber-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-amber-700 font-bold text-sm">
                    <AlertTriangle className="w-4 h-4 text-amber-600" />
                    <span>Settled (Compromise OTS)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The bank accepted a partial discounted lump-sum payment (often 30% to 60% of outstanding) and waived the remaining balance. The bank booked the unpaid difference as a financial loss, resulting in an adverse credit flag that suppresses scores.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-red-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-red-700 font-bold text-sm">
                    <BadgeAlert className="w-4 h-4 text-red-600" />
                    <span>Written Off / Suit Filed</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The borrower ceased payments entirely with zero resolution. The bank classified the account as a Non-Performing Asset (NPA), wrote off 100% of the loan from its balance sheet, or initiated legal recovery in DRT/Civil Court. This constitutes maximum credit destruction.
                  </p>
                </div>
              </div>

              <div className="bg-blue-50/70 border border-blue-200/70 p-4 rounded-xl text-xs md:text-sm text-slate-700 leading-relaxed">
                <p>
                  <strong>Crucial Distinction:</strong> A &quot;Settled&quot; loan means your debt is legally extinguished—the bank can no longer sue you or demand payments. However, in the eyes of credit scoring algorithms, a settlement signifies that you were a loss-generating customer who failed to honor contractual commitments in full.
                </p>
              </div>
            </section>

            {/* SECTION 2: Why Settled Status Damages Credit Score */}
            <section id="why-settled-damages-credit" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                <span>Underwriting Algorithms &amp; Scoring Penalties</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. Why &quot;Settled&quot; Status Severely Damages Your CIBIL Score for 7 Years
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Many borrowers celebrate after completing an OTS payment, believing their financial slate is clean. However, the subsequent reality strikes when they apply for a credit card, car loan, or home loan 18 months later and face immediate rejection.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Here is an exhaustive breakdown of how credit bureaus and automated Loan Origination Systems (LOS) process a &quot;Settled&quot; record:
              </p>

              <div className="space-y-3">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-bold">1</span>
                    Immediate Score Deduction of 70 to 120 Points
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Upon the reporting of a &quot;Settled&quot; account status, the TransUnion CIBIL scoring model deducts between 70 and 120 points. Even if your score was 750 prior to default, compounding Days Past Due (DPD) strings (e.g., 90+, 180+ DPD) combined with the settlement event will crash your score into the 580–640 danger zone.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-bold">2</span>
                    Automated LOS Hard Rejection Filters
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Tier-1 Scheduled Commercial Banks (such as HDFC Bank, ICICI Bank, SBI, Axis Bank, and Kotak Mahindra Bank) utilize automated underwriting engines. When parsing incoming credit bureau files, these systems scan for status flags like &quot;Settled&quot;, &quot;Post-Write-Off Settled&quot;, or &quot;Restructured&quot;. If detected in the preceding 36 to 84 months, the application is rejected automatically without reaching human credit appraisal.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-bold">3</span>
                    Statutory 7-Year (84-Month) Bureau Retention
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Under Indian credit reporting conventions and the Credit Information Companies (Regulation) Act (CICRA 2005), historical trade-line records and repayment remarks remain on file for up to <strong>7 years (84 months)</strong>. Unless proactive legal and banking intervention is undertaken to convert the record to &quot;Closed&quot;, the settlement shadow persists throughout this multi-year window.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 3: Can Settled Status Be Removed? (Scams vs Reality) */}
            <section id="can-settled-be-removed" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <ShieldCheck className="w-4 h-4 text-[#1886ff]" />
                <span>Truth vs. Misinformation</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Can &quot;Settled&quot; Status Be Removed from CIBIL? (Debunking Illegal Credit Repair Scams)
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The internet is rife with fraudulent &quot;Credit Repair Agencies&quot; making deceptive promises such as: <em>&quot;We will completely delete your Settled mark from CIBIL database in 7 days without paying your bank!&quot;</em>
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                As legal and debt resolution advocates, we must emphasize the clear statutory reality under Indian financial law:
              </p>

              <div className="bg-amber-50 border border-amber-200 p-5 rounded-2xl space-y-3">
                <div className="flex items-center gap-2 text-amber-900 font-bold text-sm">
                  <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0" />
                  <span>The Legal Reality Under CICRA 2005</span>
                </div>
                <p className="text-xs md:text-sm text-amber-900 leading-relaxed">
                  Under <strong>Section 21 of the Credit Information Companies (Regulation) Act, 2005</strong>, credit bureaus (CIBIL, Experian, Equifax, CRIF) are statutory repositories of historical banking records. They are legally barred from deleting, altering, or suppressing accurate historical reporting without written verification and certified authorization from the original lending bank or NBFC.
                </p>
                <p className="text-xs md:text-sm text-amber-900 leading-relaxed font-semibold">
                  Any agency claiming they can &quot;hack&quot;, &quot;backdoor delete&quot;, or &quot;expunge&quot; authentic settlement records without bank closure clearance is running a criminal advance-fee scam.
                </p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                <h3 className="text-sm md:text-base font-bold text-slate-900">
                  The Only 100% Lawful Solution: Upgrading &quot;Settled&quot; to &quot;Closed&quot;
                </h3>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  The only legitimate, RBI-compliant method to remove the destructive effect of a &quot;Settled&quot; tag is <strong>Status Conversion</strong>. By contacting your original lender, calculating the net waived principal differential, remitting that balance, and obtaining an unconditional No Dues Certificate (NDC), the bank submits an updated monthly data feed to CIBIL modifying the status code to <strong>&quot;Closed&quot;</strong>.
                </p>
              </div>
            </section>

            {/* SECTION 4: Bureau Status Comparison Table */}
            <section id="bureau-status-comparison" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Quantitative Comparison</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. CIBIL Bureau Status Comparison: Impact on Borrowing &amp; Recovery
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Compare how different loan conclusion statuses reflect in credit reports, impact underwriting eligibility, and influence long-term financial health:
              </p>

              <div className="overflow-x-auto rounded-2xl border border-slate-200/80 bg-white shadow-xs">
                <table className="w-full text-left text-xs md:text-sm">
                  <thead className="bg-slate-50 border-b border-slate-200/80 text-slate-700">
                    <tr>
                      <th className="p-3.5 font-bold">Metric / Feature</th>
                      <th className="p-3.5 font-bold text-emerald-700">Closed Status</th>
                      <th className="p-3.5 font-bold text-amber-700">Settled Status</th>
                      <th className="p-3.5 font-bold text-red-700">Written Off</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-600">
                    <tr className="hover:bg-slate-50/50">
                      <td className="p-3.5 font-bold text-slate-900">Financial Loss to Bank</td>
                      <td className="p-3.5 text-emerald-700 font-semibold">₹0 (Zero Loss)</td>
                      <td className="p-3.5 text-amber-700 font-semibold">30% to 70% Waived</td>
                      <td className="p-3.5 text-red-700 font-semibold">100% Written Off</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50">
                      <td className="p-3.5 font-bold text-slate-900">Immediate Score Impact</td>
                      <td className="p-3.5 text-emerald-700 font-semibold">+15 to +40 Points</td>
                      <td className="p-3.5 text-amber-700 font-semibold">-70 to -120 Points</td>
                      <td className="p-3.5 text-red-700 font-semibold">-150 to -250 Points</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50">
                      <td className="p-3.5 font-bold text-slate-900">Unsecured Loan Eligibility</td>
                      <td className="p-3.5 text-emerald-700 font-semibold">Standard / Prime Rates</td>
                      <td className="p-3.5 text-amber-700 font-semibold">Automated Hard Reject</td>
                      <td className="p-3.5 text-red-700 font-semibold">Zero Eligibility (Blacklisted)</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50">
                      <td className="p-3.5 font-bold text-slate-900">Home Loan Eligibility</td>
                      <td className="p-3.5 text-emerald-700 font-semibold">100% Eligible</td>
                      <td className="p-3.5 text-amber-700 font-semibold">Possible (+2% Risk Spread)</td>
                      <td className="p-3.5 text-red-700 font-semibold">Strictly Ineligible</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50">
                      <td className="p-3.5 font-bold text-slate-900">Bureau Retention Window</td>
                      <td className="p-3.5 text-slate-700">Permanent Positive Record</td>
                      <td className="p-3.5 text-amber-700">Up to 7 Years (84 Mos)</td>
                      <td className="p-3.5 text-red-700">Up to 7 Years (84 Mos)</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50">
                      <td className="p-3.5 font-bold text-slate-900">Remedy / Next Action</td>
                      <td className="p-3.5 text-emerald-700 font-semibold">Maintain Flawless EMI</td>
                      <td className="p-3.5 text-blue-700 font-semibold">Pay Waived Differential</td>
                      <td className="p-3.5 text-blue-700 font-semibold">Execute Structured OTS</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 5: Step-by-Step 6-Stage Lawful Upgrade Protocol */}
            <section id="step-by-step-removal-protocol" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Award className="w-4 h-4 text-[#1886ff]" />
                <span>Actionable Step-by-Step Guide</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. The 6-Step Lawful Protocol to Remove &quot;Settled&quot; Status and Upgrade to &quot;Closed&quot;
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Follow this battle-tested, banking-law compliant roadmap to upgrade your credit profile from &quot;Settled&quot; to &quot;Closed&quot;:
              </p>

              <div className="space-y-4 pt-2">
                {/* Step 1 */}
                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 01
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Timeline: Days 1–3</span>
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-slate-900">
                    Comprehensive Credit Bureau Audit &amp; DPD Analysis
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Download your full official credit reports from all four Reserve Bank of India-licensed credit bureaus: <strong>TransUnion CIBIL, Experian, Equifax, and CRIF High Mark</strong>. Locate the exact trade-line of the settled account, identify the reported &quot;Amount Overdue&quot;, check the &quot;Settlement Date&quot;, and verify whether any residual write-off balance is erroneously showing as active overdue.
                  </p>
                </div>

                {/* Step 2 */}
                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 02
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Timeline: Days 4–10</span>
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-slate-900">
                    Request Payoff Statement &amp; Waived Differential Calculation
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Submit a formal written letter (see our legal draft template below) to the lending bank or NBFC home branch and credit operations desk. Request a formal <strong>Payoff Calculation Statement</strong> detailing the exact net differential balance (original principal minus the OTS settlement payment made).
                  </p>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-semibold text-blue-900">
                    Pro Tip: Insist that the bank waive accumulated compounding penal charges, bounce fees, and post-default legal costs, paying only legitimate principal and contractual interest.
                  </p>
                </div>

                {/* Step 3 */}
                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 03
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Timeline: Days 11–14</span>
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-slate-900">
                    Direct Bank Remittance via Traceable Channels (NEFT/RTGS/DD)
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Never pay cash to recovery agents or third-party collection agencies. Remit the negotiated differential amount directly into your loan account via traceable online banking (NEFT/RTGS/IMPS) or through a Demand Draft payable to &quot;[Bank Name] A/C [Your Loan Number]&quot;. Retain stamped deposit counterfoils and digital UTR payment receipts.
                  </p>
                </div>

                {/* Step 4 */}
                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 04
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Timeline: Days 15–25</span>
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-slate-900">
                    Secure Unconditional No Dues Certificate (NDC / NOC)
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Within 7 to 10 business days of remittance, obtain an unconditional <strong>No Dues Certificate (NDC)</strong> or <strong>Closure Certificate</strong> on official bank letterhead with an authorized officer stamp, signature, and employee code. The document must unequivocally state that 100% of dues are cleared and the account is officially &quot;Closed&quot;.
                  </p>
                </div>

                {/* Step 5 */}
                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 05
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Timeline: Days 26–35</span>
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-slate-900">
                    File Statutory Online Disputes Across CIBIL &amp; Other Bureaus
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    While banks are mandated to submit monthly updates to bureaus, you can expedite the timeline by logging into <strong>mycibil.com</strong> (and respective Experian/Equifax/CRIF portals). Raise an official Dispute under the &quot;Account Information&quot; section, enter the Account Number, select &quot;Account Status Disputed&quot;, and upload your scanned No Dues Certificate.
                  </p>
                </div>

                {/* Step 6 */}
                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 06
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Timeline: Days 35–45</span>
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-slate-900">
                    Bureau Verification &amp; Final Status Upgrade to &quot;Closed&quot;
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    CIBIL initiates an automated verification cycle with your lender. Once verified, the bureau modifies your trade-line status from &quot;Settled&quot; to &quot;Closed&quot; with ₹0 Outstanding. You will receive an official Dispute Resolution confirmation email and an updated Credit Information Report (CIR).
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 6: Infographic Showcase */}
            <section id="infographic-overview" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Sparkles className="w-4 h-4 text-[#1886ff]" />
                <span>Visual Roadmap</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Visual Defense Blueprint: 6-Step Status Removal Roadmap
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Refer to this visual summary of the 6-stage legal and banking protocol to transition from a &quot;Settled&quot; impairment to a clean &quot;Closed&quot; rating:
              </p>

              <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-3 md:p-4 overflow-hidden">
                <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-slate-100">
                  <Image
                    src="/images/infographics/remove-settled-status-from-cibil.jpg"
                    alt="How to Remove Settled Status from CIBIL: 6-Step Legal & Banking Roadmap"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 60vw"
                    priority
                  />
                </div>
                <div className="mt-3 px-2 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2">
                  <span>CredSettle Strategic Dispute Architecture • CICRA 2005 &amp; RBI Compliance</span>
                  <a
                    href="/images/infographics/remove-settled-status-from-cibil.jpg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1886ff] hover:underline font-bold flex items-center gap-1"
                  >
                    <span>View Full Size Image</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </section>

            {/* SECTION 7: CICRA 2005 Statutory Framework & RBI 30-Day Mandate */}
            <section id="rbi-guidelines-cicra-rights" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Consumer Rights</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. CICRA 2005, RBI 30-Day Mandate &amp; ₹100/Day Delay Compensation
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                As a borrower in India, you are protected by robust statutory provisions enacted by Parliament and the Reserve Bank of India. When pursuing credit report rectification, invoke these legal instruments to ensure prompt compliance from lending banks:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-[#1886ff] font-bold text-sm">
                    <Landmark className="w-4 h-4" />
                    <span>Section 21(3) CICRA 2005</span>
                  </div>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Mandates that credit information companies and credit institutions must take immediate corrective steps upon receiving dispute notifications regarding inaccurate, incomplete, or outdated credit records.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-emerald-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-600 font-bold text-sm">
                    <Clock className="w-4 h-4" />
                    <span>RBI 30-Day Resolution Window</span>
                  </div>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Under RBI Master Directions, credit institutions must verify and update credit records with bureaus within <strong>30 calendar days</strong> of receiving resolution data or customer dispute representation.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2 md:col-span-2">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                    <DollarSign className="w-4 h-4" />
                    <span>RBI Circular RBI/2023-24/72: ₹100/Day Delay Penalty</span>
                  </div>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Introduced in October 2023, the RBI Compensation Framework mandates that if a bank or credit bureau fails to resolve a credit report dispute or update data within 30 days of receipt, they must pay compensation of <strong>₹100 per calendar day</strong> to the complainant until the rectification is formally executed.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 8: Bank Grievance Letter Draft Template */}
            <section id="bank-grievance-letter-draft" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Legal Document Template</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. Formal Bank Representation Letter Draft (Payoff &amp; NDC Request)
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Use our legally drafted template to communicate with your lending bank branch or credit nodal officer. Customize the bracketed fields with your account coordinates:
              </p>

              <div className="bg-slate-900 rounded-2xl p-5 md:p-6 text-slate-100 font-mono text-xs leading-relaxed relative shadow-lg">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800 text-[11px] text-slate-400">
                  <span>FORMAT: FORMAL_BANK_REPRESENTATION_SETTLED_TO_CLOSED.TXT</span>
                  <button
                    onClick={() => copyToClipboard(letterTemplate)}
                    className="bg-[#1886ff] hover:bg-blue-600 text-white px-3 py-1.5 rounded-lg text-xs font-sans font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>{copiedLetter ? 'Copied to Clipboard!' : 'Copy Letter Draft'}</span>
                  </button>
                </div>

                <div className="whitespace-pre-wrap select-all max-h-96 overflow-y-auto pr-2 text-slate-200">
                  {letterTemplate}
                </div>
              </div>
            </section>

            {/* SECTION 9: 3-Tier Grievance & RBI Ombudsman Escalation */}
            <section id="three-tier-escalation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff]" />
                <span>Grievance Redressal Mechanism</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. The 3-Tier Grievance &amp; RBI Ombudsman Escalation Matrix
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If the lending bank branch delays issuing your payoff statement, refuses to accept your balance payment, or neglects to update CIBIL within 30 days, escalate through this structured 3-tier matrix:
              </p>

              <div className="space-y-4 pt-2">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Level 1: Branch Manager &amp; Customer Care Desk
                    </span>
                    <span className="text-xs text-slate-500 font-semibold">Turnaround: 7 Days</span>
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-slate-900">
                    Branch Level Representation
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Submit your formal letter along with previous OTS receipts to the Branch Manager. Obtain an official acknowledgment with the branch stamp and an Inward Diary Number.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-md">
                      Level 2: Principal Nodal Officer (PNO)
                    </span>
                    <span className="text-xs text-slate-500 font-semibold">Turnaround: 14 Days</span>
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-slate-900">
                    Appellate Grievance Desk
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    If unresolved after 7 days, email the Bank Principal Nodal Officer (PNO) with your Level-1 ticket reference. The PNO possesses executive administrative authority to direct operations to recalculate the ledger and issue closure reports.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-emerald-200 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">
                      Level 3: RBI Integrated Ombudsman (CMS Portal)
                    </span>
                    <span className="text-xs text-slate-500 font-semibold">Turnaround: 30 Days</span>
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-slate-900">
                    Statutory RBI Regulatory Escalation
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    If the bank fails to provide resolution within 30 days of your initial complaint, file a case on the <strong>RBI CMS portal (cms.rbi.org.in)</strong> under the Reserve Bank - Integrated Ombudsman Scheme, 2021. Claim the ₹100/day statutory delay penalty alongside compulsory CIBIL status modification.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 10: Post-Removal 12-Month Score Recovery Plan */}
            <section id="credit-recovery-trajectory" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                <span>Rebuilding Architecture</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Post-Removal 12-Month Credit Score Recovery Trajectory
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Converting your status from &quot;Settled&quot; to &quot;Closed&quot; eliminates automated application rejects, but your credit score will still reflect historical late payments (DPDs). Rebuilding to a prime 750+ score requires disciplined credit nurturing over 12 months:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <span className="text-xs font-black text-[#1886ff] uppercase tracking-wider">Months 1–3</span>
                  <h3 className="text-sm md:text-base font-bold text-slate-900">Stabilization &amp; Bureau Verification</h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Verify that all 4 bureaus reflect &quot;Closed&quot; status with ₹0 balance. Avoid applying for any new unsecured loans or credit cards to prevent unnecessary hard inquiries.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <span className="text-xs font-black text-indigo-600 uppercase tracking-wider">Months 4–6</span>
                  <h3 className="text-sm md:text-base font-bold text-slate-900">FD-Backed Secured Credit Card</h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Open a Fixed Deposit-backed secured credit card (e.g., IDFC FIRST WOW or Kotak 811 DreamDifferent) with a limit of ₹25,000–₹50,000. This creates an active, positive trade-line without credit risk.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <span className="text-xs font-black text-amber-600 uppercase tracking-wider">Months 7–9</span>
                  <h3 className="text-sm md:text-base font-bold text-slate-900">Strict &lt;30% Utilization &amp; Auto-Pay</h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Keep monthly credit utilization strictly between 15% and 25% of the total limit. Set up standing auto-debit instructions to pay 100% of the Total Amount Due before the billing cycle due date.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <span className="text-xs font-black text-emerald-600 uppercase tracking-wider">Months 10–12</span>
                  <h3 className="text-sm md:text-base font-bold text-slate-900">750+ Prime Benchmark Recovery</h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    After 6 to 9 cycles of flawless payment reporting on your new secured trade-line, your CIBIL score will cross the 750+ benchmark, restoring full eligibility for competitive home loans, car loans, and unsecured cards.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 11: Complex Scenarios */}
            <section id="complex-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>Specialized Edge Cases</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                10. Special Scenarios: Credit Cards, ARCs, App Loans &amp; Co-borrowers
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Navigating status removal across different debt instruments requires tailored legal approaches:
              </p>

              <div className="space-y-3 pt-2">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-[#1886ff]" />
                    Credit Card Settlements (Post-Write-Off Settled)
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Credit card issuers often mark compromised accounts as &quot;Post-Write-Off Settled&quot;. To convert this, contact the card division head office, pay the agreed differential principal, and obtain an unconditional card account closure certificate.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-[#1886ff]" />
                    Debt Sold to Asset Reconstruction Companies (ARCs)
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    If your debt was assigned to an ARC (e.g., Phoenix ARC, ARCIL, Asset Reconstruction Company), the original bank no longer holds rights to the account. You must negotiate directly with the ARC for the differential payoff and obtain the closure certificate directly from the ARC legal cell.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-[#1886ff]" />
                    Joint Loans &amp; Guarantor Settled Flags
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    In joint loans or guaranteed facilities, a compromise settlement marks both the primary borrower and the co-borrower/guarantor with &quot;Settled&quot;. Clearing the differential updates the record to &quot;Closed&quot; across both individuals&apos; credit bureau profiles simultaneously.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 12: Company Profile */}
            <div id="company-profile" className="scroll-target">
              <CompanySection />
            </div>

            {/* SECTION 13: Frequently Asked Questions Accordion */}
            <section id="frequently-asked-questions" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <HelpCircle className="w-4 h-4 text-[#1886ff]" />
                <span>Frequently Asked Questions</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Frequently Asked Questions on Removing Settled Status from CIBIL
              </h2>
              <p className="text-xs md:text-sm text-slate-600">
                Click on any question below to view detailed legal and banking answers verified by our debt resolution experts:
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
                        className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-slate-900 hover:text-[#1886ff] transition-colors cursor-pointer"
                        aria-expanded={isOpen}
                      >
                        <span>{faq.q}</span>
                        <ChevronDown
                          className={`w-4 h-4 sm:w-5 sm:h-5 text-slate-400 flex-shrink-0 transition-transform duration-200 ${
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

            {/* SECTION 14: Regulatory Sources & Authorities */}
            <section id="regulatory-sources" className="scroll-target space-y-4 pt-4 border-t border-slate-200">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-500">
                <BookOpen className="w-4 h-4" />
                <span>Statutory Citations &amp; Legal Authorities</span>
              </div>
              <h2 className="text-base sm:text-lg font-bold text-slate-900">
                Official Regulatory Citations
              </h2>
              <ul className="space-y-2 text-xs text-slate-600 leading-relaxed list-disc pl-5">
                <li>
                  <strong>Credit Information Companies (Regulation) Act, 2005 (CICRA 2005):</strong> Section 21 (Dispute Resolution and Correction of Credit Information), Government of India.
                </li>
                <li>
                  <strong>Reserve Bank of India Master Direction:</strong> Master Direction - Credit Information Companies (Regulation) Regulations, 2006 (Updated 2026).
                </li>
                <li>
                  <strong>RBI Circular RBI/2023-24/72 (DoR.MCS.REC.49/01.01.001/2023-24):</strong> Framework for Compensation to Customers for Delayed Updation/Rectification of Credit Information by Credit Institutions &amp; CICs.
                </li>
                <li>
                  <strong>Reserve Bank - Integrated Ombudsman Scheme, 2021:</strong> Complaints regarding non-issuance of No Dues Certificate and failure to update credit information repositories.
                </li>
              </ul>
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
                Specialized in banking compliance, debt resolution strategies, loan dispute negotiations, and CIBIL rectification with extensive experience resolving complex NPA defaults across Indian banks.
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

            {/* Card 2: Need Urgent Legal Help CTA */}
            <div
              className="rounded-3xl p-6 text-white text-center space-y-4 shadow-md relative overflow-hidden"
              style={{ backgroundColor: '#2452ae' }}
            >
              <div className="space-y-1 text-center">
                <span className="text-xs font-black uppercase tracking-wider text-blue-200 bg-white/10 px-3 py-1 rounded-full inline-block mb-1">
                  Expert CIBIL Upgrade Support
                </span>
                <h3 className="text-lg md:text-xl font-bold text-white leading-snug">
                  Stuck with a &quot;Settled&quot; Tag on CIBIL?
                </h3>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our debt resolution experts negotiate directly with your bank to calculate the true principal differential, secure your unconditional No Dues Certificate, and handle bureau rectification.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Schedule Free Debt Assessment
              </Link>
              <div className="pt-2 flex items-center justify-center gap-2 text-[11px] text-blue-200">
                <Lock className="w-3 h-3" />
                <span>100% Confidential • Direct Bank Payment</span>
              </div>
            </div>

            {/* Card 3: CredSettle Trust Badges */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <h4 className="font-bold text-slate-900 text-sm">The CredSettle Advantage</h4>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Zero Upfront Risk:</strong> Success-linked settlement fees.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Direct Bank Remittance:</strong> Zero middleman fund holding.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>RBI &amp; CICRA Compliance:</strong> 100% lawful dispute handling.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Pan-India Representation:</strong> Dedicated debt resolution specialists.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <h4 className="font-bold text-slate-900 text-sm">Related Guides</h4>
              <div className="space-y-2.5">
                <Link
                  href="/convert-settled-status-to-closed"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Convert Settled Loan to Closed Status
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Full step-by-step payoff blueprint &rarr;</span>
                </Link>

                <Link
                  href="/improve-cibil-after-loan-settlement"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Rebuild CIBIL Score After Settlement
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">750+ score recovery strategy &rarr;</span>
                </Link>

                <Link
                  href="/get-loan-after-settlement"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    How to Get a Loan After Settlement
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Approval guidelines &amp; bank criteria &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
