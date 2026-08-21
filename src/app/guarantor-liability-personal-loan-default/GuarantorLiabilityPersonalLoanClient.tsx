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
  Landmark,
  Copy,
  CheckCheck,
  Users,
  ShieldAlert,
  FileSpreadsheet
} from 'lucide-react';

export default function GuarantorLiabilityPersonalLoanClient() {
  const [activeId, setActiveId] = useState<string>('quick-crux');
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [copied, setCopied] = useState<boolean>(false);

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

  const handleCopyNotice = () => {
    const noticeElement = document.getElementById('legal-notice-content');
    if (noticeElement) {
      navigator.clipboard.writeText(noticeElement.innerText);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  const navLinks = [
    { id: 'quick-crux', label: 'Executive Brief & Crux' },
    { id: 'co-extensive-liability-section-128', label: '1. Co-Extensive Liability (Sec 128)' },
    { id: 'co-applicant-vs-guarantor', label: '2. Co-Applicant vs. Guarantor' },
    { id: 'primary-borrower-absconding-death', label: '3. Borrower Absconding or Deceased' },
    { id: 'discharge-of-guarantor-sections', label: '4. Grounds for Guarantor Discharge' },
    { id: 'legal-status-comparison-grid', label: '5. Legal Status & Liability Matrix' },
    { id: 'financial-scoring-math-exposure', label: '6. CIBIL Impact & Financial Math' },
    { id: 'infographic-overview', label: 'Visual 6-Step Defense Blueprint' },
    { id: 'six-stage-defense-sop', label: '7. 6-Stage Defense & Protection SOP' },
    { id: 'subrogation-rights-section-140', label: '8. Subrogation Rights (Sec 140)' },
    { id: 'how-to-remove-guarantor-name', label: '9. How to Remove Name as Guarantor' },
    { id: 'formal-legal-notice-terminal', label: '10. Statutory Reply Notice (Draft)' },
    { id: 'three-tier-escalation-matrix', label: '11. 3-Tier Grievance & Ombudsman Matrix' },
    { id: 'chronological-milestones-timeline', label: '12. Resolution Milestones Timeline' },
    { id: 'specialized-guarantor-scenarios', label: '13. Fintech, ARCs & DRT Scenarios' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-authorities', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
    {
      q: 'Can the bank directly demand repayment from the guarantor without first taking action against the primary borrower?',
      a: 'Yes. Under Section 128 of the Indian Contract Act, 1872, the liability of the guarantor (surety) is co-extensive with that of the principal debtor, unless the contract stipulates otherwise. As affirmed by the Supreme Court of India in State Bank of India v. Indexport Registered (1992) and Bank of Bihar v. Damodar Prasad (1969), the creditor is not legally obligated to exhaust all legal remedies or initiate recovery against the primary borrower before proceeding directly against the guarantor. Once default occurs, the bank can issue demand notices, file civil recovery suits, or initiate arbitration against the guarantor simultaneously or exclusively.'
    },
    {
      q: 'What is the difference between a co-applicant (co-borrower) and a loan guarantor?',
      a: 'A co-applicant (co-borrower) is a joint primary borrower who applies for the loan jointly, shares primary responsibility for regular monthly EMI repayments from inception, and often has shared ownership or direct enjoyment of the loan asset. A loan guarantor (surety) is a collateral third-party promisor who guarantees that the borrower will fulfill their repayment obligations. While a guarantor does not receive loan disbursements or pay regular EMIs initially, their legal financial liability becomes 100% equal and co-extensive with the borrower upon default.'
    },
    {
      q: 'What happens if the primary borrower is absconding, untraceable, or flees the country?',
      a: "If the primary borrower absconds or becomes untraceable, the lending institution will invoke the guarantee deed and target the guarantor for full recovery of the outstanding principal, accumulated interest, and penal charges. However, the guarantor is entitled to robust legal defenses: (1) demanding an audit of loan statements to eliminate illegal penal compounding; (2) asserting that recovery agencies adhere strictly to RBI fair practice codes against harassment; (3) negotiating a formal One-Time Settlement (OTS); and (4) exercising subrogation rights under Section 140 of the Contract Act to legally recover the settled amount from the absconding borrower's known assets."
    },
    {
      q: 'Does a guarantor liability extinguish if the primary borrower passes away (dies)?',
      a: "No, a guarantor's liability does not automatically extinguish upon the death of the primary borrower. In unsecured personal loans without mandatory credit life insurance, the lender can legally demand settlement from the guarantor. However, the deceased borrower's legal heirs are also liable to the extent of the value of the estate/inheritance they received from the deceased. Guarantors can coordinate with legal heirs, verify if a loan protection insurance policy was bundled during sanction, or negotiate an amicable OTS with the bank."
    },
    {
      q: 'How does a primary borrower default affect the guarantor CIBIL score and credit history?',
      a: "Under Credit Information Companies (Regulation) Act, 2005 (CICRA), lending institutions report guarantee obligations to credit bureaus (CIBIL, Experian, Equifax, CRIF High Mark). When the primary borrower misses EMIs, the default is reported against both the primary borrower's PAN and the guarantor's PAN under 'Guarantor' liability. This triggers a sharp CIBIL score plunge (often 60 to 120 points), blocks fresh loan or credit card approvals, and leads to automated underwriting rejections until the account is formally settled and reported as 'Closed'."
    },
    {
      q: 'Can a guarantor be discharged from liability if the bank modified the loan terms without consent?',
      a: "Yes. Under Section 133 of the Indian Contract Act, 1872, any variance or material alteration made to the loan contract between the primary debtor and the creditor without the surety's explicit written consent discharges the guarantor from all liability for transactions subsequent to the variance. Furthermore, under Sections 134, 135, and 139, if the bank compounds with the borrower, grants unauthorized moratoriums or time extensions, or omits to preserve underlying securities, the guarantor is legally discharged."
    },
    {
      q: 'How can someone legally remove their name as a loan guarantor?',
      a: "A guarantor cannot unilaterally withdraw from an active guarantee deed for an existing disbursed loan without the lender's formal written consent. However, you can legally remove your name through three established mechanisms: (1) Guarantor Substitution: The primary borrower provides an acceptable replacement guarantor or additional collateral asset to release you; (2) Refinancing / Balance Transfer: The borrower transfers the loan to a new lender solely in their individual name; (3) Full Loan Closure or Compromise Settlement: Paying off the debt or structuring a One-Time Settlement (OTS) resulting in an official No Dues Certificate (NDC) and guarantee deed cancellation."
    },
    {
      q: 'What is the "Right of Subrogation" under Section 140 of the Indian Contract Act?',
      a: 'The Right of Subrogation (Section 140, Indian Contract Act) empowers a guarantor who has paid off or settled the primary borrower\'s defaulted debt to "step into the shoes of the creditor." The guarantor automatically inherits all rights, claims, securities, and legal remedies that the bank had against the principal debtor. The guarantor can then file a civil recovery suit or summary suit under Order 37 CPC against the primary borrower to recover 100% of the disbursed settlement funds, legal expenses, and interest.'
    },
    {
      q: 'Can bank recovery agents harass or visit the home and workplace of a guarantor?',
      a: 'Absolutely not. Under RBI Master Directions on Recovery Agents and Fair Practices Code (RBI/2022-23/108), recovery agents are strictly prohibited from using abusive language, making harassing phone calls before 8:00 AM or after 7:00 PM, calling references or relatives, visiting workplaces without prior appointment, or humiliating the guarantor publicly. Any violation constitutes an actionable regulatory offense punishable under the RBI Integrated Ombudsman Scheme and Indian criminal law (Section 503/506 IPC / BNS).'
    },
    {
      q: 'How does CredSettle assist loan guarantors facing recovery notices and borrower default?',
      a: 'CredSettle provides comprehensive legal and financial defense for distressed guarantors: (1) We draft and issue formal statutory response notices challenging bank demands under Sections 128, 133, 134, and 139 of the Contract Act; (2) We halt recovery agent harassment through cease-and-desist mandates; (3) We represent guarantors before bank settlement committees to negotiate a 40% to 70% One-Time Settlement (OTS) waiver; (4) We secure official No Dues Certificates and ensure clean CIBIL credit report updates; and (5) We assist in drafting recovery suits under Section 140 Subrogation against the primary borrower.'
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
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Guarantor Liability in Personal Loan
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            Are you facing recovery harassment or legal notices because the primary borrower defaulted? Understand the legal liability of a loan guarantor under Section 128 of the Indian Contract Act and how to defend your assets, credit score, and rights.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Guarantor Legal Defense: Consult Us</span>
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
                  <span>Guarantor Statutory Defense</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Governed by Indian Contract Act 1872 (Sec 126–147) &amp; RBI Fair Practices Code.
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
                <span>EXECUTIVE BRIEF: GUARANTOR LIABILITY &amp; STATUTORY PROTECTION</span>
              </div>

              <ul className="space-y-3.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">The Co-Extensive Rule (Section 128):</strong> Under Section 128 of the Indian Contract Act, 1872, the guarantor&apos;s liability is 100% co-extensive with the principal debtor. The bank is legally permitted to proceed against the guarantor without exhausting remedies against the primary borrower first.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Guarantor vs. Co-Applicant Distinction:</strong> A co-applicant is a joint borrower who signs as a primary debtor from Day 1. A guarantor is a third-party surety who provides a collateral guarantee. However, upon default, both face identical legal recovery exposure.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Statutory Discharge Protections (Sections 133–139):</strong> If the lender altered interest rates, tenure, or loan terms without the guarantor&apos;s written consent, or compromised with the borrower, the guarantor is legally discharged from liability under Sections 133, 134, and 135.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Right of Subrogation (Section 140):</strong> If a guarantor settles or pays the defaulted debt, they automatically step into the bank&apos;s shoes to legally recover 100% of the disbursed funds, costs, and interest from the primary borrower through civil summary suits.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Defense Against Harassment &amp; 40%–70% OTS:</strong> CredSettle stops illegal third-party collection calls, protects guarantor assets, and negotiates a structured One-Time Settlement (OTS) resulting in an official No Dues Certificate and clean credit record restoration.
                  </div>
                </li>
              </ul>
            </div>

            {/* SECTION 1: What is Guarantor Liability? Section 128 */}
            <section id="co-extensive-liability-section-128" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Foundations</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. What is Guarantor Liability? Section 128 &amp; The Co-Extensive Rule
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Thousands of individuals across India sign loan documents as a favor to friends, relatives, or business colleagues without realizing the severe legal ramifications. When the primary borrower stops paying monthly EMIs, banks and NBFCs immediately shift their aggressive recovery machinery toward the guarantor.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The legal foundation of guarantor liability in India is governed by the <strong>Indian Contract Act, 1872</strong>. Under <strong>Section 126</strong>, a &quot;contract of guarantee&quot; is a tripartite contract to perform the promise, or discharge the liability, of a third person in case of their default. The person who gives the guarantee is called the <em>Surety</em> or <em>Guarantor</em>, the person for whom the guarantee is given is the <em>Principal Debtor</em> (Primary Borrower), and the person to whom the guarantee is given is the <em>Creditor</em> (Bank or NBFC).
              </p>

              <div className="bg-white p-5 md:p-6 rounded-2xl border border-blue-200/80 shadow-xs space-y-3">
                <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                  <Gavel className="w-4 h-4 text-[#1886ff]" />
                  The Landmark &quot;Co-Extensive&quot; Doctrine (Section 128)
                </h3>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  <strong>Section 128 of the Indian Contract Act, 1872</strong> declares: <em>&quot;The liability of the surety is co-extensive with that of the principal debtor, unless it is otherwise provided by the contract.&quot;</em>
                </p>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  In practical legal terms, &quot;co-extensive&quot; means the guarantor&apos;s financial liability is identical in quantum, timing, and enforceability to that of the primary borrower. The moment the borrower commits an event of default (e.g., missing 90 days of EMIs turning the loan into a Non-Performing Asset), the guarantor becomes 100% personally liable for the entire outstanding loan balance, accumulated interest, penal charges, and legal expenses.
                </p>
              </div>

              {/* Landmark Supreme Court Precedents */}
              <div className="space-y-3 pt-1">
                <h3 className="text-sm md:text-base font-bold text-slate-900">
                  Landmark Supreme Court Rulings on Guarantor Liability:
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                  <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                      <Scale className="w-4 h-4 text-[#1886ff]" />
                      <span>Bank of Bihar v. Damodar Prasad (AIR 1969 SC 297)</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      The Supreme Court established that a creditor is not required to exhaust its legal remedies against the principal debtor before suing the surety. The creditor can directly execute a recovery decree against the guarantor even before touching the primary borrower&apos;s assets.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                      <Scale className="w-4 h-4 text-[#1886ff]" />
                      <span>State Bank of India v. Indexport Registered (AIR 1992 SC 1740)</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      The Apex Court reiterated that a composite money decree may be executed against the guarantor first. The bank has the sole discretion to choose whether to enforce the decree against the principal debtor, the mortgaged security, or the personal guarantor.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 2: Co-Applicant vs. Guarantor */}
            <section id="co-applicant-vs-guarantor" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Users className="w-4 h-4 text-[#1886ff]" />
                <span>Legal Comparison</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. Co-Applicant (Co-Borrower) vs. Loan Guarantor: Key Distinctions
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Many borrowers confuse the roles of a co-applicant and a loan guarantor. While both share substantial financial exposure upon default, their contractual inception and ongoing operational roles differ significantly:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                {/* Co-Applicant Card */}
                <div className="bg-white p-5 rounded-2xl border border-indigo-200/80 shadow-xs space-y-3">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm sm:text-base">
                    <CreditCard className="w-5 h-5 text-indigo-600 flex-shrink-0" />
                    <span>Co-Applicant / Co-Borrower</span>
                  </div>
                  <ul className="text-xs text-slate-600 space-y-2 list-disc pl-4 leading-relaxed">
                    <li>
                      <strong>Primary Obligor:</strong> Signs the loan agreement as a joint borrower from Day 1.
                    </li>
                    <li>
                      <strong>Disbursement &amp; Usage:</strong> Frequently enjoys joint ownership of the asset or direct benefit from loan funds.
                    </li>
                    <li>
                      <strong>Repayment Responsibility:</strong> Directly responsible for regular monthly EMI debits.
                    </li>
                    <li>
                      <strong>Credit Impact:</strong> Full loan balance reflects as an active loan on credit bureaus immediately upon sanction.
                    </li>
                  </ul>
                </div>

                {/* Guarantor Card */}
                <div className="bg-white p-5 rounded-2xl border border-blue-200/80 shadow-xs space-y-3">
                  <div className="flex items-center gap-2 text-[#1886ff] font-bold text-sm sm:text-base">
                    <ShieldCheck className="w-5 h-5 text-[#1886ff] flex-shrink-0" />
                    <span>Loan Guarantor / Surety</span>
                  </div>
                  <ul className="text-xs text-slate-600 space-y-2 list-disc pl-4 leading-relaxed">
                    <li>
                      <strong>Collateral Promisor:</strong> Signs a separate Deed of Guarantee as a third-party backup.
                    </li>
                    <li>
                      <strong>Disbursement &amp; Usage:</strong> Receives zero loan funds and derives no direct financial benefit from the loan.
                    </li>
                    <li>
                      <strong>Repayment Responsibility:</strong> Only triggered when the primary borrower defaults on payments.
                    </li>
                    <li>
                      <strong>Credit Impact:</strong> Listed as &quot;Guarantor&quot;; defaults trigger instant CIBIL score penalties on the guarantor&apos;s PAN.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* SECTION 3: Primary Borrower Absconding, Bankrupt, or Deceased */}
            <section id="primary-borrower-absconding-death" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <ShieldAlert className="w-4 h-4 text-[#1886ff]" />
                <span>Critical Risk Events</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. What Happens When the Primary Borrower is Absconding, Bankrupt, or Deceased?
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When catastrophic events impact the primary borrower, guarantors often believe their liability vanishes. Under Indian jurisprudence, the legal outcome depends on specific statutory frameworks:
              </p>

              <div className="space-y-3 pt-1">
                {/* Scenario 1: Absconding */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
                    <AlertTriangle className="w-4 h-4 text-amber-600" />
                    <span>Scenario A: Primary Borrower is Absconding or Untraceable</span>
                  </div>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    If the primary borrower switches off their phone, vacates their residence, or moves abroad, the lender will immediately invoke Section 128 and demand 100% repayment from the guarantor. The guarantor cannot evade liability simply because the borrower cannot be located. However, the guarantor can compel the bank to provide certified loan statement audits, halt recovery harassment, negotiate an OTS waiver, and invoke Section 140 Subrogation rights to attach the borrower&apos;s known properties.
                  </p>
                </div>

                {/* Scenario 2: Deceased */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
                    <Building2 className="w-4 h-4 text-indigo-600" />
                    <span>Scenario B: Death of the Primary Borrower</span>
                  </div>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    The death of the principal debtor does not automatically extinguish the guarantee deed. While the legal heirs of the deceased are only liable to the extent of the inheritance/estate they received, the guarantor&apos;s personal liability remains legally enforceable. The guarantor should immediately check if a mandatory Credit Shield or Loan Protection Insurance was bundled with the personal loan during sanction, which pays off the balance upon death.
                  </p>
                </div>

                {/* Scenario 3: Bankruptcy */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
                    <Gavel className="w-4 h-4 text-red-600" />
                    <span>Scenario C: Insolvency or Bankruptcy of the Borrower</span>
                  </div>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    In the landmark case of <em>Lalit Kumar Jain v. Union of India (2021)</em>, the Supreme Court ruled that the sanction of a resolution plan or the discharge of a principal debtor under the Insolvency and Bankruptcy Code (IBC) does not automatically discharge the personal guarantor. Lenders can continue independent recovery actions against personal guarantors unless explicitly released in the approved settlement.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 4: Legal Grounds for Discharge of Guarantor */}
            <section id="discharge-of-guarantor-sections" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <BadgeAlert className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Exoneration</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. Legal Grounds for Discharge of Guarantor under the Contract Act
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The Indian Contract Act contains powerful statutory safeguards that legally release and exonerate a guarantor from all liabilities if the lender or borrower acts outside the original contract:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-2">
                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                    <span className="w-5 h-5 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-[11px] font-bold">Sec 130</span>
                    <span>Revocation of Continuing Guarantee</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    A continuing guarantee (covering multiple future transactions) may at any time be revoked by the surety, as to future transactions, by giving formal written notice to the creditor.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                    <span className="w-5 h-5 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-[11px] font-bold">Sec 133</span>
                    <span>Discharge by Variance in Terms</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Any variance or material modification made to the loan contract (interest hike, tenure extension, top-up loan) between borrower and bank without the guarantor&apos;s explicit consent automatically discharges the guarantor.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                    <span className="w-5 h-5 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-[11px] font-bold">Sec 134</span>
                    <span>Discharge by Release of Borrower</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The guarantor is discharged by any contract between the creditor and the principal debtor by which the principal debtor is released, or by any act or omission of the creditor resulting in the debtor&apos;s legal discharge.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                    <span className="w-5 h-5 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-[11px] font-bold">Sec 135</span>
                    <span>Compounding or Granting Time</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    A contract between the creditor and principal debtor, whereby the creditor makes a composition with, or promises to give time to, or agrees not to sue the debtor, discharges the surety unless the surety assents.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                    <span className="w-5 h-5 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-[11px] font-bold">Sec 139</span>
                    <span>Creditor Impairing Surety Remedy</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If the creditor does any act inconsistent with the rights of the surety, or omits to do any act which duty to the surety requires (e.g. losing collateral securities or delaying recovery), the surety is discharged.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                    <span className="w-5 h-5 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-[11px] font-bold">Sec 141</span>
                    <span>Right to Creditor Securities</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    A surety is entitled to the benefit of every security which the creditor holds against the principal debtor. If the creditor loses or parts with such security without the surety&apos;s consent, the surety is discharged to that value.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 5: Status & Legal Liability Comparison Grid (Full Grid) */}
            <section id="legal-status-comparison-grid" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileSpreadsheet className="w-4 h-4 text-[#1886ff]" />
                <span>Comparative Legal Matrix</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. Status &amp; Legal Liability Comparison Grid: Borrower vs. Guarantor Scenarios
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Examine how legal liability, recovery avenues, asset attachment risks, and credit bureau penalties compare across distinct borrowing roles:
              </p>

              {/* Table with both vertical and horizontal lines forming a proper grid */}
              <div className="overflow-x-auto rounded-2xl border border-slate-300 bg-white shadow-xs">
                <table className="w-full text-left text-xs md:text-sm border-collapse border border-slate-300">
                  <thead className="bg-slate-100 border-b border-slate-300 text-slate-800">
                    <tr>
                      <th className="p-3.5 font-bold border border-slate-300">Role / Status</th>
                      <th className="p-3.5 font-bold border border-slate-300">Governing Statute</th>
                      <th className="p-3.5 font-bold border border-slate-300">Direct Financial Benefit</th>
                      <th className="p-3.5 font-bold border border-slate-300">Bank Recovery Powers</th>
                      <th className="p-3.5 font-bold border border-slate-300">CIBIL Bureau Impact</th>
                      <th className="p-3.5 font-bold border border-slate-300 text-[#1886ff]">CredSettle Defense Route</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-600">
                    <tr className="hover:bg-slate-50/60">
                      <td className="p-3.5 font-bold text-slate-900 border border-slate-200">
                        Primary Borrower
                      </td>
                      <td className="p-3.5 border border-slate-200">Indian Contract Act 1872</td>
                      <td className="p-3.5 text-emerald-700 font-semibold border border-slate-200">100% Loan Funds</td>
                      <td className="p-3.5 text-red-700 font-semibold border border-slate-200">Primary legal suits, arbitration &amp; SARFAESI</td>
                      <td className="p-3.5 text-red-700 font-semibold border border-slate-200">Severe Drop (-90 to -120 pts), NPA flag</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold border border-slate-200">Comprehensive OTS negotiation with 40%–70% waiver &amp; NDC</td>
                    </tr>
                    <tr className="hover:bg-slate-50/60">
                      <td className="p-3.5 font-bold text-slate-900 border border-slate-200">
                        Co-Applicant (Co-Borrower)
                      </td>
                      <td className="p-3.5 border border-slate-200">Joint Debtor Principle</td>
                      <td className="p-3.5 text-emerald-700 font-semibold border border-slate-200">Shared Asset / Funds</td>
                      <td className="p-3.5 text-red-700 font-semibold border border-slate-200">Equal primary liability from Day 1</td>
                      <td className="p-3.5 text-red-700 font-semibold border border-slate-200">Severe Drop (-90 to -120 pts), Joint default</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold border border-slate-200">Joint restructuring or single-applicant release through OTS</td>
                    </tr>
                    <tr className="hover:bg-slate-50/60">
                      <td className="p-3.5 font-bold text-slate-900 border border-slate-200">
                        Personal Loan Guarantor
                      </td>
                      <td className="p-3.5 border border-slate-200">Sec 128 Indian Contract Act</td>
                      <td className="p-3.5 text-slate-500 font-semibold border border-slate-200">0% (Zero Benefit)</td>
                      <td className="p-3.5 text-red-700 font-semibold border border-slate-200">Co-extensive demand notices, suits &amp; arbitration</td>
                      <td className="p-3.5 text-red-700 font-semibold border border-slate-200">Hard drop (-60 to -100 pts), &quot;Guarantor Default&quot;</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold border border-slate-200">Invoke Sec 133–139 discharge or negotiate OTS &amp; subrogate</td>
                    </tr>
                    <tr className="hover:bg-slate-50/60">
                      <td className="p-3.5 font-bold text-slate-900 border border-slate-200">
                        Corporate / Director Guarantor
                      </td>
                      <td className="p-3.5 border border-slate-200">IBC 2016 &amp; Contract Act</td>
                      <td className="p-3.5 text-amber-700 font-semibold border border-slate-200">Equity / Business Stake</td>
                      <td className="p-3.5 text-red-700 font-semibold border border-slate-200">Personal insolvency before NCLT / DRT</td>
                      <td className="p-3.5 text-red-700 font-semibold border border-slate-200">Commercial CIBIL &amp; Director PAN flagging</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold border border-slate-200">Defend against NCLT Sec 95 petitions &amp; structure debt resolution</td>
                    </tr>
                    <tr className="hover:bg-slate-50/60">
                      <td className="p-3.5 font-bold text-slate-900 border border-slate-200">
                        Discharged Guarantor
                      </td>
                      <td className="p-3.5 border border-slate-200">Sec 133, 134, 139 Contract Act</td>
                      <td className="p-3.5 text-slate-500 font-semibold border border-slate-200">0% (Zero Benefit)</td>
                      <td className="p-3.5 text-emerald-700 font-semibold border border-slate-200">ZERO (Legally void recovery actions)</td>
                      <td className="p-3.5 text-amber-700 font-semibold border border-slate-200">Subject to dispute &amp; deletion under CICRA</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold border border-slate-200">Serve statutory discharge notice &amp; purge CIBIL negative remarks</td>
                    </tr>
                    <tr className="hover:bg-slate-50/60">
                      <td className="p-3.5 font-bold text-slate-900 border border-slate-200">
                        Subrogated Guarantor
                      </td>
                      <td className="p-3.5 border border-slate-200">Sec 140 Indian Contract Act</td>
                      <td className="p-3.5 text-emerald-700 font-semibold border border-slate-200">Recovery from Debtor</td>
                      <td className="p-3.5 text-emerald-700 font-semibold border border-slate-200">Inherits all creditor rights against borrower</td>
                      <td className="p-3.5 text-emerald-700 font-semibold border border-slate-200">Restored to &quot;Closed&quot; / Clean Score</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold border border-slate-200">File Order 37 summary recovery suit against primary borrower</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 6: Technical Financial Risk & Scoring Penalty Analytics */}
            <section id="financial-scoring-math-exposure" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                <span>Financial Analytics</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. Technical Financial Risk Analytics &amp; CIBIL Scoring Penalties
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When a primary borrower defaults, the guarantor experiences an immediate, compounding cascade of credit destruction and underwriting blocks across the Indian banking ecosystem:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-red-600" />
                    CIBIL Score Destruction &amp; Multiplier Penalties
                  </h3>
                  <div className="space-y-2 text-xs text-slate-600 leading-relaxed">
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span>Payment History Weightage (CIBIL):</span>
                      <span className="font-bold text-slate-900">35% of total score</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span>Immediate Score Plunge (90 DPD Default):</span>
                      <span className="font-bold text-red-600">-60 to -110 Points</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span>Guarantor Liability Reporting Flag:</span>
                      <span className="font-bold text-red-700">&quot;Guarantor / Default&quot;</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span>LOS Underwriting Impact:</span>
                      <span className="font-bold text-slate-900">100% Loan / Credit Card Rejection</span>
                    </div>
                    <div className="flex justify-between py-1 pt-2 font-bold text-slate-900">
                      <span>OTS Resolution Rebound:</span>
                      <span className="text-emerald-700">Converts to &quot;Closed&quot; &amp; Score Rebounds</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-[#1886ff]" />
                    FOIR &amp; Debt-to-Income Exposure Accounting
                  </h3>
                  <div className="space-y-2 text-xs text-slate-600 leading-relaxed">
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span>Guaranteed Debt in FOIR Calculation:</span>
                      <span className="font-bold text-red-600">Counted as 100% Active Obligation</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span>Guarantor Borrowing Capacity:</span>
                      <span className="font-bold text-red-600">Reduced by Full Guaranteed EMI</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span>Compounding Penal Interest:</span>
                      <span className="font-bold text-slate-900">+24% to 36% p.a. on overdue sums</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span>Arbitration &amp; Legal Notice Surcharges:</span>
                      <span className="font-bold text-slate-900">₹15,000 – ₹50,000 added to claim</span>
                    </div>
                    <div className="flex justify-between py-1 pt-2 font-bold text-slate-900">
                      <span>Compromise Settlement Savings:</span>
                      <span className="text-emerald-700">40% to 70% Principal &amp; Interest Waiver</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 7: Embedded 16:9 Infographic Banner */}
            <section id="infographic-overview" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Sparkles className="w-4 h-4 text-[#1886ff]" />
                <span>Visual Defense Roadmap</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Visual Defense Blueprint: 6-Step Guarantor Protection &amp; Debt Resolution
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Refer to this visual blueprint outlining the 6-stage procedural sequence to protect yourself as a loan guarantor, challenge unlawful bank demands, and achieve an amicable debt settlement:
              </p>

              <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-3 md:p-4 overflow-hidden">
                <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-slate-100">
                  <Image
                    src="/images/infographics/guarantor-liability-personal-loan-default.jpg"
                    alt="Guarantor Liability in Personal Loan Default Defense Blueprint India"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 60vw"
                    priority
                  />
                </div>
                <div className="mt-3 px-2 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2">
                  <span>CredSettle Legal Defense Architecture • Indian Contract Act 1872 &amp; RBI Master Directions</span>
                  <a
                    href="/images/infographics/guarantor-liability-personal-loan-default.jpg"
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

            {/* SECTION 8: 6-Stage Standard Operating Procedure (SOP) */}
            <section id="six-stage-defense-sop" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Award className="w-4 h-4 text-[#1886ff]" />
                <span>Step-by-Step Protection SOP</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. Standard Operating Procedure (SOP): 6 Stages of Guarantor Defense
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Follow this sequential protocol to protect your personal assets, stop third-party harassment, and resolve your guarantor liability on favorable terms:
              </p>

              <div className="space-y-4 pt-2">
                {/* Stage 1 */}
                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 01
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Timeline: Days 1–5</span>
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-slate-900">
                    Immediate Loan Document Audit &amp; Guarantee Deed Inspection
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Request complete, certified copies of the Loan Sanction Letter, Loan Agreement, and the executed Deed of Guarantee from the lending institution. Verify whether your signature was obtained with proper witness attestation, whether the guarantee was specific or continuing, and whether any specific limitation clauses exist.
                  </p>
                </div>

                {/* Stage 2 */}
                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 02
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Timeline: Days 6–12</span>
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-slate-900">
                    Statutory Examination for Discharge Grounds (Sections 133–139)
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Audit loan statements to discover if the bank altered interest rates, granted repayment holidays/moratoriums to the borrower, extended loan tenure, or disbursed top-up facilities without your written approval. Any unauthorized variance constitutes an immediate legal ground for complete discharge of the surety under Section 133 of the Indian Contract Act.
                  </p>
                </div>

                {/* Stage 3 */}
                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 03
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Timeline: Days 13–20</span>
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-slate-900">
                    Formal Legal Reply &amp; Cease-and-Desist to Recovery Agencies
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Issue a formal statutory response notice through CredSettle to the Bank&apos;s Branch Manager and Principal Nodal Officer. Demand an immediate halt to unlawful recovery visits, phone calls before 8 AM / after 7 PM, and calls to family members under the <strong>RBI Master Directions on Recovery Agents (RBI/2022-23/108)</strong>.
                  </p>
                </div>

                {/* Stage 4 */}
                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 04
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Timeline: Days 21–35</span>
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-slate-900">
                    Asset Protection &amp; Rerouting of Bank Accounts
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    If your personal savings or salary account is held in the same bank where you signed as a guarantor, immediately open an account in a separate banking institution and reroute your funds. This eliminates the risk of an extrajudicial &quot;Right of Set-Off&quot; sweep against your personal deposits under Section 171 of the Contract Act.
                  </p>
                </div>

                {/* Stage 5 */}
                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 05
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Timeline: Months 2–4</span>
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-slate-900">
                    Structured One-Time Settlement (OTS) Negotiation
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    CredSettle engages with the bank&apos;s Compromise Settlement Committee. Leveraging the lack of borrower recovery, statutory defense objections, and genuine financial hardship, we negotiate a 40% to 70% waiver on accumulated interest, penalties, and outstanding balance, securing an official written OTS Sanction Letter.
                  </p>
                </div>

                {/* Stage 6 */}
                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 06
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Timeline: Months 4–6</span>
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-slate-900">
                    Securing NDC, CIBIL Restoration &amp; Invoking Section 140 Subrogation
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Upon settlement remittance, we ensure receipt of an official <strong>No Dues Certificate (NDC)</strong> and cancellation of the Guarantee Deed. We verify that credit bureaus update your status to &quot;Closed&quot;. Simultaneously, we assist you in exercising <strong>Section 140 Subrogation rights</strong> to initiate legal proceedings against the primary borrower to recover 100% of your money.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 9: Right of Subrogation (Section 140) */}
            <section id="subrogation-rights-section-140" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Recovering Your Money</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. The Right of Subrogation (Section 140): How to Recover Money from the Borrower
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                One of the most potent legal rights available to a loan guarantor who pays or settles a defaulted debt is the <strong>Right of Subrogation</strong> under <strong>Section 140 of the Indian Contract Act, 1872</strong>.
              </p>

              <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                  <Gavel className="w-4 h-4 text-[#1886ff]" />
                  What Does Section 140 Provide?
                </h3>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  <em>&quot;Where a guaranteed debt has become due, or default of the principal debtor to perform a guaranteed duty has taken place, the surety, upon payment or performance of all that he is liable for, is invested with all the rights which the creditor had against the principal debtor.&quot;</em>
                </p>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  In simple terms: The moment you pay off the bank or execute a settlement, you legally step into the shoes of the bank. You become the new creditor and inherit all legal claims, security liens, and enforcement rights against the defaulting primary borrower.
                </p>
              </div>

              <div className="space-y-3 pt-1">
                <h3 className="text-sm md:text-base font-bold text-slate-900">
                  Step-by-Step Legal Process to Recover Settlement Funds from the Borrower:
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
                  <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-1.5">
                    <div className="text-xs font-bold text-[#1886ff]">Step 1: Collect Bank Proofs</div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Secure certified bank receipts, the official OTS sanction letter, bank payment vouchers, and the No Dues Certificate establishing the exact amount you paid on behalf of the borrower.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-1.5">
                    <div className="text-xs font-bold text-[#1886ff]">Step 2: Statutory Demand Notice</div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Serve a formal statutory legal demand notice on the primary borrower demanding 100% reimbursement of the settled sum along with legal costs and interest under Section 145 Contract Act (Implied Promise to Indemnify).
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-1.5">
                    <div className="text-xs font-bold text-[#1886ff]">Step 3: Summary Suit (Order 37 CPC)</div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      File an expedited Summary Suit under Order 37 of the Code of Civil Procedure (CPC) for liquidated debt recovery, or seek attachment before judgment of the borrower&apos;s bank accounts and properties under Order 38 Rule 5 CPC.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 10: How to Legally Remove Name as Guarantor */}
            <section id="how-to-remove-guarantor-name" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <UserCheck className="w-4 h-4 text-[#1886ff]" />
                <span>Exit Strategies</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. How to Legally Remove Your Name as a Loan Guarantor
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Many individuals ask: <em>&quot;Can I simply write a letter to the bank and cancel my guarantee?&quot;</em> Once a personal loan is disbursed, a guarantee cannot be unilaterally cancelled without the lender&apos;s formal written agreement. However, there are three established legal pathways to remove your name:
              </p>

              <div className="space-y-3 pt-2">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                    <Users className="w-4 h-4 text-[#1886ff]" />
                    Mechanism 1: Guarantor Substitution (Replacement)
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    The primary borrower introduces a new, creditworthy guarantor (with equal or higher income and CIBIL score) or offers additional tangible collateral (such as a fixed deposit or property lien) to the lending institution. Upon approval by the bank credit committee, the bank executes an <strong>Addendum &amp; Release Deed</strong>, officially releasing you from all liabilities.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-indigo-600" />
                    Mechanism 2: Loan Refinancing / Balance Transfer by Borrower
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    The primary borrower applies for a balance transfer or fresh personal loan from another bank solely in their individual name without requiring a guarantor. The new loan proceeds are used to fully prepay and foreclose the original loan, automatically extinguishing the original guarantee deed.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    Mechanism 3: Full Foreclosure or One-Time Settlement (OTS)
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    If the loan is in default, negotiating a formal One-Time Settlement (OTS) with a substantial waiver and remitting the agreed compromised sum results in an official No Dues Certificate and complete discharge of both the borrower and guarantor.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 11: Formal Legal Notice Monospace Terminal Draft */}
            <section id="formal-legal-notice-terminal" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Notice Template</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                10. Formal Statutory Reply Notice (Monospace Terminal Draft)
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If the lending bank or its recovery agents have served you with a loan default demand notice as a guarantor, dispatch this formal statutory reply to the Bank Principal Nodal Officer and Branch Manager:
              </p>

              {/* Code / Notice Container */}
              <div className="rounded-2xl border border-slate-700 bg-slate-900 text-slate-100 p-5 md:p-6 shadow-sm overflow-x-auto text-xs font-mono leading-relaxed relative">
                <div className="text-blue-400 font-bold mb-3 pb-2 border-b border-slate-800 flex items-center justify-between">
                  <span>STATUTORY REPLY NOTICE: GUARANTOR DEMAND OBJECTION &amp; CEASE-AND-DESIST</span>
                  <button
                    onClick={handleCopyNotice}
                    className="flex items-center gap-1 text-[11px] bg-slate-800 hover:bg-slate-700 text-slate-200 px-2.5 py-1 rounded transition-colors"
                  >
                    {copied ? <CheckCheck className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    <span>{copied ? 'Copied!' : 'Copy Notice'}</span>
                  </button>
                </div>
                <pre id="legal-notice-content" className="whitespace-pre-wrap text-slate-200">
{`To,
The Branch Manager & Principal Nodal Officer (PNO),
[Bank / NBFC Name],
[Zonal Office Address / Branch Address],
Email: [nodalofficer@bankname.com]

Subject: FORMAL STATUTORY REPLY TO DEMAND NOTICE DATED [DD/MM/YYYY], OBJECTION TO UNLAWFUL HARASSMENT, AND ASSERTION OF STATUTORY DEFENSES UNDER SECTIONS 128, 133, 134 & 139 OF THE INDIAN CONTRACT ACT, 1872 IN RE: LOAN A/C NO: [Insert Loan A/C No.]

Respected Sir/Madam,

Under instructions from and on behalf of my client / the undersigned, [Guarantor Full Name], residing at [Guarantor Full Address], this formal statutory representation is submitted in response to your demand notice dated [DD/MM/YYYY]:

1. That the undersigned executed a Deed of Guarantee in respect of Personal Loan Facility [A/C No: XXXXXXXX] sanctioned in favor of Principal Debtor [Primary Borrower Full Name].

2. TAKE NOTICE that while Section 128 of the Indian Contract Act, 1872 provides that surety liability is co-extensive, such liability is strictly subject to the covenants of the contract and the mandatory statutory protections codified under Chapter VIII of the Indian Contract Act, 1872.

3. STATUTORY OBJECTIONS & GROUNDS OF DISCHARGE:
   a) Unauthorized Variance (Section 133): That your institution restructured the loan facility, altered interest rates, and granted repayment moratoriums to the primary debtor without the prior written knowledge or consent of the undersigned. Under Section 133 of the Indian Contract Act, the undersigned stands legally discharged from all liabilities.
   b) Impairment of Surety Remedy (Section 139): That your institution omitted to take timely recovery steps against the primary debtor while they were solvent and available, thereby impairing the eventual subrogation remedy of the undersigned.
   c) Unlawful Penal Compounding: The total demanded sum reflects exorbitant penal levies, bounced auto-debit surcharges, and unapproved interest compounding in gross violation of the Reserve Bank of India Master Directions on Fair Practices Code.

4. MANDATE AGAINST RECOVERY AGENT HARASSMENT:
   TAKE NOTICE that your collection agencies and recovery representatives have been subjecting the undersigned and their family members to aggressive, harassing phone calls outside prescribed hours (8:00 AM to 7:00 PM) and threatening workplace visits. This constitutes a severe regulatory violation under RBI Master Direction on Recovery Agents (RBI/2022-23/108) and is actionable under Sections 503 and 506 of the Indian Penal Code / Bharatiya Nyaya Sanhita.

DEMAND:
You are hereby called upon to:
i) Immediately cease and desist all third-party recovery agent calls, home visits, and defamatory communications targeting the undersigned.
ii) Provide a certified, itemized statement of accounts showing principal, regular interest, and all penal waivers applied since account opening.
iii) Refer the matter to the Bank's Compromise Settlement Committee to negotiate an amicable One-Time Settlement (OTS) with appropriate interest waivers.
iv) Confirm in writing the discharge of the guarantee deed upon execution of the settlement agreement.

Failure to comply within 15 (fifteen) calendar days of receipt shall compel the undersigned to initiate formal regulatory proceedings before the Reserve Bank of India Integrated Ombudsman (cms.rbi.org.in) alongside civil and criminal complaints before appropriate judicial forums at your sole cost and consequence.

Yours sincerely,

___________________________
[Signature]
[Guarantor Name]
[Mobile Number]
[Registered Email ID]`}
                </pre>
              </div>
            </section>

            {/* SECTION 12: 3-Tier Escalation Matrix & Regulatory Grievance Mechanisms */}
            <section id="three-tier-escalation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff]" />
                <span>Grievance Escalation Framework</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                11. The 3-Tier Escalation Matrix &amp; Judicial Remedies for Guarantors
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If the lending bank refuses to consider statutory discharge grounds or allows recovery agents to harass you, follow this 3-tier regulatory escalation path:
              </p>

              <div className="space-y-4 pt-2">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Level 1: Branch Manager &amp; Bank Legal Desk
                    </span>
                    <span className="text-xs text-slate-500 font-semibold">Turnaround: 7–14 Days</span>
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-slate-900">
                    Submission of Statutory Reply &amp; Audit Request
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Submit the written statutory response directly to the lending branch and the bank&apos;s centralized customer redressal cell. Request account statements and obtain a stamped acknowledgement receipt.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-md">
                      Level 2: Principal Nodal Officer (PNO) &amp; Internal Ombudsman
                    </span>
                    <span className="text-xs text-slate-500 font-semibold">Turnaround: 15–30 Days</span>
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-slate-900">
                    Escalation for Arbitrary Recovery &amp; Unfair Practices
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    If the branch does not resolve the issue within 14 days, escalate to the Principal Nodal Officer (PNO). The PNO has direct authority to examine Section 133 contract variances, halt rogue recovery agents, and refer the file to the OTS Compromise Committee.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-emerald-200 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">
                      Level 3: RBI Integrated Ombudsman (CMS Portal)
                    </span>
                    <span className="text-xs text-slate-500 font-semibold">Turnaround: 30 Days</span>
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-slate-900">
                    Regulatory Complaint via cms.rbi.org.in
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    If 30 days elapse without resolution, file a formal complaint on the <strong>RBI CMS portal (cms.rbi.org.in)</strong> under the Reserve Bank - Integrated Ombudsman Scheme, 2021. The Ombudsman can award compensation up to ₹20 Lakhs for harassment and order the bank to rectify wrongful credit bureau reporting.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 13: Chronological Milestone Resolution Timeline (Full Grid) */}
            <section id="chronological-milestones-timeline" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Clock className="w-4 h-4 text-[#1886ff]" />
                <span>Procedural Timelines</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                12. Chronological Milestone Resolution Timeline (Day 0 to Month 6)
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Understand the key institutional and legal milestones involved in resolving guarantor liabilities from the first default notice to full closure:
              </p>

              {/* Table with both vertical and horizontal lines forming a proper grid */}
              <div className="overflow-x-auto rounded-2xl border border-slate-300 bg-white shadow-xs">
                <table className="w-full text-left text-xs md:text-sm border-collapse border border-slate-300">
                  <thead className="bg-slate-100 border-b border-slate-300 text-slate-800">
                    <tr>
                      <th className="p-3.5 font-bold border border-slate-300">Milestone Phase</th>
                      <th className="p-3.5 font-bold border border-slate-300">Key Legal / Banking Event</th>
                      <th className="p-3.5 font-bold border border-slate-300">Statutory Limitation Window</th>
                      <th className="p-3.5 font-bold border border-slate-300 text-[#1886ff]">Guarantor Strategic Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-600">
                    <tr className="hover:bg-slate-50/60">
                      <td className="p-3.5 font-bold text-slate-900 border border-slate-200">Day 0</td>
                      <td className="p-3.5 border border-slate-200">Primary Borrower Misses EMI</td>
                      <td className="p-3.5 border border-slate-200">1 to 30 DPD (Special Mention Account 0)</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold border border-slate-200">Contact borrower &amp; verify reason for missed EMI</td>
                    </tr>
                    <tr className="hover:bg-slate-50/60">
                      <td className="p-3.5 font-bold text-slate-900 border border-slate-200">Days 30–60</td>
                      <td className="p-3.5 border border-slate-200">Bank Recovery Contact with Guarantor</td>
                      <td className="p-3.5 border border-slate-200">SMA-1 / SMA-2 stage</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold border border-slate-200">Review loan deed copies &amp; ensure bank accounts are segregated</td>
                    </tr>
                    <tr className="hover:bg-slate-50/60">
                      <td className="p-3.5 font-bold text-slate-900 border border-slate-200">Day 90</td>
                      <td className="p-3.5 border border-slate-200">NPA Classification &amp; Demand Notice</td>
                      <td className="p-3.5 border border-slate-200">90-day RBI prudential norm</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold border border-slate-200">Dispatch formal Section 128/133 statutory reply notice</td>
                    </tr>
                    <tr className="hover:bg-slate-50/60">
                      <td className="p-3.5 font-bold text-slate-900 border border-slate-200">Days 91–150</td>
                      <td className="p-3.5 border border-slate-200">Arbitration / Legal Notice Issuance</td>
                      <td className="p-3.5 border border-slate-200">30-day response window</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold border border-slate-200">Engage CredSettle legal panel to open compromise OTS talks</td>
                    </tr>
                    <tr className="hover:bg-slate-50/60">
                      <td className="p-3.5 font-bold text-slate-900 border border-slate-200">Months 3–5</td>
                      <td className="p-3.5 border border-slate-200">OTS Compromise Sanction Letter</td>
                      <td className="p-3.5 border border-slate-200">Bilateral negotiation period</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold border border-slate-200">Secure official written OTS letter with 40%–70% waiver</td>
                    </tr>
                    <tr className="hover:bg-slate-50/60">
                      <td className="p-3.5 font-bold text-slate-900 border border-slate-200">Months 5–6</td>
                      <td className="p-3.5 border border-slate-200">No Dues Certificate &amp; Subrogation</td>
                      <td className="p-3.5 border border-slate-200">30 days from settlement payment</td>
                      <td className="p-3.5 text-[#1886ff] font-semibold border border-slate-200">Collect NDC, verify CIBIL update, &amp; file Sec 140 suit against debtor</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 14: Specialized Real-World Scenarios */}
            <section id="specialized-guarantor-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>Specialized Scenarios</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                13. Specialized Real-World Scenarios: Fintech Apps, ARCs &amp; DRT Litigation
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Guarantor liability dynamics vary significantly across modern lending models and specialized legal forums:
              </p>

              <div className="space-y-3 pt-2">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#1886ff]" />
                    1. Digital Fintech NBFC Apps &amp; OTP-Based Guarantees
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Instant loan applications often attempt to bind relatives as guarantors through SMS OTP verifications or simple checkbox consents. Under the <strong>Information Technology Act, 2000</strong> and the Indian Contract Act, a valid contract of guarantee requires free consent, explicit consideration, and clear acknowledgment of surety terms. Vague digital references or emergency contact permissions do NOT constitute enforceable guarantee deeds.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-indigo-600" />
                    2. Asset Reconstruction Companies (ARCs) &amp; Bad Loan Assignment
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    When banks sell stressed loan portfolios to Asset Reconstruction Companies (e.g., ARCIL, Edelweiss ARC, Phoenix ARC) under Section 5 of the SARFAESI Act, the ARC acquires all contractual rights against both the borrower and guarantor. However, ARCs purchase bad loans at steep discounts (20% to 40% of face value) and are highly motivated to execute quick, cash-based OTS settlements with substantial waivers.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                    <Gavel className="w-4 h-4 text-red-600" />
                    3. Unilateral Arbitrator Appointments &amp; Perkins Eastman Defense
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Private lenders frequently issue arbitration notices appointing a sole arbitrator unilaterally to pass ex-parte awards against guarantors. Under the Supreme Court ruling in <em>Perkins Eastman Architects DPC v. HSCC (India) Ltd. (2020)</em>, unilateral appointment of arbitrators by lenders is illegal and void ab initio. We challenge such biased proceedings before the High Court under Section 11/14 of the Arbitration Act.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 flex items-center gap-2">
                    <Landmark className="w-4 h-4 text-emerald-600" />
                    4. Debt Recovery Tribunal (DRT) Proceedings for High-Value Debts
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    For cumulative loan defaults exceeding ₹20 Lakhs, banks file Original Applications (OA) before the Debt Recovery Tribunal (DRT) under the Recovery of Debts and Bankruptcy Act, 1993. Personal guarantors have the right to appear, file written statements contesting debt calculations, raise Section 133/139 discharge pleas, and participate in Lok Adalat or court-annexed mediation for compromise settlement.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 15: Company Profile */}
            <div id="company-profile" className="scroll-target">
              <CompanySection />
            </div>

            {/* SECTION 16: Frequently Asked Questions Accordion */}
            <section id="frequently-asked-questions" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <HelpCircle className="w-4 h-4 text-[#1886ff]" />
                <span>Frequently Asked Questions</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Frequently Asked Questions on Guarantor Liability in Personal Loans
              </h2>
              <p className="text-xs md:text-sm text-slate-600">
                Click on any question below to view detailed legal answers verified by our debt resolution professionals:
              </p>

              <div className="space-y-3 pt-2">
                {faqs.map((faq, index) => {
                  const isOpen = openFaq === index;
                  return (
                    <div
                      key={index}
                      className="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden transition-all"
                    >
                      <button
                        onClick={() => toggleFaq(index)}
                        className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-slate-900 hover:text-[#1886ff] transition-colors cursor-pointer"
                        aria-expanded={isOpen}
                      >
                        <span>{faq.q}</span>
                        <ChevronDown
                          className={`w-4 h-4 sm:w-5 sm:h-5 text-slate-400 flex-shrink-0 transition-transform duration-200 ${
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

            {/* SECTION 17: Regulatory Authorities & Outbound Links */}
            <section id="regulatory-authorities" className="scroll-target space-y-4 pt-4 border-t border-slate-200">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-500">
                <BookOpen className="w-4 h-4" />
                <span>Statutory Citations &amp; Legal Authorities</span>
              </div>
              <h2 className="text-base sm:text-lg font-bold text-slate-900">
                Official Regulatory Citations &amp; Judicial References
              </h2>
              <ul className="space-y-2 text-xs text-slate-600 leading-relaxed list-disc pl-5">
                <li>
                  <strong>Indian Contract Act, 1872:</strong> Sections 126–147 (Contract of Guarantee, Surety Rights, Discharge of Surety, Subrogation), Ministry of Law and Justice, Government of India.
                </li>
                <li>
                  <strong>Reserve Bank of India (RBI):</strong> Master Direction on Fair Practices Code for Lenders &amp; Circular RBI/2022-23/108 on Recovery Agents.
                </li>
                <li>
                  <strong>Reserve Bank - Integrated Ombudsman Scheme, 2021:</strong> Redressal Mechanism for Unfair Bank Practices &amp; Harassment (cms.rbi.org.in).
                </li>
                <li>
                  <strong>Credit Information Companies (Regulation) Act, 2005 (CICRA):</strong> Rules on Reporting Guarantor Obligations to CIBIL, Experian, and Equifax.
                </li>
                <li>
                  <strong>Code of Civil Procedure, 1908 (CPC):</strong> Order 37 (Summary Suits for Debt Recovery) and Order 38 Rule 5 (Attachment Before Judgment).
                </li>
              </ul>

              {/* 10 Internal Topic Badges */}
              <div className="pt-4 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Explore Related CredSettle Legal &amp; Debt Guides:</span>
                <div className="flex flex-wrap gap-2">
                  <Link href="/bank-sent-legal-notice-for-loan-what-to-do" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Bank Sent Legal Notice
                  </Link>
                  <Link href="/services/personal-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Personal Loan Settlement
                  </Link>
                  <Link href="/services/anti-harassment" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Anti-Harassment Defense
                  </Link>
                  <Link href="/salary-deduction-personal-loan-default" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Salary Deduction Rights
                  </Link>
                  <Link href="/arbitration-notice-personal-loan-default" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Arbitration Notice Defense
                  </Link>
                  <Link href="/bank-recovery-case-in-court" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Bank Court Recovery Cases
                  </Link>
                  <Link href="/convert-settled-status-to-closed" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Convert Settled to Closed
                  </Link>
                  <Link href="/remove-settled-status-from-cibil" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Remove Settled from CIBIL
                  </Link>
                  <Link href="/get-noc-after-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Get NOC Certificate
                  </Link>
                  <Link href="/verify-loan-settlement-letter" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Verify Settlement Letter
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
                Specialized in banking compliance, arbitral defense strategies, loan dispute resolution, and NPA settlement negotiations with deep expertise challenging unlawful guarantor recovery demands and surety disputes across Indian banking forums.
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

            {/* Card 2: Emergency CTA Card */}
            <div
              className="rounded-3xl p-6 text-white text-center space-y-4 shadow-md relative overflow-hidden"
              style={{ backgroundColor: '#2452ae' }}
            >
              <div className="space-y-1 text-center">
                <span className="text-xs font-black uppercase tracking-wider text-blue-200 bg-white/10 px-3 py-1 rounded-full inline-block mb-1">
                  100% CONFIDENTIAL LEGAL DEFENSE
                </span>
                <h3 className="text-lg md:text-xl font-bold text-white leading-snug">
                  Primary Borrower Defaulted on Loan?
                </h3>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our debt resolution experts challenge illegal guarantor demands, stop recovery agent harassment, defend your personal assets, and negotiate a 40% to 70% loan waiver.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Guarantor Legal Defense: Consult Us
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
                  <span>Direct Bank Settlement • RBI Compliant</span>
                </div>
              </div>
            </div>

            {/* Card 3: CredSettle Trust Badges */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <h4 className="font-bold text-slate-900 text-sm">The CredSettle Advantage</h4>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Zero Upfront Risk:</strong> Success-linked settlement fees.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Direct Bank Remittance:</strong> Zero middleman fund holding.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>RBI &amp; CICRA Compliance:</strong> 100% lawful dispute handling.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Pan-India Representation:</strong> Dedicated debt resolution specialists.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <h4 className="font-bold text-slate-900 text-sm">Related Legal Guides</h4>
              <div className="space-y-2.5">
                <Link
                  href="/salary-deduction-personal-loan-default"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Can Bank Legally Deduct EMI from Salary?
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Right of Set-Off defense guide &rarr;</span>
                </Link>

                <Link
                  href="/ecs-nach-bounce-legal-notice-section-25"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    ECS / NACH Bounce Legal Notice Section 25
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Full step-by-step reply blueprint &rarr;</span>
                </Link>

                <Link
                  href="/arbitration-notice-personal-loan-default"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Arbitration Notice for Personal Loan Default
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Perkins Eastman defense guide &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
