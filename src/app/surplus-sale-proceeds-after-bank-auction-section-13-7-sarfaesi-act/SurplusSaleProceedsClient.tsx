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
  Coins
} from 'lucide-react';

export default function SurplusSaleProceedsClient() {
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
    { id: 'statutory-trust', label: '1. Statutory Trust: Section 13(7) SARFAESI' },
    { id: 'waterfall-mechanism', label: '2. Waterfall Priority & Ledger Audit' },
    { id: 'surplus-asset-matrix', label: '3. Asset & Encumbrance Priority Matrix' },
    { id: 'judicial-precedents', label: '4. Supreme Court & High Court Rulings' },
    { id: 'visual-blueprint', label: '5. Visual Blueprint Infographic' },
    { id: 'step-by-step-sop', label: '6. 6-Stage Surplus Recovery Protocol' },
    { id: 'legal-defenses', label: '7. Legal Defenses Against Bank Retention' },
    { id: 'escalation-matrix', label: '8. 3-Tier Redressal & DRT Matrix' },
    { id: 'procedural-timeline', label: '9. Delinquency to Refund Timeline' },
    { id: 'specialized-scenarios', label: '10. Multiple Loans & Guarantors' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
    {
      q: 'What is Section 13(7) of the SARFAESI Act, and how does it protect borrowers?',
      a: 'Section 13(7) creates a mandatory statutory trust over bank auction proceeds. The bank must apply sale funds strictly in order: first to actual costs, second to the outstanding debt, and pay the remaining surplus money to the borrower or entitled person.'
    },
    {
      q: 'Can a bank keep surplus auction money if I have another personal loan or credit card?',
      a: 'No, unless your loan contract has an explicit cross-collateralization clause. The bank holds auction proceeds as a statutory trustee under Section 13(7). Trust funds cannot be converted into a general banker lien under Section 171 of the Contract Act.'
    },
    {
      q: 'How soon must a bank pay the surplus auction proceeds to the borrower?',
      a: 'The bank must disburse surplus proceeds immediately upon receiving the full 100% purchase price from the auction buyer and issuing the Sale Certificate under Rule 9 of the Security Interest Rules, typically within 15 to 30 days.'
    },
    {
      q: 'What can I do if the bank delays or refuses to refund my surplus auction money?',
      a: 'Serve a formal legal notice under Section 13(7) demanding certified accounts and surplus refund with 18% annual interest. If the bank fails to pay, file a Section 17 application before the Debt Recovery Tribunal (DRT) or approach the RBI Ombudsman.'
    },
    {
      q: 'Does the bank owe interest to the borrower for wrongfully holding surplus proceeds?',
      a: 'Yes. High Courts and the Supreme Court hold that wrongful retention of surplus sale proceeds by a secured creditor constitutes unjust enrichment. Courts routinely award interest between 12% and 18% per annum from the date of realization.'
    },
    {
      q: 'Can the bank inflate auction expenses and legal fees to reduce my surplus?',
      a: 'No. Section 13(7) permits recovery of only costs and expenses properly incurred by the bank. Borrowers have a legal right to demand a certified, audited Statement of Accounts with bills, publication receipts, and valuation vouchers.'
    },
    {
      q: 'Who gets the surplus money if the mortgaged property belonged to a third-party guarantor?',
      a: 'The surplus sale proceeds must be paid directly to the mortgagor who owned the property, not to the principal borrower. The bank cannot adjust a guarantor property surplus against other independent borrowings of the primary debtor.'
    },
    {
      q: 'What is the priority if there is a second mortgage or second charge on the property?',
      a: 'Under Section 13(7), after the first secured creditor recovers its dues and expenses, the residue must be paid to subsequent encumbrancers or second charge holders in accordance with their legal priority before reaching the borrower.'
    },
    {
      q: 'Can a borrower challenge an auction if the property was sold far below fair market value?',
      a: 'Yes. Under Section 17 of the SARFAESI Act, a borrower can challenge an undervalued or collusive distress sale before the DRT. The Supreme Court in Mathew Varghese ruled that secured creditors have a fiduciary duty to realize maximum value.'
    },
    {
      q: 'How does CredSettle assist borrowers in auditing auction accounts and claiming surplus?',
      a: 'CredSettle legal experts audit bank auction statements, challenge inflated legal and administrative expenses, issue statutory Section 13(7) notices, and represent borrowers before the DRT and RBI Ombudsman to recover withheld surplus funds.'
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
            <span>SARFAESI Act 2002 • Property Auction Rights</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Claim Surplus Sale Proceeds After Bank Auction Legally
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            A definitive legal defense guide under Section 13(7) of the SARFAESI Act. Learn how to audit bank auction proceeds, eliminate inflated recovery expenses, defeat unlawful banker liens, and recover your rightful surplus money.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Audit Your Auction Surplus</span>
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
                  <span>Section 13(7) Statutory Protection</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Banks hold auction proceeds as statutory trustees for borrowers under SARFAESI Act, 2002.
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
                <span>EXECUTIVE BRIEF: SARFAESI AUCTION SURPLUS RECOVERY RULES</span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Mandatory Statutory Trust:</strong> Under Section 13(7) of the SARFAESI Act, the bank holds auction sale money strictly in trust, not as its own property.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Strict Order of Application:</strong> Funds must satisfy actual recovery costs first, mortgage loan dues second, and all remaining balance must be paid to the borrower.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Banker General Lien Inapplicable:</strong> Banks cannot convert statutory trust funds into an unauthorized general lien under Section 171 without an explicit cross-collateral contract.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Right to Audited Accounts:</strong> Borrowers can demand an itemized Statement of Accounts with bills to eliminate inflated legal and auction charges.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Statutory Interest on Delay:</strong> Wrongful withholding of surplus proceeds entitles the borrower to interest at 12% to 18% per annum under Supreme Court rulings.
                  </span>
                </li>
              </ul>
            </div>

            {/* SECTION 1: Statutory Trust: Section 13(7) SARFAESI Mandate */}
            <section id="statutory-trust" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Enactment &amp; Trust Fiduciary Duty</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. Statutory Trust: Section 13(7) SARFAESI Mandate
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When a borrower defaults on a home loan, loan against property, or commercial term facility, secured creditors invoke the SARFAESI Act, 2002. After taking physical possession under Section 13(4), the authorised officer conducts a public e-auction. In many instances, the real estate market value yields an auction price that comfortably exceeds the outstanding loan balance.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Many banks quietly sit on the surplus money. They delay payment for months, invent arbitrary administrative fees, or divert the funds to unrelated unsecured loans. This practice directly violates Indian banking law.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Parliament enacted Section 13(7) of the SARFAESI Act to establish an unambiguous fiduciary duty. The statute commands that all money received by the secured creditor through asset enforcement shall, in the absence of a contrary contract, be held by the bank in trust.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This legal provision creates a statutory trust relationship. The bank is not the beneficial owner of the auction proceeds. The bank acts as a custodian. Once its legitimate loan claim and lawful recovery costs are settled, the remaining money belongs entirely to the mortgagor.
              </p>
            </section>

            {/* SECTION 2: Waterfall Mechanism: Order of Priority for Proceeds */}
            <section id="waterfall-mechanism" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <DollarSign className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Waterfall &amp; Account Auditing</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. Waterfall Mechanism: Order of Priority for Proceeds
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Section 13(7) prescribes a strict, three-tier statutory waterfall for distributing auction sale proceeds. The secured creditor cannot alter this sequence or deduct unauthorized charges.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The first priority covers actual costs, charges, and expenses properly incurred by the bank in taking possession, safeguarding the property, and publishing auction advertisements. The second priority covers the discharge of the secured debt, including contractual interest up to the date of full realization.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The third priority requires the residue of the money to be paid immediately to the person entitled thereto in accordance with their legal rights and interests. If no secondary mortgage exists, this balance must be transferred directly to the borrower or mortgagor.
              </p>

              {/* Representative Calculation Card */}
              <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white shadow-xs">
                <div className="bg-slate-900 text-white p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                    <span className="font-bold text-sm">Representative Ledger Audit: Auction Proceeds vs Lawful Deductions</span>
                  </div>
                  <span className="text-xs text-blue-300 font-mono">₹1.50 Crore Auction Realization</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80">
                    <thead>
                      <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-semibold">
                        <th className="p-3">Financial Head / Audit Item</th>
                        <th className="p-3">Bank Ledger Claim</th>
                        <th className="p-3">Statutory Legal Audit Finding</th>
                        <th className="p-3 text-right">Lawfully Approved Amount</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200/80 text-slate-600">
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Gross Auction Realization (E-Auction)</td>
                        <td className="p-3 font-semibold text-slate-900">₹1,50,00,000</td>
                        <td className="p-3 text-slate-700">100% Sale Price Deposited by Highest Bidder</td>
                        <td className="p-3 text-right font-bold text-emerald-700">₹1,50,00,000 (Gross Trust Fund)</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Actual Auction Expenses (Tier 1)</td>
                        <td className="p-3 text-rose-600">₹7,80,000</td>
                        <td className="p-3 text-emerald-600 font-semibold">Audited: Paper ads, security &amp; valuer fee</td>
                        <td className="p-3 text-right font-bold text-slate-900">₹2,80,000 (₹5 Lakh Bogus Fee Cut)</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Outstanding Secured Loan Debt (Tier 2)</td>
                        <td className="p-3 text-rose-600">₹98,50,000</td>
                        <td className="p-3 text-emerald-600 font-semibold">Principal &amp; Contractual Interest to Realization</td>
                        <td className="p-3 text-right font-bold text-slate-900">₹92,20,000 (Penal Fees Disallowed)</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Unauthorized Unsecured Debt Set-Off</td>
                        <td className="p-3 text-rose-600 font-bold">₹15,00,000</td>
                        <td className="p-3 text-rose-700 font-semibold">Illegal Banker Lien Barred Under Sec 13(7)</td>
                        <td className="p-3 text-right font-bold text-emerald-700">₹0 (Disallowed 100%)</td>
                      </tr>
                      <tr className="bg-blue-50/70 font-bold text-slate-900">
                        <td className="p-3">Net Surplus Proceeds Refundable (Tier 3)</td>
                        <td className="p-3 text-rose-600">₹28,70,000 Offered</td>
                        <td className="p-3 text-emerald-700 font-bold">CredSettle Audit Recovery: +₹26.30 Lakhs</td>
                        <td className="p-3 text-right text-[#1886ff] text-sm sm:text-base font-extrabold">₹55,00,000 Disbursed to Owner</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* SECTION 3: Surplus Asset Matrix: Rights & Legal Remedies */}
            <section id="surplus-asset-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Claimant Priority &amp; Legal Protection</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Surplus Asset Matrix: Rights &amp; Legal Remedies
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When a mortgaged property is auctioned, competing parties often assert conflicting claims against the surplus proceeds. Indian law establishes clear rules governing who is entitled to the residue money.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Section 26E of the SARFAESI Act gives secured creditors absolute first priority over government taxes and revenues. Once the first secured creditor is paid, the remaining balance follows the statutory priority matrix below.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[620px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Claimant Entity</th>
                      <th className="p-3">Governing Provision</th>
                      <th className="p-3">Statutory Priority</th>
                      <th className="p-3">Banker Lien Immunity</th>
                      <th className="p-3">Legal Enforcement Step</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr className="bg-blue-50/30">
                      <td className="p-3 font-bold text-slate-900">Primary Mortgagor / Property Owner</td>
                      <td className="p-3">SARFAESI Act (Sec 13(7))</td>
                      <td className="p-3 text-emerald-600 font-semibold">Complete Right to Residue</td>
                      <td className="p-3 text-emerald-600 font-semibold">Immune from Unrelated Debts</td>
                      <td className="p-3">Issue Section 13(7) legal demand notice with interest.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Second Mortgagee / Junior Charge Holder</td>
                      <td className="p-3">Transfer of Property Act (Sec 73)</td>
                      <td className="p-3 text-blue-600 font-semibold">Priority Over Unsecured Debt</td>
                      <td className="p-3 text-emerald-600 font-semibold">Substituted Security Right</td>
                      <td className="p-3">Lodge formal claim on surplus before DRT.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Third-Party Property Guarantor</td>
                      <td className="p-3">Indian Contract Act (Sec 140)</td>
                      <td className="p-3 text-emerald-600 font-semibold">Absolute Ownership of Surplus</td>
                      <td className="p-3 text-emerald-600 font-semibold">100% Protected from Borrower Dues</td>
                      <td className="p-3">Demand immediate refund to guarantor account.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Income Tax / Commercial Tax Authority</td>
                      <td className="p-3">SARFAESI Act (Sec 26E)</td>
                      <td className="p-3 text-amber-600">Subordinate to Secured Debt</td>
                      <td className="p-3 text-slate-700">Can Attach Residue After Mortgage</td>
                      <td className="p-3">Audit tax attachment order validity under Sec 26E.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Unsecured Creditor / Credit Card Bank</td>
                      <td className="p-3">Indian Contract Act (Sec 171)</td>
                      <td className="p-3 text-rose-600 font-semibold">Lowest Priority (Zero Security)</td>
                      <td className="p-3 text-rose-600 font-semibold">No Right to Convert Trust Money</td>
                      <td className="p-3">Challenge unauthorized banker set-off at DRT.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 4: Judicial Precedents: Supreme Court & High Court Laws */}
            <section id="judicial-precedents" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>Judicial Precedents &amp; Binding Case Laws</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. Judicial Precedents: Supreme Court &amp; High Court Laws
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Indian courts have consistently held that asset enforcement under SARFAESI is not a punitive measure. The law allows lenders to recover legitimate debts, but it strictly prohibits unjust enrichment.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                In the landmark ruling of Ram Kishun and Others v. State of U.P. and Others (2012) 11 SCC 511, the Supreme Court ruled that a creditor cannot be allowed to enrich itself unjustly. The court held that whenever public auction proceeds exceed the outstanding dues, the surplus must be returned to the debtor without unnecessary delay.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                In Mathew Varghese v. M. Amritha Kumar (2014) 5 SCC 610, the Supreme Court declared that the secured creditor acts as a trustee of the secured asset on behalf of the borrower. The bank is legally obligated to realize the maximum possible market value and account for every rupee received during the sale.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The High Court of Madras in S. Santhosh v. Authorised Officer affirmed that when auction proceeds exceed the mortgage debt, the bank cannot retain surplus funds under a general lien for separate unsecured debts unless an express contractual agreement exists. The court held that the statutory trust created by Section 13(7) overrides general common-law lien claims.
              </p>
            </section>

            {/* SECTION 5: Visual Blueprint: Section 13(7) Auction Surplus Flow */}
            <section id="visual-blueprint" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Sparkles className="w-4 h-4 text-[#1886ff]" />
                <span>Visual Blueprint</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. Visual Blueprint: Section 13(7) Auction Surplus Flow
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This visual workflow diagram shows the entire lifecycle of bank auction proceeds under Section 13(7) of the SARFAESI Act. It illustrates the statutory waterfall sequence from auction realization to borrower surplus refund.
              </p>

              <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-slate-100 bg-slate-100">
                  <Image
                    src="/images/infographics/surplus-sale-proceeds-after-bank-auction-section-13-7-sarfaesi-act.jpg"
                    alt="Surplus Sale Proceeds After Bank Auction Section 13(7) SARFAESI Act"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 900px"
                    className="object-contain hover:scale-[1.01] transition-transform duration-300"
                    priority
                  />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-500 pt-1 gap-2">
                  <span>Official CredSettle SARFAESI Section 13(7) Audit Framework • Statutory Trust Model</span>
                  <a
                    href="/images/infographics/surplus-sale-proceeds-after-bank-auction-section-13-7-sarfaesi-act.jpg"
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

            {/* SECTION 6: Step-by-Step SOP: 6 Stages to Recover Auction Surplus */}
            <section id="step-by-step-sop" className="scroll-target space-y-6">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Standard Operating Procedure</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. Step-by-Step SOP: 6 Stages to Recover Auction Surplus
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If your property was auctioned under the SARFAESI Act and the bank has not disbursed your surplus money, execute this systematic six-stage recovery protocol.
              </p>

              <div className="space-y-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">1</span>
                    Stage 1: Demand Certified Statement of Accounts
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Submit a formal written application under Rule 9 of the Security Interest (Enforcement) Rules, 2002. Demand a certified ledger detailing gross auction realization, deposit dates, and itemized deductions.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">2</span>
                    Stage 2: Audit and Challenge Inflated Recovery Expenses
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Scrutinize every cost deduction. Demand tax invoices for valuation fees, newspaper publication vouchers, and security charges. Disallow arbitrary administrative fees and unauthorized recovery agency commissions.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">3</span>
                    Stage 3: Serve Formal Section 13(7) Legal Demand Notice
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Through legal counsel, serve a formal statutory notice upon the bank Authorised Officer and Zonal Manager. Cite Section 13(7) statutory trust rules and demand disbursement of the surplus balance within fifteen days.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">4</span>
                    Stage 4: File Section 17 Application at DRT for Accounting
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If the bank refuses to release funds, file an application under Section 17 of the SARFAESI Act before the Debt Recovery Tribunal. Seek an order directing the bank to deposit surplus proceeds with 18% annual interest.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">5</span>
                    Stage 5: Lodge Complaint with RBI Integrated Ombudsman
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    File a deficiency in service complaint through cms.rbi.org.in. Lenders face regulatory penalties for withholding customer funds and failing to render proper accounts after auction realization.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">6</span>
                    Stage 6: Secure Bank NOC and Remit Surplus Proceeds
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Receive your surplus funds via direct RTGS transfer into your neutral savings account. Secure the formal No Dues Certificate and ensure the mortgage charge is satisfied on the CERSAI portal.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: Legal Defenses Against Bank Retention & Set-Off */}
            <section id="legal-defenses" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <ShieldCheck className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Defenses &amp; Legal Shields</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. Legal Defenses Against Bank Retention &amp; Set-Off
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When pressed for surplus refunds, banks often invent legal defenses to keep the money. Borrowers have powerful statutory shields to defeat these illegal maneuvers.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                    <Gavel className="w-4 h-4" />
                    <span>Section 171 Contract Act Lien Limitation</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    A banker general lien applies only to general customer balances. It cannot attach to funds received for a specific statutory purpose or held in trust under Section 13(7) of the SARFAESI Act.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                    <Building2 className="w-4 h-4" />
                    <span>Constitutional Article 300A Protection</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under Article 300A of the Constitution of India, no person can be deprived of property without authority of law. Keeping surplus auction money without explicit legal authority is unconstitutional.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-purple-700 font-bold text-sm">
                    <Scale className="w-4 h-4" />
                    <span>Section 316 BNS Criminal Breach of Trust</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    A bank officer who willfully misappropriates or refuses to disburse statutory trust money commits criminal breach of trust under Section 316 of Bharatiya Nyaya Sanhita, 2023.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <Coins className="w-4 h-4" />
                    <span>Mandatory 18% Statutory Interest Liability</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Courts treat withheld surplus proceeds as commercial money. Secured creditors who delay disbursement face mandatory interest penalties ranging from 12% to 18% per annum from the sale date.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 8: 3-Tier Escalation Matrix: Bank, DRT & Ombudsman */}
            <section id="escalation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Escalation Protocol</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. 3-Tier Escalation Matrix: Bank, DRT &amp; Ombudsman
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If the branch manager or recovery desk ignores your surplus refund requests, use the institutional escalation hierarchy established under Indian financial regulations.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Grievance Tier</th>
                      <th className="p-3">Designated Competent Forum</th>
                      <th className="p-3">Statutory Turnaround</th>
                      <th className="p-3">Scope of Intervention &amp; Relief</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 1: Bank Nodal Desk</td>
                      <td className="p-3">Principal Nodal Officer / Zonal Office</td>
                      <td className="p-3 font-mono">10 to 15 Working Days</td>
                      <td className="p-3">Audits auction statement, verifies legal bills, and directs branch to issue surplus payment.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 2: DRT Application</td>
                      <td className="p-3">Debt Recovery Tribunal (Section 17)</td>
                      <td className="p-3 font-mono">45-Day Appeal Window</td>
                      <td className="p-3">Passes binding judicial orders for rendering accounts, striking off bad charges, and releasing surplus.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Level 3: RBI Ombudsman &amp; HC</td>
                      <td className="p-3">RBI Ombudsman / High Court Writ (Art 226)</td>
                      <td className="p-3 font-mono">30 Days Post-PNO</td>
                      <td className="p-3">Penalizes arbitrary lender actions, restores fundamental rights, and orders full refund with interest.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 9: Procedural Timeline: Default to Auction Surplus Refund */}
            <section id="procedural-timeline" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Clock className="w-4 h-4 text-[#1886ff]" />
                <span>Procedural Milestones</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Procedural Timeline: Default to Auction Surplus Refund
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Understanding the regulatory timetable under the Security Interest (Enforcement) Rules, 2002 allows borrowers to track auction funds and claim their residue without losing legal deadlines.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Delinquency Window</th>
                      <th className="p-3">SARFAESI Legal Milestone</th>
                      <th className="p-3">Lender Enforcement Action</th>
                      <th className="p-3">Strategic Mortgagor Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 1 to 90</td>
                      <td className="p-3 font-mono text-[11px]">NPA Classification</td>
                      <td className="p-3">Account tagged Non-Performing Asset following 90 days of non-payment.</td>
                      <td className="p-3">Audit loan interest calculation and explore one-time settlement options.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 91 to 150</td>
                      <td className="p-3 font-mono text-[11px]">Section 13(2) Demand</td>
                      <td className="p-3">60-day statutory notice demanding full discharge of liabilities.</td>
                      <td className="p-3">Submit detailed written objection under Section 13(3A) within 15 days.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 151 to 180</td>
                      <td className="p-3 font-mono text-[11px]">Section 13(4) Possession</td>
                      <td className="p-3">Bank assumes constructive or physical possession of the mortgaged asset.</td>
                      <td className="p-3">Obtain independent property valuation to prevent deliberate undervaluation.</td>
                    </tr>
                    <tr className="bg-amber-50/50">
                      <td className="p-3 font-bold text-slate-900">Day 181 to 210</td>
                      <td className="p-3 font-mono text-[11px] text-amber-700 font-bold">Rule 8(6) &amp; 9(1) Notice</td>
                      <td className="p-3">30-day public auction notice published in two leading local newspapers.</td>
                      <td className="p-3">Verify reserve price and locate prospective buyers to maximize sale bids.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Day 211 to 225</td>
                      <td className="p-3 font-mono text-[11px] text-[#1886ff] font-bold">Auction Execution</td>
                      <td className="p-3">E-auction conducted; successful buyer pays mandatory 25% deposit.</td>
                      <td className="p-3">Record the final bid value and calculate preliminary surplus balance.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 226 to 240</td>
                      <td className="p-3 font-mono text-[11px]">Full Realization</td>
                      <td className="p-3">Buyer deposits remaining 75% balance; bank issues Sale Certificate.</td>
                      <td className="p-3 font-bold text-slate-900">Serve Section 13(7) notice demanding surplus transfer with audit report.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: Specialized Scenarios: Multiple Loans & Guarantors */}
            <section id="specialized-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>Specialized Real-World Scenarios</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                10. Specialized Scenarios: Multiple Loans &amp; Guarantors
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Auction surplus claims frequently intersect with multiple mortgages, corporate guarantees, and family inheritance rights. Here is how statutory rules apply across complex situations.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-[#1886ff]" />
                    Third-Party Mortgagor / Guarantor Property
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    When a guarantor property is sold, the surplus proceeds belong exclusively to the guarantor. The creditor cannot use the guarantor money to offset independent unsecured debts owed by the principal borrower.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-emerald-600" />
                    Second Charge Holders &amp; Junior Mortgagees
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under Section 73 of the Transfer of Property Act, a junior mortgagee has a statutory right against the surplus proceeds of the prior sale. The bank must satisfy valid registered second charges before releasing residue funds.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-indigo-600" />
                    Collusive or Undervalued Distress Auctions
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If the bank sold the property at an artificially depressed reserve price to favor a buyer, challenge the sale before the DRT under Section 17. The tribunal can set aside collusive auctions and restore property equity.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-amber-600" />
                    Deceased Mortgagor Legal Heirs Rights
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Upon the death of the mortgagor, all rights under Section 13(7) pass to surviving legal heirs. The bank must disburse surplus proceeds to the legal heirs upon submission of a succession certificate or legal heirship document.
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
                Frequently Asked Questions: Section 13(7) Surplus Dues
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Clear, verified legal guidance addressing critical questions regarding bank auction surplus proceeds, statutory trust obligations, ledger audits, and borrower remedies under Indian law.
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
                  <strong>Securitisation and Reconstruction of Financial Assets and Enforcement of Security Interest Act, 2002:</strong> Section 13(7), Statutory Trust and Application of Sale Proceeds.
                </li>
                <li>
                  <strong>Security Interest (Enforcement) Rules, 2002:</strong> Rule 8 and Rule 9, Sale of Immovable Secured Assets and Issue of Sale Certificate.
                </li>
                <li>
                  <strong>SARFAESI Act, 2002:</strong> Section 26E, Priority of Secured Creditors Over Government Dues and Subordinate Claims.
                </li>
                <li>
                  <strong>Transfer of Property Act, 1882:</strong> Section 73, Right to Proceeds of Revenue Sale or Compensation on Acquisition.
                </li>
                <li>
                  <strong>Indian Contract Act, 1872:</strong> Section 171, Limitations on Banker General Lien Over Statutory Trust Funds.
                </li>
                <li>
                  <strong>Supreme Court of India Precedents:</strong> Ram Kishun v. State of U.P. (2012) and Mathew Varghese v. M. Amritha Kumar (2014).
                </li>
              </ul>

              {/* 6 Outbound Authority Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Verified Government &amp; Regulatory Portals:</span>
                <div className="flex flex-wrap gap-2">
                  <a href="https://drt.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>Debt Recovery Appellate Tribunal (DRT)</span>
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
                  <a href="https://ibbi.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>Insolvency &amp; Bankruptcy Board of India</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://nalsa.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>National Legal Services Authority</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* 12 Internal Topic Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Explore Related CredSettle Guides:</span>
                <div className="flex flex-wrap gap-2">
                  <Link href="/bank-auction-process-in-india-rules-procedure-rights" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Bank Auction Process
                  </Link>
                  <Link href="/sarfaesi-act-rules-and-regulations" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    SARFAESI Act Guide
                  </Link>
                  <Link href="/section-13-2-sarfaesi-act-demand-notice-legal-defense" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Section 13(2) Notice Defense
                  </Link>
                  <Link href="/section-13-4-sarfaesi-act-possession-notice-defense" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Section 13(4) Possession
                  </Link>
                  <Link href="/bankers-right-of-set-off-on-savings-account-section-171-contract-act" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Section 171 Banker Set-Off
                  </Link>
                  <Link href="/can-bank-seize-epf-provident-fund-for-loan-recovery" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    EPF Seizure Rules
                  </Link>
                  <Link href="/garnishee-order-bank-account-freeze-loan" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Garnishee Order Defense
                  </Link>
                  <Link href="/services/business-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Business Loan Settlement
                  </Link>
                  <Link href="/services/personal-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Personal Loan Settlement
                  </Link>
                  <Link href="/stop-recovery-agent-harassment" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Stop Recovery Harassment
                  </Link>
                  <Link href="/willful-defaulter-notice-rbi-rules-legal-defense-guide" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Willful Defaulter Defense
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
                Specialist in SARFAESI Act litigation, bank property auctions, asset enforcement defense, and DRT accounting disputes with deep expertise auditing lender realization accounts.
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
                  SARFAESI SURPLUS RECOVERY
                </span>
                <p className="text-lg md:text-xl font-bold text-white leading-snug">
                  Bank Holding Your Auction Surplus?
                </p>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our senior SARFAESI defense advocates audit bank deduction statements, challenge inflated recovery fees, and recover your surplus proceeds with statutory interest.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Claim Your Surplus Now
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
                  <span>Section 13(7) Protection • 100% Confidential</span>
                </div>
              </div>
            </div>

            {/* Card 3: CredSettle Trust Badges */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">The CredSettle Shield</p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Statutory Trust Enforcement:</strong> Full Section 13(7) compliance.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Forensic Ledger Audit:</strong> Disallowance of bogus recovery costs.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>DRT &amp; Ombudsman Escalation:</strong> Rapid judicial relief for withholding.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Statutory Interest Recovery:</strong> 12% to 18% p.a. for delayed payout.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">Related SARFAESI Guides</p>
              <div className="space-y-2.5">
                <Link
                  href="/bank-auction-process-in-india-rules-procedure-rights"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Bank Auction Process in India
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Auction procedures &amp; rights &rarr;</span>
                </Link>

                <Link
                  href="/section-13-2-sarfaesi-act-demand-notice-legal-defense"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Section 13(2) Notice Defense
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Reply to bank demand notices &rarr;</span>
                </Link>

                <Link
                  href="/section-13-4-sarfaesi-act-possession-notice-defense"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Section 13(4) Possession Defense
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Stop property possession taking &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
