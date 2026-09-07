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
  Landmark
} from 'lucide-react';

export default function DrtNoticeForPersonalLoanDefaultClient() {
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
    { id: 'debt-economics-drt-thresholds', label: '1. DRT Pecuniary Thresholds' },
    { id: 'financial-breakdown-claim-math', label: '2. Claim Math & Settlement Relief' },
    { id: 'legal-forum-comparison-matrix', label: '3. DRT vs Legal Forums Matrix' },
    { id: 'cibil-algorithm-credit-restoration', label: '4. CIBIL Impact & Credit Repair' },
    { id: 'infographic-overview', label: 'Visual 6-Step Defense Blueprint' },
    { id: 'step-by-step-drt-defense-sop', label: '5. 6-Stage DRT Defense SOP' },
    { id: 'statutory-notice-defense-rights', label: '6. Section 19 RDB Act Defenses' },
    { id: 'three-tier-escalation-matrix', label: '7. 3-Tier Grievance Redressal' },
    { id: 'chronological-milestones-timeline', label: '8. Chronological DRT Timeline' },
    { id: 'specialized-drt-scenarios', label: '9. Jumbo Loans & ARC Scenarios' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authority' }
  ];

  const faqs = [
    {
      q: 'What is a DRT notice for a personal loan default?',
      a: 'A DRT notice is a formal judicial summons issued under Section 19 of the Recovery of Debts and Bankruptcy (RDB) Act, 1993. It informs the borrower that a bank or financial institution has instituted an Original Application (OA) before the Debt Recovery Tribunal to recover an unpaid loan amount exceeding the statutory pecuniary threshold of ₹20 Lakhs.'
    },
    {
      q: 'What is the minimum loan default amount for a bank to file in DRT?',
      a: 'Under Section 1(4) of the RDB Act, 1993, the statutory pecuniary jurisdiction threshold for Debt Recovery Tribunals is strictly ₹20 Lakhs and above. If your total outstanding default is below ₹20 Lakhs, the bank cannot approach the DRT and must utilize alternative avenues such as civil suits, Lok Adalat, or arbitration.'
    },
    {
      q: 'How much time do I have to file a reply to a DRT summons?',
      a: 'Under Section 19(5) of the RDB Act, a borrower has strictly 30 days from the date of service of the DRT summons to file a Written Statement (WS) with supporting documentary evidence. The Presiding Officer may grant a limited extension of up to 15 additional days only under exceptional and recorded circumstances.'
    },
    {
      q: 'Can you go to jail or face arrest for a personal loan default in DRT?',
      a: 'No. A personal loan default is strictly a civil dispute arising from contractual debt. The DRT cannot issue criminal arrest warrants or imprison borrowers for inability to pay an unsecured loan. Arrest provisions during execution under Section 19(18) apply only in extreme circumstances involving proven fraudulent asset dissipation or contempt of explicit judicial restraint orders.'
    },
    {
      q: 'What happens if I ignore a DRT notice and do not appear?',
      a: 'If you fail to file a Written Statement or appear through an advocate within the stipulated timeline, the DRT will proceed ex-parte under Section 19(5B). The tribunal will accept the bank\'s claims as uncontested and issue an ex-parte Recovery Certificate under Section 19(22), enabling the Recovery Officer to attach bank accounts and unencumbered assets.'
    },
    {
      q: 'Can an unsecured personal loan be settled under OTS after a DRT case is filed?',
      a: 'Yes. Receiving a DRT notice is one of the most effective stages to negotiate a compromise One-Time Settlement (OTS). When borrowers file strong written statements challenging compound interest and procedural flaws, banks frequently prefer bilateral out-of-court settlements with 40% to 60% waivers to avoid protracted litigation.'
    },
    {
      q: 'What is a Written Statement (WS) in DRT and what should it contain?',
      a: 'A Written Statement is the defendant borrower\'s formal legal response to the bank\'s Original Application. It must contain specific parawise denials, challenge excessive compound penal interest, object to incorrect account statements, plead financial hardship, and present valid counterclaims or set-offs under Section 19(6) to 19(8) of the RDB Act.'
    },
    {
      q: 'How does the Supreme Court ruling in Central Bank of India v. Ravindra protect borrowers in DRT?',
      a: 'The Constitution Bench of the Supreme Court in Central Bank of India v. Ravindra (2002) held that banks cannot charge compound interest on penal interest or capitalize penal levies into the principal sum. Borrowers can cite this precedent in DRT to dispute inflated loan statements and force re-computation of actual contractual dues.'
    },
    {
      q: 'Can DRT orders be appealed, and what is the pre-deposit requirement?',
      a: 'Yes, any final order or interim direction passed by a DRT can be appealed before the Debt Recovery Appellate Tribunal (DRAT) under Section 20 of the RDB Act within 30 days. However, Section 21 mandates a pre-deposit of 50% of the debt determined by the DRT, which the Appellate Tribunal may reduce to a minimum of 25% on sufficient grounds.'
    },
    {
      q: 'How does a DRT settlement impact my CIBIL credit score?',
      a: 'Once a settlement is executed and approved by the DRT through a consent order, the bank files a withdrawal memo and issues a No Dues Certificate. The lender reports the account status as "Settled" or "Post-Settlement Closed" to CIBIL, CRIF, Experian, and Equifax under Section 21 of the Credit Information Companies (Regulation) Act.'
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
            <span>Section 19 Recovery of Debts and Bankruptcy Act 1993</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Received a DRT Notice for Personal Loan Default? Legal Defense
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            Have you received a Debt Recovery Tribunal summons for an unpaid personal loan exceeding ₹20 Lakhs? Understand your 30-day statutory timeline to file a Written Statement, challenge inflated penal charges, and negotiate a 40% to 60% compromise settlement.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Get Expert DRT Legal Defense</span>
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
                  <span>DRT Judicial Safeguards</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Governed under the Recovery of Debts and Bankruptcy Act 1993 and Supreme Court Precedents.
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
                <span>EXECUTIVE BRIEF: DRT PERSONAL LOAN DEFENSE &amp; SETTLEMENT CRUX</span>
              </div>

              <div className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <div>
                    <strong className="text-slate-900 font-bold">Strict ₹20 Lakhs Threshold:</strong> Debt Recovery Tribunals hold jurisdiction only over default claims of ₹20 Lakhs and above under Section 1(4) of the RDB Act.
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <div>
                    <strong className="text-slate-900 font-bold">Rigid 30-Day Response Window:</strong> Borrowers must file a formal Written Statement within 30 days of receiving the Section 19 DRT summons.
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <div>
                    <strong className="text-slate-900 font-bold">Purely Civil Dispute (Zero Arrest Risk):</strong> Unsecured loan default is a civil matter; DRTs cannot issue criminal arrest warrants or imprison borrowers.
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <div>
                    <strong className="text-slate-900 font-bold">Ex-Parte Risk Mitigation:</strong> Entering a timely legal appearance prevents uncontested Recovery Certificates and bank account attachments.
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <div>
                    <strong className="text-slate-900 font-bold">Challenging Compound Penal Interest:</strong> Supreme Court precedent prohibits capitalizing penal charges, reducing inflated demand claims.
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <div>
                    <strong className="text-slate-900 font-bold">Bilateral 40% to 60% Compromise OTS:</strong> Filing a solid legal defense provides the leverage needed to negotiate an affordable out-of-court settlement.
                  </div>
                </div>
              </div>
            </div>

            {/* SECTION 1: Debt Economics & DRT Thresholds */}
            <section id="debt-economics-drt-thresholds" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Jurisdiction &amp; Banking Economics</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. Debt Economics &amp; DRT Thresholds for Personal Loans
              </h2>
              <div className="space-y-4 text-slate-700 leading-relaxed text-sm md:text-base">
                <p>
                  When a borrower encounters severe financial distress such as enterprise downturns, corporate downsizing, or critical health crises, high-value unsecured personal loans can transition into delinquency. Under Reserve Bank of India prudential norms, non-payment extending beyond 90 days triggers asset classification from Special Mention Accounts (SMA-0, SMA-1, and SMA-2) to Non-Performing Asset (NPA) status. Once classified as an NPA, lending institutions are statutorily mandated to allocate substantial Tier-1 capital provisioning, creating strong balance-sheet incentives for lenders to initiate aggressive recovery mechanisms.
                </p>
                <p>
                  For unsecured credit portfolios where the aggregate defaulted exposure equals or exceeds ₹20 Lakhs, commercial banks and Non-Banking Financial Companies (NBFCs) invoke the specialized judicial machinery of the Debt Recovery Tribunal by filing an Original Application (OA) under Section 19 of the Recovery of Debts and Bankruptcy Act, 1993. Established specifically to expedite the recovery of dues owed to banks and financial institutions, the DRT bypasses standard civil courts.
                </p>
                <p>
                  Because personal loans are entirely unsecured, the lender possesses no mortgage deeds or pledged assets, making the draconian property seizure mechanisms under Section 13(4) of the SARFAESI Act inapplicable. Consequently, the bank must rely exclusively on obtaining a formal monetary decree from the DRT. For the borrower, this statutory distinction offers vital legal leverage. Engaging in strategic legal defense and contesting arbitrary accounting additions creates compelling commercial reasons for the bank&apos;s senior credit committee to approve a heavily discounted One-Time Settlement (OTS) rather than endure years of contentious tribunal litigation.
                </p>
              </div>
            </section>

            {/* SECTION 2: Financial Breakdown & Settlement Math */}
            <section id="financial-breakdown-claim-math" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                <span>Financial Analysis &amp; Settlement Economics</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. Financial Breakdown: Principal vs Inflated Claims
              </h2>
              <div className="space-y-4 text-slate-700 leading-relaxed text-sm md:text-base">
                <p>
                  A primary source of confusion for borrowers served with a DRT summons is the massive disparity between their original borrowed principal and the astronomical claim amount demanded in the bank&apos;s Original Application. When an account defaults, banking software automatically overlays contractual interest with compounded penal interest, late payment charges, cheque dishonor fees, and legal processing overheads. Over an 18 to 24 month delinquency cycle, these punitive additions can inflate the total claim by 40% to 75% above the authentic principal balance.
                </p>
                <p>
                  The table below presents a realistic financial audit of a representative ₹30 Lakhs unsecured personal loan default after 180 days of delinquency, demonstrating how aggressive bank compounding creates phantom dues and illustrating the target compromise OTS window:
                </p>

                <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-4">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-[#1886ff]" />
                    Representative Financial Breakdown &amp; Compromise Target
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                    <div className="space-y-2">
                      <div className="flex justify-between py-1.5 border-b border-slate-100">
                        <span className="text-slate-600">Sanctioned Principal Amount:</span>
                        <span className="font-bold text-slate-900">₹30,00,000</span>
                      </div>
                      <div className="flex justify-between py-1.5 border-b border-slate-100">
                        <span className="text-slate-600">Principal Outstanding at Default:</span>
                        <span className="font-bold text-slate-900">₹24,50,000</span>
                      </div>
                      <div className="flex justify-between py-1.5 border-b border-slate-100">
                        <span className="text-slate-600">Accrued Contractual Interest (14% p.a.):</span>
                        <span className="font-bold text-slate-900">₹5,14,500</span>
                      </div>
                      <div className="flex justify-between py-1.5 border-b border-slate-100">
                        <span className="text-slate-600">Compounded Penal Interest (24% p.a.):</span>
                        <span className="font-bold text-red-600">₹4,41,000</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between py-1.5 border-b border-slate-100">
                        <span className="text-slate-600">Legal, Tribunal &amp; Misc Charges:</span>
                        <span className="font-bold text-slate-900">₹1,25,000</span>
                      </div>
                      <div className="flex justify-between py-1.5 border-b border-slate-100">
                        <span className="text-slate-600">Total Bank DRT Demand Claim:</span>
                        <span className="font-bold text-red-700">₹35,30,500</span>
                      </div>
                      <div className="flex justify-between py-1.5 border-b border-slate-100 bg-blue-50/60 px-2 rounded-md">
                        <span className="font-semibold text-blue-900">Realistic Compromise OTS Target:</span>
                        <span className="font-extrabold text-[#1886ff]">₹13,50,000 – ₹16,00,000</span>
                      </div>
                      <div className="flex justify-between py-1.5 border-b border-slate-100 bg-emerald-50/60 px-2 rounded-md">
                        <span className="font-semibold text-emerald-900">Expected Borrower Debt Waiver:</span>
                        <span className="font-extrabold text-emerald-700">54% to 62% Total Relief</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-slate-500 italic">
                    Note: Compromise settlements are negotiated on verified hardship evidence and legal defenses challenging unapproved compounding. All final payments must be remitted directly to the bank against a formal OTS sanction letter.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 3: 4-Sided Bordered Comparison Matrix */}
            <section id="legal-forum-comparison-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Comparative Legal Matrix</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Legal Forum Matrix: DRT vs Other Recovery Routes
              </h2>
              <div className="space-y-4 text-slate-700 leading-relaxed text-sm md:text-base">
                <p>
                  Institutional lenders select their legal recovery avenue based on loan structure, collateral availability, and total claim quantum. Understanding how the Debt Recovery Tribunal operates relative to civil summary suits, arbitration tribunals, Lok Adalats, and criminal cheque bounce proceedings enables borrowers to formulate an effective legal strategy:
                </p>

                <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                  <table className="w-full text-left text-xs md:text-sm">
                    <thead className="bg-slate-50 border-b border-slate-200/80 text-slate-700">
                      <tr>
                        <th className="p-3.5 font-bold border-r border-slate-200/80">Recovery Forum</th>
                        <th className="p-3.5 font-bold border-r border-slate-200/80">Pecuniary Jurisdiction</th>
                        <th className="p-3.5 font-bold border-r border-slate-200/80">Governing Statute</th>
                        <th className="p-3.5 font-bold border-r border-slate-200/80">Arrest / Jail Powers</th>
                        <th className="p-3.5 font-bold border-r border-slate-200/80">Appeal Mechanism</th>
                        <th className="p-3.5 font-bold text-[#1886ff]">Key Defense Strategy</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-600">
                      <tr className="hover:bg-slate-50/50">
                        <td className="p-3.5 font-bold text-slate-900 border-r border-slate-200/80">Debt Recovery Tribunal (DRT)</td>
                        <td className="p-3.5 border-r border-slate-200/80 font-semibold text-slate-800">₹20 Lakhs &amp; Above</td>
                        <td className="p-3.5 border-r border-slate-200/80">RDB Act, 1993</td>
                        <td className="p-3.5 border-r border-slate-200/80 text-emerald-700 font-semibold">NO (Civil Tribunal)</td>
                        <td className="p-3.5 border-r border-slate-200/80">DRAT (Sec 20) with 25%-50% Pre-deposit</td>
                        <td className="p-3.5 text-[#1886ff] font-semibold">File 30-Day WS, contest penal interest &amp; push OTS</td>
                      </tr>
                      <tr className="hover:bg-slate-50/50">
                        <td className="p-3.5 font-bold text-slate-900 border-r border-slate-200/80">Summary Civil Suit (Order 37 CPC)</td>
                        <td className="p-3.5 border-r border-slate-200/80">Below ₹20 Lakhs</td>
                        <td className="p-3.5 border-r border-slate-200/80">Civil Procedure Code, 1908</td>
                        <td className="p-3.5 border-r border-slate-200/80 text-emerald-700 font-semibold">NO (Money Recovery)</td>
                        <td className="p-3.5 border-r border-slate-200/80">Regular First Appeal (RFA) to High Court</td>
                        <td className="p-3.5 text-[#1886ff] font-semibold">File Leave to Defend establishing triable issues</td>
                      </tr>
                      <tr className="hover:bg-slate-50/50">
                        <td className="p-3.5 font-bold text-slate-900 border-r border-slate-200/80">Arbitration Tribunal</td>
                        <td className="p-3.5 border-r border-slate-200/80">Any Value (Contractual)</td>
                        <td className="p-3.5 border-r border-slate-200/80">Arbitration Act, 1996</td>
                        <td className="p-3.5 border-r border-slate-200/80 text-emerald-700 font-semibold">NO (Private Forum)</td>
                        <td className="p-3.5 border-r border-slate-200/80">Section 34 Petition in Principal Civil Court</td>
                        <td className="p-3.5 text-[#1886ff] font-semibold">Challenge unilateral arbitrator under Sec 12(5)</td>
                      </tr>
                      <tr className="hover:bg-slate-50/50">
                        <td className="p-3.5 font-bold text-slate-900 border-r border-slate-200/80">National Lok Adalat</td>
                        <td className="p-3.5 border-r border-slate-200/80">Any Consensual Value</td>
                        <td className="p-3.5 border-r border-slate-200/80">Legal Services Act, 1987</td>
                        <td className="p-3.5 border-r border-slate-200/80 text-emerald-700 font-semibold">NO (Pure Conciliation)</td>
                        <td className="p-3.5 border-r border-slate-200/80">Non-Appealable (Final Consent Award)</td>
                        <td className="p-3.5 text-[#1886ff] font-semibold">Execute formal OTS with maximum compound waiver</td>
                      </tr>
                      <tr className="hover:bg-slate-50/50">
                        <td className="p-3.5 font-bold text-slate-900 border-r border-slate-200/80">Cheque Bounce (Sec 138 NI Act)</td>
                        <td className="p-3.5 border-r border-slate-200/80">Instrument Face Value</td>
                        <td className="p-3.5 border-r border-slate-200/80">NI Act, 1881 / PSSA 2007</td>
                        <td className="p-3.5 border-r border-slate-200/80 text-red-700 font-semibold">YES (Bailable, up to 2 yrs)</td>
                        <td className="p-3.5 border-r border-slate-200/80">Criminal Appeal to Sessions Court</td>
                        <td className="p-3.5 text-[#1886ff] font-semibold">Secure bail, challenge notice service &amp; compound</td>
                      </tr>
                      <tr className="hover:bg-slate-50/50">
                        <td className="p-3.5 font-bold text-slate-900 border-r border-slate-200/80">Complete Inaction / Ignoring Summons</td>
                        <td className="p-3.5 border-r border-slate-200/80">N/A</td>
                        <td className="p-3.5 border-r border-slate-200/80">Default Judgment</td>
                        <td className="p-3.5 border-r border-slate-200/80 text-amber-700 font-semibold">Account Attachment</td>
                        <td className="p-3.5 border-r border-slate-200/80">High Cost Set-Aside Applications</td>
                        <td className="p-3.5 text-red-700 font-semibold">Guarantees ex-parte Recovery Certificate</td>
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
                4. CIBIL Impact &amp; Credit Bureau Restoration Strategy
              </h2>
              <div className="space-y-4 text-slate-700 leading-relaxed text-sm md:text-base">
                <p>
                  When a lender files an Original Application in the DRT, the institutional Loan Origination System (LOS) automatically transmits high-severity negative reporting to all four licensed credit bureaus in India (TransUnion CIBIL, Equifax, Experian, and CRIF High Mark). The credit scoring algorithm weights credit behavior across five standard parameters: payment history (35%), credit exposure and utilization (30%), credit history length (15%), credit mix (10%), and new credit inquiries (10%).
                </p>
                <p>
                  A default transitioning beyond 90 Days Past Due (DPD) results in an immediate rating degradation of 90 to 150 points. Once the bank adds a &quot;Suit Filed (DRT)&quot; remark, automated risk-engine models across all Indian financial institutions impose an immediate hard block on any future personal loan, credit card, or business credit applications.
                </p>
                <p>
                  Resolving the DRT matter through a negotiated compromise One-Time Settlement halts ongoing deterioration. Upon receipt of the settlement consideration and issuance of the No Dues Certificate, the lender is legally obligated under Section 21 of the Credit Information Companies (Regulation) Act (CICRA), 2005 to update the bureau status to &quot;Settled&quot; or &quot;Post-Settlement Closed&quot; within 30 days. While a settled remark remains on the report, the outstanding balance is brought to zero, stopping active DPD compounding and enabling borrowers to steadily rebuild their credit profile to 750+ over 18 to 24 months through disciplined secured credit products.
                </p>
              </div>
            </section>

            {/* SECTION 5: Visual Infographic Asset Card */}
            <section id="infographic-overview" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Sparkles className="w-4 h-4 text-[#1886ff]" />
                <span>Visual Defense Framework</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Visual Blueprint: 6-Step DRT Legal Defense Workflow
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Examine the comprehensive visual roadmap below detailing the step-by-step procedural defense sequence under Section 19 of the RDB Act, 1993, from initial summons verification to formal case withdrawal and credit closure:
              </p>

              <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-3 md:p-4 overflow-hidden">
                <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-slate-100">
                  <Image
                    src="/images/infographics/drt-notice-for-personal-loan-default.jpg"
                    alt="6-Step DRT Personal Loan Default Legal Defense Workflow Diagram India"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 60vw"
                    priority
                  />
                </div>
                <div className="mt-3 px-2 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2">
                  <span>CredSettle Legal Defense Architecture • Recovery of Debts and Bankruptcy Act 1993</span>
                  <a
                    href="/images/infographics/drt-notice-for-personal-loan-default.jpg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1886ff] hover:underline font-bold flex items-center gap-1"
                  >
                    <span>View High-Resolution Blueprint</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </section>

            {/* SECTION 6: 6-Stage Standard Operating Procedure (SOP) */}
            <section id="step-by-step-drt-defense-sop" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Award className="w-4 h-4 text-[#1886ff]" />
                <span>Standard Operating Procedure</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. 6-Stage SOP: Step-by-Step DRT Defense Protocol
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Navigating a Debt Recovery Tribunal proceeding requires methodical execution across procedural, legal, and commercial milestones. Follow this six-stage standard operating protocol:
              </p>

              <div className="space-y-4 pt-2">
                {/* Stage 1 */}
                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 01
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Timeline: Days 1–7</span>
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-slate-900">
                    Summons Verification &amp; Loan Document Forensic Audit
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Verify the official service of the DRT summons, recording the exact delivery date to preserve the 30-day statutory response window. Conduct an in-depth forensic audit of the bank&apos;s Original Application, loan agreement terms, and statement of account under the Bankers&apos; Books Evidence Act to isolate unapproved fees and calculation errors.
                  </p>
                </div>

                {/* Stage 2 */}
                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 02
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Timeline: Days 8–20</span>
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-slate-900">
                    Drafting &amp; Filing Formal Written Statement (WS)
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Prepare a comprehensive Written Statement under Section 19(5) of the RDB Act. Formulate parawise rebuttals to the bank&apos;s allegations, plead legitimate financial hardship backed by medical or employment records, and assert statutory counterclaims or set-off pleas under Section 19(6) to 19(8).
                  </p>
                </div>

                {/* Stage 3 */}
                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 03
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Timeline: Days 21–30</span>
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-slate-900">
                    Challenging Compound Penal Interest &amp; Ledger Calculations
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    File a dedicated interim application disputing the capitalization of penal surcharges. Cite the Supreme Court Constitution Bench ruling in Central Bank of India v. Ravindra to challenge illegal interest compounding, forcing the tribunal to direct the lender to submit a revised contractual debt calculation.
                  </p>
                </div>

                {/* Stage 4 */}
                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 04
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Timeline: Days 31–60</span>
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-slate-900">
                    Tribunal Appearance &amp; Interim Protection Arguments
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Enter formal appearance before the DRT Presiding Officer through legal counsel. Contest any interlocutory prayers filed by the bank under Section 19(12) or 19(13) seeking asset disclosure or account freezing, demonstrating the borrower&apos;s bona fide intent and preventing premature coercive orders.
                  </p>
                </div>

                {/* Stage 5 */}
                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 05
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Timeline: Days 61–120</span>
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-slate-900">
                    Bilateral Compromise OTS Negotiation &amp; Approval
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Leverage the legal defense and ledger challenges to engage the bank&apos;s Zonal Stressed Assets Resolution Committee. Negotiate a compromise One-Time Settlement (OTS) securing a 40% to 60% waiver on inflated dues, ensuring all terms are formalized in an official bank sanction letter.
                  </p>
                </div>

                {/* Stage 6 */}
                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 06
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Timeline: Days 121–180</span>
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-slate-900">
                    Consent Terms, DRT Case Withdrawal &amp; No Dues Certificate
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Upon remitting the agreed settlement consideration, file Joint Consent Terms before the DRT. The Presiding Officer disposes of the Original Application as settled, following which the bank issues a final No Dues Certificate and updates credit bureau records to closed status.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: Statutory Notice Defense & Legal Rights under RDB Act */}
            <section id="statutory-notice-defense-rights" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Jurisprudence &amp; Defense Grid</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. Statutory Notice Defense: Section 19 RDB Act Rights
              </h2>
              <div className="space-y-4 text-slate-700 leading-relaxed text-sm md:text-base">
                <p>
                  A robust defense against a Debt Recovery Tribunal summons is grounded in statutory procedural safeguards established under the Recovery of Debts and Bankruptcy Act, 1993 and binding constitutional jurisprudence. When defending against an Original Application for an unsecured personal loan, borrowers must assert four primary legal protections:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                  <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                    <div className="flex items-center gap-2 text-[#1886ff] font-bold text-sm">
                      <Clock className="w-4 h-4" />
                      <span>Section 19(5) Response Timelines</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      The statute grants defendant borrowers an absolute legal right of 30 days to submit a Written Statement from the date of summons service. Challenging improper substitute service (such as unverified newspaper publications or unsigned electronic notices) preserves your right to contest the case on merits and prevents premature ex-parte decrees.
                    </p>
                  </div>

                  <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                    <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                      <Scale className="w-4 h-4" />
                      <span>Section 19(6)-(8) Counterclaims</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Borrowers are statutorily entitled to file claims of set-off or counterclaims against the bank within the Written Statement. Damages arising from unfair banking practices, unauthorized debit freeze, or mis-sold loan protection insurance can be claimed directly against the bank&apos;s demand balance.
                    </p>
                  </div>

                  <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                    <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                      <Gavel className="w-4 h-4" />
                      <span>Central Bank of India v. Ravindra</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      The Constitution Bench of the Supreme Court categorically ruled that lending institutions cannot charge compound interest on penal interest or capitalize punitive charges into the principal balance. Pleading this precedent forces the DRT to eliminate inflated compounding additions from the bank&apos;s claim.
                    </p>
                  </div>

                  <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                    <div className="flex items-center gap-2 text-amber-700 font-bold text-sm">
                      <ShieldCheck className="w-4 h-4" />
                      <span>RBI Fair Practices Code Protections</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Lenders initiating DRT litigation are strictly forbidden from employing abusive third-party recovery agents, calling borrowers at unreasonable hours, or intimidating workplace colleagues under the RBI Master Direction on Fair Practices Code, making any harassment actionable before the Ombudsman.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 8: 3-Tier Grievance Redressal Matrix */}
            <section id="three-tier-escalation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff]" />
                <span>Institutional Redressal Mechanisms</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. 3-Tier Escalation Matrix: Institutional Redressal
              </h2>
              <div className="space-y-4 text-slate-700 leading-relaxed text-sm md:text-base">
                <p>
                  When facing unyielding bank recovery desks or arbitrary procedural actions during DRT litigation, borrowers should systematically escalate through the formal 3-tier regulatory and judicial framework:
                </p>

                <div className="space-y-3 pt-1">
                  <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                        Level 1: Bank Principal Nodal Officer (PNO) &amp; DRT Mediation
                      </span>
                      <span className="text-xs text-slate-500 font-semibold">Turnaround: 7–14 Days</span>
                    </div>
                    <h3 className="text-sm md:text-base font-bold text-slate-900">
                      Internal Grievance &amp; OTS Compromise Referral
                    </h3>
                    <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                      Serve a formal representation upon the Bank Principal Nodal Officer (PNO) and Internal Ombudsman, highlighting calculation discrepancies and requesting formal reference to the bank&apos;s Special OTS Committee or DRT-annexed mediation center.
                    </p>
                  </div>

                  <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-md">
                        Level 2: DRAT Appeal (Section 20) &amp; High Court Writ Jurisdiction
                      </span>
                      <span className="text-xs text-slate-500 font-semibold">Turnaround: 30–60 Days</span>
                    </div>
                    <h3 className="text-sm md:text-base font-bold text-slate-900">
                      Appellate Tribunal &amp; Constitutional Remedies
                    </h3>
                    <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                      If the DRT passes an adverse or arbitrary interim order, file a statutory appeal before the Debt Recovery Appellate Tribunal (DRAT) under Section 20 of the RDB Act, or invoke Article 226/227 writ jurisdiction before the High Court for violations of natural justice or jurisdictional excess.
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
                      If the lender combines judicial proceedings with unlawful recovery harassment, third-party disclosure, or refusal to furnish audited account statements, lodge a formal regulatory complaint on the RBI Complaint Management System (cms.rbi.org.in) under the Integrated Ombudsman Scheme, 2021.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 9: Chronological Procedural Milestones Table */}
            <section id="chronological-milestones-timeline" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Clock className="w-4 h-4 text-[#1886ff]" />
                <span>Procedural Milestones</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. Chronological Milestones: Summons to Final Order
              </h2>
              <div className="space-y-4 text-slate-700 leading-relaxed text-sm md:text-base">
                <p>
                  Understanding the chronological progression of an Original Application before the Debt Recovery Tribunal allows borrowers to execute their legal defense and settlement negotiations with tactical precision:
                </p>

                <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                  <table className="w-full text-left text-xs md:text-sm">
                    <thead className="bg-slate-50 border-b border-slate-200/80 text-slate-700">
                      <tr>
                        <th className="p-3.5 font-bold border-r border-slate-200/80">Procedural Phase</th>
                        <th className="p-3.5 font-bold border-r border-slate-200/80">Tribunal Milestone</th>
                        <th className="p-3.5 font-bold border-r border-slate-200/80">Statutory Limitation</th>
                        <th className="p-3.5 font-bold text-[#1886ff]">Strategic Borrower Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-600">
                      <tr className="hover:bg-slate-50/50">
                        <td className="p-3.5 font-bold text-slate-900 border-r border-slate-200/80">Day 1</td>
                        <td className="p-3.5 border-r border-slate-200/80">Service of DRT Summons &amp; OA Copy</td>
                        <td className="p-3.5 border-r border-slate-200/80">Section 19(4) service trigger</td>
                        <td className="p-3.5 text-[#1886ff] font-semibold">Preserve postal envelope, audit loan ledger &amp; engage counsel</td>
                      </tr>
                      <tr className="hover:bg-slate-50/50">
                        <td className="p-3.5 font-bold text-slate-900 border-r border-slate-200/80">Days 15–30</td>
                        <td className="p-3.5 border-r border-slate-200/80">Filing Written Statement (WS)</td>
                        <td className="p-3.5 border-r border-slate-200/80">30 days under Section 19(5)</td>
                        <td className="p-3.5 text-[#1886ff] font-semibold">Submit parawise defense, dispute penal rates &amp; plead hardship</td>
                      </tr>
                      <tr className="hover:bg-slate-50/50">
                        <td className="p-3.5 font-bold text-slate-900 border-r border-slate-200/80">Days 45–60</td>
                        <td className="p-3.5 border-r border-slate-200/80">Preliminary Hearing &amp; Interim Applications</td>
                        <td className="p-3.5 border-r border-slate-200/80">Presiding Officer schedule</td>
                        <td className="p-3.5 text-[#1886ff] font-semibold">Argue interest re-computation application &amp; resist asset freeze</td>
                      </tr>
                      <tr className="hover:bg-slate-50/50">
                        <td className="p-3.5 font-bold text-slate-900 border-r border-slate-200/80">Months 3–4</td>
                        <td className="p-3.5 border-r border-slate-200/80">Compromise OTS Negotiation Window</td>
                        <td className="p-3.5 border-r border-slate-200/80">Bilateral discussion window</td>
                        <td className="p-3.5 text-[#1886ff] font-semibold">Negotiate 40% to 60% debt waiver with Bank Stressed Asset Desk</td>
                      </tr>
                      <tr className="hover:bg-slate-50/50">
                        <td className="p-3.5 font-bold text-slate-900 border-r border-slate-200/80">Months 5–6</td>
                        <td className="p-3.5 border-r border-slate-200/80">Joint Consent Order &amp; Case Disposal</td>
                        <td className="p-3.5 border-r border-slate-200/80">Final decree stage</td>
                        <td className="p-3.5 text-[#1886ff] font-semibold">Remit settlement funds, obtain NDC &amp; verify CIBIL closure</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* SECTION 10: Specialized Real-World Scenarios */}
            <section id="specialized-drt-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>Specialized DRT Scenarios</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Specialized DRT Scenarios: High-Value Default Defense
              </h2>
              <div className="space-y-4 text-slate-700 leading-relaxed text-sm md:text-base">
                <p>
                  High-exposure personal loan defaults in the DRT often intersect with complex commercial, organizational, and third-party dynamics. Understanding these specialized scenarios helps borrowers craft tailored defenses:
                </p>

                <div className="space-y-3 pt-1">
                  <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                    <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                      <DollarSign className="w-4 h-4 text-[#1886ff]" />
                      Unsecured Jumbo Personal Loans Exceeding ₹20 Lakhs
                    </h3>
                    <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                      Salaried executives and professionals taking multiple unsecured jumbo loans (₹25L to ₹75L) during corporate careers face acute DRT exposure upon sudden job loss or medical crises. Because there is no mortgage security, establishing honest inability to pay through bank statements and income loss documentation encourages banks to approve structured compromise OTS.
                    </p>
                  </div>

                  <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                    <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-[#1886ff]" />
                      Personal Guarantees for Business Loans in DRT
                    </h3>
                    <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                      Directors and business proprietors who have executed personal guarantees for enterprise credit facilities are frequently impleaded in Section 19 DRT applications alongside the principal corporate borrower. Personal guarantors possess distinct legal defenses under Sections 133 to 141 of the Indian Contract Act, 1872 regarding contract variance and creditor negligence.
                    </p>
                  </div>

                  <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                    <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-[#1886ff]" />
                      Debt Assigned to Asset Reconstruction Companies (ARCs)
                    </h3>
                    <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                      When banks sell delinquent personal loan portfolios to ARCs (such as ARCIL, Phoenix ARC, or CFM ARC) under Section 5 of the SARFAESI Act, the ARC substitutes itself as the claimant in the pending DRT application. Because ARCs acquire bad loans at steep 70% to 80% discounts on face value, they are exceptionally receptive to fast, deeply discounted compromise settlements.
                    </p>
                  </div>

                  <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                    <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                      <UserCheck className="w-4 h-4 text-[#1886ff]" />
                      Consortium Banking &amp; Multi-Lender Claims
                    </h3>
                    <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                      Where multiple banking institutions form a recovery consortium, individual lenders cannot unilaterally proceed without inter-creditor alignment under RBI guidelines. Borrowers can propose a unified inter-creditor compromise resolution, consolidating liabilities under a single structured OTS framework.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 11: Company Profile */}
            <div id="company-profile" className="scroll-target">
              <CompanySection />
            </div>

            {/* SECTION 12: Frequently Asked Questions Accordion */}
            <section id="frequently-asked-questions" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <HelpCircle className="w-4 h-4 text-[#1886ff]" />
                <span>Frequently Asked Questions</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Frequently Asked Questions: DRT Personal Loan Notices
              </h2>
              <p className="text-xs md:text-sm text-slate-600">
                Click on any question below to explore authoritative legal answers verified by our banking compliance and debt resolution professionals:
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

            {/* SECTION 13: Citations & Outbound Authority Grid */}
            <section id="regulatory-sources" className="scroll-target space-y-4 pt-4 border-t border-slate-200">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-500">
                <BookOpen className="w-4 h-4" />
                <span>Official Citations &amp; Legal Authorities</span>
              </div>
              <h2 className="text-base sm:text-lg font-bold text-slate-900">
                Statutory References &amp; Official Regulatory Citations
              </h2>
              <ul className="space-y-2 text-xs text-slate-600 leading-relaxed list-disc pl-5">
                <li>
                  <strong>Recovery of Debts and Bankruptcy Act, 1993:</strong> Sections 1(4), 19(1) to 19(25), 20, and 21, Ministry of Law and Justice, Government of India.
                </li>
                <li>
                  <strong>Supreme Court of India:</strong> <em>Central Bank of India v. Ravindra (2002) 1 SCC 367</em> (Prohibition of compounding penal interest and capitalization of punitive bank charges).
                </li>
                <li>
                  <strong>Reserve Bank of India Master Directions:</strong> Master Direction on Fair Practices Code for Lenders, Grievance Redressal Mechanism, and Non-Performing Asset Prudential Norms (Updated 2026).
                </li>
                <li>
                  <strong>Credit Information Companies (Regulation) Act, 2005:</strong> Section 21 (Mandatory accuracy, dispute rectification, and timely credit bureau reporting post-settlement).
                </li>
                <li>
                  <strong>Reserve Bank - Integrated Ombudsman Scheme, 2021:</strong> Statutory redressal against unfair debt collection practices and arbitrary penal interest calculations.
                </li>
              </ul>

              {/* 6 Outbound Authority Badges */}
              <div className="pt-3">
                <span className="text-xs font-bold text-slate-700 block mb-2">Verified Outbound Regulatory Portals:</span>
                <div className="flex flex-wrap gap-2">
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
                    <span>RBI Complaint Portal (cms.rbi.org.in)</span>
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
                    href="https://nalsa.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200 inline-flex items-center gap-1"
                  >
                    <span>National Legal Services Authority (nalsa.gov.in)</span>
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
                  <Link href="/bank-sent-legal-notice-for-loan-what-to-do" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Bank Sent Legal Notice
                  </Link>
                  <Link href="/arbitration-notice-personal-loan-default" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Arbitration Notice Defense
                  </Link>
                  <Link href="/bank-recovery-case-in-court" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Bank Court Recovery Cases
                  </Link>
                  <Link href="/services/personal-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Personal Loan Settlement
                  </Link>
                  <Link href="/services/anti-harassment" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Anti-Harassment Protection
                  </Link>
                  <Link href="/convert-settled-status-to-closed" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Convert Settled to Closed
                  </Link>
                  <Link href="/remove-settled-status-from-cibil" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Remove Settled from CIBIL
                  </Link>
                  <Link href="/full-and-final-settlement-meaning" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Full &amp; Final Settlement Meaning
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
                Specialized in banking compliance, DRT defense strategies, Section 19 Written Statements, and high-value NPA compromise settlements across Debt Recovery Tribunals in India.
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

            {/* Card 2: Emergency CTA Card */}
            <div
              className="rounded-3xl p-6 text-white text-center space-y-4 shadow-md relative overflow-hidden"
              style={{ backgroundColor: '#2452ae' }}
            >
              <div className="space-y-1 text-center">
                <span className="text-xs font-black uppercase tracking-wider text-blue-200 bg-white/10 px-3 py-1 rounded-full inline-block mb-1">
                  100% CONFIDENTIAL DRT DEFENSE
                </span>
                <h3 className="text-lg md:text-xl font-bold text-white leading-snug">
                  Received a DRT Notice?
                </h3>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our legal and debt resolution specialists draft your 30-day Written Statement, dispute compound penal charges, and negotiate a 40% to 60% loan settlement.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Get Expert DRT Legal Defense
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
                  <span>Direct Bank Settlement • RBI Compliant</span>
                </div>
              </div>
            </div>

            {/* Card 3: CredSettle Trust Badges */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <h4 className="font-bold text-slate-900 text-sm">The CredSettle Advantage</h4>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Zero Upfront Settlement Risk:</strong> Success-linked settlement fees.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Direct Bank Remittance:</strong> No third-party escrow or holding.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>RDB Act &amp; RBI Compliance:</strong> 100% lawful dispute handling.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Pan-India DRT Defense:</strong> Expert advocates &amp; financial negotiators.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <h4 className="font-bold text-slate-900 text-sm">Related Legal Guides</h4>
              <div className="space-y-2.5">
                <Link
                  href="/bank-sent-legal-notice-for-loan-what-to-do"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Bank Sent Legal Notice for Loan Default
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Full step-by-step reply blueprint &rarr;</span>
                </Link>

                <Link
                  href="/arbitration-notice-personal-loan-default"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Arbitration Notice for Personal Loan Default
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Perkins Eastman defense blueprint &rarr;</span>
                </Link>

                <Link
                  href="/bank-recovery-case-in-court"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Bank Filed Recovery Case in Civil Court
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Civil suit defense &amp; summons guide &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
