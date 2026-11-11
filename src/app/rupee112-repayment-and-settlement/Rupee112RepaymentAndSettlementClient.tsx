'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import InteractiveLeadFunnel from '@/components/InteractiveLeadFunnel';
import CompanySection from '@/components/CompanySection';
import {
  BookOpen,
  ShieldCheck,
  AlertCircle,
  Wallet,
  Phone,
  Lock,
  ArrowRight,
  ExternalLink,
  Check,
  ChevronDown,
  ChevronUp,
  Clock
} from 'lucide-react';

export default function Rupee112RepaymentAndSettlementClient() {
  const [activeId, setActiveId] = useState<string>('rupee112-3lakh-gate');
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
    { id: 'rupee112-3lakh-gate', label: '₹3L+ Combined Debt Filter' },
    { id: 'rupee112-nbfc-kfs', label: '1. Rupee112 & KFS NBFC Check' },
    { id: 'payday-bullet-spiral', label: '2. Why Bullet Loans Trap Salary' },
    { id: 'stop-rollover-fees', label: '3. Avoid Extension Fee Traps' },
    { id: 'ots-waiver-mechanics', label: '4. Principal vs Fee Waivers' },
    { id: 'safe-closure-steps', label: '5. 5-Step Safe Settlement Plan' },
    { id: 'rbi-2027-workplace-rights', label: '6. RBI 1 Jan 2027 Privacy Rules' },
    { id: 'combining-3lakh-debts', label: '7. Escaping a ₹3L+ Multi-App Trap' },
    { id: 'noc-cibil-verification', label: '8. NOC & CIBIL Cleanup' },
    { id: 'scam-check-rupee112', label: '9. Spotting Fake UPI Settlement Links' },
    { id: 'faqs', label: 'FAQs' }
  ];

  const faqs = [
    {
      q: 'Which NBFC is behind Rupee112 loans?',
      a: 'Rupee112 operates as a digital lending platform associated with RBI-registered NBFC partners such as Dev-Aashish Capitals Private Limited (always check your Key Fact Statement and CIBIL report to verify the exact NBFC holding your loan).'
    },
    {
      q: 'Why is Rupee112 salary-day bullet repayment so hard to clear?',
      a: 'Short-tenure salaried bridge loans deduct upfront processing fees and demand the entire principal plus high daily or monthly interest on your very next payday, wiping out 30% to 50% of your next salary in one shot.'
    },
    {
      q: 'Can I settle a Rupee112 loan if I cannot pay the inflated overdue bill?',
      a: 'Yes. When genuine hardship pushes the account past 90 days overdue into NPA status, the RBI-registered NBFC on your KFS can approve a written Full and Final One-Time Settlement waiving accumulated late fees and penal charges.'
    },
    {
      q: 'Should I pay an extension or rollover fee on a short-term loan?',
      a: 'Avoid paying informal extension fees that do not reduce your principal balance. Paying Rs 8,000 every month just to push a Rs 35,000 due date by 30 days drains cash without closing your debt.'
    },
    {
      q: 'Does CredSettle handle a standalone Rs 25,000 Rupee112 loan?',
      a: 'No. If Rupee112 is your only loan and your total debt is under Rs 3,00,000, email the NBFC Grievance Officer directly to request a penalty waiver and close the account yourself. CredSettle serves borrowers holding Rs 3,00,000 or more in combined unsecured debt across multiple apps, credit cards, and personal loans.'
    },
    {
      q: 'Can Rupee112 agents message my office HR or family?',
      a: 'No. Under RBI Digital Lending Directions and RBI\'s updated recovery conduct norms taking effect on 1 January 2027, recovery calls are restricted to 8:00 AM to 7:00 PM and contacting employers, colleagues, or family members is strictly illegal.'
    },
    {
      q: 'How do I check if a Rupee112 settlement offer is genuine?',
      a: 'Insist on a formal sanction email from the official corporate domain of the RBI-registered NBFC named on your KFS, verify your loan ID and Full and Final closure wording, and pay only via official NBFC channels, never to a personal WhatsApp UPI number.'
    },
    {
      q: 'Will Rupee112 default show up on my CIBIL report?',
      a: 'Yes. Because loans are booked under an RBI-registered NBFC, overdue days and settlements are reported to credit bureaus. Collecting your 30-day No Dues Certificate ensures CIBIL updates to zero balance.'
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
            <Wallet className="w-4 h-4 text-blue-200" />
            <span>Short-Tenure Salaried Loan &amp; Multi-Debt Relief Guide.</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 tracking-tight leading-tight">
            Rupee112 Loan Repayment Trap &amp; Safe Settlement Guide
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-8">
            Caught in a payday bullet-repayment spiral across Rupee112, other salary apps, credit cards, and personal loans? Check partner NBFC rules, RBI 1 January 2027 rights, and ₹3L+ multi-loan settlement steps.
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
              href="/negotiate-multiple-loans-together"
              className="bg-blue-900/60 border border-white/30 text-white px-7 py-3.5 rounded-full font-semibold text-base hover:bg-blue-900 transition-all inline-flex items-center justify-center"
            >
              Read Multi-Loan Closure Strategy
            </Link>
          </div>
        </div>
      </section>

      {/* ₹3L+ COMBINED DEBT FILTER */}
      <div className="max-w-5xl mx-auto px-4 -mt-8 relative z-20">
        <div
          id="rupee112-3lakh-gate"
          className="scroll-target bg-white rounded-2xl border-2 border-blue-600 p-5 sm:p-6 shadow-md space-y-3"
        >
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
            <div className="flex items-center gap-2 text-sm sm:text-base font-extrabold text-blue-900">
              <Clock className="w-5 h-5 text-blue-600 flex-shrink-0" />
              <span>Self-Check: Single Short-Term Ticket vs ₹3,00,000+ Debt Spiral</span>
            </div>
            <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-900 text-xs font-bold">
              CredSettle Minimum Case Floor: ₹3,00,000+ Combined Debt
            </span>
          </div>
          <p className="text-sm text-slate-700 leading-relaxed">
            <strong>Single Ticket Under ₹3,00,000 Total Debt?</strong> If you only owe ₹20,000 or ₹50,000 on Rupee112 with no other heavy debts, follow Section 5 below to email the KFS NBFC Grievance Officer directly and close your loan without paying agency fees.
          </p>
          <p className="text-sm text-slate-700 leading-relaxed">
            <strong>₹3,00,000+ Combined Salary-App &amp; Card Trap?</strong> Salaried borrowers who turn to bridge apps like Rupee112 almost always carry 4 to 8 other apps, maxed credit cards, and bank personal loans totaling <strong>₹3,00,000 or higher</strong>. Enter your combined debt below to plan one clean exit.
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
              <li className="text-slate-800 font-semibold">Rupee112 Repayment &amp; Settlement</li>
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
            <section id="rupee112-nbfc-kfs" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                1. Rupee112 &amp; How to Verify Your Regulated NBFC
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Rupee112 markets emergency short-term advances to salaried employees in metro cities. Under RBI Digital Lending Directions, no web or mobile platform can lend money unless the loan sits on the balance sheet of an RBI-regulated entity.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Rupee112 operates with RBI-registered NBFC partners such as <strong>Dev-Aashish Capitals Private Limited</strong> (check your sanction email, Key Fact Statement, and CIBIL report to verify the exact NBFC name booked against your PAN). That NBFC is legally bound by RBI interest disclosure, penal charge, and compromise settlement rules.
              </p>
            </section>

            {/* SECTION 2 */}
            <section id="payday-bullet-spiral" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                2. Why Salary-Day Bullet Loans Trigger Debt Spirals
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                A regular 24-month bank loan spreads ₹40,000 into small ₹2,000 monthly EMIs. A short-tenure bridge loan works very differently:
              </p>
              <ul className="list-disc pl-6 space-y-2.5 text-sm md:text-base text-slate-700">
                <li>
                  <strong>Upfront Fee Cut:</strong> High processing and platform fees are deducted at disbursal, so ₹40,000 sanctioned may put only ₹35,500 in your bank account.
                </li>
                <li>
                  <strong>Next-Salary Bullet Hit:</strong> Just 25 to 35 days later, the entire ₹40,000 plus steep short-term interest falls due in one lump sum on payday.
                </li>
                <li>
                  <strong>The Multi-App Domino Effect:</strong> Paying ₹44,000 out of a ₹65,000 salary leaves nothing for rent or existing credit card EMIs, pushing borrowers to take two more instant apps the very next week!
                </li>
              </ul>
            </section>

            {/* SECTION 3 */}
            <section id="stop-rollover-fees" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                3. Never Burn Cash on Informal Rollover Extensions
              </h2>
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 space-y-2">
                <p className="text-sm font-bold text-amber-950 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-700 flex-shrink-0" />
                  <span>Cash-Drain Trap to Stop Today:</span>
                </p>
                <p className="text-xs sm:text-sm text-amber-950 leading-relaxed">
                  Borrowers often pay ₹6,000 to ₹10,000 three months in a row just to &ldquo;extend&rdquo; a due date or quiet an aggressive caller, only to find their principal balance has not dropped by ₹1! Only pay either 100% closure or a documented Full and Final One-Time Settlement backed by an official NBFC sanction letter.
                </p>
              </div>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Think about the math before sending partial cash. Three monthly rollovers of ₹8,000 burn ₹24,000 of your hard-earned salary while your ₹35,000 loan stays wide open on CIBIL. Keeping that ₹24,000 safe in a separate bank account gives you real lump-sum power to close the entire loan in one shot with a written NBFC letter and a clean zero-balance slip.
              </p>
            </section>

            {/* SECTION 4 */}
            <section id="ots-waiver-mechanics" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                4. How Principal Isolation &amp; NPA Waivers Work
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When you miss a bullet due date on a short-tenure loan, daily overdue charges quickly swell a ₹40,000 principal into an ₹80,000+ demand bill. Once the loan crosses <strong>90 days past due (NPA)</strong>, NBFC recovery managers know that inflated penalty math is uncollectible from a distressed borrower.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under <strong>RBI Circular RBI/2023-24/40</strong>, documented hardship negotiations focus on <strong>principal isolation</strong>: stripping away stacked daily late fees and penal charges to close the account near or moderately below the core principal in one clean payment. (Exact outcomes vary by case and are never pre-fixed.)
              </p>
            </section>

            {/* SECTION 5 */}
            <section id="safe-closure-steps" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                5. Five-Step Safe Rupee112 Settlement Checklist
              </h2>
              <ol className="list-decimal pl-6 space-y-3 text-sm md:text-base text-slate-700">
                <li>
                  <strong>Download Your KFS &amp; Disbursal Proof:</strong> Note the exact amount credited to your bank account vs fees deducted on Day 1.
                </li>
                <li>
                  <strong>Confirm the NBFC Name on CIBIL:</strong> Identify Dev-Aashish Capitals or the exact RBI-registered NBFC reporting the trade line.
                </li>
                <li>
                  <strong>Send Written Hardship Notice:</strong> Email your income-loss, salary-delay, or medical records to official support and the NBFC Grievance Officer.
                </li>
                <li>
                  <strong>Demand an Official Domain OTS Letter:</strong> Never accept WhatsApp text promises. Insist on a PDF sanction letter from the official NBFC / Rupee112 domain stating Full and Final closure.
                </li>
                <li>
                  <strong>Pay Only Official Bank / App Channels:</strong> Keep your UTR receipt and collect your signed No Dues Certificate within 30 days.
                </li>
              </ol>
            </section>

            {/* SECTION 6 */}
            <section id="rbi-2027-workplace-rights" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                6. Workplace Privacy &amp; RBI 1 January 2027 Rules
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Because salaried bridge apps collect official work email IDs during KYC, borrowers panic that collectors will email their boss or HR desk. Know your legal shield under RBI Digital Lending Directions and the updated RBI agent conduct rules effective <strong>1 January 2027</strong>:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm md:text-base text-slate-700">
                <li>Agents can contact you only between <strong>8:00 AM and 7:00 PM</strong>.</li>
                <li>Emailing HR teams, calling office landlines to shame you, or messaging relatives breaks RBI privacy rules.</li>
                <li>Save screenshots or call recordings of any threat, complain to the NBFC Nodal Officer, and escalate after 30 days on `cms.rbi.org.in`. See our guide to <Link href="/how-to-stop-recovery-agent-harassment" className="text-blue-600 hover:underline font-semibold">stopping recovery agent harassment</Link>.</li>
              </ul>
            </section>

            {/* SECTION 7 */}
            <section id="combining-3lakh-debts" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                7. Escaping a ₹3,00,000+ Multi-App &amp; Card Debt Trap
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Almost nobody takes a high-cost payday bridge loan when money is smooth. Usually, Rupee112 is the last emergency patch on top of maxed credit cards, bank personal loans, KreditBee, and CASHe totaling <strong>₹3,00,000 to ₹15,00,000+</strong>.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When your total unsecured debt is <strong>₹3,00,000 or more</strong>, CredSettle helps break that trap. You stop taking new bridge loans. You save into one monthly fund. You close high-fee app loans first with real OTS letters, and then settle larger credit cards and bank loans step by step. Read how we <Link href="/settle-multiple-personal-loans" className="text-blue-600 hover:underline font-semibold">settle multiple personal loans</Link> and <Link href="/settle-multiple-credit-cards" className="text-blue-600 hover:underline font-semibold">settle multiple credit cards</Link>.
              </p>
            </section>

            {/* SECTION 8 */}
            <section id="noc-cibil-verification" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                8. Closing Cleanly: 30-Day NOC &amp; CIBIL Check
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                After you pay your agreed OTS sum, get your signed NBFC <strong>No Dues Certificate</strong> within 30 days. Pull your CIBIL report after 45 to 60 days to check that the balance reads ₹0. Read our <Link href="/get-noc-after-loan-settlement" className="text-blue-600 hover:underline font-semibold">NOC after loan settlement guide</Link> and <Link href="/how-to-improve-cibil-score-after-loan-settlement" className="text-blue-600 hover:underline font-semibold">CIBIL rebuild steps</Link>.
              </p>
            </section>

            {/* SECTION 9 */}
            <section id="scam-check-rupee112" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                9. How to Spot Fake WhatsApp Settlement Links
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Short-term loan borrowers face a high risk of fake payment links. Protect your hard-earned cash with five simple checks before sending ₹1:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm md:text-base text-slate-700">
                <li>Never trust a discount text on WhatsApp without an official email from the NBFC domain.</li>
                <li>Check that your exact loan number and PAN name match the written letter.</li>
                <li>Make sure the letter says <strong>Full and Final Settlement</strong> with zero dues left after payment.</li>
                <li>Never scan a personal QR code belonging to an individual caller.</li>
                <li>Keep your bank UTR receipt and email reply safe for future credit checks. See our <Link href="/how-to-verify-bank-ots-sanction-letter-avoid-settlement-scams" className="text-blue-600 hover:underline font-semibold">OTS letter check guide</Link>.</li>
              </ul>
            </section>

            <CompanySection />

            {/* FAQS */}
            <section id="faqs" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                Rupee112 Repayment &amp; Settlement: Common Questions
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
                Related App &amp; Multi-Debt Settlement Guides.
              </p>
              <div className="flex flex-wrap gap-2">
                <Link
                  href="/mpokket-30-90-days-meaning"
                  className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 hover:border-blue-600 hover:text-blue-600"
                >
                  mPokket 30 to 90 Days Meaning.
                </Link>
                <Link
                  href="/moneytap-loan-settlement"
                  className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 hover:border-blue-600 hover:text-blue-600"
                >
                  MoneyTap Loan Settlement.
                </Link>
                <Link
                  href="/kreditbee-recovery-agent-home-visit"
                  className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 hover:border-blue-600 hover:text-blue-600"
                >
                  KreditBee Home Visit Rules.
                </Link>
                <Link
                  href="/negotiate-multiple-loans-together"
                  className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 hover:border-blue-600 hover:text-blue-600"
                >
                  Settle Multiple Loans Together.
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
                Guides salaried borrowers out of short-tenure bridge loan traps and multi-creditor debt spirals.
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
                Caught in Payday Rollovers Plus Cards &amp; Personal Loans?
              </p>
              <p className="text-xs text-blue-100 leading-relaxed">
                Break the payday bridge cycle and settle all your ₹3L+ unsecured debts systematically.
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
                <span>Payday Loan Safety.</span>
              </p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Stop paying principal-zero extension fees.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Workplace HR harassment breaks RBI rules.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Settle only on official KFS NBFC letterhead.</span>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
