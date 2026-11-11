'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import InteractiveLeadFunnel from '@/components/InteractiveLeadFunnel';
import CompanySection from '@/components/CompanySection';
import {
  BookOpen,
  ShieldCheck,
  AlertCircle,
  Landmark,
  Phone,
  Lock,
  ArrowRight,
  ExternalLink,
  Check,
  ChevronDown,
  ChevronUp,
  Clock
} from 'lucide-react';

export default function SbiOtsScheme2027Client() {
  const [activeId, setActiveId] = useState<string>('notification-status');
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
    { id: 'notification-status', label: '2027 Status Check' },
    { id: 'rbi-compromise-vs-samadhan', label: '1. RBI Rule vs Rinn Samadhan' },
    { id: 'npa-categories-eligibility', label: '2. SBI NPA Rules & Who Qualifies' },
    { id: 'indicative-waiver-ranges', label: '3. Realistic Waiver Ranges' },
    { id: 'sarb-branch-hierarchy', label: '4. Home Branch vs SARB Team' },
    { id: 'step-by-step-application', label: '5. How to Apply Step by Step' },
    { id: 'sanction-letter-verification', label: '6. Sanction Letter Checks' },
    { id: 'rbi-2027-recovery-protections', label: '7. RBI 1 Jan 2027 Agent Rules' },
    { id: 'multi-debt-consolidation-plan', label: '8. SBI + Card & App Debt Plan' },
    { id: 'cibil-ndc-closure-steps', label: '9. NOC & CIBIL Next Steps' },
    { id: 'faqs', label: 'FAQs' }
  ];

  const faqs = [
    {
      q: 'Has SBI announced a special SBI OTS Scheme 2027 yet?',
      a: 'No. As checked in November 2026, SBI has not put out a new public notice for a 2027 Rinn Samadhan drive. Still, you can settle an NPA loan right now under the RBI compromise rule dated 8 June 2023.'
    },
    {
      q: 'How is SBI Rinn Samadhan different from normal SBI OTS?',
      a: 'Rinn Samadhan is a short special drive with fixed slab cuts for small and old NPAs. Normal OTS stays open all year under SBI board rules. In normal OTS, your branch or SARB checks your hardship proof case by case.'
    },
    {
      q: 'Which SBI loans can apply for One-Time Settlement?',
      a: 'Personal loans, Xpress Credit loans without an active salary hold, stressed study loans, and small MSME loans can apply once they cross 90 days past due and turn NPA. Older Doubtful and Loss loans get stronger fee cuts.'
    },
    {
      q: 'Does SBI Rinn Samadhan cover SBI Credit Card bills?',
      a: 'No. SBI credit cards are run by SBI Cards and Payment Services Ltd (SBICPSL), which is a separate firm. You settle card bills with SBI Card, though you can group SBI bank loans and card dues in one plan if your total debt is Rs 3,00,000 or more.'
    },
    {
      q: 'How much waiver can I expect in an SBI OTS deal?',
      a: 'No cut is fixed in advance. In real hardship cases with no collateral, SBI often drops penal charges and unapplied interest. This can cut 30% to 60% off the total demand sum, based on loan age and NPA class.'
    },
    {
      q: 'What is SBI SARB and why did my file move there?',
      a: 'SARB means Stressed Assets Recovery Branch. SBI shifts older or larger unpaid loans from your home branch to SARB. Special officers at SARB handle court steps and approve OTS offers.'
    },
    {
      q: 'How much token money must I pay with an SBI OTS form?',
      a: 'Special SBI OTS drives often ask for 5% to 15% of the offer sum up front. You then pay the rest in 30 to 90 days after sanction. Always pay straight into your SBI loan account.'
    },
    {
      q: 'How do I check if an SBI OTS sanction letter is genuine?',
      a: 'Make sure the letter is on SBI branch or SARB letterhead with a ref number, your exact 11-digit loan account number, the full waiver math, a clear last pay date, and an officer stamp.'
    },
    {
      q: 'What RBI rules stop agent harassment from 1 January 2027?',
      a: 'Under the RBI Fair Practices Code and the new RBI agent rules effective 1 January 2027, agents may call or visit only between 8:00 AM and 7:00 PM. They must carry bank ID cards and cannot shame you before family or coworkers.'
    },
    {
      q: 'What happens to my CIBIL score after I close an SBI OTS?',
      a: 'SBI gives you a No Dues Certificate within 30 days and marks the loan as Settled in CIBIL. Your score dips at first, but monthly late marks stop so you can rebuild your score over 12 to 24 months.'
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* HERO SECTION */}
      <section
        className="relative text-white pt-28 pb-16 md:pt-32 md:pb-20 px-4 md:px-8"
        style={{
          background: 'radial-gradient(136.19% 254.89% at -1.53% 10.35%, #2F6CE2 0%, #001235 100%)'
        }}
      >
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 border border-white/25 text-xs sm:text-sm font-bold uppercase tracking-wide mb-5">
            <Landmark className="w-4 h-4 text-blue-200" />
            <span>PSU Bank OTS Tracker: State Bank of India.</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 tracking-tight leading-tight">
            SBI OTS Scheme 2027 &amp; Rinn Samadhan Tracker
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-8">
            Check the latest State Bank of India One-Time Settlement status. Compare special Rinn Samadhan windows with year-round RBI rules, and learn how to close unpaid NPA loans safely.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#lead-funnel"
              className="bg-white text-blue-950 px-7 py-3.5 rounded-full font-bold text-base hover:bg-blue-50 transition-all shadow-lg inline-flex items-center justify-center gap-2"
            >
              <span>Check ₹3L+ Settlement Eligibility</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/loan-settlement/sbi"
              className="bg-blue-900/60 border border-white/30 text-white px-7 py-3.5 rounded-full font-semibold text-base hover:bg-blue-900 transition-all inline-flex items-center justify-center"
            >
              View Main SBI Guide
            </Link>
          </div>
        </div>
      </section>

      {/* TOP STATUS BOX: 2027 SPECIAL OTS NOTIFICATION STATUS */}
      <div className="max-w-5xl mx-auto px-4 -mt-8 relative z-20">
        <div
          id="notification-status"
          className="scroll-target bg-white rounded-2xl border-2 border-blue-600 p-5 sm:p-6 shadow-md space-y-3"
        >
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
            <div className="flex items-center gap-2 text-sm sm:text-base font-extrabold text-blue-900">
              <Clock className="w-5 h-5 text-blue-600 flex-shrink-0" />
              <span>2027 Special OTS Notification Status: Checked Nov 2026</span>
            </div>
            <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold">
              2027 Special Scheme: Not Announced Yet | Board OTS: Open Now
            </span>
          </div>
          <p className="text-sm text-slate-700 leading-relaxed">
            <strong>Status Check (11 November 2026):</strong> State Bank of India has <strong>not yet released</strong> a public circular for a 2027 Rinn Samadhan campaign. SBI usually sends special Rinn Samadhan memos to branches during Q3 or Q4 recovery drives without early public ads. We never invent unannounced circular numbers.
          </p>
          <p className="text-sm text-slate-700 leading-relaxed">
            <strong>What You Can Use Today:</strong> You do not have to wait for a seasonal drive. SBI branches and SARB offices take settlement offers all year under the <strong>RBI Compromise Settlement Rule (Circular RBI/2023-24/40 dated 8 June 2023)</strong>.
          </p>
        </div>
      </div>

      {/* COMBINED DEBT FRAMING + INTERACTIVE LEAD FUNNEL */}
      <div className="max-w-3xl mx-auto px-4 pt-8">
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4 sm:p-5 text-center">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-blue-800 mb-1">
            Combined Debt Check (₹3,00,000 Minimum Case Floor)
          </p>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            CredSettle handles cases where your <strong>total unpaid debt is ₹3,00,000 or more</strong> across SBI loans, credit cards, personal loans, and loan apps. Count all your unsecured balances together below.
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
                <Link href="/loan-settlement/sbi" className="hover:text-blue-600 font-medium">
                  SBI Loan Settlement
                </Link>
              </li>
              <li>/</li>
              <li className="text-slate-800 font-semibold">SBI OTS Scheme 2027</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* 3-COLUMN WIDESCREEN EDITORIAL BODY */}
      <div className="max-w-[1440px] mx-auto px-4 py-10 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[260px_minmax(0,1fr)_300px] gap-8 items-start">
          {/* LEFT STICKY TOC */}
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
            <section id="rbi-compromise-vs-samadhan" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                1. RBI Compromise Rule vs SBI Rinn Samadhan
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Many people wait months for a news report on the SBI OTS Scheme 2027. They think SBI closes bad loans only once a year. That is not true. SBI actually runs two clear paths to settle unpaid loans.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The first path is SBI&apos;s year-round <strong>Board-Approved Compromise Policy</strong>. On 8 June 2023, the Reserve Bank of India issued Circular <strong>RBI/2023-24/40</strong>. This rule tells every bank to keep a clear policy open all year for loan settlements and write-offs. If your loan is an NPA and you face real money trouble, you can send an offer today.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                The second path is a short drive called <strong>SBI Rinn Samadhan</strong>. When SBI launches Rinn Samadhan, the head office sets fixed cut slabs for small farm, MSME, and retail bad loans. Branch staff do not guess the price. Instead, the system works out a fixed offer based on loan size and default age.
              </p>

              <div className="overflow-x-auto rounded-2xl border border-slate-200">
                <table className="w-full text-left text-xs sm:text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="p-3.5 border-r border-slate-700 font-bold">Point.</th>
                      <th className="p-3.5 border-r border-slate-700 font-bold">Board OTS (RBI June 2023 Rule).</th>
                      <th className="p-3.5 font-bold">SBI Rinn Samadhan Window.</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-700">
                    <tr>
                      <td className="p-3.5 border-r border-slate-200 font-semibold text-slate-900">When Open.</td>
                      <td className="p-3.5 border-r border-slate-200">Open all 12 months at branches and SARB.</td>
                      <td className="p-3.5">Open only during short bank drives.</td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3.5 border-r border-slate-200 font-semibold text-slate-900">How Cut Is Set.</td>
                      <td className="p-3.5 border-r border-slate-200">Based on your income loss and bank audit math.</td>
                      <td className="p-3.5">Fixed slab rate set by loan age and cap.</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 border-r border-slate-200 font-semibold text-slate-900">Best Fit.</td>
                      <td className="p-3.5 border-r border-slate-200">Personal loans, business loss, or multi-loan cases.</td>
                      <td className="p-3.5">Old Doubtful, Loss, or AUCA files in the cutoff list.</td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3.5 border-r border-slate-200 font-semibold text-slate-900">Nov 2026 Check.</td>
                      <td className="p-3.5 border-r border-slate-200 font-bold text-emerald-700">Active right now across India.</td>
                      <td className="p-3.5 font-semibold text-amber-800">2027 notice not yet out in public.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 2 */}
            <section id="npa-categories-eligibility" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                2. SBI NPA Classes &amp; Who Qualifies for OTS
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                SBI will not grant an OTS cut if you missed just one EMI last week. Under RBI asset rules, a loan must stay unpaid for more than 90 days before it turns into a Non-Performing Asset (NPA). Your NPA class shapes how open SBI is to a settlement.
              </p>
              <ul className="list-disc pl-6 space-y-2.5 text-sm md:text-base text-slate-700">
                <li>
                  <strong>Sub-Standard NPA (First 12 Months as NPA):</strong> Your loan just crossed 90 days past due. At this stage, SBI prefers EMI restart unless you show hard proof like job loss, illness, or shop closure.
                </li>
                <li>
                  <strong>Doubtful Assets (D1, D2, and D3):</strong> A loan that stays Sub-Standard for 12 months moves to the Doubtful bucket. Here, SBI has to lock up more capital as loss cover, so branch panels review OTS offers much faster.
                </li>
                <li>
                  <strong>Loss Assets &amp; AUCA Files:</strong> AUCA means Advance Under Collection Account. These are older written-off files moved off the main branch book. AUCA and Loss loans get the highest fee waivers.
                </li>
                <li>
                  <strong>Loans That Can Apply:</strong> Unsecured SBI Xpress Credit loans, personal loans, Mudra loans without high-value land security, and stressed study loans can apply.
                </li>
                <li>
                  <strong>Loans Left Out:</strong> Gold loans, FD-backed loans, and staff loans do not get OTS cuts. Fraud or willful default accounts face strict board checks and a 5-year bar on new bank loans under RBI rules.
                </li>
              </ul>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                <strong>Quick Check on SBI Credit Cards:</strong> SBI SimplyCLICK, SimplySAVE, and Prime cards belong to <strong>SBI Cards and Payment Services Ltd (SBICPSL)</strong>. Your local SBI bank branch cannot close an SBI Card bill. Read our <Link href="/rbi-circular-on-loan-settlement-ots" className="text-blue-600 hover:underline font-semibold">RBI Circular on Loan Settlement &amp; OTS guide</Link> to see how card firms and banks run separate desks.
              </p>
            </section>

            {/* SECTION 3 */}
            <section id="indicative-waiver-ranges" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                3. Realistic SBI OTS Waiver Ranges &amp; Claim Math
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Never trust anyone who promises a flat 80% cut on an SBI loan. Public banks face strict audits. Every rupee SBI drops must match its Net Present Value (NPV) math. What recovery could the bank get in court over five years versus taking cash from you now? That gap sets your deal.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When a loan stays unpaid for two years, your notice shows a huge bill. That bill adds base principal, past interest, penal charges, and legal fees. In a sound OTS deal, SBI first looks at dropping 100% of penal fees and post-NPA interest. Next, it checks if a cut on base principal fits your hardship proof.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <p className="text-xs font-bold uppercase text-slate-500">Fresh Unsecured NPA.</p>
                  <p className="text-lg font-extrabold text-slate-900 mt-1">25% to 40% Cut.</p>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Typical range off total claim. Mainly clears late fees and added post-NPA interest.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200">
                  <p className="text-xs font-bold uppercase text-blue-700">Doubtful Unsecured NPA.</p>
                  <p className="text-lg font-extrabold text-blue-900 mt-1">40% to 55% Cut.</p>
                  <p className="text-xs text-slate-700 mt-1 leading-relaxed">
                    Typical range off total demand when backed by clear job loss or medical proof.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200">
                  <p className="text-xs font-bold uppercase text-emerald-700">Old Loss / AUCA File.</p>
                  <p className="text-lg font-extrabold text-emerald-900 mt-1">50% to 65% Cut.</p>
                  <p className="text-xs text-slate-700 mt-1 leading-relaxed">
                    Typical range on old written-off files when you pay in one quick lump sum.
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-500 italic">
                Note: These ranges are past examples on unsecured claims, not fixed promises. Home or property loans depend on real market sale value.
              </p>
            </section>

            {/* SECTION 4 */}
            <section id="sarb-branch-hierarchy" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                4. Home Branch vs SBI SARB Approval Teams
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Many borrowers walk into their home branch to talk about OTS, only to hear that the file is gone. SBI moves bad loans to special hubs so branch staff can focus on daily banking. Knowing where your file sits saves weeks of delay.
              </p>
              <ul className="list-disc pl-6 space-y-2.5 text-sm md:text-base text-slate-700">
                <li>
                  <strong>Home Branch &amp; RACC:</strong> Smaller retail NPAs stay linked to your branch and the Retail Assets Central Processing Cell (RACC). Your branch head sends your offer to the regional panel for sign-off.
                </li>
                <li>
                  <strong>SARB (Stressed Assets Recovery Branch):</strong> Larger retail or MSME files (often ₹20 Lakhs and up) move to a city SARB hub. Senior officers like an AGM or DGM lead SARB teams and hold higher power to approve cuts.
                </li>
                <li>
                  <strong>Bank Adalats &amp; Settlement Camps:</strong> SBI holds special camp days and joins Lok Adalat sittings. Sending a clean written offer before camp day helps your file get picked for fast sign-off.
                </li>
              </ul>
            </section>

            {/* SECTION 5 */}
            <section id="step-by-step-application" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                5. Step-by-Step SBI OTS Application Process
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Do not rely on phone chats with field agents. Follow a clean paper trail from day one so your offer reaches the right SBI panel.
              </p>
              <ol className="list-decimal pl-6 space-y-3 text-sm md:text-base text-slate-700">
                <li>
                  <strong>Find Your File Hub:</strong> Ask your home branch if your loan sits at the branch, RACC, or SARB. Note the exact principal balance as on the NPA date.
                </li>
                <li>
                  <strong>Build Your Hardship File:</strong> Collect simple proof of why you cannot pay full EMIs. Useful papers include a layoff letter, pay-cut slip, shop closure proof, medical bills, and 6-month bank statements.
                </li>
                <li>
                  <strong>Give a Written OTS Offer:</strong> Hand in a signed request under the RBI 8 June 2023 compromise rule (or active Rinn Samadhan drive if live). State the lump sum you can raise from family help or savings.
                </li>
                <li>
                  <strong>Pay Token Earnest Money Safely:</strong> Formal SBI OTS drives often ask for 5% to 15% of your offer as upfront token money. Pay this only into a bank-named SBI no-lien or loan account, and take a stamped receipt.
                </li>
                <li>
                  <strong>Attend Panel Talks:</strong> If the SBI panel asks for a slightly higher sum to match audit norms, review your cash flow and send a revised written note.
                </li>
                <li>
                  <strong>Pay After Written Sanction Only:</strong> Clear the agreed balance within the 30-to-90-day limit printed on your sanction letter. Late payment can cancel the OTS deal.
                </li>
              </ol>
            </section>

            {/* SECTION 6 */}
            <section id="sanction-letter-verification" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                6. How to Verify Your SBI OTS Sanction Letter
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Some field callers send fake WhatsApp notes or vague emails saying your loan will close if you pay ₹50,000 before 5 PM. If you pay without a real SBI sanction letter, the bank simply books your cash toward old interest and keeps chasing you for the rest.
              </p>
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 space-y-2.5">
                <p className="text-sm font-bold text-amber-950 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-700 flex-shrink-0" />
                  <span>5 Must-Check Points on Every SBI OTS Letter:</span>
                </p>
                <ul className="list-disc pl-6 space-y-1.5 text-xs sm:text-sm text-amber-950">
                  <li>Printed on official SBI branch, RACC, or SARB letterhead with branch code.</li>
                  <li>Shows your full name and exact 11-digit SBI loan account number.</li>
                  <li>States clearly that the payment closes the loan in <strong>Full and Final OTS Settlement</strong>.</li>
                  <li>Directs NEFT, RTGS, or branch deposit only into your SBI loan or bank OTS account, never a private UPI ID.</li>
                  <li>Carries the officer&apos;s name, post, round bank seal, and dispatch ref number.</li>
                </ul>
              </div>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Before sending your money, read our full guide on <Link href="/how-to-verify-bank-ots-sanction-letter-avoid-settlement-scams" className="text-blue-600 hover:underline font-semibold">how to verify a bank OTS sanction letter and avoid scams</Link>.
              </p>
            </section>

            {/* SECTION 7 */}
            <section id="rbi-2027-recovery-protections" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                7. Your Rights Under RBI 1 January 2027 Agent Rules
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Defaulting on a loan is a civil matter, not a crime. While you work out an OTS plan, bank agents must follow strict RBI rules. Along with the Fair Practices Code, RBI&apos;s updated recovery rules take effect on <strong>1 January 2027</strong>.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm md:text-base text-slate-700">
                <li>
                  <strong>8:00 AM to 7:00 PM Window:</strong> Agents cannot call or knock on your door before 8:00 AM or after 7:00 PM.
                </li>
                <li>
                  <strong>No Calls to Family or Boss:</strong> Agents cannot tell your boss, coworkers, neighbours, or relatives about your unpaid loan.
                </li>
                <li>
                  <strong>ID Card &amp; Bank Letter Must Be Shown:</strong> Every visiting agent must show an SBI agency letter and valid ID card at the door.
                </li>
                <li>
                  <strong>Where to Complain:</strong> Save call logs of any threats. File a complaint with SBI&apos;s Principal Nodal Officer. If SBI does not fix it in 30 days, escalate free on the RBI CMS portal (`cms.rbi.org.in`).
                </li>
              </ul>
            </section>

            {/* SECTION 8 */}
            <section id="multi-debt-consolidation-plan" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                8. Settling SBI Loans With Credit Cards &amp; Loan Apps
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Most borrowers we help do not owe just one SBI loan. Often, a borrower has an SBI personal or Mudra loan plus three credit cards and four instant loan apps. Soon, total unpaid dues cross <strong>₹3,00,000 to ₹20,00,000 or more</strong>.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Paying small bits to whichever caller shouts loudest drains your savings without closing a single loan. A smart plan lines up all your lenders in order. Fast-growing card bills and harsh app lenders are settled side by side with your SBI OTS window so your lump sum closes each account for good. See how we <Link href="/settle-multiple-credit-cards" className="text-blue-600 hover:underline font-semibold">settle multiple credit cards</Link> and <Link href="/negotiate-multiple-loans-together" className="text-blue-600 hover:underline font-semibold">negotiate multiple loans together</Link>.
              </p>
            </section>

            {/* SECTION 9 */}
            <section id="cibil-ndc-closure-steps" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                9. No Dues Certificate &amp; CIBIL Score After OTS
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Once you pay the final OTS rupee on time, collect your stamped bank slip and ask SBI for your <strong>No Dues Certificate (NDC)</strong>. Under RBI service rules, SBI must give your closure letter and return any held papers within 30 days.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Check your CIBIL report 45 to 60 days later. The balance must read <strong>₹0</strong> with a <strong>Settled</strong> tag. Under the RBI June 2023 rule, banks also keep a 12-month cooling gap before giving fresh unsecured loans. Read our simple guides on <Link href="/get-noc-after-loan-settlement" className="text-blue-600 hover:underline font-semibold">getting your NOC after loan settlement</Link> and <Link href="/how-to-improve-cibil-score-after-loan-settlement" className="text-blue-600 hover:underline font-semibold">rebuilding your CIBIL score after settlement</Link>.
              </p>
            </section>

            {/* COMPANY SECTION */}
            <CompanySection />

            {/* FAQ SECTION */}
            <section id="faqs" className="scroll-target space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                Frequently Asked Questions: SBI OTS Scheme 2027
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
                Related PSU OTS &amp; Debt Relief Guides.
              </p>
              <div className="flex flex-wrap gap-2">
                <Link
                  href="/loan-settlement/sbi"
                  className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 hover:border-blue-600 hover:text-blue-600"
                >
                  SBI Loan Settlement Hub.
                </Link>
                <Link
                  href="/sbi-personal-loan-settlement-process"
                  className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 hover:border-blue-600 hover:text-blue-600"
                >
                  SBI Personal Loan OTS Steps.
                </Link>
                <Link
                  href="/rbi-circular-on-loan-settlement-ots"
                  className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 hover:border-blue-600 hover:text-blue-600"
                >
                  RBI Compromise OTS Circular.
                </Link>
                <Link
                  href="/how-to-verify-bank-ots-sanction-letter-avoid-settlement-scams"
                  className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 hover:border-blue-600 hover:text-blue-600"
                >
                  Verify Bank OTS Sanction Letter.
                </Link>
              </div>
            </div>
          </article>

          {/* RIGHT STICKY SIDEBAR */}
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
                Tracks PSU bank OTS drives, RBI compromise rules, and safe debt closure steps across India.
              </p>
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <span>Checked: 11 Nov 2026.</span>
                <a
                  href="https://www.rbi.org.in"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="text-blue-600 hover:underline inline-flex items-center gap-1 font-semibold"
                >
                  <span>RBI Portal.</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            <div className="rounded-3xl bg-gradient-to-br from-blue-900 to-slate-900 p-6 text-white space-y-4 shadow-md">
              <div className="inline-flex items-center gap-1.5 py-1 px-2.5 rounded-lg bg-white/15 text-blue-100 text-[11px] font-bold">
                <Lock className="w-3.5 h-3.5" />
                <span>₹3,00,000+ Total Debt Help.</span>
              </div>
              <p className="text-lg font-bold leading-snug">
                Need Help With SBI SARB or Multi-Loan OTS?
              </p>
              <p className="text-xs text-blue-100 leading-relaxed">
                Our legal team builds your RBI hardship file, checks SBI sanction terms, and lines up all your card and loan settlements together.
              </p>
              <a
                href="#lead-funnel"
                className="block w-full text-center bg-white text-blue-950 font-bold py-3 px-4 rounded-xl hover:bg-blue-50 transition-colors text-sm"
              >
                Check Eligibility Now
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
                <span>Safe OTS Rules.</span>
              </p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Pay OTS sums straight to your SBI loan account only.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Never pay cash on spoken agent promises.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Collect signed SBI No Dues Certificate in 30 days.</span>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
