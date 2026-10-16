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
  Check,
  Lock,
  Phone,
  ArrowRight,
  Clock,
  UserCheck,
  Sparkles,
  Gavel,
  Landmark,
  FileCheck,
  Bookmark
} from 'lucide-react';

export default function SarfaesiLimitationClient() {
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
    { id: 'statutory-foundation', label: '1. Section 36 SARFAESI Act Rules' },
    { id: 'article-62-framework', label: '2. Article 62 Mortgage Period' },
    { id: 'limitation-clock', label: '3. When Debt Becomes Due' },
    { id: 'section-18-acknowledgment', label: '4. Section 18 Debt Revival' },
    { id: 'mortgage-vs-personal', label: '5. Mortgage vs Personal Remedy' },
    { id: 'visual-blueprint', label: '6. Visual Blueprint Infographic' },
    { id: 'step-by-step-sop', label: '7. 6-Stage Defense Protocol' },
    { id: 'drt-section-17-defense', label: '8. DRT Section 17 Application' },
    { id: 'escalation-matrix', label: '9. 3-Tier Grievance Matrix' },
    { id: 'procedural-timeline', label: '10. Procedural Milestones' },
    { id: 'specialized-scenarios', label: '11. ARC Transfers & Real Scenarios' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
    {
      q: 'What is the limitation period for a bank to initiate SARFAESI action against mortgaged property?',
      a: 'Under Section 36 of the SARFAESI Act read with Article 62 of the Limitation Act, 1963, the limitation period for enforcing a mortgage against immovable property is 12 years. The clock starts when the secured money legally becomes due.'
    },
    {
      q: 'When does the 12-year limitation clock begin to run under Article 62?',
      a: 'Under Article 62, time starts when the money becomes due. Courts hold that this happens upon default and expiry of the demand notice, such as the 60-day period following a Section 13(2) demand notice under the SARFAESI Act.'
    },
    {
      q: 'Does the 12-year limitation period apply to personal recovery against the borrower?',
      a: 'No. The 12-year period under Article 62 applies only to the sale of mortgaged immovable property. Personal remedies against the borrower or guarantor for any shortfall expire after 3 years under Article 55 or Article 113 of the Limitation Act.'
    },
    {
      q: 'Can an entry in a company balance sheet restart the 12-year limitation clock?',
      a: 'Yes. The Supreme Court in Asset Reconstruction Company v. Bishal Jaiswal confirmed that an unqualified admission of liability in a balance sheet constitutes an acknowledgment under Section 18 of the Limitation Act, resetting the limitation period.'
    },
    {
      q: 'What happens if a bank issues a Section 13(4) possession notice after 12 years?',
      a: 'Any Section 13(4) measure taken after 12 years without valid acknowledgment is barred by Section 36 of the SARFAESI Act. The borrower can file an application under Section 17 before the DRT to quash the notice and restore possession.'
    },
    {
      q: 'Does a partial loan repayment reset the limitation clock under Section 19?',
      a: 'Yes. Under Section 19 of the Limitation Act, if a borrower makes a payment toward principal or interest before the 12-year period expires, a fresh 12-year limitation period begins from the date of that payment.'
    },
    {
      q: 'Can an Asset Reconstruction Company (ARC) enforce a loan if 12 years have passed?',
      a: 'No. An ARC steps into the shoes of the assigning lender. If the debt was already time-barred prior to assignment or reaches 12 years without acknowledgment, the ARC cannot take measures under Section 13(4) of the SARFAESI Act.'
    },
    {
      q: 'How can a borrower legally challenge a time-barred SARFAESI auction notice?',
      a: 'The borrower must submit a formal Section 13(3A) objection pointing out the time bar under Section 36. If the bank proceeds under Section 13(4), the borrower should file a Securitisation Application within 45 days before the Debt Recovery Tribunal.'
    },
    {
      q: 'What relief can the Debt Recovery Tribunal grant in a time-barred SARFAESI proceeding?',
      a: 'Under Section 17(3) of the SARFAESI Act, the DRT has the authority to declare the bank measures invalid, quash possession notices, order physical restoration of the property to the borrower, and direct the return of title deeds.'
    },
    {
      q: 'How does CredSettle assist borrowers facing time-barred mortgage recovery action?',
      a: 'CredSettle conducts a forensic ledger audit, identifies expired limitation periods under Article 62, files strong DRT applications, stops illegal auctions, and negotiates deep debt waivers directly with bank credit committees.'
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
            <span>Mortgage Defense &amp; Statutory Limitation Guide</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            SARFAESI 12-Year Limitation Period &amp; Article 62 Defense
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            A comprehensive legal guide for property owners and loan guarantors. Understand Section 36 of the SARFAESI Act, Article 62 of the Limitation Act, and how to stop time-barred bank auctions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Stop Illegal SARFAESI Auction</span>
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
                  <span>Statutory Limitation Protection</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Enforced under Section 36 SARFAESI Act and Article 62 Limitation Act 1963.
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
                <span>EXECUTIVE BRIEF: SARFAESI 12-YEAR LIMITATION PERIOD CRUX</span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">12-Year Legal Deadline:</strong> Article 62 of the Limitation Act gives lenders 12 years to sell mortgaged property. Section 36 of the SARFAESI Act bars late actions.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Start of Time:</strong> The clock starts when the debt becomes due. This happens after loan default and expiry of the 60-day notice under Section 13(2).
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">3-Year Personal Action Bar:</strong> Property sales have a 12-year window. But personal claims for remaining dues expire after 3 years under Article 55.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Debt Revival Risks:</strong> Signing a balance sheet or settlement offer can reset the clock under Section 18. Checking past records is very important.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Stopping Stale Actions:</strong> Borrowers can file a case in the Debt Recovery Tribunal under Section 17. The tribunal can cancel the sale and return title deeds.
                  </span>
                </li>
              </ul>
            </div>

            {/* SECTION 1: Statutory Foundation: Section 36 SARFAESI Act Rules */}
            <section id="statutory-foundation" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Enactment &amp; Parliament Mandate</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. Statutory Foundation: Section 36 SARFAESI Act Rules
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Many borrowers think banks have unlimited time to take their property. This idea is wrong. Indian law sets strict time limits on bank debt recovery. These rules stop unfair harassment and protect property owners.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Section 36 of the SARFAESI Act, 2002 creates a firm legal bar. It says that a bank cannot take measures under Section 13(4) after the time limit runs out. The law uses the time limits set in the Limitation Act, 1963.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Section 36 links SARFAESI rules directly to general limitation law. If a bank waits too long, it loses the legal power to seize or auction the mortgaged asset.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Section 3 of the Limitation Act is also very clear. It says that any case filed after the deadline must be dismissed. The debt tribunal must throw out late claims even if the borrower forgets to raise the time defense.
              </p>
            </section>

            {/* SECTION 2: Article 62 Framework: Mortgage Enforcement Period */}
            <section id="article-62-framework" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Time Limits</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. Article 62 Framework: Mortgage Enforcement Period
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The Limitation Act gives different time limits for different debts. Unsecured personal loans have a short 3-year deadline. In contrast, loans backed by mortgaged land or buildings fall under Article 62.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Article 62 covers legal actions to recover money secured by a mortgage on immovable property. The time limit under this article is 12 years. The clock starts when the secured debt legally becomes due.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When a bank takes steps under Section 13(4) of the SARFAESI Act, it acts on its mortgage rights. So the 12-year window applies. If a bank stays silent for more than 12 years, it permanently loses the right to auction the property.
              </p>

              {/* Representative Calculation Card */}
              <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white shadow-xs">
                <div className="bg-slate-900 text-white p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                    <span className="font-bold text-sm">Representative Mortgage Limitation Audit</span>
                  </div>
                  <span className="text-xs text-blue-300 font-mono">12-Year Statutory Clock Audit</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80">
                    <thead>
                      <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-semibold">
                        <th className="p-3">Mortgage Claim Component</th>
                        <th className="p-3">Governing Law</th>
                        <th className="p-3">Limitation Period</th>
                        <th className="p-3 text-right">Legal Enforceability Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200/80 text-slate-600">
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Enforcement Against Mortgaged Real Estate</td>
                        <td className="p-3">Article 62 Limitation Act</td>
                        <td className="p-3 font-mono">12 Years from Default</td>
                        <td className="p-3 text-right font-bold text-slate-900">Valid if within 12 Years</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Personal Liability for Loan Shortfall</td>
                        <td className="p-3">Article 55 Limitation Act</td>
                        <td className="p-3 font-mono">3 Years from Breach</td>
                        <td className="p-3 text-right font-bold text-rose-600">Barred after 3 Years</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Unsecured Recovery Suit under Section 19</td>
                        <td className="p-3">RDDBFI Act, 1993</td>
                        <td className="p-3 font-mono">3 Years from Cause</td>
                        <td className="p-3 text-right font-bold text-rose-600">Barred without Extension</td>
                      </tr>
                      <tr className="bg-blue-50/70 font-bold text-slate-900">
                        <td className="p-3">Action Initiated at Year 13 (No Extension)</td>
                        <td className="p-3">Section 36 SARFAESI Act</td>
                        <td className="p-3 text-rose-700">12-Year Clock Expired</td>
                        <td className="p-3 text-right text-emerald-700 text-sm sm:text-base">100% Void &amp; Quashable</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* SECTION 3: Limitation Clock: When Does Debt Legally Become Due? */}
            <section id="limitation-clock" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Clock className="w-4 h-4 text-[#1886ff]" />
                <span>Commencement of Time</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Limitation Clock: When Does Debt Legally Become Due?
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Finding the exact start date of the 12-year clock is vital. Article 62 says time starts when the money becomes due. But what does this mean in real banking situations?
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Money does not become due simply because the borrower signed loan papers. Time begins only when the bank has the immediate legal right to demand the full balance.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Most loan contracts say that if a borrower misses monthly payments, the whole loan becomes due at once.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Court rulings show that money becomes due when the bank recalls the loan or when the 60-day demand notice under Section 13(2) ends. If the borrower does not pay within those 60 days, the entire debt is due. The 12-year clock starts ticking on that date.
              </p>
            </section>

            {/* SECTION 4: Section 18 Rules: How Debt Revival Restarts Limitation */}
            <section id="section-18-acknowledgment" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileCheck className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Extension Rules</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. Section 18 Rules: How Debt Revival Restarts Limitation
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The standard time limit under Article 62 is 12 years. But the clock does not always run without pause. Certain actions can restart the clock and give the bank more time.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Section 18 of the Limitation Act covers written debt acknowledgments. If a borrower signs a document admitting the debt before the 12 years end, a brand new 12-year clock starts from the date of that signature.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                In business loans, this often happens through audited balance sheets. In the case of ARCIL v. Bishal Jaiswal, the Supreme Court ruled that an entry in a company balance sheet can count as a valid debt admission.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Still, the admission must be clear. If the balance sheet notes that the debt is disputed, it may not extend the deadline. Also, Section 19 says that paying part of the loan principal or interest restarts the time from that payment date.
              </p>
            </section>

            {/* SECTION 5: Mortgage vs Personal Remedy: The 3-Year Shortfall Bar */}
            <section id="mortgage-vs-personal" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Remedy Distinction Analysis</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. Mortgage vs Personal Remedy: The 3-Year Shortfall Bar
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                There is a big legal difference between selling a mortgaged property and chasing a borrower personally. Lenders often confuse these two separate remedies.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Article 62 allows 12 years only for taking action against the mortgaged property. It does not give the lender 12 years to go after other personal assets, bank accounts, or salary.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Personal claims fall under Article 55 and Article 113. These articles give only 3 years. If a bank sells the property after 6 years and faces a deficit, it cannot file a personal case under Section 13(10) if the 3-year deadline has passed.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[620px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Recovery Legal Remedy</th>
                      <th className="p-3">Limitation Act Article</th>
                      <th className="p-3">Prescribed Time Limit</th>
                      <th className="p-3">Asset Scope</th>
                      <th className="p-3">Strategic Borrower Defense</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr className="bg-blue-50/30">
                      <td className="p-3 font-bold text-slate-900">SARFAESI Property Auction</td>
                      <td className="p-3">Article 62</td>
                      <td className="p-3 font-semibold text-blue-700">12 Years</td>
                      <td className="p-3">Only Mortgaged Real Estate</td>
                      <td className="p-3">Audit default date &amp; challenge after 12 years.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Personal Shortfall Claim (Sec 13(10))</td>
                      <td className="p-3">Article 55 / 113</td>
                      <td className="p-3 font-semibold text-rose-600">3 Years</td>
                      <td className="p-3">Personal Bank Accounts &amp; Salary</td>
                      <td className="p-3">Plead 3-year bar if auction occurred after 3 years.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">DRT Original Application (OA Sec 19)</td>
                      <td className="p-3">Article 55 / 62</td>
                      <td className="p-3 font-semibold text-amber-700">3 Yrs (Personal) / 12 Yrs (Mortgage)</td>
                      <td className="p-3">All Assets of Borrower &amp; Guarantor</td>
                      <td className="p-3">Oppose personal decree beyond 3-year window.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Summary Recovery Suit (Order 37 CPC)</td>
                      <td className="p-3">Article 55</td>
                      <td className="p-3 font-semibold text-rose-600">3 Years</td>
                      <td className="p-3">Commercial Bills &amp; Contracts</td>
                      <td className="p-3">File leave to defend citing expired limitation.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Guarantor Enforcement</td>
                      <td className="p-3">Article 55 / 62</td>
                      <td className="p-3 font-semibold text-slate-800">Co-Extensive with Primary Debt</td>
                      <td className="p-3">Guarantor Mortgaged or Personal Assets</td>
                      <td className="p-3">Assert discharge under Section 135 Contract Act.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 6: Visual Blueprint Infographic */}
            <section id="visual-blueprint" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Sparkles className="w-4 h-4 text-[#1886ff]" />
                <span>Visual Blueprint</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. Visual Blueprint: SARFAESI Limitation Defense Flow
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This clear visual roadmap shows the 12-year limitation timeline under Article 62. It explains key steps from loan default to debt discharge.
              </p>

              <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-slate-100 bg-slate-100">
                  <Image
                    src="/images/infographics/sarfaesi-12-year-limitation-period-article-62-rules.jpg"
                    alt="SARFAESI 12-Year Limitation Period and Article 62 Rules"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 900px"
                    className="object-contain hover:scale-[1.01] transition-transform duration-300"
                    priority
                  />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-500 pt-1 gap-2">
                  <span>Official CredSettle Mortgage Limitation Framework • Section 36 SARFAESI Act Compliant</span>
                  <a
                    href="/images/infographics/sarfaesi-12-year-limitation-period-article-62-rules.jpg"
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

            {/* SECTION 7: Step-by-Step SOP: 6-Stage Defense Against Stale Debt */}
            <section id="step-by-step-sop" className="scroll-target space-y-6">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Standard Operating Procedure</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. Step-by-Step SOP: 6-Stage Defense Against Stale Debt
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If a lender or debt buyer threatens your property over an old loan default, use this 6-stage plan to check the time limit and defend your rights.
              </p>

              <div className="space-y-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">1</span>
                    Stage 1: Check Loan Default and Demand Dates
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Look at your loan account records, first default dates, and demand letters. Find the exact date when the full loan balance became due.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">2</span>
                    Stage 2: Review Company Accounts and Past Letters
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Check if you signed any balance confirmation letters or settlement notes in the past 12 years that could reset the clock under Section 18.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">3</span>
                    Stage 3: Send Section 13(3A) Objection to the Bank
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    When you get a Section 13(2) notice, reply in writing within 60 days. Cite Section 36 of the SARFAESI Act to state that the claim is too late.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">4</span>
                    Stage 4: File a Case in the Debt Recovery Tribunal
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If the bank issues a Section 13(4) possession notice, file a Securitisation Application in the DRT within 45 days. Ask the court to stay the auction.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">5</span>
                    Stage 5: Contest Section 14 Magistrate Orders
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If the bank asks the District Magistrate for physical possession, oppose the plea. Point out that the recovery action is time-barred under Section 36.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">6</span>
                    Stage 6: Settle the Loan and Get Property Papers Back
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Use your strong legal defense to negotiate a good settlement deal. Get your original title deeds back along with a clean No Dues Certificate.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 8: DRT Section 17 Application: Quashing Stale Recovery */}
            <section id="drt-section-17-defense" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>Tribunal Jurisdiction &amp; Powers</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. DRT Section 17 Application: Quashing Stale Recovery
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The Debt Recovery Tribunal is the main court for fighting unlawful SARFAESI actions. Section 17 gives the tribunal power to check if the bank followed the law.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                    <Gavel className="w-4 h-4" />
                    <span>Mandatory Duty to Dismiss Late Claims</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under Section 3 of the Limitation Act, the tribunal must throw out any action started after the deadline, even if the borrower did not raise it first.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                    <Building2 className="w-4 h-4" />
                    <span>Restoring Physical Possession to Borrower</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If the bank took possession after the 12-year limit expired, Section 17(3) allows the tribunal to return the property to the borrower.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-purple-700 font-bold text-sm">
                    <Scale className="w-4 h-4" />
                    <span>Cancelling Unlawful Property Auctions</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Any auction held on a time-barred loan is invalid. The tribunal can cancel the sale and tell the bank to return money to the bidder.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Ordering Return of Original Title Deeds</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    When mortgage recovery is barred by time, the bank cannot hold property papers. The tribunal can order the bank to hand back original deeds.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 9: 3-Tier Escalation Matrix: Halting Unlawful Action */}
            <section id="escalation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Escalation Protocol</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. 3-Tier Escalation Matrix: Halting Unlawful Action
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When facing delayed bank recovery, borrowers should use a clear 3-step escalation process to protect their property rights.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Escalation Tier</th>
                      <th className="p-3">Designated Legal Authority</th>
                      <th className="p-3">Turnaround Time</th>
                      <th className="p-3">Scope of Intervention &amp; Relief</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 1: Bank Objection</td>
                      <td className="p-3">Authorized Officer (SARFAESI Cell)</td>
                      <td className="p-3 font-mono">15 Days from Notice</td>
                      <td className="p-3">Statutory reply to Section 13(3A) objection. Must record reasons if rejected.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 2: DRT Application</td>
                      <td className="p-3">Presiding Officer, Debt Recovery Tribunal</td>
                      <td className="p-3 font-mono">45 Days Post-13(4)</td>
                      <td className="p-3">Stays property auction, quashes possession notice, and evaluates limitation period.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Level 3: Constitutional Writ</td>
                      <td className="p-3">High Court (Article 226 / 227)</td>
                      <td className="p-3 font-mono">Immediate Hearing</td>
                      <td className="p-3">Intervenes if DRT is non-functional or where bank actions are completely without jurisdiction.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: Procedural Milestones: From Default to Time-Barred */}
            <section id="procedural-timeline" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Clock className="w-4 h-4 text-[#1886ff]" />
                <span>Procedural Milestones</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                10. Procedural Milestones: From Default to Time-Barred
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Knowing the key milestones of a defaulted loan helps you see when personal and mortgage recovery rights expire under Indian law.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Timeline Milestone</th>
                      <th className="p-3">Statutory Event</th>
                      <th className="p-3">Legal Impact on Bank Rights</th>
                      <th className="p-3">Recommended Borrower Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 90</td>
                      <td className="p-3 font-mono text-[11px]">NPA Tagging</td>
                      <td className="p-3">Account marked Non-Performing Asset under RBI prudential norms.</td>
                      <td className="p-3">Audit interest calculations and verify security documents.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 91 to 150</td>
                      <td className="p-3 font-mono text-[11px]">Section 13(2) Notice</td>
                      <td className="p-3">Demand notice served granting 60 days to repay total outstanding dues.</td>
                      <td className="p-3">File a detailed legal objection under Section 13(3A).</td>
                    </tr>
                    <tr className="bg-amber-50/50">
                      <td className="p-3 font-bold text-slate-900">End of Year 3</td>
                      <td className="p-3 font-mono text-[11px] text-amber-700 font-bold">Personal Remedy Expiry</td>
                      <td className="p-3">Personal recovery suits under Article 55 are permanently barred.</td>
                      <td className="p-3">Refuse unsecured claims for post-auction deficit balances.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Years 4 to 12</td>
                      <td className="p-3 font-mono text-[11px] text-[#1886ff] font-bold">Mortgage Enforcement Window</td>
                      <td className="p-3">Bank retains right to enforce mortgage under Article 62.</td>
                      <td className="p-3">Negotiate favorable compromise settlement under bank OTS schemes.</td>
                    </tr>
                    <tr className="bg-emerald-50/60">
                      <td className="p-3 font-bold text-slate-900">Post Year 12</td>
                      <td className="p-3 font-mono text-[11px] text-emerald-700 font-bold">Absolute Limitation Bar</td>
                      <td className="p-3">Section 36 completely bars all SARFAESI enforcement measures.</td>
                      <td className="p-3 font-bold text-emerald-800">Apply to DRT for deed release and quash any auction notices.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 11: Specialized Real-World Scenarios */}
            <section id="specialized-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff]" />
                <span>Practical Case Scenarios</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                11. Specialized Scenarios: ARC Transfers &amp; Restructuring
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Loan defaults often lead to unusual situations. Here is how Article 62 limitation rules apply in real life cases.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-[#1886ff]" />
                    Loans Sold to Asset Reconstruction Companies
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Banks often sell old loans to ARCs. This sale does not start a new time limit. If the loan was already time-barred, the ARC cannot auction your property.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-emerald-600" />
                    Loan Restructuring Talks and OTS Offers
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Borrowers often ask banks to restructure loans. Letters sent without prejudice do not restart the time limit. CredSettle keeps your defenses safe.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Scale className="w-4 h-4 text-indigo-600" />
                    Equitable Mortgages by Title Deed Deposit
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Article 62 covers both registered mortgages and equitable mortgages. The 12-year time limit applies to all forms of real estate security in India.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Landmark className="w-4 h-4 text-amber-600" />
                    Pausing Time During IBC Moratorium
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If an insolvency case starts under the IBC, the moratorium under Section 14 pauses the clock. Time starts running again only after the freeze ends.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 12: Company Profile Component */}
            <div id="company-profile" className="scroll-target pt-2">
              <CompanySection />
            </div>

            {/* SECTION 13: 10 Synchronized FAQs */}
            <section id="frequently-asked-questions" className="scroll-target space-y-5">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <HelpCircle className="w-4 h-4 text-[#1886ff]" />
                <span>Direct Answers</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Frequently Asked Questions: SARFAESI 12-Year Limitation
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Clear legal answers to top questions about mortgage time limits, Section 36 SARFAESI rules, Section 18 debt revival, and borrower remedies.
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

            {/* SECTION 14: Citations & Outbound Authority Grid */}
            <section id="regulatory-sources" className="scroll-target space-y-4 pt-4 border-t border-slate-200">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-500">
                <BookOpen className="w-4 h-4" />
                <span>Statutory Citations &amp; Legal Authorities</span>
              </div>
              <h2 className="text-base sm:text-lg font-bold text-slate-900">
                Official Statutory Citations &amp; Legal Framework Matrix
              </h2>
              <ul className="space-y-2 text-xs text-slate-600 leading-relaxed list-disc pl-5">
                <li>
                  <strong>SARFAESI Act, 2002:</strong> Section 36, Limitation on Measures under Section 13(4) for Enforcement of Security Interest.
                </li>
                <li>
                  <strong>Limitation Act, 1963:</strong> Article 62, 12-Year Limitation Period for Suits to Enforce Payment Secured by Mortgage of Immovable Property.
                </li>
                <li>
                  <strong>Limitation Act, 1963:</strong> Section 18 and Section 19, Effect of Written Acknowledgment and Part Payment on Limitation Period.
                </li>
                <li>
                  <strong>Limitation Act, 1963:</strong> Section 3, Mandatory Dismissal of Suits and Applications Initiated After Limitation Expiry.
                </li>
                <li>
                  <strong>Supreme Court Precedents:</strong> Asset Reconstruction Company (India) Limited v. Bishal Jaiswal (2021) and Dena Bank v. C. Shivakumar Reddy (2021).
                </li>
              </ul>

              {/* 6 Outbound Authority Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Verified Government &amp; Regulatory Portals:</span>
                <div className="flex flex-wrap gap-2">
                  <a href="https://drt.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>e-DRT Portal India</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.rbi.org.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>Reserve Bank of India</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.indiacode.nic.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>India Code Statutory Repository</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://ibbi.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>Insolvency &amp; Bankruptcy Board</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://main.sci.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>Supreme Court of India</span>
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
                  <Link href="/sarfaesi-section-13-4-notice-30-day-auction-sale-challenge" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    SARFAESI Section 13(4) Notice
                  </Link>
                  <Link href="/section-13-8-sarfaesi-act-right-of-mortgage-redemption-rules" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Section 13(8) Mortgage Redemption
                  </Link>
                  <Link href="/surplus-sale-proceeds-after-bank-auction-section-13-7-sarfaesi-act" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Surplus Sale Proceeds Section 13(7)
                  </Link>
                  <Link href="/drat-appeal-pre-deposit-waiver-under-section-18-sarfaesi-act" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    DRAT Pre-Deposit Waiver
                  </Link>
                  <Link href="/challenging-undervalued-sarfaesi-property-auction-reserve-price-drt" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Challenge Reserve Price in DRT
                  </Link>
                  <Link href="/order-37-cpc-summary-suit-loan-recovery-leave-to-defend" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Order 37 CPC Summary Suit
                  </Link>
                  <Link href="/section-95-ibc-personal-guarantor-insolvency-nclt-defense" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Section 95 IBC Defense
                  </Link>
                  <Link href="/does-loan-settlement-discharge-guarantor-section-135-contract-act" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Guarantor Discharge Rules
                  </Link>
                  <Link href="/bank-sent-legal-notice-for-loan-what-to-do" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Bank Legal Notice Reply
                  </Link>
                  <Link href="/services/business-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Business Loan Settlement
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
                Expert in banking compliance, SARFAESI Act litigation, Debt Recovery Tribunal defense, statutory limitation periods, and compromise settlements with extensive experience defending property owners against unlawful bank auctions.
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
                  Bank Auctioning Your Mortgaged Property?
                </p>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our senior legal advocates audit loan recall dates, invoke Section 36 of the SARFAESI Act, challenge stale actions in DRT, and negotiate up to 75% debt settlement waivers.
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
              <p className="font-bold text-slate-900 text-sm">The CredSettle Shield</p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Zero Stale Enforcement:</strong> 100% limitation audit &amp; defense.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Auction Stay in DRT:</strong> Securitisation Application under Sec 17.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Section 14 Magistrate Stay:</strong> Prevent unlawful physical possession.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Official Bank Closure:</strong> Guaranteed No Dues Certificate &amp; title release.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">Related SARFAESI Guides</p>
              <div className="space-y-2.5">
                <Link
                  href="/sarfaesi-section-13-4-notice-30-day-auction-sale-challenge"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    SARFAESI Section 13(4) Notice
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">30-day auction challenge rules &rarr;</span>
                </Link>

                <Link
                  href="/section-13-8-sarfaesi-act-right-of-mortgage-redemption-rules"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Section 13(8) Mortgage Redemption
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Redeem mortgaged property &rarr;</span>
                </Link>

                <Link
                  href="/challenging-undervalued-sarfaesi-property-auction-reserve-price-drt"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Challenge Auction Reserve Price
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">DRT valuation dispute steps &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
