'use client';

import React, { useState, useEffect, useCallback, useId, useMemo } from 'react';
import Link from 'next/link';
import {
  CreditCard,
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
  ShieldAlert,
  Clock,
  ArrowUpRight,
  FileText,
  CheckCircle2,
  HelpCircle,
  TrendingDown,
  Percent,
  Calendar,
  AlertTriangle,
  Zap,
  TrendingUp,
  Download,
  Flame,
  ChevronRight,
} from 'lucide-react';
import {
  calculateCreditCardInterest,
  validateCreditCardInterestInput,
  formatINR,
  formatPercentage,
  formatPayoffDuration,
  type CreditCardInterestInput,
  type CreditCardInterestResult,
  type MonthlyCardScheduleRow,
} from '@/lib/tools/calculators/creditCardInterestCalculator';

export default function CreditCardInterestCalculatorClient() {
  const balanceInputId = useId();
  const aprInputId = useId();
  const paymentInputId = useId();
  const spendingInputId = useId();
  const feesInputId = useId();
  const growthValueInputId = useId();

  // Primary Input States
  const [currentBalance, setCurrentBalance] = useState<number>(100000);
  const [annualInterestRate, setAnnualInterestRate] = useState<number>(42);
  const [monthlyPayment, setMonthlyPayment] = useState<number>(6000);

  // Advanced / Optional States
  const [showAdvanced, setShowAdvanced] = useState<boolean>(false);
  const [newMonthlySpending, setNewMonthlySpending] = useState<number>(0);
  const [monthlyFees, setMonthlyFees] = useState<number>(0);
  const [growthEnabled, setGrowthEnabled] = useState<boolean>(false);
  const [growthType, setGrowthType] = useState<'percentage' | 'fixed_amount'>('percentage');
  const [growthValue, setGrowthValue] = useState<number>(10); // 10% annual increase

  // UI States
  const [scheduleLimit, setScheduleLimit] = useState<'12' | '24' | 'all'>('12');
  const [scheduleSearch, setScheduleSearch] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Result & Calculation States
  const [result, setResult] = useState<CreditCardInterestResult | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [validationError, setValidationError] = useState<string | null>(null);

  // Pure Client-Side Calculation executed on demand or button click
  const runCalculation = useCallback(() => {
    const payload: CreditCardInterestInput = {
      currentBalance,
      annualInterestRate,
      monthlyPayment,
      newMonthlySpending,
      monthlyFees,
      paymentGrowth: {
        enabled: growthEnabled,
        type: growthType,
        value: growthValue,
        frequencyMonths: 12,
      },
    };

    const validation = validateCreditCardInterestInput(payload);
    if (!validation.isValid || !validation.sanitized) {
      setValidationError(validation.error || 'Please check your inputs.');
      setResult(null);
      return;
    }

    setValidationError(null);
    const calculated = calculateCreditCardInterest(validation.sanitized);
    setResult(calculated);

    // Non-blocking server logging
    try {
      setLoading(true);
      fetch('/api/tools/credit-card-interest-calculator', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(validation.sanitized),
      }).catch((err) => console.warn('Credit card calculator telemetry skipped:', err));
    } finally {
      setLoading(false);
    }
  }, [
    currentBalance,
    annualInterestRate,
    monthlyPayment,
    newMonthlySpending,
    monthlyFees,
    growthEnabled,
    growthType,
    growthValue,
  ]);

  // Initial calculation on mount
  useEffect(() => {
    runCalculation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleReset = () => {
    setCurrentBalance(100000);
    setAnnualInterestRate(42);
    setMonthlyPayment(6000);
    setNewMonthlySpending(0);
    setMonthlyFees(0);
    setGrowthEnabled(false);
    setGrowthValue(10);
    setGrowthType('percentage');
    setValidationError(null);
  };

  const handleCopySummary = () => {
    if (!result) return;
    const text = `--- CredSettle Credit Card Interest Estimate ---
Current Balance: ${formatINR(result.currentBalance)}
Annual Interest Rate (APR): ${formatPercentage(result.annualInterestRate)}
Monthly Payment: ${formatINR(result.initialMonthlyPayment)}
Payoff Status: ${result.payoffDurationFormatted}
Total Interest Paid: ${formatINR(result.totalInterestPaid)}
Total Amount Paid: ${formatINR(result.totalAmountPaid)}
Estimated with CredSettle: https://www.credsettle.com/tools/credit-card-interest-calculator`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  // Filter schedule based on limit and search
  const displayedSchedule = useMemo(() => {
    if (!result?.schedule) return [];
    let rows = result.schedule;
    if (scheduleLimit === '12') rows = rows.slice(0, 12);
    else if (scheduleLimit === '24') rows = rows.slice(0, 24);

    if (scheduleSearch.trim()) {
      const monthNum = parseInt(scheduleSearch.trim(), 10);
      if (!isNaN(monthNum)) {
        rows = rows.filter((r) => r.month === monthNum);
      }
    }
    return rows;
  }, [result?.schedule, scheduleLimit, scheduleSearch]);

  const faqs = [
    {
      q: 'Why is credit card interest so high in India compared to personal loans?',
      a: 'Credit card debt is unsecured revolving credit with no fixed repayment tenure. In India, most major banks (such as HDFC, SBI Card, ICICI, Axis, and Kotak) charge finance charges ranging between 3.0% and 3.75% per month, which compounds to an Annualized Percentage Rate (APR) of 36% to 45%. In addition, an 18% statutory Goods & Services Tax (GST) is levied on all accrued finance charges, making revolving credit card debt one of the most expensive financial liabilities in India.',
    },
    {
      q: 'What is the "Minimum Amount Due" (MAD) trap?',
      a: 'The Minimum Amount Due is typically calculated as 5% of your total outstanding balance (or 100% of unpaid finance charges + GST + fees + 1-2% of principal). Paying only the minimum due merely avoids late payment penalties and prevents immediate NPA default reporting. However, because nearly the entire payment is consumed by finance charges and taxes, your principal balance barely decreases, trapping you in repayment cycles that can last 15 to 30 years.',
    },
    {
      q: 'How does this simplified monthly model differ from actual bank statements?',
      a: 'This calculator applies standard monthly compounding: interest is calculated as (APR / 12 / 100) applied to the opening ledger balance of each cycle. In actual banking practice, Indian credit card issuers compute interest on an Average Daily Balance (ADB) basis from the date of each purchase until the statement generation date. Furthermore, banks charge 18% GST on all finance charges and cancel the interest-free grace period on fresh purchases whenever an unpaid balance is carried forward.',
    },
    {
      q: 'What should I do if my payment does not cover monthly interest charges?',
      a: 'If your monthly payment is less than or equal to monthly interest plus fees, you are in negative amortization—your debt will grow every single month even if you make your payment on time. In this situation, you must either dramatically increase your payment, secure a lower-interest personal loan for debt consolidation, or contact CredSettle to negotiate a structured legal compromise settlement under RBI guidelines to halt compounding interest.',
    },
  ];

  return (
    <div className="space-y-10">
      {/* Tool Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-semibold">
          <CreditCard className="w-3.5 h-3.5 text-blue-600" />
          Credit & CIBIL Defense Tool
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
          Credit Card Interest & Debt Payoff Calculator
        </h1>
        <p className="text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
          Estimate how compounding APR interest, recurring fees, and monthly payments affect your credit
          card balance. Model your exact payoff timeline, uncover hidden interest costs, and detect the
          minimum due debt trap.
        </p>
      </div>

      {/* Main Grid: Inputs on Left, Results on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Input Form (5 cols on lg, sticky while right column scrolls) */}
        <section
          aria-label="Credit Card Parameters"
          className="lg:col-span-5 lg:sticky lg:top-24 lg:self-start bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-7 shadow-sm space-y-6 lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto custom-scrollbar"
        >
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-blue-600" />
              Card Parameters
            </h2>
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-800 transition-colors"
              title="Reset to default values"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Reset
            </button>
          </div>

          {/* Validation Error Banner */}
          {validationError && (
            <div className="p-3.5 rounded-2xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
              <span>{validationError}</span>
            </div>
          )}

          <div className="space-y-5">
            {/* Input 1: Current Card Balance */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label
                  htmlFor={balanceInputId}
                  className="text-xs sm:text-sm font-bold text-slate-800"
                >
                  Current Card Balance (INR)
                </label>
                <span className="text-xs font-extrabold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-md">
                  {formatINR(currentBalance)}
                </span>
              </div>
              <div className="relative">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-sm">
                  ₹
                </span>
                <input
                  id={balanceInputId}
                  type="number"
                  min="1000"
                  step="1000"
                  value={currentBalance || ''}
                  onChange={(e) => setCurrentBalance(Math.max(0, Number(e.target.value)))}
                  className="w-full pl-8 pr-4 py-2.5 rounded-xl border border-slate-300 text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="e.g. 100000"
                />
              </div>
              {/* Quick Preset Pills */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {[50000, 100000, 250000, 500000].map((preset) => (
                  <button
                    key={preset}
                    type="button"
                    onClick={() => setCurrentBalance(preset)}
                    className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold transition-all ${
                      currentBalance === preset
                        ? 'bg-blue-600 text-white shadow-sm'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {formatINR(preset)}
                  </button>
                ))}
              </div>
              <p className="text-[11px] text-slate-500 leading-tight">
                Total outstanding ledger balance shown on your latest credit card statement.
              </p>
            </div>

            {/* Input 2: Annual Interest Rate / APR (%) */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label
                  htmlFor={aprInputId}
                  className="text-xs sm:text-sm font-bold text-slate-800"
                >
                  Annual Interest Rate / APR (%)
                </label>
                <span className="text-xs font-extrabold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-md">
                  {annualInterestRate}% p.a. ({(annualInterestRate / 12).toFixed(2)}%/mo)
                </span>
              </div>
              <div className="relative">
                <input
                  id={aprInputId}
                  type="number"
                  min="0"
                  max="120"
                  step="0.5"
                  value={annualInterestRate || ''}
                  onChange={(e) => setAnnualInterestRate(Math.max(0, Number(e.target.value)))}
                  className="w-full pl-4 pr-9 py-2.5 rounded-xl border border-slate-300 text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="e.g. 42"
                />
                <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-sm">
                  %
                </span>
              </div>
              {/* Quick Rate Presets */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {[
                  { label: '36% (Standard)', val: 36 },
                  { label: '40% (Tier-2)', val: 40 },
                  { label: '42% (3.5%/mo)', val: 42 },
                  { label: '45% (Subprime)', val: 45 },
                ].map((item) => (
                  <button
                    key={item.val}
                    type="button"
                    onClick={() => setAnnualInterestRate(item.val)}
                    className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold transition-all ${
                      annualInterestRate === item.val
                        ? 'bg-blue-600 text-white shadow-sm'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
              <p className="text-[11px] text-slate-500 leading-tight">
                Most Indian credit cards charge 3.0% to 3.75% per month (36% to 45% APR).
              </p>
            </div>

            {/* Input 3: Monthly Payment Amount */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label
                  htmlFor={paymentInputId}
                  className="text-xs sm:text-sm font-bold text-slate-800"
                >
                  Monthly Payment Amount (INR)
                </label>
                <span className="text-xs font-extrabold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
                  {formatINR(monthlyPayment)}
                </span>
              </div>
              <div className="relative">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-sm">
                  ₹
                </span>
                <input
                  id={paymentInputId}
                  type="number"
                  min="0"
                  step="500"
                  value={monthlyPayment || ''}
                  onChange={(e) => setMonthlyPayment(Math.max(0, Number(e.target.value)))}
                  className="w-full pl-8 pr-4 py-2.5 rounded-xl border border-slate-300 text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="e.g. 6000"
                />
              </div>
              {/* Payment Shortcut Chips */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {[
                  {
                    label: `Min Due (~5%: ${formatINR(Math.round(currentBalance * 0.05))})`,
                    val: Math.round(currentBalance * 0.05),
                  },
                  { label: '₹5,000', val: 5000 },
                  { label: '₹7,500', val: 7500 },
                  { label: '₹10,000', val: 10000 },
                ].map((item, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setMonthlyPayment(item.val)}
                    className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold transition-all ${
                      monthlyPayment === item.val
                        ? 'bg-emerald-600 text-white shadow-sm'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
              <p className="text-[11px] text-slate-500 leading-tight">
                Amount you plan to pay each month. To reduce debt, payment must exceed monthly interest charges.
              </p>
            </div>

            {/* Collapsible Advanced Options Toggle */}
            <div className="pt-2">
              <button
                type="button"
                onClick={() => setShowAdvanced(!showAdvanced)}
                className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-xs font-bold text-slate-700 transition-all"
              >
                <span className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-blue-600" />
                  Optional: Spending, Fees & Step-Up Growth
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-slate-500 transition-transform duration-200 ${
                    showAdvanced ? 'rotate-180 text-blue-600' : ''
                  }`}
                />
              </button>
            </div>

            {/* Advanced Form Fields */}
            {showAdvanced && (
              <div className="space-y-4 p-4 rounded-2xl bg-slate-50/80 border border-slate-200/80">
                {/* Advanced 1: New Monthly Spending */}
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center">
                    <label
                      htmlFor={spendingInputId}
                      className="text-xs font-bold text-slate-700"
                    >
                      New Monthly Purchases / Spending
                    </label>
                    <span className="text-[11px] font-bold text-slate-600">
                      {formatINR(newMonthlySpending)}
                    </span>
                  </div>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-xs">
                      ₹
                    </span>
                    <input
                      id={spendingInputId}
                      type="number"
                      min="0"
                      step="500"
                      value={newMonthlySpending || ''}
                      onChange={(e) =>
                        setNewMonthlySpending(Math.max(0, Number(e.target.value)))
                      }
                      className="w-full pl-7 pr-3 py-2 rounded-lg border border-slate-300 text-xs font-semibold text-slate-900 focus:outline-none focus:ring-1 focus:ring-blue-500 bg-white"
                      placeholder="0"
                    />
                  </div>
                  <p className="text-[10px] text-slate-500">
                    Additional charges added to your balance each billing cycle (default ₹0).
                  </p>
                </div>

                {/* Advanced 2: Recurring Monthly Fees */}
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center">
                    <label htmlFor={feesInputId} className="text-xs font-bold text-slate-700">
                      Monthly Fees / Protection Charges
                    </label>
                    <span className="text-[11px] font-bold text-slate-600">
                      {formatINR(monthlyFees)}
                    </span>
                  </div>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-xs">
                      ₹
                    </span>
                    <input
                      id={feesInputId}
                      type="number"
                      min="0"
                      step="100"
                      value={monthlyFees || ''}
                      onChange={(e) => setMonthlyFees(Math.max(0, Number(e.target.value)))}
                      className="w-full pl-7 pr-3 py-2 rounded-lg border border-slate-300 text-xs font-semibold text-slate-900 focus:outline-none focus:ring-1 focus:ring-blue-500 bg-white"
                      placeholder="0"
                    />
                  </div>
                  <p className="text-[10px] text-slate-500">
                    Amortized annual card fees, late charges, or insurance dues (default ₹0).
                  </p>
                </div>

                {/* Advanced 3: Payment Growth / Annual Step-Up */}
                <div className="space-y-2 pt-2 border-t border-slate-200">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                      <TrendingUp className="w-3.5 h-3.5 text-blue-600" />
                      Annual Payment Growth (Step-Up)
                    </label>
                    <input
                      type="checkbox"
                      checked={growthEnabled}
                      onChange={(e) => setGrowthEnabled(e.target.checked)}
                      className="w-4 h-4 rounded text-blue-600 focus:ring-blue-500 border-slate-300"
                    />
                  </div>

                  {growthEnabled && (
                    <div className="space-y-2 pt-1">
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          type="button"
                          onClick={() => setGrowthType('percentage')}
                          className={`py-1.5 px-3 rounded-lg text-xs font-semibold border ${
                            growthType === 'percentage'
                              ? 'bg-blue-600 text-white border-blue-600'
                              : 'bg-white text-slate-700 border-slate-200'
                          }`}
                        >
                          Percentage (%)
                        </button>
                        <button
                          type="button"
                          onClick={() => setGrowthType('fixed_amount')}
                          className={`py-1.5 px-3 rounded-lg text-xs font-semibold border ${
                            growthType === 'fixed_amount'
                              ? 'bg-blue-600 text-white border-blue-600'
                              : 'bg-white text-slate-700 border-slate-200'
                          }`}
                        >
                          Fixed Amount (₹)
                        </button>
                      </div>

                      <div className="relative">
                        <input
                          id={growthValueInputId}
                          type="number"
                          min="1"
                          step={growthType === 'percentage' ? '1' : '500'}
                          value={growthValue || ''}
                          onChange={(e) =>
                            setGrowthValue(Math.max(0, Number(e.target.value)))
                          }
                          className="w-full pl-3 pr-8 py-2 rounded-lg border border-slate-300 text-xs font-semibold text-slate-900 bg-white"
                          placeholder={growthType === 'percentage' ? 'e.g. 10' : 'e.g. 1000'}
                        />
                        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-xs">
                          {growthType === 'percentage' ? '%/yr' : '₹/yr'}
                        </span>
                      </div>
                      <p className="text-[10px] text-slate-500">
                        Increases your monthly payment every 12 months as your salary or savings rise.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Calculate Button */}
            <div className="pt-2">
              <button
                type="button"
                onClick={runCalculation}
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-2xl bg-blue-600 hover:bg-blue-700 active:scale-[0.99] text-white font-bold text-sm shadow-md hover:shadow-blue-500/20 transition-all cursor-pointer disabled:opacity-70"
              >
                <Zap className="w-4 h-4 fill-white" />
                {loading ? 'Simulating...' : 'Calculate Payoff Timeline'}
              </button>
            </div>
          </div>
        </section>

        {/* Right Column: Results & Analytics (7 cols on lg) */}
        <section aria-label="Payoff Analysis" className="lg:col-span-7 space-y-6">
          {result && (
            <>
              {/* Trap / Debt Warning Banner */}
              {result.warning.isTrapped ? (
                <div className="p-5 rounded-3xl bg-rose-50 border-2 border-rose-300 text-rose-950 space-y-3 shadow-sm">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-xl bg-rose-100 text-rose-700 shrink-0">
                      <Flame className="w-6 h-6 text-rose-600" />
                    </div>
                    <div className="space-y-1">
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-rose-200 text-rose-900 text-[11px] font-extrabold uppercase tracking-wide">
                        <AlertTriangle className="w-3.5 h-3.5" />
                        Critical Debt Warning
                      </div>
                      <h3 className="text-base sm:text-lg font-extrabold text-rose-900 leading-snug">
                        {result.warning.headline}
                      </h3>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-rose-900 leading-relaxed font-medium">
                    {result.warning.explanation}
                  </p>
                  <div className="pt-2 border-t border-rose-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                    <div>
                      <span className="font-semibold text-rose-800">
                        Monthly Finance Charges:
                      </span>{' '}
                      <span className="font-bold text-rose-950">
                        {formatINR(result.warning.monthlyRecurringChargesTotal)}
                      </span>
                    </div>
                    <div className="bg-white/80 px-3 py-1.5 rounded-xl border border-rose-200 font-bold text-rose-900">
                      Minimum Payoff Recommendation:{' '}
                      <span className="text-emerald-700">
                        {formatINR(result.warning.recommendedMinimumPayment)}/mo
                      </span>
                    </div>
                  </div>
                </div>
              ) : result.warning.type === 'extreme_tenure' ? (
                <div className="p-4 rounded-2xl bg-amber-50 border border-amber-300 text-amber-950 space-y-2 shadow-sm">
                  <div className="flex items-center gap-2 font-bold text-amber-900 text-sm">
                    <AlertTriangle className="w-4 h-4 text-amber-600" />
                    {result.warning.headline}
                  </div>
                  <p className="text-xs text-amber-800 leading-relaxed font-medium">
                    {result.warning.explanation}
                  </p>
                </div>
              ) : null}

              {/* Top 3 Primary Metrics Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Metric 1: Months / Duration */}
                <div
                  className={`p-5 rounded-2xl border transition-all ${
                    result.isPayable
                      ? 'bg-blue-50/70 border-blue-200'
                      : 'bg-rose-50 border-rose-200'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Estimated Payoff
                    </span>
                    <Clock
                      className={`w-4 h-4 ${
                        result.isPayable ? 'text-blue-600' : 'text-rose-600'
                      }`}
                    />
                  </div>
                  <div
                    className={`text-xl sm:text-2xl font-black ${
                      result.isPayable ? 'text-blue-900' : 'text-rose-700'
                    }`}
                  >
                    {result.isPayable
                      ? result.payoffDurationFormatted
                      : 'Never (Debt Spiral)'}
                  </div>
                  <p className="text-[11px] text-slate-500 mt-1">
                    {result.isPayable
                      ? `Paid off in ${result.monthsToPayoff} monthly installments`
                      : 'Payment does not reduce opening principal'}
                  </p>
                </div>

                {/* Metric 2: Total Interest Paid */}
                <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-800/80">
                      Total Interest
                    </span>
                    <Percent className="w-4 h-4 text-amber-600" />
                  </div>
                  <div className="text-xl sm:text-2xl font-black text-amber-950">
                    {result.isPayable
                      ? formatINR(result.totalInterestPaid)
                      : 'Unlimited'}
                  </div>
                  <p className="text-[11px] text-amber-800/80 mt-1">
                    {result.isPayable
                      ? `${(
                          (result.totalInterestPaid / result.currentBalance) *
                          100
                        ).toFixed(0)}% of original principal amount`
                      : 'Accrues continuously each month'}
                  </p>
                </div>

                {/* Metric 3: Total Cash Paid */}
                <div className="p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-800/80">
                      Total Cash Paid
                    </span>
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  </div>
                  <div className="text-xl sm:text-2xl font-black text-emerald-950">
                    {result.isPayable
                      ? formatINR(result.totalAmountPaid)
                      : 'Non-Amortizing'}
                  </div>
                  <p className="text-[11px] text-emerald-800/80 mt-1">
                    Principal + Interest + Recurring additions
                  </p>
                </div>
              </div>

              {/* Breakdown Bar: Principal vs Interest vs Charges */}
              {result.isPayable && (
                <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-3">
                  <div className="flex justify-between items-center text-xs font-bold text-slate-800">
                    <span>Payment Composition</span>
                    <span>Total Outlay: {formatINR(result.totalAmountPaid)}</span>
                  </div>

                  {/* Horizontal Stacked Bar */}
                  <div className="h-4 w-full bg-slate-100 rounded-full overflow-hidden flex">
                    <div
                      style={{
                        width: `${Math.min(
                          100,
                          (result.currentBalance / result.totalAmountPaid) * 100
                        )}%`,
                      }}
                      className="bg-blue-600 h-full"
                      title={`Principal: ${formatINR(result.currentBalance)}`}
                    />
                    <div
                      style={{
                        width: `${Math.min(
                          100,
                          (result.totalInterestPaid / result.totalAmountPaid) * 100
                        )}%`,
                      }}
                      className="bg-amber-500 h-full"
                      title={`Interest: ${formatINR(result.totalInterestPaid)}`}
                    />
                    {result.totalFeesPaid + result.totalSpendingPaid > 0 && (
                      <div
                        style={{
                          width: `${Math.min(
                            100,
                            ((result.totalFeesPaid + result.totalSpendingPaid) /
                              result.totalAmountPaid) *
                              100
                          )}%`,
                        }}
                        className="bg-purple-500 h-full"
                        title={`Fees & Spending: ${formatINR(
                          result.totalFeesPaid + result.totalSpendingPaid
                        )}`}
                      />
                    )}
                  </div>

                  {/* Legend */}
                  <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] font-semibold text-slate-600 pt-1">
                    <div className="flex items-center gap-1.5">
                      <span className="w-3 h-3 rounded-full bg-blue-600 inline-block" />
                      <span>Principal: {formatINR(result.currentBalance)}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-3 h-3 rounded-full bg-amber-500 inline-block" />
                      <span>Interest: {formatINR(result.totalInterestPaid)}</span>
                    </div>
                    {result.totalFeesPaid + result.totalSpendingPaid > 0 && (
                      <div className="flex items-center gap-1.5">
                        <span className="w-3 h-3 rounded-full bg-purple-500 inline-block" />
                        <span>
                          Fees/Charges:{' '}
                          {formatINR(result.totalFeesPaid + result.totalSpendingPaid)}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Accelerated Comparison Card */}
              {result.acceleratedComparison && (
                <div className="p-5 sm:p-6 rounded-3xl bg-gradient-to-br from-indigo-900 via-blue-900 to-slate-900 text-white space-y-4 shadow-md">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-3">
                    <div className="flex items-center gap-2">
                      <Zap className="w-5 h-5 text-amber-400 fill-amber-400" />
                      <h3 className="text-sm sm:text-base font-extrabold text-white">
                        The Power of Paying More: Accelerated Payoff Plan
                      </h3>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-emerald-400/20 text-emerald-300 text-xs font-bold">
                      Recommended Fast-Track
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    By increasing your monthly payment from{' '}
                    <strong className="text-white">
                      {formatINR(result.initialMonthlyPayment)}
                    </strong>{' '}
                    to{' '}
                    <strong className="text-emerald-300">
                      {result.acceleratedComparison.formatted.monthlyPayment}
                    </strong>{' '}
                    (an additional{' '}
                    {formatINR(
                      result.acceleratedComparison.monthlyPayment -
                        result.initialMonthlyPayment
                    )}
                    /month), you dramatically compress compounding interest:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                    <div className="p-3.5 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10">
                      <div className="text-[11px] font-semibold text-slate-300 uppercase">
                        Time Saved
                      </div>
                      <div className="text-lg sm:text-xl font-black text-white mt-1">
                        {result.isPayable
                          ? `${result.acceleratedComparison.monthsSaved} Months`
                          : result.acceleratedComparison.payoffDurationFormatted}
                      </div>
                      <div className="text-[10px] text-emerald-300 mt-0.5">
                        Clears in {result.acceleratedComparison.payoffDurationFormatted}
                      </div>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10">
                      <div className="text-[11px] font-semibold text-slate-300 uppercase">
                        Interest Saved
                      </div>
                      <div className="text-lg sm:text-xl font-black text-amber-300 mt-1">
                        {result.isPayable
                          ? result.acceleratedComparison.formatted.interestSaved
                          : 'Prevents Unlimited Interest'}
                      </div>
                      <div className="text-[10px] text-slate-300 mt-0.5">
                        Total Interest: {result.acceleratedComparison.formatted.totalInterest}
                      </div>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10">
                      <div className="text-[11px] font-semibold text-slate-300 uppercase">
                        Total Cash Saved
                      </div>
                      <div className="text-lg sm:text-xl font-black text-emerald-400 mt-1">
                        {result.isPayable
                          ? result.acceleratedComparison.formatted.totalCashSaved
                          : 'Immediate Relief'}
                      </div>
                      <div className="text-[10px] text-slate-300 mt-0.5">
                        Net lifetime payout reduction
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Month-by-Month Amortization Schedule Table */}
              <div className="bg-white rounded-3xl border border-slate-200/90 p-5 sm:p-6 shadow-sm space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
                  <div>
                    <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-blue-600" />
                      Month-by-Month Balance Schedule
                    </h2>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Transparent accounting of opening balance, interest charges, payments, and closing debt.
                    </p>
                  </div>

                  {/* Schedule Controls */}
                  <div className="flex flex-wrap items-center gap-2">
                    {/* View Limit Selector */}
                    <div className="flex items-center rounded-xl bg-slate-100 p-1 text-xs font-bold text-slate-700">
                      <button
                        type="button"
                        onClick={() => setScheduleLimit('12')}
                        className={`px-2.5 py-1 rounded-lg transition-all ${
                          scheduleLimit === '12'
                            ? 'bg-white shadow-sm text-blue-600'
                            : 'hover:text-slate-900'
                        }`}
                      >
                        12 Mos
                      </button>
                      <button
                        type="button"
                        onClick={() => setScheduleLimit('24')}
                        className={`px-2.5 py-1 rounded-lg transition-all ${
                          scheduleLimit === '24'
                            ? 'bg-white shadow-sm text-blue-600'
                            : 'hover:text-slate-900'
                        }`}
                      >
                        24 Mos
                      </button>
                      <button
                        type="button"
                        onClick={() => setScheduleLimit('all')}
                        className={`px-2.5 py-1 rounded-lg transition-all ${
                          scheduleLimit === 'all'
                            ? 'bg-white shadow-sm text-blue-600'
                            : 'hover:text-slate-900'
                        }`}
                      >
                        All
                      </button>
                    </div>

                    {/* Copy & Print buttons */}
                    <button
                      type="button"
                      onClick={handleCopySummary}
                      className="p-2 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-600 transition-colors"
                      title="Copy summary to clipboard"
                    >
                      {copied ? (
                        <Check className="w-4 h-4 text-emerald-600" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                    <button
                      type="button"
                      onClick={handlePrint}
                      className="p-2 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-600 transition-colors"
                      title="Print or Save Schedule as PDF"
                    >
                      <Printer className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Table Container */}
                <div className="overflow-x-auto rounded-2xl border border-slate-100 max-h-[420px] overflow-y-auto">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-slate-50 sticky top-0 z-10 border-b border-slate-200 text-slate-700 font-bold uppercase text-[10px] tracking-wider">
                      <tr>
                        <th className="py-3 px-3">Mo #</th>
                        <th className="py-3 px-3">Opening Bal</th>
                        <th className="py-3 px-3 text-amber-700">Interest</th>
                        <th className="py-3 px-3 text-purple-700">Fees/Spend</th>
                        <th className="py-3 px-3 text-emerald-700">Payment</th>
                        <th className="py-3 px-3 text-blue-700">Principal Paid</th>
                        <th className="py-3 px-3">Closing Bal</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                      {displayedSchedule.length > 0 ? (
                        displayedSchedule.map((row) => (
                          <tr
                            key={row.month}
                            className={`hover:bg-slate-50/80 transition-colors ${
                              row.closingBalance <= 0 ? 'bg-emerald-50/50' : ''
                            }`}
                          >
                            <td className="py-2.5 px-3 font-bold text-slate-900">
                              M{row.month}
                            </td>
                            <td className="py-2.5 px-3">{row.formatted.openingBalance}</td>
                            <td className="py-2.5 px-3 font-semibold text-amber-800">
                              {row.formatted.interestAccrued}
                            </td>
                            <td className="py-2.5 px-3 text-slate-500">
                              {formatINR(row.newSpending + row.monthlyFees)}
                            </td>
                            <td className="py-2.5 px-3 font-bold text-emerald-700">
                              {row.formatted.payment}
                            </td>
                            <td className="py-2.5 px-3 font-semibold text-blue-700">
                              {row.formatted.principalPaid}
                            </td>
                            <td className="py-2.5 px-3 font-bold text-slate-900">
                              {row.formatted.closingBalance}
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td
                            colSpan={7}
                            className="py-6 text-center text-slate-400 font-medium"
                          >
                            No schedule entries found.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>

                {/* Table Footer info */}
                <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 pt-1">
                  <span>
                    Showing {displayedSchedule.length} of {result.schedule.length} months in simulation
                  </span>
                  <span>
                    Final month payment is strictly clamped to avoid overpayment
                  </span>
                </div>
              </div>

              {/* Calculation Convention Transparency Banner */}
              <div className="p-5 rounded-3xl bg-blue-50/70 border border-blue-200/80 space-y-2">
                <div className="flex items-center gap-2 font-bold text-blue-900 text-xs sm:text-sm">
                  <Info className="w-4 h-4 text-blue-600 shrink-0" />
                  Calculation Convention & Accounting Rules
                </div>
                <ul className="text-xs text-blue-950/80 space-y-1.5 list-disc list-inside leading-relaxed">
                  {result.conventionNotes.map((note, idx) => (
                    <li key={idx}>{note}</li>
                  ))}
                </ul>
              </div>
            </>
          )}
        </section>
      </div>

      {/* Educational Section: The Credit Card Debt Reality in India */}
      <section className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-10 shadow-sm space-y-6">
        <div className="max-w-3xl space-y-2">
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
            How Credit Card Interest Really Works in India
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Understanding the true cost of revolving credit card balances, compounding cycles, and why
            making only minimum payments can double your original debt.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          {/* Card 1: ADB Compounding */}
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
            <div className="w-9 h-9 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center font-bold">
              <Percent className="w-5 h-5 text-blue-700" />
            </div>
            <h3 className="text-sm font-bold text-slate-900">
              Average Daily Balance (ADB)
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              In India, banks divide your APR by 365 to determine a daily interest rate. Interest starts
              accruing daily from the transaction date on unpaid balances, canceling the interest-free grace
              period on fresh purchases until dues are 100% cleared.
            </p>
          </div>

          {/* Card 2: 18% GST Levy */}
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
            <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
              <FileText className="w-5 h-5 text-amber-700" />
            </div>
            <h3 className="text-sm font-bold text-slate-900">
              Mandatory 18% GST Surcharge
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Under Indian Goods and Services Tax (GST) laws, every rupee of finance charges, annual fees,
              and late payment penalties attracts an additional 18% tax. This silently inflates your effective
              APR by several percentage points every billing cycle.
            </p>
          </div>

          {/* Card 3: Minimum Due Trap */}
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
            <div className="w-9 h-9 rounded-xl bg-rose-100 text-rose-800 flex items-center justify-center font-bold">
              <ShieldAlert className="w-5 h-5 text-rose-700" />
            </div>
            <h3 className="text-sm font-bold text-slate-900">
              The 5% Minimum Due Illusion
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Paying minimum due satisfies the bank’s immediate billing software to avoid late fees, but
              approximately 80% to 95% of your payment is drained by finance charges and GST, leaving the
              underlying principal virtually intact for years.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive FAQ Accordion */}
      <section className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-10 shadow-sm space-y-6">
        <div className="space-y-1">
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-blue-600" />
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Real-world regulatory and financial guidance on credit card interest and payoff strategies in India.
          </p>
        </div>

        <div className="space-y-3 divide-y divide-slate-100">
          {faqs.map((faq, idx) => (
            <div key={idx} className="pt-3">
              <button
                type="button"
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full flex items-center justify-between text-left py-2 text-xs sm:text-sm font-bold text-slate-800 hover:text-blue-600 transition-colors"
              >
                <span>{faq.q}</span>
                <ChevronDown
                  className={`w-4 h-4 text-slate-400 shrink-0 ml-4 transition-transform duration-200 ${
                    openFaq === idx ? 'rotate-180 text-blue-600' : ''
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

      {/* Non-Blocking Lead / Debt Settlement Consultation CTA */}
      <section className="rounded-3xl bg-gradient-to-r from-blue-900 via-indigo-950 to-slate-900 text-white p-6 sm:p-8 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/30 text-blue-300 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            Trapped in Credit Card Debt?
          </div>
          <h3 className="text-lg sm:text-2xl font-bold">
            Struggling with Compounding Card Dues & Recovery Harassment?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
            Our legal debt defense advocates negotiate bilateral One-Time Settlements (OTS) with banks to
            waive unbundled penal interest, stop recovery harassment, and reduce dues up to 50% under RBI
            compromise guidelines.
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
            'This calculator is an educational scenario model based on user-entered values and standard monthly compounding assumptions. It does not reproduce exact daily bank ledger rules or represent an official statement quote. Credit card issuers in India compute interest daily on an Average Daily Balance (ADB) basis and levy 18% GST on all finance charges and processing fees. Settlement or compromise outcomes depend on individual bank policies under RBI norms.'}
        </p>
      </div>
    </div>
  );
}
