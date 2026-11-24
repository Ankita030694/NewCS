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

export default function FrozenAccountLoanFixClient() {
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
    { id: 'why-disbursal-lands', label: '1. Why Loans Hit Frozen Accounts' },
    { id: 'rbi-reactivation-rules', label: '2. Zero-Fee Dormant & KYC Rules' },
    { id: 'freeze-type-matrix', label: '3. Freeze Diagnostic Matrix' },
    { id: 'cooling-off-and-interest', label: '4. Cooling-Off & NEFT Return Law' },
    { id: 'visual-blueprint', label: '5. Visual Blueprint Infographic' },
    { id: 'step-by-step-sop', label: '6. 6-Step Unfreeze & Loan SOP' },
    { id: 'borrower-legal-rights', label: '7. Cyber Liens, Set-Off & Courts' },
    { id: 'escalation-matrix', label: '8. 3-Tier Escalation Matrix' },
    { id: 'procedural-timeline', label: '9. Disbursal to Unfreeze Milestones' },
    { id: 'specialized-scenarios', label: '10. Special Cases & NACH Traps' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
    {
      q: 'Why did my personal loan get credited into a frozen or dormant bank account?',
      a: 'Under RBI KYC rules, a partial freeze blocks only debits while keeping credits open. A lender penny-drop check of ₹1 also passes because it is a credit. As a result, the NEFT loan payout lands in the account, but you cannot withdraw it.'
    },
    {
      q: 'Does the bank charge a fee to activate a dormant or inoperative account?',
      a: 'No. Under RBI Circular RBI/2023-24/105 (effective April 1, 2024), banks cannot levy any fee to reactivate an inoperative or dormant account. They also cannot impose a minimum balance penalty while the account stays inoperative.'
    },
    {
      q: 'Do I have to visit my home branch to unfreeze my KYC or dormant account?',
      a: 'No. Under the June 2025 RBI amendment (RBI/2025-26/52), you can submit fresh KYC at any branch of your bank. You can also use Video KYC (V-CIP) or bank digital channels if your bank offers them.'
    },
    {
      q: 'Can I cancel my personal loan if the money is trapped in a frozen account?',
      a: 'Yes, if you act within the cooling-off period listed in your Key Facts Statement (KFS). Under RBI Digital Lending Directions 2025, every digital loan has a cooling-off window of at least one day. You pay back principal plus daily APR with zero foreclosure fine.'
    },
    {
      q: 'What if the NEFT loan disbursal bounced due to a closed or fully frozen account?',
      a: 'Under RBI NEFT rules, the receiving bank must return an uncredited transfer within 2 hours of batch settlement. If it delays, the bank must pay you Repo Rate plus 2% penal interest on its own. Your lender also cannot charge interest under the April 2024 RBI circular until you get the funds.'
    },
    {
      q: 'What if my new loan landed in an account frozen by the cyber crime police?',
      a: 'Ask your branch for the cyber complaint ID, police station name, and exact disputed sum. High Courts in Mohammed Saifullah v. RBI (2024) and Dr. Sajir v. RBI (2023) held that police can lock only the disputed sum. Your fresh loan money above that lien must be freed.'
    },
    {
      q: 'Can my receiving bank grab my new personal loan to pay an old overdue card?',
      a: 'A bank may try to use its right of set-off under Section 171 of the Indian Contract Act, 1872 if you owe that same bank money. However, it cannot break RBI notice rules or block basic livelihood funds without due process. You can dispute unfair sweeps with the Nodal Officer and RBI Ombudsman.'
    },
    {
      q: 'Will my EMI auto-debit bounce if my bank account stays frozen?',
      a: 'Yes. A debit freeze blocks NACH and UPI Autopay debits too, causing bounce fees and CIBIL drops. Move your EMI mandate to a second active bank account right away, or pay manually via NEFT or UPI to protect your credit score.'
    },
    {
      q: 'How long does it take to unfreeze a KYC or dormant account in India?',
      a: 'A routine re-KYC or dormant account activation usually finishes in 24 to 72 hours after you submit valid ID and address proof. If the bank delays without a valid reason, escalate to the Grievance Redressal Officer and then to cms.rbi.org.in.'
    },
    {
      q: 'How does CredSettle help when a personal loan is stuck in a frozen account?',
      a: 'CredSettle audits your freeze code, sends formal notices to your bank under RBI KYC and NEFT rules, and guides lender cooling-off or EMI hold requests. If a bank still delays or triggers unfair CIBIL marks, our legal team escalates to the PNO and RBI Ombudsman.'
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
            <span>RBI Dormant Account, KYC &amp; Digital Lending Rights</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Reclaim New Loan Funds Trapped in Dormant KYC Accounts
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            Did your personal loan land in a frozen, dormant, or KYC-blocked bank account? Learn how to unlock your funds for free under RBI rules, stop unfair EMI interest, and shield your CIBIL score.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Unlock Trapped Loan Funds</span>
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
                  <span>Statutory Borrower Shield</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Backed by RBI Circulars RBI/2023-24/105, RBI/2024-25/30, and RBI Digital Lending Directions 2025.
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
                <span>EXECUTIVE BRIEF: LOAN DISBURSED INTO FROZEN ACCOUNT FIX</span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Why the Money Got Stuck:</strong> A partial KYC freeze or dormant status lets credits enter while blocking all withdrawals. Even a ₹1 penny-drop test passes before disbursal.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Zero-Fee Account Activation:</strong> Under RBI Circular RBI/2023-24/105, banks cannot charge any fee to revive a dormant account. You can update KYC at any branch or via Video KYC (V-CIP).
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">2-Hour NEFT Return Rule:</strong> If a closed or fully frozen account rejects the loan transfer, the bank must return it within 2 hours or pay Repo Rate plus 2% penal interest automatically.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Cooling-Off Exit &amp; Interest Shield:</strong> You can exit a digital loan inside the cooling-off period with zero fine. Under RBI Circular RBI/2024-25/30, lenders cannot charge interest if funds never reached you.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Cyber Freeze &amp; NACH Defense:</strong> High Courts bar full account freezes for small cyber liens. Shift your EMI auto-debit to an active account right away to avoid NACH bounce fees.
                  </span>
                </li>
              </ul>
            </div>

            {/* SECTION 1: Why Loans Credit Into Frozen & Dormant Accounts */}
            <section id="why-disbursal-lands" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Banking Core Mechanics &amp; Penny-Drop Flaw</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. Why Loans Credit Into Frozen &amp; Dormant Accounts
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Many borrowers feel shocked when a new personal loan hits a blocked bank account. They assume a frozen account will reject incoming money. In Indian banking, that is often not true.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under the RBI Master Direction on KYC, banks use a phased freeze system when periodic KYC is overdue. First, the bank must send a three-month notice and a second three-month reminder. After six months, the bank puts a partial freeze on the account.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                A partial freeze allows all incoming credits, such as NEFT, RTGS, or IMPS transfers. At the same time, it blocks every outgoing debit, UPI payment, and ATM cash withdrawal. Dormant accounts with no customer activity for 24 months behave the same way for incoming credits.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Before releasing a loan, banks and NBFCs run a ₹1 penny-drop check to verify your name. Since a ₹1 test is an incoming credit, it passes even on a debit-frozen account. The lender then wires the full loan, and your money gets trapped while EMI interest starts ticking.
              </p>
            </section>

            {/* SECTION 2: RBI Rules: Zero-Fee Dormant & KYC Reactivation */}
            <section id="rbi-reactivation-rules" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Clock className="w-4 h-4 text-[#1886ff]" />
                <span>RBI Jan 2024 &amp; June 2025 Mandates</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. RBI Rules: Zero-Fee Dormant &amp; KYC Reactivation
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The Reserve Bank of India issued strict rules to help customers unlock frozen and dormant accounts fast. On January 1, 2024, RBI issued Circular RBI/2023-24/105 (effective April 1, 2024). It sets clear duties for every bank in India.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                First, banks cannot charge any fee to activate a dormant or inoperative account. They also cannot deduct minimum balance penalties for the months the account stayed inoperative. If a clerk demands a reactivation fee, show them this RBI rule.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Second, RBI updated these rules on June 12, 2025 via Circular RBI/2025-26/52. You no longer need to travel to your home branch to unfreeze your account. Any branch of your bank must accept your KYC update and unblock request.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Third, banks can verify your KYC remotely using Video KYC (V-CIP) or through Business Correspondents. If none of your KYC details changed, a simple self-declaration via mobile banking, email, or ATM is enough. Also, banks must keep low-risk accounts open for up to one year after re-KYC falls due, or until June 30, 2026, whichever is later.
              </p>
            </section>

            {/* SECTION 3: Freeze Diagnostic Matrix: Remedies & Timelines */}
            <section id="freeze-type-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                <span>Freeze Code Classification &amp; Action Map</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Freeze Diagnostic Matrix: Remedies &amp; Timelines
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Every bank freeze has a specific reason code inside the core banking system. Your exact fix depends on why the account was locked. Use this table to match your freeze type with the fastest legal fix.
              </p>

              {/* Freeze Diagnostic Table */}
              <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white shadow-xs">
                <div className="bg-slate-900 text-white p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-[#1886ff]" />
                    <span className="font-bold text-sm">Frozen Account Type vs. Legal Recovery Path</span>
                  </div>
                  <span className="text-xs text-blue-300 font-mono">RBI &amp; Court Verified Matrix</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[600px]">
                    <thead>
                      <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-semibold">
                        <th className="p-3">Account Block Type</th>
                        <th className="p-3">Can Loan Credit Land?</th>
                        <th className="p-3">Primary Unblock Fix</th>
                        <th className="p-3 text-right">Typical Timeline</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200/80 text-slate-600">
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Partial KYC Freeze (Debit Block)</td>
                        <td className="p-3 text-amber-600 font-semibold">Yes (Credits Allowed)</td>
                        <td className="p-3">Submit re-KYC at any branch, app, or V-CIP.</td>
                        <td className="p-3 text-right font-bold text-emerald-700 font-mono">24 to 72 Hours</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Dormant / Inoperative (24+ Months)</td>
                        <td className="p-3 text-amber-600 font-semibold">Yes (Most Credits Pass)</td>
                        <td className="p-3">Free KYC update plus one customer transaction.</td>
                        <td className="p-3 text-right font-bold text-emerald-700 font-mono">1 to 3 Working Days</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Total Freeze / Closed Account</td>
                        <td className="p-3 text-emerald-600 font-semibold">No (NEFT Must Bounce)</td>
                        <td className="p-3">Get UTR return proof; claim zero interest &amp; re-disbursal.</td>
                        <td className="p-3 text-right font-bold text-[#1886ff] font-mono">2 Hours (NEFT Rule)</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Cyber Crime Police Freeze</td>
                        <td className="p-3 text-rose-600 font-semibold">Yes (Funds Get Trapped)</td>
                        <td className="p-3">Request lien cap on disputed sum via IO or High Court.</td>
                        <td className="p-3 text-right font-bold text-rose-700 font-mono">15 to 45 Days</td>
                      </tr>
                      <tr className="bg-blue-50/70 font-bold text-slate-900">
                        <td className="p-3">Bank Set-Off / Tax Attachment</td>
                        <td className="p-3 text-rose-700">Yes (Risk of Sweep)</td>
                        <td className="p-3 text-[#1886ff]">Dispute illegal set-off or seek lender cooling-off exit.</td>
                        <td className="p-3 text-right text-[#1886ff] font-mono">7 to 30 Days</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* SECTION 4: Cooling-Off Exit, NEFT Return & Interest Rules */}
            <section id="cooling-off-and-interest" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <AlertTriangle className="w-4 h-4 text-[#1886ff]" />
                <span>Lender Rules, NEFT TAT &amp; Fair Interest Law</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. Cooling-Off Exit, NEFT Return &amp; Interest Rules
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Three binding RBI protections stop lenders from profiting when a loan disbursal goes wrong. Know these rules before you pay a single rupee of unfair interest.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                First, under the RBI Digital Lending Directions, 2025 (Circular RBI/2025-26/36 dated May 8, 2025), every digital personal loan carries a mandatory cooling-off period. The lender board sets this window, and it cannot be less than one day. Check your Key Facts Statement (KFS) for the exact number of days. During this window, you can cancel the loan by returning the principal plus daily APR with zero foreclosure fine.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Second, if your account had a total freeze or was closed, the NEFT transfer cannot credit. Under RBI NEFT guidelines, the receiving bank must return uncredited funds within two hours of batch settlement. If the bank delays, it must pay penal interest at the RBI Repo Rate plus 2% automatically without you filing a claim.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Third, RBI issued Circular RBI/2024-25/30 on April 29, 2024 on Fair Practices for Charging Interest. Lenders can charge interest only from the actual date funds are disbursed and made available to you. If a failed NEFT sits in a suspense account or returns to the lender, charging EMI or broken-period interest violates RBI rules.
              </p>
            </section>

            {/* SECTION 5: Visual Blueprint Infographic */}
            <section id="visual-blueprint" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Sparkles className="w-4 h-4 text-[#1886ff]" />
                <span>Visual Blueprint</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. Visual Blueprint: Frozen Account Loan Recovery
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This visual guide highlights your core banking shields when a personal loan gets stuck in a dormant or frozen account. It summarizes zero-fee re-KYC activation, the 2-hour NEFT return rule, and your cooling-off exit right.
              </p>

              <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-slate-100 bg-slate-100">
                  <Image
                    src="/images/infographics/personal-loan-disbursed-into-frozen-dormant-account.jpg"
                    alt="Personal Loan Disbursed Into Frozen or Dormant Bank Account Fix Guide"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 900px"
                    className="object-contain hover:scale-[1.01] transition-transform duration-300"
                    priority
                  />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-500 pt-1 gap-2">
                  <span>Official CredSettle Frozen Account Loan Recovery Framework • RBI Compliant</span>
                  <a
                    href="/images/infographics/personal-loan-disbursed-into-frozen-dormant-account.jpg"
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

            {/* SECTION 6: Step-by-Step SOP: Unfreeze & Protect Your Loan */}
            <section id="step-by-step-sop" className="scroll-target space-y-6">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Standard Operating Procedure</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. Step-by-Step SOP: Unfreeze &amp; Protect Your Loan
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Act within the first 24 to 48 hours of disbursement. Follow these six steps to free your loan money and prevent bounce fees or CIBIL drops.
              </p>

              <div className="space-y-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">1</span>
                    Stage 1: Get the Exact Freeze Code and UTR Proof
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Download the loan disbursal UTR number from your lender app. Call or visit any branch of your receiving bank and ask for the written freeze reason code. Confirm if it is a KYC block, dormancy lock, cyber lien, or total freeze.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">2</span>
                    Stage 2: Complete Zero-Fee Re-KYC at Any Branch or V-CIP
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    For a dormant or KYC freeze, submit your Aadhaar, PAN, and a reactivation form at the nearest branch or via Video KYC. Cite RBI Circular RBI/2025-26/52 if staff tell you to visit your home city. Take a stamped receipt with the date.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">3</span>
                    Stage 3: Email the Lender Before Cooling-Off Ends
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If the freeze will take weeks (like a cyber freeze), email your lender right away with your KFS and bank freeze letter. Ask to trigger the cooling-off exit or pause EMI billing if the NEFT returned to them.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">4</span>
                    Stage 4: Shift NACH and UPI Autopay to an Active Bank
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Do not let your first EMI hit a debit-frozen account. Submit a bank swap request to move your e-NACH mandate to a live savings account at least 10 days before the EMI date. This stops ₹500+ bounce fees and Section 25 PSS Act notices.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">5</span>
                    Stage 5: Audit Failed NEFT Return and Reverse Wrong Interest
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If the bank rejected the credit, verify the return UTR timestamp. Demand Repo Rate plus 2% penal interest for any return delayed past 2 hours. Also demand full interest waiver from the lender under RBI Circular RBI/2024-25/30.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">6</span>
                    Stage 6: Escalate Unfair Delays to PNO and RBI Ombudsman
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If the receiving bank drags re-KYC beyond 72 hours or the lender reports a fake late mark to CIBIL, file a formal complaint with the Principal Nodal Officer. After 30 days without relief, file on cms.rbi.org.in for free.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: Legal Remedies: Cyber Liens, Set-Off & Courts */}
            <section id="borrower-legal-rights" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>High Court Precedents &amp; Statutory Rights</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. Legal Remedies: Cyber Liens, Set-Off &amp; Courts
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When a routine KYC fix does not apply, Indian courts and banking statutes still protect your trapped loan money. Here are four key legal shields you can invoke.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                    <Gavel className="w-4 h-4" />
                    <span>Madras HC: Mohammed Saifullah v. RBI (2024)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The Court held that freezing an entire bank account over a small cyber complaint violates Article 19(1)(g). It ordered the bank to mark a lien only on the disputed sum and free the rest of the balance.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                    <Scale className="w-4 h-4" />
                    <span>Kerala HC: Dr. Sajir v. RBI (2023)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The Kerala High Court ruled that police using Section 102 CrPC (now Section 106 BNSS, 2023) cannot lock innocent funds indefinitely. Fresh personal loan credits above a cyber lien must remain free to use.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-purple-700 font-bold text-sm">
                    <Building2 className="w-4 h-4" />
                    <span>Limits on Banker Right of Set-Off (Sec 171)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under Section 171 of the Indian Contract Act, 1872, a bank cannot silently seize funds meant for a specific purpose or ignore prior notice rules. Unfair sweeps without clear default notice can be challenged.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Consumer Protection Act, 2019 (Sec 2(11))</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Freezing an account without the mandatory 6-month KYC notice or refusing free dormant activation is a deficiency in service. You can claim interest loss and mental agony damages in Consumer Court.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 8: 3-Tier Escalation Matrix: GRO to RBI Ombudsman */}
            <section id="escalation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Escalation Protocol</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. 3-Tier Escalation Matrix: GRO to RBI Ombudsman
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If your receiving bank refuses to unfreeze your account or your lender refuses to reverse wrong EMI interest, escalate through this official three-tier channel.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Escalation Tier</th>
                      <th className="p-3">Designated Banking Authority</th>
                      <th className="p-3">Turnaround Time</th>
                      <th className="p-3">Scope of Intervention &amp; Relief</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 1: GRO / CFC</td>
                      <td className="p-3">Bank Grievance Officer or NEFT CFC</td>
                      <td className="p-3 font-mono">3 to 7 Working Days</td>
                      <td className="p-3">Clears pending re-KYC, traces failed NEFT UTR, and logs your ticket ID.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 2: PNO</td>
                      <td className="p-3">Principal Nodal Officer (Head Office)</td>
                      <td className="p-3 font-mono">10 to 15 Working Days</td>
                      <td className="p-3">Lifts wrong branch blocks, waives unfair interest, and updates NACH or CIBIL.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Level 3: RBI Ombudsman</td>
                      <td className="p-3">Reserve Bank Integrated Ombudsman</td>
                      <td className="p-3 font-mono">30 Days Post-PNO</td>
                      <td className="p-3">Issues binding orders on cms.rbi.org.in for unfreeze, refund, and CIBIL repair.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 9: Recovery Milestones: Day 0 Disbursal to Unfreeze */}
            <section id="procedural-timeline" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Calendar className="w-4 h-4 text-[#1886ff]" />
                <span>Actionable Recovery Timeline</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Recovery Milestones: Day 0 Disbursal to Unfreeze
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Timing matters most in the first month. Missing a cooling-off window or a first EMI date can turn a simple KYC delay into a credit report disaster.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Milestone Window</th>
                      <th className="p-3">Case Stage</th>
                      <th className="p-3">Bank / Lender Action</th>
                      <th className="p-3">Borrower Action Protocol</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 0 (Disbursal)</td>
                      <td className="p-3 font-mono text-[11px]">Trap Detected</td>
                      <td className="p-3">Loan NEFT credits frozen account or bounces back in 2 hours.</td>
                      <td className="p-3">Save UTR number, KFS copy, and SMS alerts showing credit or block.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 1 to 3</td>
                      <td className="p-3 font-mono text-[11px]">Re-KYC / Cooling-Off</td>
                      <td className="p-3">Processes free KYC update at any branch or V-CIP channel.</td>
                      <td className="p-3">File re-KYC or send cooling-off cancellation email to the lender.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 4 to 7</td>
                      <td className="p-3 font-mono text-[11px]">Mandate Protection</td>
                      <td className="p-3">Activates KYC/dormant account or shares cyber complaint details.</td>
                      <td className="p-3">Move e-NACH EMI mandate to an active bank account to block bounces.</td>
                    </tr>
                    <tr className="bg-amber-50/50">
                      <td className="p-3 font-bold text-slate-900">Day 8 to 15</td>
                      <td className="p-3 font-mono text-[11px] text-amber-700 font-bold">Formal Escalation</td>
                      <td className="p-3">Bank GRO/PNO reviews branch delay or failed NEFT penal interest.</td>
                      <td className="p-3 font-bold text-amber-800">Send written notice citing RBI Circulars 2024/105, 2025/52, and 2024/30.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Day 16 to 30</td>
                      <td className="p-3 font-mono text-[11px] text-[#1886ff] font-bold">Pre-EMI Safeguard</td>
                      <td className="p-3">First EMI cycle approaches; bureau reporting prepares to sync.</td>
                      <td className="p-3 font-bold text-slate-900">Pay EMI from an alternate active account if loan stays open; check CIBIL.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 31 and Beyond</td>
                      <td className="p-3 font-mono text-[11px] text-rose-700 font-bold">Ombudsman / Writ</td>
                      <td className="p-3">Faces binding RBI Ombudsman award or High Court writ order.</td>
                      <td className="p-3">File on cms.rbi.org.in or move High Court to cap a blanket cyber freeze.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: Special Cases: Cyber Freeze, Set-Off & NACH */}
            <section id="specialized-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>High-Risk Real-World Traps</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                10. Special Cases: Cyber Freeze, Set-Off &amp; NACH
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Some account blocks go beyond simple KYC paperwork. Here is how to handle four tricky real-world traps without losing your money or credit score.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#1886ff]" />
                    Cyber Crime Layer Freeze on New Loan
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If a small P2P or UPI trade triggered a cyber freeze, your entire account may lock. Show your loan sanction letter and UTR to the bank and IO to prove the new funds are clean. Request a lien cap limited only to the disputed sum.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Scale className="w-4 h-4 text-emerald-600" />
                    Old Overdue Loan Set-Off in Same Bank
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Never disburse a new loan from Lender B into a bank account at Bank A where you already have an overdue card or loan. Bank A may sweep the cash using set-off. If it swept funds without notice, file a formal grievance at once.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-indigo-600" />
                    NACH Bounce &amp; Section 25 PSS Act Risk
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    A frozen account blocks auto-debit mandates even when the loan cash is sitting inside it. Multiple NACH bounces trigger fees and Section 25 Payment and Settlement Systems Act notices. Swap your EMI bank mandate early to stay safe.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-amber-600" />
                    Failed NEFT Trapped in Bank Suspense Pool
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Sometimes a totally frozen account rejects the loan, yet the money sits in a bank suspense ledger for days. Pull the NEFT UTR trace through the bank Customer Facilitation Centre (CFC) and claim automatic Repo Rate plus 2% penal interest.
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
                Frequently Asked Questions: Loan in Frozen Account
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Straightforward answers on unfreezing dormant KYC accounts, cancelling trapped personal loans, handling cyber liens, and stopping unfair EMI charges under RBI rules.
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
                Official Regulatory Citations &amp; Statutory Sources
              </h2>
              <ul className="space-y-2 text-xs text-slate-600 leading-relaxed list-disc pl-5">
                <li>
                  <strong>RBI Inoperative Accounts Circulars:</strong> RBI/2023-24/105 (DOR.SOG(LEG).REC/64/09.08.024/2023-24) and June 12, 2025 Amendment RBI/2025-26/52 (zero activation fees, non-home branch, and V-CIP reactivation).
                </li>
                <li>
                  <strong>RBI Master Direction on KYC (2016, Updated 2025):</strong> Periodic Updation of KYC, mandatory 3+3 months prior notice before partial freeze, and simplified self-declaration norms.
                </li>
                <li>
                  <strong>RBI Digital Lending Directions, 2025:</strong> RBI/2025-26/36 (DOR.STR.REC.19/21.07.001/2025-26), mandatory cooling-off exit window and upfront KFS disclosures.
                </li>
                <li>
                  <strong>RBI Fair Practices Code on Charging Interest:</strong> RBI/2024-25/30 (DoS.CO.PPG.SEC.1/11.01.005/2024-25), charging interest strictly from actual disbursement date, plus RBI NEFT 2-Hour Return &amp; Repo Rate + 2% Penal Interest Guidelines.
                </li>
                <li>
                  <strong>High Court Cyber Freeze Precedents &amp; Statutes:</strong> Mohammed Saifullah v. RBI (Madras HC, 2024), Dr. Sajir v. RBI (Kerala HC, 2023), Section 106 BNSS 2023 (Section 102 CrPC), Section 171 Indian Contract Act 1872, and Consumer Protection Act 2019.
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
                  <a href="https://www.npci.org.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>NPCI NACH &amp; Payments Portal</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://cybercrime.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>National Cyber Crime Portal</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.indiacode.nic.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>India Code Statutory Repository</span>
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
                  <Link href="/application-to-unblock-bank-account-for-loan-emi" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Unblock Bank Account for Loan EMI
                  </Link>
                  <Link href="/bank-froze-salary-account-for-loan-default-how-to-get-salary" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Salary Account Freeze Legal Fix
                  </Link>
                  <Link href="/bankers-right-of-set-off-on-savings-account-section-171-contract-act" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Section 171 Bank Set-Off Rules
                  </Link>
                  <Link href="/personal-loan-interest-before-disbursal-bpi-rbi-refund" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Interest Before Disbursal Refund
                  </Link>
                  <Link href="/personal-loan-hidden-charges-not-in-kfs-rbi-refund" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Hidden Loan Fees Not in KFS
                  </Link>
                  <Link href="/nbfc-presenting-mandate-multiple-times-month-bounce-fee" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Multiple NACH Mandate Bounce Refund
                  </Link>
                  <Link href="/can-hr-refuse-salary-account-switch-personal-loan" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Switch Salary Bank Account Guide
                  </Link>
                  <Link href="/rbi-100-per-day-compensation-for-delayed-cibil-report-update" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    RBI ₹100/Day CIBIL Delay Rule
                  </Link>
                  <Link href="/get-noc-after-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    No Dues Certificate Guide
                  </Link>
                  <Link href="/services/personal-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Personal Loan Settlement Services
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
                Specialist in Indian banking compliance, RBI KYC and digital lending rules, bank freeze disputes, and personal loan legal defense helping borrowers recover trapped funds and protect CIBIL scores.
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
                  URGENT BANK FREEZE SUPPORT
                </span>
                <p className="text-lg md:text-xl font-bold text-white leading-snug">
                  Loan Money Trapped in a Frozen Account?
                </p>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our banking legal team drafts formal RBI notices to unblock dormant or KYC accounts, stops unfair EMI interest, and protects your CIBIL from auto-debit bounces.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Get Legal Unfreeze Help Now
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
                  <span><strong>Zero-Fee Re-KYC Enforcement:</strong> Direct Nodal notices citing RBI rules.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Interest &amp; Cooling-Off Shield:</strong> Reversal of unfair pre-use interest.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Cyber Lien Cap Drafting:</strong> High Court precedent representations.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>RBI Ombudsman Filing:</strong> Complete online escalation support.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">Related Legal Guides</p>
              <div className="space-y-2.5">
                <Link
                  href="/application-to-unblock-bank-account-for-loan-emi"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Unblock Bank Account for Loan EMI
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Bank application &amp; unblock SOP &rarr;</span>
                </Link>

                <Link
                  href="/personal-loan-interest-before-disbursal-bpi-rbi-refund"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Interest Charged Before Disbursal Refund
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">RBI April 2024 interest circular &rarr;</span>
                </Link>

                <Link
                  href="/bankers-right-of-set-off-on-savings-account-section-171-contract-act"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Banker Right of Set-Off on Savings Account
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Section 171 Contract Act limits &rarr;</span>
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
