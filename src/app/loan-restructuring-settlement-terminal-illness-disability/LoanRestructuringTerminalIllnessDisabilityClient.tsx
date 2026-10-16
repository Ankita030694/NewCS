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
  HeartPulse,
  Activity,
  UserX
} from 'lucide-react';

export default function LoanRestructuringTerminalIllnessDisabilityClient() {
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
    { id: 'quick-crux', label: 'Executive Brief & Medical Relief' },
    { id: 'regulatory-framework', label: '1. Medical Crisis: RBI Regulatory Rules' },
    { id: 'financial-comparison', label: '2. Restructuring vs Compassionate OTS' },
    { id: 'resolution-matrix', label: '3. Medical Hardship Relief Matrix' },
    { id: 'credit-insurance-shield', label: '4. Credit Protection Insurance Claims' },
    { id: 'visual-blueprint', label: '5. Visual Blueprint Infographic' },
    { id: 'step-by-step-sop', label: '6. 6-Stage Medical Settlement Protocol' },
    { id: 'statutory-protections', label: '7. Statutory Protections & CPC Exemptions' },
    { id: 'escalation-matrix', label: '8. 3-Tier Grievance & Redressal Matrix' },
    { id: 'procedural-timeline', label: '9. Procedural Milestones & Timeline' },
    { id: 'specialized-scenarios', label: '10. Specialized Scenarios: Cancer & Trauma' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
    {
      q: 'Can banks forgive or settle loans for terminally ill borrowers in India?',
      a: 'Yes. Under RBI rules and board policies, banks can grant hardship settlements. In severe cases of terminal illness or permanent job loss, banks can waive most interest and part of the principal. In rare cases, banks write off the full balance.'
    },
    {
      q: 'What is the difference between loan restructuring and loan settlement for medical hardship?',
      a: 'Loan restructuring gives you more time to pay. It can extend your loan tenor or give an EMI holiday for temporary illness. Loan settlement permanently closes your loan for a smaller, one-time payment. Settlement is best for permanent disability or terminal illness.'
    },
    {
      q: 'How does loan protection or credit shield insurance work during critical illness or disability?',
      a: 'Many loans come with credit shield insurance. The insurer must pay off the loan balance if you suffer a critical illness or total disability. You must file a claim with medical proof, and the bank must help you submit it.'
    },
    {
      q: 'Can recovery agents harass or visit a bedridden or hospitalized patient?',
      a: 'No. RBI rules strictly ban agents from threatening borrowers, using bad words, or visiting hospitals. Harassing a sick person is a crime under Section 351 of Bharatiya Nyaya Sanhita (BNS). Police can take action against rogue agents.'
    },
    {
      q: 'What medical documents are mandatory to prove genuine hardship to the bank?',
      a: 'You need a disability card from a government medical board. You also need hospital discharge cards, doctor notes, medical bills, and proof of income loss from your office or bank statements.'
    },
    {
      q: 'Can a family member or legal guardian negotiate loan settlement on behalf of a bedridden borrower?',
      a: 'Yes. Family members can act on behalf of a sick borrower. You can use a registered Power of Attorney (POA). For mental or severe disability, you can obtain a legal guardianship order under the National Trust Act.'
    },
    {
      q: 'Can a bank seize disability pensions or medical insurance payouts for loan default?',
      a: 'No. Under Section 60 of the Code of Civil Procedure, disability pensions, compassionate aids, and stipends cannot be attached by any court. Health insurance claim money for hospital bills is also protected from bank seizure.'
    },
    {
      q: 'Can a borrower be sent to civil prison for loan default during terminal illness?',
      a: 'No. Under Section 51 and Order 21 Rule 37 of the CPC, courts cannot jail a debtor who has no money to pay. Courts always reject arrest pleas when a person suffers from severe medical illness or physical disability.'
    },
    {
      q: 'What discount can a borrower expect in a compassionate medical OTS?',
      a: 'Discounts depend on your medical records and income loss. For severe health crises, banks routinely waive 100% of penal interest and legal fees. Banks also cut 50% to 75% of the principal loan amount.'
    },
    {
      q: 'How does CredSettle assist families facing loan distress during severe illness or disability?',
      a: 'CredSettle stops agent harassment right away. Our team checks your loan for hidden insurance policies, writes formal hardship letters to bank heads, and negotiates low settlement amounts with official bank closure letters.'
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
            <HeartPulse className="w-3.5 h-3.5" />
            <span>Compassionate Debt Relief &amp; Medical Hardship Protection</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Loan Restructuring &amp; Settlement for Illness or Disability
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            A clear legal guide for borrowers facing illness or disability. Learn RBI relief rules. Claim loan insurance fast. Stop debt collection while you heal.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Get Medical Debt Relief</span>
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
                  <span>Compassionate Legal Shield</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Protected under RBI Board-Approved Settlement Rules and RPwD Act 2016.
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
                <span>EXECUTIVE BRIEF: LOAN RELIEF FOR ILLNESS &amp; DISABILITY</span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">No Wilful Default:</strong> Serious illness or permanent physical injury means you cannot work. Under RBI rules, this is never treated as wilful default.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Mandatory Bank Policies:</strong> Under RBI settlement rules, all banks must have board policies for hardship cases. Banks can waive interest and part of the principal.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Claim Credit Insurance:</strong> Many loans carry credit protection insurance. You can claim this cover to pay off your loan if you suffer critical illness or disability.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Protected Income:</strong> Under Section 60 of the CPC, courts cannot attach disability pensions, family stipends, or hospital funds for loan default.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Zero Agent Harassment:</strong> Recovery agents cannot visit hospitals or call doctors. Harassing a patient is a crime under Section 351 of the BNS.
                  </span>
                </li>
              </ul>
            </div>

            {/* SECTION 1: Medical Crisis & Debt Distress: RBI Regulatory Framework */}
            <section id="regulatory-framework" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Landmark className="w-4 h-4 text-[#1886ff]" />
                <span>Regulatory Mandates &amp; Central Bank Directives</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. Medical Crisis &amp; Debt Distress: RBI Regulatory Framework
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                A serious illness changes life fast. Heart attacks, cancer, stroke, or severe injury bring deep pain. Hospital stays and doctor bills cost a lot. When health fails, patients often lose their jobs or shop income. In these tough times, paying bank loan EMIs is very hard. Families must often choose between doctor care and loan dues.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The Reserve Bank of India knows this truth. Falling sick is never your fault. Under RBI rules on wilful default, a borrower is only at fault if they have cash but refuse to pay. When real sickness wipes out your income, you are not a wilful defaulter. Indian banking rules protect you from unfair blame.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                All banks in India must keep a board-approved loan relief policy. This rule comes from the RBI Compromise Settlement Framework. Under this policy, bank credit teams can cut debt for sick borrowers. They can waive unpaid interest, drop late fees, and cut the principal amount. You have the legal right to ask for this help.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Borrowers do not have to face bank staff alone. By citing official RBI circulars, you can halt harsh calls. You can get fair loan relief based on health grounds.
              </p>
            </section>

            {/* SECTION 2: Financial Comparison: Loan Restructuring vs Compassionate OTS */}
            <section id="financial-comparison" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <DollarSign className="w-4 h-4 text-[#1886ff]" />
                <span>Financial Analysis &amp; Debt Economics</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. Financial Comparison: Loan Restructuring vs Compassionate OTS
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When sickness strikes, you must check if your income loss is short or permanent. This simple check tells you whether to pick loan restructuring or a loan settlement.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Loan restructuring is best for short illness. If you expect to return to work within a year or two, choose restructuring. The bank can grant an EMI break. This break is called a moratorium. The bank can also extend the loan tenure. This lowers your monthly EMI to a sum you can pay.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                In contrast, loan settlement works best for permanent disability or terminal illness. If you cannot return to work, restructuring will only build more debt. In this case, ask for a one-time settlement (OTS). In an OTS, the bank accepts a single smaller sum to close the loan for good. Banks often waive 60% to 80% of total dues on health grounds.
              </p>

              {/* Representative Calculation Card */}
              <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white shadow-xs">
                <div className="bg-slate-900 text-white p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                    <span className="font-bold text-sm">Compassionate Medical OTS Ledger Audit Math</span>
                  </div>
                  <span className="text-xs text-blue-300 font-mono">₹15 Lakh Unsecured Personal Loan</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80">
                    <thead>
                      <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-semibold">
                        <th className="p-3">Loan Account Component</th>
                        <th className="p-3">Bank Ledger Claim</th>
                        <th className="p-3">Compassionate Medical Relief Status</th>
                        <th className="p-3 text-right">Negotiated Final Payout</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200/80 text-slate-600">
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Original Disbursed Principal Balance</td>
                        <td className="p-3 font-mono">₹7,50,000</td>
                        <td className="p-3 text-blue-600 font-semibold">50% Principal Haircut on Medical Grounds</td>
                        <td className="p-3 text-right font-bold text-slate-900 font-mono">₹3,75,000</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Accrued Normal Interest Dues</td>
                        <td className="p-3 font-mono">₹3,20,000</td>
                        <td className="p-3 text-emerald-600 font-semibold">100% Interest Waiver Approved by Board</td>
                        <td className="p-3 text-right font-bold text-emerald-700 font-mono">₹0 (Full Waiver)</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Penal Interest &amp; Late Payment Fines</td>
                        <td className="p-3 font-mono">₹2,80,000</td>
                        <td className="p-3 text-emerald-600 font-semibold">100% Statutory Waiver under RBI Rules</td>
                        <td className="p-3 text-right font-bold text-emerald-700 font-mono">₹0 (Full Waiver)</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Legal Notice &amp; Collection Agency Fees</td>
                        <td className="p-3 font-mono">₹1,50,000</td>
                        <td className="p-3 text-emerald-600 font-semibold">100% Reversal of External Agent Charges</td>
                        <td className="p-3 text-right font-bold text-emerald-700 font-mono">₹0 (Full Waiver)</td>
                      </tr>
                      <tr className="bg-blue-50/70 font-bold text-slate-900">
                        <td className="p-3">Total Outstanding Debt Liability</td>
                        <td className="p-3 text-rose-600 font-mono">₹15,00,000</td>
                        <td className="p-3 text-emerald-700">75% Net Debt Reduction (₹11,25,000 Saved)</td>
                        <td className="p-3 text-right text-[#1886ff] text-sm sm:text-base font-mono">₹3,75,000 Closure</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* SECTION 3: Debt Resolution Matrix: Medical Hardship Relief Pathways */}
            <section id="resolution-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Hardship Classification &amp; Strategy</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Debt Resolution Matrix: Medical Hardship Relief Pathways
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Health issues affect families in different ways. Banks review debt relief files using medical papers and proof of your reduced earning ability.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The comparison table below outlines the five main health categories. It shows common bank responses and the best legal path to debt relief.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[620px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Medical Condition Category</th>
                      <th className="p-3">Standard Bank Approach</th>
                      <th className="p-3">Optimal Debt Relief Strategy</th>
                      <th className="p-3">Expected Financial Relief</th>
                      <th className="p-3">Mandatory Documentation</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr className="bg-blue-50/30">
                      <td className="p-3 font-bold text-slate-900">Terminal Illness (Stage IV Cancer / ALS)</td>
                      <td className="p-3">Hardship review upon legal escalation.</td>
                      <td className="p-3 text-emerald-700 font-semibold">Ex-Gratia OTS or Full Debt Write-Off.</td>
                      <td className="p-3 text-emerald-700 font-bold">75% to 90% Waiver or Total Discharge.</td>
                      <td className="p-3">Oncologist certificate, palliative care records.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Permanent Total Disability (Stroke / Amputation)</td>
                      <td className="p-3">Demand recovery unless challenged legally.</td>
                      <td className="p-3 text-blue-700 font-semibold">Compassionate OTS with Staged Payout.</td>
                      <td className="p-3 text-blue-700 font-bold">60% to 80% Waiver of Total Dues.</td>
                      <td className="p-3">Government Medical Board Certificate (40%+ disability).</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Severe Critical Illness (Organ Failure / Heart Bypass)</td>
                      <td className="p-3">Offers standard moratorium or restructuring.</td>
                      <td className="p-3 text-slate-800 font-semibold">Loan Restructuring with 12-Month Holiday.</td>
                      <td className="p-3">Tenor elongation up to 3 years; rate cut.</td>
                      <td className="p-3">Hospital discharge summary, surgery bills, medical leave letter.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Mental Incapacitation / Coma</td>
                      <td className="p-3">Freezes accounts; attempts set-off.</td>
                      <td className="p-3 text-purple-700 font-semibold">Guardianship Representation &amp; Insurance Claim.</td>
                      <td className="p-3 text-purple-700 font-bold">Full Insurance Payoff or Compassionate OTS.</td>
                      <td className="p-3">Court guardianship order, neurological psychiatric evaluation.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Chronic Debilitating Disease (Severe Arthritis / Dialysis)</td>
                      <td className="p-3">Demands regular EMIs; threatens legal notices.</td>
                      <td className="p-3 text-indigo-700 font-semibold">Step-Down EMI Restructuring or Partial OTS.</td>
                      <td className="p-3">50% EMI reduction or 50% to 65% OTS waiver.</td>
                      <td className="p-3">Specialist treatment history, Form 16 showing reduced pay.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 4: Credit Protection Insurance: Invoking Loan Shield Policies */}
            <section id="credit-insurance-shield" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <ShieldCheck className="w-4 h-4 text-[#1886ff]" />
                <span>Insurance Protection &amp; Policy Forensics</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. Credit Protection Insurance: Invoking Loan Shield Policies
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Many borrowers do not know that their loan has insurance. When you take a personal loan or home loan, banks often add credit shield insurance. You pay for this cover in your loan fees.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This insurance covers death, permanent disability, and critical illness. Covered cases include cancer, stroke, and heart attacks. When a doctor confirms the illness, the insurance firm must pay the bank directly.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Once the insurer pays, the bank must close the loan account. The bank must give an official No Dues Certificate to the family. This frees the sick borrower from all future dues.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under IRDAI rules, banks must help families file these insurance claims fast. Banks cannot hide insurance policies and send collection agents instead. CredSettle reviews your loan papers, finds hidden policies, and helps you file the claim.
              </p>
            </section>

            {/* SECTION 5: Visual Blueprint Infographic */}
            <section id="visual-blueprint" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Sparkles className="w-4 h-4 text-[#1886ff]" />
                <span>Visual Blueprint</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. Visual Blueprint: Medical Debt Relief &amp; Restructuring Workflow
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This chart shows how to settle loans during illness. Follow simple steps to claim insurance and stop bank pressure.
              </p>

              <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-slate-100 bg-slate-100">
                  <Image
                    src="/images/infographics/loan-restructuring-settlement-terminal-illness-disability.jpg"
                    alt="Loan Restructuring and Debt Settlement for Medical Illness and Disability"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 900px"
                    className="object-contain hover:scale-[1.01] transition-transform duration-300"
                    priority
                  />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-500 pt-1 gap-2">
                  <span>Official CredSettle Medical Hardship Debt Resolution Protocol • RBI &amp; RPwD Act Compliant</span>
                  <a
                    href="/images/infographics/loan-restructuring-settlement-terminal-illness-disability.jpg"
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
                6. Step-by-Step SOP: 6-Stage Medical Hardship Settlement Protocol
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Dealing with bank staff while fighting illness is hard. Follow this six-stage guide to protect your family and achieve debt closure smoothly.
              </p>

              <div className="space-y-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">1</span>
                    Stage 1: Gather Medical Proof and Reports
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Get hospital papers and doctor notes. If you have a disability, get a medical board card as clear proof.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">2</span>
                    Stage 2: Audit Loan Agreement for Insurance
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Check your loan sanction papers for credit shield or critical illness insurance. If an active policy exists, file an insurance claim right away.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">3</span>
                    Stage 3: Send Formal Medical Hardship Letter
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Write a formal representation to the Branch Manager and Stressed Asset team. Attach your medical records and request an immediate halt on calls.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">4</span>
                    Stage 4: Block Recovery Agent Harassment
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Issue a legal warning citing Section 351 BNS to stop agent visits to hospitals or family homes. Direct all talks through your legal counsel.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">5</span>
                    Stage 5: Negotiate Zonal Committee Settlement
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Discuss your file with the bank zonal credit committee. Seek complete waiver of penal charges and a 50% to 75% cut on principal debt.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">6</span>
                    Stage 6: Pay Settlement and Get No Dues Certificate
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Check the bank written settlement letter carefully. Pay the agreed sum directly into the loan account and collect your No Dues Certificate.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: Statutory Legal Protections: CPC Exemptions & RPwD Act Rights */}
            <section id="statutory-protections" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Enactments &amp; Borrower Protections</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. Statutory Legal Protections: CPC Exemptions &amp; RPwD Act Rights
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Indian law protects sick and disabled citizens from harsh creditor action. These legal rights ensure that banks cannot leave your family with no money to live.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under Section 60 of the CPC, disability pensions and family stipends cannot be attached by any court. Civil courts also cannot jail a debtor who has no cash to pay due to poverty or health issues under Section 51 of the CPC.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The Rights of Persons with Disabilities Act also grants fair treatment to disabled individuals. The Supreme Court has held that the right to health and human dignity under Article 21 comes before bank debt collection.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                    <Scale className="w-4 h-4" />
                    <span>Section 60(1)(g) CPC (Pension Protection)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Disability pensions and family aid are safe by law. No civil court can take this money to pay bank debt.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Section 51 CPC (No Arrest for Sickness)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Civil courts cannot send a debtor to civil prison if they cannot pay due to real poverty, job loss, or severe medical illness.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-purple-700 font-bold text-sm">
                    <HeartPulse className="w-4 h-4" />
                    <span>Rights of Persons with Disabilities Act, 2016</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The RPwD Act gives equal rights to disabled citizens. Banks cannot use force or threats to collect debt.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <Landmark className="w-4 h-4" />
                    <span>Article 21 Constitution (Right to Life &amp; Dignity)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The Supreme Court protects human dignity. Your right to life and health comes before bank money recovery.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 8: 3-Tier Escalation Matrix: Bank Redressal to RBI Ombudsman */}
            <section id="escalation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Escalation Protocol</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. 3-Tier Escalation Matrix: Bank Redressal to RBI Ombudsman
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If branch staff ignore your health pleas, do not worry. You can file a free complaint with the RBI Ombudsman.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Grievance Level</th>
                      <th className="p-3">Designated Banking Authority</th>
                      <th className="p-3">Mandated Timeline</th>
                      <th className="p-3">Intervention &amp; Compassionate Powers</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 1: GRO</td>
                      <td className="p-3">Grievance Redressal Officer (Branch/Zonal).</td>
                      <td className="p-3 font-mono">7 to 10 Working Days.</td>
                      <td className="p-3">Halts immediate agent calls, registers medical hardship file, and stays aggressive collection.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 2: PNO</td>
                      <td className="p-3">Principal Nodal Officer (Bank Head Office).</td>
                      <td className="p-3 font-mono">14 to 21 Working Days.</td>
                      <td className="p-3">Audits insurance policy non-invocation, reviews medical dossier, and sponsors compassionate OTS.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Level 3: RBI Ombudsman</td>
                      <td className="p-3">Reserve Bank Integrated Ombudsman (cms.rbi.org.in).</td>
                      <td className="p-3 font-mono">30 Days Post-PNO.</td>
                      <td className="p-3">Issues binding awards for unfair debt collection, orders insurance settlement, and penalizes bank violations.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 9: Procedural Milestones: Illness Notification to Final Closure */}
            <section id="procedural-timeline" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Clock className="w-4 h-4 text-[#1886ff]" />
                <span>Procedural Milestones</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Procedural Milestones: Illness Notification to Final Closure
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Learn how bank loan default moves over time. Take action early to protect your family from collection pressure.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Delinquency Phase</th>
                      <th className="p-3">Asset Classification</th>
                      <th className="p-3">Standard Bank Recovery Action</th>
                      <th className="p-3">Recommended Medical Defense Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 1 to 30</td>
                      <td className="p-3 font-mono text-[11px]">SMA-0</td>
                      <td className="p-3">Automated payment reminders and SMS warnings.</td>
                      <td className="p-3">Notify bank in writing about diagnosis; request temporary moratorium.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 31 to 60</td>
                      <td className="p-3 font-mono text-[11px]">SMA-1</td>
                      <td className="p-3">Branch collection follow-ups and telephonic inquiries.</td>
                      <td className="p-3">Submit medical board records; file credit shield insurance claim.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 61 to 90</td>
                      <td className="p-3 font-mono text-[11px]">SMA-2</td>
                      <td className="p-3">Pre-NPA warnings and deployment of field recovery agencies.</td>
                      <td className="p-3">Appoint legal representative via Special POA; serve anti-harassment notice.</td>
                    </tr>
                    <tr className="bg-amber-50/50">
                      <td className="p-3 font-bold text-slate-900">Day 91 to 120</td>
                      <td className="p-3 font-mono text-[11px] text-amber-700 font-bold">NPA Classification</td>
                      <td className="p-3">Account tagged Non-Performing Asset; capital provisions made.</td>
                      <td className="p-3">Audit loan ledger to eliminate illegal penal charges; demand medical OTS.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Day 121 to 180</td>
                      <td className="p-3 font-mono text-[11px] text-[#1886ff] font-bold">Prime OTS Window</td>
                      <td className="p-3">Legal notice or Lok Adalat referral issued.</td>
                      <td className="p-3 font-bold text-slate-900">Negotiate 60% to 85% debt waiver directly with Zonal Committee.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Month 6 and Beyond</td>
                      <td className="p-3 font-mono text-[11px]">Loss Asset / ARC</td>
                      <td className="p-3">Debt assigned to ARC or marked for technical write-off.</td>
                      <td className="p-3">Remit final negotiated settlement sum and receive clean bank NOC.</td>
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
                10. Specialized Scenarios: Critical Illness, Cancer &amp; Guardianship
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Health problems take many forms. Here is how banking regulations apply across common real-world medical cases.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Activity className="w-4 h-4 text-rose-600" />
                    Advanced Stage IV Cancer &amp; Palliative Care
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    In terminal cancer cases where the patient cannot recover, CredSettle requests the bank board for a compassionate loan write-off. This frees the family from future legal burdens.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <UserX className="w-4 h-4 text-amber-600" />
                    Permanent Stroke, Paralysis &amp; Amputation
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Severe injury or stroke ends your work life. A disability card gives strong proof for large loan discounts.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-[#1886ff]" />
                    Legal Guardianship for Comatose or Mentally Ill Borrowers
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If a sick person cannot speak or sign, family can step in. A legal guardianship order lets you handle loan talks.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    Joint Home Loans When Primary Earner Falls Sick
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If the main earner in a joint home loan falls sick, CredSettle restructures the mortgage around the second borrower income. This prevents home auction under the SARFAESI Act.
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
                Frequently Asked Questions: Illness &amp; Disability Debt Relief
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Find clear answers to common questions about loan relief, debt waivers, and borrower rights during illness.
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
                Official Regulatory Citations &amp; Statutory Medical Legal Framework
              </h2>
              <ul className="space-y-2 text-xs text-slate-600 leading-relaxed list-disc pl-5">
                <li>
                  <strong>Reserve Bank of India Circular on Compromise Settlements (2023):</strong> DOR.STR.REC.20/21.04.048/2023-24, Board-Approved Compromise Settlement Framework.
                </li>
                <li>
                  <strong>Code of Civil Procedure, 1908 (CPC):</strong> Section 60(1)(g) and Section 51, Statutory Exemptions of Compassionate Allowances and Bar on Indigent Arrest.
                </li>
                <li>
                  <strong>Rights of Persons with Disabilities Act, 2016 (RPwD Act):</strong> Sections 3 &amp; 12, Equality, Non-Discrimination, and Reasonable Financial Accommodation.
                </li>
                <li>
                  <strong>Insurance Regulatory and Development Authority of India (IRDAI):</strong> Master Guidelines on Group Credit Life Protection and Critical Illness Claim Processing.
                </li>
                <li>
                  <strong>Supreme Court of India Precedents:</strong> Parmanand Katara v. Union of India and Consumer Protection Judgments on Medical Debt Distress.
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
                    <span>RBI Integrated Ombudsman</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://irdai.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>Insurance Regulatory &amp; Dev Authority</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://disabilityaffairs.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>Department of Disability Affairs</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.indiacode.nic.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>India Code Statutory Repository</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://nalsa.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>National Legal Services Authority</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* 10 Internal Topic Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Explore Related CredSettle Guides:</span>
                <div className="flex flex-wrap gap-2">
                  <Link href="/services/personal-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Personal Loan Settlement
                  </Link>
                  <Link href="/how-to-write-a-hardship-letter-for-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Hardship Letter Guide
                  </Link>
                  <Link href="/stop-recovery-agent-harassment" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Stop Recovery Harassment
                  </Link>
                  <Link href="/rbi-rules-for-recovery-agents" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    RBI Agent Guidelines
                  </Link>
                  <Link href="/pension-attachment-for-loan-recovery" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Pension Attachment Rules
                  </Link>
                  <Link href="/can-bank-seize-epf-provident-fund-for-loan-recovery" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    EPF &amp; Gratuity Seizure Protection
                  </Link>
                  <Link href="/can-bank-freeze-my-savings-account-for-loan" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Savings Account Freeze
                  </Link>
                  <Link href="/bank-sent-legal-notice-for-loan-what-to-do" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Bank Legal Notice Reply
                  </Link>
                  <Link href="/willful-defaulter-notice-rbi-rules-legal-defense-guide" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Wilful Defaulter Defense
                  </Link>
                  <Link href="/get-noc-after-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    No Dues Certificate
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
                Ashish helps families resolve bank debt during medical hardship. He defends sick borrowers against illegal recovery calls.
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
                  CONFIDENTIAL LEGAL RELIEF
                </span>
                <p className="text-lg md:text-xl font-bold text-white leading-snug">
                  Facing Loan Distress Due to Illness or Disability?
                </p>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our legal team stops agent calls right away. We help you claim loan insurance and get up to 85% debt waivers.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Protect Your Family Now
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
                  <span>Statutory Medical Protection • 100% Confidential</span>
                </div>
              </div>
            </div>

            {/* Card 3: CredSettle Trust Badges */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">The CredSettle Medical Shield</p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Zero Hospital Harassment:</strong> Absolute legal protection for caregivers.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Credit Shield Invocation:</strong> Enforcing mandatory insurance payouts.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Compassionate Waivers:</strong> Maximum principal and interest discounts.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Official Bank Closure:</strong> Guaranteed legal No Dues Certificate.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">Related Medical &amp; Debt Guides</p>
              <div className="space-y-2.5">
                <Link
                  href="/how-to-write-a-hardship-letter-for-loan-settlement"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Hardship Letter for Loan Settlement
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Format for medical crisis &rarr;</span>
                </Link>

                <Link
                  href="/can-bank-seize-epf-provident-fund-for-loan-recovery"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Can Bank Seize EPF or Gratuity?
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Retirement fund legal shield &rarr;</span>
                </Link>

                <Link
                  href="/pension-attachment-for-loan-recovery"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Pension Attachment for Loan Recovery
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Exemption rules under Section 60 &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
