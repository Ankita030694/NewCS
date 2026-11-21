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

export default function CreditCardBankMigrationClient() {
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
    { id: 'legal-framework', label: '1. Legal Rules on Bank Mergers' },
    { id: 'rbi-mitc-rules', label: '2. RBI 30-Day MITC & Opt-Out Law' },
    { id: 'migration-billing-traps', label: '3. Billing, Auto-Pay & Reward Bugs' },
    { id: 'cibil-duplicate-entries', label: '4. Duplicate CIBIL & Rs 100/Day Law' },
    { id: 'visual-blueprint', label: '5. Visual Blueprint Infographic' },
    { id: 'dispute-comparison-matrix', label: '6. Post-Merger Remedies Table' },
    { id: 'step-by-step-sop', label: '7. Step-by-Step Dispute SOP' },
    { id: 'court-precedents', label: '8. Court Rulings & Borrower Rights' },
    { id: 'escalation-timelines', label: '9. Deadlines & RBI Escalation' },
    { id: 'ots-settlement-mergers', label: '10. OTS Settlement & Precautions' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
    {
      q: 'Can a new bank change my credit card fees or rewards without notice after a merger?',
      a: 'No. Under the RBI Credit Card Directions, 2022, any change in Most Important Terms and Conditions (MITC), fees, or rates needs 30 days prior notice. You can opt out and close the card at no extra cost within those 30 days.'
    },
    {
      q: 'Why does my CIBIL report show two active credit cards after a bank migration?',
      a: 'This happens when the old bank fails to close its old record while the new bank opens a fresh card entry. File an online CIBIL dispute so the old card is marked closed or transferred. This protects your credit score.'
    },
    {
      q: 'Do I have to pay late fees if my auto-debit failed during the bank cutover weekend?',
      a: 'No. If your bank account had enough balance and auto-pay failed because biller codes changed during the move, the bank is at fault. Ask for a full refund of late fees, GST, and interest, plus removal of any late mark.'
    },
    {
      q: 'How much compensation can I get if the bank delays fixing my post-merger CIBIL error?',
      a: 'Under RBI Circular RBI/2023-24/72, the bank gets 21 days and the credit bureau gets 9 days (30 days total) to fix your report. Any delay past 30 days gives you Rs 100 per day paid straight to your bank account.'
    },
    {
      q: 'Is a One-Time Settlement (OTS) signed with the old bank valid after a merger?',
      a: 'Yes. Under Section 130 of the Transfer of Property Act, 1882, the new bank takes your card account subject to all past deals and waivers. Keep your old OTS letter and payment slips as legal proof.'
    },
    {
      q: 'What if I reject the new migrated credit card terms and ask for closure?',
      a: 'If you clear your spent balance and ask to close the card within the 30-day MITC notice window, no new annual fee applies. Once dues are zero, the bank must close the card in 7 working days or pay Rs 500 per day.'
    },
    {
      q: 'What happens to my unbilled merchant EMIs when my credit card migrates to a new bank?',
      a: 'Your active EMIs must carry over at the exact same interest rate and months left. The new bank cannot charge foreclosure fees or raise your EMI rate during a bank transfer.'
    },
    {
      q: 'Can I change my credit card billing date if the new bank shifted my statement cycle?',
      a: 'Yes. Under RBI rules updated in March 2024, every card user can change their billing cycle date at least once via app, net banking, email, or phone to match their salary date.'
    },
    {
      q: 'Why did an old closed credit card suddenly show overdue charges after bank migration?',
      a: 'Old closed cards sometimes pop up with small ghost fees during bulk data moves. Send your old closure email or zero-due bill to the Principal Nodal Officer to wipe the false charge and clean CIBIL.'
    },
    {
      q: 'How does CredSettle help resolve credit card debt and errors after a bank merger?',
      a: 'CredSettle checks your old and new card bills, escalates duplicate CIBIL entries and unfair fees to the Nodal Officer and RBI Ombudsman, and settles large card dues legally.'
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
            <span>RBI Credit Card Directions &amp; CICRA Consumer Protection</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Resolve Credit Card Dues &amp; CIBIL Errors After Bank Merger
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            Did a bank merger or card portfolio buyout trigger duplicate CIBIL entries, failed auto-pay late fees, or lost reward points? Know your RBI 30-day notice rights, claim daily compensation, and resolve migrated card debt legally.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Resolve Migration Dispute Now</span>
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
                  <span>Statutory Cardholder Shield</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Protected under RBI Credit Card Directions 2022, CICRA 2005, and RBI Circular RBI/2023-24/72.
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
                <span>QUICK ANSWER: CREDIT CARD RIGHTS DURING BANK MIGRATION</span>
              </div>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                When one bank buys another bank or takes over its credit cards, your legal rights stay safe. The new bank cannot quietly raise fees, punish you for system bugs, or list the same card twice on CIBIL.
              </p>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">30-Day MITC Notice Rule:</strong> The new bank must give at least 30 days notice before changing fees, rewards, or APR. You get a free option to close your card.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Zero Fault for Auto-Pay Glitches:</strong> If standing orders fail because biller codes changed during the move, the bank must refund late fees, GST, and interest.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Duplicate CIBIL Fix &amp; Rs 100/Day Rule:</strong> Two banks cannot report one card as active at the same time. Delays past 30 days in fixing CIBIL pay Rs 100 per day.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">7-Day Closure &amp; Rs 500/Day Rule:</strong> If you opt out after paying your spent dues, the bank must close the card in 7 working days or pay Rs 500 per day.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Past OTS Letters Stay Valid:</strong> Any One-Time Settlement or fee waiver given by the old bank binds the new bank by law.
                  </span>
                </li>
              </ul>
            </div>

            {/* SECTION 1: Legal Rules on Bank Mergers & Card Portfolio Transfers */}
            <section id="legal-framework" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Framework &amp; Bank Liability</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. Legal Rules on Bank Mergers &amp; Card Portfolio Transfers
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                India has seen many big bank mergers and card buyouts in recent years. Key examples include the Citibank India card move to Axis Bank, PSU bank mergers, and retail loan deals between private and foreign banks.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Full bank mergers run under Section 44A of the Banking Regulation Act, 1949, or central merger schemes. Standalone card or loan book sales follow the RBI (Transfer of Loan Exposures) Directions, 2021.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under Section 130 of the Transfer of Property Act, 1882, credit card dues count as actionable claims. When an old bank hands your card over to a new bank, the new bank steps into the exact shoes of the old bank.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                In plain words, the buyer bank takes your card with all past history intact. It must honor every past payment, fee waiver, reward point, and settlement deal given by your old bank.
              </p>
            </section>

            {/* SECTION 2: RBI 30-Day MITC Notice & Free Card Opt-Out Rights */}
            <section id="rbi-mitc-rules" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Clock className="w-4 h-4 text-[#1886ff]" />
                <span>RBI Master Direction Protections</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. RBI 30-Day MITC Notice &amp; Free Card Opt-Out Rights
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                During a card transfer, the new bank maps your old card to one of its own cards. Often, the new card has different yearly fees, lounge perks, reward rates, or interest rates.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The RBI (Credit Card and Debit Card - Issuance and Conduct) Directions, 2022, set strict rules for this switch. Before changing any Most Important Terms and Conditions (MITC) or fees, the bank must give you 30 days prior notice.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If you do not accept the new terms, you can opt out and close the card within 30 days for free. You only pay your actual spent balance, with zero new annual fee. Read our guide on{' '}
                <Link href="/bank-increased-credit-card-apr-interest-rbi-opt-out" className="text-[#1886ff] hover:underline font-semibold">
                  RBI credit card APR hike opt-out rules
                </Link>{' '}
                to learn more.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Once your balance is zero and you ask to close the card, the bank has 7 working days to close it. If the bank takes longer than 7 working days, it must pay you Rs 500 per day as an RBI penalty.
              </p>
            </section>

            {/* SECTION 3: Common Billing, Auto-Pay & Reward Glitches in Mergers */}
            <section id="migration-billing-traps" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <AlertTriangle className="w-4 h-4 text-[#1886ff]" />
                <span>Cutover Billing Bugs</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Common Billing, Auto-Pay &amp; Reward Glitches in Mergers
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Moving lakhs of cards from one bank server to another often triggers billing bugs in the first month. Watch out for these four common errors on your first bill from the new bank.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#1886ff]" />
                    NACH &amp; Auto-Debit Mandate Failure
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Old IFSC codes and biller IDs often stop working on the cutover weekend. If your bank account had enough funds, the new bank must waive all{' '}
                    <Link href="/credit-card-auto-debit-failed-sufficient-balance-cibil" className="text-[#1886ff] hover:underline font-semibold">
                      failed auto-debit late fees
                    </Link>{' '}
                    and GST.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-emerald-600" />
                    Shifted Statement &amp; Due Dates
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    New banks sometimes shift your bill date by 5 to 10 days, clashing with your salary day. Under RBI rules, you can{' '}
                    <Link href="/change-credit-card-billing-cycle-date-rbi-salary-rule" className="text-[#1886ff] hover:underline font-semibold">
                      change your billing cycle date
                    </Link>{' '}
                    to match your payday.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-indigo-600" />
                    Unbilled Merchant EMI Resets
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Active No-Cost or shop EMIs sometimes lose their discount during the server move. The new bank must keep your exact old EMI rate with zero pre-closure fee.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-amber-600" />
                    Missing or Cut Reward Points
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Reward points can fail to link if you already hold an account at the new bank. Save your last old bill so you can claim every single promised point.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 4: Fixing Duplicate CIBIL Accounts & Rs 100/Day Penalty */}
            <section id="cibil-duplicate-entries" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                <span>Credit Bureau Protection &amp; Daily Compensation</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. Fixing Duplicate CIBIL Accounts &amp; Rs 100/Day Penalty
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The biggest shock after a card transfer shows up on your credit report. Many users see two active entries for one card: one from the old bank and one from the new bank.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This error makes it look like you owe double the money and hurts your credit score. Sometimes, old closed cards also wake up as ghost accounts with small fake dues and 30 or 60 Days Past Due (DPD) marks.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under Section 21(3) of the Credit Information Companies (Regulation) Act, 2005 (CICRA) and RBI Circular RBI/2023-24/72, banks and bureaus must fix errors in 30 days. The bank gets 21 days to check files, and CIBIL gets 9 days to update your report.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If the duplicate card or wrong late mark stays past 30 days, you can claim{' '}
                <Link href="/rbi-100-per-day-compensation-for-delayed-cibil-report-update" className="text-[#1886ff] hover:underline font-semibold">
                  Rs 100 per day CIBIL delay compensation
                </Link>{' '}
                paid in 5 working days. Also, under RBI Circular RBI/2024-25/60, banks must now update credit bureaus every 15 days.
              </p>
            </section>

            {/* SECTION 5: Visual Blueprint Infographic */}
            <section id="visual-blueprint" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Sparkles className="w-4 h-4 text-[#1886ff]" />
                <span>Visual Blueprint</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. Visual Blueprint: Card Migration Dispute &amp; CIBIL Fix
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This visual overview highlights your statutory 30-day MITC notice shield and your credit bureau protections when a credit card portfolio moves from one bank to another.
              </p>

              <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-slate-100 bg-slate-100">
                  <Image
                    src="/images/infographics/credit-card-bank-merger-portfolio-migration-dispute.jpg"
                    alt="Credit Card Bank Merger Portfolio Migration MITC 30-Day Notice and CIBIL Protection Shield"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 900px"
                    className="object-contain hover:scale-[1.01] transition-transform duration-300"
                    priority
                  />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-500 pt-1 gap-2">
                  <span>Official CredSettle Card Migration Consumer Shield • RBI Master Direction Compliant</span>
                  <a
                    href="/images/infographics/credit-card-bank-merger-portfolio-migration-dispute.jpg"
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

            {/* SECTION 6: Post-Merger Credit Card Issues & Legal Remedies Table */}
            <section id="dispute-comparison-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <DollarSign className="w-4 h-4 text-[#1886ff]" />
                <span>Dispute &amp; Remedy Matrix</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. Post-Merger Credit Card Issues &amp; Legal Remedies Table
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Check your specific post-merger problem in the table below to identify the exact RBI rule and financial remedy that protects you.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white shadow-xs">
                <div className="bg-slate-900 text-white p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-[#1886ff]" />
                    <span className="font-bold text-sm">Migration Dispute Scenarios &amp; Statutory Remedies</span>
                  </div>
                  <span className="text-xs text-blue-300 font-mono">RBI &amp; CICRA Rules</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[600px]">
                    <thead>
                      <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-semibold">
                        <th className="p-3">Post-Merger Issue</th>
                        <th className="p-3">Applicable Legal Rule</th>
                        <th className="p-3">Mandatory Bank Action</th>
                        <th className="p-3 text-right">Statutory Penalty / Relief</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200/80 text-slate-600">
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Duplicate Active Card on CIBIL</td>
                        <td className="p-3 font-mono text-xs">CICRA Sec 21(3) &amp; RBI/2023-24/72</td>
                        <td className="p-3">Close old tradeline and sync single balance in 30 days</td>
                        <td className="p-3 text-right font-bold text-emerald-700 font-mono">Rs 100/day after Day 30</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Fee or APR Hike Without Notice</td>
                        <td className="p-3 font-mono text-xs">RBI Card Master Direction 2022</td>
                        <td className="p-3">Give 30-day MITC notice and free surrender option</td>
                        <td className="p-3 text-right font-bold text-emerald-700">100% reversal of new fee</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Opt-Out Card Not Closed in 7 Days</td>
                        <td className="p-3 font-mono text-xs">RBI Card Closure Mandate</td>
                        <td className="p-3">Close zero-due card within 7 working days</td>
                        <td className="p-3 text-right font-bold text-amber-700 font-mono">Rs 500/day delay penalty</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Cutover Auto-Debit Failure</td>
                        <td className="p-3 font-mono text-xs">RBI 3-Day Grace &amp; Fair Practice</td>
                        <td className="p-3">Waive system-caused late fee, interest, and GST</td>
                        <td className="p-3 text-right font-bold text-rose-700">Full refund + DPD deletion</td>
                      </tr>
                      <tr className="bg-blue-50/70 font-bold text-slate-900">
                        <td className="p-3">Prior OTS Denied by New Bank</td>
                        <td className="p-3 font-mono text-xs text-[#1886ff]">Sec 130 Transfer of Property Act</td>
                        <td className="p-3 text-[#1886ff]">Honor legacy OTS letter and issue fresh NOC</td>
                        <td className="p-3 text-right text-[#1886ff]">Zero extra debt liability</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* SECTION 7: Step-by-Step SOP to Resolve Migration Billing & CIBIL */}
            <section id="step-by-step-sop" className="scroll-target space-y-6">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Standard Operating Procedure</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. Step-by-Step SOP to Resolve Migration Billing &amp; CIBIL
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Do not rely on phone helplines alone. Call center staff rarely see your old bank files. Follow these six simple steps in writing to fix your account fast.
              </p>

              <div className="space-y-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">1</span>
                    Step 1: Save Your Last 3 Old Bank Statements
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Download your final three bills from the old bank right away. Also save reward point screenshots and any closure or OTS letters before old apps shut down.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">2</span>
                    Step 2: Pay Real Spends Inside the 3-Day Window
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If auto-pay failed during the move, pay your real spend via UPI or NEFT within the RBI 3-day grace window. Set up a fresh auto-pay with the new bank IFSC code.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">3</span>
                    Step 3: Check All 4 Credit Bureaus After 30 Days
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Pull your report on CIBIL, Experian, Equifax, and CRIF High Mark. Make sure the old bank card shows zero balance or closed status.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">4</span>
                    Step 4: File Both Nodal &amp; Bureau Disputes
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Raise an online ticket on the bureau site and email the new bank Grievance Officer. Share your bank account details to start the 30-day Rs 100/day penalty clock.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">5</span>
                    Step 5: Use Your 30-Day MITC Opt-Out If Needed
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If the new card has higher fees or lower perks, email an opt-out closure request within 30 days of the notice. Track the 7-day closure deadline closely.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">6</span>
                    Step 6: File an RBI Ombudsman Complaint on Day 31
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If the new bank does not refund wrong fees or clean your CIBIL in 30 days, file a free case on cms.rbi.org.in to get a binding order and penalty payout.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 8: Court Rulings & Consumer Rights Against Wrongful CIBIL */}
            <section id="court-precedents" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>Judicial Precedents &amp; Consumer Remedies</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. Court Rulings &amp; Consumer Rights Against Wrongful CIBIL
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Indian courts and consumer commissions strictly hold banks accountable when technical negligence or post-merger data errors harm a cardholder.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Alongside RBI daily penalties, you can claim compensation for deficiency in service under Section 2(11) of the Consumer Protection Act, 2019.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                    <Gavel className="w-4 h-4" />
                    <span>Supreme Court: HSBC v. Awaz &amp; Ors. (2024)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The Supreme Court affirmed that the RBI holds exclusive statutory power over credit card conduct and APR disclosure. Banks must strictly obey RBI Master Directions and MITC notice mandates.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                    <Scale className="w-4 h-4" />
                    <span>Delhi HC: Sarwar Raza v. RBI &amp; Anr.</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The Delhi High Court ordered restoration of a borrower CIBIL score hurt by disputed entries and imposed costs on the lender for failing to maintain accurate credit records.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-purple-700 font-bold text-sm">
                    <Building2 className="w-4 h-4" />
                    <span>Shyam Garg v. ING Vysya Bank (SCDRC Delhi)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    In a case involving a merged private bank, the State Commission held that reporting a zero-due account as Written Off is a serious deficiency in service warranting damages.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Madras HC: Common-Law Damages for CIBIL Errors</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    In M/s. Frontline Corporation Ltd., the Madras High Court confirmed that borrowers can sue banks and bureaus for damages when negligent duplicate or false entries block credit access.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 9: Statutory Deadlines & 3-Tier RBI Escalation Matrix */}
            <section id="escalation-timelines" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff]" />
                <span>Timelines &amp; Institutional Redressal</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Statutory Deadlines &amp; 3-Tier RBI Escalation Matrix
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Every migration dispute is governed by strict RBI turnaround times. If the acquiring bank misses these deadlines, escalate step by step through this three-tier matrix.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Escalation Tier</th>
                      <th className="p-3">Designated Authority</th>
                      <th className="p-3">Statutory Timeline</th>
                      <th className="p-3">Relief &amp; Enforcement Scope</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 1: GRO</td>
                      <td className="p-3">Acquiring Bank Grievance Officer</td>
                      <td className="p-3 font-mono">7 to 10 Working Days</td>
                      <td className="p-3">Audits migration ledger, reverses cutover late fees, and maps missing reward points.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 2: PNO &amp; CIC</td>
                      <td className="p-3">Principal Nodal Officer &amp; CIBIL</td>
                      <td className="p-3 font-mono">21 + 9 = 30 Days Max</td>
                      <td className="p-3">Removes duplicate tradelines, honours legacy OTS letters, and approves Rs 100/day claims.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Level 3: RBI Ombudsman</td>
                      <td className="p-3">RBI Integrated Ombudsman (CMS)</td>
                      <td className="p-3 font-mono">Day 31 Onwards</td>
                      <td className="p-3">Orders fee refunds, CIBIL deletion, Rs 500/day closure penalties, and mental agony awards.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: Credit Card OTS Settlement & Mistakes During Mergers */}
            <section id="ots-settlement-mergers" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>Debt Resolution &amp; Practical Precautions</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                10. Credit Card OTS Settlement &amp; Mistakes During Mergers
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If your credit card was already overdue or in NPA before the bank merger, extra care is essential during a portfolio handover. Avoid these costly mistakes when dealing with collection teams from the acquiring bank.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <FileText className="w-4 h-4 text-[#1886ff]" />
                    Never Pay Old Account Numbers Blindly
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Old card numbers and NEFT virtual accounts deactivate soon after cutover. Always{' '}
                    <Link href="/how-to-verify-bank-ots-sanction-letter-avoid-settlement-scams" className="text-[#1886ff] hover:underline font-semibold">
                      verify your OTS sanction letter
                    </Link>{' '}
                    on the acquiring bank letterhead before paying any installment.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Scale className="w-4 h-4 text-emerald-600" />
                    Enforce Pre-Merger OTS Agreements
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Sometimes new recovery agents demand the waived balance of an older settlement. Show your legacy OTS receipt and{' '}
                    <Link href="/get-noc-after-loan-settlement" className="text-[#1886ff] hover:underline font-semibold">
                      No Dues Certificate
                    </Link>{' '}
                    to stop illegal double recovery immediately.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-indigo-600" />
                    Watch UCIC Cross-Bank Set-Off Risks
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If your defaulted card migrates to a bank where you hold a salary or savings account, both accounts merge under one UCIC. Seek legal advice early to protect your liquid funds.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-amber-600" />
                    Negotiate Fresh Post-Merger OTS Waivers
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Acquiring banks actively clean up inherited NPA card books under RBI compromise settlement rules. You can negotiate structured waivers through our{' '}
                    <Link href="/credit-card-settlement-process" className="text-[#1886ff] hover:underline font-semibold">
                      credit card settlement process
                    </Link>
                    .
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
                Frequently Asked Questions: Bank Card Migration Disputes
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Clear, verified answers to common cardholder questions on bank mergers, duplicate CIBIL entries, cutover billing errors, MITC opt-out rights, and OTS validity.
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
                Official Regulatory Citations &amp; Statutory References
              </h2>
              <ul className="space-y-2 text-xs text-slate-600 leading-relaxed list-disc pl-5">
                <li>
                  <strong>RBI Master Direction:</strong> Reserve Bank of India (Credit Card and Debit Card - Issuance and Conduct) Directions, 2022 (RBI/2022-23/92, updated March 7, 2024 via DoR.AUT.REC.80/24.01.041/2023-24).
                </li>
                <li>
                  <strong>RBI CIBIL Compensation Circular:</strong> RBI/2023-24/72 (DoR.FIN.REC.48 &amp; 49/20.16.003/2023-24), Framework for Compensation to Customers for Delayed Updation/Rectification of Credit Information.
                </li>
                <li>
                  <strong>RBI Fortnightly Reporting Mandate:</strong> RBI/2024-25/60 (DoR.FIN.REC.No.32/20.16.056/2024-25), Fortnightly Reporting of Credit Information by Credit Institutions to CICs.
                </li>
                <li>
                  <strong>Statutory Merger &amp; Transfer Laws:</strong> Section 44A of the Banking Regulation Act, 1949; RBI (Transfer of Loan Exposures) Directions, 2021 (RBI/DOR/2021-22/86); and Section 130 of the Transfer of Property Act, 1882.
                </li>
                <li>
                  <strong>Credit Bureau &amp; Consumer Statutes:</strong> Credit Information Companies (Regulation) Act, 2005 (Section 21); Consumer Protection Act, 2019 (Section 2(11)); and Reserve Bank - Integrated Ombudsman Scheme, 2021.
                </li>
                <li>
                  <strong>Judicial Precedents:</strong> Hongkong and Shanghai Banking Corp. Ltd. v. Awaz &amp; Ors. (Supreme Court, 2024); Sarwar Raza v. RBI &amp; Anr. (Delhi High Court, W.P.(C) 16659/2022); and Shyam Garg v. ING Vysya Bank (SCDRC Delhi).
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
                  <a href="https://www.cibil.com" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>TransUnion CIBIL Dispute Portal</span>
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
                </div>
              </div>

              {/* 10 Internal Topic Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Explore Related CredSettle Guides:</span>
                <div className="flex flex-wrap gap-2">
                  <Link href="/services/credit-card-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Credit Card Settlement Services
                  </Link>
                  <Link href="/rbi-100-per-day-compensation-for-delayed-cibil-report-update" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    RBI Rs 100/Day CIBIL Penalty
                  </Link>
                  <Link href="/credit-card-auto-debit-failed-sufficient-balance-cibil" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Auto-Debit Failed CIBIL Fix
                  </Link>
                  <Link href="/bank-increased-credit-card-apr-interest-rbi-opt-out" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Credit Card APR Hike Opt-Out
                  </Link>
                  <Link href="/change-credit-card-billing-cycle-date-rbi-salary-rule" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Change Card Billing Cycle Date
                  </Link>
                  <Link href="/credit-card-reward-points-forfeiture-overdue-rules" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Reward Points Forfeiture Rules
                  </Link>
                  <Link href="/unsolicited-credit-card-upgrade-limit-increase-rbi-rule" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Unsolicited Card Upgrade Penalty
                  </Link>
                  <Link href="/dispute-wrong-settled-status-cibil" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Dispute Wrong CIBIL Status
                  </Link>
                  <Link href="/how-to-verify-bank-ots-sanction-letter-avoid-settlement-scams" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Verify Bank OTS Sanction Letter
                  </Link>
                  <Link href="/stop-credit-card-recovery-calls" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Stop Credit Card Recovery Calls
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
                Specialist in RBI credit card compliance, CICRA credit bureau rectifications, portfolio migration disputes, and structured One-Time Settlement negotiations across major Indian banks.
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
                  MIGRATION DISPUTE DESK
                </span>
                <p className="text-lg md:text-xl font-bold text-white leading-snug">
                  Unfair Bills or Duplicate CIBIL After Merger?
                </p>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our banking legal team audits migrated credit card statements, deletes duplicate CIBIL tradelines, reverses cutover late fees, and negotiates 50% to 70% OTS debt relief.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Get Free Legal Audit Now
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
                  <span><strong>Duplicate CIBIL Deletion:</strong> Fast CICRA Section 21 dispute filing.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Cutover Fee Reversal:</strong> Full waiver of system-caused penalties.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Legacy OTS Protection:</strong> Enforce old settlements against new banks.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>RBI Ombudsman Escalation:</strong> End-to-end CMS representation.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">Related Legal Guides</p>
              <div className="space-y-2.5">
                <Link
                  href="/rbi-100-per-day-compensation-for-delayed-cibil-report-update"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    RBI Rs 100/Day CIBIL Delay Rule
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Claim 30-day bureau penalty &rarr;</span>
                </Link>

                <Link
                  href="/credit-card-auto-debit-failed-sufficient-balance-cibil"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Credit Card Auto-Debit Failed Fix
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Reverse unfair late fees &rarr;</span>
                </Link>

                <Link
                  href="/credit-card-settlement-process"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Credit Card Settlement Process
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Step-by-step OTS waiver guide &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
