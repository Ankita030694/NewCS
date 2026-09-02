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
  DollarSign,
  Check,
  Lock,
  Phone,
  CreditCard,
  Briefcase,
  Bookmark,
  ArrowRight,
  Sparkles,
  Gavel,
  Landmark,
  Layers,
  Calendar,
  ShieldAlert
} from 'lucide-react';

export default function CreditCardNpaTimelineClient() {
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
    { id: 'npa-classification-dynamics', label: '1. NPA Dynamics & IRACP Norms' },
    { id: 'financial-penalties-math', label: '2. Interest Inflation & Settlement Math' },
    { id: 'delinquency-resolution-matrix', label: '3. Debt Resolution Comparison Table' },
    { id: 'cibil-scoring-trajectory', label: '4. CIBIL Algorithm & DPD Impacts' },
    { id: 'infographic-timeline', label: 'Visual Delinquency Infographic' },
    { id: 'six-stage-resolution-sop', label: '5. 6-Stage Resolution SOP' },
    { id: 'statutory-legal-defense', label: '6. Legal Rights & Notice Defense' },
    { id: 'grievance-escalation-hierarchy', label: '7. 3-Tier Grievance Hierarchy' },
    { id: 'chronological-milestones-table', label: '8. Chronological Timeline Table' },
    { id: 'complex-borrower-scenarios', label: '9. Real-World Borrower Scenarios' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-citations', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
    {
      q: 'When does a credit card account become an NPA in India?',
      a: 'Under RBI IRACP norms, a credit card becomes an NPA when the Minimum Amount Due remains unpaid for over 90 consecutive days past due date.'
    },
    {
      q: 'What are the SMA stages before a credit card turns into an NPA?',
      a: 'Delinquency progresses across SMA-0 (1-30 days), SMA-1 (31-60 days), and SMA-2 (61-90 days), after which the account enters Substandard NPA status.'
    },
    {
      q: 'What happens to interest and penal charges once a credit card becomes NPA?',
      a: 'Banks must stop booking unrealized interest to income under RBI rules. Accumulated penal charges and finance fees are 100% waived during settlement negotiations.'
    },
    {
      q: 'Can recovery agents visit my home or office during the NPA timeline?',
      a: 'While banks assign agencies during SMA-2 and NPA stages, agents must obey the RBI Fair Practices Code, prohibiting harassment and visits outside 8:00 AM to 7:00 PM.'
    },
    {
      q: 'Can I go to jail or face arrest if my credit card becomes an NPA?',
      a: 'No. Unsecured card default is strictly a civil dispute. Banks cannot arrest borrowers for genuine financial distress, provided no fraud or dishonored cheques occurred.'
    },
    {
      q: 'When is the optimal time to negotiate a One-Time Settlement (OTS)?',
      a: 'The prime window begins between 120 and 180 days post-default, when bank 15% to 25% provisioning rules incentivize credit committees to grant 40% to 55% waivers.'
    },
    {
      q: 'What legal notices can a bank send after a credit card becomes NPA?',
      a: 'Banks may issue a Loan Recall Notice, Section 25 PSSA notice for bounced auto-debits, Section 138 NI Act notice for bounced cheques, or Section 21 Arbitration notices.'
    },
    {
      q: 'How does credit card NPA classification impact my CIBIL score?',
      a: 'An NPA classification causes a score drop of 150 to 250 points. Completing an OTS stops negative reporting, allowing score recovery to 750+ within 12 to 18 months.'
    },
    {
      q: 'Can a bank freeze my savings account if my credit card becomes NPA?',
      a: "Yes. Under Section 171 of the Indian Contract Act, banks can exercise a general banker's lien against savings in the same bank, making external accounts vital."
    },
    {
      q: 'What document proves that my credit card NPA has been fully resolved?',
      a: 'Complete legal discharge is confirmed exclusively by an official, signed No Dues Certificate (NDC) or Settlement Closure Letter issued by the bank, confirming zero residual liability.'
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold uppercase tracking-wider text-blue-100 mb-4">
            <ShieldAlert className="w-3.5 h-3.5 text-blue-300" />
            <span>RBI Prudential Norms &amp; Asset Classification</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            When Does a Credit Card Become NPA? Delinquency Stages &amp; Resolution
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-3xl mx-auto font-normal text-white/95 leading-relaxed">
            Understand the exact 90-day transition of credit card debt from SMA-0 to Substandard NPA in India, covering provisioning rules, collection escalation, and optimal OTS timing.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Facing Credit Card NPA Escalation? Get Legal Defense</span>
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
                  <span>RBI Compliance Advisory</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Governed by Master Direction on IRACP Norms and Fair Practices Code.
                </p>
              </div>
            </div>
          </aside>

          {/* ================= MIDDLE COLUMN: MAIN CONTENT ================= */}
          <div className="space-y-8 md:space-y-10 min-w-0">
            
            {/* Executive Brief Box */}
            <div
              id="quick-crux"
              className="scroll-target rounded-2xl bg-[#F4F8FE] border border-blue-100/90 border-l-[5px] border-l-[#1886ff] p-5 sm:p-6 md:p-7 shadow-xs space-y-3.5 text-slate-800"
            >
              <div className="flex items-center gap-2 text-xs md:text-sm font-black uppercase tracking-wider text-[#1886ff]">
                <Bookmark className="w-4 h-4 text-[#1886ff]" />
                <span>EXECUTIVE BRIEF: CREDIT CARD NPA TIMELINE &amp; RESOLUTION</span>
              </div>

              <ul className="space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">90-Day Statutory Threshold:</strong> Cards become NPAs when the Minimum Amount Due remains unpaid for 90 days past due date under RBI IRACP rules.
                  </div>
                </li>

                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Three SMA Stages:</strong> Delinquency moves across SMA-0 (1-30 days), SMA-1 (31-60 days), and SMA-2 (61-90 days) pre-NPA categories.
                  </div>
                </li>

                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Bank Provisioning:</strong> NPA status mandates 15% capital provisioning, rising to 25%-40% for doubtful debt.
                  </div>
                </li>

                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">SARFAESI Immunity:</strong> Unsecured card debt cannot be recovered via SARFAESI property attachment without a court decree.
                  </div>
                </li>

                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Prime OTS Window (Days 120-180):</strong> Banks offer maximum compromise waivers after NPA classification to mitigate provisioning burdens.
                  </div>
                </li>

                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">100% Penal Waiver:</strong> Compounding finance fees (45% APR) and late charges are eliminated, settling dues at 40%-55% of principal.
                  </div>
                </li>

                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Anti-Harassment Rights:</strong> Recovery agencies must strictly obey the RBI Fair Practices Code regarding calling hours and conduct.
                  </div>
                </li>

                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">No Dues Certificate:</strong> Full legal discharge is established exclusively through an official signed bank No Dues Certificate.
                  </div>
                </li>
              </ul>
            </div>

            {/* SECTION 1: NPA Classification Dynamics & IRACP Norms */}
            <section id="npa-classification-dynamics" className="scroll-target space-y-3">
              <div className="flex items-center gap-2 text-[#1886ff] font-extrabold text-sm uppercase tracking-wider">
                <Landmark className="w-4 h-4" />
                <span>Section 1: Regulatory Framework</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
                Debt Economics &amp; NPA Classification Dynamics
              </h2>

              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                In Indian banking, credit card delinquency is governed by the Reserve Bank of India Master Direction on IRACP Norms. Unlike term loans with fixed EMIs, credit cards operate as revolving credit facilities. Under RBI rules, an account defaults into non-performing asset status when the Minimum Amount Due (MAD) remains unpaid for more than 90 consecutive days past the scheduled due date. Before reaching this point, lenders monitor default across three Special Mention Account tiers: SMA-0 (1-30 days), SMA-1 (31-60 days), and SMA-2 (61-90 days).
              </p>

              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                Crossing day 90 triggers reclassification to Substandard NPA, requiring banks to set aside a mandatory 15% capital provision directly from profits. Unsecured cards cannot be enforced through rapid collateral seizure under the SARFAESI Act, creating commercial pressure on credit committees to approve structured One-Time Settlement (OTS) waivers to release capital reserves.
              </p>
            </section>

            {/* SECTION 2: Financial Breakdown & Settlement Math */}
            <section id="financial-penalties-math" className="scroll-target space-y-3">
              <div className="flex items-center gap-2 text-[#1886ff] font-extrabold text-sm uppercase tracking-wider">
                <DollarSign className="w-4 h-4" />
                <span>Section 2: Financial Breakdown</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
                Interest Inflation, Penalty Compounding &amp; Settlement Math
              </h2>

              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                Missed card payments trigger compounding finance charges of 42% to 54% annualized, monthly late fees, and 18% GST. Within 180 days, a core utilized principal of ₹5,00,000 frequently inflates into a claimed demand of ₹8,50,000, representing over 70% penalty inflation.
              </p>

              {/* Financial Calculation Card */}
              <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs p-3.5 space-y-2">
                <h3 className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-1.5">
                  <CreditCard className="w-4 h-4 text-[#1886ff]" />
                  <span>Representative 180-Day NPA Trajectory (₹5,00,000 Exposure)</span>
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                  <div className="p-2 rounded-xl bg-slate-50 border border-slate-200/60">
                    <span className="text-slate-500 text-[11px] block">Principal</span>
                    <strong className="text-slate-900 font-extrabold">₹5,00,000</strong>
                  </div>
                  <div className="p-2 rounded-xl bg-red-50/60 border border-red-200/60">
                    <span className="text-red-700 text-[11px] block">Finance Fees</span>
                    <strong className="text-red-900 font-extrabold">+ ₹2,45,000</strong>
                  </div>
                  <div className="p-2 rounded-xl bg-amber-50/60 border border-amber-200/60">
                    <span className="text-amber-800 text-[11px] block">Late Fees &amp; GST</span>
                    <strong className="text-amber-950 font-extrabold">+ ₹1,05,000</strong>
                  </div>
                  <div className="p-2 rounded-xl bg-blue-50/70 border border-blue-200/60">
                    <span className="text-[#1886ff] text-[11px] block">Total Claim</span>
                    <strong className="text-blue-950 font-extrabold">₹8,50,000</strong>
                  </div>
                </div>

                <div className="pt-1.5 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs">
                  <div className="text-slate-600">
                    <strong className="text-emerald-700 font-bold">Target Settlement:</strong> ₹2,25,000 to ₹2,75,000 (100% penal waiver plus 45%-55% principal discount).
                  </div>
                  <span className="inline-flex items-center gap-1 font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full text-xs">
                    <CheckCircle2 className="w-3 h-3" /> 67% Relief
                  </span>
                </div>
              </div>

              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                Under RBI accounting norms, banks stop booking unrealized interest once an account becomes an NPA. CredSettle eliminates these penal charges, using net principal as the baseline for aggressive settlement discounts.
              </p>
            </section>

            {/* SECTION 3: 4-Sided Bordered Comparison Matrix */}
            <section id="delinquency-resolution-matrix" className="scroll-target space-y-3">
              <div className="flex items-center gap-2 text-[#1886ff] font-extrabold text-sm uppercase tracking-wider">
                <Scale className="w-4 h-4" />
                <span>Section 3: Strategic Comparison</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
                Comparison of Credit Card Debt Resolution Pathways
              </h2>

              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                Borrowers facing credit card delinquency must evaluate resolution options across financial cost, legal exposure, credit score consequences, and turnaround speed.
              </p>

              {/* 4-Sided Bordered Table */}
              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto shadow-xs bg-white">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="bg-slate-100/80 text-slate-900 font-bold border-b border-slate-200/80">
                      <th className="p-2 sm:p-2.5">Pathway</th>
                      <th className="p-2 sm:p-2.5">Cost Impact</th>
                      <th className="p-2 sm:p-2.5">Legal Risk</th>
                      <th className="p-2 sm:p-2.5">CIBIL Impact</th>
                      <th className="p-2 sm:p-2.5">Timeline</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-700">
                    <tr className="hover:bg-blue-50/30 transition-colors">
                      <td className="p-2 sm:p-2.5 font-bold text-slate-900">OTS Settlement</td>
                      <td className="p-2 sm:p-2.5 text-emerald-700 font-semibold">40%-55% Principal</td>
                      <td className="p-2 sm:p-2.5">Zero risk; NDC issued</td>
                      <td className="p-2 sm:p-2.5">Marked Settled (Rebuildable)</td>
                      <td className="p-2 sm:p-2.5 font-semibold text-slate-900">30-60 Days</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="p-2 sm:p-2.5 font-bold text-slate-900">EMI Restructure</td>
                      <td className="p-2 sm:p-2.5 text-slate-800">100% Principal + 15% Interest</td>
                      <td className="p-2 sm:p-2.5">Low immediate risk</td>
                      <td className="p-2 sm:p-2.5">Marked Restructured</td>
                      <td className="p-2 sm:p-2.5 font-semibold text-slate-900">24-48 Mos</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="p-2 sm:p-2.5 font-bold text-slate-900">Civil Court Suit</td>
                      <td className="p-2.5 text-red-700">Full claim + legal fees</td>
                      <td className="p-2.5 text-red-700">Decree &amp; attachment risk</td>
                      <td className="p-2.5">Active Suit Filed</td>
                      <td className="p-2.5 font-semibold text-slate-900">2-5+ Years</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="p-2 sm:p-2.5 font-bold text-slate-900">Lok Adalat</td>
                      <td className="p-2.5 sm:p-2.5 text-emerald-700 font-semibold">50%-65% of dues</td>
                      <td className="p-2.5 sm:p-2.5">Final decree without appeal</td>
                      <td className="p-2.5">Marked Settled</td>
                      <td className="p-2.5 font-semibold text-slate-900">1 Day</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="p-2 sm:p-2.5 font-bold text-slate-900">Inaction</td>
                      <td className="p-2.5 sm:p-2.5 text-red-700 font-semibold">Ballooning debt (48% APR)</td>
                      <td className="p-2.5 sm:p-2.5 text-red-700">Harassment &amp; banker lien</td>
                      <td className="p-2.5 sm:p-2.5 text-red-700 font-semibold">Written-Off (&lt;550)</td>
                      <td className="p-2.5 sm:p-2.5 font-semibold text-slate-900">Indefinite</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 4: Technical CIBIL Algorithm & Scoring Math */}
            <section id="cibil-scoring-trajectory" className="scroll-target space-y-3">
              <div className="flex items-center gap-2 text-[#1886ff] font-extrabold text-sm uppercase tracking-wider">
                <TrendingUp className="w-4 h-4" />
                <span>Section 4: Credit Bureau Mechanics</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
                Technical CIBIL Algorithm, Scoring Weights &amp; DPD Trajectory
              </h2>

              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                Credit bureaus (CIBIL, Experian, CRIF, Equifax) weight Payment History (35%) and Credit Utilization (30%) as 65% of your score. Delinquency across SMA-0 through SMA-2 causes progressive drops, culminating in a 150-250 point decline upon reaching 90+ DPD Substandard NPA status.
              </p>

              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                Completing an OTS stops monthly DPD reporting. Under Section 21 of CICRA 2005, borrowers can ensure accurate reporting of settled terms and restore scores above 750 within 12 to 18 months via disciplined secured card usage.
              </p>
            </section>

            {/* SECTION 5: Visual Infographic Asset Card */}
            <section id="infographic-timeline" className="scroll-target space-y-3">
              <div className="flex items-center gap-2 text-[#1886ff] font-extrabold text-sm uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                <span>Visual Blueprint</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
                Chronological Delinquency Stages &amp; NPA Progression
              </h2>

              <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden p-3">
                <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-slate-100">
                  <Image
                    src="/images/infographics/credit-card-npa-timeline.jpg"
                    alt="Credit Card NPA Timeline and Delinquency Stages Infographic"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 900px"
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="p-2 text-xs text-slate-500 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1 border-t border-slate-100 mt-2">
                  <span>Figure 1.0: 90-Day Delinquency Framework &amp; Provisioning Escalation.</span>
                  <a
                    href="/images/infographics/credit-card-npa-timeline.jpg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1886ff] font-bold hover:underline inline-flex items-center gap-1"
                  >
                    <span>View High-Res Infographic</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </section>

            {/* SECTION 6: Step-by-Step SOP (6 Stages) */}
            <section id="six-stage-resolution-sop" className="scroll-target space-y-3">
              <div className="flex items-center gap-2 text-[#1886ff] font-extrabold text-sm uppercase tracking-wider">
                <Layers className="w-4 h-4" />
                <span>Section 5: Standard Operating Procedure</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
                6-Stage Credit Card NPA Resolution &amp; Settlement SOP
              </h2>

              <div className="space-y-2 text-slate-700 text-sm">
                <div className="p-2.5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-0.5">
                  <h3 className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-1.5">
                    <span className="w-4 h-4 rounded-full bg-blue-100 text-[#1886ff] font-extrabold text-[10px] flex items-center justify-center">1</span>
                    <span>Stage 1: Forensic Portfolio Audit</span>
                  </h3>
                  <p className="leading-relaxed text-slate-600 text-xs">
                    We analyze 12-24 months of statements to separate core spent principal from compounding 45% APR interest, late fees, and GST levies to establish the baseline settlement value.
                  </p>
                </div>

                <div className="p-2.5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-0.5">
                  <h3 className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-1.5">
                    <span className="w-4 h-4 rounded-full bg-blue-100 text-[#1886ff] font-extrabold text-[10px] flex items-center justify-center">2</span>
                    <span>Stage 2: Hardship Dossier Compilation</span>
                  </h3>
                  <p className="leading-relaxed text-slate-600 text-xs">
                    We assemble documented proof of genuine financial hardship, such as medical records, layoff letters, business loss statements, or bank accounts verifying zero liquid assets.
                  </p>
                </div>

                <div className="p-2.5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-0.5">
                  <h3 className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-1.5">
                    <span className="w-4 h-4 rounded-full bg-blue-100 text-[#1886ff] font-extrabold text-[10px] flex items-center justify-center">3</span>
                    <span>Stage 3: Legal Representation Notice</span>
                  </h3>
                  <p className="leading-relaxed text-slate-600 text-xs">
                    We issue formal notices to the card issuer and Principal Nodal Officer under RBI Master Directions, requiring all communications to route through counsel and halting recovery visits.
                  </p>
                </div>

                <div className="p-2.5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-0.5">
                  <h3 className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-1.5">
                    <span className="w-4 h-4 rounded-full bg-blue-100 text-[#1886ff] font-extrabold text-[10px] flex items-center justify-center">4</span>
                    <span>Stage 4: Credit Committee Negotiations</span>
                  </h3>
                  <p className="leading-relaxed text-slate-600 text-xs">
                    Our debt resolution advocates represent your case before the bank SAMB recovery desk, leveraging 15%-40% provisioning mandates to secure an aggressive 40%-55% waiver.
                  </p>
                </div>

                <div className="p-2.5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-0.5">
                  <h3 className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-1.5">
                    <span className="w-4 h-4 rounded-full bg-blue-100 text-[#1886ff] font-extrabold text-[10px] flex items-center justify-center">5</span>
                    <span>Stage 5: Sanction Letter Verification</span>
                  </h3>
                  <p className="leading-relaxed text-slate-600 text-xs">
                    We examine the bank written settlement sanction letter to verify authorized signatory credentials, full-and-final discharge language, and zero residual liability terms.
                  </p>
                </div>

                <div className="p-2.5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-0.5">
                  <h3 className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-1.5">
                    <span className="w-4 h-4 rounded-full bg-blue-100 text-[#1886ff] font-extrabold text-[10px] flex items-center justify-center">6</span>
                    <span>Stage 6: Direct Remittance &amp; NDC Delivery</span>
                  </h3>
                  <p className="leading-relaxed text-slate-600 text-xs">
                    You remit settlement funds directly into your designated card account via NEFT/RTGS. We follow up to procure the signed No Dues Certificate and verify updated bureau records.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: Statutory Notice Defense & Legal Rights */}
            <section id="statutory-legal-defense" className="scroll-target space-y-3">
              <div className="flex items-center gap-2 text-[#1886ff] font-extrabold text-sm uppercase tracking-wider">
                <Gavel className="w-4 h-4" />
                <span>Section 6: Legal Defense</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
                Statutory Notice Defense &amp; Borrower Protection Rights
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                <div className="p-2.5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-1">
                  <div className="flex items-center gap-1.5 text-slate-900 font-bold text-xs sm:text-sm">
                    <FileText className="w-4 h-4 text-[#1886ff]" />
                    <span>Section 25 PSSA NACH Notice</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    When auto-debits bounce, banks issue Section 25 notices. Replying within 15 days demonstrating distress and settlement intent prevents magistrate summons and criminal escalation.
                  </p>
                </div>

                <div className="p-2.5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-1">
                  <div className="flex items-center gap-1.5 text-slate-900 font-bold text-xs sm:text-sm">
                    <AlertTriangle className="w-4 h-4 text-amber-600" />
                    <span>Section 138 NI Act Cheque Bounce</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If cheques bounce, lenders issue Section 138 notices. We draft formal replies contesting inflated claims and requesting Lok Adalat compromise resolution.
                  </p>
                </div>

                <div className="p-2.5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-1">
                  <div className="flex items-center gap-1.5 text-slate-900 font-bold text-xs sm:text-sm">
                    <Scale className="w-4 h-4 text-purple-600" />
                    <span>Arbitration Ineligibility</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under Supreme Court TRF Ltd. rulings, banks cannot unilaterally appoint a sole arbitrator. Such appointments are de jure invalid under Section 12(5).
                  </p>
                </div>

                <div className="p-2.5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-1">
                  <div className="flex items-center gap-1.5 text-slate-900 font-bold text-xs sm:text-sm">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>DRT Limits &amp; RBI Fair Code</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    DRT only handles claims of ₹20 Lakhs and above. Furthermore, RBI Fair Practices Code strictly prohibits verbal abuse, odd-hour calling, and employer contacts.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 8: 3-Tier Grievance Escalation Matrix */}
            <section id="grievance-escalation-hierarchy" className="scroll-target space-y-3">
              <div className="flex items-center gap-2 text-[#1886ff] font-extrabold text-sm uppercase tracking-wider">
                <Building2 className="w-4 h-4" />
                <span>Section 7: Regulatory Redressal</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
                3-Tier Grievance Escalation &amp; RBI Ombudsman Hierarchy
              </h2>

              <div className="space-y-2 text-xs sm:text-sm text-slate-700">
                <div className="p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-xs flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-lg bg-blue-50 text-[#1886ff] font-bold flex items-center justify-center flex-shrink-0 text-xs">
                    L1
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Level 1: Bank Grievance Redressal Officer (GRO)</h4>
                    <p className="text-slate-600 leading-relaxed text-xs">
                      Submit a formal written complaint detailing agent harassment and call logs. The GRO must provide a formal resolution within 7-10 working days.
                    </p>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-xs flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-lg bg-blue-50 text-[#1886ff] font-bold flex items-center justify-center flex-shrink-0 text-xs">
                    L2
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Level 2: Principal Nodal Officer (PNO)</h4>
                    <p className="text-slate-600 leading-relaxed text-xs">
                      If unresolved, escalate to the bank Principal Nodal Officer and Head of Collections to restrain agencies and initiate settlement talks.
                    </p>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-xs flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-lg bg-blue-50 text-[#1886ff] font-bold flex items-center justify-center flex-shrink-0 text-xs">
                    L3
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Level 3: RBI Integrated Ombudsman</h4>
                    <p className="text-slate-600 leading-relaxed text-xs">
                      If the bank does not resolve complaints within 30 days, lodge an online complaint via the RBI portal at <a href="https://cms.rbi.org.in" target="_blank" rel="noopener noreferrer" className="text-[#1886ff] font-bold hover:underline">cms.rbi.org.in</a>.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 9: Chronological Timeline Table */}
            <section id="chronological-milestones-table" className="scroll-target space-y-3">
              <div className="flex items-center gap-2 text-[#1886ff] font-extrabold text-sm uppercase tracking-wider">
                <Calendar className="w-4 h-4" />
                <span>Section 8: Procedural Timeline</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
                Chronological Delinquency Milestones (Day 1 to Resolution)
              </h2>

              {/* 4-Sided Bordered Timeline Table */}
              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto shadow-xs bg-white">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="bg-slate-100/80 text-slate-900 font-bold border-b border-slate-200/80">
                      <th className="p-2 sm:p-2.5">Timeline</th>
                      <th className="p-2 sm:p-2.5">Status</th>
                      <th className="p-2 sm:p-2.5">Bank Actions</th>
                      <th className="p-2 sm:p-2.5">Borrower Strategy</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-700">
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="p-2 sm:p-2.5 font-bold text-slate-900">Days 1 - 30</td>
                      <td className="p-2 sm:p-2.5 text-blue-700 font-semibold">SMA-0</td>
                      <td className="p-2 sm:p-2.5">SMS, email reminders, late fees</td>
                      <td className="p-2 sm:p-2.5">Pay minimum due if feasible; assess dues</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="p-2 sm:p-2.5 font-bold text-slate-900">Days 31 - 60</td>
                      <td className="p-2 sm:p-2.5 text-amber-700 font-semibold">SMA-1</td>
                      <td className="p-2 sm:p-2.5">Tele-calling, card blocked, finance fees</td>
                      <td className="p-2 sm:p-2.5">Protect salary account; consult debt experts</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="p-2 sm:p-2.5 font-bold text-slate-900">Days 61 - 90</td>
                      <td className="p-2 sm:p-2.5 text-orange-700 font-semibold">SMA-2</td>
                      <td className="p-2.5 sm:p-2.5">Agency assignment, pre-NPA warnings</td>
                      <td className="p-2 sm:p-2.5">Compile hardship dossier; prepare defense</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="p-2 sm:p-2.5 font-bold text-slate-900">Days 91 - 120</td>
                      <td className="p-2 sm:p-2.5 text-red-700 font-semibold">Substandard</td>
                      <td className="p-2 sm:p-2.5">15% provisioning, agency visits, Sec 25 notice</td>
                      <td className="p-2 sm:p-2.5">Serve representation; reply to notices</td>
                    </tr>
                    <tr className="hover:bg-blue-50/40 transition-colors">
                      <td className="p-2 sm:p-2.5 font-bold text-slate-900">Days 121 - 180+</td>
                      <td className="p-2 sm:p-2.5 text-emerald-700 font-semibold">Prime OTS</td>
                      <td className="p-2 sm:p-2.5">Desks authorized for compromise waivers</td>
                      <td className="p-2 sm:p-2.5 font-bold text-emerald-800">Negotiate 40%-55% waiver; get sanction letter</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="p-2 sm:p-2.5 font-bold text-slate-900">Month 6+</td>
                      <td className="p-2 sm:p-2.5 text-purple-700 font-semibold">Write-Off / ARC</td>
                      <td className="p-2 sm:p-2.5">Write-off, portfolio sale to ARC</td>
                      <td className="p-2 sm:p-2.5">Finalize settlement with bank/ARC; get NDC</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: Specialized Real-World Scenarios */}
            <section id="complex-borrower-scenarios" className="scroll-target space-y-3">
              <div className="flex items-center gap-2 text-[#1886ff] font-extrabold text-sm uppercase tracking-wider">
                <Briefcase className="w-4 h-4" />
                <span>Section 9: Real-World Case Studies</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
                Specialized Borrower Scenarios &amp; Tailored Strategies
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                <div className="p-2.5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-1">
                  <h3 className="font-bold text-slate-900 text-xs sm:text-sm">Scenario A: Multi-Card Cross-Default</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Defaults on one card trigger credit limit freezes across other banks. We prioritize settling salary bank accounts first to eliminate banker lien set-off risks before resolving secondary cards.
                  </p>
                </div>

                <div className="p-2.5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-1">
                  <h3 className="font-bold text-slate-900 text-xs sm:text-sm">Scenario B: Corporate Layoffs &amp; Job Loss</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    For employees facing sudden job loss, submitting severance letters secures temporary 60-day moratoriums on legal notices, allowing clients to accumulate settlement funds for closure.
                  </p>
                </div>

                <div className="p-2.5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-1">
                  <h3 className="font-bold text-slate-900 text-xs sm:text-sm">Scenario C: SME Proprietorship Crunch</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Proprietors using personal cards for business utilize audited GST filings to demonstrate commercial distress and negotiate deep principal waivers with bank recovery committees.
                  </p>
                </div>

                <div className="p-2.5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-1">
                  <h3 className="font-bold text-slate-900 text-xs sm:text-sm">Scenario D: ARC Debt Assignment</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Delinquent card debt sold to Asset Reconstruction Companies (such as Phoenix ARC) at steep discounts enables our legal negotiators to secure aggressive 60% to 75% compromise settlements.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 11: Company Profile Component */}
            <div id="company-profile" className="scroll-target pt-2">
              <CompanySection />
            </div>

            {/* SECTION 12: 10 Synchronized FAQs */}
            <section id="frequently-asked-questions" className="scroll-target space-y-3">
              <div className="flex items-center gap-2 text-[#1886ff] font-extrabold text-sm uppercase tracking-wider">
                <HelpCircle className="w-4 h-4" />
                <span>Frequently Asked Questions</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
                Frequently Asked Questions on Credit Card NPA &amp; Delinquency
              </h2>

              <div className="space-y-2 pt-1">
                {faqs.map((faq, index) => {
                  const isOpen = openFaq === index;
                  return (
                    <div
                      key={index}
                      className="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden transition-all duration-200"
                    >
                      <button
                        onClick={() => toggleFaq(index)}
                        className="w-full p-3 text-left flex items-center justify-between gap-3 font-bold text-slate-900 hover:text-[#1886ff] transition-colors text-xs sm:text-sm"
                      >
                        <span>{faq.q}</span>
                        <ChevronDown
                          className={`w-4 h-4 text-slate-400 flex-shrink-0 transition-transform duration-200 ${
                            isOpen ? 'rotate-180 text-[#1886ff]' : ''
                          }`}
                        />
                      </button>
                      {isOpen && (
                        <div className="px-3 pb-3 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-2">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>

            {/* SECTION 13: Citations & Outbound Authority Grid */}
            <section id="regulatory-citations" className="scroll-target space-y-3">
              <div className="flex items-center gap-2 text-[#1886ff] font-extrabold text-sm uppercase tracking-wider">
                <BookOpen className="w-4 h-4" />
                <span>Regulatory References</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                Statutory Citations &amp; Institutional Authorities
              </h2>

              <p className="text-slate-700 leading-relaxed text-xs">
                Our debt resolution advisory is anchored in Indian banking statutes, Supreme Court judicial precedents, and regulatory directives issued by the Reserve Bank of India.
              </p>

              <div className="p-3 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-1.5">
                <h3 className="font-bold text-slate-900 text-xs">Primary Statutory References:</h3>
                <ul className="space-y-0.5 text-xs text-slate-600">
                  <li>• <strong>RBI IRACP Master Directions:</strong> Prudential Norms on Income Recognition and Asset Classification.</li>
                  <li>• <strong>RBI Fair Practices Code:</strong> Directives on Conduct of Non-Banking Financial Companies and Banks.</li>
                  <li>• <strong>Section 25, Payment and Settlement Systems Act, 2007:</strong> Dishonor of electronic funds transfer instructions.</li>
                  <li>• <strong>Section 138, Negotiable Instruments Act, 1881:</strong> Dishonor of cheque for insufficiency of funds.</li>
                  <li>• <strong>Arbitration &amp; Conciliation Act, 1996:</strong> Sections 12(5), 16, 21, and Supreme Court rulings in TRF Ltd.</li>
                  <li>• <strong>CICRA 2005:</strong> Section 21 statutory rules for dispute redressal and credit reporting.</li>
                </ul>
              </div>

              {/* Outbound Authority Badges */}
              <div className="space-y-1 pt-1">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Official Regulatory Portals:</span>
                <div className="flex flex-wrap gap-1.5">
                  <a href="https://www.rbi.org.in" target="_blank" rel="noopener noreferrer" className="text-xs px-2.5 py-1 rounded-lg bg-white hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200 flex items-center gap-1 shadow-2xs">
                    <span>rbi.org.in</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                  <a href="https://cms.rbi.org.in" target="_blank" rel="noopener noreferrer" className="text-xs px-2.5 py-1 rounded-lg bg-white hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200 flex items-center gap-1 shadow-2xs">
                    <span>cms.rbi.org.in</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                  <a href="https://www.cibil.com" target="_blank" rel="noopener noreferrer" className="text-xs px-2.5 py-1 rounded-lg bg-white hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200 flex items-center gap-1 shadow-2xs">
                    <span>cibil.com</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                  <a href="https://www.indiacode.nic.in" target="_blank" rel="noopener noreferrer" className="text-xs px-2.5 py-1 rounded-lg bg-white hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200 flex items-center gap-1 shadow-2xs">
                    <span>indiacode.nic.in</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                  <a href="https://nalsa.gov.in" target="_blank" rel="noopener noreferrer" className="text-xs px-2.5 py-1 rounded-lg bg-white hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200 flex items-center gap-1 shadow-2xs">
                    <span>nalsa.gov.in</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                  <a href="https://cybercrime.gov.in" target="_blank" rel="noopener noreferrer" className="text-xs px-2.5 py-1 rounded-lg bg-white hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200 flex items-center gap-1 shadow-2xs">
                    <span>cybercrime.gov.in</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                </div>
              </div>

              {/* Internal Related Topic Badges */}
              <div className="space-y-1 pt-1">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Related CredSettle Legal Topics:</span>
                <div className="flex flex-wrap gap-1.5">
                  <Link href="/settle-multiple-credit-cards" className="text-[11px] px-2 py-0.5 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Settle Multiple Credit Cards
                  </Link>
                  <Link href="/credit-card-minimum-due-trap" className="text-[11px] px-2 py-0.5 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Credit Card Minimum Due Trap
                  </Link>
                  <Link href="/stop-credit-card-recovery-calls" className="text-[11px] px-2 py-0.5 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Stop Recovery Agent Calls
                  </Link>
                  <Link href="/can-i-go-to-jail-for-credit-card-debt" className="text-[11px] px-2 py-0.5 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Credit Card Jail Myths
                  </Link>
                  <Link href="/bank-sent-legal-notice-for-loan-what-to-do" className="text-[11px] px-2 py-0.5 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Bank Legal Notice Guide
                  </Link>
                  <Link href="/convert-settled-status-to-closed" className="text-[11px] px-2 py-0.5 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Convert Settled to Closed
                  </Link>
                  <Link href="/remove-settled-status-from-cibil" className="text-[11px] px-2 py-0.5 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Remove Settled from CIBIL
                  </Link>
                  <Link href="/get-noc-after-loan-settlement" className="text-[11px] px-2 py-0.5 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Get Bank NOC Certificate
                  </Link>
                  <Link href="/arbitration-notice-personal-loan-default" className="text-[11px] px-2 py-0.5 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Arbitration Defense
                  </Link>
                  <Link href="/lok-adalat-personal-loan-settlement" className="text-[11px] px-2 py-0.5 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Lok Adalat Settlement
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
                Specialized in banking compliance, credit card NPA dispute defense, IRACP guidelines, and bilateral debt resolution across Indian banking platforms.
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
                  Facing Credit Card NPA Escalation?
                </h3>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our legal debt resolution specialists halt aggressive collection calls, respond to statutory notices, and negotiate a 40% to 55% compromise settlement directly with bank credit desks.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Get Emergency NPA Debt Relief
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
              <h4 className="font-bold text-slate-900 text-sm">Related Debt Guides</h4>
              <div className="space-y-2.5">
                <Link
                  href="/settle-multiple-credit-cards"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    How to Settle Multiple Credit Cards
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Multi-lender resolution blueprint &rarr;</span>
                </Link>

                <Link
                  href="/credit-card-minimum-due-trap"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Credit Card Minimum Due Trap Explained
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Compounding interest math &rarr;</span>
                </Link>

                <Link
                  href="/stop-credit-card-recovery-calls"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Stop Credit Card Recovery Agent Harassment
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">RBI anti-harassment safeguards &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
