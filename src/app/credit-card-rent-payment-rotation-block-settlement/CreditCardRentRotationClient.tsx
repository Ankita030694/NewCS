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

export default function CreditCardRentRotationClient() {
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
    { id: 'mcc-6513-crackdown', label: '1. RBI Crackdown on MCC 6513' },
    { id: 'rotation-detection', label: '2. How Banks Detect Rotation' },
    { id: 'rotation-fee-math', label: '3. Fee Bleed & Default Math' },
    { id: 'card-block-consequences', label: '4. Card Block Consequences' },
    { id: 'visual-blueprint', label: '5. Visual Blueprint Infographic' },
    { id: 'civil-vs-criminal-law', label: '6. Civil Default vs Forgery Law' },
    { id: 'income-tax-ais-trap', label: '7. Rs 10 Lakh AIS & Tax Trap' },
    { id: 'step-by-step-sop', label: '8. Step-by-Step Debt Exit SOP' },
    { id: 'escalation-matrix', label: '9. 3-Tier Escalation Matrix' },
    { id: 'procedural-timeline', label: '10. Block to OTS Timeline' },
    { id: 'specialized-scenarios', label: '11. Multi-Card & Real Cases' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
    {
      q: 'Why did the bank block my credit card for paying house rent?',
      a: 'Banks monitor transactions tagged under Merchant Category Code (MCC) 6513 for real estate rentals. If you send rent payments to relatives or friends to route cash back and pay your card bill, bank fraud systems flag this circular rotation and block the card.'
    },
    {
      q: 'Must the bank tell me the exact reason for blocking my credit card?',
      a: 'Yes. Under the RBI Credit Card Master Direction (updated March 7, 2024), a bank must follow a Board-approved policy when blocking a card. It must immediately notify you via SMS or email and state the clear reason for the block.'
    },
    {
      q: 'Is credit card rent rotation a criminal offense in India?',
      a: 'No. Rotating money out of cash distress violates your civil Cardmember Agreement, not criminal law. In Satishchandra Ratanlal Shah v. State of Gujarat (2019), the Supreme Court ruled that loan or card default without fraud from day one is purely civil. However, never submit fake rent agreements.'
    },
    {
      q: 'Should I create a backdated rent agreement if the bank asks for proof?',
      a: 'Never submit a fake or backdated rent agreement. Sending forged documents to a bank can invite serious fraud charges under the Bharatiya Nyaya Sanhita (BNS), 2023. If you lack a real lease, accept card closure and resolve the balance through repayment or settlement.'
    },
    {
      q: 'Can I settle a credit card that was blocked for rent rotation or commercial use?',
      a: 'Yes. Even after a bank cancels your personal card for policy misuse, the unpaid balance remains an unsecured credit card debt. Under the RBI Compromise Settlement Circular (June 8, 2023), banks can approve a One-Time Settlement (OTS) when genuine hardship exists.'
    },
    {
      q: 'Why does rotating Rs 1 Lakh monthly trigger an Income Tax AIS alert?',
      a: 'Under Rule 114E of the Income Tax Rules, banks report credit card payments of Rs 10 Lakh or more in a year under code SFT-006. Rotating the same Rs 1 Lakh twelve times shows Rs 12 Lakh in annual payments on your AIS, which can trigger a tax mismatch inquiry.'
    },
    {
      q: 'Will the friend or relative who received the rent transfer face trouble?',
      a: 'Bank recovery agents cannot call or harass your friend or relative under RBI Fair Practices rules. However, if their PAN was entered as a landlord on a rent app, fake rental income could appear in their tax records, so stop all transfers right away.'
    },
    {
      q: 'What happens to active EMIs and reward points when my card is cancelled?',
      a: 'When a bank cancels a card for non-genuine usage, it normally forfeits accumulated reward points earned on disputed spends. Unbilled EMIs are closed early, and the remaining principal is added to your final card statement.'
    },
    {
      q: 'Can a genuine tenant unblock a card flagged by mistake for MCC 6513?',
      a: 'Yes. If you paid real house rent to an unrelated landlord, send your registered lease deed, landlord PAN, and HRA tax proof to the Bank Nodal Officer. Once verified, the bank can lift the block or allow normal closure.'
    },
    {
      q: 'How does CredSettle help borrowers trapped in a credit card rotation cycle?',
      a: 'CredSettle helps you stop toxic fee bleeding, protects you and your family from recovery calls under RBI rules, replies to bank audit notices safely, and negotiates legal One-Time Settlements with official No Dues Certificates.'
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
            <span>RBI MCC 6513 Compliance &amp; Legal Credit Card Debt Exit</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Credit Card Blocked for Rent Rotation: Legal Debt Exit
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            Did your bank freeze or cancel your credit card for MCC 6513 rent transfers or wallet rotation? Learn RBI card-blocking rules, avoid fake rent deed traps and Income Tax AIS alerts, and settle your dues legally.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Exit Credit Card Rotation Trap</span>
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
                  <span>Statutory Borrower Shield</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Protected under RBI Credit Card Master Directions 2022 and Compromise OTS Circular 2023.
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
                <span>EXECUTIVE BRIEF: CREDIT CARD RENT ROTATION BLOCK &amp; OTS RELIEF</span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Why Cards Get Blocked:</strong> Banks flag repeated rent transfers under code MCC 6513 and wallet loads under MCC 6540 when money loops back to pay your own card bill.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">RBI Notice Mandate:</strong> Under the March 2024 RBI Master Direction update, banks must send an instant SMS or email giving the exact reason for blocking your card.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Civil Default, Not a Crime:</strong> Failing to pay a blocked card is a civil contract issue. However, never send fake rent agreements to the bank, as forged papers invite fraud risk.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Rs 10 Lakh Tax Alert:</strong> Rotating Rs 1 Lakh monthly logs Rs 12 Lakh of card payments on your Income Tax AIS under Rule 114E, even though no new income was earned.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Legal One-Time Settlement:</strong> Blocked personal cards remain eligible for structured One-Time Settlement (OTS) under the June 2023 RBI Compromise Settlement framework.
                  </span>
                </li>
              </ul>
            </div>

            {/* SECTION 1: RBI Crackdown on MCC 6513 & Fintech Rent Routing */}
            <section id="mcc-6513-crackdown" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>Central Bank Directives &amp; Payment Rules</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. RBI Crackdown on MCC 6513 &amp; Fintech Rent Routing
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                For years, salaried borrowers in India used fintech apps to pay house rent with credit cards. Apps like CRED, PhonePe, Paytm, Housing, and NoBroker let users send card money straight to any bank account. Card networks tagged these transfers under Merchant Category Code (MCC) 6513 for real estate rentals.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Many stressed borrowers soon used this feature as an emergency cash loop. Instead of paying a real landlord, they sent money to a spouse, parent, or friend. That person sent the cash right back via UPI to pay off the previous month&apos;s credit card bill.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                On February 15, 2024, the Reserve Bank of India issued Press Release 2023-2024/1885 to stop unapproved payment routing. The RBI warned that routing card money to non-merchant bank accounts without full Know Your Customer (KYC) checks violated Section 4 of the Payment and Settlement Systems Act, 2007.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                At the same time, the RBI enforced strict Payment Aggregator (PA) rules. Payment gateways can now settle funds only to verified merchants who hold direct contracts. As a result, major fintech apps halted unverified rent transfers, while banks rolled out automated blocks on suspected card rotation.
              </p>
            </section>

            {/* SECTION 2: How Banks Detect Circular Credit Card Rent Rotation */}
            <section id="rotation-detection" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Clock className="w-4 h-4 text-[#1886ff]" />
                <span>Risk Algorithms &amp; End-Use Monitoring</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. How Banks Detect Circular Credit Card Rent Rotation
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Personal credit cards are meant only for buying retail goods and services. Under Paragraph 7(c) of the RBI Credit Card and Debit Card Master Direction (updated March 7, 2024), banks must also monitor the end use of business cards and prevent cash misuse.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Every major bank in India uses automated Transaction Monitoring Systems (TMS) to spot circular fund rotation. You do not need a manual complaint to get flagged. Bank software spots four clear red flags within seconds.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                First, the system flags accounts where 80% to 95% of the credit limit goes toward MCC 6513 (rent), MCC 6540 (wallet loads), or MCC 8299 (education fees) with almost zero grocery or retail spends. Second, it detects multiple rent payments in a single month, which makes no sense for one tenant.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Third, if you hold a savings account at the same bank, the system sees your card bill paid on Monday and the exact same amount swiped out as rent on Tuesday. Fourth, banks cross-check surname matches, shared addresses, and device IDs between you and your recipient.
              </p>
            </section>

            {/* SECTION 3: Fee Bleed Math: Why Rent Rotation Causes Sudden Default */}
            <section id="rotation-fee-math" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                <span>Hidden Fee Erosion &amp; Debt Trap Ledger</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Fee Bleed Math: Why Rent Rotation Causes Sudden Default
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Rotating a credit card feels cheaper than missing a bill at first. You think you are paying only a small app fee to buy another 45 days of time. In reality, double fees silently drain your savings without cutting a single rupee of debt.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Fintech apps charge a 1.8% to 2.2% fee plus 18% GST on every rent swipe. On top of that, banks like HDFC, ICICI, SBI Card, and Axis charge an extra 1% rent surcharge plus 18% GST. Look at what happens when a borrower rotates a ₹2,00,000 card bill for one year before a sudden block.
              </p>

              {/* Representative Calculation Card */}
              <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white shadow-xs">
                <div className="bg-slate-900 text-white p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-[#1886ff]" />
                    <span className="font-bold text-sm">₹2,00,000 Monthly Rent Rotation Bleed &amp; Block Ledger</span>
                  </div>
                  <span className="text-xs text-blue-300 font-mono">~3.30% Monthly Fee Drain</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80">
                    <thead>
                      <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-semibold">
                        <th className="p-3">Rotation Stage</th>
                        <th className="p-3">App + Bank Fees (Incl. 18% GST)</th>
                        <th className="p-3">Principal Reduced</th>
                        <th className="p-3 text-right">Cumulative Cash Lost / Balance Due</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200/80 text-slate-600">
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Month 1 (First Cycle)</td>
                        <td className="p-3 font-mono">₹4,248 App + ₹2,360 Bank = ₹6,608</td>
                        <td className="p-3 text-amber-600 font-semibold">₹0 Reduced</td>
                        <td className="p-3 text-right font-bold text-slate-700 font-mono">₹6,608 Fee Lost | ₹2,00,000 Due</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Month 6 (Half Year Loop)</td>
                        <td className="p-3 font-mono text-amber-600 font-bold">₹6,608 x 6 Cycles</td>
                        <td className="p-3 text-amber-600 font-semibold">₹0 Reduced</td>
                        <td className="p-3 text-right font-bold text-amber-700 font-mono">₹39,648 Lost | ₹2,00,000 Due</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Month 12 (Full Year Loop)</td>
                        <td className="p-3 font-mono text-rose-600 font-bold">₹6,608 x 12 Cycles</td>
                        <td className="p-3 text-rose-600 font-semibold">₹0 Reduced</td>
                        <td className="p-3 text-right font-bold text-rose-700 font-mono">₹79,296 Lost | ₹2,00,000 Due</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Month 13 (Sudden Card Block)</td>
                        <td className="p-3 font-mono text-rose-700 font-bold">MCC 6513 Swipe Declined</td>
                        <td className="p-3 text-rose-700 font-semibold">Instant Cash Crunch</td>
                        <td className="p-3 text-right font-bold text-rose-800 font-mono">₹2,00,000 Immediate Bill Shock</td>
                      </tr>
                      <tr className="bg-blue-50/70 font-bold text-slate-900">
                        <td className="p-3">Day 90 Post-Block (NPA Stage)</td>
                        <td className="p-3 font-mono text-[#1886ff]">3.5%/Mo APR + Late Fee + GST</td>
                        <td className="p-3 text-[#1886ff]">Eligible for RBI OTS</td>
                        <td className="p-3 text-right text-[#1886ff] text-sm sm:text-base font-mono">~₹2,32,000 Bill (Settle via OTS)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* SECTION 4: What Happens When a Bank Blocks Your Card for Rotation */}
            <section id="card-block-consequences" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <AlertTriangle className="w-4 h-4 text-[#1886ff]" />
                <span>Deactivation Rules &amp; Account Recall</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. What Happens When a Bank Blocks Your Card for Rotation
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When a bank flags your card for commercial use or cash rotation, it acts in two steps. First, the bank places a temporary block on outgoing swipes and sends an audit email asking for invoices or a registered rent agreement.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under the RBI Master Direction (March 7, 2024 update), a bank cannot silently kill your card. It must follow a Board-approved Standard Operating Procedure (SOP) and immediately alert you by SMS or email with the clear reason for blocking the card.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If you cannot prove genuine personal spending, the bank moves to permanent closure. Your credit limit drops to zero, and any reward points earned from non-retail transactions are forfeited under Most Important Terms and Conditions (MITC) rules.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Most importantly, the loop stops overnight. Because you paid last month&apos;s bill by swiping out your salary or savings, you have no cash left to pay the final bill. Any active merchant EMIs on that card may also foreclose early and merge into one large payable balance.
              </p>
            </section>

            {/* SECTION 5: Visual Blueprint Infographic */}
            <section id="visual-blueprint" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Sparkles className="w-4 h-4 text-[#1886ff]" />
                <span>Visual Blueprint</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. Visual Blueprint: Rent Block &amp; Legal Debt Exit Flow
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This visual guide shows how MCC 6513 rent rotation blocks happen, what RBI rules protect you, and how to exit blocked credit card debt safely through legal One-Time Settlement.
              </p>

              <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-slate-100 bg-slate-100">
                  <Image
                    src="/images/infographics/credit-card-rent-payment-rotation-block-settlement.jpg"
                    alt="Credit Card Rent Payment Rotation Block and RBI Legal Debt Settlement Blueprint"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 900px"
                    className="object-contain hover:scale-[1.01] transition-transform duration-300"
                    priority
                  />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-500 pt-1 gap-2">
                  <span>Official CredSettle Credit Card Protection Framework • RBI Master Direction Compliant</span>
                  <a
                    href="/images/infographics/credit-card-rent-payment-rotation-block-settlement.jpg"
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

            {/* SECTION 6: Supreme Court Law: Civil Debt Default vs Forgery Risks */}
            <section id="civil-vs-criminal-law" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Gavel className="w-4 h-4 text-[#1886ff]" />
                <span>Judicial Precedents &amp; Criminal Law Boundaries</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. Supreme Court Law: Civil Debt Default vs Forgery Risks
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When a blocked card goes unpaid, recovery agents often scare borrowers. They claim that rotating rent payments is &quot;bank fraud&quot; or &quot;money laundering&quot; and threaten a police FIR. Knowing actual Indian law protects you from panic.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Using your own approved credit limit in ways prohibited by card rules is a civil breach of contract, not a crime. However, one panicked mistake can create real legal trouble: making fake documents. Review these four legal rules carefully.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                    <Gavel className="w-4 h-4" />
                    <span>SC: Satishchandra R. Shah v. Gujarat (2019)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The Supreme Court held that failing to repay a loan or credit line does not amount to criminal cheating unless dishonest intent existed at the very start when taking the credit.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                    <Scale className="w-4 h-4" />
                    <span>SC: Lalit Chaturvedi v. State of UP (2024)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The Supreme Court ruled that police FIRs and criminal courts cannot be used as recovery tools for unpaid civil dues or breaches of commercial terms.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-rose-700 font-bold text-sm">
                    <AlertTriangle className="w-4 h-4" />
                    <span>Never Submit Fake Rent Agreements</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Do not print a fake backdated rent deed on stamp paper to unblock your card. Submitting forged papers to a bank can attract real charges under Sections 318 and 336 of BNS 2023.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Shield for Relatives &amp; Friends</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under RBI Circular DoR.FIN.REC.65 (August 12, 2022), recovery agents cannot call, message, or shame the friend or family member whose bank account received your transfer.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: Income Tax Rule 114E: The Rs 10 Lakh AIS & SFT Trap */}
            <section id="income-tax-ais-trap" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Landmark className="w-4 h-4 text-[#1886ff]" />
                <span>Tax Reporting &amp; Compliance Risks</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. Income Tax Rule 114E: The Rs 10 Lakh AIS &amp; SFT Trap
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Credit card rotation creates a hidden tax headache that few borrowers expect. Under Section 285BA of the Income Tax Act, 1961 and Rule 114E of the Income Tax Rules, banks must report high credit card bill payments every year.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If you pay ₹10,00,000 or more via online modes (or ₹1,00,000 in cash) toward one bank&apos;s credit cards in a financial year, the bank files a Statement of Financial Transactions (code SFT-006). That total appears straight on your Annual Information Statement (AIS).
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Suppose your annual salary is ₹6,00,000, and you rotate a ₹1,00,000 card bill twelve times in a year. Even though you cycled the exact same ₹1,00,000 each month, your AIS shows ₹12,00,000 in credit card repayments! Worse, if you entered a relative&apos;s PAN as a landlord, the tax portal may question them for undeclared rent income.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Stopping the rotation loop right now is the best defense. Save all bank and card statements showing the circular in-and-out entries. If you ever get an online e-Verification query under Section 133(6), a clear reconciliation sheet proves it was rotated debt rather than hidden income under Section 69C.
              </p>
            </section>

            {/* SECTION 8: Step-by-Step SOP: Exiting Blocked Credit Card Debt */}
            <section id="step-by-step-sop" className="scroll-target space-y-6">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Standard Operating Procedure</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. Step-by-Step SOP: Exiting Blocked Credit Card Debt
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If your credit card has been blocked for rent rotation and you cannot afford the lump-sum bill, follow this six-step legal exit plan.
              </p>

              <div className="space-y-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">1</span>
                    Stage 1: Stop All Card Cycling and App Borrowing Immediately
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Do not swipe another credit card or take high-interest instant app loans to pay a blocked card. Stopping the cycle saves you 3% to 4% in monthly fee bleed right away.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">2</span>
                    Stage 2: Protect Your Monthly Salary From Auto-Set-Off
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If your salary hits a savings account in the same bank as your blocked card, the bank may freeze or deduct funds under Section 171 of the Contract Act. Keep household income in a separate non-lender bank account.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">3</span>
                    Stage 3: Reply Carefully to Any Bank End-Use Audit Email
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If you paid real house rent, submit your genuine lease deed and landlord PAN. If you rotated cash during hardship, never send fake papers; simply accept card closure and state financial distress.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">4</span>
                    Stage 4: Audit Your Final Statement for Unfair Charges
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Download your complete card ledger. Check that penal charges are not compounded into principal, as barred by RBI rules effective March 2024, and note your true principal balance.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">5</span>
                    Stage 5: Initiate Compromise OTS Under RBI June 2023 Rules
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Once the account enters severe delinquency or NPA status, submit hardship proof under RBI Circular DoR.STR.REC.20. Negotiate a 50% to 70% waiver on inflated interest, GST, and late fees.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">6</span>
                    Stage 6: Verify Official OTS Letter and Collect Your NDC
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Pay only after verifying an official bank settlement letter sent from a bank domain. Collect your No Dues Certificate (NDC) and confirm credit bureau updates within 15 days.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 9: 3-Tier Escalation Matrix: Bank GRO to RBI Ombudsman */}
            <section id="escalation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Escalation Protocol</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. 3-Tier Escalation Matrix: Bank GRO to RBI Ombudsman
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If your bank blocked your card without telling you why, levied unlawful charges, or allowed agents to harass your family or landlord, escalate through this three-tier RBI system.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Escalation Tier</th>
                      <th className="p-3">Designated Banking Authority</th>
                      <th className="p-3">Turnaround Time</th>
                      <th className="p-3">Scope of Intervention &amp; Relief</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 1: GRO</td>
                      <td className="p-3">Credit Card Grievance Redressal Officer</td>
                      <td className="p-3 font-mono">7 to 10 Working Days</td>
                      <td className="p-3">Provides written block reason code, itemized EMI closure ledger, and stops third-party calls.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 2: PNO</td>
                      <td className="p-3">Principal Nodal Officer (Head Office)</td>
                      <td className="p-3 font-mono">14 to 21 Working Days</td>
                      <td className="p-3">Reviews genuine lease proofs, reverses unfair compound penalties, and routes hardship OTS files.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Level 3: RBI Ombudsman</td>
                      <td className="p-3">Reserve Bank Integrated Ombudsman</td>
                      <td className="p-3 font-mono">30 Days Post-GRO</td>
                      <td className="p-3">Adjudicates silent card blocks, recovery harassment, and billing breaches via cms.rbi.org.in.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: Procedural Timeline: Card Block to OTS Closure */}
            <section id="procedural-timeline" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Calendar className="w-4 h-4 text-[#1886ff]" />
                <span>Procedural Milestones</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                10. Procedural Timeline: Card Block to OTS Closure
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Understanding what happens after an MCC 6513 card block helps you stay calm, save settlement funds, and avoid costly mistakes at each stage.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Milestone Window</th>
                      <th className="p-3">Account Phase</th>
                      <th className="p-3">Bank Action</th>
                      <th className="p-3">Borrower Defense Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 0</td>
                      <td className="p-3 font-mono text-[11px]">Risk Block</td>
                      <td className="p-3">Freezes outgoing MCC 6513 swipes and sends SMS or email notice.</td>
                      <td className="p-3">Stop all rotation attempts and save full card statements.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 1 to 15</td>
                      <td className="p-3 font-mono text-[11px]">End-Use Audit</td>
                      <td className="p-3">Requests lease proof or cancels card and recalls unbilled balance.</td>
                      <td className="p-3">Never send fake deeds; secure salary in a separate bank account.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Day 16 to 89</td>
                      <td className="p-3 font-mono text-[11px]">SMA-0 to SMA-2</td>
                      <td className="p-3">Applies monthly finance charges and starts early reminder calls.</td>
                      <td className="p-3">Avoid minimum-due traps; log any abusive calls for RBI proof.</td>
                    </tr>
                    <tr className="bg-amber-50/50">
                      <td className="p-3 font-bold text-slate-900">Day 90</td>
                      <td className="p-3 font-mono text-[11px] text-amber-700 font-bold">NPA Stage</td>
                      <td className="p-3">Marks credit card as Non-Performing Asset (NPA) in bank books.</td>
                      <td className="p-3 font-bold text-amber-800">Prepare hardship proofs and lump-sum savings for OTS talks.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Day 95 to 150</td>
                      <td className="p-3 font-mono text-[11px] text-[#1886ff] font-bold">OTS Window</td>
                      <td className="p-3">Recovery team reviews Board-approved compromise settlement offer.</td>
                      <td className="p-3 font-bold text-slate-900">Negotiate 50% to 70% waiver on inflated dues and verify OTS letter.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">15 Days Post-OTS</td>
                      <td className="p-3 font-mono text-[11px] text-emerald-700 font-bold">Final Closure</td>
                      <td className="p-3">Issues No Dues Certificate and updates CIBIL under 15-day rule.</td>
                      <td className="p-3">Verify zero overdue balance across all 4 credit bureaus.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 11: Real-World Cases: Multiple Cards, EMIs & Relatives */}
            <section id="specialized-scenarios" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Briefcase className="w-4 h-4 text-[#1886ff]" />
                <span>Specialized Real-World Cases</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                11. Real-World Cases: Multiple Cards, EMIs &amp; Relatives
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Credit card rent blocks rarely happen in isolation. Here is how Indian banking rules apply to the four most common borrower situations.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-[#1886ff]" />
                    Multi-Card Daisy-Chain Collapse
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Many borrowers swipe Card A to pay Card B, and Card B to pay Card C. When one bank blocks MCC 6513, all three cards default together. Prioritizing staged OTS across each bank solves the whole chain.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Scale className="w-4 h-4 text-emerald-600" />
                    Second Card in the Same Bank (UCIC)
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Banks link all your cards under one Unique Customer Identification Code (UCIC). If one card is cancelled and defaults, the bank will usually freeze your second card with that same bank too.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-indigo-600" />
                    Unbilled Merchant EMIs on Blocked Card
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If you bought a phone or laptop on EMI before the block, permanent card closure cancels future monthly instalments. The remaining principal joins your final bill and can be settled together in OTS.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-amber-600" />
                    Genuine Tenant Wrongly Blocked
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If you paid real house rent to an actual landlord, send your registered lease, Form 16 HRA proof, and landlord PAN to the Nodal Officer. Banks restore genuine cards once real tenancy is verified.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 12: Company Profile Component */}
            <div id="company-profile" className="scroll-target pt-2">
              <CompanySection />
            </div>

            {/* SECTION 13: 10 Synchronized FAQs */}
            <section id="frequently-asked-questions" className="scroll-target space-y-5">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <HelpCircle className="w-4 h-4 text-[#1886ff]" />
                <span>Direct Answers</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Frequently Asked Questions: Credit Card Rent Block &amp; OTS
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Clear, verified legal answers on MCC 6513 rent blocks, RBI card deactivation rules, Income Tax AIS alerts, and settling blocked credit card debt in India.
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

            {/* SECTION 14: Citations & Outbound Authority Grid */}
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
                  <strong>RBI Master Direction:</strong> RBI/2022-23/92, DoR.AUT.REC.No.27/24.01.041/2022-23 (Credit Card and Debit Card - Issuance and Conduct Directions, 2022, updated March 7, 2024).
                </li>
                <li>
                  <strong>RBI Press Release 2023-2024/1885 (February 15, 2024):</strong> Restraining of Unauthorized Card Network Payment Intermediary Arrangements under Section 4 of the Payment and Settlement Systems Act, 2007.
                </li>
                <li>
                  <strong>RBI Compromise Settlement Circular:</strong> RBI/2023-24/40, DoR.STR.REC.20/21.04.048/2023-24 (Framework for Compromise Settlements and Technical Write-offs, June 8, 2023).
                </li>
                <li>
                  <strong>Income Tax Act, 1961 &amp; Rules, 1962:</strong> Section 285BA read with Rule 114E (SFT-006 Reporting of Rs 10 Lakh+ Credit Card Payments on Annual Information Statement).
                </li>
                <li>
                  <strong>Supreme Court of India Precedents:</strong> Satishchandra Ratanlal Shah v. State of Gujarat (2019) and Lalit Chaturvedi &amp; Ors. v. State of Uttar Pradesh (2024).
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
                  <a href="https://www.incometax.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>Income Tax e-Filing &amp; AIS Portal</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.indiacode.nic.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>India Code Statutory Repository</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.npci.org.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>NPCI Payment Systems</span>
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
                  <Link href="/credit-card-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Credit Card Settlement Guide
                  </Link>
                  <Link href="/credit-card-atm-cash-withdrawal-interest-trap-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    ATM Cash Advance Debt Trap
                  </Link>
                  <Link href="/unbilled-credit-card-merchant-emi-foreclosure-default" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Unbilled Credit Card EMI Rules
                  </Link>
                  <Link href="/rupay-credit-card-upi-debt-default-settlement-rules" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    RuPay UPI Credit Card Default
                  </Link>
                  <Link href="/settle-multiple-credit-cards" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Settle Multiple Credit Cards
                  </Link>
                  <Link href="/credit-card-minimum-due-trap" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Credit Card Minimum Due Trap
                  </Link>
                  <Link href="/can-bank-file-section-420-cheating-case-for-loan-default" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Section 420 Loan Default Defense
                  </Link>
                  <Link href="/stop-credit-card-recovery-calls" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Stop Credit Card Recovery Calls
                  </Link>
                  <Link href="/get-noc-after-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    No Dues Certificate Guide
                  </Link>
                  <Link href="/services/credit-card-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Credit Card Settlement Services
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
                Specialist in RBI credit card compliance, MCC dispute defense, anti-harassment protection, and structured One-Time Settlement resolutions across major Indian banks.
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
                  BLOCKED CARD DEBT RELIEF
                </span>
                <p className="text-lg md:text-xl font-bold text-white leading-snug">
                  Stuck With a Blocked Credit Card Bill?
                </p>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Stop losing 3% every month in rotation fees. Our banking legal team stops recovery harassment, handles bank audit notices safely, and negotiates 50% to 70% OTS waivers.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Get Free Settlement Assessment
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
                  <span><strong>Safe Audit Reply:</strong> Zero forgery risk on bank end-use queries.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Multi-Card Resolution:</strong> Staged OTS for daisy-chained cards.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Family Shield:</strong> Strict RBI protection against third-party calls.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Verified Closure:</strong> Official bank OTS letter and No Dues proof.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">Related Legal Guides</p>
              <div className="space-y-2.5">
                <Link
                  href="/credit-card-atm-cash-withdrawal-interest-trap-settlement"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    ATM Cash Advance Interest Trap
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Day 1 APR &amp; settlement rules &rarr;</span>
                </Link>

                <Link
                  href="/unbilled-credit-card-merchant-emi-foreclosure-default"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Unbilled Credit Card EMI Closure
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">EMI acceleration on default &rarr;</span>
                </Link>

                <Link
                  href="/settle-multiple-credit-cards"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Settle Multiple Credit Cards
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Multi-bank OTS strategy &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
