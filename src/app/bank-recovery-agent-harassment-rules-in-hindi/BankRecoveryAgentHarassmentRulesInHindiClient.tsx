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
  BookOpen,
  Building2,
  DollarSign,
  Phone,
  Bookmark,
  ArrowRight,
  UserCheck,
  Gavel,
  Landmark,
  ShieldAlert,
  FileCheck,
  TrendingUp,
  Award
} from 'lucide-react';

interface FaqItem {
  q: string;
  a: string;
}

export default function BankRecoveryAgentHarassmentRulesInHindiClient() {
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
    { id: 'executive-summary', label: 'Executive Summary: Recovery Rules' },
    { id: 'debt-economics-npa', label: '1. Debt Economics & NPA Dynamics' },
    { id: 'financial-math-breakdown', label: '2. Settlement Math & Penalties' },
    { id: 'comparison-matrix-table', label: '3. Debt Resolution Matrix' },
    { id: 'cibil-algorithm-scoring', label: '4. CIBIL Algorithm & CICRA Sec 21' },
    { id: 'visual-infographic-asset', label: '5. Visual Defense Blueprint' },
    { id: 'step-by-step-police-sop', label: '6. 6-Stage Actionable SOP' },
    { id: 'statutory-defense-framework', label: '7. Statutory Notice Defense' },
    { id: 'three-tier-grievance-matrix', label: '8. 3-Tier Escalation Matrix' },
    { id: 'chronological-milestones', label: '9. Chronological Timelines' },
    { id: 'specialized-scenarios', label: '10. Specialized Case Studies' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'citations-authority-grid', label: 'Statutory Citations & Portals' }
  ];

  const faqs: FaqItem[] = [
    {
      q: 'Kya bank recovery agents kisi bhi samay call ya ghar aa sakte hain?',
      a: 'Nahi. RBI Fair Practices Code ke mutabiq recovery agents sirf subah 8:00 AM se shaam 7:00 PM ke beech hi call ya ghar aa sakte hain. Is samay ke baad call karna ya aana gair-kanuni hai.'
    },
    {
      q: 'Kya recovery agent relatives ya employer ko call karke loan bata sakta hai?',
      a: 'Nahi. RBI rules ke tehat borrower ki privacy confidential hai. Agent parivaar, dosto ya employer ko call karke loan ke baare mein nahi bata sakta aur na hi unhe pareshan kar sakta hai.'
    },
    {
      q: 'Agar recovery agent gaali-galoj ya dhamki de to kya legal action lein?',
      a: 'Turant call recording ya CCTV footage secure karein. Yeh Bharatiya Nyaya Sanhita (BNS) Section 351 aur Section 308 ke tehat apradh hai. Aap police station mein FIR darj karwa sakte hain.'
    },
    {
      q: 'Kya personal loan default karne par recovery agent arrest karwa sakta hai?',
      a: 'Nahi. Unsecured personal loan ya credit card default shuddh civil dispute hai, criminal offense nahi. Recovery agents ke paas kisi ko arrest karne ya police bhejne ka koi kanuni adhikar nahi hota.'
    },
    {
      q: 'Bank ke khilaf Principal Nodal Officer (PNO) ko complaint kaise karein?',
      a: 'Bank website se PNO ka email lein. Harassment call recordings aur timestamps ke sath formal legal violation notice PNO ko email aur speed post se bhejein.'
    },
    {
      q: 'RBI CMS portal par recovery agent harassment ki complaint kaise darj karein?',
      a: 'cms.rbi.org.in par jayein, \'File a Complaint\' chunein, bank select karein, aur PNO complaint ki copy attach karein. RBI Ombudsman bank par heavy penalty laga sakta hai.'
    },
    {
      q: 'Kya recovery agent ke aane par ID card aur authorization letter mangna zaroori hai?',
      a: 'Haan. RBI niyam anusar recovery agent ke paas bank ID card aur official Authorization Letter hona anivarya hai. Agar agent ID na dikhaye, to aap unhe turant premises se jaane ko keh sakte hain.'
    },
    {
      q: 'Kya recovery agent ke call ko record karna legal hai?',
      a: 'Haan. Apne bachaav aur evidence ke liye harassment call record karna bilkul legal hai. Yeh audio recording police complaint aur RBI Ombudsman proceedings mein solid proof banti hai.'
    },
    {
      q: 'One-Time Settlement (OTS) se recovery agents ki harassment kaise band hoti hai?',
      a: 'Ek structured OTS ke zariye bank penal interest waive karke 40% se 60% concession par loan close karta hai. Bank se No Dues Certificate milte hi sabhi collection activities band ho jati hain.'
    },
    {
      q: 'Agar local police recovery agent ke khilaf FIR na likhe to kya option hai?',
      a: 'Agar SHO FIR na kare, to BNSS Section 173(3) ke tehat SP/DCP ko written petition bhejein, ya BNSS Section 175(3) ke tehat Judicial Magistrate ke paas application file karein.'
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-[#1886ff] selection:text-white">
      {/* HERO SECTION (#2452ae Background) */}
      <section
        className="relative text-white pt-14 pb-10 md:pt-18 md:pb-12 px-4 md:px-8 overflow-hidden flex items-center justify-center text-center"
        style={{ backgroundColor: '#2452ae' }}
      >
        <div className="absolute inset-0 bg-black/5 z-0 pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center z-10 relative">
          <div className="inline-flex items-center gap-1.5 bg-white/15 backdrop-blur-xs px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider text-blue-100 mb-3">
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>RBI Fair Practices Code &amp; Legal Protection in Hindi</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Bank Recovery Agent Harassment Rules in Hindi: RBI Guidelines &amp; Legal Rights
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            Facing abusive calls or visits from bank recovery agents? Learn official RBI Fair Practices Code rules in Hindi and discover how to stop harassment with CredSettle.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Get Legal Protection Now</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* STATS STRIP COMPONENT */}
      <StatsStrip />

      {/* WIDESCREEN 3-COLUMN LAYOUT */}
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
                  <span>Statutory Rights Protected</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Governed by RBI Fair Practices Code &amp; Master Directions.
                </p>
              </div>
            </div>
          </aside>

          {/* ================= MIDDLE COLUMN: MAIN CONTENT ================= */}
          <div className="space-y-8 md:space-y-10 min-w-0">
            
            {/* Executive Summary Box (#F4F8FE Box) */}
            <div
              id="executive-summary"
              className="scroll-target rounded-2xl bg-[#F4F8FE] border border-blue-100/90 border-l-[5px] border-l-[#1886ff] p-5 sm:p-6 md:p-7 shadow-xs space-y-4 text-slate-800"
            >
              <div className="flex items-center gap-2 text-xs md:text-sm font-black uppercase tracking-wider text-[#1886ff]">
                <Bookmark className="w-4 h-4 text-[#1886ff]" />
                <span>EXECUTIVE SUMMARY: BANK RECOVERY RULES &amp; BORROWER LEGAL RIGHTS</span>
              </div>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                When dealing with loan defaults in India, borrowers are protected by strict RBI directives prohibiting harassment and coercion. Defaulting on an unsecured loan is purely a civil dispute; recovery agents and police have zero statutory authority to arrest borrowers. Under the RBI Fair Practices Code, collection agents may only call or visit between 8:00 AM and 7:00 PM.
              </p>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                Agents cannot contact relatives or employers regarding dues. Borrowers have the right to record calls and file FIRs under BNS Sections 351 and 308. CredSettle halts harassment via legal notices and settles debt through One-Time Settlement (OTS) with a No Dues Certificate.
              </p>
            </div>

            {/* SECTION 1: Debt Economics & NPA Dynamics */}
            <section id="debt-economics-npa" className="scroll-target space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-blue-100 text-[#1886ff] flex items-center justify-center font-black text-sm">
                  1
                </div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Debt Economics &amp; NPA Dynamics in Bank Recovery Operations
                </h2>
              </div>

              <div className="prose prose-slate max-w-none text-xs sm:text-sm text-slate-700 leading-relaxed space-y-3">
                <p>
                  When borrowers face financial crises like job loss or medical emergencies, maintaining regular EMI payments becomes impossible. Under RBI IRACP norms, overdue accounts advance across SMA-0 (1-30 days), SMA-1 (31-60 days), and SMA-2 (61-90 days) stages. Crossing 90 days triggers mandatory Substandard Non-Performing Asset (NPA) classification.
                </p>
                <p>
                  NPA classification forces lenders to allocate 15% to 100% capital provisioning, reducing profitability. Because unsecured loans carry no collateral, lenders cannot invoke SARFAESI property seizures. To mitigate balance sheet losses, banks assign debt to collection agencies, creating an optimal commercial window for a structured One-Time Settlement (OTS) with CredSettle.
                </p>
              </div>
            </section>

            {/* SECTION 2: Financial Breakdown & Settlement Math */}
            <section id="financial-math-breakdown" className="scroll-target space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-blue-100 text-[#1886ff] flex items-center justify-center font-black text-sm">
                  2
                </div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Financial Breakdown &amp; Settlement Math: Principal vs. Penal Charges
                </h2>
              </div>

              <div className="prose prose-slate max-w-none text-xs sm:text-sm text-slate-700 leading-relaxed space-y-3">
                <p>
                  Upon default, ledger balances expand with 24% to 36% penal interest, late fees, and bounce charges. CredSettle conducts a forensic ledger audit to strip away non-contractual penalties, isolating pure principal.
                </p>
                <p>
                  Representative 180-Day NPA Settlement Math: On a ₹5,00,000 principal inflating to ₹8,20,000 with penalties, CredSettle negotiates a 50% waiver. The approved OTS is ₹4,10,000, delivering ₹4,10,000 in savings with a No Dues Certificate (NDC).
                </p>
              </div>

              {/* Settlement Math Card */}
              <div className="bg-white rounded-2xl border border-slate-200/80 p-4 sm:p-5 shadow-xs space-y-3">
                <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-[#1886ff]" />
                    <span className="font-extrabold text-xs sm:text-sm text-slate-900">
                      180-Day NPA Settlement Calculation Card
                    </span>
                  </div>
                  <span className="bg-blue-50 text-[#1886ff] text-[11px] font-bold px-2 py-0.5 rounded-full">
                    Target: 45% - 55% Total Waiver
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs">
                  <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                    <span className="text-slate-500 block text-[11px] mb-0.5">Sanctioned Principal</span>
                    <strong className="text-slate-900 font-extrabold text-sm sm:text-base">₹5,00,000</strong>
                    <span className="text-[10px] text-slate-400 block mt-0.5">Disbursed capital</span>
                  </div>

                  <div className="bg-red-50/60 p-2.5 rounded-xl border border-red-100">
                    <span className="text-red-600 block text-[11px] mb-0.5">Demanded Ledger</span>
                    <strong className="text-red-700 font-extrabold text-sm sm:text-base">₹8,20,000</strong>
                    <span className="text-[10px] text-red-500 block mt-0.5">With penal charges</span>
                  </div>

                  <div className="bg-emerald-50/60 p-2.5 rounded-xl border border-emerald-100">
                    <span className="text-emerald-700 block text-[11px] mb-0.5">Penal Waiver</span>
                    <strong className="text-emerald-700 font-extrabold text-sm sm:text-base">₹4,10,000 (50%)</strong>
                    <span className="text-[10px] text-emerald-600 block mt-0.5">Penal fees waived</span>
                  </div>

                  <div className="bg-blue-50/60 p-2.5 rounded-xl border border-blue-100">
                    <span className="text-[#1886ff] block text-[11px] mb-0.5">Approved OTS</span>
                    <strong className="text-blue-900 font-extrabold text-sm sm:text-base">₹4,10,000</strong>
                    <span className="text-[10px] text-blue-700 block mt-0.5">Full settlement with NDC</span>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 3: 4-Sided Bordered Comparison Matrix */}
            <section id="comparison-matrix-table" className="scroll-target space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-blue-100 text-[#1886ff] flex items-center justify-center font-black text-sm">
                  3
                </div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Debt Resolution Pathways: Comparative Strategic Matrix
                </h2>
              </div>

              <div className="prose prose-slate max-w-none text-xs sm:text-sm text-slate-700 leading-relaxed space-y-3">
                <p>
                  Borrowers facing recovery agent harassment have multiple avenues under Indian banking law. Evaluating financial costs, legal protections, and credit consequences across resolution channels is essential for making an informed choice:
                </p>
              </div>

              {/* 4-Sided Bordered Comparison Table */}
              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto shadow-xs bg-white">
                <table className="w-full text-left text-xs border-collapse divide-y divide-slate-200/80">
                  <thead className="bg-slate-100/80 text-slate-900 font-extrabold">
                    <tr className="divide-x divide-slate-200/80">
                      <th className="p-3 sm:p-3.5">Resolution Pathway</th>
                      <th className="p-3 sm:p-3.5">Financial Impact</th>
                      <th className="p-3 sm:p-3.5">Harassment Protection</th>
                      <th className="p-3 sm:p-3.5">Timeline</th>
                      <th className="p-3 sm:p-3.5">Credit Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-700">
                    <tr className="divide-x divide-slate-200/80 hover:bg-blue-50/30 transition-colors">
                      <td className="p-3 sm:p-3.5 font-bold text-blue-900">One-Time Settlement</td>
                      <td className="p-3 sm:p-3.5 font-semibold text-emerald-700">40% to 75% penal waiver</td>
                      <td className="p-3 sm:p-3.5">Permanent cessation</td>
                      <td className="p-3 sm:p-3.5">45-90 Days</td>
                      <td className="p-3 sm:p-3.5">Settled (CICRA Sec 21 upgradable)</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60 transition-colors">
                      <td className="p-3 sm:p-3.5 font-bold text-slate-900">Restructuring</td>
                      <td className="p-3 sm:p-3.5">0% waiver; higher interest</td>
                      <td className="p-3 sm:p-3.5">Temporary pause</td>
                      <td className="p-3 sm:p-3.5">30-60 Days</td>
                      <td className="p-3 sm:p-3.5">Restructured</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60 transition-colors">
                      <td className="p-3 sm:p-3.5 font-bold text-slate-900">Litigation</td>
                      <td className="p-3 sm:p-3.5 text-red-600">High court fees</td>
                      <td className="p-3 sm:p-3.5">Judicial summons</td>
                      <td className="p-3 sm:p-3.5">2-5 Years</td>
                      <td className="p-3 sm:p-3.5 text-red-600">Suit Filed</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60 transition-colors">
                      <td className="p-3 sm:p-3.5 font-bold text-slate-900">Lok Adalat</td>
                      <td className="p-3 sm:p-3.5 text-emerald-700">Moderate waiver</td>
                      <td className="p-3 sm:p-3.5">Halts on award</td>
                      <td className="p-3 sm:p-3.5">1-3 Hearings</td>
                      <td className="p-3 sm:p-3.5">Settled Lok Adalat</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 bg-red-50/30 hover:bg-red-50/50 transition-colors">
                      <td className="p-3 sm:p-3.5 font-bold text-red-900">Inaction</td>
                      <td className="p-3 sm:p-3.5 text-red-700 font-semibold">Compounded debt trap</td>
                      <td className="p-3 sm:p-3.5 text-red-700">Ongoing harassment</td>
                      <td className="p-3 sm:p-3.5 text-red-700">Indefinite</td>
                      <td className="p-3 sm:p-3.5 text-red-700 font-bold">Below 550</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 4: Technical CIBIL Algorithm & Scoring Math */}
            <section id="cibil-algorithm-scoring" className="scroll-target space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-blue-100 text-[#1886ff] flex items-center justify-center font-black text-sm">
                  4
                </div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Technical CIBIL Scoring Algorithm &amp; CICRA Section 21 Remedy
                </h2>
              </div>

              <div className="prose prose-slate max-w-none text-xs sm:text-sm text-slate-700 leading-relaxed space-y-3">
                <p>
                  Credit bureaus calculate scores using a mathematical algorithm based on five core factors: Payment History (35%), Credit Utilization (30%), Credit Mix (15%), History Length (10%), and New Inquiries (10%).
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 my-2 text-xs">
                  <div className="p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                    <span className="text-[11px] text-slate-500 block">Payment History</span>
                    <span className="text-sm font-extrabold text-blue-900 block mt-0.5">35% Weight</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                    <span className="text-[11px] text-slate-500 block">Utilization</span>
                    <span className="text-sm font-extrabold text-blue-900 block mt-0.5">30% Weight</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                    <span className="text-[11px] text-slate-500 block">Credit Mix</span>
                    <span className="text-sm font-extrabold text-blue-900 block mt-0.5">15% Weight</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                    <span className="text-[11px] text-slate-500 block">History Length</span>
                    <span className="text-sm font-extrabold text-blue-900 block mt-0.5">10% Weight</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs col-span-2 sm:col-span-1">
                    <span className="text-[11px] text-slate-500 block">Inquiries</span>
                    <span className="text-sm font-extrabold text-blue-900 block mt-0.5">10% Weight</span>
                  </div>
                </div>

                <p>
                  A 90-day NPA default lowers credit scores by 140 to 180 points. Following an OTS, bureaus record the account as Settled. Borrowers can rebuild scores to 750+ within 18 to 24 months using secured credit cards and regular repayments.
                </p>
                <p>
                  Under Section 21 of CICRA 2005, borrowers retain the statutory right to pay the waived balance difference later, converting the status from Settled to Closed.
                </p>
              </div>
            </section>

            {/* SECTION 5: Visual Infographic Asset Card */}
            <section id="visual-infographic-asset" className="scroll-target space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-blue-100 text-[#1886ff] flex items-center justify-center font-black text-sm">
                  5
                </div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Visual Blueprint: RBI Recovery Agent Harassment Rules &amp; Rights
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                This infographic details the RBI Fair Practices Code, lawful recovery hours (8:00 AM to 7:00 PM), prohibitions against abusive tactics, and the 3-tier grievance escalation process for Indian borrowers:
              </p>

              {/* Infographic Container */}
              <div className="bg-white rounded-2xl border border-slate-200/80 p-3.5 sm:p-4 shadow-xs overflow-hidden">
                <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-slate-100 border border-slate-200">
                  <Image
                    src="/images/infographics/bank-recovery-agent-harassment-rules-in-hindi.jpg"
                    alt="Bank Recovery Agent Harassment Rules in Hindi - RBI Fair Practices Code & Borrower Rights"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 900px"
                    className="object-contain"
                  />
                </div>

                <div className="mt-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-slate-500 pt-2 border-t border-slate-100">
                  <span>Figure 1.0: Authoritative visual blueprint of the RBI Fair Practices Code for loan recovery and borrower legal rights in India.</span>
                  <a
                    href="/images/infographics/bank-recovery-agent-harassment-rules-in-hindi.jpg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1886ff] font-bold hover:underline inline-flex items-center gap-1 flex-shrink-0"
                  >
                    <span>View High-Res</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </section>

            {/* SECTION 6: Step-by-Step SOP (6 Stages) */}
            <section id="step-by-step-police-sop" className="scroll-target space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-blue-100 text-[#1886ff] flex items-center justify-center font-black text-sm">
                  6
                </div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Step-by-Step SOP: 6-Stage Institutional Defense &amp; Debt Resolution
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                CredSettle executes a 6-stage standard operating procedure (SOP) to protect borrowers from recovery harassment and negotiate binding compromise settlements:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {/* Stage 1 */}
                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center font-black text-xs">
                      1
                    </span>
                    <h3 className="font-extrabold text-xs sm:text-sm text-slate-900">
                      Forensic Audit &amp; Evidence Preservation
                    </h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Our legal team audits loan agreements and ledgers, preserving timestamped audio recordings and messages evidencing recovery violations.
                  </p>
                </div>

                {/* Stage 2 */}
                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center font-black text-xs">
                      2
                    </span>
                    <h3 className="font-extrabold text-xs sm:text-sm text-slate-900">
                      Financial Hardship Dossier Compilation
                    </h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    We assemble verifiable documents including medical summaries or job loss letters proving authentic insolvency.
                  </p>
                </div>

                {/* Stage 3 */}
                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center font-black text-xs">
                      3
                    </span>
                    <h3 className="font-extrabold text-xs sm:text-sm text-slate-900">
                      Credit Committee Representation
                    </h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    We represent borrowers directly before bank credit committees, bypassing third-party collection agencies.
                  </p>
                </div>

                {/* Stage 4 */}
                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center font-black text-xs">
                      4
                    </span>
                    <h3 className="font-extrabold text-xs sm:text-sm text-slate-900">
                      Bilateral Compromise Negotiations
                    </h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Our negotiators leverage bank provisioning mandates and agent misconduct to maximize penal fee waivers.
                  </p>
                </div>

                {/* Stage 5 */}
                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center font-black text-xs">
                      5
                    </span>
                    <h3 className="font-extrabold text-xs sm:text-sm text-slate-900">
                      Settlement Letter Forensic Vetting
                    </h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    We audit the settlement sanction letter to verify full liability discharge clauses and zero hidden terms.
                  </p>
                </div>

                {/* Stage 6 */}
                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center font-black text-xs">
                      6
                    </span>
                    <h3 className="font-extrabold text-xs sm:text-sm text-slate-900">
                      Remittance &amp; NDC Issuance
                    </h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The borrower remits the settlement sum to the bank account, and CredSettle secures the official No Dues Certificate (NDC).
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: Statutory Notice Defense & Legal Rights */}
            <section id="statutory-defense-framework" className="scroll-target space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-blue-100 text-[#1886ff] flex items-center justify-center font-black text-sm">
                  7
                </div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Statutory Notice Defense &amp; Legal Framework Against Harassment
                </h2>
              </div>

              <div className="prose prose-slate max-w-none text-xs sm:text-sm text-slate-700 leading-relaxed space-y-3">
                <p>
                  Collection agencies frequently issue legal notices to coerce borrowers. Understanding statutory defense frameworks enables borrowers to protect their legal rights effectively:
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {/* Notice 1 */}
                <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-1.5">
                  <div className="flex items-center gap-2 text-blue-900 font-extrabold text-xs sm:text-sm">
                    <Gavel className="w-4 h-4 text-[#1886ff]" />
                    <span>Section 25 PSSA (NACH Bounce)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    NACH auto-debit bounces are not automatic criminal offenses under PSSA Section 25. Proving absence of fraudulent intent and financial distress forms a valid defense.
                  </p>
                </div>

                {/* Notice 2 */}
                <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-1.5">
                  <div className="flex items-center gap-2 text-blue-900 font-extrabold text-xs sm:text-sm">
                    <Scale className="w-4 h-4 text-[#1886ff]" />
                    <span>Section 138 NI Act (Cheque Bounce)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Cheque bounce cases require strict 30-day notice compliance. Security cheques without consideration can be contested and settled via bilateral OTS.
                  </p>
                </div>

                {/* Notice 3 */}
                <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-1.5">
                  <div className="flex items-center gap-2 text-blue-900 font-extrabold text-xs sm:text-sm">
                    <Landmark className="w-4 h-4 text-[#1886ff]" />
                    <span>Arbitration Section 21 (Perkins Ruling)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Unilateral appointment of sole arbitrators by lenders is invalid under Supreme Court rulings in Perkins Eastman and TRF Limited.
                  </p>
                </div>

                {/* Notice 4 */}
                <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-1.5">
                  <div className="flex items-center gap-2 text-blue-900 font-extrabold text-xs sm:text-sm">
                    <ShieldAlert className="w-4 h-4 text-[#1886ff]" />
                    <span>DRT Section 19 &amp; RBI Fair Practices</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    DRT applies exclusively to claims exceeding ₹20 Lakhs. Retail personal loans below ₹20 Lakhs are protected under RBI recovery rules.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 8: 3-Tier Escalation Matrix */}
            <section id="three-tier-grievance-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-blue-100 text-[#1886ff] flex items-center justify-center font-black text-sm">
                  8
                </div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  3-Tier Institutional Grievance Redressal Matrix
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                When recovery agents violate RBI Fair Practices norms by using abusive language or calling outside permitted hours, follow this 3-tier escalation hierarchy:
              </p>

              <div className="space-y-2.5">
                {/* Level 1 */}
                <div className="bg-white p-3.5 sm:p-4 rounded-2xl border border-slate-200/80 shadow-xs space-y-1">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="bg-blue-100 text-[#1886ff] font-extrabold text-[11px] px-2 py-0.5 rounded-full">
                        Level 1
                      </span>
                      <strong className="text-xs sm:text-sm text-slate-900">
                        Branch Grievance Redressal Officer (GRO)
                      </strong>
                    </div>
                    <span className="text-[11px] font-semibold text-slate-500">Timeline: 7 to 10 Days</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Submit a written complaint to the branch GRO with call recordings and timestamps demanding an immediate inquiry.
                  </p>
                </div>

                {/* Level 2 */}
                <div className="bg-white p-3.5 sm:p-4 rounded-2xl border border-slate-200/80 shadow-xs space-y-1">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="bg-blue-100 text-[#1886ff] font-extrabold text-[11px] px-2 py-0.5 rounded-full">
                        Level 2
                      </span>
                      <strong className="text-xs sm:text-sm text-slate-900">
                        Bank Principal Nodal Officer (PNO)
                      </strong>
                    </div>
                    <span className="text-[11px] font-semibold text-slate-500">Timeline: 14 to 21 Days</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Escalate to the Bank Principal Nodal Officer (PNO) via email and post with evidence if unresolved within 10 days.
                  </p>
                </div>

                {/* Level 3 */}
                <div className="bg-white p-3.5 sm:p-4 rounded-2xl border border-slate-200/80 shadow-xs space-y-1">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="bg-emerald-100 text-emerald-800 font-extrabold text-[11px] px-2 py-0.5 rounded-full">
                        Level 3
                      </span>
                      <strong className="text-xs sm:text-sm text-slate-900">
                        Reserve Bank of India Integrated Ombudsman (RBI CMS)
                      </strong>
                    </div>
                    <span className="text-[11px] font-bold text-emerald-700">cms.rbi.org.in</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    File an online complaint on cms.rbi.org.in after 30 days. The Ombudsman can penalize banks and award compensation.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 9: Chronological Timeline Table */}
            <section id="chronological-milestones" className="scroll-target space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-blue-100 text-[#1886ff] flex items-center justify-center font-black text-sm">
                  9
                </div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Chronological Timeline: Day 1 to Month 6 Settlement Milestones
                </h2>
              </div>

              <div className="prose prose-slate max-w-none text-xs sm:text-sm text-slate-700 leading-relaxed space-y-3">
                <p>
                  Understanding the progression from initial missed EMI to final debt settlement allows borrowers to prepare timely legal defenses and negotiate when lender willingness to settle peaks:
                </p>
              </div>

              {/* 4-Sided Bordered Timeline Table */}
              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto shadow-xs bg-white">
                <table className="w-full text-left text-xs border-collapse divide-y divide-slate-200/80">
                  <thead className="bg-slate-100/80 text-slate-900 font-extrabold">
                    <tr className="divide-x divide-slate-200/80">
                      <th className="p-3 sm:p-3.5">Timeline Period</th>
                      <th className="p-3 sm:p-3.5">Regulatory Asset Stage</th>
                      <th className="p-3 sm:p-3.5">Bank Action</th>
                      <th className="p-3 sm:p-3.5">CredSettle Strategic Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-700">
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60 transition-colors">
                      <td className="p-3 sm:p-3.5 font-bold text-slate-900">Days 1 - 30</td>
                      <td className="p-3 sm:p-3.5 font-semibold text-blue-900">SMA-0</td>
                      <td className="p-3 sm:p-3.5">SMS alerts and reminder calls</td>
                      <td className="p-3 sm:p-3.5">Debt portfolio review</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60 transition-colors">
                      <td className="p-3 sm:p-3.5 font-bold text-slate-900">Days 31 - 60</td>
                      <td className="p-3 sm:p-3.5 font-semibold text-blue-900">SMA-1</td>
                      <td className="p-3 sm:p-3.5">Tele-calling outreach and late fees</td>
                      <td className="p-3 sm:p-3.5">Hardship dossier prep</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60 transition-colors">
                      <td className="p-3 sm:p-3.5 font-bold text-slate-900">Days 61 - 90</td>
                      <td className="p-3 sm:p-3.5 font-semibold text-amber-700">SMA-2</td>
                      <td className="p-3 sm:p-3.5">Pre-NPA warnings and advisories</td>
                      <td className="p-3 sm:p-3.5">Committee outreach</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60 transition-colors">
                      <td className="p-3 sm:p-3.5 font-bold text-slate-900">Days 91 - 150</td>
                      <td className="p-3 sm:p-3.5 font-semibold text-red-700">Substandard NPA</td>
                      <td className="p-3 sm:p-3.5">Agency assignment and collection calls</td>
                      <td className="p-3 sm:p-3.5">Legal notice and PNO filing</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 bg-blue-50/30 hover:bg-blue-50/50 transition-colors">
                      <td className="p-3 sm:p-3.5 font-bold text-blue-900">Days 151 - 180+</td>
                      <td className="p-3 sm:p-3.5 font-semibold text-emerald-700">OTS Window</td>
                      <td className="p-3 sm:p-3.5">Bank provisioning pressure peaks</td>
                      <td className="p-3 sm:p-3.5 font-bold text-emerald-800">OTS execution &amp; NDC</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: Specialized Real-World Scenarios */}
            <section id="specialized-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-blue-100 text-[#1886ff] flex items-center justify-center font-black text-sm">
                  10
                </div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Specialized Real-World Debt Resolution Scenarios
                </h2>
              </div>

              <div className="prose prose-slate max-w-none text-xs sm:text-sm text-slate-700 leading-relaxed space-y-3">
                <p>
                  Every debt default case presents unique personal and commercial challenges. CredSettle tailors legal protection and negotiation strategies across diverse real-world situations:
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {/* Scenario 1 */}
                <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-1.5">
                  <div className="flex items-center gap-2 text-blue-900 font-extrabold text-xs sm:text-sm">
                    <Building2 className="w-4 h-4 text-[#1886ff]" />
                    <span>Multi-Lender Portfolio Consolidation</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Borrowers with multiple defaulted loans receive synchronized defense, halting overlapping harassment while structuring phased settlements.
                  </p>
                </div>

                {/* Scenario 2 */}
                <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-1.5">
                  <div className="flex items-center gap-2 text-blue-900 font-extrabold text-xs sm:text-sm">
                    <UserCheck className="w-4 h-4 text-[#1886ff]" />
                    <span>Corporate Layoffs &amp; Income Loss</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Downsized professionals receive protection against workplace visits or employer contact, safeguarding their careers.
                  </p>
                </div>

                {/* Scenario 3 */}
                <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-1.5">
                  <div className="flex items-center gap-2 text-blue-900 font-extrabold text-xs sm:text-sm">
                    <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                    <span>Business Proprietorship Disruptions</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Business owners facing payment delays obtain protection against shop visits, allowing revenue recovery while settling debt.
                  </p>
                </div>

                {/* Scenario 4 */}
                <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-1.5">
                  <div className="flex items-center gap-2 text-blue-900 font-extrabold text-xs sm:text-sm">
                    <FileCheck className="w-4 h-4 text-[#1886ff]" />
                    <span>ARC Portfolio Debt Assignments</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Debts sold to ARCs are negotiated at steep discounts based on secondary acquisition costs, securing deep waivers.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 11: Company Profile Component */}
            <div id="company-profile" className="scroll-target pt-2">
              <CompanySection />
            </div>

            {/* SECTION 12: 10 Synchronized FAQs */}
            <section id="frequently-asked-questions" className="scroll-target space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-blue-100 text-[#1886ff] flex items-center justify-center font-black text-sm">
                  12
                </div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Frequently Asked Questions: Recovery Rules &amp; Rights (FAQ)
                </h2>
              </div>

              <div className="space-y-2.5">
                {faqs.map((faq, index) => {
                  const isOpen = openFaq === index;
                  return (
                    <div
                      key={index}
                      className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-xs transition-colors"
                    >
                      <button
                        onClick={() => toggleFaq(index)}
                        className="w-full p-3.5 sm:p-4 text-left flex items-center justify-between gap-3 hover:bg-slate-50/80 transition-colors"
                      >
                        <span className="font-extrabold text-xs sm:text-sm text-slate-900 leading-snug">
                          {faq.q}
                        </span>
                        <ChevronDown
                          className={`w-4 h-4 text-[#1886ff] flex-shrink-0 transition-transform duration-200 ${
                            isOpen ? 'transform rotate-180' : ''
                          }`}
                        />
                      </button>
                      {isOpen && (
                        <div className="px-3.5 pb-3.5 sm:px-4 sm:pb-4 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-2.5">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>

            {/* SECTION 13: Citations & Outbound Authority Grid */}
            <section id="citations-authority-grid" className="scroll-target space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-blue-100 text-[#1886ff] flex items-center justify-center font-black text-sm">
                  13
                </div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Statutory Legal Citations &amp; Outbound Regulatory Authority
                </h2>
              </div>

              <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-3.5 text-xs sm:text-sm text-slate-700">
                <div className="space-y-1.5">
                  <span className="font-bold text-slate-900 text-xs uppercase tracking-wider block">
                    Statutory Legal Citations:
                  </span>
                  <ul className="list-disc pl-5 space-y-1 text-slate-600 text-xs leading-relaxed">
                    <li>RBI Master Directions on Recovery Agents (RBI/2022-23/96).</li>
                    <li>Bharatiya Nyaya Sanhita 2023 (Sections 351, 308, 329).</li>
                    <li>Bharatiya Nagarik Suraksha Sanhita 2023 (Sections 173, 175).</li>
                    <li>CICRA 2005 (Section 21 Credit Correction).</li>
                    <li>PSSA 2007 (Section 25 Electronic Bounce).</li>
                  </ul>
                </div>

                <div className="pt-2.5 border-t border-slate-100">
                  <span className="font-bold text-slate-900 text-xs uppercase tracking-wider block mb-2">
                    Official Regulatory Portals:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    <a
                      href="https://www.rbi.org.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-[#1886ff] text-xs font-semibold inline-flex items-center gap-1.5 transition-colors border border-slate-200/60"
                    >
                      <span>Reserve Bank of India</span>
                      <ExternalLink className="w-3 h-3 text-slate-400" />
                    </a>
                    <a
                      href="https://cms.rbi.org.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-[#1886ff] text-xs font-semibold inline-flex items-center gap-1.5 transition-colors border border-slate-200/60"
                    >
                      <span>RBI CMS Portal</span>
                      <ExternalLink className="w-3 h-3 text-slate-400" />
                    </a>
                    <a
                      href="https://www.cibil.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-[#1886ff] text-xs font-semibold inline-flex items-center gap-1.5 transition-colors border border-slate-200/60"
                    >
                      <span>TransUnion CIBIL</span>
                      <ExternalLink className="w-3 h-3 text-slate-400" />
                    </a>
                    <a
                      href="https://www.indiacode.nic.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-[#1886ff] text-xs font-semibold inline-flex items-center gap-1.5 transition-colors border border-slate-200/60"
                    >
                      <span>India Code Repository</span>
                      <ExternalLink className="w-3 h-3 text-slate-400" />
                    </a>
                    <a
                      href="https://nalsa.gov.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-[#1886ff] text-xs font-semibold inline-flex items-center gap-1.5 transition-colors border border-slate-200/60"
                    >
                      <span>NALSA Lok Adalat</span>
                      <ExternalLink className="w-3 h-3 text-slate-400" />
                    </a>
                    <a
                      href="https://cybercrime.gov.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-[#1886ff] text-xs font-semibold inline-flex items-center gap-1.5 transition-colors border border-slate-200/60"
                    >
                      <span>National Cyber Crime (1930)</span>
                      <ExternalLink className="w-3 h-3 text-slate-400" />
                    </a>
                  </div>
                </div>

                <div className="pt-2.5 border-t border-slate-100">
                  <span className="font-bold text-slate-900 text-xs uppercase tracking-wider block mb-2">
                    CredSettle Resolution Guides:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    <Link
                      href="/police-complaint-against-bank-recovery-agent"
                      className="px-2.5 py-1 rounded-md bg-blue-50 text-blue-900 text-xs font-medium hover:bg-blue-100 transition-colors"
                    >
                      Police Complaint Against Recovery Agent
                    </Link>
                    <Link
                      href="/personal-loan-na-chukane-par-kya-hota-hai"
                      className="px-2.5 py-1 rounded-md bg-blue-50 text-blue-900 text-xs font-medium hover:bg-blue-100 transition-colors"
                    >
                      Personal Loan Na Chukane Par Kya Hota Hai
                    </Link>
                    <Link
                      href="/is-it-legal-to-record-recovery-agent-calls"
                      className="px-2.5 py-1 rounded-md bg-blue-50 text-blue-900 text-xs font-medium hover:bg-blue-100 transition-colors"
                    >
                      Is It Legal to Record Recovery Agent Calls
                    </Link>
                    <Link
                      href="/mental-harassment-by-recovery-agents-legal-action"
                      className="px-2.5 py-1 rounded-md bg-blue-50 text-blue-900 text-xs font-medium hover:bg-blue-100 transition-colors"
                    >
                      Mental Harassment by Recovery Agents
                    </Link>
                    <Link
                      href="/can-recovery-agents-seize-property"
                      className="px-2.5 py-1 rounded-md bg-blue-50 text-blue-900 text-xs font-medium hover:bg-blue-100 transition-colors"
                    >
                      Can Recovery Agents Seize Property
                    </Link>
                    <Link
                      href="/ecs-nach-bounce-legal-notice-section-25"
                      className="px-2.5 py-1 rounded-md bg-blue-50 text-blue-900 text-xs font-medium hover:bg-blue-100 transition-colors"
                    >
                      ECS NACH Bounce Legal Notice Section 25
                    </Link>
                    <Link
                      href="/section-138-cheque-bounce-personal-loan"
                      className="px-2.5 py-1 rounded-md bg-blue-50 text-blue-900 text-xs font-medium hover:bg-blue-100 transition-colors"
                    >
                      Section 138 Cheque Bounce Personal Loan
                    </Link>
                    <Link
                      href="/arbitration-notice-personal-loan-default"
                      className="px-2.5 py-1 rounded-md bg-blue-50 text-blue-900 text-xs font-medium hover:bg-blue-100 transition-colors"
                    >
                      Arbitration Notice Personal Loan Default
                    </Link>
                    <Link
                      href="/convert-settled-status-to-closed"
                      className="px-2.5 py-1 rounded-md bg-blue-50 text-blue-900 text-xs font-medium hover:bg-blue-100 transition-colors"
                    >
                      Convert Settled Status to Closed
                    </Link>
                    <Link
                      href="/lok-adalat-personal-loan-settlement"
                      className="px-2.5 py-1 rounded-md bg-blue-50 text-blue-900 text-xs font-medium hover:bg-blue-100 transition-colors"
                    >
                      Lok Adalat Personal Loan Settlement
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* ================= RIGHT COLUMN: STICKY SIDEBAR ================= */}
          <aside className="sticky top-6 space-y-4">
            
            {/* Author Bio Card */}
            <div className="bg-white rounded-2xl border border-slate-200/80 p-4 shadow-xs">
              <div className="flex items-center gap-3 mb-2.5">
                <div className="w-10 h-10 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center font-bold text-sm">
                  AJ
                </div>
                <div>
                  <h4 className="font-extrabold text-xs sm:text-sm text-slate-900">
                    Ashish Jhangra
                  </h4>
                  <span className="text-[11px] text-slate-500 block">
                    Legal &amp; Debt Resolution Professional
                  </span>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Specialist in banking regulations, borrower protection against recovery harassment, and debt resolution under RBI guidelines.
              </p>
            </div>

            {/* Emergency CTA Card (#2452ae) */}
            <div
              className="rounded-2xl p-4 text-white shadow-md text-center space-y-2.5 relative overflow-hidden"
              style={{ backgroundColor: '#2452ae' }}
            >
              <div className="inline-flex items-center gap-1 bg-white/20 px-2 py-0.5 rounded-full text-[11px] font-bold">
                <Phone className="w-3 h-3" />
                <span>Emergency Harassment Helpline</span>
              </div>

              <h4 className="font-extrabold text-xs sm:text-sm leading-snug">
                Facing Illegal Recovery Harassment Today?
              </h4>

              <p className="text-xs text-blue-100 leading-relaxed">
                Our legal team halts abusive calls and settles loans.
              </p>

              <div className="space-y-2 pt-1">
                <a
                  href="tel:+918800226635"
                  className="w-full py-2 px-3 rounded-xl bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-xs inline-flex items-center justify-center gap-2 hover:bg-slate-50 transition-colors shadow-sm"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call +91-8800226635</span>
                </a>

                <Link
                  href="/contact"
                  className="w-full py-2 px-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs inline-flex items-center justify-center gap-1.5 transition-colors border border-white/20"
                >
                  <span>Request Free Legal Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Trust Badges Card */}
            <div className="bg-white rounded-2xl border border-slate-200/80 p-4 shadow-xs space-y-2">
              <span className="text-xs font-black uppercase tracking-wider text-slate-800 block border-b border-slate-100 pb-2">
                CredSettle Trust Guarantees
              </span>

              <ul className="space-y-1.5 text-xs text-slate-600">
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  <span>100% Confidential</span>
                </li>
                <li className="flex items-center gap-2">
                  <Award className="w-3.5 h-3.5 text-[#1886ff] flex-shrink-0" />
                  <span>ISO 9001:2015 Certified</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  <span>₹150+ Cr Resolved</span>
                </li>
                <li className="flex items-center gap-2">
                  <UserCheck className="w-3.5 h-3.5 text-[#1886ff] flex-shrink-0" />
                  <span>5,000+ Protected</span>
                </li>
              </ul>
            </div>
          </aside>

        </div>
      </div>
    </main>
  );
}
