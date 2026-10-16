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
  Home,
  Users
} from 'lucide-react';

export default function JointHomeLoanDefaultClient() {
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
    { id: 'joint-liability', label: '1. Joint & Several Liability Law' },
    { id: 'co-borrower-vs-co-owner', label: '2. Co-Borrower vs Co-Owner Rights' },
    { id: 'sarfaesi-defense', label: '3. SARFAESI Act Defense & Notices' },
    { id: 'cibil-protection', label: '4. CIBIL Score Shield & Recovery' },
    { id: 'visual-blueprint', label: '5. Visual Blueprint Infographic' },
    { id: 'right-of-subrogation', label: '6. Subrogation & Recovery Rights' },
    { id: 'matrimonial-disputes', label: '7. Matrimonial Splits & Divorce' },
    { id: 'step-by-step-sop', label: '8. 6-Stage Protection SOP' },
    { id: 'escalation-matrix', label: '9. 3-Tier Grievance Matrix' },
    { id: 'specialized-scenarios', label: '10. Demise, Layoffs & Auction' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
    {
      q: 'Can a bank take legal action against me if only my co-borrower defaulted on our home loan?',
      a: 'Yes. Under Section 128 of the Indian Contract Act, 1872, co-borrowers share joint and several liability. The bank can ask either borrower for full repayment. However, you have legal rights to receive separate statutory notices, raise formal objections, and redeem the mortgage.'
    },
    {
      q: 'Can a bank auction the mortgaged house if I continue paying my 50% share of the EMI?',
      a: 'Yes, if the full monthly EMI is not cleared. Banks view a home loan as a single debt. Partial payments keep the account in default. If the unpaid sum crosses 90 days, the loan becomes an NPA. The bank can then auction the house under SARFAESI rules.'
    },
    {
      q: 'What is the legal difference between a co-borrower and a co-owner in a home loan?',
      a: 'A co-owner holds legal title and ownership in the registered property deed. A co-borrower signs the loan contract and promises debt repayment. A person can be a co-borrower without being an owner. This creates full debt risk with zero house ownership.'
    },
    {
      q: 'Does a non-defaulting co-borrower have the right to receive an individual SARFAESI notice?',
      a: 'Yes. Under Section 13(2) of the SARFAESI Act, the bank must serve a separate 60-day notice on each co-borrower. Missing this notice makes later possession or auction steps invalid. You can challenge this before the DRT.'
    },
    {
      q: 'How can a non-defaulting co-borrower recover money paid on behalf of a defaulting partner?',
      a: 'Under Section 140 and Section 43 of the Contract Act, you step into the shoes of the lender. You can file a summary suit under Order 37 CPC to recover the defaulting party\'s share with commercial interest.'
    },
    {
      q: 'What happens to a joint home loan when spouses divorce or separate?',
      a: 'A family court divorce decree does not bind the bank without the bank\'s written consent. Both spouses remain liable. Partners can resolve this by selling the property to clear the debt, novating the loan into one name with bank consent, or entering an OTS settlement.'
    },
    {
      q: 'Will a joint home loan default ruin my personal CIBIL credit score?',
      a: 'Yes. Credit bureaus like CIBIL report the same payment history on both borrowers\' credit files. Even if you pay other cards on time, a missed joint EMI drops your score. You can file a dispute under Section 18 of CICRA and update your status after settlement.'
    },
    {
      q: 'Can a non-defaulting co-borrower redeem the mortgage to save the house from bank auction?',
      a: 'Yes. You have the legal right to redeem the mortgage before auction. Section 91 of the Transfer of Property Act and Section 13(8) of SARFAESI allow you to clear the debt or settle.'
    },
    {
      q: 'Can recovery agents harass or call the non-defaulting co-borrower at odd hours?',
      a: 'No. RBI rules stop recovery agents from calling before 8:00 AM or after 7:00 PM. Agents cannot use abusive words or visit your office without consent. Such actions break RBI rules and form criminal intimidation under Section 351 of BNS 2023.'
    },
    {
      q: 'How does CredSettle assist non-defaulting co-borrowers facing home loan default?',
      a: 'CredSettle defends co-borrowers against wrongful SARFAESI notices and halts recovery harassment. Our legal team files Section 13(3A) objections and builds property exit plans. We negotiate with bank credit committees to secure deep debt waivers and return your title deeds.'
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
            <Home className="w-3.5 h-3.5" />
            <span>Joint Mortgage Defense &amp; Co-Borrower Legal Shield</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Joint Home Loan Default: Rights of Non-Defaulting Co-Borrower
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            A comprehensive legal guide for co-borrowers facing home loan default in India. Understand your rights under SARFAESI Act, protect your CIBIL score, halt unlawful bank recovery, and enforce subrogation rights.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Protect Your Home &amp; Rights</span>
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
                  <span>Statutory Mortgage Defense Shield</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Protected under SARFAESI Act 2002, Transfer of Property Act 1882, and RBI Fair Practices Code.
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
                <span>EXECUTIVE BRIEF: NON-DEFAULTING CO-BORROWER LEGAL RIGHTS</span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Joint and Several Liability:</strong> Indian law makes both borrowers fully responsible for the loan. Paying your 50% share does not stop bank recovery if the total EMI remains unpaid.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Mandatory Individual Notice:</strong> The bank must serve a separate 60-day demand notice directly on you under Section 13(2) of the SARFAESI Act. Omitting this notice makes auction steps invalid.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Legal Right of Redemption:</strong> You have the right to save your home before auction. Under Section 91 of the Transfer of Property Act and Section 13(8) of SARFAESI, you can clear the loan or settle.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Right of Subrogation:</strong> When you pay bank dues, you step into the lender&apos;s place. Under Section 140 and Section 43 of the Contract Act, you can recover the defaulting party&apos;s share in court.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Strict Harassment Ban:</strong> RBI rules ban recovery calls between 7:00 PM and 8:00 AM. Agents cannot visit your office without consent or threaten your family.
                  </span>
                </li>
              </ul>
            </div>

            {/* SECTION 1: Joint Liability: How Indian Law Governs Co-Borrowers */}
            <section id="joint-liability" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Debt Framework &amp; Indian Contract Act</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. Joint Liability: How Indian Law Governs Co-Borrowers
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When two people sign a joint home loan in India, they take on joint liability under Section 128 of the Indian Contract Act, 1872. This rule means the lending bank does not split the debt into two halves. Instead, both signers are fully responsible for the entire unpaid loan balance.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Many co-borrowers think that paying their personal 50% share of the monthly EMI protects them. In banking rules, a home loan is a single debt account. If a monthly EMI of ₹60,000 is due and you pay only ₹30,000, the bank records an unpaid balance. The account starts showing overdue days right away.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Once unpaid dues pass 90 days, the bank marks the home loan as a Non-Performing Asset (NPA). Under Indian court rulings, the lender does not have to chase the primary borrower first. The Supreme Court in <em>Industrial Investment Bank of India v. Biswanath Jhunjhunwala</em> affirmed that a lender can pursue a co-borrower directly without suing the main borrower first.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Indian law gives you clear tools to protect your rights. You can stop unfair bank steps and force the defaulting co-borrower to repay every rupee.
              </p>
            </section>

            {/* SECTION 2: Co-Borrower vs Co-Owner: Property Rights & Liability */}
            <section id="co-borrower-vs-co-owner" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Users className="w-4 h-4 text-[#1886ff]" />
                <span>Title Deeds vs Loan Agreement Architecture</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. Co-Borrower vs Co-Owner: Property Rights &amp; Liability
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                To guard your money, you must know the difference between a co-borrower and a co-owner. Banks often mix these terms during loan sales. Yet, they mean very different things under Indian property and contract law.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                A <strong>co-owner</strong> holds title rights in the registered sale deed of the house. In contrast, a <strong>co-borrower</strong> signs the loan paper and promises to pay the bank. In many families, a spouse, parent, or sibling is added as a co-borrower simply to boost income eligibility. Their name never appears on the property deed.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Being a non-owner co-borrower is the most risky role during a loan default. You carry full debt liability toward the bank, but you hold zero property ownership. If the bank auctions the flat, you face credit damage without having any share in the property value.
              </p>

              {/* Financial Forensics Calculation Table */}
              <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white shadow-xs">
                <div className="bg-slate-900 text-white p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                    <span className="font-bold text-sm">Financial Forensics: Asset Equity vs Default Liability Math</span>
                  </div>
                  <span className="text-xs text-blue-300 font-mono">₹75 Lakh Property Valuation</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80">
                    <thead>
                      <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-semibold">
                        <th className="p-3">Borrower Profile &amp; Asset Status</th>
                        <th className="p-3">Property Ownership Share</th>
                        <th className="p-3">Bank Debt Liability</th>
                        <th className="p-3 text-right">Legal Protection &amp; Exit SOP</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200/80 text-slate-600">
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Co-Borrower AND Co-Owner (50/50 Title)</td>
                        <td className="p-3 text-emerald-600 font-semibold">50% Registered Title Equity</td>
                        <td className="p-3 font-bold text-rose-600">100% Joint &amp; Several</td>
                        <td className="p-3 text-right">Redeem mortgage, buy out partner share, or partition suit.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Non-Owner Co-Borrower (Income Enhancer)</td>
                        <td className="p-3 text-rose-600 font-semibold">0% Ownership (No Title Deed)</td>
                        <td className="p-3 font-bold text-rose-600">100% Joint &amp; Several</td>
                        <td className="p-3 text-right">Seek contract novation or file recovery suit against owner.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Sole Owner with Defaulting Co-Signer</td>
                        <td className="p-3 text-emerald-600 font-semibold">100% Registered Title Equity</td>
                        <td className="p-3 font-bold text-rose-600">100% Joint &amp; Several</td>
                        <td className="p-3 text-right">Refinance into sole loan or negotiate One-Time Settlement.</td>
                      </tr>
                      <tr className="bg-blue-50/70 font-bold text-slate-900">
                        <td className="p-3">Representative Case: ₹48 Lakh NPA Claim</td>
                        <td className="p-3 text-slate-900">₹75 Lakh House Value</td>
                        <td className="p-3 text-emerald-700">OTS Waiver: ₹18 Lakhs</td>
                        <td className="p-3 text-right text-[#1886ff] text-sm sm:text-base">₹30 Lakh Final Closure via OTS</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* SECTION 3: SARFAESI Act Defense: Notices & DRT Appeal Rights */}
            <section id="sarfaesi-defense" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Enforcement &amp; Appellate Remedies</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. SARFAESI Act Defense: Notices &amp; DRT Appeal Rights
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When a home loan account stays unpaid for 90 days, banks start recovery under the SARFAESI Act, 2002. This law lets banks take over and auction houses without going to civil court first.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                However, Parliament built strong checks into SARFAESI to stop misuse. Under Section 13(2) of the Act, the bank must give a separate 60-day demand notice to every borrower and co-borrower. The bank cannot simply serve notice on the main applicant and assume the co-borrower knows.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The Supreme Court in <em>Mathew Varghese v. M. Amritha Kumar</em> ruled that lenders must follow SARFAESI rules strictly. If the bank fails to serve a valid Section 13(2) notice directly on the co-borrower, any later step is invalid. This includes taking symbolic possession under Section 13(4) or physical possession under Section 14.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When you get a Section 13(2) notice, Section 13(3A) gives you the right to send written objections within 60 days. The bank must review your reply and answer within 15 days. If the bank rejects your objections without good reason, you can appeal. You can challenge their steps before the DRT under Section 17.
              </p>
            </section>

            {/* SECTION 4: Credit Score Shield: Protect CIBIL in Joint Defaults */}
            <section id="cibil-protection" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <CreditCard className="w-4 h-4 text-[#1886ff]" />
                <span>Credit Bureau Algorithms &amp; CIBIL Restoration</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. Credit Score Shield: Protect CIBIL in Joint Defaults
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                A joint home loan default directly hurts your personal credit score. Indian credit bureaus like CIBIL, Experian, and Equifax treat joint loans as linked files. The repayment record shows up identically on both credit profiles.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Even if you pay your credit cards on time, a missed joint EMI hurts your score. Your personal CIBIL score can drop by 80 to 150 points. Overdue marks, SMA tags, and NPA flags show on your report. This blocks you from getting new loans.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                To defend your credit profile, you have legal rights under Section 18 of the Credit Information Companies (Regulation) Act, 2005 (CICRA). You can raise a formal dispute against wrongful joint reporting. When you settle via an approved One-Time Settlement (OTS), you can fix this. You can mandate the lender to report the loan as settled and give a No Dues Certificate.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-2xs space-y-1 text-center">
                  <div className="text-rose-600 font-extrabold text-xl sm:text-2xl font-mono">500 - 580</div>
                  <p className="text-xs font-bold text-slate-800">Delinquency Drop</p>
                  <p className="text-[11px] text-slate-500 leading-tight">Occurs after 90 days of unpaid joint loan installments.</p>
                </div>
                <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-2xs space-y-1 text-center">
                  <div className="text-amber-600 font-extrabold text-xl sm:text-2xl font-mono">650 - 700</div>
                  <p className="text-xs font-bold text-slate-800">Post-Settlement Phase</p>
                  <p className="text-[11px] text-slate-500 leading-tight">Achieved within 6 months after receiving bank No Dues Certificate.</p>
                </div>
                <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-2xs space-y-1 text-center">
                  <div className="text-emerald-600 font-extrabold text-xl sm:text-2xl font-mono">750+ Prime</div>
                  <p className="text-xs font-bold text-slate-800">Complete Rebuilding</p>
                  <p className="text-[11px] text-slate-500 leading-tight">Reachable within 12 to 18 months via disciplined credit builder tools.</p>
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
                5. Visual Blueprint: Co-Borrower Legal Defense Roadmap
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This clear visual roadmap shows the legal defense steps for co-borrowers under Indian banking rules. It outlines SARFAESI notices, redemption rights, and subrogation claims.
              </p>

              <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-slate-100 bg-slate-100">
                  <Image
                    src="/images/infographics/joint-home-loan-default-rights-of-non-defaulting-co-borrower.jpg"
                    alt="Joint Home Loan Default Co-Borrower Rights and SARFAESI Legal Defense"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 900px"
                    className="object-contain hover:scale-[1.01] transition-transform duration-300"
                    priority
                  />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-500 pt-1 gap-2">
                  <span>Official CredSettle Joint Mortgage Defense Framework • SARFAESI Section 13(2) Compliant</span>
                  <a
                    href="/images/infographics/joint-home-loan-default-rights-of-non-defaulting-co-borrower.jpg"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="text-[#1886ff] hover:underline font-bold inline-flex items-center gap-1"
                  >
                    <span>View High-Resolution Blueprint</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </section>

            {/* SECTION 6: Right of Subrogation: Recovering Dues from Primary */}
            <section id="right-of-subrogation" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Subrogation Rights &amp; Civil Contribution</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. Right of Subrogation: Recovering Dues from Primary
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If you pay overdue EMIs to stop a bank auction, the law protects your money. You step into the shoes of the lender. This right comes under Section 140 of the Contract Act and Section 92 of the Transfer of Property Act.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This rule is called subrogation. You take over all rights and security interests that the bank held against the defaulting co-borrower. In addition, Section 43 of the Contract Act states that each co-borrower must contribute equally to the joint loan.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                To get your money back, you can file a summary suit under Order 37 CPC. This allows fast recovery with court interest. If the defaulting person is also a co-owner, you have more remedies. You can attach their share under Order 38 Rule 5 CPC or file a partition suit.
              </p>
            </section>

            {/* SECTION 7: Matrimonial Disputes: Divorce & Joint Home Loan EMIs */}
            <section id="matrimonial-disputes" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff]" />
                <span>Marital Dissolution &amp; Contract Novation</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. Matrimonial Disputes: Divorce &amp; Joint Home Loan EMIs
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Divorce and marital splits are the most common cause of joint home loan defaults in Indian cities. When couples separate, one spouse often moves out and stops paying their share of the EMI. This leaves the other person with a heavy debt burden.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Remember this key legal rule: a family court divorce decree does not bind the bank without the bank&apos;s written consent. The bank was not a party to your divorce case. Under contract law, the lender can demand loan dues from either spouse regardless of who lives in the house.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Novation &amp; Sole Borrower Substitution</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under Section 62 of the Contract Act, you can ask the bank to update the loan. The staying spouse buys out the other partner&apos;s share through a registered deed and takes over sole repayment.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                    <Home className="w-4 h-4" />
                    <span>Voluntary Joint Property Sale</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Both partners can agree to sell the property on the open market before a bank auction. Sale funds clear the mortgage, and leftover money is divided fairly.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-purple-700 font-bold text-sm">
                    <Scale className="w-4 h-4" />
                    <span>Family Court Interim Maintenance Orders</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under Section 24 of the Hindu Marriage Act, you can seek court help. The court can order the earning spouse to pay the monthly loan EMI.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <ShieldCheck className="w-4 h-4" />
                    <span>One-Time Compromise Settlement (OTS)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If neither partner can pay, CredSettle helps you negotiate a One-Time Settlement directly with the bank. This brings deep interest waivers and avoids public auction shame.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 8: Step-by-Step SOP (6 Stages) */}
            <section id="step-by-step-sop" className="scroll-target space-y-6">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Standard Operating Procedure</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. Step-by-Step SOP: 6-Stage Co-Borrower Protection SOP
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If your co-borrower has stopped paying their share of the home loan EMI, follow this six-step plan. It protects your rights, shields your house, and sets up a fair resolution.
              </p>

              <div className="space-y-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">1</span>
                    Stage 1: Audit Loan and Title Papers
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Check the loan letter, mortgage agreement, and property deed. Verify if you own part of the house or only signed for income proof. Check if loan term insurance exists.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">2</span>
                    Stage 2: Send Notice of Contribution
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Send a formal legal notice to the defaulting co-borrower under Section 43 of the Contract Act. Put their debt duty on record and reserve your right to claim full refund.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">3</span>
                    Stage 3: File Section 13(3A) Objections
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If you receive a SARFAESI notice, send written objections within 60 days. Ask for full account ledgers, dispute extra penalty fees, and show your willingness to resolve.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">4</span>
                    Stage 4: Halt Recovery Agent Harassment
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If collection agents call outside permitted hours or visit your office, issue a warning notice under RBI rules. File a police complaint under Section 351 of BNS 2023.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">5</span>
                    Stage 5: Explore Novation or Direct Sale
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Talk to bank credit teams to see if the loan can transfer into your sole name. Or find a private buyer to clear the loan before legal seizure begins.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">6</span>
                    Stage 6: Settle via OTS and Claim Title Deeds
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If paying full dues is not possible, negotiate a compromise settlement with bank heads. Pay the agreed sum, get your No Dues Certificate, and retrieve original house papers.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 9: 3-Tier Escalation Matrix */}
            <section id="escalation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Escalation Protocol</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. 3-Tier Escalation Matrix: Bank Redressal &amp; Ombudsman
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If branch staff ignore your letters, miss statutory notices, or send harsh recovery agents, use the Reserve Bank of India grievance process.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Grievance Tier</th>
                      <th className="p-3">Designated Banking Authority</th>
                      <th className="p-3">Resolution Timeline</th>
                      <th className="p-3">Scope of Authority &amp; Relief</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 1: Branch / GRO</td>
                      <td className="p-3">Branch Manager &amp; Grievance Redressal Officer</td>
                      <td className="p-3 font-mono">7 to 10 Working Days</td>
                      <td className="p-3">Fixes account errors, stops agent threats, and records your hardship plea.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 2: PNO / Zonal Head</td>
                      <td className="p-3">Principal Nodal Officer (Head Office)</td>
                      <td className="p-3 font-mono">14 to 21 Working Days</td>
                      <td className="p-3">Checks flawed SARFAESI notices, reviews loan transfer pleas, and begins OTS talks.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Level 3: RBI Ombudsman</td>
                      <td className="p-3">Reserve Bank Integrated Ombudsman (cms.rbi.org.in)</td>
                      <td className="p-3 font-mono">30 Days Post-PNO</td>
                      <td className="p-3">Orders bank to follow RBI rules, grants damages for unfair steps, and halts improper recovery.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: Specialized Scenarios */}
            <section id="specialized-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>Specialized Scenarios</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                10. Specialized Scenarios: Demise, Layoffs &amp; Auction
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Joint home loan defaults often come from sudden life shocks. Here is how legal rules work across common crisis situations.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-[#1886ff]" />
                    Demise of Primary Borrower &amp; Insurance Shield
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Most Indian banks sell a Home Loan Protection Plan at loan sign-up. If the main borrower passes away, insurance covers the remaining loan balance. The bank cannot demand EMIs from the co-borrower while insurance claims are being settled.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-emerald-600" />
                    Corporate Layoffs &amp; Medical Incapacity
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If job loss or illness hits your family, the co-borrower can ask the bank for loan relief under RBI rules. You can ask for a short EMI break or a longer loan tenure.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-indigo-600" />
                    Challenging SARFAESI Distress Public Auctions
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If the bank sets an unfair low auction price, you can challenge it. Rule 8(5) lets you dispute the property valuation before the DRT to stop the sale.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-amber-600" />
                    NRI Co-Borrower Living Overseas
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    NRI co-borrowers often learn about defaults late. CredSettle acts as your legal voice in India. We handle bank talks, DRT filings, and loan settlements without needing your travel.
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
                Frequently Asked Questions: Joint Home Loan Defaults
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Clear, verified legal guidance addressing critical questions regarding co-borrower rights, SARFAESI defense, mortgage redemption, and debt settlement in India.
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
                Statutory Legal Citations &amp; Judicial Precedents in India
              </h2>
              <ul className="space-y-2 text-xs text-slate-600 leading-relaxed list-disc pl-5">
                <li>
                  <strong>Securitisation and Reconstruction of Financial Assets and Enforcement of Security Interest (SARFAESI) Act, 2002:</strong> Sections 13(2), 13(3A), 13(4), 13(8), and Section 17 appeal procedures.
                </li>
                <li>
                  <strong>Indian Contract Act, 1872:</strong> Section 43 (Contribution among co-promisors), Section 62 (Contract Novation), Section 128 (Co-extensive liability), and Section 140 (Right of Subrogation).
                </li>
                <li>
                  <strong>Transfer of Property Act, 1882:</strong> Section 60 (Right of redemption), Section 91 (Persons who may sue for redemption), and Section 92 (Subrogation).
                </li>
                <li>
                  <strong>Code of Civil Procedure, 1908 (CPC):</strong> Section 60, Order 37 (Summary suits for debt recovery), and Order 38 Rule 5 (Attachment before judgment).
                </li>
                <li>
                  <strong>Supreme Court of India Landmark Precedents:</strong> Mathew Varghese v. M. Amritha Kumar (2014) and Industrial Investment Bank of India v. Biswanath Jhunjhunwala (2009).
                </li>
                <li>
                  <strong>Reserve Bank of India Master Directions:</strong> Prudential Framework for Resolution of Stressed Assets and Master Circular on Fair Practices Code for Lenders.
                </li>
              </ul>

              {/* Verified Government & Regulatory Portals */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Verified Government &amp; Regulatory Portals:</span>
                <div className="flex flex-wrap gap-2">
                  <a href="https://www.rbi.org.in" target="_blank" rel="nofollow noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>Reserve Bank of India</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://cms.rbi.org.in" target="_blank" rel="nofollow noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>RBI Integrated Ombudsman</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.indiacode.nic.in" target="_blank" rel="nofollow noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>India Code Statutory Repository</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://drt.gov.in" target="_blank" rel="nofollow noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>Debt Recovery Appellate Tribunal</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://nalsa.gov.in" target="_blank" rel="nofollow noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>National Legal Services Authority</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Related CredSettle Guides */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Explore Related CredSettle Guides:</span>
                <div className="flex flex-wrap gap-2">
                  <Link href="/sarfaesi-section-13-4-notice-30-day-auction-sale-challenge" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    SARFAESI Section 13(4) Notice Defense
                  </Link>
                  <Link href="/sarfaesi-section-14-physical-possession-order-dm-cmm" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    SARFAESI Section 14 Possession Law
                  </Link>
                  <Link href="/section-60-cpc-assets-property-exempt-from-bank-attachment" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Section 60 CPC Property Exemption
                  </Link>
                  <Link href="/bank-sent-legal-notice-for-loan-what-to-do" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Bank Legal Notice Defense
                  </Link>
                  <Link href="/get-home-loan-after-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Home Loan After Settlement
                  </Link>
                  <Link href="/willful-defaulter-notice-rbi-rules-legal-defense-guide" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Willful Defaulter Defense
                  </Link>
                  <Link href="/get-noc-after-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    No Dues Certificate (NOC)
                  </Link>
                  <Link href="/stop-recovery-agent-harassment" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Stop Recovery Harassment
                  </Link>
                  <Link href="/rbi-rules-for-recovery-agents" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    RBI Recovery Guidelines
                  </Link>
                  <Link href="/rbi-100-per-day-compensation-for-delayed-cibil-report-update" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    RBI ₹100/Day CIBIL Compensation
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
                Specialist in banking rules, mortgage defense, SARFAESI notices, and co-borrower rights. Ashish helps Indian borrowers resolve debt and stop unlawful house auctions.
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
                  Co-Borrower Defaulting on Your Home Loan?
                </p>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our senior legal team protects your home from SARFAESI auction. We defend your CIBIL score, stop agent threats, and negotiate up to 60% debt waiver.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Protect Your Property Now
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
              <p className="font-bold text-slate-900 text-sm">The CredSettle Advantage</p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Zero Unlawful Auction:</strong> SARFAESI notice defense &amp; DRT stays.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Co-Borrower Insulation:</strong> Enforcing subrogation &amp; contribution.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Workplace Protection:</strong> Instant cease-and-desist under RBI rules.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Original Title Release:</strong> Clean NOC and No Dues Certificate.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">Related Mortgage Guides</p>
              <div className="space-y-2.5">
                <Link
                  href="/sarfaesi-section-13-4-notice-30-day-auction-sale-challenge"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    SARFAESI Section 13(4) Auction Defense
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">30-day auction challenge &rarr;</span>
                </Link>

                <Link
                  href="/sarfaesi-section-14-physical-possession-order-dm-cmm"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    SARFAESI Section 14 Physical Possession
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">DM &amp; CMM possession defense &rarr;</span>
                </Link>

                <Link
                  href="/get-home-loan-after-settlement"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Get Home Loan After Settlement
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">CIBIL rebuilding after OTS &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
