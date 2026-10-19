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
  Plus,
  Trash2,
  TrendingDown,
  HelpCircle,
  Flame,
  Zap,
  PieChart,
  Scale,
  ShieldAlert,
  Calendar,
} from 'lucide-react';
import {
  calculateMultipleLoans,
  formatINR,
  formatPercentage,
  DEBT_PALETTE,
  type DebtRowInput,
  type LoanType,
  type MultipleLoanResult,
} from '@/lib/tools/calculators/multipleLoanCalculator';

interface ClientDebtRow {
  id: string;
  name: string;
  type: LoanType;
  balance: string; // string for controlled input
  interestRate: string; // string for controlled input (can be empty)
  monthlyPayment: string; // string for controlled input (can be empty)
}

const DEFAULT_DEBTS: ClientDebtRow[] = [
  {
    id: 'debt_sample_1',
    name: 'Personal Loan',
    type: 'Personal Loan',
    balance: '350000',
    interestRate: '14.5',
    monthlyPayment: '9800',
  },
  {
    id: 'debt_sample_2',
    name: 'Credit Card Outstanding',
    type: 'Credit Card',
    balance: '85000',
    interestRate: '42.0',
    monthlyPayment: '4250',
  },
  {
    id: 'debt_sample_3',
    name: 'Two-Wheeler / Auto Loan',
    type: 'Auto Loan',
    balance: '120000',
    interestRate: '11.0',
    monthlyPayment: '3900',
  },
];

const LOAN_TYPE_OPTIONS: LoanType[] = [
  'Personal Loan',
  'Credit Card',
  'Home Loan',
  'Auto Loan',
  'Education Loan',
  'Gold Loan',
  'Consumer Durable',
  'Business Loan',
  'Other Debt',
];

