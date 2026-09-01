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
  ShieldAlert
} from 'lucide-react';

export default function CreditCardSettlementKaiseHotaHaiClient() {
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
    { id: 'debt-economics-npa-dynamics', label: '1. Debt Economics & NPA Dynamics' },
    { id: 'financial-breakdown-settlement-math', label: '2. Financial Breakdown & Math' },
    { id: 'legal-forum-comparison-matrix', label: '3. Legal Forum Comparison Matrix' },
    { id: 'technical-cibil-scoring-algorithm', label: '4. CIBIL Algorithm & Scoring Math' },
    { id: 'visual-infographic-asset', label: '5. Visual Infographic Blueprint' },
    { id: 'step-by-step-sop-stages', label: '6. 6-Stage Defense SOP' },
    { id: 'statutory-notice-defense-rights', label: '7. Statutory Notice Defense & Rights' },
    { id: 'three-tier-grievance-matrix', label: '8. 3-Tier Grievance Matrix' },
    { id: 'chronological-timeline-table', label: '9. Chronological Timeline Table' },
    { id: 'specialized-real-world-scenarios', label: '10. Specialized Real Scenarios' },
    { id: 'company-profile', label: '11. About CredSettle' },
    { id: 'frequently-asked-questions', label: '12. Frequently Asked Questions' },
    { id: 'regulatory-sources', label: '13. Statutory Citations & Grid' }
  ];

  const faqs = [
    {
      q: 'Credit card settlement kaise hota hai aur iska legal process kya hai?',
      a: 'Credit card settlement ek formal legal compromise process hai jisme bank cardholder ki genuine financial hardship ko verify karke accumulated compound interest aur penalties waive karta hai, aur remaining principal amount par 40% se 60% discount par full-and-final settlement authorize karta hai.'
    },
    {
      q: 'Kya credit card settlement se pehle 90 din default hona zaroori hai?',
      a: 'Haan, banks ke commercial credit policy ke mutabiq settlement negotiations tabhi open hoti hain jab account 90 din overdue hokar RBI norms ke tehat Non-Performing Asset (NPA) classify ho jata hai aur Tier-1 capital provisioning trigger hoti hai.'
    },
    {
      q: 'Minimum Amount Due pay karne se debt clear kyu nahi hota?',
      a: 'Minimum Amount Due (MAD) sirf 5% total outstanding cover karta hai, jisme se lagbhag 4% interest aur taxes me kat jata hai. Isse principal debt reduce nahi hota aur annualized 42% to 52% compound interest lagta rehta hai.'
    },
    {
      q: 'Credit card debt default par bank legal action ya police case kar sakti hai?',
      a: 'Unsecured credit card default purely civil dispute hai Indian Contract Act, 1872 ke tehat. Bank police arrest ya criminal case nahi kar sakti. Lenders sirf civil court me Order 37 summary suit ya arbitration initiate kar sakte hain.'
    },
    {
      q: 'Hardship letter credit card settlement team ko kaise submit karein?',
      a: 'Hardship letter bank ke credit card retention ya nodal officer ko Registered Post aur email se bhejein. Isme job loss certificate, medical discharge summaries, ya salary reduction bank statements attach karke realistic principal settlement offer propose karein.'
    },
    {
      q: 'Credit card settlement letter verify kaise karein fake notice se bachne ke liye?',
      a: 'Settlement letter hamesha bank ke official letterhead par aana chahiye jisme branch manager ya authorized signatory ka sign, employee code, loan account number, exact settlement amount, aur payment due date clearly printed ho.'
    },
    {
      q: 'Settlement payment third-party agency ya agent ko cash me de sakte hain?',
      a: 'Bilkul nahi. Settlement amount hamesha directly bank ke official card account number ya designated settlement escrow account me RTGS/NEFT/Cheque dwara transfer karein. Agent ko cash ya personal UPI payment kabhi na karein.'
    },
    {
      q: 'Credit card settlement ke kitne din baad No Dues Certificate (NDC) milta hai?',
      a: 'Settlement payment complete hone ke 15 se 30 working days ke andar bank official No Dues Certificate (NDC) / Closure Letter issue karta hai, jo confirm karta hai ki account permanently close ho chuka hai.'
    },
    {
      q: 'Credit card settlement se CIBIL score par kya asar padta hai?',
      a: 'Settlement ke baad CIBIL report me status Settled reflect hota hai aur score me 70 se 120 points ka drop aata hai. Halanki, regular credit hygiene aur secured FD credit card se score 18 se 24 months me rebuild ho jata hai.'
    },
    {
      q: 'Kya Settled status ko baad me Closed me convert karwaya ja sakta hai?',
      a: 'Haan, CICRA 2005 rules ke tehat agar borrower future me waived differential amount bank ko pay kar deta hai, toh bank CIBIL bureau ko update bhejkar status ko Settled se Closed me convert kar deta hai.'
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-blue-100 text-xs font-semibold uppercase tracking-wider mb-4 border border-white/15">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-200" />
            <span>Statutory Debt Resolution Protection</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Credit Card Settlement Kaise Hota Hai? Step-by-Step Legal Guide &amp; Math
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-3xl mx-auto font-normal text-white/95 leading-relaxed">
            Agar aap credit card ke minimum amount due trap me phas chuke hain, toh samjhein settlement process. Yeh guide compound interest khatam karne, 50% waiver lene, aur official No Dues Certificate prapt karne ka legal blueprint deti hai.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Get Free Debt Assessment &amp; Settle</span>
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
                  <span>Statutory Legal Defense</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Governed by Indian Contract Act 1872, RBI Prudential Norms, and CICRA 2005.
                </p>
              </div>
            </div>
          </aside>

          {/* ================= MIDDLE COLUMN: MAIN CONTENT ================= */}
          <div className="space-y-8 md:space-y-10 min-w-0">
            
            {/* EXECUTIVE SUMMARY BOX (#F4F8FE with 5px #1886ff left border) */}
            <div
              id="quick-crux"
              className="scroll-target rounded-2xl bg-[#F4F8FE] border border-blue-100/90 border-l-[5px] border-l-[#1886ff] p-5 sm:p-6 md:p-7 shadow-xs space-y-4 text-slate-800"
            >
              <div className="flex items-center gap-2 text-xs md:text-sm font-black uppercase tracking-wider text-[#1886ff]">
                <Bookmark className="w-4 h-4 text-[#1886ff]" />
                <span>EXECUTIVE SUMMARY: CREDIT CARD SETTLEMENT BLUEPRINT IN INDIA</span>
              </div>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Credit card debt settlement in India is a formal contractual compromise between a distressed cardholder and the issuing bank. When financial hardship eliminates repayment capacity, paying minimum monthly dues fuels compounding interest without reducing principal balances. Through structured hardship verification, borrowers can legally halt collection pressure and settle outstanding dues.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 pt-1">
                <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>Unsecured debt default is strictly a civil contractual matter under Indian law.</span>
                </div>
                <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>Settlement negotiations open officially after 90 days of NPA classification.</span>
                </div>
                <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>Waivers eliminate 100% of accumulated penal charges and compound interest.</span>
                </div>
                <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>Realistic settlement agreements range between 40% and 55% of total dues.</span>
                </div>
                <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>Comprehensive hardship dossiers establish verifiable financial incapacity.</span>
                </div>
                <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>Settlement payments must be transferred directly to official bank accounts.</span>
                </div>
                <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>Authentic settlement letters on official letterheads prevent third-party fraud.</span>
                </div>
                <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>An official No Dues Certificate permanently extinguishes lender claims.</span>
                </div>
              </div>
            </div>

            {/* SECTION 1: Debt Economics & NPA Dynamics */}
            <section id="debt-economics-npa-dynamics" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Institutional Credit Economics</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. Debt Economics &amp; 90-Day NPA Dynamics in Credit Card Default
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Credit card debt in India functions as high-risk unsecured revolving credit carrying annualized interest rates between 42% and 52%. Cardholders frequently get trapped paying the 5% Minimum Amount Due, which only covers monthly finance charges and GST while principal balances remain untouched. When income loss or medical emergencies cause missed payments, the account progresses through RBI Special Mention Account stages: SMA-0 (1-30 days), SMA-1 (31-60 days), and SMA-2 (61-90 days).
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Upon crossing 90 days of non-payment, the card is classified as a Non-Performing Asset (NPA). Because credit cards carry no collateral, lenders cannot seize property under the SARFAESI Act, 2002, which excludes unsecured debt under Section 31(b). Furthermore, RBI prudential norms require banks to allocate Tier-1 capital provisioning of 15% to 100% against non-performing unsecured assets. To release this provisioning capital, credit committees prioritize commercial One-Time Settlements (OTS) over prolonged civil litigation.
              </p>
            </section>

            {/* SECTION 2: Financial Breakdown & Settlement Math */}
            <section id="financial-breakdown-settlement-math" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <DollarSign className="w-4 h-4 text-[#1886ff]" />
                <span>Settlement Financial Modeling</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. Financial Breakdown &amp; Representative Settlement Calculation
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When an unsecured credit card defaults, statement balances escalate rapidly due to finance charges, late fees, over-limit penalties, and 18% GST. Over six months, these secondary levies inflate the principal obligation by 40% to 50%. A successful One-Time Settlement separates actual principal from penal inflation, establishing a realistic baseline for compromise negotiations.
              </p>

              {/* Settlement Math Card */}
              <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs p-5 md:p-6 space-y-4">
                <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                  <span>Representative 180-Day NPA Credit Card Settlement Model</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                    <span className="text-slate-500 block text-[11px]">Original Principal</span>
                    <span className="text-sm md:text-base font-extrabold text-slate-800">₹3,00,000</span>
                    <span className="text-[10px] text-slate-400 block mt-0.5">Actual borrowed capital</span>
                  </div>
                  <div className="p-3 bg-red-50 rounded-xl border border-red-200">
                    <span className="text-red-600 block text-[11px]">Penal Interest &amp; Fees</span>
                    <span className="text-sm md:text-base font-extrabold text-red-700">₹2,00,000</span>
                    <span className="text-[10px] text-red-500 block mt-0.5">42% APR + fees + GST</span>
                  </div>
                  <div className="p-3 bg-blue-50 rounded-xl border border-blue-200">
                    <span className="text-blue-600 block text-[11px]">Gross Demand Balance</span>
                    <span className="text-sm md:text-base font-extrabold text-[#1886ff]">₹5,00,000</span>
                    <span className="text-[10px] text-blue-500 block mt-0.5">Total statement demand</span>
                  </div>
                </div>

                <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200 space-y-2 text-xs text-emerald-950">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1 font-bold">
                    <span>Negotiated Compromise Target (45% to 55% Discount):</span>
                    <span className="text-sm font-black text-emerald-700">₹2,25,000 to ₹2,50,000</span>
                  </div>
                  <p className="text-[11px] text-emerald-800 leading-relaxed">
                    By eliminating 100% of penal fees (₹2,00,000) and securing a 25% waiver on core principal, the cardholder resolves the ₹5,00,000 gross exposure with a direct payment of ₹2,25,000.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 3: 4-Sided Bordered Comparison Matrix */}
            <section id="legal-forum-comparison-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Comparative Strategic Analysis</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Credit Card Resolution Mechanisms Comparison Matrix
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Distressed cardholders can evaluate multiple legal resolution pathways based on speed, waiver potential, legal finality, and credit impact:
              </p>

              {/* 4-Sided Bordered Table */}
              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto shadow-xs bg-white">
                <table className="w-full text-left text-xs border-collapse divide-y divide-slate-200/80">
                  <thead className="bg-slate-50 text-slate-800 font-bold uppercase tracking-wider text-[11px]">
                    <tr className="divide-x divide-slate-200/80">
                      <th className="p-3.5">Resolution Parameter</th>
                      <th className="p-3.5 text-[#1886ff]">One-Time Settlement (OTS)</th>
                      <th className="p-3.5">Restructuring / EMI Plan</th>
                      <th className="p-3.5">Civil Court Litigation</th>
                      <th className="p-3.5">National Lok Adalat</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-700">
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60 transition-colors">
                      <td className="p-3.5 font-bold text-slate-900">Average Waiver</td>
                      <td className="p-3.5 font-semibold text-emerald-600">40% to 60% of Total Dues</td>
                      <td className="p-3.5">0% (Interest reduction only)</td>
                      <td className="p-3.5">Uncertain</td>
                      <td className="p-3.5 text-emerald-600">35% to 50% Mutual Waiver</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60 transition-colors">
                      <td className="p-3.5 font-bold text-slate-900">Resolution Time</td>
                      <td className="p-3.5 font-semibold text-slate-900">15 to 45 Days</td>
                      <td className="p-3.5">3 to 5 Years Tenor</td>
                      <td className="p-3.5">2 to 5 Years in Civil Court</td>
                      <td className="p-3.5">Single-Day Sitting</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60 transition-colors">
                      <td className="p-3.5 font-bold text-slate-900">Legal Finality</td>
                      <td className="p-3.5 font-semibold text-slate-900">Guaranteed Bank NDC Issued</td>
                      <td className="p-3.5">NDC after full tenor</td>
                      <td className="p-3.5">Subject to appeal</td>
                      <td className="p-3.5">Binding Decree, No Appeal</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60 transition-colors">
                      <td className="p-3.5 font-bold text-slate-900">CIBIL Status</td>
                      <td className="p-3.5 font-semibold text-amber-600">Reported as Settled</td>
                      <td className="p-3.5">Reported as Restructured</td>
                      <td className="p-3.5 text-red-600">Suit Filed / Default</td>
                      <td className="p-3.5 text-amber-600">Reported as Settled</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60 transition-colors">
                      <td className="p-3.5 font-bold text-slate-900">Harassment Halt</td>
                      <td className="p-3.5 font-semibold text-emerald-600">Instant Legal Cessation</td>
                      <td className="p-3.5">Temporary Respite</td>
                      <td className="p-3.5">Requires Advocate</td>
                      <td className="p-3.5 text-emerald-600">Permanent Closure</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 4: Technical CIBIL Algorithm & Scoring Math */}
            <section id="technical-cibil-scoring-algorithm" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                <span>Credit Bureau Scoring Mechanics</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. CIBIL Algorithm Mechanics &amp; Post-Settlement Credit Rebuilding
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Credit information bureaus calculate credit scores using a five-factor mathematical algorithm. When an account is resolved via an OTS, lenders report the status as Settled, indicating a portion of the debt was written off. Understanding this algorithm clarifies score impacts and credit rehabilitation:
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 text-center text-xs">
                <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-2xs">
                  <span className="text-xs font-black text-[#1886ff] block">35%</span>
                  <span className="text-[11px] font-bold text-slate-800 block mt-1">Payment History</span>
                  <span className="text-[10px] text-slate-500 block mt-0.5">Repayment track record</span>
                </div>
                <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-2xs">
                  <span className="text-xs font-black text-[#1886ff] block">30%</span>
                  <span className="text-[11px] font-bold text-slate-800 block mt-1">Credit Utilization</span>
                  <span className="text-[10px] text-slate-500 block mt-0.5">Limit vs balance ratio</span>
                </div>
                <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-2xs">
                  <span className="text-xs font-black text-[#1886ff] block">15%</span>
                  <span className="text-[11px] font-bold text-slate-800 block mt-1">Credit Mix</span>
                  <span className="text-[10px] text-slate-500 block mt-0.5">Secured vs unsecured</span>
                </div>
                <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-2xs">
                  <span className="text-xs font-black text-[#1886ff] block">10%</span>
                  <span className="text-[11px] font-bold text-slate-800 block mt-1">Credit Age</span>
                  <span className="text-[10px] text-slate-500 block mt-0.5">Vintage of credit lines</span>
                </div>
                <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-2xs">
                  <span className="text-xs font-black text-[#1886ff] block">10%</span>
                  <span className="text-[11px] font-bold text-slate-800 block mt-1">Inquiries</span>
                  <span className="text-[10px] text-slate-500 block mt-0.5">Recent credit checks</span>
                </div>
              </div>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Upon settlement execution, borrowers experience an immediate score drop of 70 to 120 points. However, because compounding penalties and default reporting cease, the profile stabilizes. Cardholders can rebuild their score to 750+ within 18 to 24 months using a secured credit card. Under Section 21 of CICRA 2005, cardholders who repay the waived differential can convert their bureau status from Settled to Closed.
              </p>
            </section>

            {/* SECTION 5: Visual Infographic Asset Card */}
            <section id="visual-infographic-asset" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Sparkles className="w-4 h-4 text-[#1886ff]" />
                <span>Visual Blueprint</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. Visual Blueprint: Credit Card Settlement Lifecycle
              </h2>
              <p className="text-xs md:text-sm text-slate-600">
                This visual roadmap outlines the end-to-end trajectory of credit card debt settlement, from delinquency classification to securing an official No Dues Certificate:
              </p>

              <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden p-3 sm:p-4 space-y-3">
                <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-slate-100">
                  <Image
                    src="/images/infographics/credit-card-settlement-kaise-hota-hai.jpg"
                    alt="Credit Card Settlement Process in India Visual Roadmap and Step by Step Guide"
                    fill
                    priority
                    sizes="(max-width: 1200px) 100vw, 1200px"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 text-xs text-slate-500 pt-1">
                  <span>Figure 1: CredSettle 6-Stage Credit Card Settlement &amp; Waiver Protocol.</span>
                  <a
                    href="/images/infographics/credit-card-settlement-kaise-hota-hai.jpg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1886ff] hover:underline font-semibold inline-flex items-center gap-1"
                  >
                    <span>View High-Res Infographic</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </section>

            {/* SECTION 6: Step-by-Step SOP (6 Stages) */}
            <section id="step-by-step-sop-stages" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <CheckCircle2 className="w-4 h-4 text-[#1886ff]" />
                <span>Standard Operating Procedure</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. Step-by-Step SOP: 6 Stages of Credit Card Debt Settlement
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Executing a legally secure settlement requires strict procedural discipline. Follow this tested 6-stage institutional protocol to maximize interest waivers and secure debt elimination:
              </p>

              <div className="space-y-3 text-xs sm:text-sm text-slate-700">
                {/* Stage 1 */}
                <div className="p-4 bg-white rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] font-extrabold text-xs flex items-center justify-center flex-shrink-0">1</span>
                    <h3 className="font-bold text-slate-900 text-sm">Forensic Statement Audit</h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed pl-8">
                    Obtain statements for the past 12 months. Separate principal spends from compounding finance charges, late fees, and GST to determine the baseline settlement liability.
                  </p>
                </div>

                {/* Stage 2 */}
                <div className="p-4 bg-white rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] font-extrabold text-xs flex items-center justify-center flex-shrink-0">2</span>
                    <h3 className="font-bold text-slate-900 text-sm">Hardship Dossier Compilation</h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed pl-8">
                    Compile evidence proving financial distress. Essential records include termination letters, medical discharge summaries, or audited loss statements substantiating inability to service revolving debt.
                  </p>
                </div>

                {/* Stage 3 */}
                <div className="p-4 bg-white rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] font-extrabold text-xs flex items-center justify-center flex-shrink-0">3</span>
                    <h3 className="font-bold text-slate-900 text-sm">Credit Committee Representation</h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed pl-8">
                    Submit a formal written hardship representation to the card issuer settlements division via Registered Post and email. Present documentation and propose a realistic compromise.
                  </p>
                </div>

                {/* Stage 4 */}
                <div className="p-4 bg-white rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] font-extrabold text-xs flex items-center justify-center flex-shrink-0">4</span>
                    <h3 className="font-bold text-slate-900 text-sm">Bilateral Waiver Negotiations</h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed pl-8">
                    Engage in structured dialogue with bank settlement managers. Reject initial minimal waiver offers, insist on 100% penal interest elimination, and negotiate down to 40% to 55% of dues.
                  </p>
                </div>

                {/* Stage 5 */}
                <div className="p-4 bg-white rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] font-extrabold text-xs flex items-center justify-center flex-shrink-0">5</span>
                    <h3 className="font-bold text-slate-900 text-sm">Settlement Letter Vetting</h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed pl-8">
                    Vet the official settlement letter on bank letterhead. Ensure it explicitly records the agreed payment, due date, card number, signatory code, and guarantee of closure.
                  </p>
                </div>

                {/* Stage 6 */}
                <div className="p-4 bg-white rounded-2xl border border-slate-200/80 shadow-xs space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] font-extrabold text-xs flex items-center justify-center flex-shrink-0">6</span>
                    <h3 className="font-bold text-slate-900 text-sm">Direct Bank Remittance &amp; NDC</h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed pl-8">
                    Remit settlement funds directly to the bank card account via NEFT, RTGS, or cheque. Retain the UTR receipt and obtain your official No Dues Certificate within 30 days.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: Statutory Notice Defense & Legal Rights */}
            <section id="statutory-notice-defense-rights" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Legal Defense</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. Statutory Notice Defense &amp; Borrower Protection Rights
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When credit card payments default, issuing banks deploy statutory notices. Understanding the legal provisions governing these notices protects borrowers against intimidation:
              </p>

              {/* 4-Card Analytical Defense Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 text-xs sm:text-sm">
                <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900">
                    <BadgeAlert className="w-4 h-4 text-amber-500" />
                    <span>Section 25 PSSA (NACH Bounce Defense)</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    Dishonor of automated NACH mandates is governed by Section 25 of the Payment and Settlement Systems Act, 2007. This is a bailable, compoundable offense where borrowers obtain bail and achieve closure through settlement without facing imprisonment.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900">
                    <Scale className="w-4 h-4 text-blue-600" />
                    <span>Section 138 NI Act (Cheque Dishonor)</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    If cheques bounce, lenders issue notices under the Negotiable Instruments Act, 1881. Section 138 is a bailable quasi-criminal matter easily resolved through mutual settlement at pre-litigation Lok Adalat sittings.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900">
                    <Gavel className="w-4 h-4 text-purple-600" />
                    <span>Arbitration Section 21 &amp; Supreme Court Rulings</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    Banks often initiate arbitration for swift recovery. Under Supreme Court rulings in TRF Ltd. and Perkins Eastman, unilateral arbitrator appointments by lenders are null and void ab initio, providing strong procedural defense.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900">
                    <Landmark className="w-4 h-4 text-emerald-600" />
                    <span>Order 37 CPC &amp; RBI Fair Practices Code</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    Civil summary suits under Order 37 CPC allow borrowers to file Leave to Defend contesting usurious rates. Additionally, RBI rules strictly prohibit recovery agent calls before 8 AM or after 7 PM, workplace visits, and family harassment.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 8: 3-Tier Escalation Matrix */}
            <section id="three-tier-grievance-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <ShieldAlert className="w-4 h-4 text-[#1886ff]" />
                <span>Grievance Redressal Mechanism</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. 3-Tier Grievance Redressal &amp; Escalation Hierarchy
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If recovery agents violate RBI directives, cardholders can escalate grievances through a 3-tier regulatory hierarchy:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs sm:text-sm">
                <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-1.5">
                  <div className="text-[11px] font-extrabold uppercase text-[#1886ff]">Tier 1: Internal Redressal</div>
                  <h3 className="font-bold text-slate-900">Bank Grievance Redressal Officer</h3>
                  <p className="text-slate-600 leading-relaxed text-xs">
                    File a formal complaint with the bank GRO. The bank is mandated to resolve grievances within 7 to 10 working days.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-1.5">
                  <div className="text-[11px] font-extrabold uppercase text-[#1886ff]">Tier 2: Executive Review</div>
                  <h3 className="font-bold text-slate-900">Principal Nodal Officer (PNO)</h3>
                  <p className="text-slate-600 leading-relaxed text-xs">
                    If Level 1 is unsatisfactory after 14 days, escalate to the Principal Nodal Officer, detailing recovery violations.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-1.5">
                  <div className="text-[11px] font-extrabold uppercase text-[#1886ff]">Tier 3: Statutory Authority</div>
                  <h3 className="font-bold text-slate-900">RBI Integrated Ombudsman</h3>
                  <p className="text-slate-600 leading-relaxed text-xs">
                    Submit a complaint at cms.rbi.org.in under the RBI Ombudsman Scheme, 2021. The Ombudsman can award compensation up to ₹20 Lakhs.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 9: Chronological Timeline Table */}
            <section id="chronological-timeline-table" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Clock className="w-4 h-4 text-[#1886ff]" />
                <span>Procedural Milestones</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Chronological Timeline: Day 1 to Month 6 Settlement Milestones
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Delinquency and recovery milestones from default to closure:
              </p>

              {/* 4-Sided Bordered Table */}
              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto shadow-xs bg-white">
                <table className="w-full text-left text-xs border-collapse divide-y divide-slate-200/80">
                  <thead className="bg-slate-50 text-slate-800 font-bold uppercase tracking-wider text-[11px]">
                    <tr className="divide-x divide-slate-200/80">
                      <th className="p-3.5">Timeframe</th>
                      <th className="p-3.5">Delinquency Phase</th>
                      <th className="p-3.5">Bank Operational Action</th>
                      <th className="p-3.5 text-[#1886ff]">Strategic Borrower Protocol</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-700">
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60 transition-colors">
                      <td className="p-3.5 font-bold text-slate-900">Days 1 - 30</td>
                      <td className="p-3.5">SMA-0</td>
                      <td className="p-3.5">SMS &amp; fee levies</td>
                      <td className="p-3.5">Assess cash flow, stop minimum payments</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60 transition-colors">
                      <td className="p-3.5 font-bold text-slate-900">Days 31 - 60</td>
                      <td className="p-3.5">SMA-1</td>
                      <td className="p-3.5">Telecalling follow-ups</td>
                      <td className="p-3.5">Compile hardship records (medical, job loss)</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60 transition-colors">
                      <td className="p-3.5 font-bold text-slate-900">Days 61 - 90</td>
                      <td className="p-3.5">SMA-2</td>
                      <td className="p-3.5">Demand notices</td>
                      <td className="p-3.5">Issue anti-harassment notice, assert RBI rights</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60 transition-colors">
                      <td className="p-3.5 font-bold text-slate-900">Days 91 - 120</td>
                      <td className="p-3.5 font-semibold text-red-600">NPA</td>
                      <td className="p-3.5">15% capital provisioning</td>
                      <td className="p-3.5 font-semibold text-[#1886ff]">Submit formal hardship representation for OTS</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60 transition-colors">
                      <td className="p-3.5 font-bold text-slate-900">Days 121 - 150</td>
                      <td className="p-3.5">Settlement</td>
                      <td className="p-3.5">Committee evaluations</td>
                      <td className="p-3.5">Negotiate 40% to 55% waiver on gross dues</td>
                    </tr>
                    <tr className="divide-x divide-slate-200/80 hover:bg-slate-50/60 transition-colors">
                      <td className="p-3.5 font-bold text-slate-900">Days 151 - 180</td>
                      <td className="p-3.5 font-semibold text-emerald-600">Closure</td>
                      <td className="p-3.5">Letter execution</td>
                      <td className="p-3.5 font-semibold text-emerald-600">Remit bank payment, secure NDC in 30 days</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: Specialized Real-World Scenarios */}
            <section id="specialized-real-world-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>Case Analysis</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                10. Specialized Real-World Credit Card Settlement Scenarios
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Credit card debt emergencies require tailored legal and financial approaches across distinct scenarios:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 text-xs sm:text-sm">
                <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 flex items-center gap-1.5">
                    <CreditCard className="w-4 h-4 text-blue-600" />
                    <span>Multi-Lender Card Stacking</span>
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Borrowers with overdue balances across multiple banks face aggressive recovery. A consolidated debt defense establishes uniform insolvency evidence across all lenders, preventing piecemeal legal action while negotiating synchronized 50%+ waivers.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 flex items-center gap-1.5">
                    <Briefcase className="w-4 h-4 text-emerald-600" />
                    <span>Corporate Layoffs &amp; Salaried Loss</span>
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Salaried executives facing corporate layoffs or unemployment can present termination letters and nil-inflow bank statements. Bank credit committees readily approve single-bullet compromise settlements with complete penal interest write-offs upon documented job loss.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 flex items-center gap-1.5">
                    <Building2 className="w-4 h-4 text-purple-600" />
                    <span>Proprietorship Capital Deficits</span>
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Entrepreneurs who utilize personal credit cards to sustain business operations during downturns can substantiate financial distress through GST return filings and audited loss statements, justifying substantial commercial debt waivers before credit committees.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 flex items-center gap-1.5">
                    <ShieldAlert className="w-4 h-4 text-amber-600" />
                    <span>Debt Assigned to ARCs</span>
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    When banks write off delinquent credit card books and assign portfolios to Asset Reconstruction Companies at 15% to 30% of face value, borrowers gain substantial bargaining power to close accounts at up to 60% discounts with rapid NDC issuance.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 11: Company Profile Component */}
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
                Frequently Asked Questions on Credit Card Settlement in India
              </h2>
              <p className="text-xs md:text-sm text-slate-600">
                Click on any question below to view detailed answers verified by our debt resolution professionals:
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
                <span>Statutory Citations &amp; Legal Authorities</span>
              </div>
              <h2 className="text-base sm:text-lg font-bold text-slate-900">
                Official Regulatory Citations &amp; Judicial References
              </h2>
              <ul className="space-y-2 text-xs text-slate-600 leading-relaxed list-disc pl-5">
                <li>
                  <strong>Indian Contract Act, 1872:</strong> Section 73 (Breach of Contract &amp; Civil Remedies).
                </li>
                <li>
                  <strong>SARFAESI Act, 2002:</strong> Section 31(b) (Statutory Exclusion of Unsecured Debts).
                </li>
                <li>
                  <strong>Reserve Bank of India Master Directions:</strong> Credit Card Regulatory Framework (2026).
                </li>
                <li>
                  <strong>Credit Information Companies Regulation Act, 2005:</strong> Section 21 (Bureau Rectification).
                </li>
                <li>
                  <strong>Supreme Court of India:</strong> <em>TRF Ltd. v. Energo Engineering (2017)</em> (Arbitration Bar).
                </li>
              </ul>

              {/* 6 Outbound Authority Badges */}
              <div className="pt-4 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Official Government &amp; Regulatory Portals:</span>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  <a
                    href="https://www.rbi.org.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-[#1886ff] transition-colors border border-slate-200 flex items-center justify-between text-xs font-semibold"
                  >
                    <span>Reserve Bank of India</span>
                    <ExternalLink className="w-3 h-3 flex-shrink-0" />
                  </a>
                  <a
                    href="https://cms.rbi.org.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-[#1886ff] transition-colors border border-slate-200 flex items-center justify-between text-xs font-semibold"
                  >
                    <span>RBI CMS Portal</span>
                    <ExternalLink className="w-3 h-3 flex-shrink-0" />
                  </a>
                  <a
                    href="https://www.cibil.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-[#1886ff] transition-colors border border-slate-200 flex items-center justify-between text-xs font-semibold"
                  >
                    <span>TransUnion CIBIL</span>
                    <ExternalLink className="w-3 h-3 flex-shrink-0" />
                  </a>
                  <a
                    href="https://www.indiacode.nic.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-[#1886ff] transition-colors border border-slate-200 flex items-center justify-between text-xs font-semibold"
                  >
                    <span>India Code Portal</span>
                    <ExternalLink className="w-3 h-3 flex-shrink-0" />
                  </a>
                  <a
                    href="https://nalsa.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-[#1886ff] transition-colors border border-slate-200 flex items-center justify-between text-xs font-semibold"
                  >
                    <span>NALSA Legal Services</span>
                    <ExternalLink className="w-3 h-3 flex-shrink-0" />
                  </a>
                  <a
                    href="https://cybercrime.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-[#1886ff] transition-colors border border-slate-200 flex items-center justify-between text-xs font-semibold"
                  >
                    <span>Cyber Crime Portal</span>
                    <ExternalLink className="w-3 h-3 flex-shrink-0" />
                  </a>
                </div>
              </div>

              {/* 10 Internal Topic Badges */}
              <div className="pt-4 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Explore Related CredSettle Legal &amp; Debt Guides:</span>
                <div className="flex flex-wrap gap-2">
                  <Link href="/can-i-go-to-jail-for-credit-card-debt" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Can I Go to Jail for Credit Card Debt
                  </Link>
                  <Link href="/services/personal-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Personal Loan Settlement
                  </Link>
                  <Link href="/services/anti-harassment" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Anti-Harassment Defense
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
                  <Link href="/verify-loan-settlement-letter" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Verify Settlement Letter
                  </Link>
                  <Link href="/bank-sent-legal-notice-for-loan-what-to-do" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Bank Sent Legal Notice
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
                Specialist in civil debt dispute resolution and RBI compliance with over a decade of experience.
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

            {/* Card 2: Emergency CTA Card */}
            <div className="rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 text-white p-5 shadow-md space-y-4">
              <div className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-xs px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider text-white">
                <Lock className="w-3 h-3" />
                <span>100% CONFIDENTIAL</span>
              </div>

              <div className="space-y-1">
                <h3 className="text-base font-extrabold tracking-tight leading-snug">
                  Trapped in Credit Card Debt?
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
                  Get Free Credit Card Debt Assessment
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
            <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs p-5 space-y-3">
              <h4 className="text-xs font-black uppercase tracking-wider text-slate-800 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>CredSettle Trust Commitments</span>
              </h4>

              <ul className="space-y-2.5 text-xs text-slate-600">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Zero Upfront Risk:</strong> Performance-aligned engagement.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Direct Bank Remittance:</strong> 100% paid directly to bank.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>RBI Compliance:</strong> Statutory borrower protection.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Pan-India Representation:</strong> Protecting clients across all states.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Legal Guides */}
            <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <h4 className="font-bold text-slate-900 text-sm">Related Legal Guides</h4>
              <div className="space-y-2.5">
                <Link
                  href="/can-i-go-to-jail-for-credit-card-debt"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Can I Go to Jail for Credit Card Debt?
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Legal rights &amp; criminal myth guide &rarr;</span>
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

                <Link
                  href="/bank-recovery-agent-harassment-rules-in-hindi"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Bank Recovery Agent Rules in Hindi
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">RBI rules &amp; anti-harassment guide &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
