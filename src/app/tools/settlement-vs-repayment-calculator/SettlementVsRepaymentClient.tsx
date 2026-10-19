'use client';

import React, { useState, useEffect, useCallback, useId, useMemo } from 'react';
import Link from 'next/link';
import {
  Calculator,
  RotateCcw,
  Copy,
  Printer,
  Check,
  ShieldCheck,
  AlertCircle,
  ArrowRight,
  ChevronDown,
  Sparkles,
  Info,
  Layers,
  Scale,
  ShieldAlert,
  Clock,
  ArrowUpRight,
  FileText,
  CheckCircle2,
  HelpCircle,
  TrendingDown,
  Percent,
  Calendar,
} from 'lucide-react';
import {
  calculateSettlementVsRepayment,
  validateSettlementVsRepaymentInput,
  formatINR,
  formatPercentage,
  type RepaymentMode,
  type SettlementTiming,
  type SettlementVsRepaymentResult,
} from '@/lib/tools/calculators/settlementVsRepayment';

export default function SettlementVsRepaymentClient() {
  const balanceInputId = useId();
  const percentageInputId = useId();
  const settlementFeesInputId = useId();
  const annualRateInputId = useId();
  const tenureInputId = useId();
  const repaymentFeesInputId = useId();
  const manualRepaymentInputId = useId();

  // Primary Input States
  const [outstandingBalance, setOutstandingBalance] = useState<number>(300000);
  const [settlementPercentage, setSettlementPercentage] = useState<number>(45);
  const [additionalSettlementFees, setAdditionalSettlementFees] = useState<number>(3000);
  const [settlementTiming, setSettlementTiming] = useState<SettlementTiming>('lump_sum');

  // Repayment States
  const [repaymentMode, setRepaymentMode] = useState<RepaymentMode>('calculate');
  const [annualInterestRate, setAnnualInterestRate] = useState<number>(15);
  const [remainingTenureMonths, setRemainingTenureMonths] = useState<number>(24);
  const [additionalRepaymentFees, setAdditionalRepaymentFees] = useState<number>(0);

  // Manual Repayment States
  const [manualFullRepaymentTotal, setManualFullRepaymentTotal] = useState<number>(340000);
  const [manualTenureMonths, setManualTenureMonths] = useState<number>(24);

  // UI States
  const [activeTab, setActiveTab] = useState<'matrix' | 'timeline' | 'cost_breakdown'>('matrix');
  const [scheduleLimit, setScheduleLimit] = useState<'12' | '24' | 'all'>('12');
  const [copied, setCopied] = useState<boolean>(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showAdvanced, setShowAdvanced] = useState<boolean>(false);

  // Result & Calculation States
  const [result, setResult] = useState<SettlementVsRepaymentResult | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [validationError, setValidationError] = useState<string | null>(null);

  // Client-Side Calculation executed only on button click
  const handleCalculateScenario = useCallback(() => {
    const payload = {
      outstandingBalance,
      settlementPercentage,
      additionalSettlementFees,
      settlementTiming,
      repaymentMode,
      manualFullRepaymentTotal: repaymentMode === 'manual' ? manualFullRepaymentTotal : undefined,
      manualTenureMonths: repaymentMode === 'manual' ? manualTenureMonths : undefined,
      annualInterestRate: repaymentMode === 'calculate' ? annualInterestRate : undefined,
      remainingTenureMonths: repaymentMode === 'calculate' ? remainingTenureMonths : undefined,
      additionalRepaymentFees,
    };

    const validation = validateSettlementVsRepaymentInput(payload);
    if (!validation.isValid || !validation.sanitized) {
      setValidationError(validation.error || 'Invalid calculation parameters.');
      setResult(null);
      return;
    }

    setValidationError(null);
    const calculated = calculateSettlementVsRepayment(validation.sanitized);
    setResult(calculated);

    // Call API once on user click to log calculation session
    try {
      setLoading(true);
      fetch('/api/tools/settlement-vs-repayment-calculator', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          outstandingBalance,
          settlementPercentage,
          additionalSettlementFees,
          settlementTiming,
          repaymentMode,
          manualFullRepaymentTotal,
          manualTenureMonths,
          annualInterestRate,
          remainingTenureMonths,
          additionalRepaymentFees,
        }),
      }).catch((err) => console.warn('API logging error (safe fallback):', err));
    } finally {
      setLoading(false);
    }
  }, [
    outstandingBalance,
    settlementPercentage,
    additionalSettlementFees,
    settlementTiming,
    repaymentMode,
    annualInterestRate,
    remainingTenureMonths,
    additionalRepaymentFees,
    manualFullRepaymentTotal,
    manualTenureMonths,
  ]);

  // Reset Handler
  const handleReset = () => {
    setOutstandingBalance(300000);
    setSettlementPercentage(45);
    setAdditionalSettlementFees(3000);
    setSettlementTiming('lump_sum');
    setRepaymentMode('calculate');
    setAnnualInterestRate(15);
    setRemainingTenureMonths(24);
    setAdditionalRepaymentFees(0);
    setManualFullRepaymentTotal(340000);
    setManualTenureMonths(24);
    setValidationError(null);
    setResult(null);
  };

  // Copy Summary Handler
  const handleCopySummary = async () => {
    if (!result) return;
    const text = `CREDSETTLE COMPARISON: LOAN SETTLEMENT VS FULL REPAYMENT
-----------------------------------------------------------
Current Outstanding: ${result.formatted.outstandingBalance}

OPTION A: HYPOTHETICAL SETTLEMENT
- Settlement Percentage: ${result.settlementPercentage}%
- Settlement Payout: ${result.formatted.settlementPrincipalPayout}
- Additional Fees: ${result.formatted.additionalSettlementFees}
- Total Settlement Cost: ${result.formatted.totalSettlementCost}
- Lender Haircut: ${result.formatted.settlementHaircutAmount} (${result.formatted.settlementHaircutPercentage})
- Payment Timing: ${result.settlement.timingLabel}
- CIBIL Status: Marked as "SETTLED" (7-year negative remark)

OPTION B: FULL REPAYMENT (${result.repayment.sourceLabel})
- Full Repayment Total: ${result.formatted.fullRepaymentTotal}
- Monthly Installment (EMI): ${result.formatted.monthlyEmi}/month
- Total Interest Paid: ${result.formatted.totalInterestPaid}
- Additional Fees: ${result.formatted.additionalRepaymentFees}
- CIBIL Status: Marked as "CLOSED / PAID IN FULL" (rebuilds score)

SUMMARY:
- Nominal Cash Difference: ${result.formatted.nominalCashDifference}
- Status: ${result.comparison.headlineSummary}

Source: https://www.credsettle.com/tools/settlement-vs-repayment-calculator
Note: For illustrative guidance only. Not legal, tax, or credit advice.`;

    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
      alert('Summary copied to clipboard!');
    }
  };

  // Print Handler
  const handlePrint = () => {
    window.print();
  };

  // Visible Amortization Rows
  const visibleAmortizationRows = useMemo(() => {
    if (!result || !result.amortizationSchedule) return [];
    if (scheduleLimit === '12') return result.amortizationSchedule.slice(0, 12);
    if (scheduleLimit === '24') return result.amortizationSchedule.slice(0, 24);
    return result.amortizationSchedule;
  }, [result, scheduleLimit]);

  const faqs = [
    {
      q: 'Why does settlement appear so much cheaper in nominal cash than full repayment?',
      a: 'In a compromise settlement, the lender agrees to forfeit a substantial portion of the ledger balance (the "haircut," typically 30% to 60%) to recover immediate liquidity from an account at risk of NPA. In contrast, full repayment includes the entire principal plus compounding interest accrued across the remaining tenure. However, nominal cash is only one part of the equation: settlement permanently damages your CIBIL score, while repayment preserves your financial creditworthiness.',
    },
    {
      q: 'How does an account marked as "Settled" differ from "Closed" on CIBIL and Experian?',
      a: 'When you repay 100% of your loan dues, the bank submits an account status of "Closed" or "Paid in Full" to credit bureaus with no adverse history. In a settlement, the bank reports the account as "Settled" or "Post-Write-off Settled." Credit underwriting algorithms and loan officers treat "Settled" as a default where the lender suffered a loss, drastically depressing your score (70–120 points) and rendering you virtually ineligible for unsecured loans or prime mortgages for 2 to 5 years.',
    },
    {
      q: 'Can a bank refuse my request for a compromise loan settlement?',
      a: 'Yes. Loan settlement is not a statutory or consumer right—it is entirely at the lender\'s commercial discretion under RBI\'s Framework on Compromise Settlements. Banks evaluate whether the borrower suffers from genuine, verifiable distress (e.g., job loss, severe medical emergency, permanent disability). If the bank discovers assets, verifiable income, or signs of wilful default, they will reject settlement and initiate legal recovery via Section 138 NI Act or SARFAESI.',
    },
    {
      q: 'Are there income tax implications if a portion of my loan is waived off?',
      a: 'Yes, particularly for business, commercial, or sole proprietorship loans. Under Section 41(1) and Section 28(iv) of the Indian Income Tax Act, the waiver of a trading liability or debt remission can be treated as taxable business income in the assessment year. While non-business personal loan waivers generally carry lower direct tax risks for individuals, borrowers should always obtain written advice from a qualified Chartered Accountant regarding their specific tax jurisdiction.',
    },
  ];

  return (
    <div className="space-y-10">
      {/* Top Hero / Header Section */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white p-6 sm:p-10 shadow-xl border border-slate-800">
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-semibold tracking-wide uppercase">
            <Scale className="w-3.5 h-3.5" />
            Decision Intelligence Tool
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
            Settlement vs Full Repayment Calculator
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Compare hypothetical one-time settlement payouts against structured full repayment.
            Evaluate <strong>nominal cash savings</strong> side-by-side with <strong>CIBIL reporting consequences</strong>, 
            tax implications under Indian law, and future loan eligibility.
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              RBI Compromise Guidelines Aligned
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Dual-Track Amortization Model
            </span>
            <span className="flex items-center gap-1.5">
              <Info className="w-4 h-4 text-cyan-400" />
              Private Browser Execution
            </span>
          </div>
        </div>

        {/* Subtle Decorative Background Element */}
        <div className="absolute right-0 top-0 -mt-12 -mr-12 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
      </section>

      {/* Main Dual-Column Interactive Workspace */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Interactive Input Controls (5 Cols, sticky on desktop) */}
        <div className="lg:col-span-5 lg:sticky lg:top-24 lg:self-start lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto custom-scrollbar space-y-6">
          <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-6 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <Calculator className="w-5 h-5 text-indigo-600" />
                Scenario Inputs
              </h2>
              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-800 transition-colors px-2 py-1 rounded-md hover:bg-slate-100"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                Reset
              </button>
            </div>

            {/* Validation Error Banner */}
            {validationError && (
              <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <span>{validationError}</span>
              </div>
            )}

            {/* Field 1: Outstanding Loan Balance */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label htmlFor={balanceInputId} className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  Current Outstanding Balance (₹)
                </label>
                <span className="text-xs font-semibold text-indigo-600">
                  {formatINR(outstandingBalance)}
                </span>
              </div>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400 font-semibold">
                  ₹
                </span>
                <input
                  id={balanceInputId}
                  type="number"
                  min="1000"
                  step="5000"
                  value={outstandingBalance || ''}
                  onChange={(e) => setOutstandingBalance(Math.max(0, Number(e.target.value)))}
                  className="w-full pl-8 pr-4 py-2.5 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-sm font-semibold text-slate-900 transition-all outline-none"
                  placeholder="e.g. 300000"
                />
              </div>
              {/* Quick Select Buttons */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {[100000, 250000, 500000, 1000000].map((amt) => (
                  <button
                    key={amt}
                    type="button"
                    onClick={() => setOutstandingBalance(amt)}
                    className={`text-[11px] px-2.5 py-1 rounded-lg border font-medium transition-all ${
                      outstandingBalance === amt
                        ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm'
                        : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {amt >= 100000 ? `₹${amt / 100000} Lakh` : formatINR(amt)}
                  </button>
                ))}
              </div>
            </div>

            {/* Section Divider: Option A - Settlement */}
            <div className="pt-2">
              <div className="bg-amber-50/60 rounded-xl p-4 border border-amber-200/70 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-amber-500" />
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-900">
                      Option A: Settlement Scenario
                    </span>
                  </div>
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-amber-100 text-amber-800">
                    Haircut: {100 - settlementPercentage}%
                  </span>
                </div>

                {/* Settlement Percentage Slider & Input */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <label htmlFor={percentageInputId} className="font-medium text-slate-700">
                      Hypothetical Settlement %
                    </label>
                    <span className="font-bold text-amber-700">{settlementPercentage}%</span>
                  </div>
                  <input
                    id={percentageInputId}
                    type="range"
                    min="10"
                    max="90"
                    step="5"
                    value={settlementPercentage}
                    onChange={(e) => setSettlementPercentage(Number(e.target.value))}
                    className="w-full accent-amber-600 cursor-pointer h-2 bg-amber-200 rounded-lg"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 font-medium">
                    <span>Aggressive (20%)</span>
                    <span>Typical RBI Range (40% - 50%)</span>
                    <span>Conservative (70%)</span>
                  </div>
                </div>

                {/* Additional Settlement Fees */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <label htmlFor={settlementFeesInputId} className="font-medium text-slate-700">
                      Additional Settlement Fees (Legal / Advisory)
                    </label>
                    <span className="font-semibold text-slate-600">
                      {formatINR(additionalSettlementFees)}
                    </span>
                  </div>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400 text-xs">
                      ₹
                    </span>
                    <input
                      id={settlementFeesInputId}
                      type="number"
                      min="0"
                      step="500"
                      value={additionalSettlementFees || ''}
                      onChange={(e) => setAdditionalSettlementFees(Math.max(0, Number(e.target.value)))}
                      className="w-full pl-7 pr-3 py-2 rounded-lg border border-slate-200 text-xs font-semibold text-slate-800 focus:border-amber-500 outline-none"
                      placeholder="0"
                    />
                  </div>
                </div>

                {/* Payment Timing Toggle */}
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-slate-700 block">
                    Settlement Payment Horizon
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setSettlementTiming('lump_sum')}
                      className={`text-xs py-2 px-2.5 rounded-lg border font-medium text-center transition-all ${
                        settlementTiming === 'lump_sum'
                          ? 'bg-amber-600 text-white border-amber-600 shadow-sm'
                          : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                      }`}
                    >
                      Lump Sum (30-90 Days)
                    </button>
                    <button
                      type="button"
                      onClick={() => setSettlementTiming('staggered_3m')}
                      className={`text-xs py-2 px-2.5 rounded-lg border font-medium text-center transition-all ${
                        settlementTiming === 'staggered_3m'
                          ? 'bg-amber-600 text-white border-amber-600 shadow-sm'
                          : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                      }`}
                    >
                      Staggered (2–3 Tranches)
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Section Divider: Option B - Repayment */}
            <div className="pt-2">
              <div className="bg-emerald-50/60 rounded-xl p-4 border border-emerald-200/70 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-900">
                      Option B: Full Repayment Scenario
                    </span>
                  </div>
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800">
                    CIBIL Safe
                  </span>
                </div>

                {/* Repayment Mode Selector */}
                <div className="grid grid-cols-2 gap-2 p-1 bg-emerald-100/60 rounded-xl">
                  <button
                    type="button"
                    onClick={() => setRepaymentMode('calculate')}
                    className={`text-xs py-1.5 px-2 rounded-lg font-bold transition-all ${
                      repaymentMode === 'calculate'
                        ? 'bg-white text-emerald-800 shadow-sm'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Calculate EMI (APR & Term)
                  </button>
                  <button
                    type="button"
                    onClick={() => setRepaymentMode('manual')}
                    className={`text-xs py-1.5 px-2 rounded-lg font-bold transition-all ${
                      repaymentMode === 'manual'
                        ? 'bg-white text-emerald-800 shadow-sm'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Enter Total Repayment
                  </button>
                </div>

                {repaymentMode === 'calculate' ? (
                  <>
                    {/* Annual Interest Rate */}
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs">
                        <label htmlFor={annualRateInputId} className="font-medium text-slate-700">
                          Annual Interest Rate (APR)
                        </label>
                        <span className="font-bold text-emerald-700">{annualInterestRate}% p.a.</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <input
                          id={annualRateInputId}
                          type="range"
                          min="0"
                          max="42"
                          step="0.5"
                          value={annualInterestRate}
                          onChange={(e) => setAnnualInterestRate(Number(e.target.value))}
                          className="w-full accent-emerald-600 cursor-pointer h-2 bg-emerald-200 rounded-lg"
                        />
                        <div className="relative w-20 shrink-0">
                          <input
                            type="number"
                            min="0"
                            max="60"
                            step="0.5"
                            value={annualInterestRate}
                            onChange={(e) => setAnnualInterestRate(Math.max(0, Number(e.target.value)))}
                            className="w-full pr-5 pl-2 py-1 rounded-lg border border-slate-200 text-xs font-bold text-slate-800 focus:border-emerald-500 outline-none text-right"
                          />
                          <span className="absolute inset-y-0 right-0 pr-2 flex items-center pointer-events-none text-slate-400 text-xs">
                            %
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Remaining Tenure */}
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs">
                        <label htmlFor={tenureInputId} className="font-medium text-slate-700">
                          Remaining Tenure (Months)
                        </label>
                        <span className="font-bold text-emerald-700">
                          {remainingTenureMonths} Months ({Math.round((remainingTenureMonths / 12) * 10) / 10} yrs)
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <input
                          id={tenureInputId}
                          type="range"
                          min="3"
                          max="60"
                          step="1"
                          value={remainingTenureMonths}
                          onChange={(e) => setRemainingTenureMonths(Number(e.target.value))}
                          className="w-full accent-emerald-600 cursor-pointer h-2 bg-emerald-200 rounded-lg"
                        />
                        <div className="relative w-20 shrink-0">
                          <input
                            type="number"
                            min="1"
                            max="120"
                            value={remainingTenureMonths}
                            onChange={(e) => setRemainingTenureMonths(Math.max(1, Number(e.target.value)))}
                            className="w-full pr-5 pl-2 py-1 rounded-lg border border-slate-200 text-xs font-bold text-slate-800 focus:border-emerald-500 outline-none text-right"
                          />
                          <span className="absolute inset-y-0 right-0 pr-1.5 flex items-center pointer-events-none text-slate-400 text-[10px]">
                            mo
                          </span>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {/* User-Entered Repayment Total */}
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs">
                        <label htmlFor={manualRepaymentInputId} className="font-medium text-slate-700">
                          Total Repayment Amount (Principal + Interest)
                        </label>
                        <span className="font-semibold text-emerald-700">
                          {formatINR(manualFullRepaymentTotal)}
                        </span>
                      </div>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400 text-xs">
                          ₹
                        </span>
                        <input
                          id={manualRepaymentInputId}
                          type="number"
                          min="0"
                          step="5000"
                          value={manualFullRepaymentTotal || ''}
                          onChange={(e) => setManualFullRepaymentTotal(Math.max(0, Number(e.target.value)))}
                          className="w-full pl-7 pr-3 py-2 rounded-lg border border-slate-200 text-xs font-semibold text-slate-800 focus:border-emerald-500 outline-none"
                          placeholder="e.g. 340000"
                        />
                      </div>
                    </div>

                    {/* Manual Tenure Months */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-slate-700 block">
                        Repayment Timeline (Months, Optional)
                      </label>
                      <input
                        type="number"
                        min="1"
                        max="120"
                        value={manualTenureMonths || ''}
                        onChange={(e) => setManualTenureMonths(Math.max(1, Number(e.target.value)))}
                        className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs font-semibold text-slate-800 focus:border-emerald-500 outline-none"
                        placeholder="e.g. 24"
                      />
                    </div>
                  </>
                )}

                {/* Additional Repayment Fees (Prepayment/Late charges) */}
                <div className="space-y-1.5 pt-1">
                  <div className="flex items-center justify-between text-xs">
                    <label htmlFor={repaymentFeesInputId} className="font-medium text-slate-700">
                      Additional Bank Repayment Fees / Charges
                    </label>
                    <span className="font-semibold text-slate-600">
                      {formatINR(additionalRepaymentFees)}
                    </span>
                  </div>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400 text-xs">
                      ₹
                    </span>
                    <input
                      id={repaymentFeesInputId}
                      type="number"
                      min="0"
                      step="500"
                      value={additionalRepaymentFees || ''}
                      onChange={(e) => setAdditionalRepaymentFees(Math.max(0, Number(e.target.value)))}
                      className="w-full pl-7 pr-3 py-2 rounded-lg border border-slate-200 text-xs font-semibold text-slate-800 focus:border-emerald-500 outline-none"
                      placeholder="0"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Compare Button */}
            <div className="pt-2">
              <button
                type="button"
                onClick={handleCalculateScenario}
                disabled={loading}
                className="w-full py-3.5 px-6 rounded-xl bg-[#007AFF] hover:bg-blue-700 text-white font-bold text-sm sm:text-base transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
              >
                {loading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Comparing Scenarios...</span>
                  </>
                ) : (
                  <>
                    <Calculator className="w-4 h-4" />
                    <span>{result ? 'Re-Compare Scenarios' : 'Compare Settlement vs Repayment'}</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Comparison Results & Multi-Dimensional Intelligence (7 Cols) */}
        <div className="lg:col-span-7 space-y-6">
          {result ? (
            <>
              {/* Top Side-by-Side Summary Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Settlement Summary Card */}
                <div className="bg-gradient-to-br from-amber-50/80 to-orange-50/50 rounded-2xl border border-amber-200 p-5 space-y-3 relative overflow-hidden shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-900 flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                      Option A: Settlement
                    </span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-200/80 text-amber-900">
                      {result.settlement.timingLabel}
                    </span>
                  </div>

                  <div>
                    <div className="text-[11px] text-slate-500 font-medium">Total Cash Outlay</div>
                    <div className="text-2xl font-black text-amber-900 tracking-tight">
                      {result.formatted.totalSettlementCost}
                    </div>
                  </div>

                  <div className="space-y-1 text-xs pt-2 border-t border-amber-200/60">
                    <div className="flex justify-between text-slate-600">
                      <span>Principal Payout ({result.settlementPercentage}%):</span>
                      <span className="font-semibold text-slate-900">{result.formatted.settlementPrincipalPayout}</span>
                    </div>
                    <div className="flex justify-between text-slate-600">
                      <span>Additional Fees:</span>
                      <span className="font-semibold text-slate-900">{result.formatted.additionalSettlementFees}</span>
                    </div>
                    <div className="flex justify-between text-emerald-700 font-semibold pt-1">
                      <span>Lender Haircut:</span>
                      <span>{result.formatted.settlementHaircutAmount} ({result.formatted.settlementHaircutPercentage})</span>
                    </div>
                  </div>

                  {/* CIBIL Badge */}
                  <div className="pt-2">
                    <div className="p-2 rounded-lg bg-amber-100/80 border border-amber-300/60 text-[11px] text-amber-900 font-medium flex items-center gap-1.5">
                      <ShieldAlert className="w-4 h-4 text-amber-700 shrink-0" />
                      <span>Reported as <strong>"Settled"</strong> (7-yr mark)</span>
                    </div>
                  </div>
                </div>

                {/* Full Repayment Summary Card */}
                <div className="bg-gradient-to-br from-emerald-50/80 to-teal-50/50 rounded-2xl border border-emerald-200 p-5 space-y-3 relative overflow-hidden shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-900 flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                      Option B: Full Repayment
                    </span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-200/80 text-emerald-900">
                      {result.repayment.tenureMonths} Months
                    </span>
                  </div>

                  <div>
                    <div className="text-[11px] text-slate-500 font-medium">Total Cash Outlay</div>
                    <div className="text-2xl font-black text-emerald-900 tracking-tight">
                      {result.formatted.fullRepaymentTotal}
                    </div>
                  </div>

                  <div className="space-y-1 text-xs pt-2 border-t border-emerald-200/60">
                    <div className="flex justify-between text-slate-600">
                      <span>Monthly Installment:</span>
                      <span className="font-semibold text-slate-900">
                        {result.formatted.monthlyEmi} / mo
                      </span>
                    </div>
                    <div className="flex justify-between text-slate-600">
                      <span>Total Interest Paid:</span>
                      <span className="font-semibold text-slate-900">{result.formatted.totalInterestPaid}</span>
                    </div>
                    <div className="flex justify-between text-slate-600">
                      <span>Additional Fees:</span>
                      <span className="font-semibold text-slate-900">{result.formatted.additionalRepaymentFees}</span>
                    </div>
                  </div>

                  {/* CIBIL Badge */}
                  <div className="pt-2">
                    <div className="p-2 rounded-lg bg-emerald-100/80 border border-emerald-300/60 text-[11px] text-emerald-900 font-medium flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                      <span>Reported as <strong>"Closed"</strong> (rebuilds score)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Nominal Cash Difference Banner */}
              <div className={`p-4 rounded-2xl border transition-all ${
                result.comparison.direction === 'settlement_cheaper'
                  ? 'bg-blue-50/80 border-blue-200 text-blue-950'
                  : result.comparison.direction === 'repayment_cheaper'
                  ? 'bg-emerald-50/80 border-emerald-200 text-emerald-950'
                  : 'bg-slate-50 border-slate-200 text-slate-900'
              }`}>
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-600 flex items-center gap-1.5">
                      <TrendingDown className="w-4 h-4 text-blue-600" />
                      Nominal Cash Cost Comparison
                    </div>
                    <div className="text-lg sm:text-xl font-extrabold">
                      {result.comparison.direction === 'settlement_cheaper' ? (
                        <>Settlement saves {result.formatted.nominalCashDifference} in nominal cash ({result.formatted.nominalSavingsPercentage})</>
                      ) : result.comparison.direction === 'repayment_cheaper' ? (
                        <>Repayment saves {result.formatted.nominalCashDifference} compared to settlement</>
                      ) : (
                        <>Both options result in identical nominal cash cost</>
                      )}
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {result.comparison.headlineSummary}
                    </p>
                  </div>
                  <div className="shrink-0 flex items-center gap-2">
                    <button
                      type="button"
                      onClick={handleCopySummary}
                      className="p-2 rounded-xl bg-white border border-slate-200 hover:bg-slate-100 text-slate-700 text-xs font-semibold flex items-center gap-1.5 transition-all shadow-sm"
                      title="Copy Summary"
                    >
                      {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                      <span className="hidden sm:inline">{copied ? 'Copied' : 'Copy'}</span>
                    </button>
                    <button
                      type="button"
                      onClick={handlePrint}
                      className="p-2 rounded-xl bg-white border border-slate-200 hover:bg-slate-100 text-slate-700 text-xs font-semibold flex items-center gap-1.5 transition-all shadow-sm"
                      title="Print Report"
                    >
                      <Printer className="w-4 h-4" />
                      <span className="hidden sm:inline">Print</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Guardrails & Incompatible Assumption Warnings Box */}
              {result.warnings.length > 0 && (
                <div className="space-y-2.5">
                  {result.warnings.map((warning) => (
                    <div
                      key={warning.id}
                      className={`p-4 rounded-xl border text-xs leading-relaxed flex items-start gap-3 ${
                        warning.severity === 'warning'
                          ? 'bg-amber-50/90 border-amber-300/80 text-amber-950'
                          : warning.severity === 'caution'
                          ? 'bg-rose-50/90 border-rose-300/80 text-rose-950'
                          : warning.severity === 'advisory'
                          ? 'bg-indigo-50/90 border-indigo-200 text-indigo-950'
                          : 'bg-slate-50 border-slate-200 text-slate-800'
                      }`}
                    >
                      <ShieldAlert className="w-4 h-4 shrink-0 mt-0.5 text-amber-600" />
                      <div className="space-y-0.5">
                        <div className="font-bold">{warning.title}</div>
                        <div>{warning.message}</div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Tab Navigation Panel */}
              <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden">
                <div className="flex border-b border-slate-200 bg-slate-50/70 p-1">
                  <button
                    type="button"
                    onClick={() => setActiveTab('matrix')}
                    className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                      activeTab === 'matrix'
                        ? 'bg-white text-indigo-900 shadow-sm'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <Scale className="w-3.5 h-3.5 text-indigo-600" />
                    7-Pillar Decision Matrix
                  </button>

                  {result.repaymentMode === 'calculate' && (
                    <button
                      type="button"
                      onClick={() => setActiveTab('timeline')}
                      className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                        activeTab === 'timeline'
                          ? 'bg-white text-indigo-900 shadow-sm'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      <Calendar className="w-3.5 h-3.5 text-emerald-600" />
                      Repayment Schedule
                    </button>
                  )}

                  <button
                    type="button"
                    onClick={() => setActiveTab('cost_breakdown')}
                    className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                      activeTab === 'cost_breakdown'
                        ? 'bg-white text-indigo-900 shadow-sm'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <FileText className="w-3.5 h-3.5 text-slate-600" />
                    Itemized Cost Table
                  </button>
                </div>

                <div className="p-5">
                  {/* TAB 1: 7-Pillar Multi-Dimensional Matrix */}
                  {activeTab === 'matrix' && (
                    <div className="space-y-4">
                      <div className="text-xs text-slate-600">
                        A direct side-by-side comparison across financial, legal, credit bureau, and tax considerations:
                      </div>
                      <div className="space-y-3">
                        {result.dimensions.map((dim) => (
                          <div
                            key={dim.id}
                            className="p-3.5 rounded-xl border border-slate-200/80 bg-slate-50/50 hover:bg-slate-50 transition-colors space-y-2"
                          >
                            <div className="flex items-center justify-between">
                              <span className="font-bold text-xs text-slate-900">{dim.dimension}</span>
                              <span
                                className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                                  dim.impact === 'repayment_favored'
                                    ? 'bg-emerald-100 text-emerald-800'
                                    : dim.impact === 'settlement_favored'
                                    ? 'bg-amber-100 text-amber-800'
                                    : 'bg-indigo-100 text-indigo-800'
                                }`}
                              >
                                {dim.impact === 'repayment_favored'
                                  ? 'Repayment Favored'
                                  : dim.impact === 'settlement_favored'
                                  ? 'Settlement Favored'
                                  : 'Strategic Trade-off'}
                              </span>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-1">
                              <div className="p-2.5 rounded-lg bg-amber-50/80 border border-amber-200/60">
                                <span className="font-bold text-amber-900 block text-[11px] mb-1">
                                  Option A (Settlement):
                                </span>
                                <span className="text-slate-700 leading-relaxed">{dim.settlementAspect}</span>
                              </div>
                              <div className="p-2.5 rounded-lg bg-emerald-50/80 border border-emerald-200/60">
                                <span className="font-bold text-emerald-900 block text-[11px] mb-1">
                                  Option B (Full Repayment):
                                </span>
                                <span className="text-slate-700 leading-relaxed">{dim.repaymentAspect}</span>
                              </div>
                            </div>

                            <div className="text-[11px] text-slate-500 italic pt-0.5">
                              💡 <strong>Key Takeaway:</strong> {dim.verdictNote}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* TAB 2: Repayment Amortization Schedule */}
                  {activeTab === 'timeline' && result.repaymentMode === 'calculate' && (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="text-xs text-slate-600">
                          Month-by-month reducing-balance amortization schedule:
                        </div>
                        <div className="flex items-center gap-1.5 text-xs">
                          <span className="text-slate-500 font-medium">Show:</span>
                          {(['12', '24', 'all'] as const).map((opt) => (
                            <button
                              key={opt}
                              type="button"
                              onClick={() => setScheduleLimit(opt)}
                              className={`px-2.5 py-0.5 rounded-md font-semibold text-[11px] border transition-all ${
                                scheduleLimit === opt
                                  ? 'bg-indigo-600 text-white border-indigo-600'
                                  : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-100'
                              }`}
                            >
                              {opt === 'all' ? 'All Months' : `${opt} Mos`}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="overflow-x-auto rounded-xl border border-slate-200">
                        <table className="w-full text-left text-xs">
                          <thead className="bg-slate-100 text-slate-700 font-bold uppercase text-[10px] tracking-wider border-b border-slate-200">
                            <tr>
                              <th className="py-2.5 px-3">Mo</th>
                              <th className="py-2.5 px-3">Opening</th>
                              <th className="py-2.5 px-3">Installment (EMI)</th>
                              <th className="py-2.5 px-3">Principal</th>
                              <th className="py-2.5 px-3">Interest</th>
                              <th className="py-2.5 px-3">Closing</th>
                              <th className="py-2.5 px-3">Cumulative Int</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-100 font-medium text-slate-800">
                            {visibleAmortizationRows.map((row) => (
                              <tr key={row.month} className="hover:bg-slate-50/80 transition-colors">
                                <td className="py-2 px-3 font-bold text-slate-600">#{row.month}</td>
                                <td className="py-2 px-3">{row.formatted.openingBalance}</td>
                                <td className="py-2 px-3 font-semibold text-emerald-800">{row.formatted.emi}</td>
                                <td className="py-2 px-3 text-slate-700">{row.formatted.principalPortion}</td>
                                <td className="py-2 px-3 text-amber-700">{row.formatted.interestPortion}</td>
                                <td className="py-2 px-3 font-bold">{row.formatted.closingBalance}</td>
                                <td className="py-2 px-3 text-slate-500">{row.formatted.cumulativeInterest}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>

                      {result.amortizationSchedule.length > visibleAmortizationRows.length && (
                        <div className="text-center pt-1">
                          <button
                            type="button"
                            onClick={() => setScheduleLimit('all')}
                            className="text-xs font-bold text-indigo-600 hover:text-indigo-800 transition-colors"
                          >
                            + View Remaining {result.amortizationSchedule.length - visibleAmortizationRows.length} Months
                          </button>
                        </div>
                      )}
                    </div>
                  )}

                  {/* TAB 3: Itemized Cost Breakdown Matrix */}
                  {activeTab === 'cost_breakdown' && (
                    <div className="space-y-4">
                      <div className="text-xs text-slate-600">
                        Itemized financial breakdown comparing nominal costs and bank waivers:
                      </div>
                      <div className="overflow-x-auto rounded-xl border border-slate-200">
                        <table className="w-full text-left text-xs">
                          <thead className="bg-slate-100 text-slate-700 font-bold uppercase text-[10px] tracking-wider border-b border-slate-200">
                            <tr>
                              <th className="py-2.5 px-3">Component</th>
                              <th className="py-2.5 px-3 text-amber-900 bg-amber-50/40">Option A: Settlement</th>
                              <th className="py-2.5 px-3 text-emerald-900 bg-emerald-50/40">Option B: Repayment</th>
                              <th className="py-2.5 px-3">Variance / Note</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-100 font-medium text-slate-800">
                            <tr className="hover:bg-slate-50">
                              <td className="py-2.5 px-3 font-semibold text-slate-700">Contractual Ledger Balance</td>
                              <td className="py-2.5 px-3 bg-amber-50/20">{result.formatted.outstandingBalance}</td>
                              <td className="py-2.5 px-3 bg-emerald-50/20">{result.formatted.outstandingBalance}</td>
                              <td className="py-2.5 px-3 text-slate-500">Same starting principal</td>
                            </tr>
                            <tr className="hover:bg-slate-50">
                              <td className="py-2.5 px-3 font-semibold text-slate-700">Principal Payout / Repaid</td>
                              <td className="py-2.5 px-3 font-bold text-amber-900 bg-amber-50/20">
                                {result.formatted.settlementPrincipalPayout}
                              </td>
                              <td className="py-2.5 px-3 font-bold text-emerald-900 bg-emerald-50/20">
                                {result.formatted.outstandingBalance}
                              </td>
                              <td className="py-2.5 px-3 text-emerald-700 font-semibold">
                                Bank Haircut: {result.formatted.settlementHaircutAmount}
                              </td>
                            </tr>
                            <tr className="hover:bg-slate-50">
                              <td className="py-2.5 px-3 font-semibold text-slate-700">Future Interest Incurred</td>
                              <td className="py-2.5 px-3 text-emerald-700 font-semibold bg-amber-50/20">₹0 (Forgiven)</td>
                              <td className="py-2.5 px-3 text-amber-700 font-semibold bg-emerald-50/20">
                                {result.formatted.totalInterestPaid}
                              </td>
                              <td className="py-2.5 px-3 text-slate-500">Accrued across tenure</td>
                            </tr>
                            <tr className="hover:bg-slate-50">
                              <td className="py-2.5 px-3 font-semibold text-slate-700">Third-Party & Banking Fees</td>
                              <td className="py-2.5 px-3 bg-amber-50/20">{result.formatted.additionalSettlementFees}</td>
                              <td className="py-2.5 px-3 bg-emerald-50/20">{result.formatted.additionalRepaymentFees}</td>
                              <td className="py-2.5 px-3 text-slate-500">Advisory, legal, or prepayment</td>
                            </tr>
                            <tr className="bg-slate-100/80 font-black text-slate-900 text-sm">
                              <td className="py-3 px-3">Total Nominal Cash Outlay</td>
                              <td className="py-3 px-3 text-amber-900 bg-amber-100/50">
                                {result.formatted.totalSettlementCost}
                              </td>
                              <td className="py-3 px-3 text-emerald-900 bg-emerald-100/50">
                                {result.formatted.fullRepaymentTotal}
                              </td>
                              <td className="py-3 px-3 text-blue-700">
                                Diff: {result.formatted.nominalCashDifference}
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </>
          ) : (
            <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center shadow-xs">
              <div className="w-12 h-12 rounded-full bg-blue-50 text-[#007AFF] flex items-center justify-center mx-auto mb-3">
                <Calculator className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1">Awaiting Comparison</h3>
              <p className="text-xs text-slate-600 max-w-sm mx-auto">
                Adjust your settlement and full repayment parameters on the left, then click &ldquo;Compare Settlement vs Repayment&rdquo; to evaluate the financial, legal, and CIBIL impact.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Educational & Advisory Deep-Dive Section */}
      <section className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-10 shadow-sm space-y-8">
        <div className="max-w-3xl space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold">
            <Info className="w-3.5 h-3.5 text-indigo-600" />
            Strategic Knowledge Base
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
            Beyond Nominal Cash: What Every Indian Borrower Must Know
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
            A lower cash payout in a settlement looks attractive on paper, but the legal, tax, and credit bureau consequences 
            often have lasting repercussions. Here is how Indian banking policies and laws evaluate both choices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: CIBIL Reporting */}
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
            <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
              <ShieldAlert className="w-5 h-5 text-amber-700" />
            </div>
            <h3 className="text-sm font-bold text-slate-900">The 7-Year CIBIL Shadow</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              When an account is settled, the lender reports the account status as <strong>"Settled"</strong>. 
              This adverse tag remains visible to all credit bureaus (CIBIL, Experian, CRIF High Mark) for up to <strong>7 years</strong>. 
              Automated underwriting models at major banks will automatically disqualify applicants for retail personal loans, 
              home loans, or credit cards until the status is cleared.
            </p>
          </div>

          {/* Card 2: RBI Compromise Norms */}
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
            <div className="w-9 h-9 rounded-xl bg-indigo-100 text-indigo-800 flex items-center justify-center font-bold">
              <Scale className="w-5 h-5 text-indigo-700" />
            </div>
            <h3 className="text-sm font-bold text-slate-900">RBI Framework on Compromise (2023)</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Under the RBI circular on <em>Compromise Settlements and Technical Write-offs</em>, lenders must follow board-approved policies. 
              Settlements are not guaranteed; they mandate a minimum <strong>cooling period (typically 12 months)</strong> before 
              the borrower can seek fresh facilities, and settlement approval requires documentation of genuine borrower hardship.
            </p>
          </div>

          {/* Card 3: Income Tax Implications */}
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
            <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
              <FileText className="w-5 h-5 text-emerald-700" />
            </div>
            <h3 className="text-sm font-bold text-slate-900">Tax Treatment (Sec 41(1) / 28(iv))</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Under Indian Income Tax laws, if a commercial, business, or sole proprietorship loan liability is remitted or forgiven, 
              the waived amount may be assessed as taxable income under <strong>Section 41(1)</strong> or <strong>Section 28(iv)</strong>. 
              Borrowers must account for potential tax liabilities when evaluating net cash savings.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive FAQ Accordion */}
      <section className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-10 shadow-sm space-y-6">
        <div className="space-y-1">
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-indigo-600" />
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Real-world regulatory and credit guidance on loan settlements vs repayment in India.
          </p>
        </div>

        <div className="space-y-3 divide-y divide-slate-100">
          {faqs.map((faq, idx) => (
            <div key={idx} className="pt-3">
              <button
                type="button"
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full flex items-center justify-between text-left py-2 text-xs sm:text-sm font-bold text-slate-800 hover:text-indigo-600 transition-colors"
              >
                <span>{faq.q}</span>
                <ChevronDown
                  className={`w-4 h-4 text-slate-400 shrink-0 ml-4 transition-transform duration-200 ${
                    openFaq === idx ? 'rotate-180 text-indigo-600' : ''
                  }`}
                />
              </button>
              {openFaq === idx && (
                <div className="pb-3 pt-1 text-xs text-slate-600 leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Non-Blocking Lead / Consultation CTA */}
      <section className="rounded-3xl bg-gradient-to-r from-indigo-900 via-indigo-950 to-slate-900 text-white p-6 sm:p-8 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/30 text-indigo-300 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            Need Independent Expert Guidance?
          </div>
          <h3 className="text-lg sm:text-2xl font-bold">
            Unsure Whether to Settle or Restructure?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
            Our legal and financial debt defense advocates analyze your banking notices, assess recovery status, 
            and negotiate bilateral OTS agreements strictly under RBI guidelines.
          </p>
        </div>
        <div className="shrink-0 flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs sm:text-sm transition-all shadow-lg hover:shadow-emerald-500/20"
          >
            Request Free Consultation
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/tools"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm transition-all border border-white/20"
          >
            Explore All Tools
          </Link>
        </div>
      </section>

      {/* Statutory Regulatory Disclaimer */}
      <div className="p-4 rounded-2xl bg-slate-100/90 border border-slate-200 text-[11px] text-slate-500 leading-relaxed">
        <p>
          <strong>Disclaimer:</strong> {result?.disclaimer ||
            'This calculator is an educational scenario comparison tool based on user-entered values and stated assumptions. It is not an official settlement quote, loan restructuring agreement, or legal/tax advice. Actual settlement terms depend on bilateral negotiations and formal written sanction letters from your lender under RBI compromise norms. Lenders are not obligated to settle, and settlement results in a "Settled" status on credit bureau records.'}
        </p>
      </div>
    </div>
  );
}
