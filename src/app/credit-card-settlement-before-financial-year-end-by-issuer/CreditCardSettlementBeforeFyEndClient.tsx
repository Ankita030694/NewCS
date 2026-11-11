'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import InteractiveLeadFunnel from '@/components/InteractiveLeadFunnel';
import CompanySection from '@/components/CompanySection';
import {
  BookOpen,
  ShieldCheck,
  AlertCircle,
  CreditCard,
  Phone,
  Lock,
  ArrowRight,
  ExternalLink,
  Check,
  ChevronDown,
  ChevronUp,
  Clock
} from 'lucide-react';

export default function CreditCardSettlementBeforeFyEndClient() {
  const [activeId, setActiveId] = useState<string>('issuer-q4-overview-box');
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
    { id: 'issuer-q4-overview-box', label: 'Q4 Write-Off & ₹3L+ Filter' },
    { id: 'npa-90-vs-chargeoff-180', label: '1. 90-Day NPA vs 180-Day Write-Off' },
    { id: 'sbicard-bobcard-nbfc-issuers', label: '2. SBI Card & BOBCARD Cycles' },
    { id: 'hdfc-icici-axis-private-banks', label: '3. HDFC, ICICI & Axis Q4 Rules' },
    { id: 'rbl-kotak-indusind-cycles', label: '4. RBL, Kotak & IndusInd Rules' },
    { id: 'jan-feb-mar-split-plan-trap', label: '5. Split-Instalment March Cutoff' },
    { id: 'salary-lien-warning', label: '6. Same-Bank Salary Lien Trap' },
    { id: 'sequencing-multi-card-q4', label: '7. Sequencing ₹3L+ Multi-Cards' },
    { id: 'rbi-2027-sanction-noc', label: '8. RBI 2027 Rules, OTS & NOC' },
    { id: 'faqs', label: 'FAQs' }
  ];

  const faqs = [
    {
      q: 'How do credit card issuers treat 90-day NPA vs 180-day charge-off in Q4?',
      a: 'Under RBI asset norms, an unpaid credit card bill turns into an NPA at 90 days past the Minimum Amount Due date. Around 180 days past due, major card issuers move unsecured card balances into internal charge-off / write-off pools requiring 100% provisioning, where Q4 lump-sum waivers are most actively approved.'
    },
    {
      q: 'Why is SBI Card (SBICPSL) structured differently from SBI Bank in Q4?',
      a: 'SBI Card is operated by SBI Cards and Payment Services Ltd (a listed NBFC), not State Bank of India branches. SBICPSL runs dedicated quarterly and FY-end write-off recovery targets completely separate from SBI Rinn Samadhan bank schemes.'
    },
    {
      q: 'Can a Q4 split-instalment card settlement cross past March 31?',
      a: 'Most Q4 FY-end card settlement offers require all 2 or 3 instalments (for example January, February, and March) to clear strictly before March 25 to March 31 so the recovery books inside the same financial year. Missing the final March instalment revokes the entire waiver.'
    },
    {
      q: 'Will a card that is only 30 days overdue get a deep FY-end settlement?',
      a: 'No. Even in March, card issuers do not grant deep principal waivers on fresh 30-day SMA-0 accounts. FY-end write-off concessions apply primarily to cards already aged past 90 to 180+ days overdue with documented hardship.'
    },
    {
      q: 'What is the salary account set-off risk at HDFC, ICICI, Axis, or Kotak?',
      a: 'If your defaulted credit card and your active salary account sit inside the exact same private bank (such as HDFC, ICICI, Axis, or Kotak), the bank can invoke a banker\'s lien or hold on incoming salary credits before approving an OTS.'
    },
    {
      q: 'Which card should I settle first in Q4 if I hold 4 defaulted cards?',
      a: 'Prioritise cards already sitting in the 180+ day write-off bucket where the issuer grants the steepest single-shot Q4 fee and interest cut, or any card linked to an aggressive arbitration notice.'
    },
    {
      q: 'What RBI recovery rules govern Q4 card collection drives in 2027?',
      a: 'Under the RBI Master Direction on Credit Cards and updated recovery conduct rules effective 1 January 2027, card recovery calls and visits are strictly capped between 8:00 AM and 7:00 PM, agents must carry bank/NBFC IDs, and workplace or family shaming is illegal.'
    },
    {
      q: 'Does CredSettle handle single small credit card bills under Rs 3 Lakhs?',
      a: 'CredSettle represents cardholders whose combined unsecured debt across credit cards, personal loans, and loan apps is Rs 3,00,000 or higher. Single sub-Rs 3L cardholders can use our issuer rules below to request settlement directly with their card nodal desk.'
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
            <CreditCard className="w-4 h-4 text-blue-200" />
            <span>Issuer-by-Issuer Q4 NPA Provisioning &amp; Write-Off Guide.</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 tracking-tight leading-tight">
            Credit Card Settlement Before FY-End: Issuer Q4 Guide
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-8">
            See how SBI Card, HDFC, ICICI, Axis, RBL, Kotak, IndusInd, and BOBCARD manage Q4 (Jan to March) 180-day write-off pools, split-payment cutoffs, and ₹3,00,000+ multi-card settlements.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#lead-funnel"
              className="bg-white text-blue-950 px-7 py-3.5 rounded-full font-bold text-base hover:bg-blue-50 transition-all shadow-lg inline-flex items-center justify-center gap-2"
            >
              <span>Check ₹3L+ Multi-Card Settlement</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/tools/multiple-credit-card-payoff-vs-settlement-calculator"
              className="bg-blue-900/60 border border-white/30 text-white px-7 py-3.5 rounded-full font-semibold text-base hover:bg-blue-900 transition-all inline-flex items-center justify-center"
            >
              Open Multi-Card Calculator
            </Link>
          </div>
        </div>
      </section>

      {/* Q4 OVERVIEW + ₹3L+ FILTER */}
      <div className="max-w-5xl mx-auto px-4 -mt-8 relative z-20">
        <div
          id="issuer-q4-overview-box"
          className="scroll-target bg-white rounded-2xl border-2 border-blue-600 p-5 sm:p-6 shadow-md space-y-3"
        >
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
            <div className="flex items-center gap-2 text-sm sm:text-base font-extrabold text-blue-900">
              <Clock className="w-5 h-5 text-blue-600 flex-shrink-0" />
              <span>Why Card Issuers Push Write-Off Recoveries in Jan, Feb &amp; March</span>
            </div>
            <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-900 text-xs font-bold">
              CredSettle Minimum Case Floor: ₹3,00,000+ Combined Debt
            </span>
          </div>
          <p className="text-sm text-slate-700 leading-relaxed">
            <strong>Issuer Balance-Sheet Logic:</strong> Unsecured credit cards compound at 36% to 45% APR plus 18% GST and over-limit fees. Once a card crosses 90 days into NPA and 180 days into technical write-off, every rupee collected before <strong>31 March</strong> flows straight back as clean Q4 recovery income!
          </p>
          <p className="text-sm text-slate-700 leading-relaxed">
            <strong>₹3,00,000+ Multi-Card Representation:</strong> Holding 2 to 6 maxed credit cards plus personal loans or apps totaling <strong>₹3,00,000 or more</strong>? Enter your combined stack below to sequence Q4 settlements safely.
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
                <Link href="/credit-card-settlement" className="hover:text-blue-600 font-medium">
                  Credit Card Settlement
                </Link>
              </li>
              <li>/</li>
              <li className="text-slate-800 font-semibold">FY-End Settlement by Issuer</li>
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
            <section id="npa-90-vs-chargeoff-180" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                1. 90-Day NPA vs 180-Day Charge-Off: When Q4 Cuts Unlock
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Cardholders often think calling their bank in March when a card is only 20 days late will unlock a 50% discount. Card accounting never works like that! Every Indian card issuer tracks three distinct ageing gates:
              </p>
              <ul className="list-disc pl-6 space-y-2.5 text-sm md:text-base text-slate-700">
                <li>
                  <strong>1 to 89 Days Past Minimum Due (SMA Stage):</strong> Card gets blocked for spending, late fees and 42% APR pile up, and issuers push EMI conversion rather than OTS waivers.
                </li>
                <li>
                  <strong>90 Days Past Due (NPA Classification):</strong> Under RBI norms, the card turns into a Non-Performing Asset. Initial settlement authority opens for documented hardship cases.
                </li>
                <li>
                  <strong>180+ Days Past Due (Charge-Off / Write-Off Pool):</strong> Unsecured card portfolios face 100% provisioning / technical write-off around 180 DPD. Cards sitting in this bucket during January, February, and March see the highest delegation power to waive accumulated interest, GST on fees, and late charges! See our <Link href="/credit-card-npa-timeline" className="text-blue-600 hover:underline font-semibold">credit card NPA timeline guide</Link>.
                </li>
              </ul>
            </section>

            {/* SECTION 2 */}
            <section id="sbicard-bobcard-nbfc-issuers" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                2. Standalone NBFC Card Issuers: SBI Card &amp; BOBCARD
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Unlike private banks that hold cards inside the bank balance sheet, two major PSU-affiliated card issuers operate as separate RBI-registered NBFCs:
              </p>
              <ul className="list-disc pl-6 space-y-2.5 text-sm md:text-base text-slate-700">
                <li>
                  <strong>SBI Card (SBI Cards and Payment Services Ltd):</strong> Listed separately on stock exchanges (`SBICARD`), meaning Q4 (Jan to March) gross write-off and recovery metrics are scrutinised directly by quarterly analysts. SBICPSL issues digitally verifiable settlement letters with strict March payment cutoffs. Check our <Link href="/sbi-credit-card-settlement-email-id-and-number" className="text-blue-600 hover:underline font-semibold">SBI Card official settlement contacts guide</Link>.
                </li>
                <li>
                  <strong>BOBCARD Limited (Bank of Baroda Subsidiary):</strong> Operates separately from Bank of Baroda retail branches. Aged 180+ DPD BOBCARD accounts go through dedicated NBFC recovery desks ahead of 31 March closing.
                </li>
              </ul>
            </section>

            {/* SECTION 3 */}
            <section id="hdfc-icici-axis-private-banks" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                3. Big Private Bank Issuers: HDFC, ICICI &amp; Axis Bank
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                India&apos;s three largest private bank card issuers run structured internal bucket delegations during Q4:
              </p>
              <div className="overflow-x-auto rounded-2xl border border-slate-200">
                <table className="w-full text-left text-xs sm:text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="p-3.5 border-r border-slate-700 font-bold">Card Issuer.</th>
                      <th className="p-3.5 font-bold">Key Q4 FY-End Settlement Behaviour.</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-700">
                    <tr>
                      <td className="p-3.5 border-r border-slate-200 font-semibold text-slate-900">HDFC Bank Cards.</td>
                      <td className="p-3.5">
                        Strict matrix approvals by DPD bucket; one-shot March settlements get noticeably better waivers than 3-month split plans. Read <Link href="/credit-card-settlement-hdfc" className="text-blue-600 hover:underline font-semibold">HDFC card settlement rules</Link>.
                      </td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3.5 border-r border-slate-200 font-semibold text-slate-900">ICICI Bank Cards.</td>
                      <td className="p-3.5">
                        Centralised system-generated settlement letters with tight validity windows before late-March accounting cutoffs. Read <Link href="/icici-credit-card-settlement" className="text-blue-600 hover:underline font-semibold">ICICI card settlement guide</Link>.
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3.5 border-r border-slate-200 font-semibold text-slate-900">Axis Bank Cards.</td>
                      <td className="p-3.5">
                        Large portfolio (including migrated Citi card accounts); active Q4 cleanup on 180+ DPD accounts backed by income-shock proof.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 4 */}
            <section id="rbl-kotak-indusind-cycles" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                4. High-Yield Card Portfolios: RBL, Kotak &amp; IndusInd
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Issuers with large unsecured credit card books such as <strong>RBL Bank</strong> (including legacy co-branded portfolios), <strong>Kotak Mahindra Bank</strong>, and <strong>IndusInd Bank</strong> face steep quarterly credit-cost provisions on 180+ day card defaults.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                During January through March, these issuers frequently authorise regional recovery managers to strip away stacked late-payment fees, over-limit fees, and 42% revolving interest when a distressed cardholder offers one verified lump sum before 25 March. Also check our <Link href="/rbl-credit-card-settlement-letter-format" className="text-blue-600 hover:underline font-semibold">RBL card settlement letter guide</Link>.
              </p>
            </section>

            {/* SECTION 5 */}
            <section id="jan-feb-mar-split-plan-trap" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                5. The Jan-Feb-March Split-Instalment Cutoff Trap
              </h2>
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 space-y-2.5">
                <p className="text-sm font-bold text-amber-950 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-700 flex-shrink-0" />
                  <span>Never Let a Q4 Split Settlement Cross March 31:</span>
                </p>
                <p className="text-xs sm:text-sm text-amber-950 leading-relaxed">
                  In January, an agency may offer a 3-part card settlement due on 25 January, 25 February, and <strong>25 March</strong>. In late February, they can offer at most 2 parts (Feb + March). In March, almost every issuer demands <strong>1 single shot on or before 25 to 29 March</strong>!
                </p>
                <p className="text-xs sm:text-sm text-amber-950 leading-relaxed">
                  If you pay Part 1 and Part 2 but miss the final March cutoff by 48 hours, the settlement letter becomes null and void, your earlier payments get absorbed into card interest, and the full pre-settlement bill comes back!
                </p>
              </div>
            </section>

            {/* SECTION 6 */}
            <section id="salary-lien-warning" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                6. Watch Out for Same-Bank Salary Account Lien Holds
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Before letting a private-bank credit card age into Q4 write-off, check where your monthly salary lands! If your employer credits salary into an HDFC, ICICI, Axis, or Kotak account and you default on a credit card from <strong>that exact same bank</strong>, the bank can place an automated lien / hold on incoming salary credits under general banker&apos;s lien clauses. Plan cashflow protection early before initiating multi-card talks.
              </p>
            </section>

            {/* SECTION 7 */}
            <section id="sequencing-multi-card-q4" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                7. Sequencing 3 to 6 Credit Cards Above ₹3,00,000 in Q4
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Suppose you hold ₹6,50,000 in unpaid bills across SBI Card, HDFC, RBL, and ICICI, but only have ₹1,40,000 saved in March. Do <strong>not</strong> split ₹35,000 across all four cards as broken partial payments!
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Instead, deploy that ₹1,40,000 to close <strong>two entire 180+ DPD cards in full</strong> with verified Q4 sanction letters before 25 March, lock in two permanent No Dues Certificates, and settle the remaining two cards in the June or September quarter once your next lump sum builds up. Read more on how to <Link href="/settle-multiple-credit-cards" className="text-blue-600 hover:underline font-semibold">settle multiple credit cards</Link>.
              </p>
            </section>

            {/* SECTION 8 */}
            <section id="rbi-2027-sanction-noc" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                8. RBI 1 Jan 2027 Conduct Rules, Sanction Checks &amp; NOC
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Even in the final week of March, card collectors must obey the RBI Master Direction on Credit Cards and RBI&apos;s updated recovery conduct rules effective <strong>1 January 2027</strong>: calls and visits strictly between <strong>8:00 AM and 7:00 PM</strong>, mandatory agency ID + bank authorization letters, and zero contact with employers or relatives.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Always verify your settlement letter with the card issuer&apos;s official customer care before paying via NEFT / BillDesk directly to your 16-digit card number, collect your signed <strong>No Dues Certificate</strong> within 30 days, and verify ₹0 balance on CIBIL after 45 to 60 days. Also read our <Link href="/psu-bank-ots-deadline-march-31-2027" className="text-blue-600 hover:underline font-semibold">PSU Bank March 31 OTS cutoff guide</Link>.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Save your PDF offer, NEFT UTR slip, and final No Dues letter in two safe places. If your cash is still short in late March, wait calmly for the next quarter rather than paying a broken first part you cannot finish.
              </p>
            </section>

            <CompanySection />

            {/* FAQS */}
            <section id="faqs" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                FY-End Credit Card Settlement by Issuer: Common Questions
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
                Related Credit Card &amp; Q4 Settlement Guides.
              </p>
              <div className="flex flex-wrap gap-2">
                <Link
                  href="/settle-multiple-credit-cards"
                  className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 hover:border-blue-600 hover:text-blue-600"
                >
                  Settle Multiple Credit Cards.
                </Link>
                <Link
                  href="/credit-card-settlement-hdfc"
                  className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 hover:border-blue-600 hover:text-blue-600"
                >
                  HDFC Credit Card Settlement.
                </Link>
                <Link
                  href="/sbi-credit-card-settlement-email-id-and-number"
                  className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 hover:border-blue-600 hover:text-blue-600"
                >
                  SBI Card Settlement Contacts.
                </Link>
                <Link
                  href="/psu-bank-ots-deadline-march-31-2027"
                  className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 hover:border-blue-600 hover:text-blue-600"
                >
                  PSU Bank March 31 OTS Deadlines.
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
                Analyses card issuer 180-DPD charge-off cycles, salary lien risks, and multi-card OTS timing.
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
                <span>₹3,00,000+ Multi-Card Plan.</span>
              </div>
              <p className="text-lg font-bold leading-snug">
                Holding Multiple Defaulted Credit Cards Above ₹3L?
              </p>
              <p className="text-xs text-blue-100 leading-relaxed">
                Sequence your lump sums across Q4 write-off windows and close each card with a clean 30-day NOC.
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
                <span>Q4 Card Settlement Rules.</span>
              </p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>180+ DPD write-off bucket unlocks strongest cuts.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Clear all Q4 split parts strictly before March 25.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Guard against same-bank salary account liens.</span>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
