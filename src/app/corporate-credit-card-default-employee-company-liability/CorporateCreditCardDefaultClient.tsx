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

export default function CorporateCreditCardDefaultClient() {
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
    { id: 'statutory-framework', label: '1. RBI Law on Corporate Cards' },
    { id: 'liability-models', label: '2. Three Card Liability Models' },
    { id: 'cibil-reporting', label: '3. Personal vs Commercial CIBIL' },
    { id: 'court-precedents', label: '4. Contract Law & Court Rulings' },
    { id: 'visual-blueprint', label: '5. Visual Liability Blueprint' },
    { id: 'post-resignation', label: '6. Unpaid Claims & Job Exit' },
    { id: 'company-insolvency', label: '7. Employer Shutdown & Form D' },
    { id: 'step-by-step-sop', label: '8. Step-by-Step Defense SOP' },
    { id: 'escalation-matrix', label: '9. 3-Tier RBI Escalation Matrix' },
    { id: 'procedural-timeline', label: '10. Default to Closure Timeline' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
    {
      q: 'Who must pay when a corporate credit card goes into default in India?',
      a: 'Who pays depends on the form signed when the card was issued. On a Sole Corporate card, only the firm owes the bank. On an Individual or Joint card, the bank can force the employee to pay the full bill.'
    },
    {
      q: 'Does a corporate credit card default hurt my personal CIBIL score?',
      a: 'No, if you hold a Sole Corporate card. Missed bills on that card hurt only the firm CIBIL Rank. However, if your card has Individual or Joint terms tied to your PAN, missed bills will drop your own CIBIL score.'
    },
    {
      q: 'What if I left my job and my old firm did not pay my card bills?',
      a: 'First check your card terms. On an Individual or Joint card, you must pay or settle with the bank to save your CIBIL score. You can then claim that full sum back from your old firm under Section 222 of the Indian Contract Act.'
    },
    {
      q: 'Can a bank freeze my savings account for a company card default?',
      a: 'Under Section 171 of the Indian Contract Act, a bank cannot freeze your own savings account for a Sole Corporate card debt. A bank lien applies only if you signed an Individual card form, Joint clause, or personal guarantee.'
    },
    {
      q: 'How do I claim card dues if my startup shuts down or goes to NCLT?',
      a: 'Under Section 5(21) of the Insolvency and Bankruptcy Code (IBC), unpaid work expense claims count as operational debt. You must file Form D with bills and card statements before the Resolution Professional.'
    },
    {
      q: 'Can HR hold my relieving letter or F&F over a corporate card bill?',
      a: 'An employer can deduct proven personal swipes from your Full and Final (F&F) pay if your job contract allows it. Still, Indian courts treat relieving letters as work records that HR should not hold back over money disputes.'
    },
    {
      q: 'What is the RBI rule on wrong CIBIL tags for corporate card users?',
      a: 'Under RBI Circular RBI/2023-24/72, banks and credit bureaus must fix wrong CIBIL entries within 30 days of your complaint. If they fail to clear a wrong card default tag in 30 days, they owe you ₹100 per extra day.'
    },
    {
      q: 'Are directors liable if a company defaults on business credit cards?',
      a: 'Not by default. High Court rulings like Mukesh Hans v. Uma Bhasin state that a company is a separate legal body. Directors face personal claims only if they signed a personal guarantee or committed fraud.'
    },
    {
      q: 'Can an employee go to jail for a corporate credit card default?',
      a: 'No. Missing a card bill due to job loss or late office payout is a civil matter, not a crime. Police cases under BNS 2023 apply only if someone fakes bills, steals funds, or bounces a cheque.'
    },
    {
      q: 'Can I settle an Individual corporate credit card through bank OTS?',
      a: 'Yes. If your ex-firm fails to pay and you face severe hardship on an Individual or Joint card, you can seek a One-Time Settlement (OTS). Banks often waive heavy interest and close the card with a No Dues Certificate.'
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
            <span>RBI Credit Card Master Direction 2022 &amp; Corporate Debt Law</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Corporate Credit Card Default After Leaving Your Job
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            Who pays an overdue office credit card bill depends on the contract clause you signed. Learn RBI business card rules, guard your CIBIL score, and settle unpaid work card dues the legal way.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Check Your Card Liability</span>
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
                  Protected under RBI Credit Card Directions 2022, Contract Act 1872, and CICRA 2005.
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
                <span>EXECUTIVE BRIEF: CORPORATE CREDIT CARD RULES</span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Contract Rules the Debt:</strong> Having your firm name embossed on the card does not prove who owes the bill. Your signed form sets Sole Corporate, Individual, or Joint Liability.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Sole Corporate Shield:</strong> On a true Company Liability card, only the firm owes the bank. Defaults hit the firm CIBIL Rank and never touch your own CIBIL score.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Employee Card Trap:</strong> On Individual or Joint cards (used by HDFC, ICICI, Axis, and Amex travel plans), the bank can ask you to pay even when HR delays your payout.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Right to Expense Payout:</strong> Under Section 222 of the Indian Contract Act, your employer must pay you back for every lawful work expense made on duty.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Wrong CIBIL Penalty:</strong> If a bank marks a Sole Corporate card default on your PAN, RBI rules force removal in 30 days or award ₹100 per day.
                  </span>
                </li>
              </ul>
            </div>

            {/* SECTION 1: RBI Legal Framework for Corporate Credit Cards */}
            <section id="statutory-framework" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Central Bank Rules &amp; Business Cards</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. RBI Legal Framework for Corporate Credit Cards
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Many staff members in India get an office credit card when they join a firm. They swipe it for flights, hotels, client meals, and software tools. Trouble starts when a worker quits, gets laid off, or works for a firm that stops paying bills.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The Reserve Bank of India regulates these cards under the Credit Card and Debit Card - Issuance and Conduct Directions, 2022, updated in March 2024. Paragraph 7 of this RBI rulebook governs business and corporate cards across India.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under Paragraph 7, banks can issue business cards as charge cards, corporate cards, or cards linked to cash credit lines. Banks can also give add-on cards to staff members whenever the firm asks for them.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When full debt duty rests with the firm, bill due dates and refunds follow the contract between the bank and the firm. Under the 2024 RBI update, banks must also track end-use of funds so business credit is used only for work spends.
              </p>
            </section>

            {/* SECTION 2: Three Corporate Card Liability Models in India */}
            <section id="liability-models" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                <span>Who Owes the Bank</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. Three Corporate Card Liability Models in India
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Most workers think a card with a company logo is 100% the firm&apos;s problem. That myth causes huge credit score losses. Top banks like American Express, HDFC Bank, ICICI Bank, SBI Card, and Axis Bank issue office cards under three models.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Before you reply to a bank agent, read your Most Important Terms and Conditions (MITC) or Key Facts Statement (KFS). Check which of the three structures below matches your signed form.
              </p>

              {/* Liability Comparison Matrix Card */}
              <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white shadow-xs">
                <div className="bg-slate-900 text-white p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-[#1886ff]" />
                    <span className="font-bold text-sm">Corporate Card Debt Matrix</span>
                  </div>
                  <span className="text-xs text-blue-300 font-mono">RBI &amp; Bank Terms</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80">
                    <thead>
                      <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-semibold">
                        <th className="p-3">Card Type</th>
                        <th className="p-3">Main Legal Debtor</th>
                        <th className="p-3">KYC Used at Issue</th>
                        <th className="p-3 text-right">Can Bank Sue Staff?</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200/80 text-slate-600">
                      <tr>
                        <td className="p-3 font-bold text-slate-900">1. Sole Corporate</td>
                        <td className="p-3 font-semibold text-emerald-700">100% Employer Firm</td>
                        <td className="p-3">Firm GST, CIN, &amp; balance sheet</td>
                        <td className="p-3 text-right font-bold text-emerald-600">No (Unless Fraud)</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-bold text-slate-900">2. Individual Card</td>
                        <td className="p-3 font-semibold text-rose-700">100% Employee User</td>
                        <td className="p-3">Staff PAN, Aadhaar, &amp; pay slips</td>
                        <td className="p-3 text-right font-bold text-rose-600">Yes (Full Bill + Fees)</td>
                      </tr>
                      <tr className="bg-blue-50/70 font-bold text-slate-900">
                        <td className="p-3">3. Joint &amp; Several</td>
                        <td className="p-3 text-amber-700">Both Firm &amp; Staff</td>
                        <td className="p-3 font-normal text-slate-700">Firm Master + Staff PAN</td>
                        <td className="p-3 text-right text-[#1886ff]">Yes (Either or Both)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                On a <strong>Sole Corporate</strong> card, the bank approves credit based on the firm&apos;s money. You only hold the plastic card for work use. If the firm misses due dates, the bank can claim money only from the firm.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                On an <strong>Individual</strong> or <strong>Joint and Several</strong> card, your own PAN sits on the loan file. Under Section 43 of the Indian Contract Act, a joint promise lets the bank demand 100% of the unpaid bill from you alone if your firm defaults.
              </p>
            </section>

            {/* SECTION 3: Personal CIBIL vs Commercial Credit Rank Impact */}
            <section id="cibil-reporting" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Clock className="w-4 h-4 text-[#1886ff]" />
                <span>Credit Reports &amp; CICRA 2005</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Personal CIBIL vs Commercial Credit Rank Impact
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                In India, CIBIL, Experian, Equifax, and CRIF keep two separate credit files. Personal files track people by personal PAN. Business files track firms by Company PAN and give a CIBIL Rank from 1 to 10.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When a <strong>Sole Corporate</strong> card goes unpaid, the bad mark hits only the firm&apos;s business report. Even in joint corporate plans where RBI asset rules map debt solely to the company, your own CIBIL score stays safe.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                By contrast, an <strong>Individual</strong> office card shows up right on your personal CIBIL file. Even a 30-day payout delay by your finance team can cut your score by 80 points. That drop can block your next home or car loan.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Sometimes banks make system errors and post a Sole Corporate card default on a worker&apos;s PAN. Under RBI Circular RBI/2023-24/72, raise a written dispute at once. If the bank and bureau do not fix your CIBIL in 30 days, they owe you ₹100 per day.
              </p>
            </section>

            {/* SECTION 4: Indian Contract Act & High Court Precedents */}
            <section id="court-precedents" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>Legal Shield &amp; Court Rulings</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. Indian Contract Act &amp; High Court Precedents
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Indian courts follow two strict rules in work debt cases: <strong>separate corporate identity</strong> and <strong>privity of contract</strong>. Privity of contract means a bank cannot force you to pay a loan if you never signed a personal promise to pay.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                At the same time, agency law backs honest workers who spend money on office trips. Below are the four legal pillars that protect staff and directors in India.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                    <Gavel className="w-4 h-4" />
                    <span>Mukesh Hans v. Uma Bhasin (Delhi HC)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Citing Tristar Consultants, the Delhi High Court held that directors and staff owe no personal money for firm debts unless they signed a personal guarantee or committed fraud.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                    <Scale className="w-4 h-4" />
                    <span>Section 222 Contract Act: Indemnity</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    An employer must pay back an agent or worker for all lawful work costs incurred on duty. This includes bank late fees caused when the firm delays your expense payout.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-purple-700 font-bold text-sm">
                    <Building2 className="w-4 h-4" />
                    <span>Section 171 Contract Act: Bank Lien</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    A bank lien works only against accounts owned by the same debtor. A bank cannot pull money from your personal salary account to clear a Sole Corporate card bill.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <ShieldCheck className="w-4 h-4" />
                    <span>BNS 2023: Civil Debt vs Fraud</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Unpaid office travel bills are civil money claims, not crimes. Police action under Section 316 or 318 of BNS 2023 applies only to fake bills or theft of funds.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 5: Visual Blueprint Infographic */}
            <section id="visual-blueprint" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Sparkles className="w-4 h-4 text-[#1886ff]" />
                <span>Visual Blueprint</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. Visual Blueprint: Employee vs Company Liability
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This visual chart shows the clear legal wall between company-paid business cards and staff-liable cards under RBI rules and CIBIL norms.
              </p>

              <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-slate-100 bg-slate-100">
                  <Image
                    src="/images/infographics/corporate-credit-card-default-employee-company-liability.jpg"
                    alt="Corporate Credit Card Default Employee vs Company Liability Under RBI Rules"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 900px"
                    className="object-contain hover:scale-[1.01] transition-transform duration-300"
                    priority
                  />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-500 pt-1 gap-2">
                  <span>Official CredSettle Corporate Card Protection Framework • RBI Master Direction Compliant</span>
                  <a
                    href="/images/infographics/corporate-credit-card-default-employee-company-liability.jpg"
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

            {/* SECTION 6: Unpaid Expense Claims, Job Exit & F&F Rules */}
            <section id="post-resignation" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>Job Exit &amp; HR Disputes</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. Unpaid Expense Claims, Job Exit &amp; F&amp;F Rules
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Most office card defaults happen right after a worker resigns. You submit travel bills before your last day, but HR holds your Full and Final (F&amp;F) pay for 60 days. In that gap, the card bill misses its due date and adds 42% yearly interest plus 18% GST.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If you hold an <strong>Individual</strong> or <strong>Joint</strong> card, the bank will not wait for HR. Telling the bank that your ex-firm owes you money does not stop late fees or CIBIL drops. Pay or settle the bank bill to save your score, then send a legal notice to your old firm.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                What if a worker swipes a Sole Corporate card for personal items by mistake? The firm can deduct proven personal swipes from F&amp;F dues under job rules. Still, courts hold that HR should not hold back your relieving letter to force disputed money claims.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                On your last day at work, hand back the card to HR and get a signed no-dues slip. Under Paragraph 8 of the RBI Credit Card Rules, once dues are zero, the bank must close a card in 7 working days or pay ₹500 per day.
              </p>
            </section>

            {/* SECTION 7: Startup Shutdowns & IBC Form D Employee Claims */}
            <section id="company-insolvency" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <AlertTriangle className="w-4 h-4 text-[#1886ff]" />
                <span>Firm Shutdown &amp; NCLT Claims</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. Startup Shutdowns &amp; IBC Form D Employee Claims
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                A tough trap hits when a startup stops paychecks, shuts down, or enters bankruptcy at the National Company Law Tribunal (NCLT). Sales staff often get stuck with ₹2 Lakhs to ₹10 Lakhs in unpaid travel bills on employee-linked cards.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <FileText className="w-4 h-4 text-[#1886ff]" />
                    Work Dues Under Section 5(21) IBC
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under the Insolvency and Bankruptcy Code, 2016, unpaid pay and approved work expense claims count as operational debt owed to staff.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Scale className="w-4 h-4 text-emerald-600" />
                    Submit Proof of Claim in Form D
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under Regulation 9 of the IBBI Rules, staff must file Form D with the Resolution Professional along with bills, emails, and card statements.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-indigo-600" />
                    Section 14 Stay Covers Only the Firm
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    An NCLT stay blocks suits against the bankrupt firm, not against personal cardholders. On Individual or Joint cards, banks can still ask you to pay.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-amber-600" />
                    Hardship One-Time Settlement (OTS)
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Showing NCLT orders and unpaid salary proof helps you settle an Individual office card at a 40% to 65% waiver under a bank OTS plan.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 8: Step-by-Step SOP: Resolving Corporate Card Dues */}
            <section id="step-by-step-sop" className="scroll-target space-y-6">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Action Plan</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. Step-by-Step SOP: Resolving Corporate Card Dues
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Follow these six clear steps as soon as you spot an unpaid work card bill or get a recovery call after leaving a job.
              </p>

              <div className="space-y-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">1</span>
                    Stage 1: Ask the Bank for Your Signed Card Form
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Email bank support and ask for your signed card form and MITC. Check in writing if the card is Sole Corporate, Individual, or Joint.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">2</span>
                    Stage 2: Block the Card &amp; Stop Auto-Debits
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Block the card at once so team members or cloud tools cannot add new charges. Cancel all standing mandates on SI-Hub.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">3</span>
                    Stage 3: Save All Expense Proofs Before Exit
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Download approved Zoho, SAP, or Concur sheets, flight tickets, GST bills, and manager emails before HR locks your work email.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">4</span>
                    Stage 4: Send Non-Liability Reply on Sole Cards
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If your contract shows Sole Corporate Liability, send a legal reply directing the bank to the firm&apos;s Finance Head and warning against PAN reporting.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">5</span>
                    Stage 5: Serve Section 222 Notice on Old Firm
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    On Individual or Joint cards, send a legal notice under Section 222 of the Contract Act demanding fast payout of bills plus bank late fees.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">6</span>
                    Stage 6: Settle via Bank OTS &amp; Collect NOC
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    When an ex-employer shuts down and bills grow too big to pay, sign a verified One-Time Settlement (OTS) with the bank and take a No Dues letter.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 9: 3-Tier Escalation: Bank PNO to RBI Ombudsman */}
            <section id="escalation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff]" />
                <span>Complaint Ladder</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. 3-Tier Escalation: Bank PNO to RBI Ombudsman
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If bank agents chase you for a Sole Corporate debt, call your new office, or mark your personal CIBIL by mistake, use this three-step RBI ladder.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Tier Level</th>
                      <th className="p-3">Bank or RBI Office</th>
                      <th className="p-3">Wait Window</th>
                      <th className="p-3">Action &amp; Relief Granted</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 1: GRO</td>
                      <td className="p-3">Grievance Redressal Officer</td>
                      <td className="p-3 font-mono">7 to 10 Days</td>
                      <td className="p-3">Shares signed card contract, stops agent calls, and logs CIBIL fix request.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 2: PNO</td>
                      <td className="p-3">Principal Nodal Officer</td>
                      <td className="p-3 font-mono">14 to 21 Days</td>
                      <td className="p-3">Deletes wrong personal PAN mark, drops unfair fees, or clears OTS terms.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Level 3: RBI CMS</td>
                      <td className="p-3">RBI Integrated Ombudsman</td>
                      <td className="p-3 font-mono">After 30 Days</td>
                      <td className="p-3">Orders CIBIL cleanup via cms.rbi.org.in and grants ₹100/day or ₹500/day fines.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: Procedural Timeline: Default to Legal Closure */}
            <section id="procedural-timeline" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Calendar className="w-4 h-4 text-[#1886ff]" />
                <span>Overdue Stages</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                10. Procedural Timeline: Default to Legal Closure
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Knowing how an unpaid office card moves from day one past due to Non-Performing Asset (NPA) helps you act before fees double the debt.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Days Past Due</th>
                      <th className="p-3">Bank Tag</th>
                      <th className="p-3">What the Bank Does</th>
                      <th className="p-3">Your Best Move</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 1 to 30</td>
                      <td className="p-3 font-mono text-[11px]">SMA-0 Stage</td>
                      <td className="p-3">Adds late fee, 3.5% monthly interest, and sends SMS alerts.</td>
                      <td className="p-3">Check card contract type and push HR to clear pending bills.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 31 to 60</td>
                      <td className="p-3 font-mono text-[11px]">SMA-1 Stage</td>
                      <td className="p-3">Freezes card swipes and reports late payment to credit bureaus.</td>
                      <td className="p-3">Send Section 222 demand to firm or dispute wrong PAN entry.</td>
                    </tr>
                    <tr className="bg-amber-50/50">
                      <td className="p-3 font-bold text-slate-900">Day 61 to 90</td>
                      <td className="p-3 font-mono text-[11px] text-amber-700 font-bold">SMA-2 Stage</td>
                      <td className="p-3">Starts recovery calls and sends legal notice to liable parties.</td>
                      <td className="p-3 font-bold text-amber-800">Reply via lawyer showing Sole Corporate clause or job loss proof.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Day 91+</td>
                      <td className="p-3 font-mono text-[11px] text-[#1886ff] font-bold">NPA &amp; OTS</td>
                      <td className="p-3">Marks card as NPA and opens One-Time Settlement talks.</td>
                      <td className="p-3 font-bold text-slate-900">Close Individual card via verified OTS letter and file Form D.</td>
                    </tr>
                  </tbody>
                </table>
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
                Frequently Asked Questions: Corporate Card Default
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Clear answers on staff versus company debt rules, personal CIBIL safety, unpaid travel claims, startup shutdowns, and card settlements in India.
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
                Official Regulatory Citations &amp; Legal References
              </h2>
              <ul className="space-y-2 text-xs text-slate-600 leading-relaxed list-disc pl-5">
                <li>
                  <strong>RBI Master Direction:</strong> Credit Card and Debit Card - Issuance and Conduct Directions, 2022 (Updated March 7, 2024), Paragraph 7 (Business Cards) and Paragraph 8 (7-Day Closure &amp; ₹500/Day Penalty).
                </li>
                <li>
                  <strong>Indian Contract Act, 1872:</strong> Section 43 (Joint Promise), Section 128 (Surety Debt), Section 171 (Bank General Lien), and Section 222 (Employer Duty to Pay Agent Costs).
                </li>
                <li>
                  <strong>RBI CIBIL Fix Circular:</strong> RBI/2023-24/72, DoR.FIN.REC.49/20.16.003/2023-24, ₹100 per day fine for unresolved CIBIL disputes past 30 days under CICRA, 2005.
                </li>
                <li>
                  <strong>Insolvency and Bankruptcy Code (IBC), 2016:</strong> Section 5(21) (Work Debt) and Regulation 9 of IBBI CIRP Rules, 2016 (Form D Staff Claim).
                </li>
                <li>
                  <strong>Court Precedents:</strong> Mukesh Hans v. Smt. Uma Bhasin (2010, Delhi HC), Tristar Consultants v. Vcustomer Services India (2007, Delhi HC), and ICICI Bank v. Prakash Kaur (2007, SC).
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
                  <a href="https://ibbi.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>Insolvency &amp; Bankruptcy Board (IBBI)</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://nclt.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>National Company Law Tribunal</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.cibil.com" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>TransUnion CIBIL Dispute Portal</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* 10 Internal Topic Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Explore Related CredSettle Guides:</span>
                <div className="flex flex-wrap gap-2">
                  <Link href="/add-on-supplementary-credit-card-default-liability" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Add-On Card Default Law
                  </Link>
                  <Link href="/rupay-credit-card-upi-debt-default-settlement-rules" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    RuPay UPI Card Settlement
                  </Link>
                  <Link href="/company-director-liability-for-business-loan" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Director Business Loan Rules
                  </Link>
                  <Link href="/can-bank-contact-my-employer-for-loan-recovery" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Can Bank Call My Office?
                  </Link>
                  <Link href="/can-recovery-agents-visit-my-office" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Office Visit Agent Rules
                  </Link>
                  <Link href="/rbi-100-per-day-compensation-for-delayed-cibil-report-update" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    RBI ₹100/Day CIBIL Rule
                  </Link>
                  <Link href="/services/credit-card-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Credit Card Settlement
                  </Link>
                  <Link href="/background-verification-for-it-job-loan-default" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    IT Job Check &amp; Loan Default
                  </Link>
                  <Link href="/bankers-right-of-set-off-on-savings-account-section-171-contract-act" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Section 171 Bank Lien Rules
                  </Link>
                  <Link href="/get-noc-after-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Get NOC After Settlement
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
                Expert in RBI credit card rules, corporate debt disputes, personal CIBIL safety, and verified One-Time Settlements for salaried staff and company heads across India.
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
                  CORPORATE CARD DEFENSE
                </span>
                <p className="text-lg md:text-xl font-bold text-white leading-snug">
                  Stuck With Unpaid Work Card Bills?
                </p>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our lawyers check your card form, clear wrong CIBIL tags on Sole Corporate cards, send legal notices to ex-employers, and settle Individual cards with up to 60% waiver.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Resolve Corporate Card Debt
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
                  <span><strong>Card Contract Check:</strong> Clear Sole vs Joint debt audit.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Personal CIBIL Shield:</strong> Fix wrong PAN marks in 30 days.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Stop Office Calls:</strong> Fast legal shield against agents.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Verified Bank OTS:</strong> Steep waivers when firms fail to pay.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">Related Legal Guides</p>
              <div className="space-y-2.5">
                <Link
                  href="/add-on-supplementary-credit-card-default-liability"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Add-On Credit Card Default Law
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Primary vs family rules &rarr;</span>
                </Link>

                <Link
                  href="/company-director-liability-for-business-loan"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Company Director Debt Rules
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Corporate veil &amp; guarantees &rarr;</span>
                </Link>

                <Link
                  href="/can-bank-contact-my-employer-for-loan-recovery"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Can Bank Call My Employer?
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">RBI privacy &amp; HR call rules &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
