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
  Smartphone,
  Gavel,
  Landmark,
  Calendar,
  ShieldAlert
} from 'lucide-react';

export default function SimSwapFraudZeroLiabilityClient() {
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
    { id: 'rbi-zero-liability', label: '1. RBI Zero Liability Circular' },
    { id: 'how-sim-swap-works', label: '2. How SIM Swap Phishing Works' },
    { id: 'liability-matrix', label: '3. Liability Matrix: 0-3 vs 4-7 Days' },
    { id: 'burden-of-proof', label: '4. Burden of Proof & Shadow Credit' },
    { id: 'step-by-step-sop', label: '5. Step-by-Step Dispute SOP' },
    { id: 'court-rulings', label: '6. Supreme Court & HC Rulings' },
    { id: 'cibil-and-harassment', label: '7. CIBIL & Recovery Ban Rules' },
    { id: 'escalation-matrix', label: '8. 3-Tier Escalation Matrix' },
    { id: 'procedural-timeline', label: '9. Dispute Timeline Milestones' },
    { id: 'special-cases', label: '10. Telecom & Phishing Edge Cases' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Sources' }
  ];

  const faqs = [
    {
      q: 'Do I have to pay credit card bills caused by a SIM swap fraud?',
      a: 'No. Under RBI Circular DBR.No.Leg.BC.78/09.07.005/2017-18, you have zero liability if the fraud occurred due to a third-party breach and you report it within 3 working days of receiving the bank alert.'
    },
    {
      q: 'What is the 3-day reporting rule under RBI Zero Liability guidelines?',
      a: 'If you notify your bank within 3 working days of receiving the transaction alert, your financial loss is zero for third-party breaches. The clock starts when you receive the alert, not when the fraud happens.'
    },
    {
      q: 'What happens if I report SIM swap fraud between 4 and 7 working days?',
      a: 'For credit cards with a limit up to Rs 5 lakh, your maximum liability is capped at Rs 10,000 or the transaction value, whichever is lower. For limits above Rs 5 lakh, the cap is Rs 25,000.'
    },
    {
      q: 'How quickly must the bank give shadow reversal for fraud credit card charges?',
      a: 'The bank must credit a shadow reversal or provisional credit to your card account within 10 working days from the date you report the unauthorized transaction. It must finish the full probe within 90 days.'
    },
    {
      q: 'Can a bank blame me just because an OTP was used during SIM swap fraud?',
      a: 'No. Under RBI rules and High Court rulings, the burden of proving customer negligence lies entirely on the bank. When a fraudster clones or swaps your SIM, you did not share the OTP willingly.'
    },
    {
      q: 'Can the bank report disputed fraud credit card bills to CIBIL?',
      a: 'No. Under the RBI Master Direction on Credit Cards, issuers cannot report a disputed or fraudulent amount as overdue or default to CIBIL or other credit bureaus while the investigation is pending.'
    },
    {
      q: 'Can recovery agents call me for a disputed SIM swap credit card bill?',
      a: 'No. Banks cannot use recovery agents to harass cardholders over disputed fraud transactions. Any coercive recovery call during an active fraud dispute violates RBI Fair Practices rules and can be escalated to the Ombudsman.'
    },
    {
      q: 'Should I pay the undisputed part of my credit card bill during a fraud probe?',
      a: 'Yes. You should pay your genuine regular purchases on time so that undisputed dues do not trigger late fees or a valid CIBIL default. You do not have to pay the disputed fraud amount.'
    },
    {
      q: 'Can I hold my telecom operator liable for an illegal SIM swap?',
      a: 'Yes. In Basaveshwara Pattana Sahakara Bank v. BSNL (2026), the Karnataka High Court held that telecom providers are liable for civil damages if they issue duplicate SIM cards without proper verification.'
    },
    {
      q: 'How does CredSettle help victims of SIM swap credit card fraud?',
      a: 'CredSettle drafts formal RBI Zero Liability notices, stops illegal recovery calls, challenges wrongful CIBIL entries, files escalations with Principal Nodal Officers and the RBI Ombudsman, and protects you from paying fraudulent debt.'
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
            <span>RBI Zero Liability Protection &amp; Cyber Fraud Defense</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Stop Recovery on Fraud Credit Card Bills Under RBI Law
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            Did fraudsters drain your credit card through a SIM swap or phishing attack? Learn how RBI Zero Liability rules protect you from paying fake debt, stop recovery calls, and keep your CIBIL score safe.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Dispute Fraud Card Debt Now</span>
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
                  <span>RBI Cardholder Shield</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Protected under RBI Circular DBR.No.Leg.BC.78/09.07.005/2017-18 and RBI Credit Card Directions.
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
                <span>EXECUTIVE BRIEF: RBI ZERO LIABILITY FOR SIM SWAP FRAUD</span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Zero Liability Within 3 Working Days:</strong> If you report a SIM swap or phishing fraud within 3 working days of getting the alert, your liability is zero.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Bank Holds the Burden of Proof:</strong> The bank cannot reject your claim just because an OTP was used. It must prove you willingly shared credentials.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">10-Day Shadow Reversal Rule:</strong> Your bank must credit a provisional reversal for the disputed fraud amount within 10 working days of your complaint.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">No CIBIL Damage Allowed:</strong> Banks cannot report disputed fraud charges as overdue or default to CIBIL while the probe is open.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Zero Post-Report Loss:</strong> Any unauthorized transaction that happens after you notify the bank is 100% the bank&apos;s responsibility.
                  </span>
                </li>
              </ul>
            </div>

            {/* SECTION 1: RBI Zero Liability Circular */}
            <section id="rbi-zero-liability" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Regulatory Framework &amp; Central Bank Protection</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. RBI Zero Liability Circular for SIM Swap Fraud
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Many cardholders panic when they see massive unauthorized charges after losing mobile network signal. Banks often send automated bills and demand payment right away.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                However, Indian banking law gives strong protection to fraud victims. On July 6, 2017, the Reserve Bank of India issued Circular DBR.No.Leg.BC.78/09.07.005/2017-18. This binding rule limits customer liability in unauthorized electronic banking transactions.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The circular covers all commercial banks, credit card issuers, and payment banks in India. It applies directly to online card-not-present thefts, phishing attacks, and SIM swap scams.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under this rule, you are not responsible for fraud caused by a bank system breach or a third-party failure. Once you report the theft on time, the bank cannot force you to pay fake debt.
              </p>
            </section>

            {/* SECTION 2: How SIM Swap Phishing Compromises Credit Cards */}
            <section id="how-sim-swap-works" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Smartphone className="w-4 h-4 text-[#1886ff]" />
                <span>Anatomy of the Scam &amp; Third-Party Breaches</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. How SIM Swap Phishing Compromises Credit Cards
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                In a SIM swap attack, scammers trick your telecom provider into issuing a duplicate SIM for your phone number. They often use fake ID papers or weak KYC checks at a telecom store.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Once the new SIM activates, your real phone loses signal and shows &quot;No Service.&quot; All bank SMS alerts and One-Time Passwords (OTPs) then go straight to the fraudster&apos;s handset.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Scammers combine this stolen SIM access with card details leaked from phishing sites or merchant data breaches. Within minutes, they wipe out your credit card limit across wallets and online stores.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Legally, a telecom company issuing a duplicate SIM without your consent is a third-party breach. Neither you nor your bank caused it, which triggers RBI Zero Liability protection when reported fast.
              </p>
            </section>

            {/* SECTION 3: Liability Matrix */}
            <section id="liability-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Clock className="w-4 h-4 text-[#1886ff]" />
                <span>Reporting Deadlines &amp; Maximum Loss Caps</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Liability Matrix: 0 to 3 Days vs Late Reporting
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Your financial liability depends on two clear factors. First, whose fault caused the breach. Second, how many working days you took to inform the bank after receiving the transaction alert.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Note that during a SIM swap, you may not receive SMS alerts at all because your SIM is dead. In such cases, the reporting clock starts only when you receive an email alert or see your statement.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white shadow-xs">
                <div className="bg-slate-900 text-white p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <ShieldAlert className="w-4 h-4 text-[#1886ff]" />
                    <span className="font-bold text-sm">RBI Credit Card Fraud Liability Matrix</span>
                  </div>
                  <span className="text-xs text-blue-300 font-mono">Circular July 6, 2017</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                    <thead>
                      <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-semibold">
                        <th className="p-3">Scenario / Reporting Window</th>
                        <th className="p-3">Credit Limit up to ₹5 Lakh</th>
                        <th className="p-3">Credit Limit Above ₹5 Lakh</th>
                        <th className="p-3">Legal Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200/80 text-slate-600">
                      <tr className="bg-emerald-50/40">
                        <td className="p-3 font-medium text-slate-900">Bank Fault or System Breach</td>
                        <td className="p-3 font-bold text-emerald-700">₹0 (Zero Liability)</td>
                        <td className="p-3 font-bold text-emerald-700">₹0 (Zero Liability)</td>
                        <td className="p-3 text-emerald-700 font-semibold">100% Bank Bears Loss</td>
                      </tr>
                      <tr className="bg-emerald-50/40">
                        <td className="p-3 font-medium text-slate-900">Third-Party Breach (0 to 3 Working Days)</td>
                        <td className="p-3 font-bold text-emerald-700">₹0 (Zero Liability)</td>
                        <td className="p-3 font-bold text-emerald-700">₹0 (Zero Liability)</td>
                        <td className="p-3 text-emerald-700 font-semibold">Full Protection Under RBI Rule</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Third-Party Breach (4 to 7 Working Days)</td>
                        <td className="p-3 font-mono text-amber-700 font-bold">Max ₹10,000</td>
                        <td className="p-3 font-mono text-amber-700 font-bold">Max ₹25,000</td>
                        <td className="p-3 text-amber-700 font-semibold">Capped Limited Liability</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Reported Beyond 7 Working Days</td>
                        <td className="p-3 font-mono text-rose-600">Board Policy Applies</td>
                        <td className="p-3 font-mono text-rose-600">Board Policy Applies</td>
                        <td className="p-3 text-rose-600 font-semibold">Dispute Still Allowed if Bank Negligent</td>
                      </tr>
                      <tr className="bg-blue-50/50">
                        <td className="p-3 font-bold text-slate-900">Transactions After Reporting Fraud</td>
                        <td className="p-3 font-bold text-[#1886ff]">₹0 (Zero Liability)</td>
                        <td className="p-3 font-bold text-[#1886ff]">₹0 (Zero Liability)</td>
                        <td className="p-3 font-bold text-[#1886ff]">100% Bank Responsibility</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* SECTION 4: Burden of Proof & Shadow Reversal */}
            <section id="burden-of-proof" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <AlertTriangle className="w-4 h-4 text-[#1886ff]" />
                <span>Burden of Proof &amp; 10-Day Reversal Mandate</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. Burden of Proof and Shadow Reversal Timelines
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Banks frequently reject fraud claims with a standard excuse. They write that &quot;the transaction was validated with an OTP, so the customer is liable.&quot; This excuse violates RBI law.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Paragraph 12 of the RBI July 2017 circular is crystal clear. The burden of proving customer liability lies squarely on the bank. The bank must prove with hard evidence that you shared your PIN, CVV, or OTP willingly.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                During a SIM swap, the telecom tower logs prove that your SIM changed devices without your consent. Therefore, an OTP arriving on a cloned SIM does not prove customer negligence.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Once you report the fraud, the bank must credit a shadow reversal (provisional credit) within 10 working days. It must complete its investigation within 90 days. If the bank misses the 90-day limit, the reversal becomes permanent.
              </p>
            </section>

            {/* SECTION 5: Step-by-Step SOP */}
            <section id="step-by-step-sop" className="scroll-target space-y-6">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Standard Operating Procedure</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. Step-by-Step SOP: Dispute Fraud Card Charges
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Speed and written proof are critical after a SIM swap attack. Follow these six steps immediately to lock in your RBI Zero Liability protection.
              </p>

              <div className="space-y-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">1</span>
                    Stage 1: Freeze Your Credit Card &amp; Compromised SIM
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Call your bank&apos;s toll-free number from another phone to block your credit card at once. Also contact your telecom provider to suspend the swapped SIM and record the exact time your network dropped.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">2</span>
                    Stage 2: Send Written Notice Within 3 Working Days
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Email your bank&apos;s fraud desk and Nodal Officer citing RBI Circular DBR.No.Leg.BC.78/09.07.005/2017-18. List every unauthorized transaction and demand a 10-day shadow reversal. Save the complaint ticket number.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">3</span>
                    Stage 3: File National Cyber Crime Complaint &amp; FIR
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Report the theft on the official portal at cybercrime.gov.in or dial 1930 immediately. File a police FIR at your local station or cyber cell and attach the FIR copy to your bank dispute.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">4</span>
                    Stage 4: Obtain Telecom SIM Replacement Logs
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Ask your telecom operator in writing for the date, time, and store location where the duplicate SIM was issued. This proves you were not in possession of the active SIM when OTPs were sent.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">5</span>
                    Stage 5: Pay Only Undisputed Regular Spends
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Separate your genuine purchases from the fake charges on your statement. Pay your genuine dues on time while formally refusing to pay the disputed fraud principal or interest on it.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">6</span>
                    Stage 6: Escalate to RBI Ombudsman if Rejected
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If the bank denies your claim or fails to reverse charges within 30 days, file a complaint on cms.rbi.org.in. Attach your FIR, telecom proof, and dated bank emails.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 6: Landmark Supreme Court & High Court Rulings */}
            <section id="court-rulings" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>Judicial Precedents &amp; Binding Case Law</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. Landmark Supreme Court &amp; High Court Rulings
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Indian courts have repeatedly enforced the RBI Zero Liability rule against banks. Judges have rejected attempts by banks to blame victims when fraudsters use SIM swaps or malware.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                    <Gavel className="w-4 h-4" />
                    <span>SC: SBI v. Pallabh Bhowmick (2025)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The Supreme Court held that banks have better technology to detect cyber fraud. When a non-negligent customer reports unauthorized transactions promptly, the bank must bear the loss under RBI rules.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                    <Building2 className="w-4 h-4" />
                    <span>Bombay HC: PNP Polytex v. Bank of Baroda (2026)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The Bombay High Court ordered a bank to refund ₹1.24 crore with 6% interest after a SIM swap fraud. The court ruled that immediate reporting guarantees Zero Liability unless the bank proves customer fault.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-purple-700 font-bold text-sm">
                    <Scale className="w-4 h-4" />
                    <span>Bombay HC: Subodh Korde v. HDFC Bank (2026)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    After scammers stole ₹38.04 lakh within 41 minutes of a SIM swap, the High Court ordered a full refund. It ruled that banks cannot use fine-print terms to override RBI Zero Liability protections.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Kerala HC: Tony Enterprises v. RBI (2019)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The Kerala High Court ruled that OTP theft via duplicate SIM cards is a third-party breach. Banks cannot recover money from innocent customers and must instead pursue the actual fraudsters.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: CIBIL Protection & Ban on Recovery Harassment */}
            <section id="cibil-and-harassment" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <ShieldCheck className="w-4 h-4 text-[#1886ff]" />
                <span>Credit Bureau Rules &amp; Fair Practices Code</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. CIBIL Protection &amp; Ban on Recovery Harassment
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Many fraud victims pay fake credit card bills out of fear. They worry that recovery agents will visit their home or that their CIBIL score will crash.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under the RBI Master Direction on Credit Card and Debit Card Issuance and Conduct (2022), card issuers cannot report a disputed transaction as a default to CIBIL, Experian, Equifax, or CRIF High Mark while an investigation is pending.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Furthermore, under RBI Credit Information Reporting rules, if a bank fails to fix wrongful CIBIL data within 30 days of your complaint (21 days for the bank plus 9 days for the bureau), you can claim ₹100 per day in compensation.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Banks are also barred from sending recovery agents for disputed fraud balances. If agents threaten you or call odd hours, you can file a formal complaint under the{' '}
                <Link href="/rbi-rules-for-recovery-agents" className="text-[#1886ff] font-semibold hover:underline">
                  RBI recovery agent guidelines
                </Link>{' '}
                and demand immediate cessation.
              </p>
            </section>

            {/* SECTION 8: 3-Tier Escalation Matrix */}
            <section id="escalation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Escalation Protocol</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. 3-Tier Escalation Matrix: Bank GRO to Ombudsman
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If your card issuer ignores your zero liability claim or keeps billing you interest on stolen funds, escalate through this three-tier RBI redressal system.
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
                      <td className="p-3 font-bold text-slate-900">Level 1: Fraud Desk &amp; GRO</td>
                      <td className="p-3">Bank Grievance Redressal Officer</td>
                      <td className="p-3 font-mono">10 Working Days</td>
                      <td className="p-3">Logs fraud dispute, blocks card, and issues 10-day shadow reversal.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 2: PNO</td>
                      <td className="p-3">Principal Nodal Officer (Head Office)</td>
                      <td className="p-3 font-mono">15 to 30 Days</td>
                      <td className="p-3">Audits IP logs, telecom evidence, and removes wrongful CIBIL default tags.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Level 3: RBI Ombudsman</td>
                      <td className="p-3">Reserve Bank Integrated Ombudsman</td>
                      <td className="p-3 font-mono">30 Days Post-Complaint</td>
                      <td className="p-3">Issues binding order on cms.rbi.org.in to waive fraud debt and award compensation.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 9: Fraud Dispute Milestones */}
            <section id="procedural-timeline" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Calendar className="w-4 h-4 text-[#1886ff]" />
                <span>Procedural Milestones</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Fraud Dispute Milestones: Day 0 to Resolution
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Tracking each regulatory milestone ensures the bank does not stall your case or silently push your card into Non-Performing Asset (NPA) status.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Milestone Window</th>
                      <th className="p-3">Regulatory Phase</th>
                      <th className="p-3">Bank Action Required</th>
                      <th className="p-3">Cardholder Action Protocol</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 0 to Day 3</td>
                      <td className="p-3 font-mono text-[11px]">Zero Liability Window</td>
                      <td className="p-3">Blocks card immediately and registers dispute ticket.</td>
                      <td className="p-3">Send email notice, block SIM, and file cybercrime.gov.in complaint.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Within 10 Working Days</td>
                      <td className="p-3 font-mono text-[11px]">Shadow Reversal</td>
                      <td className="p-3">Credits provisional shadow reversal to card account.</td>
                      <td className="p-3">Verify statement shows disputed amount paused without interest.</td>
                    </tr>
                    <tr className="bg-amber-50/50">
                      <td className="p-3 font-bold text-slate-900">Day 30</td>
                      <td className="p-3 font-mono text-[11px] text-amber-700 font-bold">Ombudsman Eligibility</td>
                      <td className="p-3">Must respond to PNO escalation or face Ombudsman review.</td>
                      <td className="p-3 font-bold text-amber-800">Escalate to cms.rbi.org.in if shadow credit is missing or rejected.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Day 90</td>
                      <td className="p-3 font-mono text-[11px] text-[#1886ff] font-bold">Mandatory Closure</td>
                      <td className="p-3">Must finish probe and prove customer negligence if rejecting.</td>
                      <td className="p-3 font-bold text-slate-900">Demand permanent reversal if bank fails to close probe in 90 days.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: Special Cases */}
            <section id="special-cases" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>Specialized Fraud Scenarios</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                10. Special Cases: Telecom Faults &amp; Phishing Links
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Not every fraud looks identical. Here is how Indian courts and RBI rules treat common edge cases involving telecom negligence, phishing links, and old fraud debts.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Smartphone className="w-4 h-4 text-[#1886ff]" />
                    Telecom Operator Negligence (BSNL Ruling)
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    In Basaveshwara Pattana Sahakara Bank v. BSNL (2026), the Karnataka High Court held telecom firms liable for civil damages when they issue swapped SIMs without strict KYC verification.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-600" />
                    Clicking a Phishing Link vs Sharing OTP
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Banks often claim clicking a fake KYC link counts as negligence. However, if malware or a SIM swap stole your OTP without you typing it, you can still contest liability before the Ombudsman or Consumer Court.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Scale className="w-4 h-4 text-emerald-600" />
                    Consumer Court Deficiency in Service
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under the Consumer Protection Act, 2019, refusing to reverse unauthorized charges without proving gross negligence is a deficiency in service. NCDRC routinely awards refunds plus mental agony damages.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-indigo-600" />
                    Settling Mixed Genuine &amp; Disputed Dues
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If your account also has genuine unpaid bills alongside fraud charges, CredSettle can help separate the disputed fraud claim while negotiating a lawful{' '}
                    <Link href="/services/credit-card-settlement" className="text-[#1886ff] font-semibold hover:underline">
                      credit card settlement
                    </Link>{' '}
                    for valid dues.
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
                Frequently Asked Questions: SIM Swap Card Fraud
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Clear answers to common questions about RBI zero liability, 10-day shadow reversals, CIBIL protection, and stopping recovery harassment after SIM swap fraud.
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
                  <strong>Reserve Bank of India Circular:</strong> RBI/2017-18/15, DBR.No.Leg.BC.78/09.07.005/2017-18 (July 6, 2017), Customer Protection - Limiting Liability of Customers in Unauthorised Electronic Banking Transactions.
                </li>
                <li>
                  <strong>RBI Master Direction:</strong> Credit Card and Debit Card - Issuance and Conduct Directions, 2022 (Disputed Transactions and CIBIL Reporting Prohibition).
                </li>
                <li>
                  <strong>Reserve Bank - Integrated Ombudsman Scheme, 2021:</strong> Binding Adjudication for Unauthorised Electronic Transactions and Credit Card Billing Disputes.
                </li>
                <li>
                  <strong>Consumer Protection Act, 2019:</strong> Section 2(11) (Deficiency of Service) and Section 39 (Refund and Compensation Orders).
                </li>
                <li>
                  <strong>Judicial Precedents:</strong> State Bank of India v. Pallabh Bhowmick (SC 2025), PNP Polytex Pvt. Ltd. v. Bank of Baroda (Bombay HC 2026), Subodh Korde v. HDFC Bank (Bombay HC 2026), Tony Enterprises v. RBI (Kerala HC 2019), and Basaveshwara Pattana Sahakara Bank v. BSNL (Karnataka HC 2026).
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
                  <a href="https://cybercrime.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>National Cyber Crime Portal</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.indiacode.nic.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>India Code Statutory Repository</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="http://ncdrc.nic.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>National Consumer Commission</span>
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
                  <Link href="/credit-card-pending-chargeback-rbi-shadow-credit-rules" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Pending Chargeback Shadow Credit
                  </Link>
                  <Link href="/stop-recovery-agent-harassment" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Stop Recovery Harassment
                  </Link>
                  <Link href="/rbi-rules-for-recovery-agents" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    RBI Recovery Guidelines
                  </Link>
                  <Link href="/services/credit-card-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Credit Card Settlement
                  </Link>
                  <Link href="/services/anti-harassment" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Anti-Harassment Protection
                  </Link>
                  <Link href="/credit-card-overlimit-fee-without-consent-rbi-refund" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Overlimit Fee Refund
                  </Link>
                  <Link href="/bank-increased-credit-card-apr-interest-rbi-opt-out" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Credit Card APR Opt-Out
                  </Link>
                  <Link href="/bank-sent-legal-notice-for-loan-what-to-do" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Bank Legal Notice Reply
                  </Link>
                  <Link href="/get-noc-after-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    No Dues Certificate Guide
                  </Link>
                  <Link href="/rbi-5000-per-day-delay-compensation-property-documents" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    RBI 5000/Day Penalty Rule
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
                Specialist in banking compliance, credit card fraud defense, RBI statutory guidelines, and debt resolution with extensive experience holding lenders accountable under central bank mandates.
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
                  FRAUD DISPUTE SUPPORT
                </span>
                <p className="text-lg md:text-xl font-bold text-white leading-snug">
                  Bank Demanding Payment for Fraud Charges?
                </p>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our legal team drafts RBI Zero Liability notices, stops recovery calls, protects your CIBIL score, and escalates rejected fraud claims to the RBI Ombudsman.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Get Fraud Debt Relief Now
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
                  <span><strong>RBI Zero Liability Enforcement:</strong> Formal notices citing July 2017 circular.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Shadow Reversal Follow-Up:</strong> Enforces 10-day provisional credit rules.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>CIBIL Dispute Protection:</strong> Blocks wrongful default reporting.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Ombudsman Representation:</strong> Complete cms.rbi.org.in escalation.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">Related Legal Guides</p>
              <div className="space-y-2.5">
                <Link
                  href="/credit-card-pending-chargeback-rbi-shadow-credit-rules"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Pending Chargeback Shadow Credit
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Disputed bill protection &rarr;</span>
                </Link>

                <Link
                  href="/stop-recovery-agent-harassment"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Stop Recovery Agent Harassment
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">RBI Fair Practices defense &rarr;</span>
                </Link>

                <Link
                  href="/services/credit-card-settlement"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Credit Card Debt Settlement
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Legal debt resolution &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
