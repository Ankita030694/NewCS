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
  ShieldAlert
} from 'lucide-react';

export default function CreditCardDefaultByHousewifeClient() {
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
    { id: 'spousal-liability-indian-law', label: '1. Spousal Liability & Contract Law' },
    { id: 'legal-framework-separate-personality', label: '2. Separate Legal Personality' },
    { id: 'debt-resolution-comparison-matrix', label: '3. Debt Resolution Comparison' },
    { id: 'credit-score-impact-cibil-pan', label: '4. CIBIL PAN & Credit Score Impact' },
    { id: 'infographic-housewife-debt-blueprint', label: '5. Visual Defense Blueprint' },
    { id: 'step-by-step-defense-sop', label: '6. 6-Stage Defense Protocol' },
    { id: 'statutory-defenses-harassment-protection', label: '7. Statutory Defenses & Rights' },
    { id: 'three-tier-grievance-escalation', label: '8. 3-Tier Grievance Redressal' },
    { id: 'chronological-default-timeline', label: '9. Procedural Default Milestones' },
    { id: 'complex-scenarios-joint-liabilities', label: '10. Add-On Cards & Joint Scenarios' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
    {
      q: 'Is a husband legally liable for credit card debt incurred by his wife in India?',
      a: 'No. Under the Indian Contract Act, 1872 and the doctrine of privity of contract, an unsecured credit card contract is strictly between the cardholder and the issuing bank. A husband is not legally liable for his wife\'s debts unless he signed as a co-applicant or explicit financial guarantor.'
    },
    {
      q: 'Can banks or recovery agents deduct money from a husband\'s bank account for his wife\'s debt?',
      a: 'No. Banks cannot exercise a banker\'s right of lien or set-off against a husband\'s individual bank account, fixed deposits, or salary for his wife\'s delinquent credit cards. Such unilateral deductions are illegal without a specific court decree or joint account mandate.'
    },
    {
      q: 'Can bank recovery agents visit the husband\'s workplace or call his phone?',
      a: 'No. Under the RBI Master Direction on Fair Practices Code, recovery agents are strictly prohibited from contacting or harassing spouses, family members, or employers of the borrower. Calling or visiting a husband for his wife\'s debt is a severe regulatory violation punishable by the RBI Ombudsman.'
    },
    {
      q: 'Does a wife\'s credit card default affect her husband\'s CIBIL score?',
      a: 'No. Under the Credit Information Companies (Regulation) Act, 2005 (CICRA), credit bureau records are mapped strictly to individual Permanent Account Numbers (PAN). A housewife\'s loan default impacts only her own CIBIL score and does not reflect on her husband\'s credit report unless he is a joint borrower.'
    },
    {
      q: 'What happens if the housewife defaulted on an Add-On (supplementary) credit card?',
      a: 'If the housewife held an Add-On card issued against her husband\'s primary credit card account, the husband remains 100% legally liable for all outstanding balances. The primary cardholder contractually assumes full financial responsibility for all supplementary cards under Indian banking agreements.'
    },
    {
      q: 'Can recovery agents seize household assets or Stridhan for credit card dues?',
      a: 'No. Unsecured credit card defaults do not give lenders collateral repossession rights. Furthermore, under Section 14 of the Hindu Succession Act, 1956 and the Married Women\'s Property Act, 1874, a woman\'s Stridhan (personal jewelry, gifts, separate property) is legally protected from attachment by unsecured creditors.'
    },
    {
      q: 'Can a bank initiate criminal proceedings under Section 138 or Section 25 PSSA against a housewife?',
      a: 'A bank can file complaints under Section 138 of the Negotiable Instruments Act or Section 25 of the Payments and Settlement Systems Act only if an ECS/NACH mandate or cheque issued from the wife\'s bank account bounced. However, the husband cannot be prosecuted under these provisions, and the matter remains bailable and easily settleable.'
    },
    {
      q: 'How does a One-Time Settlement (OTS) work for a housewife with no income?',
      a: 'When a cardholder has zero independent income or assets, banks classify the exposure as an unrecoverable non-performing asset (NPA). Through CredSettle, borrowers negotiate an affordable compromise One-Time Settlement (OTS), securing a 50% to 75% waiver on accumulated penal interest and closing the account with a formal No Dues Certificate.'
    },
    {
      q: 'What should a family do if recovery agents use abusive language or issue threats?',
      a: 'Immediately document and record all communications, noting agent caller IDs and timestamps. Issue a formal cease-and-desist legal notice citing RBI Master Circulars, file a police complaint under the Bharatiya Nyaya Sanhita (BNS) for criminal intimidation, and escalate to the bank\'s Principal Nodal Officer and the RBI Ombudsman.'
    },
    {
      q: 'Can a housewife rebuild her CIBIL score after settling her credit card debt?',
      a: 'Yes. Once the debt is resolved and an official No Dues Certificate (NDC) is issued, the housewife can rebuild her credit profile by opening a small fixed deposit backed credit card (secured card), maintaining utilization below 30%, and ensuring timely repayments over a 12 to 18 month period.'
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
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-4 border border-white/15">
            <Scale className="w-4 h-4 text-blue-200" />
            <span>Spousal Debt Liability &amp; Banking Regulations Guide</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Is the Husband Liable for Credit Card Default by Housewife?
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            Understand your statutory protections under the Indian Contract Act, Married Women&apos;s Property Act, and RBI Fair Practices Code. Discover why spousal liability is legally separate and how to settle delinquent cards with complete legal protection.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Get Legal Advice for Spousal Debt</span>
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
                  <span>Statutory Legal Defense</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Governed by Indian Contract Act 1872 &amp; RBI Fair Practices Directives.
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
                <span>EXECUTIVE BRIEF: SPOUSAL DEBT LIABILITY IN INDIA</span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Zero Husband Liability:</strong> Under the Indian Contract Act, credit card contracts are personal to the cardholder. A husband is not legally liable for his wife&apos;s individual debt.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Husband&apos;s CIBIL Is Unaffected:</strong> Credit scores are tracked strictly by individual PAN. A housewife&apos;s default does not impact her husband&apos;s credit profile.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Strict RBI Ban on Harassment:</strong> RBI prohibits recovery agents from contacting, calling, or visiting spouses, relatives, or workplaces.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Asset &amp; Stridhan Protection:</strong> Creditors cannot attach the husband&apos;s salary, savings, or property. A woman&apos;s Stridhan is legally protected.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">50% to 75% OTS Settlement:</strong> Non-earning homemakers qualify for significant One-Time Settlement waivers, finalized with an official No Dues Certificate.
                  </div>
                </li>
              </ul>
            </div>

            {/* SECTION 1: Spousal Liability & Contract Law */}
            <section id="spousal-liability-indian-law" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4" />
                <span>Foundational Legal Jurisprudence</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                1. Spousal Liability: Is Husband Liable for Wife Debt?
              </h2>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                In Indian commercial jurisprudence, marriage does not create a joint financial entity. When a married woman applies for and is granted a credit card or personal loan in her individual name, the legal relationship is governed strictly by the Indian Contract Act, 1872. Under the bedrock doctrine of privity of contract, rights and obligations arising from an agreement exist solely between the contracting parties: the issuing bank and the primary cardholder.
              </p>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                A common misconception exploited by aggressive recovery agencies is that marriage implies automatic financial co-guarantee. Indian law rejects this premise entirely. Unless the husband has explicitly signed the loan agreement as a co-applicant, primary cardholder, or provided a formal deed of guarantee, he remains a complete stranger to the contract. The lender holds no legal standing to demand payment from the husband, deduct funds from his bank accounts, or initiate recovery proceedings against his personal assets.
              </p>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Furthermore, ancient concepts such as the doctrine of pious obligation under classical Hindu law apply strictly to the moral obligation of sons to repay their father&apos;s untainted debts; there is zero statutory or customary pious obligation requiring a husband to settle his wife&apos;s commercial credit debts, nor does any reciprocal obligation exist on the wife. Consequently, credit card arrears contracted by a housewife represent solely her individual civil obligation.
              </p>
            </section>

            {/* SECTION 2: Separate Legal Personality & Property Rights */}
            <section id="legal-framework-separate-personality" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Landmark className="w-4 h-4" />
                <span>Statutory Property Protections</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                2. Indian Legal Framework: Separate Legal Personality
              </h2>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                The financial independence and separate legal identity of married women are codified under multiple Indian statutes, most notably the Married Women&apos;s Property Act, 1874 (MWPA) and Section 14 of the Hindu Succession Act, 1956. These statutory provisions establish that all property acquired by a woman, whether through inheritance, gifts, personal savings, or Stridhan received during marriage, constitutes her absolute and exclusive estate.
              </p>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Because a woman&apos;s estate is legally segregated from her husband&apos;s estate, creditors pursuing money claims cannot pierce the marital veil. A bank obtaining an award or civil decree against a defaulted housewife can seek execution solely against assets owned exclusively in her name. The husband&apos;s salary, professional earnings, independently purchased residential properties, vehicles, and investment portfolios are immune from attachment under Order XXI of the Code of Civil Procedure, 1908.
              </p>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                The sole narrow exception recognized in common law is the agency of necessity doctrine, where a wife purchasing basic life-sustaining necessities such as food or emergency medical supplies without adequate spousal maintenance may pledge her husband&apos;s credit. However, high-interest revolving credit cards, personal loans, retail purchases, and consumer durables do not qualify as agency of necessity. Financial institutions are fully cognizant of this legal boundary, which is why recovery agents frequently resort to psychological intimidation rather than legitimate court litigation.
              </p>
            </section>

            {/* SECTION 3: Debt Resolution Matrix */}
            <section id="debt-resolution-comparison-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4" />
                <span>Resolution Pathways Matrix</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                3. Debt Resolution Matrix: Legal Relief Mechanisms
              </h2>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                When a housewife defaults on credit card obligations, families face several strategic choices. Evaluating these options based on financial viability, spousal insulation, and credit record impact is essential for long-term resolution.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto shadow-xs bg-white">
                <table className="w-full text-xs sm:text-sm text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
                      <th className="p-3 sm:p-4 border-r border-slate-200">Resolution Pathway</th>
                      <th className="p-3 sm:p-4 border-r border-slate-200">Financial Relief Target</th>
                      <th className="p-3 sm:p-4 border-r border-slate-200">Husband Liability Status</th>
                      <th className="p-3 sm:p-4">Best Suited For</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-700">
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="p-3 sm:p-4 font-bold text-slate-900 border-r border-slate-200">
                        One-Time Settlement (OTS)
                      </td>
                      <td className="p-3 sm:p-4 text-emerald-700 font-bold border-r border-slate-200">
                        50% to 75% Principal &amp; Interest Waiver
                      </td>
                      <td className="p-3 sm:p-4 text-slate-600 border-r border-slate-200">
                        Zero liability; completely insulated
                      </td>
                      <td className="p-3 sm:p-4 text-slate-600">
                        Unmanageable dues with zero independent income
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="p-3 sm:p-4 font-bold text-slate-900 border-r border-slate-200">
                        Debt Restructuring / Moratorium
                      </td>
                      <td className="p-3 sm:p-4 text-slate-600 border-r border-slate-200">
                        Tenure extension; zero principal waiver
                      </td>
                      <td className="p-3 sm:p-4 text-slate-600 border-r border-slate-200">
                        Zero liability unless added as co-signer
                      </td>
                      <td className="p-3 sm:p-4 text-slate-600">
                        Temporary cash crunch with foreseeable income
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="p-3 sm:p-4 font-bold text-slate-900 border-r border-slate-200">
                        Balance Transfer / Top-Up Loan
                      </td>
                      <td className="p-3 sm:p-4 text-slate-600 border-r border-slate-200">
                        Lower APR; shifts debt to new lender
                      </td>
                      <td className="p-3 sm:p-4 text-amber-700 font-bold border-r border-slate-200">
                        High risk if husband takes personal loan
                      </td>
                      <td className="p-3 sm:p-4 text-slate-600">
                        Husband voluntarily absorbing the debt
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="p-3 sm:p-4 font-bold text-slate-900 border-r border-slate-200">
                        Lok Adalat Conciliation
                      </td>
                      <td className="p-3 sm:p-4 text-emerald-700 font-semibold border-r border-slate-200">
                        35% to 55% waiver via judicial mediation
                      </td>
                      <td className="p-3 sm:p-4 text-slate-600 border-r border-slate-200">
                        Zero liability; formal court decree
                      </td>
                      <td className="p-3 sm:p-4 text-slate-600">
                        Disputed interest calculations pending in court
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="p-3 sm:p-4 font-bold text-slate-900 border-r border-slate-200">
                        Inaction / Continued Default
                      </td>
                      <td className="p-3 sm:p-4 text-red-600 font-semibold border-r border-slate-200">
                        Zero relief; 42% APR compounding penalties
                      </td>
                      <td className="p-3 sm:p-4 text-red-600 font-semibold border-r border-slate-200">
                        Third-party harassment risks
                      </td>
                      <td className="p-3 sm:p-4 text-slate-600">
                        Not recommended; worsens credit bureau record
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 4: Technical CIBIL Algorithm & Scoring Math */}
            <section id="credit-score-impact-cibil-pan" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4" />
                <span>Credit Bureau Architecture</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                4. Credit Score Impact: Wife PAN vs Husband CIBIL
              </h2>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Credit scoring in India operates under the Credit Information Companies (Regulation) Act, 2005 (CICRA). The four licensed credit bureaus: TransUnion CIBIL, Experian, CRIF High Mark, and Equifax, track credit facilities strictly through the borrower&apos;s Permanent Account Number (PAN). There is no algorithmic mechanism linking marital status, household addresses, or spousal names into a single consolidated credit profile.
              </p>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                When a housewife defaults on her credit card, the issuing bank reports Days Past Due (DPD) data strictly against her PAN. Her credit score will experience a sharp decline, typically dropping from a healthy 750+ score to the 550–620 range following 90 days of continuous non-payment. However, her husband&apos;s credit score remains 100% untouched. He can continue applying for home loans, vehicle financing, or premium credit lines without any adverse underwriting flags.
              </p>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Following a successful One-Time Settlement, the card status will be reported to CIBIL as &quot;Settled&quot;. While this prevents active legal claims, it reflects that the balance was resolved for less than the full contract amount. The housewife can systematically restore her credit standing within 12 to 18 months by securing a fixed deposit backed credit card, maintaining low credit utilization below 30%, and ensuring flawless repayment cycles.
              </p>
            </section>

            {/* SECTION 5: Visual Infographic Asset Card */}
            <section id="infographic-housewife-debt-blueprint" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Sparkles className="w-4 h-4" />
                <span>Visual Legal Architecture</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                5. Visual Blueprint: Housewife Debt Defense Guide
              </h2>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                The visual framework below summarizes the five core legal pillars protecting families against unlawful recovery tactics and outlining the institutional settlement workflow.
              </p>

              <div className="rounded-2xl border border-slate-200/80 bg-white p-3 sm:p-4 shadow-xs overflow-hidden">
                <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-slate-100">
                  <Image
                    src="/images/infographics/credit-card-default-by-housewife.jpg"
                    alt="Housewife Credit Card Default Spousal Liability and Legal Defense Framework"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 900px"
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="mt-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-[11px] text-slate-500">
                  <span>Figure 1.1: Comprehensive CredSettle Legal &amp; Spousal Protection Blueprint.</span>
                  <a
                    href="/images/infographics/credit-card-default-by-housewife.jpg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1886ff] hover:underline font-semibold inline-flex items-center gap-1"
                  >
                    <span>View High-Res Infographic</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </section>

            {/* SECTION 6: 6-Stage Defense Protocol */}
            <section id="step-by-step-defense-sop" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4" />
                <span>Standard Operating Procedure</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                6. 6-Stage Defense Protocol: Settle Housewife Debt
              </h2>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Navigating a credit card default requires a disciplined legal and financial strategy. CredSettle implements a structured six-stage protocol designed to eliminate third-party harassment, audit unconscionable fees, and secure permanent financial closure.
              </p>

              <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <div className="p-4 rounded-xl border border-slate-200/80 bg-white space-y-2">
                  <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] font-extrabold text-xs flex items-center justify-center flex-shrink-0">1</span>
                    Stage 1: Forensic Portfolio &amp; Interest Audit
                  </h3>
                  <p className="text-slate-600">
                    Our legal desk performs an itemized audit of the card account history, stripping away exorbitant compounding late charges, over-limit penalties, and arbitrary GST components to determine the genuine base principal.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200/80 bg-white space-y-2">
                  <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] font-extrabold text-xs flex items-center justify-center flex-shrink-0">2</span>
                    Stage 2: Comprehensive Hardship Dossier Compilation
                  </h3>
                  <p className="text-slate-600">
                    We assemble documented evidence demonstrating the homemaker&apos;s lack of independent earning capacity, medical records, or genuine domestic distress, establishing that aggressive civil litigation would yield zero recovery.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200/80 bg-white space-y-2">
                  <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] font-extrabold text-xs flex items-center justify-center flex-shrink-0">3</span>
                    Stage 3: Anti-Harassment Notice &amp; Legal Shielding
                  </h3>
                  <p className="text-slate-600">
                    We serve formal statutory representations to the lender&apos;s legal cell, directing all communications to CredSettle and prohibiting calls or visits to the husband, workplace, or family members under RBI Fair Practices rules.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200/80 bg-white space-y-2">
                  <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] font-extrabold text-xs flex items-center justify-center flex-shrink-0">4</span>
                    Stage 4: Credit Committee Bilateral Negotiations
                  </h3>
                  <p className="text-slate-600">
                    Our seasoned negotiators engage directly with senior credit committees and stressed asset managers, leveraging the borrower&apos;s NPA classification to negotiate a 50% to 75% compromise waiver on outstanding dues.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200/80 bg-white space-y-2">
                  <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] font-extrabold text-xs flex items-center justify-center flex-shrink-0">5</span>
                    Stage 5: Settlement Letter Authentication &amp; Legal Vetting
                  </h3>
                  <p className="text-slate-600">
                    Before any payment is executed, our attorneys rigorously verify the settlement letter on official bank letterhead, validating authorized signatory credentials, account details, and full debt waiver clauses.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200/80 bg-white space-y-2">
                  <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] font-extrabold text-xs flex items-center justify-center flex-shrink-0">6</span>
                    Stage 6: Direct Bank Remittance &amp; No Dues Issuance
                  </h3>
                  <p className="text-slate-600">
                    The negotiated settlement amount is remitted directly into the bank&apos;s verified settlement pool account, followed by formal issuance of the final No Dues Certificate and closure reporting to credit bureaus.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: Statutory Notice Defense & Legal Rights */}
            <section id="statutory-defenses-harassment-protection" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4" />
                <span>Statutory Defenses &amp; Legal Framework</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                7. Statutory Defenses: Stop Bank &amp; Agent Harassment
              </h2>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                When a credit card defaults, collection departments often deploy deceptive notices to pressure families. Understanding the real statutory parameters dismantles these intimidation tactics.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                <div className="p-4 rounded-xl border border-slate-200/80 bg-white space-y-2">
                  <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                    <ShieldAlert className="w-4 h-4 text-amber-600" />
                    Section 25 PSSA &amp; Section 138 NI Act
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Proceedings for cheque bounce or dishonored NACH auto-debit mandates apply strictly to the specific bank account holder who authorized the mandate. If the mandate was linked to the wife&apos;s account, the husband cannot be arrayed as an accused.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200/80 bg-white space-y-2">
                  <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                    <Scale className="w-4 h-4 text-[#1886ff]" />
                    Unilateral Arbitration (Section 21)
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Under Supreme Court precedents in <em>Perkins Eastman</em> and <em>TRF Ltd.</em>, banks cannot unilaterally appoint a sole arbitrator to pass ex-parte awards. Any such appointment without mutual consent is legally invalid and challengeable under Section 12(5).
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200/80 bg-white space-y-2">
                  <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-emerald-600" />
                    DRT &amp; Civil Recovery Suits
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    The Debt Recovery Tribunal (DRT) only exercises jurisdiction over debts exceeding ₹20 Lakhs. For smaller credit card dues, banks can only file summary civil suits under Order XXXVII of the CPC against the cardholder, never against the spouse.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200/80 bg-white space-y-2">
                  <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                    <BadgeAlert className="w-4 h-4 text-purple-600" />
                    RBI Fair Practices Code Protections
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Under RBI Master Directions, agents are prohibited from calling before 8:00 AM or after 7:00 PM, using abusive language, visiting workplaces, or contacting relatives. Violations constitute grounds for regulatory complaints and damages.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 8: 3-Tier Grievance Matrix */}
            <section id="three-tier-grievance-escalation" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4" />
                <span>Institutional Redressal Mechanism</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                8. 3-Tier Grievance Matrix: RBI Ombudsman Escalation
              </h2>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                If recovery agents violate RBI directives by harassing family members or threatening unlawful actions, borrowers should initiate formal escalation through the structured three-tier banking grievance mechanism.
              </p>

              <div className="space-y-3 text-xs sm:text-sm">
                <div className="p-3.5 rounded-xl border border-slate-200/80 bg-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                  <div>
                    <strong className="text-slate-900 block font-bold">Level 1: Grievance Redressal Officer (GRO)</strong>
                    <span className="text-slate-600 text-xs">Submit formal written complaint detailing agent harassment and demanding immediate cessation within 7 to 10 working days.</span>
                  </div>
                  <span className="text-[11px] font-bold text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md whitespace-nowrap">TAT: 7-10 Days</span>
                </div>

                <div className="p-3.5 rounded-xl border border-slate-200/80 bg-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                  <div>
                    <strong className="text-slate-900 block font-bold">Level 2: Principal Nodal Officer (PNO)</strong>
                    <span className="text-slate-600 text-xs">Escalate unresolved grievances to the bank&apos;s executive compliance desk, citing specific RBI Master Directions violations.</span>
                  </div>
                  <span className="text-[11px] font-bold text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md whitespace-nowrap">TAT: 14-21 Days</span>
                </div>

                <div className="p-3.5 rounded-xl border border-slate-200/80 bg-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                  <div>
                    <strong className="text-slate-900 block font-bold">Level 3: RBI Integrated Ombudsman Scheme</strong>
                    <span className="text-slate-600 text-xs">File a statutory complaint via cms.rbi.org.in for unfair debt recovery practices and seek compensatory relief up to ₹20 Lakhs.</span>
                  </div>
                  <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md whitespace-nowrap">Statutory Redressal</span>
                </div>
              </div>
            </section>

            {/* SECTION 9: Chronological Timeline Table */}
            <section id="chronological-default-timeline" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Clock className="w-4 h-4" />
                <span>Default Trajectory</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                9. Default Timeline: SMA Classification to Resolution
              </h2>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Understanding the regulatory milestones from initial payment delinquency to full settlement helps families time their negotiations for optimal financial waivers.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto shadow-xs bg-white">
                <table className="w-full text-xs sm:text-sm text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
                      <th className="p-3 sm:p-4 border-r border-slate-200">Timeline Phase</th>
                      <th className="p-3 sm:p-4 border-r border-slate-200">Banking Asset Status</th>
                      <th className="p-3 sm:p-4 border-r border-slate-200">Bank Recovery Action</th>
                      <th className="p-3 sm:p-4">Recommended Legal Strategy</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-700">
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="p-3 sm:p-4 font-bold text-slate-900 border-r border-slate-200">Day 1 to 30</td>
                      <td className="p-3 sm:p-4 text-slate-600 border-r border-slate-200">SMA-0 (Standard Stressed)</td>
                      <td className="p-3 sm:p-4 text-slate-600 border-r border-slate-200">Automated SMS, emails, mild follow-ups</td>
                      <td className="p-3 sm:p-4 text-slate-600">Review finances; assess if temporary or structural</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="p-3 sm:p-4 font-bold text-slate-900 border-r border-slate-200">Day 31 to 60</td>
                      <td className="p-3 sm:p-4 text-slate-600 border-r border-slate-200">SMA-1 (Moderate Delinquency)</td>
                      <td className="p-3 sm:p-4 text-slate-600 border-r border-slate-200">In-house collection calls; late fee additions</td>
                      <td className="p-3 sm:p-4 text-slate-600">Document communications; prevent third-party disclosures</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="p-3 sm:p-4 font-bold text-slate-900 border-r border-slate-200">Day 61 to 90</td>
                      <td className="p-3 sm:p-4 text-slate-600 border-r border-slate-200">SMA-2 (Severe Delinquency)</td>
                      <td className="p-3 sm:p-4 text-slate-600 border-r border-slate-200">External agency allocation; legal notices</td>
                      <td className="p-3 sm:p-4 text-slate-600">Issue anti-harassment shield; begin hardship dossier</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="p-3 sm:p-4 font-bold text-slate-900 border-r border-slate-200">Day 90+</td>
                      <td className="p-3 sm:p-4 text-red-600 font-bold border-r border-slate-200">NPA (Non-Performing Asset)</td>
                      <td className="p-3 sm:p-4 text-slate-600 border-r border-slate-200">100% loss provisioning by bank</td>
                      <td className="p-3 sm:p-4 text-emerald-700 font-bold">Prime OTS negotiation window; maximum waivers</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="p-3 sm:p-4 font-bold text-slate-900 border-r border-slate-200">Day 120 to 180</td>
                      <td className="p-3 sm:p-4 text-slate-600 border-r border-slate-200">Compromise Settlement Phase</td>
                      <td className="p-3 sm:p-4 text-slate-600 border-r border-slate-200">Credit committee reviews OTS proposals</td>
                      <td className="p-3 sm:p-4 text-slate-600">Vet settlement letter, remit funds, secure official NDC</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: Specialized Real-World Scenarios */}
            <section id="complex-scenarios-joint-liabilities" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <UserCheck className="w-4 h-4" />
                <span>Complex Spousal Case Studies</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                10. Complex Scenarios: Add-On Cards &amp; Joint Liabilities
              </h2>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Spousal debt liability involves nuances depending on how credit facilities were structured. Here are four common real-world scenarios:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                <div className="p-4 rounded-xl border border-slate-200/80 bg-white space-y-2">
                  <h3 className="font-bold text-slate-900 text-sm">Scenario A: Add-On Card on Husband&apos;s Account</h3>
                  <p className="text-slate-600 leading-relaxed">
                    If the defaulted card was an Add-On card provided to the wife from the husband&apos;s primary credit line, the husband is 100% legally liable for all dues. Under the cardholder agreement, primary members assume unconditional financial responsibility for supplementary users.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200/80 bg-white space-y-2">
                  <h3 className="font-bold text-slate-900 text-sm">Scenario B: Add-On Card on Wife&apos;s Account</h3>
                  <p className="text-slate-600 leading-relaxed">
                    If the wife is the primary cardholder and issued an Add-On card to her husband, the primary legal liability rests strictly with the wife. The husband cannot be sued or forced to pay unless he signed a separate personal guarantee agreement.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200/80 bg-white space-y-2">
                  <h3 className="font-bold text-slate-900 text-sm">Scenario C: Joint Co-Borrower Personal Loans</h3>
                  <p className="text-slate-600 leading-relaxed">
                    If the husband signed as a co-applicant on a personal loan taken alongside his homemaker wife, liability is joint and several. Both parties are equally accountable, and default will directly degrade both individuals&apos; CIBIL scores.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200/80 bg-white space-y-2">
                  <h3 className="font-bold text-slate-900 text-sm">Scenario D: ARC Portfolio Debt Assignments</h3>
                  <p className="text-slate-600 leading-relaxed">
                    When banks assign uncollected card debts to Asset Reconstruction Companies (ARCs), collection agencies frequently deploy high-pressure tactics. The underlying legal liability remains unchanged: privity of contract still protects the spouse.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 11: Company Profile Component */}
            <div id="company-profile" className="scroll-target pt-2">
              <CompanySection />
            </div>

            {/* SECTION 12: Frequently Asked Questions */}
            <section id="frequently-asked-questions" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <HelpCircle className="w-4 h-4" />
                <span>Expert Q&amp;A Architecture</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                Frequently Asked Questions: Housewife Credit Card Debt
              </h2>

              <div className="space-y-3">
                {faqs.map((faq, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div
                      key={idx}
                      className="border border-slate-200/80 rounded-2xl bg-white overflow-hidden transition-all shadow-2xs"
                    >
                      <button
                        onClick={() => toggleFaq(idx)}
                        className="w-full p-4 sm:p-5 text-left font-bold text-slate-900 hover:text-[#1886ff] transition-colors flex items-center justify-between gap-4 text-xs sm:text-sm"
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

            {/* SECTION 13: Citations & Outbound Authority Grid */}
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
                  <strong>Indian Contract Act, 1872:</strong> Sections 2(h), 126, 128, and Doctrine of Privity of Contract, Ministry of Law and Justice, Government of India.
                </li>
                <li>
                  <strong>Married Women&apos;s Property Act, 1874 (MWPA):</strong> Sections 4, 7, and 8 (Absolute Property Protection and Immunity of Spousal Assets).
                </li>
                <li>
                  <strong>Hindu Succession Act, 1956:</strong> Section 14 (Property of a Female Hindu to be Her Absolute Property / Stridhan Inviolability).
                </li>
                <li>
                  <strong>Reserve Bank of India Master Directions:</strong> Master Direction on Fair Practices Code for Lenders, Recovery Agents Code of Conduct, and Grievance Redressal Mechanisms (Updated 2026).
                </li>
                <li>
                  <strong>Credit Information Companies (Regulation) Act, 2005 (CICRA):</strong> Sections 14, 19, 21 (Individual PAN-Based Credit Reporting Regulations).
                </li>
                <li>
                  <strong>Supreme Court of India:</strong> <em>Perkins Eastman Architects DPC v. HSCC (India) Ltd. (2020)</em> and <em>TRF Ltd. v. Energo Engineering Projects Ltd. (2017)</em> (Disqualification of Unilateral Arbitrators).
                </li>
              </ul>

              {/* 6 Outbound Authority Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Authoritative Government &amp; Regulatory Portals:</span>
                <div className="flex flex-wrap gap-2">
                  <a
                    href="https://www.rbi.org.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200 inline-flex items-center gap-1"
                  >
                    <span>Reserve Bank of India</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                  <a
                    href="https://cms.rbi.org.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200 inline-flex items-center gap-1"
                  >
                    <span>RBI CMS Portal</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                  <a
                    href="https://www.cibil.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200 inline-flex items-center gap-1"
                  >
                    <span>TransUnion CIBIL</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                  <a
                    href="https://www.indiacode.nic.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200 inline-flex items-center gap-1"
                  >
                    <span>India Code Legislative Database</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                  <a
                    href="https://nalsa.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200 inline-flex items-center gap-1"
                  >
                    <span>NALSA Legal Services</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                  <a
                    href="https://cybercrime.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200 inline-flex items-center gap-1"
                  >
                    <span>National Cyber Crime Portal</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                </div>
              </div>

              {/* 10 Internal Topic Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Explore Related CredSettle Legal &amp; Debt Guides:</span>
                <div className="flex flex-wrap gap-2">
                  <Link href="/services/credit-card-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Credit Card Settlement
                  </Link>
                  <Link href="/can-bank-call-relatives-for-loan-recovery" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Can Bank Call Relatives
                  </Link>
                  <Link href="/can-bank-deduct-money-from-another-account" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Bank Deduction Rights
                  </Link>
                  <Link href="/services/anti-harassment" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Anti-Harassment Defense
                  </Link>
                  <Link href="/convert-settled-status-to-closed" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Convert Settled to Closed
                  </Link>
                  <Link href="/remove-settled-status-from-cibil" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Remove Settled from CIBIL
                  </Link>
                  <Link href="/full-and-final-settlement-meaning" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Full &amp; Final Settlement Meaning
                  </Link>
                  <Link href="/improve-cibil-after-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Rebuild CIBIL Score
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
                Specialized in banking compliance, spousal debt protections, credit dispute resolution, and NPA settlement negotiations with deep expertise navigating RBI Fair Practices regulations across Indian banking institutions.
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
                  Facing Spousal Debt Harassment?
                </h3>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our legal experts stop aggressive recovery calls to spouses, assert your statutory protections under RBI rules, and negotiate a 50% to 75% loan waiver.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Get Legal Advice for Spousal Debt
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
                  href="/can-bank-call-relatives-for-loan-recovery"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Can Bank Call Relatives for Loan Recovery?
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Third-party contact rules &rarr;</span>
                </Link>

                <Link
                  href="/can-bank-deduct-money-from-another-account"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Can Bank Deduct Money from Another Account?
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Banker lien &amp; set-off rights &rarr;</span>
                </Link>

                <Link
                  href="/services/credit-card-settlement"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Credit Card Debt Settlement Process
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Waiver negotiation guide &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
