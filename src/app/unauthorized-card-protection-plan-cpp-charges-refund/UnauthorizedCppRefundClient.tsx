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

export default function UnauthorizedCppRefundClient() {
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
    { id: 'statutory-framework', label: '1. RBI Explicit Consent Mandate' },
    { id: 'mis-selling-emandate', label: '2. CPP Mis-Selling & E-Mandates' },
    { id: 'financial-impact', label: '3. Interest, GST & Fee Snowball' },
    { id: 'irdai-free-look', label: '4. IRDAI Free-Look Cancellation' },
    { id: 'visual-blueprint', label: '5. Visual Blueprint Infographic' },
    { id: 'step-by-step-sop', label: '6. Claiming Your Full CPP Refund' },
    { id: 'borrower-rights', label: '7. RBI Ombudsman & Consumer Law' },
    { id: 'escalation-matrix', label: '8. 3-Tier Escalation Matrix' },
    { id: 'procedural-timeline', label: '9. Dispute to Reversal Milestones' },
    { id: 'specialized-scenarios', label: '10. Overdue, OTS & Closed Cards' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
    {
      q: 'What is a Card Protection Plan (CPP) charge on a credit card?',
      a: 'A Card Protection Plan (CPP) is a paid add-on service or bundled protection cover sold by banks or third-party partners. It claims to help block lost cards or cover fraud, but banks often bill it without clear customer consent.'
    },
    {
      q: 'Can a bank charge a CPP fee without my explicit consent?',
      a: 'No. Under the RBI Credit Card Master Directions, 2022, card-issuers cannot bundle insurance or add-on services using pre-ticked boxes. They must take your prior, explicit, and separate consent, backed by multi-factor authentication for digital sign-ups.'
    },
    {
      q: 'Can I get a refund for an unauthorized CPP charge after 30 days?',
      a: 'Yes. Even if 30 days have passed, you can demand a full refund if the bank or CPP vendor cannot produce valid proof of explicit consent, a verified Pre-Issuance Verification Call (PIVC), or an OTP-authenticated e-mandate.'
    },
    {
      q: 'How does the IRDAI 30-day free-look period apply to bundled CPP plans?',
      a: 'If your CPP includes an insurance policy, IRDAI rules give you a 30-day free-look period starting from the date you receive the policy document. The insurer must refund your premium within 7 days after deducting only stamp duty and proportionate risk cover.'
    },
    {
      q: 'Must the bank also reverse interest, GST, and late fees caused by CPP?',
      a: 'Yes. If an unauthorized CPP charge pushed your card over its limit or added to an unpaid balance, the bank must reverse the principal fee along with all resulting 18% GST, revolving interest, late fees, and overlimit charges.'
    },
    {
      q: 'How do I stop automatic annual renewals of a CPP subscription?',
      a: 'Under RBI e-mandate rules, banks must send a pre-debit alert at least 24 hours before charging a recurring fee. You can log in to your bank card portal or send a written email to revoke the e-mandate and block future renewals.'
    },
    {
      q: 'What if the bank blames a third-party telemarketer for mis-selling CPP?',
      a: 'A bank cannot escape responsibility by blaming a third-party vendor. Because the charge was billed onto your credit card account, the card-issuer bears vicarious liability and must prove valid consent or reverse the debit.'
    },
    {
      q: 'Can an unpaid CPP fee damage my CIBIL score or block my settlement?',
      a: 'Yes. Unpaid CPP fees show up as overdue dues and can trigger Days Past Due (DPD) marks on your CIBIL report. Before signing a One-Time Settlement (OTS), you should dispute and remove unauthorized CPP fees from your ledger.'
    },
    {
      q: 'Where do I escalate if the bank refuses to refund my CPP charge?',
      a: 'First write to the Bank Grievance Redressal Officer and Principal Nodal Officer. If unresolved after 30 days, file a complaint on the RBI Integrated Ombudsman portal at cms.rbi.org.in, on IRDAI Bima Bharosa, or on the e-Jagriti consumer portal.'
    },
    {
      q: 'How does CredSettle help reverse mis-sold CPP charges on overdue cards?',
      a: 'CredSettle audits your credit card statements, drafts formal RBI-compliant dispute notices demanding consent proof, escalates unresolved cases to the RBI Ombudsman, removes inflated CPP interest and GST, and negotiates clean debt settlements.'
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
            <span>RBI Credit Card Master Directions 2022 &amp; Cardholder Rights</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Reverse Mis-Sold CPP Charges on Overdue Credit Cards
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            Spot and reverse unwanted Card Protection Plan (CPP) fees billed without your clear yes. Claim a full refund, waive extra interest and GST, and protect your CIBIL score under RBI and IRDAI rules.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Dispute CPP Charges Now</span>
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
                  <span>Statutory Cardholder Shield</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Protected under RBI Credit Card Directions 2022, IRDAI Rules, and the Consumer Protection Act, 2019.
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
                <span>EXECUTIVE BRIEF: UNAUTHORIZED CPP CHARGE REFUND RULES</span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Explicit Consent Is Mandatory:</strong> Under RBI Master Directions 2022, banks cannot bundle a Card Protection Plan (CPP) or insurance cover without prior, separate, and explicit consent.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Burden of Proof Lies on the Bank:</strong> If you dispute a CPP debit, the bank must produce a signed form, an OTP log, or a clear Pre-Issuance Verification Call (PIVC) recording.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">30-Day IRDAI Free-Look Exit:</strong> For insurance-backed CPP policies, you get a 30-day free-look window from the date you receive the policy document to cancel and claim a refund within 7 days.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Full Reversal of Cascading Charges:</strong> Reversing an illegal CPP fee also requires the bank to waive all resulting 18% GST, revolving interest, late fees, and overlimit penalties.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Ombudsman &amp; Consumer Relief:</strong> If the bank refuses to refund, you can escalate to the RBI Integrated Ombudsman, IRDAI Bima Bharosa, or Consumer Commission for damages.
                  </span>
                </li>
              </ul>
            </div>

            {/* SECTION 1 */}
            <section id="statutory-framework" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Central Bank Rules &amp; Consent Law</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. Statutory Framework: RBI Explicit Consent Mandate
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Many cardholders in India see a sudden ₹1,499 to ₹4,999 fee on their card bill. It often shows up as Card Protection Plan (CPP), CPP Plan, or Card Shield. Most people never asked to buy this plan.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The Reserve Bank of India bans such silent fees. Under the RBI Credit Card and Debit Card Directions, 2022, banks cannot add paid plans or cover on their own.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Banks cannot use pre-checked boxes on forms to sign you up. They must get your clear, separate yes before they start any paid plan. For online sign-ups, they must check your yes with an OTP.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If you agree to a plan, the bank must print the insurer name, address, and phone number on your bill. They must also save your nominee name. If the bank lacks proof of your clear yes, the fee is invalid and must go back to your card.
              </p>
            </section>

            {/* SECTION 2 */}
            <section id="mis-selling-emandate" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <AlertTriangle className="w-4 h-4 text-[#1886ff]" />
                <span>Deceptive Sales &amp; Auto-Debit Rules</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. How CPP Mis-Selling Happens &amp; E-Mandate Violations
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Unwanted CPP fees often start in one of two ways. First, sales callers phone new users right after card delivery. They say the plan is free or required by RBI, and turn a casual &ldquo;yes&rdquo; into a paid yearly plan.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Second, agents add CPP during card sign-up using pre-checked boxes. Worse, many plans renew on their own each year. Card users only see the fee when their card goes overdue or hits its limit.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Yearly auto-renewals without notice also break the RBI E-Mandate Framework for repeat card bills. Under RBI rules, banks must send an alert at least 24 hours before any repeat debit. That alert must list the brand name, exact sum, date, and a link to stop it.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                You can also pause or stop any repeat mandate right inside your bank card app. If a bank bills a yearly CPP fee without an OTP-backed mandate or a 24-hour alert, it breaks RBI rules.
              </p>
            </section>

            {/* SECTION 3 */}
            <section id="financial-impact" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                <span>Extra Fees &amp; Overdue Bill Math</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Financial Impact: Interest, GST &amp; Overlimit Fees
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                An unwanted ₹3,000 CPP fee rarely stays at ₹3,000. On an active or overdue card, one wrong debit sparks a chain of taxes, high interest, and late fees.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If you do not pay that fee, the bank marks it as a missed minimum due. The table below shows how one ₹3,000 CPP fee can grow your bill in 90 days.
              </p>

              {/* Representative Calculation Card */}
              <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white shadow-xs">
                <div className="bg-slate-900 text-white p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-[#1886ff]" />
                    <span className="font-bold text-sm">Illustrative 90-Day CPP Debt Snowball</span>
                  </div>
                  <span className="text-xs text-blue-300 font-mono">Example Base Fee: ₹3,000</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80">
                    <thead>
                      <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-semibold">
                        <th className="p-3">Billing Component</th>
                        <th className="p-3">Trigger Condition</th>
                        <th className="p-3">Regulatory Status</th>
                        <th className="p-3 text-right">Illustrative Cost</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200/80 text-slate-600">
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Base CPP Membership Fee</td>
                        <td className="p-3">Billed without explicit MFA consent</td>
                        <td className="p-3 text-rose-600 font-semibold">Unauthorized Principal</td>
                        <td className="p-3 text-right font-bold text-slate-900 font-mono">₹3,000</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">18% GST on CPP &amp; Fees</td>
                        <td className="p-3">Applied on service &amp; penalty charges</td>
                        <td className="p-3 text-amber-600 font-semibold">Refundable With Reversal</td>
                        <td className="p-3 text-right font-bold text-amber-700 font-mono">₹540+</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Overlimit &amp; Late Fees</td>
                        <td className="p-3">Card limit breached or min due missed</td>
                        <td className="p-3 text-rose-600 font-semibold">Cascading Bank Penalty</td>
                        <td className="p-3 text-right font-bold text-rose-700 font-mono">₹1,500 – ₹2,500</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Revolving Interest (36%–42% APR)</td>
                        <td className="p-3">Grace period lost on unpaid statement</td>
                        <td className="p-3 text-rose-700 font-semibold">Compounded Monthly</td>
                        <td className="p-3 text-right font-bold text-rose-800 font-mono">₹1,200 – ₹2,000</td>
                      </tr>
                      <tr className="bg-blue-50/70 font-bold text-slate-900">
                        <td className="p-3">Total Inflated Dues (90 Days)</td>
                        <td className="p-3 font-mono text-[#1886ff]">Zero Value Received</td>
                        <td className="p-3 text-[#1886ff]">100% Reversible on Dispute</td>
                        <td className="p-3 text-right text-[#1886ff] text-sm sm:text-base font-mono">₹6,240 – ₹8,040+</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* SECTION 4 */}
            <section id="irdai-free-look" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <ShieldCheck className="w-4 h-4 text-[#1886ff]" />
                <span>Policy Exit &amp; Buyer Rights</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. IRDAI Free-Look Period &amp; Mis-Selling Cancellation
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Many CPP plans are sold as group cover or include wallet and fraud insurance. When a plan has an insurance cover, IRDAI buyer rules give you a fast way out.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under IRDAI rules, you get a 30-day Free-Look Period. This 30-day clock starts on the day you get the policy paper or Certificate of Insurance (COI), not the day your card was billed.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If you cancel inside this 30-day window, the insurer must pay back your money within 7 days. They can only cut stamp duty and a small daily risk cost for the days covered.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Even if 30 days have passed, you can still get a full refund by showing mis-selling. Insurers and banks must keep a Pre-Issuance Verification Call (PIVC) or signed form. If they have no proof, you can ask them to cancel the plan from day one.
              </p>
            </section>

            {/* SECTION 5: Visual Blueprint Infographic */}
            <section id="visual-blueprint" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Sparkles className="w-4 h-4 text-[#1886ff]" />
                <span>Visual Blueprint</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. Visual Blueprint: CPP Dispute &amp; Refund Workflow
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This chart shows how to spot an unwanted CPP fee, ask your bank for proof of consent, and take the case to the RBI Ombudsman if the bank stalls.
              </p>

              <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-slate-100 bg-slate-100">
                  <Image
                    src="/images/infographics/unauthorized-card-protection-plan-cpp-charges-refund.jpg"
                    alt="Unauthorized Card Protection Plan CPP Charge Refund Process Under RBI Rules"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 900px"
                    className="object-contain hover:scale-[1.01] transition-transform duration-300"
                    priority
                  />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-500 pt-1 gap-2">
                  <span>Official CredSettle CPP Charge Reversal Framework • RBI &amp; IRDAI Compliant</span>
                  <a
                    href="/images/infographics/unauthorized-card-protection-plan-cpp-charges-refund.jpg"
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

            {/* SECTION 6: Step-by-Step SOP */}
            <section id="step-by-step-sop" className="scroll-target space-y-6">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Standard Operating Procedure</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. Step-by-Step SOP: Claiming Your Full CPP Refund
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Do not rely only on phone calls to customer care. Agents often stall or offer small gift vouchers. Follow these six steps in writing to get your full cash back.
              </p>

              <div className="space-y-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">1</span>
                    Stage 1: Check Past Card Bills for CPP Names
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Download your last 12 to 24 months of card PDF bills. Mark each fee listed as CPP, CPP Plan, or Card Shield, along with the date and GST.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">2</span>
                    Stage 2: Ask the Bank for Proof of Consent
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Email your bank&rsquo;s dispute desk. Ask them to share the signed form, OTP log, or full call tape that proves you said yes to the plan.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">3</span>
                    Stage 3: File a Chargeback &amp; Free-Look Request
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Ask for a chargeback for an unapproved plan. If you got a policy paper in the last 30 days, also send a written IRDAI free-look email to cancel it.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">4</span>
                    Stage 4: Stop the Repeat E-Mandate Right Away
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Log in to your bank app or SIHub portal and stop any repeat CPP mandate. Save a screenshot so next year&rsquo;s fee cannot auto-debit.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">5</span>
                    Stage 5: Claim Back Interest, GST &amp; Late Fees
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Do not settle for just the base fee if it caused extra costs. Send a list asking the bank to waive 18% GST, interest, overlimit fees, and CIBIL late marks.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">6</span>
                    Stage 6: File on RBI CMS &amp; IRDAI Bima Bharosa
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If the bank says no or stays quiet for 30 days, file a case on cms.rbi.org.in. For insurance plans, also log a complaint on bimabharosa.irdai.gov.in.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7 */}
            <section id="borrower-rights" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Protections &amp; Legal Remedies</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. Borrower Rights: RBI Ombudsman &amp; Consumer Courts
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Indian banking and buyer laws give card users strong rights against mis-sold plans. Even if a third-party agent sold the plan, your bank is still liable for every debit on your card.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Zero Liability on Wrong Debits</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under RBI customer liability rules, if you report an unapproved debit fast, your loss is zero. The bank must prove you said yes.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                    <Gavel className="w-4 h-4" />
                    <span>Deficiency in Service (CPA 2019)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Billing a user without clear consent is a Deficiency in Service under Section 2(11) and an Unfair Trade Practice under Section 2(47) of the Consumer Protection Act, 2019.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-purple-700 font-bold text-sm">
                    <Landmark className="w-4 h-4" />
                    <span>RBI Integrated Ombudsman Scheme</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under the RBI Integrated Ombudsman Scheme, 2021, the Ombudsman can order a full refund, fix your CIBIL report, and award pay for stress and lost time.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <Scale className="w-4 h-4" />
                    <span>e-Jagriti Consumer Court Claims</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If the bank ignores your notice, you can file a case online on the e-Jagriti portal within 2 years to claim a refund and legal costs.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 8 */}
            <section id="escalation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Escalation Protocol</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. 3-Tier Escalation Matrix: Bank GRO to Ombudsman
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                To unlock formal regulatory action at the RBI Ombudsman, you must first give your bank a written complaint and wait up to 30 days. Follow this three-tier escalation path.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Escalation Tier</th>
                      <th className="p-3">Designated Authority</th>
                      <th className="p-3">Turnaround Time</th>
                      <th className="p-3">Scope of Intervention &amp; Relief</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 1: GRO</td>
                      <td className="p-3">Bank Grievance Redressal Officer</td>
                      <td className="p-3 font-mono">7 to 10 Working Days</td>
                      <td className="p-3">Logs your dispute ticket, checks telemarketing consent records, and initiates chargeback.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 2: PNO</td>
                      <td className="p-3">Principal Nodal Officer (Head Office)</td>
                      <td className="p-3 font-mono">14 to 21 Working Days</td>
                      <td className="p-3">Audits MFA/PIVC proof, cancels the CPP e-mandate, and approves GST and interest waivers.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Level 3: Regulators</td>
                      <td className="p-3">RBI Ombudsman / IRDAI Bima Bharosa</td>
                      <td className="p-3 font-mono">30 Days Post-Complaint</td>
                      <td className="p-3">Issues binding refund awards, orders CIBIL rectification, and grants harassment compensation.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 9 */}
            <section id="procedural-timeline" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Calendar className="w-4 h-4 text-[#1886ff]" />
                <span>Procedural Milestones</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Procedural Milestones: Dispute to Full Reversal
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Tracking each stage from discovery to final reversal ensures the bank cannot close your complaint with a generic template reply.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Milestone Window</th>
                      <th className="p-3">Regulatory Phase</th>
                      <th className="p-3">Bank / Insurer Duty</th>
                      <th className="p-3">Cardholder Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 0 to Day 3</td>
                      <td className="p-3 font-mono text-[11px]">Discovery &amp; Alert</td>
                      <td className="p-3">Must register your unauthorized debit report and issue a ticket number.</td>
                      <td className="p-3">Email bank dispute desk, demand consent proof, and revoke e-mandate.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 4 to Day 10</td>
                      <td className="p-3 font-mono text-[11px]">Consent Audit / Free-Look</td>
                      <td className="p-3">Must refund free-look cancellations in 7 days or produce MFA/PIVC proof.</td>
                      <td className="p-3">Escalate to Bank GRO if no valid call recording or OTP log is shared.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 11 to Day 30</td>
                      <td className="p-3 font-mono text-[11px]">PNO Review</td>
                      <td className="p-3">Principal Nodal Officer reviews mis-selling evidence and fee cascade.</td>
                      <td className="p-3">Submit itemized demand for base CPP, 18% GST, interest, and late fees.</td>
                    </tr>
                    <tr className="bg-amber-50/50">
                      <td className="p-3 font-bold text-slate-900">Day 31 Onward</td>
                      <td className="p-3 font-mono text-[11px] text-amber-700 font-bold">Ombudsman Filing</td>
                      <td className="p-3">Bank loses internal window; regulator takes over adjudication.</td>
                      <td className="p-3 font-bold text-amber-800">File on cms.rbi.org.in and bimabharosa.irdai.gov.in with all PDFs.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Resolution Stage</td>
                      <td className="p-3 font-mono text-[11px] text-[#1886ff] font-bold">Credit &amp; CIBIL Fix</td>
                      <td className="p-3">Credits full reversal to card or bank account and updates credit bureau.</td>
                      <td className="p-3 font-bold text-slate-900">Verify zero CPP dues and confirm CIBIL DPD history is corrected.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10 */}
            <section id="specialized-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>Specialized Real-World Cases</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                10. Special Cases: Overdue Cards, OTS &amp; Closed Cards
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Wrong CPP fees create special issues when a card is overdue, settled, or closed. Here is how to handle each case.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-[#1886ff]" />
                    Overdue Cards &amp; One-Time Settlement (OTS)
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Before you sign a card settlement, check your bills for past CPP fees. Stripping out wrong CPP fees, interest, and GST cuts your real balance and lowers your OTS amount.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Lock className="w-4 h-4 text-emerald-600" />
                    Refunds on Closed or Blocked Cards
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Even if your card is closed or blocked, the bank cannot keep a CPP refund. Ask the bank to send the refund straight to your savings account via NEFT.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-indigo-600" />
                    Silent Yearly Renewals Without Alert
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If CPP renewed on its own for years without a 24-hour alert or OTP mandate, cite RBI e-mandate rules to claim back every past renewal fee.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-amber-600" />
                    Bank Blaming Third-Party Sales Callers
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Banks often tell users to call CPP directly for a refund. Do not accept this excuse. Under RBI rules, your card bank is liable for every charge on your bill.
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
                Frequently Asked Questions: CPP Charge Refunds
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Clear, verified answers on disputing unauthorized Card Protection Plan (CPP) fees, invoking IRDAI free-look cancellation, and escalating to the RBI Ombudsman.
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
                  <strong>RBI Master Direction:</strong> Reserve Bank of India (Credit Card and Debit Card - Issuance and Conduct) Directions, 2022 (Explicit prior consent and prohibition on unsolicited facilities).
                </li>
                <li>
                  <strong>RBI E-Mandate Framework:</strong> Processing of e-mandates for recurring transactions on cards (Mandatory AFA setup, 24-hour pre-debit notification, and instant revocation).
                </li>
                <li>
                  <strong>RBI Customer Liability Circular:</strong> DBR.No.Leg.BC.78/09.07.005/2017-18 on Limiting Liability of Customers in Unauthorised Electronic Banking Transactions.
                </li>
                <li>
                  <strong>IRDAI Master Circular on Protection of Policyholders&rsquo; Interests:</strong> 30-day Free-Look Period from receipt of policy document and 7-day refund turnaround.
                </li>
                <li>
                  <strong>Consumer Protection Act, 2019 &amp; RBI Integrated Ombudsman Scheme, 2021:</strong> Section 2(11) Deficiency in Service, Section 2(47) Unfair Trade Practice, and Ombudsman compensation powers.
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
                  <a href="https://bimabharosa.irdai.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>IRDAI Bima Bharosa Portal</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://e-jagriti.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>e-Jagriti Consumer Portal</span>
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
                  <Link href="/unactivated-credit-card-charges-rbi-500-day-penalty" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Unactivated Card 500/Day Penalty
                  </Link>
                  <Link href="/credit-card-overlimit-fee-without-consent-rbi-refund" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Overlimit Fee Without Consent
                  </Link>
                  <Link href="/unsolicited-credit-card-upgrade-limit-increase-rbi-rule" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Unsolicited Card Upgrade 2x Rule
                  </Link>
                  <Link href="/unused-credit-card-annual-fee-cibil-npa-rbi-closure" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Unused Card Annual Fee CIBIL Fix
                  </Link>
                  <Link href="/credit-card-pending-chargeback-rbi-shadow-credit-rules" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Pending Chargeback Shadow Credit
                  </Link>
                  <Link href="/is-18-percent-gst-waived-credit-card-settlement-ots" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    18% GST in Credit Card OTS
                  </Link>
                  <Link href="/services/credit-card-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Credit Card Settlement
                  </Link>
                  <Link href="/stop-recovery-agent-harassment" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Stop Recovery Harassment
                  </Link>
                  <Link href="/get-noc-after-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Get NOC After Settlement
                  </Link>
                  <Link href="/rbi-rules-for-recovery-agents" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    RBI Recovery Guidelines
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
                Specialist in credit card compliance, RBI Master Directions, unauthorized fee disputes, and debt settlement resolutions helping borrowers reverse mis-sold charges and settle cleanly.
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
                  CPP CHARGE DISPUTE SUPPORT
                </span>
                <p className="text-lg md:text-xl font-bold text-white leading-snug">
                  Billed for an Unwanted CPP Plan?
                </p>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our banking experts audit your card statements, challenge unauthorized CPP debits under RBI 2022 rules, reverse inflated interest and GST, and negotiate clean settlements.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Reverse My CPP Charges
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
                  <span><strong>Statement Fee Audit:</strong> Spot every hidden CPP, GST, and overlimit debit.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>RBI Consent Enforcement:</strong> Demand MFA and PIVC proof from issuers.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Ombudsman Escalation:</strong> Structured filings on cms.rbi.org.in.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Clean OTS Negotiation:</strong> Strip illegal charges before final settlement.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">Related Legal Guides</p>
              <div className="space-y-2.5">
                <Link
                  href="/unactivated-credit-card-charges-rbi-500-day-penalty"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Unactivated Card Charges &amp; Penalty
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">RBI 30-day activation rule &rarr;</span>
                </Link>

                <Link
                  href="/credit-card-overlimit-fee-without-consent-rbi-refund"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Overlimit Fee Without Consent Refund
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Reverse unauthorized fees &rarr;</span>
                </Link>

                <Link
                  href="/unsolicited-credit-card-upgrade-limit-increase-rbi-rule"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Unsolicited Card Upgrade 2x Penalty
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">RBI explicit consent rules &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
