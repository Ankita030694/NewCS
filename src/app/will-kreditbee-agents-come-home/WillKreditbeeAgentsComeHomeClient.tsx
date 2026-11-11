'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import InteractiveLeadFunnel from '@/components/InteractiveLeadFunnel';
import CompanySection from '@/components/CompanySection';
import {
  BookOpen,
  ShieldCheck,
  AlertCircle,
  MapPin,
  Phone,
  Lock,
  ArrowRight,
  ExternalLink,
  Check,
  ChevronDown,
  ChevronUp,
  Clock
} from 'lucide-react';

export default function WillKreditbeeAgentsComeHomeClient() {
  const [activeId, setActiveId] = useState<string>('quick-answer-box');
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
    { id: 'quick-answer-box', label: 'Short Answer & ₹3L+ Filter' },
    { id: 'ticket-size-economics', label: '1. Loan Size Visit Thresholds' },
    { id: 'overdue-days-timeline', label: '2. Day 1 to Day 90+ Stages' },
    { id: 'city-pincode-coverage', label: '3. Metro vs Tier-3 Coverage' },
    { id: 'bluff-calls-vs-real-visit', label: '4. Fake Call Bluffs vs Real Visits' },
    { id: 'office-family-privacy-laws', label: '5. Office & Family Privacy Laws' },
    { id: 'relocated-tenant-steps', label: '6. If You Moved Rented Flats' },
    { id: 'combining-kreditbee-3lakh', label: '7. Combining ₹3L+ Multi-Loans' },
    { id: 'cibil-closure-roadmap', label: '8. CIBIL & Clean Closure Plan' },
    { id: 'calm-prep-steps', label: '9. Five Calm Steps Today' },
    { id: 'faqs', label: 'FAQs' }
  ];

  const faqs = [
    {
      q: 'Will KreditBee agents come home after missing just 1 EMI?',
      a: 'Rarely in the first 1 to 30 days. During the first month past due, KreditBee and its partner NBFCs rely almost entirely on automated reminders, app notifications, emails, and call-centre follow-ups rather than physical field visits.'
    },
    {
      q: 'Does loan amount affect whether KreditBee sends a field agent?',
      a: 'Yes. Sending a field executive costs money. Tiny micro-loans of Rs 3,000 to Rs 12,000 are usually pursued by phone and CIBIL reporting, whereas salaried personal loans of Rs 50,000 to Rs 4,00,000+ in metro and Tier-2 pin codes are far more likely to be assigned to local field agencies after 60+ days overdue.'
    },
    {
      q: 'Do KreditBee recovery agents visit Tier-3 towns and villages?',
      a: 'Field agency coverage is strongest in major metros and Tier-2 hubs (Bengaluru, Delhi NCR, Mumbai, Pune, Hyderabad, Chennai, Kolkata, Ahmedabad, Jaipur, Lucknow). Remote rural pin codes see far fewer physical visits unless a larger co-lent NBFC personal loan is involved.'
    },
    {
      q: 'Can KreditBee agents visit my office or talk to my HR team?',
      a: 'Under the RBI Fair Practices Code and RBI\'s updated recovery conduct directions effective 1 January 2027, agents cannot barge into your workplace to embarrass you before coworkers or disclose your loan default to HR or bosses. Contacting your office generally happens only if you stay unreachable at your home address and registered phone.'
    },
    {
      q: 'Why do callers say an agent is 10 minutes away from my house?',
      a: 'Call-centre tele-collectors frequently use "an agent is reaching your gate in 15 minutes" as a bluff to trigger panic UPI payments. Real field visits only happen between 8:00 AM and 7:00 PM through an authorised agency holding an NBFC letter.'
    },
    {
      q: 'What happens if I moved flats after taking my KreditBee loan?',
      a: 'If you changed rented flats, update your current correspondence address by email with KreditBee and your KFS NBFC so agents do not disturb former landlords or old flatmates, and keep communication open by email.'
    },
    {
      q: 'Can KreditBee call my parents or phone contacts if I miss EMIs?',
      a: 'No. RBI Digital Lending Guidelines ban apps from scraping phone contact lists and forbid recovery agents from calling parents, friends, or relatives who did not sign as co-borrowers or guarantors.'
    },
    {
      q: 'When does combining KreditBee with other debts for settlement make sense?',
      a: 'If you owe a small standalone KreditBee ticket, pay it directly via the app. Professional settlement makes financial sense when KreditBee is one piece of Rs 3,00,000 or more in combined unsecured debt across multiple apps, credit cards, and personal loans.'
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
            <MapPin className="w-4 h-4 text-blue-200" />
            <span>Field Visit Probability, Privacy Laws &amp; Multi-Debt Relief.</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 tracking-tight leading-tight">
            Will KreditBee Agents Come Home for Unpaid Loan EMIs?
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-8">
            Worried whether a missed KreditBee EMI means an agent at your door tomorrow? See real loan-size triggers, metro vs small-town coverage, workplace privacy laws, and ₹3L+ multi-loan settlement options.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#lead-funnel"
              className="bg-white text-blue-950 px-7 py-3.5 rounded-full font-bold text-base hover:bg-blue-50 transition-all shadow-lg inline-flex items-center justify-center gap-2"
            >
              <span>Check ₹3L+ Multi-Debt Plan</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/kreditbee-recovery-agent-home-visit"
              className="bg-blue-900/60 border border-white/30 text-white px-7 py-3.5 rounded-full font-semibold text-base hover:bg-blue-900 transition-all inline-flex items-center justify-center"
            >
              Read Doorstep ID &amp; Conduct Rules
            </Link>
          </div>
        </div>
      </section>

      {/* DIRECT ANSWER + ₹3L SELF-FILTER */}
      <div className="max-w-5xl mx-auto px-4 -mt-8 relative z-20">
        <div
          id="quick-answer-box"
          className="scroll-target bg-white rounded-2xl border-2 border-blue-600 p-5 sm:p-6 shadow-md space-y-3"
        >
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
            <div className="flex items-center gap-2 text-sm sm:text-base font-extrabold text-blue-900">
              <Clock className="w-5 h-5 text-blue-600 flex-shrink-0" />
              <span>Honest Short Answer: When Do KreditBee Agents Actually Visit?</span>
            </div>
            <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold">
              Usually 60+ Days Overdue &amp; ₹50k+ Metro/Tier-2 Tickets
            </span>
          </div>
          <p className="text-sm text-slate-700 leading-relaxed">
            <strong>The Real Picture:</strong> Yes, KreditBee&apos;s partner NBFCs (<strong>Krazybee Services Pvt Ltd</strong> and co-lenders) use local field agencies in major Indian cities, <strong>but</strong> physical visits almost never happen in the first 30 days or on tiny ₹5,000 tickets. Most early &ldquo;we are outside your society&rdquo; phone calls are tele-collection bluffs.
          </p>
          <p className="text-sm text-slate-700 leading-relaxed">
            <strong>₹3,00,000+ Combined Debt Filter:</strong> Owning just one small ₹25,000 KreditBee loan? Pay it inside the app when able. Juggling KreditBee alongside credit cards, personal loans, and other apps totaling <strong>₹3,00,000 or more</strong>? Check your combined settlement plan below.
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
              <li className="text-slate-800 font-semibold">Will KreditBee Agents Come Home?</li>
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
            <section id="ticket-size-economics" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                1. How Loan Size Shapes Field Visit Chances
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Recovery agencies work on commission math. Sending an executive on a two-wheeler across city traffic costs fuel, wages, and supervisor time. Because of that simple cost rule, KreditBee loans split into three very different buckets:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <p className="text-xs font-bold uppercase text-slate-500">Flexi Micro-Loans (₹3k to ₹15k).</p>
                  <p className="text-lg font-extrabold text-slate-900 mt-1">Low Visit Chance.</p>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Handled mostly via automated dialers, SMS, email notices, and CIBIL default reporting.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200">
                  <p className="text-xs font-bold uppercase text-blue-700">Mid-Ticket Loans (₹20k to ₹75k).</p>
                  <p className="text-lg font-extrabold text-blue-900 mt-1">Moderate in Metros.</p>
                  <p className="text-xs text-slate-700 mt-1 leading-relaxed">
                    May trigger an agency address check after 60 to 90 days if your KYC pin code is in a major city.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200">
                  <p className="text-xs font-bold uppercase text-amber-800">Salaried PL (₹80k to ₹5L+).</p>
                  <p className="text-lg font-extrabold text-amber-950 mt-1">High Visit Chance.</p>
                  <p className="text-xs text-slate-700 mt-1 leading-relaxed">
                    Larger Krazybee or co-lent NBFC personal loans routinely get assigned to local field teams past 60 DPD.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 2 */}
            <section id="overdue-days-timeline" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                2. Overdue Timeline: Day 1 to Day 90+ Stages
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Knowing what happens in each overdue bucket stops panic when your first e-NACH auto-debit bounces:
              </p>
              <ul className="list-disc pl-6 space-y-2.5 text-sm md:text-base text-slate-700">
                <li>
                  <strong>Days 1 to 30 Past Due (SMA-0):</strong> App reminders, bounce fees, and central call-centre calls asking when you will clear the missed EMI. Almost zero home visits occur here.
                </li>
                <li>
                  <strong>Days 31 to 60 Past Due (SMA-1):</strong> Stronger tele-calling and overdue warning emails from Krazybee Services or the partner NBFC.
                </li>
                <li>
                  <strong>Days 61 to 90 Past Due (SMA-2):</strong> Unresponsive salaried personal loan accounts in covered pin codes get allocated to empanelled local field agencies, alongside formal demand notices.
                </li>
                <li>
                  <strong>90+ Days Past Due (NPA Stage):</strong> The loan turns into a Non-Performing Asset on NBFC books. At this stage, NBFC settlement teams open doors to structured lump-sum OTS talks.
                </li>
              </ul>
            </section>

            {/* SECTION 3 */}
            <section id="city-pincode-coverage" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                3. Metro Cities vs Small-Town Pin-Code Coverage
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                KreditBee is headquartered in Bengaluru and works with third-party collection vendors across major urban clusters. Field visits are most common in <strong>Bengaluru, Mumbai, Thane, Navi Mumbai, Delhi NCR, Pune, Hyderabad, Chennai, Kolkata, Ahmedabad, Surat, Jaipur, Lucknow, and Indore</strong>.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If your Aadhaar or current address sits in a remote Tier-3 town or rural district without a local vendor hub, recovery usually stays on phone calls, speed-post notices, and online arbitration emails unless your loan sits with a nationwide co-lender like Poonawalla or Piramal.
              </p>
            </section>

            {/* SECTION 4 */}
            <section id="bluff-calls-vs-real-visit" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                4. Spotting Call-Centre Bluffs vs Genuine Agency Allocation
              </h2>
              <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5 space-y-2.5">
                <p className="text-sm font-bold text-blue-950 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-blue-700 flex-shrink-0" />
                  <span>3 Signs a Visit Threat on the Phone Is Just a Bluff:</span>
                </p>
                <ul className="list-disc pl-6 space-y-1.5 text-xs sm:text-sm text-slate-800">
                  <li>The caller shouts &ldquo;four boys and a police van are reaching your flat in 20 minutes unless you pay ₹5,000 now.&rdquo; Police never accompany civil loan collectors.</li>
                  <li>You ask which RBI-registered NBFC and collection agency they belong to, and they cut the call or refuse to email official agency details.</li>
                  <li>They call at 8:30 PM threatening a tonight visit. Under RBI rules (including the stricter <strong>1 January 2027</strong> recovery conduct norms), any visit outside <strong>8:00 AM to 7:00 PM</strong> is illegal.</li>
                </ul>
              </div>
              <p className="text-xs text-slate-600">
                If an agent actually rings your bell, follow our step-by-step <Link href="/kreditbee-recovery-agent-home-visit" className="text-blue-600 hover:underline font-semibold">KreditBee home visit gate checklist</Link>.
              </p>
            </section>

            {/* SECTION 5 */}
            <section id="office-family-privacy-laws" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                5. Workplace, Family &amp; Contact-List Privacy Rights
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Salaried borrowers fear an office scene far more than a quiet knock at home. Know the exact legal lines protecting your job and family under RBI Digital Lending Directions and the <strong>1 January 2027</strong> recovery rules:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm md:text-base text-slate-700">
                <li>
                  <strong>No Contact-List Harassment:</strong> Regulated apps cannot scrape your phonebook or message friends, siblings, or colleagues.
                </li>
                <li>
                  <strong>No Workplace Shaming:</strong> Agents cannot walk into your office floor, argue with reception, or email your HR manager about a personal debt.
                </li>
                <li>
                  <strong>Keep One Channel Open:</strong> Answering or replying by email regarding your home address removes any excuse for an agent to trace you at work.
                </li>
              </ul>
            </section>

            {/* SECTION 6 */}
            <section id="relocated-tenant-steps" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                6. What If You Moved Out of Your Old Rented Flat?
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Many young professionals take a KreditBee loan while renting a PG or flat in Bengaluru or Pune, lose their job, and move back to their hometown. Do not hide silently while agents knock on your old landlord&apos;s door!
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Send a short email to KreditBee customer care and your KFS NBFC updating your current postal address and stating that your old rental lease has ended. Once informed in writing, repeatedly harassing an ex-landlord violates RBI conduct guidelines.
              </p>
            </section>

            {/* SECTION 7 */}
            <section id="combining-kreditbee-3lakh" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                7. Combining KreditBee + Cards + Personal Loans (₹3L+)
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Here is the trap we see every day: a borrower takes a ₹60,000 KreditBee loan to pay a credit card bill, then borrows from two more apps to pay KreditBee, on top of a ₹2.5 Lakh bank personal loan. Within months, total unsecured debt crosses <strong>₹3,00,000 to ₹10,00,000+</strong>.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If your combined debt is <strong>₹3,00,000 or higher</strong>, CredSettle helps you stop the rollover cycle:
              </p>
              <ol className="list-decimal pl-6 space-y-2 text-sm md:text-base text-slate-700">
                <li>We audit every app NBFC, credit card issuer, and bank loan in your stack.</li>
                <li>We guide formal communication and RBI anti-harassment escalations while you build a settlement fund.</li>
                <li>We negotiate written One-Time Settlements across your high-fee app loans, cards, and PLs in smart priority order. See our <Link href="/tools/multiple-credit-card-payoff-vs-settlement-calculator" className="text-blue-600 hover:underline font-semibold">multi-debt payoff vs settlement calculator</Link> and learn how to <Link href="/settle-multiple-personal-loans" className="text-blue-600 hover:underline font-semibold">settle multiple personal loans</Link>.</li>
              </ol>
            </section>

            {/* SECTION 8 */}
            <section id="cibil-closure-roadmap" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                8. Closing Cleanly: Sanction Letter, NOC &amp; CIBIL
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Always check that your written OTS letter names Krazybee Services Pvt Ltd or your exact KFS lender. Pay only in the official app or NBFC bank account. Get your No Dues Certificate within 30 days and check CIBIL after 45 days. Read our <Link href="/how-to-improve-cibil-score-after-loan-settlement" className="text-blue-600 hover:underline font-semibold">CIBIL score recovery guide</Link>.
              </p>
            </section>

            {/* SECTION 9 */}
            <section id="calm-prep-steps" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                9. Five Calm Steps to Take Right Now
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Do not lose sleep over loud phone bluffs. Take five calm steps today to stay safe and in control:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm md:text-base text-slate-700">
                <li>Write down every loan app, card bill, and bank loan you owe on one sheet of paper.</li>
                <li>Check your CIBIL file to see which NBFC holds your KreditBee loan.</li>
                <li>Keep one email thread open with support so you have clear proof of hardship.</li>
                <li>Save call logs if anyone threatens a visit after 7:00 PM or calls your family.</li>
                <li>Never take a new fast loan just to pay one old missed EMI.</li>
              </ul>
            </section>

            <CompanySection />

            {/* FAQS */}
            <section id="faqs" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                Will KreditBee Agents Visit Home? Common Questions
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
                  href="/kreditbee-recovery-agent-home-visit"
                  className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 hover:border-blue-600 hover:text-blue-600"
                >
                  KreditBee Home Visit Gate Rules.
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
                  Negotiate Multiple Loans Together.
                </Link>
                <Link
                  href="/how-to-stop-recovery-agent-harassment"
                  className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 hover:border-blue-600 hover:text-blue-600"
                >
                  Stop Recovery Harassment.
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
                Helps salaried borrowers navigate fintech NBFC defaults, RBI privacy laws, and multi-loan OTS plans.
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
                <span>₹3,00,000+ Combined Debt Help.</span>
              </div>
              <p className="text-lg font-bold leading-snug">
                Stuck With KreditBee + Credit Cards + Personal Loans?
              </p>
              <p className="text-xs text-blue-100 leading-relaxed">
                Combine all your unsecured accounts above ₹3,00,000 into one calm, legally protected settlement roadmap.
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
                <span>Privacy Quick Facts.</span>
              </p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Contact-list scraping is banned by RBI rules.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Office floor shaming violates 1 Jan 2027 norms.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Early 15-minute visit calls are almost always bluffs.</span>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
