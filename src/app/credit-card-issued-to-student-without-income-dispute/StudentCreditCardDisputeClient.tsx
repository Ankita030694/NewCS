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
  BookOpen,
  Building2,
  Check,
  Lock,
  Phone,
  Briefcase,
  Bookmark,
  ArrowRight,
  Clock,
  UserCheck,
  Gavel,
  Landmark,
  Calendar,
  CreditCard
} from 'lucide-react';

export default function StudentCreditCardDisputeClient() {
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
    { id: 'rbi-underwriting-rules', label: '1. RBI Rules on Student Cards' },
    { id: 'predatory-dsa-tactics', label: '2. Predatory Underwriting & DSAs' },
    { id: 'compliant-vs-predatory', label: '3. Compliant vs Predatory Cards' },
    { id: 'legal-rights-framework', label: '4. Legal Rights & Contract Law' },
    { id: 'step-by-step-dispute', label: '5. Step-by-Step Dispute SOP' },
    { id: 'cibil-harassment-shield', label: '6. CIBIL & Harassment Shield' },
    { id: 'escalation-matrix', label: '7. 3-Tier Escalation Matrix' },
    { id: 'dispute-timelines', label: '8. Dispute Timelines & Deadlines' },
    { id: 'special-scenarios', label: '9. Pre-Approved & Add-On Traps' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
    {
      q: 'Can a bank legally issue an unsecured credit card to a student with zero income?',
      a: 'Under RBI Master Directions on Credit Card and Debit Card Issuance and Conduct, banks must independently assess credit risk and show extra caution for students with no independent financial means. Issuing a high-limit unsecured card without verifying income violates prudent underwriting norms.'
    },
    {
      q: 'What if a bank agent faked my income details to approve a student credit card?',
      a: 'Under RBI outsourcing rules, the bank is fully responsible for the actions of its Direct Selling Agents (DSAs). If an agent inflated or fabricated your income on the form, you can dispute the card as mis-sold and demand fee reversals and closure.'
    },
    {
      q: 'Am I liable to pay if the student credit card was issued without my consent?',
      a: 'No. Under RBI rules, banks cannot issue unsolicited credit cards or activate cards without explicit OTP or digital consent. If a card was issued or activated without your consent, the bank must close it at zero cost and reverse all billed charges.'
    },
    {
      q: 'What happens if I already spent money on a predatory student credit card?',
      a: 'If you willingly used the card for purchases, you generally remain liable for the actual principal spent. However, you can still dispute hidden fees, predatory interest, mis-sold add-ons, and reckless limit increases, or negotiate a fair repayment or settlement.'
    },
    {
      q: 'Can a bank recover student credit card dues from my parents?',
      a: 'No, unless your parents signed as co-applicants, guarantors, or hold the primary card in an add-on card setup. For an independent card in an adult student name, banks cannot legally force parents to pay or seize parent bank accounts.'
    },
    {
      q: 'How do I remove a CIBIL default caused by a mis-sold student credit card?',
      a: 'File a written dispute with the bank Principal Nodal Officer citing mis-selling and improper underwriting. If the bank agrees to close the card as disputed or settles, ask for a CIBIL rectification request and escalate to the RBI Ombudsman if the bureau record is not fixed.'
    },
    {
      q: 'What are the RBI-compliant ways for students to get a credit card?',
      a: 'Students without independent income can safely get a Fixed Deposit (FD)-backed secured credit card or an add-on supplementary card linked to a parent primary card. Both options comply with RBI risk rules.'
    },
    {
      q: 'How long does the bank have to resolve my student credit card dispute?',
      a: 'Banks must resolve customer complaints within 30 days from the date of filing. If you receive no reply or an unsatisfactory reply after 30 days, you can escalate the complaint to the RBI Integrated Ombudsman at cms.rbi.org.in.'
    },
    {
      q: 'Can I file a Consumer Court case for a predatory student credit card?',
      a: 'Yes. Mis-selling financial products, fabricating KYC or income data, and charging unfair fees constitute unfair trade practices and deficiency in service under the Consumer Protection Act, 2019. You can claim compensation for mental agony and harassment.'
    },
    {
      q: 'How can CredSettle help students trapped in high-limit credit card debt?',
      a: 'CredSettle audits the card application and KYC trail for RBI underwriting violations, stops recovery agent harassment, files formal disputes with the Bank Nodal Officer and RBI Ombudsman, and negotiates waivers or structured settlements to protect your future credit.'
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
            <span>RBI Credit Card Conduct Directions &amp; Student Protection</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Dispute High-Limit Credit Cards Issued Without Income
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            Did a bank or fintech app issue you a high-limit credit card as a student without verified income? Learn how RBI underwriting rules protect you from predatory billing, DSA mis-selling, and unfair CIBIL damage.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Dispute Student Card Debt</span>
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
                  <span>RBI Student Protection</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Backed by RBI Credit Card Master Directions, 2022 and Consumer Protection Act, 2019.
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
                <span>EXECUTIVE BRIEF: STUDENT CREDIT CARD DISPUTE RIGHTS</span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Prudent Underwriting Duty:</strong> RBI Master Directions require banks to independently assess credit risk and exercise extra caution for students with no independent financial means.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Bank Liability for DSA Mis-Selling:</strong> If a sales agent faked your income or promised a free student card, the bank is legally liable for its agent&apos;s misconduct.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Zero Liability on Unsolicited Cards:</strong> Cards issued or activated without your explicit OTP consent must be closed at zero cost with full fee reversals.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Parents Are Not Liable:</strong> Banks cannot force parents to pay for an independent student card unless a parent signed as a co-applicant or primary add-on holder.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Ombudsman &amp; CIBIL Relief:</strong> You can escalate unresolved disputes after 30 days to the RBI Integrated Ombudsman for fee waivers, compensation, and CIBIL correction.
                  </span>
                </li>
              </ul>
            </div>

            {/* SECTION 1 */}
            <section id="rbi-underwriting-rules" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Central Bank Underwriting Standards</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. RBI Rules on Student Credit Cards Without Income
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Many college students in India receive unsolicited calls or campus offers for high-limit credit cards. Some banks and NBFC apps approve limits of ₹50,000 to ₹2,00,000 even when the student has zero salary or business income.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This practice directly clashes with Reserve Bank of India rules. Under the RBI Master Direction on Credit Card and Debit Card Issuance and Conduct Directions, 2022, card issuers must exercise strict prudence. They must independently assess the credit risk of every applicant before issuing a card.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The RBI specifically directs banks to be extra careful when issuing cards to students and others with no independent financial means. A bank cannot ignore your lack of income just to meet monthly sales targets.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When a bank skips income verification and hands out a high credit limit to a full-time student, it creates a foreseeable debt trap. If you are stuck with soaring interest and late fees on such a card, you have strong regulatory grounds to challenge the bank.
              </p>
            </section>

            {/* SECTION 2 */}
            <section id="predatory-dsa-tactics" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <AlertTriangle className="w-4 h-4 text-[#1886ff]" />
                <span>Deceptive Sales &amp; Application Tampering</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. How Predatory Underwriting &amp; DSA Mis-Selling Work
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Most predatory student credit cards are sold by third-party Direct Selling Agents (DSAs) or digital marketing partners. These agents earn commissions per approved card. As a result, they often bend the rules to push applications through bank filters.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-rose-700 font-bold text-sm">
                    <FileText className="w-4 h-4" />
                    <span>Fake Employment or Income Entries</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Agents frequently enter fake self-employed business titles or inflated annual incomes on digital forms without telling the student. Later, the bank blames the student for the false declaration.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-amber-700 font-bold text-sm">
                    <CreditCard className="w-4 h-4" />
                    <span>False &quot;Lifetime Free&quot; Promises</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Students are told the card is a free campus perk with no joining or annual fees. Months later, the bank bills ₹1,000 to ₹5,000 in hidden fees plus 18% GST and penal interest.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                    <Lock className="w-4 h-4" />
                    <span>Bundled Insurance &amp; Dark Patterns</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Digital onboarding flows often use pre-checked boxes to bundle Card Protection Plans (CPP) or loan insurance. This adds instant debt before the student even uses the card.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Pre-Approved Savings Account Traps</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Banks sometimes convert a student&apos;s zero-balance savings account into a pre-approved credit card offer based on pocket-money transfers from parents, mistaking allowance for salary.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 3 */}
            <section id="compliant-vs-predatory" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <CheckCircle2 className="w-4 h-4 text-[#1886ff]" />
                <span>Regulatory Comparison Matrix</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Compliant Student Cards vs Predatory Issuance
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The RBI does not ban students from holding credit cards. Instead, it requires safe structures that match the student&apos;s lack of independent income. The table below compares legal student cards with predatory issuance.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-900 text-white font-semibold">
                      <th className="p-3">Feature / Parameter</th>
                      <th className="p-3">FD-Backed Secured Card</th>
                      <th className="p-3">Parent Add-On Card</th>
                      <th className="p-3">Predatory Unsecured Card</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">RBI Compliance</td>
                      <td className="p-3 text-emerald-600 font-semibold">Fully Compliant</td>
                      <td className="p-3 text-emerald-600 font-semibold">Fully Compliant</td>
                      <td className="p-3 text-rose-600 font-semibold">Violates Prudence Norms</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Collateral / Backing</td>
                      <td className="p-3">Fixed Deposit in student&apos;s name</td>
                      <td className="p-3">Parent&apos;s verified credit limit</td>
                      <td className="p-3">Zero collateral; zero income proof</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Legal Payment Liability</td>
                      <td className="p-3">Capped by FD liquidation</td>
                      <td className="p-3">Primary cardholder (Parent)</td>
                      <td className="p-3">Student targeted with 36% to 45% APR</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Dispute &amp; Waiver Scope</td>
                      <td className="p-3">Standard billing disputes only</td>
                      <td className="p-3">Primary holder controls limits</td>
                      <td className="p-3 font-bold text-[#1886ff]">Strong grounds for mis-selling claim</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 4 */}
            <section id="legal-rights-framework" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Protections &amp; Legal Grounds</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. Legal Rights Under RBI Directions &amp; Contract Law
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If a bank or NBFC gave you a high-limit card without checking your income, several Indian laws and RBI mandates protect you. Knowing these rules helps you write a strong formal dispute.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                First, under the RBI Credit Card Master Directions, banks are vicariously liable for their DSAs. This means the bank cannot wash its hands of an agent who forged your income details or lied about annual fees.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Second, if you never requested or activated the card via explicit OTP consent, it counts as an unsolicited card. Under RBI rules, the bank must close an unsolicited card immediately and pay a penalty of twice the wrongly billed amount if it refuses.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Third, under Section 17 and Section 18 of the Indian Contract Act, 1872, a contract obtained by fraud or misrepresentation is voidable. Under the Consumer Protection Act, 2019, selling unsuitable high-risk credit to a student is an unfair trade practice.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Note an important distinction: if you knowingly swiped the card for shopping or cash, courts expect you to repay the genuine principal used. However, you can still demand a waiver of illegal fees, compounding penal interest, and compensation for mis-selling.
              </p>
            </section>

            {/* SECTION 5 */}
            <section id="step-by-step-dispute" className="scroll-target space-y-6">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Standard Operating Procedure</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. Step-by-Step Dispute &amp; Liability Waiver Process
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Follow these six steps in order to build a strong paper trail and dispute a predatory student credit card effectively.
              </p>

              <div className="space-y-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">1</span>
                    Stage 1: Freeze Card Usage and Save All Evidence
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Stop using the card immediately and lock it in the mobile app. Save WhatsApp chats, emails, call recordings, and screenshots from the DSA or bank app showing false fee promises or zero income disclosure.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">2</span>
                    Stage 2: Demand Your Original Application Form Copy
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Email the bank customer care and ask for a copy of your signed application form, KYC log, and income proof used for underwriting. Often, banks cannot produce valid income documents because none existed.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">3</span>
                    Stage 3: File a Written Mis-Selling Dispute
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Send a formal email to the Bank Grievance Redressal Officer (GRO). State that you are a full-time student with zero independent income and cite the RBI Master Direction on prudent student risk assessment.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">4</span>
                    Stage 4: Separate Principal from Predatory Charges
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If you never used the card, demand 100% reversal and closure. If you spent money on it, calculate the actual principal minus annual fees, GST, and compounding penal interest, and propose a fair settlement or principal-only closure.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">5</span>
                    Stage 5: Escalate to Principal Nodal Officer (PNO)
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If the GRO sends a template rejection, escalate to the bank&apos;s Principal Nodal Officer. Attach your college ID or bonafide student certificate to prove your student status at the time of card issuance.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">6</span>
                    Stage 6: File on RBI CMS Portal After 30 Days
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If the bank fails to resolve your dispute within 30 days, file a free online complaint on cms.rbi.org.in under the RBI Integrated Ombudsman Scheme. Request fee reversal, account closure, and CIBIL correction.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 6 */}
            <section id="cibil-harassment-shield" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <ShieldCheck className="w-4 h-4 text-[#1886ff]" />
                <span>Credit Bureau &amp; Anti-Harassment Protection</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. Protecting Your CIBIL Score &amp; Stopping Harassment
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                A damaged credit score early in life can hurt your future education loans, job background checks, or first home loan. At the same time, recovery agents often target students because they fear family embarrassment.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under RBI recovery guidelines, recovery agents cannot call before 8:00 AM or after 7:00 PM. They cannot threaten arrest, call your college authorities, or harass your parents and friends. Every agent must carry a bank authorization letter.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                To protect your CIBIL report while your dispute is active, raise a formal dispute on the CIBIL portal as well. Upload your bank complaint reference number. Once the bank closes a mis-sold or unsolicited card, it must update all four credit bureaus (CIBIL, Experian, Equifax, and CRIF High Mark) within 15 days under current RBI reporting rules.
              </p>
            </section>

            {/* SECTION 7 */}
            <section id="escalation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Escalation Protocol</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. 3-Tier Escalation Matrix: Bank GRO to Ombudsman
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Never rely on verbal assurances from customer care executives. Use the official three-tier escalation system so your complaint has legal weight.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Escalation Tier</th>
                      <th className="p-3">Designated Authority</th>
                      <th className="p-3">Turnaround Window</th>
                      <th className="p-3">Relief You Can Demand</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 1: GRO</td>
                      <td className="p-3">Bank Grievance Redressal Officer</td>
                      <td className="p-3 font-mono">7 to 14 Days</td>
                      <td className="p-3">Logs mis-selling ticket, freezes late fees, and pulls DSA application records.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 2: PNO</td>
                      <td className="p-3">Principal Nodal Officer (Head Office)</td>
                      <td className="p-3 font-mono">Up to Day 30</td>
                      <td className="p-3">Audits underwriting breach, approves fee waivers, and stops recovery calls.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Level 3: RBI Ombudsman</td>
                      <td className="p-3">Reserve Bank Integrated Ombudsman</td>
                      <td className="p-3 font-mono">After 30 Days</td>
                      <td className="p-3">Issues binding order on cms.rbi.org.in for closure, refund, CIBIL fix, and damages.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 8 */}
            <section id="dispute-timelines" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Calendar className="w-4 h-4 text-[#1886ff]" />
                <span>Procedural Deadlines</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. Dispute Timelines &amp; Mandatory Bank Deadlines
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Tracking exact dates is critical when fighting a bank dispute. Missing a timeline or waiting too long allows interest to compound and hurts your credit profile.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Timeframe</th>
                      <th className="p-3">Regulatory Stage</th>
                      <th className="p-3">Bank Duty</th>
                      <th className="p-3">Student Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 0 to Day 7</td>
                      <td className="p-3 font-mono text-[11px]">Card Receipt / First Bill</td>
                      <td className="p-3">Cannot charge fees if card is unactivated for 30 days.</td>
                      <td className="p-3">Do not activate card; email GRO to cancel unsolicited card.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 1 to Day 30</td>
                      <td className="p-3 font-mono text-[11px]">Internal Bank Review</td>
                      <td className="p-3">Must investigate DSA fraud and respond within 30 days.</td>
                      <td className="p-3">Escalate to PNO if branch ignores; keep all call logs.</td>
                    </tr>
                    <tr className="bg-amber-50/50">
                      <td className="p-3 font-bold text-slate-900">Day 31 Onwards</td>
                      <td className="p-3 font-mono text-[11px] text-amber-700 font-bold">RBI Ombudsman Eligible</td>
                      <td className="p-3">Answers to RBI Ombudsman for underwriting breach.</td>
                      <td className="p-3 font-bold text-amber-800">File complaint on cms.rbi.org.in with student ID and proofs.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Closure + 7 Days</td>
                      <td className="p-3 font-mono text-[11px] text-[#1886ff] font-bold">Card Closure Rule</td>
                      <td className="p-3">Must close card within 7 working days or pay ₹500/day.</td>
                      <td className="p-3 font-bold text-slate-900">Collect No Dues Certificate and verify CIBIL update in 15 days.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 9 */}
            <section id="special-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>Specialized Student Credit Scenarios</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Special Cases: Pre-Approved Apps &amp; Add-On Traps
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Students face different types of predatory credit traps today. Here is how RBI rules apply to four common situations.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-[#1886ff]" />
                    Student BNPL &amp; Fintech Credit Lines
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Many Buy Now Pay Later apps partner with NBFCs to give students instant credit lines without income checks. Under RBI Digital Lending Guidelines, NBFCs must still assess repayment capacity and provide a Key Facts Statement (KFS).
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Scale className="w-4 h-4 text-emerald-600" />
                    Unwanted Limit Increases
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If you started with a small ₹15,000 limit and the bank raised it to ₹1,50,000 without your explicit request, that violates RBI rules. Banks cannot increase credit limits without your prior consent.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-indigo-600" />
                    Add-On Card vs Primary Card Confusion
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Sometimes a student applies thinking it is an add-on card to a parent&apos;s account, but the agent opens an independent primary card. Always check the billing statement name and card agreement immediately.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-amber-600" />
                    Already Defaulted &amp; Facing Recovery
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If you spent part of the limit and cannot pay due to no job, do not panic or take another loan app. You can negotiate a formal One-Time Settlement (OTS) using the bank&apos;s underwriting violation as leverage for a high waiver.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 10: Company Profile Component */}
            <div id="company-profile" className="scroll-target pt-2">
              <CompanySection />
            </div>

            {/* SECTION 11: 10 Synchronized FAQs */}
            <section id="frequently-asked-questions" className="scroll-target space-y-5">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <HelpCircle className="w-4 h-4 text-[#1886ff]" />
                <span>Direct Answers</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Frequently Asked Questions: Student Card Disputes
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Clear, verified answers on disputing predatory student credit cards, DSA mis-selling, parent liability, CIBIL repair, and RBI Ombudsman complaints.
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

            {/* SECTION 12: Citations & Outbound Authority Grid */}
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
                  <strong>RBI Master Direction:</strong> Master Direction on Credit Card and Debit Card - Issuance and Conduct Directions, 2022 (updated 2024), governing prudent risk assessment for students, unsolicited cards, and DSA accountability.
                </li>
                <li>
                  <strong>Reserve Bank - Integrated Ombudsman Scheme, 2021:</strong> Cost-free redressal for mis-selling, unauthorized billing, and deficiency in banking service.
                </li>
                <li>
                  <strong>Consumer Protection Act, 2019:</strong> Section 2(11) (Deficiency of Service) and Section 2(47) (Unfair Trade Practice for deceptive financial sales).
                </li>
                <li>
                  <strong>Indian Contract Act, 1872:</strong> Sections 17 and 18 (Contracts induced by fraud or misrepresentation).
                </li>
                <li>
                  <strong>RBI Digital Lending Guidelines, 2022:</strong> Mandatory creditworthiness assessment and Key Facts Statement (KFS) disclosure for digital credit lines.
                </li>
              </ul>

              {/* Outbound Authority Badges */}
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
                  <a href="https://consumerhelpline.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>National Consumer Helpline</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Internal Topic Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Explore Related CredSettle Guides:</span>
                <div className="flex flex-wrap gap-2">
                  <Link href="/services/credit-card-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Credit Card Settlement
                  </Link>
                  <Link href="/unactivated-credit-card-charges-rbi-500-day-penalty" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Unactivated Card Charges
                  </Link>
                  <Link href="/unsolicited-credit-card-upgrade-limit-increase-rbi-rule" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Unsolicited Limit Increase
                  </Link>
                  <Link href="/add-on-supplementary-credit-card-default-liability" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Add-On Card Liability
                  </Link>
                  <Link href="/fd-backed-secured-credit-card-default-liquidation-rules" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    FD-Backed Card Rules
                  </Link>
                  <Link href="/stop-recovery-agent-harassment" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Stop Recovery Harassment
                  </Link>
                  <Link href="/rbi-rules-for-recovery-agents" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    RBI Recovery Guidelines
                  </Link>
                  <Link href="/bank-sent-legal-notice-for-loan-what-to-do" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Bank Legal Notice Reply
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
                Specialist in RBI credit card compliance, mis-selling disputes, consumer protection, and structured debt resolution helping young borrowers challenge unfair bank practices.
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
                  STUDENT DEBT RELIEF
                </span>
                <p className="text-lg md:text-xl font-bold text-white leading-snug">
                  Trapped by a Mis-Sold Student Credit Card?
                </p>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our banking experts challenge illegal underwriting, stop recovery calls to your family, and negotiate fee waivers or clean settlements with the bank.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Get Free Case Review
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
                  <span>RBI Compliant &bull; 100% Confidential</span>
                </div>
              </div>
            </div>

            {/* Card 3: CredSettle Trust Badges */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">The CredSettle Assurance</p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Underwriting Audit:</strong> Spot RBI rule breaches in card approval.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Anti-Harassment Shield:</strong> Stop calls to parents and colleges.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>RBI CMS Escalation:</strong> Structured Ombudsman representation.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>CIBIL Protection:</strong> Rectify erroneous defaults cleanly.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">Related Legal Guides</p>
              <div className="space-y-2.5">
                <Link
                  href="/unactivated-credit-card-charges-rbi-500-day-penalty"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Unactivated Credit Card Charges
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">RBI 2x penalty &amp; closure rules &rarr;</span>
                </Link>

                <Link
                  href="/unsolicited-credit-card-upgrade-limit-increase-rbi-rule"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Unsolicited Card Limit Increase
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Consent &amp; penalty guide &rarr;</span>
                </Link>

                <Link
                  href="/services/credit-card-settlement"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Credit Card Settlement Services
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Negotiate waivers &amp; OTS &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
