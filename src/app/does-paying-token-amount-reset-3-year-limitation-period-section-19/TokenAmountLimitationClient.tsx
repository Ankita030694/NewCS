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

export default function TokenAmountLimitationClient() {
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
    { id: 'statutory-mechanics', label: '1. Section 19 Statutory Debt Rules' },
    { id: 'pre-vs-post-expiry', label: '2. Payment Before vs After 3 Years' },
    { id: 'recovery-agent-traps', label: '3. Recovery Agent Token Money Traps' },
    { id: 'token-amount-math', label: '4. Financial Audit & Ledger Analysis' },
    { id: 'visual-blueprint', label: '5. Visual Blueprint Infographic' },
    { id: 'written-acknowledgment', label: '6. Electronic Records & Proviso Rules' },
    { id: 'judicial-precedents', label: '7. Supreme Court Landmark Precedents' },
    { id: 'step-by-step-sop', label: '8. 6-Stage Limitation Defense Protocol' },
    { id: 'escalation-matrix', label: '9. 3-Tier Grievance & Escalation Matrix' },
    { id: 'procedural-timeline', label: '10. Delinquency to Limitation Timeline' },
    { id: 'specialized-scenarios', label: '11. Specialized Scenarios: Cheques & UPI' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
    {
      q: 'Does paying a small token amount reset the 3-year limitation period in India?',
      a: 'Yes, but only if the payment is made before the original 3-year limitation period expires. Under Section 19 of the Limitation Act, 1963, a part payment made before expiration starts a fresh 3-year clock from the date of payment.'
    },
    {
      q: 'What happens if I pay a token amount after 3 years have already passed?',
      a: 'Paying a token amount after the 3-year period has already expired does not revive the debt under Section 19. The Supreme Court in Sant Lal Mahton ruled that Section 19 applies strictly before expiration. However, signing a fresh written promise to pay can create a new liability under Section 25(3) of the Indian Contract Act.'
    },
    {
      q: 'Why do recovery agents ask borrowers to pay just ₹500 or ₹1,000?',
      a: 'Collection agents use token amounts as a tactical legal trap. If a loan is nearing its 3-year deadline, agents convince borrowers to pay a small sum to hold legal action. That digital transaction gives the bank legal proof to restart the 3-year limitation clock under Section 19.'
    },
    {
      q: 'Does an online UPI or NEFT transfer count as a written acknowledgment under Section 19?',
      a: 'Yes. Indian courts recognize digital payments, bank statements, UPI references, and signed cheques as valid acknowledgment under the Information Technology Act and Section 19 proviso. This satisfies the legal requirement for a written record.'
    },
    {
      q: 'Can a bank file a civil recovery suit for a loan defaulted more than 3 years ago?',
      a: 'No. Under Section 3 of the Limitation Act, 1963, civil courts must dismiss any suit filed after the 3-year limitation period. The bank loses its judicial remedy to recover the money through a civil court decree or summary suit.'
    },
    {
      q: 'Does the 3-year limitation period extinguish the debt or only the legal remedy?',
      a: 'The Limitation Act extinguishes the legal remedy to file a recovery suit in court, but the debt itself still exists. This means the bank cannot obtain a court decree, but it can still report the overdue balance to CIBIL or attempt non-coercive settlement.'
    },
    {
      q: 'What is the difference between Section 18 and Section 19 of the Limitation Act?',
      a: 'Section 18 deals with a written acknowledgment of debt liability without actual payment. Section 19 deals with actual part-payment of principal or interest on account of the debt. Both must occur before the limitation period expires to trigger a fresh clock.'
    },
    {
      q: 'Can recovery agents threaten police arrest for a time-barred loan default?',
      a: 'No. Loan default is strictly a civil dispute. Threatening police arrest, criminal charges, or court warrants for an unsecured personal loan or credit card is illegal under RBI Fair Practices Code and constitutes criminal intimidation under Section 351 of BNS.'
    },
    {
      q: 'What should I do if a recovery agent pressures me to pay a token amount?',
      a: 'Never pay any token amount without an official written One-Time Settlement letter from the bank. Verify the date of your last payment and default. Refuse informal payments and seek professional legal advice to evaluate if the loan is already time-barred.'
    },
    {
      q: 'How does CredSettle help borrowers facing recovery pressure on old debts?',
      a: 'CredSettle audits your loan ledger to establish exact default dates and limitation status. We protect you from illegal agent harassment, challenge time-barred recovery notices, and negotiate formal compromise settlements with waivers up to 75%.'
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
            <Scale className="w-3.5 h-3.5" />
            <span>Limitation Act 1963 &amp; Banking Debt Defense</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Does Paying Token Amount Reset 3-Year Limitation Period?
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            A comprehensive legal guide on Section 19 of the Limitation Act, 1963. Learn how token payments reset the debt recovery clock, avoid collection agency traps, and protect your legal rights.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Check Your Limitation Status</span>
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
                  <span>Statutory Limitation Protection</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Protected under Section 19 Limitation Act 1963 and Section 25(3) Indian Contract Act 1872.
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
                <span>EXECUTIVE BRIEF: SECTION 19 LIMITATION ACT &amp; TOKEN PAYMENTS</span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">The 3-Year Statutory Rule:</strong> Under Indian law, banks have exactly 3 years from default to file a civil recovery suit for an unsecured loan.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Token Amount Resets Clock Before Expiry:</strong> If you pay even ₹500 before the 3 years end, Section 19 resets the clock for another full 3 years.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">No Reset After 3 Years Pass:</strong> If the 3-year deadline has already passed, paying a token sum cannot revive the debt under Section 19.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Beware Section 25(3) Contract Act:</strong> Never sign fresh letters for old debt. A written promise creates a brand new contract under the law.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Stop Recovery Agent Traps:</strong> Collection agents ask for small token sums solely to restart the limitation clock for their bank.
                  </span>
                </li>
              </ul>
            </div>

            {/* SECTION 1: Section 19 Limitation Act: Statutory Debt Rules */}
            <section id="statutory-mechanics" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Enactment &amp; Limitation Rules</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. Section 19 Limitation Act: Statutory Debt Rules
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When you take a personal loan or use a credit card in India, you sign a loan contract. If money problems make you miss your EMIs, the bank cannot wait forever to take legal action. The Indian Parliament set strict legal deadlines in the Limitation Act, 1963.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under Articles 19, 21, and 55 of the Act, a lender has 3 years to file a recovery case in court. This 3-year clock starts on the date of your first unpaid EMI. Once this deadline passes, Section 3 orders the court to dismiss any lawsuit filed by the bank.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                However, banks use Section 19 of the Limitation Act to restart this legal timer. Section 19 states that if a borrower pays money toward a debt before the limitation period expires, a fresh 3-year clock starts from that payment date.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This rule means that even a tiny payment of ₹500 or ₹1,000 completely resets the clock. The bank gains another full 3 years to drag you into court.
              </p>
            </section>

            {/* SECTION 2: Critical Difference: Payment Before vs After 3 Years */}
            <section id="pre-vs-post-expiry" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Landmark className="w-4 h-4 text-[#1886ff]" />
                <span>Timing Analysis &amp; Legal Consequences</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. Critical Difference: Payment Before vs After 3 Years
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Borrowers must understand the big difference between paying before the 3-year mark and paying after the 3-year mark. The timing of your payment changes your rights.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If you pay a token amount before the 3 years expire, Section 19 applies directly. For instance, suppose you missed an EMI in January 2023. The 3-year period would normally end in January 2026. If you pay ₹1,000 in December 2025, that single payment resets the 3-year clock. The bank now has until December 2028 to take you to court.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                In contrast, if 3 full years have passed without any payment or written note, the debt is legally time-barred. Section 19 clearly applies only to payments made before the period expires. Making a payment after the 3-year period cannot restart the limitation clock under Section 19.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                However, watch out for Section 25(3) of the Indian Contract Act, 1872. While paying cash cannot revive an expired debt, signing a fresh written promise to pay an old debt creates a brand new contract. Recovery agents often ask for a small payment along with a signed settlement letter to exploit this rule.
              </p>
            </section>

            {/* SECTION 3: Recovery Agent Traps: Token Money & Hold Tactics */}
            <section id="recovery-agent-traps" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <AlertTriangle className="w-4 h-4 text-[#1886ff]" />
                <span>Tactical Deception &amp; Collection Strategies</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Recovery Agent Traps: Token Money &amp; Hold Tactics
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Collection agencies know limitation rules well. When a loan nears the 3-year mark, agents face heavy pressure to collect. If the time runs out, the bank loses its right to sue.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                To stop loans from expiring, agents use clever tricks. An agent may call and say your file is going to court. Then they offer a quick fix: pay just ₹500 or ₹1,000 today, and they will hold your file.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Borrowers think this small sum buys them time. In truth, it is a trap. Once your payment clears, the bank gets a digital receipt. They use this slip under Section 19 to restart the 3-year clock.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Never pay token money based on phone calls. Only pay after you get an official written settlement letter signed by the bank.
              </p>
            </section>

            {/* SECTION 4: Financial Audit: Token Amount vs Full Ledger Claim */}
            <section id="token-amount-math" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <DollarSign className="w-4 h-4 text-[#1886ff]" />
                <span>Ledger Forensics &amp; Financial Math</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. Financial Audit: Token Amount vs Full Ledger Claim
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                An old loan ledger shows why banks want token money. Over 3 years, banks add heavy penal interest and fees to your balance.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The table below compares paying a token sum against defending your rights and securing a settlement.
              </p>

              {/* Representative Calculation Card */}
              <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white shadow-xs">
                <div className="bg-slate-900 text-white p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                    <span className="font-bold text-sm">Representative Ledger Audit: Token Trap vs Legal Defense</span>
                  </div>
                  <span className="text-xs text-blue-300 font-mono">₹14 Lakh Ledger Audit</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80">
                    <thead>
                      <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-semibold">
                        <th className="p-3">Audit Metric</th>
                        <th className="p-3">Scenario A: Token Trap Paid</th>
                        <th className="p-3">Scenario B: Time-Barred Defense</th>
                        <th className="p-3 text-right">Scenario C: CredSettle OTS</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200/80 text-slate-600">
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Original Principal Default</td>
                        <td className="p-3">₹8,00,000</td>
                        <td className="p-3">₹8,00,000</td>
                        <td className="p-3 text-right font-bold text-slate-900">₹8,00,000</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Inflated Penal Ledger Claim</td>
                        <td className="p-3 text-rose-600 font-semibold">₹14,50,000</td>
                        <td className="p-3 text-rose-600 font-semibold">₹14,50,000</td>
                        <td className="p-3 text-right text-slate-700">Penal Fees Waived</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Token Payment Made</td>
                        <td className="p-3 text-rose-600 font-bold">₹1,500 (At Month 34)</td>
                        <td className="p-3 text-emerald-600 font-bold">₹0 (Refused Trap)</td>
                        <td className="p-3 text-right text-emerald-600 font-bold">₹0 Unofficial Paid</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">3-Year Limitation Status</td>
                        <td className="p-3 text-rose-700 font-bold">Clock Reset (3 Extra Years)</td>
                        <td className="p-3 text-emerald-700 font-bold">Time-Barred (Sec 3 Bar)</td>
                        <td className="p-3 text-right text-blue-700 font-bold">Leveraged for Closure</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Civil Recovery Suit Risk</td>
                        <td className="p-3 text-rose-600 font-semibold">High: Order 37 Suit Allowed</td>
                        <td className="p-3 text-emerald-600 font-semibold">Zero: Legally Dismissible</td>
                        <td className="p-3 text-right text-emerald-600 font-semibold">Zero: Settled with NOC</td>
                      </tr>
                      <tr className="bg-blue-50/70 font-bold text-slate-900">
                        <td className="p-3">Final Financial Resolution</td>
                        <td className="p-3 text-rose-800">Harassment Continues</td>
                        <td className="p-3 text-slate-800">Remedy Extinguished</td>
                        <td className="p-3 text-right text-[#1886ff] text-sm sm:text-base">₹3,20,000 (77% Waiver)</td>
                      </tr>
                    </tbody>
                  </table>
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
                5. Visual Blueprint: Section 19 Limitation Flowchart
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This diagram shows the loan default timeline. It explains how payments affect limitation and helps you spot recovery traps.
              </p>

              <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-slate-100 bg-slate-100">
                  <Image
                    src="/images/infographics/does-paying-token-amount-reset-3-year-limitation-period-section-19.jpg"
                    alt="Section 19 Limitation Act Token Payment and Debt Rules"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 900px"
                    className="object-contain hover:scale-[1.01] transition-transform duration-300"
                    priority
                  />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-500 pt-1 gap-2">
                  <span>Official CredSettle Debt Defense Architecture • Section 19 Limitation Act Compliant</span>
                  <a
                    href="/images/infographics/does-paying-token-amount-reset-3-year-limitation-period-section-19.jpg"
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

            {/* SECTION 6: Electronic Payment Records & Written Acknowledgment */}
            <section id="written-acknowledgment" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Proviso &amp; Evidence Law</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. Electronic Payment Records &amp; Written Acknowledgment
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Many borrowers ask if digital payments count under Section 19. Section 19 states that payment proof must be in signed writing.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Today, courts read this rule with the Information Technology Act, 2000. Under Sections 4 and 5, digital records have the same legal standing as ink signatures.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When you pay via UPI or net banking, your bank creates a digital record. Courts hold that these bank records satisfy Section 19.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Giving a signed cheque or transfer receipt also counts as proof. Thus, banks can easily prove your payment in court without an ink signature.
              </p>
            </section>

            {/* SECTION 7: Landmark Judgments: Supreme Court Limitation Rulings */}
            <section id="judicial-precedents" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>Judicial Precedents &amp; Legal Authorities</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. Landmark Judgments: Supreme Court Limitation Rulings
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Indian courts have set clear rules for Section 19. These rulings help borrowers defend against unfair bank claims.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                    <Gavel className="w-4 h-4" />
                    <span>Sant Lal Mahton v. Kamla Prasad (AIR 1951 SC 477)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The Supreme Court held that payment must happen before limitation expires. Any payment made after the deadline cannot revive an expired debt.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                    <Building2 className="w-4 h-4" />
                    <span>J.C. Budhraja v. Orissa Mining Corpn. (2008 2 SCC 444)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The Supreme Court confirmed that any debt acknowledgment must be a clear admission of active liability made before the legal deadline ends.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-purple-700 font-bold text-sm">
                    <Scale className="w-4 h-4" />
                    <span>Shanti Conductors v. Assam SEB (2019 19 SCC 529)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The Supreme Court ruled that judges must dismiss expired claims under Section 3, even if the borrower forgets to raise the limitation defense.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Kapaleeswarar Temple v. Tirunavukarasu (Madras HC)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The High Court held that paying an old debt cannot restart limitation on its own. A signed contract under Section 25(3) is strictly required.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 8: Step-by-Step SOP: 6-Stage Limitation Defense Protocol */}
            <section id="step-by-step-sop" className="scroll-target space-y-6">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Standard Operating Procedure</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. Step-by-Step SOP: 6-Stage Limitation Defense Protocol
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If a lender or agent contacts you about an old loan, follow these six steps to protect your rights.
              </p>

              <div className="space-y-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">1</span>
                    Stage 1: Audit Loan Statement &amp; Pinpoint Default Date
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Download your official bank statement. Find the date of your first missed EMI and the date of your last payment to check the timeline.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">2</span>
                    Stage 2: Stop All Informal UPI &amp; Token Payments
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Refuse all requests for small token sums or hold deposits. Never send money through UPI links or QR codes sent on WhatsApp by callers.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">3</span>
                    Stage 3: Calculate Exact Limitation Status
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Count 36 months from your default date. If 36 months have passed without any payment or written note, the debt is legally time-barred.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">4</span>
                    Stage 4: Reply to Demand Notices Citing Section 3
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If the bank sends a legal notice for an old loan, send a formal legal reply citing Section 3 of the Limitation Act through a lawyer.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">5</span>
                    Stage 5: Reject Coercive Section 25(3) Documents
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Never sign blank compromise letters or balance confirmation forms. Agents can use these papers to revive an old debt as a new contract.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">6</span>
                    Stage 6: Execute Structured Bank OTS Settlement
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Use your strong legal defense to negotiate a formal compromise with the bank. Secure big waivers and get an official No Dues Certificate.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 9: 3-Tier Escalation Matrix: Grievance Redressal Steps */}
            <section id="escalation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Escalation Protocol</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. 3-Tier Escalation Matrix: Grievance Redressal Steps
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If agents threaten you or use token payment tricks, escalate your complaint through the official banking grievance system.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Grievance Tier</th>
                      <th className="p-3">Designated Banking Authority</th>
                      <th className="p-3">Turnaround Time</th>
                      <th className="p-3">Scope of Intervention &amp; Relief</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 1: GRO</td>
                      <td className="p-3">Bank Grievance Redressal Officer</td>
                      <td className="p-3 font-mono">7 to 10 Working Days</td>
                      <td className="p-3">Stops abusive calls, removes rogue agents, and checks the loan account default timeline.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 2: PNO</td>
                      <td className="p-3">Principal Nodal Officer (Head Office)</td>
                      <td className="p-3 font-mono">14 to 21 Working Days</td>
                      <td className="p-3">Reviews limitation status, halts unlawful recovery actions, and starts settlement talks.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Level 3: RBI Ombudsman</td>
                      <td className="p-3">Reserve Bank Integrated Ombudsman</td>
                      <td className="p-3 font-mono">30 Days Post-PNO</td>
                      <td className="p-3">Issues binding orders via cms.rbi.org.in to penalize rogue lenders and stop harassment.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: Procedural Milestones: Delinquency to Limitation */}
            <section id="procedural-timeline" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Clock className="w-4 h-4 text-[#1886ff]" />
                <span>Procedural Milestones</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                10. Procedural Milestones: Delinquency to Limitation
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Knowing your default timeline helps you plan ahead. You can spot collection traps and protect your rights early.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Delinquency Window</th>
                      <th className="p-3">Regulatory Asset Status</th>
                      <th className="p-3">Lender Legal &amp; Recovery Actions</th>
                      <th className="p-3">Strategic Borrower Response</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 1 to 90</td>
                      <td className="p-3 font-mono text-[11px]">SMA-0 to SMA-2</td>
                      <td className="p-3">Automated payment SMS, phone calls, and late payment fee notices.</td>
                      <td className="p-3">Review family budget and avoid paying small piecemeal amounts.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 91 to 365</td>
                      <td className="p-3 font-mono text-[11px] text-amber-700 font-bold">NPA (Substandard)</td>
                      <td className="p-3">Account marked as NPA; third-party collection agencies assigned.</td>
                      <td className="p-3">Check your loan statement to dispute wrongful penal interest fees.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Year 2 to 2.5</td>
                      <td className="p-3 font-mono text-[11px]">Doubtful Asset</td>
                      <td className="p-3">Bank sends demand letters; recovery agents increase pressure.</td>
                      <td className="p-3">Keep good records and prepare for a structured compromise deal.</td>
                    </tr>
                    <tr className="bg-amber-50/50">
                      <td className="p-3 font-bold text-slate-900">Month 30 to 35</td>
                      <td className="p-3 font-mono text-[11px] text-rose-700 font-bold">Pre-Expiry Hazard</td>
                      <td className="p-3 text-rose-700">Urgent agent demands for token sums to reset Section 19 limitation.</td>
                      <td className="p-3 font-bold text-slate-900">Refuse all token demands; get expert legal guidance right away.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Month 36 and Beyond</td>
                      <td className="p-3 font-mono text-[11px] text-[#1886ff] font-bold">Time-Barred Debt</td>
                      <td className="p-3">Court recovery remedy ends under Section 3 of the Limitation Act.</td>
                      <td className="p-3 font-bold text-slate-900">Settle the debt at a 60% to 80% discount with an official NOC.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 11: Specialized Real-World Scenarios */}
            <section id="specialized-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>Specialized Scenarios</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                11. Specialized Scenarios: Cheques, UPI &amp; Section 25(3)
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Limitation rules also apply to cases with cheques, bank mandates, and loan guarantors. Here is what you should know.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-[#1886ff]" />
                    Post-Dated Cheques &amp; Section 138 Cases
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Writing a cheque for an expired debt can cause serious trouble. If the cheque bounces, the bank can file a case under Section 138 of the Negotiable Instruments Act. Never write cheques for old loans.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-emerald-600" />
                    Automated NACH &amp; ECS Mandate Debits
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under Section 19, a payment must be voluntary. If an automated bank mandate goes through, the bank might claim this resets the clock. Cancel old bank mandates on unpaid accounts to avoid disputes.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-indigo-600" />
                    Co-Borrower &amp; Personal Guarantor Payments
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under Section 20(2) of the Limitation Act, a payment made by a co-borrower does not automatically reset limitation for you, unless you gave them written authority to pay.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <FileText className="w-4 h-4 text-amber-600" />
                    Email Requests &amp; Moratorium Applications
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Writing an email asking for more time can count as a written admission under Section 18. Always speak through a legal advisor so you do not accidentally restart limitation clocks.
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
                Frequently Asked Questions: Section 19 Token Payment
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Clear legal guidance addressing critical questions on Section 19 of the Limitation Act, token payment traps, time-barred debt rights, and resolution strategies.
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
                Official Regulatory Citations &amp; Statutory Authorities
              </h2>
              <ul className="space-y-2 text-xs text-slate-600 leading-relaxed list-disc pl-5">
                <li>
                  <strong>Limitation Act, 1963:</strong> Section 3 (Bar of Limitation), Section 18 (Acknowledgment in Writing), and Section 19 (Effect of Payment on Account of Debt).
                </li>
                <li>
                  <strong>Limitation Act Schedule:</strong> Articles 19, 21, and 55 (3-Year Period for Money Lent and Breach of Contract).
                </li>
                <li>
                  <strong>Indian Contract Act, 1872:</strong> Section 25(3) (Agreement to Pay Time-Barred Debt in Writing).
                </li>
                <li>
                  <strong>Information Technology Act, 2000:</strong> Section 4 and Section 5 (Legal Recognition of Electronic Records and Digital Signatures).
                </li>
                <li>
                  <strong>Supreme Court of India Precedents:</strong> Sant Lal Mahton v. Kamla Prasad (AIR 1951 SC 477) and J.C. Budhraja v. Orissa Mining Corpn. (2008 2 SCC 444).
                </li>
              </ul>

              {/* 6 Outbound Authority Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Verified Government &amp; Regulatory Portals:</span>
                <div className="flex flex-wrap gap-2">
                  <a href="https://www.indiacode.nic.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>India Code Legislative Repository</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.rbi.org.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>Reserve Bank of India</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://cms.rbi.org.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>RBI Integrated Ombudsman</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://main.sci.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>Supreme Court of India Judgments</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://nalsa.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>National Legal Services Authority</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://dslsa.org" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>Delhi State Legal Services Authority</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* 10 Internal Topic Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Explore Related CredSettle Guides:</span>
                <div className="flex flex-wrap gap-2">
                  <Link href="/personal-loan-time-barred-after-3-years-limitation-act" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Time Barred Debt Rules
                  </Link>
                  <Link href="/order-37-cpc-summary-suit-loan-recovery-leave-to-defend" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Order 37 Summary Suit Defense
                  </Link>
                  <Link href="/bank-sent-legal-notice-for-loan-what-to-do" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Bank Legal Notice Reply
                  </Link>
                  <Link href="/stop-recovery-agent-harassment" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Stop Recovery Harassment
                  </Link>
                  <Link href="/rbi-rules-for-recovery-agents" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    RBI Recovery Guidelines
                  </Link>
                  <Link href="/how-to-verify-bank-ots-sanction-letter-avoid-settlement-scams" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Verify Bank OTS Letter
                  </Link>
                  <Link href="/paying-cash-to-recovery-agents-fraud-risks-official-bank-rules" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Paying Cash to Recovery Agents
                  </Link>
                  <Link href="/can-bank-send-you-to-civil-prison-for-loan-default-order-21-rule-37-cpc" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Civil Prison Loan Default Rules
                  </Link>
                  <Link href="/get-noc-after-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Get NOC After Settlement
                  </Link>
                  <Link href="/services/personal-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Personal Loan Settlement
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
                Expert in banking compliance, consumer debt defense, limitation laws under the Limitation Act 1963, and structured compromise settlements with extensive experience defending borrowers against unlawful recovery practices.
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
                  Bank Demanding Token Amount on Old Debt?
                </p>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our senior legal resolution specialists verify your loan limitation status under Section 19, halt collection harassment, and negotiate up to 75% compromise waivers.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Evaluate Your Debt Free
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
                  <span><strong>Limitation Audit:</strong> Verified default and timeline check.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Trap Prevention:</strong> Stop illegal Section 19 restarts.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>RBI Ombudsman Protection:</strong> End aggressive recovery.</span>
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
                  href="/personal-loan-time-barred-after-3-years-limitation-act"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Time Barred Debt After 3 Years
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Limitation Act defense &rarr;</span>
                </Link>

                <Link
                  href="/order-37-cpc-summary-suit-loan-recovery-leave-to-defend"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Order 37 Summary Suit Defense
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Leave to defend procedure &rarr;</span>
                </Link>

                <Link
                  href="/bank-sent-legal-notice-for-loan-what-to-do"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Bank Legal Notice Response
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Drafting formal legal reply &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
