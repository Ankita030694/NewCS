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
  Home
} from 'lucide-react';

export default function Section138RedemptionClient() {
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
    { id: 'statutory-framework', label: '1. Section 13(8) SARFAESI Act Rules' },
    { id: 'amendment-comparison', label: '2. Pre vs Post 2016 Amendment Shift' },
    { id: 'celir-llp-precedent', label: '3. Supreme Court Celir LLP Ruling' },
    { id: 'statutory-conflict', label: '4. Section 13(8) vs Section 60 TPA' },
    { id: 'step-by-step-sop', label: '5. 6-Stage Redemption SOP Protocol' },
    { id: 'visual-infographic', label: '6. Visual Blueprint Infographic' },
    { id: 'failed-auction-window', label: '7. What Happens if Auction Fails' },
    { id: 'legal-defense-strategy', label: '8. 4-Tier Legal Defense Strategy' },
    { id: 'procedural-timeline', label: '9. Procedural Timeline & Milestones' },
    { id: 'drt-section-17-appeal', label: '10. DRT Section 17 Appeal Remedies' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
    {
      q: 'What is the right of mortgage redemption under Section 13(8) of the SARFAESI Act?',
      a: 'The right of mortgage redemption under Section 13(8) allows a borrower to pay the total outstanding dues, interest, costs, and expenses to the bank and reclaim their secured property before the statutory auction cutoff.'
    },
    {
      q: 'When is the borrower right of redemption extinguished under amended Section 13(8)?',
      a: 'Following the 2016 statutory amendment, the right of redemption is extinguished prior to the date of publication of the public auction notice or tender notice in newspapers under Rule 9(1) of the Security Interest Rules.'
    },
    {
      q: 'What did the Supreme Court decide in Celir LLP v. Bafna Motors (2023)?',
      a: 'In Celir LLP v. Bafna Motors (2023), the Supreme Court ruled that once the public auction notice is published, the borrower cannot redeem the mortgage. High Courts cannot use equitable writ powers to stall sales or allow late redemption.'
    },
    {
      q: 'Does Section 60 of the Transfer of Property Act override amended Section 13(8)?',
      a: 'No. The Supreme Court confirmed that the SARFAESI Act is a special statute. By virtue of the non-obstante clause in Section 35 of the SARFAESI Act, amended Section 13(8) overrides general redemption provisions under Section 60 of the Transfer of Property Act.'
    },
    {
      q: 'Can a borrower redeem their mortgaged property if the public auction fails?',
      a: 'Yes. If a scheduled public auction fails due to absence of bidders or cancellation of sale, the right of redemption revives. The borrower can clear the dues until the publication date of any subsequent fresh auction notice.'
    },
    {
      q: 'Is the bank obligated to provide a 30-day notice under Rule 8(6) before public auction?',
      a: 'Yes. Rule 8(6) of the Security Interest (Enforcement) Rules mandates an individual 30-day notice to the borrower before proceeding with public sale. A breach of this mandatory 30-day individual notice invalidates subsequent auction proceedings.'
    },
    {
      q: 'Can a borrower approach the DRT under Section 17 to protect their redemption right?',
      a: 'Yes. A borrower can file a Securitisation Application (SA) under Section 17 before the Debts Recovery Tribunal (DRT) within 45 days of any Section 13(4) measure, seeking an interim stay on auction to exercise redemption or negotiate an OTS.'
    },
    {
      q: 'Can a borrower negotiate a One-Time Settlement (OTS) under Section 13(8)?',
      a: 'Yes. Borrowers frequently negotiate a compromise OTS with the bank credit committee to waive penal interest and legal costs. However, the agreed settlement sum must be sanctioned and paid before the auction notice publication.'
    },
    {
      q: 'What happens to the auction purchaser deposit if a sale is challenged?',
      a: 'If a bank erroneously entertains a borrower redemption plea after auction completion, the Supreme Court has held that the auction purchaser is entitled to immediate property registration or a full refund with commercial interest.'
    },
    {
      q: 'How does CredSettle help secured borrowers facing SARFAESI auction notices?',
      a: 'CredSettle provides end-to-end legal defense for secured borrowers. Our senior DRT advocates audit bank procedural compliance under Rules 8 and 9, challenge undervaluation, obtain urgent DRT stays, and structure compromise OTS deals.'
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
            <span>SARFAESI Act 2002 • Secured Asset Legal Shield</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Section 13(8) SARFAESI Act: Right of Mortgage Redemption
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            A complete guide on mortgage redemption rules in India. Learn the cutoff timeline under Section 13(8). Understand the Supreme Court Celir LLP ruling. Discover how to protect your home before the bank publishes an auction notice.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Protect Your Mortgaged Property</span>
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
                  <span>Statutory Redemption Shield</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Enforced under Section 13(8) SARFAESI Act, 2002 and Rule 8(6) of Security Interest Rules.
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
                <span>EXECUTIVE BRIEF: SECTION 13(8) MORTGAGE REDEMPTION CRUX</span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">The Core Statutory Right:</strong> Under Section 13(8) of the SARFAESI Act, a borrower retains the right to pay all dues, interest, and costs to redeem and preserve their mortgaged asset.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">The 2016 Legislative Turning Point:</strong> The 2016 statutory amendment shifted the redemption deadline from the date of asset transfer to the date of public auction notice publication in newspapers.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Supreme Court Landmark Ruling:</strong> In Celir LLP v. Bafna Motors (2023), the Supreme Court confirmed that the right of redemption is permanently extinguished once the auction notice is published.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Special Law Overrides General Law:</strong> The non-obstante clause in Section 35 of the SARFAESI Act means Section 13(8) overrides general redemption rights under Section 60 of the Transfer of Property Act.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Revival Window on Failed Auctions:</strong> If an auction fails due to zero bids, the redemption window reopens until the date of a subsequent fresh auction publication.
                  </span>
                </li>
              </ul>
            </div>

            {/* SECTION 1: Statutory Framework */}
            <section id="statutory-framework" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Enactment &amp; Parliament Mandate</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. Section 13(8) SARFAESI Act: Right of Redemption
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Defaulting on a home or business loan causes deep worry. When loan EMIs stop for ninety days, banks mark the account as an NPA. Soon after, lenders start legal recovery under the SARFAESI Act, 2002. However, the law provides borrowers with a strong legal shield. This shield is the right of mortgage redemption under Section 13(8).
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Mortgage redemption is a simple legal principle. A mortgage is only a security for a loan. It is not a permanent transfer of ownership. As long as you pay the full debt before the legal deadline, the bank must return your title deeds. The bank must also cancel all claims against your property.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Section 13(8) gives this right full statutory backing. It states that if a borrower pays all loan dues, interest, and costs before the deadline, the bank cannot sell the property. The bank must stop all sale actions immediately. If the lender already took possession, they must return the asset to you.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                However, timing is everything under this law. The statutory deadline is strict. If you miss the cutoff date, you lose the right to redeem your asset forever. This remains true even if you arrange the full cash amount later.
              </p>
            </section>

            {/* SECTION 2: Pre vs Post 2016 Amendment */}
            <section id="amendment-comparison" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Legislative Evolution &amp; Comparison</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. Pre vs Post 2016 Amendment: Critical Legal Shift
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                In 2016, Parliament made a major change to Section 13(8). This change took effect on September 1, 2016. It altered borrower rights across India. Every property owner facing bank recovery must understand this critical shift.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Before this amendment, borrowers enjoyed a longer timeline. The old law allowed borrowers to pay dues until the bank completed the sale. In 2014, the Supreme Court ruled in Mathew Varghese v. M. Amritha Kumar. The Court held that borrowers could redeem property right until the registered transfer deed was signed.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                However, late payments created problems for property buyers. Buyers hesitated to bid at auctions because borrowers cancelled sales at the last minute. Therefore, Parliament amended Section 13(8). Under the new rule, the redemption right ends much earlier. It ends before the date the bank publishes the public auction notice in the newspaper.
              </p>

              {/* Comparative Table */}
              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[620px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Legal Parameter</th>
                      <th className="p-3">Unamended Section 13(8) (Pre-2016)</th>
                      <th className="p-3">Amended Section 13(8) (Post-2016)</th>
                      <th className="p-3">Practical Impact on Borrowers</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr className="bg-blue-50/30">
                      <td className="p-3 font-bold text-slate-900">Statutory Cutoff Trigger</td>
                      <td className="p-3">Date fixed for sale or transfer.</td>
                      <td className="p-3 text-rose-600 font-bold">Date of publication of auction notice.</td>
                      <td className="p-3">Borrower loses months of recovery preparation time.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Governing Landmark Judgment</td>
                      <td className="p-3">Mathew Varghese v. M. Amritha Kumar (2014).</td>
                      <td className="p-3 text-blue-700 font-semibold">Celir LLP v. Bafna Motors (SC 2023).</td>
                      <td className="p-3">Supreme Court ruled strict adherence is mandatory.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Post-Auction Redemption</td>
                      <td className="p-3 text-emerald-600 font-semibold">Permitted before registered deed.</td>
                      <td className="p-3 text-rose-600 font-semibold">Strictly Prohibited.</td>
                      <td className="p-3">No late redemption permitted even with full cash.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">High Court Writ Relief</td>
                      <td className="p-3">Frequent equitable stays granted.</td>
                      <td className="p-3 text-amber-700 font-semibold">Equitable writ intervention barred.</td>
                      <td className="p-3">High Courts cannot extend redemption deadlines.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Auction Purchaser Rights</td>
                      <td className="p-3">Vulnerable to last-minute borrower buyout.</td>
                      <td className="p-3 text-emerald-600 font-semibold">Absolute protection of bid sanctity.</td>
                      <td className="p-3">Highest bidder obtains guaranteed property title.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 3: Celir LLP Ruling */}
            <section id="celir-llp-precedent" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>Supreme Court Landmark Jurisprudence</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Landmark Celir LLP Ruling: When Right Extinguishes
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The most decisive judicial interpretation of amended Section 13(8) came on September 21, 2023, when the Supreme Court delivered its landmark judgment in Celir LLP v. Bafna Motors (Mumbai) Pvt. Ltd. &amp; Ors. (2023) 10 SCC 431.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                In this dispute, Bafna Motors defaulted on loans from Bank of Baroda. The bank conducted a public auction. Celir LLP won the auction with a top bid of ₹105 Crores. The buyer deposited the full price. Later, the borrower offered to pay the bank dues and asked for the property back. The Bombay High Court allowed the borrower to redeem the land on fairness grounds.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The Supreme Court set aside the High Court order completely. Chief Justice D.Y. Chandrachud and Justice J.B. Pardiwala wrote the verdict. The Court laid down four clear rules for all mortgage cases:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-rose-700 font-bold text-sm">
                    <AlertTriangle className="w-4 h-4" />
                    <span>Strict Extinction Upon Notice Publication</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under amended Section 13(8), your right to redeem ends on the day the bank publishes the auction notice in newspapers.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                    <Scale className="w-4 h-4" />
                    <span>No Judicial Discretion to Extend Time</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Courts cannot use writ powers under Article 226 to extend this deadline. General fairness cannot override the written law.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Sanctity of Public Auctions Protected</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Allowing late payments ruins public auctions. Genuine buyers lose faith if sales are cancelled at the last second.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-purple-700 font-bold text-sm">
                    <Award className="w-4 h-4" />
                    <span>Auction Purchaser Legal Entitlement</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    When a winning bidder deposits the bid money, they gain a clear legal right to the property and the sale certificate.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 4: Section 13(8) vs Section 60 Transfer of Property Act */}
            <section id="statutory-conflict" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <BookOpen className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Conflict &amp; Non-Obstante Analysis</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. Section 13(8) vs Section 60 Transfer of Property Act
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Many borrowers cite Section 60 of the Transfer of Property Act, 1882. They argue that this general law allows redemption until a final sale deed is registered.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The Supreme Court rejected this argument. The Court applied the well-known rule that special laws override general laws. The Court also relied on Section 35 of the SARFAESI Act.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Section 35 gives the SARFAESI Act overriding power over all other laws. If any general law conflicts with the SARFAESI Act, the SARFAESI Act wins. Section 13(8) sets a specific cutoff. Therefore, it completely overrides Section 60 of the Transfer of Property Act.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Once the bank publishes the auction notice under Rule 9(1), your right of redemption ends for good. Borrowers cannot use civil court rules to stop a lawful SARFAESI auction.
              </p>
            </section>

            {/* SECTION 5: Step-by-Step SOP (6 Stages) */}
            <section id="step-by-step-sop" className="scroll-target space-y-6">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Standard Operating Procedure</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. Step-by-Step SOP: How to Redeem Mortgaged Property
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Do you want to save your home or business property? You must take swift, organized action. Follow this six-stage process before the bank publishes the auction notice in the press.
              </p>

              <div className="space-y-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">1</span>
                    Stage 1: Track the Section 13(2) Demand Notice Timeline
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Note the exact date when you receive the 60-day notice. Send a formal reply under Section 13(3A) within fifteen days. Challenge wrong interest charges, hidden penalties, and incorrect NPA dates.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">2</span>
                    Stage 2: Demand Official Ledger &amp; Legal Cost Reconciliation
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    To redeem your property, you must pay valid loan dues and costs. Ask the bank officer for an itemized loan statement. Verify the core principal debt and remove unauthorized legal fees.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">3</span>
                    Stage 3: Audit Rule 8(6) 30-Day Mandatory Notice Service
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Under Rule 8(6), the bank must give you an individual 30-day notice before auction. Make sure the bank serves this notice properly. Any early newspaper publication violates the law.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">4</span>
                    Stage 4: File Urgent Securitisation Application (SA) in DRT
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If the lender ignores your objections, act quickly. File a case under Section 17 before the Debts Recovery Tribunal (DRT). Ask the court for an urgent stay to stop the auction.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">5</span>
                    Stage 5: Submit Structured OTS Settlement Proposal
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Work with CredSettle to negotiate directly with senior bank managers. Submit an OTS proposal with an initial token deposit. We help you secure waivers of 40% to 70% on penalty charges.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">6</span>
                    Stage 6: Formal Dues Remittance &amp; Title Deed Release
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Pay the approved settlement amount directly into your loan account. Collect your original property deeds and an official No Dues Certificate within thirty days.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 6: Visual Blueprint Infographic */}
            <section id="visual-infographic" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Sparkles className="w-4 h-4 text-[#1886ff]" />
                <span>Visual Blueprint</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. Visual Infographic: Mortgage Redemption Timeline
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This infographic shows the legal timeline for mortgage redemption under Section 13(8). It highlights the key steps, the newspaper publication cutoff, and your legal defense options.
              </p>

              <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-slate-100 bg-slate-100">
                  <Image
                    src="/images/infographics/section-13-8-sarfaesi-act-right-of-mortgage-redemption-rules.jpg"
                    alt="Section 13(8) SARFAESI Act Right of Mortgage Redemption Rules Infographic"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 900px"
                    className="object-contain hover:scale-[1.01] transition-transform duration-300"
                    priority
                  />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-500 pt-1 gap-2">
                  <span>Official CredSettle SARFAESI Redemption Framework • Section 13(8) Supreme Court Compliant</span>
                  <a
                    href="/images/infographics/section-13-8-sarfaesi-act-right-of-mortgage-redemption-rules.jpg"
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

            {/* SECTION 7: What Happens if Public Auction Fails */}
            <section id="failed-auction-window" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Clock className="w-4 h-4 text-[#1886ff]" />
                <span>Strategic Legal Nuance</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. Strategic Window: What Happens if Public Auction Fails
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                What happens if an auction fails because no one bids? Does your right of redemption stay dead forever, or does it come back to life? This is a vital question for borrowers.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The law is clear on this point. If an auction fails with no bids, the sale process ends without a buyer. The property stays with the bank as mortgaged security. The previous cutoff applied only to that specific aborted auction.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                To hold another auction, the bank must issue a fresh notice under Rule 9(1). For repeat auctions, the bank must give at least fifteen days notice. This requirement creates a valuable second window for the borrower. You can redeem your property between the failed auction and the next newspaper publication.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Borrowers must use this extra time wisely. By paying the verified balance or getting an approved OTS during this window, you can stop the next auction and get your title deeds back.
              </p>

              {/* Representative Calculation Card */}
              <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white shadow-xs">
                <div className="bg-slate-900 text-white p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                    <span className="font-bold text-sm">Ledger Audit: Bank Claim vs Mortgage Redemption Economics</span>
                  </div>
                  <span className="text-xs text-blue-300 font-mono">₹2.4 Crore Loan Exposure</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80">
                    <thead>
                      <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-semibold">
                        <th className="p-3">Mortgage &amp; Debt Element</th>
                        <th className="p-3">Bank Demand Amount</th>
                        <th className="p-3">Audit / Legal Status</th>
                        <th className="p-3 text-right">Redemption Settlement Amount</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200/80 text-slate-600">
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Principal Outstanding Balance</td>
                        <td className="p-3">₹1,45,00,000</td>
                        <td className="p-3 text-emerald-600 font-semibold">Verified Core Principal Obligation</td>
                        <td className="p-3 text-right font-bold text-slate-900">₹1,45,00,000</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Accumulated Normal Interest</td>
                        <td className="p-3">₹38,00,000</td>
                        <td className="p-3 text-blue-600 font-semibold">Contractual Rate Reconciled</td>
                        <td className="p-3 text-right font-bold text-slate-900">₹22,00,000 (Discounted)</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Compounded Penal Charges &amp; Costs</td>
                        <td className="p-3 text-rose-600 font-bold">₹57,00,000</td>
                        <td className="p-3 text-rose-600 font-semibold">Illegal under RBI Fair Lending Circulars</td>
                        <td className="p-3 text-right font-bold text-emerald-700">₹0 (100% Waived)</td>
                      </tr>
                      <tr className="bg-blue-50/70 font-bold text-slate-900">
                        <td className="p-3">Total Payable to Redeem Property</td>
                        <td className="p-3 text-rose-700">₹2,40,00,000 Total Claim</td>
                        <td className="p-3 text-emerald-700">₹73,00,000 Total Haircut Secured</td>
                        <td className="p-3 text-right text-[#1886ff] text-sm sm:text-base">₹1,67,00,000 Final OTS</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* SECTION 8: 4-Tier Legal Defense Strategy */}
            <section id="legal-defense-strategy" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <ShieldCheck className="w-4 h-4 text-[#1886ff]" />
                <span>Procedural Defense Framework</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. 4-Tier Legal Defense Strategy Against Illegal Sale
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Banks often make legal mistakes during loan recovery. When they do, you can challenge the auction in the Debts Recovery Tribunal (DRT). Here are four strong legal grounds to defend your property:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Rule 8(6) Mandatory 30-Day Notice Violation</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The bank must serve an individual 30-day notice to you before publishing the auction notice. Failure to prove personal delivery makes the auction illegal from the start.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                    <DollarSign className="w-4 h-4" />
                    <span>Rule 8(5) Gross Undervaluation of Reserve Price</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Banks often set auction reserve prices far below true market value. You can submit an independent valuation report from a certified valuer to stay the sale.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-purple-700 font-bold text-sm">
                    <FileText className="w-4 h-4" />
                    <span>Section 13(3A) Objection Non-Consideration</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The bank must send a written, reasoned reply to your objections within fifteen days. If the bank fails to reply, its later recovery actions become invalid in court.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <Building2 className="w-4 h-4" />
                    <span>Rule 9(1) Dual Newspaper Publication Defect</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The bank must publish the auction notice in two leading newspapers. At least one must be in your regional language. Skipping this step violates mandatory rules.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 9: Procedural Timeline Table */}
            <section id="procedural-timeline" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Clock className="w-4 h-4 text-[#1886ff]" />
                <span>Procedural Milestones</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Procedural Timeline: Default to Sale Confirmation
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Knowing the SARFAESI recovery timeline helps you act on time. You can track your deadlines and protect your property before the legal cutoff arrives.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Delinquency Phase</th>
                      <th className="p-3">Statutory Step / Notice</th>
                      <th className="p-3">Redemption Status</th>
                      <th className="p-3">Strategic Action Required</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 90</td>
                      <td className="p-3 font-mono text-[11px]">NPA Classification</td>
                      <td className="p-3 text-emerald-600 font-semibold">100% Fully Open</td>
                      <td className="p-3">Request account restructuring or formal ledger reconciliation.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 91 to 150</td>
                      <td className="p-3 font-mono text-[11px]">Section 13(2) Notice (60 Days)</td>
                      <td className="p-3 text-emerald-600 font-semibold">100% Fully Open</td>
                      <td className="p-3">File representation under Section 13(3A) within fifteen days.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 151+</td>
                      <td className="p-3 font-mono text-[11px]">Section 13(4) Possession Notice</td>
                      <td className="p-3 text-emerald-600 font-semibold">Fully Intact</td>
                      <td className="p-3">File Securitisation Application (SA) in DRT within 45 days.</td>
                    </tr>
                    <tr className="bg-amber-50/50">
                      <td className="p-3 font-bold text-slate-900">Day 180 to 210</td>
                      <td className="p-3 font-mono text-[11px]">Rule 8(6) 30-Day Notice</td>
                      <td className="p-3 text-amber-700 font-semibold">Final Open Window</td>
                      <td className="p-3">Tender redemption dues or execute approved OTS agreement.</td>
                    </tr>
                    <tr className="bg-rose-50/60">
                      <td className="p-3 font-bold text-slate-900">Day 211+</td>
                      <td className="p-3 font-mono text-[11px] text-rose-700 font-bold">Rule 9(1) Newspaper Publication</td>
                      <td className="p-3 text-rose-600 font-bold">PERMANENTLY EXTINGUISHED</td>
                      <td className="p-3">Right of redemption barred under Celir LLP Supreme Court ruling.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Auction Day</td>
                      <td className="p-3 font-mono text-[11px]">Public Bidding &amp; Sale</td>
                      <td className="p-3 text-slate-400 font-semibold">Barred by Law</td>
                      <td className="p-3">Sale certificate issued to highest bidder under Rule 9(6).</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: DRT Section 17 Appeal */}
            <section id="drt-section-17-appeal" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Appellate Remedies</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                10. DRT Section 17 Appeal: Injunction &amp; Redemption Plea
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                What if the bank rejects your payment or rushes the auction without following the rules? Your primary legal forum is the Debts Recovery Tribunal (DRT).
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Section 17 allows any borrower to file a case in the DRT within forty-five days of possession notice. You do not need to make any advance deposit to file a case in the DRT under Section 17.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                You can show your good faith by offering a token deposit in court. The DRT judge has wide legal powers. The judge can cancel illegal bank actions, restore your possession, and grant a stay on the auction notice.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If the DRT rules against you, you can appeal to the DRAT under Section 18. However, DRAT appeals require an advance deposit of 25% to 50% of the claimed debt. Therefore, winning a stay at the DRT stage before auction publication is your best legal remedy.
              </p>
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
                Frequently Asked Questions: Section 13(8) SARFAESI Rules
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Here are clear answers to common questions about mortgage redemption. Learn about Section 13(8), the 2016 amendment, the Celir LLP ruling, and your borrower rights.
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
                Statutory Citations &amp; Legal Authorities on Redemption
              </h2>
              <ul className="space-y-2 text-xs text-slate-600 leading-relaxed list-disc pl-5">
                <li>
                  <strong>SARFAESI Act, 2002:</strong> Section 13(8), Right of Borrower to Redeem Secured Assets Prior to Auction Publication.
                </li>
                <li>
                  <strong>Enforcement of Security Interest Amendment Act, 2016 (Act 44 of 2016):</strong> Statutory substitution of Section 13(8) effective September 1, 2016.
                </li>
                <li>
                  <strong>Security Interest (Enforcement) Rules, 2002:</strong> Rule 8(5) (Reserve Price Valuation), Rule 8(6) (30-Day Individual Notice), and Rule 9(1) (Public Auction Publication).
                </li>
                <li>
                  <strong>Transfer of Property Act, 1882:</strong> Section 60, Right of Mortgagor to Redeem and its statutory subordination to SARFAESI Section 35.
                </li>
                <li>
                  <strong>Supreme Court of India Precedents:</strong> Celir LLP v. Bafna Motors (Mumbai) Pvt. Ltd. (2023) 10 SCC 431, Mathew Varghese v. M. Amritha Kumar (2014) 5 SCC 610, and Shakeena v. Bank of India (2019).
                </li>
              </ul>

              {/* 6 Outbound Authority Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Verified Government &amp; Legal Repositories:</span>
                <div className="flex flex-wrap gap-2">
                  <a href="https://www.sci.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>Supreme Court of India</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://drt.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>Debts Recovery Appellate Tribunal</span>
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
                  <Link href="/sarfaesi-section-14-physical-possession-order-dm-cmm" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    SARFAESI Section 14 Possession
                  </Link>
                  <Link href="/sarfaesi-act-section-13-2-notice-stop-auction" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Section 13(2) Notice Reply
                  </Link>
                  <Link href="/drt-notice-for-personal-loan-default" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    DRT Notice Legal Defense
                  </Link>
                  <Link href="/section-60-cpc-assets-property-exempt-from-bank-attachment" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Section 60 CPC Property Exemptions
                  </Link>
                  <Link href="/home-loan-default-sarfaesi-act" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Home Loan Default Rights
                  </Link>
                  <Link href="/services/business-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Business Loan Settlement
                  </Link>
                  <Link href="/cgtmse-loan-default-borrower-liability-ots-settlement-rules" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    CGTMSE Loan Default Rules
                  </Link>
                  <Link href="/file-caveat-petition-against-bank" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    File Caveat Against Bank
                  </Link>
                  <Link href="/loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    One-Time Settlement Guide
                  </Link>
                  <Link href="/willful-defaulter-notice-rbi-rules-legal-defense-guide" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Willful Defaulter Notice Defense
                  </Link>
                  <Link href="/get-noc-after-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    No Dues Certificate Guide
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
                Ashish Jhangra is a legal professional specializing in SARFAESI defense and DRT cases. He helps property owners redeem mortgages and negotiate bank loan settlements across India.
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
                <p className="text-lg md:text-xl font-bold text-white leading-snug">
                  Bank Issued SARFAESI Auction Notice?
                </p>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our experienced DRT advocates challenge illegal auction notices. We help you redeem your mortgage before publication and negotiate deep waivers on loan interest.
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
                  <span><strong>Zero Unlawful Auction:</strong> 100% statutory compliance audits.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Urgent DRT Injunctions:</strong> Section 17 stays on illegal sales.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Pre-Publication Redemption:</strong> Celir LLP cutoff protection.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Complete Debt Discharge:</strong> Guaranteed No Dues Certificate.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">Related Legal Guides</p>
              <div className="space-y-2.5">
                <Link
                  href="/sarfaesi-section-13-4-notice-30-day-auction-sale-challenge"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    SARFAESI Section 13(4) Notice Defense
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Challenge 30-day auction sale notice &rarr;</span>
                </Link>

                <Link
                  href="/sarfaesi-section-14-physical-possession-order-dm-cmm"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    SARFAESI Section 14 DM / CMM Orders
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Stay physical possession orders &rarr;</span>
                </Link>

                <Link
                  href="/home-loan-default-sarfaesi-act"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Home Loan Default SARFAESI Act
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Protect residential homes from auction &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
