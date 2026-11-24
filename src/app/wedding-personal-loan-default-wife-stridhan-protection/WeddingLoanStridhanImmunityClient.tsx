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
  BookOpen,
  Building2,
  Check,
  Lock,
  Phone,
  Briefcase,
  Bookmark,
  ArrowRight,
  UserCheck,
  Sparkles,
  Gavel,
  Landmark,
  Calendar,
  Shield
} from 'lucide-react';

export default function WeddingLoanStridhanImmunityClient() {
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
    { id: 'statutory-framework', label: '1. Section 14 HSA & Stridhan Law' },
    { id: 'section-60-cpc-shield', label: '2. Section 60 CPC Ornament Shield' },
    { id: 'asset-immunity-matrix', label: '3. Asset Immunity Matrix' },
    { id: 'co-borrower-locker-rules', label: '4. Joint Lockers & Co-Borrowers' },
    { id: 'visual-blueprint', label: '5. Visual Blueprint Infographic' },
    { id: 'step-by-step-sop', label: '6. Protect Stridhan Gold SOP' },
    { id: 'judicial-precedents', label: '7. Supreme Court & BNS 2023 Law' },
    { id: 'escalation-matrix', label: '8. 3-Tier Escalation Matrix' },
    { id: 'procedural-timeline', label: '9. Notice to Legal Closure' },
    { id: 'specialized-scenarios', label: '10. Mehr, MWP Act & Gold Loans' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
    {
      q: 'Can a bank seize my wife Stridhan gold for my wedding personal loan default?',
      a: 'No. Under Section 14 of the Hindu Succession Act, 1956, Stridhan belongs solely to the wife. A wedding personal loan is an unsecured debt in the husband name. Creditors and recovery agents have zero legal right to touch, seize, or attach her gold.'
    },
    {
      q: 'What if the husband bought wedding gold using the personal loan money?',
      a: 'An unsecured personal loan creates no lien or charge on items bought with the money. Once gold is gifted to the bride at marriage, it becomes her absolute Stridhan. The bank can only sue the husband for money, not claim gifts given to the wife.'
    },
    {
      q: 'Are mangalsutra and daily religious ornaments safe even with a court order?',
      a: 'Yes. Section 60(1)(a) of the Code of Civil Procedure, 1908 bans courts from attaching ornaments that religious custom forbids a woman to part with. Items like a mangalsutra, sacred bangles, and toe rings enjoy full statutory immunity from court bailiffs.'
    },
    {
      q: 'Does the wife become liable if she signed as a co-borrower or guarantor?',
      a: 'Yes, her personal liability changes if she signed the loan contract. As a co-borrower or guarantor, she is equally liable for the debt. Even then, a bank still cannot snatch gold at home, and Section 60(1)(a) CPC still shields her mangalsutra and custom ornaments.'
    },
    {
      q: 'Can a bank freeze our joint locker to recover a husband personal loan?',
      a: 'No. A bank locker creates a landlord and tenant link, not a loan pledge. Section 171 of the Indian Contract Act does not apply to safe deposit lockers. Without a clear court attachment order, freezing a joint locker breaks RBI Locker Directions.'
    },
    {
      q: 'What can a wife do if a court bailiff wrongly attaches her Stridhan?',
      a: 'She can file a formal claim petition under Order 21 Rule 58 CPC in the same executing court. She should attach purchase bills, gift lists, or wedding photos as proof. She can also seek an urgent stay of sale under Order 21 Rule 59 CPC.'
    },
    {
      q: 'Can recovery agents enter our home and demand my wife jewelry?',
      a: 'Never. Recovery agents have zero police or court power. Demanding jewelry or threatening family members violates RBI Circular DOR.ORG.REC.65. It is also a crime under BNS 2023 for house trespass, extortion, and criminal intimidation. Dial 112 right away.'
    },
    {
      q: 'Are non-Hindu wives also protected from a husband wedding loan default?',
      a: 'Yes. Every married woman in India is a separate legal person. Muslim wives hold full rights over Mehr and wedding gifts. Christian, Parsi, and Special Marriage Act wives hold independent title to their personal assets and enjoy full Section 60 CPC shields.'
    },
    {
      q: 'Does Stridhan immunity apply if the wife pledged her gold for a gold loan?',
      a: 'No. If the wife herself signed a gold loan contract and pledged her ornaments as collateral, the lender holds a valid pledge right. However, the bank can only recover that specific gold loan and cannot touch other unpledged Stridhan kept at home.'
    },
    {
      q: 'How does CredSettle help families facing wedding personal loan threats?',
      a: 'CredSettle stops illegal agent calls and home visits through formal legal notices under RBI rules. Our lawyers protect your spouse assets, guide Order 21 Rule 58 court objections if needed, and negotiate fair One-Time Settlements to close the debt legally.'
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
            <span>Section 14 HSA, Section 60 CPC &amp; RBI Fair Practices Shield</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Can Creditors Touch Wife&apos;s Stridhan for Wedding Loans?
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            Defaulted on a marriage personal loan? Know how Indian law grants complete immunity to a wife&apos;s Stridhan gold, wedding gifts, and mangalsutra. Stop illegal bank threats, protect joint lockers, and settle your debt safely.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Protect Family Assets &amp; Settle</span>
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
                  <span>Statutory Family Shield</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Protected under Section 14 HSA, Section 60 CPC, and RBI Circular DOR.ORG.REC.65.
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
                <span>EXECUTIVE BRIEF: WIFE&apos;S STRIDHAN IMMUNITY RULES</span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Full Owner Under Section 14 HSA:</strong> All gold, cash, and gifts given to a bride at marriage are her sole Stridhan. The husband owns zero legal title over them.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Zero Seizure for Unsecured Loans:</strong> A wedding personal loan has no collateral. Unless the wife signed as a co-borrower or guarantor, no bank or court can attach her assets.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Mangalsutra Shield Under Section 60 CPC:</strong> Courts cannot seize a mangalsutra or sacred custom ornaments, even when a civil decree exists against the borrower.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Joint Locker Protection:</strong> Banks cannot freeze a joint safe deposit locker for one holder&apos;s personal loan default. Section 171 banker lien does not apply to lockers.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Strict Ban on Agent Threats:</strong> Recovery agents who threaten to take family gold break RBI Circular DOR.ORG.REC.65 and face criminal action under BNS 2023.
                  </span>
                </li>
              </ul>
            </div>

            {/* SECTION 1: Statutory Framework: Section 14 HSA & Stridhan Law */}
            <section id="statutory-framework" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Absolute Ownership &amp; Separate Legal Identity</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. Statutory Framework: Section 14 HSA &amp; Stridhan Law
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Many Indian families take a wedding personal loan to cover marriage halls, catering, and travel costs. When job loss or illness hits later, EMIs can slip into default. Soon after, aggressive recovery agents start calling and threaten to seize the wife&apos;s wedding gold.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                These threats have zero backing in Indian law. Marriage does not merge the debts of a husband and wife. Each spouse stays a separate legal person in the eyes of banks and courts.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Section 14(1) of the Hindu Succession Act, 1956 makes a woman the full and sole owner of her property. This property is called Stridhan. It covers all gold, jewelry, cash, and gifts received before, during, or after the wedding.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Gifts from parents, friends, in-laws, or even the husband count as her Stridhan. Because the husband has no ownership right over Stridhan, his lenders cannot touch it to clear his personal loan.
              </p>
            </section>

            {/* SECTION 2: Section 60 CPC: Mangalsutra & Ornament Exemption */}
            <section id="section-60-cpc-shield" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Shield className="w-4 h-4 text-[#1886ff]" />
                <span>Civil Execution Protections &amp; Customary Immunity</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. Section 60 CPC: Mangalsutra &amp; Ornament Exemption
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                A wedding personal loan is an unsecured loan. The bank holds no mortgage or pledge over your home or jewelry. To attach any asset, the lender must first file a civil suit, win a court decree, and seek a formal execution warrant.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Even if a bank wins a civil court decree against the husband, strict legal shields apply. Under Section 60 of the Code of Civil Procedure, 1908 (CPC), a court bailiff can only attach property that belongs to the judgment debtor himself.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The proviso to Section 60(1)(a) CPC adds an extra wall of safety for every household. It bans attachment of daily clothes, cooking vessels, and beds of the debtor, his wife, and children. It also bars seizing personal ornaments that religious usage forbids a woman to part with.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This means a wife&apos;s mangalsutra, sacred wedding bangles, and toe rings are 100% exempt from seizure. Even if the wife co-signed the loan, no bailiff can legally remove her religious ornaments during court execution.
              </p>
            </section>

            {/* SECTION 3: Asset Immunity Matrix: What Lenders Can & Cannot Touch */}
            <section id="asset-immunity-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Clear Breakdown of Family Assets &amp; Legal Risk</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Asset Immunity Matrix: What Lenders Can &amp; Cannot Touch
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Recovery callers often mix up unsecured loans with secured gold loans to scare families. Knowing which assets enjoy full immunity stops panic and helps you answer threats with facts.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The table below shows how Indian courts treat each type of wedding and household asset when a husband defaults on his personal loan.
              </p>

              {/* Asset Immunity Matrix Table */}
              <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white shadow-xs">
                <div className="bg-slate-900 text-white p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#1886ff]" />
                    <span className="font-bold text-sm">Wedding Personal Loan Default: Family Asset Shield</span>
                  </div>
                  <span className="text-xs text-blue-300 font-mono">Sole Borrower vs Co-Borrower</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80">
                    <thead>
                      <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-semibold">
                        <th className="p-3">Asset Category</th>
                        <th className="p-3">Husband Sole Borrower</th>
                        <th className="p-3">Wife Is Co-Borrower</th>
                        <th className="p-3">Governing Legal Shield</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200/80 text-slate-600">
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Wife&apos;s Stridhan Gold &amp; Wedding Gifts</td>
                        <td className="p-3 text-emerald-600 font-bold">100% Immune</td>
                        <td className="p-3 text-amber-600 font-semibold">Only via Court Decree</td>
                        <td className="p-3">Section 14 HSA &amp; Supreme Court Law</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Mangalsutra &amp; Custom Religious Ornaments</td>
                        <td className="p-3 text-emerald-600 font-bold">100% Immune</td>
                        <td className="p-3 text-emerald-600 font-bold">100% Immune</td>
                        <td className="p-3">Section 60(1)(a) CPC Absolute Bar</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Gold Bought With Wedding Loan &amp; Gifted</td>
                        <td className="p-3 text-emerald-600 font-bold">Immune (No Lien)</td>
                        <td className="p-3 text-amber-600 font-semibold">Only via Court Decree</td>
                        <td className="p-3">Unsecured Loan Has Zero Charge</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Wife&apos;s Sole Bank Account &amp; Salary</td>
                        <td className="p-3 text-emerald-600 font-bold">100% Immune</td>
                        <td className="p-3 text-amber-600 font-semibold">Court Garnishee Only</td>
                        <td className="p-3">Separate Legal Entity Principle</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Joint Bank Locker (Stridhan Inside)</td>
                        <td className="p-3 text-emerald-600 font-bold">No Bank Freeze Allowed</td>
                        <td className="p-3 text-amber-600 font-semibold">Court Order Required</td>
                        <td className="p-3">RBI Locker Rules &amp; Sec 171 Limit</td>
                      </tr>
                      <tr className="bg-blue-50/70 font-bold text-slate-900">
                        <td className="p-3">Husband&apos;s Own Salary &amp; Sole Assets</td>
                        <td className="p-3 text-rose-700">Attachable by Court</td>
                        <td className="p-3 text-rose-700">Attachable by Court</td>
                        <td className="p-3 text-[#1886ff]">Section 60(1)(i) CPC Salary Cap</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* SECTION 4: Joint Lockers, Co-Borrowers & Wedding Gift Rules */}
            <section id="co-borrower-locker-rules" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <AlertTriangle className="w-4 h-4 text-[#1886ff]" />
                <span>Common Bank Traps &amp; Real Exceptions</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. Joint Lockers, Co-Borrowers &amp; Wedding Gift Rules
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Banks sometimes try to freeze a joint safe deposit locker held by the husband and wife at the same branch. Branch staff claim a banker&apos;s general lien under Section 171 of the Indian Contract Act, 1872. That claim is legally wrong.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Section 171 applies only to goods bailed to a bank as security. A bank locker is a simple landlord and tenant rental. The bank does not hold legal custody of your gold inside the locker. Under RBI Locker Circular DOR.LEG.REC/40 (2021), a bank cannot block locker access for an unpaid personal loan without a court order.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                What if the husband used his personal loan money to buy bridal gold and gifted it to his wife? Under Indian law, an unsecured loan carries no charge on items bought with the cash. Once gifted at marriage, the gold becomes true Stridhan. Only a fake gift made right before default to cheat lenders can face challenge under Section 53 of the Transfer of Property Act, 1882. Even then, the bank must prove fraud in court.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                One clear exception exists. If the wife voluntarily signed the loan form as a co-borrower or guarantor, she shares legal debt liability. Even then, recovery agents cannot take gold at home. The bank must still go through civil court, and her mangalsutra stays fully safe under Section 60(1)(a) CPC.
              </p>
            </section>

            {/* SECTION 5: Visual Blueprint: Stridhan Immunity & Legal Defense */}
            <section id="visual-blueprint" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Sparkles className="w-4 h-4 text-[#1886ff]" />
                <span>Visual Blueprint</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. Visual Blueprint: Stridhan Immunity &amp; Legal Defense
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This visual guide sums up the legal shield protecting a wife&apos;s Stridhan during a wedding personal loan default. It highlights Section 14 HSA, Section 60 CPC, and RBI anti-harassment rules.
              </p>

              <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-slate-100 bg-slate-100">
                  <Image
                    src="/images/infographics/wedding-personal-loan-default-wife-stridhan-protection.jpg"
                    alt="Wedding Personal Loan Default and Wife Stridhan Legal Immunity Under Indian Law"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 900px"
                    className="object-contain hover:scale-[1.01] transition-transform duration-300"
                    priority
                  />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-500 pt-1 gap-2">
                  <span>Official CredSettle Family Asset Shield • Section 14 HSA &amp; RBI Compliant</span>
                  <a
                    href="/images/infographics/wedding-personal-loan-default-wife-stridhan-protection.jpg"
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

            {/* SECTION 6: Step-by-Step SOP: Protect Stridhan Gold from Banks */}
            <section id="step-by-step-sop" className="scroll-target space-y-6">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Standard Operating Procedure</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. Step-by-Step SOP: Protect Stridhan Gold from Banks
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Is your wedding loan overdue while agents call or visit your home? Follow these six clear steps right away to keep your wife&apos;s gold safe.
              </p>

              <div className="space-y-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">1</span>
                    Stage 1: Check the Signed Loan Agreement &amp; KFS
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Download your original loan agreement and Key Facts Statement (KFS). Verify that the wife is not listed as a co-applicant or guarantor. Keep a PDF copy ready on your phone.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">2</span>
                    Stage 2: Compile a Written Stridhan Proof File
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Collect jeweler invoices in the wife&apos;s or parents&apos; names, wedding photos showing the ornaments, and gift lists signed by relatives. This file settles any ownership question fast.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">3</span>
                    Stage 3: Never Let Unverified Agents Inside Your Home
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Demand the agent&apos;s bank authorization letter, photo ID, and IIBF certificate at the door. Record any visit on video. Never sign blank papers or hand over jewelry to buy time.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">4</span>
                    Stage 4: Separate Joint Savings Accounts From the Same Bank
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    While banks cannot legally freeze a joint locker, they often place holds on savings balances at the same bank. Keep the wife&apos;s personal funds and locker in a separate bank where no loan exists.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">5</span>
                    Stage 5: File Order 21 Rule 58 CPC Objection If Court Attaches
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If a civil court bailiff ever lists the wife&apos;s belongings by mistake, file an immediate claim petition under Order 21 Rule 58 CPC. Also ask for a stay of sale under Rule 59 before any auction.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">6</span>
                    Stage 6: Negotiate a Written One-Time Settlement (OTS)
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Once harassment stops, resolve the husband&apos;s debt through a formal OTS offer on bank letterhead. Pay only into the official loan account and collect a signed No Dues Certificate (NDC).
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: Supreme Court Law & Criminal Action Under BNS 2023 */}
            <section id="judicial-precedents" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>Landmark Rulings &amp; Criminal Protections</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. Supreme Court Law &amp; Criminal Action Under BNS 2023
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The Supreme Court of India has defended a wife&apos;s full ownership of Stridhan for four decades. These binding judgments leave zero room for banks or third-party agencies to claim a wife&apos;s jewelry.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Agents have zero right to force entry or demand your spouse&apos;s gold. If they do, you can file a police FIR under the Bharatiya Nyaya Sanhita (BNS), 2023.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                    <Gavel className="w-4 h-4" />
                    <span>Pratibha Rani v. Suraj Kumar (1985 SC)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The Supreme Court ruled that Stridhan never becomes joint marital wealth. The husband has no legal title over it. Keeping a wife&apos;s gold without consent is a criminal breach of trust.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                    <Scale className="w-4 h-4" />
                    <span>Rashmi Kumar v. Mahesh Kumar Bhada (1997 SC)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    A three-judge bench held that a wife has sole power to keep, sell, or gift her Stridhan. Even if a husband uses it in crisis, he must pay it back and gains no ownership.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-purple-700 font-bold text-sm">
                    <Landmark className="w-4 h-4" />
                    <span>Maya Gopinathan v. Anoop S.B. (2024 SC)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The Supreme Court held again that using a wife&apos;s gold to clear a husband&apos;s debt is wrongful misuse. The court ordered full payback of her gold value under civil law.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <ShieldCheck className="w-4 h-4" />
                    <span>BNS 2023 Criminal Charges Against Agents</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Agents who force entry or demand gold face swift FIRs under BNS 2023. Key sections include 329 (house trespass), 308 (extortion), 351 (threats), and 316 (breach of trust).
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 8: 3-Tier Escalation Matrix: Police, GRO & Ombudsman */}
            <section id="escalation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Escalation Protocol</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. 3-Tier Escalation Matrix: Police, GRO &amp; Ombudsman
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under RBI Circular DOR.ORG.REC.65 (August 12, 2022), lenders are fully liable for every agent they hire. Agents cannot call before 8:00 AM or after 7:00 PM. They also cannot call or shame your spouse. Use this three-tier plan if a bank breaks these rules.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Escalation Tier</th>
                      <th className="p-3">Authority to Approach</th>
                      <th className="p-3">Response Window</th>
                      <th className="p-3">Legal Relief &amp; Action Taken</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 1: Urgent Safety</td>
                      <td className="p-3">Local Police (Dial 112) &amp; Bank GRO</td>
                      <td className="p-3 font-mono">Immediate / 7 Days</td>
                      <td className="p-3">Stops home trespass under BNS 2023 and forces bank to recall rogue recovery agents.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 2: Head Office</td>
                      <td className="p-3">Principal Nodal Officer (PNO)</td>
                      <td className="p-3 font-mono">14 to 21 Days</td>
                      <td className="p-3">Unfreezes illegal joint locker holds, logs RBI privacy breaches, and opens OTS talks.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Level 3: Regulator</td>
                      <td className="p-3">RBI Integrated Ombudsman (cms.rbi.org.in)</td>
                      <td className="p-3 font-mono">30 Days Post-GRO</td>
                      <td className="p-3">Penalizes bank for Fair Practices Code violations and awards harassment compensation.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 9: Procedural Timeline: Default Notice to Legal Closure */}
            <section id="procedural-timeline" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Calendar className="w-4 h-4 text-[#1886ff]" />
                <span>Procedural Milestones</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Procedural Timeline: Default Notice to Legal Closure
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Unsecured wedding loan defaults follow a set banking timeline. Knowing each stage keeps you calm and prevents panic selling of your wife&apos;s gold.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Delinquency Stage</th>
                      <th className="p-3">Bank Action</th>
                      <th className="p-3">Risk to Wife&apos;s Stridhan</th>
                      <th className="p-3">Recommended Legal Step</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 1 to 60 (SMA-0/1)</td>
                      <td className="p-3">Soft calls, SMS alerts, and EMI bounce fees.</td>
                      <td className="p-3 text-emerald-600 font-bold">Zero Risk</td>
                      <td className="p-3">Email hardship proof and check that wife is not a co-borrower.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 61 to 90 (SMA-2/NPA)</td>
                      <td className="p-3">Account turns NPA; agency calls and home visits begin.</td>
                      <td className="p-3 text-emerald-600 font-bold">Zero Legal Risk</td>
                      <td className="p-3">Record visits, block 3rd-party calls, and save Stridhan bills.</td>
                    </tr>
                    <tr className="bg-amber-50/50">
                      <td className="p-3 font-bold text-slate-900">Day 91 to 180</td>
                      <td className="p-3">Loan recall notice, arbitration, or Section 138/25 bounce notice.</td>
                      <td className="p-3 text-emerald-700 font-bold">Zero Legal Risk</td>
                      <td className="p-3 font-bold text-amber-800">Send formal lawyer reply and contest one-sided arbitration.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Month 6 to 12</td>
                      <td className="p-3">Bank opens OTS window or files civil recovery suit.</td>
                      <td className="p-3 text-emerald-700 font-bold">Protected by Law</td>
                      <td className="p-3 font-bold text-slate-900">Negotiate 40% to 65% OTS waiver without selling wife&apos;s gold.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Post-Settlement</td>
                      <td className="p-3">Lender issues No Dues Certificate and updates bureaus in 15 days.</td>
                      <td className="p-3 text-emerald-600 font-bold">100% Safe</td>
                      <td className="p-3">Verify zero balance on CIBIL and close all pending notices.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: Special Cases: Muslim Mehr, MWP Act & Gold Loans */}
            <section id="specialized-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>Specialized Real-World Cases</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                10. Special Cases: Muslim Mehr, MWP Act &amp; Gold Loans
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Indian law protects married women across every faith and asset type. Here is how special wedding, insurance, and pledged-gold cases work in real life.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Scale className="w-4 h-4 text-[#1886ff]" />
                    Muslim Mehr, Christian &amp; Parsi Wives
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    This shield is not just for Hindu wives. Under Muslim law, Mehr and bridal gifts belong only to the wife. Christian, Parsi, and Special Marriage Act wives also hold full title and Section 60 CPC safety.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    MWP Act Section 6 Insurance Shield
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    A life policy tagged under Section 6 of the Married Women&apos;s Property Act, 1874 forms a legal trust. Banks and lenders cannot touch its maturity or death payout for the husband&apos;s loan.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-600" />
                    Husband Pledged Wife&apos;s Gold Without Consent
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    What if a husband pledged his wife&apos;s gold for a loan without her consent? That is a breach of trust. The wife can send a legal notice and ask a court to stop any gold sale.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-indigo-600" />
                    Deceased Husband&apos;s Wedding Loan Debt
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If a husband dies owing an unsecured loan, his wife is not liable for it. Banks can claim only from assets in his name. They can never touch her Stridhan or pay.
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
                Frequently Asked Questions: Wedding Loans &amp; Stridhan
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Clear, plain-English legal answers on Stridhan immunity, mangalsutra safety, joint bank lockers, co-borrower rules, and stopping recovery harassment in India.
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
                Official Regulatory Citations &amp; Statutory References
              </h2>
              <ul className="space-y-2 text-xs text-slate-600 leading-relaxed list-disc pl-5">
                <li>
                  <strong>Hindu Succession Act, 1956 (Section 14) &amp; Supreme Court Precedents:</strong> Pratibha Rani v. Suraj Kumar (1985), Rashmi Kumar v. Mahesh Kumar Bhada (1997), and Maya Gopinathan v. Anoop S.B. (2024) on absolute Stridhan ownership.
                </li>
                <li>
                  <strong>Code of Civil Procedure, 1908 (CPC):</strong> Proviso to Section 60(1)(a) (Exemption of Mangalsutra &amp; Custom Ornaments), Order 21 Rule 58 (Third-Party Objection to Attachment), and Order 21 Rule 59 (Stay of Sale).
                </li>
                <li>
                  <strong>Reserve Bank of India Circular DOR.ORG.REC.65/21.04.158/2022-23 (August 12, 2022):</strong> Outsourcing of Financial Services - Responsibilities of Regulated Entities Employing Recovery Agents (8 AM to 7 PM rule &amp; anti-harassment code).
                </li>
                <li>
                  <strong>RBI Safe Deposit Locker Directions (DOR.LEG.REC/40/09.07.005/2021-22) &amp; Indian Contract Act, 1872 (Section 171):</strong> Limits on banker&apos;s general lien over safe deposit lockers and joint hirer access rights.
                </li>
                <li>
                  <strong>Bharatiya Nyaya Sanhita (BNS), 2023 &amp; Married Women&apos;s Property Act, 1874:</strong> BNS Sections 308 (Extortion), 316 (Criminal Breach of Trust), 329 (House Trespass), 351 (Criminal Intimidation), and Section 6 MWP Act trust shield.
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
                    <span>RBI Integrated Ombudsman Portal</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.sci.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>Supreme Court of India</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.indiacode.nic.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>India Code Statutory Repository</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://ncw.nic.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>National Commission for Women</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://consumerhelpline.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>National Consumer Helpline</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* 10 Internal Topic Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Explore Related CredSettle Guides:</span>
                <div className="flex flex-wrap gap-2">
                  <Link href="/section-60-cpc-assets-property-exempt-from-bank-attachment" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Section 60 CPC Exempt Assets
                  </Link>
                  <Link href="/can-bank-attach-ancestral-property-for-personal-loan-default" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Ancestral Property Immunity
                  </Link>
                  <Link href="/can-bank-freeze-joint-savings-account-co-holder-loan-default" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Joint Account Freeze Rules
                  </Link>
                  <Link href="/can-bank-withhold-pledged-gold-after-loan-repayment" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Pledged Gold Release Rules
                  </Link>
                  <Link href="/recovery-agents-calling-family-members-law" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Agents Calling Family Law
                  </Link>
                  <Link href="/stop-recovery-agent-harassment" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Stop Recovery Harassment
                  </Link>
                  <Link href="/rbi-rules-for-recovery-agents" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    RBI Recovery Guidelines
                  </Link>
                  <Link href="/can-recovery-agents-seize-property" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Can Agents Seize Property?
                  </Link>
                  <Link href="/services/personal-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Personal Loan Settlement
                  </Link>
                  <Link href="/bank-sent-legal-notice-for-loan-what-to-do" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Bank Legal Notice Reply
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
                Expert in Indian banking law, personal loan settlement, and RBI fair practice rules. Helps Indian families guard spousal Stridhan and close bank debts safely.
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
                  FAMILY ASSET LEGAL SHIELD
                </span>
                <p className="text-lg md:text-xl font-bold text-white leading-snug">
                  Agents Threatening Your Wife&apos;s Gold?
                </p>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our lawyers send swift legal notices under RBI rules. We stop home visits and family calls, and settle your wedding loan without touching your Stridhan.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Get Free Stridhan Defense
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
                  <span>RBI Compliant • 100% Confidential</span>
                </div>
              </div>
            </div>

            {/* Card 3: CredSettle Trust Badges */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">The CredSettle Assurance</p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Stop Family Harassment:</strong> Formal legal notices under RBI Circular DOR.ORG.REC.65.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Stridhan &amp; Locker Defense:</strong> Legal action against illegal joint locker freezes.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Court Objection Support:</strong> Order 21 Rule 58 CPC petitions if wrong attachment occurs.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Smart Loan Settlement:</strong> Negotiate 40% to 65% OTS relief with written NDC.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">Related Legal Guides</p>
              <div className="space-y-2.5">
                <Link
                  href="/section-60-cpc-assets-property-exempt-from-bank-attachment"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Section 60 CPC Exempt Assets
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Full list of immune property &rarr;</span>
                </Link>

                <Link
                  href="/can-bank-freeze-joint-savings-account-co-holder-loan-default"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Joint Account Freeze Law
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Co-holder rights &amp; RBI limits &rarr;</span>
                </Link>

                <Link
                  href="/recovery-agents-calling-family-members-law"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Recovery Agents Calling Family
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Privacy shield &amp; police action &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
