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
  Bookmark,
  ArrowRight,
  Clock,
  UserCheck,
  Sparkles,
  Gavel,
  BadgeAlert,
  Landmark,
  Home,
  ShieldAlert,
  FileCheck,
  Shield,
  HeartHandshake,
  UserX
} from 'lucide-react';

export default function PersonalLoanAfterDeathClient() {
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
    { id: 'core-legal-framework', label: '1. Unsecured Debt & Death Realities' },
    { id: 'section-50-cpc-shield', label: '2. Section 50 CPC Estate Shield' },
    { id: 'co-borrower-guarantor-distinction', label: '3. Co-Borrowers vs. Legal Heirs' },
    { id: 'debt-category-comparison-grid', label: '4. Debt Liability Comparison Grid' },
    { id: 'estate-nav-math-analytics', label: '5. Estate NAV & Liability Analytics' },
    { id: 'infographic-overview', label: 'Visual 6-Step Defense Blueprint' },
    { id: 'bereaved-family-sop', label: '6. 6-Stage SOP for Legal Heirs' },
    { id: 'formal-legal-notice-draft', label: '7. Cease & Desist Legal Terminal' },
    { id: 'three-tier-escalation-matrix', label: '8. 3-Tier Redressal Hierarchy' },
    { id: 'chronological-resolution-milestones', label: '9. Chronological Resolution Timelines' },
    { id: 'specialized-loan-scenarios', label: '10. Insurance, Fintech Apps & Nominees' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
    {
      q: "Does a family or legal heir have to repay an unsecured personal loan after the borrower's death?",
      a: "No, family members and legal heirs are not personally liable to repay an unsecured personal loan out of their own income or personal assets. Under Section 37 of the Indian Contract Act, 1872 and Sections 50 and 52 of the Code of Civil Procedure (CPC), 1908, a legal heir's liability is strictly limited to the value of the inherited estate received from the deceased borrower. If no assets are inherited, the liability of the legal heirs is zero."
    },
    {
      q: "What happens if the deceased borrower had personal loan insurance or credit shield?",
      a: "If the personal loan was covered by a Credit Shield, Loan Protection Insurance, or Group Term Life Insurance policy bundled at the time of disbursement, the outstanding loan balance is settled directly by the insurance company upon submitting the borrower's Death Certificate and claim documents. The bank cannot demand repayment from the family while an insurance claim is active and must issue an unconditional No Dues Certificate (NDC) once settled."
    },
    {
      q: "Can a bank or recovery agent seize personal assets of legal heirs for an unpaid personal loan?",
      a: "No. A bank or recovery agent cannot seize, attach, or touch the personal property, salary, bank accounts, or gold belonging independently to the legal heirs. Under Section 50(2) of the CPC, court execution is restricted exclusively to property that belonged to the deceased borrower and came into the hands of the legal representatives. Any recovery agent threatening the family's personal assets commits extortion (Section 308 BNS / Section 383 IPC) and criminal intimidation (Section 351 BNS / Section 506 IPC)."
    },
    {
      q: "Is a co-borrower or guarantor liable if the primary borrower passes away?",
      a: "Yes. If a family member signed the loan agreement as a joint co-borrower or a co-guarantor, their liability is joint and several under Section 128 of the Indian Contract Act, 1872. Unlike non-signatory legal heirs, a co-borrower or guarantor remains directly contractually obligated to repay the debt regardless of whether they inherited any assets from the deceased borrower."
    },
    {
      q: "What should the family do immediately after a borrower passes away with an active personal loan?",
      a: "The family should follow three immediate steps: (1) Intimate the lending bank in writing with a certified copy of the Death Certificate and formal letter requesting freeze on interest and penalty accrual, (2) Verify the loan agreement and bank statement for loan protection insurance / credit shield deductions, and (3) Demand that the bank immediately halt automated ECS / NACH debits from the deceased's bank account to avoid unnecessary bounce charges."
    },
    {
      q: "Can banks initiate Section 138 cheque bounce or Section 25 NACH bounce cases against legal heirs?",
      a: "No. Criminal proceedings under Section 138 of the Negotiable Instruments Act, 1881 and Section 25 of the Payment and Settlement Systems Act, 2007 are strictly personal criminal liabilities against the drawer of the instrument. In landmark rulings, the Supreme Court has clarified that criminal liability abates upon the death of the accused and cannot be transferred to or initiated against surviving legal heirs."
    },
    {
      q: "What is the extent of legal heir liability under Section 50 and Section 52 of the CPC?",
      a: "Under Section 50(1) of the Code of Civil Procedure, 1908, a decree-holder may execute against the legal representative of the deceased debtor. However, Section 50(2) and Section 52(1) explicitly cap that liability solely to the extent of the property of the deceased which has come into the hands of the legal representative and has not been duly disposed of. If the deceased left an estate of ₹2 Lakhs and a debt of ₹5 Lakhs, the heirs cannot be forced to pay more than ₹2 Lakhs."
    },
    {
      q: "How to deal with aggressive recovery agents harassing the family of a deceased borrower?",
      a: "If recovery agents harass the bereaved family, immediately send a formal written notice enclosing the death certificate, citing Section 50 CPC, and quoting the RBI Master Directions on Recovery Agents which strictly prohibit abusive conduct, harassment of grieving family members, and visits outside 8 AM to 7 PM. If harassment continues, lodge a police complaint for criminal intimidation and file an escalation with the bank's Principal Nodal Officer (PNO) and the RBI Integrated Ombudsman (cms.rbi.org.in)."
    },
    {
      q: "Does the deceased borrower's unpaid personal loan affect the CIBIL score of legal heirs?",
      a: "No. An individual's CIBIL score and credit report are mapped strictly to their own PAN (Permanent Account Number). The default or demise of a deceased borrower is updated solely on the deceased individual's credit profile (marked as Deceased / Written Off / Settled). It has zero impact on the credit score, CIBIL history, or loan eligibility of surviving family members, provided they were not co-borrowers or guarantors."
    },
    {
      q: "Can legal heirs negotiate a One-Time Settlement (OTS) if the deceased left limited estate assets?",
      a: "Yes. If the deceased left partial assets or if legal heirs wish to clear the loan record without prolonged litigation, they can approach the bank's settlement committee for a One-Time Settlement (OTS). Banks typically offer significant waivers (50% to 80% on accumulated interest and penal charges) in deceased borrower accounts, after which they issue an unconditional No Dues Certificate (NDC) to permanently close the account."
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-[#1886ff] selection:text-white">
      {/* 1. COMPACT HERO SECTION (#2452ae Background) */}
      <section
        className="relative text-white pt-14 pb-10 md:pt-18 md:pb-12 px-4 md:px-8 overflow-hidden flex items-center justify-center text-center"
        style={{ backgroundColor: '#2452ae' }}
      >
        <div className="absolute inset-0 bg-black/5 z-0 pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center z-10 relative">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Does Family Have to Repay a Personal Loan After Death?
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            If a borrower passes away, who pays their unsecured personal loan? Discover the legal liability of legal heirs under Section 50 CPC, Indian Succession Act, and how to stop recovery agent harassment.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Bank Harassing Family? Get Legal Protection</span>
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
                      href={'#' + link.id}
                      className={
                        isActive
                          ? 'block py-1.5 px-2.5 rounded-lg transition-all duration-150 leading-snug bg-blue-50 text-[#1886ff] font-bold border-l-3 border-[#1886ff] pl-2'
                          : 'block py-1.5 px-2.5 rounded-lg transition-all duration-150 leading-snug text-slate-600 hover:text-slate-900 hover:bg-slate-50 font-medium'
                      }
                    >
                      {link.label}
                    </a>
                  );
                })}
              </nav>

              <div className="mt-4 pt-3 border-t border-slate-100 bg-blue-50/50 -mx-4 -mb-4 p-3 rounded-b-2xl">
                <div className="flex items-center gap-2 text-[11px] font-bold text-slate-800">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  <span>Legal Heir Protection Shield</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Governed by CPC 1908 Sections 50/52, Indian Contract Act &amp; RBI Fair Practices Code.
                </p>
              </div>
            </div>
          </aside>

          {/* ================= MIDDLE COLUMN: MAIN CONTENT ================= */}
          <div className="space-y-8 md:space-y-10 min-w-0">
            
            {/* Executive Brief Box */}
            <div
              id="quick-crux"
              className="scroll-target rounded-2xl bg-[#F4F8FE] border border-blue-100/90 border-l-[5px] border-l-[#1886ff] p-5 sm:p-6 md:p-7 shadow-xs space-y-4 text-slate-800"
            >
              <div className="flex items-center gap-2 text-xs md:text-sm font-black uppercase tracking-wider text-[#1886ff]">
                <Bookmark className="w-4 h-4 text-[#1886ff]" />
                <span>EXECUTIVE BRIEF: PERSONAL LOAN LIABILITY AFTER BORROWER DEATH</span>
              </div>

              <ul className="space-y-3.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Zero Personal Liability for Family:</strong> Surviving family members, spouses, children, and parents are NOT personally liable to pay an unsecured personal loan or credit card debt out of their personal salary, independent savings, or self-acquired assets.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Section 50 &amp; 52 CPC Estate Limitation:</strong> Under Sections 50 and 52 of the Code of Civil Procedure (CPC), 1908, a lender&apos;s recovery claim against legal heirs is strictly capped to the net asset value of the inherited estate. If the deceased left zero tangible assets, the legal heir liability is strictly ₹0.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Loan Protection Insurance Priority:</strong> Many personal loans have embedded credit life or loan protection insurance. Upon submission of the Death Certificate, the insurer must settle the outstanding debt directly with the bank, fully protecting the estate and family.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Criminal Proceedings Abate Upon Death:</strong> Any pending or threatened proceedings under Section 138 of the Negotiable Instruments Act (Cheque Bounce) or Section 25 of the Payment and Settlement Systems Act (NACH / ECS Bounce) legally extinguish upon the borrower&apos;s death and cannot be initiated against family members.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Absolute Protection from Harassment:</strong> Third-party recovery agents have zero right to visit, call, or intimidate grieving family members. Threatening family members violates the RBI Fair Practices Code and attracts criminal penalties for extortion and intimidation under Bharatiya Nyaya Sanhita (BNS) and IPC.
                  </div>
                </li>
              </ul>
            </div>

            {/* SECTION 1: Unsecured Debt & Death Realities */}
            <section id="core-legal-framework" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Foundations</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. What Happens to an Unsecured Personal Loan After the Borrower Dies?
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The sudden loss of a family member is a devastating emotional crisis. In the midst of bereavement, receiving aggressive phone calls, intimidating WhatsApp messages, or unannounced doorstep visits from bank recovery agents demanding immediate repayment of an unpaid personal loan can push families into extreme psychological and financial distress.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under Indian commercial jurisprudence and contract law, it is essential to understand the fundamental legal nature of an unsecured personal loan. A personal loan is granted purely on the basis of the individual borrower&apos;s creditworthiness, income profile, and personal repayment covenant. <strong>It creates no mortgage, hypothecation, pledge, or statutory charge over any family property.</strong>
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                <div className="bg-white p-5 rounded-2xl border border-blue-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-[#1886ff] font-bold text-sm">
                    <UserX className="w-4 h-4" />
                    <span>Privity of Contract</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under the Indian Contract Act, 1872, the loan contract exists strictly between the lender and the borrower. Family members who never signed the agreement are total third-party strangers to the contract.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-emerald-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Non-Inheritance of Debt</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Indian law does not recognize hereditary personal debt bondage. Debts do not automatically pass from deceased parents or spouses to surviving family members.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-purple-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-purple-700 font-bold text-sm">
                    <Gavel className="w-4 h-4" />
                    <span>Pure Civil Claim</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    A lender can only seek recovery through a civil claim against the deceased&apos;s estate. No criminal offense can be framed against non-signatory surviving relatives.
                  </p>
                </div>
              </div>

              <div className="bg-blue-50/70 border border-blue-200/80 p-5 rounded-2xl space-y-3">
                <div className="flex items-center gap-2 text-blue-900 font-bold text-sm sm:text-base">
                  <BookOpen className="w-5 h-5 text-[#1886ff] flex-shrink-0" />
                  <span>Section 37 of the Indian Contract Act, 1872: The Statutory Covenant</span>
                </div>
                <p className="text-xs md:text-sm text-slate-700 leading-relaxed">
                  Section 37 of the Indian Contract Act provides that promises bind the representatives of the promisors in case of the death of such promisors before performance, <em>unless a contrary intention appears from the contract</em>. However, Indian courts have uniformly established that this representative obligation is not an unlimited personal liability—it binds legal representatives solely to the extent of the assets inherited from the deceased.
                </p>
              </div>
            </section>

            {/* SECTION 2: Section 50 & 52 CPC Statutory Estate Shield */}
            <section id="section-50-cpc-shield" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Shield className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Civil Shield</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. The Section 50 &amp; 52 CPC Shield: How the Law Protects Legal Heirs
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When banks threaten to attach family assets or demand that a widow or children repay a deceased person&apos;s debt, they deliberately conceal the protective provisions of the <strong>Code of Civil Procedure, 1908 (CPC)</strong>. Sections 50 and 52 of the CPC represent an unyielding statutory firewall protecting legal heirs:
              </p>

              <div className="space-y-4 pt-2">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Statutory Provision
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Section 50(1) &amp; 50(2) CPC, 1908</span>
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-slate-900">
                    Execution of Decrees Against Legal Representatives
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Section 50(1) provides that if a judgment-debtor dies before a decree is fully satisfied, the decree-holder may apply to execute against the legal representative. However, <strong>Section 50(2) strictly restricts execution</strong>: <em>&quot;Where the decree is executed against such legal representative, he shall be liable only to the extent of the property of the deceased which has come to his hands and has not been duly disposed of.&quot;</em>
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-md">
                      Enforcement Limitation
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Section 52(1) CPC, 1908</span>
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-slate-900">
                    Immunity of Self-Acquired Assets of Surviving Family
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Under Section 52(1), where a decree is passed against a party as the legal representative of a deceased person, it can only be executed by the attachment and sale of any property of the deceased. The personal salary, independent savings, jewelry purchased by the spouse, and self-acquired property of legal heirs are <strong>100% legally immune</strong> from court attachment.
                  </p>
                </div>
              </div>

              <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-xl text-xs md:text-sm text-slate-700 leading-relaxed">
                <div className="flex items-center gap-2 text-emerald-900 font-bold mb-1">
                  <Gavel className="w-4 h-4 text-emerald-600" />
                  <span>High Court Precedent: Doctrine of Limited Representative Liability</span>
                </div>
                <p className="text-emerald-950">
                  In recurring landmark rulings across various High Courts, the judiciary has held that a creditor cannot touch a single rupee of a legal heir&apos;s personal earnings. The burden of proving that the deceased left an estate and that such estate reached the hands of the heirs lies squarely upon the lending bank. If the bank fails to prove the existence of inherited assets, the claim fails completely.
                </p>
              </div>
            </section>

            {/* SECTION 3: Co-Borrowers, Guarantors vs Non-Signatory Legal Heirs */}
            <section id="co-borrower-guarantor-distinction" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <HeartHandshake className="w-4 h-4 text-[#1886ff]" />
                <span>Signatory Legal Nuances</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Critical Legal Distinction: Co-Borrowers, Guarantors vs. Non-Signatory Family Members
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                To evaluate your family&apos;s exact legal exposure, you must identify whether any surviving relative signed the loan documents as a co-applicant or guarantor, or whether they are simply non-signatory legal heirs. The law treats these categories completely differently:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                <div className="bg-white p-5 rounded-2xl border border-red-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase text-red-700 bg-red-50 px-2 py-0.5 rounded">
                      Joint Co-Borrower
                    </span>
                    <BadgeAlert className="w-4 h-4 text-red-600" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900">100% Contractual Liability</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If a spouse or child signed as a co-applicant, their liability is joint and several. The death of the primary borrower does not extinguish the co-borrower&apos;s independent contractual obligation to pay EMIs.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-amber-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase text-amber-700 bg-amber-50 px-2 py-0.5 rounded">
                      Personal Guarantor
                    </span>
                    <Scale className="w-4 h-4 text-amber-600" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900">Section 128 Contract Act</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under Section 128 of the Indian Contract Act, the liability of a surety is co-extensive with that of the principal debtor. The guarantor remains liable even after the borrower dies, unless covered by insurance.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-emerald-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                      Non-Signatory Heir
                    </span>
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900">Zero Personal Liability</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Family members who did not sign any loan documents have zero personal liability. They cannot be sued personally, cannot be arrested, and their own assets cannot be touched under Section 50 CPC.
                  </p>
                </div>
              </div>

              <div className="bg-slate-100/90 border border-slate-200 p-4 rounded-xl text-xs md:text-sm text-slate-700 leading-relaxed">
                <p>
                  <strong>Abatement of Cheque / NACH Criminal Proceedings:</strong> Under Section 394 of the Code of Criminal Procedure (CrPC) / Section 435 of the Bharatiya Nagarik Suraksha Sanhita (BNSS), all criminal proceedings for cheque bounce (Section 138 NI Act) or NACH bounce (Section 25 PSS Act) automatically abate and are dismissed upon the death of the drawer. A bank cannot file cheque bounce cases against a deceased borrower&apos;s family.
                </p>
              </div>
            </section>

            {/* SECTION 4: 4-Sided Bordered Grid Comparison Table */}
            <section id="debt-category-comparison-grid" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Comparative Legal Matrix</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. Debt Liability Comparison Grid: How Different Loans Are Handled After Death
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                How a lender recovers debt upon a borrower&apos;s death depends entirely on whether the loan is unsecured, secured by property, or covered by third-party guarantees. This comprehensive grid outlines family exposure across all debt categories:
              </p>

              {/* TABLE WITH BOTH VERTICAL AND HORIZONTAL GRID LINES */}
              <div className="overflow-x-auto rounded-xl border border-slate-300 bg-white shadow-xs">
                <table className="w-full text-left text-xs md:text-sm border-collapse border border-slate-300">
                  <thead className="bg-slate-100 text-slate-800">
                    <tr>
                      <th className="p-3 md:p-3.5 font-bold border border-slate-300">Debt Category</th>
                      <th className="p-3 md:p-3.5 font-bold border border-slate-300">Collateral / Security Type</th>
                      <th className="p-3 md:p-3.5 font-bold border border-slate-300">Legal Heir Personal Liability?</th>
                      <th className="p-3 md:p-3.5 font-bold border border-slate-300">Can Bank Attach Heir&apos;s Assets?</th>
                      <th className="p-3 md:p-3.5 font-bold border border-slate-300">Court Execution Limit</th>
                      <th className="p-3 md:p-3.5 font-bold border border-slate-300 text-[#1886ff]">Strategic Resolution Pathway</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-700">
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 md:p-3.5 font-bold border border-slate-300 text-slate-900">Unsecured Personal Loan</td>
                      <td className="p-3 md:p-3.5 border border-slate-300">None (Purely Unsecured)</td>
                      <td className="p-3 md:p-3.5 border border-slate-300 text-emerald-700 font-bold">NO (Zero Personal Liability)</td>
                      <td className="p-3 md:p-3.5 border border-slate-300 text-emerald-700 font-bold">NO (Immune under Sec 52 CPC)</td>
                      <td className="p-3 md:p-3.5 border border-slate-300">Capped strictly to Inherited Estate NAV</td>
                      <td className="p-3 md:p-3.5 border border-slate-300 text-[#1886ff] font-semibold">Claim Loan Insurance or execute No-Asset Closure / OTS</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 md:p-3.5 font-bold border border-slate-300 text-slate-900">Credit Card Outstanding</td>
                      <td className="p-3 md:p-3.5 border border-slate-300">None (Revolving Credit)</td>
                      <td className="p-3 md:p-3.5 border border-slate-300 text-emerald-700 font-bold">NO (Zero Personal Liability)</td>
                      <td className="p-3 md:p-3.5 border border-slate-300 text-emerald-700 font-bold">NO (Immune under Sec 52 CPC)</td>
                      <td className="p-3 md:p-3.5 border border-slate-300">Capped strictly to Inherited Estate NAV</td>
                      <td className="p-3 md:p-3.5 border border-slate-300 text-[#1886ff] font-semibold">Submit Death Certificate; bank writes off balance as loss asset</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 md:p-3.5 font-bold border border-slate-300 text-slate-900">Home Loan / Mortgage (LAP)</td>
                      <td className="p-3 md:p-3.5 border border-slate-300">Equitable Mortgage on Real Estate</td>
                      <td className="p-3 md:p-3.5 border border-slate-300 text-slate-800">NO (Personal), YES (Asset level)</td>
                      <td className="p-3 md:p-3.5 border border-slate-300 text-amber-700 font-semibold">Only Mortgaged Property under SARFAESI</td>
                      <td className="p-3 md:p-3.5 border border-slate-300">Auction proceeds of mortgaged property</td>
                      <td className="p-3 md:p-3.5 border border-slate-300 text-[#1886ff] font-semibold">Claim Home Loan Life Insurance or refinance/transfer property</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 md:p-3.5 font-bold border border-slate-300 text-slate-900">Auto / Vehicle Loan</td>
                      <td className="p-3 md:p-3.5 border border-slate-300">Hypothecation of Vehicle</td>
                      <td className="p-3 md:p-3.5 border border-slate-300 text-emerald-700 font-bold">NO (Personal)</td>
                      <td className="p-3 md:p-3.5 border border-slate-300 text-amber-700 font-semibold">Only Hypothecated Vehicle can be repossessed</td>
                      <td className="p-3 md:p-3.5 border border-slate-300">Resale value of hypothecated vehicle</td>
                      <td className="p-3 md:p-3.5 border border-slate-300 text-[#1886ff] font-semibold">Surrender vehicle or pay outstanding to transfer RC book</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 md:p-3.5 font-bold border border-slate-300 text-slate-900">Joint Personal Loan</td>
                      <td className="p-3 md:p-3.5 border border-slate-300">Co-Signatory Covenant</td>
                      <td className="p-3 md:p-3.5 border border-slate-300 text-red-700 font-bold">YES (Surviving Co-Borrower is 100% Liable)</td>
                      <td className="p-3 md:p-3.5 border border-slate-300 text-red-700 font-semibold">YES (Co-Borrower&apos;s personal assets)</td>
                      <td className="p-3 md:p-3.5 border border-slate-300">Entire outstanding loan balance</td>
                      <td className="p-3 md:p-3.5 border border-slate-300 text-[#1886ff] font-semibold">Negotiate structured restructuring or compromise One-Time Settlement</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 md:p-3.5 font-bold border border-slate-300 text-slate-900">Education Loan (Parent Guarantor)</td>
                      <td className="p-3 md:p-3.5 border border-slate-300">Personal Guarantee of Parent</td>
                      <td className="p-3 md:p-3.5 border border-slate-300 text-red-700 font-bold">YES (Student Borrower remains liable)</td>
                      <td className="p-3 md:p-3.5 border border-slate-300 text-amber-700">Depends on whether parent or student passed away</td>
                      <td className="p-3 md:p-3.5 border border-slate-300">Parent estate / student future income</td>
                      <td className="p-3 md:p-3.5 border border-slate-300 text-[#1886ff] font-semibold">Apply for CSIS government subsidy / moratorium waiver</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 5: Estate Liability Mathematical Analytics Card */}
            <section id="estate-nav-math-analytics" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                <span>Financial &amp; Estate Mathematics</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. Technical Estate Liability Analytics: Calculating the Inherited Estate NAV
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under Section 50 of the CPC and the Indian Succession Act, 1925, legal heir liability is calculated via a strict mathematical formula. Creditors can only claim from the <strong>Net Asset Value (NAV) of the Inherited Estate</strong> after deducting higher-priority statutory expenses.
              </p>

              {/* Technical Math Card */}
              <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs p-5 md:p-6 space-y-4">
                <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-[#1886ff]" />
                  <span>The Statutory Estate Liability Formula</span>
                </h3>

                <div className="bg-slate-900 text-white p-4 rounded-xl font-mono text-xs md:text-sm overflow-x-auto leading-relaxed">
                  <div className="text-emerald-400 font-bold mb-1">// Mathematical Upper Bound of Legal Heir Exposure:</div>
                  <div className="text-slate-100">
                    Net Legal Heir Liability = Min ( Outstanding Bank Debt, Inherited Estate NAV )
                  </div>
                  <div className="text-slate-400 pt-1 text-[11px]">
                    Where: Inherited Estate NAV = Total Deceased Assets - (Funeral Expenses + Medical Debts + Estate Admin Costs + Secured Creditor Claims)
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  {/* Case Study 1 */}
                  <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
                        Case Study 1: Zero Inherited Estate
                      </span>
                      <span className="text-xs font-semibold text-slate-500">Most Common Case</span>
                    </div>
                    <div className="space-y-1 text-xs text-slate-600">
                      <div className="flex justify-between py-1 border-b border-slate-200/60">
                        <span>Outstanding Unsecured Loan:</span>
                        <span className="font-bold text-slate-900">₹8,50,000</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-slate-200/60">
                        <span>Deceased Deeded Assets Inherited:</span>
                        <span className="font-bold text-slate-900">₹0 (Rented house, no property)</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-slate-200/60">
                        <span>Surviving Family Personal Savings:</span>
                        <span className="font-bold text-slate-900">₹6,00,000 (Self-Acquired)</span>
                      </div>
                      <div className="flex justify-between py-1 pt-1.5 font-bold text-emerald-700 text-sm">
                        <span>Total Legal Heir Liability:</span>
                        <span>₹0 (100% Written Off)</span>
                      </div>
                    </div>
                    <p className="text-[11px] text-slate-500 pt-1">
                      Bank cannot touch the family&apos;s ₹6,00,000 personal savings. Under Section 50(2) CPC, the debt is legally extinguished as a bad loss asset.
                    </p>
                  </div>

                  {/* Case Study 2 */}
                  <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-blue-800 bg-blue-100 px-2 py-0.5 rounded">
                        Case Study 2: Partial Inherited Estate
                      </span>
                      <span className="text-xs font-semibold text-slate-500">Partial Asset Limit</span>
                    </div>
                    <div className="space-y-1 text-xs text-slate-600">
                      <div className="flex justify-between py-1 border-b border-slate-200/60">
                        <span>Outstanding Unsecured Loan:</span>
                        <span className="font-bold text-slate-900">₹12,00,000</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-slate-200/60">
                        <span>Inherited Share in Land (Sole Name):</span>
                        <span className="font-bold text-slate-900">₹4,00,000</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-slate-200/60">
                        <span>Less: Funeral &amp; Testamentary Costs:</span>
                        <span className="font-bold text-slate-900">- ₹1,00,000 (Priority Sec 320)</span>
                      </div>
                      <div className="flex justify-between py-1 pt-1.5 font-bold text-blue-700 text-sm">
                        <span>Max Enforceable Heir Liability:</span>
                        <span>₹3,00,000 (Remaining ₹9L Waived)</span>
                      </div>
                    </div>
                    <p className="text-[11px] text-slate-500 pt-1">
                      Heirs can settle the entire ₹12L claim by offering the net estate value of ₹3,00,000 via a compromise OTS, securing an unconditional NDC.
                    </p>
                  </div>
                </div>

                <div className="border-t border-slate-200 pt-3 text-xs text-slate-600 space-y-1.5">
                  <span className="font-bold text-slate-900 block">Priority of Claims under Sections 320–325 of the Indian Succession Act, 1925:</span>
                  <p>
                    1. Funeral and deathbed expenses (Highest Priority) &gt; 2. Estate administration and probate expenses &gt; 3. Secured debts with registered charges &gt; 4. Wages of domestic servants &gt; <strong>5. Unsecured personal loans and credit cards (Lowest Priority)</strong>.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 6: Embedded 16:9 Infographic Banner */}
            <section id="infographic-overview" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Sparkles className="w-4 h-4 text-[#1886ff]" />
                <span>Visual Defense Roadmap</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Visual Defense Blueprint: 6-Step Legal Heir Debt Resolution Process
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Review this high-level visual roadmap illustrating how Indian statutory law protects bereaved families, how to handle unlawful recovery harassment, and how to reach complete debt closure:
              </p>

              <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-3 md:p-4 overflow-hidden">
                <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-slate-100">
                  <Image
                    src="/images/infographics/personal-loan-after-death-of-borrower.jpg"
                    alt="Personal Loan After Death of Borrower Legal Rights and Estate Liability Roadmap"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 60vw"
                    priority
                  />
                </div>
                <div className="mt-3 px-2 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2">
                  <span>CredSettle Legal Heir Protection Blueprint • Section 50 CPC &amp; RBI Fair Practices Code</span>
                  <a
                    href="/images/infographics/personal-loan-after-death-of-borrower.jpg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1886ff] hover:underline font-bold flex items-center gap-1"
                  >
                    <span>View High-Resolution Blueprint</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </section>

            {/* SECTION 7: 6-Stage Standard Operating Procedure (SOP) */}
            <section id="bereaved-family-sop" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileCheck className="w-4 h-4 text-[#1886ff]" />
                <span>Actionable Procedure</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. 6-Stage SOP for Legal Heirs Facing Personal Loan Claims After Death
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If your family is confronted with loan recovery demands following the demise of a loved one, execute this structured, legally backed 6-stage Standard Operating Procedure to protect your rights:
              </p>

              <div className="space-y-4 pt-2">
                {/* Stage 1 */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-blue-100 text-[#1886ff] font-extrabold text-xs flex items-center justify-center flex-shrink-0">
                      01
                    </span>
                    <h3 className="text-sm md:text-base font-bold text-slate-900">
                      Stage 1: Formal Death Intimation &amp; Interest Freezing Notice
                    </h3>
                  </div>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed pl-10">
                    Immediately send a formal written letter along with a notarized copy of the municipal Death Certificate to the lender&apos;s home branch via registered Speed Post with Acknowledgment Due (AD) or official email. Request the bank to freeze all ongoing penal interest, late payment fines, and NACH/ECS mandate debits immediately.
                  </p>
                </div>

                {/* Stage 2 */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-blue-100 text-[#1886ff] font-extrabold text-xs flex items-center justify-center flex-shrink-0">
                      02
                    </span>
                    <h3 className="text-sm md:text-base font-bold text-slate-900">
                      Stage 2: Loan Protection Insurance &amp; Credit Shield Audit
                    </h3>
                  </div>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed pl-10">
                    Audit the original loan sanction letter, loan agreement, and initial bank disbursement statements. Check if an insurance premium (Credit Shield, Group Credit Life, or Loan Suraksha) was deducted from the disbursed loan amount. If insured, submit the official claim form along with medical records to ensure the insurer settles the outstanding loan balance.
                  </p>
                </div>

                {/* Stage 3 */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-blue-100 text-[#1886ff] font-extrabold text-xs flex items-center justify-center flex-shrink-0">
                      03
                    </span>
                    <h3 className="text-sm md:text-base font-bold text-slate-900">
                      Stage 3: Estate Valuation &amp; Legal Heir Limitation Assessment
                    </h3>
                  </div>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed pl-10">
                    Catalog all assets that were registered solely in the name of the deceased. Establish clearly whether any inheritable estate exists. If the deceased had zero assets in their personal name or if the debt exceeds the estate value, calculate the Section 50 CPC estate limit to prepare a solid legal defense.
                  </p>
                </div>

                {/* Stage 4 */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-blue-100 text-[#1886ff] font-extrabold text-xs flex items-center justify-center flex-shrink-0">
                      04
                    </span>
                    <h3 className="text-sm md:text-base font-bold text-slate-900">
                      Stage 4: Rebuttal of Recovery Agent Harassment (Citing Section 50 CPC &amp; RBI Rules)
                    </h3>
                  </div>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed pl-10">
                    If third-party collection agencies make threatening calls or home visits, do not pay under panic. Issue a stern written notice citing Section 50 CPC and RBI Recovery Master Directions. Remind them that harassing bereaved family members constitutes an offense of criminal intimidation and extortion under Sections 351 and 308 of the Bharatiya Nyaya Sanhita (BNS).
                  </p>
                </div>

                {/* Stage 5 */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-blue-100 text-[#1886ff] font-extrabold text-xs flex items-center justify-center flex-shrink-0">
                      05
                    </span>
                    <h3 className="text-sm md:text-base font-bold text-slate-900">
                      Stage 5: Representation Before Bank Settlement Committee (OTS / Debt Write-Off)
                    </h3>
                  </div>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed pl-10">
                    Present the legal heir position directly to the bank&apos;s Principal Nodal Officer or Special Settlement Committee. For uninsured loans with zero estate, request a formal accounting write-off. For partial estate cases, negotiate a heavily discounted compromise One-Time Settlement (OTS) with a 50% to 80% waiver on accrued interest and penalties.
                  </p>
                </div>

                {/* Stage 6 */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-blue-100 text-[#1886ff] font-extrabold text-xs flex items-center justify-center flex-shrink-0">
                      06
                    </span>
                    <h3 className="text-sm md:text-base font-bold text-slate-900">
                      Stage 6: Securing Unconditional No Dues Certificate &amp; Credit Bureau Demise Update
                    </h3>
                  </div>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed pl-10">
                    Once the insurance claim or settlement payment is processed, obtain a formal, unconditional No Dues Certificate (NDC) on the bank&apos;s official letterhead. Ensure the bank reports the loan account status as &quot;Closed / Settled Due to Demise&quot; to CIBIL, Experian, CRIF High Mark, and Equifax, permanently closing the file.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 8: Formal Legal Notice Monospace Terminal Draft */}
            <section id="formal-legal-notice-draft" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Rebuttal Framework</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. Formal Cease &amp; Desist Legal Notice Draft for Bereaved Families
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Below is a formal legal response template engineered to stop unlawful recovery harassment and assert legal heir protections under Section 50 CPC, Indian Contract Act, and RBI Recovery Master Directions:
              </p>

              {/* DARK MONOSPACE TERMINAL DRAFT */}
              <div className="bg-slate-900 text-slate-100 p-5 rounded-2xl font-mono text-xs shadow-md border border-slate-800 space-y-3 overflow-x-auto leading-relaxed">
                <div className="text-emerald-400 font-bold border-b border-slate-800 pb-2 flex justify-between">
                  <span>LEGAL NOTICE: CEASE &amp; DESIST AGAINST UNLAWFUL RECOVERY HARASSMENT POST DEMISE</span>
                  <span className="text-slate-500 text-[10px]">REGISTERED SPEED POST / EMAIL WITH AD</span>
                </div>
                <div className="text-slate-300 space-y-2">
                  <p><strong>TO:</strong> The Principal Nodal Officer / Head of Customer Grievance Redressal</p>
                  <p><strong>LENDER:</strong> [Name of Commercial Bank / NBFC Institution]</p>
                  <p><strong>LOAN ACCOUNT NUMBER:</strong> [Enter Deceased Borrower&apos;s Loan No.]</p>
                  <p><strong>DECEASED BORROWER:</strong> Late [Full Name of Borrower] (Demised on [Date of Death])</p>
                  <p><strong>SUBJECT:</strong> Formal Intimation of Borrower Demise, Demand to Freeze Interest Accrual, and Cease &amp; Desist Notice Against Unlawful Recovery Harassment of Non-Signatory Legal Heirs</p>
                  <p className="pt-2">Sir / Madam,</p>
                  <p>
                    1. Please be formally notified that the primary borrower referenced above sadly passed away on [Date of Death]. A certified copy of the municipal Death Certificate (Registration No: [Enter Number]) is annexed herewith for your official records.
                  </p>
                  <p>
                    2. Take notice that third-party recovery agents representing your institution have been continuously contacting and visiting the residential premises of the surviving family members, issuing unlawful threats of asset seizure and demanding that non-signatory legal heirs pay the outstanding debt out of their personal funds.
                  </p>
                  <p>
                    3. You are explicitly reminded that under Section 37 of the Indian Contract Act, 1872 and Sections 50(2) and 52(1) of the Code of Civil Procedure, 1908, surviving legal heirs hold zero personal liability for an unsecured personal loan. A legal heir&apos;s liability is strictly limited to the value of the inherited estate. The surviving family members are non-signatory third parties and own only self-acquired assets which are completely immune under Indian law.
                  </p>
                  <p>
                    4. Furthermore, under RBI Master Direction DOR.ORG.REC.65/21.04.158/2022-23 (Fair Practices Code), lenders and their recovery agents are strictly prohibited from intimidating, threatening, or contacting bereaved family members in violation of statutory privacy standards.
                  </p>
                  <p>
                    5. You are hereby called upon to immediately: (a) Freeze all interest, penal charges, and NACH debits as of the date of death, (b) Halt all third-party recovery agent calls and home visits, (c) Verify and process the embedded Credit Shield / Loan Life Insurance policy, and (d) Issue a formal Statement of Account to the undersigned for final settlement / closure.
                  </p>
                </div>
                <div className="text-slate-500 text-[10px] pt-2 border-t border-slate-800 flex justify-between">
                  <span>Authorized Representative of Deceased Borrower&apos;s Family</span>
                  <span>Governed by CPC 1908 Section 50 &amp; RBI Fair Recovery Master Directions</span>
                </div>
              </div>
            </section>

            {/* SECTION 9: 3-Tier Escalation Matrix */}
            <section id="three-tier-escalation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff]" />
                <span>Institutional Hierarchy</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. 3-Tier Institutional Grievance Redressal Matrix
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If a lender refuses to honor the Death Certificate, ignores loan insurance coverage, or deploys aggressive recovery agents against your family, escalate through the statutory 3-tier grievance mechanism:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                {/* Tier 1 */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-black uppercase tracking-wider text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
                        Tier 1 (Branch)
                      </span>
                      <span className="text-xs font-semibold text-slate-500">Max 30 Days</span>
                    </div>
                    <h3 className="text-sm md:text-base font-bold text-slate-900">
                      Branch Manager &amp; Bereavement Desk
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Submit the Death Certificate and formal intimation letter to the Branch Head. Request a formal Complaint Docket / Service Request Number confirming receipt and account freeze.
                    </p>
                  </div>
                  <div className="text-[11px] font-bold text-[#1886ff] pt-2 border-t border-slate-100">
                    Action: Intimation &amp; Insurance Audit
                  </div>
                </div>

                {/* Tier 2 */}
                <div className="bg-white p-5 rounded-2xl border border-blue-200/80 shadow-xs space-y-2 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2 py-0.5 rounded">
                        Tier 2 (Appellate)
                      </span>
                      <span className="text-xs font-semibold text-slate-500">30-Day Window</span>
                    </div>
                    <h3 className="text-sm md:text-base font-bold text-slate-900">
                      Principal Nodal Officer (PNO)
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      If the branch ignores the intimation or recovery calls continue, escalate to the bank&apos;s Principal Nodal Officer and Internal Ombudsman to recall recovery agencies and enforce Section 50 CPC limits.
                    </p>
                  </div>
                  <div className="text-[11px] font-bold text-[#1886ff] pt-2 border-t border-slate-100">
                    Action: Recall Agents &amp; Negotiate OTS
                  </div>
                </div>

                {/* Tier 3 */}
                <div className="bg-white p-5 rounded-2xl border border-emerald-200/80 shadow-xs space-y-2 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-black uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                        Tier 3 (Statutory)
                      </span>
                      <span className="text-xs font-semibold text-slate-500">Final Authority</span>
                    </div>
                    <h3 className="text-sm md:text-base font-bold text-slate-900">
                      RBI Integrated Ombudsman &amp; Police
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      File an online complaint on the RBI CMS Portal (<code>cms.rbi.org.in</code>) for unfair practices and harassment. For criminal threats, lodge an FIR with the local Police / Cyber Cell.
                    </p>
                  </div>
                  <div className="text-[11px] font-bold text-emerald-700 pt-2 border-t border-slate-100">
                    Action: Regulatory Penalties &amp; Closure
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 10: Chronological Milestone Resolution Table */}
            <section id="chronological-resolution-milestones" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Clock className="w-4 h-4 text-[#1886ff]" />
                <span>Resolution Timeline</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Chronological Resolution Timelines &amp; Post-Death Settlement Milestones
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The institutional lifecycle of handling a deceased borrower&apos;s loan account follows a standard banking trajectory. Here is what family members should expect at each stage:
              </p>

              {/* TABLE WITH BOTH VERTICAL AND HORIZONTAL GRID LINES */}
              <div className="overflow-x-auto rounded-xl border border-slate-300 bg-white shadow-xs">
                <table className="w-full text-left text-xs md:text-sm border-collapse border border-slate-300">
                  <thead className="bg-slate-100 text-slate-800">
                    <tr>
                      <th className="p-3 md:p-3.5 font-bold border border-slate-300">Timeline Stage</th>
                      <th className="p-3 md:p-3.5 font-bold border border-slate-300">Bank Internal Status</th>
                      <th className="p-3 md:p-3.5 font-bold border border-slate-300">Recovery Actions Encountered</th>
                      <th className="p-3 md:p-3.5 font-bold border border-slate-300">Family Legal Strategy</th>
                      <th className="p-3 md:p-3.5 font-bold border border-slate-300 text-[#1886ff]">Expected Outcome</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-700">
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 md:p-3.5 font-bold border border-slate-300 text-slate-900">Days 1 – 15</td>
                      <td className="p-3 md:p-3.5 border border-slate-300">Demise Intimation Pending</td>
                      <td className="p-3 md:p-3.5 border border-slate-300">Automated SMS, missed EMI reminder calls</td>
                      <td className="p-3 md:p-3.5 border border-slate-300">Submit Death Certificate; demand NACH cancelation</td>
                      <td className="p-3 md:p-3.5 border border-slate-300">Account flagged as Demised in Core Banking System</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 md:p-3.5 font-bold border border-slate-300 text-slate-900">Days 16 – 45</td>
                      <td className="p-3 md:p-3.5 border border-slate-300">Insurance &amp; Estate Review</td>
                      <td className="p-3 md:p-3.5 border border-slate-300">Collection call center outreach</td>
                      <td className="p-3 md:p-3.5 border border-slate-300">Submit insurance claim; assert Section 50 CPC limits</td>
                      <td className="p-3 md:p-3.5 border border-slate-300">Insurance claim initiated; penal charges frozen</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 md:p-3.5 font-bold border border-slate-300 text-slate-900">Days 46 – 90</td>
                      <td className="p-3 md:p-3.5 border border-slate-300 text-amber-700 font-bold">NPA / Loss Classification</td>
                      <td className="p-3 md:p-3.5 border border-slate-300 text-red-700">Agency assignment, unauthorized home visits</td>
                      <td className="p-3 md:p-3.5 border border-slate-300 text-[#1886ff] font-semibold">Issue Cease &amp; Desist notice to PNO citing RBI norms</td>
                      <td className="p-3 md:p-3.5 border border-slate-300">Recovery calls halted; file transferred to settlement desk</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 md:p-3.5 font-bold border border-slate-300 text-slate-900">Days 91 – 180</td>
                      <td className="p-3 md:p-3.5 border border-slate-300">Special Recovery Committee</td>
                      <td className="p-3 md:p-3.5 border border-slate-300">Formal legal settlement offer letters</td>
                      <td className="p-3 md:p-3.5 border border-slate-300 text-[#1886ff] font-semibold">Negotiate OTS compromise or prove zero estate assets</td>
                      <td className="p-3 md:p-3.5 border border-slate-300 text-emerald-700 font-semibold">Sanction of 50% to 80% waiver or complete debt write-off</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 md:p-3.5 font-bold border border-slate-300 text-slate-900">Post-Settlement</td>
                      <td className="p-3 md:p-3.5 border border-slate-300 text-emerald-700 font-bold">Account Extinguished</td>
                      <td className="p-3 md:p-3.5 border border-slate-300 text-emerald-700">Zero recovery activity; all harassment halted</td>
                      <td className="p-3 md:p-3.5 border border-slate-300 text-emerald-700 font-bold">Collect unconditional No Dues Certificate (NDC)</td>
                      <td className="p-3 md:p-3.5 border border-slate-300 text-emerald-700 font-bold">CIBIL updated to &quot;Closed / Demised&quot;; complete legal peace</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 11: Specialized Real-World Scenarios */}
            <section id="specialized-loan-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <BadgeAlert className="w-4 h-4 text-[#1886ff]" />
                <span>Practical Edge Cases</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                10. Specialized Real-World Scenarios: Credit Cards, Fintech Apps &amp; Insurance Nominees
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Different financial products and lending channels present distinct challenges upon a borrower&apos;s death. Here is how to navigate complex scenarios:
              </p>

              <div className="space-y-4 pt-2">
                {/* Scenario 1 */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-purple-700 bg-purple-50 px-2.5 py-1 rounded-md">
                      Scenario 01: Credit Card Outstanding Balance
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Unsecured Revolving Credit</span>
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-slate-900">
                    Add-On Cardholders vs. Primary Deceased Cardholder
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Credit card debt is 100% unsecured. If the primary cardholder passes away, the debt does not pass to surviving family. However, if a family member holds an <strong>Add-On card</strong>, banks sometimes claim the add-on user is liable. Legally, add-on cardholders are merely authorized users, not primary debtors. The debt remains bounded strictly by the deceased primary cardholder&apos;s estate under Section 50 CPC.
                  </p>
                </div>

                {/* Scenario 2 */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-md">
                      Scenario 02: Digital Lending Apps &amp; Contact List Shaming
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Fintech NBFCs &amp; Loan Apps</span>
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-slate-900">
                    Illegal Harassment of Contact Lists Post Demise
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Rogue digital lending apps often harvest contact lists and send threatening messages to relatives even after being informed of the borrower&apos;s death. This is a severe violation of the RBI Digital Lending Directions (2022) and the Information Technology Act. Immediately file a complaint on the National Cyber Crime Portal (<code>cybercrime.gov.in</code>) and RBI Sachet portal to trigger regulatory sanctions against the digital lender.
                  </p>
                </div>

                {/* Scenario 3 */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">
                      Scenario 03: Life Insurance Policy Proceeds
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Section 39 Insurance Act / MWP Act</span>
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-slate-900">
                    Can Banks Forcefully Deduct Loan From Term Life Insurance Proceeds?
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Banks often attempt to seize term life insurance payouts received by the widow or children (nominees) to clear unpaid personal loans. Under Section 39(7) of the Insurance Act, 1938 (as amended in 2015), beneficial nominees (spouse, children, parents) hold absolute beneficial ownership of policy proceeds. Furthermore, policies under the Married Women&apos;s Property (MWP) Act, 1874 are statutorily protected from all creditors and cannot be attached.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 12: About CredSettle Component */}
            <section id="company-profile" className="scroll-target pt-2">
              <CompanySection />
            </section>

            {/* SECTION 13: Collapsible Interactive FAQ Accordion */}
            <section id="frequently-asked-questions" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <HelpCircle className="w-4 h-4 text-[#1886ff]" />
                <span>Frequently Asked Questions</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Frequently Asked Questions About Personal Loans After Borrower Death
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Review exhaustive legal answers to the most critical questions regarding family liability, estate succession, and recovery agent restrictions under Indian banking law:
              </p>

              <div className="space-y-3 pt-2">
                {faqs.map((faq, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div
                      key={idx}
                      className="rounded-2xl border border-slate-200/80 bg-white overflow-hidden shadow-2xs transition-all"
                    >
                      <button
                        onClick={() => toggleFaq(idx)}
                        className="w-full flex items-center justify-between p-4 sm:p-5 text-left font-bold text-sm sm:text-base text-slate-900 hover:text-[#1886ff] transition-colors gap-3"
                      >
                        <span className="flex items-center gap-2.5">
                          <span className="text-[#1886ff] font-extrabold text-xs bg-blue-50 px-2 py-0.5 rounded">
                            Q{idx + 1}
                          </span>
                          {faq.q}
                        </span>
                        <ChevronDown
                          className={
                            'w-4 h-4 sm:w-5 sm:h-5 text-slate-400 flex-shrink-0 transition-transform duration-200 ' +
                            (isOpen ? 'transform rotate-180 text-[#1886ff]' : '')
                          }
                        />
                      </button>

                      {isOpen && (
                        <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3 bg-slate-50/50">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>

            {/* SECTION 14: Regulatory Citations & Outbound Authority Links */}
            <section id="regulatory-sources" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Award className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Citations &amp; Authorities</span>
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                Official Statutory &amp; Regulatory Citations
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                The legal principles, statutory exemptions, and precedents detailed in this guide are anchored directly in official Indian statutes and regulatory directives:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pt-1">
                <a
                  href="https://www.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white rounded-xl border border-slate-200 hover:border-[#1886ff] shadow-2xs hover:shadow-xs transition-all flex items-center justify-between text-xs font-semibold text-slate-700 hover:text-[#1886ff]"
                >
                  <div className="flex items-center gap-2">
                    <Landmark className="w-4 h-4 text-[#1886ff]" />
                    <span>RBI Fair Practices Code (Recovery Agents)</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>

                <a
                  href="https://www.indiacode.nic.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white rounded-xl border border-slate-200 hover:border-[#1886ff] shadow-2xs hover:shadow-xs transition-all flex items-center justify-between text-xs font-semibold text-slate-700 hover:text-[#1886ff]"
                >
                  <div className="flex items-center gap-2">
                    <Scale className="w-4 h-4 text-[#1886ff]" />
                    <span>Section 50 CPC 1908 (India Code)</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>

                <a
                  href="https://www.indiacode.nic.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white rounded-xl border border-slate-200 hover:border-[#1886ff] shadow-2xs hover:shadow-xs transition-all flex items-center justify-between text-xs font-semibold text-slate-700 hover:text-[#1886ff]"
                >
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-[#1886ff]" />
                    <span>Indian Succession Act, 1925 (Sec 320)</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>

                <a
                  href="https://cms.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white rounded-xl border border-slate-200 hover:border-[#1886ff] shadow-2xs hover:shadow-xs transition-all flex items-center justify-between text-xs font-semibold text-slate-700 hover:text-[#1886ff]"
                >
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>RBI Integrated Ombudsman (CMS Portal)</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>

                <a
                  href="https://cybercrime.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white rounded-xl border border-slate-200 hover:border-[#1886ff] shadow-2xs hover:shadow-xs transition-all flex items-center justify-between text-xs font-semibold text-slate-700 hover:text-[#1886ff]"
                >
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-600" />
                    <span>National Cyber Crime Reporting Portal</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>

                <a
                  href="https://www.cibil.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white rounded-xl border border-slate-200 hover:border-[#1886ff] shadow-2xs hover:shadow-xs transition-all flex items-center justify-between text-xs font-semibold text-slate-700 hover:text-[#1886ff]"
                >
                  <div className="flex items-center gap-2">
                    <FileCheck className="w-4 h-4 text-[#1886ff]" />
                    <span>TransUnion CIBIL Demise Reporting</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>
            </section>

            {/* SECTION 15: 10 Internal Topic Badges */}
            <section className="pt-2 border-t border-slate-200/80 space-y-3">
              <span className="text-xs font-black text-slate-700 uppercase tracking-wider block">
                Related Legal Debt Defense Guides:
              </span>
              <div className="flex flex-wrap gap-2">
                <Link
                  href="/can-recovery-agents-seize-property"
                  className="text-xs font-medium px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:border-[#1886ff] hover:text-[#1886ff] transition-all shadow-2xs"
                >
                  Can Recovery Agents Seize Property?
                </Link>
                <Link
                  href="/arbitration-notice-personal-loan-default"
                  className="text-xs font-medium px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:border-[#1886ff] hover:text-[#1886ff] transition-all shadow-2xs"
                >
                  Arbitration Notice for Personal Loan
                </Link>
                <Link
                  href="/section-138-cheque-bounce-personal-loan"
                  className="text-xs font-medium px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:border-[#1886ff] hover:text-[#1886ff] transition-all shadow-2xs"
                >
                  Section 138 Cheque Bounce Defense
                </Link>
                <Link
                  href="/ecs-nach-bounce-legal-notice-section-25"
                  className="text-xs font-medium px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:border-[#1886ff] hover:text-[#1886ff] transition-all shadow-2xs"
                >
                  NACH / ECS Bounce Section 25
                </Link>
                <Link
                  href="/lok-adalat-personal-loan-settlement"
                  className="text-xs font-medium px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:border-[#1886ff] hover:text-[#1886ff] transition-all shadow-2xs"
                >
                  Lok Adalat Loan Settlement
                </Link>
                <Link
                  href="/convert-settled-status-to-closed"
                  className="text-xs font-medium px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:border-[#1886ff] hover:text-[#1886ff] transition-all shadow-2xs"
                >
                  Convert Settled Status to Closed
                </Link>
                <Link
                  href="/dispute-wrong-settled-status-cibil"
                  className="text-xs font-medium px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:border-[#1886ff] hover:text-[#1886ff] transition-all shadow-2xs"
                >
                  Dispute Wrong Settled Status in CIBIL
                </Link>
                <Link
                  href="/fake-loan-app-harassment-cyber-crime"
                  className="text-xs font-medium px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:border-[#1886ff] hover:text-[#1886ff] transition-all shadow-2xs"
                >
                  Fake Loan App Cyber Complaint
                </Link>
                <Link
                  href="/get-noc-after-loan-settlement"
                  className="text-xs font-medium px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:border-[#1886ff] hover:text-[#1886ff] transition-all shadow-2xs"
                >
                  Get NOC After Loan Settlement
                </Link>
                <Link
                  href="/documents-needed-for-loan-settlement"
                  className="text-xs font-medium px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:border-[#1886ff] hover:text-[#1886ff] transition-all shadow-2xs"
                >
                  Documents Needed for Settlement
                </Link>
              </div>
            </section>

          </div>

          {/* ================= RIGHT COLUMN: STICKY SIDEBARS ================= */}
          <aside className="space-y-5 sticky top-6">
            
            {/* 1. Author Bio Card */}
            <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs p-5 space-y-3">
              <div className="flex items-center gap-3">
                <Link
                  href="/author/ashish-jhangra"
                  className="w-12 h-12 rounded-full bg-blue-100 text-[#1886ff] font-extrabold text-base flex items-center justify-center flex-shrink-0 hover:bg-blue-200 transition-colors shadow-2xs"
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
              <p className="text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-2.5">
                Specialist in civil debt dispute resolution, Section 50 CPC legal heir protection, and RBI regulatory enforcement with over a decade of experience safeguarding Indian families.
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
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>CredSettle Panel</span>
                </span>
              </div>
            </div>

            {/* 2. Emergency CTA Card */}
            <div className="rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 text-white p-5 shadow-md space-y-4">
              <div className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-xs px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider text-white">
                <Lock className="w-3 h-3" />
                <span>100% CONFIDENTIAL</span>
              </div>

              <div className="space-y-1">
                <h3 className="text-base font-extrabold tracking-tight leading-snug">
                  Bank Harassing Your Family?
                </h3>
                <p className="text-xs text-blue-100 leading-relaxed">
                  Protect your loved ones from unlawful recovery pressure. Enforce Section 50 CPC protections and get direct representation before the bank.
                </p>
              </div>

              <div className="space-y-2 pt-1">
                <Link
                  href="/contact"
                  className="w-full py-2.5 px-4 rounded-xl bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-xs sm:text-sm text-center block transition-all shadow-sm hover:bg-slate-50"
                >
                  Bank Harassing Family? Get Legal Protection
                </Link>
                
                <a
                  href="tel:+918800226635"
                  className="w-full py-2 px-3 rounded-xl bg-blue-700/60 hover:bg-blue-700 text-white font-bold text-xs text-center flex items-center justify-center gap-2 transition-all border border-blue-500/30"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call: +91-8800226635</span>
                </a>
              </div>
            </div>

            {/* 3. CredSettle Trust Commitments Card */}
            <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs p-5 space-y-3">
              <h4 className="text-xs font-black uppercase tracking-wider text-slate-800 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>CredSettle Trust Commitments</span>
              </h4>

              <ul className="space-y-2.5 text-xs text-slate-600">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Zero Upfront Risk:</strong> Performance &amp; success-fee aligned engagement.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Direct Bank Remittance:</strong> 100% of settlement funds paid directly to bank.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>RBI &amp; CICRA Compliance:</strong> Strict adherence to statutory fair recovery rules.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Pan-India Representation:</strong> Protecting families across all 28 states &amp; UTs.</span>
                </li>
              </ul>
            </div>

          </aside>

        </div>
      </div>
    </main>
  );
}
