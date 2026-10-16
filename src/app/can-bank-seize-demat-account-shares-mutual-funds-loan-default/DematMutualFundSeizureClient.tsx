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
  PieChart,
  Wallet,
  Shield
} from 'lucide-react';

export default function DematMutualFundSeizureClient() {
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
    { id: 'depository-status', label: '1. Demat & Mutual Fund Legal Status' },
    { id: 'unsecured-recovery', label: '2. Depository Rules & SEBI Framework' },
    { id: 'court-attachment', label: '3. Court Attachment & DRT Powers' },
    { id: 'banker-lien', label: '4. Banker Lien Defense & 3-in-1 Accounts' },
    { id: 'visual-blueprint', label: '5. Visual Blueprint Infographic' },
    { id: 'step-by-step-sop', label: '6. 6-Stage Portfolio Defense Protocol' },
    { id: 'agent-threats', label: '7. Recovery Agent Threats & Police Rights' },
    { id: 'escalation-matrix', label: '8. 3-Tier Grievance & Redressal Matrix' },
    { id: 'procedural-timeline', label: '9. key steps & Timeline' },
    { id: 'specialized-scenarios', label: '10. Joint Demat Accounts, SIPs & LAS' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'official-sources', label: 'legal Citations & Authorities' }
  ];

  const faqs = [
    {
      q: 'Can a bank directly freeze my Demat account or stop me from selling shares?',
      a: 'No. A lending bank cannot directly freeze your Demat account or stop you from trading. Demat accounts are maintained by stockbrokers registered with NSDL or CDSL under SEBI rules. A bank has no direct technical or legal access to freeze your shares without a formal court decree or DRT order.'
    },
    {
      q: 'Can a recovery agent contact Zerodha, Groww, or my broker to seize shares?',
      a: 'No. Third-party loan agents have zero legal standing, official access, or power to contact your stockbroker. Any threat by a recovery agent to raid your Demat account or liquidate your equity portfolio is illegal threats under Section 351 of BNS 2023 and violates the RBI Fair Practices Code.'
    },
    {
      q: 'Can a bank seize my mutual fund investments for an unsecured loan default?',
      a: 'No. Mutual funds are held in trust by SEBI-registered fund houses (AMCs) and RTAs like CAMS and KFintech. A lender cannot unilaterally debit, pledge, or liquidate your mutual fund units for an unsecured personal loan or credit card default without a court judgment.'
    },
    {
      q: 'What happens if my Demat account is with the same bank where I defaulted?',
      a: 'Even within 3-in-1 banking accounts, the banking arm and broking subsidiary are separate corporate legal entities. The bank cannot automatically liquidate your stocks. However, dividend payouts or stock sale proceeds credited into the linked savings account can be debited via right of set-off. You should switch your linked bank account to a neutral bank.'
    },
    {
      q: 'Can a civil court or DRT attach my Demat shares to recover a loan?',
      a: 'Yes, but only after formal judicial hearings. Under Order 21 Rule 46 of the Code of Civil Procedure (CPC) or Section 19 of the RDB Act, a civil court or Debt Recovery Tribunal (for debts above ₹20 Lakhs) can issue a garnishee order prohibiting share transfers after a full trial and decree.'
    },
    {
      q: 'Can a bank exercise a banker lien on my shares under Section 171?',
      a: 'No. Under Section 171 of the Indian Contract Act, a banker general lien applies only to stocks bailed directly to the bank in the ordinary course of banking. Shares held in a Demat account with a depository or independent broker are not bailed to the bank, so no banker lien can apply.'
    },
    {
      q: 'What is the risk of having mutual fund dividends credited into my loan bank?',
      a: 'If dividend payouts or redemption proceeds land in a savings account with the bank where your loan is overdue, the bank software may instantly debit those funds using the contractual right of set-off. You can eliminate this risk by updating your AMC bank mandate to a neutral bank.'
    },
    {
      q: 'Can a bank attach shares in a joint Demat account if only one holder defaulted?',
      a: 'No. A creditor can only proceed against the proportionate beneficial interest of the specific borrower who defaulted. The independent financial property of a non-borrowing joint holder or spouse cannot be attached or liquidated to satisfy another person individual loan default.'
    },
    {
      q: 'How is a Loan Against Shares (LAS) different from an unsecured loan default?',
      a: 'In a Loan Against Shares (LAS) or Mutual Funds (LAMF), you explicitly create a legal pledge in favor of the lender under SEBI rules. If you default or breach margin maintenance thresholds, the lender has legal power under Section 176 of the Contract Act to sell the pledged stocks after notice.'
    },
    {
      q: 'How does CredSettle help borrowers protect their investments during loan default?',
      a: 'CredSettle stops illegal recovery agent harassment, insulates your financial assets through account split, responds to bank legal notices, and negotiates directly with bank credit committees for a structured One-Time Settlement (OTS) with up to 50% to 75% waivers.'
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
            <span>Investor Rights &amp; stocks Legal Shield</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Can Bank Seize Demat Shares &amp; Mutual Funds for Loan Default?
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            A clear legal guide for retail investors facing personal loan or credit card default. Understand SEBI depository rules, Section 171 banker lien limits, court attachment procedures under CPC, and how to safeguard your portfolio.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Protect Your Investment Portfolio</span>
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
                  <span>Depository &amp; SEBI Shield</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Protected under SEBI rules 2018 and Section 171 Indian Contract Act limits.
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
                <span>EXECUTIVE BRIEF: DEMAT &amp; MUTUAL FUND SEIZURE LEGAL CRUX</span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">No Direct Bank Access:</strong> Banks have zero legal power to freeze your Demat shares or mutual funds for an unsecured debt.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Depository Safety Wall:</strong> Shares sit safely with NSDL or CDSL depositories. Brokers cannot freeze your account without a court order.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Banker Lien Does Not Apply:</strong> A banker lien under Section 171 covers only goods bailed to the bank. It does not apply to shares with your broker.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Court Order Requirement:</strong> To touch shares, a creditor must win a full civil case under Order 21 Rule 46 CPC or get a DRT order.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Protect Your Payout Account:</strong> Move your broker and mutual fund payouts to a fresh bank account where you have no loan dues.
                  </span>
                </li>
              </ul>
            </div>

            {/* SECTION 1: Demat & Mutual Fund Status */}
            <section id="depository-status" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>written laws &amp; Depository Architecture</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. Demat &amp; Mutual Fund Status: Can Banks Directly Seize Them?
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Defaulting on a personal loan or credit card brings harsh calls from loan agents. Many agents tell borrowers that the bank will freeze their Demat account. Some say the bank will sell their shares on Zerodha or Groww. Others claim the bank will stop their mutual fund SIPs. These claims are false. Under Indian law, banks cannot touch your shares or mutual funds without a court order.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                There is a big legal divide between a bank balance and stock market investments. When you deposit cash in a bank account, the bank owes you that money. But shares and mutual funds belong directly to you. They sit in trust with national depositories.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Demat shares come under the Depositories Act of 1996. They also follow SEBI rules. Your shares stay safely with NSDL or CDSL. Your broker is only a middleman.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Mutual fund units follow SEBI Mutual Fund rules from 1996. fund houses manage these funds under independent trustees. Your lending bank has no direct link to your broker or fund house. The bank cannot freeze or sell your shares on its own.
              </p>
            </section>

            {/* SECTION 2: Unsecured Recovery & Depository Rules */}
            <section id="unsecured-recovery" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <DollarSign className="w-4 h-4 text-[#1886ff]" />
                <span>official Firewalls &amp; Asset Protection Math</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. Unsecured Loan Recovery: Depository Rules &amp; SEBI Framework
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                An unsecured personal loan or credit card is a simple debt contract. It follows the Indian Contract Act of 1872. The bank gave you money based on your credit score and salary. It did not take any assets as security. Because you gave no security, the bank has no direct claim on your investments.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                SEBI rules strictly protect your account. A broker or stockbroker cannot block your trades or move your shares without your clear written instruction. You must sign a slip or use an online TPIN.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The only other way a broker can freeze shares is through a formal court order or a direct order from SEBI. If a bank manager sends an email to Zerodha or Groww asking to block your account, the broker will refuse. Doing so protects the broker from heavy SEBI fines.
              </p>

              {/* Representative Calculation Card */}
              <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white shadow-xs">
                <div className="bg-slate-900 text-white p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                    <span className="font-bold text-sm">Sample Debt &amp; Portfolio Math</span>
                  </div>
                  <span className="text-xs text-blue-300 font-mono">₹15 Lakh Gross Ledger Claim</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80">
                    <thead>
                      <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-semibold">
                        <th className="p-3">Financial Asset / Claim Component</th>
                        <th className="p-3">Bank Claim / Asset Value</th>
                        <th className="p-3">legal Legal Protection Status</th>
                        <th className="p-3 text-right">Protected Balance</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200/80 text-slate-600">
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Demat Equity Shares (NSDL / CDSL)</td>
                        <td className="p-3">₹9,80,000</td>
                        <td className="p-3 text-emerald-600 font-semibold">100% Depository Wall: No Unilateral Seizure</td>
                        <td className="p-3 text-right font-bold text-emerald-700">₹9,80,000 (Safe)</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Mutual Fund Units (CAMS / KFintech)</td>
                        <td className="p-3">₹6,40,000</td>
                        <td className="p-3 text-emerald-600 font-semibold">SEBI Trust Protection: No Bank Lien</td>
                        <td className="p-3 text-right font-bold text-emerald-700">₹6,40,000 (Safe)</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Overdue Personal Loan Ledger Claim</td>
                        <td className="p-3 text-rose-600 font-bold">₹15,00,000</td>
                        <td className="p-3 text-blue-600 font-semibold">Civil Debt: Negotiable under RBI OTS Rules</td>
                        <td className="p-3 text-right font-bold text-slate-900">₹4,50,000 (Negotiated OTS)</td>
                      </tr>
                      <tr className="bg-blue-50/70 font-bold text-slate-900">
                        <td className="p-3">Net Investment Preservation</td>
                        <td className="p-3 text-slate-900">₹16,20,000 Preserved</td>
                        <td className="p-3 text-emerald-700">70% Loan Debt Waiver Secured via OTS</td>
                        <td className="p-3 text-right text-[#1886ff] text-sm sm:text-base">100% Portfolio Shielded</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* SECTION 3: Court Attachment Rules */}
            <section id="court-attachment" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Judicial Decrees &amp; Garnishee Execution</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Court Attachment Rules: Order 21 Rule 46 CPC &amp; DRT Powers
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Borrowers must know the difference between empty recovery threats and real court action. While banks cannot seize your stocks directly, they can file a civil suit in court.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under Section 60 of the Code of Civil Procedure (CPC) 1908, company shares are movable property. They can be attached after a court passes a final money decree. Shares do not have the automatic legal shield that PF and gratuity enjoy.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                However, taking shares through court takes a long time. The bank must file a suit, present evidence, and win a final judgment. Only then can the bank apply for execution under Order 21 Rule 46 of the CPC.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under Order 21 Rule 46, a civil judge can issue a garnishee order to your broker or mutual fund house. Under Rule 46B, the court must first send you a show cause notice. You have the right to appear and explain your hardship. In Indian courts, this legal process often takes three to seven years.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                For debts of 20 Lakh Rupees or more, banks can go to the Debt Recovery Tribunal. Under Section 19 of the RDB Act, the DRT can order an attachment only if the bank proves that you are hiding assets to avoid payment.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[620px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Asset Type</th>
                      <th className="p-3">Governing Law</th>
                      <th className="p-3">Direct Bank Freeze</th>
                      <th className="p-3">Court Attachment</th>
                      <th className="p-3">Key Protection Step</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr className="bg-blue-50/30">
                      <td className="p-3 font-bold text-slate-900">Demat Account Shares (Equities)</td>
                      <td className="p-3">Depositories Act, 1996</td>
                      <td className="p-3 text-emerald-600 font-semibold">Strictly Prohibited</td>
                      <td className="p-3 text-amber-600 font-semibold">Only Post-Decree (CPC Order 21)</td>
                      <td className="p-3">Maintain with independent broker. settle debt via OTS.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Mutual Fund Units (Equity/Debt)</td>
                      <td className="p-3">SEBI MF rules, 1996</td>
                      <td className="p-3 text-emerald-600 font-semibold">Strictly Prohibited</td>
                      <td className="p-3 text-amber-600 font-semibold">Only Post-Decree (Garnishee Order)</td>
                      <td className="p-3">Update bank mandate to neutral third-party account.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Pledged Shares (Loan Against Shares)</td>
                      <td className="p-3">Contract Act, 1872 (Sec 176)</td>
                      <td className="p-3 text-rose-600 font-semibold">Permitted After Default Notice</td>
                      <td className="p-3 text-rose-600 font-semibold">Contractual Right of Sale</td>
                      <td className="p-3">Monitor margin levels. top up collateral or close loan.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Employees Provident Fund (EPF)</td>
                      <td className="p-3">EPF Act, 1952 (Sec 10)</td>
                      <td className="p-3 text-emerald-600 font-semibold">Absolute Immunity</td>
                      <td className="p-3 text-emerald-600 font-semibold">100% Court Attachment Bar</td>
                      <td className="p-3">Protected by law under Section 60(1)(k) CPC.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Savings Account Balance</td>
                      <td className="p-3">Banking Regulation Act, 1949</td>
                      <td className="p-3 text-rose-600 font-semibold">High via Right of Set-Off</td>
                      <td className="p-3 text-rose-600 font-semibold">Garnishee Order Attach</td>
                      <td className="p-3">Never keep liquid funds in creditor bank account.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Sovereign Gold Bonds (SGBs)</td>
                      <td className="p-3">Government stocks Act, 2006</td>
                      <td className="p-3 text-emerald-600 font-semibold">Strictly Prohibited</td>
                      <td className="p-3 text-amber-600 font-semibold">Attachable via Decree</td>
                      <td className="p-3">Hold in Demat form. keep redemption account neutral.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 4: Banker Lien Defense */}
            <section id="banker-lien" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>Contract Act rulings &amp; Corporate Firewalls</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. Banker Lien Defense: Section 171 &amp; 3-in-1 Account Myths
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Bank recovery teams often mention Section 171 of the Indian Contract Act. This section gives banks a general lien over goods and papers left with them. But this rule has strict limits.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                For a banker lien to work, you must leave the property directly in the care of the bank. The bank must hold actual custody of the asset.
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed list-disc pl-5">
                <li>
                  <strong>Direct Physical Bailment:</strong> The goods or stocks must be bailed directly to the banker in its capacity as a banker.
                </li>
                <li>
                  <strong>Privity of Possession:</strong> The banker must hold actual custody of the property with the consent of the customer.
                </li>
                <li>
                  <strong>No Inconsistent Contract:</strong> There must be no special contract or purpose inconsistent with a general lien.
                </li>
              </ul>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                In major rulings like Syndicate Bank v. Vijay Kumar and Federal Bank v. Jog Engineering, the Supreme Court made this clear. A bank cannot place a lien on property held by third parties. Your shares sit with NSDL or CDSL through your broker. The bank has no custody, so Section 171 does not apply.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                What about 3-in-1 accounts like ICICI Direct or HDFC stocks? Even though they share a brand name, the bank and the stockbroker are separate legal companies. A bank cannot take funds from a separate company.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                You should also check your broker DDPI or Power of Attorney terms. Under SEBI rules, a broker can only use these rights to settle stock market trades. They can never use your shares to pay off a bank loan.
              </p>
            </section>

            {/* SECTION 5: Visual Blueprint Infographic */}
            <section id="visual-blueprint" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Sparkles className="w-4 h-4 text-[#1886ff]" />
                <span>Visual Blueprint</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. Visual Blueprint: Demat &amp; Mutual Fund Legal Protection Map
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This clear visual roadmap illustrates the legal and official firewalls that protect your Demat shares and mutual fund holdings from illegal bank seizure during loan distress.
              </p>

              <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-slate-100 bg-slate-100">
                  <Image
                    src="/images/infographics/can-bank-seize-demat-account-shares-mutual-funds-loan-default.jpg"
                    alt="Demat Account and Mutual Funds Protection Against Bank Loan Default Law"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 900px"
                    className="object-contain hover:scale-[1.01] transition-transform duration-300"
                    priority
                  />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-500 pt-1 gap-2">
                  <span>Official CredSettle Portfolio Shield Framework • SEBI &amp; Depository rules Compliant</span>
                  <a
                    href="/images/infographics/can-bank-seize-demat-account-shares-mutual-funds-loan-default.jpg"
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

            {/* SECTION 6: Step-by-Step SOP (6 Stages) */}
            <section id="step-by-step-sop" className="scroll-target space-y-6">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Standard Operating Procedure</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. Step-by-Step SOP: 6-Stage Portfolio Defense Protocol
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If a lender or collection agency threatens your investment portfolio, executing this systematic six-stage protocol guarantees complete asset insulation while positioning you for an affordable debt settlement.
              </p>

              <div className="space-y-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">1</span>
                    Stage 1: Change Your Broker Payout Bank
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Log into Zerodha, Groww, or your broking app. Add a bank account with a separate bank where you have no loans. Set this new account as your primary payout bank.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">2</span>
                    Stage 2: Check Your Broker Permissions
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Review your broker settings. Make sure your DDPI or Power of Attorney is set only for market trades. If you use a 3-in-1 bank account, move your shares to a standalone broker.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">3</span>
                    Stage 3: Stop Payouts into the Loan Account
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Never sell shares or redeem mutual funds into the account where your loan is overdue. The bank can take this money right away using its right of set-off.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">4</span>
                    Stage 4: Send a Legal Reply to False Threats
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If loan agents claim they will freeze your Demat account, have a lawyer send a formal reply. Cite SEBI rules and Section 171 limits. Warn them that false threats break the law.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">5</span>
                    Stage 5: File official Complaints for Harassment
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If agents harass you or contact your broker, file a complaint with the bank Principal Nodal Officer. You can also file a case on SEBI SCORES and with the RBI Ombudsman.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">6</span>
                    Stage 6: Settle the Loan Through an OTS Deal
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    With your portfolio safe, negotiate a One-Time Settlement with CredSettle. You can get waivers of 50% to 75% on interest and fees. Pay the agreed sum and get a clean No Dues letter.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: Recovery Agent Threats */}
            <section id="agent-threats" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <ShieldCheck className="w-4 h-4 text-[#1886ff]" />
                <span>legal Defenses &amp; Borrower Rights</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. Recovery Agent Threats: SEBI, RBI &amp; Criminal Law Shield
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                loan agents often pretend to have legal powers. They tell borrowers that they will raid Demat accounts or freeze trading apps. You have strong legal protections against these false claims.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                    <Gavel className="w-4 h-4" />
                    <span>Section 351 &amp; 352 BNS (Criminal threats)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Threatening a person with injury to property or reputation is a crime under Bharatiya Nyaya Sanhita. It carries jail time and criminal fines.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                    <Building2 className="w-4 h-4" />
                    <span>RBI Master Direction on loan agents</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    RBI rules strictly forbid agents from making misleading statements, threatening illegal property seizures, or contacting third parties like stockbrokers and financial advisors.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-purple-700 font-bold text-sm">
                    <Scale className="w-4 h-4" />
                    <span>SEBI Investor Protection Rules</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    SEBI rules mandate strict privateity and account split. stockbrokers are prohibited from entertaining recovery requests from third-party non-judicial entities.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Constitutional Article 300A Protection</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under Article 300A of the Constitution of India, no person can be deprived of property except by authority of law. A bank cannot arbitrarily seize movable investments without due process.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 8: 3-Tier complaint steps */}
            <section id="escalation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff]" />
                <span>legal Escalation Protocol</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. 3-Tier Escalation Matrix: Bank PNO, SCORES &amp; RBI Ombudsman
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If bank representatives or loan agents threaten your investments, use this structured official complaint steps to hold rogue lenders accountable and stop harassment.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Help Level</th>
                      <th className="p-3">Official Authority</th>
                      <th className="p-3">Time Needed</th>
                      <th className="p-3">Action &amp; Relief</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 1: Bank PNO</td>
                      <td className="p-3">Principal Nodal Officer of Creditor Bank</td>
                      <td className="p-3 font-mono">14 to 21 Working Days</td>
                      <td className="p-3">Stops illegal agent threats, halts illegal lien attempts, and logs formal hardship petition.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 2: SEBI SCORES</td>
                      <td className="p-3">SEBI Complaints Redress System (scores.gov.in)</td>
                      <td className="p-3 font-mono">21 to 30 Working Days</td>
                      <td className="p-3">Investigates wrongful interference with stockbrokers, safeguarding investor account independence.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Level 3: RBI Ombudsman</td>
                      <td className="p-3">Reserve Bank Integrated Ombudsman (cms.rbi.org.in)</td>
                      <td className="p-3 font-mono">30 Days Post-PNO</td>
                      <td className="p-3">Issues binding compensation directions for unfair collection practices and penalizes non-compliant lenders.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 9: loan timeline Table */}
            <section id="procedural-timeline" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Clock className="w-4 h-4 text-[#1886ff]" />
                <span>key steps</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Procedural Timeline: Default Stages to Portfolio Safety
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Understanding the delinquency lifecycle of an unsecured loan helps you anticipate lender actions and protect your investment portfolio before aggressive recovery begins.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Loan Period</th>
                      <th className="p-3">Bank Loan Tag</th>
                      <th className="p-3">Bank Recovery Step</th>
                      <th className="p-3">What You Should Do</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 1 to 30</td>
                      <td className="p-3 font-mono text-[11px]">SMA-0</td>
                      <td className="p-3">Automated payment reminder SMS and soft tele-calling.</td>
                      <td className="p-3">Delink creditor bank from Zerodha, Groww, and mutual fund folios.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 31 to 60</td>
                      <td className="p-3 font-mono text-[11px]">SMA-1</td>
                      <td className="p-3">Formal demand letters and persistent follow-up calls.</td>
                      <td className="p-3">Set a neutral bank account as your primary destination for dividend payouts.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 61 to 90</td>
                      <td className="p-3 font-mono text-[11px]">SMA-2</td>
                      <td className="p-3">Pre-NPA warnings and deployment of third-party recovery agencies.</td>
                      <td className="p-3">Audit broker DDPI permissions. reject false asset seizure claims.</td>
                    </tr>
                    <tr className="bg-amber-50/50">
                      <td className="p-3 font-bold text-slate-900">Day 91 to 120</td>
                      <td className="p-3 font-mono text-[11px] text-amber-700 font-bold">NPA Tagging</td>
                      <td className="p-3">Loan marked Non-Performing Asset. legal recall notice dispatched.</td>
                      <td className="p-3">Issue a formal legal reply challenging inflated penal interest and fees.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Day 121 to 180</td>
                      <td className="p-3 font-mono text-[11px] text-[#1886ff] font-bold">Prime OTS Window</td>
                      <td className="p-3">Lender open to OTS settlement to avoid litigation costs.</td>
                      <td className="p-3 font-bold text-slate-900">Negotiate a 50% to 75% OTS settlement with CredSettle.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Month 6 and Beyond</td>
                      <td className="p-3 font-mono text-[11px]">Loss Asset / ARC</td>
                      <td className="p-3">Debt assigned to ARC or civil suit considered.</td>
                      <td className="p-3">Finalize OTS settlement payment and obtain clean No Dues letter.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: Specialized Real-World Scenarios */}
            <section id="specialized-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>Specialized Scenarios</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                10. Specialized Scenarios: Joint Demat Accounts, SIPs &amp; LAS
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Investment portfolios often involve joint holdings, systematic plans, or collateral arrangements. Here is how Indian law applies across these real-world scenarios.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-[#1886ff]" />
                    Joint Demat Accounts with Spouses
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If you share a Demat account with your spouse and only you owe loan dues, the bank cannot touch your spouse&apos;s share. Creditors can only claim against the person who took the loan.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <PieChart className="w-4 h-4 text-emerald-600" />
                    Active Mutual Fund SIPs
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If your monthly SIP comes out of an account with overdue loans, the bank may block the money or charge bounce fees. Cancel the auto-debit on that account and restart your SIP through a neutral bank.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-indigo-600" />
                    Loan Against Shares (LAS) and Mutual Funds
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    A loan against shares is very different from a normal personal loan. Here, you pledged your shares under SEBI rules. If share prices drop or you miss payments, Section 176 of the Contract Act allows the lender to sell the pledged shares after notice.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-amber-600" />
                    ELSS Tax Saving Mutual Funds
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    ELSS funds have a mandatory three-year lock-in period. Even if a court issues an order, these units cannot be sold before three years are complete.
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
                Frequently Asked Questions: Demat &amp; Mutual Fund Seizure Rules
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Clear, verified legal guidance addressing critical questions regarding Demat shares, mutual fund immunity, broker firewalls, and investor rights under Indian law.
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
            <section id="official-sources" className="scroll-target space-y-4 pt-4 border-t border-slate-200">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-500">
                <BookOpen className="w-4 h-4" />
                <span>legal Citations &amp; Legal Authorities</span>
              </div>
              <h2 className="text-base sm:text-lg font-bold text-slate-900">
                Official Statutory Citations &amp; Legal Framework
              </h2>
              <ul className="space-y-2 text-xs text-slate-600 leading-relaxed list-disc pl-5">
                <li>
                  <strong>Depositories Act, 1996 &amp; SEBI rules, 2018:</strong> Strict safeguards regarding custody and transfer of dematerialized equity stocks.
                </li>
                <li>
                  <strong>Code of Civil Procedure, 1908 (CPC):</strong> Section 60(1) and Order 21 Rule 46, Execution of Decrees and Garnishee Orders on Shares.
                </li>
                <li>
                  <strong>Indian Contract Act, 1872:</strong> Section 171, Limits on General Banker Lien and Mandatory Requirements for Valid Bailment.
                </li>
                <li>
                  <strong>Recovery of Debts and Bankruptcy Act, 1993 (RDB Act):</strong> Section 19, Recovery Procedures and Conditional Attachments before the DRT.
                </li>
                <li>
                  <strong>Supreme Court of India rulings:</strong> Syndicate Bank v. Vijay Kumar (1992) and Federal Bank Ltd. v. V.M. Jog Engineering Ltd.
                </li>
              </ul>

              {/* 6 Outbound Authority Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Verified Government &amp; official Portals:</span>
                <div className="flex flex-wrap gap-2">
                  <a href="https://www.sebi.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>stocks and Exchange Board of India</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.rbi.org.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>Reserve Bank of India</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://scores.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>SEBI SCORES Grievance Portal</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://cms.rbi.org.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>RBI Integrated Ombudsman</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.nsdl.co.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>National stocks Depository Limited</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.cdslindia.com" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>Central Depository Services Limited</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* 12 Internal Topic Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Explore Related CredSettle Guides:</span>
                <div className="flex flex-wrap gap-2">
                  <Link href="/can-bank-seize-epf-provident-fund-for-loan-recovery" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    EPF &amp; Gratuity Seizure Rules
                  </Link>
                  <Link href="/can-bank-seize-ppf-sukanya-samriddhi-accounts-for-loan-default" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    PPF &amp; Sukanya Seizure Rules
                  </Link>
                  <Link href="/section-60-cpc-assets-property-exempt-from-bank-attachment" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Section 60 CPC Exemptions
                  </Link>
                  <Link href="/garnishee-order-bank-account-freeze-loan" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Garnishee Order Defense
                  </Link>
                  <Link href="/can-bank-deduct-money-from-another-account" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Bank Set-Off Rules
                  </Link>
                  <Link href="/salary-account-frozen-by-bank" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Salary Account Freeze
                  </Link>
                  <Link href="/services/personal-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Personal Loan Settlement
                  </Link>
                  <Link href="/bank-sent-legal-notice-for-loan-what-to-do" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Bank Legal Notice Reply
                  </Link>
                  <Link href="/can-bank-freeze-my-savings-account-for-loan" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Savings Account Freeze
                  </Link>
                  <Link href="/stop-recovery-agent-harassment" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Stop Recovery Harassment
                  </Link>
                  <Link href="/rbi-rules-for-recovery-agents" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    RBI Agent Guidelines
                  </Link>
                  <Link href="/get-noc-after-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    No Dues letter
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
                Expert in banking compliance, consumer debt protection, capital market rules, and NPA compromise settlements with extensive experience defending investors against unlawful collection practices.
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
                  private LEGAL SHIELD
                </span>
                <p className="text-lg md:text-xl font-bold text-white leading-snug">
                  Bank Threatening Your Demat Portfolio?
                </p>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our senior legal resolution specialists stop unlawful recovery agent harassment, enforce SEBI depository firewalls, and negotiate up to 75% loan settlement waivers.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Protect Your Portfolio Now
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
                  <span>Depository Protection • 100% private</span>
                </div>
              </div>
            </div>

            {/* Card 3: CredSettle Trust Badges */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">The CredSettle Shield</p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Zero Direct Seizure:</strong> 100% legal depository protection.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Agent threats Block:</strong> Legal notice protection for brokers.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>SEBI &amp; RBI Escalation:</strong> Direct official complaint handling.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Official Bank Closure:</strong> Guaranteed No Dues letter.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">Related Legal Guides</p>
              <div className="space-y-2.5">
                <Link
                  href="/can-bank-seize-epf-provident-fund-for-loan-recovery"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    EPF &amp; Gratuity Seizure Rules
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Retirement fund protection &rarr;</span>
                </Link>

                <Link
                  href="/section-60-cpc-assets-property-exempt-from-bank-attachment"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Section 60 CPC Asset Exemptions
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Non-attachable property list &rarr;</span>
                </Link>

                <Link
                  href="/garnishee-order-bank-account-freeze-loan"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Garnishee Order Bank Freeze
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Defend court garnishee notices &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
