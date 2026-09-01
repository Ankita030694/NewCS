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

export default function PersonalLoanNaChukaneParKyaHotaHaiClient() {
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
    { id: 'npa-dynamics-debt-economics', label: '1. Debt Economics & 90-Day NPA' },
    { id: 'financial-breakdown-settlement-math', label: '2. Financial Math & Penal Charges' },
    { id: 'resolution-comparison-matrix', label: '3. Resolution Comparison Matrix' },
    { id: 'cibil-algorithm-credit-impact', label: '4. CIBIL Algorithm & Score Recovery' },
    { id: 'infographic-overview', label: 'Visual NPA & Resolution Blueprint' },
    { id: 'step-by-step-ots-sop', label: '5. 6-Stage Defense & OTS SOP' },
    { id: 'statutory-notices-legal-defense', label: '6. Statutory Notice Defense & Rights' },
    { id: 'three-tier-grievance-matrix', label: '7. 3-Tier Grievance Redressal' },
    { id: 'chronological-timeline-milestones', label: '8. Procedural Timeline Milestones' },
    { id: 'specialized-default-scenarios', label: '9. Specialized Default Scenarios' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
    {
        "q": "Personal loan na chukane par kya hota hai?",
        "a": "Default par 90 din tak account SMA tag rehta hai aur fir NPA banta hai. Bank late fees lagata hai aur notice bhejta hai. Unsecured loan default civil matter hai, arrest nahi hoti."
    },
    {
        "q": "Kya personal loan default par police arrest ho sakti hai?",
        "a": "Nahi. Unsecured loan non-payment civil breach hai. Supreme Court aur RBI ke mutabik police loan default par arrest nahi kar sakti. Arrest dhamki illegal harassment hai."
    },
    {
        "q": "90-day NPA process kya hota hai aur bank kya karta hai?",
        "a": "Pehle 30 din SMA-0, 31-60 din SMA-1, aur 61-90 din SMA-2 tag hota hai. 90 din default ke baad account NPA ban jata hai aur OTS window open hoti hai."
    },
    {
        "q": "Recovery agents ke calls par borrower ke kya legal rights hain?",
        "a": "RBI rules ke mutabik agents subah 8 se pehle aur shaam 7 ke baad call nahi kar sakte. Abusive bhasha aur harassment illegal hai."
    },
    {
        "q": "Kya personal loan mein One Time Settlement (OTS) legal hai?",
        "a": "Haan, One Time Settlement (OTS) RBI guidelines ke antargat 100% legal hai. Hardship par bank 40% se 55% tak OTS compromise deta hai."
    },
    {
        "q": "Personal loan default se CIBIL score par kitna asar padta hai?",
        "a": "Default par CIBIL score 100 se 250 points girta hai aur Settled remark aata hai. No Dues Certificate lekar secured card se score 750+ rebuild ho jata hai."
    },
    {
        "q": "Kya bank personal loan default par property seize kar sakta hai?",
        "a": "Nahi. Unsecured loan par SARFAESI apply nahi hota, isliye bank bina court decree ke property seize nahi kar sakta. Salary attachment decree ke baad hi hoti hai."
    },
    {
        "q": "Section 25 PSSA ya Section 138 notice par kya karein?",
        "a": "NACH ya cheque bounce notice par 15 din mein legal reply bhejna chahiye, jisme hardship aur settlement intention document karke criminal risk neutralize hota hai."
    },
    {
        "q": "Unilateral Arbitration Notice ko kaise challenge karein?",
        "a": "Supreme Court Perkins Eastman ruling ke mutabik bank akele sole arbitrator appoint nahi kar sakta. Section 12(5) challenge se bank settlement par aata hai."
    },
    {
        "q": "CredSettle loan settlement mein kaise madad karta hai?",
        "a": "CredSettle team loan audit karti hai, harassment stop karwati hai, legal notices ka statutory reply file karti hai, aur 40% se 70% discount par settlement karwati hai."
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-blue-100 text-xs font-bold mb-3 backdrop-blur-xs border border-white/15">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-200" />
            <span>RBI COMPLIANT BORROWER PROTECTION &amp; OTS BLUEPRINT</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Personal Loan Na Chukane Par Kya Hota Hai?
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-3xl mx-auto font-normal text-white/95 leading-relaxed">
            Agar aap financial crisis, job loss ya medical emergency ke karan personal loan EMI nahi bhar pa rahe hain, toh samjhein 90-day NPA lifecycle, recovery limits, legal notice defense, aur 40% se 55% tak One Time Settlement (OTS) karwane ki legal process.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Get Legal Protection &amp; Loan Settlement</span>
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
                  <span>Borrower Rights Protected</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Governed by RBI IRACP Master Directions.
                </p>
              </div>
            </div>
          </aside>

          {/* ================= MIDDLE COLUMN: MAIN CONTENT ================= */}
          <div className="space-y-8 md:space-y-10 min-w-0">
            
            {/* Executive Brief Box (#F4F8FE Box) with Rich Editorial Paragraphs */}
            <div
              id="quick-crux"
              className="scroll-target rounded-2xl bg-[#F4F8FE] border border-blue-100/90 border-l-[5px] border-l-[#1886ff] p-5 sm:p-6 md:p-7 shadow-xs space-y-3.5 text-slate-800"
            >
              <div className="flex items-center gap-2 text-xs md:text-sm font-black uppercase tracking-wider text-[#1886ff]">
                <Bookmark className="w-4 h-4 text-[#1886ff]" />
                <span>EXECUTIVE SUMMARY: PERSONAL LOAN DEFAULT &amp; RESOLUTION FRAMEWORK</span>
              </div>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Jab koi borrower medical emergency ya job loss ki wajah se unsecured personal loan EMI default karta hai, toh sabse pehle psychological panic create hota hai. Indian banking laws ke mutabik unsecured loan non-payment strictly civil breach of contract hai, jisme police arrest ya criminal jail ka koi provision nahi hota.
              </p>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Agar lagatar EMIs bounce hoti hain, toh 90 din mein account SMA stage se nikal kar Substandard NPA classify ho jata hai. Is stage par bank penal interest freeze karta hai aur One Time Settlement (OTS) window open karta hai.
              </p>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                RBI Fair Practices Code recovery agents ko odd hours mein call karne aur relatives ko harass karne se strictly rokta hai. Section 25 PSSA ya Section 138 notice ka timely legal reply dekar aap ex-parte recovery orders ko block kar sakte hain aur 40% se 55% principal waiver ke sath official No Dues Certificate (NDC) hasil kar sakte hain.
              </p>
            </div>

            {/* SECTION 1: Debt Economics & NPA Dynamics */}
            <section id="npa-dynamics-debt-economics" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                <span>NPA Accounting &amp; Regulations</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. Debt Economics &amp; 90-Day NPA Dynamics in India
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Unsecured personal loan portfolio mein koi physical collateral hypothecated nahi hota. Jab borrower financial hardship ke chalte EMI service nahi kar pata, toh banks RBI ke <strong>Master Direction on IRACP framework</strong> ke antargat bound hote hain.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Delinquency teen stages mein progress karti hai: pehle 1 se 30 din overdue par <strong>SMA-0</strong> tag hota hai, 31 se 60 din par <strong>SMA-1</strong> banta hai, aur 61 se 90 din par <strong>SMA-2</strong> designate hota hai. Jaise hi 90 din cross hote hain, account formally <strong>Substandard Non-Performing Asset (NPA)</strong> classify ho jata hai.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                NPA tag hote hi bank ko loan amount par 15% Tier-1 capital provisioning separate karni padti hai aur unbilled interest income freeze ho jati hai. Chunki unsecured loans par SARFAESI Act apply nahi hota, isliye banks prolonged litigation ki jagah One-Time Settlement (OTS) ke through capital recovery prefer karte hain.
              </p>
            </section>

            {/* SECTION 2: Financial Breakdown & Settlement Math */}
            <section id="financial-breakdown-settlement-math" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <DollarSign className="w-4 h-4 text-[#1886ff]" />
                <span>Financial Analysis</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. Financial Breakdown: Principal vs Penal Charges &amp; Settlement Math
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Default ke baad borrower ke account mein sabse bada distortion 24% se 36% compound penal interest aur NACH bounce fees create karti hain, jo 6 se 12 mahine mein claim ko principal se 25% se 40% inflate kar deti hain.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                CredSettle team loan ledger ka audit karti hai taaki artificial charges ko principal se bifurcate kiya ja sake. Banks ke <strong>Delegation of Financial Power (DOFP)</strong> matrices ke tehat credit committees genuine hardship mein 100% penal waiver aur 40% se 55% compromise discount sanction karti hain.
              </p>

              {/* Representative Calculation Card */}
              <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs p-5 md:p-6 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100">
                  <div>
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff]">
                      Representative 180-Day NPA Settlement Math
                    </span>
                    <h3 className="text-base md:text-lg font-bold text-slate-900 mt-0.5">
                      ₹6,00,000 Unsecured Loan Case Study
                    </h3>
                  </div>
                  <span className="text-xs font-bold px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full border border-emerald-200/60 self-start sm:self-auto">
                    45% Principal OTS Target
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs md:text-sm">
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/60 space-y-1">
                    <span className="text-slate-500 font-medium">Original Disbursed Loan</span>
                    <p className="text-base font-extrabold text-slate-900">₹6,00,000</p>
                    <span className="text-[11px] text-slate-400">36 Months @ 14% p.a.</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/60 space-y-1">
                    <span className="text-slate-500 font-medium">Principal Balance</span>
                    <p className="text-base font-extrabold text-slate-900">₹4,80,000</p>
                    <span className="text-[11px] text-slate-400">Pure Unpaid Capital</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-red-50 border border-red-200/60 space-y-1">
                    <span className="text-red-600 font-medium">Penal &amp; Late Fees</span>
                    <p className="text-base font-extrabold text-red-700">₹1,45,000</p>
                    <span className="text-[11px] text-red-500">180 Days Compounded</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-red-50 border border-red-200/60 space-y-1">
                    <span className="text-red-600 font-medium">Total Bank Claim</span>
                    <p className="text-base font-extrabold text-red-700">₹6,25,000</p>
                    <span className="text-[11px] text-red-500">Gross Demand Total</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200/60 space-y-1">
                    <span className="text-emerald-700 font-medium">Negotiated OTS</span>
                    <p className="text-base font-extrabold text-emerald-700">₹2,15,000</p>
                    <span className="text-[11px] text-emerald-600">Full &amp; Final Payment</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-blue-50 border border-blue-200/60 space-y-1">
                    <span className="text-[#1886ff] font-medium">Borrower Savings</span>
                    <p className="text-base font-extrabold text-[#1886ff]">₹4,10,000</p>
                    <span className="text-[11px] text-blue-600">65.6% Debt Reduction</span>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 3: 4-Sided Bordered Status Comparison Matrix */}
            <section id="resolution-comparison-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Resolution Options Compared</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Comparative Matrix: Personal Loan Resolution Pathways
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Default ke baad restructuring tenure extend karke interest double kar deti hai, jabki passive default CIBIL ko 7 saal ke liye ruin karta hai. Civil litigation dono parties ke liye expensive hoti hai, jabki One-Time Settlement (OTS) sabse practical legal exit provide karta hai:
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-left text-xs md:text-sm border-collapse">
                  <thead className="bg-slate-50 border-b border-slate-200/80 text-slate-700">
                    <tr className="divide-x divide-slate-200/80">
                      <th className="p-3.5 font-bold">Resolution Route</th>
                      <th className="p-3.5 font-bold">Financial Cost</th>
                      <th className="p-3.5 font-bold">Legal Risk</th>
                      <th className="p-3.5 font-bold">CIBIL Impact</th>
                      <th className="p-3.5 font-bold text-[#1886ff]">Settlement Verdict</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-600">
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-200/80">
                      <td className="p-3.5 font-bold text-slate-900">One-Time Settlement (OTS)</td>
                      <td className="p-3.5 text-emerald-700 font-semibold">40% to 55% Principal</td>
                      <td className="p-3.5 text-emerald-700">Zero risk post NDC</td>
                      <td className="p-3.5">Marked Settled Rebuildable</td>
                      <td className="p-3.5 font-bold text-[#1886ff]">Optimal for acute financial distress</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-200/80">
                      <td className="p-3.5 font-bold text-slate-900">Loan Restructuring</td>
                      <td className="p-3.5">100% Principal + Interest</td>
                      <td className="p-3.5">Temporary relief high interest</td>
                      <td className="p-3.5">Marked Restructured</td>
                      <td className="p-3.5">Viable only if income recovers fast</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-200/80">
                      <td className="p-3.5 font-bold text-slate-900">Civil Court Litigation</td>
                      <td className="p-3.5 text-red-600">High fees + 100% claim</td>
                      <td className="p-3.5 text-red-600">Summons attachment risk</td>
                      <td className="p-3.5 text-red-600">Marked Suit Filed</td>
                      <td className="p-3.5">Expensive stressful court battle</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-200/80">
                      <td className="p-3.5 font-bold text-slate-900">Lok Adalat Compromise</td>
                      <td className="p-3.5">50% to 70% of Claim</td>
                      <td className="p-3.5 text-emerald-700">Binding decree zero appeals</td>
                      <td className="p-3.5">Marked Settled via Lok Adalat</td>
                      <td className="p-3.5">Good forum for consensual closure</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-200/80">
                      <td className="p-3.5 font-bold text-slate-900">Ignoring &amp; Inaction</td>
                      <td className="p-3.5 text-red-600">Compounding penal interest</td>
                      <td className="p-3.5 text-red-600">Severe agent harassment</td>
                      <td className="p-3.5 text-red-600">CIBIL ruined for 7 years</td>
                      <td className="p-3.5 text-red-600 font-bold">Worst choice leads to vulnerability</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 4: Technical CIBIL Algorithm & Scoring Math */}
            <section id="cibil-algorithm-credit-impact" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <CreditCard className="w-4 h-4 text-[#1886ff]" />
                <span>Credit Bureau Architecture</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. Technical CIBIL Algorithm &amp; Credit Score Impact
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                CIBIL aur credit bureaus 5 factors evaluate karti hain: Payment History (35%), Credit Utilization (30%), History Age (15%), Credit Mix (10%), aur Inquiries (10%).
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Jab default 90 days cross karta hai, payment history scoring collapse hone se score 100 se 250 points plunge kar jata hai. Unresolved default par bank Written Off status report karta hai jo 7 saal tak fresh credit block kar deta hai.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Compromise OTS execute karne par status Settled mark hota hai. Section 21 CICRA Act ke tehat balance dispute karke status Closed karwaya ja sakta hai, jisse 12-24 mahine mein score 750+ rebuild ho jata hai.
              </p>
            </section>

            {/* SECTION 5: Visual Infographic Asset Card */}
            <section id="infographic-overview" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Sparkles className="w-4 h-4 text-[#1886ff]" />
                <span>Visual Resolution Blueprint</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Visual Blueprint: Personal Loan Default &amp; Resolution Roadmap
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Neeche diye gaye visual roadmap mein personal loan delinquency ke 6-stage lifecycle ko explain kiya gaya hai:
              </p>

              <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-3 md:p-4 overflow-hidden">
                <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-slate-100">
                  <Image
                    src="/images/infographics/personal-loan-na-chukane-par-kya-hota-hai.jpg"
                    alt="Personal Loan Default Legal Rights and NPA Resolution Roadmap India"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 60vw"
                    priority
                  />
                </div>
                <div className="mt-3 px-2 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2">
                  <span>CredSettle Legal Defense Framework • RBI IRACP Norms</span>
                  <a
                    href="/images/infographics/personal-loan-na-chukane-par-kya-hota-hai.jpg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1886ff] hover:underline font-bold flex items-center gap-1"
                  >
                    <span>View High-Resolution Infographic</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </section>

            {/* SECTION 6: 6-Stage Standard Operating Procedure (SOP) with Rich Paragraphs */}
            <section id="step-by-step-ots-sop" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Award className="w-4 h-4 text-[#1886ff]" />
                <span>Standard Operating Procedure</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. Step-by-Step SOP: 6 Stages of Personal Loan Resolution &amp; OTS
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Personal loan default ko smoothly resolve karne aur harassment se permanent relief pane ke liye CredSettle ka 6-stage SOP follow karein:
              </p>

              <div className="space-y-4 pt-2">
                {/* Stage 1 */}
                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 01
                    </span>
                    <span className="text-xs text-slate-500 font-semibold">Days 1–15</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900">
                    Forensic Account Audit
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Bank se Statement of Account procure karke principal ko artificial penal interest aur unapproved charges se alag karein.
                  </p>
                </div>

                {/* Stage 2 */}
                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 02
                    </span>
                    <span className="text-xs text-slate-500 font-semibold">Days 16–30</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900">
                    Hardship Dossier Compilation
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Job loss termination slip, medical discharge summary, ya business loss report assemble karke hardship representation tayar karein.
                  </p>
                </div>

                {/* Stage 3 */}
                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 03
                    </span>
                    <span className="text-xs text-slate-500 font-semibold">Days 31–60</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900">
                    Credit Committee Engagement
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    External recovery call centers ko bypass karke direct bank ke Credit Committee aur Nodal Officers se settlement initiate karein.
                  </p>
                </div>

                {/* Stage 4 */}
                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 04
                    </span>
                    <span className="text-xs text-slate-500 font-semibold">Days 61–120</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900">
                    Bilateral Negotiations
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Hardship precedents cite karke 100% penal waiver aur principal balance par 40% se 55% tak compromise discount negotiate karein.
                  </p>
                </div>

                {/* Stage 5 */}
                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2.5 py-1 rounded-md">
                      Stage 05
                    </span>
                    <span className="text-xs text-slate-500 font-semibold">Days 121–150</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900">
                    Sanction Letter Legal Vetting
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Bank se official OTS sanction letter lekar verify karein ki letter mein agreed amount aur legal withdrawal terms clearly stated hon.
                  </p>
                </div>

                {/* Stage 6 */}
                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">
                      Stage 06
                    </span>
                    <span className="text-xs text-slate-500 font-semibold">Days 151–180</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900">
                    Remittance &amp; NDC Procurement
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Agreed amount direct bank loan account mein deposit karein, unconditional No Dues Certificate lein, aur CIBIL update ensure karein.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: Statutory Notice Defense & Legal Rights */}
            <section id="statutory-notices-legal-defense" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Notice Defense</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. Statutory Notice Defense: What Banks Can &amp; Cannot Legally Do
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Loan default hone par bank statutory notices issue karti hai jinka timely reply dena zaroori hai:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                {/* Notice 1 */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#1886ff] bg-blue-50 px-2 py-0.5 rounded">
                      Section 25 PSSA 2007
                    </span>
                    <span className="text-[11px] font-semibold text-amber-600">NACH Bounce</span>
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-slate-900">
                    Payment Systems Act Notice
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Auto-debit bounce par 15 din ka notice milta hai. Formal reply bhejkar financial hardship aur lack of criminal intent prove kiya jata hai.
                  </p>
                </div>

                {/* Notice 2 */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded">
                      Section 138 NI Act 1881
                    </span>
                    <span className="text-[11px] font-semibold text-red-600">Cheque Dishonour</span>
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-slate-900">
                    Negotiable Instruments Notice
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Security cheque bounce par 15 din mein reply file karein. Supreme Court ke Dashrath Rupsingh Rathod ruling ke mutabik misuse contest karein.
                  </p>
                </div>

                {/* Notice 3 */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                      Section 21 Arbitration Act
                    </span>
                    <span className="text-[11px] font-semibold text-emerald-600">Quasi-Judicial</span>
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-slate-900">
                    Arbitration Invocation
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Supreme Court Perkins Eastman ruling ke tehat unilateral arbitrator appointment voidable hoti hai, jisse contest karke settlement banti hai.
                  </p>
                </div>

                {/* Notice 4 */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-800 bg-slate-100 px-2 py-0.5 rounded">
                      DRT Section 19
                    </span>
                    <span className="text-[11px] font-semibold text-slate-500">Above ₹20 Lakhs</span>
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-slate-900">
                    Debt Recovery Tribunal
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Bada loan exposure hone par bank DRT move karti hai. Written Statement file karke matter Lok Adalat conciliation ke liye refer karwayein.
                  </p>
                </div>
              </div>

              <div className="bg-blue-50/70 border border-blue-200/80 p-4 rounded-xl text-xs md:text-sm text-slate-700 leading-relaxed space-y-2">
                <div className="flex items-center gap-2 text-[#1886ff] font-bold">
                  <BadgeAlert className="w-4 h-4" />
                  <span>RBI Fair Practices Code Anti-Harassment Safeguards</span>
                </div>
                <p className="text-slate-600 text-xs">
                  RBI rules ke mutabik recovery agents subah 8 baje se pehle aur shaam 7 baje ke baad call nahi kar sakte, abusive language use nahi kar sakte, aur bina ID card visit nahi kar sakte.
                </p>
              </div>
            </section>

            {/* SECTION 8: 3-Tier Grievance & High Court Escalation Matrix */}
            <section id="three-tier-grievance-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff]" />
                <span>Regulatory Grievance Redressal</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. 3-Tier Grievance Redressal Matrix for Unlawful Harassment
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Agar recovery agents RBI guidelines violate karte hain, toh structured 3-tier statutory escalation follow karein:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <span className="text-xs font-bold text-[#1886ff]">Tier 1: Bank GRO</span>
                  <h3 className="text-sm font-bold text-slate-900">Grievance Officer</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Harassment calls ke audio proofs aur numbers ke sath bank ke Grievance Officer ko formal complaint lodge karein.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <span className="text-xs font-bold text-indigo-700">Tier 2: Bank PNO</span>
                  <h3 className="text-sm font-bold text-slate-900">Principal Nodal Officer</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Branch se relief na milne par zonal Principal Nodal Officer ko escalate karein jinke paas agency contract cancel karne ki authority hoti hai.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-emerald-700 shadow-xs space-y-2">
                  <span className="text-xs font-bold text-emerald-700">Tier 3: RBI Ombudsman</span>
                  <h3 className="text-sm font-bold text-slate-900">Integrated Ombudsman</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    30 din mein relief na milne par cms.rbi.org.in par complaint file karein jaha Ombudsman direct penalty impose karta hai.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 9: Chronological Timeline Table */}
            <section id="chronological-timeline-milestones" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Clock className="w-4 h-4 text-[#1886ff]" />
                <span>Milestone Trajectory</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. Chronological Timeline: Procedural Milestones from Default to NDC
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Personal loan default hone par procedural progression chronological milestones ke through unfold hota hai:
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-left text-xs md:text-sm border-collapse">
                  <thead className="bg-slate-50 border-b border-slate-200/80 text-slate-700">
                    <tr className="divide-x divide-slate-200/80">
                      <th className="p-3.5 font-bold">Milestone</th>
                      <th className="p-3.5 font-bold">Timeline</th>
                      <th className="p-3.5 font-bold">Bank Classification</th>
                      <th className="p-3.5 font-bold">Strategic Borrower Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-600">
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-200/80">
                      <td className="p-3.5 font-bold text-slate-900">SMA-0 Stage</td>
                      <td className="p-3.5">Days 1–30</td>
                      <td className="p-3.5">Automated late fees, bounce SMS</td>
                      <td className="p-3.5">Assess financial health, stop auto-debits</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-200/80">
                      <td className="p-3.5 font-bold text-slate-900">SMA-1 / SMA-2</td>
                      <td className="p-3.5">Days 31–90</td>
                      <td className="p-3.5">Collection agency tele-calling</td>
                      <td className="p-3.5">Record calls, assemble hardship proof</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-200/80">
                      <td className="p-3.5 font-bold text-slate-900">NPA Declaration</td>
                      <td className="p-3.5">Day 90+</td>
                      <td className="p-3.5">Substandard NPA, 15% provision</td>
                      <td className="p-3.5">Submit formal compromise OTS representation</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-200/80">
                      <td className="p-3.5 font-bold text-slate-900">Statutory Notices</td>
                      <td className="p-3.5">Days 90–150</td>
                      <td className="p-3.5">Sec 25 / Sec 138 / Arbitration</td>
                      <td className="p-3.5">Serve structured legal reply contesting claims</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 divide-x divide-slate-200/80">
                      <td className="p-3.5 font-bold text-slate-900">Settlement &amp; NDC</td>
                      <td className="p-3.5">Days 150–180</td>
                      <td className="p-3.5">Sanction OTS, issue NDC</td>
                      <td className="p-3.5 font-bold text-emerald-700">Direct payment, obtain NDC, update CIBIL</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: Specialized Real-World Scenarios with Rich Paragraphs */}
            <section id="specialized-default-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>Practical Scenarios</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Specialized Real-World Personal Loan Default Scenarios
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Different financial crisis situations mein customized legal defense aur settlement strategy apply hoti hai:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                {/* Scenario 1 */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-[#1886ff] font-bold text-sm">
                    <CreditCard className="w-4 h-4" />
                    <span>Multi-Lender Portfolio</span>
                  </div>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Multiple loans default hone par legal notice urgency ke basis par sequential OTS execute kiya jata hai.
                  </p>
                </div>

                {/* Scenario 2 */}
                <div className="bg-white p-5 rounded-2xl border border-indigo-700 font-bold text-sm">
                  <div className="flex items-center gap-2">
                    <UserCheck className="w-4 h-4" />
                    <span>Job Loss &amp; Layoffs</span>
                  </div>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Salaried professionals layoff mein severance slips submit karke 55% tak principal discount secure kar sakte hain.
                  </p>
                </div>

                {/* Scenario 3 */}
                <div className="bg-white p-5 rounded-2xl border border-amber-700 font-bold text-sm">
                  <div className="flex items-center gap-2">
                    <Building2 className="w-4 h-4" />
                    <span>Business Downturn</span>
                  </div>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Business owners GST cancellation aur losses present karke commercial distress ke tehat low-ticket OTS le sakte hain.
                  </p>
                </div>

                {/* Scenario 4 */}
                <div className="bg-white p-5 rounded-2xl border border-emerald-700 font-bold text-sm">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4" />
                    <span>ARC Debt Assignments</span>
                  </div>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Jab bad loans ARCs ko sell hote hain, tab ARCs deep OTS concessions readily offer karti hain.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 11: Company Profile Component */}
            <div id="company-profile" className="scroll-target">
              <CompanySection />
            </div>

            {/* SECTION 12: 10 Synchronized FAQs */}
            <section id="frequently-asked-questions" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <HelpCircle className="w-4 h-4 text-[#1886ff]" />
                <span>Frequently Asked Questions</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Frequently Asked Questions on Personal Loan Default &amp; Settlement
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Personal loan default aur legal rights se related critical questions ke authoritative answers:
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
                        type="button"
                        onClick={() => toggleFaq(index)}
                        className="w-full p-4 md:p-5 text-left flex items-center justify-between gap-3 hover:bg-slate-50/50 transition-colors"
                      >
                        <span className="text-sm md:text-base font-bold text-slate-900">
                          {faq.q}
                        </span>
                        <ChevronDown
                          className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-200 ${
                            isOpen ? 'transform rotate-180 text-[#1886ff]' : ''
                          }`}
                        />
                      </button>
                      {isOpen && (
                        <div className="px-4 pb-4 md:px-5 md:pb-5 pt-1 text-xs md:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>

            {/* SECTION 13: Citations & Outbound Authority Grid */}
            <section id="regulatory-sources" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Authority &amp; References</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Statutory Citations &amp; Regulatory Authorities
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Yeh legal breakdown primary Indian banking laws aur regulatory directives par based hai:
              </p>

              <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2 text-xs text-slate-600 leading-relaxed">
                <ul className="space-y-1.5 list-disc list-inside">
                  <li><strong>RBI IRACP Directions (2021/2023):</strong> Norms on asset classification and provisioning.</li>
                  <li><strong>RBI Fair Practices Code (2022/2023):</strong> Guidelines prohibiting recovery harassment.</li>
                  <li><strong>Section 25, PSSA 2007:</strong> Electronic NACH mandate dishonor framework.</li>
                  <li><strong>Section 138, NI Act 1881:</strong> Cheque dishonour notice procedures.</li>
                  <li><strong>Arbitration Act 1996:</strong> Unilateral appointment restrictions.</li>
                  <li><strong>CICRA 2005:</strong> Bureau reporting standards and remediation.</li>
                </ul>
              </div>

              {/* 6 Outbound Authority Badges */}
              <div className="space-y-2 pt-2">
                <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                  Official Regulatory Portals:
                </span>
                <div className="flex flex-wrap gap-2">
                  <a
                    href="https://rbi.org.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 font-semibold border border-slate-200/80 transition-colors"
                  >
                    <span>Reserve Bank of India (rbi.org.in)</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a
                    href="https://cms.rbi.org.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 font-semibold border border-slate-200/80 transition-colors"
                  >
                    <span>RBI Ombudsman (cms.rbi.org.in)</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a
                    href="https://www.cibil.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 font-semibold border border-slate-200/80 transition-colors"
                  >
                    <span>TransUnion CIBIL (cibil.com)</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a
                    href="https://www.indiacode.nic.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 font-semibold border border-slate-200/80 transition-colors"
                  >
                    <span>India Code (indiacode.nic.in)</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a
                    href="https://nalsa.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 font-semibold border border-slate-200/80 transition-colors"
                  >
                    <span>NALSA (nalsa.gov.in)</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a
                    href="https://cybercrime.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 font-semibold border border-slate-200/80 transition-colors"
                  >
                    <span>Cyber Crime (cybercrime.gov.in)</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* 10 Internal Topic Badges */}
              <div className="space-y-2 pt-2">
                <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                  Related Debt Resolution Topics:
                </span>
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
                  <Link href="/bank-recovery-case-in-court" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Bank Court Recovery Cases
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
                Specialized in banking regulations, personal loan dispute resolution, and NPA compromise negotiations across Indian banking forums.
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
                  Facing Personal Loan Default?
                </h3>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our debt resolution specialists stop agent harassment, defend legal notices, and negotiate a 40% to 55% compromise settlement.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Get Free Settlement Consultation
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
                  <span className="text-[10px] text-slate-400 mt-1 block">Challenge unilateral appointment &rarr;</span>
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
