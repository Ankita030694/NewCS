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
  Briefcase,
  Bookmark,
  ArrowRight,
  Clock,
  UserCheck,
  Sparkles,
  Gavel,
  Landmark,
  Calendar
} from 'lucide-react';

export default function HospitalMedicalEmiDisputeClient() {
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
    { id: 'statutory-framework', label: '1. How Hospital Zero-Cost EMIs Work' },
    { id: 'rbi-kfs-cooling-off', label: '2. RBI KFS & Cooling-Off Exit Rights' },
    { id: 'cost-comparison-matrix', label: '3. Zero-Cost Pitch vs Real EMI Bill' },
    { id: 'unused-icu-cancellation', label: '4. Unused ICU & Cancelled Surgeries' },
    { id: 'visual-blueprint', label: '5. Visual Blueprint Infographic' },
    { id: 'step-by-step-sop', label: '6. Step-by-Step Dispute & Exit SOP' },
    { id: 'borrower-legal-rights', label: '7. Contract Act & Consumer Court Relief' },
    { id: 'escalation-matrix', label: '8. 3-Tier Escalation Matrix' },
    { id: 'procedural-timeline', label: '9. Billing Desk to Closure Timeline' },
    { id: 'specialized-scenarios', label: '10. Cashless, IVF & Dental EMI Cases' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
    {
      q: 'Is a hospital zero-cost medical EMI actually a personal loan on CIBIL?',
      a: 'Yes. Most zero-cost plans at hospital desks are real unsecured loans from a partner NBFC or bank. The lender links the full loan to your PAN and reports it to CIBIL, CRIF, Experian, and Equifax.'
    },
    {
      q: 'Can I cancel a hospital medical loan if the surgery or ICU stay is cancelled?',
      a: 'Yes. Under RBI Digital Lending rules (2025), you get at least one full day to exit with no exit fee. Even after that window, the hospital must send unused funds back to the NBFC to cut or close the loan.'
    },
    {
      q: 'What if the NBFC hid processing fees or interest inside a zero-cost medical plan?',
      a: 'Under RBI Circular RBI/2024-25/18, a lender cannot charge any fee left out of your signed Key Facts Statement (KFS). You can demand a full refund of hidden fees and report the lender to the RBI Ombudsman.'
    },
    {
      q: 'Can a hospital keep my unused ICU loan money while the NBFC keeps charging EMIs?',
      a: 'No. Section 65 of the Indian Contract Act bars a hospital from keeping funds paid for care that was not given. Send a joint notice to both the hospital and NBFC to adjust the loan balance right away.'
    },
    {
      q: 'Is a medical loan signed in panic at an ICU desk legally challengeable?',
      a: 'Yes. Section 16 of the Indian Contract Act treats consent taken during illness or high stress as undue influence if the terms are unfair. Consumer courts can void such loans and order a full refund.'
    },
    {
      q: 'What happens if my health insurer clears the cashless bill after I took a hospital EMI loan?',
      a: 'Once your insurer pays the bill, the hospital holds extra cash twice over. Ask for a written refund note showing the claim payout. Then tell the hospital to wire that extra sum back to your NBFC loan.'
    },
    {
      q: 'Can the NBFC hit my bank mandate multiple times in one month during a hospital dispute?',
      a: 'No. Hitting your NACH or UPI AutoPay mandate again and again to pile up bounce fees breaks fair lending rules. Also, RBI rules bar lenders from adding compound penal interest on late EMIs.'
    },
    {
      q: 'How do I remove a wrong default mark on CIBIL from a cancelled medical loan?',
      a: 'Send a written dispute to the NBFC and credit bureau with your hospital cancellation slip. Under RBI Circular RBI/2023-24/72, if they do not fix a wrong mark within 30 days, they owe you ₹100 per day.'
    },
    {
      q: 'Can I settle a genuine medical personal loan if illness stopped my income?',
      a: 'Yes. If you used the funds for real care and lost your pay while healing, you can ask for a One-Time Settlement (OTS). Lenders often cut penal fees and part of the principal when you show discharge papers.'
    },
    {
      q: 'How does CredSettle help resolve hospital zero-cost medical EMI disputes?',
      a: 'CredSettle checks your KFS and hospital bill, sends joint notices to the hospital and NBFC, and files RBI Ombudsman claims. We also protect your CIBIL score and secure a clean No Dues Certificate.'
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
            <span>RBI KFS, Digital Lending &amp; Patient Protection Rules</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Cancel Unused ICU Fintech Medical Credit &amp; Settle Dues
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            Did you sign a &quot;zero-cost&quot; medical EMI plan at a hospital desk? Now you face hidden fees or active EMIs for cancelled care. Learn how RBI KFS rules, exit rights, and Indian contract law help you cancel unused loans, fix CIBIL, and settle fairly.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Resolve Medical EMI Dispute</span>
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
                  <span>Statutory Patient Shield</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Protected under RBI Digital Lending Directions 2025, KFS Circular RBI/2024-25/18, and Indian Contract Act.
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
                <span>EXECUTIVE BRIEF: HOSPITAL ZERO-COST MEDICAL EMI DISPUTE RULES</span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Zero-Cost EMIs Are Real Personal Loans:</strong> Hospital point-of-care plans are unsecured NBFC or bank loans linked to your PAN and reported directly to CIBIL.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">No Fee Outside the Signed KFS:</strong> Under RBI Circular RBI/2024-25/18, lenders cannot charge any hidden subvention, platform fee, or insurance cost left out of your Key Facts Statement.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Mandatory Cooling-Off Exit Window:</strong> RBI Digital Lending Directions 2025 give you at least one full day (often three days) to exit the loan with zero foreclosure penalty.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Unused ICU &amp; Cancelled Care Refunds:</strong> Under Section 65 of the Indian Contract Act, a hospital cannot retain loan funds for cancelled surgery or excess ICU advances.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Joint Redressal &amp; CIBIL Protection:</strong> You can hold both the hospital and NBFC liable in Consumer Court and claim ₹100 per day under RBI rules for delayed CIBIL fixes.
                  </span>
                </li>
              </ul>
            </div>

            {/* SECTION 1: How Hospital Zero-Cost Medical EMI Loans Work */}
            <section id="statutory-framework" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Point-of-Care Medical Lending Structure</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. How Hospital Zero-Cost Medical EMI Loans Work
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Many large hospitals and clinics in India now keep loan desks right next to their billing counters. Staff pitch these plans as quick &quot;zero-cost medical EMIs&quot; during urgent care or surgery bookings.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                In truth, these plans are not hospital bills split into parts. A health app acts as a Lending Service Provider (LSP) for an RBI-regulated NBFC or bank. When you scan a QR code and share an OTP, you sign a real unsecured loan contract.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under the RBI Digital Lending Directions, 2025 (RBI/2025-26/36), lenders must send loan funds straight to your own bank account. However, RBI gives a strict carve-out for fixed end-use needs like medical care.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under this rule, the NBFC wires your sanctioned loan straight to the hospital&apos;s bank account. The cash must never sit in a third-party app wallet. Even though you never touch the cash, you must pay every EMI until the loan is closed or adjusted.
              </p>
            </section>

            {/* SECTION 2: RBI KFS Rules & Cooling-Off Exit Rights */}
            <section id="rbi-kfs-cooling-off" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Clock className="w-4 h-4 text-[#1886ff]" />
                <span>Mandatory Cost Disclosure &amp; Exit Protections</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. RBI KFS Rules &amp; Cooling-Off Exit Rights
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Two strict RBI rules protect families who sign hospital loans in a rush. Every bank and NBFC offering medical credit at a billing desk must obey both rules.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                First, RBI Circular RBI/2024-25/18 (April 15, 2024) makes a Key Facts Statement (KFS) mandatory before you sign. The KFS must show the exact loan sum, true Annual Percentage Rate (APR), upfront fees, and late charges in plain words.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If a lender leaves any fee out of the KFS, it cannot collect that fee from you. Also, RBI Circular RBI/2013-14/292 bars lenders from hiding interest inside big upfront fees or higher hospital bills to sell a &quot;zero-cost&quot; pitch.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Second, Chapter III, Para 10 of the RBI Digital Lending Directions, 2025 gives you a cooling-off period. This exit window lasts at least one full day and often runs for three days. Inside this window, you can exit with zero exit fee by paying back only the principal and daily APR.
              </p>
            </section>

            {/* SECTION 3: True Cost Audit: Zero-Cost Pitch vs Real EMI Bill */}
            <section id="cost-comparison-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                <span>Subvention Math &amp; Hidden Fee Audit</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. True Cost Audit: Zero-Cost Pitch vs Real EMI Bill
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Why do so many patients feel tricked after taking a zero-cost medical EMI? Often, the hospital agrees to pay the NBFC a 6% to 10% subvention cut. Instead of bearing that cost, some desks shift hidden fees back onto the patient.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                See how a ₹3,00,000 hospital bill split over 12 months grows costly when hidden cuts slip past a stressed family.
              </p>

              {/* Representative Cost Audit Card */}
              <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white shadow-xs">
                <div className="bg-slate-900 text-white p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-[#1886ff]" />
                    <span className="font-bold text-sm">Representative ₹3,00,000 Medical EMI Cost Audit</span>
                  </div>
                  <span className="text-xs text-blue-300 font-mono">12-Month Point-of-Care Plan</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80">
                    <thead>
                      <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-semibold">
                        <th className="p-3">Cost Component</th>
                        <th className="p-3">Verbal Desk Pitch</th>
                        <th className="p-3">Hidden Reality on Bill</th>
                        <th className="p-3 text-right">RBI Legal Validity</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200/80 text-slate-600">
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Hospital Treatment Cost</td>
                        <td className="p-3 font-mono">₹3,00,000</td>
                        <td className="p-3 font-mono">₹3,00,000 (or ₹3,24,000 inflated)</td>
                        <td className="p-3 text-right font-semibold text-amber-700">Price inflation banned</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Upfront Processing + 18% GST</td>
                        <td className="p-3 font-mono text-emerald-600">₹0 (&quot;Zero Cost&quot;)</td>
                        <td className="p-3 font-mono text-amber-600 font-bold">₹7,080 to ₹14,160</td>
                        <td className="p-3 text-right font-semibold text-rose-700">Illegal if missing in KFS</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Bundled Health / Credit Shield</td>
                        <td className="p-3 font-mono text-emerald-600">Not Mentioned</td>
                        <td className="p-3 font-mono text-rose-600 font-bold">₹6,500 added to loan</td>
                        <td className="p-3 text-right font-semibold text-rose-700">Void without opt-in</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Advance EMI Deduction</td>
                        <td className="p-3 font-mono">Starts next month</td>
                        <td className="p-3 font-mono text-rose-700 font-bold">1 to 2 EMIs cut upfront</td>
                        <td className="p-3 text-right font-semibold text-amber-700">Must raise true APR in KFS</td>
                      </tr>
                      <tr className="bg-blue-50/70 font-bold text-slate-900">
                        <td className="p-3">Effective Annual Cost (APR)</td>
                        <td className="p-3 font-mono text-emerald-700">0.0% Advertised</td>
                        <td className="p-3 font-mono text-rose-700">11% to 22% Hidden APR</td>
                        <td className="p-3 text-right text-[#1886ff]">Full KFS Refund Claimable</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* SECTION 4: Unused ICU Deposits & Cancelled Surgery Refunds */}
            <section id="unused-icu-cancellation" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <AlertTriangle className="w-4 h-4 text-[#1886ff]" />
                <span>Direct Disbursal Trapped Funds &amp; Restitution</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. Unused ICU Deposits &amp; Cancelled Surgery Refunds
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The hardest medical EMI disputes start when care plans change. Say a hospital quotes ₹4,00,000 for ICU care and pushes a full loan. Two days later, the patient heals fast or shifts hospitals, leaving a final bill of just ₹1,40,000.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Often, the hospital stalls the ₹2,60,000 refund for weeks or offers a store credit note. All the while, the NBFC keeps taking full monthly EMIs for ₹4,00,000 because its books still show the full loan active.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Indian law stops both sides from trapping you in the middle. Under Section 65 of the Indian Contract Act, 1872, anyone holding money for cancelled care must give it back fast. A hospital has no legal right to hold unused loan cash.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Once the hospital gives a final bill or cancel slip, it must wire the extra cash straight back to the NBFC loan account. Do not take vouchers or verbal words. Ask for the UTR transfer slip so the NBFC cuts your balance at once.
              </p>
            </section>

            {/* SECTION 5: Visual Blueprint Infographic */}
            <section id="visual-blueprint" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Sparkles className="w-4 h-4 text-[#1886ff]" />
                <span>Visual Blueprint</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. Visual Blueprint: Medical EMI Dispute &amp; Exit Flow
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This visual chart shows how RBI KFS rules, exit windows, and hospital refund duties work together. Use it to check your rights before you pay a disputed bill.
              </p>

              <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-slate-100 bg-slate-100">
                  <Image
                    src="/images/infographics/hospital-zero-cost-medical-emi-personal-loan-dispute.jpg"
                    alt="Hospital Zero-Cost Medical EMI Personal Loan Disputes and RBI KFS Rules"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 900px"
                    className="object-contain hover:scale-[1.01] transition-transform duration-300"
                    priority
                  />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-500 pt-1 gap-2">
                  <span>Official CredSettle Medical EMI Protection Framework • RBI KFS &amp; Digital Lending Compliant</span>
                  <a
                    href="/images/infographics/hospital-zero-cost-medical-emi-personal-loan-dispute.jpg"
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

            {/* SECTION 6: Step-by-Step SOP: Cancel or Settle Medical Loans */}
            <section id="step-by-step-sop" className="scroll-target space-y-6">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Standard Operating Procedure</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. Step-by-Step SOP: Cancel or Settle Medical Loans
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Follow these six clear steps to stop unfair deductions, recover unused hospital funds, or settle a genuine medical loan safely.
              </p>

              <div className="space-y-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">1</span>
                    Stage 1: Collect the KFS, Sanction Letter &amp; Itemized Bill
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Save your Key Facts Statement, loan paper, and Loan Account Number (LAN) from the app or email. Keep your full hospital bill, discharge note, and surgery cancel slip safe.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">2</span>
                    Stage 2: Trigger the Cooling-Off Exit Within the Window
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If your loan is within the 1 to 3 day cooling-off window, email the NBFC at once. Cite RBI Digital Lending rules (2025) and ask to close the loan with no exit fee.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">3</span>
                    Stage 3: Audit Hidden Subvention &amp; Bundled Insurance
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Check the exact cash paid to the hospital against your total loan sum. Flag any hidden upfront fee, subvention cut, or forced add-on cover, and ask for a refund in writing.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">4</span>
                    Stage 4: Demand Direct Hospital-to-NBFC UTR Transfer
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Give a written refund request to the hospital billing head for extra ICU cash or paid claims. Tell them to wire the surplus straight to the NBFC and give you the UTR slip.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">5</span>
                    Stage 5: Serve a Joint Notice to Hospital &amp; NBFC GRO
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If either side blames the other, send a joint legal notice to both the hospital head and the NBFC Grievance Officer. Ask them to pause EMIs and hold CIBIL marks during the check.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">6</span>
                    Stage 6: Escalate to RBI Ombudsman or Negotiate OTS
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    File a free claim at cms.rbi.org.in if the NBFC does not fix the issue in 30 days. If you used the funds and lost pay while ill, ask for a written One-Time Settlement and a clean NOC.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: Legal Rights: Contract Act & Consumer Court Relief */}
            <section id="borrower-legal-rights" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Remedies &amp; Judicial Safeguards</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. Legal Rights: Contract Act &amp; Consumer Court Relief
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Indian courts know that a stressed family outside an ICU cannot bargain on equal terms. Both contract law and consumer law give patients strong ways to beat unfair hospital loans.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                    <Gavel className="w-4 h-4" />
                    <span>Section 16 Contract Act: Undue Influence</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Section 16(2)(b) guards people who sign deals during illness or sharp stress. If the loan terms look unfair, Section 16(3) makes the hospital and lender prove they acted fairly.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                    <Building2 className="w-4 h-4" />
                    <span>Joint Hospital &amp; NBFC Consumer Liability</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under the Consumer Protection Act, 2019 and IMA v. V.P. Shantha (1995), paid care and NBFC loans are both covered services. Courts can hold both the hospital and lender liable together.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-purple-700 font-bold text-sm">
                    <Scale className="w-4 h-4" />
                    <span>Zero Compounding Penal Interest Rule</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under RBI Circular DoR.MCS.REC.28 (effective April 1, 2024), NBFCs cannot pile extra penal interest on top of your rate. Late fees must be flat, fair, and clearly shown in the KFS.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <ShieldCheck className="w-4 h-4" />
                    <span>₹100/Day CIBIL Rectification Penalty</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under RBI Circular RBI/2023-24/72, lenders and credit bureaus get 30 days to fix wrong default marks. Past 30 days, they owe you ₹100 each day until your report is clean.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 8: 3-Tier Escalation Matrix: NBFC GRO to Ombudsman */}
            <section id="escalation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Escalation Protocol</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. 3-Tier Escalation Matrix: NBFC GRO to Ombudsman
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Do not rely on phone calls with hospital front desks or fintech chat bots. Follow this three-tier written escalation path to build binding proof.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Escalation Tier</th>
                      <th className="p-3">Designated Authority</th>
                      <th className="p-3">Turnaround Time</th>
                      <th className="p-3">Scope of Relief</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 1: GRO &amp; Desk</td>
                      <td className="p-3">LSP / NBFC Grievance Officer &amp; Hospital Billing Head</td>
                      <td className="p-3 font-mono">7 to 10 Working Days</td>
                      <td className="p-3">Matches hospital refund UTR, cancels cooling-off loans, and reverses unlisted fees.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 2: PNO</td>
                      <td className="p-3">NBFC Principal Nodal Officer (Head Office)</td>
                      <td className="p-3 font-mono">14 to 21 Working Days</td>
                      <td className="p-3">Audits KFS gaps, pauses NACH mandates, and corrects wrong CIBIL DPD entries.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Level 3: Ombudsman / Forum</td>
                      <td className="p-3">RBI Integrated Ombudsman &amp; District Consumer Forum</td>
                      <td className="p-3 font-mono">30 Days Post-GRO</td>
                      <td className="p-3">Orders full loan cancellation, CIBIL cleanup, ₹100/day penalty, and mental agony damages.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 9: Dispute Timeline: Hospital Billing Desk to Closure */}
            <section id="procedural-timeline" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Calendar className="w-4 h-4 text-[#1886ff]" />
                <span>Procedural Milestones</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Dispute Timeline: Hospital Billing Desk to Closure
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Acting within the right legal window saves thousands in fees and prevents a single wrong EMI bounce from hurting your credit score.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Timeline Window</th>
                      <th className="p-3">Case Stage</th>
                      <th className="p-3">Hospital &amp; NBFC Duty</th>
                      <th className="p-3">Your Action Step</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 0</td>
                      <td className="p-3 font-mono text-[11px]">PoS Loan Sign-Up</td>
                      <td className="p-3">Must deliver standardized KFS showing true APR and exit window.</td>
                      <td className="p-3">Save KFS PDF, billing estimate, and agent chat screenshots.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 1 to 3</td>
                      <td className="p-3 font-mono text-[11px]">Cooling-Off Window</td>
                      <td className="p-3">Must allow zero-penalty cancellation under RBI 2025 Directions.</td>
                      <td className="p-3">Send written exit email immediately if treatment changes.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 4 to 15</td>
                      <td className="p-3 font-mono text-[11px]">Discharge Audit</td>
                      <td className="p-3">Hospital must settle final bill and refund excess ICU or TPA funds.</td>
                      <td className="p-3">Collect stamped refund memo and UTR transfer proof to NBFC.</td>
                    </tr>
                    <tr className="bg-amber-50/50">
                      <td className="p-3 font-bold text-slate-900">Day 16 to 30</td>
                      <td className="p-3 font-mono text-[11px] text-amber-700 font-bold">GRO Escalation</td>
                      <td className="p-3">NBFC must adjust loan principal, reverse unlisted fees, and reply.</td>
                      <td className="p-3 font-bold text-amber-800">Serve joint legal notice if hospital or NBFC stalls refund.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Day 31 to 60</td>
                      <td className="p-3 font-mono text-[11px] text-[#1886ff] font-bold">Ombudsman Filing</td>
                      <td className="p-3">Faces formal RBI CMS inquiry and consumer forum notice.</td>
                      <td className="p-3 font-bold text-slate-900">File on cms.rbi.org.in and demand ₹100/day CIBIL fix penalty.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 61+</td>
                      <td className="p-3 font-mono text-[11px] text-emerald-700 font-bold">Final Closure</td>
                      <td className="p-3">Issues No Dues Certificate and updates all four credit bureaus.</td>
                      <td className="p-3">Verify zero balance on CIBIL within 15 days under RBI fortnightly rules.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: Special Cases: Cashless Delays, IVF & Dental EMIs */}
            <section id="specialized-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>Specialized Real-World Cases</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                10. Special Cases: Cashless Delays, IVF &amp; Dental EMIs
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Hospital loan disputes show up in four common ways across India. Here is how banking and consumer laws protect you in each case.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-[#1886ff]" />
                    Delayed Cashless Health Insurance Claims
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under IRDAI Circular IRDAI/HLT/CIR/PRO/84/5/2024, insurers must clear cashless discharge within 3 hours. If a desk forced a bridge loan while you waited, ask for full loan reversal once the claim pays out.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Scale className="w-4 h-4 text-emerald-600" />
                    IVF, Dental &amp; Multi-Session Clinic Closures
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Many fertility, hair, and dental chains sell 12-month EMI packs upfront. If a clinic shuts down or halts sessions mid-way, demand a pro-rata loan cut for all missed visits.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-amber-600" />
                    Loans Signed Using Attendant or Relative PAN
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    In ICU crises, staff often ask a friend or sibling to share their Aadhaar and OTP. If consent was rushed with no clear KFS, challenge the loan under RBI rules and Section 16.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-indigo-600" />
                    Genuine Medical Hardship OTS Settlement
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If care was real but healing stopped your pay, do not hide from calls. Show your discharge papers to settle for 40% to 60% and stop agent threats legally.
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
                Frequently Asked Questions: Hospital Medical EMI Loans
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Get quick, clear answers on how to cancel unused ICU loans, check zero-cost medical EMIs, and keep your CIBIL score safe.
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
                  <strong>Reserve Bank of India (Digital Lending) Directions, 2025:</strong> RBI/2025-26/36, DOR.STR.REC.19/21.07.001/2025-26 (May 8, 2025), End-Beneficiary Disbursal Rules &amp; Chapter III Para 10 Mandatory Cooling-Off Period.
                </li>
                <li>
                  <strong>RBI Key Facts Statement (KFS) Circular:</strong> RBI/2024-25/18, DOR.STR.REC.13/13.03.00/2024-25 (April 15, 2024), Mandatory APR Disclosure and Ban on Unlisted Fees in Retail Term Loans.
                </li>
                <li>
                  <strong>RBI Zero-Percent Interest Schemes Directive:</strong> RBI/2013-14/292, DBS.CO.PPD No. 3578/11.01.005/2013-14 (September 17, 2013), Prohibition on Camouflaging Interest as Processing Fees or Inflated Bills.
                </li>
                <li>
                  <strong>RBI Penal Charges &amp; CIC Compensation Circulars:</strong> RBI/2023-24/53 (DoR.MCS.REC.28, Ban on Compounding Penal Interest) and RBI/2023-24/72 (DoR.FIN.REC.48, ₹100/Day Compensation for Delayed CIBIL Rectification).
                </li>
                <li>
                  <strong>IRDAI Master Circular on Health Insurance Business:</strong> IRDAI/HLT/CIR/PRO/84/5/2024 (May 29, 2024), 1-Hour Cashless Pre-Authorization and 3-Hour Final Discharge Approval Rules.
                </li>
                <li>
                  <strong>Indian Contract Act, 1872 &amp; Consumer Protection Act, 2019:</strong> Sections 14, 16, 18, 19A, and 65 (Undue Influence &amp; Restitution) and Sections 2(11), 2(47), and 39 read with IMA v. V.P. Shantha (1995).
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
                  <a href="https://sachet.rbi.org.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>RBI Sachet Lending Portal</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://irdai.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>IRDAI Health Insurance Regulator</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.indiacode.nic.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>India Code Statutory Repository</span>
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
                  <Link href="/personal-loan-hidden-charges-not-in-kfs-rbi-refund" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    KFS Hidden Charges Refund
                  </Link>
                  <Link href="/no-cost-emi-hidden-subvention-interest-gst-credit-card" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    No-Cost EMI Hidden Subvention Trap
                  </Link>
                  <Link href="/support-for-loan-settlement-during-medical-emergencies" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Medical Emergency Loan Settlement
                  </Link>
                  <Link href="/flat-interest-rate-vs-reducing-apr-personal-loan-trap" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Flat Rate vs Reducing APR Audit
                  </Link>
                  <Link href="/personal-loan-interest-before-disbursal-bpi-rbi-refund" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Interest Before Disbursal Refund
                  </Link>
                  <Link href="/nbfc-presenting-mandate-multiple-times-month-bounce-fee" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Multiple Mandate Bounce Refund
                  </Link>
                  <Link href="/upi-autopay-mandate-pause-vs-revoke-personal-loan-emi" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    UPI AutoPay Pause vs Revoke
                  </Link>
                  <Link href="/rbi-15-day-fortnightly-credit-bureau-update-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    RBI 15-Day CIBIL Update Rule
                  </Link>
                  <Link href="/get-noc-after-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    No Dues Certificate Guide
                  </Link>
                  <Link href="/stop-recovery-agent-harassment" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Stop Recovery Agent Harassment
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
                Specialist in NBFC digital lending compliance, RBI KFS fee audits, consumer dispute notices, and medical debt settlements across India.
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
                  MEDICAL LOAN DISPUTE HELP
                </span>
                <p className="text-lg md:text-xl font-bold text-white leading-snug">
                  Stuck With an Unfair Medical EMI?
                </p>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our legal team audits your KFS and hospital bill, sends joint notices to the hospital and NBFC, cancels unused ICU loans, and protects your CIBIL score.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Get Free Case Review
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
                  <span><strong>KFS &amp; Subvention Audit:</strong> Spot and reclaim every hidden fee.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Joint Hospital-NBFC Notices:</strong> End blame games over unused funds.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>CIBIL &amp; ₹100/Day Claims:</strong> Clean wrong medical defaults fast.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Medical Hardship OTS:</strong> Legal settlement and clean NOC support.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">Related Legal Guides</p>
              <div className="space-y-2.5">
                <Link
                  href="/personal-loan-hidden-charges-not-in-kfs-rbi-refund"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Personal Loan Fees Missing in KFS
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">RBI hidden fee refund guide &rarr;</span>
                </Link>

                <Link
                  href="/support-for-loan-settlement-during-medical-emergencies"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Loan Settlement During Medical Crisis
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Hardship OTS relief steps &rarr;</span>
                </Link>

                <Link
                  href="/stop-recovery-agent-harassment"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Stop Recovery Agent Harassment
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">RBI fair practice defense &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
