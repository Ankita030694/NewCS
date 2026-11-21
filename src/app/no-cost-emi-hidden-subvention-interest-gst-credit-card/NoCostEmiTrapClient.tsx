'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import StatsStrip from '@/components/StatsStrip';
import CompanySection from '@/components/CompanySection';
import {
  ChevronDown,
  Scale,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  FileText,
  BookOpen,
  DollarSign,
  Check,
  Lock,
  Phone,
  Bookmark,
  ArrowRight,
  TrendingUp,
  Landmark,
  Calculator,
  Percent,
  Receipt,
  HelpCircle,
  Building2,
  AlertCircle,
  Info
} from 'lucide-react';

export default function NoCostEmiTrapClient() {
  const [activeId, setActiveId] = useState<string>('quick-crux');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Interactive Calculator State
  const [productPrice, setProductPrice] = useState<number>(60000);
  const [tenureMonths, setTenureMonths] = useState<number>(6);
  const [annualInterestRate, setAnnualInterestRate] = useState<number>(15);
  const [processingFee, setProcessingFee] = useState<number>(199);
  const [cashDiscountLost, setCashDiscountLost] = useState<number>(3000);

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

  // Calculator Math
  const calculationResults = useMemo(() => {
    const r = annualInterestRate / 12 / 100;
    const n = tenureMonths;
    const P_target = productPrice;

    // Monthly installment that equals productPrice / n
    const targetMonthlyEmi = P_target / n;

    // Discounted principal P_actual such that standard reducing balance EMI equals targetMonthlyEmi
    // EMI = P * r * (1+r)^n / ((1+r)^n - 1)
    // P_actual = targetMonthlyEmi * ((1+r)^n - 1) / (r * (1+r)^n)
    const factor = Math.pow(1 + r, n);
    const actualPrincipal = (targetMonthlyEmi * (factor - 1)) / (r * factor);
    const merchantDiscount = P_target - actualPrincipal;
    const totalInterestCharged = P_target - actualPrincipal;

    // 18% GST on interest under Notification 12/2017-CT (Rate)
    const gstOnInterest = totalInterestCharged * 0.18;

    // 18% GST on processing fee
    const gstOnProcessingFee = processingFee * 0.18;
    const totalProcessingCost = processingFee + gstOnProcessingFee;

    // Total actual out-of-pocket payment
    const totalPaidOnCard = P_target + gstOnInterest + totalProcessingCost;

    // Direct Cash Alternative
    const upfrontCashCost = productPrice - cashDiscountLost;

    // Total hidden extra cost compared to cash purchase
    const realExtraCostOverCash = totalPaidOnCard - upfrontCashCost;

    // Hidden cost over sticker MRP
    const hiddenCostOverMrp = totalPaidOnCard - productPrice;

    return {
      actualPrincipal: Math.round(actualPrincipal),
      merchantDiscount: Math.round(merchantDiscount),
      monthlyEmi: Math.round(targetMonthlyEmi),
      totalInterest: Math.round(totalInterestCharged),
      gstOnInterest: Math.round(gstOnInterest),
      totalProcessingCost: Math.round(totalProcessingCost),
      totalPaidOnCard: Math.round(totalPaidOnCard),
      upfrontCashCost: Math.round(upfrontCashCost),
      realExtraCostOverCash: Math.round(realExtraCostOverCash),
      hiddenCostOverMrp: Math.round(hiddenCostOverMrp)
    };
  }, [productPrice, tenureMonths, annualInterestRate, processingFee, cashDiscountLost]);

  const navLinks = [
    { id: 'quick-crux', label: 'Executive Brief & Legal Crux' },
    { id: 'zero-cost-myth', label: '1. The Zero-Cost Myth: RBI 2013 & 2022 Mandates' },
    { id: 'subvention-mechanics', label: '2. Merchant Subvention: How Banks Structure EMIs' },
    { id: 'gst-trap', label: '3. The 18% GST Trap: Tax Exemption Carve-Out' },
    { id: 'hidden-costs', label: '4. Processing Fees & 3% Foreclosure Penalties' },
    { id: 'financial-comparison', label: '5. Upfront Cash vs No-Cost EMI Calculator' },
    { id: 'credit-score-impact', label: '6. Credit Score Impact: Limit Blocking & CUR' },
    { id: 'legal-protections', label: '7. Legal Protections: Consumer Protection Act' },
    { id: 'dispute-sop', label: '8. Step-by-Step SOP: Disputing EMI Surcharges' },
    { id: 'escalation-matrix', label: '9. 3-Tier Escalation: Bank to RBI Ombudsman' },
    { id: 'default-danger', label: '10. Default Danger: 42% APR Revolving Trap' },
    { id: 'company-profile', label: 'About CredSettle' },
    { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
    { id: 'regulatory-sources', label: 'Statutory Citations & Authorities' }
  ];

  const faqs = [
    {
      q: 'What is a No-Cost EMI on a credit card in India?',
      a: 'A No-Cost EMI is a retail financing scheme where you pay for a purchase in monthly installments without an apparent interest surcharge. In reality, the interest is not waived. The merchant provides an upfront discount equal to the interest that your card-issuing bank charges over the loan tenure.'
    },
    {
      q: 'Why do banks charge 18% GST on No-Cost EMI transactions?',
      a: 'Under Entry 27 of Notification No. 12/2017-Central Tax (Rate), normal loan interest is exempt from GST, but credit card services are expressly excluded. Because the bank issues a credit card loan, it charges interest, and 18% GST applies to that interest each month. The merchant discount does not cover this GST.'
    },
    {
      q: 'Can banks charge processing fees on zero-cost EMIs?',
      a: 'Yes. Most banks levy an upfront EMI processing fee between Rs 99 and Rs 299 plus 18% GST. While RBI rules require transparent upfront disclosure before conversion, many card issuers automatically deduct this fee on your first monthly statement.'
    },
    {
      q: 'Did the Reserve Bank of India ban zero percent interest schemes?',
      a: 'In Circular DBOD.No.Dir.BC.39/13.03.00/2013-14, the RBI ruled that zero percent interest is financially non-existent and banned deceptive advertising. In its 2022 Master Direction, the RBI reaffirmed that interest-bearing EMI conversions cannot be disguised as zero-interest without clear upfront disclosure of principal, interest, discounts, and fees.'
    },
    {
      q: 'What is merchant subvention in credit card EMIs?',
      a: 'Merchant subvention is a commercial arrangement where a seller or brand absorbs the financing interest by discounting the product invoice. The bank then finances the discounted price at its normal interest rate so that the sum of all installments equals the original retail price.'
    },
    {
      q: 'Does choosing a No-Cost EMI hurt my CIBIL score?',
      a: 'A No-Cost EMI does not directly lower your CIBIL score if you pay on time. However, it blocks your credit card limit by the full purchase amount immediately. This increases your Credit Utilization Ratio (CUR) above the healthy 30% mark, which can temporarily reduce your credit score.'
    },
    {
      q: 'What happens if I want to foreclose or prepay my credit card EMI?',
      a: 'Banks usually levy a foreclosure fee of 2% to 3% plus 18% GST on the remaining principal. In addition, the upfront interest discount given by the merchant is not refunded, making early prepayment more expensive than staying on the plan.'
    },
    {
      q: 'What happens if I miss a monthly No-Cost EMI payment?',
      a: 'If you miss an installment or pay only the Minimum Amount Due, the zero-cost structure collapses. The bank immediately charges standard revolving credit card interest of 3.5% to 3.75% per month (42% to 45% APR) from the purchase date, plus late payment fees, GST, and negative CIBIL reporting.'
    },
    {
      q: 'Can I dispute undisclosed processing fees or GST on No-Cost EMIs?',
      a: 'Yes. If the bank or merchant failed to disclose processing fees or interest structures before conversion, you can file a formal grievance citing RBI Master Direction 2022. If the bank does not resolve your complaint within 30 days, you can escalate to the RBI Integrated Ombudsman.'
    },
    {
      q: 'How does CredSettle help cardholders trapped in credit card EMI debt?',
      a: 'CredSettle reviews your statements, audits unauthorized fees and inflated interest, stops recovery agent harassment, and negotiates formal debt settlements with 50% to 75% waivers on accumulated card dues.'
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
            <span>RBI Master Direction 2022 &amp; CGST Act Rules</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-xs">
            Why Zero-Cost Credit Card EMIs Still Charge GST &amp; Fees
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-5 md:mb-6 max-w-2xl mx-auto font-normal text-white/95 leading-relaxed">
            Did you buy a phone or laptop on No-Cost EMI and notice extra GST and fees on your statement? Learn how merchant subvention works and how to protect your finances.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 md:px-8 md:py-3.5 rounded-full bg-white text-blue-900 hover:text-[#1886ff] font-extrabold text-sm md:text-base hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Dispute Hidden EMI Charges</span>
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
                  <span>Cardholder Protection</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  Governed by RBI Master Direction 2022 and Notification No. 12/2017-CT.
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
                <h2 className="text-xs md:text-sm font-black uppercase tracking-wider text-[#1886ff] inline">
                  Executive Brief: No-Cost EMI Realities &amp; Legal Crux
                </h2>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Zero-Percent Interest Is Non-Existent:</strong> The Reserve Bank of India ruled in 2013 that 0% interest is an accounting fiction. All credit card EMIs involve interest.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">The Subvention Mechanism:</strong> The merchant provides an upfront discount equal to the bank interest. The bank then lends at standard rates (usually 14% to 16% per year).
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">18% GST Tax Leak:</strong> Under Notification No. 12/2017-Central Tax, credit card interest is not tax-exempt. You must pay 18% GST on the interest every month.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Processing Fees &amp; Foreclosure Penalties:</strong> Banks add non-refundable processing fees (Rs 99 to Rs 299 + GST) and charge 2% to 3% preclosure fees if you clear the loan early.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Credit Limit Freeze &amp; CIBIL Impact:</strong> Your card limit is blocked by the full price immediately. This spikes your Credit Utilization Ratio (CUR) and can drop your CIBIL score.
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1886ff] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">42% Default Danger:</strong> Missing a single payment revokes all promotional rates. The bank will slap standard 42% APR interest on the entire original balance.
                  </span>
                </li>
              </ul>
            </div>

            {/* SECTION 1: THE ZERO-COST MYTH */}
            <section id="zero-cost-myth" className="scroll-target space-y-4 text-slate-700">
              <div className="flex items-center gap-2 pb-1 border-b border-slate-200">
                <Scale className="w-5 h-5 text-[#1886ff]" />
                <h2 className="text-lg md:text-xl font-bold text-slate-900">
                  1. The Zero-Cost Myth: RBI Stance on Camouflaged Interest
                </h2>
              </div>

              <p className="leading-relaxed text-sm md:text-base">
                Zero-cost EMIs are widely advertised across Indian e-commerce platforms. Retailers promise that consumers can split large purchases into equal monthly installments without paying extra interest. However, from a banking perspective, free borrowing does not exist.
              </p>

              <p className="leading-relaxed text-sm md:text-base">
                The Reserve Bank of India first addressed this issue in Circular DBOD.No.Dir.BC.39/13.03.00/2013-14. The central bank highlighted that zero percent interest schemes hide true loan costs from buyers. The RBI clarified that banks always charge interest on borrowed funds. In zero-interest offers, the cost was either loaded into the product retail price or collected as processing fees.
              </p>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl text-xs md:text-sm text-amber-900">
                <div className="flex items-center gap-2 font-bold mb-1">
                  <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0" />
                  <span>RBI Master Direction 2022 Mandate</span>
                </div>
                <p>
                  Under Paragraph 8(a) of the RBI Master Direction, 2022, banks must never hide interest-bearing loans as free or no-cost. The bank must clearly disclose the loan principal, annual interest rate, merchant discount, and processing charges before converting any transaction.
                </p>
              </div>

              <p className="leading-relaxed text-sm md:text-base">
                Despite these clear rules, many online stores and private banks continue to use the term No-Cost EMI prominently. They show the regulatory breakdown only in collapsed fine print during final checkout. As a result, thousands of cardholders incur unexpected charges.
              </p>
            </section>

            {/* SECTION 2: MERCHANT SUBVENTION MECHANICS */}
            <section id="subvention-mechanics" className="scroll-target space-y-4 text-slate-700">
              <div className="flex items-center gap-2 pb-1 border-b border-slate-200">
                <Building2 className="w-5 h-5 text-[#1886ff]" />
                <h2 className="text-lg md:text-xl font-bold text-slate-900">
                  2. Merchant Subvention Mechanics: How Banks Structure EMIs
                </h2>
              </div>

              <p className="leading-relaxed text-sm md:text-base">
                Why do you pay extra money? Because of merchant subvention. Subvention means a seller pays the bank interest for you. Here, the seller pays the interest by discounting the bill.
              </p>

              <p className="leading-relaxed text-sm md:text-base">
                When you select a 6-month No-Cost EMI for a Rs 60,000 smartphone, the bank does not lend Rs 60,000 at 0%. Instead, the bank requires an interest return of 15% per year, which equals roughly Rs 2,640 over six months.
              </p>

              {/* Comparison Flow Steps */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 my-4">
                <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-2xs">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Step 1</span>
                    <Percent className="w-4 h-4 text-[#1886ff]" />
                  </div>
                  <h3 className="font-bold text-sm text-slate-900 mb-1">Merchant Invoice Discount</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The seller reduces the product invoice price by Rs 2,640. You are billed Rs 57,360 instead of the Rs 60,000 MRP.
                  </p>
                </div>

                <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-2xs">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Step 2</span>
                    <DollarSign className="w-4 h-4 text-[#1886ff]" />
                  </div>
                  <h3 className="font-bold text-sm text-slate-900 mb-1">Bank Disburses Loan</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The bank finances a credit card loan of Rs 57,360 at 15% annual interest. Your monthly EMI is set at Rs 10,000.
                  </p>
                </div>

                <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-2xs">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Step 3</span>
                    <Receipt className="w-4 h-4 text-rose-600" />
                  </div>
                  <h3 className="font-bold text-sm text-slate-900 mb-1">Total Equaling MRP</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Rs 57,360 principal plus Rs 2,640 interest equals Rs 60,000. On paper, it looks like you paid exact MRP.
                  </p>
                </div>
              </div>

              <div className="overflow-x-auto my-4">
                <table className="w-full text-left text-xs md:text-sm border border-slate-200 rounded-xl overflow-hidden shadow-2xs">
                  <thead className="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
                    <tr>
                      <th className="p-3">Financial Parameter</th>
                      <th className="p-3">Advertised Zero-Cost Offer</th>
                      <th className="p-3">Actual Back-End Structure</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr>
                      <td className="p-3 font-semibold text-slate-900">Product Retail Price</td>
                      <td className="p-3">Rs 60,000</td>
                      <td className="p-3">Rs 60,000</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-slate-900">Merchant Invoice Price</td>
                      <td className="p-3">Rs 60,000</td>
                      <td className="p-3 text-emerald-600 font-semibold">Rs 57,360 (Discount applied)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-slate-900">Bank Loan Amount</td>
                      <td className="p-3">None (Purchase split)</td>
                      <td className="p-3">Rs 57,360 (Personal credit loan)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-slate-900">Bank Interest Rate</td>
                      <td className="p-3 font-bold text-emerald-600">0% Interest</td>
                      <td className="p-3 font-bold text-rose-600">14% to 16% per annum</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-slate-900">Monthly EMI Due</td>
                      <td className="p-3">Rs 10,000 per month</td>
                      <td className="p-3">Rs 10,000 per month (Principal + Interest)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="leading-relaxed text-sm md:text-base">
                If the math ended here, the deal would indeed be zero cost to the buyer. However, government tax regulations and bank fee schedules make this structure expensive.
              </p>
            </section>

            {/* SECTION 3: THE 18% GST TRAP */}
            <section id="gst-trap" className="scroll-target space-y-4 text-slate-700">
              <div className="flex items-center gap-2 pb-1 border-b border-slate-200">
                <Receipt className="w-5 h-5 text-rose-600" />
                <h2 className="text-lg md:text-xl font-bold text-slate-900">
                  3. The 18% GST Trap: Central Tax Exemption Exclusion
                </h2>
              </div>

              <p className="leading-relaxed text-sm md:text-base">
                The primary reason you pay more than the product price is Goods and Services Tax (GST). In India, financial services attract 18% GST under SAC Code 9971.
              </p>

              <p className="leading-relaxed text-sm md:text-base">
                Under Notification No. 12/2017-Central Tax (Rate), Entry 27 exempts bank interest on normal loans and advances from GST. This is why you never pay GST on your home loan or car loan interest. However, Entry 27 contains a critical legal exception:
              </p>

              <blockquote className="bg-slate-100 border-l-4 border-slate-400 p-3.5 my-3 italic text-xs md:text-sm text-slate-800 rounded-r-lg">
                &quot;Services by way of extending deposits, loans or advances in so far as the consideration is represented by way of interest or discount (other than interest involved in credit card services)&quot;
              </blockquote>

              <p className="leading-relaxed text-sm md:text-base">
                Because No-Cost EMIs are routed through credit cards, they fall under credit card services. As a result, every rupee of interest charged by the bank is legally subject to 18% GST.
              </p>

              <div className="bg-rose-50 border border-rose-200 rounded-2xl p-4 md:p-5 text-xs md:text-sm text-rose-950 space-y-2.5">
                <div className="flex items-center gap-2 font-bold text-rose-700 text-sm md:text-base">
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  <span>The Merchant Discount Does NOT Cover GST</span>
                </div>
                <p className="leading-relaxed">
                  The merchant discount only offsets the bank interest of Rs 2,640. The merchant does not pay the government GST of 18% on that interest. The bank bills this 18% tax to your card every month.
                </p>
                <p className="font-semibold text-rose-900">
                  18% GST on Rs 2,640 interest = Rs 475.20. You pay Rs 475.20 more than the product MRP.
                </p>
              </div>

              <p className="leading-relaxed text-sm md:text-base">
                You can learn more about how GST applies during loan workouts in our detailed analysis on{' '}
                <Link
                  href="/is-18-percent-gst-waived-credit-card-settlement-ots"
                  className="text-[#1886ff] hover:underline font-semibold"
                >
                  whether 18% GST is waived in credit card settlements
                </Link>
                .
              </p>
            </section>

            {/* SECTION 4: HIDDEN COSTS */}
            <section id="hidden-costs" className="scroll-target space-y-4 text-slate-700">
              <div className="flex items-center gap-2 pb-1 border-b border-slate-200">
                <AlertTriangle className="w-5 h-5 text-amber-600" />
                <h2 className="text-lg md:text-xl font-bold text-slate-900">
                  4. Hidden Costs: Processing Fees &amp; Foreclosure Penalties
                </h2>
              </div>

              <p className="leading-relaxed text-sm md:text-base">
                In addition to 18% GST on interest, credit card issuers levy multiple secondary fees that turn zero-cost purchases into expensive debt traps.
              </p>

              <div className="space-y-3 my-3">
                <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-2xs">
                  <h3 className="font-bold text-sm md:text-base text-slate-900 mb-1 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] text-xs flex items-center justify-center font-bold">1</span>
                    EMI Processing Fees (Rs 99 to Rs 299 + 18% GST)
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Most major Indian banks automatically charge a non-refundable merchant EMI processing fee. This fee is billed on your next monthly statement. For a Rs 199 fee, you pay Rs 234.82 after tax. This fee applies even when the merchant website claims zero processing fees.
                  </p>
                </div>

                <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-2xs">
                  <h3 className="font-bold text-sm md:text-base text-slate-900 mb-1 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] text-xs flex items-center justify-center font-bold">2</span>
                    The 3% Foreclosure Penalty Trap
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    If you get an annual bonus or want to pay off your EMI balance early, banks penalize you. Card issuers charge a preclosure penalty of 2% to 3% plus 18% GST on the outstanding principal. Moreover, the merchant discount was already used up. You do not get that discount back. Learn how to challenge these charges in our guide on{' '}
                    <Link
                      href="/credit-card-merchant-emi-foreclosure-3-percent-dispute"
                      className="text-[#1886ff] hover:underline font-semibold"
                    >
                      credit card EMI foreclosure 3% fee disputes
                    </Link>
                    .
                  </p>
                </div>

                <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-2xs">
                  <h3 className="font-bold text-sm md:text-base text-slate-900 mb-1 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] text-xs flex items-center justify-center font-bold">3</span>
                    Opportunity Cost: Loss of Upfront Cash Discounts
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    When you opt for No-Cost EMI, you forfeit standard payment perks. Merchants frequently offer flat 5% to 10% instant discounts or bank cashbacks on one-time UPI or single-swipe card payments. By taking the EMI, you give up that cash discount to fund the bank interest.
                  </p>
                </div>

                <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-2xs">
                  <h3 className="font-bold text-sm md:text-base text-slate-900 mb-1 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1886ff] text-xs flex items-center justify-center font-bold">4</span>
                    Loss of Reward Points and Milestone Benefits
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Under revised credit card terms introduced in 2023 and 2024, almost all banks exclude merchant EMI transactions from earning reward points, cashback, or annual spend fee waivers.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 5: FINANCIAL COMPARISON & CALCULATOR */}
            <section id="financial-comparison" className="scroll-target space-y-6 text-slate-700">
              <div className="flex items-center gap-2 pb-1 border-b border-slate-200">
                <Calculator className="w-5 h-5 text-[#1886ff]" />
                <h2 className="text-lg md:text-xl font-bold text-slate-900">
                  5. Financial Comparison: Upfront Cash vs No-Cost EMI Math
                </h2>
              </div>

              <p className="leading-relaxed text-sm md:text-base">
                Use our interactive tool below to calculate the real cost of any credit card No-Cost EMI. Enter your purchase amount, loan tenure, and fees to uncover the hidden GST and cash discount loss.
              </p>

              {/* INTERACTIVE CALCULATOR COMPONENT */}
              <div className="bg-white border-2 border-blue-100 rounded-3xl p-5 md:p-7 shadow-sm space-y-6">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <div className="flex items-center gap-2">
                    <Calculator className="w-5 h-5 text-[#1886ff]" />
                    <span className="font-extrabold text-sm md:text-base text-slate-900">
                      No-Cost EMI Hidden Cost &amp; GST Calculator
                    </span>
                  </div>
                  <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full">
                    Real-Time Math
                  </span>
                </div>

                {/* Controls Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs md:text-sm">
                  <div>
                    <label className="block font-bold text-slate-800 mb-1">
                      Product Price / MRP (₹): {productPrice.toLocaleString('en-IN')}
                    </label>
                    <input
                      type="range"
                      min={10000}
                      max={200000}
                      step={5000}
                      value={productPrice}
                      onChange={(e) => setProductPrice(Number(e.target.value))}
                      className="w-full accent-[#1886ff] cursor-pointer"
                    />
                    <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                      <span>₹10,000</span>
                      <span>₹1,00,000</span>
                      <span>₹2,00,000</span>
                    </div>
                  </div>

                  <div>
                    <label className="block font-bold text-slate-800 mb-1">
                      Tenure: {tenureMonths} Months
                    </label>
                    <div className="grid grid-cols-5 gap-1.5 pt-1">
                      {[3, 6, 9, 12, 18].map((m) => (
                        <button
                          key={m}
                          type="button"
                          onClick={() => setTenureMonths(m)}
                          className={`py-1.5 rounded-lg font-bold text-xs transition-all ${
                            tenureMonths === m
                              ? 'bg-[#1886ff] text-white shadow-xs'
                              : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                          }`}
                        >
                          {m}M
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block font-bold text-slate-800 mb-1">
                      Bank Card APR Interest Rate (% p.a.): {annualInterestRate}%
                    </label>
                    <input
                      type="range"
                      min={12}
                      max={18}
                      step={0.5}
                      value={annualInterestRate}
                      onChange={(e) => setAnnualInterestRate(Number(e.target.value))}
                      className="w-full accent-[#1886ff] cursor-pointer"
                    />
                    <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                      <span>12%</span>
                      <span>15% (Typical)</span>
                      <span>18%</span>
                    </div>
                  </div>

                  <div>
                    <label className="block font-bold text-slate-800 mb-1">
                      Bank Processing Fee (₹): ₹{processingFee}
                    </label>
                    <div className="grid grid-cols-4 gap-1.5 pt-1">
                      {[0, 99, 199, 299].map((fee) => (
                        <button
                          key={fee}
                          type="button"
                          onClick={() => setProcessingFee(fee)}
                          className={`py-1.5 rounded-lg font-bold text-xs transition-all ${
                            processingFee === fee
                              ? 'bg-[#1886ff] text-white shadow-xs'
                              : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                          }`}
                        >
                          ₹{fee}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <label className="block font-bold text-slate-800 mb-1">
                      Instant Cash/Card Discount Foregone (₹): ₹{cashDiscountLost.toLocaleString('en-IN')}
                    </label>
                    <input
                      type="range"
                      min={0}
                      max={15000}
                      step={500}
                      value={cashDiscountLost}
                      onChange={(e) => setCashDiscountLost(Number(e.target.value))}
                      className="w-full accent-[#1886ff] cursor-pointer"
                    />
                    <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                      <span>₹0</span>
                      <span>₹3,000 (Common)</span>
                      <span>₹15,000</span>
                    </div>
                  </div>
                </div>

                {/* Calculation Results Card */}
                <div className="bg-slate-900 text-white rounded-2xl p-4 md:p-6 space-y-4">
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center border-b border-slate-800 pb-4">
                    <div>
                      <p className="text-[11px] text-slate-400 uppercase font-semibold">Subvention Discount</p>
                      <p className="text-base sm:text-lg font-bold text-emerald-400">
                        ₹{calculationResults.merchantDiscount.toLocaleString('en-IN')}
                      </p>
                    </div>
                    <div>
                      <p className="text-[11px] text-slate-400 uppercase font-semibold">Monthly EMI</p>
                      <p className="text-base sm:text-lg font-bold text-white">
                        ₹{calculationResults.monthlyEmi.toLocaleString('en-IN')}
                      </p>
                    </div>
                    <div>
                      <p className="text-[11px] text-slate-400 uppercase font-semibold">18% GST on Interest</p>
                      <p className="text-base sm:text-lg font-bold text-amber-400">
                        ₹{calculationResults.gstOnInterest.toLocaleString('en-IN')}
                      </p>
                    </div>
                    <div>
                      <p className="text-[11px] text-slate-400 uppercase font-semibold">Processing + Tax</p>
                      <p className="text-base sm:text-lg font-bold text-amber-400">
                        ₹{calculationResults.totalProcessingCost.toLocaleString('en-IN')}
                      </p>
                    </div>
                  </div>

                  {/* Summary Comparison */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1 items-center">
                    <div className="space-y-1.5 text-xs text-slate-300">
                      <p className="flex justify-between">
                        <span>Original Product MRP:</span>
                        <span className="font-semibold text-white">₹{productPrice.toLocaleString('en-IN')}</span>
                      </p>
                      <p className="flex justify-between">
                        <span>Total Paid via &quot;Zero-Cost&quot; Card:</span>
                        <span className="font-bold text-rose-300">₹{calculationResults.totalPaidOnCard.toLocaleString('en-IN')}</span>
                      </p>
                      <p className="flex justify-between">
                        <span>Single Upfront Payment Cost:</span>
                        <span className="font-semibold text-emerald-300">₹{calculationResults.upfrontCashCost.toLocaleString('en-IN')}</span>
                      </p>
                    </div>

                    <div className="bg-rose-950/60 border border-rose-800/80 rounded-xl p-3.5 text-center space-y-1">
                      <span className="text-[11px] font-black uppercase tracking-wider text-rose-300">
                        Real Hidden Financial Loss
                      </span>
                      <p className="text-2xl font-black text-rose-400">
                        +₹{calculationResults.realExtraCostOverCash.toLocaleString('en-IN')}
                      </p>
                      <p className="text-[11px] text-rose-200">
                        Extra paid compared to a direct discounted cash purchase
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 6: CREDIT SCORE IMPACT */}
            <section id="credit-score-impact" className="scroll-target space-y-4 text-slate-700">
              <div className="flex items-center gap-2 pb-1 border-b border-slate-200">
                <TrendingUp className="w-5 h-5 text-[#1886ff]" />
                <h2 className="text-lg md:text-xl font-bold text-slate-900">
                  6. Credit Score Impact: Limit Blocking &amp; High Utilization
                </h2>
              </div>

              <p className="leading-relaxed text-sm md:text-base">
                Many buyers think splitting a bill into monthly EMIs protects their credit score. In reality, No-Cost EMIs can damage your CIBIL score if you do not understand credit limit blocking.
              </p>

              <div className="space-y-3 my-3">
                <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-2xs">
                  <h3 className="font-bold text-sm md:text-base text-slate-900 mb-1">
                    Entire Credit Limit Blocked Instantly
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Even though you pay only Rs 10,000 per month, the bank blocks your entire available credit limit by Rs 60,000 on day one. As you pay each monthly EMI, your available limit is released only in small monthly fractions.
                  </p>
                </div>

                <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-2xs">
                  <h3 className="font-bold text-sm md:text-base text-slate-900 mb-1">
                    Spike in Credit Utilization Ratio (CUR)
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Credit bureaus like CIBIL, Experian, and Equifax recommend keeping your credit utilization below 30%. If your total card limit is Rs 80,000 and you buy a Rs 60,000 appliance on No-Cost EMI, your utilization surges to 75%. High utilization signals financial stress, which can trigger a 20 to 50 point drop in your credit score.
                  </p>
                </div>

                <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-2xs">
                  <h3 className="font-bold text-sm md:text-base text-slate-900 mb-1">
                    Compounding Multi-Card EMI Trap
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    When you run two or three simultaneous zero-cost EMIs across different cards, your overall borrowing capacity shrinks. If an emergency occurs, you have no available credit left to rely on.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: LEGAL PROTECTIONS */}
            <section id="legal-protections" className="scroll-target space-y-4 text-slate-700">
              <div className="flex items-center gap-2 pb-1 border-b border-slate-200">
                <ShieldCheck className="w-5 h-5 text-emerald-600" />
                <h2 className="text-lg md:text-xl font-bold text-slate-900">
                  7. Legal Protections: Consumer Protection Act &amp; RBI Rules
                </h2>
              </div>

              <p className="leading-relaxed text-sm md:text-base">
                Indian law protects consumers from misleading financial promotions and hidden charges. When banks or digital marketplaces conceal processing fees or interest structures, you have multiple statutory protections.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 my-3">
                <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-2xs space-y-1.5">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                    <Scale className="w-4 h-4 text-[#1886ff]" />
                    <span>Consumer Protection Act, 2019</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Section 2(28) covers misleading advertisements, while Section 2(47) defines unfair trade practices. Marketing an interest-bearing loan as free without disclosing GST and processing fees violates consumer law.
                  </p>
                </div>

                <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-2xs space-y-1.5">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                    <Landmark className="w-4 h-4 text-[#1886ff]" />
                    <span>RBI Master Direction 2022</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Paragraph 8(a) prohibits camouflaging interest into zero-cost schemes. Banks must send a transparent Key Facts Statement (KFS) detailing the annual percentage rate (APR) and all associated taxes.
                  </p>
                </div>

                <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-2xs space-y-1.5">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                    <FileText className="w-4 h-4 text-[#1886ff]" />
                    <span>CCPA Dark Patterns Guidelines</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The Central Consumer Protection Authority (CCPA) prohibits hidden charges and disguised costs on digital platforms. Pre-checking EMI conversion options without explicit customer consent is illegal.
                  </p>
                </div>

                <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-2xs space-y-1.5">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>Banking Ombudsman Redressal</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under Clause 10 of the RBI Integrated Ombudsman Scheme, 2021, cardholders can claim full refunds of undisclosed fees and seek compensation for deficiency in banking services.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 8: STEP-BY-STEP DISPUTE SOP */}
            <section id="dispute-sop" className="scroll-target space-y-4 text-slate-700">
              <div className="flex items-center gap-2 pb-1 border-b border-slate-200">
                <FileText className="w-5 h-5 text-[#1886ff]" />
                <h2 className="text-lg md:text-xl font-bold text-slate-900">
                  8. Step-by-Step SOP: Disputing Undisclosed EMI Charges
                </h2>
              </div>

              <p className="leading-relaxed text-sm md:text-base">
                Did your bank bill extra processing fees, GST, or early payoff charges on an EMI? Follow this simple dispute guide.
              </p>

              <div className="space-y-3 my-4">
                <div className="flex items-start gap-3 bg-white border border-slate-200 rounded-xl p-4 shadow-2xs">
                  <div className="w-7 h-7 rounded-full bg-blue-50 text-[#1886ff] font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                    1
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-bold text-sm text-slate-900">Download Checkout Receipts &amp; KFS</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Take screenshots of the zero-cost EMI offer. Download your purchase bill and your card bill showing the fee and GST.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white border border-slate-200 rounded-xl p-4 shadow-2xs">
                  <div className="w-7 h-7 rounded-full bg-blue-50 text-[#1886ff] font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                    2
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-bold text-sm text-slate-900">Issue a Formal Written Grievance</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Email the bank Grievance Officer. Quote RBI Master Direction 2022 Paragraph 8(a). State that the bank never told you about the fee or GST before checkout.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white border border-slate-200 rounded-xl p-4 shadow-2xs">
                  <div className="w-7 h-7 rounded-full bg-blue-50 text-[#1886ff] font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                    3
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-bold text-sm text-slate-900">Demand Reversal of Unfair Fees</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Ask for an immediate refund of the fee and a full waiver of any early payoff penalty.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white border border-slate-200 rounded-xl p-4 shadow-2xs">
                  <div className="w-7 h-7 rounded-full bg-blue-50 text-[#1886ff] font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                    4
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-bold text-sm text-slate-900">Escalate to Principal Nodal Officer</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      If customer care rejects your claim, send the case to the Principal Nodal Officer with your complaint number.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 9: 3-TIER ESCALATION MATRIX */}
            <section id="escalation-matrix" className="scroll-target space-y-4 text-slate-700">
              <div className="flex items-center gap-2 pb-1 border-b border-slate-200">
                <Landmark className="w-5 h-5 text-[#1886ff]" />
                <h2 className="text-lg md:text-xl font-bold text-slate-900">
                  9. 3-Tier Escalation Matrix: Bank to RBI Ombudsman
                </h2>
              </div>

              <p className="leading-relaxed text-sm md:text-base">
                If the bank refuses to refund unfair EMI charges, use this 3-tier ladder to get your money back.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 my-4">
                <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-2xs flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-black uppercase tracking-wider text-[#1886ff] bg-blue-50 px-2 py-0.5 rounded-full">
                      Tier 1: Internal Desk
                    </span>
                    <h3 className="font-bold text-sm text-slate-900 mt-2 mb-1">Customer Care &amp; GRO</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      File a written complaint with the Grievance Officer. The bank gets 30 days to fix your issue.
                    </p>
                  </div>
                  <span className="text-[11px] text-slate-400 mt-3 pt-2 border-t border-slate-100 block font-medium">
                    Timeline: Days 1 to 30
                  </span>
                </div>

                <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-2xs flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-black uppercase tracking-wider text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full">
                      Tier 2: Appellate Head
                    </span>
                    <h3 className="font-bold text-sm text-slate-900 mt-2 mb-1">Principal Nodal Officer</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Escalate to the bank apex desk. The Nodal Officer can waive disputed fees and cancel unfair penalties.
                    </p>
                  </div>
                  <span className="text-[11px] text-slate-400 mt-3 pt-2 border-t border-slate-100 block font-medium">
                    Timeline: Days 15 to 30
                  </span>
                </div>

                <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-2xs flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-black uppercase tracking-wider text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                      Tier 3: Regulatory Court
                    </span>
                    <h3 className="font-bold text-sm text-slate-900 mt-2 mb-1">RBI Ombudsman Portal</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      File a free complaint at cms.rbi.org.in under the RBI Ombudsman Scheme. The Ombudsman can order fee refunds and compensation.
                    </p>
                  </div>
                  <span className="text-[11px] text-slate-400 mt-3 pt-2 border-t border-slate-100 block font-medium">
                    Timeline: After Day 30
                  </span>
                </div>
              </div>
            </section>

            {/* SECTION 10: DEFAULT DANGER */}
            <section id="default-danger" className="scroll-target space-y-4 text-slate-700">
              <div className="flex items-center gap-2 pb-1 border-b border-slate-200">
                <AlertCircle className="w-5 h-5 text-rose-600" />
                <h2 className="text-lg md:text-xl font-bold text-slate-900">
                  10. Default Danger: Cascading 42% APR Interest Spiral
                </h2>
              </div>

              <p className="leading-relaxed text-sm md:text-base">
                The biggest risk happens if you run into cash trouble. If you miss even one monthly payment or pay only the Minimum Amount Due (MAD), the entire zero-cost structure collapses.
              </p>

              <div className="bg-rose-50 border border-rose-200 rounded-2xl p-5 text-xs md:text-sm text-rose-950 space-y-3">
                <h3 className="font-bold text-sm md:text-base text-rose-900">
                  How a Rs 10,000 EMI Turns Into an Unpayable Debt Spiral
                </h3>
                <ul className="space-y-2 list-disc list-inside text-rose-900 leading-relaxed">
                  <li>
                    <strong>Subvention Benefits Revoked:</strong> The bank cancels your promotional interest rate immediately.
                  </li>
                  <li>
                    <strong>Standard Revolving Rates Applied:</strong> The bank applies standard finance charges of 3.5% to 3.75% per month (42% to 45% APR) retroactive to the transaction date.
                  </li>
                  <li>
                    <strong>Compounding Penalties:</strong> Late payment charges (Rs 500 to Rs 1,300) plus 18% GST on all interest and fees are billed on each successive statement.
                  </li>
                  <li>
                    <strong>Severe CIBIL Damage:</strong> The bank reports your account as delinquent (Days Past Due or DPD), causing your credit score to crash.
                  </li>
                </ul>
              </div>

              <p className="leading-relaxed text-sm md:text-base">
                If unbilled EMIs have accelerated into full card default, learn how lenders handle unbilled installments in our comprehensive guide on{' '}
                <Link
                  href="/unbilled-credit-card-merchant-emi-foreclosure-default"
                  className="text-[#1886ff] hover:underline font-semibold"
                >
                  unbilled credit card merchant EMI foreclosure rules
                </Link>
                .
              </p>

              <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5 text-xs md:text-sm text-blue-950 space-y-3">
                <div className="flex items-center gap-2 font-bold text-blue-900 text-sm md:text-base">
                  <ShieldCheck className="w-5 h-5 text-[#1886ff]" />
                  <span>How CredSettle Resolves Overwhelming Credit Card Debt</span>
                </div>
                <p className="leading-relaxed">
                  If you are stuck with multiple credit card EMIs, high interest, and recovery agent calls, you do not have to fight alone. CredSettle is India&apos;s leading debt settlement and consumer rights advisory. We audit your credit card statements, identify illegal charges, stop harassment, and negotiate structured One-Time Settlements (OTS) with banks for waivers of 50% to 75% on accumulated card dues.
                </p>
                <Link
                  href="/services/credit-card-settlement"
                  className="inline-flex items-center gap-1.5 font-bold text-[#1886ff] hover:underline"
                >
                  <span>Explore CredSettle Credit Card Settlement Services</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </section>

            {/* COMPANY SECTION COMPONENT */}
            <div id="company-profile" className="scroll-target pt-2">
              <CompanySection />
            </div>

            {/* FREQUENTLY ASKED QUESTIONS SECTION */}
            <section id="frequently-asked-questions" className="scroll-target space-y-4 text-slate-700">
              <div className="flex items-center gap-2 pb-1 border-b border-slate-200">
                <HelpCircle className="w-5 h-5 text-[#1886ff]" />
                <h2 className="text-lg md:text-xl font-bold text-slate-900">
                  Frequently Asked Questions: No-Cost EMI Charges
                </h2>
              </div>

              <p className="text-xs md:text-sm text-slate-600">
                Quick answers to the most common queries regarding credit card zero-cost EMIs, GST liabilities, and fee disputes.
              </p>

              <div className="space-y-2.5 pt-2">
                {faqs.map((faq, index) => {
                  const isOpen = openFaq === index;
                  return (
                    <div
                      key={index}
                      className="bg-white border border-slate-200/90 rounded-2xl overflow-hidden shadow-2xs transition-all"
                    >
                      <button
                        type="button"
                        onClick={() => toggleFaq(index)}
                        className="w-full text-left p-4 md:p-5 flex items-center justify-between gap-4 font-bold text-slate-800 text-xs sm:text-sm hover:text-[#1886ff] transition-colors"
                      >
                        <span className="leading-snug">{faq.q}</span>
                        <ChevronDown
                          className={`w-4 h-4 text-slate-400 flex-shrink-0 transition-transform duration-200 ${
                            isOpen ? 'rotate-180 text-[#1886ff]' : ''
                          }`}
                        />
                      </button>

                      {isOpen && (
                        <div className="px-4 pb-4 md:px-5 md:pb-5 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                          <p className="pt-3">{faq.a}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>

            {/* REGULATORY CITATIONS BOX */}
            <div id="regulatory-sources" className="scroll-target bg-slate-100 border border-slate-200 rounded-2xl p-5 text-xs text-slate-600 space-y-2">
              <p className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <Scale className="w-4 h-4 text-slate-700" />
                <span>Statutory Citations &amp; Regulatory Authorities</span>
              </p>
              <ul className="space-y-1 list-disc list-inside leading-relaxed">
                <li>
                  <strong>RBI Circular DBOD.No.Dir.BC.39/13.03.00/2013-14:</strong> Pernicious practices of select banks deterring customer protection and accounting integrity.
                </li>
                <li>
                  <strong>RBI Master Direction RBI/2022-23/92:</strong> Credit Card and Debit Card – Issuance and Conduct Directions, 2022 (Paragraph 8 on EMI conversions).
                </li>
                <li>
                  <strong>Ministry of Finance Notification No. 12/2017-Central Tax (Rate):</strong> Entry 27 under Heading 9971 (Exclusion of credit card interest from GST exemption).
                </li>
                <li>
                  <strong>Consumer Protection Act, 2019:</strong> Section 2(28) on Misleading Advertisements and Section 2(47) on Unfair Trade Practices.
                </li>
                <li>
                  <strong>Reserve Bank - Integrated Ombudsman Scheme, 2021:</strong> Redressal of deficiencies in credit card billing and undisclosed levies.
                </li>
              </ul>
            </div>

          </div>

          {/* ================= RIGHT COLUMN: STICKY SIDEBAR ================= */}
          <aside className="sticky top-6 space-y-5">
            
            {/* Card 1: Author Card */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3.5 text-xs">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-blue-100 border border-blue-200 flex items-center justify-center text-blue-800 font-extrabold text-base flex-shrink-0">
                  AJ
                </div>
                <div>
                  <p className="font-extrabold text-slate-900 text-sm">Ashish Jhangra</p>
                  <p className="text-slate-500 text-[11px] leading-tight">
                    Legal &amp; Debt Resolution Professional
                  </p>
                </div>
              </div>

              <p className="text-slate-600 leading-relaxed text-[11px]">
                Specializing in banking regulatory compliance, credit card disputes, and financial consumer defense across Indian forums.
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
                  CARD DISPUTE &amp; DEBT RELIEF
                </span>
                <p className="text-lg md:text-xl font-bold text-white leading-snug">
                  Trapped in Credit Card EMIs?
                </p>
                <p className="text-blue-100 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Our legal team helps you challenge undisclosed charges, stop recovery harassment, and settle accumulated credit card debt with up to 50% to 75% waivers.
                </p>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-900 hover:text-[#1886ff] py-3 px-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
              >
                Get Free Debt Evaluation
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
                  <span><strong>Hidden Fee Auditing:</strong> Scrutinize statements for undisclosed interest and GST.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Harassment Defense:</strong> Immediate legal notices to stop aggressive recovery calls.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Structured Settlement:</strong> Legal OTS negotiations for 50% to 75% waivers.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Credit Bureau Advocacy:</strong> Removal of wrongful DPD entries post-resolution.</span>
                </li>
              </ul>
            </div>

            {/* Card 4: Related Guides */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-3 text-xs">
              <p className="font-bold text-slate-900 text-sm">Related Legal Guides</p>
              <div className="space-y-2.5">
                <Link
                  href="/credit-card-merchant-emi-foreclosure-3-percent-dispute"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Credit Card EMI 3% Foreclosure
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Waiver rules &amp; procedures &rarr;</span>
                </Link>

                <Link
                  href="/is-18-percent-gst-waived-credit-card-settlement-ots"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    18% GST in Card Settlement
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Tax waiver on interest &rarr;</span>
                </Link>

                <Link
                  href="/unbilled-credit-card-merchant-emi-foreclosure-default"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Unbilled Card EMI Foreclosure
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Default &amp; settlement rules &rarr;</span>
                </Link>

                <Link
                  href="/unactivated-credit-card-charges-rbi-500-day-penalty"
                  className="block p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
                >
                  <p className="font-bold text-slate-800 group-hover:text-[#1886ff] transition-colors leading-snug">
                    Unactivated Card Charges Penalty
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">Rs 500/day RBI closure rule &rarr;</span>
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
