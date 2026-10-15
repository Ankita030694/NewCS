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

export default function PhoenixArcDebtSettlementClient() {
  const [activeId, setActiveId] = useState<string>('quick-crux');
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [mobileTocOpen, setMobileTocOpen] = useState<boolean>(false);

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
    { id: 'arc-assignment-framework', label: '1. Section 5 SARFAESI Loan Assignment' },
    { id: 'acquisition-economics', label: '2. ARC Valuation Math & 15:85 SR Model' },
    { id: 'arc-comparison-matrix', label: '3. Major ARCs in India Comparison' },
    { id: 'rbi-master-directions', label: '4. RBI Master Directions & OTS Rules' },
    { id: 'visual-blueprint', label: '5. Visual Blueprint Infographic' },
    { id: 'step-by-step-sop', label: '6. 6-Stage Phoenix ARC Settlement SOP' },
    { id: 'legal-notice-defense', label: '7. Defective Assignment & Notice Defense' },
    { id: 'escalation-matrix', label: '8. 3-Tier Grievance & Redressal Matrix' },
    { id: 'procedural-timeline', label: '9. Procedural Milestones & Timeline' },
    { id: 'specialized-scenarios', label: '10. Specialized Scenarios: Retail & MSME' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
    {
      q: 'What is Phoenix ARC and why did my bank transfer my loan to them?',
      a: 'Phoenix ARC Private Limited is an RBI-registered Asset Reconstruction Company (ARC) sponsored by the Kotak Mahindra Group. When your loan remains unpaid for over 90 days and turns into a Non-Performing Asset (NPA), banks sell the bad debt portfolio to Phoenix ARC at a steep discount under Section 5 of the SARFAESI Act, 2002 to clean up their balance sheets.'
    },
    {
      q: 'Is it legally valid for a bank to assign my loan to Phoenix ARC without my prior permission?',
      a: 'Yes. Under Section 5 of the SARFAESI Act and standard loan facility agreements, a bank can legally assign an NPA loan to a registered ARC through a registered Assignment Agreement without seeking borrower consent. However, both the selling bank and the ARC must serve a formal Notice of Assignment informing you of the transfer.'
    },
    {
      q: 'How much discount or waiver can I get in a Phoenix ARC debt settlement?',
      a: 'Because ARCs acquire retail unsecured personal loans and credit card portfolios at 15% to 35% of the total ledger value, borrowers can regularly negotiate a One-Time Settlement (OTS) with waivers ranging from 50% to 80% on the inflated claim, including a 100% waiver on penal interest and late charges.'
    },
    {
      q: 'What are the RBI Master Direction rules for settling loans with an Asset Reconstruction Company?',
      a: 'Under the RBI Master Direction on Asset Reconstruction Companies (updated 2024), every OTS must follow a Board-approved settlement policy evaluated by an Independent Advisory Committee (IAC). The ARC must examine the borrower cash flows, provide a transparent sanction letter, and release all original documents and No Dues Certificates within 30 days of full payment.'
    },
    {
      q: 'Can Phoenix ARC enforce SARFAESI property possession for an unsecured personal loan or credit card?',
      a: 'No. SARFAESI physical possession (Section 13(4) and Section 14) applies strictly to secured loans where a valid mortgage or hypothecation charge was created over an asset and registered with CERSAI. Phoenix ARC cannot seize your home or personal property for an unsecured personal loan or credit card default.'
    },
    {
      q: 'How do I verify if a Phoenix ARC settlement letter is genuine?',
      a: 'A valid Phoenix ARC settlement letter is always issued on the official letterhead showing the specific Trust Name (such as Phoenix Trust FY series), reference number, exact compromise amount, payment schedule, and authorized signatory details. You must verify the letter via the official customer grievance desk at phoenixarc.co.in before making any payment.'
    },
    {
      q: 'Who should I pay during a Phoenix ARC settlement: the original bank or Phoenix ARC?',
      a: 'Once an Assignment Deed is executed under Section 5 of the SARFAESI Act, the original bank ceases to own the debt. All settlement payments must be paid strictly into the designated Phoenix Trust escrow account mentioned in your verified OTS sanction letter via NEFT, RTGS, or demand draft, never to personal UPI IDs of collection agents.'
    },
    {
      q: 'Can I challenge a defective loan assignment to Phoenix ARC in the DRT?',
      a: 'Yes. If an ARC initiates SARFAESI recovery on a secured loan based on an unregistered or inadequately stamped Assignment Deed, or if the account was wrongly classified as an NPA prior to assignment, you can challenge the action by filing a Securitisation Application (SA) under Section 17 before the Debts Recovery Tribunal (DRT).'
    },
    {
      q: 'Will Phoenix ARC update my CIBIL report after I complete the loan settlement?',
      a: 'Yes. Registered ARCs are mandatory members of all four Credit Information Companies (CIBIL, Experian, Equifax, CRIF High Mark). Upon receiving the agreed OTS amount and issuing the No Dues Certificate, Phoenix ARC updates the account status and brings the overdue balance to zero within 30 to 45 days.'
    },
    {
      q: 'How does CredSettle assist borrowers in settling debts with Phoenix ARC and other ARCs?',
      a: 'CredSettle audits the Section 5 Assignment Deed and true acquisition cost of your loan, stops third-party recovery agent harassment under RBI Fair Practices rules, submits a financial hardship proposal to the ARC settlement committee, and negotiates deep lump-sum or structured installment waivers with guaranteed NOC verification.'
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-[#1886ff] selection:text-white">
      {/* 1. HERO SECTION (#2452ae Background) */}
      <section
        className="relative text-white pt-12 pb-10 sm:pt-14 sm:pb-11 md:pt-18 md:pb-12 px-4 sm:px-6 md:px-8 overflow-hidden flex items-center justify-center text-center"
        style={{ backgroundColor: '#2452ae' }}
      >
        <div className="absolute inset-0 bg-black/5 z-0 pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center z-10 relative w-full">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-blue-200 text-[11px] sm:text-xs font-semibold mb-3 max-w-full">
            <Landmark className="w-3.5 h-3.5 flex-shrink-0" />
            <span className="truncate sm:whitespace-normal">
              SARFAESI Section 5 Assignment &amp; RBI ARC Settlement Framework
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs break-words">
            Phoenix ARC &amp; Asset Reconstruction Company Debt Settlement
          </h1>

          <p className="text-xs sm:text-sm md:text-base lg:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed px-1">
            A complete legal and financial guide for borrowers whose personal loans, credit cards, or MSME loans have been assigned to Phoenix ARC or other Asset Reconstruction Companies. Learn how Section 5 SARFAESI assignments work, how ARCs buy bad debt at steep discounts, and how to negotiate 50% to 80% One-Time Settlement waivers.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center max-w-md sm:max-w-none mx-auto">
            <Link
              href="/contact"
              className="px-6 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Settle Your ARC Loan Today</span>
              <ArrowRight className="w-4 h-4 flex-shrink-0" />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. STATS STRIP COMPONENT */}
      <StatsStrip />

      {/* 3. WIDESCREEN 3-COLUMN LAYOUT (Fully Mobile & Tablet Responsive) */}
      <div className="w-full max-w-[1720px] mx-auto px-3 sm:px-5 md:px-8 py-6 sm:py-8 md:py-12">
        {/* MOBILE & TABLET COLLAPSIBLE TABLE OF CONTENTS (< lg screens) */}
        <div className="lg:hidden mb-6">
          <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden">
            <button
              type="button"
              onClick={() => setMobileTocOpen(!mobileTocOpen)}
              className="w-full flex items-center justify-between p-4 text-left bg-slate-50/70 hover:bg-slate-100/70 transition-colors cursor-pointer"
              aria-expanded={mobileTocOpen}
            >
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-slate-800">
                  Table of Contents &amp; Quick Jump
                </span>
              </div>
              <ChevronDown
                className={`w-4 h-4 text-slate-600 transition-transform duration-200 flex-shrink-0 ${
                  mobileTocOpen ? 'rotate-180 text-[#1886ff]' : ''
                }`}
              />
            </button>
            {mobileTocOpen && (
              <nav className="p-3 sm:p-4 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs max-h-[60vh] overflow-y-auto">
                {navLinks.map((link) => {
                  const isActive = activeId === link.id;
                  return (
                    <a
                      key={link.id}
                      href={`#${link.id}`}
                      onClick={() => setMobileTocOpen(false)}
                      className={`block py-2 px-3 rounded-lg transition-all duration-150 leading-snug ${
                        isActive
                          ? 'bg-blue-50 text-[#1886ff] font-bold border-l-3 border-[#1886ff]'
                          : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50 font-medium'
                      }`}
                    >
                      {link.label}
                    </a>
                  );
                })}
              </nav>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[240px_minmax(0,1fr)_280px] xl:grid-cols-[260px_minmax(0,1fr)_300px] 2xl:grid-cols-[280px_minmax(0,1fr)_320px] gap-6 lg:gap-5 xl:gap-6 items-start">
          
          {/* ================= LEFT COLUMN: STICKY TOC (Desktop lg+) ================= */}
          <aside className="sticky top-6 self-start hidden lg:block">
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
                  <span>RBI Registered ARC Compliance</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Governed by Section 5 SARFAESI Act 2002 and RBI Master Direction on ARCs 2024.
                </p>
              </div>
            </div>
          </aside>

          {/* ================= MIDDLE COLUMN: MAIN EDITORIAL CONTENT ================= */}
          <div className="space-y-8 md:space-y-10 min-w-0 w-full">
            
            {/* EXECUTIVE SUMMARY BOX (#F4F8FE Box) */}
            <div
              id="quick-crux"
              className="scroll-target rounded-2xl bg-[#F4F8FE] border border-blue-100/90 border-l-[5px] border-l-[#1886ff] p-4 sm:p-6 md:p-7 shadow-xs space-y-4 text-slate-800"
            >
              <div className="flex items-center gap-2 text-xs md:text-sm font-black uppercase tracking-wider text-[#1886ff]">
                <Bookmark className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                <span>EXECUTIVE BRIEF: PHOENIX ARC &amp; ASSET RECONSTRUCTION SETTLEMENT</span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Section 5 SARFAESI Assignment:</strong> Banks sell Non-Performing Assets (NPAs) to Phoenix ARC and other Asset Reconstruction Companies via a registered Deed of Assignment under Section 5 of the SARFAESI Act, 2002.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Deep Acquisition Discounts Create OTS Room:</strong> Because ARCs acquire unsecured retail portfolios at 15% to 35% of the gross ledger value, borrowers can negotiate 50% to 80% compromise waivers.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">RBI Master Direction 2024 Mandate:</strong> Every ARC settlement must be evaluated under a Board-approved OTS policy and reviewed by an Independent Advisory Committee (IAC).
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Escrow Trust Payment Protection:</strong> Never pay recovery agents on personal links. All settlement funds must go directly into the specific Phoenix Trust escrow bank account.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Mandatory 30-Day NOC &amp; Title Release:</strong> Under RBI Fair Practices rules, Phoenix ARC must issue your No Dues Certificate and release property documents within 30 days of final settlement payment.
                  </span>
                </li>
              </ul>
            </div>

            {/* SECTION 1: Section 5 SARFAESI Loan Assignment */}
            <section id="arc-assignment-framework" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                <span>Statutory Assignment Architecture</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug break-words">
                1. Section 5 SARFAESI: How Banks Assign Loans to Phoenix ARC
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Receiving a legal notice or call from Phoenix ARC Private Limited often confuses borrowers who originally took a personal loan, credit card, business loan, or mortgage from banks like HDFC Bank, Kotak Mahindra Bank, ICICI Bank, Standard Chartered, RBL Bank, or Bajaj Finance. Borrowers frequently wonder how an unknown entity can suddenly demand repayment of their bank loan.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The legal answer lies in Section 5 of the Securitisation and Reconstruction of Financial Assets and Enforcement of Security Interest (SARFAESI) Act, 2002. When a borrower misses loan EMIs for more than 90 consecutive days, the original bank classifies the account as a Non-Performing Asset (NPA). Maintaining NPAs on a bank balance sheet locks up capital through mandatory RBI provisioning and hurts bank profitability.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                To clear their books, commercial banks and NBFCs bundle thousands of defaulted retail and MSME accounts and sell them to an RBI-registered Asset Reconstruction Company (ARC) such as Phoenix ARC (backed by the Kotak Mahindra Group). This sale is executed through a formal legal instrument called a Deed of Assignment.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under Section 5(2) and Section 5(3) of the SARFAESI Act, once the Assignment Agreement is executed, Phoenix ARC legally steps into the shoes of the original lender. All rights, title, collateral securities, guarantees, and pending recovery proceedings in the Debts Recovery Tribunal (DRT) or civil courts automatically vest in Phoenix ARC acting as the trustee of a specific securitisation trust (for example, Phoenix Trust FY 24-12).
              </p>
            </section>

            {/* SECTION 2: ARC Valuation Math & 15:85 SR Model */}
            <section id="acquisition-economics" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <DollarSign className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                <span>Financial Forensics &amp; Acquisition Economics</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug break-words">
                2. ARC Valuation Math: Discounted Purchase &amp; 15:85 SR Model
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The single biggest advantage a borrower holds when negotiating a debt settlement with Phoenix ARC or any Asset Reconstruction Company is understanding the acquisition math. An ARC never buys your bad loan at 100% of its face value. Instead, it buys stressed loan pools at steep haircuts based on recovery probability, collateral quality, and vintage of default.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under RBI norms, ARCs typically acquire distressed assets either on an all-cash basis or through the 15:85 Security Receipts (SR) structure. In the 15:85 model, the ARC sets up a specific trust, pays only 15% of the agreed discounted acquisition price upfront in cash, and issues Security Receipts to the selling bank or Qualified Buyers for the remaining 85%.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                For unsecured personal loans, fintech loans, and credit card defaults, ARCs frequently purchase the portfolio at just 12% to 28% of the gross ledger claim. Even when the ARC collection notice demands 100% of the principal plus years of compounded 36% penal interest, their internal break-even cost is a fraction of that demand. This creates massive financial room for a mutually profitable One-Time Settlement (OTS).
              </p>

              {/* Representative Calculation Card */}
              <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white shadow-xs">
                <div className="bg-slate-900 text-white p-3.5 sm:p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                    <span className="font-bold text-xs sm:text-sm">
                      Representative Phoenix ARC Portfolio Valuation &amp; OTS Math
                    </span>
                  </div>
                  <span className="text-[11px] sm:text-xs text-blue-300 font-mono">
                    ₹10 Lakh Unsecured Loan Default
                  </span>
                </div>
                <div className="overflow-x-auto w-full">
                  <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[540px]">
                    <thead>
                      <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-semibold">
                        <th className="p-3">Ledger / Valuation Stage</th>
                        <th className="p-3">Amount (INR)</th>
                        <th className="p-3">Financial &amp; Legal Reality</th>
                        <th className="p-3 text-right">Borrower Impact</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200/80 text-slate-600">
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Original Principal at Default</td>
                        <td className="p-3">₹6,20,000</td>
                        <td className="p-3">Actual unpaid principal when account turned NPA.</td>
                        <td className="p-3 text-right font-semibold text-slate-800">Base Benchmark</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Inflated ARC Demand Notice</td>
                        <td className="p-3 text-rose-600 font-bold">₹10,80,000</td>
                        <td className="p-3">Includes ₹4.6L of compounded interest, bounce fees &amp; penalties.</td>
                        <td className="p-3 text-right font-bold text-rose-600">100% Waivable Charges</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Estimated ARC Acquisition Cost</td>
                        <td className="p-3 text-emerald-700 font-semibold">₹1,65,000 to ₹2,20,000</td>
                        <td className="p-3">Purchased by ARC Trust in bulk pool at ~20% of ledger claim.</td>
                        <td className="p-3 text-right font-semibold text-emerald-700">ARC Internal Cost</td>
                      </tr>
                      <tr className="bg-blue-50/70 font-bold text-slate-900">
                        <td className="p-3">Negotiated CredSettle OTS Closure</td>
                        <td className="p-3 text-[#1886ff]">₹2,75,000</td>
                        <td className="p-3 text-emerald-700">ARC earns healthy IRR; Borrower saves ₹8,05,000.</td>
                        <td className="p-3 text-right text-[#1886ff] text-sm sm:text-base">74.5% Total Waiver</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* SECTION 3: Major ARCs in India Comparison */}
            <section id="arc-comparison-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                <span>Indian ARC Ecosystem Benchmark</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug break-words">
                3. Major ARCs in India: Phoenix ARC vs Peer Reconstruction
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                While Phoenix ARC is one of the largest retail and SME bad-loan acquirers in India, several other RBI-registered Asset Reconstruction Companies actively purchase defaulted portfolios from Indian banks and NBFCs. Each ARC has a distinct sponsor pedigree, portfolio focus, and settlement approval workflow.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Knowing which ARC holds your loan allows your legal representative to approach the right resolution desk, structure the compromise proposal according to their internal Independent Advisory Committee (IAC) norms, and secure maximum waivers.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[600px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Asset Reconstruction Company</th>
                      <th className="p-3">Key Sponsor / Backing</th>
                      <th className="p-3">Primary Loan Segments</th>
                      <th className="p-3">Typical Unsecured OTS Range</th>
                      <th className="p-3">Settlement Flexibility</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr className="bg-blue-50/30">
                      <td className="p-3 font-bold text-slate-900">Phoenix ARC Pvt. Ltd.</td>
                      <td className="p-3">Kotak Mahindra Group</td>
                      <td className="p-3">Retail Personal, Cards, MSME &amp; LAP</td>
                      <td className="p-3 text-emerald-600 font-semibold">25% to 45% of Ledger</td>
                      <td className="p-3">High for lump-sum &amp; 3-6 EMI plans.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Asset Reconstruction Co. (ARCIL)</td>
                      <td className="p-3">Avenue Capital, SBI, ICICI, PNB</td>
                      <td className="p-3">Home Loans, Retail, Corporate &amp; SME</td>
                      <td className="p-3 text-emerald-600 font-semibold">30% to 50% of Ledger</td>
                      <td className="p-3">Structured OTS schemes &amp; Lok Adalat.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Encore Asset Reconstruction (EARC)</td>
                      <td className="p-3">Encore Capital Group (USA)</td>
                      <td className="p-3">Credit Cards, Personal &amp; Small Business</td>
                      <td className="p-3 text-emerald-600 font-semibold">20% to 40% of Ledger</td>
                      <td className="p-3">Very high on aged unsecured debt.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Edelweiss ARC (EARC)</td>
                      <td className="p-3">Edelweiss Financial &amp; CDPQ</td>
                      <td className="p-3">Corporate, Real Estate, LAP &amp; Retail</td>
                      <td className="p-3 text-amber-600 font-semibold">35% to 55% of Ledger</td>
                      <td className="p-3">IAC committee driven cash-flow OTS.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">JM Financial ARC</td>
                      <td className="p-3">JM Financial Group</td>
                      <td className="p-3">MSME, Commercial, Hospitality &amp; Retail</td>
                      <td className="p-3 text-amber-600 font-semibold">35% to 55% of Ledger</td>
                      <td className="p-3">Strong focus on collateral valuation.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Pridhvi / Pegasus / Rare ARC</td>
                      <td className="p-3">Institutional &amp; Private Equity</td>
                      <td className="p-3">Regional Bank NPAs, MSME &amp; Agriculture</td>
                      <td className="p-3 text-emerald-600 font-semibold">30% to 50% of Ledger</td>
                      <td className="p-3">Rapid resolution via one-time payouts.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 4: RBI Master Directions & Board OTS Rules */}
            <section id="rbi-master-directions" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                <span>Reserve Bank of India Regulatory Mandate</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug break-words">
                4. RBI Master Directions: Fair Practices &amp; Board OTS Rules
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Asset Reconstruction Companies do not operate above the law. Under Section 3, Section 9, and Section 12 of the SARFAESI Act, the Reserve Bank of India regulates every aspect of ARC governance through the Master Direction - Reserve Bank of India (Asset Reconstruction Companies) Directions, 2024.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under Paragraph 15 of the RBI Master Directions, every ARC is legally required to frame a transparent, non-discriminatory, Board-approved policy for the settlement of dues payable by borrowers. For large or complex accounts, settlement proposals must be vetted by an Independent Advisory Committee (IAC) consisting of technical, finance, and legal experts before approval by the Board or designated committee.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Furthermore, the RBI Fair Practices Code for ARCs imposes strict conduct rules:
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed list-disc pl-5">
                <li>
                  <strong>Mandatory Notice of Assignment:</strong> The ARC must formally notify the borrower of the loan acquisition, specifying the Trust name, outstanding principal, interest breakdown, and grievance officer contact details.
                </li>
                <li>
                  <strong>Prohibition of Coercive Recovery:</strong> ARCs and their empaneled recovery agencies are strictly barred from calling before 8:00 AM or after 7:00 PM, contacting family members or employers, or using abusive language.
                </li>
                <li>
                  <strong>Vicarious Liability for Agents:</strong> Under RBI outsourcing guidelines, Phoenix ARC is directly accountable for the actions of any third-party tele-calling agency or field agent it engages.
                </li>
                <li>
                  <strong>30-Day Release of Documents:</strong> Under the RBI Responsible Lending Conduct directions, once a borrower pays the agreed OTS amount, the ARC must return all original movable and immovable property documents and remove charges within 30 days, failing which the lender must pay ₹5,000 per day in compensation to the borrower.
                </li>
              </ul>
            </section>

            {/* SECTION 5: Visual Blueprint Infographic */}
            <section id="visual-blueprint" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Sparkles className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                <span>Visual Blueprint</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug break-words">
                5. Visual Blueprint: Phoenix ARC Debt Settlement Workflow
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This visual blueprint illustrates how defaulted bank loans are transferred to Phoenix ARC under Section 5 of the SARFAESI Act, how the RBI Fair Practices shield protects borrowers, and how a structured One-Time Settlement delivers up to 80% debt relief.
              </p>

              <div className="bg-white p-3 sm:p-5 md:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-slate-100 bg-slate-100">
                  <Image
                    src="/images/infographics/phoenix-arc-asset-reconstruction-company-debt-settlement.jpg"
                    alt="Phoenix ARC and Asset Reconstruction Company Debt Settlement Legal Blueprint"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 900px"
                    className="object-contain hover:scale-[1.01] transition-transform duration-300"
                    priority
                  />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-500 pt-1 gap-2">
                  <span>Official CredSettle ARC Resolution Framework • Section 5 SARFAESI &amp; RBI Master Direction Compliant</span>
                  <a
                    href="/images/infographics/phoenix-arc-asset-reconstruction-company-debt-settlement.jpg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1886ff] hover:underline font-bold inline-flex items-center gap-1"
                  >
                    <span>View High-Resolution Blueprint</span>
                    <ExternalLink className="w-3.5 h-3.5 flex-shrink-0" />
                  </a>
                </div>
              </div>
            </section>

            {/* SECTION 6: Step-by-Step SOP (6 Stages) */}
            <section id="step-by-step-sop" className="scroll-target space-y-6">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                <span>Standard Operating Procedure</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug break-words">
                6. Step-by-Step SOP: 6-Stage Phoenix ARC Settlement Protocol
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Never negotiate verbally with third-party tele-callers who claim to represent Phoenix ARC without verifying the underlying trust assignment. Follow this six-stage legal protocol to settle your ARC loan safely and permanently.
              </p>

              <div className="space-y-4">
                <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2.5">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black flex-shrink-0">1</span>
                    <span>Stage 1: Demand &amp; Audit the Section 5 Assignment Intimation</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Request the formal Notice of Assignment showing the exact date the original bank transferred your loan, the registered Assignment Deed reference, the specific Phoenix Trust name (e.g., Phoenix Trust FY 23-8), and the breakup of principal versus penal interest at the date of NPA.
                  </p>
                </div>

                <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2.5">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black flex-shrink-0">2</span>
                    <span>Stage 2: Channel Communications &amp; Stop Field Harassment</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Serve a legal representation notice to Phoenix ARC informing them of your authorized legal counsel. Under the RBI Fair Practices Code, demand that all collection agencies cease workplace or family calls and route all correspondence in writing.
                  </p>
                </div>

                <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2.5">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black flex-shrink-0">3</span>
                    <span>Stage 3: Submit Documented Hardship &amp; Cash-Flow Dossier</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Prepare a formal One-Time Settlement (OTS) proposal backed by verifiable hardship proof such as termination letters, salary cuts, medical bills, or GST closure returns. Present a realistic offer anchored near the estimated acquisition cost of the loan.
                  </p>
                </div>

                <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2.5">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black flex-shrink-0">4</span>
                    <span>Stage 4: Negotiate with the ARC Resolution Officer &amp; Committee</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Bypass low-level call centers and negotiate directly with the Phoenix ARC Zonal Resolution Officer. Demand a 100% waiver on post-NPA penal interest, legal expenses, and bounce charges, plus a deep haircut on the base principal.
                  </p>
                </div>

                <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2.5">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black flex-shrink-0">5</span>
                    <span>Stage 5: Forensic Verification of the Official OTS Sanction Letter</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Before paying a single rupee, verify the official Phoenix ARC OTS Sanction Letter. Confirm that it contains the exact loan account number, full and final settlement clause, withdrawal of pending Section 138 or arbitration cases, and official trust escrow bank details.
                  </p>
                </div>

                <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2.5">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black flex-shrink-0">6</span>
                    <span>Stage 6: Escrow Remittance, NDC Collection &amp; Bureau Update</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Transfer the settlement amount strictly via NEFT, RTGS, or Demand Draft to the designated Phoenix Trust escrow account. Collect your formal No Dues Certificate (NDC) within 30 days and verify that CIBIL reflects zero balance due.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: Defective Assignment & Legal Notice Defense */}
            <section id="legal-notice-defense" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <ShieldCheck className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                <span>Litigation &amp; DRT Defense Grounds</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug break-words">
                7. Challenging Defective Assignment Deeds &amp; Section 13(2)
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When an Asset Reconstruction Company acquires a secured loan (such as a Home Loan, Loan Against Property, or hypothecated MSME facility) or initiates legal proceedings, procedural defects frequently arise during the bulk transfer from the bank. Borrowers can challenge unlawful ARC enforcement on four strong statutory grounds.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                    <Gavel className="w-4 h-4 flex-shrink-0" />
                    <span>Unregistered or Unstamped Assignment Deed</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under the Registration Act, 1908 and state Stamp Acts, an Assignment Deed transferring immovable mortgage rights must be validly stamped and registered. An unregistered assignment deed cannot confer valid enforcement standing in the DRT.
                  </p>
                </div>

                <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                    <Building2 className="w-4 h-4 flex-shrink-0" />
                    <span>Wrongful Pre-Assignment NPA Classification</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    An ARC can only acquire a valid Non-Performing Asset under Section 5. If the original bank classified the account as NPA in violation of the RBI 90-day IRAC norms or MSME restructuring mandates, the entire assignment and subsequent Section 13(2) notice can be challenged under Section 17.
                  </p>
                </div>

                <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-purple-700 font-bold text-sm">
                    <Scale className="w-4 h-4 flex-shrink-0" />
                    <span>Time-Barred Debt under Limitation Act</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    ARCs often buy "dead ledger" unsecured loans that have been in default for over 4 to 7 years. Under Article 19 and Article 113 of the Limitation Act, 1963, the limitation period for filing a civil recovery suit for an unsecured loan is 3 years from the last acknowledgment or payment.
                  </p>
                </div>

                <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <ShieldCheck className="w-4 h-4 flex-shrink-0" />
                    <span>Non-Registration of Charge with CERSAI</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under Section 26D of the SARFAESI Act, no secured creditor or ARC is entitled to exercise rights of enforcement under Chapter III unless the security interest created in its favor has been duly registered with the Central Registry (CERSAI).
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 8: 3-Tier Escalation Matrix */}
            <section id="escalation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                <span>Statutory Escalation Protocol</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug break-words">
                8. 3-Tier Escalation Matrix: Phoenix ARC Grievance Redressal
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If recovery agents employed by Phoenix ARC or another Asset Reconstruction Company engage in intimidation, refuse to share the Notice of Assignment, or delay your No Dues Certificate after settlement, escalate your complaint through this mandatory three-tier regulatory matrix.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[540px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Escalation Tier</th>
                      <th className="p-3">Designated Redressal Authority</th>
                      <th className="p-3">Resolution Timeline</th>
                      <th className="p-3">Scope of Regulatory Relief</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Tier 1: ARC GRO</td>
                      <td className="p-3">Grievance Redressal Cell (Phoenix ARC Mumbai HQ)</td>
                      <td className="p-3 font-mono">7 to 15 Working Days</td>
                      <td className="p-3">Verifies assignment trust details, halts rogue collection calls, and assigns a resolution officer.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Tier 2: Principal Nodal Officer</td>
                      <td className="p-3">Senior Compliance &amp; Nodal Officer of the ARC</td>
                      <td className="p-3 font-mono">15 to 30 Working Days</td>
                      <td className="p-3">Investigates Fair Practices Code breaches, reviews rejected OTS hardship proposals, and releases delayed NOCs.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Tier 3: RBI / CEPC</td>
                      <td className="p-3">RBI Integrated Ombudsman &amp; CEPC Portal (cms.rbi.org.in)</td>
                      <td className="p-3 font-mono">30 Days Post-Escalation</td>
                      <td className="p-3">Investigates violations of RBI Master Directions on ARCs, imposes supervisory penalties, and orders compensation.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 9: Procedural Timeline Table */}
            <section id="procedural-timeline" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Clock className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                <span>Procedural Milestones</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug break-words">
                9. Procedural Timeline: Bank NPA to ARC Closure Milestones
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Tracking the exact lifecycle of your loan from initial bank default to ARC assignment helps you time your One-Time Settlement offer for maximum waiver leverage.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[540px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Timeline Stage</th>
                      <th className="p-3">Legal &amp; Regulatory Status</th>
                      <th className="p-3">Lender / ARC Action</th>
                      <th className="p-3">Optimal Borrower Strategy</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 1 to 90</td>
                      <td className="p-3 font-mono text-[11px]">SMA-0 / SMA-1 / SMA-2</td>
                      <td className="p-3">Original bank sends EMI bounce alerts and collection reminders.</td>
                      <td className="p-3">Communicate hardship in writing; avoid taking fresh high-cost bridge loans.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 91 to 180</td>
                      <td className="p-3 font-mono text-[11px] text-amber-700 font-bold">Bank NPA Tagging</td>
                      <td className="p-3">Account classified as Sub-Standard NPA; legal recall notices issued.</td>
                      <td className="p-3">Audit principal vs penal charges; evaluate bank OTS or prepare for portfolio sale.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Month 6 to 18</td>
                      <td className="p-3 font-mono text-[11px]">Section 5 SARFAESI Sale</td>
                      <td className="p-3">Bank sells stressed pool to Phoenix ARC via registered Assignment Deed.</td>
                      <td className="p-3">Demand official Notice of Assignment and verify the specific Phoenix Trust name.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Post-Assignment Window</td>
                      <td className="p-3 font-mono text-[11px] text-[#1886ff] font-bold">Prime ARC OTS Window</td>
                      <td className="p-3">Phoenix ARC initiates recovery contact to realize quick cash IRR on its 15% outlay.</td>
                      <td className="p-3 font-bold text-slate-900">Engage CredSettle to negotiate a 50% to 80% OTS waiver directly with ARC officers.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Sanction + 15 Days</td>
                      <td className="p-3 font-mono text-[11px]">OTS Escrow Settlement</td>
                      <td className="p-3">ARC issues formal OTS Sanction Letter with Trust bank account details.</td>
                      <td className="p-3">Verify sanction letter authenticity and remit compromise funds via NEFT/RTGS.</td>
                    </tr>
                    <tr className="bg-emerald-50/40">
                      <td className="p-3 font-bold text-slate-900">Within 30 Days of Payment</td>
                      <td className="p-3 font-mono text-[11px] text-emerald-700 font-bold">Final Closure &amp; NDC</td>
                      <td className="p-3">ARC issues No Dues Certificate, releases collateral, and updates CIBIL.</td>
                      <td className="p-3">Archive NDC permanently and initiate post-settlement CIBIL score rebuilding.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: Specialized Real-World Scenarios */}
            <section id="specialized-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                <span>Specialized Scenarios</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug break-words">
                10. Specialized Scenarios: Kotak, Retail Cards &amp; MSME NPAs
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Different loan categories assigned to Phoenix ARC and peer reconstruction companies require tailored legal and financial resolution strategies.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                    <span>Credit Card &amp; Personal Loan Pools Sold to Phoenix Trust</span>
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Private banks regularly assign written-off credit card and personal loan portfolios to Phoenix ARC. Because these debts are completely unsecured and carry inflated 42% annualized card interest, CredSettle frequently secures lump-sum waivers of 65% to 80% off the claimed ledger balance.
                  </p>
                </div>

                <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Secured MSME &amp; Loan Against Property (LAP) Assignments</span>
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    When a secured business loan or LAP account is assigned to an ARC, the ARC often issues a Section 13(2) or Section 13(4) SARFAESI notice. We audit the property valuation and CERSAI registration, file defensive representations, and negotiate an IAC-approved OTS that releases your property title deeds cleanly.
                  </p>
                </div>

                <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0" />
                    <span>NBFC &amp; Digital Fintech Loans Assigned to ARCs</span>
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    App-based lenders and consumer NBFCs frequently offload defaulted small-ticket personal loans to ARCs. Borrowers often face aggressive tele-calling on old debts. We enforce RBI Fair Practices compliance and close these accounts for a fraction of the principal.
                  </p>
                </div>

                <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-indigo-600 flex-shrink-0" />
                    <span>Pending Section 138 / Section 25 Cases After Assignment</span>
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If the original bank filed a Section 138 cheque bounce or Section 25 PASA electronic mandate case before assigning the loan, Phoenix ARC steps in as the complainant. Our legal team ensures that your OTS Sanction Letter explicitly mandates formal compounding and withdrawal of all court cases.
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
                <HelpCircle className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                <span>Direct Answers</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug break-words">
                Frequently Asked Questions: Phoenix ARC Debt Settlement
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Verified legal and financial answers to the most important questions borrowers ask when settling loans with Phoenix ARC and other Asset Reconstruction Companies in India.
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
                <BookOpen className="w-4 h-4 flex-shrink-0" />
                <span>Statutory Citations &amp; Legal Authorities</span>
              </div>
              <h2 className="text-base sm:text-lg font-bold text-slate-900 break-words">
                Official Regulatory Citations &amp; Statutory Legal Framework
              </h2>
              <ul className="space-y-2 text-xs text-slate-600 leading-relaxed list-disc pl-5">
                <li>
                  <strong>SARFAESI Act, 2002 (Section 5):</strong> Acquisition of Rights or Interest in Financial Assets by Asset Reconstruction Companies via Registered Assignment Agreements.
                </li>
                <li>
                  <strong>RBI Master Direction on Asset Reconstruction Companies, 2024:</strong> Updated Regulatory Framework Governing ARC Governance, Independent Advisory Committees (IAC), Settlement of Dues, and Fair Practices Code.
                </li>
                <li>
                  <strong>RBI Circular on Framework for Compromise Settlements (June 2023):</strong> Board-Approved Policies for One-Time Settlements and Technical Write-Offs Across Regulated Entities.
                </li>
                <li>
                  <strong>RBI Responsible Lending Conduct Directions (2023):</strong> Mandatory Release of Movable and Immovable Property Documents and No Dues Certificates Within 30 Days of Full Settlement.
                </li>
                <li>
                  <strong>Credit Information Companies (Regulation) Act, 2005:</strong> Mandatory Credit Bureau Reporting and Post-Settlement Balance Rectification by Registered ARCs.
                </li>
              </ul>

              {/* 6 Outbound Authority Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Verified Government &amp; Regulatory Portals:</span>
                <div className="flex flex-wrap gap-2">
                  <a href="https://www.rbi.org.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>Reserve Bank of India</span>
                    <ExternalLink className="w-3 h-3 flex-shrink-0" />
                  </a>
                  <a href="https://cms.rbi.org.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>RBI Integrated Ombudsman</span>
                    <ExternalLink className="w-3 h-3 flex-shrink-0" />
                  </a>
                  <a href="https://drt.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>Debts Recovery Tribunal (e-DRT)</span>
                    <ExternalLink className="w-3 h-3 flex-shrink-0" />
                  </a>
                  <a href="https://www.cersai.org.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>CERSAI Central Registry</span>
                    <ExternalLink className="w-3 h-3 flex-shrink-0" />
                  </a>
                  <a href="https://www.indiacode.nic.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>India Code Statutory Repository</span>
                    <ExternalLink className="w-3 h-3 flex-shrink-0" />
                  </a>
                  <a href="https://nalsa.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>National Legal Services Authority</span>
                    <ExternalLink className="w-3 h-3 flex-shrink-0" />
                  </a>
                </div>
              </div>

              {/* 12 Internal Topic Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Explore Related CredSettle Guides:</span>
                <div className="flex flex-wrap gap-2">
                  <Link href="/best-lawyer-for-arc-loan-assignment-dispute" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    ARC Loan Assignment Dispute
                  </Link>
                  <Link href="/best-lawyer-to-challenge-loan-assignment-to-arc" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Challenge Loan Assignment to ARC
                  </Link>
                  <Link href="/sarfaesi-act-section-13-2-notice-stop-auction" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    SARFAESI Section 13(2) Notice Defense
                  </Link>
                  <Link href="/sarfaesi-section-14-physical-possession-order-dm-cmm" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    SARFAESI Section 14 Possession Stay
                  </Link>
                  <Link href="/rbi-circular-on-loan-settlement-ots" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    RBI OTS Settlement Circular
                  </Link>
                  <Link href="/verify-loan-settlement-letter" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Verify Loan Settlement Letter
                  </Link>
                  <Link href="/get-noc-after-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Get NOC After Loan Settlement
                  </Link>
                  <Link href="/rbi-guidelines-on-penal-charges-in-loan-accounts" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    RBI Penal Charges Guidelines
                  </Link>
                  <Link href="/loan-settlement/kotak" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Kotak Bank Loan Settlement
                  </Link>
                  <Link href="/services/personal-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Personal Loan Settlement
                  </Link>
                  <Link href="/services/credit-card-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Credit Card Settlement
                  </Link>
                  <Link href="/stop-recovery-agent-harassment" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Stop Recovery Agent Harassment
                  </Link>
                </div>
              </div>
            </section>

          </div>

          {/* ================= RIGHT COLUMN: STICKY SIDEBAR ================= */}
          <aside className="space-y-5 sticky top-6 self-start w-full">
            
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
                Specialist in SARFAESI Section 5 loan assignments, Asset Reconstruction Company (ARC) portfolio valuation audits, DRT litigation defense, and structured One-Time Settlements across retail and MSME loans.
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
              className="rounded-3xl p-5 sm:p-6 text-white text-center space-y-4 shadow-md relative overflow-hidden"
              style={{ backgroundColor: '#2452ae' }}
            >
              <div className="space-y-1 text-center">
                <span className="text-xs font-black uppercase tracking-wider text-blue-200 bg-white/10 px-3 py-1 rounded-full inline-block mb-1">
                  ARC RESOLUTION DESK
                </span>
                <p className="text-lg md:text-xl font-bold text-white leading-snug">
                  Loan Assigned to Phoenix ARC or Another ARC?
                </p>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our ARC resolution specialists verify your Section 5 Trust Assignment, stop third-party agent harassment, and negotiate 50% to 80% OTS waivers directly with ARC committees.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Request ARC Settlement Audit
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
                  <span>RBI Compliant • 100% Confidential</span>
                </div>
              </div>
            </div>

            {/* Card 3: CredSettle Trust Badges */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">The CredSettle ARC Shield</p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Assignment Deed Audit:</strong> Verify Section 5 SARFAESI trust ownership.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Deep Acquisition Waivers:</strong> Negotiate 50% to 80% OTS discounts.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Sanction Letter Verification:</strong> 100% escrow payment safety check.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Guaranteed 30-Day NDC:</strong> Official closure &amp; CIBIL zero-balance update.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">Related Legal Guides</p>
              <div className="space-y-2.5">
                <Link
                  href="/best-lawyer-for-arc-loan-assignment-dispute"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    ARC Loan Assignment Dispute Defense
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Challenge defective assignments &rarr;</span>
                </Link>

                <Link
                  href="/sarfaesi-act-section-13-2-notice-stop-auction"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    SARFAESI Section 13(2) Notice Defense
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">60-day objection &amp; stay guide &rarr;</span>
                </Link>

                <Link
                  href="/verify-loan-settlement-letter"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    How to Verify a Loan Settlement Letter
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Spot fake OTS letters before paying &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
