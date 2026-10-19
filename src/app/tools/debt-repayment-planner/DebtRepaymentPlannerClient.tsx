'use client';

import React, { useState, useEffect, useCallback, useMemo } from 'react';
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
  Plus,
  Trash2,
  TrendingDown,
  HelpCircle,
  Flame,
  Zap,
  Calendar,
  Download,
  CheckCircle2,
  Scale,
  ShieldAlert,
  ArrowUpRight,
} from 'lucide-react';
import {
  calculateDebtRepaymentPlan,
  validateDebtPlannerInput,
  formatINR,
  formatPercentage,
  getCurrentYearMonth,
  type RepaymentStrategy,
  type DebtInputItem,
  type PlannerComparisonResult,
  type MonthlyScheduleRow,
} from '@/lib/tools/calculators/debtRepaymentPlanner';

interface ClientDebtItem {
  id: string;
  name: string;
  balance: string; // string for smooth input control
  interestRate: string; // annual percentage
  minPayment: string; // minimum monthly installment
}

const DEFAULT_SAMPLE_DEBTS: ClientDebtItem[] = [
  {
    id: 'debt_sample_1',
    name: 'Credit Card Outstanding',
    balance: '85000',
    interestRate: '42.0',
    minPayment: '4250',
  },
  {
    id: 'debt_sample_2',
    name: 'Personal Loan',
    balance: '250000',
    interestRate: '15.5',
    minPayment: '8500',
  },
  {
    id: 'debt_sample_3',
    name: 'Two-Wheeler Loan',
    balance: '60000',
    interestRate: '11.0',
    minPayment: '2800',
  },
];

