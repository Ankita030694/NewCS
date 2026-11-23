'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
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
  Briefcase,
  Bookmark,
  ArrowRight,
  Clock,
  Gavel,
  Landmark,
  Calendar,
  Percent,
  BadgeAlert
} from 'lucide-react';

export default function PersonalLoanKfsRefundClient() {
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
    { id: 'quick-crux', label: 'Executive Brief & Legal Crux' },
    { id: 'statutory-mandate', label: '1. Statutory Mandate: RBI Circular' },
    { id: 'zero-unlisted-fees', label: '2. Zero Unlisted Fees Protection' },
    { id: 'apr-transparency', label: '3. APR Transparency & True Cost' },
    { id: 'common-hidden-fees', label: '4. Common Hidden Fees to Spot' },
    { id: 'legal-precedents', label: '5. Court Precedents & NCDRC Awards' },
    { id: 'step-by-step-sop', label: '6. Step-by-Step SOP for Refunds' },
    { id: 'escalation-matrix', label: '7. 3-Tier Redressal Escalation' },
    { id: 'key-deadlines', label: '8. Key Deadlines & Look-Up Period' },
    { id: 'personal-loan-settlement', label: '9. Loan Settlement & Fee Waivers' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
    {
      q: 'What does the RBI rule say about fees omitted from a Key Facts Statement?',
      a: 'Under Paragraph 8 of RBI Circular RBI/2024-25/18 dated April 15, 2024, any fee, charge, or expense not explicitly listed in the Key Facts Statement (KFS) cannot be charged to the borrower at any stage of the personal loan without explicit prior consent.'
    },
    {
      q: 'Can a bank deduct an undisclosed insurance premium from my loan disbursal?',
      a: 'No. Any mandatory or optional insurance premium deducted from personal loan disbursal must be clearly detailed in the KFS and factored into the Annual Percentage Rate (APR). Hidden deductions are illegal and must be refunded in full.'
    },
    {
      q: 'Are NBFCs and digital loan apps also bound by the RBI KFS mandate?',
      a: 'Yes. The RBI harmonized KFS mandate applies to all Scheduled Commercial Banks, Regional Rural Banks, Small Finance Banks, NBFCs, and digital personal loan lending applications.'
    },
    {
      q: 'What is the Annual Percentage Rate (APR) in a personal loan KFS?',
      a: 'The APR represents the true all-inclusive annual cost of credit to the borrower. It combines the nominal interest rate, upfront processing fees, documentation charges, verification costs, and any mandatory insurance premiums into a single transparent percentage.'
    },
    {
      q: 'Can I get a refund of 18% GST charged on undisclosed personal loan fees?',
      a: 'Yes. When an unauthorized fee is reversed or refunded by the lender, the corresponding 18% GST component charged on that bogus fee must also be credited back to your account.'
    },
    {
      q: 'What should I do if a bank refuses to refund an unlisted KFS fee?',
      a: 'Submit a formal written complaint to the bank Principal Nodal Officer citing Paragraph 8 of the RBI KFS Circular. If the bank fails to resolve it or rejects your claim within 30 days, lodge a free complaint online with the RBI Integrated Ombudsman at cms.rbi.org.in.'
    },
    {
      q: 'Can the RBI Ombudsman award compensation for hidden loan charges?',
      a: 'Yes. Under the RBI Integrated Ombudsman Scheme, 2021, the Ombudsman can order a complete refund of the disputed amount plus interest, and award up to ₹1,00,000 as compensation for mental harassment, loss of time, and expenses incurred.'
    },
    {
      q: 'Does a personal loan KFS provide a cooling-off look-up period?',
      a: 'Yes. The RBI mandates that the KFS must state a cooling-off or look-up period. During this window, borrowers can exit the loan without prepayment penalties by repaying the principal and proportionate APR for the elapsed days.'
    },
    {
      q: 'Can banks change loan fees after disbursing my personal loan?',
      a: 'No. Lenders cannot unilaterally introduce new fees or increase existing charges during the loan tenure unless such terms were explicitly disclosed in the KFS and agreed to by the borrower.'
    },
    {
      q: 'How does CredSettle help with hidden fees during personal loan settlement?',
      a: 'CredSettle audits your loan agreement and KFS disclosures, identifies unauthorized fees and inflated penal charges, and leverages regulatory violations to negotiate significant waivers (50% to 75% OTS) with a formal No Dues Certificate.'
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
            <FileText className="w-3.5 h-3.5" />
            <span>RBI Key Facts Statement (KFS) &amp; Fee Transparency Rules</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Zero Liability for Personal Loan Fees Omitted From KFS
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            Understand your rights under RBI rules when lenders cut hidden fees. Learn how to claim a 100% refund plus GST for any fee missing from your Key Facts Statement.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Dispute Hidden Loan Fees</span>
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
                  <span>RBI Fair Lending Shield</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Protected under RBI Circular RBI/2024-25/18 and Section 2(47) of the Consumer Protection Act, 2019.
                </p>
              </div>
            </div>
          </aside>

          {/* ================= MIDDLE COLUMN: MAIN EDITORIAL CONTENT ================= */}
          <div className="space-y-8 md:space-y-10 min-w-0">

            {/* EXECUTIVE SUMMARY BOX (#F4F8FE Box) */}
            <div
              id="quick-crux"
              className="scroll-target rounded-2xl bg-[#F4F8FE] border border-blue-100/90 border-l-[5px] border-l-[#1886ff] p-5 sm:p-6 md:p-7 shadow-xs space-y-4 text-slate-800"
            >
              <div className="flex items-center gap-2 text-xs md:text-sm font-black uppercase tracking-wider text-[#1886ff]">
                <Bookmark className="w-4 h-4 text-[#1886ff]" />
                <span>EXECUTIVE BRIEF: RBI RULES ON MISSING KFS FEES</span>
              </div>

              <h2 className="text-lg sm:text-xl font-extrabold text-slate-900">
                Executive Brief: RBI Rules on Missing KFS Fees
              </h2>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Zero Liability for Missing Fees:</strong> Under Paragraph 8 of RBI rules, lenders cannot charge any fee that was not listed in your Key Facts Statement (KFS).
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Full 100% Refund Plus GST:</strong> If a bank cuts an unlisted fee from your loan payout, they must return the full fee and the 18% GST.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">True APR Cost:</strong> Every fee, paper charge, and insurance cost must be part of one clear Annual Percentage Rate (APR).
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">All Lenders Must Comply:</strong> These rules bind all commercial banks, small finance banks, NBFCs, and online personal loan apps.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Free RBI Ombudsman Redressal:</strong> If the bank does not refund your money within 30 days, you can file a free dispute online at cms.rbi.org.in.
                  </span>
                </li>
              </ul>
            </div>

            {/* SECTION 1: Statutory Mandate */}
            <section id="statutory-mandate" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4" />
                <span>Statutory Foundation &amp; Regulatory Mandate</span>
              </div>

              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                1. Statutory Mandate: RBI April 2024 KFS Circular
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                For years, personal loan borrowers faced sneaky hidden charges. Banks advertised low interest rates. Then they cut big fees before sending the loan money. Borrowers got much less cash in hand than promised.
              </p>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                To end these tricks, the Reserve Bank of India set strict rules. The key order is circular RBI/2024-25/18, issued on April 15, 2024. Its title is Key Facts Statement (KFS) for Loans and Advances. This rule took full effect on October 1, 2024.
              </p>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                The RBI issued this order under the Banking Regulation Act, 1949 and the RBI Act, 1934. All banks and lending apps must obey it. No lender can skip these terms.
              </p>

              {/* Institution Scope Box */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                    <Building2 className="w-4 h-4 text-[#1886ff]" />
                    <span>Lenders Covered by RBI Rules</span>
                  </div>
                  <ul className="text-xs text-slate-600 space-y-1.5 list-disc pl-4">
                    <li>All Public &amp; Private Commercial Banks</li>
                    <li>Small Finance Banks &amp; Regional Rural Banks</li>
                    <li>All Registered NBFCs</li>
                    <li>Digital Lending Apps &amp; Fintech Platforms</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>Key Goals of the RBI Mandate</span>
                  </div>
                  <ul className="text-xs text-slate-600 space-y-1.5 list-disc pl-4">
                    <li>Give clear loan costs before signing contracts</li>
                    <li>Stop surprise fee cuts at loan payout</li>
                    <li>Standardize fee tables across all lenders</li>
                    <li>Give borrowers a legally binding fee record</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* SECTION 2: Zero Unlisted Fees Protection */}
            <section id="zero-unlisted-fees" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <BadgeAlert className="w-4 h-4" />
                <span>Paragraph 8 Legal Protection</span>
              </div>

              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                2. Zero Unlisted Fees Rule: Paragraph 8 Protection
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                The strongest shield for borrowers is in Paragraph 8 of the circular. It gives you direct legal protection against hidden fees:
              </p>

              <div className="p-4 sm:p-5 rounded-2xl bg-blue-50/80 border border-blue-200 text-blue-950 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1886ff]">
                  <Scale className="w-4 h-4" />
                  <span>Exact RBI Rule: Paragraph 8 of KFS Circular</span>
                </div>
                <blockquote className="text-xs sm:text-sm italic font-medium leading-relaxed">
                  &quot;Any fees, charges, etc. which are not mentioned in the KFS, cannot be charged by the REs to the borrower at any stage during the term of the loan, without explicit consent of the borrower.&quot;
                </blockquote>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                What does this mean for you? If a fee is not listed in your KFS table, you do not have to pay it. You have zero legal liability for omitted charges. If the bank already cut the fee from your loan payout, they took it unlawfully.
              </p>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Banks cannot hide behind long loan contracts. Any clause in a 50-page loan paper that conflicts with your KFS is void. You are legally entitled to a 100% refund of every unlisted rupee.
              </p>
            </section>

            {/* SECTION 3: APR Transparency & True Cost */}
            <section id="apr-transparency" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Percent className="w-4 h-4" />
                <span>True Borrowing Cost Mathematics</span>
              </div>

              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                3. APR Transparency: True Cost of Personal Loans
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Lenders often use low interest rates to attract borrowers. But after adding upfront cuts, the real loan cost jumps much higher. A loan advertised at 11% can quickly cost 18% once extra fees are added.
              </p>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                The RBI fixed this problem through the Annual Percentage Rate (APR). The APR shows the true yearly cost of credit in one simple percentage. It combines all interest rates, processing fees, and paperwork charges.
              </p>

              {/* Table of APR Components */}
              <div className="overflow-x-auto rounded-2xl border border-slate-200/80 shadow-xs bg-white">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
                      <th className="p-3 sm:p-4">Loan Fee Type</th>
                      <th className="p-3 sm:p-4">Must Be in KFS?</th>
                      <th className="p-3 sm:p-4">Included in APR?</th>
                      <th className="p-3 sm:p-4">Refund if Missing?</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-600">
                    <tr className="hover:bg-slate-50/80">
                      <td className="p-3 sm:p-4 font-semibold text-slate-900">Base Interest Rate</td>
                      <td className="p-3 sm:p-4 text-emerald-600 font-bold">Mandatory</td>
                      <td className="p-3 sm:p-4 text-emerald-600 font-bold">Yes (Base Cost)</td>
                      <td className="p-3 sm:p-4">Excess interest refundable</td>
                    </tr>
                    <tr className="hover:bg-slate-50/80">
                      <td className="p-3 sm:p-4 font-semibold text-slate-900">Loan Processing Fees</td>
                      <td className="p-3 sm:p-4 text-emerald-600 font-bold">Mandatory</td>
                      <td className="p-3 sm:p-4 text-emerald-600 font-bold">Yes (Upfront Cost)</td>
                      <td className="p-3 sm:p-4 text-emerald-600 font-bold">100% Refund + GST</td>
                    </tr>
                    <tr className="hover:bg-slate-50/80">
                      <td className="p-3 sm:p-4 font-semibold text-slate-900">Document &amp; Check Fees</td>
                      <td className="p-3 sm:p-4 text-emerald-600 font-bold">Mandatory</td>
                      <td className="p-3 sm:p-4 text-emerald-600 font-bold">Yes (Service Fee)</td>
                      <td className="p-3 sm:p-4 text-emerald-600 font-bold">100% Refund + GST</td>
                    </tr>
                    <tr className="hover:bg-slate-50/80">
                      <td className="p-3 sm:p-4 font-semibold text-slate-900">Mandatory Loan Insurance</td>
                      <td className="p-3 sm:p-4 text-emerald-600 font-bold">Mandatory</td>
                      <td className="p-3 sm:p-4 text-emerald-600 font-bold">Yes (Direct Cost)</td>
                      <td className="p-3 sm:p-4 text-emerald-600 font-bold">100% Refund + GST</td>
                    </tr>
                    <tr className="hover:bg-slate-50/80">
                      <td className="p-3 sm:p-4 font-semibold text-slate-900">Bank Mandate Setup Fee</td>
                      <td className="p-3 sm:p-4 text-emerald-600 font-bold">Mandatory</td>
                      <td className="p-3 sm:p-4 text-emerald-600 font-bold">Yes (Bank Cost)</td>
                      <td className="p-3 sm:p-4 text-emerald-600 font-bold">100% Refund + GST</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 4: Common Hidden Fees to Spot */}
            <section id="common-hidden-fees" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <AlertTriangle className="w-4 h-4 text-amber-500" />
                <span>Detection &amp; Audit Protocol</span>
              </div>

              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                4. Common Hidden Fees: Illegal Deductions to Spot
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                When you get loan funds, compare the sanctioned amount with the money paid into your account. Here are six hidden charges lenders often cut illegally:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">
                      1
                    </span>
                    <span>Forced Loan Insurance</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Lenders often bundle loan insurance without asking you. If you did not sign a separate form and the cost was not in the KFS, this deduction is illegal.
                  </p>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">
                      2
                    </span>
                    <span>Inflated Processing Fees</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    A bank may quote a 1% fee, but cut 3% at payout. If the deducted percentage is higher than the rate in your KFS, you are owed a full refund.
                  </p>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">
                      3
                    </span>
                    <span>Vague Document Fees</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Lenders cannot add paper handling fees or file charges unless listed line-by-line in the KFS table. Random paperwork fees are barred.
                  </p>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">
                      4
                    </span>
                    <span>Undisclosed Bounce Penalties</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If an EMI fails, banks often add high bounce charges. Under RBI rules, bounce fees must be fair, non-compounding, and clearly listed in your KFS.
                  </p>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">
                      5
                    </span>
                    <span>Monthly App Service Fees</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Lending apps often add monthly tech fees or platform costs. If these charges were not in your KFS table, the lender must stop taking them.
                  </p>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">
                      6
                    </span>
                    <span>Early Interest Traps</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The RBI penalized lenders who charged interest from the sanction date before funds reached the borrower. Interest starts only on the actual payout date.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 5: Court Precedents & NCDRC Awards */}
            <section id="legal-precedents" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4" />
                <span>Judicial Precedents &amp; Consumer Protection</span>
              </div>

              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                5. Legal Precedents: Consumer Court &amp; NCDRC Awards
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Indian consumer courts protect borrowers from secret bank fees. Judges have ruled that fine print in standard contracts cannot beat clear pre-loan disclosures.
              </p>

              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-xs sm:text-sm text-slate-900">
                      Standard Chartered Bank v. Dr. P. S. Ramaswamy (NCDRC)
                    </span>
                    <span className="text-[11px] px-2 py-0.5 rounded bg-blue-50 text-[#1886ff] font-semibold">
                      Landmark Precedent
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The National Consumer Commission held that deducting fees without prior written consent is a deficiency of service. The bank was ordered to refund the deducted money with interest and pay damages.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-xs sm:text-sm text-slate-900">
                      Central Bank of India v. Ravindra (Supreme Court of India)
                    </span>
                    <span className="text-[11px] px-2 py-0.5 rounded bg-blue-50 text-[#1886ff] font-semibold">
                      Constitutional Bench
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The Supreme Court held that banks must act fairly. Lenders cannot add hidden costs or charge compounding penalty fees without consent.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-xs sm:text-sm text-slate-900">
                      Consumer Protection Act, 2019 (Sections 2(47) &amp; 2(11))
                    </span>
                    <span className="text-[11px] px-2 py-0.5 rounded bg-blue-50 text-[#1886ff] font-semibold">
                      Statutory Remedy
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Section 2(47) bans unfair trade practices like hidden fees. Section 2(46) strikes down unfair contract terms. Borrowers can win full refunds plus damages in consumer court.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 6: Step-by-Step SOP for Refunds */}
            <section id="step-by-step-sop" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Actionable Recovery Protocol</span>
              </div>

              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                6. Step-by-Step SOP: Claim 100% Fee &amp; GST Refunds
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                If your lender cut unauthorized fees from your personal loan, follow these five steps to claim your money back:
              </p>

              <div className="space-y-3">
                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex items-start gap-4">
                  <span className="w-8 h-8 rounded-full bg-blue-100 text-[#1886ff] font-bold text-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                    1
                  </span>
                  <div className="space-y-1">
                    <h3 className="text-sm font-bold text-slate-900">Compare Loan Papers with Bank Payout</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Download your KFS, sanction letter, and bank account record. Check the exact money paid against the sanctioned loan. Note every rupee deducted before funds reached your account.
                    </p>
                  </div>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex items-start gap-4">
                  <span className="w-8 h-8 rounded-full bg-blue-100 text-[#1886ff] font-bold text-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                    2
                  </span>
                  <div className="space-y-1">
                    <h3 className="text-sm font-bold text-slate-900">Calculate Hidden Charges &amp; 18% GST</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      List each fee that was not in your KFS table. Add the 18% GST collected on that fee. For example, if a bank cut an unlisted ₹10,000 fee plus ₹1,800 GST, claim the full ₹11,800.
                    </p>
                  </div>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex items-start gap-4">
                  <span className="w-8 h-8 rounded-full bg-blue-100 text-[#1886ff] font-bold text-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                    3
                  </span>
                  <div className="space-y-1">
                    <h3 className="text-sm font-bold text-slate-900">Send a Written Dispute to Bank Grievance Desk</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Send a formal email to your bank Grievance Redressal Officer. Cite Paragraph 8 of RBI Circular RBI/2024-25/18. Demand a complete refund within 15 working days.
                    </p>
                  </div>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex items-start gap-4">
                  <span className="w-8 h-8 rounded-full bg-blue-100 text-[#1886ff] font-bold text-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                    4
                  </span>
                  <div className="space-y-1">
                    <h3 className="text-sm font-bold text-slate-900">Escalate to the Principal Nodal Officer</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      If the branch rejects your claim or fails to reply within 15 days, escalate to the Principal Nodal Officer. Attach your KFS copy and highlight the missing fee.
                    </p>
                  </div>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex items-start gap-4">
                  <span className="w-8 h-8 rounded-full bg-blue-100 text-[#1886ff] font-bold text-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                    5
                  </span>
                  <div className="space-y-1">
                    <h3 className="text-sm font-bold text-slate-900">Lodge an RBI Integrated Ombudsman Case</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      If 30 days pass without a refund, file a dispute online at <strong>cms.rbi.org.in</strong>. The Ombudsman can order a direct refund into your bank account plus compensation.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 7: 3-Tier Escalation Matrix */}
            <section id="escalation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4" />
                <span>Institutional Dispute Resolution</span>
              </div>

              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                7. 3-Tier Escalation Matrix: Bank to RBI Ombudsman
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                When disputing hidden fees, following the correct legal steps matters. The table below shows the three dispute levels, response times, and available remedies:
              </p>

              <div className="overflow-x-auto rounded-2xl border border-slate-200/80 shadow-xs bg-white">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
                      <th className="p-3 sm:p-4">Dispute Level</th>
                      <th className="p-3 sm:p-4">Authority Forum</th>
                      <th className="p-3 sm:p-4">Response Time</th>
                      <th className="p-3 sm:p-4">Enforceable Relief</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-600">
                    <tr className="hover:bg-slate-50/80">
                      <td className="p-3 sm:p-4 font-semibold text-slate-900">Tier 1: Bank Branch Desk</td>
                      <td className="p-3 sm:p-4">Branch Head &amp; Bank GRO</td>
                      <td className="p-3 sm:p-4">7 to 15 Days</td>
                      <td className="p-3 sm:p-4">Direct fee reversal, account credit corrections, goodwill waivers</td>
                    </tr>
                    <tr className="hover:bg-slate-50/80">
                      <td className="p-3 sm:p-4 font-semibold text-slate-900">Tier 2: Bank Nodal Desk</td>
                      <td className="p-3 sm:p-4">Principal Nodal Officer (PNO)</td>
                      <td className="p-3 sm:p-4">15 to 30 Days</td>
                      <td className="p-3 sm:p-4">Audit of loan disclosures, GST refund, formal rectification order</td>
                    </tr>
                    <tr className="hover:bg-slate-50/80">
                      <td className="p-3 sm:p-4 font-semibold text-slate-900">Tier 3: RBI Ombudsman</td>
                      <td className="p-3 sm:p-4">RBI Ombudsman (CMS Portal)</td>
                      <td className="p-3 sm:p-4">30 to 45 Days</td>
                      <td className="p-3 sm:p-4 text-emerald-700 font-bold">100% refund order plus up to ₹1 Lakh harassment compensation</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 8: Key Deadlines & Look-Up Period */}
            <section id="key-deadlines" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Clock className="w-4 h-4" />
                <span>Statutory Timelines &amp; Borrower Windows</span>
              </div>

              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                8. Key Deadlines: Response Times &amp; Look-Up Period
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Borrowers must know the key time limits set by the RBI. Knowing these deadlines protects you from lender delays and keeps your claim strong:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-1.5">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                    <Calendar className="w-4 h-4 text-[#1886ff]" />
                    <span>Cooling-Off Look-Up Window</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The KFS must state a look-up window (at least 3 days for loans of 7+ years, 1 day for shorter tenures). You can exit the loan without penalties during this time.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-1.5">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                    <Clock className="w-4 h-4 text-[#1886ff]" />
                    <span>30-Day Bank Reply Window</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The bank has 30 days to resolve your written complaint. If they fail to provide a fair solution, you can approach the RBI Ombudsman on Day 31.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-1.5">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>1-Year Case Time Limit</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    You have one year from receiving the bank rejection letter to file your dispute before the RBI Integrated Ombudsman.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 9: Loan Settlement & Fee Waivers */}
            <section id="personal-loan-settlement" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>Debt Resolution Strategy</span>
              </div>

              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                9. Personal Loan Settlement: Waive Fees in an OTS
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                If you cannot pay your personal loan EMIs due to job loss or illness, hidden fees give you strong legal leverage. When banks add illegal fees, bounce charges, and penal interest, your debt snowballs unfairly.
              </p>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                In a negotiated One-Time Settlement (OTS), CredSettle uses the bank KFS violations to cut your dues. We demand the total removal of all illegal fees and accumulated charges.
              </p>

              <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-3">
                <h3 className="font-bold text-slate-900 text-sm">How CredSettle Resolves Overdue Personal Loans</h3>
                <ul className="space-y-2 text-xs text-slate-600">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Loan Fee Audit:</strong> We check your loan papers to uncover every illegal deduction and calculation error.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Stop Agent Harassment:</strong> We issue legal notices to stop recovery agent visits and phone calls under RBI codes.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span><strong>50% to 75% OTS Relief:</strong> We negotiate a realistic settlement based strictly on genuine principal dues.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Official No Dues Letter:</strong> We ensure you receive an official bank closure letter and clean credit reporting.</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* SECTION 10: About CredSettle */}
            <section id="company-profile" className="scroll-target space-y-4 pt-2">
              <CompanySection />
            </section>

            {/* SECTION 11: Frequently Asked Questions */}
            <section id="frequently-asked-questions" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <HelpCircle className="w-4 h-4" />
                <span>Common Inquiries Answered</span>
              </div>

              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                Frequently Asked Questions: KFS Fees &amp; RBI Refunds
              </h2>

              <div className="space-y-3">
                {faqs.map((faq, index) => {
                  const isOpen = openFaq === index;
                  return (
                    <div
                      key={index}
                      className="rounded-2xl border border-slate-200/80 bg-white overflow-hidden transition-all shadow-xs"
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

            {/* SECTION 12: Statutory Citations & Outbound Authority Grid */}
            <section id="regulatory-sources" className="scroll-target space-y-4 pt-4 border-t border-slate-200">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-500">
                <BookOpen className="w-4 h-4" />
                <span>Statutory Citations &amp; Legal Authorities</span>
              </div>

              <h2 className="text-base sm:text-lg font-bold text-slate-900">
                Statutory Citations: Official Banking Regulations
              </h2>

              <ul className="space-y-2 text-xs text-slate-600 leading-relaxed list-disc pl-5">
                <li>
                  <strong>RBI Circular (April 15, 2024):</strong> Key Facts Statement (KFS) for Loans &amp; Advances (RBI/2024-25/18 DOR.STR.REC.13/13.03.00/2024-25) mandating zero unlisted fees.
                </li>
                <li>
                  <strong>Banking Regulation Act, 1949:</strong> Sections 21 and 35A empowering the Reserve Bank of India to regulate interest rates and credit fee structures.
                </li>
                <li>
                  <strong>RBI Digital Lending Guidelines (2022):</strong> Circular RBI/2022-23/111 mandating transparent KFS disclosures for digital personal loan apps.
                </li>
                <li>
                  <strong>Consumer Protection Act, 2019:</strong> Section 2(11) (Deficiency in Service), Section 2(46) (Unfair Contract), and Section 2(47) (Unfair Trade Practice).
                </li>
                <li>
                  <strong>Reserve Bank - Integrated Ombudsman Scheme, 2021:</strong> Redressal for undisclosed fees, non-adherence to fair lending codes, and arbitrary loan deductions.
                </li>
              </ul>

              {/* 6 Outbound Authority Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Verified Government &amp; Regulatory Portals:</span>
                <div className="flex flex-wrap gap-2">
                  <a href="https://www.rbi.org.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>Reserve Bank of India</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://cms.rbi.org.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>RBI Integrated Ombudsman Portal</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.indiacode.nic.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>India Code Statutory Repository</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="http://ncdrc.nic.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>National Consumer Disputes Redressal Commission</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://consumerhelpline.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>National Consumer Helpline</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://nalsa.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>National Legal Services Authority</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Internal Topic Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Explore Related CredSettle Guides:</span>
                <div className="flex flex-wrap gap-2">
                  <Link href="/services/personal-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Personal Loan Settlement Services
                  </Link>
                  <Link href="/rbi-5000-per-day-delay-compensation-property-documents" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    RBI Property Documents Delay Penalty
                  </Link>
                  <Link href="/rbi-100-per-day-compensation-for-delayed-cibil-report-update" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    RBI CIBIL Delay Compensation
                  </Link>
                  <Link href="/arbitration-notice-personal-loan-default" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Arbitration Notice for Loan Default
                  </Link>
                  <Link href="/axis-bank-personal-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Axis Bank Loan Settlement
                  </Link>
                  <Link href="/bajaj-finserv-personal-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Bajaj Finserv Loan Settlement
                  </Link>
                  <Link href="/bank-sent-legal-notice-for-loan-what-to-do" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Bank Legal Notice Defense
                  </Link>
                  <Link href="/stop-recovery-agent-harassment" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Stop Recovery Harassment
                  </Link>
                  <Link href="/rbi-rules-for-recovery-agents" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    RBI Recovery Agent Guidelines
                  </Link>
                  <Link href="/get-noc-after-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    No Dues Certificate Guide
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
                Expert in banking regulations, RBI Fair Lending Directions, KFS compliance audits, and negotiated personal loan debt settlements.
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
                  PERSONAL LOAN FEE &amp; DEBT RELIEF
                </span>
                <p className="text-lg md:text-xl font-bold text-white leading-snug">
                  Deducted Hidden Fees on Your Personal Loan?
                </p>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our legal team audits your Key Facts Statement, files RBI Ombudsman refund claims, and negotiates massive waivers on delinquent loans.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Request Free Loan Audit
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
              <p className="font-bold text-slate-900 text-sm">The CredSettle Assurance</p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>KFS Fee Audits:</strong> Uncover hidden deductions &amp; illegal charges.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Ombudsman Escalations:</strong> Structured RBI CMS dispute filings.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Penalty &amp; Interest Waivers:</strong> Clean OTS negotiation on defaults.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>CIBIL &amp; NOC Protection:</strong> Verified bank closure reporting.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">Related Legal Guides</p>
              <div className="space-y-2.5">
                <Link
                  href="/services/personal-loan-settlement"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Personal Loan Settlement Services
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Legal debt relief &amp; NOC &rarr;</span>
                </Link>

                <Link
                  href="/arbitration-notice-personal-loan-default"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Arbitration Notice for Loan Default
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Defense &amp; reply strategy &rarr;</span>
                </Link>

                <Link
                  href="/rbi-rules-for-recovery-agents"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    RBI Recovery Agent Guidelines
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Stop illegal harassment &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
