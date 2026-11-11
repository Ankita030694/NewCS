'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import InteractiveLeadFunnel from '@/components/InteractiveLeadFunnel';
import CompanySection from '@/components/CompanySection';
import {
  BookOpen,
  ShieldCheck,
  AlertCircle,
  Scale,
  Phone,
  Lock,
  ArrowRight,
  ExternalLink,
  Check,
  ChevronDown,
  ChevronUp,
  Clock
} from 'lucide-react';

export default function KreditbeeRecoveryAgentHomeVisitClient() {
  const [activeId, setActiveId] = useState<string>('self-filter-notice');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

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
    const sections = document.querySelectorAll('section[id], div[id].scroll-target');
    sections.forEach((sec) => observer.observe(sec));
    return () => {
      sections.forEach((sec) => observer.unobserve(sec));
    };
  }, []);

  const navLinks = [
    { id: 'self-filter-notice', label: '₹3L+ Combined Debt Check' },
    { id: 'nbfc-partner-structure', label: '1. Krazybee & NBFC Structure' },
    { id: 'rbi-2027-doorstep-rules', label: '2. RBI 1 Jan 2027 Visit Rules' },
    { id: 'five-step-gate-protocol', label: '3. 5-Step Doorstep Checklist' },
    { id: 'illegal-agent-actions', label: '4. What Agents Cannot Do' },
    { id: 'cash-upi-scam-warning', label: '5. Never Pay Cash at the Door' },
    { id: 'nbfc-rbi-cms-complaint', label: '6. NBFC & RBI CMS Escalation' },
    { id: 'sub-3l-vs-multi-loan', label: '7. Small App Loan vs ₹3L+ Stack' },
    { id: 'multi-loan-settlement-path', label: '8. Multi-Loan OTS Closure Path' },
    { id: 'faqs', label: 'FAQs' }
  ];

  const faqs = [
    {
      q: 'What documents must a KreditBee agent show during a home visit?',
      a: 'Any agent visiting your home for a KreditBee loan must show a photo ID card from their agency, a formal authorization letter naming Krazybee Services Pvt Ltd or the exact RBI-registered partner NBFC on your loan, and a copy of the overdue notice.'
    },
    {
      q: 'What hours are legal for a KreditBee home visit from 1 January 2027?',
      a: 'Under the RBI Fair Practices Code and the updated RBI recovery agent directions taking effect on 1 January 2027, field visits and recovery calls are allowed strictly between 8:00 AM and 7:00 PM.'
    },
    {
      q: 'Am I legally forced to let a KreditBee agent enter my flat or house?',
      a: 'No. A recovery agent is not a police officer or court bailiff. You can speak politely at your main gate or building lobby, check their ID card, and refuse entry inside your home.'
    },
    {
      q: 'Can a KreditBee agent collect cash or personal UPI transfers at my door?',
      a: 'Never pay cash or send money to an agent\'s personal UPI number. Any valid EMI or settlement payment must be made inside the official KreditBee app or directly to the partner NBFC account printed on your written sanction letter.'
    },
    {
      q: 'Who is the actual regulated lender behind my KreditBee loan?',
      a: 'KreditBee acts as a Lending Service Provider (LSP). Your loan sits on the books of its in-house NBFC, Krazybee Services Private Limited, or a co-lending RBI-registered NBFC or bank listed on your Key Fact Statement (KFS).'
    },
    {
      q: 'Can KreditBee agents shout in front of neighbours or guards?',
      a: 'No. RBI Digital Lending Directions and RBI\'s 1 January 2027 agent rules bar public shaming, shouting in hallways, or telling security guards, neighbours, or family members about your loan.'
    },
    {
      q: 'Where do I report an abusive KreditBee home visit?',
      a: 'Record the agent\'s details, email the Grievance Redressal Officer of Krazybee Services or your KFS partner NBFC, and if unresolved after 30 days, file a complaint on the RBI CMS portal at cms.rbi.org.in.'
    },
    {
      q: 'Does CredSettle take small single KreditBee loans under Rs 3 Lakhs?',
      a: 'No. If you owe only Rs 15,000 to Rs 80,000 on a single app with no other debt, paying or emailing the NBFC directly is cheaper than hiring a settlement firm. CredSettle assists borrowers whose combined debt across KreditBee, other loan apps, credit cards, and personal loans is Rs 3,00,000 or more.'
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* HERO */}
      <section
        className="relative text-white pt-28 pb-16 md:pt-32 md:pb-20 px-4 md:px-8"
        style={{
          background: 'radial-gradient(136.19% 254.89% at -1.53% 10.35%, #2F6CE2 0%, #001235 100%)'
        }}
      >
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 border border-white/25 text-xs sm:text-sm font-bold uppercase tracking-wide mb-5">
            <Scale className="w-4 h-4 text-blue-200" />
            <span>RBI Doorstep Conduct Guide &amp; Multi-Loan Relief.</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 tracking-tight leading-tight">
            KreditBee Recovery Agent Home Visit Rights &amp; Rules
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-8">
            Has a field agent shown up or called about visiting your home for a KreditBee loan? Know your exact RBI 1 January 2027 rights, ID rules, and how to settle ₹3,00,000+ combined app and card debt safely.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#lead-funnel"
              className="bg-white text-blue-950 px-7 py-3.5 rounded-full font-bold text-base hover:bg-blue-50 transition-all shadow-lg inline-flex items-center justify-center gap-2"
            >
              <span>Check ₹3L+ Multi-Loan Settlement</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/will-kreditbee-agents-come-home"
              className="bg-blue-900/60 border border-white/30 text-white px-7 py-3.5 rounded-full font-semibold text-base hover:bg-blue-900 transition-all inline-flex items-center justify-center"
            >
              See Visit Triggers &amp; Thresholds
            </Link>
          </div>
        </div>
      </section>

      {/* SELF-FILTER & COMBINED DEBT STATUS BOX */}
      <div className="max-w-5xl mx-auto px-4 -mt-8 relative z-20">
        <div
          id="self-filter-notice"
          className="scroll-target bg-white rounded-2xl border-2 border-blue-600 p-5 sm:p-6 shadow-md space-y-3"
        >
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
            <div className="flex items-center gap-2 text-sm sm:text-base font-extrabold text-blue-900">
              <Clock className="w-5 h-5 text-blue-600 flex-shrink-0" />
              <span>Who Should Use Professional Settlement vs Direct Payoff?</span>
            </div>
            <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-900 text-xs font-bold">
              CredSettle Minimum Floor: ₹3,00,000+ Combined Unsecured Debt
            </span>
          </div>
          <p className="text-sm text-slate-700 leading-relaxed">
            <strong>Single Small App Loan (Total Debt Under ₹3,00,000):</strong> If you owe ₹10,000 to ₹90,000 only on KreditBee with no other heavy loans, follow the free RBI doorstep checklist on this page and email Krazybee&apos;s Nodal Officer directly to close your account without service fees.
          </p>
          <p className="text-sm text-slate-700 leading-relaxed">
            <strong>Multi-Loan Debt Trap (₹3,00,000+ Combined):</strong> Most KreditBee borrowers we represent also hold 3 to 6 other loan apps, maxed-out credit cards, and bank personal loans totaling <strong>₹3,00,000 or more</strong>. Add all your unsecured loans together in the eligibility check below.
          </p>
        </div>
      </div>

      <InteractiveLeadFunnel />

      {/* BREADCRUMB */}
      <div className="bg-white border-y border-slate-200">
        <div className="max-w-[1440px] mx-auto px-4 py-3">
          <nav className="flex text-xs sm:text-sm text-slate-500" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-2">
              <li>
                <Link href="/" className="hover:text-blue-600 font-medium">
                  Home
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/loan-settlement" className="hover:text-blue-600 font-medium">
                  Loan Settlement
                </Link>
              </li>
              <li>/</li>
              <li className="text-slate-800 font-semibold">KreditBee Agent Home Visit</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* 3-COLUMN WIDESCREEN BODY */}
      <div className="max-w-[1440px] mx-auto px-4 py-10 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[260px_minmax(0,1fr)_300px] gap-8 items-start">
          {/* LEFT TOC */}
          <aside className="sticky top-24 hidden lg:block">
            <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs">
              <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-100">
                <BookOpen className="w-4 h-4 text-blue-600" />
                <span className="text-xs font-extrabold uppercase tracking-wider text-slate-900">
                  Page Guide.
                </span>
              </div>
              <nav className="space-y-1.5 text-xs">
                {navLinks.map((link) => (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    className={`block py-1.5 px-2.5 rounded-lg transition-colors ${
                      activeId === link.id
                        ? 'bg-blue-50 text-blue-700 font-bold border-l-2 border-blue-600'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                    }`}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* CENTER ARTICLE */}
          <article className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 md:p-10 shadow-xs space-y-10 min-w-0">
            {/* SECTION 1 */}
            <section id="nbfc-partner-structure" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                1. How KreditBee &amp; Its NBFC Partners Handle Visits
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When an agent rings your bell saying they are from KreditBee, you first need to know who holds legal power over your loan. KreditBee is a digital Lending Service Provider (LSP) app. It is not a bank.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Every valid KreditBee loan is funded by an RBI-regulated entity named on your <strong>Key Fact Statement (KFS)</strong> and CIBIL report. Most often, that lender is <strong>Krazybee Services Private Limited</strong> (its group NBFC) or a co-lending partner NBFC such as Poonawalla Fincorp, Vivriti Capital, Piramal Finance, InCred, or Northern Arc.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under RBI Digital Lending rules, the regulated NBFC is 100% accountable for every word and action of any field recovery agent sent to your gate.
              </p>
            </section>

            {/* SECTION 2 */}
            <section id="rbi-2027-doorstep-rules" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                2. RBI 1 January 2027 Home Visit Hours &amp; Rules
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Yes, an authorised NBFC agent may visit your address if you ignore calls and overdue notices. Still, every visit must obey the RBI Fair Practices Code and the stricter RBI recovery agent directions taking effect on <strong>1 January 2027</strong>:
              </p>
              <ul className="list-disc pl-6 space-y-2.5 text-sm md:text-base text-slate-700">
                <li>
                  <strong>Strict 8:00 AM to 7:00 PM Window:</strong> Agents cannot knock on your door or call your phone before 8:00 AM or after 7:00 PM.
                </li>
                <li>
                  <strong>Mandatory Agency Disclosure:</strong> The NBFC must share the name of the assigned collection agency with you before the agent visits.
                </li>
                <li>
                  <strong>Valid Photo ID &amp; NBFC Letter:</strong> The visiting agent must carry an agency ID card plus a written authorization letter from Krazybee Services or your KFS lender.
                </li>
                <li>
                  <strong>Respect for Borrower Privacy:</strong> Talks must stay private. Agents cannot gather a crowd, yell in your stairwell, or brief your building watchman.
                </li>
              </ul>
            </section>

            {/* SECTION 3 */}
            <section id="five-step-gate-protocol" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                3. Five-Step Checklist When an Agent Rings Your Bell
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Stay calm and follow five simple steps if a KreditBee field agent shows up at your home:
              </p>
              <ol className="list-decimal pl-6 space-y-3 text-sm md:text-base text-slate-700">
                <li>
                  <strong>Talk Outside Your Door or at the Gate:</strong> You have zero legal duty to invite a recovery agent into your living room. Speak calmly in your lobby or outside the gate.
                </li>
                <li>
                  <strong>Ask for ID &amp; Authorization First:</strong> Ask to read their agency photo ID and NBFC letter before discussing a single loan detail. If they refuse, end the talk right away.
                </li>
                <li>
                  <strong>Note Name, Agency &amp; Visit Time:</strong> Write down the agent&apos;s full name, phone number, agency name, and exact arrival time.
                </li>
                <li>
                  <strong>State Hardship in One Clear Line:</strong> Simply say you are facing documented financial hardship and are handling the account in writing with the NBFC.
                </li>
                <li>
                  <strong>Sign Zero Blank Papers:</strong> Accept any printed overdue notice, but never sign blank forms, cheques, or handwritten promises at your door.
                </li>
              </ol>
            </section>

            {/* SECTION 4 */}
            <section id="illegal-agent-actions" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                4. Six Actions KreditBee Agents Are Barred From Doing
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Many rogue callers pretend to have court powers they do not own. Under Indian law and RBI rules, a field agent can <strong>never</strong>:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                <div className="p-4 rounded-2xl bg-red-50 border border-red-200 space-y-1">
                  <p className="text-sm font-bold text-red-900">1. Pretend to Be Police or Court Staff.</p>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Unpaid personal app loans are civil money disputes, not police arrest matters.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-red-50 border border-red-200 space-y-1">
                  <p className="text-sm font-bold text-red-900">2. Seize Phones, Bikes, or TV Sets.</p>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    KreditBee loans are unsecured. Agents have zero right to touch household items.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-red-50 border border-red-200 space-y-1">
                  <p className="text-sm font-bold text-red-900">3. Refuse to Leave After Being Asked.</p>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Sitting at your door at night or blocking your gate is unlawful trespass. Call 112 if needed.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-red-50 border border-red-200 space-y-1">
                  <p className="text-sm font-bold text-red-900">4. Shame Family or Neighbours.</p>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Discussing your loan balance with parents, spouses, or neighbours breaks RBI privacy rules.
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-600">
                Facing abusive phone threats too? Read our dedicated <Link href="/kreditbee-recovery-agent-harassment" className="text-blue-600 hover:underline font-semibold">KreditBee harassment complaint guide</Link>.
              </p>
            </section>

            {/* SECTION 5 */}
            <section id="cash-upi-scam-warning" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                5. Why You Must Never Pay Cash or Personal UPI at Home
              </h2>
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 space-y-2.5">
                <p className="text-sm font-bold text-amber-950 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-700 flex-shrink-0" />
                  <span>Doorstep Payment Scam Warning:</span>
                </p>
                <p className="text-xs sm:text-sm text-amber-950 leading-relaxed">
                  Field agents often offer an instant 50% discount if you hand over ₹10,000 in cash or scan a WhatsApp QR code right at the door. <strong>Do not fall for this!</strong>
                </p>
                <ul className="list-disc pl-6 space-y-1.5 text-xs sm:text-sm text-amber-950">
                  <li>Without an official NBFC sanction letter, any partial payment is eaten up as late fees and interest.</li>
                  <li>Cash or personal UPI transfers can be pocketed without updating your KreditBee ledger.</li>
                  <li>Pay only inside the verified KreditBee app or directly to the NBFC bank account named on a signed OTS letter.</li>
                </ul>
              </div>
            </section>

            {/* SECTION 6 */}
            <section id="nbfc-rbi-cms-complaint" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                6. How to Escalate Unlawful Home Visits to RBI CMS
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If a field agent visits after 7:00 PM, hides their ID, or shouts outside your house, follow this three-tier paper trail:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm md:text-base text-slate-700">
                <li>
                  <strong>Step 1 (KreditBee Support &amp; GRO):</strong> Email KreditBee care and the Grievance Redressal Officer (GRO) of Krazybee Services Pvt Ltd (or the exact NBFC on your KFS) with CCTV clips, call logs, and your loan ID.
                </li>
                <li>
                  <strong>Step 2 (NBFC Principal Nodal Officer):</strong> If the GRO sends a generic reply or visits continue without ID, escalate to the NBFC Nodal Officer.
                </li>
                <li>
                  <strong>Step 3 (RBI Integrated Ombudsman):</strong> If your complaint is not fixed within 30 days, file online for free at `cms.rbi.org.in` against the regulated NBFC. Also check how to <Link href="/how-to-stop-recovery-agent-harassment" className="text-blue-600 hover:underline font-semibold">stop recovery agent harassment legally</Link>.
                </li>
              </ul>
            </section>

            {/* SECTION 7 */}
            <section id="sub-3l-vs-multi-loan" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                7. Single Small Loan vs ₹3,00,000+ Multi-App Debt Trap
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                How you close a KreditBee loan depends on your <strong>total debt picture</strong>, not just one app balance:
              </p>
              <div className="overflow-x-auto rounded-2xl border border-slate-200">
                <table className="w-full text-left text-xs sm:text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="p-3.5 border-r border-slate-700 font-bold">Your Situation.</th>
                      <th className="p-3.5 font-bold">Smartest Action Plan.</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-700">
                    <tr>
                      <td className="p-3.5 border-r border-slate-200 font-semibold text-slate-900">
                        One small app loan (total debt under ₹3,00,000).
                      </td>
                      <td className="p-3.5">
                        Clear the loan inside the app when funds arrive, or email Krazybee&apos;s Nodal Officer directly for a penalty waiver. You do not need paid legal settlement representation.
                      </td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3.5 border-r border-slate-200 font-semibold text-slate-900">
                        KreditBee + other apps + credit cards + PLs = <strong>₹3,00,000+ total debt</strong>.
                      </td>
                      <td className="p-3.5">
                        Stop taking new app loans to pay old EMIs. Use a structured multi-lender settlement plan to close every NBFC, card, and bank account one by one with verified OTS letters.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 8 */}
            <section id="multi-loan-settlement-path" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                8. Settling KreditBee Alongside Cards &amp; Personal Loans
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Most salaried borrowers never default on KreditBee in isolation. Usually, a medical bill or pay cut leads to borrowing from KreditBee, MoneyTap, CASHe, two credit cards, and a bank personal loan until monthly EMIs swallow 90% of take-home pay and total debt crosses <strong>₹3,00,000 to ₹15,00,000+</strong>.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When your account crosses 90 days past due into NPA status, Krazybee Services and partner NBFCs evaluate lump-sum One-Time Settlement (OTS) proposals under <strong>RBI Circular RBI/2023-24/40</strong>. CredSettle handles anti-harassment notices, sequences your lump-sum savings across all your apps, cards, and bank loans, verifies every sanction letter, and tracks your 30-day No Dues Certificates. Read how we <Link href="/negotiate-multiple-loans-together" className="text-blue-600 hover:underline font-semibold">negotiate multiple loans together</Link> and <Link href="/get-noc-after-loan-settlement" className="text-blue-600 hover:underline font-semibold">secure clean NOCs after settlement</Link>.
              </p>
            </section>

            <CompanySection />

            {/* FAQS */}
            <section id="faqs" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                KreditBee Home Visit Rules: Frequently Asked Questions
              </h2>
              <div className="space-y-3 pt-2">
                {faqs.map((faq, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div
                      key={idx}
                      className="rounded-2xl border border-slate-200 bg-white overflow-hidden"
                    >
                      <button
                        type="button"
                        onClick={() => setOpenFaq(isOpen ? null : idx)}
                        className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-bold text-slate-900 hover:text-blue-600 transition-colors text-sm sm:text-base cursor-pointer"
                      >
                        <span>{faq.q}</span>
                        {isOpen ? (
                          <ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                        )}
                      </button>
                      {isOpen && (
                        <div className="px-4 pb-5 sm:px-5 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100 pt-3 bg-slate-50/60">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>

            {/* RELATED LINKS */}
            <div className="pt-4 border-t border-slate-200 space-y-3">
              <p className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
                Related App-Loan &amp; Multi-Debt Guides.
              </p>
              <div className="flex flex-wrap gap-2">
                <Link
                  href="/will-kreditbee-agents-come-home"
                  className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 hover:border-blue-600 hover:text-blue-600"
                >
                  Will KreditBee Agents Come Home?
                </Link>
                <Link
                  href="/kreditbee-recovery-agent-harassment"
                  className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 hover:border-blue-600 hover:text-blue-600"
                >
                  KreditBee Harassment Guide.
                </Link>
                <Link
                  href="/negotiate-multiple-loans-together"
                  className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 hover:border-blue-600 hover:text-blue-600"
                >
                  Settle Multiple Loans Together.
                </Link>
                <Link
                  href="/settle-multiple-credit-cards"
                  className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 hover:border-blue-600 hover:text-blue-600"
                >
                  Settle Multiple Credit Cards.
                </Link>
              </div>
            </div>
          </article>

          {/* RIGHT SIDEBAR */}
          <aside className="sticky top-24 space-y-6">
            <div className="bg-white rounded-3xl border border-slate-200 p-5 space-y-3 shadow-xs">
              <div className="flex items-center gap-3">
                <Link
                  href="/author/ashish-jhangra"
                  className="w-11 h-11 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-extrabold text-sm flex-shrink-0"
                >
                  AJ
                </Link>
                <div>
                  <Link
                    href="/author/ashish-jhangra"
                    className="text-sm font-bold text-slate-900 hover:text-blue-600 block"
                  >
                    Ashish Jhangra
                  </Link>
                  <p className="text-[11px] font-semibold text-blue-600">
                    Legal &amp; Debt Relief Expert.
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Advises multi-loan borrowers on RBI Digital Lending rules, field agent conduct, and NBFC settlements.
              </p>
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <span>Updated: 11 Nov 2026.</span>
                <a
                  href="https://cms.rbi.org.in"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="text-blue-600 hover:underline inline-flex items-center gap-1 font-semibold"
                >
                  <span>RBI CMS Portal.</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            <div className="rounded-3xl bg-gradient-to-br from-blue-900 to-slate-900 p-6 text-white space-y-4 shadow-md">
              <div className="inline-flex items-center gap-1.5 py-1 px-2.5 rounded-lg bg-white/15 text-blue-100 text-[11px] font-bold">
                <Lock className="w-3.5 h-3.5" />
                <span>₹3,00,000+ Combined Debt Plan.</span>
              </div>
              <p className="text-lg font-bold leading-snug">
                Juggling KreditBee, Cards &amp; Personal Loans Above ₹3L?
              </p>
              <p className="text-xs text-blue-100 leading-relaxed">
                Stop borrowing from new apps to pay old EMIs. Settle all your unsecured accounts in one safe legal plan.
              </p>
              <a
                href="#lead-funnel"
                className="block w-full text-center bg-white text-blue-950 font-bold py-3 px-4 rounded-xl hover:bg-blue-50 transition-colors text-sm"
              >
                Check ₹3L+ Eligibility
              </a>
              <a
                href="tel:+918800226635"
                className="text-xs text-blue-100 hover:text-white font-semibold flex items-center justify-center gap-1.5 pt-1"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call: +91-8800226635.</span>
              </a>
            </div>

            <div className="bg-white rounded-3xl border border-slate-200 p-5 space-y-2.5 text-xs shadow-xs">
              <p className="font-bold text-slate-900 uppercase tracking-wider text-[11px] flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Doorstep Golden Rules.</span>
              </p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Visits allowed strictly 8:00 AM to 7:00 PM.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Check agency ID and Krazybee / NBFC letter first.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Never pay cash or personal UPI at the door.</span>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
