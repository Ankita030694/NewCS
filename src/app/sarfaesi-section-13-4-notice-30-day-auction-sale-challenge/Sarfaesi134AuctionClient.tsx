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
  Landmark,
  Home,
  ShieldAlert,
  BadgePercent,
  Hammer
} from 'lucide-react';

export default function Sarfaesi134AuctionClient() {
  const [activeId, setActiveId] = useState<string>('executive-brief');
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
    { id: 'executive-brief', label: 'Executive Brief & Legal Crux' },
    { id: 'statutory-framework', label: '1. Section 13(4) Statutory Framework' },
    { id: 'mandatory-preconditions', label: '2. Mandatory Pre-Conditions for 13(4)' },
    { id: 'rule-8-rule-9-auction', label: '3. 30-Day Auction Notice: Rule 8 & 9' },
    { id: 'top-grounds-challenge', label: '4. Top Grounds to Challenge in DRT' },
    { id: 'supreme-court-precedents', label: '5. Supreme Court Precedents: Celir LLP' },
    { id: 'visual-blueprint', label: '6. Visual Blueprint Infographic' },
    { id: 'step-by-step-sop', label: '7. 6-Stage Defense Against Auction Sale' },
    { id: 'drt-sa-filing-protocol', label: '8. Securitisation Application (SA) in DRT' },
    { id: 'escalation-matrix', label: '9. 3-Tier Escalation Matrix' },
    { id: 'procedural-timeline', label: '10. Procedural Milestones & Timeline' },
    { id: 'specialized-scenarios', label: '11. Specialized Scenarios: Agricultural Land' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
    {
      q: 'What is a SARFAESI Section 13(4) notice?',
      a: 'A Section 13(4) notice is a legal measure taken by a secured creditor (bank or NBFC) after a borrower fails to pay dues within 60 days of a Section 13(2) notice. It allows the bank to take symbolic possession, manage, or auction the mortgaged secured asset.'
    },
    {
      q: 'Can a bank auction my property without serving a 30-day notice?',
      a: 'No. Under Rule 8(6) and Rule 9(1) of the Security Interest (Enforcement) Rules, 2002, the bank must serve an individual 30-day notice of sale to the borrower and publish a 30-day public notice before conducting the first auction.'
    },
    {
      q: 'Where can a borrower challenge a Section 13(4) notice or auction sale?',
      a: 'Borrowers can challenge Section 13(4) possession notices and auction sales by filing a Securitisation Application (SA) under Section 17(1) of the SARFAESI Act before the jurisdictional Debt Recovery Tribunal (DRT) within 45 days.'
    },
    {
      q: 'What happens if the bank does not reply to my Section 13(3A) objection?',
      a: 'Under Section 13(3A), the secured creditor must consider the borrower representation and communicate reasons for rejection within 15 days. Failure to do so invalidates any subsequent Section 13(4) measures and auction notices in the DRT.'
    },
    {
      q: 'Can a borrower stop an auction by paying the outstanding dues?',
      a: 'Yes. Under Section 13(8) as amended in 2016 and upheld by the Supreme Court in Celir LLP, the borrower can exercise the right of redemption by paying full dues before the date of publication of the auction sale notice in newspapers.'
    },
    {
      q: 'What is the time limit for filing an appeal before the DRT under Section 17?',
      a: 'A Securitisation Application (SA) under Section 17(1) must be filed within 45 days from the date on which the Section 13(4) measure or auction notice was served or published.'
    },
    {
      q: 'Can a bank auction agricultural land under the SARFAESI Act?',
      a: 'No. Section 31(i) of the SARFAESI Act completely exempts agricultural land from SARFAESI proceedings. Any notice or auction of agricultural property is illegal and can be quashed immediately by the DRT or High Court.'
    },
    {
      q: 'What happens if the successful auction bidder fails to deposit the bid amount?',
      a: 'Under Rule 9(3) and Rule 9(4), the bidder must deposit 25% of the bid amount on the same day or next working day, and the remaining 75% within 15 days. Failure forfeits the initial deposit and renders the sale null and void.'
    },
    {
      q: 'Can a borrower negotiate a One-Time Settlement (OTS) after Section 13(4) notice?',
      a: 'Yes. Lenders often prefer a guaranteed compromise settlement over uncertain and costly DRT litigation. CredSettle negotiates substantial waivers on penal interest and legal costs to resolve the loan through an official OTS.'
    },
    {
      q: 'Can High Courts grant stay on SARFAESI Section 13(4) auctions under Article 226?',
      a: 'The Supreme Court in Satyawati Tondon and Mathew Philip held that High Courts should rarely entertain writ petitions when an efficacious statutory remedy exists before the DRT under Section 17, except under rare jurisdictional defects or fraud.'
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-blue-200 text-xs font-semibold mb-3">
            <Landmark className="w-3.5 h-3.5" />
            <span>Secured Loan Default &amp; Property Auction Legal Shield</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Challenge SARFAESI Section 13(4) Notice &amp; 30-Day Auction
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            A comprehensive legal guide for property owners and borrowers facing bank foreclosure. Learn how to challenge Section 13(4) possession notices, enforce mandatory 30-day auction rules, file Securitisation Applications in DRT, and save your property.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Protect Your Property Now</span>
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
                  <span>Statutory DRT Protection Shield</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Enforce Rule 8 &amp; 9 of Security Interest Rules and Section 17 DRT stay remedies.
                </p>
              </div>
            </div>
          </aside>

          {/* ================= MIDDLE COLUMN: MAIN EDITORIAL CONTENT ================= */}
          <div className="space-y-8 md:space-y-10 min-w-0">
            
            {/* EXECUTIVE SUMMARY BOX (#F4F8FE Box) */}
            <div
              id="executive-brief"
              className="scroll-target rounded-2xl bg-[#F4F8FE] border border-blue-100/90 border-l-[5px] border-l-[#1886ff] p-5 sm:p-6 md:p-7 shadow-xs space-y-4 text-slate-800"
            >
              <div className="flex items-center gap-2 text-xs md:text-sm font-black uppercase tracking-wider text-[#1886ff]">
                <Bookmark className="w-4 h-4 text-[#1886ff]" />
                <span>EXECUTIVE BRIEF: SARFAESI SECTION 13(4) &amp; AUCTION SALE DEFENSE</span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Mandatory Pre-Condition Compliance:</strong> Banks cannot issue a Section 13(4) possession notice without properly considering and rejecting borrower Section 13(3A) objections with reasoned communication within 15 days.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Strict 30-Day Clear Notice Rule:</strong> Under Rule 8(6) and Rule 9(1), the lender must serve an individual 30-day notice to the borrower and publish a public notice with 30 clear days gap before the first auction.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Right to Appeal Before DRT:</strong> Borrowers have a statutory right under Section 17(1) to file a Securitisation Application (SA) before the Debt Recovery Tribunal within 45 days of any Section 13(4) measure.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Right of Redemption Timeline:</strong> Following the 2016 amendment and Supreme Court ruling in Celir LLP, the right of redemption under Section 13(8) is available only until the auction notice publication date.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">OTS Compromise Opportunity:</strong> Challenging procedural flaws in DRT creates strong legal leverage to negotiate an affordable One-Time Settlement (OTS) with substantial interest and penalty waivers.
                  </span>
                </li>
              </ul>
            </div>

            {/* SECTION 1: Statutory Framework & Bank Possession Powers */}
            <section id="statutory-framework" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Enactments &amp; Enforcement Powers</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. Section 13(4) Statutory Framework &amp; Bank Possession Powers
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The Securitisation and Reconstruction of Financial Assets and Enforcement of Security Interest (SARFAESI) Act, 2002 grants secured lenders extraordinary powers to recover secured debts without court intervention. However, these powers are strictly conditional. A bank cannot bypass statutory safeguards established to protect borrowers from arbitrary dispossession.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When a borrower defaults on a home loan, commercial property loan, or mortgaged business credit line, the bank first classifies the account as a Non-Performing Asset (NPA). Next, the bank issues a 60-day demand notice under Section 13(2). If the borrower fails to pay the full demanded sum within 60 days, Section 13(4) empowers the secured creditor to take enforcement recourse.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under Section 13(4) of the SARFAESI Act, the bank may take four specific recovery measures:
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed list-disc pl-5">
                <li>
                  <strong>Section 13(4)(a):</strong> Take possession of the secured assets of the borrower, including the right to transfer by way of lease, assignment, or sale for realising the secured asset.
                </li>
                <li>
                  <strong>Section 13(4)(b):</strong> Take over the management of the business of the borrower, including the right to transfer by lease or sale, subject to central government conditions.
                </li>
                <li>
                  <strong>Section 13(4)(c):</strong> Appoint any person as manager to manage the secured assets whose possession has been taken over by the secured creditor.
                </li>
                <li>
                  <strong>Section 13(4)(d):</strong> Direct any person who has acquired any of the secured assets from the borrower or who owes money to the borrower to pay the bank directly.
                </li>
              </ul>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                In practice, banks overwhelmingly rely on Section 13(4)(a). They typically begin by taking symbolic possession under Rule 8(1) of the Security Interest (Enforcement) Rules, 2002. Later, they proceed toward public e-auction or apply to the District Magistrate under Section 14 for actual physical takeover.
              </p>
            </section>

            {/* SECTION 2: Mandatory Pre-Conditions for 13(4) Notice */}
            <section id="mandatory-preconditions" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <ShieldAlert className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Compliance &amp; Mandatory Prerequisites</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. Mandatory Pre-Conditions Before Issuing Section 13(4) Notice
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The powers under Section 13(4) are drastic. Because of this, the Parliament and the Supreme Court have created rigorous mandatory conditions that the bank must fulfill. If the bank skips even one procedural step, the entire recovery action becomes legally invalid.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                First, the loan account must be classified as an NPA strictly under RBI prudential guidelines. A premature or arbitrary NPA declaration during a valid restructuring request, interest moratorium, or without continuous 90-day overdue status violates RBI regulations.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Second, the bank must serve a valid Section 13(2) demand notice giving 60 clear days to discharge liabilities. The notice must specify the exact amount due, break up the principal and interest charges, and describe the mortgaged assets in precise detail.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Third, and most importantly, under Section 13(3A), the borrower has the statutory right to raise objections or make representations against the 13(2) demand. The bank must consider the representation with an open mind. If the bank rejects the objection, it must communicate reasons within 15 days of receiving the representation. Failure to communicate reasons invalidates subsequent Section 13(4) measures under the landmark Supreme Court ruling in Mardia Chemicals.
              </p>

              {/* Representative Calculation Card */}
              <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white shadow-xs">
                <div className="bg-slate-900 text-white p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                    <span className="font-bold text-sm">Representative Ledger Audit: Inflated Claim vs OTS Resolution</span>
                  </div>
                  <span className="text-xs text-blue-300 font-mono">₹1.85 Crore Total Bank Ledger Demand</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80">
                    <thead>
                      <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-semibold">
                        <th className="p-3">Claim Component / Property Valuation</th>
                        <th className="p-3">Bank Claim Amount</th>
                        <th className="p-3">Legal Audit &amp; Procedural Flaw Found</th>
                        <th className="p-3 text-right">Adjusted / Settled Outcome</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200/80 text-slate-600">
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Original Principal Sanction Outstanding</td>
                        <td className="p-3">₹95,00,000</td>
                        <td className="p-3 text-emerald-600 font-semibold">Verified Principal Base</td>
                        <td className="p-3 text-right font-bold text-slate-900">₹95,00,000 (Base Debt)</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Compounded Penal Charges &amp; Legal Costs</td>
                        <td className="p-3 text-rose-600 font-semibold">₹48,50,000</td>
                        <td className="p-3 text-rose-600 font-semibold">Unlawful Penal Capitalisation (RBI Violation)</td>
                        <td className="p-3 text-right font-bold text-emerald-700">₹0 (100% Penal Waiver)</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Property Fair Market Value vs Reserve Price</td>
                        <td className="p-3 text-amber-600">₹1,10,00,000 (Reserve)</td>
                        <td className="p-3 text-amber-600">Depressed Valuation: True Value is ₹2.25 Crore</td>
                        <td className="p-3 text-right font-bold text-blue-700">Fair Value Restored</td>
                      </tr>
                      <tr className="bg-blue-50/70 font-bold text-slate-900">
                        <td className="p-3">Final Negotiated Compromise (OTS Deal)</td>
                        <td className="p-3 text-slate-900">₹1,85,00,000 Total Dues</td>
                        <td className="p-3 text-emerald-700">47% Debt Reduction After DRT Stay Order</td>
                        <td className="p-3 text-right text-[#1886ff] text-sm sm:text-base">₹98,00,000 (Property Saved)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* SECTION 3: The 30-Day Auction Notice: Security Interest Rule 8 & Rule 9 */}
            <section id="rule-8-rule-9-auction" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Hammer className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Auction Procedure &amp; Security Interest Rules</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. The 30-Day Auction Notice: Security Interest Rule 8 &amp; Rule 9
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When a bank decides to sell mortgaged immovable property, it must strictly follow the Security Interest (Enforcement) Rules, 2002. The law does not permit banks to conduct private, rushed, or unnotified sales. Every borrower is entitled to full procedural transparency.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The auction framework rests on two foundational rules: Rule 8 and Rule 9. Here is what the law mandates at each step:
              </p>

              <div className="space-y-4">
                <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 flex items-center gap-2">
                    <FileText className="w-4 h-4 text-[#1886ff]" />
                    <span>Rule 8(5): Independent Valuation and Reserve Price</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Before conducting a sale, the authorized officer must obtain a valuation report from an approved valuer. In consultation with the secured creditor, the officer must fix a realistic reserve price. Fixing an arbitrary or deflated reserve price without a proper site inspection is illegal and grounds for cancellation.
                  </p>
                </div>

                <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-emerald-600" />
                    <span>Rule 8(6): Mandatory 30-Day Individual Sale Notice</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    The bank must serve an individual notice of 30 days to the borrower and guarantors. This notice must state the intended date, time, and terms of the sale. Serving this notice personally via registered post or speed post is an absolute statutory requirement.
                  </p>
                </div>

                <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 flex items-center gap-2">
                    <Landmark className="w-4 h-4 text-indigo-600" />
                    <span>Rule 8(7) &amp; Rule 9(1): Public Notice &amp; 30 Clear Days Gap</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Under Rule 8(7), the public auction notice must be affixed to the property and uploaded on the bank portal. Under Rule 9(1), the notice must be published in two leading newspapers, including one in the vernacular language. Furthermore, there must be a gap of at least 30 clear days between the date of publication and the date of the auction sale.
                  </p>
                </div>

                <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-amber-600" />
                    <span>Rule 9(3) &amp; Rule 9(4): Purchaser Payment Timelines</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    The highest bidder must deposit 25% of the purchase amount immediately on the date of auction or by the next working day. The remaining 75% balance must be paid within 15 days of confirmation. If the bidder fails to pay, the deposit is forfeited, and the sale is cancelled.
                  </p>
                </div>
              </div>

              {/* Comparison Table / Statutory Matrix */}
              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs mt-4">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[620px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">SARFAESI Stage</th>
                      <th className="p-3">Statutory Time Window</th>
                      <th className="p-3">Bank Legal Requirement</th>
                      <th className="p-3">Borrower Defensive Remedy</th>
                      <th className="p-3">DRT Challenge Ground</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr className="bg-blue-50/30">
                      <td className="p-3 font-bold text-slate-900">Section 13(2) Demand Notice</td>
                      <td className="p-3">60 Days Cure Period</td>
                      <td className="p-3">Detailed itemised demand</td>
                      <td className="p-3">File Section 13(3A) representation</td>
                      <td className="p-3">Improper NPA classification</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Section 13(3A) Consideration</td>
                      <td className="p-3">15 Days from Receipt</td>
                      <td className="p-3">Mandatory reasoned rejection</td>
                      <td className="p-3">Keep postal delivery proof</td>
                      <td className="p-3">Failure to communicate reasons</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Section 13(4) Possession Notice</td>
                      <td className="p-3">Immediate Measure</td>
                      <td className="p-3">Rule 8(1) &amp; 8(2) compliance</td>
                      <td className="p-3">File Section 17 SA within 45 days</td>
                      <td className="p-3">No newspaper notice in 7 days</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Rule 8(6) Sale Notice</td>
                      <td className="p-3">30 Days Notice to Borrower</td>
                      <td className="p-3">Personal service to borrower</td>
                      <td className="p-3">Audit service date vs auction date</td>
                      <td className="p-3">Notice served under 30 days</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Rule 9(1) Public E-Auction</td>
                      <td className="p-3">30 Clear Days Gap</td>
                      <td className="p-3">Vernacular daily publication</td>
                      <td className="p-3">Move urgent stay application (IA)</td>
                      <td className="p-3">Defective newspaper circulation</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Section 14 DM Possession</td>
                      <td className="p-3">30-60 Days Process</td>
                      <td className="p-3">Affidavit compliance under 14(1)</td>
                      <td className="p-3">Challenge false affidavit before DM</td>
                      <td className="p-3">Concealment of pending disputes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 4: Top Grounds to Challenge Section 13(4) Notice in DRT */}
            <section id="top-grounds-challenge" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>Tribunal Challenge Grounds &amp; Jurisprudence</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. Top Grounds to Challenge Section 13(4) Notice in DRT
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When filing a Securitisation Application (SA) under Section 17 before the Debt Recovery Tribunal, precision is vital. The DRT examines whether the secured creditor complied with statutory formalities. Here are the primary legal grounds that consistently lead to stay orders or quashing of auction notices:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-rose-600 font-bold text-sm">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    <span>1. Non-Disposal of 13(3A) Objections</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If the borrower sent an objection to the 13(2) notice and the bank either failed to reply or sent a mechanical response without reasoned explanations within 15 days, subsequent 13(4) measures are void.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-rose-600 font-bold text-sm">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    <span>2. Flawed 30-Day Sale Notice Service</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under Rule 8(6), every borrower and mortgagor must receive personal notice 30 days before sale. If the bank only publishes in newspapers without serving individual notice, the auction cannot proceed.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-rose-600 font-bold text-sm">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    <span>3. Inadequate 30 Clear Days Publication Gap</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Rule 9(1) requires a full 30 clear days gap between the date of newspaper advertisement and the auction date for the first sale. Even a single day shortfall renders the e-auction void.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-rose-600 font-bold text-sm">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    <span>4. Depressed &amp; Fraudulent Reserve Price</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Fixing a reserve price drastically below market value without an authentic IBBI approved valuer report violates Rule 8(5). Borrowers can submit independent valuation reports to establish distress sale attempts.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-rose-600 font-bold text-sm">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    <span>5. Defective Vernacular Daily Publication</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Rule 8(2) and Rule 9(1) require publication in two leading newspapers, with one in the local vernacular language having wide circulation in the district. Publishing in obscure papers violates statutory rules.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-rose-600 font-bold text-sm">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    <span>6. Total Exemption of Agricultural Land</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under Section 31(i) of the SARFAESI Act, provisions do not apply to agricultural land. If the mortgaged parcel is revenue land used for farming or plantation, the bank possesses zero jurisdiction to auction it.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-rose-600 font-bold text-sm">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    <span>7. Disproportionate Asset Seizure</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Seizing and putting up an entire industrial property worth ₹10 Crores for a minor residual liability of ₹30 Lakhs violates principles of proportionality. Banks must explore partial or divisible parcel sales first.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-rose-600 font-bold text-sm">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    <span>8. Successful Bidder Payment Default</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If the auction winner fails to deposit 25% on the auction day or next working day, or fails to deposit 75% within 15 days, the sale cannot be confirmed. Granting unauthorised extensions violates Rule 9(4).
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 5: Supreme Court Precedents: Celir LLP & Mathew Philip Rulings */}
            <section id="supreme-court-precedents" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Apex Court Jurisprudence &amp; Legal Precedents</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. Supreme Court Precedents: Celir LLP &amp; Mathew Philip Rulings
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The legal landscape governing SARFAESI auction challenges has evolved significantly through recent judgments of the Supreme Court of India. Borrowers and legal practitioners must understand these binding precedents to frame an effective defense.
              </p>

              <div className="space-y-4">
                <div className="border-l-4 border-l-[#1886ff] pl-4 py-2 bg-white rounded-r-xl border border-slate-200/80 shadow-2xs">
                  <h3 className="font-bold text-sm sm:text-base text-slate-900">
                    Celir LLP v. Bafna Motors (Mumbai) Pvt. Ltd. (2023)
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                    In this landmark ruling, the Supreme Court interpreted the amended Section 13(8) of the SARFAESI Act. Before the 2016 amendment, borrowers could redeem mortgaged property until the sale certificate was registered. However, the Supreme Court held that post-2016 amendment, the right of redemption is extinguished on the date the auction notice is published in newspapers. Borrowers cannot wait until the hammer falls to tender payment.
                  </p>
                </div>

                <div className="border-l-4 border-l-emerald-600 pl-4 py-2 bg-white rounded-r-xl border border-slate-200/80 shadow-2xs">
                  <h3 className="font-bold text-sm sm:text-base text-slate-900">
                    Mathew Varghese v. M. Amritha Kumar (2014)
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                    The Supreme Court held that service of the 30-day notice under Rule 8(6) is mandatory and non-negotiable. The court emphasized that the borrower is the owner of the secured asset, and depriving someone of property without strict adherence to statutory notice provisions violates constitutional safeguards under Article 300A.
                  </p>
                </div>

                <div className="border-l-4 border-l-indigo-600 pl-4 py-2 bg-white rounded-r-xl border border-slate-200/80 shadow-2xs">
                  <h3 className="font-bold text-sm sm:text-base text-slate-900">
                    South Indian Bank Ltd. v. Naveen Mathew Philip (2023)
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                    Reaffirming the earlier ruling in United Bank of India v. Satyawati Tondon, the Supreme Court cautioned High Courts against entertaining Article 226 writ petitions against SARFAESI Section 13(4) notices. The court held that the DRT under Section 17 is an efficacious statutory forum. Writ petitions should only be filed under exceptional circumstances, such as patent lack of jurisdiction or fraud.
                  </p>
                </div>

                <div className="border-l-4 border-l-amber-600 pl-4 py-2 bg-white rounded-r-xl border border-slate-200/80 shadow-2xs">
                  <h3 className="font-bold text-sm sm:text-base text-slate-900">
                    Mardia Chemicals Ltd. v. Union of India (2004)
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                    The Constitution Bench established that the borrower representation under Section 13(3A) is a meaningful statutory check. The bank has an affirmative duty to communicate its reasons for non-acceptance to the borrower. Failure to fulfill this duty invalidates any subsequent coercive measures under Section 13(4).
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 6: Visual Blueprint Infographic */}
            <section id="visual-blueprint" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Sparkles className="w-4 h-4 text-[#1886ff]" />
                <span>Visual Blueprint</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. Visual Blueprint: SARFAESI 13(4) &amp; Auction Challenge Flow
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This comprehensive visual roadmap illustrates the legal defense framework for challenging a SARFAESI Section 13(4) notice and 30-day auction sale, detailing statutory requirements, DRT remedies, and settlement options.
              </p>

              <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-slate-100 bg-slate-100">
                  <Image
                    src="/images/infographics/sarfaesi-section-13-4-notice-30-day-auction-sale-challenge.jpg"
                    alt="SARFAESI Section 13(4) Notice &amp; 30-Day Auction Sale Challenge Legal Guide"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 900px"
                    className="object-contain hover:scale-[1.01] transition-transform duration-300"
                    priority
                  />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-500 pt-1 gap-2">
                  <span>Official CredSettle SARFAESI Property Defense Framework • Rule 8 &amp; Rule 9 Compliant</span>
                  <a
                    href="/images/infographics/sarfaesi-section-13-4-notice-30-day-auction-sale-challenge.jpg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1886ff] hover:underline font-bold inline-flex items-center gap-1"
                  >
                    <span>View High-Resolution Blueprint</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </section>

            {/* SECTION 7: Step-by-Step SOP: 6-Stage Defense Against Bank Auction Sale */}
            <section id="step-by-step-sop" className="scroll-target space-y-6">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Standard Operating Procedure</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. Step-by-Step SOP: 6-Stage Defense Against Bank Auction Sale
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If your bank has issued a Section 13(4) possession notice or published a 30-day auction notice, prompt action is critical. Executing this systematic six-stage protocol secures legal protection, stays auction proceedings, and paves the way for an affordable debt settlement.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#1886ff] font-extrabold flex items-center justify-center flex-shrink-0 text-sm">
                    1
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-bold text-sm sm:text-base text-slate-900">
                      Forensic Notice Audit &amp; Procedural Inspection
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Immediately examine the Section 13(4) notice and auction advertisement. Check whether the bank responded to your Section 13(3A) objection, verify whether 30 clear days exist between publication and auction, and check if individual Rule 8(6) notice was served on you.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#1886ff] font-extrabold flex items-center justify-center flex-shrink-0 text-sm">
                    2
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-bold text-sm sm:text-base text-slate-900">
                      Demand Valuation Report &amp; Account Statement
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Send a formal requisition letter to the Authorized Officer under Section 13(4) demanding the approved valuer report used to determine the reserve price under Rule 8(5). Request an itemised statement of accounts highlighting illegal penal interest capitalisation.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#1886ff] font-extrabold flex items-center justify-center flex-shrink-0 text-sm">
                    3
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-bold text-sm sm:text-base text-slate-900">
                      Draft &amp; File Securitisation Application (SA) in DRT
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Engage legal counsel to draft an SA under Section 17(1) of the SARFAESI Act before the jurisdictional Debt Recovery Tribunal. Ensure the application is filed within the strict 45-day statutory limitation window from the date of the measure.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#1886ff] font-extrabold flex items-center justify-center flex-shrink-0 text-sm">
                    4
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-bold text-sm sm:text-base text-slate-900">
                      Move Urgent Interlocutory Application (IA) for Stay
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Along with the SA, file an urgent interim application seeking an ad-interim stay on the scheduled e-auction or symbolic possession. Demonstrate prima facie procedural defects, irreparable financial injury, and balance of convenience.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#1886ff] font-extrabold flex items-center justify-center flex-shrink-0 text-sm">
                    5
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-bold text-sm sm:text-base text-slate-900">
                      Initiate Strategic One-Time Settlement (OTS) Negotiations
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      While the DRT stay is active, leverage the bank legal vulnerability to submit a formal compromise settlement proposal under RBI guidelines. Banks often agree to waive 30% to 60% of penal interest and legal costs to avoid prolonged litigation.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#1886ff] font-extrabold flex items-center justify-center flex-shrink-0 text-sm">
                    6
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-bold text-sm sm:text-base text-slate-900">
                      Execute OTS Payment &amp; Secure Original Title Deeds
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Pay the agreed compromise amount per the bank official sanction letter. Obtain a formal No Dues Certificate (NDC), file an application to close DRT proceedings, and secure the return of all original title deeds from the bank custody.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 8: Securitisation Application (SA) Filing Protocol in DRT */}
            <section id="drt-sa-filing-protocol" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <BookOpen className="w-4 h-4 text-[#1886ff]" />
                <span>Tribunal Procedure &amp; Litigation Mechanics</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. Securitisation Application (SA) Filing Protocol in DRT
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Filing a Securitisation Application under Section 17 is the primary statutory remedy against coercive bank action. It operates like a regular civil suit before the Debt Recovery Tribunal, where the Presiding Officer examines the legality of bank measures.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Here are the crucial technical and procedural components of filing an effective SA:
              </p>

              <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-4 text-xs sm:text-sm text-slate-700">
                <div className="border-b border-slate-100 pb-3">
                  <span className="font-bold text-slate-900 block mb-1">1. Statutory Limitation Period (45 Days):</span>
                  <p className="text-slate-600 leading-relaxed">
                    Under Section 17(1), the SA must be filed within 45 days from the date the measure was taken. If challenging a 13(4) possession notice, calculate 45 days from its service. If challenging an auction sale notice, calculate 45 days from the date of the auction notice or publication.
                  </p>
                </div>

                <div className="border-b border-slate-100 pb-3">
                  <span className="font-bold text-slate-900 block mb-1">2. Prescribed Tribunal Court Fees:</span>
                  <p className="text-slate-600 leading-relaxed">
                    Court fees for filing an SA depend on the debt claimed by the bank. For debts up to ₹10 Lakhs, the fee is ₹12,000. For debts between ₹10 Lakhs and ₹1 Crore, the fee is ₹12,000 plus ₹1,000 for every additional ₹1 Lakh (subject to maximum ₹1,00,000). For non-borrower applicants (e.g. tenants or third-party owners), a flat nominal fee applies.
                  </p>
                </div>

                <div className="border-b border-slate-100 pb-3">
                  <span className="font-bold text-slate-900 block mb-1">3. Mandatory Documentary Paper Book:</span>
                  <p className="text-slate-600 leading-relaxed">
                    The SA paper book must compile: (a) Loan sanction letter and mortgage agreement, (b) Section 13(2) notice received, (c) Section 13(3A) objection with postal dispatch and delivery receipts, (d) Bank response if any, (e) Impugned Section 13(4) possession notice or auction advertisement, (f) Independent valuation report, and (g) Clear timeline showing procedural lapses.
                  </p>
                </div>

                <div>
                  <span className="font-bold text-slate-900 block mb-1">4. Conditional Pre-Deposit Relief in DRT:</span>
                  <p className="text-slate-600 leading-relaxed">
                    Unlike appeals before the Appellate Tribunal (DRAT) under Section 18 which mandate a 50% pre-deposit, filing an SA under Section 17 before the DRT does not require an automatic statutory pre-deposit. However, DRT Presiding Officers often grant stay orders conditional on depositing 10% to 20% in an interest-bearing escrow account.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 9: 3-Tier Escalation Matrix: Bank, DRT & High Court Remedies */}
            <section id="escalation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Institutional Redressal &amp; Forum Hierarchy</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. 3-Tier Escalation Matrix: Bank, DRT &amp; High Court Remedies
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Borrowers facing aggressive bank auction action should utilize a structured 3-tier escalation framework to safeguard their constitutional right to property under Article 300A.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-blue-50 text-[#1886ff] text-xs font-bold">
                    <span>Tier 1: Lender Level</span>
                  </div>
                  <h3 className="font-bold text-sm text-slate-900">
                    Authorized Officer &amp; Zonal Committee
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Submit formal legal objections highlighting procedural flaws. Propose a structured OTS or request extension to private treaty buyers to maximize real estate realization.
                  </p>
                  <ul className="text-[11px] text-slate-500 space-y-1 list-disc pl-4">
                    <li>Section 13(3A) representation.</li>
                    <li>Restructuring under RBI circular.</li>
                    <li>OTS proposal submission.</li>
                  </ul>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold">
                    <span>Tier 2: Judicial Tribunal</span>
                  </div>
                  <h3 className="font-bold text-sm text-slate-900">
                    Debt Recovery Tribunal (DRT &amp; DRAT)
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    File Securitisation Application under Section 17. Seek urgent interim stay on e-auction. Appeal adverse DRT orders to DRAT under Section 18 within 30 days.
                  </p>
                  <ul className="text-[11px] text-slate-500 space-y-1 list-disc pl-4">
                    <li>Securitisation Application (SA).</li>
                    <li>Stay on Section 14 physical takeover.</li>
                    <li>DRAT appeal under Section 18.</li>
                  </ul>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-purple-50 text-purple-700 text-xs font-bold">
                    <span>Tier 3: Constitutional Court</span>
                  </div>
                  <h3 className="font-bold text-sm text-slate-900">
                    High Court (Article 226 / 227)
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    File writ petition only under rare circumstances: when DRT bench is vacant, patent lack of jurisdiction, violation of natural justice, or fraud by the secured creditor.
                  </p>
                  <ul className="text-[11px] text-slate-500 space-y-1 list-disc pl-4">
                    <li>DRT non-functioning or quorum defect.</li>
                    <li>Agricultural land auction challenge.</li>
                    <li>Breach of fundamental natural justice.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* SECTION 10: Statutory Procedural Timeline: From 13(4) to Sale Certificate */}
            <section id="procedural-timeline" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Clock className="w-4 h-4 text-[#1886ff]" />
                <span>Milestone Trajectory &amp; Deadlines</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                10. Statutory Procedural Timeline: From 13(4) to Sale Certificate
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Understanding the chronological trajectory of SARFAESI enforcement helps borrowers take timely defensive measures before their right of redemption is permanently lost.
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-slate-200/80 text-xs sm:text-sm">
                  <span className="font-mono font-bold text-blue-600 w-24 flex-shrink-0">Day 0:</span>
                  <span className="text-slate-700">Account declared NPA after 90 days continuous payment default.</span>
                </div>
                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-slate-200/80 text-xs sm:text-sm">
                  <span className="font-mono font-bold text-blue-600 w-24 flex-shrink-0">Day 1 to 60:</span>
                  <span className="text-slate-700">60-day cure window under Section 13(2) notice. Borrower files Section 13(3A) objection.</span>
                </div>
                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-slate-200/80 text-xs sm:text-sm">
                  <span className="font-mono font-bold text-blue-600 w-24 flex-shrink-0">Day 61+:</span>
                  <span className="text-slate-700">Bank issues Section 13(4) possession notice and affixes on property under Rule 8(1).</span>
                </div>
                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-slate-200/80 text-xs sm:text-sm">
                  <span className="font-mono font-bold text-blue-600 w-24 flex-shrink-0">Day 61 to 68:</span>
                  <span className="text-slate-700">Publication of possession notice in two newspapers within 7 days under Rule 8(2).</span>
                </div>
                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-slate-200/80 text-xs sm:text-sm">
                  <span className="font-mono font-bold text-blue-600 w-24 flex-shrink-0">Day 70+:</span>
                  <span className="text-slate-700">Service of mandatory 30-day individual sale notice on borrower under Rule 8(6).</span>
                </div>
                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-slate-200/80 text-xs sm:text-sm">
                  <span className="font-mono font-bold text-blue-600 w-24 flex-shrink-0">Day 75+:</span>
                  <span className="text-slate-700">Newspaper publication of auction notice with 30 clear days gap under Rule 9(1).</span>
                </div>
                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-slate-200/80 text-xs sm:text-sm">
                  <span className="font-mono font-bold text-blue-600 w-24 flex-shrink-0">Day 105+:</span>
                  <span className="text-slate-700">Public e-auction conducted. Successful bidder deposits 25% on same/next day.</span>
                </div>
                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-slate-200/80 text-xs sm:text-sm">
                  <span className="font-mono font-bold text-blue-600 w-24 flex-shrink-0">Day 120:</span>
                  <span className="text-slate-700">Balance 75% deposited within 15 days. Bank issues Rule 9(6) Sale Certificate.</span>
                </div>
              </div>
            </section>

            {/* SECTION 11: Specialized Scenarios: Agricultural Land & Undervaluation */}
            <section id="specialized-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <ShieldAlert className="w-4 h-4 text-[#1886ff]" />
                <span>Edge Cases &amp; Complex Situations</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                11. Specialized Scenarios: Agricultural Land &amp; Undervaluation
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                In complex mortgage disputes, specialized scenarios often arise that require tailored defensive legal strategies.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Home className="w-4 h-4 text-[#1886ff]" />
                    Agricultural Land Mortgages: Section 31(i) Bar
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under Section 31(i), agricultural land is completely immune from SARFAESI proceedings. If a bank initiates Section 13(4) or an auction on agricultural land, the notice can be quashed immediately by filing an SA or High Court writ petition.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-emerald-600" />
                    Residential Homes &amp; Self-Occupied Family Property
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    While residential homes are not statutorily exempt, tribunals recognize the irreparable harm of homelessness. Borrowers offering bona fide upfront payments frequently secure time-bound stays to finalize an OTS.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-indigo-600" />
                    Protected Tenants &amp; Rent Control Act Lessees
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    In Harshad Govardhan Sondagar v. International Assets Reconstruction Co., the Supreme Court held that genuine tenants under registered leases created prior to the mortgage cannot be summarily evicted under Section 13(4).
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-amber-600" />
                    Small Balances &amp; Section 31(h)/(j) Restrictions
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    SARFAESI cannot be invoked if the remaining debt is less than 20% of the principal and interest, or if the total claim is under ₹1 Lakh. Attempting auction for such minor sums is illegal under Section 31.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 12: Company Profile Component */}
            <div id="company-profile" className="scroll-target pt-2">
              <CompanySection />
            </div>

            {/* SECTION 13: 10 Synchronized FAQs */}
            <section id="frequently-asked-questions" className="scroll-target space-y-5">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <HelpCircle className="w-4 h-4 text-[#1886ff]" />
                <span>Direct Answers</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Frequently Asked Questions: SARFAESI 13(4) Auction Challenge
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Clear, verified legal guidance addressing critical questions regarding SARFAESI Section 13(4) possession notices, 30-day auction rules, DRT stay remedies, and borrower rights under Indian law.
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

            {/* SECTION 14: Citations & Outbound Authority Grid */}
            <section id="regulatory-sources" className="scroll-target space-y-4 pt-4 border-t border-slate-200">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-500">
                <BookOpen className="w-4 h-4" />
                <span>Statutory Citations &amp; Legal Authorities</span>
              </div>
              <h2 className="text-base sm:text-lg font-bold text-slate-900">
                Official Regulatory Citations &amp; Statutory Legal Framework
              </h2>
              <ul className="space-y-2 text-xs text-slate-600 leading-relaxed list-disc pl-5">
                <li>
                  <strong>Securitisation and Reconstruction of Financial Assets and Enforcement of Security Interest Act, 2002:</strong> Section 13(2), Section 13(3A), Section 13(4), Section 13(8), Section 14, Section 17, and Section 31.
                </li>
                <li>
                  <strong>Security Interest (Enforcement) Rules, 2002:</strong> Rule 8 (Sale of Immovable Secured Assets), Rule 9 (Time of Sale, Delivery of Possession, and Sale Certificate).
                </li>
                <li>
                  <strong>Recovery of Debts and Bankruptcy Act, 1993 (RDB Act):</strong> Jurisdiction of Debt Recovery Tribunals (DRT) and Debt Recovery Appellate Tribunals (DRAT).
                </li>
                <li>
                  <strong>Reserve Bank of India Master Circulars:</strong> Prudential Norms on Income Recognition, Asset Classification and Provisioning (IRAC) pertaining to Advances.
                </li>
                <li>
                  <strong>Landmark Supreme Court Precedents:</strong> Celir LLP v. Bafna Motors (2023), Mathew Varghese v. M. Amritha Kumar (2014), South Indian Bank v. Naveen Mathew Philip (2023), and Mardia Chemicals v. UOI (2004).
                </li>
              </ul>

              {/* Outbound Authority Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Verified Government &amp; Regulatory Portals:</span>
                <div className="flex flex-wrap gap-2">
                  <a href="https://drt.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>e-DRT Portal (Ministry of Finance)</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.rbi.org.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>Reserve Bank of India</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.indiacode.nic.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>India Code Statutory Repository</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://main.sci.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>Supreme Court of India Judgments</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://ibbi.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>Insolvency and Bankruptcy Board of India</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://nalsa.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>National Legal Services Authority</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Related Internal Topic Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Explore Related CredSettle Guides:</span>
                <div className="flex flex-wrap gap-2">
                  <Link href="/sarfaesi-act-section-13-2-notice-stop-auction" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    SARFAESI 13(2) Notice Defense
                  </Link>
                  <Link href="/sarfaesi-section-14-physical-possession-order-dm-cmm" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Section 14 Physical Possession
                  </Link>
                  <Link href="/home-loan-default-sarfaesi-act" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Home Loan Default Defense
                  </Link>
                  <Link href="/how-to-reply-sarfaesi-notice" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    How to Reply to SARFAESI Notice
                  </Link>
                  <Link href="/agricultural-loan-default-sarfaesi-act" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Agricultural Loan Immunity
                  </Link>
                  <Link href="/can-bank-attach-ancestral-property-for-personal-loan-default" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Ancestral Property Attachment
                  </Link>
                  <Link href="/section-60-cpc-assets-property-exempt-from-bank-attachment" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Section 60 CPC Exemptions
                  </Link>
                  <Link href="/loan-recall-notice-from-bank-legal-defense-reply-guide" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Loan Recall Notice Defense
                  </Link>
                  <Link href="/bank-sent-legal-notice-for-loan-what-to-do" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Bank Legal Notice Reply
                  </Link>
                  <Link href="/willful-defaulter-notice-rbi-rules-legal-defense-guide" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Willful Defaulter Defense
                  </Link>
                  <Link href="/rbi-guidelines-on-penal-charges-in-loan-accounts" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    RBI Penal Charges Guidelines
                  </Link>
                  <Link href="/get-noc-after-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    No Dues Certificate
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
                Specialist in SARFAESI proceedings, DRT litigation defense, securitization application filings, and mortgaged property auction stays with extensive experience defending property owners against predatory bank auctions.
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
              className="rounded-3xl p-6 text-white text-center space-y-4 shadow-md relative overflow-hidden"
              style={{ backgroundColor: '#2452ae' }}
            >
              <div className="space-y-1 text-center">
                <span className="text-xs font-black uppercase tracking-wider text-blue-200 bg-white/10 px-3 py-1 rounded-full inline-block mb-1">
                  URGENT SARFAESI RELIEF
                </span>
                <p className="text-lg md:text-xl font-bold text-white leading-snug">
                  Bank Issued Section 13(4) or Auction Notice?
                </p>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Stop illegal bank auctions now. Our senior debt lawyers identify procedural violations, file emergency Securitisation Applications in DRT, and negotiate up to 60% loan settlement waivers.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Protect Your Property Now
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
                  <span>Statutory DRT Protection • 100% Confidential</span>
                </div>
              </div>
            </div>

            {/* Card 3: CredSettle Trust Badges */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">The CredSettle Shield</p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Immediate Auction Stay:</strong> Flaw identification under Rule 8 &amp; 9.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>DRT Securitisation Filing:</strong> Airtight Section 17 appeals.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Distress Sale Prevention:</strong> True market valuation enforcement.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Official Bank Closure:</strong> Guaranteed No Dues Certificate &amp; title release.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">Related Legal Guides</p>
              <div className="space-y-2.5">
                <Link
                  href="/sarfaesi-act-section-13-2-notice-stop-auction"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    SARFAESI Act Section 13(2) Notice
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Stop bank auction at 60-day notice stage &rarr;</span>
                </Link>

                <Link
                  href="/sarfaesi-section-14-physical-possession-order-dm-cmm"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    SARFAESI Section 14 Physical Possession
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">DM &amp; CMM possession order defense &rarr;</span>
                </Link>

                <Link
                  href="/home-loan-default-sarfaesi-act"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Home Loan Default: Stop Auction
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Residential property foreclosure defense &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
