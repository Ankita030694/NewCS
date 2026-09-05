'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import StatsStrip from '@/components/StatsStrip';
import CompanySection from '@/components/CompanySection';
import {
  ChevronDown,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  FileText,
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
  Sparkles,
  Scale,
  ExternalLink,
  RefreshCw,
  PieChart,
  HelpCircle
} from 'lucide-react';

export default function CibilScoreKaiseBadhayeAfterSettlementClient() {
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
    { id: 'quick-crux', label: 'Executive Summary & Crux' },
    { id: 'debt-economics-settlement-impact', label: '1. Debt Economics & CIBIL Impact' },
    { id: 'settlement-math-conversion-mechanics', label: '2. Financial Math & Status Conversion' },
    { id: 'rebuilding-comparison-matrix', label: '3. Resolution Route Comparison' },
    { id: 'technical-cibil-algorithm-math', label: '4. Scoring Algorithm & Factor Weights' },
    { id: 'infographic-overview', label: 'Visual Rebuilding Blueprint' },
    { id: 'step-by-step-cibil-rebuild-sop', label: '6. 6-Stage Score Rebuilding SOP' },
    { id: 'statutory-rights-credit-reporting', label: '7. Statutory Rights & Legal Framework' },
    { id: 'three-tier-escalation-matrix', label: '8. 3-Tier Grievance Escalation Matrix' },
    { id: 'chronological-rebuilding-milestones', label: '9. Chronological Milestones (1-24 Mo.)' },
    { id: 'specialized-credit-repair-scenarios', label: '10. Specialized Real-World Scenarios' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
    {
      q: 'Loan settlement ke baad CIBIL score kitna kam ho jata hai?',
      a: 'Loan settlement hone par CIBIL score aamtaur par 70 se 120 points drop hota hai. Bank bureaus ko Settled status report karta hai, jisse naye lenders aapko high-risk borrower maante hain.'
    },
    {
      q: 'Kya Settled status ko Closed status mein badla ja sakta hai?',
      a: 'Haan, settled status ko Closed mein badal sakte hain. Iske liye waived principal differential pay karke bank se No Dues Certificate aur bureau status update lena hota hai.'
    },
    {
      q: 'Loan settlement ke baad CIBIL score badhane mein kitna samay lagta hai?',
      a: 'Settlement ke baad score ko 750+ tak pahunchane mein 12 se 24 mahine lagte hain. Is dauran secured credit card aur on-time payment track maintain karna zaroori hai.'
    },
    {
      q: 'Secured credit card kya hota hai aur yeh CIBIL kaise badhata hai?',
      a: 'Secured credit card Fixed Deposit ke against bina credit check ke milta hai. Iska regular on-time payment record har mahine bureau par positive DPD generate karta hai.'
    },
    {
      q: 'Rebuilding phase mein Credit Utilization Ratio kitna hona chahiye?',
      a: 'Rebuilding phase mein CUR hamesha 30% se kam, aur best results ke liye 15% se 20% ke beech hona chahiye. Low utilization credit-hungry behavior avoid karta hai.'
    },
    {
      q: 'Kya loan settlement ke baad turant naya personal loan mil sakta hai?',
      a: 'Nahi, settlement ke turant baad unsecured loan milna mushkil hota hai kyunki banking systems Settled remark ko reject karte hain. Pehle 12 mahine secured card use karein.'
    },
    {
      q: 'Settlement ke baad No Dues Certificate kitne din mein milna chahiye?',
      a: 'RBI guidelines ke mutabik, settlement amount pay hone ke 30 dino ke bheetar lending bank ya NBFC ko official No Dues Certificate (NDC) jari karna mandatory hai.'
    },
    {
      q: 'Agar settlement ke baad bhi CIBIL par balance dikhe toh kya karein?',
      a: 'Agar 45 dino baad bhi balance zero na ho, toh CICRA Section 21 ke tehat bureau par dispute karein aur bank GRO tatha RBI Ombudsman portal par complaint karein.'
    },
    {
      q: 'Kya loan settlement ka asar government job ya visa par padta hai?',
      a: 'Civil loan settlement ka government jobs ya travel visas par koi adverse impact nahi padta. Halanki, banking sector jobs mein clean credit record verification zaroori ho sakta hai.'
    },
    {
      q: 'CredSettle loan settlement aur CIBIL recovery mein kaise madad karta hai?',
      a: 'CredSettle loans par 40% se 70% legal waiver negotiate karta hai, valid NDCs verify karta hai, aur CICRA guidelines ke anusar credit score restoration roadmap provide karta.'
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-blue-100 text-xs font-semibold mb-4 backdrop-blur-xs">
            <Sparkles className="w-3.5 h-3.5 text-blue-200" />
            <span>100% LAWFUL CREDIT REPAIR &amp; SCORE RESTORATION</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            CIBIL Score Kaise Badhaye After Loan Settlement (750+ Strategy)
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            Loan settlement ke baad CIBIL score kaise badhaye? Janiye settlement remark kyu lagta hai, status closed mein kaise badlein, aur secured credit card se 12 se 24 mahine mein 750+ score kaise hasil karein.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Get Free Credit Rebuilding &amp; Settlement Advice</span>
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
                  <span>Statutory Credit Compliance</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Governed by CICRA Act 2005 &amp; Reserve Bank of India Master Directions.
                </p>
              </div>
            </div>
          </aside>

          {/* ================= MIDDLE COLUMN: MAIN EDITORIAL CONTENT ================= */}
          <div className="space-y-8 md:space-y-10 min-w-0">
            
            {/* Executive Summary Box */}
            <div
              id="quick-crux"
              className="scroll-target rounded-2xl bg-[#F4F8FE] border border-blue-100/90 border-l-[5px] border-l-[#1886ff] p-5 sm:p-6 md:p-7 shadow-xs space-y-4 text-slate-800"
            >
              <div className="flex items-center gap-2 text-xs md:text-sm font-black uppercase tracking-wider text-[#1886ff]">
                <Bookmark className="w-4 h-4 text-[#1886ff]" />
                <span>EXECUTIVE BRIEF: CIBIL SCORE REBUILDING AFTER SETTLEMENT</span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Settled Remark:</strong> Settlement ke baad bank status Settled report karta hai jisse score 70-120 points girta hai.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Mandatory NDC:</strong> Settlement ke 30 dino mein bank se official NDC lena aur zero balance verify karna anivarya hai.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Secured Card:</strong> Score recovery ke liye FD-backed card sabse tezi se positive repayment track banata hai.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Strict CUR:</strong> Scoring algorithms ke liye credit utilization hamesha 15% se 20% ke andar maintain karein.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Algorithmic Weight:</strong> CIBIL formula mein 35% weight payment history ka hai, isliye zero late payment rakhein.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Status Upgrade:</strong> Capacity aane par waived principal pay karke settled remark ko closed mein upgrade karein.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">CICRA Section 21:</strong> Galat reporting par borrower ko credit bureau aur bank ke samne dispute ka adhikar hai.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Avoid Loan Spamming:</strong> Repeated loan applications se bachein kyunki hard inquiries credit score ko hurt karti hain.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">12-24 Mo. Window:</strong> Systematic discipline se 550 score ko dobara prime 750+ level par pahunchaya ja sakta hai.
                  </div>
                </li>
              </ul>
            </div>

            {/* SECTION 1: Debt Economics & NPA Dynamics */}
            <section id="debt-economics-settlement-impact" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                <span>Macroeconomics &amp; NPA Classification</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. Debt Economics: Loan Settlement Ke Baad CIBIL Score Kyu Girta Hai?
              </h2>
              <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200/80 shadow-xs space-y-4 text-slate-700 leading-relaxed text-sm md:text-base">
                <p>
                  Jab borrower genuine financial crisis jaise job loss ya business loss ke karan personal loan EMIs pay nahi kar pata, toh 90 days non-payment ke baad account NPA ban jata hai. NPA banne par RBI provisioning rules ke tehat bank ko 100% Tier-1 capital block karna padta hai. Is provisioning burden aur recovery litigation costs se bachne ke liye banks One-Time Settlement (OTS) offer karte hain jisme penal charges waive karke reduced amount par compromise settlement hota hai.
                </p>
                <p>
                  Settlement ke baad bank credit bureaus ko account status Closed ke bajaye Settled report karta hai kyunki bank ne waived balance ko operational loss ke roop mein write-off kiya hota hai. Yeh Settled remark automated Loan Origination Systems ke liye risk flag ban jata hai, jisse score 70 se 120 points girta hai aur naye unsecured loans auto-reject hone lagte hain.
                </p>
              </div>
            </section>

            {/* SECTION 2: Financial Breakdown & Settlement Status Math */}
            <section id="settlement-math-conversion-mechanics" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <DollarSign className="w-4 h-4 text-[#1886ff]" />
                <span>Financial Analysis &amp; Conversion Math</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. Financial Breakdown: Status Conversion Math
              </h2>
              
              <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200/80 shadow-xs space-y-5 text-slate-700 leading-relaxed text-sm md:text-base">
                <p>
                  Defaulted loan accounts mein total balance ka bada hissa compounding penal interest aur bounce charges ka hota hai. CredSettle ki negotiation se yeh charges waive ho jate hain aur settlement purely adjusted principal par hota hai. Settlement ke baad CIBIL report par Current Balance ₹0 hota hai, par Written-off column mein waived amount reflect hoti hai.
                </p>

                {/* Representative Calculation Card */}
                <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/90 space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                    <span className="font-bold text-slate-900 text-sm md:text-base">Representative Post-Settlement Conversion Model (₹5 Lakh Loan)</span>
                    <span className="text-xs px-2.5 py-1 bg-blue-100 text-[#1886ff] rounded-md font-bold">Standard 180-Day Case</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs md:text-sm">
                    <div className="bg-white p-3.5 rounded-xl border border-slate-200">
                      <span className="text-slate-500 block text-xs">Total Claimed Balance:</span>
                      <span className="font-bold text-slate-900 text-base">₹5,40,000</span>
                      <span className="text-[11px] text-slate-400 block mt-0.5">₹3.8L Principal + ₹1.6L Penal</span>
                    </div>

                    <div className="bg-white p-3.5 rounded-xl border border-slate-200">
                      <span className="text-slate-500 block text-xs">Compromise OTS Paid:</span>
                      <span className="font-bold text-emerald-700 text-base">₹2,20,000</span>
                      <span className="text-[11px] text-emerald-600 block mt-0.5">59% Total Waiver Achieved</span>
                    </div>

                    <div className="bg-white p-3.5 rounded-xl border border-slate-200">
                      <span className="text-slate-500 block text-xs">CIBIL Status Reported:</span>
                      <span className="font-bold text-amber-700 text-base">Settled (₹0 Balance)</span>
                      <span className="text-[11px] text-amber-600 block mt-0.5">Score Impact: -85 Pts</span>
                    </div>

                    <div className="bg-white p-3.5 rounded-xl border border-slate-200">
                      <span className="text-slate-500 block text-xs">Conversion to "Closed":</span>
                      <span className="font-bold text-blue-700 text-base">Pay ₹1.6L Principal</span>
                      <span className="text-[11px] text-blue-600 block mt-0.5">Upgrade status to Closed</span>
                    </div>
                  </div>
                  
                  <p className="text-xs text-slate-600 pt-1">
                    Bhavishya mein financial position strong hone par aap bachi hui principal differential amount pay karke bank se formal NDC aur bureau par Closed status update prapt kar sakte hain.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 3: 4-Sided Bordered Comparison Matrix */}
            <section id="rebuilding-comparison-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Strategic Comparison Matrix</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Comparison Matrix: CIBIL Rebuilding Trajectory
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Alag-alag debt resolution options, unke reporting status aur CIBIL recovery timeframe ki tulna:
              </p>

              {/* 4-Sided Bordered Comparison Table */}
              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-left text-xs md:text-sm divide-y divide-slate-200/80 border-collapse">
                  <thead className="bg-slate-100/80 font-bold text-slate-900">
                    <tr className="divide-x divide-slate-200/80">
                      <th className="p-3.5 sm:p-4">Resolution Route</th>
                      <th className="p-3.5 sm:p-4">CIBIL Status Reported</th>
                      <th className="p-3.5 sm:p-4">Immediate Score Impact</th>
                      <th className="p-3.5 sm:p-4">Rebuilding Timeframe</th>
                      <th className="p-3.5 sm:p-4">Prime Loan Eligibility</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-700">
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60 transition-colors">
                      <td className="p-3.5 sm:p-4 font-semibold text-slate-900">One-Time Settlement</td>
                      <td className="p-3.5 sm:p-4 text-amber-700 font-medium">Settled / Written-off</td>
                      <td className="p-3.5 sm:p-4 text-red-600 font-bold">Drops 70-120 pts</td>
                      <td className="p-3.5 sm:p-4">12-24 Months (Secured Route)</td>
                      <td className="p-3.5 sm:p-4 text-slate-800 font-medium">Restored after 18-24 Mo.</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60 transition-colors">
                      <td className="p-3.5 sm:p-4 font-semibold text-slate-900">Loan Restructuring</td>
                      <td className="p-3.5 sm:p-4 text-blue-700 font-medium">Restructured Account</td>
                      <td className="p-3.5 sm:p-4 text-amber-600 font-bold">Drops 40-60 pts</td>
                      <td className="p-3.5 sm:p-4">6-12 Months</td>
                      <td className="p-3.5 sm:p-4 text-slate-800 font-medium">Restored after 12 Mo.</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60 transition-colors">
                      <td className="p-3.5 sm:p-4 font-semibold text-slate-900">Full Repayment</td>
                      <td className="p-3.5 sm:p-4 text-emerald-700 font-medium">Closed (Past DPD logged)</td>
                      <td className="p-3.5 sm:p-4 text-blue-600 font-bold">Stabilizes quickly</td>
                      <td className="p-3.5 sm:p-4">6-9 Months</td>
                      <td className="p-3.5 sm:p-4 text-slate-800 font-medium">Immediate post-update</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60 transition-colors">
                      <td className="p-3.5 sm:p-4 font-semibold text-slate-900">Secured Rebuilding</td>
                      <td className="p-3.5 sm:p-4 text-emerald-700 font-medium">Active (0 DPD streak)</td>
                      <td className="p-3.5 sm:p-4 text-emerald-600 font-bold">+15 to +25 pts / qtr</td>
                      <td className="p-3.5 sm:p-4">12-18 Months</td>
                      <td className="p-3.5 sm:p-4 text-slate-800 font-medium">Prime 750+ Achieved</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60 transition-colors">
                      <td className="p-3.5 sm:p-4 font-semibold text-slate-900">Financial Inaction</td>
                      <td className="p-3.5 sm:p-4 text-red-700 font-medium">Suit Filed / Wilful Default</td>
                      <td className="p-3.5 sm:p-4 text-red-700 font-bold">Drops below 500</td>
                      <td className="p-3.5 sm:p-4">Indefinite Freeze</td>
                      <td className="p-3.5 sm:p-4 text-red-600 font-medium">Permanently Blocked</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 4: Technical CIBIL Algorithm & Scoring Math */}
            <section id="technical-cibil-algorithm-math" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <PieChart className="w-4 h-4 text-[#1886ff]" />
                <span>Algorithm Engineering &amp; Weights</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. CIBIL Scoring Math: 5 Factors &amp; Recovery Steps
              </h2>
              <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200/80 shadow-xs space-y-4 text-slate-700 leading-relaxed text-sm md:text-base">
                <p>
                  TransUnion CIBIL score 300 se 900 ke numerical scale par automated mathematical algorithm calculate karta hai. Is algorithm mein sabse bada weight <strong>Payment History (35% Weight)</strong> ka hota hai jo 36 mahino ke Days Past Due (DPD) record ko measure karta hai. Settlement hone par purani DPD cycle negative signal deti hai.
                </p>
                <p>
                  Doosra pramukh factor <strong>Credit Utilization Ratio (30% Weight)</strong> hai, jo credit limit ke mukable used balance ko check karta hai. Baki factors mein <strong>Credit History Duration (15% Weight)</strong>, <strong>Credit Mix (10% Weight)</strong> jisme secured aur unsecured debt ka balance dekha jata hai, aur <strong>New Hard Inquiries (10% Weight)</strong> shamil hain. Score rebuild karne ke liye 35% payment track aur 30% utilization ko strategically leverage kiya jata hai.
                </p>
              </div>
            </section>

            {/* SECTION 5: Visual Infographic Asset Card */}
            <section id="infographic-overview" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Sparkles className="w-4 h-4 text-[#1886ff]" />
                <span>Visual Rebuilding Roadmap</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Visual Blueprint: CIBIL Score Rebuilding Trajectory (Settled to 750+)
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Neeche diya gaya infographic loan settlement ke baad CIBIL score ko 550 se dobara 750+ prime tier tak le jaane ka roadmap darshata hai:
              </p>

              <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-3 md:p-4 overflow-hidden">
                <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-slate-100">
                  <Image
                    src="/images/infographics/cibil-score-kaise-badhaye-after-settlement.jpg"
                    alt="CIBIL Score Kaise Badhaye After Loan Settlement Infographic Roadmap"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 60vw"
                    priority
                  />
                </div>
                <div className="mt-3 px-2 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2">
                  <span>CredSettle Credit Restoration Protocol • CICRA 2005 Compliant</span>
                  <a
                    href="/images/infographics/cibil-score-kaise-badhaye-after-settlement.jpg"
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

            {/* SECTION 6: Step-by-Step SOP (6 Stages) */}
            <section id="step-by-step-cibil-rebuild-sop" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Award className="w-4 h-4 text-[#1886ff]" />
                <span>Standard Operating Procedure</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. Step-by-Step SOP: 6 Stages of CIBIL Score Restoration
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Follow this battle-tested 6-stage protocol to rebuild your credit rating post-settlement:
              </p>

              <div className="space-y-4 pt-2">
                {/* Stage 1 */}
                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 01
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Timeline: Month 1</span>
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-slate-900">
                    Forensic CIR Audit
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    CIBIL, Experian, CRIF aur Equifax reports download karein. Verify karein ki settled account par Current Balance ₹0 show ho raha hai aur koi live penalty add nahi ho rahi.
                  </p>
                </div>

                {/* Stage 2 */}
                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 02
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Timeline: Month 1–2</span>
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-slate-900">
                    NDC Procurement
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Bank se official No Dues Certificate lein. Agar 45 dino baad bhi balance zero na ho, toh CICRA Section 21 ke tehat bureau portal par dispute raise karein.
                  </p>
                </div>

                {/* Stage 3 */}
                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 03
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Timeline: Month 3</span>
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-slate-900">
                    Secured Credit Card
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Commercial bank mein ₹25,000 se ₹50,000 ki FD karke secured card lein. Yeh cards bina credit check ke instant issue hote hain aur positive DPD banate hain.
                  </p>
                </div>

                {/* Stage 4 */}
                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 04
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Timeline: Months 3–9</span>
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-slate-900">
                    Utilization Optimization
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Secured card par total limit ka kewal 15% se 20% spend karein. Regular utility bills card se pay karein aur due date par 100% full payment karein.
                  </p>
                </div>

                {/* Stage 5 */}
                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 05
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Timeline: Months 9–15</span>
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-slate-900">
                    Credit Mix Diversification
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    6-9 mahine regular card payments ke baad chhota consumer durable loan add karein. Yeh credit mix balance karke score 700 cross karwata hai.
                  </p>
                </div>

                {/* Stage 6 */}
                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 06
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Timeline: Months 15–24</span>
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-slate-900">
                    Status Conversion &amp; 750+
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Prime loans ke liye bank ko principal differential pay karke settled remark ko Closed mein convert karein. 18-24 mahine mein score 750+ ho jayega.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: Statutory Rights & Legal Framework */}
            <section id="statutory-rights-credit-reporting" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Regulatory Protections &amp; Statutory Law</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. Statutory Rights &amp; Legal Protections in Credit Bureau Reporting
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                {/* Card 1: CICRA 2005 Section 21 */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm md:text-base">
                    <ShieldCheck className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                    <span>CICRA 2005 Section 21 Rights</span>
                  </div>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Credit Information Companies Act Section 21 ke tehat borrower ko wrong data challenge karne ka right hai. Bureaus aur banks ko dispute date se 30 dino mein records correct karna mandatory hai.
                  </p>
                </div>

                {/* Card 2: RBI Fair Practices Code */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm md:text-base">
                    <Building2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                    <span>RBI Master Directions &amp; Bureau Sync</span>
                  </div>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    RBI Master Directions ke anusar sabbhi banks aur NBFCs ko har mahine loan settlements aur zero balances sabhi 4 licensed bureaus ko synchronized tarike se submit karna mandatory hai.
                  </p>
                </div>

                {/* Card 3: Post-Closure Protection */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm md:text-base">
                    <Lock className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                    <span>Post-Closure Legal Protection</span>
                  </div>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Compromise settlement pay hone aur NDC milne ke baad lender Section 25 PSSA ya Section 138 NI Act proceedings initiate nahi kar sakta. Sabhi claims discharge ho jate hain.
                  </p>
                </div>

                {/* Card 4: Consumer Redressal Precedents */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm md:text-base">
                    <Scale className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                    <span>Defamatory Reporting Remedies</span>
                  </div>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    High Courts aur Consumer Forums ke rulings ke mutabik agar bank settlement ke baad bhi wrong default report karta hai, toh borrower compensation claim karne ka haqdar hai.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 8: 3-Tier Escalation Matrix */}
            <section id="three-tier-escalation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff]" />
                <span>Grievance Redressal Protocol</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. The 3-Tier Escalation Matrix for Credit Report Corrections
              </h2>
              
              <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200/80 shadow-xs space-y-4 text-slate-700 leading-relaxed text-sm md:text-base">
                <p>
                  Agar settlement ke baad bank CIBIL par balance zero nahi karta ya NDC issue karne mein delay karta hai, toh 3-tier escalation hierarchy use karein:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1">
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1.5">
                    <span className="text-xs font-black text-[#1886ff] uppercase tracking-wider block">Level 1: GRO</span>
                    <h4 className="font-bold text-slate-900 text-sm">Grievance Redressal Officer</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Bank ke dedicated GRO desk ko formal grievance submit karein. Turnaround: 7-10 working days.
                    </p>
                  </div>

                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1.5">
                    <span className="text-xs font-black text-[#1886ff] uppercase tracking-wider block">Level 2: PNO</span>
                    <h4 className="font-bold text-slate-900 text-sm">Principal Nodal Officer</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Resolution na milne par matter bank PNO desk ko escalate karein. Turnaround: 14-21 days.
                    </p>
                  </div>

                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1.5">
                    <span className="text-xs font-black text-[#1886ff] uppercase tracking-wider block">Level 3: RBI Ombudsman</span>
                    <h4 className="font-bold text-slate-900 text-sm">Integrated Ombudsman</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      30 dino mein satisfactory resolution na milne par RBI Portal cms.rbi.org.in par complaint darj karein.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 9: Chronological Timeline Table */}
            <section id="chronological-rebuilding-milestones" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Clock className="w-4 h-4 text-[#1886ff]" />
                <span>Procedural Milestones</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Chronological Timeline Table: 1 to 24 Months Score Recovery
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Settlement ke baad CIBIL score recovery ek gradual algorithmic process hai. Neeche diye gaye milestone roadmap ko follow karein:
              </p>

              {/* 4-Sided Bordered Timeline Table */}
              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-left text-xs md:text-sm divide-y divide-slate-200/80 border-collapse">
                  <thead className="bg-slate-100/80 font-bold text-slate-900">
                    <tr className="divide-x divide-slate-200/80">
                      <th className="p-3.5 sm:p-4">Timeline Period</th>
                      <th className="p-3.5 sm:p-4">Operational Milestones &amp; Actions</th>
                      <th className="p-3.5 sm:p-4">Target CIBIL Range</th>
                      <th className="p-3.5 sm:p-4">Credit Accessibility</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-700">
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60 transition-colors">
                      <td className="p-3.5 sm:p-4 font-semibold text-slate-900">Month 1-3</td>
                      <td className="p-3.5 sm:p-4">Settlement audit, NDC receipt, zero balance bureau reporting verification.</td>
                      <td className="p-3.5 sm:p-4 text-amber-700 font-bold">530-580</td>
                      <td className="p-3.5 sm:p-4">Only FD-backed cards.</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60 transition-colors">
                      <td className="p-3.5 sm:p-4 font-semibold text-slate-900">Month 3-6</td>
                      <td className="p-3.5 sm:p-4">Secured card setup, strict utilization (&lt; 20%), on-time payment streak.</td>
                      <td className="p-3.5 sm:p-4 text-blue-700 font-bold">590-640</td>
                      <td className="p-3.5 sm:p-4">Secured cards, BNPL.</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60 transition-colors">
                      <td className="p-3.5 sm:p-4 font-semibold text-slate-900">Month 6-12</td>
                      <td className="p-3.5 sm:p-4">Add consumer durable EMI line, zero hard inquiries, clean DPD track.</td>
                      <td className="p-3.5 sm:p-4 text-indigo-700 font-bold">650-700</td>
                      <td className="p-3.5 sm:p-4">Co-branded cards.</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60 transition-colors">
                      <td className="p-3.5 sm:p-4 font-semibold text-slate-900">Month 12-18</td>
                      <td className="p-3.5 sm:p-4">First unsecured card approval, credit limit enhancement on cards.</td>
                      <td className="p-3.5 sm:p-4 text-emerald-700 font-bold">710-740</td>
                      <td className="p-3.5 sm:p-4">Unsecured cards.</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60 transition-colors">
                      <td className="p-3.5 sm:p-4 font-semibold text-slate-900">Month 18-24</td>
                      <td className="p-3.5 sm:p-4">Optional status conversion to Closed, prime profile restoration.</td>
                      <td className="p-3.5 sm:p-4 text-emerald-700 font-bold">750+ Prime</td>
                      <td className="p-3.5 sm:p-4">Home &amp; Personal Loans.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: Specialized Real-World Scenarios */}
            <section id="specialized-credit-repair-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>Practical Case Scenarios</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                10. Specialized Credit Repair Scenarios &amp; Tailored Solutions
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                {/* Scenario 1 */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h4 className="font-bold text-slate-900 text-sm md:text-base">Multiple Settled Accounts</h4>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Agar multiple accounts settle hue hain, toh sabhi ke NDCs collect karein. Rebuilding phase mein ek central secured card se positive payment frequency establish karein.
                  </p>
                </div>

                {/* Scenario 2 */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h4 className="font-bold text-slate-900 text-sm md:text-base">Salaried Corporate Verification</h4>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    MNCs pre-employment checks mein CIBIL check karti hain. Settled loan par valid NDC aur zero balance show karne par employment check smoothly clear ho jata hai.
                  </p>
                </div>

                {/* Scenario 3 */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h4 className="font-bold text-slate-900 text-sm md:text-base">Business MSME Capital</h4>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Proprietors jinke personal loans settle hue hain, unhe business credit ke liye GST turnover based loans ya CGTMSE schemes use karni chahiye jab tak CIBIL 720+ na ho.
                  </p>
                </div>

                {/* Scenario 4 */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h4 className="font-bold text-slate-900 text-sm md:text-base">ARC-Assigned Debt</h4>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    ARCs ko assign hue loans mein settlement agreement aur Section 5 SARFAESI compliance confirmation letter lena bureau updation ke liye mandatory hota hai.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 11: Company Profile Section */}
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
                12. Frequently Asked Questions: CIBIL Score &amp; Loan Settlement
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                CIBIL score improvement, settled status conversion aur credit rebuilding ke sabhi aam sawalo ke authoritative uttar:
              </p>

              <div className="space-y-3 pt-2">
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
                        className="w-full p-4 sm:p-5 text-left font-bold text-slate-900 flex items-center justify-between gap-4 hover:text-[#1886ff] transition-colors text-sm sm:text-base cursor-pointer"
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
                <span>Statutory Citations &amp; Legal Authorities</span>
              </div>
              <h2 className="text-base sm:text-lg font-bold text-slate-900">
                Official Regulatory Citations &amp; Credit Bureau Authorities
              </h2>
              <ul className="space-y-2 text-xs text-slate-600 leading-relaxed list-disc pl-5">
                <li>
                  <strong>Credit Information Companies (Regulation) Act, 2005 (CICRA):</strong> Sections 18, 19, 21 and 22, Ministry of Finance, Government of India.
                </li>
                <li>
                  <strong>Reserve Bank of India Master Directions:</strong> Master Direction on Credit Information Companies Guidelines and Fair Practices Code (Updated 2026).
                </li>
                <li>
                  <strong>Reserve Bank - Integrated Ombudsman Scheme, 2021:</strong> Statutory Grievance Redressal for Defective Credit Reporting and Delay in NDC Issuance.
                </li>
                <li>
                  <strong>Banking Regulation Act, 1949:</strong> Section 35A read with Prudential Norms on Asset Classification.
                </li>
              </ul>

              {/* 6 Outbound Authority Badges */}
              <div className="pt-3">
                <span className="text-xs font-bold text-slate-700 block mb-2">Verified Official Portals &amp; Statutory Regulatory References:</span>
                <div className="flex flex-wrap gap-2">
                  <a href="https://www.rbi.org.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200 inline-flex items-center gap-1">
                    <span>Reserve Bank of India (rbi.org.in)</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                  <a href="https://cms.rbi.org.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200 inline-flex items-center gap-1">
                    <span>RBI Ombudsman Portal (cms.rbi.org.in)</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                  <a href="https://www.cibil.com" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200 inline-flex items-center gap-1">
                    <span>TransUnion CIBIL (cibil.com)</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                  <a href="https://www.indiacode.nic.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200 inline-flex items-center gap-1">
                    <span>India Code CICRA 2005 (indiacode.nic.in)</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                  <a href="https://nalsa.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200 inline-flex items-center gap-1">
                    <span>National Legal Services Authority (nalsa.gov.in)</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                  <a href="https://cybercrime.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200 inline-flex items-center gap-1">
                    <span>National Cyber Crime Portal (cybercrime.gov.in)</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                </div>
              </div>

              {/* 10 Internal CredSettle Topic Badges */}
              <div className="pt-4 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Explore Related CredSettle Legal &amp; Debt Guides:</span>
                <div className="flex flex-wrap gap-2">
                  <Link href="/convert-settled-status-to-closed" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Convert Settled to Closed
                  </Link>
                  <Link href="/remove-settled-status-from-cibil" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Remove Settled from CIBIL
                  </Link>
                  <Link href="/improve-cibil-after-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Improve CIBIL Score Guide
                  </Link>
                  <Link href="/get-noc-after-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Get NOC Certificate
                  </Link>
                  <Link href="/verify-loan-settlement-letter" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Verify Settlement Letter
                  </Link>
                  <Link href="/full-and-final-settlement-meaning" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Full &amp; Final Settlement Meaning
                  </Link>
                  <Link href="/services/personal-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Personal Loan Settlement
                  </Link>
                  <Link href="/services/anti-harassment" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Anti-Harassment Defense
                  </Link>
                  <Link href="/bank-sent-legal-notice-for-loan-what-to-do" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Bank Legal Notice Defense
                  </Link>
                  <Link href="/arbitration-notice-personal-loan-default" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Arbitration Notice Reply
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
                Specialized in credit dispute resolution, CIBIL score restoration architectures, and banking compliance under CICRA 2005 across Indian financial institutions.
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
                  100% CONFIDENTIAL CREDIT REPAIR
                </span>
                <h3 className="text-lg md:text-xl font-bold text-white leading-snug">
                  CIBIL Score Rebuild Karna Chahte Hain?
                </h3>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Hamare experts se settlement, NDC verification aur CIBIL restoration par personalized guidance lein.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Get Free Credit Rebuilding &amp; Settlement Advice
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
                  <span>Direct Bank Settlement • CICRA Compliant</span>
                </div>
              </div>
            </div>

            {/* Card 3: CredSettle Trust Badges */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <h4 className="font-bold text-slate-900 text-sm">The CredSettle Advantage</h4>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Zero Upfront Risk:</strong> Success-linked fees.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Direct Bank Remittance:</strong> Zero middleman fund holding.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>CICRA 2005 Compliance:</strong> 100% lawful dispute handling.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Dedicated Expert Desk:</strong> Pan-India specialists.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <h4 className="font-bold text-slate-900 text-sm">Related Credit Guides</h4>
              <div className="space-y-2.5">
                <Link
                  href="/convert-settled-status-to-closed"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Convert Settled Loan to Closed Status
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Full conversion blueprint &rarr;</span>
                </Link>

                <Link
                  href="/remove-settled-status-from-cibil"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Remove Settled Status from CIBIL Report
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Step-by-step dispute guide &rarr;</span>
                </Link>

                <Link
                  href="/improve-cibil-after-loan-settlement"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Rebuild CIBIL Score to 750+ Fast
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Algorithmic score recovery &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