export default function MultipleLoanCalculatorClient() {
  const [debts, setDebts] = useState<ClientDebtRow[]>(DEFAULT_DEBTS);
  const [result, setResult] = useState<MultipleLoanResult | null>(null);
  const [calculationId, setCalculationId] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [validationError, setValidationError] = useState<string | null>(null);
  const [copied, setCopied] = useState<boolean>(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [strategyView, setStrategyView] = useState<'avalanche' | 'snowball'>('avalanche');

  // Convert client rows to sanitized numeric array
  const sanitizeRows = useCallback((rows: ClientDebtRow[]): DebtRowInput[] => {
    return rows.map((r, idx) => ({
      id: r.id || `debt_${idx}`,
      name: r.name.trim() !== '' ? r.name.trim() : `Debt #${idx + 1}`,
      type: r.type,
      balance: parseFloat(r.balance) || 0,
      interestRate: r.interestRate.trim() !== '' ? parseFloat(r.interestRate) : null,
      monthlyPayment: r.monthlyPayment.trim() !== '' ? parseFloat(r.monthlyPayment) : null,
    }));
  }, []);

  // Compute scenario instantly on client + debounced sync with backend
  const computeScenario = useCallback(
    async (rows: ClientDebtRow[]) => {
      // Basic validation
      if (rows.length === 0) {
        setValidationError('Please keep at least one debt row.');
        setResult(null);
        return;
      }

      // Check if any row has empty or zero balance
      const hasInvalidBalance = rows.some((r) => {
        const bal = parseFloat(r.balance);
        return isNaN(bal) || bal <= 0;
      });

      if (hasInvalidBalance) {
        setValidationError('Each debt row must have an outstanding balance greater than ₹0.');
        setResult(null);
        return;
      }

      // Check for negative rates or payments
      const hasNegative = rows.some((r) => {
        const rate = r.interestRate.trim() !== '' ? parseFloat(r.interestRate) : 0;
        const pmt = r.monthlyPayment.trim() !== '' ? parseFloat(r.monthlyPayment) : 0;
        return rate < 0 || pmt < 0;
      });

      if (hasNegative) {
        setValidationError('Interest rates and monthly payments cannot be negative values.');
        setResult(null);
        return;
      }

      setValidationError(null);

      // Perform fast local calculation
      const numericDebts = sanitizeRows(rows);
      const computed = calculateMultipleLoans(numericDebts);
      setResult(computed);

      // Debounced backend sync for session logging and verification
      try {
        setLoading(true);
        const res = await fetch('/api/tools/multiple-loan-calculator', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ debts: numericDebts }),
        });
        const data = await res.json();
        if (res.ok && data.success) {
          if (data.calculationId) {
            setCalculationId(data.calculationId);
          }
        }
      } catch (err) {
        // Silent catch: local calculation remains completely active
        console.warn('API sync deferred:', err);
      } finally {
        setLoading(false);
      }
    },
    [sanitizeRows]
  );

  // Row manipulation handlers
  const handleAddDebt = () => {
    const newRow: ClientDebtRow = {
      id: `debt_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
      name: `Loan ${debts.length + 1}`,
      type: 'Personal Loan',
      balance: '100000',
      interestRate: '12.0',
      monthlyPayment: '3000',
    };
    const updated = [...debts, newRow];
    setDebts(updated);
  };

  const handleRemoveDebt = (idToRemove: string) => {
    if (debts.length <= 1) {
      setValidationError('You must have at least one debt row.');
      return;
    }
    const updated = debts.filter((d) => d.id !== idToRemove);
    setDebts(updated);
  };

  const handleRowChange = (id: string, field: keyof ClientDebtRow, value: string) => {
    const updated = debts.map((d) => {
      if (d.id === id) {
        return { ...d, [field]: value };
      }
      return d;
    });
    setDebts(updated);
  };

  const handleResetToDefault = () => {
    setDebts(DEFAULT_DEBTS);
    setResult(null);
    setValidationError(null);
  };

  const handleClearAll = () => {
    const emptyRow: ClientDebtRow = {
      id: `debt_${Date.now()}`,
      name: 'Personal Loan',
      type: 'Personal Loan',
      balance: '',
      interestRate: '',
      monthlyPayment: '',
    };
    setDebts([emptyRow]);
    setResult(null);
    setValidationError(null);
  };

  // Copy summary to clipboard
  const handleCopySummary = async () => {
    if (!result) return;

    let text = `CredSettle - Multiple Loan Debt Portfolio Summary\n`;
    text += `===============================================\n`;
    text += `Total Outstanding Debt: ${result.formatted.totalDebt} (${result.debtCount} debts)\n`;
    text += `Combined Monthly Payment: ${result.formatted.totalMonthlyPayment} [${result.formatted.paymentCompletenessLabel}]\n`;
    text += `Weighted Average APR: ${result.formatted.weightedAverageRate} [${result.formatted.rateCompletenessLabel}]\n`;
    if (result.totalEstimatedAnnualInterest !== null) {
      text += `Estimated Annual Interest Cost: ${result.formatted.totalEstimatedAnnualInterest}\n`;
    }
    text += `\nItemized Breakdown:\n`;
    result.items.forEach((item, idx) => {
      text += `${idx + 1}. ${item.name} (${item.type})\n`;
      text += `   - Balance: ${item.formatted.balance} (${item.formatted.sharePercentage} of total)\n`;
      text += `   - Interest Rate: ${item.formatted.interestRate}\n`;
      text += `   - Monthly Payment: ${item.formatted.monthlyPayment}\n`;
    });

    if (result.highestRateDebt) {
      text += `\nAvalanche Target (Highest APR): ${result.highestRateDebt.name} at ${result.highestRateDebt.rate}% p.a.\n`;
    }
    if (result.smallestBalanceDebt) {
      text += `Snowball Target (Smallest Balance): ${result.smallestBalanceDebt.name} (${formatINR(result.smallestBalanceDebt.balance)})\n`;
    }

    text += `\nCalculated using CredSettle Free Debt Tools: https://www.credsettle.com/tools/multiple-loan-calculator`;

    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error('Failed to copy summary:', err);
    }
  };

  // FAQ items for multiple debt consolidation & management
  const faqs = [
    {
      q: 'How does the multiple loan debt calculator calculate weighted average interest rate?',
      a: 'The weighted average interest rate (portfolio APR) reflects the true cost of your overall debt by weighting each loan rate by its outstanding principal balance. The formula multiplies each loan balance by its interest rate, sums these products, and divides by the total principal of loans with known rates. If any loan rate is omitted, the portfolio rate is labeled as partial or unavailable to prevent misleading borrowers.',
    },
    {
      q: 'What is the difference between the Debt Avalanche and Debt Snowball repayment strategies?',
      a: 'The Debt Avalanche method focuses on repaying the debt with the highest interest rate (APR) first while paying minimums on others, mathematically minimizing total interest paid. The Debt Snowball method prioritizes repaying the debt with the smallest balance first, giving you quick psychological wins and freeing up monthly cash flow fastest.',
    },
    {
      q: 'Should I consolidate multiple credit cards and personal loans into a single loan?',
      a: 'Debt consolidation into a single personal loan, gold loan, or loan against property (LAP) can reduce your monthly EMI and simplify payments if the new loan interest rate is lower than your current weighted average rate. However, ensure that loan processing fees, prepayment penalties on existing loans, and extended loan tenures do not inflate your total repayment amount.',
    },
    {
      q: 'Why does the tool warn me about partial monthly payments or missing interest rates?',
      a: 'Under CredSettle transparent calculation standards, we never silently assume that an omitted field is 0% or ₹0. If you do not enter a monthly EMI for one of your loans, stating a single total payment would understate your true financial burden. The calculator therefore explicitly identifies missing figures and highlights partial totals.',
    },
    {
      q: 'What should I do if my total monthly EMIs exceed 50% of my net income?',
      a: 'A debt-to-income (DTI) ratio exceeding 50% indicates severe debt stress. In such cases, options include debt restructuring with lenders under RBI guidelines, tenure extension to lower monthly EMIs, balance transfer to lower-rate facilities, or formal debt settlement if you are facing genuine financial hardship and insolvency.',
    },
  ];

  return (
    <div className="space-y-12">
      {/* TOOL HERO HEADER */}
      <section className="text-center max-w-3xl mx-auto space-y-4 print:hidden">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-semibold text-[#007AFF]">
          <Layers className="w-3.5 h-3.5" />
          <span>Debt Management & Portfolio Consolidation</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0C2756] tracking-tight">
          Multiple Loan Debt Calculator
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Combine all your personal loans, credit card balances, and EMIs into a unified dashboard.
          Identify your true weighted interest rate, compare repayment strategies, and find your biggest debt burdens.
        </p>
      </section>

      {/* MAIN TWO-COLUMN CALCULATOR WORKSPACE */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* LEFT COLUMN: DYNAMIC DEBT REPEATER FORM (5 Cols, sticky on desktop) */}
        <div className="lg:col-span-5 lg:sticky lg:top-24 lg:self-start lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto custom-scrollbar bg-white rounded-3xl border border-slate-200 p-5 sm:p-7 shadow-xs space-y-6 print:hidden">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div>
              <h2 className="text-lg font-bold text-[#0C2756] flex items-center gap-2">
                <span>Your Debts & EMIs</span>
                <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700">
                  {debts.length} {debts.length === 1 ? 'Debt' : 'Debts'}
                </span>
              </h2>
              <p className="text-xs text-slate-500">Add all active loans and credit facilities</p>
            </div>

            <div className="flex items-center gap-1 text-xs">
              <button
                type="button"
                onClick={handleResetToDefault}
                className="px-2.5 py-1 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
                title="Reset to sample debts"
              >
                Sample
              </button>
              <button
                type="button"
                onClick={handleClearAll}
                className="px-2.5 py-1 text-rose-600 hover:text-rose-700 hover:bg-rose-50 rounded-lg transition-colors cursor-pointer"
                title="Clear all fields"
              >
                Clear
              </button>
            </div>
          </div>

          {/* Validation Banner if any */}
          {validationError && (
            <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-rose-600" />
              <div className="leading-relaxed">{validationError}</div>
            </div>
          )}

          {/* Repeatable Debt Rows Container */}
          <div className="space-y-4 max-h-[640px] overflow-y-auto pr-1">
            {debts.map((debt, index) => {
              const color = DEBT_PALETTE[index % DEBT_PALETTE.length];
              return (
                <div
                  key={debt.id}
                  className="p-4 rounded-2xl border border-slate-200 bg-slate-50/70 hover:bg-slate-50 transition-all space-y-3 relative group"
                >
                  {/* Row Header: Number badge, Name input, Type selector & Delete */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2 flex-grow">
                      <span
                        style={{ backgroundColor: color }}
                        className="w-5 h-5 rounded-full text-white text-[11px] font-black flex items-center justify-center shrink-0 shadow-2xs"
                      >
                        {index + 1}
                      </span>
                      <input
                        type="text"
                        value={debt.name}
                        onChange={(e) => handleRowChange(debt.id, 'name', e.target.value)}
                        placeholder={`Debt #${index + 1} Nickname`}
                        className="w-full text-xs sm:text-sm font-semibold text-slate-900 bg-transparent border-b border-dashed border-slate-300 focus:border-[#007AFF] focus:bg-white focus:outline-hidden px-1 py-0.5 rounded transition-all"
                      />
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0">
                      <select
                        value={debt.type}
                        onChange={(e) =>
                          handleRowChange(debt.id, 'type', e.target.value as LoanType)
                        }
                        className="text-[11px] font-medium text-slate-700 bg-white border border-slate-200 rounded-lg px-2 py-1 focus:ring-1 focus:ring-[#007AFF] focus:outline-hidden"
                      >
                        {LOAN_TYPE_OPTIONS.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>

                      {debts.length > 1 && (
                        <button
                          type="button"
                          onClick={() => handleRemoveDebt(debt.id)}
                          className="p-1 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-colors cursor-pointer"
                          title="Remove this debt"
                          aria-label={`Remove debt ${debt.name}`}
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Input Fields Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
                    {/* Field 1: Outstanding Balance (Required) */}
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                        Balance (₹) <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400">
                          ₹
                        </span>
                        <input
                          type="number"
                          min="1"
                          step="1000"
                          placeholder="0"
                          value={debt.balance}
                          onChange={(e) => handleRowChange(debt.id, 'balance', e.target.value)}
                          className={`w-full pl-6 pr-2 py-1.5 text-xs font-bold text-slate-900 bg-white border rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#007AFF] ${
                            !debt.balance || parseFloat(debt.balance) <= 0
                              ? 'border-rose-300 bg-rose-50/20'
                              : 'border-slate-200'
                          }`}
                        />
                      </div>
                    </div>

                    {/* Field 2: Annual Interest Rate (Optional) */}
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <label className="block text-[11px] font-semibold text-slate-700">
                          Rate (% p.a.)
                        </label>
                        {debt.interestRate === '' && (
                          <span className="text-[10px] text-amber-600 font-semibold">Unknown</span>
                        )}
                      </div>
                      <div className="relative">
                        <input
                          type="number"
                          min="0"
                          max="100"
                          step="0.1"
                          placeholder="e.g. 14.5"
                          value={debt.interestRate}
                          onChange={(e) =>
                            handleRowChange(debt.id, 'interestRate', e.target.value)
                          }
                          className="w-full pl-2.5 pr-6 py-1.5 text-xs font-semibold text-slate-900 bg-white border border-slate-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#007AFF]"
                        />
                        <span className="absolute right-2 top-1/2 -translate-y-1/2 text-[11px] font-bold text-slate-400">
                          %
                        </span>
                      </div>
                    </div>

                    {/* Field 3: Monthly EMI / Payment (Optional) */}
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <label className="block text-[11px] font-semibold text-slate-700">
                          Monthly EMI
                        </label>
                        {debt.monthlyPayment === '' && (
                          <span className="text-[10px] text-amber-600 font-semibold">Unknown</span>
                        )}
                      </div>
                      <div className="relative">
                        <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400">
                          ₹
                        </span>
                        <input
                          type="number"
                          min="0"
                          step="100"
                          placeholder="e.g. 5000"
                          value={debt.monthlyPayment}
                          onChange={(e) =>
                            handleRowChange(debt.id, 'monthlyPayment', e.target.value)
                          }
                          className="w-full pl-6 pr-2 py-1.5 text-xs font-semibold text-slate-900 bg-white border border-slate-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#007AFF]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Add Row Button */}
          <button
            type="button"
            onClick={handleAddDebt}
            className="w-full py-3 rounded-2xl border-2 border-dashed border-blue-200 hover:border-[#007AFF] bg-blue-50/50 hover:bg-blue-50 text-xs sm:text-sm font-bold text-[#007AFF] flex items-center justify-center gap-2 transition-all cursor-pointer shadow-2xs"
          >
            <Plus className="w-4 h-4" />
            <span>Add Another Loan or Debt</span>
          </button>

          {/* Calculate Portfolio Button */}
          <button
            type="button"
            onClick={() => computeScenario(debts)}
            disabled={loading}
            className="w-full py-3.5 px-6 rounded-xl bg-[#007AFF] hover:bg-blue-700 text-white font-bold text-sm sm:text-base transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
          >
            {loading ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>Calculating Portfolio...</span>
              </>
            ) : (
              <>
                <Calculator className="w-4 h-4" />
                <span>{result ? 'Recalculate Debt Portfolio' : 'Calculate Total Debt & Payoff'}</span>
              </>
            )}
          </button>

          <p className="text-[11px] text-slate-400 text-center leading-relaxed">
            Rates and monthly EMIs are optional. Leave blank if unknown; the tool will label them explicitly.
          </p>
        </div>

        {/* RIGHT COLUMN: ANALYTICS & DASHBOARD (7 Cols) */}
        <div className="lg:col-span-7 space-y-6 print:w-full print:m-0 print:p-0 print:space-y-4">
          {result ? (
            <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6 print:border-0 print:p-0 print:shadow-none print:space-y-4">
              {/* PRINT ONLY STATEMENT HEADER */}
              <div className="hidden print:block pb-4 mb-4 border-b-2 border-slate-900">
                <div className="flex items-center justify-between">
                  <div>
                    <h1 className="text-2xl font-black text-[#0C2756] tracking-tight">CredSettle</h1>
                    <p className="text-xs text-slate-600 font-semibold">
                      Consolidated Debt Portfolio & Repayment Strategy Statement
                    </p>
                  </div>
                </div>
                <div className="mt-3 p-3 bg-slate-50 rounded-lg border border-slate-200 grid grid-cols-3 gap-2 text-xs">
                  <div>
                    <span className="font-semibold text-slate-700">Total Debt:</span>{' '}
                    {result.formatted.totalDebt}
                  </div>
                  <div>
                    <span className="font-semibold text-slate-700">Combined Payment:</span>{' '}
                    {result.formatted.totalMonthlyPayment}
                  </div>
                  <div>
                    <span className="font-semibold text-slate-700">Weighted APR:</span>{' '}
                    {result.formatted.weightedAverageRate}
                  </div>
                </div>
              </div>

              {/* ACTION TOOLBAR: Copy & Print */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100 print:hidden">
                <div>
                  <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200 mb-1">
                    <Check className="w-3.5 h-3.5" />
                    <span>Consolidated Portfolio</span>
                  </div>
                  <h2 className="text-xl font-bold text-[#0C2756]">Combined Debt Summary</h2>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handleCopySummary}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer"
                    title="Copy summary to clipboard"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-600 font-bold">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-slate-600" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={() => window.print()}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer"
                    title="Print portfolio report"
                  >
                    <Printer className="w-3.5 h-3.5 text-slate-600" />
                    <span>Print</span>
                  </button>
                </div>
              </div>

              {/* THREE HEADLINE METRIC CARDS */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 print:grid-cols-3 print:gap-3">
                {/* Metric 1: Total Debt (Hero) */}
                <div className="p-4 rounded-2xl bg-blue-50/80 border border-blue-200">
                  <div className="text-[11px] font-semibold text-blue-700 uppercase tracking-wider mb-1">
                    Total Outstanding Debt
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-[#0C2756]">
                    {result.formatted.totalDebt}
                  </div>
                  <div className="text-[11px] text-blue-800 font-medium mt-1">
                    Across {result.debtCount} {result.debtCount === 1 ? 'account' : 'accounts'}
                  </div>
                </div>

                {/* Metric 2: Combined Monthly Payment */}
                <div
                  className={`p-4 rounded-2xl border ${
                    result.paymentCompleteness === 'full'
                      ? 'bg-emerald-50/70 border-emerald-200'
                      : 'bg-amber-50/70 border-amber-200'
                  }`}
                >
                  <div
                    className={`text-[11px] font-semibold uppercase tracking-wider mb-1 ${
                      result.paymentCompleteness === 'full' ? 'text-emerald-700' : 'text-amber-700'
                    }`}
                  >
                    Monthly Outflow
                  </div>
                  <div
                    className={`text-xl sm:text-2xl font-black ${
                      result.paymentCompleteness === 'full' ? 'text-emerald-900' : 'text-amber-900'
                    }`}
                  >
                    {result.formatted.totalMonthlyPayment}
                  </div>
                  <div
                    className={`text-[10px] font-semibold mt-1 inline-flex items-center gap-1 px-1.5 py-0.5 rounded-md ${
                      result.paymentCompleteness === 'full'
                        ? 'bg-emerald-100/60 text-emerald-800'
                        : 'bg-amber-100/60 text-amber-800'
                    }`}
                  >
                    {result.formatted.paymentCompletenessLabel}
                  </div>
                </div>

                {/* Metric 3: Weighted Average APR */}
                <div
                  className={`p-4 rounded-2xl border ${
                    result.rateCompleteness === 'full'
                      ? 'bg-slate-50 border-slate-200'
                      : 'bg-amber-50/60 border-amber-200'
                  }`}
                >
                  <div className="text-[11px] font-semibold text-slate-600 uppercase tracking-wider mb-1">
                    Weighted Interest (APR)
                  </div>
                  <div className="text-xl sm:text-2xl font-black text-slate-800">
                    {result.formatted.weightedAverageRate}
                  </div>
                  <div className="text-[10px] text-slate-600 font-medium mt-1">
                    {result.formatted.rateCompletenessLabel}
                  </div>
                </div>
              </div>

              {/* WARNING CALLOUTS FOR INCOMPLETE DATA */}
              {result.warnings.length > 0 && (
                <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 space-y-1.5 print:hidden">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-amber-800">
                    <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>Incomplete Data Notice</span>
                  </div>
                  <ul className="text-xs text-amber-900 space-y-1 pl-5 list-disc">
                    {result.warnings.map((warn, wIdx) => (
                      <li key={wIdx}>{warn}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* STRATEGIC INSIGHTS: Avalanche vs Snowball Targets */}
              <div className="space-y-3 pt-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#007AFF]" />
                    <span>Payoff Strategy Insights</span>
                  </h3>

                  <div className="inline-flex rounded-lg border border-slate-200 p-0.5 bg-slate-100 text-xs print:hidden">
                    <button
                      type="button"
                      onClick={() => setStrategyView('avalanche')}
                      className={`px-2.5 py-0.5 rounded-md font-semibold transition-all cursor-pointer ${
                        strategyView === 'avalanche'
                          ? 'bg-white text-[#007AFF] shadow-xs'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      Avalanche (Lowest Cost)
                    </button>
                    <button
                      type="button"
                      onClick={() => setStrategyView('snowball')}
                      className={`px-2.5 py-0.5 rounded-md font-semibold transition-all cursor-pointer ${
                        strategyView === 'snowball'
                          ? 'bg-white text-[#007AFF] shadow-xs'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      Snowball (Fastest Wins)
                    </button>
                  </div>
                </div>

                {strategyView === 'avalanche' ? (
                  <div className="p-4 rounded-2xl bg-rose-50/60 border border-rose-200 flex items-start gap-3">
                    <div className="p-2 rounded-xl bg-rose-100 text-rose-700 shrink-0">
                      <Flame className="w-5 h-5" />
                    </div>
                    <div className="space-y-1 text-xs">
                      <div className="font-bold text-rose-900 flex items-center gap-1.5">
                        <span>Top Avalanche Priority:</span>
                        {result.highestRateDebt ? (
                          <span className="underline decoration-rose-300">
                            {result.highestRateDebt.name} ({result.highestRateDebt.rate}% p.a.)
                          </span>
                        ) : (
                          <span className="text-slate-600">Rate data required</span>
                        )}
                      </div>
                      <p className="text-rose-800 leading-relaxed">
                        {result.highestRateDebt ? (
                          <>
                            Carries your highest interest rate on an outstanding balance of{' '}
                            <strong>{formatINR(result.highestRateDebt.balance)}</strong>. Directing any extra
                            cash toward this debt first saves the most money in compounding charges.
                          </>
                        ) : (
                          'Add interest rates to all debt rows to uncover which loan is accumulating the heaviest interest burden.'
                        )}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200 flex items-start gap-3">
                    <div className="p-2 rounded-xl bg-emerald-100 text-emerald-700 shrink-0">
                      <Zap className="w-5 h-5" />
                    </div>
                    <div className="space-y-1 text-xs">
                      <div className="font-bold text-emerald-900 flex items-center gap-1.5">
                        <span>Top Snowball Priority:</span>
                        {result.smallestBalanceDebt ? (
                          <span className="underline decoration-emerald-300">
                            {result.smallestBalanceDebt.name} (
                            {formatINR(result.smallestBalanceDebt.balance)})
                          </span>
                        ) : (
                          <span className="text-slate-600">N/A</span>
                        )}
                      </div>
                      <p className="text-emerald-800 leading-relaxed">
                        {result.smallestBalanceDebt ? (
                          <>
                            Your smallest balance ({result.smallestBalanceDebt.sharePercentage}% of total).
                            Paying this off first eliminates 1 recurring monthly obligation completely,
                            giving you rapid psychological momentum.
                          </>
                        ) : (
                          'Enter debt balances to view snowball acceleration targets.'
                        )}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* VISUAL PORTFOLIO BREAKDOWN: Multi-segment bar + Legend */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center justify-between text-xs font-semibold text-slate-700">
                  <span className="flex items-center gap-1.5">
                    <PieChart className="w-3.5 h-3.5 text-slate-500" />
                    <span>Debt Balance Distribution</span>
                  </span>
                  <span>{result.formatted.totalDebt} Total</span>
                </div>

                {/* Proportional Segment Bar */}
                <div className="h-4 rounded-full bg-slate-100 flex overflow-hidden border border-slate-200">
                  {result.items.map((item) => (
                    <div
                      key={item.id}
                      style={{
                        width: `${item.sharePercentage}%`,
                        backgroundColor: item.color,
                      }}
                      className="h-full transition-all hover:opacity-90"
                      title={`${item.name}: ${item.formatted.balance} (${item.formatted.sharePercentage})`}
                    />
                  ))}
                </div>

                {/* Segment Legend */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-1 text-xs">
                  {result.items.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center gap-2 p-1.5 rounded-lg bg-slate-50 border border-slate-100"
                    >
                      <span
                        style={{ backgroundColor: item.color }}
                        className="w-2.5 h-2.5 rounded-full shrink-0"
                      />
                      <div className="truncate">
                        <span className="font-semibold text-slate-800 truncate block">
                          {item.name}
                        </span>
                        <span className="text-[11px] text-slate-500">
                          {item.formatted.balance} ({item.formatted.sharePercentage})
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* ITEMIZED DEBT BREAKDOWN TABLE */}
              <div className="space-y-3 pt-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Itemized Portfolio Breakdown
                  </h3>
                  {result.totalEstimatedAnnualInterest !== null && (
                    <span className="text-xs text-slate-500 font-medium">
                      Est. Annual Interest:{' '}
                      <strong className="text-slate-800">
                        {result.formatted.totalEstimatedAnnualInterest}
                      </strong>
                    </span>
                  )}
                </div>

                <div className="overflow-x-auto rounded-2xl border border-slate-200">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 font-semibold uppercase tracking-wider">
                      <tr>
                        <th className="py-2.5 px-3">Debt / Facility</th>
                        <th className="py-2.5 px-3">Balance</th>
                        <th className="py-2.5 px-3">Portfolio Share</th>
                        <th className="py-2.5 px-3">Interest Rate</th>
                        <th className="py-2.5 px-3">Monthly EMI</th>
                        <th className="py-2.5 px-3 text-right">Est. Annual Interest</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-700">
                      {result.items.map((item) => (
                        <tr key={item.id} className="hover:bg-slate-50/50 transition-colors">
                          <td className="py-2.5 px-3 font-semibold text-slate-900">
                            <div className="flex items-center gap-1.5">
                              <span
                                style={{ backgroundColor: item.color }}
                                className="w-2 h-2 rounded-full shrink-0"
                              />
                              <div>
                                <span>{item.name}</span>
                                <span className="block text-[10px] text-slate-400 font-normal">
                                  {item.type}
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="py-2.5 px-3 font-bold text-slate-900">
                            {item.formatted.balance}
                          </td>
                          <td className="py-2.5 px-3 text-slate-600">
                            {item.formatted.sharePercentage}
                          </td>
                          <td className="py-2.5 px-3">
                            {item.interestRate !== null ? (
                              <span
                                className={`font-semibold ${
                                  item.interestRate >= 24
                                    ? 'text-rose-600 font-bold'
                                    : 'text-slate-800'
                                }`}
                              >
                                {item.formatted.interestRate}
                              </span>
                            ) : (
                              <span className="text-slate-400 italic">Unspecified</span>
                            )}
                          </td>
                          <td className="py-2.5 px-3">
                            {item.monthlyPayment !== null && item.monthlyPayment > 0 ? (
                              <span className="font-semibold text-slate-800">
                                {item.formatted.monthlyPayment}
                              </span>
                            ) : (
                              <span className="text-slate-400 italic">Unspecified</span>
                            )}
                          </td>
                          <td className="py-2.5 px-3 text-right font-medium text-slate-800">
                            {item.formatted.annualInterestCost}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                    <tfoot className="bg-slate-50/80 border-t-2 border-slate-200 font-bold text-slate-900">
                      <tr>
                        <td className="py-2.5 px-3">Total Portfolio</td>
                        <td className="py-2.5 px-3 text-[#0C2756]">{result.formatted.totalDebt}</td>
                        <td className="py-2.5 px-3">100.0%</td>
                        <td className="py-2.5 px-3 text-slate-700">
                          {result.formatted.weightedAverageRate}
                        </td>
                        <td className="py-2.5 px-3 text-emerald-800">
                          {result.formatted.totalMonthlyPayment}
                        </td>
                        <td className="py-2.5 px-3 text-right text-slate-800">
                          {result.formatted.totalEstimatedAnnualInterest}
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>

              {/* NON-BLOCKING CONSULTATION CTA CARD */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-blue-900 to-[#0C2756] text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4 print:hidden shadow-xs">
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-1 text-[11px] font-semibold text-blue-200">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Free Financial Assessment</span>
                  </div>
                  <h4 className="text-base font-bold text-white">
                    Need Help Managing Multiple Loan EMIs?
                  </h4>
                  <p className="text-xs text-blue-100 max-w-md leading-relaxed">
                    If multiple debt payments are stretching your monthly budget, explore RBI-compliant
                    restructuring, debt consolidation, or formal debt settlement options.
                  </p>
                </div>

                <Link
                  href="/contact"
                  className="px-5 py-3 rounded-xl bg-[#007AFF] hover:bg-blue-600 text-white font-bold text-xs sm:text-sm transition-all whitespace-nowrap flex items-center gap-2 cursor-pointer shadow-sm hover:shadow-md shrink-0"
                >
                  <span>Request Free Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center shadow-xs">
              <div className="w-12 h-12 rounded-full bg-blue-50 text-[#007AFF] flex items-center justify-center mx-auto mb-3">
                <Calculator className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1">Awaiting Calculation</h3>
              <p className="text-xs text-slate-600 max-w-sm mx-auto">
                Add your loans and debts on the left, then click &ldquo;Calculate Total Debt &amp; Payoff&rdquo; to view your consolidated analysis.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* EDUCATIONAL & STRATEGY SECTION */}
      <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-xs space-y-8 print:hidden">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-[#0C2756] mb-2">
            Managing Multiple Debts in India: Strategies & Rules
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Borrowers managing multiple credit cards, NBFC loans, and bank personal loans often face
            overlapping billing cycles and spiraling interest rates. Here is how financial counselors approach
            portfolio consolidation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2.5">
            <div className="w-8 h-8 rounded-lg bg-blue-100 text-[#007AFF] flex items-center justify-center font-bold text-sm">
              1
            </div>
            <h3 className="text-sm font-bold text-slate-900">Debt Consolidation Loan</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Consolidating several unsecured credit lines into a single lower-interest secured or personal loan
              replaces multiple EMIs with one payment and can lower your overall weighted APR.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-sm">
              2
            </div>
            <h3 className="text-sm font-bold text-slate-900">The Avalanche Strategy</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Prioritize paying minimums on all accounts while deploying every extra rupee toward the account
              with the highest APR (typically credit cards charging 36%–45% p.a.). This saves the most money mathematically.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-sm">
              3
            </div>
            <h3 className="text-sm font-bold text-slate-900">Hardship Compromise Settlement</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              If your total debt burden exceeds your repayment capability due to job loss, medical emergency,
              or business distress, RBI compromise frameworks permit one-time negotiated settlements with lenders.
            </p>
          </div>
        </div>

        {/* RELATED TOOLS QUICK LINKS */}
        <div className="pt-4 border-t border-slate-100">
          <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
            Related Financial Calculators
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link
              href="/tools/loan-settlement-calculator"
              className="p-3.5 rounded-xl border border-slate-200 hover:border-[#007AFF] hover:bg-blue-50/30 transition-all flex items-center justify-between group"
            >
              <div>
                <div className="text-xs font-bold text-slate-900 group-hover:text-[#007AFF]">
                  Loan Settlement Calculator
                </div>
                <div className="text-[11px] text-slate-500">
                  Estimate one-time settlement payouts and bank haircuts
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#007AFF] transition-colors" />
            </Link>

            <Link
              href="/tools/emi-calculator"
              className="p-3.5 rounded-xl border border-slate-200 hover:border-[#007AFF] hover:bg-blue-50/30 transition-all flex items-center justify-between group"
            >
              <div>
                <div className="text-xs font-bold text-slate-900 group-hover:text-[#007AFF]">
                  Loan EMI Calculator & Schedule
                </div>
                <div className="text-[11px] text-slate-500">
                  Detailed reducing balance amortization schedules
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#007AFF] transition-colors" />
            </Link>
          </div>
        </div>
      </section>

      {/* INTERACTIVE FAQ ACCORDION */}
      <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-xs space-y-6 print:hidden">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-[#0C2756] mb-1">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Answers to common questions regarding multiple loan management and calculations in India.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="border border-slate-200 rounded-2xl overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 bg-slate-50/50 hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  <span className="text-xs sm:text-sm font-bold text-[#0C2756]">{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-500 shrink-0 transition-transform ${
                      isOpen ? 'rotate-180 text-[#007AFF]' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="p-4 sm:p-5 text-xs sm:text-sm text-slate-600 bg-white border-t border-slate-100 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
