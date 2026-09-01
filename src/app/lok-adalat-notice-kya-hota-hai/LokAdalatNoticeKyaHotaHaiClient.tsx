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
  CreditCard,
  Briefcase,
  Bookmark,
  ArrowRight,
  Clock,
  UserCheck,
  Sparkles,
  ShieldAlert,
  FileCheck
} from 'lucide-react';

interface FaqItem {
  q: string;
  a: string;
}

export default function LokAdalatNoticeKyaHotaHaiClient() {
  const [activeId, setActiveId] = useState<string>('executive-summary');
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
    { id: 'executive-summary', label: 'Executive Summary: Lok Adalat Crux' },
    { id: 'debt-economics-npa', label: '1. Debt Economics & Lok Adalat' },
    { id: 'financial-breakdown-math', label: '2. Financial Math & 50%-70% Waivers' },
    { id: 'comparison-matrix-table', label: '3. Dispute Resolution Matrix' },
    { id: 'cibil-algorithm-scoring', label: '4. CIBIL Algorithm & CICRA Sec 21' },
    { id: 'infographic-roadmap', label: '5. Visual 6-Stage Roadmap' },
    { id: 'step-by-step-sop', label: '6. 6-Stage Settlement SOP' },
    { id: 'statutory-notice-defense', label: '7. Statutory Notice Defense' },
    { id: 'three-tier-grievance-matrix', label: '8. 3-Tier Escalation Matrix' },
    { id: 'chronological-milestones', label: '9. Chronological Timelines' },
    { id: 'specialized-scenarios', label: '10. Specialized Case Scenarios' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'statutory-citations', label: 'Official Citations & Portals' }
  ];

  const faqs: FaqItem[] = [
    {
      q: 'Lok Adalat notice kya hota hai aur bank ise kyu bhejte hain?',
      a: 'Lok Adalat notice pre-litigation conciliation invitation hai jo NALSA dwara issue hota hai. Banks ise NPA loan settlement aur balance sheet cleanup ke liye bhejte hain.'
    },
    {
      q: 'Kya Lok Adalat notice aane par police arrest kar sakti hai ya jail ho sakti hai?',
      a: 'Nahi. Lok Adalat purely civil conciliation bench hai. Iske pas arrest warrant ya jail bhejne ki koi shakti nahi hoti.'
    },
    {
      q: 'Kya Lok Adalat mein jana mandatory ya anivarya hota hai?',
      a: 'Nahi, Lok Adalat me jana voluntary hai. Wahan jana highly recommended hai kyunki bina court fees ke 50% se 70% loan waiver milta hai.'
    },
    {
      q: 'Lok Adalat mein personal loan ya credit card par kitna discount ya waiver milta hai?',
      a: 'Banks typically 100% penal charges waive karte hain. Financial hardship par core principal par bhi 40% se 60% concession mil sakta hai.'
    },
    {
      q: 'Kya main Lok Adalat mein khud jane ke bajay advocate ya legal representative bhej sakta hoon?',
      a: 'Haan. Aap authorized legal counsel ya debt resolution professional ko bhej sakte hain jo aapka hardship dossier present karke negotiate karenge.'
    },
    {
      q: 'Lok Adalat Award under Section 21 ka kya legal importance hota hai?',
      a: 'Section 21 ke tehat Lok Adalat Award final Civil Court Decree hota hai. Yeh non-appealable hota hai, jisse bank dubara claim nahi kar sakta.'
    },
    {
      q: 'Kya Section 138 cheque bounce ya Section 25 NACH cases Lok Adalat mein settle ho sakte hain?',
      a: 'Haan. Section 138 NI Act aur Section 25 PSSA compoundable hain. Settlement hote hi complaints officially withdraw aur close ho jati hain.'
    },
    {
      q: 'Agar Lok Adalat mein bank ke sath settlement amount par agreement na bane to kya hoga?',
      a: 'Agar agreement nahi banta, to bench case ko Not Settled mark kar deti hai. Iske baad matter regular civil court me chala jata hai.'
    },
    {
      q: 'Lok Adalat settlement ke baad CIBIL score aur credit report par kya asar padta hai?',
      a: 'Settlement ke baad report par Settled reflect hota hai. CICRA Section 21 ke tehat NDC submit karke status Closed karaya ja sakta hai.'
    },
    {
      q: 'Lok Adalat notice aane par step-by-step kya karna chahiye?',
      a: 'Pehle loan ledger audit karein, hardship proof collect karein, bank nodal desk se offer negotiate karein, aur Section 21 decree execute karein.'
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
          <div className="inline-flex items-center gap-1.5 bg-white/15 backdrop-blur-xs px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider text-blue-100 mb-3">
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>NALSA Legal Services Authorities Act, 1987 &amp; RBI Guidelines</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Lok Adalat Notice Kya Hota Hai? (NALSA Loan Settlement &amp; Legal Rights)
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            Bank ya NBFC se Lok Adalat notice mila hai? Janein Lok Adalat notice kya hota hai, NALSA settlement process, 50% se 70% loan waiver prapt karne ke legal tarike aur statutory rights.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Received Lok Adalat Notice? Get Settlement Defense</span>
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
                  <span>Statutory NALSA Authority</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Governed by Legal Services Authorities Act 1987 &amp; RBI Fair Practices Code.
                </p>
              </div>
            </div>
          </aside>

          {/* ================= MIDDLE COLUMN: MAIN CONTENT ================= */}
          <div className="space-y-8 md:space-y-10 min-w-0">
            
            {/* Executive Brief Box (Human Editorial Paragraphs) */}
            <div
              id="executive-summary"
              className="scroll-target rounded-2xl bg-[#F4F8FE] border border-blue-100/90 border-l-[5px] border-l-[#1886ff] p-5 sm:p-6 md:p-7 shadow-xs space-y-4 text-slate-800"
            >
              <div className="flex items-center gap-2 text-xs md:text-sm font-black uppercase tracking-wider text-[#1886ff]">
                <Bookmark className="w-4 h-4 text-[#1886ff]" />
                <span>EXECUTIVE BRIEF: LOK ADALAT NOTICE KYA HOTA HAI AUR LOAN SETTLEMENT</span>
              </div>

              <div className="space-y-3.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <p>
                  Receiving a Lok Adalat notice often causes panic among borrowers who mistake it for a criminal summons or police warrant. In reality, Lok Adalat is an amicable conciliation body established under the Legal Services Authorities Act, 1987. Organised under NALSA, it operates purely as a civil conciliation bench with zero powers to issue arrest warrants or order imprisonment. Participation is completely voluntary, and no settlement can be forced without mutual, written consent.
                </p>
                <p>
                  Because commercial banks utilize National Lok Adalats to write off NPAs and release locked Tier-1 capital, borrowers gain substantial settlement leverage. Presenting a documented hardship dossier allows borrowers to eliminate 100% of accumulated penal interest and negotiate 50% to 70% waivers on core dues. Any agreed compromise results in an official Section 21 Award, holding the binding authority of a final, non-appealable Civil Court decree.
                </p>
              </div>
            </div>

            {/* SECTION 1: Debt Economics & NPA Dynamics */}
            <section id="debt-economics-npa" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Debt Economics &amp; NPA Dynamics</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. Debt Economics &amp; Lok Adalat: Why Banks Send Pre-Litigation Notices
              </h2>
              <div className="space-y-3.5 text-sm md:text-base text-slate-700 leading-relaxed">
                <p>
                  When an individual defaults on personal loan or credit card EMIs for 90 days, banking regulations require the lender to classify the account as a Non-Performing Asset (NPA). Under RBI prudential norms, banks must allocate 15% to 100% of the delinquent debt into locked Tier-1 capital reserves, restricting lending operations and eroding institutional profitability.
                </p>
                <p>
                  Because unsecured loans lack mortgaged collateral, lenders cannot enforce SARFAESI property seizures. Traditional civil litigation entails upfront court fees of 5% to 10% and multi-year delays. Consequently, banks partner with District Legal Services Authorities (DLSA) to refer delinquent debts to National Lok Adalat. For financial institutions, Lok Adalat provides an expedited One-Time Settlement (OTS) mechanism to recover liquid capital, write off bad debts, and release locked reserves in a single sitting.
                </p>
              </div>
            </section>

            {/* SECTION 2: Financial Breakdown & Settlement Math */}
            <section id="financial-breakdown-math" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <DollarSign className="w-4 h-4 text-[#1886ff]" />
                <span>Settlement Economics</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. Financial Breakdown &amp; Settlement Math: 50% to 70% Lok Adalat Waivers
              </h2>
              <div className="space-y-3.5 text-sm md:text-base text-slate-700 leading-relaxed">
                <p>
                  Following a default, lenders inflate balances by adding 24% to 36% compound penal interest, bounce surcharges, and recovery fees. In Lok Adalat conciliation, the bench systematically disregards these arbitrary penal additions, focusing discussions strictly on net unrecovered principal and genuine borrower capacity.
                </p>
                <p>
                  Consider a defaulted ₹4,00,000 personal loan where ₹3,50,000 in unpaid principal inflates to a ₹6,50,000 bank demand due to ₹3,00,000 in penal interest and fees. Through structured Lok Adalat conciliation, the borrower&apos;s counsel can eliminate 100% of the ₹3,00,000 penal surcharge while securing a 40% hardship discount on the principal balance. This establishes a final binding Section 21 settlement of ₹2,10,000, delivering a total waiver of ₹4,40,000 (67.7% relief) and complete legal discharge.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-600" />
                    Bank Inflated Claim Structure (Pre-Adalat)
                  </h3>
                  <div className="space-y-2 text-xs text-slate-600 leading-relaxed">
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span>Original Disbursed Principal:</span>
                      <span className="font-bold text-slate-900">₹4,00,000</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span>Unpaid Balance Principal:</span>
                      <span className="font-bold text-slate-900">₹3,50,000</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span>Accumulated Penal &amp; Bounce Charges:</span>
                      <span className="font-bold text-red-600">₹3,00,000</span>
                    </div>
                    <div className="flex justify-between py-1 pt-2 font-bold text-slate-900">
                      <span>Total Bank Notice Demand:</span>
                      <span className="text-red-700">₹6,50,000</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-emerald-200 shadow-xs space-y-3">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    Lok Adalat Negotiated Compromise Math
                  </h3>
                  <div className="space-y-2 text-xs text-slate-600 leading-relaxed">
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span>100% Penal Charges Waiver:</span>
                      <span className="font-bold text-emerald-600">-₹3,00,000 (Waived)</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span>Principal Hardship Concession (40%):</span>
                      <span className="font-bold text-emerald-600">-₹1,40,000 (Waived)</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span>Total Negotiated Borrower Relief:</span>
                      <span className="font-bold text-emerald-700">₹4,40,000 (67.7% Waiver)</span>
                    </div>
                    <div className="flex justify-between py-1 pt-2 font-bold text-slate-900">
                      <span>Final Section 21 Consent Decree:</span>
                      <span className="text-[#1886ff] text-sm">₹2,10,000 (Full &amp; Final)</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 3: 4-Sided Bordered Comparison Matrix (Full Grid with Vertical Lines) */}
            <section id="comparison-matrix-table" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Comparative Legal Matrix</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Dispute Resolution Matrix: Lok Adalat vs Regular Court vs Arbitration vs Inaction
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Compare how National Lok Adalat compares against conventional recovery routes for unsecured personal loan defaults:
              </p>

              <div className="overflow-x-auto rounded-2xl border border-slate-200/80 bg-white shadow-xs">
                <table className="w-full text-left text-xs md:text-sm border-collapse">
                  <thead className="bg-slate-50 border-b border-slate-200 text-slate-700">
                    <tr className="divide-x divide-slate-200">
                      <th className="p-3.5 font-bold">Resolution Forum</th>
                      <th className="p-3.5 font-bold">Governing Statute</th>
                      <th className="p-3.5 font-bold">Arrest Powers</th>
                      <th className="p-3.5 font-bold">Finality &amp; Appeal</th>
                      <th className="p-3.5 font-bold">Resolution Timeline</th>
                      <th className="p-3.5 font-bold text-[#1886ff]">Borrower Advantage</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-600">
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-200">
                      <td className="p-3.5 font-bold text-slate-900">National Lok Adalat</td>
                      <td className="p-3.5">Legal Services Act 1987</td>
                      <td className="p-3.5 text-emerald-700 font-semibold">Zero (Civil Conciliation)</td>
                      <td className="p-3.5 font-medium">Sec 21 Award</td>
                      <td className="p-3.5">Single Sitting</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold">50%-70% Waiver &amp; Binding Decree</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-200">
                      <td className="p-3.5 font-bold text-slate-900">Summary Civil Suit</td>
                      <td className="p-3.5">Order 37 CPC</td>
                      <td className="p-3.5 text-emerald-700 font-semibold">Zero (Civil Recovery)</td>
                      <td className="p-3.5">Money Decree</td>
                      <td className="p-3.5">18-36 Months</td>
                      <td className="p-3.5 text-slate-700">Extended litigation, interest liability</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-200">
                      <td className="p-3.5 font-bold text-slate-900">Arbitration Tribunal</td>
                      <td className="p-3.5">Arbitration Act 1996</td>
                      <td className="p-3.5 text-emerald-700 font-semibold">Zero (Private Bench)</td>
                      <td className="p-3.5">Sec 36 Decree</td>
                      <td className="p-3.5">4-8 Months</td>
                      <td className="p-3.5 text-slate-700">Challenge Sec 12(5) Unilateral Appointment</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-200">
                      <td className="p-3.5 font-bold text-slate-900">Debt Recovery Tribunal</td>
                      <td className="p-3.5">RDBFI Act 1993</td>
                      <td className="p-3.5 text-emerald-700 font-semibold">Zero (Claims &gt; ₹20L)</td>
                      <td className="p-3.5">Recovery Certificate</td>
                      <td className="p-3.5">12-24 Months</td>
                      <td className="p-3.5 text-slate-700">High legal costs &amp; contested accounting</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-200">
                      <td className="p-3.5 font-bold text-slate-900">Total Inaction</td>
                      <td className="p-3.5">None (Ignored Notices)</td>
                      <td className="p-3.5 text-amber-700 font-semibold">Ex-Parte Attachments</td>
                      <td className="p-3.5 text-red-600">Ex-Parte Decrees</td>
                      <td className="p-3.5">Unchecked</td>
                      <td className="p-3.5 text-red-600 font-semibold">Score Destroyed &amp; Compounding Dues</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 4: Technical CIBIL Algorithm & Scoring Math */}
            <section id="cibil-algorithm-scoring" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                <span>Credit Bureau Analytics</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. CIBIL Algorithm Dynamics, DPD Tracking &amp; CICRA Section 21 Upgrades
              </h2>
              <div className="space-y-3.5 text-sm md:text-base text-slate-700 leading-relaxed">
                <p>
                  Credit bureaus (CIBIL, Experian, Equifax, CRIF High Mark) evaluate creditworthiness using five factors: Payment History (35%), Credit Utilization (30%), Credit History Depth (15%), Credit Mix (10%), and Recent Inquiries (10%). Defaulting past 90 days past due (90+ DPD) triggers an automated risk flag across inter-bank systems, reducing credit scores by 80 to 140 points.
                </p>
                <p>
                  Executing a Lok Adalat compromise initially updates bureau records to Settled status, terminating active litigation flags and negative DPD compounding. To restore credit ratings systematically, borrowers can invoke Section 21 of the Credit Information Companies (Regulation) Act, 2005 (CICRA). Submitting the certified Section 21 Lok Adalat Award alongside the bank&apos;s unconditional No Dues Certificate ensures the balance is reported as zero, enabling progressive credit rebuilding over 12 to 18 months.
                </p>
              </div>
            </section>

            {/* SECTION 5: Visual Infographic Asset Card */}
            <section id="infographic-roadmap" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Sparkles className="w-4 h-4 text-[#1886ff]" />
                <span>Visual Defense Roadmap</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. Visual Roadmap: 6-Stage Lok Adalat Notice Defense &amp; Settlement Workflow
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Refer to this visual roadmap illustrating the procedural workflow to handle Lok Adalat notices, challenge excessive interest claims, and secure binding Section 21 consent awards:
              </p>

              <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-3 md:p-4 overflow-hidden">
                <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-slate-100">
                  <Image
                    src="/images/infographics/lok-adalat-notice-kya-hota-hai.jpg"
                    alt="Lok Adalat Notice Kya Hota Hai 6 Stage Settlement Workflow India"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 60vw"
                    priority
                  />
                </div>
                <div className="mt-3 px-2 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2">
                  <span>CredSettle Legal Defense Architecture • Legal Services Authorities Act 1987 (NALSA)</span>
                  <a
                    href="/images/infographics/lok-adalat-notice-kya-hota-hai.jpg"
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

            {/* SECTION 6: Step-by-Step SOP (6 Stages - Human Narrative) */}
            <section id="step-by-step-sop" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Award className="w-4 h-4 text-[#1886ff]" />
                <span>Standard Operating Procedure</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. Step-by-Step SOP: 6 Stages to Handle Lok Adalat Notices &amp; Secure Waivers
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Successfully resolving a defaulted personal loan through Lok Adalat requires following a structured six-stage procedural workflow:
              </p>

              <div className="space-y-4 pt-2">
                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 01
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Days 1–5</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900">Notice Verification &amp; Audit</h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Verify the DLSA seal and Pre-Litigation Case number. Audit loan statements to isolate principal balances from arbitrary penal surcharges.
                  </p>
                </div>

                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 02
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Days 6–15</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900">Hardship Dossier</h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Compile verified distress evidence, such as termination letters, salary cuts, or medical records, to substantiate waiver requests before the bench.
                  </p>
                </div>

                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 03
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Days 16–25</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900">Pre-Adalat Bank Representation</h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Engage the bank&apos;s Legal Cell and Nodal Officer prior to the session. Submitting an OTS proposal enables pre-approval of substantial concessions.
                  </p>
                </div>

                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 04
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Day of Adalat</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900">Bench Conciliation</h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Appear before the bench in person or via counsel. The judicial conciliator mediates terms neutrally, ensuring no coercive terms are imposed.
                  </p>
                </div>

                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 05
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Immediate</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900">Section 21 Award</h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Upon reaching agreement, execute a formal Settlement Deed. The bench issues an official Award under Section 21, establishing a binding civil decree.
                  </p>
                </div>

                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 06
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Days 60–90</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900">Remittance &amp; NDC</h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Remit settlement funds directly to the loan account. Obtain an unconditional No Dues Certificate and rectify credit bureau records under CICRA 2005.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: Statutory Notice Defense & Legal Rights */}
            <section id="statutory-notice-defense" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileCheck className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Notice Defense</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. Statutory Notice Defense &amp; Legal Rights: PSSA, NI Act, Arbitration &amp; DRT
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Borrowers managing defaulted debt often receive parallel statutory notices. Understanding each framework ensures a robust defense:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Section 25 PSSA
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Payments Act 2007</span>
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-slate-900">NACH Dishonor Defense</h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    When NACH mandates bounce, lenders issue Section 25 notices. Because Section 25 offenses are compoundable, settling before a Lok Adalat bench leads to the immediate quashing of complaints without criminal conviction.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-md">
                      Section 138 NI Act
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Negotiable Instruments</span>
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-slate-900">Cheque Bounce Compounding</h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Lenders frequently file Section 138 complaints upon cheque dishonor. Under Section 147 of the NI Act, cheque bounce matters are explicitly compoundable. Executing Lok Adalat compromise terms permanently disposes of magistrate court proceedings.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">
                      Arbitration Act Sec 21
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Perkins Eastman</span>
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-slate-900">Challenging Arbitrator Nominations</h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Lenders often initiate private arbitration by unilaterally appointing sole arbitrators. Under Supreme Court rulings (TRF Ltd. and Perkins Eastman), unilateral nominations are disqualified de jure under Section 12(5), enabling transition to Lok Adalat.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-purple-700 bg-purple-50 px-2.5 py-1 rounded-md">
                      DRT Section 19 &amp; RBI
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Fair Practices Code</span>
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-slate-900">High-Value Claims &amp; Anti-Coercion</h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Claims exceeding ₹20 Lakhs before Debt Recovery Tribunals can be referred to Lok Adalats under Section 19(1). Additionally, the RBI Fair Practices Code strictly prohibits recovery agents from intimidation or unauthorized visits.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 8: 3-Tier Grievance & Escalation Matrix */}
            <section id="three-tier-grievance-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff]" />
                <span>Escalation Framework</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. 3-Tier Escalation Matrix: Defending Borrower Rights Against Coercion
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If lenders or collection agencies violate statutory guidelines, escalate through this structured three-tier grievance redressal mechanism:
              </p>

              <div className="space-y-4 pt-2">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Level 1: Bank Grievance Redressal Officer
                    </span>
                    <span className="text-xs text-slate-500 font-semibold">Turnaround: 7–10 Days</span>
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-slate-900">Formal Statement Audit</h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    File a written objection challenging arbitrary penal surcharges, requesting formal referral to the bank&apos;s compromise settlement committee for Lok Adalat disposal.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-md">
                      Level 2: Bank Principal Nodal Officer
                    </span>
                    <span className="text-xs text-slate-500 font-semibold">Turnaround: 14–21 Days</span>
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-slate-900">Executive Nodal Escalation</h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    If the GRO fails to resolve the dispute or if agent harassment persists, escalate directly to the Principal Nodal Officer with documented hardship evidence to stay collection calls.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-emerald-200 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">
                      Level 3: RBI Integrated Ombudsman
                    </span>
                    <span className="text-xs text-slate-500 font-semibold">Turnaround: 30 Days</span>
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-slate-900">Regulatory Complaint Filing</h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    If thirty days elapse without institutional resolution, lodge a formal regulatory complaint on the RBI CMS portal (cms.rbi.org.in) under the Integrated Ombudsman Scheme, 2021.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 9: Chronological Milestone Timeline Table (Full Grid with Vertical Lines) */}
            <section id="chronological-milestones" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Clock className="w-4 h-4 text-[#1886ff]" />
                <span>Procedural Timelines</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Chronological Procedural Timeline: Notice Receipt to Final Closure (Day 1 to Month 6)
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Understanding chronological milestones enables systematic defense planning:
              </p>

              <div className="overflow-x-auto rounded-2xl border border-slate-200/80 bg-white shadow-xs">
                <table className="w-full text-left text-xs md:text-sm border-collapse">
                  <thead className="bg-slate-50 border-b border-slate-200 text-slate-700">
                    <tr className="divide-x divide-slate-200">
                      <th className="p-3.5 font-bold">Timeline Phase</th>
                      <th className="p-3.5 font-bold">Procedural Milestone</th>
                      <th className="p-3.5 font-bold">Statutory Framework</th>
                      <th className="p-3.5 font-bold text-[#1886ff]">Actionable Strategy</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-600">
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-200">
                      <td className="p-3.5 font-bold text-slate-900">Day 1</td>
                      <td className="p-3.5">Notice Receipt</td>
                      <td className="p-3.5">Sec 19/20 Legal Services Act</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold">Verify DLSA seal and isolate principal</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-200">
                      <td className="p-3.5 font-bold text-slate-900">Days 10–20</td>
                      <td className="p-3.5">Hardship Dossier</td>
                      <td className="p-3.5">RBI Fair Practices Code</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold">Compile income loss proofs and engage nodal desk</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-200">
                      <td className="p-3.5 font-bold text-slate-900">Days 30–45</td>
                      <td className="p-3.5">Bench Sitting</td>
                      <td className="p-3.5">NALSA Conciliation Rules</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold">Represent via counsel and execute decree</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-200">
                      <td className="p-3.5 font-bold text-slate-900">Days 60–90</td>
                      <td className="p-3.5">Compromise Remittance</td>
                      <td className="p-3.5">Sec 21 Award Terms</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold">Pay settlement directly and secure NDC</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-200">
                      <td className="p-3.5 font-bold text-slate-900">Months 4–6</td>
                      <td className="p-3.5">Credit Restoration</td>
                      <td className="p-3.5">CICRA 2005 Sec 21</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold">Upgrade CIBIL status to Closed</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: Specialized Real-World Scenarios */}
            <section id="specialized-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>Case Scenarios</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                10. Specialized Real-World Scenarios: Multi-Lender, Layoffs, Business &amp; ARCs
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Lok Adalat conciliation mechanics provide versatile debt resolution pathways across diverse borrower hardship scenarios:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-[#1886ff]" />
                    Multi-Lender Consolidation in Lok Adalat
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Borrowers managing defaulted cards and loans across multiple banks can coordinate joint conciliation sittings, negotiating simultaneous compromise agreements across all lenders to eliminate collection pressure.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-[#1886ff]" />
                    Corporate Layoffs &amp; Executive Income Loss
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Salaried professionals impacted by workforce reductions can submit severance letters, establishing bona fide distress and motivating credit committees to grant up to 60% principal waivers.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-[#1886ff]" />
                    Proprietorship &amp; Working Capital Defaults
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Small business owners facing cash-flow collapse can resolve unsecured overdrafts through Lok Adalat, preventing asset attachment and shielding guarantors from litigation.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-[#1886ff]" />
                    Debt Assigned to Asset Reconstruction Companies
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    When loans are sold to ARCs (e.g., Phoenix ARC, ARCIL), these entities offer deep compromise settlements in Lok Adalat for rapid cash recoveries.
                  </p>
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
                Frequently Asked Questions: Lok Adalat Notice Kya Hota Hai
              </h2>
              <p className="text-xs md:text-sm text-slate-600">
                Click on any question below to view detailed legal answers verified by our debt resolution professionals:
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
            <section id="statutory-citations" className="scroll-target space-y-4 pt-4 border-t border-slate-200">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-500">
                <BookOpen className="w-4 h-4" />
                <span>Statutory Citations &amp; Legal Authorities</span>
              </div>
              <h2 className="text-base sm:text-lg font-bold text-slate-900">
                Official Regulatory Citations &amp; Judicial References
              </h2>
              <ul className="space-y-2 text-xs text-slate-600 leading-relaxed list-disc pl-5">
                <li>
                  <strong>Legal Services Authorities Act, 1987:</strong> Sections 19, 20, 21, and 22, Ministry of Law and Justice, Government of India.
                </li>
                <li>
                  <strong>National Legal Services Authority Regulations, 2009:</strong> Guidelines for Pre-Litigation Bank Recovery Matters.
                </li>
                <li>
                  <strong>Reserve Bank of India Master Directions:</strong> Fair Practices Code for Lenders and Grievance Redressal Mechanism.
                </li>
                <li>
                  <strong>Credit Information Companies (Regulation) Act, 2005 (CICRA):</strong> Section 21 regarding accuracy and credit status rectification.
                </li>
                <li>
                  <strong>Negotiable Instruments Act, 1881:</strong> Section 138 read with Section 147 (Compounding of Cheque Dishonor Offenses).
                </li>
              </ul>

              {/* 6 Outbound Authority Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Verified Government &amp; Regulatory Portals:</span>
                <div className="flex flex-wrap gap-2">
                  <a
                    href="https://rbi.org.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200 flex items-center gap-1"
                  >
                    <span>rbi.org.in</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a
                    href="https://cms.rbi.org.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200 flex items-center gap-1"
                  >
                    <span>cms.rbi.org.in</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a
                    href="https://nalsa.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200 flex items-center gap-1"
                  >
                    <span>nalsa.gov.in</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a
                    href="https://cibil.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200 flex items-center gap-1"
                  >
                    <span>cibil.com</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a
                    href="https://indiacode.nic.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200 flex items-center gap-1"
                  >
                    <span>indiacode.nic.in</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a
                    href="https://cybercrime.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200 flex items-center gap-1"
                  >
                    <span>cybercrime.gov.in</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* 10 Internal Topic Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Explore Related CredSettle Legal &amp; Debt Guides:</span>
                <div className="flex flex-wrap gap-2">
                  <Link href="/bank-recovery-agent-harassment-rules-in-hindi" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Recovery Agent Rules in Hindi
                  </Link>
                  <Link href="/lok-adalat-personal-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Lok Adalat Loan Settlement
                  </Link>
                  <Link href="/bank-sent-legal-notice-for-loan-what-to-do" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Bank Sent Legal Notice
                  </Link>
                  <Link href="/arbitration-notice-personal-loan-default" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Arbitration Notice Defense
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
                  <Link href="/get-noc-after-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Get NOC Certificate
                  </Link>
                  <Link href="/full-and-final-settlement-meaning" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Full &amp; Final Settlement Meaning
                  </Link>
                </div>
              </div>
            </section>

          </div>

          {/* ================= RIGHT COLUMN: STICKY SIDEBAR ================= */}
          <aside className="space-y-5 sticky top-6">
            
            {/* Card 1: Author Bio Card */}
            <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs p-5 space-y-3">
              <div className="flex items-center gap-3">
                <Link
                  href="/author/ashish-jhangra"
                  className="w-12 h-12 rounded-full bg-blue-100 text-[#1886ff] font-extrabold text-base flex items-center justify-center flex-shrink-0 hover:bg-blue-200 transition-colors shadow-2xs"
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
              <p className="text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-2.5">
                Specialized in banking compliance, Lok Adalat conciliation advocacy, loan dispute resolution, and NPA settlement negotiations across District Legal Services Authorities in India.
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
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>CredSettle Panel</span>
                </span>
              </div>
            </div>

            {/* Card 2: Emergency CTA Card (Matching Image 3 Exactly) */}
            <div className="rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 text-white p-5 shadow-md space-y-4">
              <div className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-xs px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider text-white">
                <Lock className="w-3 h-3" />
                <span>100% CONFIDENTIAL</span>
              </div>

              <div className="space-y-1">
                <h3 className="text-base font-extrabold tracking-tight leading-snug">
                  Received a Lok Adalat Notice?
                </h3>
                <p className="text-xs text-blue-100 leading-relaxed">
                  Stop compounding interest and recovery harassment. Settle your debt legally with direct bank authorization.
                </p>
              </div>

              <div className="space-y-2 pt-1">
                <Link
                  href="/contact"
                  className="w-full py-2.5 px-4 rounded-xl bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-xs sm:text-sm text-center block transition-all shadow-sm hover:bg-slate-50"
                >
                  Get Free Lok Adalat Debt Assessment
                </Link>
                
                <a
                  href="tel:+918800226635"
                  className="w-full py-2 px-3 rounded-xl bg-blue-700/60 hover:bg-blue-700 text-white font-bold text-xs text-center flex items-center justify-center gap-2 transition-all border border-blue-500/30"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call: +91-8800226635</span>
                </a>
              </div>
            </div>

            {/* Card 3: CredSettle Trust Commitments Card */}
            <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <h4 className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>The CredSettle Advantage</span>
              </h4>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Zero Upfront Risk:</strong> Success-linked settlement fee model.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Direct Bank Remittance:</strong> Zero intermediary account holding.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Statutory Section 21 Decree:</strong> Final and non-appealable awards.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Pan-India Representation:</strong> Advocates available in all DLSAs.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <h4 className="font-bold text-slate-900 text-sm">Related Legal Guides</h4>
              <div className="space-y-2.5">
                <Link
                  href="/bank-recovery-agent-harassment-rules-in-hindi"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Bank Recovery Agent Harassment Rules in Hindi
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">RBI rules &amp; legal rights guide &rarr;</span>
                </Link>

                <Link
                  href="/lok-adalat-personal-loan-settlement"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Lok Adalat Personal Loan Settlement
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Full settlement process &amp; waivers &rarr;</span>
                </Link>

                <Link
                  href="/convert-settled-status-to-closed"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Convert Settled Loan to Closed Status
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Clean credit report blueprint &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
