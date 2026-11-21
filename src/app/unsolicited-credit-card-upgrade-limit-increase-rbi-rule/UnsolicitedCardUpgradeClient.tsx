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

export default function UnsolicitedCardUpgradeClient() {
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
    { id: 'statutory-framework', label: '1. Statutory Framework: RBI Rules' },
    { id: 'upgrade-vs-limit', label: '2. Card Upgrade vs Limit Hike' },
    { id: 'calculation-matrix', label: '3. 2x Double Penalty Calculation' },
    { id: 'activation-closure', label: '4. 30-Day Activation & Closure' },
    { id: 'visual-blueprint', label: '5. Visual Blueprint Infographic' },
    { id: 'step-by-step-sop', label: '6. Claiming Your 2x Penalty' },
    { id: 'borrower-rights', label: '7. Ombudsman & Consumer Court' },
    { id: 'escalation-matrix', label: '8. 3-Tier Escalation Matrix' },
    { id: 'procedural-timeline', label: '9. Dispute to Payout Milestones' },
    { id: 'specialized-scenarios', label: '10. Bank Excuses & CIBIL Fix' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
    {
      q: 'What is the RBI double penalty rule for unsolicited credit card upgrades?',
      a: 'Under the RBI Master Direction on Credit Cards, 2022, if a bank issues an unsolicited card or upgrades an existing card and activates it without explicit consent and bills you, the bank must reverse all charges immediately and pay a penalty equal to twice (2x) the reversed amount.'
    },
    {
      q: 'Can a bank increase my credit card limit without asking me?',
      a: 'No. Paragraph 11(b) of the RBI Master Direction strictly prohibits card-issuers from unilaterally enhancing credit limits. The bank must take your explicit consent before increasing your limit. However, a bank can reduce your limit by intimating you.'
    },
    {
      q: 'Does silence or not replying to an SMS count as consent for a card upgrade?',
      a: 'No. Silence, pre-ticked boxes, or opt-out messages do not count as valid consent under RBI rules. The bank must obtain explicit, recorded consent through OTP authentication or written confirmation before upgrading your card or limit.'
    },
    {
      q: 'What happens if I receive an upgraded credit card that I never asked for?',
      a: 'Do not activate the card or share any activation OTP. If the card stays unactivated for 30 days, the bank must seek OTP-based consent. If you do not give consent, the bank must close the card account within 7 working days at zero cost to you.'
    },
    {
      q: 'Does the 2x penalty apply to credit limit increases without consent?',
      a: 'The automatic 2x penalty clause applies directly when an unsolicited card or upgrade is activated and billed without consent. For unilateral credit limit hikes, the bank must withdraw the hike immediately, and the RBI Ombudsman can award compensation for any loss or harassment.'
    },
    {
      q: 'How do I calculate the RBI double penalty amount?',
      a: 'First, the bank must reverse 100% of the unauthorized fees, GST, and interest billed on the unsolicited card or upgrade. Second, the bank must pay you twice (2x) the value of those reversed charges without demur. For example, a Rs 5,000 fee reversal triggers a Rs 10,000 penalty.'
    },
    {
      q: 'What if the bank reported a late payment on an unsolicited card to CIBIL?',
      a: 'You have the right to demand immediate deletion of the CIBIL tradeline and any Days Past Due (DPD) marks. Under RBI credit reporting rules, banks must correct wrong credit bureau entries within 30 days of a dispute, or face daily compensation liability.'
    },
    {
      q: 'How long should I wait before filing an RBI Ombudsman complaint?',
      a: 'First file a written complaint with your bank customer care or Grievance Redressal Officer. If the bank does not resolve it within 30 days, or rejects your claim, you can file a free complaint on the RBI CMS portal at cms.rbi.org.in.'
    },
    {
      q: 'Can I claim extra compensation beyond the 2x penalty?',
      a: 'Yes. Under the RBI Integrated Ombudsman Scheme, 2021, the Ombudsman can award extra compensation for harassment, mental anguish, and time lost. You can also approach a Consumer Commission under the Consumer Protection Act, 2019 for deficiency in service.'
    },
    {
      q: 'How does CredSettle help with unsolicited credit card upgrade disputes?',
      a: 'CredSettle drafts formal legal notices citing RBI Master Direction clauses, audits wrongful fees and CIBIL damage, files escalations with Principal Nodal Officers and the RBI Ombudsman, and helps you recover the 2x penalty or settle genuine card dues.'
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
            <span>RBI Master Direction 2022 &amp; Cardholder Rights</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            RBI Penalty Rule for Unsolicited Credit Card Upgrades
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            Did your bank upgrade your credit card or hike your limit without explicit OTP consent? Learn how RBI Master Directions force lenders to reverse all fees, pay a 2x double penalty, and delete wrongful CIBIL marks.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Claim Your 2x RBI Penalty</span>
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
                  Protected under RBI Master Direction RBI/2022-23/92 and the Consumer Protection Act, 2019.
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
                <span>EXECUTIVE BRIEF: RBI UNSOLICITED CARD UPGRADE &amp; 2X PENALTY RULES</span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Strict Ban on Unilateral Upgrades:</strong> Under Paragraph 11(b) of RBI Master Direction 2022, banks cannot upgrade your credit card or raise your limit without explicit prior consent.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Mandatory 2x Double Penalty:</strong> If an unsolicited card or upgrade is activated and billed without consent, the bank must reverse all charges and pay you twice (2x) that amount without demur.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Silence Is Not Consent:</strong> Pre-ticked boxes, opt-out SMS alerts, or unreturned calls do not count as legal consent. Banks need OTP or written approval.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">7-Day Free Closure Rule:</strong> If an unsolicited card stays unactivated for 30 days and you withhold OTP consent, the bank must close it within 7 working days at zero cost.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Extra Ombudsman &amp; CIBIL Relief:</strong> Beyond the 2x payout, you can claim harassment damages via the RBI Ombudsman and demand immediate removal of wrong CIBIL entries.
                  </span>
                </li>
              </ul>
            </div>

            {/* SECTION 1 */}
            <section id="statutory-framework" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Enactments &amp; Central Bank Mandates</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. Statutory Framework: RBI Master Direction Rules
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Many Indian banks push premium credit cards or higher credit limits onto customers without asking. They often convert a lifetime-free card into a paid card. Suddenly, you see a hefty annual fee and GST on your monthly statement.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                To stop this unfair practice, the Reserve Bank of India issued strict rules. The{' '}
                <strong>
                  Master Direction on Credit Card and Debit Card Issuance and Conduct Directions, 2022
                </strong>{' '}
                (Circular RBI/2022-23/92, effective July 1, 2022) governs all banks and NBFCs in India.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under Chapter VII and Paragraph 6 of these directions, issuing unsolicited cards or upgrading cards without consent is illegal. If a bank activates and bills an unsolicited card or upgrade, it must reverse every rupee charged right away.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The rule goes even further to punish non-compliant lenders. The bank must also pay you a statutory penalty equal to <strong>twice (2x) the value of the reversed charges</strong> without any argument or delay.
              </p>
            </section>

            {/* SECTION 2 */}
            <section id="upgrade-vs-limit" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <ShieldCheck className="w-4 h-4 text-[#1886ff]" />
                <span>Paragraph 11(b) Consent Rules</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. Unsolicited Card Upgrade vs Credit Limit Hike
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Paragraph 11(b) of the RBI Master Direction covers both card upgrades and limit increases. It states clearly that card-issuers must not unilaterally upgrade credit cards or enhance credit limits.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Banks must take your explicit consent whenever they change any terms and conditions. Explicit consent means you actively say yes through an OTP, signed form, or recorded digital click. Silence or failing to reply to an SMS is never valid consent.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                However, there is a key legal difference between an unsolicited upgrade and a limit hike. If a bank upgrades your card, activates it, and bills you, the automatic <strong>2x double penalty</strong> triggers immediately.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                For an unauthorized credit limit hike without extra billing, the bank must roll back the limit as soon as you object. If the hike caused fraud loss or fee issues, the RBI Ombudsman can order compensation. Note that banks can still reduce your credit limit without consent, as long as they inform you.
              </p>
            </section>

            {/* SECTION 3 */}
            <section id="calculation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Penalty Formulas &amp; Payout Ledger</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Calculation Matrix: How the 2x Penalty Works
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The RBI double penalty has two parts. First, the bank must refund 100% of all unauthorized charges, including annual fees, joining fees, late fees, interest, and 18% GST. Second, the bank must pay you twice that total reversed sum.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                You do not need to prove financial loss to claim this 2x amount. The table below shows how the total recovery adds up for common billing disputes.
              </p>

              {/* Representative Calculation Card */}
              <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white shadow-xs">
                <div className="bg-slate-900 text-white p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-[#1886ff]" />
                    <span className="font-bold text-sm">Representative 2x Double Penalty Ledger</span>
                  </div>
                  <span className="text-xs text-blue-300 font-mono">100% Reversal + 2x Penalty</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80">
                    <thead>
                      <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-semibold">
                        <th className="p-3">Unauthorized Charge Billed</th>
                        <th className="p-3">100% Charge Reversal</th>
                        <th className="p-3">Mandatory 2x Penalty</th>
                        <th className="p-3 text-right">Total Benefit to Cardholder</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200/80 text-slate-600">
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Rs 1,000 Annual Fee + Rs 180 GST</td>
                        <td className="p-3 font-mono">Rs 1,180</td>
                        <td className="p-3 font-mono text-emerald-700 font-bold">Rs 2,360</td>
                        <td className="p-3 text-right font-bold text-slate-900 font-mono">Rs 3,540</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Rs 2,500 Upgrade Fee + Rs 450 GST</td>
                        <td className="p-3 font-mono">Rs 2,950</td>
                        <td className="p-3 font-mono text-emerald-700 font-bold">Rs 5,900</td>
                        <td className="p-3 text-right font-bold text-slate-900 font-mono">Rs 8,850</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Rs 5,000 Premium Fee + Rs 900 GST</td>
                        <td className="p-3 font-mono">Rs 5,900</td>
                        <td className="p-3 font-mono text-amber-700 font-bold">Rs 11,800</td>
                        <td className="p-3 text-right font-bold text-amber-700 font-mono">Rs 17,700</td>
                      </tr>
                      <tr className="bg-blue-50/70 font-bold text-slate-900">
                        <td className="p-3">Rs 10,000 Fee + Late Charges + GST</td>
                        <td className="p-3 font-mono">Rs 11,800</td>
                        <td className="p-3 font-mono text-[#1886ff]">Rs 23,600</td>
                        <td className="p-3 text-right text-[#1886ff] text-sm sm:text-base font-mono">
                          Rs 35,400 + Ombudsman Relief
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* SECTION 4 */}
            <section id="activation-closure" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <AlertTriangle className="w-4 h-4 text-[#1886ff]" />
                <span>Unactivated Card Safeguards &amp; 7-Day Rule</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. 30-Day Activation &amp; 7-Day Free Closure Rule
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Sometimes a bank sends you an upgraded credit card by courier without your permission. You never asked for it, and you leave the envelope unopened on your desk.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                RBI rules protect you here too. Do not set a PIN, do not swipe the card, and do not share any OTP with bank callers. Simply keeping a card does not make you liable for annual fees.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If a credit card stays unactivated for more than <strong>30 days</strong> from issuance, the bank must seek your OTP-based consent to activate it. If you do not give consent, the bank must close the card account within <strong>7 working days</strong> at zero cost to you.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If the bank activates the card anyway without your OTP or bills you an annual fee, it triggers the 2x double penalty. You can also check our guide on{' '}
                <Link
                  href="/credit-card-overlimit-fee-without-consent-rbi-refund"
                  className="text-[#1886ff] font-semibold hover:underline"
                >
                  credit card overlimit fee refunds without consent
                </Link>{' '}
                if extra limit fees were added.
              </p>
            </section>

            {/* SECTION 5 */}
            <section id="visual-blueprint" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Sparkles className="w-4 h-4 text-[#1886ff]" />
                <span>Visual Blueprint</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. Visual Blueprint: 2x Penalty &amp; Claim Flow
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This visual guide shows the four steps of the RBI double penalty rule. It covers consent checks, instant fee reversal, the 2x payout, and Ombudsman escalation.
              </p>

              <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-slate-100 bg-slate-100">
                  <Image
                    src="/images/infographics/unsolicited-credit-card-upgrade-limit-increase-rbi-rule.jpg"
                    alt="RBI Double Penalty Rule for Unsolicited Credit Card Upgrades and Limit Increases"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 900px"
                    className="object-contain hover:scale-[1.01] transition-transform duration-300"
                    priority
                  />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-500 pt-1 gap-2">
                  <span>Official CredSettle Cardholder Protection Framework • RBI Master Direction Compliant</span>
                  <a
                    href="/images/infographics/unsolicited-credit-card-upgrade-limit-increase-rbi-rule.jpg"
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

            {/* SECTION 6 */}
            <section id="step-by-step-sop" className="scroll-target space-y-6">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Standard Operating Procedure</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. Step-by-Step SOP: Claiming Your 2x Penalty
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If a bank upgraded your card or billed you without explicit consent, follow these six steps. Keep every email and statement as proof.
              </p>

              <div className="space-y-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">
                      1
                    </span>
                    Stage 1: Do Not Activate or Use the Upgraded Card
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Never activate an unsolicited card, generate a PIN, or make a small test purchase. Using the card gives the bank an excuse to claim implied consent.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">
                      2
                    </span>
                    Stage 2: Demand Proof of Explicit Consent in Writing
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Email the bank customer care and ask for the exact date, time, IP address, or OTP log showing your explicit consent. Under RBI rules, the burden of proof lies on the bank.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">
                      3
                    </span>
                    Stage 3: Cite RBI Master Direction 2022 &amp; Claim 2x Penalty
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Quote RBI Circular RBI/2022-23/92 and Paragraph 11(b). Demand immediate reversal of all billed fees with GST, plus payment of the mandatory 2x penalty to your account.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">
                      4
                    </span>
                    Stage 4: Escalate to Bank GRO and Principal Nodal Officer
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If frontline support ignores your claim or offers only a fee waiver, escalate to the Grievance Redressal Officer (GRO) and Principal Nodal Officer (PNO). Do not settle for a simple fee waiver when 2x penalty is due.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">
                      5
                    </span>
                    Stage 5: File an RBI Integrated Ombudsman Complaint
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If the bank fails to resolve your complaint within 30 days, file an online complaint at cms.rbi.org.in. Attach your billing statement, written dispute, and the bank reply.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">
                      6
                    </span>
                    Stage 6: Audit Your CIBIL Report and Confirm Payout
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Verify that the 2x penalty is credited and the unwanted card is closed. Check your CIBIL, Experian, Equifax, and CRIF reports to ensure all late payment marks are deleted.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7 */}
            <section id="borrower-rights" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>Regulatory &amp; Judicial Remedies</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. Borrower Rights: Ombudsman &amp; Consumer Court
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Your rights do not stop at the 2x fee penalty. Both the RBI Ombudsman and Consumer Commissions can award extra damages when banks harass you or damage your credit score.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                    <Landmark className="w-4 h-4" />
                    <span>RBI Integrated Ombudsman Scheme, 2021</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under RB-IOS 2021, the Ombudsman can award compensation for loss of time, expenses, harassment, and mental anguish, in addition to enforcing the 2x penalty.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                    <Gavel className="w-4 h-4" />
                    <span>Consumer Protection Act, 2019</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Billing for unsolicited products is an unfair trade practice and deficiency in service under Section 2(11) and Section 2(47). Consumer Commissions regularly award damages for CIBIL harm.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-purple-700 font-bold text-sm">
                    <Scale className="w-4 h-4" />
                    <span>Credit Bureau Rectification (CICRA)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under the Credit Information Companies (Regulation) Act, 2005, banks cannot report false defaults from unsolicited cards. They must clear wrong DPD marks within 30 days.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Protection Against Recovery Calls</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Banks cannot send recovery agents for disputed unsolicited card fees. If agents threaten you, invoke{' '}
                    <Link href="/stop-recovery-agent-harassment" className="text-[#1886ff] font-semibold hover:underline">
                      RBI anti-harassment rules
                    </Link>{' '}
                    immediately.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 8 */}
            <section id="escalation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Escalation Protocol</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. 3-Tier Escalation Matrix: Bank to Ombudsman
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Follow this official three-tier escalation ladder if your bank refuses to reverse charges or pay the 2x penalty.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Escalation Tier</th>
                      <th className="p-3">Designated Authority</th>
                      <th className="p-3">Turnaround Time</th>
                      <th className="p-3">Scope of Intervention &amp; Relief</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 1: GRO</td>
                      <td className="p-3">Bank Grievance Redressal Officer</td>
                      <td className="p-3 font-mono">7 to 10 Working Days</td>
                      <td className="p-3">Audits consent logs, stops billing, and initiates fee reversal.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 2: PNO</td>
                      <td className="p-3">Principal Nodal Officer (Head Office)</td>
                      <td className="p-3 font-mono">14 to 21 Working Days</td>
                      <td className="p-3">Approves mandatory 2x penalty payout and orders CIBIL deletion.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Level 3: RBI Ombudsman</td>
                      <td className="p-3">Reserve Bank Integrated Ombudsman</td>
                      <td className="p-3 font-mono">30 Days Post-Complaint</td>
                      <td className="p-3">Passes binding awards on cms.rbi.org.in for 2x penalty and harassment damages.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 9 */}
            <section id="procedural-timeline" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Calendar className="w-4 h-4 text-[#1886ff]" />
                <span>Procedural Milestones</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Procedural Milestones: Dispute to 2x Payout
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Tracking each milestone helps you build a strong paper trail and prevents the bank from dragging out your dispute.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Milestone Window</th>
                      <th className="p-3">Regulatory Phase</th>
                      <th className="p-3">Lender Action Required</th>
                      <th className="p-3">Cardholder Action Protocol</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 1</td>
                      <td className="p-3 font-mono text-[11px]">Dispute Filing</td>
                      <td className="p-3">Registers complaint ticket and freezes late fee accrual.</td>
                      <td className="p-3">Send written email demanding OTP consent proof and 2x penalty.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 7 to 15</td>
                      <td className="p-3 font-mono text-[11px]">Consent Audit</td>
                      <td className="p-3">Checks recorded call logs, OTP records, and card dispatch data.</td>
                      <td className="p-3">Escalate to PNO if bank offers only fee reversal without 2x penalty.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 30</td>
                      <td className="p-3 font-mono text-[11px]">Statutory Deadline</td>
                      <td className="p-3">Must resolve complaint, reverse fees, and pay 2x compensation.</td>
                      <td className="p-3">File formal complaint on cms.rbi.org.in if unresolved after 30 days.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Day 31 to 60</td>
                      <td className="p-3 font-mono text-[11px] text-[#1886ff] font-bold">Ombudsman Review</td>
                      <td className="p-3">Submits compliance report or faces binding Ombudsman award.</td>
                      <td className="p-3 font-bold text-slate-900">Verify 2x credit in account and confirm CIBIL tradeline cleanup.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10 */}
            <section id="specialized-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>Specialized Real-World Cases</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                10. Common Bank Excuses &amp; CIBIL Fix Scenarios
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Banks often use standard excuses to avoid paying the 2x penalty. Here is how RBI regulations handle these real-world situations.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-[#1886ff]" />
                    &quot;You Did Not Reply to Our Opt-Out SMS&quot;
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Banks sometimes send an SMS saying your card will be upgraded unless you reply NO. Under RBI rules, opt-out consent is invalid. Only explicit opt-in consent via OTP or signature counts.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Scale className="w-4 h-4 text-emerald-600" />
                    &quot;We Discontinued Your Old Card Variant&quot;
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Even if a bank retires an old card, it cannot force you into a paid card with higher fees without consent. You have the right to decline the paid upgrade and close the card at zero cost.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-indigo-600" />
                    Unpaid Annual Fee Ruined Your CIBIL Score
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If you ignored an unsolicited card bill and the bank reported a 90-day default to CIBIL, demand full tradeline deletion. Banks must wipe out wrongful DPD history under CICRA rules.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-amber-600" />
                    Genuine Dues Mixed With Wrong Upgrade Fees
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If you have genuine card spending alongside wrongful upgrade charges, dispute the upgrade fees separately. For genuine financial hardship, explore{' '}
                    <Link href="/services/credit-card-settlement" className="text-[#1886ff] font-semibold hover:underline">
                      legal credit card settlement
                    </Link>{' '}
                    options.
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
                Frequently Asked Questions: Unsolicited Upgrades
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Clear, verified answers on unsolicited credit card upgrades, unilateral limit hikes, the 2x RBI penalty, and CIBIL score protection.
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
                  <strong>Reserve Bank of India Master Direction:</strong> RBI/2022-23/92, DoR.AUT.REC.No.27/24.01.041/2022-23, Master Direction on Credit Card and Debit Card Issuance and Conduct Directions, 2022 (Chapter II, Paragraph 6, and Paragraph 11(b)).
                </li>
                <li>
                  <strong>Reserve Bank Integrated Ombudsman Scheme, 2021:</strong> Clause 10 and Clause 15, Deficiency in Service and Compensation Adjudication.
                </li>
                <li>
                  <strong>Consumer Protection Act, 2019:</strong> Section 2(11) (Deficiency of Service) and Section 2(47) (Unfair Trade Practice).
                </li>
                <li>
                  <strong>Credit Information Companies (Regulation) Act, 2005 (CICRA):</strong> Section 21(3), Right to Accurate Credit Information and Dispute Rectification.
                </li>
              </ul>

              {/* Outbound Authority Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">
                  Verified Government &amp; Regulatory Portals:
                </span>
                <div className="flex flex-wrap gap-2">
                  <a
                    href="https://www.rbi.org.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1"
                  >
                    <span>Reserve Bank of India</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a
                    href="https://cms.rbi.org.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1"
                  >
                    <span>RBI Integrated Ombudsman Portal</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a
                    href="https://www.indiacode.nic.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1"
                  >
                    <span>India Code Statutory Repository</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a
                    href="http://ncdrc.nic.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1"
                  >
                    <span>National Consumer Disputes Redressal Commission</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a
                    href="https://consumerhelpline.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1"
                  >
                    <span>National Consumer Helpline</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Internal Topic Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">
                  Explore Related CredSettle Guides:
                </span>
                <div className="flex flex-wrap gap-2">
                  <Link
                    href="/credit-card-overlimit-fee-without-consent-rbi-refund"
                    className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200"
                  >
                    Overlimit Fee Refund Rule
                  </Link>
                  <Link
                    href="/services/credit-card-settlement"
                    className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200"
                  >
                    Credit Card Settlement
                  </Link>
                  <Link
                    href="/add-on-supplementary-credit-card-default-liability"
                    className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200"
                  >
                    Add-On Card Liability
                  </Link>
                  <Link
                    href="/rupay-credit-card-upi-debt-default-settlement-rules"
                    className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200"
                  >
                    RuPay UPI Card Rules
                  </Link>
                  <Link
                    href="/credit-card-reward-points-forfeiture-overdue-rules"
                    className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200"
                  >
                    Reward Points Forfeiture
                  </Link>
                  <Link
                    href="/credit-card-atm-cash-withdrawal-interest-trap-settlement"
                    className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200"
                  >
                    Cash Advance Interest Trap
                  </Link>
                  <Link
                    href="/jumbo-insta-loan-on-credit-card-default-settlement"
                    className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200"
                  >
                    Jumbo Loan on Card Rules
                  </Link>
                  <Link
                    href="/stop-recovery-agent-harassment"
                    className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200"
                  >
                    Stop Recovery Harassment
                  </Link>
                  <Link
                    href="/rbi-rules-for-recovery-agents"
                    className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200"
                  >
                    RBI Recovery Guidelines
                  </Link>
                  <Link
                    href="/rbi-5000-per-day-delay-compensation-property-documents"
                    className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200"
                  >
                    RBI 5000/Day Property Rule
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
                Specialist in banking compliance, credit card dispute defense, RBI statutory guidelines, and debt settlement resolutions with extensive experience holding lenders accountable.
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
                  STATUTORY PENALTY SUPPORT
                </span>
                <p className="text-lg md:text-xl font-bold text-white leading-snug">
                  Billed for an Unsolicited Card Upgrade?
                </p>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our banking advocates issue formal notices under RBI Master Direction 2022, compel 100% fee reversal, recover your 2x double penalty, and clean up CIBIL errors.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Claim 2x RBI Penalty Now
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
                  <span>
                    <strong>100% RBI Rule Enforcement:</strong> Formal notice citing Paragraph 11(b).
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>2x Penalty Recovery:</strong> Full fee reversal plus double compensation.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>CIBIL Error Cleanup:</strong> Removal of wrongful DPD &amp; late marks.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Ombudsman Representation:</strong> End-to-end CMS portal filing.
                  </span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">Related Legal Guides</p>
              <div className="space-y-2.5">
                <Link
                  href="/credit-card-overlimit-fee-without-consent-rbi-refund"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Overlimit Fee Without Consent Refund
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">RBI refund &amp; waiver rules &rarr;</span>
                </Link>

                <Link
                  href="/services/credit-card-settlement"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Credit Card Debt Settlement
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Legal OTS &amp; relief options &rarr;</span>
                </Link>

                <Link
                  href="/rbi-5000-per-day-delay-compensation-property-documents"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    RBI 5000/Day Property Document Rule
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Statutory bank delay penalty &rarr;</span>
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
