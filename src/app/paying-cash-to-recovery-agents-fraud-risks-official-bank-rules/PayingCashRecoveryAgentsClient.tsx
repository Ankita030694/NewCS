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
  Ban,
  QrCode,
  Receipt
} from 'lucide-react';

export default function PayingCashRecoveryAgentsClient() {
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
    { id: 'official-bank-rules', label: '1. Official Bank Rules: Can Agents Collect Cash?' },
    { id: 'fraud-risks-breakdown', label: '2. Top 5 Cash Payment Fraud Risks for Borrowers' },
    { id: 'comparative-matrix', label: '3. Comparative Matrix: Cash vs Official Channels' },
    { id: 'legal-tax-liabilities', label: '4. Legal & Tax Liabilities: Section 269ST Limits' },
    { id: 'visual-blueprint', label: '5. Visual Blueprint: Cash Payment Risk Architecture' },
    { id: 'step-by-step-sop', label: '6. Step-by-Step SOP: Safe Debt Repayment Protocol' },
    { id: 'victim-redressal-guide', label: '7. Scammed by an Agent: 5-Step Legal Redressal Guide' },
    { id: 'escalation-matrix', label: '8. 3-Tier Escalation Matrix: Bank to RBI Ombudsman' },
    { id: 'procedural-timeline', label: '9. Dispute Resolution Milestones & Legal Timelines' },
    { id: 'street-scams-breakdown', label: '10. Common Street Scams: QR Codes & Fake Receipts' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Official Regulatory Citations & Authorities' }
  ];

  const faqs = [
    {
      q: 'Is it legal to pay cash to a loan recovery agent in India?',
      a: 'Major banks strictly forbid cash collections by field agents. While RBI rules require receipts for any collection, paying cash carries extreme fraud risks. Rogue agents often pocket the money, leaving your loan unpaid.'
    },
    {
      q: 'What should I do if a recovery agent demands cash for a quick discount?',
      a: 'Never pay cash for verbal discount promises. Recovery agents have zero legal power to grant waivers. Genuine settlements require an official written sanction letter from the bank credit team.'
    },
    {
      q: 'Can a recovery agent issue an official bank receipt for cash payments?',
      a: 'Agents can only issue valid receipts if they carry bank digital POS machines that print real-time slips. Handwritten paper slips or temporary vouchers are often fake and carry no legal value.'
    },
    {
      q: 'What is the danger of paying loan settlement dues via an agent personal QR code?',
      a: 'Sending money to a personal UPI QR code is an outright scam. The cash goes to the agent private wallet. The bank receives nothing and continues legal recovery against you.'
    },
    {
      q: 'Are banks responsible if an authorized recovery agent steals my cash?',
      a: 'Under the legal rule of vicarious liability, banks are responsible for their agents actions. However, proving a cash handover without a valid bank slip is very difficult in court.'
    },
    {
      q: 'What does Section 269ST of the Income Tax Act say about cash loan repayment?',
      a: 'Section 269ST bans cash payments of 2 Lakh rupees or more in a single day. Paying large cash sums to agents breaks tax laws and brings a 100% fine under Section 271DA.'
    },
    {
      q: 'How can I safely pay my loan or credit card settlement dues?',
      a: 'Always pay directly to your specific loan account. Use bank NetBanking, NEFT, RTGS, or pay at a bank branch counter. You can also give an Account Payee cheque in the bank name.'
    },
    {
      q: 'What criminal sections apply against recovery agents who issue fake receipts?',
      a: 'Scam agents face criminal action under Bharatiya Nyaya Sanhita (BNS) 2023. These include Section 316 for breach of trust, Section 318 for cheating, and Section 336 for forgery.'
    },
    {
      q: 'How do I verify whether a loan settlement offer is genuine before paying?',
      a: 'Check the settlement letter with your bank branch manager. Verify the official bank email domain. Check the unique reference code on the bank core computer system.'
    },
    {
      q: 'How does CredSettle protect borrowers from recovery agent cash scams?',
      a: 'CredSettle stops rogue agent visits. We verify official bank settlement letters, negotiate legal waivers up to 75%, and ensure you pay safely through official bank accounts.'
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
            <span>Borrower Rights &amp; Banking Fraud Shield</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Can You Pay Cash to Recovery Agents? Legal Rules &amp; Risks
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            Understand why paying cash or personal UPI to collection agents is dangerous. It exposes you to fraud, uncredited debt, and tax fines. Learn official RBI collection rules and safe ways to pay your loan.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Protect Your Loan Rights</span>
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
                  <span>RBI Fair Practices Protection</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Protected under RBI Outsourcing Directives and Indian Banking Conduct Codes.
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
                <span>EXECUTIVE BRIEF: RISKS OF CASH PAYMENTS TO RECOVERY AGENTS</span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">High Risk of Fraud:</strong> Cash given to agents is often stolen. The bank ledger still shows your loan as unpaid.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Fake Paper Slips:</strong> Rogue agents hand out fake paper receipts with forged bank stamps.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Personal UPI Scams:</strong> Sending money to an agent PhonePe or GooglePay does not clear your bank loan.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Tax Law Violations:</strong> Section 269ST bans cash payments of 2 Lakh rupees or more. It carries heavy tax fines.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Safe Digital Channels:</strong> Always pay directly into your loan account using NetBanking, NEFT, or branch bank counters.
                  </span>
                </li>
              </ul>
            </div>

            {/* SECTION 1: Official Bank Rules: Can Agents Collect Cash? */}
            <section id="official-bank-rules" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Regulatory Mandates &amp; Central Bank Directions</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. Official Bank Rules: Can Agents Collect Cash?
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When you miss loan or credit card EMIs, banks send recovery agents. Agents often visit your home or office. Some demand cash on the spot. They promise quick discounts or threaten legal action. You must know your legal rights.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The Reserve Bank of India (RBI) sets clear rules for bank recovery agents. Under the RBI Fair Practices Code, banks must track every rupee. Today, almost all major banks ban cash collections by field agents. Banks prefer safe online channels.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                In rare cases where an agent collects cash, strict rules apply. The agent must show an official bank ID card. They must carry an authorization letter. They must also use a bank POS machine. This machine prints an instant digital slip with an official reference code.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Never accept handwritten paper slips or temporary vouchers. Major banks like SBI, HDFC, and ICICI tell borrowers never to hand cash to field agents. Always use verified bank channels.
              </p>
            </section>

            {/* SECTION 2: Top 5 Cash Payment Fraud Risks for Borrowers */}
            <section id="fraud-risks-breakdown" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <AlertTriangle className="w-4 h-4 text-[#1886ff]" />
                <span>Financial Forensics &amp; Fraud Modus Operandi</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. Top 5 Cash Payment Fraud Risks for Borrowers
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Giving cash to recovery agents creates severe money risks. Rogue agents use many tricks to take your funds. Here are the top five fraud risks in India today.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Ban className="w-4 h-4 text-rose-600" />
                    1. Cash Siphoning &amp; Total Non-Credit
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    First, cash theft is common. The agent pockets your money. The bank receives nothing. Your loan stays marked as unpaid. The bank adds more late fees and sends more notices.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Receipt className="w-4 h-4 text-amber-600" />
                    2. Counterfeit Manual Paper Receipts
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Second, agents use fake receipt books. They print bogus receipts with duplicate bank logos and fake stamps. These paper slips have zero legal value. The bank will not accept them.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <FileText className="w-4 h-4 text-blue-600" />
                    3. Fake One-Time Settlement (OTS) Letters
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Third, agents make fake settlement offers. They promise a 70% loan waiver if you pay cash right away. In truth, the bank credit team never approved this deal. You lose your cash, and your debt remains.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <QrCode className="w-4 h-4 text-indigo-600" />
                    4. Personal UPI QR Code Divergence
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Fourth, agents ask you to scan personal QR codes. They say the bank app is down. When you scan their PhonePe or Paytm code, the money goes to their personal wallet.
                  </p>
                </div>
              </div>

              {/* Representative Calculation Card */}
              <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white shadow-xs mt-4">
                <div className="bg-slate-900 text-white p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                    <span className="font-bold text-sm">Financial Comparison: Unverified Cash vs Official Bank OTS</span>
                  </div>
                  <span className="text-xs text-blue-300 font-mono">₹8.5 Lakh Claim Audit</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[620px]">
                    <thead>
                      <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-semibold">
                        <th className="p-3">Audit Parameters</th>
                        <th className="p-3">Cash Handover to Field Agent</th>
                        <th className="p-3">CredSettle Negotiated Official OTS</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200/80 text-slate-600">
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Total Outstanding Ledger Claim</td>
                        <td className="p-3">₹8,50,000</td>
                        <td className="p-3">₹8,50,000</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Amount Paid by Borrower</td>
                        <td className="p-3 text-rose-600 font-bold">₹2,00,000 (Paid in Cash)</td>
                        <td className="p-3 text-blue-600 font-bold">₹2,50,000 (Direct Bank Transfer)</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Bank Ledger Credit Status</td>
                        <td className="p-3 text-rose-600 font-semibold">₹0 Credited (Misappropriated)</td>
                        <td className="p-3 text-emerald-600 font-semibold">100% Credited Directly to Account</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Official Settlement Sanction Letter</td>
                        <td className="p-3 text-rose-600">None (Bogus paper voucher)</td>
                        <td className="p-3 text-emerald-600 font-semibold">Official Bank Sanction Letter Issued</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Legal Immunity &amp; No Dues Certificate</td>
                        <td className="p-3 text-rose-600">Recovery calls and legal notices continue</td>
                        <td className="p-3 text-emerald-600 font-semibold">Guaranteed Bank No Dues Certificate (NDC)</td>
                      </tr>
                      <tr className="bg-blue-50/70 font-bold text-slate-900">
                        <td className="p-3">Net Financial Outcome</td>
                        <td className="p-3 text-rose-700">₹2,00,000 Lost + Total Loan Still Active</td>
                        <td className="p-3 text-emerald-700">70% Permanent Debt Waiver Secured</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* SECTION 3: Comparative Matrix: Cash vs Official Channels */}
            <section id="comparative-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Channel Vulnerability Assessment</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Comparative Matrix: Cash vs Official Channels
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Choosing the right payment method keeps your money safe. It also protects your legal rights. Compare cash handovers with verified bank options in the table below.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Digital transfers give you instant legal proof. Under Section 63 of the Bharatiya Sakshya Adhiniyam (BSA), electronic bank receipts serve as strong evidence in court. Cash slips without a bank stamp carry no legal weight.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[620px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Payment Channel</th>
                      <th className="p-3">Statutory Legal Proof</th>
                      <th className="p-3">Ledger Credit Speed</th>
                      <th className="p-3">Fraud Vulnerability</th>
                      <th className="p-3">Recommended Protocol</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr className="bg-rose-50/30">
                      <td className="p-3 font-bold text-slate-900">Physical Cash to Field Agent</td>
                      <td className="p-3 text-rose-600 font-semibold">Near Zero (Easily disputed)</td>
                      <td className="p-3 text-rose-600">Uncertain or Never</td>
                      <td className="p-3 text-rose-600 font-bold">Critical / Extreme Risk</td>
                      <td className="p-3">Strictly refuse under all circumstances.</td>
                    </tr>
                    <tr className="bg-rose-50/20">
                      <td className="p-3 font-medium text-slate-900">Agent Personal UPI QR Code</td>
                      <td className="p-3 text-rose-600">Shows personal transfer only</td>
                      <td className="p-3 text-rose-600">Zero (Goes to agent wallet)</td>
                      <td className="p-3 text-rose-600 font-bold">Severe Fraud Scam</td>
                      <td className="p-3">Never scan personal UPI handles.</td>
                    </tr>
                    <tr className="bg-blue-50/30">
                      <td className="p-3 font-medium text-slate-900">Bank Portal / NetBanking</td>
                      <td className="p-3 text-emerald-600 font-semibold">100% Admissible (BSA Sec 63)</td>
                      <td className="p-3 text-emerald-600 font-semibold">Instant / Same Day</td>
                      <td className="p-3 text-emerald-600 font-semibold">Zero Fraud Risk</td>
                      <td className="p-3">Pay via official bank loan portal.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Direct NEFT / RTGS Transfer</td>
                      <td className="p-3 text-emerald-600 font-semibold">Digital UTR Bank Confirmation</td>
                      <td className="p-3 text-emerald-600 font-semibold">Real-Time Core Banking</td>
                      <td className="p-3 text-emerald-600 font-semibold">Zero Fraud Risk</td>
                      <td className="p-3">Transfer to specific loan account number.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Branch Cash Deposit at Teller</td>
                      <td className="p-3 text-emerald-600 font-semibold">Official Stamped Cash Counter Slip</td>
                      <td className="p-3 text-emerald-600 font-semibold">Immediate CBS Entry</td>
                      <td className="p-3 text-emerald-600 font-semibold">Zero Fraud Risk</td>
                      <td className="p-3">Deposit directly at the bank counter.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Account Payee Cheque / DD</td>
                      <td className="p-3 text-emerald-600 font-semibold">Bank Clearing Stamp &amp; Copy</td>
                      <td className="p-3 text-slate-700">1 to 2 Working Days</td>
                      <td className="p-3 text-emerald-600 font-semibold">Zero (Non-transferable)</td>
                      <td className="p-3">Issue in bank name with loan number on reverse.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 4: Legal & Tax Liabilities: Section 269ST Limits */}
            <section id="legal-tax-liabilities" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Enactments &amp; Penal Liabilities</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. Legal &amp; Tax Liabilities: Section 269ST Limits
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Paying cash to agents also brings tax penalties and criminal risks. Indian tax laws strictly limit cash transactions.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Section 269ST of the Income Tax Act bans cash receipts of 2 Lakh rupees or more in a single day. If you pay 2 Lakh rupees or more in cash, the tax office can fine you 100% of that amount under Section 271DA.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Agents who steal cash face criminal charges under the Bharatiya Nyaya Sanhita (BNS), 2023. These charges include Section 316 for breach of trust, Section 318 for cheating, and Section 336 for forgery.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The Supreme Court of India has ruled on this issue. In the Prakash Kaur case, the court held that banks are legally responsible for the wrongful acts of their recovery agents. However, proving a cash handover without a bank receipt is very hard.
              </p>
            </section>

            {/* SECTION 5: Visual Blueprint Infographic */}
            <section id="visual-blueprint" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Sparkles className="w-4 h-4 text-[#1886ff]" />
                <span>Visual Blueprint</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. Visual Blueprint: Cash Payment Risk Architecture
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This visual chart shows the big contrast between cash handovers and verified bank payments. It highlights key fraud risks and safe repayment steps under RBI rules.
              </p>

              <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-slate-100 bg-slate-100">
                  <Image
                    src="/images/infographics/paying-cash-to-recovery-agents-fraud-risks-official-bank-rules.jpg"
                    alt="Paying Cash to Recovery Agents Fraud Risks and Bank Rules"
                    width={1200}
                    height={675}
                    className="w-full h-auto object-cover hover:scale-[1.01] transition-transform duration-300"
                    priority
                  />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-500 pt-1 gap-2">
                  <span>Official CredSettle Debt Protection Framework • RBI Master Direction Compliant</span>
                  <a
                    href="/images/infographics/paying-cash-to-recovery-agents-fraud-risks-official-bank-rules.jpg"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="text-[#1886ff] hover:underline font-bold inline-flex items-center gap-1"
                  >
                    <span>View High-Resolution Blueprint</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </section>

            {/* SECTION 6: Step-by-Step SOP: Safe Debt Repayment Protocol */}
            <section id="step-by-step-sop" className="scroll-target space-y-6">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Standard Operating Procedure</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. Step-by-Step SOP: Safe Debt Repayment Protocol
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Follow this six-step guide to pay your loan dues safely. It protects you from fraud and ensures your debt is closed properly.
              </p>

              <div className="space-y-4">
                <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-[#1886ff] text-white flex items-center justify-center font-bold text-xs flex-shrink-0">
                      1
                    </span>
                    <h3 className="text-base font-bold text-slate-900">
                      Demand Full Agent Credentials &amp; Bank Authority
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 pl-10 leading-relaxed">
                    Check agent ID. Ask for their bank identity card and agency authorization letter. Verify their agency name on the bank official website.
                  </p>
                </div>

                <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-[#1886ff] text-white flex items-center justify-center font-bold text-xs flex-shrink-0">
                      2
                    </span>
                    <h3 className="text-base font-bold text-slate-900">
                      Insist on an Official Written Settlement Sanction Letter
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 pl-10 leading-relaxed">
                    Get a written settlement letter. Never accept verbal promises. Demand a formal One-Time Settlement (OTS) letter on bank letterhead with an official reference number.
                  </p>
                </div>

                <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-[#1886ff] text-white flex items-center justify-center font-bold text-xs flex-shrink-0">
                      3
                    </span>
                    <h3 className="text-base font-bold text-slate-900">
                      Strictly Refuse Physical Cash &amp; Personal QR Codes
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 pl-10 leading-relaxed">
                    Refuse cash and personal QR codes. Tell the agent that you only pay through official bank channels. Do not scan personal UPI apps.
                  </p>
                </div>

                <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-[#1886ff] text-white flex items-center justify-center font-bold text-xs flex-shrink-0">
                      4
                    </span>
                    <h3 className="text-base font-bold text-slate-900">
                      Route Payment Directly to the Bank Loan Account
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 pl-10 leading-relaxed">
                    Pay directly to your loan account. Transfer money using NetBanking, NEFT, RTGS, or pay at a bank branch counter. Get an official stamped teller receipt.
                  </p>
                </div>

                <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-[#1886ff] text-white flex items-center justify-center font-bold text-xs flex-shrink-0">
                      5
                    </span>
                    <h3 className="text-base font-bold text-slate-900">
                      Audit Account Statement &amp; Real-Time Credit Entry
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 pl-10 leading-relaxed">
                    Check your loan statement. Log in to your banking app within 48 hours. Confirm that the full settlement amount shows in your loan ledger.
                  </p>
                </div>

                <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-[#1886ff] text-white flex items-center justify-center font-bold text-xs flex-shrink-0">
                      6
                    </span>
                    <h3 className="text-base font-bold text-slate-900">
                      Secure Formal No Dues Certificate &amp; CIBIL Updation
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 pl-10 leading-relaxed">
                    Collect your No Dues Certificate. Get an official No Dues Certificate (NDC) from the bank within 30 days. Check that your CIBIL score updates to settled with zero balance.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: Scammed by an Agent: 5-Step Legal Redressal Guide */}
            <section id="victim-redressal-guide" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <ShieldCheck className="w-4 h-4 text-[#1886ff]" />
                <span>Emergency Victim Protection</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. Scammed by an Agent: 5-Step Legal Redressal Guide
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Did you already pay cash to an agent who stole the money? You must take fast legal action to protect your finances. Here are five steps to take right away.
              </p>

              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#1886ff]" />
                    Step 1: Secure All Physical &amp; Digital Evidence
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Gather your evidence. Save paper receipts, WhatsApp chats, call recordings, and building CCTV clips showing the agent visit.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#1886ff]" />
                    Step 2: File a Police Complaint under BNS 316 &amp; 318
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    File a police complaint. Go to your local police station. File a complaint under BNS Section 316 (breach of trust) and Section 318 (cheating).
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#1886ff]" />
                    Step 3: Issue a Formal Legal Notice to the Bank Nodal Officer
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Send a legal notice to the bank. Write to the bank Principal Nodal Officer. Mention the bank duty under RBI rules and demand ledger credit.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#1886ff]" />
                    Step 4: Report to the National Cyber Crime Portal (1930)
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Report on the cyber crime portal. If you paid via UPI, call helpline 1930 or visit cybercrime.gov.in to freeze the agent account.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#1886ff]" />
                    Step 5: Escalate to the RBI Integrated Ombudsman
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Complain to the RBI Ombudsman. If the bank fails to fix the issue within 30 days, file a case on cms.rbi.org.in.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 8: 3-Tier Escalation Matrix: Bank to RBI Ombudsman */}
            <section id="escalation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Institutional Redressal Architecture</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. 3-Tier Escalation Matrix: Bank to RBI Ombudsman
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If an agent cheats you, follow the three-tier grievance ladder. This path gives you the fastest legal relief.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Tier 1 starts at the bank branch. You write to the Branch Manager and Grievance Officer. Tier 2 goes to the Principal Nodal Officer (PNO). Tier 3 reaches the RBI Integrated Ombudsman, who can award compensation.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[620px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Escalation Tier</th>
                      <th className="p-3">Target Authority</th>
                      <th className="p-3">Statutory Scope &amp; Power</th>
                      <th className="p-3">Mandatory Turnaround Time</th>
                      <th className="p-3">Procedural Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Tier 1: Internal Bank Redressal</td>
                      <td className="p-3">Branch Manager &amp; Grievance Redressal Officer (GRO)</td>
                      <td className="p-3">Verification of collection agency records and internal transaction tracing.</td>
                      <td className="p-3 font-mono text-[11px]">7 to 10 Working Days</td>
                      <td className="p-3">Submit written complaint with copy of receipt and payment proof.</td>
                    </tr>
                    <tr className="bg-blue-50/20">
                      <td className="p-3 font-bold text-slate-900">Tier 2: Executive Escalation</td>
                      <td className="p-3">Principal Nodal Officer (PNO) &amp; Head of Collections</td>
                      <td className="p-3">Authority to halt recovery actions, blacklist rogue agencies, and credit ledgers.</td>
                      <td className="p-3 font-mono text-[11px]">10 to 15 Working Days</td>
                      <td className="p-3">Serve advocate legal notice citing RBI Outsourcing Directives.</td>
                    </tr>
                    <tr className="bg-emerald-50/30">
                      <td className="p-3 font-bold text-slate-900">Tier 3: Central Bank Regulator</td>
                      <td className="p-3">RBI Integrated Ombudsman (RB-IOS 2021)</td>
                      <td className="p-3">Statutory power to award compensation up to ₹20 Lakhs plus ₹1 Lakh for mental agony.</td>
                      <td className="p-3 font-mono text-[11px]">30 Working Days</td>
                      <td className="p-3">File complaint online at cms.rbi.org.in with complete evidence trail.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 9: Dispute Resolution Milestones & Legal Timelines */}
            <section id="procedural-timeline" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Clock className="w-4 h-4 text-[#1886ff]" />
                <span>Chronological Process Framework</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Dispute Resolution Milestones &amp; Legal Timelines
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Knowing the loan default timeline helps you stop agent scams. Agents push hardest for cash when loans near the 90-day NPA mark.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Stay calm during this period. Never rush into cash deals. Settle your debt only through an approved bank compromise agreement.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[620px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Delinquency Period</th>
                      <th className="p-3">Regulatory Asset Tag</th>
                      <th className="p-3">Collection Agent Modus Operandi</th>
                      <th className="p-3">Borrower Defensive Strategy</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 1 to 30</td>
                      <td className="p-3 font-mono text-[11px]">SMA-0</td>
                      <td className="p-3">Automated SMS alerts and telecalling for missed EMI.</td>
                      <td className="p-3">Pay only via official banking app or automated NACH mandate.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 31 to 60</td>
                      <td className="p-3 font-mono text-[11px]">SMA-1</td>
                      <td className="p-3">Frequent telephonic follow-ups and home visit warnings.</td>
                      <td className="p-3">Request official loan statement; refuse all informal cash requests.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 61 to 90</td>
                      <td className="p-3 font-mono text-[11px]">SMA-2</td>
                      <td className="p-3">Field agents dispatched to doorstep demanding urgent cash token.</td>
                      <td className="p-3">Demand agent ID; state that payments occur only via official bank portal.</td>
                    </tr>
                    <tr className="bg-amber-50/50">
                      <td className="p-3 font-bold text-slate-900">Day 91 to 120</td>
                      <td className="p-3 font-mono text-[11px] text-amber-700 font-bold">NPA Classification</td>
                      <td className="p-3">Threats of police complaints and fake verbal settlement discounts.</td>
                      <td className="p-3">Audit ledger with CredSettle; initiate formal legal OTS negotiations.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Day 121 to 180</td>
                      <td className="p-3 font-mono text-[11px] text-[#1886ff] font-bold">Prime OTS Window</td>
                      <td className="p-3">Bank credit committee evaluates formal compromise settlement.</td>
                      <td className="p-3 font-bold text-slate-900">Execute official bank OTS with 50% to 75% waiver through CredSettle.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Month 6 and Beyond</td>
                      <td className="p-3 font-mono text-[11px]">Loss Asset / ARC Sale</td>
                      <td className="p-3">Debt assigned to Asset Reconstruction Company (ARC).</td>
                      <td className="p-3">Pay ARC exclusively via digital bank transfer against an official sanction letter.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: Common Street Scams: QR Codes & Fake Receipts */}
            <section id="street-scams-breakdown" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>Real-World Fraud Anatomy</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                10. Common Street Scams: QR Codes &amp; Fake Receipts
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Scam agents use urgent threats and trickery. Watch out for these four common street scams.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <QrCode className="w-4 h-4 text-[#1886ff]" />
                    The Personal UPI Scanner Scam
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The agent says the bank server is down. They ask you to scan their personal QR code. The money goes straight into their pocket.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Receipt className="w-4 h-4 text-emerald-600" />
                    The Kacha Carbon Receipt Ruse
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The agent fills out a paper slip with a fake bank stamp. The bank has no record of this payment.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <FileText className="w-4 h-4 text-indigo-600" />
                    The Month-End Closing Target Trap
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The agent claims they can give you a special cash discount today only. Banks never grant informal cash discounts.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-amber-600" />
                    The Doorstep Police Threat Trick
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The agent threatens to call the police to your door in two hours. Police cannot act in civil debt cases. This is illegal intimidation under BNS 351.
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
                Frequently Asked Questions: Recovery Agent Cash Rules
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Find verified answers to common questions about cash collections, recovery agent fraud, and safe bank loan settlements.
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
                Official Regulatory Framework &amp; Statutory Citations
              </h2>
              <ul className="space-y-2 text-xs text-slate-600 leading-relaxed list-disc pl-5">
                <li>
                  <strong>Reserve Bank of India (RBI):</strong> Master Direction on Managing Risks and Code of Conduct in Outsourcing of Financial Services by Banks.
                </li>
                <li>
                  <strong>RBI Fair Practices Code (FPC):</strong> Master Circular on Fair Practices Code for Lenders, Standards of Collection and Recovery Conduct.
                </li>
                <li>
                  <strong>Income Tax Act, 1961:</strong> Section 269ST, Prohibition of Cash Transactions of ₹2 Lakhs or More, and Section 271DA Penalty.
                </li>
                <li>
                  <strong>Bharatiya Nyaya Sanhita, 2023 (BNS):</strong> Section 316 (Criminal Breach of Trust), Section 318 (Cheating), Section 336 (Forgery), and Section 351 (Criminal Intimidation).
                </li>
                <li>
                  <strong>Supreme Court of India Precedents:</strong> ICICI Bank Ltd. v. Prakash Kaur (2007) and Standard Chartered Bank v. Dharminder Bhohi (2013).
                </li>
              </ul>

              {/* Outbound Authority Badges with nofollow */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Verified Government &amp; Regulatory Portals:</span>
                <div className="flex flex-wrap gap-2">
                  <a
                    href="https://www.rbi.org.in"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1"
                  >
                    <span>Reserve Bank of India</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a
                    href="https://cms.rbi.org.in"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1"
                  >
                    <span>RBI Integrated Ombudsman</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a
                    href="https://cybercrime.gov.in"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1"
                  >
                    <span>National Cyber Crime Portal</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a
                    href="https://www.indiacode.nic.in"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1"
                  >
                    <span>India Code Statutory Repository</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Internal CredSettle Topic Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Explore Related CredSettle Guides:</span>
                <div className="flex flex-wrap gap-2">
                  <Link href="/rbi-rules-for-recovery-agents" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    RBI Agent Rules
                  </Link>
                  <Link href="/stop-recovery-agent-harassment" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Stop Recovery Harassment
                  </Link>
                  <Link href="/police-complaint-against-bank-recovery-agent" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Police Complaint Guide
                  </Link>
                  <Link href="/how-to-identify-fake-recovery-agents" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Identify Fake Agents
                  </Link>
                  <Link href="/verify-loan-settlement-letter" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Verify Settlement Letter
                  </Link>
                  <Link href="/get-noc-after-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    No Dues Certificate
                  </Link>
                  <Link href="/services/personal-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Personal Loan Settlement
                  </Link>
                  <Link href="/services/credit-card-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Credit Card Settlement
                  </Link>
                  <Link href="/loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Loan Settlement Process
                  </Link>
                  <Link href="/can-bank-seize-epf-provident-fund-for-loan-recovery" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    EPF &amp; Gratuity Protection
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
                Expert in banking compliance, consumer debt protection, statutory social security immunities, and NPA compromise settlements with extensive experience defending salaried borrowers against unlawful recovery practices.
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
                  CONFIDENTIAL LEGAL SHIELD
                </span>
                <p className="text-lg md:text-xl font-bold text-white leading-snug">
                  Agent Demanding Cash for Loan Closure?
                </p>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our senior legal resolution specialists stop unlawful field agent harassment, verify official bank settlement letters, and negotiate up to 75% loan settlement waivers safely.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Protect Your Money Now
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
                  <span>Statutory Protection • 100% Confidential</span>
                </div>
              </div>
            </div>

            {/* Card 3: CredSettle Trust Badges */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">The CredSettle Shield</p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Zero Cash Handover:</strong> 100% direct bank transfer security.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Verified Sanction Letters:</strong> Bank committee authenticated OTS.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>RBI Ombudsman Redressal:</strong> Direct escalation against rogue lenders.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Official Bank Closure:</strong> Guaranteed No Dues Certificate.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">Related Legal Guides</p>
              <div className="space-y-2.5">
                <Link
                  href="/rbi-rules-for-recovery-agents"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    RBI Rules for Recovery Agents
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Know your statutory collection rights &rarr;</span>
                </Link>

                <Link
                  href="/stop-recovery-agent-harassment"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Stop Recovery Agent Harassment
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Legal defense against threats &rarr;</span>
                </Link>

                <Link
                  href="/how-to-identify-fake-recovery-agents"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    How to Identify Fake Recovery Agents
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Spot imposters and fake notices &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
