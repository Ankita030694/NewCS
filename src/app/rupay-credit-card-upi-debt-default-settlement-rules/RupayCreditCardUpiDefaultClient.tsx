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
  Briefcase,
  Bookmark,
  ArrowRight,
  Clock,
  UserCheck,
  Sparkles,
  Gavel,
  Landmark,
  Calendar
} from 'lucide-react';

export default function RupayCreditCardUpiDefaultClient() {
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
    { id: 'quick-crux', label: 'Executive Brief & Quick Answer' },
    { id: 'npci-upi-architecture', label: '1. Savings UPI Block Check' },
    { id: 'same-bank-setoff-risk', label: '2. Same-Bank Set-Off Risk' },
    { id: 'rbi-statutory-framework', label: '3. RBI Card & OTS Rules' },
    { id: 'civil-debt-vs-section-25', label: '4. Civil Debt vs Section 25' },
    { id: 'visual-blueprint', label: '5. Visual Blueprint Guide' },
    { id: 'calculation-matrix', label: '6. OTS Waiver Calculation' },
    { id: 'court-judgments-rights', label: '7. Court Rulings & Rights' },
    { id: 'step-by-step-sop', label: '8. 6-Step Settlement SOP' },
    { id: 'delinquency-timeline', label: '9. Default to NPA Timeline' },
    { id: 'escalation-matrix', label: '10. Escalation & UPI Traps' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Portals' }
  ];

  const faqs = [
    {
      q: 'Does defaulting on a RuPay credit card block my normal savings bank UPI?',
      a: 'No. On the NPCI network, your RuPay card and your savings account use separate links and separate UPI PINs. If the card is blocked for unpaid bills, UPI transfers from savings accounts in other banks keep working.'
    },
    {
      q: 'Can the card-issuing bank freeze my savings account in the same bank?',
      a: 'Yes. If your savings or salary account is in the same bank that issued your RuPay card, the bank can claim a general lien under Section 171 of the Indian Contract Act, 1872. Keep daily funds in a different bank to prevent holds.'
    },
    {
      q: 'Is unpaid RuPay UPI credit card debt a crime under Section 25 of the PSS Act?',
      a: 'No. Shop QR spends on a RuPay card are already paid to the shop by the bank. Unpaid card bills are a civil debt. Section 25 of the PSS Act, 2007 applies only if an e-NACH or AutoPay debit bounces for low funds.'
    },
    {
      q: 'When can I apply for a One-Time Settlement (OTS) on a RuPay credit card?',
      a: 'Banks usually open One-Time Settlement talks after your card crosses 90 days of non-payment and turns into an NPA. Under the RBI circular dated June 8, 2023, every bank follows a board-approved policy to settle stressed dues.'
    },
    {
      q: 'How much waiver do banks give in a RuPay credit card settlement?',
      a: 'In genuine hardship cases like job loss or illness, banks often waive 100% of late fees, added interest, and GST. Final lump-sum payouts often land between 35% and 55% of the total inflated bill.'
    },
    {
      q: 'What happens to active UPI EMIs when a RuPay credit card defaults?',
      a: 'When a RuPay card enters NPA stage, the bank cancels all unbilled shop or UPI EMIs. The left-over principal of those EMIs merges into one card balance. You can settle the full merged balance under one OTS letter.'
    },
    {
      q: 'How fast must the bank update CIBIL after I pay the RuPay card settlement?',
      a: 'Under RBI circular RBI/2024-25/60 effective January 1, 2025, banks must update credit bureaus every 15 days on the 15th and last day of each month. Unresolved credit report disputes past 30 days carry ₹100 per day pay.'
    },
    {
      q: 'Can recovery agents call my contacts or visit at night for RuPay UPI card dues?',
      a: 'No. Under RBI circular DOR.ORG.REC.65/21.04.158/2022-23, agents cannot call before 8:00 AM or after 7:00 PM. They cannot shame you, call your family, or threaten police arrest for civil credit card debt.'
    },
    {
      q: 'How is a RuPay Credit Card on UPI different from a Credit Line on UPI?',
      a: 'A RuPay card runs on the RuPay card network and gives a normal interest-free grace period under RBI Card Rules. A Credit Line on UPI is a direct bank loan line mapped to UPI without a card network.'
    },
    {
      q: 'How does CredSettle help settle RuPay UPI credit card defaults safely?',
      a: 'CredSettle stops rogue recovery calls, checks your bills for unfair fees, checks official bank OTS letters, cuts inflated card dues, and helps you get a valid No Dues Certificate and clean CIBIL update.'
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
            <span>RBI Credit Card Rules &amp; NPCI UPI Law</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Does RuPay UPI Credit Card Default Block Savings UPI?
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            Missed your RuPay credit card bill after daily UPI QR scans? See why your other bank UPI apps stay safe. Learn how to avoid same-bank account holds and settle debt under RBI rules.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Settle RuPay Card Debt Now</span>
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
                  <span>Borrower Legal Shield</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Protected under RBI Circular DOR.STR.REC.20 and RBI Card Rules, 2022.
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
                <span>QUICK BRIEF: RUPAY UPI CARD DEFAULT RULES</span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Other Bank UPI Stays Safe:</strong> Missing a RuPay card bill blocks only that card line. Your savings accounts in other banks keep working on Google Pay, PhonePe, and BHIM.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Same-Bank Hold Risk:</strong> If your salary or savings account is in the same bank, that lender can hold funds under Section 171 of the Indian Contract Act, 1872.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Civil Debt Only:</strong> Shop QR spends on a RuPay card create civil debt. Section 25 of the PSS Act applies only if a separate e-NACH or AutoPay debit bounces.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">RBI Settlement Rules:</strong> Under RBI Circular DOR.STR.REC.20 dated June 8, 2023, banks can close unpaid card debt via One-Time Settlement (OTS) after 90 days.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Fast 15-Day CIBIL Sync:</strong> Since January 1, 2025, RBI requires banks to send credit bureau updates every 15 days so settled dues show zero balance fast.
                  </span>
                </li>
              </ul>
            </div>

            {/* SECTION 1: Does RuPay Credit Card Default Block Savings UPI? */}
            <section id="npci-upi-architecture" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>NPCI UPI Rules &amp; Quick Answer</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. Does RuPay Credit Card Default Block Savings UPI?
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The short answer is no. Missing your RuPay credit card bill does not ban your phone number on UPI. Recovery callers often claim that NPCI will lock all your UPI apps across India. That threat is false.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The Reserve Bank of India approved RuPay credit cards on UPI in June 2022. NPCI then set the operating rules in Circular NPCI/2022-23/RuPay/019 and Circular 019-A. Inside BHIM, PhonePe, Paytm, and Google Pay, your credit card and your savings account run on two separate tracks.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Each account uses its own bank link and its own UPI PIN. RuPay credit cards on UPI work only when you scan a shop or merchant QR code. NPCI blocks peer-to-peer transfers, cash withdrawals, and card-to-card transfers on this card link.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When your card bill goes unpaid, the bank blocks only the RuPay card limit. QR scans using that card will fail. Yet your savings accounts in other banks will keep sending and receiving UPI money as normal.
              </p>
            </section>

            {/* SECTION 2: Same-Bank Savings UPI Risk: Section 171 Set-Off Law */}
            <section id="same-bank-setoff-risk" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <AlertTriangle className="w-4 h-4 text-[#1886ff]" />
                <span>Same-Bank Lien &amp; Hold Rules</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. Same-Bank Savings UPI Risk: Section 171 Set-Off Law
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                There is one major trap you must watch out for. Suppose your RuPay credit card and your main salary or savings account sit in the exact same bank. Then UPI payments from that savings account can stop working.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Banks do this using <Link href="/bankers-right-of-set-off-on-savings-account-section-171-contract-act" className="text-[#1886ff] font-semibold hover:underline">Section 171 of the Indian Contract Act, 1872</Link>. This law gives a bank a general lien and a right of set-off. It lets the bank hold or deduct cash from your savings balance in the same bank to clear overdue card bills.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Still, a bank&apos;s lien power has strict legal limits. A lender cannot touch money kept in a different bank without a civil court order. Even inside the same bank, three key rules protect you:
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700 list-disc pl-5 leading-relaxed">
                <li>
                  <strong>Same Owner Rule:</strong> Both accounts must belong to the same person in the same role. A bank cannot freeze a <Link href="/can-bank-freeze-joint-savings-account-co-holder-loan-default" className="text-[#1886ff] font-semibold hover:underline">joint savings account</Link> held with your spouse or parent unless they signed for the card.
                </li>
                <li>
                  <strong>Fair Notice Rule:</strong> Consumer courts hold that banks must send clear notice before sweeping money from a salary account.
                </li>
                <li>
                  <strong>Protected Subsistence Pay:</strong> Basic wages, pensions, and provident fund payouts have strong legal shields under Section 60 of the Code of Civil Procedure, 1908.
                </li>
              </ul>
            </section>

            {/* SECTION 3: Legal Framework: RBI Credit Card & Settlement Rules */}
            <section id="rbi-statutory-framework" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Landmark className="w-4 h-4 text-[#1886ff]" />
                <span>RBI Circulars &amp; Card Conduct Rules</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Legal Framework: RBI Credit Card &amp; Settlement Rules
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Small ₹100 and ₹500 QR scans feel easy at local shops. Under NPCI rules, RuPay card UPI spends up to ₹2,000 carry zero merchant fee, so nearly every shop accepts them. When a job loss or illness strikes, 36% to 45% yearly card interest fast doubles the bill.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Even though you paid via UPI, your debt follows two core Reserve Bank of India rulebooks. First is the RBI Master Direction on Credit Card and Debit Card Issuance and Conduct, 2022, updated on March 7, 2024. Second is RBI Circular DOR.STR.REC.20 dated June 8, 2023 on Compromise Settlements.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                These RBI rules curb unfair bank charges and set clear settlement rights for borrowers:
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700 list-disc pl-5 leading-relaxed">
                <li>
                  <strong>3-Day Free Grace Window:</strong> Banks cannot add late fees or report a default unless a bill stays unpaid for more than three days past the due date.
                </li>
                <li>
                  <strong>No Compounding on Fees:</strong> Card issuers cannot fold unpaid late fees or taxes into principal to charge extra interest on top of fees.
                </li>
                <li>
                  <strong>Fair Balance Interest:</strong> Under the March 2024 update, banks can charge interest only on the left-over unpaid balance after counting part payments and refunds.
                </li>
                <li>
                  <strong>Board-Approved OTS Policy:</strong> The June 8, 2023 RBI circular directs every bank and NBFC to maintain a board-approved policy for lump-sum cash settlements.
                </li>
              </ul>
            </section>

            {/* SECTION 4: Civil Debt vs Section 25 PSS Act: Criminal Myth Check */}
            <section id="civil-debt-vs-section-25" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>Civil Debt vs Electronic Bounce Law</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. Civil Debt vs Section 25 PSS Act: Criminal Myth Check
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Recovery agents often scare RuPay card users by naming Section 25 of the Payment and Settlement Systems (PSS) Act, 2007. They claim that because you used UPI, an unpaid card bill is a crime like a cheque bounce.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Here is the clear legal truth. When you scanned a shop QR code with your RuPay card, your bank paid the shop right away. That UPI payment did not fail. Missing your monthly card bill later is a pure civil debt. Police cannot arrest you for an unpaid credit card bill.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Section 25 of the PSS Act applies only when an electronic auto-debit set up to pay your bill bounces due to low bank balance. Even then, the bank must send a written notice within 30 days and give you 15 days to pay before going to court.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Default Scenario</th>
                      <th className="p-3">Legal Nature</th>
                      <th className="p-3">Section 25 PSS Act Risk</th>
                      <th className="p-3">Actual Bank Remedy</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Unpaid Monthly RuPay UPI Card Statement</td>
                      <td className="p-3 text-emerald-700 font-semibold">100% Civil Debt</td>
                      <td className="p-3">Zero criminal bounce liability</td>
                      <td className="p-3">CIBIL reporting, civil suit, arbitration, or OTS</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Unbilled UPI Purchase EMIs After Card Block</td>
                      <td className="p-3 text-emerald-700 font-semibold">100% Civil Debt</td>
                      <td className="p-3">Zero criminal bounce liability</td>
                      <td className="p-3">EMIs cancel and merge into card principal for OTS</td>
                    </tr>
                    <tr className="bg-amber-50/50">
                      <td className="p-3 font-bold text-slate-900">Active e-NACH or Auto-Debit Mandate Dishonor</td>
                      <td className="p-3 text-amber-700 font-semibold">Bounce Notice Trigger</td>
                      <td className="p-3">Only after 30-day notice &amp; 15-day pay window</td>
                      <td className="p-3">Bounce fee, legal notice, or closure via OTS</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Pre-Sanctioned Bank Credit Line on UPI Overdue</td>
                      <td className="p-3 text-blue-700 font-semibold">Civil Loan Debt</td>
                      <td className="p-3">Zero unless repayment NACH fails</td>
                      <td className="p-3">Follows bank KFS loan terms and OTS policy</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 5: Visual Blueprint Infographic */}
            <section id="visual-blueprint" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Sparkles className="w-4 h-4 text-[#1886ff]" />
                <span>Visual Blueprint</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. Visual Blueprint: RuPay UPI Default &amp; OTS Shield
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This visual chart shows how NPCI keeps your RuPay credit card separate from other savings UPI accounts. It also maps how RBI settlement rules help you clear overdue card bills for less.
              </p>

              <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-slate-100 bg-slate-100">
                  <Image
                    src="/images/infographics/rupay-credit-card-upi-debt-default-settlement-rules.jpg"
                    alt="RuPay Credit Card UPI Debt Default and RBI Settlement Rules Blueprint"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 900px"
                    className="object-contain hover:scale-[1.01] transition-transform duration-300"
                    priority
                  />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-500 pt-1 gap-2">
                  <span>Official CredSettle RuPay UPI Debt Shield • RBI &amp; NPCI Compliant</span>
                  <a
                    href="/images/infographics/rupay-credit-card-upi-debt-default-settlement-rules.jpg"
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

            {/* SECTION 6: OTS Math: Principal vs Interest & GST Waivers */}
            <section id="calculation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                <span>Settlement Math &amp; Waiver Example</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. OTS Math: Principal vs Interest &amp; GST Waivers
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Paying only the <Link href="/what-is-minimum-amount-due-for-credit-card" className="text-[#1886ff] font-semibold hover:underline">Minimum Amount Due</Link> ends your interest-free grace days. Every new ₹200 tea or grocery QR scan starts adding daily interest from day one. On top of that, 18% GST applies to every rupee of interest and late fee.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                After 90 days of non-payment, the card becomes a Non-Performing Asset (NPA). In a One-Time Settlement, banks often waive 100% of unpaid interest, late fees, and related GST, plus a cut on principal.
              </p>

              {/* Representative Calculation Card */}
              <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white shadow-xs">
                <div className="bg-slate-900 text-white p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-[#1886ff]" />
                    <span className="font-bold text-sm">Sample ₹1,20,000 RuPay UPI Card OTS Breakdown</span>
                  </div>
                  <span className="text-xs text-blue-300 font-mono">180 Days Past Due (Post-NPA)</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80">
                    <thead>
                      <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-semibold">
                        <th className="p-3">Bill Component</th>
                        <th className="p-3">Inflated Bank Demand</th>
                        <th className="p-3">Typical OTS Treatment</th>
                        <th className="p-3 text-right">Estimated Payable in OTS</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200/80 text-slate-600">
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Actual Merchant QR Spend &amp; EMI Principal</td>
                        <td className="p-3 font-mono">₹1,20,000</td>
                        <td className="p-3 text-emerald-600 font-semibold">Negotiated Principal Cut</td>
                        <td className="p-3 text-right font-bold text-slate-900 font-mono">₹72,000 to ₹85,000</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Revolving Finance Charges (42% APR)</td>
                        <td className="p-3 font-mono text-amber-600 font-bold">₹46,800</td>
                        <td className="p-3 text-emerald-600 font-semibold">100% Waiver Targeted</td>
                        <td className="p-3 text-right font-bold text-emerald-700 font-mono">₹0 (Waived)</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Late Payment &amp; Overlimit Fees</td>
                        <td className="p-3 font-mono text-rose-600 font-bold">₹14,500</td>
                        <td className="p-3 text-emerald-600 font-semibold">100% Waiver Targeted</td>
                        <td className="p-3 text-right font-bold text-emerald-700 font-mono">₹0 (Waived)</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">18% GST on Unpaid Interest &amp; Fees</td>
                        <td className="p-3 font-mono text-rose-700 font-bold">₹11,034</td>
                        <td className="p-3 text-emerald-600 font-semibold">Reversed With Waived Dues</td>
                        <td className="p-3 text-right font-bold text-emerald-700 font-mono">₹0 (Reversed)</td>
                      </tr>
                      <tr className="bg-blue-50/70 font-bold text-slate-900">
                        <td className="p-3">Total Final Liability</td>
                        <td className="p-3 font-mono text-rose-700">₹1,92,334</td>
                        <td className="p-3 text-[#1886ff]">55% to 62% Total Relief</td>
                        <td className="p-3 text-right text-[#1886ff] text-sm sm:text-base font-mono">₹72,000 to ₹85,000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Note: Banks grant settlements under their own board-approved RBI policy. Final savings depend on your hardship proof, overdue age, and lump-sum cash offer.
              </p>
            </section>

            {/* SECTION 7: Supreme Court Rulings & Borrower Recovery Rights */}
            <section id="court-judgments-rights" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <ShieldCheck className="w-4 h-4 text-[#1886ff]" />
                <span>Court Precedents &amp; Recovery Rights</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. Supreme Court Rulings &amp; Borrower Recovery Rights
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Unpaid card debt never takes away your right to dignity and peace. Both the Supreme Court of India and RBI Circular DOR.ORG.REC.65 dated August 12, 2022 hold banks strictly liable for rogue recovery agents.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                    <Gavel className="w-4 h-4" />
                    <span>ICICI Bank Ltd. v. Prakash Kaur (2007)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The Supreme Court ruled that banks cannot use musclemen, threats, or force to collect money. Lenders must follow lawful court steps at all times.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                    <Scale className="w-4 h-4" />
                    <span>Syndicate Bank v. Vijay Kumar (1992)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The Supreme Court defined the limits of Section 171 bank liens. Banks can hold funds only when accounts share the same owner and role, and never against clear contract terms.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-purple-700 font-bold text-sm">
                    <Clock className="w-4 h-4" />
                    <span>Strict 8:00 AM to 7:00 PM Call Rule</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under RBI&apos;s August 2022 circular, agents cannot call you before 8:00 AM or after 7:00 PM. The bank must also text or email you the agent&apos;s name first.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <Lock className="w-4 h-4" />
                    <span>Privacy &amp; Disputed Bill Shield</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Agents cannot call your boss, friends, or relatives. Also, a bank cannot mark you as a CIBIL defaulter while a valid billing dispute is still open.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 8: Step-by-Step SOP: Settling RuPay UPI Credit Card Debt */}
            <section id="step-by-step-sop" className="scroll-target space-y-6">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>6-Step Action Plan</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. Step-by-Step SOP: Settling RuPay UPI Credit Card Debt
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Follow these six clear steps to keep your daily UPI safe, stop endless late fees, and close your RuPay card debt legally.
              </p>

              <div className="space-y-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">1</span>
                    Stage 1: Delink Card &amp; Cancel AutoPay Mandates
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Remove the overdue RuPay card from your UPI app so you avoid overlimit fees. Also <Link href="/stop-auto-debit-ecs-bounce-charges" className="text-[#1886ff] font-semibold hover:underline">stop recurring AutoPay or e-NACH debits</Link> so your bank account does not rack up bounce fees.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">2</span>
                    Stage 2: Keep Salary &amp; Daily UPI in Another Bank
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Keep your monthly pay and home bill money in a bank where you owe zero loans or cards. This keeps your family&apos;s daily UPI safe from Section 171 holds.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">3</span>
                    Stage 3: Check Bills, QR Refunds &amp; Unbilled EMIs
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Download your last six card statements. Separate your true shop spends from added interest, GST, and UPI EMIs. Flag any failed QR double-charges on UPIHelp right away.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">4</span>
                    Stage 4: Send Hardship Proof After 90-Day NPA Stage
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Write to the bank&apos;s nodal settlement desk with proof of job loss, pay cuts, or medical bills. Skip tiny token payments to agents because small sums only get eaten by interest.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">5</span>
                    Stage 5: Check Official Bank OTS Letter Before Paying
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Never pay cash or send money to an agent&apos;s private UPI ID. Always <Link href="/how-to-verify-bank-ots-sanction-letter-avoid-settlement-scams" className="text-[#1886ff] font-semibold hover:underline">check the official OTS letter</Link> from the bank&apos;s real email domain and pay straight to your 16-digit card number.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">6</span>
                    Stage 6: Collect No Dues Letter &amp; Check CIBIL Update
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Collect your written <Link href="/get-noc-after-loan-settlement" className="text-[#1886ff] font-semibold hover:underline">No Dues Certificate (NDC)</Link> once your OTS payment clears. Check that CIBIL and Experian show ₹0 overdue within the 15-day RBI reporting cycle.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 9: Default Timeline: Due Date to NPA & Bureau Update */}
            <section id="delinquency-timeline" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Calendar className="w-4 h-4 text-[#1886ff]" />
                <span>Key Timelines &amp; Deadlines</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Default Timeline: Due Date to NPA &amp; Bureau Update
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Knowing exact RBI timelines helps you track when late fees start, when card blocks happen, and when banks open settlement talks.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Days Past Due (DPD)</th>
                      <th className="p-3">Account Stage</th>
                      <th className="p-3">Bank &amp; UPI Action</th>
                      <th className="p-3">Recommended Borrower Step</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 1 to Day 3</td>
                      <td className="p-3 font-mono text-[11px] text-emerald-700 font-bold">RBI Grace Window</td>
                      <td className="p-3">Zero late fee and zero CIBIL hit allowed under RBI Card Rules.</td>
                      <td className="p-3">Pay total bill within 3 days to avoid all charges.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 4 to Day 30</td>
                      <td className="p-3 font-mono text-[11px]">SMA-0 Stage</td>
                      <td className="p-3">Late fees and daily interest start; bank blocks RuPay card UPI PIN.</td>
                      <td className="p-3">Delink card from UPI apps and stop recurring debits.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 31 to Day 89</td>
                      <td className="p-3 font-mono text-[11px]">SMA-1 &amp; SMA-2</td>
                      <td className="p-3">Call volume rises; bank sends prior notice before bureau default report.</td>
                      <td className="p-3">Gather hardship proof and record any odd-hour agent calls.</td>
                    </tr>
                    <tr className="bg-amber-50/50">
                      <td className="p-3 font-bold text-slate-900">Day 90 and Above</td>
                      <td className="p-3 font-mono text-[11px] text-amber-700 font-bold">NPA Stage</td>
                      <td className="p-3">Card closes permanently; unbilled UPI EMIs merge into one balance.</td>
                      <td className="p-3 font-bold text-amber-800">Start formal One-Time Settlement under RBI June 2023 rules.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">OTS + 15 to 30 Days</td>
                      <td className="p-3 font-mono text-[11px] text-[#1886ff] font-bold">Closure &amp; Sync</td>
                      <td className="p-3">Bank gives No Dues Letter and sends 15-day update to all bureaus.</td>
                      <td className="p-3 font-bold text-slate-900">Check ₹0 balance on CIBIL or claim ₹100/day delay pay.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: Escalation Matrix & Specialized UPI Debt Traps */}
            <section id="escalation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>Complaint Steps &amp; Common Mistakes</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                10. Escalation Matrix &amp; Specialized UPI Debt Traps
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If a bank freezes your salary account without notice, delays your NOC, or allows <Link href="/stop-recovery-agent-harassment" className="text-[#1886ff] font-semibold hover:underline">recovery agent harassment</Link>, use this official three-tier RBI complaint path.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Escalation Tier</th>
                      <th className="p-3">Authority / Portal</th>
                      <th className="p-3">Turnaround Time</th>
                      <th className="p-3">Issues Resolved</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 1: GRO &amp; UPIHelp</td>
                      <td className="p-3">Card Grievance Officer / NPCI ODR</td>
                      <td className="p-3 font-mono">5 to 10 Working Days</td>
                      <td className="p-3">Failed QR double-debits, wrong late fees, and agent call complaints.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 2: PNO</td>
                      <td className="p-3">Principal Nodal Officer (Head Office)</td>
                      <td className="p-3 font-mono">15 to 21 Working Days</td>
                      <td className="p-3">Unfair salary or joint account holds, OTS review, and late NOCs.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Level 3: RBI Ombudsman</td>
                      <td className="p-3">Integrated Ombudsman (cms.rbi.org.in)</td>
                      <td className="p-3 font-mono">30 Days Post-PNO</td>
                      <td className="p-3">Binding orders for compensation, CIBIL fixes, and harassment relief.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-[#1886ff]" />
                    Credit Card vs Credit Line on UPI
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Do not mix up a RuPay card with a Credit Line on UPI. Bank credit lines work like direct overdrafts without a card network and may charge daily interest from day one.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-600" />
                    Avoid Shop QR Cash Rotation
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Scanning a friend&apos;s shop QR code to pull cash and pay another card breaks bank end-use rules. Banks spot circular transfers fast, block the card, and demand full payment.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-indigo-600" />
                    Check Merged UPI EMIs in OTS
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Make sure your OTS letter covers all cancelled UPI shop EMIs. That way, no hidden EMI sub-loan stays active on your CIBIL report after you pay.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-emerald-600" />
                    Post-OTS Cooling-Off Rule
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under RBI&apos;s June 2023 circular, the settling bank sets a cooling-off wait (often 12 months) before giving new loans. You can use an FD-backed card to rebuild your score faster.
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
                <HelpCircle className="w-4 h-4 text-[#1886ff]" />
                <span>Direct Answers</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Frequently Asked Questions: RuPay UPI Card Settlement
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Clear, plain-English answers on RuPay UPI credit card defaults, savings account safety, Section 25 notices, and RBI settlement rules.
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
                <BookOpen className="w-4 h-4" />
                <span>Statutory Citations &amp; Legal Authorities</span>
              </div>
              <h2 className="text-base sm:text-lg font-bold text-slate-900">
                Official Regulatory Citations &amp; Legal Authorities
              </h2>
              <ul className="space-y-2 text-xs text-slate-600 leading-relaxed list-disc pl-5">
                <li>
                  <strong>RBI Credit Card Directions:</strong> DoR.AUT.REC.No.27/24.01.041/2022-23 (Credit Card and Debit Card Issuance and Conduct Directions, 2022), updated via DOR.RAUG.AUT.REC.No.81 dated March 7, 2024.
                </li>
                <li>
                  <strong>RBI Settlement Circular:</strong> RBI/2023-24/40, DOR.STR.REC.20/21.04.048/2023-24 dated June 8, 2023 (Framework for Compromise Settlements and Technical Write-offs).
                </li>
                <li>
                  <strong>NPCI RuPay on UPI Rules:</strong> Circular NPCI/2022-23/RuPay/019 dated October 4, 2022 and Circular NPCI/2022-23/RuPay/019-A dated December 7, 2022.
                </li>
                <li>
                  <strong>RBI Recovery &amp; CIBIL Rules:</strong> Circular DOR.ORG.REC.65/21.04.158/2022-23 dated August 12, 2022 and Circular RBI/2024-25/60, DoR.FIN.REC.No.32 (15-Day Credit Bureau Reporting).
                </li>
                <li>
                  <strong>Acts &amp; Supreme Court Cases:</strong> Section 171 of the Indian Contract Act, 1872. Section 25 of the Payment and Settlement Systems Act, 2007. ICICI Bank Ltd. v. Prakash Kaur (2007) 2 SCC 711. Syndicate Bank v. Vijay Kumar (1992) 2 SCC 330.
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
                  <a href="https://www.npci.org.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>NPCI Official Portal</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://cms.rbi.org.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>RBI Ombudsman Portal</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.indiacode.nic.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>India Code Laws</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="http://ncdrc.nic.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>NCDRC Consumer Court</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://consumerhelpline.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>National Consumer Helpline</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* 10 Internal Topic Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Explore Related CredSettle Guides:</span>
                <div className="flex flex-wrap gap-2">
                  <Link href="/services/credit-card-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Credit Card Settlement
                  </Link>
                  <Link href="/bankers-right-of-set-off-on-savings-account-section-171-contract-act" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Section 171 Bank Set-Off
                  </Link>
                  <Link href="/can-bank-freeze-joint-savings-account-co-holder-loan-default" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Joint Account Freeze Rules
                  </Link>
                  <Link href="/how-to-verify-bank-ots-sanction-letter-avoid-settlement-scams" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Verify Bank OTS Letter
                  </Link>
                  <Link href="/get-noc-after-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    No Dues Certificate Guide
                  </Link>
                  <Link href="/rbi-100-per-day-compensation-for-delayed-cibil-report-update" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    RBI ₹100/Day CIBIL Rule
                  </Link>
                  <Link href="/stop-recovery-agent-harassment" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Stop Recovery Harassment
                  </Link>
                  <Link href="/rbi-rules-for-recovery-agents" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    RBI Recovery Rules
                  </Link>
                  <Link href="/what-is-minimum-amount-due-for-credit-card" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Minimum Amount Due Trap
                  </Link>
                  <Link href="/stop-auto-debit-ecs-bounce-charges" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Stop Auto-Debit Bounce Fees
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
                    Legal &amp; Debt Resolution Expert
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Expert in credit card debt relief, RBI UPI payment rules, borrower legal defense, and One-Time Settlements across Indian banks and card issuers.
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
                  CREDIT CARD RELIEF DESK
                </span>
                <p className="text-lg md:text-xl font-bold text-white leading-snug">
                  Stuck With High RuPay UPI Card Bills?
                </p>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our legal team stops rogue recovery calls, guards your salary UPI account from unfair holds, and negotiates official bank OTS waivers up to 50%-65% off total dues.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Check Your OTS Eligibility
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
                  <span>RBI Compliant • 100% Private</span>
                </div>
              </div>
            </div>

            {/* Card 3: CredSettle Trust Badges */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">The CredSettle Promise</p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Stop Harassment:</strong> Legal shield against odd-hour agent calls.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Verified OTS Letters:</strong> Full check before you pay a single rupee.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Merged EMI Closure:</strong> Closes card spends and UPI EMIs together.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>15-Day CIBIL Check:</strong> Tracks zero due updates across all bureaus.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">Related Legal Guides</p>
              <div className="space-y-2.5">
                <Link
                  href="/bankers-right-of-set-off-on-savings-account-section-171-contract-act"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Banker&apos;s Right of Set-Off on Savings
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Section 171 lien defense &rarr;</span>
                </Link>

                <Link
                  href="/how-to-verify-bank-ots-sanction-letter-avoid-settlement-scams"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Verify Bank OTS Sanction Letter
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Avoid fake settlement scams &rarr;</span>
                </Link>

                <Link
                  href="/rbi-100-per-day-compensation-for-delayed-cibil-report-update"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    RBI ₹100/Day CIBIL Update Rule
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Fix post-OTS bureau delays &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
