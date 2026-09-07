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
  BadgeAlert,
  Landmark
} from 'lucide-react';

export default function BusinessLossPersonalLoanDefaultClient() {
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
    { id: 'quick-crux', label: 'Executive Brief & Crux' },
    { id: 'npa-dynamics', label: '1. Debt Economics & NPA Dynamics' },
    { id: 'settlement-math', label: '2. Financial Breakdown & Settlement Math' },
    { id: 'comparison-matrix', label: '3. Resolution Pathways Comparison Matrix' },
    { id: 'cibil-impact', label: '4. CIBIL Algorithm & Credit Rebuilding' },
    { id: 'infographic-overview', label: '5. Visual Institutional Blueprint' },
    { id: 'step-by-step-sop', label: '6. 6-Stage Institutional Settlement SOP' },
    { id: 'statutory-defense', label: '7. Statutory Notice Defense & Legal Rights' },
    { id: 'escalation-matrix', label: '8. 3-Tier Grievance & Escalation Matrix' },
    { id: 'chronological-timeline', label: '9. Procedural Milestones & Timelines' },
    { id: 'specialized-scenarios', label: '10. Specialized Real-World Scenarios' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
    {
      q: 'What happens if I default on an unsecured personal loan after my business fails?',
      a: 'Defaulting on an unsecured personal loan following a business collapse is strictly a civil contractual breach, not a criminal offence. The bank cannot seize unhypothecated personal assets under SARFAESI. After ninety days of continuous non-payment, the loan transitions into a Non-Performing Asset (NPA), obligating the bank to make capital provisions and opening institutional pathways for a One-Time Settlement.'
    },
    {
      q: 'Can a bank seize my residential property or personal assets for personal loan default?',
      a: 'No. Unsecured personal loans carry zero asset mortgage, pledge, or hypothecation. Because no security interest was created at disbursal, the bank is legally barred from invoking summary possession under the SARFAESI Act. Creditors can only seek recovery through civil suits, which take years and carry commercial uncertainty for the lender.'
    },
    {
      q: 'How do I legally prove bona fide business loss and financial hardship to the bank?',
      a: 'You can substantiate genuine financial distress by compiling an authenticated hardship dossier. This includes audited balance sheets showing operating deficits, GST cancellation or nil-filing certificates, bank statements confirming zero commercial inflows, vendor default notices, and statutory business closure filings.'
    },
    {
      q: 'What percentage of waiver can an entrepreneur negotiate on a defaulted personal loan?',
      a: 'Borrowers routinely secure a 100% waiver across all compounded penal interest, late payment surcharges, and NACH bounce fees. On the core unamortized principal balance, banks and NBFCs typically approve waivers ranging between 50% and 80%, depending on the age of delinquency, proven insolvency, and forensic audit findings.'
    },
    {
      q: 'How does personal loan settlement differ from corporate insolvency under IBC?',
      a: 'Corporate insolvency under the Insolvency and Bankruptcy Code (IBC) applies to registered corporate entities through the National Company Law Tribunal (NCLT). In contrast, personal loans used for business are resolved through bilateral out-of-court compromise settlements governed by RBI prudential guidelines, avoiding protracted tribunal proceedings.'
    },
    {
      q: 'What legal defense is available if the bank issues Section 25 PSSA or Section 138 notices?',
      a: 'When automated NACH debits or security cheques bounce, you must issue a formal legal reply within fifteen to thirty days through legal counsel. The reply establishes the absence of mens rea or fraudulent intent, proves severe business failure, and formally invites the lender to the negotiation table for an OTS compromise.'
    },
    {
      q: 'Can bank recovery agents visit my residence or harass family members for business debts?',
      a: 'Absolutely not. Under the RBI Fair Practices Code and Master Direction on Debt Recovery, agents are strictly forbidden from contacting family members, using abusive language, making unannounced home visits, or calling outside the permitted 8:00 AM to 7:00 PM window. Violations can be escalated to the RBI Integrated Ombudsman and local police authorities.'
    },
    {
      q: 'What essential terms must be verified in an official bank settlement sanction letter?',
      a: 'An authentic settlement sanction letter must be issued on official bank letterhead, dispatched from an authorized corporate email domain, state the exact loan account number, outline specific tranche deadlines, confirm full waiver of remaining balances, and explicitly covenant the withdrawal of all legal proceedings upon payment.'
    },
    {
      q: 'How does settling a business-related personal loan impact my CIBIL credit score?',
      a: 'Upon settlement, the bank updates credit bureaus with a status of "Settled" and zeroes the outstanding balance. While this halts monthly delinquency reporting and allows you to rebuild your score to 750+ over eighteen to twenty-four months, you can also later pay the waived variance under Section 21 of CICRA to convert the entry to "Closed".'
    },
    {
      q: 'What is the step-by-step timeline to obtain the official No Dues Certificate (NDC)?',
      a: 'Once the negotiated settlement sum is deposited directly into your designated loan account within the agreed schedule, the bank processes internal write-offs. Under regulatory mandates, the lender is required to issue the formal No Dues Certificate (NDC) and closure intimation within thirty to forty-five business days.'
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
            <span>Entrepreneurial Debt Resolution &amp; Legal Protection Framework</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Defaulted on Personal Loan Due to Business Failure: Guide
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            Institutional blueprint for entrepreneurs, startup founders, and sole proprietors facing personal loan delinquency following commercial loss. Learn how to stop collection agent intimidation, establish bona fide business insolvency, and negotiate up to 80% One-Time Settlement waivers under RBI regulatory frameworks.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Settle Debt from Business Loss</span>
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
                  <span>Institutional Defense</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Governed by Reserve Bank of India Prudential Norms and Fair Practices Code.
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
                <span>EXECUTIVE BRIEF: RESOLVING PERSONAL LOAN DEFAULT FROM BUSINESS LOSS</span>
              </div>

              <ul className="space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <span>
                    <strong className="text-slate-900 font-bold">Zero Asset Mortgage:</strong> Unsecured loans carry zero collateral or SARFAESI property attachment rights.
                  </span>
                </li>

                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <span>
                    <strong className="text-slate-900 font-bold">Civil Protection:</strong> Business loan default is strictly a civil matter with zero risk of criminal arrest.
                  </span>
                </li>

                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <span>
                    <strong className="text-slate-900 font-bold">100% Penal Waiver:</strong> Complete waiver across compounding penal interest, bounce charges, and late fees.
                  </span>
                </li>

                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <span>
                    <strong className="text-slate-900 font-bold">50% to 80% Haircut:</strong> Substantial principal compromise negotiated directly with bank credit committees.
                  </span>
                </li>

                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0" />
                  <span>
                    <strong className="text-slate-900 font-bold">Guaranteed Closure:</strong> Official bank settlement sanction letter and formal No Dues Certificate.
                  </span>
                </li>
              </ul>
            </div>

            {/* SECTION 1: Debt Economics & NPA Dynamics */}
            <section id="npa-dynamics" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Banking Regulations &amp; Commercial Realities</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. Debt Economics: Business Failure &amp; Personal Loan NPA Dynamics
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Thousands of Indian entrepreneurs, sole proprietors, and startup founders routinely take unsecured personal loans to fund working capital deficits, meet urgent payroll commitments, or bridge delayed customer receivables. Because commercial collateral is often limited in early-stage ventures or service enterprises, founders rely on their personal credit profiles to sustain operations. However, when market downturns, client insolvencies, regulatory shifts, or macroeconomic shocks trigger business failure, personal cashflows evaporate simultaneously with business revenues.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When monthly equated installments (EMIs) stop, the lender initiates automated recovery protocols. Under the prudential framework established by the Reserve Bank of India, an overdue loan progresses through three Special Mention Account stages: SMA-0 for accounts overdue up to thirty days, SMA-1 between thirty-one and sixty days, and SMA-2 between sixty-one and ninety days. Once an account crosses the critical ninety-day continuous default mark, it is formally classified as a Non-Performing Asset (NPA).
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                NPA classification triggers mandatory regulatory consequences for the lending institution. Under RBI provisioning norms, banks and non-banking financial companies (NBFCs) must immediately halt ledger interest recognition and allocate fifteen to twenty-five percent of the outstanding loan value from their Tier-1 capital reserves into bad-debt provisions. As time advances without recovery, provisioning requirements rise toward one hundred percent. Because unsecured personal loans carry no underlying collateral mortgage or hypothecated stock, lenders cannot invoke the summary enforcement powers of the SARFAESI Act of 2002.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Pursuing civil court litigation or protracted arbitration against an entrepreneur with verified enterprise losses is commercially unviable, costing substantial legal fees while yielding negligible recovery. Consequently, bank credit committees and zonal stressed asset desks possess strong commercial incentives to enter into One-Time Settlements (OTS). By approving substantial compromise discounts, lenders reclaim locked capital, reverse provisioning liabilities, and remove distressed assets from their balance sheets.
              </p>
            </section>

            {/* SECTION 2: Financial Breakdown & Settlement Math */}
            <section id="settlement-math" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <DollarSign className="w-4 h-4 text-[#1886ff]" />
                <span>Financial Forensics &amp; Ledger Audit</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. Financial Breakdown: Principal Debt vs Compound Penal Charges
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Following loan default, banking management software automatically compounds outstanding balances with aggressive non-statutory charges. Standard contractual rates are supplemented with penal interest rates ranging between twenty-four and thirty-six percent per annum. Additionally, automated NACH or ECS presentation failures generate recurring bounce charges of ₹500 plus GST per attempt, compounded by monthly late payment surcharges and administrative recovery levies.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Within six to nine months of default, these artificial additions frequently inflate the bank&apos;s demanded ledger balance by thirty to fifty percent above the actual unamortized principal disbursed. Inexperienced borrowers often panic upon seeing these inflated figures. However, institutional debt resolution begins with a forensic ledger audit that isolates the genuine principal from all secondary accounting additions.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under structured compromise negotiations, bank credit committees hold discretionary authority to grant a complete one-hundred-percent waiver across accrued penal interest, bounce penalties, and administrative surcharges. Furthermore, when presented with authenticated documentation establishing legitimate business loss, credit committees routinely sanction a forty to seventy percent haircut on the core principal balance, producing an effective total waiver of sixty to eighty percent against the gross inflated demand.
              </p>

              {/* Representative Calculation Card */}
              <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white shadow-xs">
                <div className="bg-slate-900 text-white p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                    <span className="font-bold text-sm">Representative Business Failure Personal Loan Settlement Math</span>
                  </div>
                  <span className="text-xs text-blue-300 font-mono">₹15 Lakh Gross Ledger Claim</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80">
                    <thead>
                      <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-semibold">
                        <th className="p-3">Financial Component</th>
                        <th className="p-3">Bank Ledger Demand</th>
                        <th className="p-3">Credit Committee Approved Waiver</th>
                        <th className="p-3 text-right">Final Payable Sum</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200/80 text-slate-600">
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Unamortized Principal Balance</td>
                        <td className="p-3">₹10,50,000</td>
                        <td className="p-3 text-emerald-600 font-semibold">55% Core Principal Haircut (₹5,77,500)</td>
                        <td className="p-3 text-right font-bold text-slate-900">₹4,72,500</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Accrued Contractual &amp; Penal Interest</td>
                        <td className="p-3">₹3,75,000</td>
                        <td className="p-3 text-emerald-600 font-semibold">100% Complete Interest Waiver (₹3,75,000)</td>
                        <td className="p-3 text-right font-bold text-slate-900">₹0</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">NACH Bounce Fees &amp; Late Surcharges</td>
                        <td className="p-3">₹75,000</td>
                        <td className="p-3 text-emerald-600 font-semibold">100% Administrative Charge Waiver (₹75,000)</td>
                        <td className="p-3 text-right font-bold text-slate-900">₹0</td>
                      </tr>
                      <tr className="bg-blue-50/70 font-bold text-slate-900">
                        <td className="p-3">Total Compromise Evaluation</td>
                        <td className="p-3 text-rose-600">₹15,00,000</td>
                        <td className="p-3 text-emerald-700">₹10,27,500 Total Waiver (68.5% Total Relief)</td>
                        <td className="p-3 text-right text-[#1886ff] text-sm sm:text-base">₹4,72,500 Final OTS</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* SECTION 3: 4-Sided Bordered Comparison Matrix */}
            <section id="comparison-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Strategic Assessment</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Comparative Matrix: Business Loss Debt Resolution Options
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When faced with overwhelming personal loan liabilities following enterprise liquidation, entrepreneurs must evaluate every available resolution channel. Many mistakenly opt for loan restructuring or tenure elongation, only to realize that restructuring does not reduce principal liabilities and actually compounds lifetime interest obligations. Others remain passive, inviting severe legal exposure and unmitigated collection agency harassment.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                A structured One-Time Settlement delivers definitive financial relief and full legal discharge. By achieving deep principal haircuts backed by institutional sanction letters, borrowers can permanently extinguish unsecured liabilities and obtain clean No Dues Certificates without enduring years of courtroom battles.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[620px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Resolution Mechanism</th>
                      <th className="p-3">Financial Relief</th>
                      <th className="p-3">Legal Protection</th>
                      <th className="p-3">CIBIL Bureau Status</th>
                      <th className="p-3">Average Resolution Timeline</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr className="bg-blue-50/30">
                      <td className="p-3 font-bold text-slate-900">One-Time Settlement (OTS)</td>
                      <td className="p-3 text-emerald-600 font-semibold">50% to 80% Total Reduction</td>
                      <td className="p-3">Complete Discharge &amp; Notice Withdrawal</td>
                      <td className="p-3 font-mono text-[11px]">Settled / Zero Balance</td>
                      <td className="p-3">30 to 60 Days</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Tenure Restructuring</td>
                      <td className="p-3 text-amber-600">0% Principal Haircut (Higher Total Interest)</td>
                      <td className="p-3">Conditional upon Strict Future Servicing</td>
                      <td className="p-3 font-mono text-[11px]">Restructured Facility</td>
                      <td className="p-3">45 to 90 Days</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">DRT / Civil Court Litigation</td>
                      <td className="p-3 text-rose-600">Heavy Legal Defense Costs</td>
                      <td className="p-3">Adversarial Judicial Decrees</td>
                      <td className="p-3 font-mono text-[11px]">Suit Filed / Wilful Default</td>
                      <td className="p-3">2 to 5 Years</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">National Lok Adalat</td>
                      <td className="p-3 text-emerald-600">40% to 60% Mutual Compromise</td>
                      <td className="p-3">Section 21 Non-Appealable Civil Decree</td>
                      <td className="p-3 font-mono text-[11px]">Settled in Lok Adalat</td>
                      <td className="p-3">Sitting Date Basis</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Unmanaged Default</td>
                      <td className="p-3 text-rose-600">Continuous Compounding Penalties</td>
                      <td className="p-3 text-rose-600">Section 25 / Section 138 Warrants</td>
                      <td className="p-3 font-mono text-[11px] text-rose-600">Written Off / Delinquent</td>
                      <td className="p-3">Indefinite Financial Distress</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 4: Technical CIBIL Algorithm & Scoring Math */}
            <section id="cibil-impact" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                <span>Credit Bureau Architecture &amp; Analytics</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. CIBIL Score Impact: Bureau Algorithms &amp; Credit Rehabilitation
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Credit information companies in India, including TransUnion CIBIL, Experian, CRIF High Mark, and Equifax, determine credit scores based on five core mathematical parameters. Payment history constitutes thirty-five percent of the total algorithm, credit utilization ratio accounts for thirty percent, credit history length represents fifteen percent, while credit mix and recent inquiries contribute ten percent each.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When business insolvency causes consecutive personal loan EMI defaults, credit bureaus log recurring 30, 60, and 90+ Days Past Due (DPD) entries. This severely damages the thirty-five percent payment history pillar, typically causing an initial credit score drop of 130 to 200 points. If left unresolved, continuous monthly delinquency markers compound the damage, locking the borrower out of the formal banking system.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Executing a formal compromise settlement alters this trajectory. Upon receiving the sanctioned settlement sum, the lending bank reports the account status to credit bureaus as &quot;Settled&quot; and updates the total overdue balance to zero. While a &quot;Settled&quot; remark indicates that the obligation was closed through compromise rather than full tenure repayment, it immediately terminates recurring negative DPD reporting and removes active collection flags.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Entrepreneurs can systematically rebuild their CIBIL score back to 750+ within eighteen to twenty-four months. The most reliable method involves acquiring a secured credit card backed by a modest fixed deposit, maintaining utilization strictly below thirty percent, and clearing total statement balances before due dates. Furthermore, under Section 21 of the Credit Information Companies (Regulation) Act of 2005, borrowers who later experience business recovery have the legal right to remit the previously waived principal difference, compelling the lender to update the bureau status from &quot;Settled&quot; to &quot;Closed&quot;.
              </p>
            </section>

            {/* SECTION 5: Visual Infographic Asset Card */}
            <section id="infographic-overview" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Sparkles className="w-4 h-4 text-[#1886ff]" />
                <span>Visual Blueprint</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. Visual Blueprint: Business Loss Loan Resolution Workflow
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This comprehensive visual roadmap outlines the five essential operational phases required to transition a distressed personal loan from default status into an officially sanctioned, legally binding compromise settlement backed by an authentic No Dues Certificate.
              </p>

              <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-slate-100 bg-slate-100">
                  <Image
                    src="/images/infographics/business-loss-personal-loan-default.jpg"
                    alt="Personal Loan Default Due to Business Failure Settlement Blueprint and Resolution Workflow"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 900px"
                    className="object-contain hover:scale-[1.01] transition-transform duration-300"
                    priority
                  />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-500 pt-1 gap-2">
                  <span>Official CredSettle Entrepreneur Debt Resolution Framework • RBI Master Direction Compliant</span>
                  <a
                    href="/images/infographics/business-loss-personal-loan-default.jpg"
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
                6. Step-by-Step SOP: 6-Stage Business Debt Settlement Protocol
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Attempting to negotiate settlements casually with outsourced telecallers or branch executives inevitably leads to wasted token payments and empty verbal assurances. Achieving an authorized compromise settlement with maximum principal waivers requires adherence to a formal, six-stage institutional procedure.
              </p>

              <div className="space-y-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">1</span>
                    Stage 1: Forensic Loan Account Audit &amp; Ledger Reconstruction
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Obtain and analyze the complete historical loan statement from original disbursal to the current date. Isolate total net principal disbursed, aggregate all historical EMI payments, unbundle excessive compounding penal interest rates, and remove all unjustified NACH bounce fees to establish the genuine net principal exposure.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">2</span>
                    Stage 2: Hardship Dossier &amp; Commercial Loss Proof Compilation
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Assemble an authenticated financial hardship dossier proving bona fide commercial failure. Gather audited financial statements reflecting net operating losses, GST cancellation or nil returns, bank statements proving depleted commercial cashflows, vendor breach notices, or formal business dissolution records to demonstrate non-wilful inability to service debt.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">3</span>
                    Stage 3: Institutional Representation to Zonal Stressed Asset Desks
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Bypass third-party recovery telecallers entirely by serving a formal, legally grounded representation directly to the bank&apos;s Zonal Stressed Asset Management Desk and Principal Nodal Officer. This formal submission establishes genuine hardship, cites RBI fair practices protections, and demands structured compromise proceedings.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">4</span>
                    Stage 4: Bilateral Credit Committee Negotiations &amp; Haircut Structuring
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Conduct structured bilateral negotiations with authorized credit committee executives. Emphasize the absence of pledged collateral, highlight the bank&apos;s escalating NPA provisioning costs, and present the verified hardship dossier to negotiate a 100% waiver of penal interest and a 50% to 80% haircut on the core principal balance.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">5</span>
                    Stage 5: Settlement Sanction Letter Legal Vetting &amp; Verification
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Subject the bank&apos;s settlement sanction letter to rigorous legal scrutiny. Ensure the letter is drafted on official bank letterhead, dispatched from an authenticated corporate email domain, specifies exact loan account numbers and payment tranche dates, covenants complete debt discharge, and mandates formal withdrawal of all pending legal notices.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">6</span>
                    Stage 6: Direct Loan Remittance &amp; No Dues Certificate Procurement
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Remit the agreed settlement funds directly into your designated loan account using traceable banking channels such as RTGS or NEFT. Retain stamped bank deposit acknowledgments, verify that the loan ledger reflects a zero balance, and obtain the formal No Dues Certificate (NDC) and closure intimation within thirty to forty-five business days.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: Statutory Notice Defense & Legal Rights */}
            <section id="statutory-defense" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Protections &amp; Legal Defenses</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. Statutory Notice Defense: Legal Protections for Entrepreneurs
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                As loan delinquency approaches ninety to one hundred and twenty days, bank legal departments often issue statutory demand notices designed to compel repayment under threat of judicial proceedings. Understanding your statutory rights and mounting structured legal replies ensures complete protection against intimidation while steering the matter toward an amicable OTS settlement.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                    <FileText className="w-4 h-4" />
                    <span>Section 25 PSSA NACH Mandate Notice</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Issued under the Payment and Settlement Systems Act of 2007 when electronic mandate debits bounce due to insufficient funds. While carrying quasi-criminal provisions, issuing a formal advocate reply within thirty days establishing genuine commercial business loss refutes fraudulent intent and redirects the dispute into structured compromise settlement negotiations.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                    <Scale className="w-4 h-4" />
                    <span>Section 138 Negotiable Instruments Act</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Dispatched if physical security cheques collected at loan disbursal are presented and dishonored. A formal legal reply must be served through counsel within fifteen days of notice receipt, establishing that the cheques served as conditional collateral rather than discharge of an existing determined liability, effectively barring summary magistrate trials.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-purple-700 font-bold text-sm">
                    <Gavel className="w-4 h-4" />
                    <span>Arbitration Section 21 Jurisdictional Challenge</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Lenders frequently invoke arbitration under Section 21 of the 1996 Act. Under landmark Supreme Court rulings in Perkins Eastman and TRF Limited, a lender cannot unilaterally appoint a sole arbitrator. Borrowers can file formal jurisdictional objections under Section 12(5) and Section 16, invalidating ex-parte proceedings and driving the creditor to compromise.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <ShieldCheck className="w-4 h-4" />
                    <span>DRT Section 19 &amp; RBI Fair Practices Code</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Debts Recovery Tribunals have jurisdiction exclusively over claims exceeding ₹20 Lakhs under the RDB Act of 1993. For all loan values, the RBI Fair Practices Code strictly prohibits recovery agents from calling before 8:00 AM or after 7:00 PM, contacting family members, or making unannounced residential visits, with strict penalties for non-compliance.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 8: 3-Tier Escalation Matrix */}
            <section id="escalation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Escalation Protocol</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. 3-Tier Escalation Matrix: Banking Redressal for Distressed Debt
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When outsourced recovery agencies violate regulatory conduct directives, or when local branch executives refuse to acknowledge documented commercial insolvency, borrowers must utilize the institutional multi-tier grievance redressal mechanism established by the Reserve Bank of India.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Grievance Tier</th>
                      <th className="p-3">Designated Banking Authority</th>
                      <th className="p-3">Turnaround Time</th>
                      <th className="p-3">Scope of Intervention &amp; Powers</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 1: GRO</td>
                      <td className="p-3">Bank Grievance Redressal Officer</td>
                      <td className="p-3 font-mono">7 to 10 Working Days</td>
                      <td className="p-3">Investigation into improper recovery agency behavior, disputed penal interest charges, and initial settlement review.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 2: PNO</td>
                      <td className="p-3">Principal Nodal Officer (Head Office)</td>
                      <td className="p-3 font-mono">14 to 21 Working Days</td>
                      <td className="p-3">Direct intervention regarding persistent recovery agent harassment, review of disputed ledger accounts, and zonal OTS escalations.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Level 3: RBI Ombudsman</td>
                      <td className="p-3">Reserve Bank Integrated Ombudsman</td>
                      <td className="p-3 font-mono">30 Days Post-PNO</td>
                      <td className="p-3">Legally binding regulatory adjudication through cms.rbi.org.in for severe Fair Practices Code violations, intimidation, and unfair practices.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 9: Chronological Timeline Table */}
            <section id="chronological-timeline" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Clock className="w-4 h-4 text-[#1886ff]" />
                <span>Procedural Milestones</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Procedural Timeline: Default Milestones to No Dues Certificate
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The lifecycle of a defaulted personal loan following business failure follows a defined regulatory trajectory. Understanding this chronological timeline allows borrowers to identify the exact window when lenders face maximum provisioning pressure, creating ideal conditions for negotiating deep settlement waivers.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Timeline Interval</th>
                      <th className="p-3">Regulatory Asset Status</th>
                      <th className="p-3">Lender Recovery Actions</th>
                      <th className="p-3">Recommended Strategic Response</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 1 to 30</td>
                      <td className="p-3 font-mono text-[11px]">SMA-0</td>
                      <td className="p-3">Automated SMS alerts, email reminders, and preliminary collection calls.</td>
                      <td className="p-3">Evaluate liquidity; avoid taking fresh high-interest short-term debt to service old loans.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 31 to 60</td>
                      <td className="p-3 font-mono text-[11px]">SMA-1</td>
                      <td className="p-3">Intensified telephonic outreach and initial loan demand notices.</td>
                      <td className="p-3">Compile audited business loss accounts, tax returns, and commercial closure documentation.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 61 to 90</td>
                      <td className="p-3 font-mono text-[11px]">SMA-2</td>
                      <td className="p-3">Final pre-NPA warnings and allocation of file to external collection agencies.</td>
                      <td className="p-3">Assert RBI Fair Practices Code protections against third-party agent harassment.</td>
                    </tr>
                    <tr className="bg-amber-50/50">
                      <td className="p-3 font-bold text-slate-900">Day 91 to 120</td>
                      <td className="p-3 font-mono text-[11px] text-amber-700 font-bold">NPA Classification</td>
                      <td className="p-3">Tier-1 capital provisioning triggered; file transferred to Stressed Asset Desk.</td>
                      <td className="p-3">Conduct forensic ledger audit and engage professional institutional debt resolution counsel.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Day 121 to 180</td>
                      <td className="p-3 font-mono text-[11px] text-[#1886ff] font-bold">Prime OTS Window</td>
                      <td className="p-3">Issuance of Section 25 PSSA notices or arbitration demand communications.</td>
                      <td className="p-3 font-bold text-slate-900">Execute bilateral compromise negotiations to secure 50% to 80% total waivers.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Month 6 and Beyond</td>
                      <td className="p-3 font-mono text-[11px]">Write-off / ARC Transfer</td>
                      <td className="p-3">Ex-parte arbitral hearings or portfolio assignment to Asset Reconstruction Companies.</td>
                      <td className="p-3">Remit sanctioned settlement tranches directly and obtain official No Dues Certificate.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: Specialized Real-World Scenarios */}
            <section id="specialized-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>Complex Scenarios</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                10. Specialized Scenarios: Startups, GST Closure &amp; ARC Transfers
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Business failures encompass diverse corporate structures, multi-lender exposures, and debt assignment intricacies. Addressing these complex circumstances requires tailored legal and financial resolution strategies.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-[#1886ff]" />
                    Multi-Lender Exposure &amp; Cross-Default
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Founders who borrowed across multiple banks face simultaneous recovery actions and cross-default acceleration. Strategic debt resolution consolidates all personal credit lines into a synchronized hardship dossier, negotiating parallel compromise settlements to prevent fragmented litigation.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-emerald-600" />
                    Venture Capital Collapse &amp; Startup Liquidation
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    When venture funding term sheets fall through, founders often remain burdened with personal loans used for company burn rate. Submitting investor termination letters, board dissolution resolutions, and zero-balance current accounts proves genuine commercial failure, securing deep haircuts.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-indigo-600" />
                    Sole Proprietorship vs Personal Asset Segregation
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Because sole proprietorships lack distinct legal personality from the owner, lenders attempt to blur enterprise and personal liabilities. Presenting official GST cancellation certificates, trade license surrenders, and nil tax returns establishes commercial insolvency, shielding personal assets.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-600" />
                    Asset Reconstruction Company (ARC) Portfolio Assignments
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    When banks assign delinquent personal loans to ARCs like Phoenix, ARCIL, or Prudent under Section 5 of SARFAESI, recovery rights transfer. Because ARCs purchase stressed portfolios at steep seventy to eighty percent discounts, skilled negotiators can secure settlements with waivers exceeding 70% to 80%.
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
                Frequently Asked Questions: Business Loss Loan Default Relief
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Clear, legally verified answers addressing the most critical borrower questions regarding personal loan defaults following business closure, proving financial hardship, halting recovery harassment, and securing official No Dues Certificates.
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
                Official Regulatory References &amp; Statutory Legal Framework
              </h2>
              <ul className="space-y-2 text-xs text-slate-600 leading-relaxed list-disc pl-5">
                <li>
                  <strong>Reserve Bank of India:</strong> Master Direction on Fair Practices Code for Non-Banking Financial Companies and Scheduled Commercial Banks (Updated 2026).
                </li>
                <li>
                  <strong>Payment and Settlement Systems Act, 2007:</strong> Section 25, Statutory Framework Governing Dishonour of Electronic Funds Transfer Mandates.
                </li>
                <li>
                  <strong>Negotiable Instruments Act, 1881:</strong> Section 138, Legal Provisions Regarding Dishonour of Cheques for Legally Enforceable Debt Discharge.
                </li>
                <li>
                  <strong>Arbitration and Conciliation Act, 1996:</strong> Sections 12(5), 16, and 21, Jurisdictional Ineligibility of Unilateral Arbitrators and Supreme Court Rulings (Perkins Eastman / TRF Limited).
                </li>
                <li>
                  <strong>Credit Information Companies (Regulation) Act, 2005 (CICRA):</strong> Section 21, Standards for Accuracy of Credit Information and Bureau Dispute Rectification Protocols.
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
                  <a href="https://www.cibil.com" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>TransUnion CIBIL India</span>
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
                  <a href="https://cybercrime.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>National Cyber Crime Portal</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* 10 Internal Topic Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Explore Related CredSettle Guides:</span>
                <div className="flex flex-wrap gap-2">
                  <Link href="/bank-sent-legal-notice-for-loan-what-to-do" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Bank Legal Notice Defense
                  </Link>
                  <Link href="/arbitration-notice-personal-loan-default" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Arbitration Notice for Loan
                  </Link>
                  <Link href="/lok-adalat-personal-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Lok Adalat Loan Settlement
                  </Link>
                  <Link href="/services/personal-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Personal Loan Settlement
                  </Link>
                  <Link href="/services/anti-harassment" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Anti-Harassment Protection
                  </Link>
                  <Link href="/bank-recovery-case-in-court" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Bank Court Recovery Cases
                  </Link>
                  <Link href="/convert-settled-status-to-closed" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Convert Settled to Closed
                  </Link>
                  <Link href="/cibil-score-kaise-badhaye-after-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Rebuild CIBIL Score
                  </Link>
                  <Link href="/full-and-final-settlement-meaning" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Full &amp; Final Settlement Meaning
                  </Link>
                  <Link href="/get-noc-after-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Get No Dues Certificate
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
                Expert in banking compliance, distressed MSME resolution, NPA negotiations, and commercial debt restructuring with extensive experience representing stressed founders before banking ombudsmen and credit committees.
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
                  CONFIDENTIAL LEGAL DEFENSE
                </span>
                <h3 className="text-lg md:text-xl font-bold text-white leading-snug">
                  Personal Loan Default After Business Loss?
                </h3>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our senior debt resolution specialists halt recovery agent harassment, respond to legal notices, and negotiate up to 80% waivers directly with bank credit committees.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Settle Debt from Business Loss
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
                  <span>Direct Bank Settlement • 100% RBI Compliant</span>
                </div>
              </div>
            </div>

            {/* Card 3: CredSettle Trust Badges */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <h4 className="font-bold text-slate-900 text-sm">The CredSettle Advantage</h4>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Zero Upfront Risk:</strong> Success-linked resolution fee structure.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Direct Account Remittance:</strong> No middleman fund handling.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Complete RBI Compliance:</strong> Strict Fair Practices enforcement.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Verified No Dues Certificate:</strong> Official bank closure guarantee.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <h4 className="font-bold text-slate-900 text-sm">Related Legal Guides</h4>
              <div className="space-y-2.5">
                <Link
                  href="/bank-sent-legal-notice-for-loan-what-to-do"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Bank Sent Legal Notice for Loan Default
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Full step-by-step reply blueprint &rarr;</span>
                </Link>

                <Link
                  href="/arbitration-notice-personal-loan-default"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Arbitration Notice for Personal Loan
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Challenge unilateral arbitrator guide &rarr;</span>
                </Link>

                <Link
                  href="/convert-settled-status-to-closed"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Convert Settled Loan to Closed Status
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Clean credit report blueprint &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
