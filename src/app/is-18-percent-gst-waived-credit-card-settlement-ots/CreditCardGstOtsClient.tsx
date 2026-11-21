'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
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
  Gavel,
  Landmark,
  Receipt
} from 'lucide-react';

export default function CreditCardGstOtsClient() {
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
    { id: 'gst-legal-framework', label: '1. Why 18% GST Applies to Card Interest' },
    { id: 'card-vs-loan-gst', label: '2. Credit Card GST vs Loan Exemption' },
    { id: 'ots-gst-waiver', label: '3. Is 18% GST Waived in OTS Settlement?' },
    { id: 'section-34-credit-note', label: '4. Section 34 CGST vs Commercial Notes' },
    { id: 'rbi-compounding-ban', label: '5. RBI Ban on Compounding Unpaid GST' },
    { id: 'gst-calculation-matrix', label: '6. Card Dues & OTS Calculation Table' },
    { id: 'step-by-step-ots-sop', label: '7. Step-by-Step All-Inclusive OTS SOP' },
    { id: 'npa-suspense-rules', label: '8. NPA Stage & Unapplied Interest Rules' },
    { id: 'common-ots-gst-traps', label: '9. Common OTS GST Traps to Avoid' },
    { id: 'escalation-matrix', label: '10. Escalation Matrix: GRO to Ombudsman' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
    {
      q: 'Why do Indian banks charge 18% GST on credit card interest?',
      a: 'Under Entry 27 of CBIC Notification No. 12/2017-Central Tax (Rate), interest on normal loans and advances is exempt from GST. However, the notification explicitly excludes interest involved in credit card services. As a result, credit card interest and finance charges attract 18% GST.'
    },
    {
      q: 'Is 18% GST waived during a credit card One-Time Settlement (OTS)?',
      a: 'In practice, yes, if you negotiate an all-inclusive OTS lump sum. While banks cannot erase GST already paid to the government on old statements, they absorb the waived interest, fees, and billed GST as a commercial write-off. You should never agree to pay extra GST on top of a final OTS amount.'
    },
    {
      q: 'Can a bank issue a GST Credit Note under Section 34 for an OTS waiver?',
      a: 'Usually no. Section 34 of the CGST Act, 2017 allows a GST credit note only for overcharged invoices, returned goods, deficient services, or pre-agreed discounts. Because an OTS is a bad-debt compromise after default, banks issue an internal commercial credit note instead of a Section 34 GST credit note.'
    },
    {
      q: 'Can a bank charge compound interest on unpaid 18% GST?',
      a: 'No. Under the RBI Master Direction on Credit Card and Debit Card Issuance and Conduct Directions, 2022, card issuers cannot capitalize unpaid charges, levies, or taxes for charging or compounding interest. If a bank added interest on unpaid GST, you can demand a ledger reversal.'
    },
    {
      q: 'Do personal loans also attract 18% GST on interest and penal charges?',
      a: 'No. Regular personal loan interest is exempt from GST under Entry 27 of Notification No. 12/2017. In addition, CBIC Circular No. 245/02/2025-GST clarified that penal charges levied by banks and NBFCs for loan default do not attract GST. Only credit card interest and card fees carry 18% GST.'
    },
    {
      q: 'What happens to credit card interest and GST after the account turns NPA?',
      a: 'Once a credit card account crosses 90 days past due and becomes a Non-Performing Asset (NPA), RBI IRAC norms require banks to stop recognizing unrealized interest as income. The bank moves uncollected interest into an Unapplied Interest Suspense Account, which gives you strong leverage to negotiate a waiver.'
    },
    {
      q: 'Should I pay if a recovery agent asks for 18% GST extra on top of my OTS amount?',
      a: 'Do not pay until you verify the official OTS sanction letter. An OTS letter must state one all-inclusive full and final settlement figure covering principal, interest, penalties, and GST. Never accept vague wording like settlement amount plus applicable taxes.'
    },
    {
      q: 'Does an OTS settlement waiver create an income tax liability for the borrower?',
      a: 'For individual personal credit card holders, a waiver on personal consumption debt is generally a capital or personal relief and not business income. However, if you used the card for business expenses and claimed deductions under Section 41(1) of the Income Tax Act, consult a Chartered Accountant.'
    },
    {
      q: 'How do I challenge illegal GST compounding on my credit card statement?',
      a: 'Request a complete itemized billing ledger from the card issuer showing principal, interest, late fees, and GST separately. If interest was charged on unpaid GST or late fees, file a written complaint with the Bank Grievance Redressal Officer and escalate to the RBI Ombudsman at cms.rbi.org.in.'
    },
    {
      q: 'How does CredSettle help reduce credit card OTS amounts involving heavy GST?',
      a: 'CredSettle audits your card statements to strip out illegal interest-on-GST compounding, separates true principal from inflated charges, and negotiates an all-inclusive OTS sanction letter with zero hidden tax demands plus a verified No Dues Certificate.'
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
            <Receipt className="w-3.5 h-3.5" />
            <span>CGST Act 2017 &amp; RBI Credit Card Settlement Rules</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            How 18% GST Applies to Credit Card Interest &amp; Settlement
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            Find out why Indian banks charge 18% GST on credit card interest, whether GST is waived in a One-Time Settlement (OTS), and how RBI rules stop illegal interest compounding on unpaid taxes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Audit Your Card OTS Offer</span>
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
                  Protected under RBI Credit Card Master Direction 2022 and CGST Act, 2017.
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
                <span>EXECUTIVE BRIEF: 18% GST ON CREDIT CARD INTEREST &amp; OTS WAIVER</span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Why 18% GST Applies:</strong> Entry 27 of CBIC Notification 12/2017 exempts regular loan interest from GST, but explicitly excludes credit card interest. So card interest and fees carry 18% GST.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">How OTS Handles GST:</strong> In a One-Time Settlement (OTS), banks absorb waived interest, late fees, and billed GST as a commercial write-off. You pay one agreed lump sum.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">No Section 34 GST Credit Note:</strong> Banks cannot reverse past GST paid to the government through a Section 34 credit note for default write-offs. They close your ledger using an internal commercial credit note.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">RBI Ban on Compounding GST:</strong> Under the RBI Credit Card Master Direction 2022, banks cannot charge compound interest on unpaid GST or late fees. Any such inflated interest is illegal.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Demand All-Inclusive OTS Letters:</strong> Never accept an OTS letter that says &quot;plus applicable GST&quot;. Insist on a single, all-inclusive full and final settlement amount.
                  </span>
                </li>
              </ul>
            </div>

            {/* SECTION 1 */}
            <section id="gst-legal-framework" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Scale className="w-4 h-4 text-[#1886ff]" />
                <span>CGST Act 2017 &amp; CBIC Tax Structure</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                1. Why Banks Charge 18% GST on Credit Card Interest
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Many credit card holders are surprised when their overdue bill grows much faster than expected. Along with 36% to 45% annual interest, banks also add 18% Goods and Services Tax (GST) every month.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This tax comes from CBIC Notification No. 12/2017-Central Tax (Rate), dated June 28, 2017. Entry 27 of this notification exempts interest on deposits, loans, and advances from GST. However, the rule adds a strict exception in brackets: &quot;(other than interest involved in credit card services)&quot;.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Because of this exception, credit card finance charges do not get tax-free status. Under Heading 9971 for financial services, banks must charge 18% GST (9% CGST and 9% SGST, or 18% IGST).
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                You pay 18% GST on almost every credit card charge. This includes revolving interest on unpaid bills, late payment fees, cash advance fees, overlimit charges, and EMI processing fees. You do not pay GST on the principal retail spend itself, because the merchant already charged GST when you bought the item.
              </p>
            </section>

            {/* SECTION 2 */}
            <section id="card-vs-loan-gst" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Landmark className="w-4 h-4 text-[#1886ff]" />
                <span>Tax Distinction Across Credit Products</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                2. Credit Card GST vs Personal Loan GST Exemption
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Borrowers often confuse personal loan rules with credit card rules. Indian tax law treats these two products very differently, even when both are unsecured debts from the same bank.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Interest on a standard personal loan, home loan, or car loan is 100% exempt from GST under Entry 27 of Notification 12/2017. Even if you miss EMIs, CBIC Circular No. 245/02/2025-GST clarified that penal charges on regular bank loans do not attract GST.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                In contrast, credit card interest is treated as a taxable facilitation service. That is why a ₹1,00,000 credit card default grows much faster than a ₹1,00,000 personal loan default. Every ₹10,000 of monthly card interest immediately adds ₹1,800 in GST to your bill.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Charge Component</th>
                      <th className="p-3">Credit Card Account</th>
                      <th className="p-3">Personal / Term Loan</th>
                      <th className="p-3">Governing GST Provision</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Monthly Interest</td>
                      <td className="p-3 text-rose-600 font-semibold">18% GST Applicable</td>
                      <td className="p-3 text-emerald-600 font-semibold">Exempt (0% GST)</td>
                      <td className="p-3">Notification 12/2017-CT(R), Entry 27</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Late Fee / Penal Charge</td>
                      <td className="p-3 text-rose-600 font-semibold">18% GST Applicable</td>
                      <td className="p-3 text-emerald-600 font-semibold">Exempt (0% GST)</td>
                      <td className="p-3">CBIC Circular 102/2019 &amp; 245/2025</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Processing / Annual Fee</td>
                      <td className="p-3 text-rose-600 font-semibold">18% GST Applicable</td>
                      <td className="p-3 text-rose-600 font-semibold">18% GST Applicable</td>
                      <td className="p-3">Taxable Banking Service (SAC 9971)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Principal Amount</td>
                      <td className="p-3 text-emerald-600 font-semibold">No Extra GST</td>
                      <td className="p-3 text-emerald-600 font-semibold">No Extra GST</td>
                      <td className="p-3">Money/Principal not a supply</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 3 */}
            <section id="ots-gst-waiver" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <CheckCircle2 className="w-4 h-4 text-[#1886ff]" />
                <span>One-Time Settlement (OTS) Reality</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                3. Is 18% GST Waived in a One-Time Settlement (OTS)?
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Yes, in practical terms, you do not have to pay waived GST separately when you close a proper One-Time Settlement (OTS). However, it helps to understand how the bank handles this tax behind the scenes.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                When your credit card was active, the bank issued monthly statements and already deposited 18% GST with the government on the interest and fees billed to you. The government does not refund that tax to the bank just because you defaulted later.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                During an OTS, the bank agrees to accept a reduced lump-sum amount to close your bad debt. The bank treats the entire unpaid balance, including principal, interest, late fees, and billed GST, as one total recovery pool.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                For example, if your total due is ₹3,00,000 (including ₹40,000 in GST) and you settle for ₹1,10,000, the remaining ₹1,90,000 is written off as a bad debt loss by the bank. You do not pay the ₹40,000 GST separately, as long as your OTS letter states that ₹1,10,000 is the full and final all-inclusive payment.
              </p>
            </section>

            {/* SECTION 4 */}
            <section id="section-34-credit-note" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>CGST Act Section 34 Explained Simply</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                4. Section 34 CGST Act: GST vs Commercial Credit Notes
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Sometimes a bank officer or recovery agent claims that &quot;GST cannot be waived by law&quot; under the CGST Act. They are confusing a statutory GST Credit Note with a Commercial Credit Note.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under Section 34(1) of the CGST Act, 2017, a supplier can issue a GST Credit Note to reduce tax liability only in four specific cases:
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700 list-disc pl-5 leading-relaxed">
                <li>The taxable value or tax charged in the original invoice exceeded the actual amount payable.</li>
                <li>The customer returned the goods supplied.</li>
                <li>The goods or services supplied were found to be deficient.</li>
                <li>A pre-agreed post-supply discount was given under Section 15(3)(b).</li>
              </ul>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                An OTS waiver is a financial compromise due to borrower hardship, not a deficient service or a pre-agreed discount. Therefore, the bank cannot issue a Section 34 GST Credit Note to claim a tax refund from the government.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Instead, banks issue an internal <strong>Commercial Credit Note</strong> (or bad-debt write-off entry) to clear your account ledger to zero. That is an accounting step for the bank. It does not stop the bank from waiving your total dues, including the GST portion, in an OTS.
              </p>
            </section>

            {/* SECTION 5 */}
            <section id="rbi-compounding-ban" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <ShieldCheck className="w-4 h-4 text-[#1886ff]" />
                <span>RBI Master Direction Protection</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                5. RBI Ban on Compounding Interest on Unpaid GST
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                One of the biggest reasons credit card bills spiral out of control is illegal compounding. Many cardholders do not know that the Reserve Bank of India strictly forbids banks from charging interest on unpaid GST or late fees.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under the <strong>RBI Master Direction on Credit Card and Debit Card (Issuance and Conduct) Directions, 2022</strong>, there shall be no capitalisation of unpaid charges, levies, or taxes for charging or compounding interest.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                This means your bank cannot add last month&apos;s unpaid 18% GST or late fee into your principal balance and then charge 42% APR interest on top of it. In addition, banks can only report an account as past due or charge late fees if the payment remains overdue for more than 3 days after the due date.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If a billing audit shows your bank compounded interest on unpaid GST, you have a strong legal ground to demand a full reversal before negotiating your OTS.
              </p>
            </section>

            {/* SECTION 6 */}
            <section id="gst-calculation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <TrendingUp className="w-4 h-4 text-[#1886ff]" />
                <span>Sample Default Ledger Breakdown</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                6. Calculation Table: Card Dues Breakdown Before OTS
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                To negotiate a fair settlement, you must separate your actual principal spend from interest, late fees, and 18% GST. The table below shows a typical ₹1,00,000 credit card default after 12 months of non-payment.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white shadow-xs">
                <div className="bg-slate-900 text-white p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-[#1886ff]" />
                    <span className="font-bold text-sm">Sample ₹1,00,000 Card Default (12-Month Overdue Ledger)</span>
                  </div>
                  <span className="text-xs text-blue-300 font-mono">Illustrative OTS Audit</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80">
                    <thead>
                      <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-semibold">
                        <th className="p-3">Ledger Component</th>
                        <th className="p-3">Typical Bank Billing</th>
                        <th className="p-3">GST Applied (18%)</th>
                        <th className="p-3 text-right">OTS Negotiation Stance</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200/80 text-slate-600">
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Original Retail Principal</td>
                        <td className="p-3 font-mono">₹1,00,000</td>
                        <td className="p-3 font-mono">₹0 (Already at POS)</td>
                        <td className="p-3 text-right font-bold text-slate-900">Base for Settlement</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Revolving Interest (42% APR)</td>
                        <td className="p-3 font-mono text-amber-700">₹48,000</td>
                        <td className="p-3 font-mono text-rose-600">₹8,640</td>
                        <td className="p-3 text-right font-bold text-emerald-700">Target 80% to 100% Waiver</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Late Fees &amp; Overlimit Fees</td>
                        <td className="p-3 font-mono text-amber-700">₹15,000</td>
                        <td className="p-3 font-mono text-rose-600">₹2,700</td>
                        <td className="p-3 text-right font-bold text-emerald-700">Target 100% Waiver</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-900">Total Billed GST Component</td>
                        <td className="p-3 font-mono text-rose-700">₹11,340</td>
                        <td className="p-3 font-mono">Included Above</td>
                        <td className="p-3 text-right font-bold text-emerald-700">Absorbed in OTS Write-off</td>
                      </tr>
                      <tr className="bg-blue-50/70 font-bold text-slate-900">
                        <td className="p-3">Total Inflated Bank Demand</td>
                        <td className="p-3 font-mono text-rose-700">₹1,74,340</td>
                        <td className="p-3 font-mono text-[#1886ff]">Typical OTS Target</td>
                        <td className="p-3 text-right text-[#1886ff] text-sm sm:text-base font-mono">₹55,000 to ₹75,000 (All-Inclusive)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* SECTION 7 */}
            <section id="step-by-step-ots-sop" className="scroll-target space-y-6">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <FileText className="w-4 h-4 text-[#1886ff]" />
                <span>Standard Operating Procedure</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                7. Step-by-Step SOP: Negotiating an All-Inclusive OTS
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Follow these five practical steps to make sure you never get hit with surprise GST bills during or after your credit card settlement.
              </p>

              <div className="space-y-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">1</span>
                    Step 1: Request an Itemized Billing Statement
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Email the bank and ask for a complete breakup of principal spends, interest, late fees, and 18% GST. Never negotiate blindly on a single total figure.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">2</span>
                    Step 2: Flag Illegal Interest-on-GST Compounding
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Check if the bank charged interest on unpaid GST or late fees. Cite the RBI Credit Card Master Direction 2022 to get those illegal charges removed from your balance.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">3</span>
                    Step 3: Anchor Your Offer to True Principal
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Submit a written hardship proposal offering 40% to 60% of your true principal amount. State clearly that your offer is full and final, inclusive of all taxes.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">4</span>
                    Step 4: Verify the OTS Sanction Letter Wording
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Before paying a single rupee, verify the official OTS letter from the bank&apos;s domain email. Ensure it explicitly states the exact settlement amount is inclusive of all interest, penalties, and GST.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] flex items-center justify-center text-xs font-black">5</span>
                    Step 5: Pay via Traceable Banking Channels &amp; Collect NOC
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Pay directly into your credit card account via NEFT or RTGS. Collect your official No Dues Certificate (NOC) and confirm zero residual GST balance remains.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 8 */}
            <section id="npa-suspense-rules" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Clock className="w-4 h-4 text-[#1886ff]" />
                <span>RBI IRAC Accounting Norms</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                8. NPA Stage &amp; Unapplied Interest Suspense Rules
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Timing plays a huge role in how much interest and GST a bank will waive. Once your credit card stays unpaid for 90 days, the bank must classify it as a Non-Performing Asset (NPA).
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Under RBI&apos;s Prudential Norms on Income Recognition, Asset Classification and Provisioning (IRAC), banks cannot count unrealized interest from an NPA account as real profit. They must reverse or park uncollected interest in an <strong>Unapplied Interest Suspense Account</strong>.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Even though your recovery portal may still display mounting interest and 18% GST, the bank has already stopped booking that interest as revenue. This gives you strong negotiation leverage after Day 90 to waive 100% of post-NPA interest and associated charges.
              </p>
            </section>

            {/* SECTION 9 */}
            <section id="common-ots-gst-traps" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <AlertTriangle className="w-4 h-4 text-[#1886ff]" />
                <span>Borrower Precautions</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                9. Common OTS GST Traps &amp; How to Avoid Double Billing
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Many borrowers agree to an OTS in good faith, only to get a surprise demand later. Watch out for these four common traps during settlement:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-rose-700 font-bold text-sm">
                    <AlertTriangle className="w-4 h-4" />
                    <span>&quot;Plus Applicable GST&quot; Clause</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Some OTS letters state &quot;Settle for ₹1,00,000 + applicable taxes&quot;. Never sign this. Always demand the exact final rupee amount with zero extra tax add-ons.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-amber-700 font-bold text-sm">
                    <Gavel className="w-4 h-4" />
                    <span>Residual GST Keeping Card Open</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If you pay an OTS but the bank leaves ₹2,500 of unwaived GST on the ledger, the card stays open and attracts fresh late fees. Verify a zero balance after payment.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                    <Briefcase className="w-4 h-4" />
                    <span>ARC Assignment Tax Confusion</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    When a bank sells your card debt to an Asset Reconstruction Company (ARC), the ARC buys the debt at a steep discount. They cannot invent fresh GST on top of the assigned sum.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Verbal Promises by Recovery Agents</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Agents often promise over the phone that GST is waived, while the formal system only credits your payment as a partial installment. Always get an official OTS letter first.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 10 */}
            <section id="escalation-matrix" className="scroll-target space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1886ff]">
                <Building2 className="w-4 h-4 text-[#1886ff]" />
                <span>Statutory Escalation Protocol</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                10. Escalation Matrix: Bank GRO to RBI Ombudsman
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                If your bank refuses to reverse illegal interest-on-GST compounding or demands extra GST after issuing an OTS letter, escalate using the official RBI three-tier system.
              </p>

              <div className="border border-slate-200/80 rounded-2xl overflow-x-auto bg-white shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left border-collapse divide-x divide-slate-200/80 min-w-[550px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                      <th className="p-3">Escalation Tier</th>
                      <th className="p-3">Designated Authority</th>
                      <th className="p-3">Turnaround Time</th>
                      <th className="p-3">Scope of Intervention</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 1: GRO</td>
                      <td className="p-3">Bank Grievance Redressal Officer</td>
                      <td className="p-3 font-mono">7 to 10 Working Days</td>
                      <td className="p-3">Audits billing ledger and flags unauthorized GST compounding or fee errors.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-slate-900">Level 2: PNO</td>
                      <td className="p-3">Principal Nodal Officer (Head Office)</td>
                      <td className="p-3 font-mono">14 to 21 Working Days</td>
                      <td className="p-3">Approves interest-on-GST reversals and issues corrected all-inclusive OTS letters.</td>
                    </tr>
                    <tr className="bg-blue-50/40">
                      <td className="p-3 font-bold text-slate-900">Level 3: RBI Ombudsman</td>
                      <td className="p-3">Reserve Bank Integrated Ombudsman</td>
                      <td className="p-3 font-mono">30 Days Post-PNO</td>
                      <td className="p-3">Passes binding orders on cms.rbi.org.in for RBI Master Direction violations.</td>
                    </tr>
                  </tbody>
                </table>
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
                Frequently Asked Questions: Credit Card GST &amp; OTS
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Clear, verified answers on 18% GST on credit card interest, Section 34 CGST credit notes, RBI compounding bans, and how to settle your card debt safely.
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
                  <strong>CBIC Notification No. 12/2017-Central Tax (Rate):</strong> Entry 27 (Heading 9971), Exempting Loan Interest Except Interest Involved in Credit Card Services.
                </li>
                <li>
                  <strong>Central Goods and Services Tax Act, 2017:</strong> Section 15 (Value of Taxable Supply) and Section 34 (Credit and Debit Notes).
                </li>
                <li>
                  <strong>CBIC Circulars:</strong> Circular No. 102/21/2019-GST (Penal Interest on Loans), Circular No. 178/10/2022-GST (Liquidated Damages), and Circular No. 245/02/2025-GST (Penal Charges by Regulated Entities).
                </li>
                <li>
                  <strong>Reserve Bank of India Master Direction:</strong> Credit Card and Debit Card - Issuance and Conduct Directions, 2022 (Ban on Capitalisation of Unpaid Charges, Levies, or Taxes).
                </li>
                <li>
                  <strong>RBI Prudential Norms (IRAC):</strong> Master Circular on Income Recognition, Asset Classification and Provisioning Pertaining to Advances (Unapplied Interest on NPA Accounts).
                </li>
              </ul>

              {/* 6 Outbound Authority Badges */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block mb-2">Verified Government &amp; Regulatory Portals:</span>
                <div className="flex flex-wrap gap-2">
                  <a href="https://www.cbic.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>CBIC Official Portal</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.gst.gov.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>Goods and Services Tax Portal</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.rbi.org.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>Reserve Bank of India</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://cms.rbi.org.in" target="_blank" rel="noopener noreferrer" className="text-[11px] px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1886ff] transition-colors font-medium border border-blue-200 inline-flex items-center gap-1">
                    <span>RBI Integrated Ombudsman Portal</span>
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
                  <Link href="/services/credit-card-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Credit Card Settlement Services
                  </Link>
                  <Link href="/how-to-verify-bank-ots-sanction-letter-avoid-settlement-scams" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Verify Bank OTS Letter
                  </Link>
                  <Link href="/get-noc-after-loan-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Get NOC After Settlement
                  </Link>
                  <Link href="/what-is-minimum-amount-due-for-credit-card" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Minimum Amount Due Trap
                  </Link>
                  <Link href="/credit-card-atm-cash-withdrawal-interest-trap-settlement" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    ATM Cash Advance Trap
                  </Link>
                  <Link href="/unbilled-credit-card-merchant-emi-foreclosure-default" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Unbilled Credit Card EMI Rules
                  </Link>
                  <Link href="/credit-card-overlimit-fee-without-consent-rbi-refund" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Overlimit Fee RBI Refund
                  </Link>
                  <Link href="/credit-card-balance-transfer-default-interest-rules" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Balance Transfer Default Rules
                  </Link>
                  <Link href="/stop-recovery-agent-harassment" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    Stop Recovery Harassment
                  </Link>
                  <Link href="/rbi-rules-for-recovery-agents" className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1886ff] text-slate-700 transition-colors font-medium border border-slate-200">
                    RBI Recovery Agent Rules
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
                Specialist in credit card debt restructuring, RBI Master Direction compliance, and OTS negotiations, helping Indian borrowers eliminate inflated interest and hidden tax demands.
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
                  OTS LEDGER AUDIT &amp; RELIEF
                </span>
                <p className="text-lg md:text-xl font-bold text-white leading-snug">
                  Bank Demanding Extra GST on Your OTS?
                </p>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our debt resolution team audits your card ledger for illegal GST compounding under RBI rules and negotiates an all-inclusive OTS letter with a verified NOC.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Get Free OTS Audit Now
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
                  <span>RBI Compliant &bull; 100% Confidential</span>
                </div>
              </div>
            </div>

            {/* Card 3: CredSettle Trust Badges */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">The CredSettle Assurance</p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>All-Inclusive OTS Letters:</strong> Zero hidden GST or residual fee surprises.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>RBI Compounding Audit:</strong> Strip illegal interest-on-GST charges.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>50% to 75% Debt Reduction:</strong> Negotiated directly with bank nodal teams.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Verified Closure NOC:</strong> Full legal protection against future claims.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">Related Credit Card Guides</p>
              <div className="space-y-2.5">
                <Link
                  href="/services/credit-card-settlement"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Credit Card Debt Settlement
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Complete OTS process &rarr;</span>
                </Link>

                <Link
                  href="/how-to-verify-bank-ots-sanction-letter-avoid-settlement-scams"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Verify Bank OTS Sanction Letter
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Avoid fake settlement letters &rarr;</span>
                </Link>

                <Link
                  href="/get-noc-after-loan-settlement"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Get NOC After Loan Settlement
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Official bank closure steps &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
