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
  Landmark
} from 'lucide-react';

export default function EpfGratuitySeizureClient() {
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
    { id: 'statutory-immunity', label: '1. Statutory Immunity & Protection' },
    { id: 'financial-forensics', label: '2. Financial Forensics: Trust vs Bank Account' },
    { id: 'asset-protection-matrix', label: '3. Asset Protection Matrix' },
    { id: 'banker-lien-defense', label: '4. Banker Lien Defense & Supreme Court Rulings' },
    { id: 'visual-blueprint', label: '5. Visual Blueprint Infographic' },
    { id: 'step-by-step-sop', label: '6. 6-Stage Retirement Shield Protocol' },
    { id: 'statutory-defense', label: '7. Statutory Notice Defense & Police Rights' },
    { id: 'escalation-matrix', label: '8. 3-Tier Grievance & Redressal Matrix' },
    { id: 'procedural-timeline', label: '9. Procedural Milestones & Timeline' },
    { id: 'specialized-scenarios', label: '10. Specialized Scenarios: VRS & Layoffs' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
    {
      q: 'Can a bank legally seize or freeze my EPF account for loan default?',
      a: 'No. Under Section 10 of the Employees Provident Funds and Miscellaneous Provisions Act, 1952, money in an EPF account cannot be assigned, charged, or attached by any court decree or creditor. Banks have zero legal authority to freeze or seize your PF balance.'
    },
    {
      q: 'Can a court or bank attach my gratuity to recover an unpaid loan?',
      a: 'No. Section 13 of the Payment of Gratuity Act, 1972 explicitly exempts gratuity from attachment by any civil, revenue, or criminal court decree. Section 60(1)(g) of the Civil Procedure Code also shields gratuity from debt recovery execution.'
    },
    {
      q: 'Can a bank exercise a banker lien on my PF or gratuity under Section 171?',
      a: 'No. The Supreme Court in Radhey Shyam Gupta v. Punjab National Bank ruled that statutory retirement benefits retain their protected character. A banker general lien under Section 171 of the Indian Contract Act cannot override explicit statutory protections of the EPF or Gratuity Acts.'
    },
    {
      q: 'What happens if my EPF or gratuity is credited into the same bank where I defaulted?',
      a: 'If terminal benefits enter a savings account in the creditor bank, the bank may attempt an automated right of set-off debit. While legally improper once proven as retirement funds, you can prevent this by updating your EPFO bank details to a neutral bank with no loan exposure.'
    },
    {
      q: 'Can recovery agents visit my employer or block my EPFO UAN number?',
      a: 'No. Third-party recovery agents have no access to EPFO databases, UAN portals, or corporate gratuity trusts. Threatening to block your PF or calling your HR is illegal under the RBI Fair Practices Code and constitutes criminal intimidation under Section 351 of BNS 2023.'
    },
    {
      q: 'Does the protection under Section 10 of the EPF Act continue after retirement?',
      a: 'Yes. In Union of India v. Jyoti Chit Fund, the Supreme Court confirmed that provident fund monies maintain statutory immunity until they reach the employee. In Radhey Shyam Gupta, the court confirmed that commuted pension and gratuity remain protected post-retirement.'
    },
    {
      q: 'Can an employer deduct loan dues from gratuity on behalf of a creditor bank?',
      a: 'No. Section 4(6) of the Payment of Gratuity Act permits forfeiture only for employee misconduct causing financial loss to the employer, or criminal acts. An employer cannot divert gratuity to satisfy an external bank loan or credit card debt without explicit written employee consent.'
    },
    {
      q: 'What legal steps should I take if a bank threatens to seize my PF or gratuity?',
      a: 'Immediately send a formal legal notice through counsel citing Section 10 of the EPF Act, Section 13 of the Gratuity Act, and Section 60 of CPC. File a harassment complaint with the bank Principal Nodal Officer and escalate to the RBI Integrated Ombudsman at cms.rbi.org.in.'
    },
    {
      q: 'Can I use a portion of my EPF or gratuity to settle my defaulted loan via OTS?',
      a: 'Yes, completely at your own voluntary discretion. If you choose to settle your debts, you can use withdrawn funds to negotiate a One-Time Settlement (OTS) with 50% to 80% waivers on interest and charges, obtaining an official No Dues Certificate.'
    },
    {
      q: 'How does CredSettle protect salaried employees facing retirement fund threats?',
      a: 'CredSettle provides immediate legal insulation by challenging illegal recovery notices, stopping agent intimidation at your workplace, safeguarding your terminal benefits, and negotiating deep debt waivers directly with bank zonal credit committees.'
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
            <span>Salaried Employee Rights &amp; Social Security Legal Shield</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Can Bank Seize Your EPF or Gratuity for Loan Default?
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            A comprehensive legal guide for salaried employees facing personal loan or credit card default. Understand Section 10 of the EPF Act, Section 13 of the Gratuity Act, and how to stop illegal bank set-off and recovery threats.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Protect Your EPF &amp; Gratuity</span>
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
                  <span>Statutory Social Security Shield</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Protected under Section 10 EPF Act 1952 and Section 13 Payment of Gratuity Act 1972.
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
                <span>EXECUTIVE BRIEF: EPF &amp; GRATUITY IMMUNITY AGAINST LOAN RECOVERY</span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Absolute Statutory Immunity:</strong> Under Section 10 of the EPF Act and Section 13 of the Gratuity Act, provident fund and gratuity cannot be attached by any court decree or lender.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">No Right of Banker Lien:</strong> Banks cannot exercise a general lien under Section 171 of the Contract Act against statutory retirement funds.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Supreme Court Precedents:</strong> Landmark rulings in Radhey Shyam Gupta and Jyoti Chit Fund uphold total protection for retirement benefits until received.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Neutral Bank Account Rule:</strong> Always disburse EPF and Gratuity into a neutral savings account where you hold zero loan exposure.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Recovery Agent Harassment Illegal:</strong> Recovery agents threatening to block your UAN or attach your gratuity commit a criminal offence under BNS 351.
                  </span>
                </li>
              </ul>
            </div>

            {/* SECTION 1: Statutory Immunity & Legal Protection */}
            <section id="statutory-immunity" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Enactments &amp; Parliament Mandates</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. Statutory Immunity: EPF &amp; Gratuity Legal Protection
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When a salaried borrower defaults on an unsecured personal loan or credit card in India, collection agencies often deploy aggressive psychological tactics. One of the most common threats is claiming that the bank will seize your Employees Provident Fund (EPF) balance or freeze your Gratuity payout directly through your employer. These claims are legally false and constitute illegal intimidation.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The Indian Parliament established statutory social security schemes specifically to prevent employees and their families from falling into destitution upon superannuation or retrenchment. Consequently, the laws governing provident funds and gratuities contain non-negotiable statutory immunities that override ordinary civil debt recovery mechanisms.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under Section 10(1) of the Employees Provident Funds and Miscellaneous Provisions Act, 1952, the amount standing to the credit of any member in the Fund shall not in any way be capable of being assigned or charged. The law strictly clarifies that EPF accumulations cannot be attached under any decree or order of any civil, revenue, or criminal court in respect of any debt or liability incurred by the member.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Similarly, Section 13 of the Payment of Gratuity Act, 1972 enacts an absolute statutory protection. It states that no gratuity payable under the Act shall be liable to attachment in execution of any decree or order of any civil, revenue, or criminal court. Furthermore, Section 60(1), proviso clauses (g) and (k) of the Code of Civil Procedure (CPC), 1908, explicitly exempts both gratuities and compulsory provident fund deposits from court attachment.
              </p>
            </section>

            {/* SECTION 2: Financial Forensics: Employer Trust vs Account Credit */}
            <section id="financial-forensics" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <DollarSign className="w-4 h-4 text-[#1886ff]" />
                <span>Financial Forensics &amp; Account Architecture</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. Financial Forensics: Employer Trust vs Account Credit
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                To understand how your social security assets are protected, it is critical to distinguish between funds held in the statutory EPFO trust and funds credited into your commercial savings account. While money remains inside the EPFO trust or your corporate gratuity fund, no bank or recovery agent can access or freeze it.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                However, a dangerous vulnerability arises known as the Savings Account Trap. When an employee applies for PF withdrawal or receives their gratuity payout, the funds are transferred via NEFT into a nominated commercial bank savings account. If that savings account is held with the very same bank where the borrower has an overdue personal loan or credit card, the lender software may initiate an automated right of set-off debit.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                While courts have repeatedly held that terminal social security benefits retain their exempt character even after initial deposit, recovering money after an automated bank sweep requires legal notices and ombudsman complaints. To completely eliminate this risk, borrowers must proactively redirect their EPFO and gratuity disbursement to a neutral bank account where they have no outstanding debts.
              </p>

              {/* Representative Calculation Card */}
              <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white shadow-xs">
                <div className="bg-slate-900 text-white p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                    <span className="font-bold text-sm">Representative Ledger Audit &amp; Asset Protection Math</span>
                  </div>
                  <span className="text-xs text-blue-300 font-mono">₹12 Lakh Gross Ledger Claim</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80">
                    <thead>
                      <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-semibold">
                        <th className="p-3">Financial Asset / Claim Component</th>
                        <th className="p-3">Bank Claim / Asset Value</th>
                        <th className="p-3">Statutory Legal Immunity Status</th>
                        <th className="p-3 text-right">Protected Balance</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200/80 text-slate-600">
                      <tr>
                        <td className="p-3 font-medium text-slate-900">EPF Member Balance (EPFO Trust)</td>
                        <td className="p-3">₹8,50,000</td>
                        <td className="p-3 text-emerald-600 font-semibold">100% Absolute Statutory Immunity (Sec 10)</td>
                        <td className="p-3 text-right font-bold text-emerald-700">₹8,50,000 (Fully Immune)</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Statutory Gratuity Entitlement</td>
                        <td className="p-3">₹5,20,000</td>
                        <td className="p-3 text-emerald-600 font-semibold">100% Court Attachment Bar (Sec 13)</td>
                        <td className="p-3 text-right font-bold text-emerald-700">₹5,20,000 (Fully Immune)</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Overdue Personal Loan Ledger Claim</td>
                        <td className="p-3 text-rose-600 font-bold">₹12,00,000</td>
                        <td className="p-3 text-blue-600 font-semibold">Civil Debt: Negotiable under RBI OTS Rules</td>
                        <td className="p-3 text-right font-bold text-slate-900">₹3,80,000 (Negotiated OTS)</td>
                      </tr>
                      <tr className="bg-blue-50/70 font-bold text-slate-900">
                        <td className="p-3">Net Social Security Preservation</td>
                        <td className="p-3 text-slate-900">₹13,70,000 Saved</td>
                        <td className="p-3 text-emerald-700">68% Loan Debt Waiver Secured via OTS</td>
                        <td className="p-3 text-right text-[#1886ff] text-sm sm:text-base">100% Savings Shielded</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* SECTION 3: Asset Protection Matrix */}
            <section id="asset-protection-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Asset Vulnerability &amp; Shield Matrix</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Asset Protection Matrix: Seizure Immunity Comparison
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Borrowers facing acute debt distress must understand which personal assets are legally protected under Indian debt recovery laws and which instruments remain vulnerable to civil attachment or banker liens.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                While social security assets such as EPF and gratuity enjoy statutory immunity, general assets like regular savings deposits and mutual funds can be subjected to garnishee orders by civil courts or the Debt Recovery Tribunal (DRT).
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[620px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Asset Classification</th>
                      <th className="p-3">Governing Legislation</th>
                      <th className="p-3">Court Attachment Immunity</th>
                      <th className="p-3">Banker Lien Vulnerability</th>
                      <th className="p-3">Strategic Protection SOP</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr className="bg-blue-50/30">
                      <td className="p-3 font-bold text-slate-900">Employees Provident Fund (EPF)</td>
                      <td className="p-3">EPF Act, 1952 (Sec 10)</td>
                      <td className="p-3 text-emerald-600 font-semibold">Absolute Immunity</td>
                      <td className="p-3 text-emerald-600 font-semibold">Zero Lien Permitted</td>
                      <td className="p-3">Retain in EPFO or withdraw to neutral bank.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Statutory Gratuity</td>
                      <td className="p-3">Gratuity Act, 1972 (Sec 13)</td>
                      <td className="p-3 text-emerald-600 font-semibold">Absolute Immunity</td>
                      <td className="p-3 text-emerald-600 font-semibold">Zero Lien Permitted</td>
                      <td className="p-3">Disburse to external bank account.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Government / Service Pension</td>
                      <td className="p-3">Pensions Act, 1871 (Sec 11)</td>
                      <td className="p-3 text-emerald-600 font-semibold">Total Exemption</td>
                      <td className="p-3 text-emerald-600 font-semibold">Zero Lien Permitted</td>
                      <td className="p-3">Protected under CPC Section 60(1)(g).</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Monthly Salaried Inflows</td>
                      <td className="p-3">CPC, 1908 (Sec 60(1)(i))</td>
                      <td className="p-3 text-amber-600">Partial Exemption (First ₹1,000 + 2/3 Exempt)</td>
                      <td className="p-3 text-rose-600">High if in Creditor Bank</td>
                      <td className="p-3">Switch salary account to third-party bank.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Savings Account Balance</td>
                      <td className="p-3">Civil Procedure Code, 1908</td>
                      <td className="p-3 text-rose-600">Vulnerable to Garnishee Order</td>
                      <td className="p-3 text-rose-600">Immediate Right of Set-Off</td>
                      <td className="p-3">Never maintain surplus cash in creditor bank.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Fixed Deposits / Mutual Funds</td>
                      <td className="p-3">Indian Contract Act, 1872</td>
                      <td className="p-3 text-rose-600">Attachable by DRT / Court</td>
                      <td className="p-3 text-rose-600">Subject to Banker General Lien</td>
                      <td className="p-3">Liquidate voluntarily for structured OTS deal.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 4: Banker Lien Defense & Supreme Court Rulings */}
            <section id="banker-lien-defense" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>Judicial Precedents &amp; Jurisprudence</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. Banker Lien Defense: Judicial Precedents &amp; Rulings
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When challenged on attempting to attach terminal benefits, banks frequently claim a general banker lien under Section 171 of the Indian Contract Act, 1872. Section 171 allows a bank to retain security or cash balances belonging to a customer as security for a general balance of account.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                However, the Supreme Court of India and various High Courts have settled this controversy conclusively. A contractual general lien under Section 171 cannot override specific, overriding statutory protections enacted by Parliament in special welfare legislation like the EPF Act and the Payment of Gratuity Act.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                In the landmark case of Radhey Shyam Gupta v. Punjab National Bank (2009) 1 SCC 376, the Supreme Court explicitly held that pension and gratuity amounts do not lose their character as long as they are distinctively traceable, even if they have been deposited in a bank account. The court held that such funds cannot be attached in execution of a civil court decree.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Furthermore, in Union of India v. Jyoti Chit Fund &amp; Finance (1976) 3 SCC 271, the Supreme Court ruled that the statutory protection under Section 10 of the EPF Act continues until the money actually reaches the hands of the employee. Any attachment order issued by a court or bank prior to that moment is void ab initio. The Calcutta High Court in Som Prakash v. State Bank of India similarly held that a bank cannot unilaterally freeze terminal benefits to recover outstanding loan dues.
              </p>
            </section>

            {/* SECTION 5: Visual Blueprint Infographic */}
            <section id="visual-blueprint" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Sparkles className="w-4 h-4 text-[#1886ff]" />
                <span>Visual Blueprint</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. Visual Blueprint: EPF &amp; Gratuity Shield Workflow
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This comprehensive visual roadmap illustrates the legal shield protecting statutory provident funds and gratuities from lender recovery, highlighting key statutory immunities and defensive account steps.
              </p>

              <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-slate-100 bg-slate-100">
                  <Image
                    src="/images/infographics/can-bank-seize-epf-provident-fund-for-loan-recovery.jpg"
                    alt="EPF and Gratuity Protection Against Bank Loan Recovery Law"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 900px"
                    className="object-contain hover:scale-[1.01] transition-transform duration-300"
                    priority
                  />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-500 pt-1 gap-2">
                  <span>Official CredSettle Social Security Protection Framework • Section 10 EPF Act Compliant</span>
                  <a
                    href="/images/infographics/can-bank-seize-epf-provident-fund-for-loan-recovery.jpg"
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
                6. Step-by-Step SOP: 6-Stage Retirement Shield Protocol
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If a lender or collection agency threatens to touch your provident fund or gratuity, executing this systematic six-stage protocol guarantees complete legal insulation and paves the way for an affordable debt settlement.
              </p>

              <div className="space-y-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">1</span>
                    Stage 1: Update EPFO &amp; Gratuity Bank Mandates
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Log into the Unified Member EPFO Portal immediately. Submit a bank KYC update linking a verified savings account in a completely different bank where you carry zero loan or credit card facilities.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">2</span>
                    Stage 2: Notify Your Corporate Payroll &amp; HR Desk
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Submit a formal written intimation to your human resources department specifying that your gratuity and final settlement cheques must be released strictly into your designated neutral bank account.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">3</span>
                    Stage 3: Issue Statutory Legal Warning to Creditor Bank
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Through legal counsel, dispatch a formal notice to the bank zonal office citing Section 10 of the EPF Act, Section 13 of the Gratuity Act, and Section 60 CPC, warning them against unauthorized automated debits.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">4</span>
                    Stage 4: File Harassment Complaint Against Threats
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If recovery agents call you or message your employer threatening to freeze your PF or seize gratuity, record the evidence and file a complaint under BNS Section 351 and the RBI Fair Practices Code.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">5</span>
                    Stage 5: Initiate Direct Credit Committee Talks
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    With your social security fully insulated, enter structured settlement talks directly with the bank stressed asset desk, demanding complete waiver of penal charges and a 50% to 75% principal haircut.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">6</span>
                    Stage 6: Settlement Payment &amp; No Dues Certificate
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Verify the official bank settlement sanction letter, remit the agreed compromise sum directly into your loan account via RTGS, and obtain your formal No Dues Certificate within thirty days.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: Statutory Notice Defense & Police Rights */}
            <section id="statutory-defense" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <ShieldCheck className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Defenses &amp; Borrower Rights</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. Statutory Defense: Criminal Intimidation Protections
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Borrowers must know that debt recovery agents who issue bogus claims about seizing provident funds or raiding workplace payroll departments are operating outside the law. You have potent criminal and civil protections against such conduct.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                    <Gavel className="w-4 h-4" />
                    <span>Section 351 &amp; 352 BNS (Criminal Intimidation)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Threatening a salaried borrower with false property seizure or arrest constitutes criminal intimidation under Bharatiya Nyaya Sanhita, punishable with imprisonment and fines.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                    <Building2 className="w-4 h-4" />
                    <span>RBI Fair Practices Code Mandate</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    RBI circulars strictly forbid agents from contacting employers, visiting workplaces without consent, or disclosing debt details to third-party colleagues or HR managers.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-purple-700 font-bold text-sm">
                    <Scale className="w-4 h-4" />
                    <span>Civil Injunction under Order 39 CPC</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If a creditor bank illegally blocks a savings account receiving terminal benefits, borrowers can obtain an ex-parte temporary injunction from a civil judge directing immediate de-freezing.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Constitutional Article 21 &amp; 300A Defense</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The Supreme Court has established that social security funds constitute an extension of the constitutional right to livelihood and property, protecting citizens from arbitrary private deprivation.
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
                8. 3-Tier Escalation Matrix: Grievance Redressal Steps
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If branch managers or recovery representatives threaten your retirement benefits or attempt unauthorized lien placement, utilize the Reserve Bank of India statutory grievance escalation framework.
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
                      <td className="p-3">Halts unauthorized lien flags, stops agent threats, and registers formal hardship request.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 2: PNO</td>
                      <td className="p-3">Principal Nodal Officer (Head Office)</td>
                      <td className="p-3 font-mono">14 to 21 Working Days</td>
                      <td className="p-3">Investigates wrongful set-off attempts, enforces statutory compliance, and initiates OTS.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Level 3: RBI Ombudsman</td>
                      <td className="p-3">Reserve Bank Integrated Ombudsman</td>
                      <td className="p-3 font-mono">30 Days Post-PNO</td>
                      <td className="p-3">Issues binding directions via cms.rbi.org.in to reverse illegal set-offs and penalize rogue lenders.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 9: Procedural Timeline Table */}
            <section id="procedural-timeline" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Clock className="w-4 h-4 text-[#1886ff]" />
                <span>Procedural Milestones</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Procedural Timeline: Default Stages to Account Safety
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Understanding the delinquency lifecycle of an unsecured personal loan enables you to anticipate lender actions and insulate your terminal benefits before aggressive collection tactics begin.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Delinquency Window</th>
                      <th className="p-3">Regulatory Asset Status</th>
                      <th className="p-3">Lender Collection Actions</th>
                      <th className="p-3">Strategic Borrower Response</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 1 to 30</td>
                      <td className="p-3 font-mono text-[11px]">SMA-0</td>
                      <td className="p-3">Automated payment reminder SMS and soft telephone calls.</td>
                      <td className="p-3">Verify that salary and PF are not routed into the loan bank.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 31 to 60</td>
                      <td className="p-3 font-mono text-[11px]">SMA-1</td>
                      <td className="p-3">Persistent calls and formal overdue letters.</td>
                      <td className="p-3">Update your EPFO KYC to a completely separate neutral bank.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 61 to 90</td>
                      <td className="p-3 font-mono text-[11px]">SMA-2</td>
                      <td className="p-3">Pre-NPA warnings and deployment of third-party recovery agents.</td>
                      <td className="p-3">Submit written instructions to employer HR regarding gratuity account.</td>
                    </tr>
                    <tr className="bg-amber-50/50">
                      <td className="p-3 font-bold text-slate-900">Day 91 to 120</td>
                      <td className="p-3 font-mono text-[11px] text-amber-700 font-bold">NPA Tagging</td>
                      <td className="p-3">Loan marked Non-Performing Asset; capital provisioning triggered.</td>
                      <td className="p-3">Audit the loan ledger and eliminate inflated penal interest charges.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Day 121 to 180</td>
                      <td className="p-3 font-mono text-[11px] text-[#1886ff] font-bold">Prime OTS Window</td>
                      <td className="p-3">Legal demand notices or arbitration letters dispatched.</td>
                      <td className="p-3 font-bold text-slate-900">Negotiate a 50% to 75% compromise settlement with CredSettle.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Month 6 and Beyond</td>
                      <td className="p-3 font-mono text-[11px]">Loss Asset / ARC</td>
                      <td className="p-3">Debt written off or sold to Asset Reconstruction Company.</td>
                      <td className="p-3">Execute settlement payment and secure the official No Dues Certificate.</td>
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
                10. Specialized Scenarios: VRS, Layoffs &amp; Joint Accounts
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Real-world debt distress frequently intersects with major employment transitions. Here is how statutory social security protections apply across complex scenarios.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-[#1886ff]" />
                    Voluntary Retirement Scheme (VRS) Lump Sums
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    VRS compensation consists of ex-gratia payments, accumulated PF, and gratuity. While the PF and gratuity components are strictly exempt from attachment, disburse the entire VRS package into a neutral bank to prevent automated banker liens.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-emerald-600" />
                    Corporate Layoffs &amp; Severance Pay Packages
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    During company downsizings, employees receive retrenchment compensation and gratuity. Section 13 shields gratuity completely. CredSettle helps laid-off professionals settle outstanding debt at deep discounts without touching retirement nest eggs.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-indigo-600" />
                    Joint Bank Accounts with Spouses or Family
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If an employee deposits PF funds into a joint account with a spouse who has defaulted on their own credit card, the creditor bank might erroneously place a freeze. Maintaining individual accounts preserves distinct ownership and legal immunity.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-amber-600" />
                    Fixed Deposits Created from Withdrawn PF Monies
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under the Radhey Shyam Gupta ruling, fixed deposits created directly from commuted pension and gratuity remain protected if distinct financial tracing is maintained. Document your withdrawal trail to resist unlawful attachment orders.
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
                Frequently Asked Questions: EPF &amp; Gratuity Seizure Rules
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Clear, verified legal guidance addressing critical questions regarding provident fund protection, gratuity immunity, illegal banker liens, and borrower rights under Indian law.
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
                Official Regulatory Citations &amp; Statutory Legal Framework
              </h2>
              <ul className="space-y-2 text-xs text-slate-600 leading-relaxed list-disc pl-5">
                <li>
                  <strong>Employees Provident Funds and Miscellaneous Provisions Act, 1952:</strong> Section 10, Protection Against Attachment of Member Provident Fund Credit.
                </li>
                <li>
                  <strong>Payment of Gratuity Act, 1972:</strong> Section 13, Total Statutory Exemption of Gratuity from Court Decrees and Debt Attachments.
                </li>
                <li>
                  <strong>Code of Civil Procedure, 1908 (CPC):</strong> Section 60(1), Proviso Clauses (g) and (k), Non-Attachable Properties in Execution of Decrees.
                </li>
                <li>
                  <strong>Indian Contract Act, 1872:</strong> Section 171, Limitations on General Banker Lien Over Statutory Social Security Benefits.
                </li>
                <li>
                  <strong>Supreme Court of India Precedents:</strong> Radhey Shyam Gupta v. Punjab National Bank (2009) and Union of India v. Jyoti Chit Fund (1976).
                </li>
              </ul>

              {/* 6 Outbound Authority Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Verified Government &amp; Regulatory Portals:</span>
                <div className="flex flex-wrap gap-2">
                  <a href="https://www.epfindia.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>Employees Provident Fund Organisation</span>
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
                  <a href="https://www.indiacode.nic.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>India Code Statutory Repository</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://epfigms.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>EPFiGMS Grievance Portal</span>
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
                  <Link href="/pension-attachment-for-loan-recovery" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Pension Attachment Rules
                  </Link>
                  <Link href="/can-bank-file-section-420-cheating-case-for-loan-default" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Section 420 Loan Default Rules
                  </Link>
                  <Link href="/salary-account-frozen-by-bank" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Salary Account Freeze
                  </Link>
                  <Link href="/garnishee-order-bank-account-freeze-loan" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Garnishee Order Defense
                  </Link>
                  <Link href="/can-bank-deduct-money-from-another-account" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Bank Set-Off Rules
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
                  <Link href="/willful-defaulter-notice-rbi-rules-legal-defense-guide" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Willful Defaulter Notice Defense
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
                Expert in banking compliance, consumer debt protection, statutory social security immunities, and NPA compromise settlements with extensive experience defending salaried borrowers against unlawful recovery practices.
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
                  Bank Threatening Your EPF or Gratuity?
                </p>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our senior legal resolution specialists stop unlawful employer harassment, invoke statutory protections under Section 10 of the EPF Act, and negotiate up to 75% loan settlement waivers.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Protect Your Savings Now
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
                  <span><strong>Zero Social Security Seizure:</strong> 100% legal immunity enforcement.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Employer Harassment Block:</strong> Legal notice protection for HR.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>RBI Ombudsman Redressal:</strong> Direct escalation against rogue lenders.</span>
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
                  href="/pension-attachment-for-loan-recovery"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Pension Attachment for Loan Recovery
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Statutory pension defense &rarr;</span>
                </Link>

                <Link
                  href="/salary-account-frozen-by-bank"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Salary Account Frozen by Bank
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Account unfreeze legal steps &rarr;</span>
                </Link>

                <Link
                  href="/garnishee-order-bank-account-freeze-loan"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Garnishee Order Bank Account Freeze
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