export default function DebtRepaymentPlannerClient() {
  const [debts, setDebts] = useState<ClientDebtItem[]>(DEFAULT_SAMPLE_DEBTS);
  const [strategy, setStrategy] = useState<RepaymentStrategy>('avalanche');
  const [extraMonthlyPayment, setExtraMonthlyPayment] = useState<string>('5000');
  const [oneTimeExtraPayment, setOneTimeExtraPayment] = useState<string>('0');
  const [startMonthYear, setStartMonthYear] = useState<string>(getCurrentYearMonth());
  const [scheduleViewLimit, setScheduleViewLimit] = useState<'12' | '24' | 'all'>('12');
  const [expandedMonth, setExpandedMonth] = useState<number | null>(null);

  const [comparisonResult, setComparisonResult] = useState<PlannerComparisonResult | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [validationError, setValidationError] = useState<string | null>(null);
  const [copied, setCopied] = useState<boolean>(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Compute scenario on explicit user action
  const runCalculation = useCallback(() => {
    // Basic array check
    if (debts.length === 0) {
      setValidationError('Please provide at least one debt item.');
      setComparisonResult(null);
      return;
    }

    // Check balances
    const invalidBalance = debts.some((d) => {
      const b = parseFloat(d.balance);
      return isNaN(b) || b <= 0;
    });

    if (invalidBalance) {
      setValidationError('Every debt must have an outstanding balance greater than ₹0.');
      setComparisonResult(null);
      return;
    }

    // Check negative rates/payments
    const hasNegative = debts.some((d) => {
      const r = parseFloat(d.interestRate || '0');
      const p = parseFloat(d.minPayment || '0');
      return r < 0 || p < 0;
    });

    if (hasNegative) {
      setValidationError('Interest rates and minimum payments cannot be negative values.');
      setComparisonResult(null);
      return;
    }

    const payload = {
      debts: debts.map((d, i) => ({
        id: d.id || `debt_${i + 1}`,
        name: d.name.trim() !== '' ? d.name.trim() : `Debt #${i + 1}`,
        balance: parseFloat(d.balance) || 0,
        interestRate: parseFloat(d.interestRate) || 0,
        minPayment: parseFloat(d.minPayment) || 0,
      })),
      extraMonthlyPayment: parseFloat(extraMonthlyPayment) || 0,
      oneTimeExtraPayment: parseFloat(oneTimeExtraPayment) || 0,
      strategy,
      startMonthYear,
    };

    const validated = validateDebtPlannerInput(payload);
    if (!validated.isValid || !validated.sanitized) {
      setValidationError(validated.error || 'Invalid calculation parameters.');
      setComparisonResult(null);
      return;
    }

    setValidationError(null);
    const plan = calculateDebtRepaymentPlan(validated.sanitized);
    setComparisonResult(plan);

    // Non-blocking server logging
    try {
      setLoading(true);
      fetch('/api/tools/debt-repayment-planner', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(validated.sanitized),
      }).catch((err) => console.warn('Planner telemetry skipped:', err));
    } finally {
      setLoading(false);
    }
  }, [debts, strategy, extraMonthlyPayment, oneTimeExtraPayment, startMonthYear]);

  // Row modifications
  const handleUpdateDebt = (id: string, field: keyof ClientDebtItem, value: string) => {
    setDebts((prev) =>
      prev.map((item) => (item.id === id ? { ...item, [field]: value } : item))
    );
  };

  const handleAddDebt = () => {
    const newId = `debt_${Date.now()}`;
    setDebts((prev) => [
      ...prev,
      {
        id: newId,
        name: `Debt #${prev.length + 1}`,
        balance: '50000',
        interestRate: '16.0',
        minPayment: '2000',
      },
    ]);
  };

  const handleRemoveDebt = (id: string) => {
    if (debts.length <= 1) {
      setValidationError('You must keep at least one debt in the schedule.');
      return;
    }
    setDebts((prev) => prev.filter((item) => item.id !== id));
  };

  const handleResetDefaults = () => {
    setDebts(DEFAULT_SAMPLE_DEBTS);
    setStrategy('avalanche');
    setExtraMonthlyPayment('5000');
    setOneTimeExtraPayment('0');
    setStartMonthYear(getCurrentYearMonth());
    setScheduleViewLimit('12');
    setValidationError(null);
    setComparisonResult(null);
  };

  // CSV Schedule Download
  const handleDownloadCSV = () => {
    if (!comparisonResult || !comparisonResult.activeResult.isPayable) return;

    const schedule = comparisonResult.activeResult.monthlySchedule;
    if (schedule.length === 0) return;

    const headers = [
      'Month Index',
      'Calendar Date',
      'Opening Balance (INR)',
      'Interest Accrued (INR)',
      'Minimum Payments (INR)',
      'Extra Payments (INR)',
      'Total Payment (INR)',
      'Principal Paid (INR)',
      'Closing Balance (INR)',
      'Debts Cleared This Month',
    ];

    const rows = schedule.map((row) => [
      row.monthIndex,
      `"${row.calendarDate}"`,
      Math.round(row.openingTotalBalance),
      Math.round(row.totalInterestAccrued),
      Math.round(row.totalMinPaymentApplied),
      Math.round(row.totalExtraPaymentApplied),
      Math.round(row.totalPaymentApplied),
      Math.round(row.totalPrincipalPaid),
      Math.round(row.endingTotalBalance),
      `"${row.debtsPaidOffThisMonth.join(', ') || '-'}"`,
    ]);

    const csvContent =
      'data:text/csv;charset=utf-8,' +
      [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute(
      'download',
      `debt_repayment_schedule_${strategy}_${startMonthYear}.csv`
    );
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Copy plan summary
  const handleCopySummary = async () => {
    if (!comparisonResult) return;
    const active = comparisonResult.activeResult;

    const summaryText = `CredSettle Debt Repayment Plan
Strategy: ${comparisonResult.chosenStrategy === 'avalanche' ? 'Debt Avalanche (Highest APR First)' : 'Debt Snowball (Smallest Balance First)'}
Total Original Principal: ${active.formatted.totalPrincipal}
Estimated Payoff Time: ${active.formatted.totalMonths} (Debt-Free by ${active.formatted.payoffDate})
Total Interest Payable: ${active.formatted.totalInterest}
Total Payments: ${active.formatted.totalPayments}
Extra Monthly Payment: ${formatINR(parseFloat(extraMonthlyPayment) || 0)}
Calculated at: https://www.credsettle.com/tools/debt-repayment-planner`;

    try {
      await navigator.clipboard.writeText(summaryText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  // Visible schedule rows based on filter
  const visibleScheduleRows = useMemo(() => {
    if (!comparisonResult || !comparisonResult.activeResult.isPayable) return [];
    const full = comparisonResult.activeResult.monthlySchedule;
    if (scheduleViewLimit === '12') return full.slice(0, 12);
    if (scheduleViewLimit === '24') return full.slice(0, 24);
    return full;
  }, [comparisonResult, scheduleViewLimit]);

  const activeResult = comparisonResult?.activeResult;

  // Portfolio total statistics
  const portfolioSummary = useMemo(() => {
    const totalBal = debts.reduce((sum, d) => sum + (parseFloat(d.balance) || 0), 0);
    const totalMin = debts.reduce((sum, d) => sum + (parseFloat(d.minPayment) || 0), 0);
    const totalFirstMonthInterest = debts.reduce(
      (sum, d) =>
        sum + (parseFloat(d.balance) || 0) * ((parseFloat(d.interestRate) || 0) / 1200),
      0
    );
    return { totalBal, totalMin, totalFirstMonthInterest };
  }, [debts]);

  const faqs = [
    {
      q: 'What is the fundamental difference between Avalanche and Snowball?',
      a: 'The Debt Avalanche method allocates extra payments to the loan with the highest interest rate first, mathematically minimizing total interest costs. The Debt Snowball method pays off the loan with the smallest balance first, delivering rapid psychological milestones and reducing the number of active creditors quickly.',
    },
    {
      q: 'How does minimum payment rollover accelerate repayment?',
      a: 'When an individual loan or credit card is paid off, its required minimum payment is not spent elsewhere. Instead, that amount is rolled over into your extra payment pool for the remaining debts, steadily increasing repayment velocity every time a balance reaches zero.',
    },
    {
      q: 'How does the calculator handle interest accrual and payment sequence?',
      a: 'In our transparent simulation, interest is calculated monthly on the opening principal balance at the monthly rate (APR / 1200). Minimum payments are applied first to each debt (covering interest and reducing principal). Any surplus extra amount is then dedicated to the top-priority loan according to your chosen strategy.',
    },
    {
      q: 'Why does the tool show "Cannot be paid off under these assumptions"?',
      a: 'This condition triggers if your combined monthly payments (minimums plus extra contributions) are lower than or equal to the monthly interest accrued across your debts. This results in negative amortization, where interest compounds faster than payments and the balance expands indefinitely.',
    },
    {
      q: 'What happens if a minimum payment is larger than the remaining debt balance?',
      a: 'The final monthly payment is capped strictly to the exact remaining balance plus accrued interest. The excess funds are automatically redirected to the next priority debt in your schedule, preventing overpayments.',
    },
    {
      q: 'What should I do if my total debt obligations exceed my repayment capacity?',
      a: 'If your monthly debt payments exceed 50% to 60% of your net take-home salary or you face financial hardship (job loss, business distress, medical emergencies), standard repayment may lead to default. In such situations, RBI-governed compromise settlement allows borrowers to close unsecured debts at a substantial waiver.',
    },
  ];

  return (
    <div className="space-y-10">
      {/* Hero Header */}
      <section className="space-y-4 print:space-y-2">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
            <Calculator className="w-3.5 h-3.5" />
            <span>Debt Management • Tool 5</span>
          </div>

          <div className="flex items-center gap-2 print:hidden">
            <button
              onClick={handleCopySummary}
              type="button"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors shadow-sm"
              title="Copy repayment summary to clipboard"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-600 font-semibold">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-slate-500" />
                  <span>Copy Summary</span>
                </>
              )}
            </button>

            <button
              onClick={handlePrint}
              type="button"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors shadow-sm"
              title="Print repayment plan"
            >
              <Printer className="w-3.5 h-3.5 text-slate-500" />
              <span>Print Schedule</span>
            </button>

            <button
              onClick={handleResetDefaults}
              type="button"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors shadow-sm"
              title="Reset debts to default sample"
            >
              <RotateCcw className="w-3.5 h-3.5 text-slate-500" />
              <span>Reset</span>
            </button>
          </div>
        </div>

        <div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Debt Repayment Planner: Avalanche & Snowball
          </h1>
          <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
            Create an illustrative month-by-month repayment roadmap using either the mathematical{' '}
            <strong className="text-slate-900">Debt Avalanche</strong> or psychological{' '}
            <strong className="text-slate-900">Debt Snowball</strong> strategy. Compare total interest
            savings, debt-free target dates, and debt elimination order.
          </p>
        </div>
      </section>

      {/* Main Interactive Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Input Builder (sticky on desktop) */}
        <div className="lg:col-span-6 lg:sticky lg:top-24 lg:self-start lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto custom-scrollbar space-y-6">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 sm:p-6 space-y-6 print:border-none print:shadow-none print:p-0">
            {/* Section Heading */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div>
                <h2 className="text-lg font-bold text-slate-900">
                  1. Debt Payoff Simulator: Repayment Strategy Engine
                </h2>
                <p className="text-xs text-slate-500 mt-0.5">
                  Enter your loans, interest rates, and extra monthly budget.
                </p>
              </div>
              <span className="text-xs font-medium text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">
                {debts.length} {debts.length === 1 ? 'Debt' : 'Debts'}
              </span>
            </div>

            {/* Validation Alert */}
            {validationError && (
              <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs sm:text-sm">
                <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold">Calculation Notice</p>
                  <p className="mt-0.5 text-amber-800">{validationError}</p>
                </div>
              </div>
            )}

            {/* Strategy Selection Buttons */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                Select Payoff Strategy
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setStrategy('avalanche')}
                  className={`p-3.5 rounded-xl border text-left transition-all relative ${
                    strategy === 'avalanche'
                      ? 'border-emerald-600 bg-emerald-50/60 ring-2 ring-emerald-500/20 shadow-sm'
                      : 'border-slate-200 hover:border-slate-300 bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                      <Flame className="w-4 h-4 text-emerald-600" />
                      Debt Avalanche
                    </span>
                    <span className="text-[10px] font-semibold bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded">
                      Lowest Interest
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 mt-1 leading-snug">
                    Highest APR first. Mathematically optimal to minimize interest paid.
                  </p>
                </button>

                <button
                  type="button"
                  onClick={() => setStrategy('snowball')}
                  className={`p-3.5 rounded-xl border text-left transition-all relative ${
                    strategy === 'snowball'
                      ? 'border-blue-600 bg-blue-50/60 ring-2 ring-blue-500/20 shadow-sm'
                      : 'border-slate-200 hover:border-slate-300 bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                      <Zap className="w-4 h-4 text-blue-600" />
                      Debt Snowball
                    </span>
                    <span className="text-[10px] font-semibold bg-blue-100 text-blue-800 px-1.5 py-0.5 rounded">
                      Quick Wins
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 mt-1 leading-snug">
                    Smallest balance first. Builds quick psychological momentum.
                  </p>
                </button>
              </div>
            </div>

            {/* Extra Payment Budget Inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-slate-50 p-4 rounded-xl border border-slate-100">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-700 flex items-center justify-between">
                  <span>Extra Monthly Payment (₹)</span>
                  <span className="text-emerald-700 font-bold">
                    {formatINR(parseFloat(extraMonthlyPayment) || 0)}
                  </span>
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5 text-slate-400 font-medium text-sm">₹</span>
                  <input
                    type="number"
                    min="0"
                    step="500"
                    value={extraMonthlyPayment}
                    onChange={(e) => setExtraMonthlyPayment(e.target.value)}
                    placeholder="e.g. 5000"
                    className="w-full pl-8 pr-3 py-2 text-sm bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-slate-900 font-medium"
                  />
                </div>
                <p className="text-[11px] text-slate-500">
                  Added on top of minimum payments each month.
                </p>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-700 flex items-center justify-between">
                  <span>One-Time Extra (Month 1)</span>
                  <span className="text-slate-700 font-bold">
                    {formatINR(parseFloat(oneTimeExtraPayment) || 0)}
                  </span>
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5 text-slate-400 font-medium text-sm">₹</span>
                  <input
                    type="number"
                    min="0"
                    step="1000"
                    value={oneTimeExtraPayment}
                    onChange={(e) => setOneTimeExtraPayment(e.target.value)}
                    placeholder="Optional lump-sum"
                    className="w-full pl-8 pr-3 py-2 text-sm bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-slate-900 font-medium"
                  />
                </div>
                <p className="text-[11px] text-slate-500">
                  Optional bonus or savings injected in Month 1.
                </p>
              </div>
            </div>

            {/* Start Date Picker */}
            <div className="flex items-center justify-between gap-4 p-3 bg-slate-50/80 rounded-xl border border-slate-100">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-slate-500" />
                <span className="text-xs font-semibold text-slate-700">Planning Start Month:</span>
              </div>
              <input
                type="month"
                value={startMonthYear}
                onChange={(e) => setStartMonthYear(e.target.value)}
                className="text-xs font-medium text-slate-800 bg-white border border-slate-200 rounded-lg px-2.5 py-1.5 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            {/* Repeatable Debt Rows */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Itemized Debt Portfolio
                </h3>
                <span className="text-xs text-slate-500">
                  Total Principal: <strong className="text-slate-800">{formatINR(portfolioSummary.totalBal)}</strong>
                </span>
              </div>

              <div className="space-y-3">
                {debts.map((item, idx) => {
                  const bal = parseFloat(item.balance) || 0;
                  const rate = parseFloat(item.interestRate) || 0;
                  const monthlyInt = bal * (rate / 1200);

                  return (
                    <div
                      key={item.id}
                      className="p-3.5 bg-slate-50/90 hover:bg-slate-50 rounded-xl border border-slate-200 transition-colors space-y-3"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2 flex-grow">
                          <span className="w-5 h-5 rounded-full bg-slate-200 text-slate-700 text-xs font-bold flex items-center justify-center flex-shrink-0">
                            {idx + 1}
                          </span>
                          <input
                            type="text"
                            value={item.name}
                            onChange={(e) => handleUpdateDebt(item.id, 'name', e.target.value)}
                            placeholder="Debt Name (e.g. HDFC Credit Card)"
                            className="text-xs sm:text-sm font-semibold text-slate-900 bg-transparent border-b border-transparent hover:border-slate-300 focus:border-emerald-500 focus:outline-none w-full"
                          />
                        </div>

                        <div className="flex items-center gap-2 flex-shrink-0">
                          <span className="text-[11px] text-slate-500 font-medium">
                            Int: {formatINR(monthlyInt)}/mo
                          </span>
                          <button
                            type="button"
                            onClick={() => handleRemoveDebt(item.id)}
                            disabled={debts.length <= 1}
                            className="p-1.5 text-slate-400 hover:text-rose-600 disabled:opacity-30 disabled:hover:text-slate-400 transition-colors"
                            title="Remove this debt"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                        <div>
                          <label className="text-[10px] font-semibold text-slate-500 block mb-1">
                            Balance (₹)
                          </label>
                          <div className="relative">
                            <span className="absolute left-2.5 top-1.5 text-xs text-slate-400 font-medium">₹</span>
                            <input
                              type="number"
                              min="1"
                              value={item.balance}
                              onChange={(e) => handleUpdateDebt(item.id, 'balance', e.target.value)}
                              placeholder="Balance"
                              className="w-full pl-6 pr-2 py-1.5 text-xs bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-500 text-slate-900 font-medium"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="text-[10px] font-semibold text-slate-500 block mb-1">
                            Interest Rate (% APR)
                          </label>
                          <div className="relative">
                            <input
                              type="number"
                              min="0"
                              step="0.1"
                              value={item.interestRate}
                              onChange={(e) =>
                                handleUpdateDebt(item.id, 'interestRate', e.target.value)
                              }
                              placeholder="Annual %"
                              className="w-full px-2.5 py-1.5 text-xs bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-500 text-slate-900 font-medium"
                            />
                            <span className="absolute right-2.5 top-1.5 text-xs text-slate-400 font-medium">%</span>
                          </div>
                        </div>

                        <div>
                          <label className="text-[10px] font-semibold text-slate-500 block mb-1">
                            Min Payment (₹/mo)
                          </label>
                          <div className="relative">
                            <span className="absolute left-2.5 top-1.5 text-xs text-slate-400 font-medium">₹</span>
                            <input
                              type="number"
                              min="0"
                              value={item.minPayment}
                              onChange={(e) =>
                                handleUpdateDebt(item.id, 'minPayment', e.target.value)
                              }
                              placeholder="Min payment"
                              className="w-full pl-6 pr-2 py-1.5 text-xs bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-500 text-slate-900 font-medium"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleAddDebt}
                  className="w-full py-2.5 border-2 border-dashed border-slate-200 hover:border-emerald-500 rounded-xl text-xs font-semibold text-slate-600 hover:text-emerald-700 flex items-center justify-center gap-1.5 transition-colors bg-white hover:bg-emerald-50/30"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Another Debt</span>
                </button>
              </div>
            </div>

            {/* Transparent Methodology Box */}
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-600 text-xs space-y-1.5 leading-relaxed">
              <div className="flex items-center gap-1.5 font-semibold text-slate-800">
                <Info className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Simulation Convention & Disclosure</span>
              </div>
              <p>
                Monthly interest is accrued on the opening balance at{' '}
                <code className="text-slate-800 bg-slate-200/70 px-1 py-0.5 rounded text-[11px]">
                  APR / 1200
                </code>{' '}
                before payments. Scheduled minimum payments are satisfied across all debts first. Any
                remaining extra budget is focused on the top-priority loan. When a debt is retired, its
                minimum payment rolls over to accelerate the next loan. Final payments are capped to the exact
                remaining balance.
              </p>
            </div>

            {/* Generate Repayment Plan Button */}
            <div className="pt-2">
              <button
                type="button"
                onClick={runCalculation}
                disabled={loading}
                className="w-full py-3.5 px-6 rounded-xl bg-[#007AFF] hover:bg-blue-700 text-white font-bold text-sm sm:text-base transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
              >
                {loading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Generating Repayment Plan...</span>
                  </>
                ) : (
                  <>
                    <Calculator className="w-4 h-4" />
                    <span>{comparisonResult ? 'Regenerate Repayment Plan' : 'Generate Repayment Plan'}</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Strategic Results Dashboard */}
        <div className="lg:col-span-6 space-y-6">
          {/* Negative Amortization / Unpayable Alert */}
          {activeResult && !activeResult.isPayable ? (
            <div className="bg-rose-50 border-2 border-rose-200 rounded-2xl p-6 space-y-4">
              <div className="flex items-start gap-3">
                <ShieldAlert className="w-6 h-6 text-rose-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-base font-bold text-rose-900">
                    Debt Cannot Be Paid Off Under Current Assumptions
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-rose-800 leading-relaxed">
                    {activeResult.unpayableReason}
                  </p>
                </div>
              </div>

              <div className="p-4 bg-white/80 rounded-xl border border-rose-200 text-xs text-rose-900 space-y-2">
                <p className="font-semibold">Recommended Corrective Actions:</p>
                <ul className="list-disc pl-4 space-y-1 text-rose-800">
                  <li>Increase your extra monthly payment to exceed the monthly interest accrual.</li>
                  <li>
                    Verify that your minimum payments entered are at least 5% of credit card balances or
                    equal to bank EMI schedules.
                  </li>
                  <li>
                    If cashflow cannot cover interest, explore structured compromise debt settlement under
                    RBI norms.
                  </li>
                </ul>
              </div>

              <Link
                href="/services/loan-settlement"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-rose-600 text-white text-xs font-semibold hover:bg-rose-700 transition-colors shadow-sm"
              >
                <span>Check Debt Relief & Settlement Options</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          ) : activeResult ? (
            <>
              {/* Primary KPI Summary Cards */}
              <div className="grid grid-cols-2 gap-3.5">
                <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-700 text-white shadow-md space-y-1">
                  <span className="text-[11px] font-medium text-emerald-100 uppercase tracking-wider block">
                    Estimated Payoff Time
                  </span>
                  <div className="text-xl sm:text-2xl font-black">
                    {activeResult.formatted.totalMonths}
                  </div>
                  <span className="text-xs text-emerald-100 block">
                    Debt-free by: <strong>{activeResult.formatted.payoffDate}</strong>
                  </span>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-slate-900 text-white shadow-md space-y-1">
                  <span className="text-[11px] font-medium text-slate-300 uppercase tracking-wider block">
                    Total Interest Paid
                  </span>
                  <div className="text-xl sm:text-2xl font-black text-emerald-400">
                    {activeResult.formatted.totalInterest}
                  </div>
                  <span className="text-xs text-slate-300 block">
                    {activeResult.formatted.interestToPrincipalRatio} of original principal
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-0.5">
                  <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">
                    Total Amount Repaid
                  </span>
                  <div className="text-lg font-bold text-slate-900">
                    {activeResult.formatted.totalPayments}
                  </div>
                  <span className="text-[11px] text-slate-500">
                    Principal: {activeResult.formatted.totalPrincipal}
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-0.5">
                  <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">
                    Total Extra Contributed
                  </span>
                  <div className="text-lg font-bold text-emerald-700">
                    {activeResult.formatted.totalExtraContributed}
                  </div>
                  <span className="text-[11px] text-slate-500">Accelerated debt payoff</span>
                </div>
              </div>

              {/* Section 2: Strategy Comparison Matrix Card */}
              {comparisonResult && (
                <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                    <h2 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                      <Scale className="w-4 h-4 text-emerald-600" />
                      2. Avalanche vs Snowball: Strategic Payoff Comparison
                    </h2>
                    <span className="text-[11px] font-semibold text-slate-500">
                      Side-by-Side Analysis
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-xs">
                    {/* Avalanche Column */}
                    <div
                      className={`p-3.5 rounded-xl border space-y-2 ${
                        strategy === 'avalanche'
                          ? 'border-emerald-500 bg-emerald-50/30'
                          : 'border-slate-200 bg-slate-50/50'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-slate-900 flex items-center gap-1">
                          <Flame className="w-3.5 h-3.5 text-emerald-600" />
                          Avalanche
                        </span>
                        {comparisonResult.cheaperStrategy === 'avalanche' && (
                          <span className="text-[10px] font-bold bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded">
                            Lowest Cost
                          </span>
                        )}
                      </div>
                      <div className="space-y-1">
                        <div className="flex justify-between text-slate-600">
                          <span>Payoff Time:</span>
                          <strong className="text-slate-900">
                            {comparisonResult.avalanche.formatted.totalMonths}
                          </strong>
                        </div>
                        <div className="flex justify-between text-slate-600">
                          <span>Total Interest:</span>
                          <strong className="text-slate-900">
                            {comparisonResult.avalanche.formatted.totalInterest}
                          </strong>
                        </div>
                        <div className="flex justify-between text-slate-600">
                          <span>Total Paid:</span>
                          <strong className="text-slate-900">
                            {comparisonResult.avalanche.formatted.totalPayments}
                          </strong>
                        </div>
                        {comparisonResult.firstPayoffMilestone.avalanche && (
                          <div className="flex justify-between text-slate-600 pt-1 border-t border-slate-200/60">
                            <span>1st Debt Cleared:</span>
                            <span className="text-slate-900 font-medium">
                              Mo {comparisonResult.firstPayoffMilestone.avalanche.month} (
                              {comparisonResult.firstPayoffMilestone.avalanche.debtName})
                            </span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Snowball Column */}
                    <div
                      className={`p-3.5 rounded-xl border space-y-2 ${
                        strategy === 'snowball'
                          ? 'border-blue-500 bg-blue-50/30'
                          : 'border-slate-200 bg-slate-50/50'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-slate-900 flex items-center gap-1">
                          <Zap className="w-3.5 h-3.5 text-blue-600" />
                          Snowball
                        </span>
                        {comparisonResult.firstPayoffMilestone.snowball &&
                          comparisonResult.firstPayoffMilestone.avalanche &&
                          comparisonResult.firstPayoffMilestone.snowball.month <
                            comparisonResult.firstPayoffMilestone.avalanche.month && (
                            <span className="text-[10px] font-bold bg-blue-100 text-blue-800 px-1.5 py-0.5 rounded">
                              Earliest Win
                            </span>
                          )}
                      </div>
                      <div className="space-y-1">
                        <div className="flex justify-between text-slate-600">
                          <span>Payoff Time:</span>
                          <strong className="text-slate-900">
                            {comparisonResult.snowball.formatted.totalMonths}
                          </strong>
                        </div>
                        <div className="flex justify-between text-slate-600">
                          <span>Total Interest:</span>
                          <strong className="text-slate-900">
                            {comparisonResult.snowball.formatted.totalInterest}
                          </strong>
                        </div>
                        <div className="flex justify-between text-slate-600">
                          <span>Total Paid:</span>
                          <strong className="text-slate-900">
                            {comparisonResult.snowball.formatted.totalPayments}
                          </strong>
                        </div>
                        {comparisonResult.firstPayoffMilestone.snowball && (
                          <div className="flex justify-between text-slate-600 pt-1 border-t border-slate-200/60">
                            <span>1st Debt Cleared:</span>
                            <span className="text-slate-900 font-medium">
                              Mo {comparisonResult.firstPayoffMilestone.snowball.month} (
                              {comparisonResult.firstPayoffMilestone.snowball.debtName})
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Strategic Insight Takeaway */}
                  <div className="p-3 bg-emerald-50/60 border border-emerald-200 rounded-xl text-xs text-emerald-950 flex items-start gap-2">
                    <Sparkles className="w-4 h-4 text-emerald-700 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-emerald-900">Strategic Verdict</p>
                      <p className="mt-0.5 text-emerald-800">{comparisonResult.recommendation}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Section 3: Elimination Roadmap (Milestones) */}
              {activeResult.milestones.length > 0 && (
                <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                    <h2 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      3. Elimination Roadmap: Debt-by-Debt Payoff Milestones
                    </h2>
                    <span className="text-xs text-slate-500">
                      {activeResult.milestones.length} Milestones
                    </span>
                  </div>

                  <div className="relative pl-6 space-y-4 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-emerald-200">
                    {activeResult.milestones.map((m, idx) => (
                      <div key={m.debtId} className="relative flex items-start gap-3">
                        <div className="absolute -left-6 top-1 w-4 h-4 rounded-full bg-emerald-600 border-2 border-white flex items-center justify-center">
                          <Check className="w-2.5 h-2.5 text-white" />
                        </div>
                        <div className="bg-slate-50 rounded-xl p-3 border border-slate-200/80 w-full text-xs space-y-1">
                          <div className="flex items-center justify-between">
                            <span className="font-bold text-slate-900 text-sm">
                              #{idx + 1}: {m.debtName}
                            </span>
                            <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 font-bold rounded-full text-[11px]">
                              {m.payoffDate} (Month {m.payoffMonth})
                            </span>
                          </div>
                          <div className="flex items-center justify-between text-slate-500 text-[11px] pt-1">
                            <span>Balance Cleared: {formatINR(m.originalBalance)}</span>
                            <span>Interest Paid: {formatINR(m.totalInterestPaid)}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center shadow-xs">
              <div className="w-12 h-12 rounded-full bg-blue-50 text-[#007AFF] flex items-center justify-center mx-auto mb-3">
                <Calculator className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1">Awaiting Plan Generation</h3>
              <p className="text-xs text-slate-600 max-w-sm mx-auto">
                Customize your debt items and extra repayment budget on the left, then click &ldquo;Generate Repayment Plan&rdquo; to build your month-by-month debt-free roadmap.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Section 4: Full Month-by-Month Amortization Schedule Table */}
      {activeResult && activeResult.isPayable && activeResult.monthlySchedule.length > 0 && (
        <section className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 sm:p-6 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
            <div>
              <h2 className="text-base sm:text-lg font-bold text-slate-900">
                4. Monthly Amortization: Projected Repayment Schedule
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Simulated month-by-month trajectory under{' '}
                <strong className="text-slate-800 capitalize">{strategy}</strong> allocation.
              </p>
            </div>

            <div className="flex items-center gap-2 print:hidden">
              <div className="flex items-center rounded-lg bg-slate-100 p-0.5 text-xs font-medium text-slate-600">
                <button
                  type="button"
                  onClick={() => setScheduleViewLimit('12')}
                  className={`px-2.5 py-1 rounded-md transition-colors ${
                    scheduleViewLimit === '12' ? 'bg-white text-slate-900 shadow-sm font-semibold' : ''
                  }`}
                >
                  1 Year
                </button>
                <button
                  type="button"
                  onClick={() => setScheduleViewLimit('24')}
                  className={`px-2.5 py-1 rounded-md transition-colors ${
                    scheduleViewLimit === '24' ? 'bg-white text-slate-900 shadow-sm font-semibold' : ''
                  }`}
                >
                  2 Years
                </button>
                <button
                  type="button"
                  onClick={() => setScheduleViewLimit('all')}
                  className={`px-2.5 py-1 rounded-md transition-colors ${
                    scheduleViewLimit === 'all' ? 'bg-white text-slate-900 shadow-sm font-semibold' : ''
                  }`}
                >
                  All ({activeResult.totalMonths} Mo)
                </button>
              </div>

              <button
                type="button"
                onClick={handleDownloadCSV}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-lg transition-colors"
                title="Download CSV amortization file"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Export CSV</span>
              </button>
            </div>
          </div>

          <div className="overflow-x-auto -mx-5 sm:mx-0">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 text-slate-600 font-semibold border-y border-slate-200">
                <tr>
                  <th className="py-2.5 px-3">Month</th>
                  <th className="py-2.5 px-3">Date</th>
                  <th className="py-2.5 px-3 text-right">Opening Balance</th>
                  <th className="py-2.5 px-3 text-right">Interest</th>
                  <th className="py-2.5 px-3 text-right">Min Payment</th>
                  <th className="py-2.5 px-3 text-right">Extra Payment</th>
                  <th className="py-2.5 px-3 text-right">Total Paid</th>
                  <th className="py-2.5 px-3 text-right">Closing Balance</th>
                  <th className="py-2.5 px-3 text-center">Milestones</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700 font-medium">
                {visibleScheduleRows.map((row) => {
                  const isExpanded = expandedMonth === row.monthIndex;
                  const hasMilestone = row.debtsPaidOffThisMonth.length > 0;

                  return (
                    <React.Fragment key={row.monthIndex}>
                      <tr
                        className={`hover:bg-slate-50/80 transition-colors cursor-pointer ${
                          hasMilestone ? 'bg-emerald-50/40' : ''
                        }`}
                        onClick={() =>
                          setExpandedMonth(isExpanded ? null : row.monthIndex)
                        }
                      >
                        <td className="py-2.5 px-3 font-bold text-slate-900">
                          M{row.monthIndex}
                        </td>
                        <td className="py-2.5 px-3 text-slate-600 whitespace-nowrap">
                          {row.calendarDate}
                        </td>
                        <td className="py-2.5 px-3 text-right">
                          {formatINR(row.openingTotalBalance)}
                        </td>
                        <td className="py-2.5 px-3 text-right text-rose-600">
                          {formatINR(row.totalInterestAccrued)}
                        </td>
                        <td className="py-2.5 px-3 text-right">
                          {formatINR(row.totalMinPaymentApplied)}
                        </td>
                        <td className="py-2.5 px-3 text-right text-emerald-700 font-semibold">
                          {formatINR(row.totalExtraPaymentApplied)}
                        </td>
                        <td className="py-2.5 px-3 text-right font-bold text-slate-900">
                          {formatINR(row.totalPaymentApplied)}
                        </td>
                        <td className="py-2.5 px-3 text-right font-semibold text-slate-900">
                          {formatINR(row.endingTotalBalance)}
                        </td>
                        <td className="py-2.5 px-3 text-center whitespace-nowrap">
                          {hasMilestone ? (
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-emerald-100 text-emerald-800 text-[10px] font-bold rounded-full">
                              <Check className="w-2.5 h-2.5" />
                              {row.debtsPaidOffThisMonth.join(', ')} Cleared
                            </span>
                          ) : (
                            <span className="text-slate-400 text-[11px]">
                              {row.activeDebtCount} active
                            </span>
                          )}
                        </td>
                      </tr>

                      {/* Expandable Per-Debt Breakdown */}
                      {isExpanded && (
                        <tr className="bg-slate-50/90 text-slate-600 text-[11px]">
                          <td colSpan={9} className="p-3">
                            <div className="bg-white rounded-lg p-3 border border-slate-200 space-y-2">
                              <p className="font-bold text-slate-800 text-xs">
                                Debt-by-Debt Breakdown for {row.calendarDate} (Month {row.monthIndex}):
                              </p>
                              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                                {row.debtSnapshots.map((snap) => (
                                  <div
                                    key={snap.debtId}
                                    className="p-2 bg-slate-50 rounded border border-slate-100 space-y-1"
                                  >
                                    <div className="flex justify-between font-semibold text-slate-900">
                                      <span>{snap.debtName}</span>
                                      {snap.isPaidOffThisMonth && (
                                        <span className="text-emerald-700 text-[10px] font-bold">
                                          PAID OFF!
                                        </span>
                                      )}
                                    </div>
                                    <div className="flex justify-between text-slate-500">
                                      <span>Payment: {formatINR(snap.totalPaymentApplied)}</span>
                                      <span>Interest: {formatINR(snap.interestAccrued)}</span>
                                    </div>
                                    <div className="flex justify-between text-slate-700 font-medium">
                                      <span>Ending Bal:</span>
                                      <span>{formatINR(snap.endingBalance)}</span>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </td>
                        </tr>
                      )}
                    </React.Fragment>
                  );
                })}
              </tbody>
            </table>
          </div>

          {activeResult.monthlySchedule.length > visibleScheduleRows.length && (
            <div className="text-center pt-2 print:hidden">
              <button
                type="button"
                onClick={() => setScheduleViewLimit('all')}
                className="text-xs font-semibold text-emerald-700 hover:text-emerald-800 hover:underline inline-flex items-center gap-1"
              >
                <span>
                  Show all {activeResult.monthlySchedule.length} months in repayment schedule
                </span>
                <ChevronDown className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </section>
      )}

      {/* Section 5: Educational Framework */}
      <section className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6">
        <div>
          <h2 className="text-lg sm:text-xl font-bold text-slate-900">
            5. Financial Framework: How Debt Payoff Math Works
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
            Understanding the economic principles behind accelerated debt freedom in India.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-slate-600 leading-relaxed">
          <div className="space-y-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <Flame className="w-4 h-4 text-emerald-600" />
              Debt Avalanche Economics
            </h3>
            <p>
              In India, unsecured credit cards typically charge revolving annual finance charges of{' '}
              <strong>36% to 48% p.a.</strong>, while personal loans range from{' '}
              <strong>12% to 18% p.a.</strong> The Debt Avalanche method ensures that your highest
              cost money is extinguished first, saving the absolute maximum in cumulative interest.
            </p>
            <p>
              Avalanche is ideal for analytical borrowers who want to optimize their net worth and who
              can maintain disciplined payments without needing frequent small victories.
            </p>
          </div>

          <div className="space-y-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <Zap className="w-4 h-4 text-blue-600" />
              Debt Snowball Psychology
            </h3>
            <p>
              Pioneered in behavioral finance, the Snowball method ignores interest rates and attacks the
              smallest balance first. Eliminating an entire creditor from your life early delivers an
              immediate psychological boost, reduces mental clutter, and cuts down the number of monthly
              bills you manage.
            </p>
            <p>
              Snowball is ideal for borrowers feeling overwhelmed by multiple phone calls and monthly
              due dates who need tangible momentum to sustain debt repayment over 2 to 3 years.
            </p>
          </div>
        </div>
      </section>

      {/* Section 6: Severe Debt Stress Advisory */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-6 sm:p-8 space-y-4">
        <div className="flex items-start gap-3">
          <ShieldAlert className="w-6 h-6 text-amber-400 flex-shrink-0 mt-1" />
          <div className="space-y-2">
            <h2 className="text-base sm:text-lg font-bold text-white">
              6. Severe Debt Stress: When Repayment Is Not Viable
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl">
              Debt repayment calculators assume stable monthly income and consistent surplus cashflow. If
              your total monthly EMIs exceed 50% to 60% of your earnings, or if unexpected hardship (job
              loss, medical emergency, business loss) makes ongoing repayment impossible, attempting to pay
              only minimum dues can trap you in multi-year compound interest.
            </p>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl">
              Under RBI compromise settlement frameworks, distressed borrowers can legally close delinquent
              unsecured debts through a One-Time Settlement (OTS), saving 40% to 70% of outstanding claims
              and stopping recovery agent harassment.
            </p>
          </div>
        </div>

        <div className="pt-2 flex flex-wrap gap-3">
          <Link
            href="/tools/loan-settlement-calculator"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold transition-colors shadow-sm"
          >
            <span>Estimate Settlement Haircut</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
          <Link
            href="/services/loan-settlement"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors"
          >
            <span>Speak with a Debt Relief Advocate</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* Section 7: FAQ Accordion */}
      <section className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6">
        <div>
          <h2 className="text-lg sm:text-xl font-bold text-slate-900">
            Frequently Asked Questions: Debt Repayment Planning
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Common questions on amortizing multiple loans, rollover acceleration, and prepayment rules in India.
          </p>
        </div>

        <div className="divide-y divide-slate-200">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div key={index} className="py-4">
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  className="flex items-center justify-between w-full text-left gap-4"
                >
                  <span className="text-sm font-semibold text-slate-900">{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-500 transition-transform ${
                      isOpen ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {faq.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Legal Disclaimer */}
      <div className="p-4 rounded-xl bg-slate-100/70 border border-slate-200 text-center text-[11px] text-slate-500 leading-relaxed">
        <p>
          <strong>Disclaimer:</strong> This Debt Repayment Planner provides illustrative mathematical
          simulations based on user-supplied numbers, standard reducing-balance interest formulas, and
          assumed steady payment behavior. Actual bank statements may vary slightly due to daily interest
          day-count conventions (30/360 or actual/365), bank billing cycles, processing fees, GST on
          finance charges, or changes in floating repo rates. This calculation does not constitute a
          binding financial guarantee or loan agreement with any lender.
        </p>
      </div>
    </div>
  );
}
